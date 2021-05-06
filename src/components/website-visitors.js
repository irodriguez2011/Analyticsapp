import React from 'react'

function websiteVisitors(props) {
    return (
        <div className="websiteVisitors">
            <h3> Website Visitors</h3>
            <h4> {props.webVisitors}</h4>
            <div className="graph"> <p> Graph</p> </div>
        </div>
    )
}

export default websiteVisitors;
