import React from 'react';

export default class Cargando extends React.Component{
    render(){
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }
}