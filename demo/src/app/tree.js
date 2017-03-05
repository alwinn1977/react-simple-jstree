import React, {Component} from 'react';
import TreeView from 'react-simple-jstree';

export class Tree extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        core: {
          data: [
            {
              text: 'Root node', children: [
              {text: 'Child node 1'},
              {text: 'Child node 2'}
              ]
            }
          ]
        }
      }
    };
  }

  handleClick() {
    const newData = this.state.data.core.data[0].children.slice();
    newData.push({text: 'New child node'});
    this.setState({
      data: {
        core: {
          data: [
            {
              text: 'Root node', children: newData
            }
          ]
        }
      }
    });
  }

  render() {
    const data = this.state.data;

    return (
      <div>
        <button onClick={() => this.handleClick()}>Add node</button>
        <br/><br/>
        <TreeView treeData={data}/>
      </div>
    );
  }
}
