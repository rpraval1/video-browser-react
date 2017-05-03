import React, { Component } from 'react';
import '../../style/style.css'
class SearchBar extends Component{

  constructor(props){
      super(props);
      this.state = {
        inputState: ''
      };
  }
  handleInputChange(event){
    this.setState({
      inputState: event.target.value
    })
    this.props.onSearchTermChange(event.target.value)
  }

  render(){
    const {inputState} = this.state
    return (
      <div className='col-md-4 col-md-offset-4'>
        <input className="search-bar"
          value={inputState}
          onChange={this.handleInputChange.bind(this)}
          placeholder="Search"/>
      </div>
    );
  }
}

export default SearchBar;
