/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import DisplayBooks from './DisplayBooks';

const Books = () => {
  const [isBookFetch, setIsBookFetch] = React.useState(false);
  const [bookList, setbookList] = React.useState(false);

  const fetchInfo = async () => {
    const response = await fetch('https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json');
    const books = await response.json();
    setbookList(books.books[0]);
    setIsBookFetch(true);
  };

  React.useEffect(
    () => { fetchInfo(); }, [],
  );

  return (
    (isBookFetch ? <DisplayBooks books={bookList} /> : <p>Loading DATA ...</p>)

  );
};

export default Books;
