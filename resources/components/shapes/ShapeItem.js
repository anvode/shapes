import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import { ShapeContext } from '../../context/shape-configurator/ShapeContext';
import { properties } from '../Properties/properties';
import { setModal } from '../../context/shape-configurator/shape.action';

const setStyles = (dimensions) => ({width: `${dimensions.width}px`, height: `${dimensions.height}px`, gridArea: `${dimensions.gridArea ? dimensions.gridArea : ''}`});

function ShapeItem({id, type, dimensions}) {
    const {state: {dragging, properties: props}, dispatch} = useContext(ShapeContext);
    const [active, setActive] = useState(false);

    const propertiesExist = props[id] && props[id].length > 0;
    const propertyExist = propertiesExist && props[id].some(prop => prop.name === dragging);

    const drop = (event) => {
        if (propertyExist) {
            event.target.classList.remove('shape-item--disabled');
            return null;
        }
        event.preventDefault();
        dispatch(setModal({id, property: properties[dragging]}));

        setActive(false);
    };

    const dragEnter = (event) => {
        if (propertyExist) {
            event.target.classList.add('shape-item--disabled');
            return null;
        }
        event.preventDefault();
        setActive(true);
    };

    const dragLeave = (event) => {
        if (propertyExist) {
            event.target.classList.remove('shape-item--disabled');

            return null;
        }
        setActive(false);
    };

    const allowDrop = (event) => event.preventDefault();

    // TODO: Own Component
    const setProperties = (items) => {
        return items.map(item => <div key={item.name}>{item.name}: {item.value}</div>);
    };

    return (
        <div 
            className={`shape-item shape-item__${type}${active ? ' shape-item--active' : ''}`} 
            style={setStyles(dimensions)}
            onDragOver={allowDrop} 
            onDragEnter={dragEnter} 
            onDragLeave={dragLeave} 
            onDrop={drop}
        >
            {propertiesExist ? setProperties(props[id]) : null}
        </div>
    );
}

ShapeItem.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    dimensions: PropTypes.object
};

export default ShapeItem;
