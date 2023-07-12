
import React from "react";
import './../styles/App.css';
import Tab from "./Tab";
const App = () => {
  const tabs=[{title:"tab 1",content:"Content for Tab 1"},{title:"tab 2",content:"Content for Tab 2"},{title:"tab 3",content:"Content for Tab 3"}]
  return (
    <div>
       <Tab tabs={tabs}/>
    </div>
  )
}

export default App
