import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './content/content';

export default class App extends React.Component {




  render() {
    return (
      <div className="App">
        <Header auth={this.auth} />
        <Content auth={this.auth} />
        <div className="clearfix"></div>
        <Footer />
      </div>
    );
  }

  
  auth = (bool) => {
    this.setState({auth: bool});
    this.props.auth = bool;
    console.log('hola');
  }
}

