import React from 'react';
import './login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="login col-12 text-center pt-4 align-bottom d-flex align-items-end">
                <form className="card d-inline-block mt-4 mb-4 form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Iniciar sesión</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Contraseña</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Contraseña" required />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
                </form>
            </div>
        )
        
    }
}

export default Login;