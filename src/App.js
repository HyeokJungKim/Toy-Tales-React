import React from 'react';
import './App.css';
import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'

class App extends React.Component{

  state = {
    toys: data,
    display: false
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addToy = (newToyDataFromForm) => {
    let newToy = {...newToyDataFromForm, likes: 0}
    let theNewToysArray = [...this.state.toys, newToy]
    this.setState({
      toys: theNewToysArray
    })
  }

  deleteToy = (toyName) => {
    let filteredArray = this.state.toys.filter((toy) => {
      return toy.name !== toyName
    })

    this.setState({
      toys: filteredArray
    })

  }

  updateToy = (toyName, num) => {
      let modifiedArray = this.state.toys.map((toy) => {
          if (toy.name === toyName) {
              let copiedToy = {
                     ...toy,
                     likes: toy.likes + num
              }
        return copiedToy
      } else {
        return toy
      }
    })

    this.setState({
      toys: modifiedArray
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
           toys={this.state.toys}
           deleteToy={this.deleteToy}
           updateToy={this.updateToy}
        />
      </>
    );
  }

}

export default App;
