

function FilterItems(props) {
  return (
    <button onClick={props.clickHandler}>{props.index} {props.title}</button>
  );
}

export default FilterItems;
