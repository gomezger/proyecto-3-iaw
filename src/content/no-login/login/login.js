import React from 'react';
import './login.css';
//import PropType from 'prop-types';
import { postApi } from '../../../services/api';

class Login extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            error : false,
            loading : false
        }     
        this.updateInput = this.updateInput.bind(this);
        //this.loginSubmit = this.loginSubmit.bind(this);
    }

    render() {
        const alert_loading = this.state.loading ? <div id="alert" className="alert alert-info">Validando datos...</div> : '' ;
        const alert_error = this.state.error ? <div id="alert" className="alert alert-danger">Email o contraseña incorrecto/s</div> : '';


        return (
            <div className="login col-12 text-center pt-4 align-bottom d-flex align-items-end">
                <form className="card d-inline-block mt-4 mb-4 form-signin" onSubmit={this.login}>

                    <h1 className="h3 mb-3 font-weight-normal">Iniciar sesión</h1>

                    <label htmlFor="inputEmail" className="sr-only">Email</label>
                    <input type="email" id="inputEmail" onChange={this.updateInput} name="email" className="form-control" placeholder="Email" required autoFocus />

                    <label htmlFor="inputPassword" className="sr-only">Contraseña</label>
                    <input type="password" id="inputPassword" onChange={this.updateInput} name="password" className="form-control" placeholder="Contraseña" required />

                    {alert_error}
                    {alert_loading}

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
                </form>
            </div>
        )    
    }

    updateInput(e){
        const {value, name} = e.target
        this.setState({
            [name]: value
        });
    }

    login = (e) => {
        //anulo el submit del form
        e.preventDefault();

        //pongo el carter de validar datos
        this.setState({loading : true});

        //armo el body del post
        const data = {
            email : this.state.email.toLocaleLowerCase,
            password : this.state.password,
        }

        //hacemos la consulta
        postApi('auth/login', data, null)
            .then((response) => {
                this.setState({loading : false, error: false});                
                this.props.handleToken(response.data.access_token);   
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    error : true,
                    loading : false
                });
            });
    }


}

export default Login;