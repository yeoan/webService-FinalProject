import React, {Component} from 'react';
import {connect} from 'react-redux';
import {yourAction} from '../../actions/yourActions.js';

class Allactivities extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="page-wrapper">
          <div class="container-fluid">
              <div class="row">

      <div class="col-lg-12">
          <h1 class="page-header">All Activities</h1>
          </div>
      </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxProps: state.yourReducer.yourContent
});

export default connect(mapStateToProps, {yourAction})(Allactivities);
