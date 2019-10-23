import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';

console.log(img2); 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={img1}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        );
    }
}

 


export default DemoCarousel;
 