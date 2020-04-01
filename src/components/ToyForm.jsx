import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: " ",
    image: " "
  }

  handleInputs = (ev) => {
    this.setState({
      [ev.target.name] : ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addToy(this.state)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" 
                 placeholder="Enter a toy's name..." className="input-text"
                 value={this.state.name} onChange={this.handleInputs}
          />
          <br/>
          <input type="text" name="image" 
                 placeholder="Enter a toy's image URL..." className="input-text"
                 value={this.state.image} onChange={this.handleInputs}
          />
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
