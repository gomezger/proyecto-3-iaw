import React from 'react';
import Promedio from './promedio/promedio';
import Titulo from './titulo/titulo';
import Puede from './puede/puede';
import { getApi, getToken } from '../../services/api';
import './yes-login.css';
import Materia from './puede/materia/materia';



export default class YesLogin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name_user : localStorage.getItem('name'),
            cursar : null ,
            aprobar: null,
            rendidos: null
        }
    }

    componentDidMount = () => {
        this.getPuedeRendir();
        this.getPuedeCursar();
        this.getFinalesRendidos();
    }


    render() {
        return  (
            <div className="fondo-gris col-12 p-0 float-left">
                <div className="top col-12 p-0 float-left">
                    <div className="sombra col-12 p-0 float-left">
                        <div className="container">
                            <div className="nombre col-9 p-0 float-left text-left pt-3 pt-md-4 pb-3 pb-mb-1 text-light">
                                <Titulo />
                            </div>

                            <div className="col-3 float-left p-0 pt-4 pt-md-4 pb-2 pb-md-4 text-right text-light">
                                <Promedio />
                            </div> 
                        </div>
                    </div>
                </div>

                <div className="clearfix"></div>

                <div className="puede col-12 p-0 float-left pb-5">
                    <div className="container p-0">
                        <div className="col-lg-12 p-0 float-left">
                            <Puede titulo="Puede cursar" materias={this.state.cursar}/>
                        </div>
                        <div className="col-lg-12 p-0 float-left">
                            <Puede titulo="Puede rendir" materias={this.state.aprobar}/>
                        </div> 
                    </div>
                </div>

                <div className="clearfix"></div>

                <div className="col-12 float-left p-0 pb-2">
                    <div className="container p-0">
                        <div className="col-lg-12 p-0 float-left">
                            <Puede titulo="Finales rendidos" materias={this.state.rendidos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    getPuedeCursar = () => {
        //hacemos la consulta
        getApi('a-cursar', getToken())
            .then((response) => {
                const { materias } = response.data;
                this.setState({cursar : this.armarListaMaterias(materias)});
            })
            .catch((error) => {
                this.setState({error : true, loading : false });
            });
    }

    getPuedeRendir = () => {
        //hacemos la consulta
        getApi('a-rendir', getToken())
            .then((response) => {
                const { materias } = response.data;
                this.setState({aprobar : this.armarListaMaterias(materias)});
            })
            .catch((error) => {
                this.setState({error : true, loading : false });
            });
    }

    getFinalesRendidos = () => {
        //hacemos la consulta
        getApi('aprobadas', getToken())
            .then((response) => {
                const { aprobadas } = response.data;
                this.setState({rendidos : this.armarListaFinales(aprobadas)});
            })
            .catch((error) => {
                this.setState({error : true, loading : false });
            });
    }

    logout = () => {
        localStorage.removeItem('token');
        /*Recargamos desde caché*/
        window.location.reload(); 
        /*Forzamos la recarga*/
        window.location.reload(true);
    }

    armarListaMaterias = (materias) => {
        if(materias.length === 0){
            return [];
        }else
            return materias.map((materia) =>
                <Materia key={materia.codigo} codigo={materia.codigo} nombre={materia.nombre} profesor_imagen={materia.profesor_imagen} />    
            );    
    }

    armarListaFinales = (aprobadas) => {
        if(aprobadas.length === 0){
            return [];
        }else
            return aprobadas.map((aprobada) =>
                <Materia key={aprobada.materia.codigo} codigo={aprobada.materia.codigo} nombre={aprobada.materia.nombre} nota={aprobada.final} />    
            );    
    }


}
