import React from 'react'

function averageratings(props) {
    return (
        <div className="averageRating">
            <h3>Average Ratings </h3>
            <h4> {props.ratings}  </h4>
        </div>
    )
}

export default averageratings;
