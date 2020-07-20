import React from 'react';
import './materia.css';

export default class Materia extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nombre : this.props.nombre,
            codigo : this.props.codigo,
            profesor_imagen : this.props.profesor_imagen,
            nota : this.props.nota
        }
    }

    render(){
        var columna = '';
        if(this.state.nota === undefined){
            columna = <div className="imagen col-3 col-lg-1 p-0 pt-1 pt-lg-0 float-left text-right">
                        <img class="p-0" alt="" src={'data:image/jpeg;base64,'+this.state.profesor_imagen}></img>
                    </div>;
        }else{
            columna = <div className=" col-3 col-lg-1 p-0 pt-lg-0 float-left text-center text-right">
                        <div className="alert alert-info p-1">{this.state.nota}</div>
                    </div>;
        }


        return (
            <>
                <div className="materia col-12 p-0 float-left">
                    <div className="codigo col-2 p-0 pt-2 pt-lg-2 pb-2 float-left">{this.state.codigo}</div> 
                    <div className="nombre col-7 col-lg-9 p-0 pt-1 pt-lg-2 pb-2 float-left">{this.state.nombre}</div> 
                    {columna}
                </div>                
            </>
        );
    }
}