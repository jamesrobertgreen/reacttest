import DataItem from "./DataItem.js";

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
          {props.data.map((item) => {
            return <DataItem value={item.programName} status={item.status}></DataItem>;
          })}
        </tbody>
      </table>
    );
  }
  
  export default Table;
  