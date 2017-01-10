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
render() {
  const data = {
      'core' : {
        'data' : [
          { "text" : "Root node", "children" : [
              { "text" : "Child node 1" },
              { "text" : "Child node 2" }
            ]
          }
        ]
      }
    };
  
  return (
    <TreeView treeData={data} />
  );
}


```

## License

MIT
