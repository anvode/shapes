import React from 'react';
import PropTypes from 'prop-types';
import ShapeItem from './ShapeItem';

function ShapeCylinder(props) {
    return (
        <div className="shape-cylinder shape-default">
            <ShapeItem id="cylinder-1" type="circle" dimensions={{height: 150, width: 250}}></ShapeItem>
            <ShapeItem id="cylinder-2" type="rect" dimensions={{height: 450, width: 250}}></ShapeItem>
            <ShapeItem id="cylinder-3" type="circle" dimensions={{height: 150, width: 250}}></ShapeItem>
        </div>
    );
}

ShapeCylinder.propTypes = {

};

export default ShapeCylinder;

