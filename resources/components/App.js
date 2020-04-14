import React, { Component } from 'react';
import './App.scss';
import ShapeConfigurator from './ShapeConfigurator/ShapeConfigurator';
import ShapeProvider from '../context/shape-configurator/ShapeContext';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <ShapeProvider><ShapeConfigurator></ShapeConfigurator></ShapeProvider>
                    
            </div>
        );
    }
}

export default App;
