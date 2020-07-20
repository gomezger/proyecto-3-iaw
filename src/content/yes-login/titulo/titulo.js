import React from 'react';



export default class Titulo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name_user : localStorage.getItem('name')
         }
    }


    render() {
        return  (                     
            <>
                <div className="display-4">¡Hola! {this.state.name_user}</div>
                <small><div role="button" className="float-left pt-2 pl-0 pl-md-2" onClick={this.logout}>Cerrar sesión</div></small>                        
            </>
        )
    }

    logout = () => {
        localStorage.removeItem('token');
        /*Recargamos desde caché*/
        window.location.reload(); 
        /*Forzamos la recarga*/
        window.location.reload(true);
    }



}
