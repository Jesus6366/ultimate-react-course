const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// DESTRUCTURING
const book = getBook(1);

// const title = book.title;
// const author = book.author;

// destructuring objects
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

// destructuring arrays
// const prymaryGenre = genres[0]
// const secondaryGenre = genres[1]

// using arrays
// rest operator (rest of what we want and has to be the last element (rest))
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// spread operator
const newGenres = [...genres, "epic fantasy"];

//////////// using objects
const updatedBook = {
  ...book,
  // adding a new property
  moviePublicationDate: "2001-12-19",

  // overwriting properties
  pages: 1210,
};
updatedBook;

//////// template literals
const summary = `${title}, a ${pages}-page long, book was written by ${author}and publised in ${
  publicationDate.split("-")[0]
}. The Book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

/////// Ternary operator
const pagesRange = pages > 1000 ? "Over a thousand" : "Less than 1000";

pagesRange;

/////// Arrow functions

// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

/// Short-Circuiting And Logical Operators: &&, ||, ??

// &&
console.log(true && "Some string");
// short circuit
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// ||
console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "Not translated";

spanishTranslation;

// ??
// short circuit for falsy values
const count = book.reviews.librarything.reviewsCount ?? "no data";

///////////// Optional chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;

  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}

*/

/*

//// MAP method

const books = getBooks();

const x = [1, 2, 3, 4, 5].map((element) => element * 2);

x;

const titles = books.map((book) => book.title);

titles;

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});

essentialData;

/////// FILTER method

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

//////// REDUCE method

const pagesAllBooks = books.reduce((acc, cur) => {
  return acc + cur.pages;
}, 0);

pagesAllBooks;

/////// SORT method mutates the origin array

const xy = [3, 7, 1, 9, 6];

const sorted = xy.slice().sort((a, b) => a - b);

sorted;
xy;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

/// working with immutable arrays

//1) Add a booj object to array

const newBook = {
  id: 6,
  title: "Harry potter and the chamber of secrets",
  author: "J K ROWLING",
};

const booksAfterAdd = [...books, newBook];

booksAfterAdd;

// 2) Delete a book object from a book

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);

booksAfterDelete;

// 3) Update a book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);

booksAfterUpdate;
*/

// // Asynchronous JavaScript: Promises
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json()) // returns another promise
//   .then((data) => console.log(data)); // receives the data

//Asynchronous JavaScript: Async/Await
const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await res.json();

  console.log(data);
};

getTodos();
