import React, {Component} from 'react';
import {connect} from 'react-redux';
import {yourAction} from '../actions/yourActions.js';
import GlobalMap from './Maps/global.js';
import Navigation from './Navigation/index.js';
import NorthAmericaMap from './Maps/northamerica.js'
import CaliforniaMap from './Maps/california.js'
import Allactivities from './Activities/allactivities.js'
import UsaMap from './Maps/usa.js'
import YourComponent2 from './your-component2.js'
import { BrowserRouter, Route} from 'react-router-dom'; //{Link} to shift page;


class YourComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Navigation />
        <div>
          <Route path="/" component={GlobalMap} exact/>
          <Route path="/northamerica" component={NorthAmericaMap} />
          <Route path="/usa" component={UsaMap} />
          <Route path="/california" component={CaliforniaMap} />
          <Route path="/allactivities" component={Allactivities} />
        </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  reduxProps: state.yourReducer.yourContent
});

export default connect(mapStateToProps, {yourAction})(YourComponent);
