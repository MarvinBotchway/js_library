const bookListContainer = document.querySelector(".container");
const addBookButton = document.querySelector("#add-book");
const dialog = document.querySelector("dialog");
const newBookForm = document.querySelector("#new-book-form");

const bookList = document.createElement("ul");

newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    newBookForm.reset();
    dialog.close();
});

addBookButton.addEventListener("click", () => dialog.showModal());

const myLibrary = [];

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

myLibrary.push(new Book(
"Purple Hibiscus",
"",
"Chimamanda Ngozi Adichie", "336", false));

myLibrary.push(new Book(
"The Thing Around Your Neck",
"",
"Chimamanda Ngozi Adichie", "240", false));

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
    if(bookList.hasChildNodes) removeBookListHTML();
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
        bookList.appendChild(listItem);
    });
}

function removeBookListHTML() {
    while(bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }
}

createBookListHTML();
bookListContainer.appendChild(bookList);

