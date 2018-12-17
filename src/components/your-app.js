import React, {Component} from 'react';
import {connect} from 'react-redux';
import {yourAction} from '../actions/yourActions.js';
import GlobalMap from './Maps/global.js';
import Navigation from './Navigation/index.js';
import NorthAmericaMap from './Maps/northamerica.js'
import CaliforniaMap from './Maps/california.js'
import Allactivities from './Activities/allactivities.js'
import RecommedActivity from './Activities/recommedActivity.js'
import UsaMap from './Maps/usa.js'
import YourComponent2 from './your-component2.js'
import { BrowserRouter, Route} from 'react-router-dom'; //{Link} to shift page;
import Calendar from './Calendar/calendar.js'
import axios from 'axios';


class YourComponent extends React.Component {

  constructor(props) {
    super(props);
    this.userCheck = this.userCheck.bind(this);
  }

  componentWillMount(){
    this.userCheck();
  }

  userCheck(){
    axios.get('http://127.0.0.1:3001/usercheck', {withCredentials: true})
      .then(function (response) {
        // handle success
        if(response.data.result=='error'){
          window.location.href='http://127.0.0.1:3000/login'
        }
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
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
          <Route path="/recommedActivity" component={RecommedActivity} />
          <Route path="/calendar" component={Calendar} />
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
