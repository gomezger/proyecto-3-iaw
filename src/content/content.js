import React from 'react';
import Login from './login/login';
import Carousel from './carousel/carousel';
import Us from './us/us';

class Content extends React.Component {
    render() {
        return  (
            <div className="min-heigth">
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

export default Content;