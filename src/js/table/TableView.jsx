import React from 'react';
import _ from 'underscore';
import TableCellView from './TableCellView.jsx';

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

  componentDidMount() {
    this.randomizeData();
  },

  onNewDataClick() {
    this.randomizeData();
  },

  randomizeData() {
    var tableData = this.state.tableData.map(row => {
      row[0] = Math.random();
      return row;
    });

    this.setState(
      {
        tableData: tableData
      },
      () => _.defer(() => requestAnimationFrame(this.randomizeData))
    );
  },

  renderCellEl(content, index) {
    return (
      <TableCellView key={index} content={content} />
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
