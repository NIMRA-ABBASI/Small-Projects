import React from 'react'

function Suggestion({data , Click}) {
   
  return (
    <ul>
        {
            data && data.length ? data.map((item, index)=><li onClick={Click} key={index}>{item}</li>):null
        }
    </ul>
  )
}

export default Suggestion

