import AppliedFiltersItem from "./AppliedFiltersItem";

function AppliedFilters(props) {
  return props.selectedFilters.map((item) => {
    return (
      <AppliedFiltersItem
        title={JSON.stringify(item)}
        // key={index}
        clickHandler={() => {

        }}
      ></AppliedFiltersItem>
    );
  });
}

export default AppliedFilters;
