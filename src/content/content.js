import React from 'react';
import NoLogin from './no-login/no-login';

class Content extends React.Component {
    render() {
        const content = if(auth()){
            
        }
        
        
        return  (
            <div className="min-heigth">
                <NoLogin />
            </div>
        )
    }
}

function auth(){
    const auth = localStorage.getItem('auth');
    if(auth==null)
        return false;
    return true;
}

export default Content;