import React from 'react';
import ReactDOM from 'react-dom';
 
class Hello extends React.Component {
  render() {
    return <div id='hello'><h1>Hello</h1></div>
  }
}
 
ReactDOM.render(<Hello/>, document.getElementById('hello'));