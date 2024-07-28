import React, { useContext } from "react";
import Light_Dark_Mode from "../light-dark-mode/Light_Dark_Mode";
import Tictactoe from "../TicTacToe/Tictactoe";
import Accordian from "../Accordian/Accordian";
import RandomColor from "../RandomColorGenerator/ColorPicker";
import TreeView from "../MenuUI/Menu";
import Menudata from '../MenuUI/data'
import { FeatureFlagContext } from "../FeatureFlag/Context/Index";

function Flag() {
  const { loading, data } = useContext(FeatureFlagContext);
  const enableFlagArray = [
    {
      key: "showLightDarkMode",
      component: <Light_Dark_Mode />,
    },
    {
      key: "showTicTacToe",
      component: <Tictactoe />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={Menudata}/>,
    },
  ];

  function Check(GetCurrentKey) {
    return data[GetCurrentKey];
  }

  
  if (loading) <h1>"Data Loading. Please wait.."</h1>;
  return (
    <div>
      <h1>Feature Flag</h1>
      {enableFlagArray.map((Item) => Check(Item.key) ? Item.component :null )}
    </div>
  );
}

export default Flag;
