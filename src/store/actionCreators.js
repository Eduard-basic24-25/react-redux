import {
    DEC,
    INC,
    RESET,
} from './actions';
import store from './store.js'

const { dispatch } = store;

function decrementValue (value) {
    dispatch ({type: DEC})
    // return {
    //     type: DEC,
    //     counter:value
    // };
}

function incrementValue (value) {
    dispatch ({ type: INC })
    // return {
    //     type: INC,
    //     counter:value
    // };
}
function resretValue (value) {
    dispatch ({ type: RESET})
    // return {
    //     type: RESET,
    //     counter:value
    // };
}

export { decrementValue, incrementValue, resretValue };