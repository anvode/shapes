import React from 'react';
import PropTypes from 'prop-types';
import ShapeItem from './ShapeItem';

function ShapeCuboid(props) {
    return (
        <div className="shape-cuboid shape-default">
            <ShapeItem id="cuboid-1" type="rect" dimensions={{height: 150, width: 250, gridArea: '1 / 2 / 2 / 3'}}></ShapeItem>
            <ShapeItem id="cuboid-2" type="rect" dimensions={{height: 150, width: 125, gridArea: '2 / 1 / 3 / 2'}}></ShapeItem>
            <ShapeItem id="cuboid-3" type="rect" dimensions={{height: 150, width: 250, gridArea: '2 / 2 / 3 / 3'}}></ShapeItem>
            <ShapeItem id="cuboid-4" type="rect" dimensions={{height: 150, width: 125, gridArea: '2 / 3 / 3 / 4'}}></ShapeItem>
            <ShapeItem id="cuboid-5" type="rect" dimensions={{height: 150, width: 250, gridArea: '3 / 2 / 4/ 3'}}></ShapeItem>
            <ShapeItem id="cuboid-6" type="rect" dimensions={{height: 150, width: 250, gridArea: '4 / 2 / 5/ 3'}}></ShapeItem>
        </div>
    );
}

ShapeCuboid.propTypes = {

};

export default ShapeCuboid;

