import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAreas, fetchCategories } from "../actions/actionCreators";

function Filter(props) {
  const { defaultOption, categories, areas, fetchAreas, fetchCategories } = props;

  useEffect(() => {
    fetchAreas()
    fetchCategories()
  }, [fetchAreas, fetchCategories])

  let optionsMarkup;

  if (defaultOption === 'Filter By Category') {
    optionsMarkup = categories.map(cat => <option key={categories.indexOf(cat)} value={cat.strCategory}>{cat.strCategory}</option>);
  } else {
    optionsMarkup = areas.map(area => <option key={areas.indexOf(area)} value={area.strArea}>{area.strArea}</option>);
  }

  return (
    <select>
      <option selected disabled value="">{defaultOption}</option>
      {optionsMarkup}
    </select>
  );
}

function mapStateToProps(state) {
  const { categories, areas } = state;
  return { categories, areas }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchAreas: () => dispatch(fetchAreas())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
