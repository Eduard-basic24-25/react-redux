import React from "react";
import { 
  decrementValue,
  incrementValue,
  resretValue
} from './store/actionCreators.js';
import store from './store/store.js';





function App() {
  const { subscribe, getState } = store;

  subscribe( () => {
    console.log(getState());
  })


  return (
   <>
    <button onClick={() => decrementValue()}>-1</button>
    <button onClick={() => incrementValue()}>+1</button> 
    <button onClick={() => resretValue()}>Reset</button>
    <div>{getState()}</div>
   </>
  );
}

export default App;
