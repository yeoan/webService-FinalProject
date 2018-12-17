import React, {Component} from 'react';
import {connect} from 'react-redux';
import {yourAction} from '../../actions/yourActions.js';

class ActivityCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="col-lg-4">
        <div class="card">
        <img src={'../src/images/'+this.props.activity+'.jpg'} style={{width:'100%',height:'200px'}}/>
          <div class="cardcontainer">
            <h4><b>{this.props.activity}</b></h4>
            <p>Hope you will like it!</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxProps: state.yourReducer.yourContent
});

export default connect(mapStateToProps, {yourAction})(ActivityCard);
