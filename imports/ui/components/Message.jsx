import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ title, subtitle }) => (
  <Alert bsStyle="warning">
    <strong>{title}</strong>
    <em>{subtitle}</em>
  </Alert>
);

Message.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
};

export default Message;
