import React from "react";
import Tabs from './Tabs.jsx'
function RandomComponent() {
  return <div>Random</div>;
}

function Tabsparent() {
  const tabArray = [
    {
      label: "Tab 1",
      content: <div>this is tab 1 content</div>,
    },
    {
      label: "Tab 2",
      content: <div>this is tab 2 content</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex)
  {
    console.log(currentTabIndex);
  }
  return <div>
    <Tabs tabContent={tabArray} onChange={handleChange}/>
  </div>;
}

export default Tabsparent;
