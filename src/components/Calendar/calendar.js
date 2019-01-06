import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar'
import moment from "moment";
import calendarStyle from './react-big-calendar.css'
import axios from 'axios';
import {connect} from 'react-redux';

const localizer = BigCalendar.momentLocalizer(moment);
class CalendarPage extends React.Component {

  componentWillMount(){
    let component = this;
    let newArray = [];
    axios('http://yao.walsin.com:3001/getEvents?id='+component.props.id,{
      method: "get",
      withCredentials: true
    })
    .then(function (response) {
      console.log(response)
      response.data.result.map((item,index)=>{
        let dateObj = Date.parse(item.date);
        let date = new Date(dateObj);
        newArray.push({
          id: index,
          title: item.activity,
          allDay: true,
          start: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
          end: new Date(date.getFullYear(), date.getMonth(), date.getDate()+1),
        })
      })
      console.log(newArray)
      component.setState({
        events: newArray
      })
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      events : []
    }
  }

  render() {
    return (
      <div id="page-wrapper">
          <div class="container-fluid">
              <div class="row">
      <div class="col-lg-12" style={{height:'500px'}}>
          <h1 class="page-header">Calendar</h1>
          <BigCalendar
      localizer={localizer}
      events={this.state.events}
      startAccessor="start"
      endAccessor="end"
    />
      </div>
      </div></div></div>
    );
  }
}

const mapStateToProps = state => ({
  id: state.yourReducer.uId,
  email: state.yourReducer.email
});

export default connect(mapStateToProps, {})(CalendarPage);
