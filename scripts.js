const bookListContainer = document.querySelector(".container");
const bookList = document.createElement("ul");

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

bookListContainer.appendChild(bookList);

function addBookToLibrary() {
}