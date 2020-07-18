import React from 'react';
import NoLogin from './no-login/no-login';
import YesLogin from './yes-login/yes-login';

class Content extends React.Component {
    render() {
        const auth = this.auth(); 
        
        if(!auth)
            return  (
                <div className="min-heigth">
                    <NoLogin />
                </div>
            )
        else
            return  (
                <div className="min-heigth">
                    <YesLogin />
                </div>
            )    
        
    }
    
    auth(){
        const auth = localStorage.getItem('auth');
        if(auth==null)
            return false;
        return true;
    }
}


export default Content;