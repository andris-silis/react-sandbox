import React from 'react';
import _ from 'underscore';

export default React.createClass({
  shouldComponentUpdate(nextProps) {
    return nextProps.content !== this.props.content;
  },

  render() {
    return (
        <td>{this.props.content}</td>
    );
  }
});
