import React, {createContext, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';

import ShapeReducer, {initialState} from './shape.reducer';

export const ShapeContext = createContext();

const ShapeProvider = props => {
    const [state, dispatch] = useReducer(ShapeReducer, initialState);

    return (
        <ShapeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ShapeContext.Provider>
    );
};

ShapeProvider.propTypes = {
    children: PropTypes.node
};

export default ShapeProvider;
