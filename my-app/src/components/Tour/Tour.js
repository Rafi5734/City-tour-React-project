import React, { Component } from "react";
import "./tour.css";
class Tour extends Component {
    render() {
        // console.log(this.props);
        const { id, city, name, img, info } = this.props.tour;
        const { removeTour } = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="" />
                    <button
                        className="close-btn"
                        onClick={() => removeTour(id)}
                    >
                        &times;
                    </button>
                </div>
                <div className="tour-info">
                    <h1 className="secondary-info city-name">{city}</h1>
                    <h4 className="secondary-info tour-name">{name}</h4>
                    <p className="info-paragraph">{info}</p>
                </div>
            </article>
        );
    }
}

export default Tour;
