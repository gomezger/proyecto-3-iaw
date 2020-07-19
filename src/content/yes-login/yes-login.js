import React from 'react';
import Promedio from './promedio/promedio';
import { getApi, getToken } from '../../services/api';
import './yes-login.css';



export default class YesLogin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name_user : localStorage.getItem('name')
         }
    }

    componentDidMount = () => {
        this.getPromediosHistoricos();
    }

    render() {
        return  (
            <div className="top col-12 p-0 float-left">
                <div class="sombra col-12 p-0 float-left">
                    <div className="container">
                        <div className="nombre col-9 float-left text-left display-4 pt-3 pb-3 text-light">
                            ¡Hola! <br class="d-md-none"/>{this.state.name_user}
                        </div>
                        <div className="col-3 float-left p-0 pt-3 pt-md-2 pb-2 text-right text-light">
                            <Promedio />
                        </div>            
                    </div>
                </div>
            </div>
        )
    }

    getPromediosHistoricos = () => {
        //hacemos la consulta
        getApi('promedioMaterias', getToken())
            .then((response) => {
                this.setState({promedios : response.data.promedios.json()});  
                this.getPromedioCarrera(response.data.promedios);
            })
            .catch((error) => {
                this.setState({error : true, loading : false });
            });
    }



}
