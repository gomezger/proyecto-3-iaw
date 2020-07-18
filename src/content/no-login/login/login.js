import React from 'react';
import './login.css';

class Login extends React.Component {
    
    constructor(){
        super();
        this.state = {
            email : '',
            password : '',
        }     
        this.updateInput = this.updateInput.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
    }
    render() {
        return (
            <div className="login col-12 text-center pt-4 align-bottom d-flex align-items-end">
                <form className="card d-inline-block mt-4 mb-4 form-signin" onSubmit={this.loginSubmit}>

                    <h1 className="h3 mb-3 font-weight-normal">Iniciar sesión</h1>

                    <label htmlFor="inputEmail" className="sr-only">Email</label>
                    <input type="email" id="inputEmail" onChange={this.updateInput} name="email" className="form-control" placeholder="Email" required autoFocus />

                    <label htmlFor="inputPassword" className="sr-only">Contraseña</label>
                    <input type="password" id="inputPassword" onChange={this.updateInput} name="password" className="form-control" placeholder="Contraseña" required />

                    <div id="alert" className="alert alert-danger d-none">Email o contraseña incorrecto</div>

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

    loginSubmit(e){
        e.preventDefault();

        var headers = new Headers({
            'X-Requested-With' : 'XMLHttpRequest',
            'Content-Type' : 'application/json'
        });
        var miInit = { method: 'POST',
                       headers: headers,
                       body: JSON.stringify({
                            'email': this.state.email,
                            'password': this.state.password
                       })
                    };
        
        fetch('https://proyecto2-german.herokuapp.com/api/auth/login',miInit)
            .then((res) => res.json() )
            .then(
                (result) => {
                    if(result.status === 'error'){
                        const alert = document.getElementById('alert');
                        alert.classList.remove('d-none');
                    } else {
                        console.log('bien');
                    }
                },
                (error) => {
                    console.log('mal');
                }
            ); 
    }

}

export default Login;