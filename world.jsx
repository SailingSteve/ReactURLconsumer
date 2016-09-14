import React from 'react';
import ReactDOM from 'react-dom';

var picture = "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg";

class World extends React.Component {
  render() {
    return (
    	<div>
    		<div id='alpaca'>
    			<img src={picture} style={{height: 200}}></img>
    		</div>
   			<div id='worldh1'> 
   				<h1>World</h1>
   			</div>
     	</div>
    );
  }
}
 
ReactDOM.render(<World/>, document.getElementById('world'));