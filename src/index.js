import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import 'jstree/dist/jstree.min';
import 'jstree/dist/themes/default/style.css';

class TreeView extends Component {

  static propTypes = {
    treeData: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { treeData } = this.props;
    if (treeData) {
      $('#data').jstree(treeData);
    }
  }


  render() {
    return (
      <div id="data" />
    );
  }
}

export default TreeView;
