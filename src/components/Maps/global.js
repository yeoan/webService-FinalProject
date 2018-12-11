import React, {Component} from 'react';


class GlobalMap extends React.Component {

  componentDidMount(){
    var thisClass = this;
    FusionCharts.ready(function() {
    var populationMap = new FusionCharts({
        type: 'maps/world',
        renderAt: 'chart-container',
        width: '1000',
        height: '600',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Global World",
                "theme": "fusion",
                "formatNumberScale": "0",
                "numberSuffix": "M"
            },
        },
        "events": {
          "entityClick": function(evt, data) {
            if(data.label === 'North America'){
              thisClass.props.history.push('/northamerica');
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
      <div id="chart-container"></div>

              </div>

          </div>

      </div>

    );
  }
}

export default GlobalMap;
