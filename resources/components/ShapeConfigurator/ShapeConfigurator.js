import React from 'react';
import PropTypes from 'prop-types';
import ShapesDropdown from '../shapes-dropdown/ShapesDropdown';
import Toolbar from '../toolbar/Toolbar';
import Shape from '../shapes/Shape';
import Modal from '../modal/Modal';

import './ShapeConfigurator.scss';

function ShapeConfigurator(props) {

    return (
        <div className="shape-configurator">
            <header className="shape-configurator__header">
                <ShapesDropdown></ShapesDropdown>
            </header>
            <main className="shape-configurator__main">
                <Shape></Shape>   
            </main>
            <aside className="shape-configurator__side">
                <Toolbar></Toolbar>
            </aside>
            <Modal></Modal>
        </div>
    );
}

ShapeConfigurator.propTypes = {

};

export default ShapeConfigurator;

