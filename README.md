# react-simple-jstree

![Downloads](https://img.shields.io/npm/dm/react-simple-jstree.svg)
![Downloads](https://img.shields.io/npm/dt/react-simple-jstree.svg)
![npm version](https://img.shields.io/npm/v/react-simple-jstree.svg)
![dependencies](https://img.shields.io/david/alwinn1977/react-simple-jstree.svg)
![dev dependencies](https://img.shields.io/david/dev/alwinn1977/react-simple-jstree.svg)
![License](https://img.shields.io/npm/l/react-simple-jstree.svg)

The simple React.js wrapper for [jsTree](https://github.com/vakata/jstree).
This component allows you to draw trees from JSON data easily and quickly.
See [jsTree](https://github.com/vakata/jstree) to get more information
about appropriate JSON data structure.

## Getting Started

Install it via npm:

```shell
npm install react-simple-jstree
```

And include in your project:

```javascript
import TreeView from 'react-simple-jstree';
```

## Components's Props

### treeData

It is a required prop. It containes a JSON data for tree. See [jsTree](https://github.com/vakata/jstree) to get more information 
about appropriate JSON data structure.

### onChange

It is an optional event handler for the changed event, which occurs when one or more nodes
 have been selected. See example below for this prop's usage details.


## React.js (ES6) usage example:

```javascript
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
      },
      selected: [],
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

  handleChange(e, data) {
    this.setState({
      selected: data.selected,
    })
  }

  render() {
    const data = this.state.data;

    return (
      <div>
        <button onClick={() => this.handleClick()}>Add node</button>
        <br/><br/>
        <TreeView treeData={data} onChange={(e, data) => this.handleChange(e, data)} />
        <br />
        <p>Selected nodes: {this.state.selected.join(', ')}</p>
      </div>
    );
  }
}
```

IMPORTANT! If you use webpack, you have to install and configure css loaders and file-loader to load
*.gif and *.jpg files in webpack.conf.js, for example:

```
loaders: [
     
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
          'postcss'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel'
        ]
      },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader'
      },
    ]

```

See example project in demo folder for details.

## License

MIT
