import DataItem from "./DataItem.js";


// Check if the field name of the current item matches our selected filter
const isItemIncludedInFilter = (selectedFilters,item) =>{
    // If no filters are applied then display all results
    if(selectedFilters.length === 0){
        return true;
    }
    return selectedFilters.find( selectedFilter => {
        console.log('selected filter field name = ' + selectedFilter.item.fieldName);
        console.log('computed property = ' + item[[selectedFilter.item.fieldName]] );
        // If the fieldname we are filtering e.g. status is equal to the filterValue of the 
        if (item[[selectedFilter.item.fieldName]] === selectedFilter.item.filterValue){
            return true;
        } 
        return false;

    });
}

function Table(props) {
    return (
        <table>
        <thead>
          <tr>
            <th>program name</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {props.data.filter( item =>{
            return isItemIncludedInFilter(props.selectedFilters,item);
          }).map((item) => {
            return <DataItem value={item.programName} status={item.status}></DataItem>;
          })}
        </tbody>
      </table>
    );
  }
  
  export default Table;
  