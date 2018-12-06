import React, {Component} from 'react';
import {connect} from 'react-redux';
import {yourAction} from '../actions/yourActions.js';

class YourComponent extends React.Component {

  componentWillMount(){
    this.props.yourAction(1);
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="col-lg-12">
          <h1 class="page-header">{this.props.reduxProps}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxProps: state.yourReducer.yourContent
});

export default connect(mapStateToProps, {yourAction})(YourComponent);
