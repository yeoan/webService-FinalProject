import React, {Component} from 'react';

class NorthAmericaMap extends React.Component {

  componentDidMount(){
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
            alert("You have clicked on " + data.label + ".");
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
      <div>
      <div class="col-lg-12">
          <h1 class="page-header">Click the Place</h1>
      </div>
      <div id="chart-container-northamerica"></div>
      </div>
    );
  }
}

export default NorthAmericaMap;
