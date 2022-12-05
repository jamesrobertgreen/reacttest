function DataItem(props) {
  return (
    <tr>
      <td>{props.value}</td>
      <td>{props.status}</td>
    </tr>
  );
}

export default DataItem;
