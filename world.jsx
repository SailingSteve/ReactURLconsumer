import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
  render() {
    return (
   		<div id='world'>
   			<h1>World</h1>
     	</div>
    );
  }
}
 
ReactDOM.render(<World/>, document.getElementById('world'));