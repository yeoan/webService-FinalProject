import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class NorthAmericaMap extends React.Component {

  componentDidMount(){
    var thisClass = this;
    FusionCharts.ready(function() {
    var populationMap = new FusionCharts({
        type: 'maps/northamerica',
        renderAt: 'chart-container-northamerica',
        width: '1000',
        height: '600',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "North America",
                "theme": "fusion",
                "formatNumberScale": "0",
                "numberSuffix": "M"
            },
        },
        "events": {
          "entityClick": function(evt, data) {
            if(data.label === 'United States '){
              thisClass.props.history.push('/usa');
            }
          },
        }
    });
    populationMap.render();
});
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div id="page-wrapper">
          <div class="container-fluid">
              <div class="row">
      <div class="col-lg-12">
          <h1 class="page-header">Click the Place</h1>
      </div>
      <div id="chart-container-northamerica"></div>
      </div>
      </div>
      </div>
    );
  }
}

export default NorthAmericaMap;
