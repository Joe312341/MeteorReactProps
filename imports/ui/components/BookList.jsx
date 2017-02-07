import React from 'react'

import { Panel, ListGroup } from 'react-bootstrap';

import BookListItem from '/imports/ui/components/BookListItem.jsx';
import Message from '/imports/ui/components/Message.jsx';

class BookList extends React.Component {

  render () {
    const { books, loadingBooks, booksExists } = this.props;
    let Books;
    if (!booksExists) {
      Books = (
        <li>
          No Books
        </li>
      );
    } else {
      Books = books.map((book, i) => (
        <BookListItem key={i}
          id={i}
          title={book.title}
          subTitle={'Subtitle'}
          active={''}
           />
      ));
    }
    const title = (
      <h3>Book List</h3>
    );

    const panelsInstance = (
      <div>
        <Panel header={title}>
          <ListGroup>
            {loadingBooks ? <Message title={'Loading Books..'}/> : Books}
          </ListGroup>
        </Panel>
      </div>
    )

    return (
      panelsInstance
    )
  }
}

BookList.propTypes = {
  books: React.PropTypes.array,
  loadingBooks: React.PropTypes.bool,
  booksExists: React.PropTypes.bool
}

export default BookList;
