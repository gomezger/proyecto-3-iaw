import React from 'react';
import './materia.css';

export default class Materia extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nombre : this.props.nombre,
            codigo : this.props.codigo,
            profesor_imagen : this.props.profesor_imagen,
            profesor : this.props.profesor,
            cuatrimestre : this.props.cuatrimestre,
        }
    }

    render(){
        return (
            <>
                <div className="materia col-12 p-0 float-left">
                    <div className="codigo col-2 col-lg-1 p-0 pt-2 pt-lg-2 pb-2 float-left">{this.state.codigo}</div> 
                    <div className="nombre col-7 col-lg-6 p-0 pt-1 pt-lg-2 pb-2 float-left">{this.state.nombre}</div> 
                    <div className="cuatri col-1 col-lg-2 p-0 pt-1 pt-lg-2 pb-2 float-left d-none d-lg-inline-block">{(this.state.cuatrimestre%2)+1} cuatri.</div> 
                    <div className="profesor col-7 col-lg-2 p-0 pt-1 pt-lg-2 pb-2 float-left d-none d-lg-inline-block">{this.state.profesor}</div> 
                    <div className="imagen col-3 col-lg-1 p-0 pt-1 pt-lg-0 float-left text-right">
                        <img className="p-0" alt="" src={'data:image/jpeg;base64,'+this.state.profesor_imagen}></img>
                    </div>
                </div>                
            </>
        );
    }
}