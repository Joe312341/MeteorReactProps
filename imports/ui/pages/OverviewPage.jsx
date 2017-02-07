import React, { PropTypes } from 'react'

import AuthorListContainer from '/imports/ui/containers/AuthorListContainer.jsx';
import BookListContainer from '/imports/ui/containers/BookListContainer.jsx';

import { Row, Col } from 'react-bootstrap';

class OverviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: 0
    }
    this.onAuthorChange = this.onAuthorChange.bind(this)
  }
  onAuthorChange(authorId) {
    this.setState({authorId: authorId});
  }
  render () {
    return (
      <div>
        <Row>
          <Col xs={12} md={4}>
            <AuthorListContainer changeAuthor={this.onAuthorChange} />
          </Col>
          <Col xs={12} md={4}>
            <BookListContainer authorId={this.state.authorId} />
          </Col>
        </Row>
      </div>
    )
  }
}
//
// OverviewPage.propTypes = {
//   authors: React.PropTypes.array,
//   books: React.PropTypes.array,
//   authorId: React.PropTypes.object,
//   loadingAuthors: React.PropTypes.bool,
//   authorsExists: React.PropTypes.bool,
//   loadingBooks: React.PropTypes.bool,
//   booksExists: React.PropTypes.bool,
// };

export default OverviewPage;
