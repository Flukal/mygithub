import React, {Component} from 'react';
import $ from 'jquery'; 
import Profile from './github/Profile';
import Search from './github/Search';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: 'Flukal',
      userData: [],
      userRepos: [],
      perPage: 6
    }
  }

  // Get data from github
  getUserData(){
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userData: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username: null})
        alert(err);
      }.bind(this)
    });
  } 

  // Get user repos
  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'/sort=created',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ userRepos: data });
      }.bind(this),
      error: function (xhr, status, err) {
        this.setState({ username: null })
        alert(err);
      }.bind(this)
    });
  }

  handleFormSubmit(username){
    this.setState({username: username}, function(){
      this.getUserData();
      this.getUserRepos();
    }); 
  }

  componentDidMount(){
    this.getUserData();
    this.getUserRepos();
  }

  render(){
    return(
      <div className="container">
        <h1>My Github and search users</h1>
        <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
        <Profile {...this.state} />
      </div>
    )
  }
}

export default App;
