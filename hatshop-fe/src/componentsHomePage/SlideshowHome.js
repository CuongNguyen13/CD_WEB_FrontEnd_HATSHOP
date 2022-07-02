import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

class SlideshowHome extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                        />


                    </Carousel.Item>
                   
                </Carousel>
            </div>
        );
    }
}

export default SlideshowHome;