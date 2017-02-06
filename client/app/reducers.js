// Constants
const ADD_A_NUMBER = 'ADD_A_NUMBER';

// ACTIONS
export const CalculatorActions = () => {
    const calculation = (payload) => {
        console.log('addition', payload);
        return { type: ADD_A_NUMBER, payload};
    };
    return {
        calculation
    };
};

//currentOperator

// REDUCERS
export const totalSum = (state = 0, { type, payload }) => {
    switch (type) {
        case ADD_A_NUMBER:
        switch (payload) {
            case '=':
                state = eval(state);
            break;
             case 'C':
                state = 0;
            break;
            default:
                state = state  + "" + payload;
        }
        if (Number(state) == state) state = Number(state);
        return state;
        default:
            return state;
    }
};
