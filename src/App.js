import React, { useState, useEffect } from "react";

import "./App.css";
import Filter from "./Filter.js";
import Table from "./Table.js";
import AppliedFilters from "./AppliedFilters.js";

function App() {
  // const [count, setCount] = useState(0);

  // Add the filter that was clicked, unless it was already in the array of selected filters.
  const addSelectedFilter = (sectionName, item) => {
    if (!selectedFilters.find(selectedFilter => selectedFilter.item.id === item.id)){
      setSelectedFilters([...selectedFilters, { sectionName, item }]);
    }
  };

  // Add the filter that was clicked, unless it was already in the array of selected filters.
  const removeSelectedFilter = (filterClicked) => {
    const filteredList = selectedFilters.filter((selectedFilter) => selectedFilter.item.id !== filterClicked.item.id);
    setSelectedFilters(filteredList);
  };

  const [data, setData] = useState([]);
  const [availableFilters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    const mockData = [
      { programName: "Test program name1", status: "active" },
      { programName: "Test program name2", status: "inactive" },
      { programName: "Test program name3", status: "archived" },
    ];

    // TODO - get data from API
    setData(mockData);

    const availableFilters = [
      {
        sectionName: "Program Name",
        items: [
          {
            label: "Contains",
            type: "textbox",
            id: "programName",
            fieldName: "programName",
          },
        ],
      },
      {
        sectionName: "Status",
        items: [
          {
            label: "Select an option",
            type: "buttons",
            options: [
              {
                id: "statusActive",
                label: "Active",
                fieldName: "status",
                filterValue: "active",
                group: "status",
              },
              {
                id: "statusArchived",
                label: "Archived",
                fieldName: "status",
                filterValue: "archived",
                group: "status",
              },
            ],
          },
        ],
      },
    ];
    setSelectedFilters([]);
    setFilters(availableFilters);
  }, []);

  return (
    <div className="App">
      {/* <div>{selectedFilters}</div> */}

      <AppliedFilters
        selectedFilters={selectedFilters}
        clickHandler={(item) => removeSelectedFilter(item)}
      ></AppliedFilters>

      <Filter
        clickHandler={(sectionName, item) =>
          addSelectedFilter(sectionName, item)
        }
        availableFilters={availableFilters}
        setSelectedFilters={setSelectedFilters}
        selectedFilters={selectedFilters}
      ></Filter>
      <Table data={data} selectedFilters={selectedFilters}></Table>
    </div>
  );
}

export default App;
