import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ShapeContext } from '../../context/shape-configurator/ShapeContext';
import { setShape } from '../../context/shape-configurator/shape.action';

import './ShapesDropdown.scss';

function ShapesDropdown(props) {
    const {state, dispatch} = useContext(ShapeContext);

    const handleChange = (event) => {
        const {value} = event.target;

        dispatch(setShape(value));
    };

    return (
        <div>
            <label htmlFor="shape-select" className="shape-select__label sr-only">
                        Select Shape
            </label>
            <div className="select__field shape-select__field">
                <select onChange={handleChange} name="shape-select" id="shape-select" className="shape-select__select" value={state.type}>
                    <option value="">---------</option>
                    <option value="cuboid">Cuboid</option>
                    <option value="cylinder">Cylinder</option>
                  
                </select>
            </div>
        </div>
    );
}

ShapesDropdown.propTypes = {

};

export default ShapesDropdown;

