import React from 'react';
import PropTypes from 'prop-types';
import { properties } from './properties';
import Property from './Property';

import './Properties.scss';

function PorpertyNav(props) {
    return (
        <div className="property-nav">
            {Object.keys(properties).map(key => {
                return <Property key={properties[key].id} property={properties[key]}></Property>;
            })}
        </div>
    );
}

PorpertyNav.propTypes = {

};

export default PorpertyNav;

