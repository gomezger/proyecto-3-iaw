import React from 'react';
import Login from './login/login';
import Carousel from './carousel/carousel';
import Us from './us/us';

class NoLogin extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    handleToken = (token) => {   
        this.props.handleToken(token);    
        this.props.auth(true);   
    }


    render() {
        return  (
            <div className="col-12 p-0">
                <Carousel />
                <div className="container">
                    <div className="col-md-6 float-left">
                        <Us />   
                    </div>
                    <div className="col-md-6 float-left">
                        <Login handleToken={this.handleToken} />   
                    </div>
                </div>
            </div>
        )
    }

}

export default NoLogin;