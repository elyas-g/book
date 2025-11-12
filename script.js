const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

Book.prototype.info = function () {
  return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary(title, author, pages, read, Name) {
  let name = Name;
  name = new Book(title, author, pages, read);
  myLibrary.push(name);
}

function display() {
  const displayBox = document.querySelector(".display-box");
  myLibrary.forEach((book) => {
    const bookBox = document.createElement("div");
    const bookText = document.createElement("p");
    bookText.innerText = book.info();
    bookBox.append(bookText);
    displayBox.append(bookBox);
  });
}

addBookToLibrary("abebe", "beso", 119, "have not read yet", "Mango");
addBookToLibrary("kebede", "bo", 219, "have read", "Apple");
addBookToLibrary("Alemu", "eeso", 119, "have not read yet", "Mango");
addBookToLibrary("askdf", "kena", 390, "have not read yet", "banana");
display();
