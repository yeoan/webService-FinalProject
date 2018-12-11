import React, {Component} from 'react';
import Navbar from './navbar.js';
import Sidebar from './sidebar.js';

class Navigation extends React.Component {

  componentWillMount(){
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="navigation">
      <nav class="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: 0}}>
        <Navbar />
        <Sidebar />
      </nav>
      </div>


    );
  }
}

export default Navigation;
