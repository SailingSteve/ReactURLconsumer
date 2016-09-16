import React from 'react';
import ReactDOM from 'react-dom';

var picture = "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg";

class Picture extends React.Component {
  render() {
    return (
    	<div id='picture'>
    		<img src={picture}></img>
    	</div>
    );
  }
}
 
ReactDOM.render(<Picture />, document.getElementById('picture'));