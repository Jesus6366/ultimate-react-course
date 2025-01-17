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
    hasMovieAdaptation: true,
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

// Destructuring objects
/*
const book = getBook(3);

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

// console.log(author, title, genres);

// const primary = genres[0];
// const secondary = genres[1];
// primary;
// secondary;

// Destructuring arrays rest  ,
const [primary, secondary, ...otherGenres] = genres;

// Spread operator arrays
const newGenres = [...genres, "epic fansaty"];

// Spread operator objects

const updatedBook = {
  ...book,
  // adding new property
  moviePublicationDate: "2001-12-19",
  // overwriting an existing property
  pages: 1210,
};

// updatedBook;

//Arrow function
const getYear = (str) => str.split("-")[0];

// console.log(getYear(publicationDate));

//Template literals
const summary = `${title}, is a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}`;

// Ternary operator
const pageslength = pages > 1000 ? "over a thousand" : "less than 1000";

// // Short circuiting &&, ||, ??
// console.log(true && "Some string");
// console.log(false && "Some string");
// console.log(hasMovieAdaptation && "This book has a movie");

// /// or operator || if the first element is false it returns the second otherwise it returns the first element
// console.log(true || "Some string");
// console.log(false || "Some string");

//nullish operator ?? for ceros or empty strings
// const count = book.reviews.librarything.reviewsCount ?? "no data";

// Optional chaining operator
function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;

  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  return goodread + librarything;
}

console.log(getTotalReviewCount(book));
 */

//map method
const books = getBooks();

const titles = books.map((book) => book.title);
// titles;

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});

// essentialData;

// filter method

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

// longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

// adventureBooks;

// reduce method

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);

// pagesAllBooks;

// array sort method

const x = [3, 7, 1, 9, 6];

const sorted = x.sort((a, b) => a - b);

// sorted;

// sorted with a array copy

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);

// sortedByPages;

// working with immutable arrays
// 1 add book object to array
const newBook = {
  id: 6,
  title: "Harry potter and the chamber of secrets",
  author: "JK Rowling",
};

const booksAfterAdd = [...books, newBook];

// booksAfterAdd;

//2 delete a book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);

booksAfterDelete;
