import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AuthorList from '../components/AuthorList.jsx';

import { Authors } from '/imports/api/authors/authors.js';


export default createContainer(({ changeAuthor }) => {
  //authors Subscription
  const authorsHandle = Meteor.subscribe('allAuthors');
  const loadingAuthors = !authorsHandle.ready();
  const authors = Authors.find();
  const authorsExists = !loadingAuthors && !!authors;
  // once the authors list is loaded preselect first Author
  // let the OverviewPage know which then tells the BookListContainer
  if (authorsExists) {
    changeAuthor(authors.fetch()[0]._id)
  }
  return {
    loadingAuthors,
    authorsExists,
    changeAuthor,
    authors: authors.fetch(),
  };
}, AuthorList);
