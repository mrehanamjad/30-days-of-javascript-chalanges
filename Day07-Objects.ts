// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access
// - Task 1: Create an object representing a book with properties like title, author, year, and log the object to the console.
interface Book {
  title: string;
  author: string;
  year: number;
}

let book: Book = {
  title: "Learn JS",
  author: "Anonimous",
  year: 2021,
};
console.log(book);
// - Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);
// Activity 2: Object Methods
// - Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
interface BookWithMethods extends Book {
    getDetails: () => string;
  }
  
  let bookWithMethods: BookWithMethods = {
    ...book,
    getDetails: function() {
      return `${bookWithMethods.title} by ${bookWithMethods.author}`;
    }
  };
  console.log(bookWithMethods.getDetails());

// - Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
    interface BookUpdateYear extends Book {
        setYear: (y:number) => void;
    }

    let bookY :BookUpdateYear = {
        ...bookWithMethods,
        setYear(y) {
            bookY.year = y
        },
    }
    bookY.setYear(1998)
    console.log(bookY.year);

// Activity 3: Nested Objects
// - Task 5: Create a nested object representing a library with properties like name and books (an array of books), and log the library object to the console.
type BookA = {
    title:string;
    author:string;
}

type Library = {
    name: string;
    books: BookA[];
  }
  
  let library: Library = {
    name: "Local Library",
    books: [{title:'Book1',author:'Author1'},{title:'Book2',author:'Author2'},{title:'Book3',author:'Author3'}]
  };
  console.log(library);

// - Task 6: Access one item of an array within that nested library object.
    console.log(library.books[2])
// Activity 4: The Keyword 'this'
// - Task 7: Inside methods within objects use this keyword to return a string with the book's title and year, and log result of calling this method.
interface BookWithThis extends Book {
    getTitleAndYear: () => string
}

let bookWithThis:BookWithThis = {
    title:'Python',
    author:'Sir Py',
    year:2024,
    getTitleAndYear() {
        return `${this.title} was published in ${this.year}`
    },
}
console.log(bookWithThis.getTitleAndYear());


// Activity 5: Object Iteration
// - Task 8: Use a for...in loop to iterate over properties of book objects. Log each property and its value.
for (let key in book) {
    console.log(`${key}: ${book[key as keyof Book]}`);
}
// - Task 9: Use Object.keys() and Object.values() methods to log all keys and values of books.
console.log(Object.keys(book));
console.log(Object.values(book));
