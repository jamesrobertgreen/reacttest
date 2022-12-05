

function SelectedFiltersItem(props) {
  return (
    <div onClick={props.clickHandler}>{props.title}</div>
  );
}

export default SelectedFiltersItem;
