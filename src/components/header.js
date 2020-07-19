import React from 'react';
import logo1 from '../assets/logo.png';

class Header extends React.Component {
    render() {
        return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand col-7 col-md-3 pl-0" href="/">
                            <img className="col-12 pl-0" src={logo1} alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a rel="noopener noreferrer" className="nav-link" target="_blank" href="https://proyecto2-german.herokuapp.com/">Mis materias</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>;
    }
}

export default Header;