/// declare an empty books array variable
let books = [];

// Create addBook function to add book details in the management system.
/* Data collection and validation: The function retrieves the values entered
 by the user in the HTML input fields for book name, author name, book description,
  and number of pages. It uses document.getElementById('elementId').value to 
  access these values. The code then checks if all fields have been filled
   (bookName, authorName, bookDescription) and ensures that pagesNumber is a 
   valid number (using !isNaN(pagesNumber)). If any field is empty or if 
   pagesNumber is not a valid number, an alert prompts the user to fill in 
   all fields correctly.
 */
/* Creating a book object: Upon successful validation, the function creates
 a book object containing properties such as name, authorName, bookDescription,
  and pagesNumber, storing the user-entered data. This book object is then pushed 
  into the books array, effectively adding the new book to the collection.
*/
/* Display and clear: After adding the book, the showbooks() function is called
 to update the display with the newly added book details. Additionally, the 
 clearInputs() function is invoked to reset all input fields, providing a clean 
 interface for the user to add another book without manual clearing of previous 
 inputs. */
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// Create a showbooks function to show book details in the management system
function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name: </strong>${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>`
    );
        document.getElementById('books').innerHTML = booksDiv.join('');
}

// Create clearInputs function to clear the book details in the management system
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
