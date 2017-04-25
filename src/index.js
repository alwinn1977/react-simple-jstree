import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      $(this.treeContainer).jstree(treeData);
      $(this.treeContainer).on('changed.jstree', (e, data) => {
        this.props.onChange(e, data);
      });
    }
  }

  componentDidUpdate() {
    const { treeData } = this.props;
    if (treeData) {
      $(this.treeContainer).jstree(true).settings = treeData;
      $(this.treeContainer).jstree(true).refresh();

    }
  }

  render() {
    return (
      <div ref={(div) => {this.treeContainer = div}} />
    );
  }
}

export default TreeView;
