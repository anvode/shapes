import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ShapeContext } from '../../context/shape-configurator/ShapeContext';
import { setDragging } from '../../context/shape-configurator/shape.action';

function Property({property}) {
    const {dispatch} = useContext(ShapeContext);

    const drag = (event) => {
        dispatch(setDragging(property.name));
    };

    return (
        <div 
            className="property-item"
            draggable="true"
            onDragStart={drag}
        >
            {property.name}
        </div>
    );
}

Property.propTypes = {
    property: PropTypes.object
};

export default Property;

