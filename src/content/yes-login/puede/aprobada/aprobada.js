import React from 'react';
import './aprobada.css';

export default class Aprobada extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nombre : this.props.nombre,
            codigo : this.props.codigo,
            nota : this.props.nota,
            profesor : this.props.profesor
        }
    }

    render(){
        return (
            <>
                <div className="materia col-12 p-0 float-left">
                    <div className="codigo col-2 col-lg-1 p-0 pt-2 pt-lg-2 pb-2 float-left">{this.state.codigo}</div> 
                    <div className="nombre col-8 col-lg-8 p-0 pt-1 pt-lg-2 pb-2 pr-2 float-left">{this.state.nombre}</div> 
                    <div className="profesor col-lg-2 p-0 pt-1 pt-lg-2 pb-2 float-left pr-2 d-none d-lg-inline-block">{this.state.profesor}</div> 
                    <div className="col-2 col-lg-1 p-0 pt-lg-0 float-left text-center text-right">
                        <div className="alert alert-info p-1">{this.state.nota}</div>
                    </div>
                </div>                
            </>
        );
    }
}