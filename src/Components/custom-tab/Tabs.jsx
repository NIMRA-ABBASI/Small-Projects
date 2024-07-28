import React, { useState } from 'react'
import './tab.css'

function Tabs({tabContent , onChange}) {

const [currentTabIndex , setCurrentTabIndex] = useState(0);

function handleOnClick(getcurrentIndex)
{
  setCurrentTabIndex(getcurrentIndex);
  onChange(getcurrentIndex)
}

  return (
        <div className='wrapper'>
          <div className='heading'>
              {tabContent.map((tabItem,index)=>(
                <div className={`tab-item ${currentTabIndex === index ? 'active' :''}`}  onClick={()=>{handleOnClick(index)}} key={tabItem.label}>
                  <span className='label'>{tabItem.label}</span>
                </div>
              ))}
          </div>

          <div className='content'>
            {
              tabContent[currentTabIndex] && tabContent[currentTabIndex].content 
            }
          </div>
        </div>
  )
}

export default Tabs
