import React, {Component} from 'react';

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
                      <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                  </li>
                  <li>
                      <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Activity<span class="fa arrow"></span></a>
                      <ul class="nav nav-second-level">
                          <li>
                              <a href="flot.html">All activities</a>
                          </li>
                          <li>
                              <a href="flot.html">My activities</a>
                          </li>
                          <li>
                              <a href="morris.html">Friend's activities</a>
                          </li>
                      </ul>

                  </li>
                  <li>
                      <a href="tables.html"><i class="fa fa-table fa-fw"></i> Friends</a>
                  </li>
                  <li>
                      <a href="tables.html"><i class="fa fa-table fa-fw"></i> Calender</a>
                  </li>
              </ul>
          </div>

      </div>

      </div>
    );
  }
}

export default Sidebar;
