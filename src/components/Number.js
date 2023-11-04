import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/number/numberSlice";


const Number = () => {

const number = useSelector((store) => store.number.numberValue);
const dispatch = useDispatch()

  return(
    <div>
     <h2>number is  {number} </h2>
     <button onClick={()=> dispatch(increment())}>increment</button>
     <button onClick={()=> dispatch(decrement())}>decrement</button>
    </div>
  )
}
export default Number;