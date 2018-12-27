import React, {Component} from 'react';
import {connect} from 'react-redux';
import {yourAction} from '../../actions/yourActions.js';
import date from 'date-and-time';
import axios from 'axios';

class RecommendActivities extends React.Component {


  constructor(props) {
    super(props);
    this.addevents = this.addevents.bind(this);

    this.state = {
      Day1 : ['amusement park','badminton','basketball','bicycle','biking'],
      Day2 : ['esport','fly a kite','get warm by stove','go to a hot spring'],
      Day3 : ['have a picnic','hiking','hunting','jogging','play board game'],
      Day4 : ['see a movie','shopping','sightseeing','skating','take a sunbath'],
      Day5 : ['take a sunbath','visit a museum','volleyball']
    }
  }

  removeEvent(List,activity,index){
    let newArray = [];
    List.map((item)=>{
      if(item !== activity){
        newArray.push(item)
      }
    })
    switch(index) {
      case 1:
       this.setState({
         Day1: newArray
       })
       break;
      case 2:
        this.setState({
          Day2: newArray
        })
        break;
      case 3:
        this.setState({
          Day3: newArray
        })
        break;
      case 4:
        this.setState({
          Day4: newArray
        })
        break;
      case 5:
        this.setState({
          Day5: newArray
        })
        break;
      default:
    }
  }

  addevents(date,activity){
    axios('http://127.0.0.1:3001/addEvents',{
      method: "post",
      data: {date:date,activity:activity},
      withCredentials: true
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  render() {
    let now = new Date();
    return (
      <div id="page-wrapper">
          <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                <h1 class="page-header">{date.format(now, 'ddd MMM DD YYYY')}</h1>
                </div>
              {
                this.state.Day1.map((item)=>{
                  return (
                    <div class="col-lg-4">
                      <div class="card">
                      <img src={'../src/images/'+item+'.jpg'} style={{width:'100%',height:'200px'}}/>
                        <div class="cardcontainer">
                          <h4><b>{item}</b></h4>
                          <p>Hope you will like it!</p>
                        </div>
                        <button type="button" class="btn btn-primary" onClick={(event)=>{this.addevents(date.format(now, 'ddd MMM DD YYYY'),item);this.removeEvent(this.state.Day1,item,1)}}>Add</button>
                      </div>
                    </div>
                  );
                })
              }
      </div>
      <div class="row">
        <div class="col-lg-12">
        <h1 class="page-header">{date.format(date.addDays(now, 1), 'ddd MMM DD YYYY')}</h1>
        </div>
      {
        this.state.Day2.map((item)=>{
          return (
            <div class="col-lg-4">
              <div class="card">
              <img src={'../src/images/'+item+'.jpg'} style={{width:'100%',height:'200px'}}/>
                <div class="cardcontainer">
                  <h4><b>{item}</b></h4>
                  <p>Hope you will like it!</p>
                </div>
                <button type="button" class="btn btn-primary" onClick={(event)=>{this.addevents(date.format(date.addDays(now, 1), 'ddd MMM DD YYYY'),item,2);this.removeEvent(this.state.Day2,item,2)}}>Add</button>
              </div>
            </div>
          );
        })
      }
</div>
<div class="row">
  <div class="col-lg-12">
  <h1 class="page-header">{date.format(date.addDays(now, 2), 'ddd MMM DD YYYY')}</h1>
  </div>
{
  this.state.Day3.map((item)=>{
    return (
      <div class="col-lg-4">
        <div class="card">
        <img src={'../src/images/'+item+'.jpg'} style={{width:'100%',height:'200px'}}/>
          <div class="cardcontainer">
            <h4><b>{item}</b></h4>
            <p>Hope you will like it!</p>
          </div>
          <button type="button" class="btn btn-primary"  onClick={(event)=>{this.addevents(date.format(date.addDays(now, 2), 'ddd MMM DD YYYY'),item,3);this.removeEvent(this.state.Day3,item,3)}}>Add</button>
        </div>
      </div>
    );
  })
}
</div>
<div class="row">
  <div class="col-lg-12">
  <h1 class="page-header">{date.format(date.addDays(now, 3), 'ddd MMM DD YYYY')}</h1>
  </div>
{
  this.state.Day4.map((item)=>{
    return (
      <div class="col-lg-4">
        <div class="card">
        <img src={'../src/images/'+item+'.jpg'} style={{width:'100%',height:'200px'}}/>
          <div class="cardcontainer">
            <h4><b>{item}</b></h4>
            <p>Hope you will like it!</p>
          </div>
          <button type="button" class="btn btn-primary"  onClick={(event)=>{this.addevents(date.format(date.addDays(now, 3), 'ddd MMM DD YYYY'),item,4);this.removeEvent(this.state.Day4,item,4)}}>Add</button>
        </div>
      </div>
    );
  })
}
</div>
<div class="row">
  <div class="col-lg-12">
  <h1 class="page-header">{date.format(date.addDays(now, 4), 'ddd MMM DD YYYY')}</h1>
  </div>
{
  this.state.Day5.map((item)=>{
    return (
      <div class="col-lg-4">
        <div class="card">
        <img src={'../src/images/'+item+'.jpg'} style={{width:'100%',height:'200px'}}/>
          <div class="cardcontainer">
            <h4><b>{item}</b></h4>
            <p>Hope you will like it!</p>
          </div>
          <button type="button" class="btn btn-primary"  onClick={(event)=>{this.addevents(date.format(date.addDays(now, 4), 'ddd MMM DD YYYY'),item,5);this.removeEvent(this.state.Day5,item,5)}}>Add</button>
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

export default connect(mapStateToProps, {yourAction})(RecommendActivities);
