
function AppliedFilters(props) {
  return props.selectedFilters.map((item) => {
    return (
        <button onClick={() => props.clickHandler(item)}>{JSON.stringify(item)}</button>
    );
  });
}

export default AppliedFilters;
