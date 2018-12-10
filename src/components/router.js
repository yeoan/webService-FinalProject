import React, {Component} from 'react';
import {connect} from 'react-redux';
import {yourAction} from '../actions/yourActions.js';
import GlobalMap from './Maps/global.js';
import NorthAmericaMap from './Maps/northamerica.js'
import CaliforniaMap from './Maps/california.js'
import UsaMap from './Maps/usa.js'
import YourComponent2 from './your-component2.js'
import { BrowserRouter, Route} from 'react-router-dom'; //{Link} to shift page;

class Router extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={GlobalMap} exact/>
          <Route path="/northamerica" component={NorthAmericaMap} />
          <Route path="/usa" component={UsaMap} />
          <Route path="/california" component={CaliforniaMap} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  reduxProps: state.yourReducer.yourContent
});

export default connect(mapStateToProps, {yourAction})(Router);
