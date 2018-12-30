import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends React.Component {

  componentWillMount(){
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div class="navbar-default sidebar" role="navigation">
          <div class="sidebar-nav navbar-collapse">
              <ul class="nav" id="side-menu">
                  <li>
                      <Link to="/"><i class="fa fa-dashboard fa-fw"></i> Dashboard</Link>
                  </li>
                  <li>
                      <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Activity<span class="fa arrow"></span></a>
                      <ul class="nav nav-second-level">
                          <li>
                              <Link to="/allactivities">All activities</Link>
                          </li>
                          <li>
                              <a href="morris.html">My activities</a>
                          </li>
                      </ul>

                  </li>
                  <li>
                      <Link to="/calendar"><i class="fa fa-table fa-fw"></i> Calendar</Link>
                  </li>
              </ul>
          </div>

      </div>
      </div>
    );
  }
}

export default Sidebar;
