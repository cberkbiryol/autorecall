import React from "react";
import "./Jumbo.css";

const Jumbo = props =>{
    const R=255-255*props.score[0]/props.score[1];
    const G=255*props.score[0]/props.score[1];
    
    const scoreStyle = {
        color: `rgb(${R},${G},0)`
    }
    const boxStyle = {
        backgroundColor: `rgba(1,${R},${G},.25)`
    }
return (
    <div className="jumbotron jumbotron-fluid m-0">
        <div className="container">
            <p className="text-center m-0">
                <i className="material-icons icon1 m-0">
                    drive_eta
                </i>
            </p>
            <h1 className="display-1 text-center head1">
                Auto Recall
            </h1>
            <h1 className="display-5 text-center head2">
                Click all  {props.score[1]} car images without clicking the same image twice...
            </h1>
            <div className="head3box" style={boxStyle}>
                <h4 className="display-4 text-center head3" style={scoreStyle}>
                    Current Score:{props.score[0]}/{props.score[1]}
                </h4>
            </div>
            <h4 className="display-5 text-center head2">
                {props.message}
            </h4>
        </div>
    </div>  
)};

export default Jumbo;