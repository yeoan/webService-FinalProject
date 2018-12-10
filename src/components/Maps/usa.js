import React, {Component} from 'react';

class UsaMap extends React.Component {

  componentDidMount(){
    var thisClass = this;
    FusionCharts.ready(function() {
    var populationMap = new FusionCharts({
        type: 'maps/usa',
        renderAt: 'chart-container-usa',
        width: '1000',
        height: '600',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "USA",
                "theme": "fusion",
                "formatNumberScale": "0",
                "numberSuffix": "M"
            },
        },
        "events": {
          "entityClick": function(evt, data) {
            if(data.label === 'California'){
              thisClass.props.history.push('/california');
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
      <div>
      <div class="col-lg-12">
          <h1 class="page-header">Click the Place</h1>
      </div>
      <div id="chart-container-usa"></div>
      </div>
    );
  }
}

export default UsaMap;
