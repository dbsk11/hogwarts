import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from './HogContainer'
import ChangeHog from './ChangeHog'

class App extends Component {
  state={
    hogList: hogs,
    filterTerm: "Alphabetical"
  }

  updateFilterTerm = (termFromChild) => {
    this.setState({
      filterTerm: termFromChild
    })
  }

  arrayToRender = () => {
    let arrayToShow = this.state.hogList
    if (this.state.filterTerm === "Alphabetical") {
      arrayToShow = [...this.state.hogList].sort((pigA, pigB) => {
        return pigA.name.localeCompare(pigB.name)
      })
      return arrayToShow
    }
    if (this.state.filterTerm === "Weight"){
      arrayToShow = [...this.state.hogList].sort((pigA, pigB) => {
        return pigA.weight - pigB.weight
      })
    }
    if (this.state.filterTerm === "Greased") {
      arrayToShow = this.state.hogList.filter((hogPOJO) => {
        return hogPOJO.greased
      })
    }
    if (this.state.filterTerm === "Non-Greased") {
      arrayToShow = this.state.hogList.filter((hogPOJO) => {
        return !hogPOJO.greased
      })
    }


    return arrayToShow
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Nav />
        <ChangeHog 
          filterTerm={this.state.filterTerm}
          updateFilterTerm={this.updateFilterTerm}
        />
        <HogContainer 
          hogs={this.arrayToRender()}
        />
      </div>
    );
  }
}

export default App;
