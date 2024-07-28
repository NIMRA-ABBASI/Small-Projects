import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css"


function Menulist({list = []}) {
  return (
    <ul className="menu_list_container">
      {/* here we get the array which has objects first we check the array is empty or its length is gr8 than 0
      if yes then we will parse the array elemets (objects) pass each element to another component (menuitem) */
      list && list.length
        ? list.map((listItem) => {
          return <MenuItem item={listItem}/>
          })
        : null}
    </ul>
  );
}

export default Menulist;
