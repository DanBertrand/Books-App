/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './style.scss';
import Buttons from './CardsButtons';

const DisplayBooks = ({ books }) => {
  console.log('BOOKS', books[0]);

  let reducedArray = [];

  const newArray = books.map((book, index) => (
    reducedArray.push({
      id: index,
      title: book.title,
      description: book.shortDescription,
      image: book.thumbnailUrl,
      isFavorite: false,
      toRead: false,
    })
  ));

  console.log('REDUSED ARRAY', reducedArray);

  const listBooks = reducedArray.map((book) => (

    <div className="bookCard" key={book.id}>
      <h1>{book.title}</h1>
      <img src={book.image} alt={book.title} />
      <p>{book.description}</p>
      <Buttons index={book.id} reducedArray={reducedArray} />
    </div>

  ));

  return (

    <div className="cards">{listBooks}</div>

  );
};

export default DisplayBooks;
