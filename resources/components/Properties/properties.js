export const properties = {
    'diameter': {
        id: '1',
        name: 'diameter',
        type: 'input',
        value: '',
        validation: true,
        validationParams: 'number' 
    },
    'tolerance': {
        id: '2',
        name: 'tolerance',
        type: 'select',
        value: ['fine', 'medium', 'rough'],
        validation: true,
        validationParams: null
    },  
    'finish': {
        id: '3',
        name: 'finish',
        type: 'select',
        value: ['1 cm', '2 cm', '3 cm', '5 cm', '8 cm'],
        validation: true,
        validationParams: null
    }
};