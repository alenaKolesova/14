import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Books from './components/Books';
import BookPicture from './components/BookPicture';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <BookPicture/>
    <Books/>
  </>
);

