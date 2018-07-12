import React from "react";
import "./CarBox.css";

class CarBox extends React.Component {
    handleImgClick = () => {
        this.props.check(this.props.thisCar.clicked,this.props.thisCar.id)
    };

    render() {
        return (
            <div className="card p-0">
                <img
                    className="card-image-top"
                    alt={this.props.id}
                    src={this.props.src}
                    onClick={this.handleImgClick}
                />
            </div>
        )
    }
};

export default CarBox;