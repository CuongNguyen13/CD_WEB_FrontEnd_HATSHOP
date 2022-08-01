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
                            src="https://fado.vn/blog/wp-content/uploads/2020/10/cac-thuong-hieu-mu-luoi-trai-noi-tieng-1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://fado.vn/blog/wp-content/uploads/2020/10/cac-thuong-hieu-mu-luoi-trai-noi-tieng-7.jpg"
                            alt="Second slide"
                        />


                    </Carousel.Item>
                   
                </Carousel>
            </div>
        );
    }
}

export default SlideshowHome;