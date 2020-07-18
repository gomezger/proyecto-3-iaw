import React from 'react';
import './carousel.css';

class Carousel extends React.Component {
    render() {
        return (
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Mi Estado</h1>
                    <p className="lead font-weight-normal text-secondary">By Mis Materias</p>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        )
        
    }
}

export default Carousel;