import React, { useState } from 'react'
import "./Accordian.css"
import data from "./data.js"

function Accordian() {
   
  const [selected,setSelected] = useState(null);
  const [enableMultiSelection , setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function singleHandleClick(currentId)
  {
   setSelected( selected === currentId ? null:currentId);
  }

  function multipleHandleClick(currentId)
  {
   let cpymultiple = [...multiple];
   const indexOfCurrentId = cpymultiple.indexOf(currentId);
  // console.log(cpymultiple, indexOfCurrentId); it return -1 means the currentid is not present in it so add it 
  indexOfCurrentId === -1 ? cpymultiple.push(currentId):cpymultiple.splice(indexOfCurrentId,1);
  setMultiple(cpymultiple);
  }
  console.log(selected,multiple);
  return (
    <div className='wrapper'>
      <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Multiple Clicks</button>
      <div className="accordian">
       {data && data.length > 0 ?
       data.map(dataItem => 
       <div className="item">
          <div onClick= {enableMultiSelection ? ()=>multipleHandleClick(dataItem.id) : ()=>singleHandleClick(dataItem.id)} className="title">
            <h3>{dataItem.question}</h3><span>+</span>
          </div>
          <div className='answer'>
          {enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && dataItem.answer:
          selected === dataItem.id && dataItem.answer}
          </div>
       </div>
    )
       :<div>DATA NOT FOUND</div>}
      </div>
    </div>
  )
}

export default Accordian
