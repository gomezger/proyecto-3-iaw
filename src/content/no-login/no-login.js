import React from 'react';
import Login from '../login/login';
import Carousel from '../carousel/carousel';
import Us from '../us/us';

class NoLogin extends React.Component {
    render() {
        return  (
            <div className="col-12 p-0">
                <Carousel />
                <div className="container">
                    <div className="col-md-6 float-left">
                        <Us />   
                    </div>
                    <div className="col-md-6 float-left">
                        <Login />   
                    </div>
                </div>
            </div>
        )
    }
}

export default NoLogin;