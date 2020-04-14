import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ShapeContext } from '../../context/shape-configurator/ShapeContext';
import ShapeCuboid from './ShapeCuboid';
import ShapeCylinder from './ShapeCylinder';

import './Shape.scss';

// TODO: need more generic solution
function getShape(shape) {
    switch (shape) {
        case 'cuboid':    
            return <ShapeCuboid></ShapeCuboid>;
        case 'cylinder':    
            return <ShapeCylinder></ShapeCylinder>;
        default:
            return 'Select Shape';
    }
}

function Shape(props) {
    const {state: {type}} = useContext(ShapeContext);
   
    return (
        <div className="shapes">
            {getShape(type)} 
        </div>
    );
}

Shape.propTypes = {

};

export default Shape;

