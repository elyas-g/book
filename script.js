const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

Book.prototype.info = function () {
  return `The ${this.title} by ${this.author}, ${
    this.pages
  } pages, ${this.readStatus()}`;
};

Book.prototype.readStatus = function () {
  const hasRead = this.read === "yes" ? "have read" : "not read yet";
  return hasRead;
};

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  display();
}

function display() {
  const displayBox = document.querySelector(".display-box");
  displayBox.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookBox = document.createElement("div");
    const bookText = document.createElement("p");
    const readStatus = document.createElement("button");
    const removeButton = document.createElement("button");

    const readValue = book.readStatus;
    readStatus.innerText =
      readValue === "have read" ? "not read yet" : "have read";
    readStatus.classList.add("read-status");
    readStatus.addEventListener("click", () => {
      book.read = book.read === "yes" ? "no" : "yes";
      display();
    });
    removeButton.innerText = "Remove";
    removeButton.classList.add("remove-button");
    bookText.innerText = book.info();

    bookBox.append(bookText);
    bookBox.append(readStatus);
    bookBox.append(removeButton);
    displayBox.append(bookBox);

    removeButton.addEventListener("click", (e) => {
      const x = e.target;
      displayBox.removeChild(x.parentNode);
    });
  });
}

const form = document.querySelector("form");
const addBook = document.getElementById("AddBook");
addBook.addEventListener("click", (e) => {
  e.preventDefault();
  const title = form.title.value;
  const author = form.author.value;
  const pages = form.pages.value;
  const read = form.read.value;
  addBookToLibrary(title, author, pages, read);
});
