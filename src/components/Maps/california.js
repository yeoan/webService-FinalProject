import React, {Component} from 'react';
import axios from 'axios';


class CaliforniaMap extends React.Component {

  componentWillMount(){
    var thisClass = this;
    var counter = 3;
    var clouds = [];
    axios.get('../../../california.json')
  .then(function (response) {
    response.data.list.map((item)=>{
      clouds.push({
        "label": counter.toString(),
        "value": item.clouds.all
      })
      counter = parseInt(counter + 3);
    });
    thisClass.renderCloudsCharts(clouds);
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
    renderAt: 'chart-container',
    width: '50%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      "chart": {
        "caption": "Clouds",
        "subCaption": "5 days per 3hrs",
        "numberSuffix": "",
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

  constructor(props) {
    super(props);
    this.renderCloudsCharts = this.renderCloudsCharts.bind(this);
  }

  render() {
    return (
      <div>
      <div class="col-lg-12">
          <h1 class="page-header">Weather</h1>
      </div>
      <div id="chart-container"></div>
      </div>
    );
  }
}

export default CaliforniaMap;
