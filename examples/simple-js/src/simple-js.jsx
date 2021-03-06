const React = require ('react');
const WorldMap = require('react-svg-worldmap').WorldMap;

export default class SimpleJs extends React.Component {
  render() {
    const data1 =
      [
        { "country": "cn", value: 1389618778 }, // china
        { "country": "in", value: 1311559204 }, // india
        { "country": "us", value: 331883986 },  // united states
        { "country": "id", value: 264935824 },  // indonesia
        { "country": "br", value: 210301591 },  // brazil
        { "country": "ng", value: 208679114 },  // nigeria
        { "country": "ru", value: 141944641 },  // russia
        { "country": "mx", value: 127318112 }   // mexico
      ]
    return <div id="root">
      <WorldMap color="red" tooltipBgColor={"blue"} title="Top 10 Populous Countries" valueSuffix="people" size="lg" data={data1} frame={true} />
    </div>;
  }
}
