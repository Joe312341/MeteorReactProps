import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const BookListItem = ({ title, subtitle }) => (
  <ListGroupItem>
    {title} <br/>
    <em>{subtitle}</em>
  </ListGroupItem>
);

BookListItem.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
};

export default BookListItem;
