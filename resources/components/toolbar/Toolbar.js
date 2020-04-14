import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ShapeContext } from '../../context/shape-configurator/ShapeContext';
import PorpertyNav from '../Properties/PorpertyNav';

import './Toolbar.scss';

function Toolbar(props) {
    const {state: {modal, properties}} = useContext(ShapeContext);

    return (
        <div className="toolbar">
            <h3>Properties</h3>
            <PorpertyNav></PorpertyNav>
            <h3>State</h3>
            <pre>{JSON.stringify(properties, null, 2)}</pre>

        </div>
    );
}

Toolbar.propTypes = {

};

export default Toolbar;

