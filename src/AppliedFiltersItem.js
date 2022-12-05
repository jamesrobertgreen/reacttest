

function AppliedFiltersItem(props) {
  return (
    <div onClick={props.clickHandler}>{props.title}</div>
  );
}

export default AppliedFiltersItem;
