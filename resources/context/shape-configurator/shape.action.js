import { SET_SHAPE, CLEAR_SHAPE_PROPERTIES, SET_DRAGGING, SET_MODAL, CLEAR_MODAL, SET_PROPERTY} from './shape.constants';

export const setShape = (shape) => ({
    type: SET_SHAPE,
    payload: {
        shape
    }
});

export const setDragging = (name) => ({
    type: SET_DRAGGING,
    payload: {
        name
    }
});

export const setModal = (modal) => ({
    type: SET_MODAL,
    payload: {
        modal
    }
});

export const clearModal = () => ({
    type: CLEAR_MODAL
});

export const clearShapeProperties = () => ({
    type: CLEAR_SHAPE_PROPERTIES
});

export const setProperty = (id, properties) => ({
    type: SET_PROPERTY,
    payload: {
        id,
        properties
    }
});

