import React, { Component } from 'react';
import RepoList from './RepoList';

class Profile extends Component {

  render() {
    return (
      <div className="profile">
        <h3>{this.props.userData.name}</h3>
        <img src={this.props.userData.avatar_url} alt="profile-pic" />
        <div className="userInfo">
          <div>
            <ul>
              <li><strong>Username:</strong>{this.props.userData.login}</li>
              <li><strong>Location:</strong>{this.props.userData.location}</li>
              <li><strong>Bio:</strong>{this.props.userData.bio}</li>
              <div>
                <a target="_blank" href={this.props.userData.html_url} rel="noopener noreferrer">Visit Profile</a>
              </div>
            </ul>
          </div>
          <div className="followers">
            <li>{this.props.userData.public_repos} Repos</li>
            <li>{this.props.userData.public_gists} Public Gists</li>
            <li>{this.props.userData.followers} Followers</li>
            <li>{this.props.userData.following} Following</li>
          </div>
        </div>
        <div>
          <h3>User Repository</h3>
          <RepoList userRepos={this.props.userRepos} />
        </div>
      </div>
    )
  }
}

export default Profile;
