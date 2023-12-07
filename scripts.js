const bookListContainer = document.querySelector(".container");
const bookList = document.createElement("ul");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

myLibrary.push(new Book(
"Things Fall Apart", "Chinua Achebe", "155", true));

myLibrary.push(new Book(
"Purple Hibiscus", "Chimamanda Ngozi Adichie", "336", false));

myLibrary.push(new Book(
"The Thing Around Your Neck", "Chimamanda Ngozi Adichie", "240", false));



myLibrary.forEach((book) => {
    let listItem = document.createElement("li");
    let bookCard = document.createElement("div");
    bookCard.textContent = book.title;
   
    listItem.appendChild(bookCard);
    bookList.appendChild(listItem);
});

bookListContainer.appendChild(bookList);

function addBookToLibrary() {
}