/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

const CardsButtons = ({ index, reducedArray }) => {
  let favoriteBook;
  let bookToRead;
  const addToFavorite = (e) => {
    reducedArray.forEach((book) => {
      if (book.id == e.target.id) {
        favoriteBook = book;
      }
    });
    (favoriteBook.isFavorite ? favoriteBook.isFavorite = false : favoriteBook.isFavorite = true);
    console.log('FAVORITE BOOK', favoriteBook);
  };

  const addToRead = (e) => {
    reducedArray.forEach((book) => {
      if (book.id == e.target.id) {
        bookToRead = book;
      }
    });
    (bookToRead.toRead ? bookToRead.toRead = false : bookToRead.toRead = true);
    console.log('WANT TO READ', bookToRead);
  };

  return (
    <div className="button">
      <button id={index} className="favoritebutton" type="button" onClick={addToFavorite}>Add to favorite</button>
      <button id={index} className="toreadbutton" type="button" onClick={addToRead}>Want to read</button>
    </div>
  );
};

export default CardsButtons;
