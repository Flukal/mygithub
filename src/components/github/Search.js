import React, { Component } from 'react';

class Search extends Component {

  onSubmit(e){
    e.preventDefault();
    let username = this.refs.username.value.trim();
    if(!username){
      alert('Enter a username');
      return;
    }
    this.props.onFormSubmit(username);
    this.refs.username.value = '';
  }

  render() {
    return (
      <div className="searchForm">
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Search Github Users</label>
          <input type="text" ref="username" />
        </form>
      </div>
    )
  }
}

export default Search;