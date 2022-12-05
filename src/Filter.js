import React, { useState } from "react";

function Filter(props) {
  // const [value, setValue] = useState('');

  return props.availableFilters.map((section) => {
    return (
      <div>
        <div>{section.sectionName}</div>
        {section.items.map((item) => {
          if (item.type === "textbox") {
            return (
              <>
                <input></input>
                <button onClick={()=>{props.clickHandler(section.sectionName,item)}}>Search</button>
              </>
            );
          }
          if (item.type === "buttons") {
            return (
              item.options.map( option =>{
                return <button onClick={()=>props.clickHandler(section.sectionName,option)}>{option.label}</button>
              })
            );
          }
        })}
      </div>
    );
  });
}


export default Filter;
