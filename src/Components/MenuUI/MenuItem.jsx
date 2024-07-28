import React, { useState } from "react";
import Menulist from "./Menulist";
import {FaMinus , FaPlus} from "react-icons/fa"


function MenuItem({ item }) {
  {
    /*Suppose we get first element of array which is an object and has 3 keys(label , to , childern) */
  }

  const [displayCurrentChildern, setDisplayCurrentChildern] = useState({});
  function handleClick(currentLabel) {
    {
      /*{} , Profile : true    on AGAIN CLICK ON SPAN
        {Profile : true}   ,!(Profile : true ) = Profile : false FINAL {Profile : false} */
    }
    setDisplayCurrentChildern({...displayCurrentChildern,[currentLabel]: !displayCurrentChildern[currentLabel],
    });
  }
console.log(displayCurrentChildern)
  return (
    <li className="item">
      {/* in this li element we display the label of item */}
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {/* Now we have to check this array element has childern or not if it has we have show them too
         so if they have assign + operator in front of them 

         by default its false
         
        when displayCurrentChildern[item.label] IS TRUE it recursively call menulist componet which then call this componet
         and render childern and true it show minus because its childern display and false make it plus*/}
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleClick(item.label)}>
            {displayCurrentChildern[item.label] ? <FaMinus color="#fff" size={25}/> : <FaPlus color="#fff" size={25} /> }
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildern[item.label] ? (
        <Menulist list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
