import React, { useState, useEffect } from "react";

import FilterItems from "./FilterItems.js";
import SelectedFiltersItem from "./SelectedFiltersItem.js";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const [filters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    const availableFilters = [
      { id: 1, label: "Filter A" },
      { id: 2, label: "Filter B" },
      { id: 3, label: "Filter C" },
      { id: 4, label: "Filter D" },
    ];

    setSelectedFilters([]);
    setFilters(availableFilters);
  }, []);

  return (
    <div className="App">
      {/* <div>{selectedFilters}</div> */}

      {selectedFilters.map( id => {
        let label = '';
        filters.forEach( ele =>{
          if( ele.id === id){
            label = ele.label;
          }
        })

          
        // console.log(JSON.stringify(filterDetails))
        return (
          <SelectedFiltersItem
            title={label}
            // key={index}
            clickHandler={() => {
              setSelectedFilters(()=>{
                
              });
            }}
          ></SelectedFiltersItem>
        );
      })}

      {filters.map((item, index) => {
        return (

            <FilterItems
              title={item.label}
              key={index}
              clickHandler={() => {
                setSelectedFilters([...selectedFilters, item.id]);
              }}
            ></FilterItems>

        );
      })}
    </div>
  );
}

export default App;
