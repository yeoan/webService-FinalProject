import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  componentWillMount(){
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="http://localhost:8080">Global Playground 2.0</a>
      </div>

      <ul class="nav navbar-top-links navbar-right">

          <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
              </a>
              <ul class="dropdown-menu dropdown-user">
                  <li><Link to="/userProfile"><i class="fa fa-user fa-fw"></i> User Profile</Link>
                  </li>
                  <li class="divider"></li>
                  <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                  </li>
              </ul>

          </li>

      </ul>

      </div>

    );
  }
}

export default Navbar;
