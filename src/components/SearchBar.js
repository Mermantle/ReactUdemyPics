import React from 'react';

class SearchBar extends React.Component {
   state = { term: ''};

   // we do not provide parenthesis to call back function 'onInputChange' to any eventHandler like onChange as 
   // it would run each time render is called - so without it will only run
   // when input text has changed - this is a comment problem 
    render () {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field" >
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={(e) => this.setState({ term: e.target.value })} 
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;