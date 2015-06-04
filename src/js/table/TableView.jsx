import React from 'react';
import _ from 'underscore';

export default React.createClass({
  getInitialState() {
    return {
      tableData: []
    };
  },

  componentWillMount() {
    // Generate initial table data state
    this.setState({
      tableData: _.range(0, 10).map(rowIndex => _.range(0, 10))
    });
  },

  onNewDataClick() {
    var tableData = this.state.tableData.map(row => {
      row[0] = Math.random();
      return row;
    });

    this.setState({
      tableData: tableData
    });
  },

  renderCellEl(content, index) {
    return (
      <td key={index}>{content}</td>
    );
  },

  renderRowEl(contentList, index) {
    return (
      <tr key={index}>{contentList.map(this.renderCellEl)}</tr>
    );
  },

  render() {
    return (
      <div>
        <table>
          {this.state.tableData.map(this.renderRowEl)}
        </table>
        <button onClick={this.onNewDataClick}>New data plskthnxbye</button>
      </div>
    );
  }
});
