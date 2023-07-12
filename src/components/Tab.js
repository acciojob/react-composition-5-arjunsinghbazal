import React from "react";

const Tab=({tabs})=>{
    const [tabClicked,settabClicked]=React.useState("Content for Tab 1");
    const setClicked=(data)=>{
       settabClicked(data)
    }
    return(
        <div>
            {tabs.map((item)=>{
                <li onClick={setClicked(item.content)}>{item.title}</li>
            })}
            <p>{tabClicked}</p>
        </div>
    )
}

export default Tab;