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

React.js (ES6) usage example:

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
        <button onClick={() => this.handleClick()}>Add node and Update</button>
        <br/><br/>
        <TreeView treeData={data}/>
      </div>
    );
  }
}


```

IMPORTANT! If you use webpack, you have to install and configure file-loader to load
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
