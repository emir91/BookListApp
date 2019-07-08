// Book Class: Represents a Book
class Books {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Task
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One', 
                author: 'John Doe',
                isbn: 3434434
            },

            {
                title: 'Book Two', 
                author: 'Jane Doe',
                isbn: 45545
            }
        ];

        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `<td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a href="#" class="btn btn-danger bt-sm delete">X</a></td>`;

        list.appendChild(row);
    }

    static deleteBooks(el) {
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => 
{
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
   
   // Validate
    if(title === '' || author === '' || isbn === ''){
    alert('Please fill in all fields')
   } else {
    // Instantiate book
     const book = new Books(title, author, isbn);

   // Add book to UI
     UI.addBookToList(book);

   // Clear form fields
     UI.clearFields();
  }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBooks(e.target);
});