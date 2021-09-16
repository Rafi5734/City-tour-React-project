import React, { Component } from "react";
import Tour from "../Tour";
import "./tourList.css";
import { tourData } from "../../tourData";
class TourList extends Component {
    state = {
        tours: tourData,
    };
    removeTour = (id) => {
        // console.lo
        const { tours } = this.state;
        const sortedTour = tours.filter((tour) => tour.id !== id);
        this.setState({ tours: sortedTour });
    };

    render() {
        // console.log(this.state.tours);
        const { tours } = this.state;
        return (
            <section className="tourlist">
                {tours.map((tour) => (
                    <Tour
                        key={tour.id}
                        tour={tour}
                        removeTour={this.removeTour}
                    />
                ))}
            </section>
        );
    }
}

export default TourList;
