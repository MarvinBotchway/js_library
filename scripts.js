const BookListContainer = document.querySelector(".container");
const AddBookButton = document.querySelector("#add-book");
const Dialog = document.querySelector("dialog");
const NewBookForm = document.querySelector("#new-book-form");

const BookList = document.querySelector("#book-list");
const myLibrary = [];

AddBookButton.addEventListener("click", () => Dialog.showModal());
NewBookForm.addEventListener("submit", submitNewBookForm);
Dialog.addEventListener("click", closeOnClick);

function Book(title, imgUrl, author, pages, read) {
    if (!imgUrl) imgUrl = "https://placehold.co/258x375";
    this.title = title;
    this.imgUrl = imgUrl
    this.author = author;
    this.pages = pages;
    this.read = read;
}

myLibrary.push(new Book(
"Things Fall Apart",
"https://upload.wikimedia.org/wikipedia/en/6/65/ThingsFallApart.jpg",
"Chinua Achebe", "155", true));

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

    myLibrary.push(new Book (title, imageUrl, author, pages, read));

    createBookListHTML();
} 


function createBookListHTML() {
    if(BookList.hasChildNodes) removeBookListHTML();
    myLibrary.forEach((book) => {
        let listItem = document.createElement("li");
        let bookCard = document.createElement("div");
        bookCard.innerHTML =
        `<div>
            <h3>${book.title}</h3>
            <img src=${book.imgUrl}>
        </div>` +
        `<p><span>Author</span>: ${book.author}</p>` +
        `<p><span>Pages</span>: ${book.pages}</p>` +
        `<p><span>Read</span>: ${book.read}</p>`;
        bookCard.classList += "card";
    
        listItem.appendChild(bookCard);
        BookList.appendChild(listItem);
    });
}

function removeBookListHTML() {
    while(BookList.firstChild) {
        BookList.removeChild(BookList.firstChild);
    }
}

function closeOnClick(e) {
    let dialog = e.target;
    if (dialog.nodeName === "DIALOG") dialog.close();
}

createBookListHTML();
