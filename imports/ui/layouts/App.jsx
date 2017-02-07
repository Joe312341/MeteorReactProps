import React, { Component } from 'react';

import NavBar from '/imports/ui/components/NavBar.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render () {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}
