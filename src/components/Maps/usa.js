import React, {
  Component
} from 'react';

class UsaMap extends React.Component {

  componentDidMount() {
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
            switch (data.label) {
              case 'Arizona':
                thisClass.props.history.push('/usaStates/Arizona/5551752');
                break;
              case 'Arkansas':
                thisClass.props.history.push('/usaStates/Arkansas/4099753');
                break;
              case 'California':
                thisClass.props.history.push('/usaStates/California/5332921');
                break;
              case 'Colorado':
                thisClass.props.history.push('/usaStates/Colorado/5417618');
                break;
              case 'Connecticut':
                thisClass.props.history.push('/usaStates/Connecticut/4831725');
                break;
              case 'Delaware':
                thisClass.props.history.push('/usaStates/Delaware/4142224');
                break;
              case 'District of Columbia':
                thisClass.props.history.push('/usaStates/District_of_Columbia/4138106');
                break;
              case 'Florida':
                thisClass.props.history.push('/usaStates/Florida/4155751');
                break;
              case 'Georgia':
                thisClass.props.history.push('/usaStates/Georgia/4197000');
                break;
              case 'Hawaii':
                thisClass.props.history.push('/usaStates/Hawaii/5855797');
                break;
              case 'Idaho':
                thisClass.props.history.push('/usaStates/Idaho/5596512');
                break;
              case 'Illinois':
                thisClass.props.history.push('/usaStates/Illinois/4896861');
                break;
              case 'Indiana':
                thisClass.props.history.push('/usaStates/Indiana/4861712');
                break;
              case 'Iowa':
                thisClass.props.history.push('/usaStates/Iowa/4862182');
                break;
              case 'Kansas':
                thisClass.props.history.push('/usaStates/Kansas/4273857');
                break;
              case 'Kentucky':
                thisClass.props.history.push('/usaStates/Kentucky/6254925');
                break;
              case 'Louisiana':
                thisClass.props.history.push('/usaStates/Louisiana/4331987');
                break;
              case 'Maine':
                thisClass.props.history.push('/usaStates/Maine/4971068');
                break;
              case 'Maryland':
                thisClass.props.history.push('/usaStates/Maryland/4361885');
                break;
              case 'Massachusetts':
                thisClass.props.history.push('/usaStates/Massachusetts/6254926');
                break;
              case 'Michigan':
                thisClass.props.history.push('/usaStates/Michigan/5001836');
                break;
              case 'Minnesota':
                thisClass.props.history.push('/usaStates/Minnesota/5037779');
                break;
              case 'Mississippi':
                thisClass.props.history.push('/usaStates/Mississippi/4436296');
                break;
              case 'Missouri':
                thisClass.props.history.push('/usaStates/Missouri/4398678');
                break;
              case 'Montana':
                thisClass.props.history.push('/usaStates/Montana/5667009');
                break;
              case 'Nebraska':
                thisClass.props.history.push('/usaStates/Nebraska/5073708');
                break;
              case 'Nevada':
                thisClass.props.history.push('/usaStates/Nevada/5509151');
                break;
              case 'New Hampshire':
                thisClass.props.history.push('/usaStates/New_Hampshire/5090174');
                break;
              case 'New Jersey':
                thisClass.props.history.push('/usaStates/New_Jersey/5101760');
                break;
              case 'New Mexico':
                thisClass.props.history.push('/usaStates/New_Mexico/5481136');
                break;
              case 'New York':
                thisClass.props.history.push('/usaStates/New_York/5128638');
                break;
              case 'North Carolina':
                thisClass.props.history.push('/usaStates/North_Carolina/4482348');
                break;
              case 'North Dakota':
                thisClass.props.history.push('/usaStates/North_Dakota/5690763');
                break;
              case 'Ohio':
                thisClass.props.history.push('/usaStates/Ohio/5165418');
                break;
              case 'Oklahoma':
                thisClass.props.history.push('/usaStates/Oklahoma/4544379');
                break;
              case 'Oregon':
                thisClass.props.history.push('/usaStates/Oregon/5744337');
                break;
              case 'Pennsylvania':
                thisClass.props.history.push('/usaStates/Pennsylvania/6254927');
                break;
              case 'Rhode Island':
                thisClass.props.history.push('/usaStates/Rhode_Island/5224323');
                break;
              case 'South Carolina':
                thisClass.props.history.push('/usaStates/South_Carolina/4597040');
                break;
              case 'South Dakota':
                thisClass.props.history.push('/usaStates/South_Dakota/5769223');
                break;
              case 'Tennessee':
                thisClass.props.history.push('/usaStates/Tennessee/4662168');
                break;
              case 'Texas':
                thisClass.props.history.push('/usaStates/Texas/4736286');
                break;
              case 'Utah':
                thisClass.props.history.push('/usaStates/Utah/5549030');
                break;
              case 'Vermont':
                thisClass.props.history.push('/usaStates/Vermont/4927589');
                break;
              case 'Virginia':
                thisClass.props.history.push('/usaStates/Virginia/6254928');
                break;
              case 'Washington':
                thisClass.props.history.push('/usaStates/Washington/4880731');
                break;
              case 'West Virginia':
                thisClass.props.history.push('/usaStates/West_Virginia/4826850');
                break;
              case 'Wisconsin':
                thisClass.props.history.push('/usaStates/Wisconsin/5279468');
                break;
              case 'Wyoming':
                thisClass.props.history.push('/usaStates/Wyoming/5053526');
                break;
              default:

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
    return ( <div id="page-wrapper">
      <div class="container-fluid">
      <div class="row">
      <div class="col-lg-12">
      <h1 class="page-header"> Click the Place </h1> </div> <div id="chart-container-usa"> </div>
      </div></div></div>
    );
  }
}

export default UsaMap;
