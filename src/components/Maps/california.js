import React, {Component} from 'react';
import axios from 'axios';


class CaliforniaMap extends React.Component {

  componentWillMount(){
    var thisClass = this;
    var counter = 3;
    var clouds = [];
    var temps = [];
    var wind = [];
    var rain = [];
    axios.get('../../../california.json')
  .then(function (response) {
    response.data.list.map((item)=>{
      clouds.push({
        "label": counter.toString(),
        "value": item.clouds.all
      })
      temps.push({
        "label": counter.toString(),
        "value": item.main.temp
      })
      wind.push({
        "label": counter.toString(),
        "value": item.wind.speed
      })
      rain.push({
        "label": counter.toString(),
        "value": item.rain["3h"]===undefined ? 0 : item.rain["3h"]
      })
      counter = parseInt(counter + 3);
    });
    thisClass.renderCloudsCharts(clouds);
    thisClass.renderTempsCharts(temps);
    thisClass.renderWindCharts(wind);
    thisClass.renderRainCharts(rain)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed

  });
  }

  componentDidMount(){
    var thisClass = this;

  }

  renderCloudsCharts(clouds){
    FusionCharts.ready(function() {
  var avgBallChart = new FusionCharts({
    type: 'line',
    renderAt: 'chart-container-clouds',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Cloud",
        "subCaption": "5 days per 3hrs",
        "numberSuffix": "%",
        "showValues": "0",
        "rotateLabels": "1",
        "slantLabels": "1",
        "showHoverEffect": "1",
        "canvasPadding": "10",
        "yaxisminvalue": "89",
        "showaxislines": "1",
        "anchorRadius": "4",
        "anchorBgColor": "#876EA1",
        "anchorHoverRadius": "8",
        "theme": "hulk-light",

      },
      "data": clouds
    }
  }).render();
});
  }

  renderTempsCharts(temps){
    FusionCharts.ready(function() {
  var avgBallChart = new FusionCharts({
    type: 'line',
    renderAt: 'chart-container-temps',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Temperature",
        "subCaption": "5 days per 3hrs",
        "numberSuffix": "F",
        "showValues": "0",
        "rotateLabels": "1",
        "slantLabels": "1",
        "showHoverEffect": "1",
        "canvasPadding": "10",
        "yaxisminvalue": "89",
        "showaxislines": "1",
        "anchorRadius": "4",
        "anchorBgColor": "#876EA1",
        "anchorHoverRadius": "8",
        "theme": "hulk-light",

      },
      "data": temps
    }
  }).render();
  });
  }

  renderWindCharts(windSpeed){
    FusionCharts.ready(function() {
  var avgBallChart = new FusionCharts({
    type: 'line',
    renderAt: 'chart-container-wind',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Wind Speed",
        "subCaption": "5 days per 3hrs",
        "numberSuffix": "meter/sec",
        "showValues": "0",
        "rotateLabels": "1",
        "slantLabels": "1",
        "showHoverEffect": "1",
        "canvasPadding": "10",
        "yaxisminvalue": "89",
        "showaxislines": "1",
        "anchorRadius": "4",
        "anchorBgColor": "#876EA1",
        "anchorHoverRadius": "8",
        "theme": "hulk-light",

      },
      "data": windSpeed
    }
  }).render();
  });
  }

  renderRainCharts(rain){
    FusionCharts.ready(function() {
  var avgBallChart = new FusionCharts({
    type: 'line',
    renderAt: 'chart-container-rain',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Rain",
        "subCaption": "5 days per 3hrs",
        "numberSuffix": "mm",
        "showValues": "0",
        "rotateLabels": "1",
        "slantLabels": "1",
        "showHoverEffect": "1",
        "canvasPadding": "10",
        "yaxisminvalue": "89",
        "showaxislines": "1",
        "anchorRadius": "4",
        "anchorBgColor": "#876EA1",
        "anchorHoverRadius": "8",
        "theme": "hulk-light",

      },
      "data": rain
    }
  }).render();
  });
  }

  constructor(props) {
    super(props);
    this.renderCloudsCharts = this.renderCloudsCharts.bind(this);
    this.renderTempsCharts = this.renderTempsCharts.bind(this);
    this.renderWindCharts = this.renderWindCharts.bind(this);
    this.renderRainCharts = this.renderRainCharts.bind(this);
  }

  render() {
    return (

      <div id="page-wrapper">
          <div class="container-fluid">
              <div class="row">
      <div class="col-lg-12">
          <h1 class="page-header">Weather</h1>
      </div>
      <div class="col-lg-6">
      <div id="chart-container-clouds"></div>
      </div>
      <div class="col-lg-6">
      <div id="chart-container-temps"></div>
      </div>
      <div class="col-lg-6">
      <div id="chart-container-wind"></div>
      </div>
      <div class="col-lg-6">
      <div id="chart-container-rain"></div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default CaliforniaMap;
