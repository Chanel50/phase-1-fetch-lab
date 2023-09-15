

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
      .then((response) => response.json())
      .then((json) => renderBooks(json))
      .catch((error) => {
          console.error("Error fetching books:", error);
      });
}

function renderBooks(books) {
  var bookList = document.getElementById("list");
  if (bookList) {
      books.forEach(function (book) {
          var listItem = document.createElement("li");
          listItem.innerHTML = book.name;
          bookList.appendChild(listItem);
      });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
