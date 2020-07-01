import React from 'react'
import HogCard from './HogCard'

let HogContainer = (props) => {
    let arrayOfHogs = props.hogs.map((hogPOJO) => {
        return <HogCard
            hog={hogPOJO}
            key={hogPOJO.id}
        />
    })
    return(
        <div className="ui grid container">
            {arrayOfHogs}
        </div>
    )
}

export default HogContainer