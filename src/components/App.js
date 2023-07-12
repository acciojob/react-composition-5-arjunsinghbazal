
import React from "react";
import './../styles/App.css';
import Tab from "./Tab";
const App = () => {
  const tabs=[{title:"tab 1",content:"Content for Tab 1"},{title:"tab 2",content:"Content for Tab 2"},{title:"tab 3",content:"Content for Tab 3"}]
  const tabs1=[{title:"tab A",content:"Content for Tab A"},{title:"tab B",content:"Content for Tab B"},{title:"tab C",content:"Content for Tab C"}]
  return (
    <div>
       <Tab tabs={tabs} tabs1={tabs1}/>
    </div>
  )
}

export default App
