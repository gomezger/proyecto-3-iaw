import React from 'react';
import './puede.css';
import Cargando from '../../../components/cargando';


export default class Puede extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            materias : this.props.materias
        }
    }

    componentDidMount(){
        if(this.props.materias!==undefined)
            this.setState({
                materias : this.props.materias
            })
    }


    render(){
        var data;
        if(this.props.materias===null)
            data = <div className="col-12 mt-5 mb-5 float-left"><Cargando /></div>;    
        else if(this.props.materias.length===0)
            data = <div className="col-12 mt-5 mb-5 float-left">No hay materias</div>;
        else
            data = <div className="col-12 p-0">{this.props.materias}</div>


        return (
            <div className="container">
                <div className="col-12 p-0 float-left text-left">
                    <h3 className="titulo col-12 p-0 float-left ">{this.props.titulo}</h3>
                    {data}
                </div>
            </div>
        );
    }

}