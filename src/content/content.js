import React from 'react';
import NoLogin from './no-login/no-login';
import YesLogin from './yes-login/yes-login';

class Content extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            auth : false,
            token: null
        }
    }


    render() {
        
        if(!this.state.auth)
            return  (
                <div className="min-heigth">
                    <NoLogin 
                        handleToken={this.handleToken}
                        auth={this.auth}
                    />
                </div>
            )
        else
            return  (
                <div className="min-heigth">
                    <YesLogin 
                        token={this.state.token}
                    />
                </div>
            )    
        
    }
    
    auth = (bool) => {
        this.setState({
            auth: bool,
        })
    }

    handleToken = (token) => {
        this.setState({
            token: token
        })
    }

}


export default Content;