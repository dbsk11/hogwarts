import React from 'react'

class HogCard extends React.Component {
    state={
        clickedByUser: false
    }

    handleClick = (evt) => {
        this.setState((prevState) => {
            return {
                clickedByUser: !prevState.clickedByUser
            }
        })
    }

    render() {
        let {name, specialty, greased, weight} = this.props.hog
        let medal = this.props.hog['highest medal achieved']
        let imageName = name.toLowerCase().split(" ").join("_")
        let image = require(`../hog-imgs/${imageName}.jpg`)
        return (
            <div className="pigTile" onClick={this.handleClick}>
                <h2>{name}</h2>
                <img src={image} alt={name}/>
                {this.state.clickedByUser === true
                    ?
                <div>
                    <h4>Specialty: {specialty}</h4>
                    <h4>Greased: {greased ? "Yes" : "No"}</h4>
                    <h4>Weight: {weight} kilograms</h4>
                    <h4>Medal: {medal}</h4>
                </div>
                :
                null
                }
            </div>
        )
    }
}

export default HogCard