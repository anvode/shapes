import React, {useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { ShapeContext } from '../../context/shape-configurator/ShapeContext';
import { clearModal, setProperty } from '../../context/shape-configurator/shape.action';

import './Modal.scss';

function Modal(props) {
    const {state: {modal, properties}, dispatch} = useContext(ShapeContext);
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    const handleChange = event => {
        const {value} = event.target;

        if (modal.property.validationParams === 'number' && value.match(/^\d+$/) === null) {
            setError(`${modal.property.type} has to be a positive Number`);
            setValue('');
            return;
        }

        setError(null);
        setValue(value);
    };

    // TODO: Own form element
    const getForm = (property) => {
        switch (property.type) {
            case 'input':    
                return <div className="modal-input modal__field">
                    <label className="modal__label" htmlFor="modal-input">{property.name}</label>
                    <input type="text" onChange={handleChange} placeholder={property.name} id="modal-input" name="modal-input" value={value} className="modal-input__input"></input>
                </div>;
            case 'select':    
                return <div className="select__field modal-select__field  modal__field">
                    <label className="modal__label" htmlFor="modal-select">{property.name}</label>
                    <select onChange={handleChange} name="modal-select" id="modal-select" className="modal-select__select" value={value}>
                        <option value="">Please Select</option>

                        {property.value.map((prop, index) => {
                            return <option key={index + 1} value={prop}>{prop}</option>;
                        })}
                       
                    </select>
                </div>;
            default:
                return 'No Valid Form Element';
        }
    };

    // TODO: Clean up
    const close = (event) => {
        if (value === '') {
            setError(`${modal.property.type} is Empty`);
            return;
        }
        if (!properties[modal.id]) {
            dispatch(setProperty(modal.id, [{
                name: modal.property.name,
                value: value
            }]));
        } else {
            const propExist = properties[modal.id].some(prop => prop.name === modal.property.name);
            const newProps = propExist ? properties[modal.id].map(prop => {
                if (prop.name === modal.property.name) {
                    prop.value = value;
                }
                return prop;
            }) : [...properties[modal.id], {
                name: modal.property.name,
                value: value
            }];

            dispatch(setProperty(modal.id, newProps));
        }

        setValue('');
        dispatch(clearModal());
    };

    if (!modal) return null;

    return (
        <div className="modal">
            <div className="modal__content">
                {error && <div className="modal__error">Error! {error}</div>}
                <button className="modal__button" onClick={close}>x</button>
                {getForm(modal.property)}
            </div>
            <div className="modal__bg" onClick={close}></div>
        </div>
    );
}

Modal.propTypes = {

};

export default Modal;

