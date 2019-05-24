import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'jstree/dist/jstree.min';
import 'jstree/dist/themes/default/style.css';

class TreeView extends Component {

  static propTypes = {
    treeData: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    selectNode: PropTypes.array
  };

  static defaultProps = {
    onChange: () => false,
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.treeData !== this.props.treeData;
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
    const selectNode = this.props.selectNode || [];
    if (treeData) {
      $(this.treeContainer).jstree(true).settings = treeData;
      if (selectNode.length > 0) $(this.treeContainer).jstree(true).deselect_all();
      $(this.treeContainer).jstree(true).refresh();
      if (selectNode.length > 0) $(this.treeContainer).jstree(true).select_node(selectNode);
    }
  }

  render() {
    return (
      <div ref={div => this.treeContainer = div} />
    );
  }
}

export default TreeView;
