import React, {Component} from 'react';
import {connect} from 'react-redux';
import {yourAction} from '../../actions/yourActions.js';

class Allactivities extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var activitiesList = ['amusement park','badminton','basketball','bicycle','biking','camping','couch potato','esport','fly a kite','get warm by stove','go to a hot spring','go to karaoke','gym','have a picnic','hiking','hunting','jogging','play board game','play snow day','programming','reading','roller skate','see a movie','shopping','sightseeing','skating','take a sunbath','visit a museum','volleyball'];
    return (
      <div id="page-wrapper">
          <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                <h1 class="page-header">All Activities</h1>
                </div>
              {
                activitiesList.map((item)=>{
                  return (
                    <div class="col-lg-4">
                      <div class="card">
                      <img src={'../src/images/'+item+'.jpg'} style={{width:'100%',height:'200px'}}/>
                        <div class="cardcontainer">
                          <h4><b>{item}</b></h4>
                          <p>Architect & Engineer</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
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
