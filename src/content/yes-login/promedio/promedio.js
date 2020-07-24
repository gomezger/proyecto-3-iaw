import React from 'react';
import CountUp from 'react-countup';
import { getApi, getToken } from '../../../services/api';
import './promedio.css';

export default class Promedio extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            promedio: 0.0
        }        
    }


    render() {
        return  (
            <div class="animated zoomInRight">
                <div className="col-12 display-4 promedio">
                    <CountUp 
                        start={0.0}
                        end={this.state.promedio}
                        duration={5}
                        separator=" "
                        decimals={2}
                        decimal="."
                    />
                </div>
                <small className="col-12">
                    Promedio
                </small>
            </div>
        )
    }

    
    componentDidMount = () => {
        this.getPromedio();
    }

    getPromedio = () => {

        //hacemos la consulta
        getApi('promedioAlumno', getToken())
            .then((response) => {
                this.setState({promedio : response.data.promedio});  
            })
            .catch((error) => {
                this.setState({error : true, loading : false });
            });
    }




}