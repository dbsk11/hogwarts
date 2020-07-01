import React from 'react'

class ChangeHog extends React.Component {
    handleSelect = (evt) => {
        this.props.updateFilterTerm(evt.target.value)
    }

    render(){
        return(
            <select value={this.props.filterTerm} onChange={this.handleSelect}>
                <option value="Alphabetical">
                    Alphabetical
                </option>
                <option value="Weight">
                    Weight
                </option>
                <option value="Greased">
                    Greased
                </option>
                <option value="Non-Greased">
                    Non-Greased
                </option>
            </select>
        )
    }
}

export default ChangeHog