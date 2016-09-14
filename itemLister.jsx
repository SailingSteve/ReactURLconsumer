import React from 'react';
import ReactDOM from 'react-dom';

class ItemLister extends React.Component {
    constructor() {
        super();
        this.state = {items: []};
    }
    
    componentDidMount() {
        fetch(`https://api.github.com/users/octocat/gists`) 
            .then(result=>result.json())
            .then(items=>this.setState({items}));
    }
    
    render() {        
        return(
            <div id='list'>
                <div id='nameList'>List of git commits:</div>
                <ul>
                    {this.state.items.length ?
                        this.state.items.map(item=>
                            <li key={item.id}>{item.updated_at}</li>) :
                            <li>Loading...</li>
                    }
                </ul>
            </div>  
        );
    }
}

ReactDOM.render(<ItemLister />, document.getElementById('itemLister'));


/*
https://www.quora.com/Is-it-possible-to-consume-a-RESTful-API-with-React-js-alone-i-e-without-any-server-side-language-provided-the-API
http://jsfiddle.net/weqm8q5w/6/
9/14/16, Works perfectly when renamed itemLister.jsx
*/