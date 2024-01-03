const BookListContainer = document.querySelector(".container");
const AddBookButton = document.querySelector("#add-book");
const Dialog = document.querySelector("dialog");
const NewBookForm = document.querySelector("#new-book-form");

const BookList = document.querySelector("#book-list");

AddBookButton.addEventListener("click", () => Dialog.showModal());
NewBookForm.addEventListener("submit", submitNewBookForm);
Dialog.addEventListener("click", closeOnClick);

class Book {
  constructor(title, imgUrl, author, pages, read) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.bookList = [];
  }

  addBook(book) {
    this.bookList.push(book);
  }

  removeBook(id) {
    this.bookList.splice(id, 1);
  }

  toggleRead(id) {
    this.bookList[id].read = this.bookList[id].read ? false : true;
  }
}

const myLibrary = new Library();

// Filler Data
myLibrary.addBook(
  new Book(
    "Things Fall Apart",
    "https://upload.wikimedia.org/wikipedia/en/6/65/ThingsFallApart.jpg",
    "Chinua Achebe",
    "155",
    true
  )
);

function submitNewBookForm(e) {
  e.preventDefault();
  addBookToLibrary();
  NewBookForm.reset();
  Dialog.close();
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let imageUrl = document.querySelector("#image-url").value;
  let read = document.querySelector("#read").checked;

  if (!imageUrl) imageUrl = "https://placehold.co/258x375";
  myLibrary.addBook(new Book(title, imageUrl, author, pages, read));

  createBookListHTML();
}

function createBookListHTML() {
  if (BookList.hasChildNodes) removeBookListHTML();
  myLibrary.bookList.forEach((book, i) => {
    let listItem = document.createElement("li");
    let bookCard = document.createElement("div");
    bookCard.innerHTML =
      `<div>
            <h3>${book.title}</h3>
            <img src=${book.imgUrl}>
        </div>` +
      `<div>
            <p><span>Author</span>: ${book.author}</p>
            <p><span>Pages</span>: ${book.pages}</p>
            <p>${book.read ? "Read" : "Not Read"}</p>
        </div>`;
    bookCard.classList += "card";

    // Add readButton
    const readButton = document.createElement("button");
    readButton.id = "read-button";
    readButton.textContent = book.read ? "Mark As Unread" : "Mark As Read";
    readButton.dataset.id = i;

    readButton.addEventListener("click", toggleRead);

    // Add removeButton
    const removeButton = document.createElement("button");
    removeButton.id = "remove-button";
    removeButton.textContent = "Remove";
    removeButton.dataset.id = i;

    removeButton.addEventListener("click", removeBook);

    bookCard.append(readButton);
    bookCard.append(removeButton);

    listItem.appendChild(bookCard);
    BookList.appendChild(listItem);
  });
}

function toggleRead(e) {
  let id = e.target.dataset.id;

  myLibrary.toggleRead(id);
  removeBookListHTML();
  createBookListHTML();
}

function removeBook(e) {
  let id = e.target.dataset.id;

  myLibrary.removeBook(id);
  removeBookListHTML();
  createBookListHTML();
}

function removeBookListHTML() {
  while (BookList.firstChild) {
    BookList.removeChild(BookList.firstChild);
  }
}

function closeOnClick(e) {
  let dialog = e.target;
  if (dialog.nodeName === "DIALOG") dialog.close();
}

createBookListHTML();
