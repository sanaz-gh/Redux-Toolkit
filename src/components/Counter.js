import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";


const Counter = () => {

const [value, setValue] = useState(2)
const counter = useSelector((store) => store.counter.counterValue);
const dispatch = useDispatch()
  return(
    <div>
     <h2>counter is  {counter}</h2>
     <button onClick={()=> dispatch(increment())}>increment</button>
     <input type="number" value={value} onChange={(e)=> setValue(e.target.value)}/>
     <button onClick={()=> dispatch(decrement())}>decrement</button>
     <button onClick={()=> dispatch(incrementByAmount(+value))}>increment by amount</button>
    </div>
  )
}
export default Counter;