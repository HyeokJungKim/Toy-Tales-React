import React, { Component } from 'react';

class ToyCard extends Component {
  
  handleDonate = (ev) => {
    this.props.deleteToy(this.props.toy.name)
  }

  handleLikes = (ev) => {
    this.props.updateToy(this.props.toy.name, 1)
  }

  render() {
    const name = this.props.toy.name
    const image = this.props.toy.image
    const likes = this.props.toy.likes

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn" onClick={this.handleLikes}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDonate}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
