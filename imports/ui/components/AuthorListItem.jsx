import React, { PropTypes } from 'react'
import { ListGroupItem } from 'react-bootstrap';

class AuthorListItem extends React.Component {
  constructor(props) {
    super(props);
    //bind handler in constructor instead of inline / could also use arrow function
    //https://facebook.github.io/react/docs/reusable-components.html#no-autobinding
    this.handleClick = this.handleClick.bind(this);
  }
  // pass the item that is selected to its parent
  handleClick(e) {
    e.preventDefault();
    this.props.onItemActive(this.props.id, this.props.authorId)
  }
  render () {
    const { title, subTitle, active, id } = this.props;
    return (
      <ListGroupItem href="#" active={active} onClick={this.handleClick}>
        {title} <br/>
        <em>{subTitle}</em>
      </ListGroupItem>
    )
  }
}

AuthorListItem.propTypes = {
  title: React.PropTypes.string,
  subTitle: React.PropTypes.string,
  active: React.PropTypes.string,
  onItemActive: React.PropTypes.func,
}

export default AuthorListItem;
