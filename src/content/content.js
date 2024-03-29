import React from 'react';
import NoLogin from './no-login/no-login';
import YesLogin from './yes-login/yes-login';
import { validateToken } from '../services/api';

class Content extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }

    render() {
        
        if(!this.isLogged())
            return  (
                <div className="min-heigth">
                    <NoLogin 
                        auth={this.auth}
                    />
                </div>
            )
        else
            return  (
                <div className="min-heigth">
                    <YesLogin />
                </div>
            )    
        
    }

    isLogged = () => {
        return validateToken();
        
    }
    
    auth = (bool) => {
        this.setState({auth: bool});
        this.props.auth = bool;
    }





}


export default Content;