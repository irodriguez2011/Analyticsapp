import React from 'react'

function sentimental_analysis(props) {
    return (
        <div className="sentimentalAnalysis">
                <h3> Sentimental Analysis </h3>
                <nav className="sentNav"> 
                <h4> {props.analysis}</h4> 
                <h4> {props.analysis2} </h4> 
                <h4> {props.analysis3} </h4> 
                </nav>
        </div>
    )
}

export default sentimental_analysis;
