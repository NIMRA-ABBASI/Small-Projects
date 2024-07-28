import React from 'react'
import Menulist from "./Menulist"

function Menu({menus=[]}) {
     {/* menus is an array with objects we are passing this array to menulist component */}
  return (
    <div className='menu_container'>
      <Menulist list={menus}/>
    </div>
  )
}

export default Menu
