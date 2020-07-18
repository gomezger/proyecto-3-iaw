import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './content/content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
