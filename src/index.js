import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import 'jstree/dist/jstree.min';
import 'jstree/dist/themes/default/style.css';

class TreeView extends Component {

  static propTypes = {
    treeData: PropTypes.object.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => false,
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.treeData === this.props.treeData) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    const { treeData } = this.props;
    if (treeData) {
      $('#data').jstree(treeData);
      $('#data').on('changed.jstree', (e, data) => {
        this.props.onChange(e, data);
      });
    }
  }

  componentDidUpdate() {
    const { treeData } = this.props;
    if (treeData) {
      $('#data').jstree(true).settings = treeData;
      $('#data').jstree(true).refresh();

    }
  }

  render() {
    return (
      <div id="data" />
    );
  }
}

export default TreeView;
