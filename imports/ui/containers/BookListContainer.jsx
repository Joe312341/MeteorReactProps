import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import BookList from '/imports/ui/components/BookList.jsx';

import { Books } from '/imports/api/books/books.js';


export default createContainer(({ authorId }) => {

  //books Subscription
  const booksHandle = Meteor.subscribe('booksForAuthor', authorId);
  const loadingBooks = !booksHandle.ready();
  const books = Books.find({authorId: authorId});
  const booksExists = !loadingBooks && !!books;

  return {
    loadingBooks,
    booksExists,
    books: books.fetch()
  };
}, BookList);
