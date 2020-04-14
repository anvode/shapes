import {SET_SHAPE, SET_DRAGGING, SET_MODAL, CLEAR_MODAL, SET_PROPERTY} from './shape.constants';

export const initialState = {
    type: '',
    properties: {},
    dragging: '',
    modal: null
};

export default function categoryReducer(state = initialState, action) {

    switch (action.type) {
        case SET_SHAPE:
            return {
                ...state,
                type: action.payload.shape,
                properties: {}
            };

        case SET_DRAGGING:
            return {
                ...state,
                dragging: action.payload.name
            };

        case SET_MODAL:
            return {
                ...state,
                modal: action.payload.modal
            };

        case CLEAR_MODAL:
            return {
                ...state,
                modal: null
            };

        case SET_PROPERTY:
            return {
                ...state,
                properties: {
                    ...state.properties,
                    [action.payload.id]: action.payload.properties
                },
                
            };

        default:
            return state;
    }
}
