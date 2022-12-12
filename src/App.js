import { useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Inc, Dec} from "./states/reducers/index"

function App() {

  const curState = useSelector((state)=>state.number)
  const dispatch = useDispatch()


  return (
    <div className="w-full text-center my-2 text-3xl">
      <h1 className="my-4">
        react redux tutorial
      </h1>
      <h1 className="my-4">
        {curState}
      </h1>
      <button onClick={()=>dispatch(Inc(10))} className="p-3 b0rder shadow-lg bg-slate-200 rounded-lg mx-3 hover:bg-slate-400 duration-200 hover:shadow-md">Inc</button>
      <button onClick={()=>dispatch(Dec(5))} className="p-3 b0rder shadow-lg bg-slate-200 rounded-lg mx-3 hover:bg-slate-400 duration-200 hover:shadow-md">Dec</button>
    </div>
  )
}

export default App;
