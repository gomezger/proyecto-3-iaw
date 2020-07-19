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

    auth = (e) => {    
        this.props.auth(e);   
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
                        <Login auth={this.auth} />   
                    </div>
                </div>
            </div>
        )
    }

}

export default NoLogin;