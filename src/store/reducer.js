import initialState from './initialState.js';

import {
    DEC,
    INC,
    RESET,
} from './actions';

function reducer(state = initialState, action) {
    switch(action.type) {
        case INC:
            return state+1;
        case DEC:
            return state-1;
        case RESET:
            return 0;
        
        default: 
            return state;
    
    }
}

export default reducer;