import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAreas, fetchByArea, fetchByCategory, fetchCategories } from "../actions/actionCreators";

function Filter(props) {
  const {
    defaultOption,
    categories,
    areas,
    fetchAreas,
    fetchCategories,
    fetchByCategory,
    fetchByArea,
  } = props;

  function filterHandler(event) {
    const value = event.target.value.trim().toLowerCase();
    if (defaultOption === 'Filter By Category') {
      fetchByCategory(value);
    } else {
      fetchByArea(value)
    }
  }

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
    <select onChange={event => filterHandler(event)}>
      <option selected disabled value="">{defaultOption}</option>
      {optionsMarkup}
    </select>
  );
}

function mapStateToProps(state) {
  const { meals, categories, areas } = state;
  return { ...state, meals, categories, areas }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchAreas: () => dispatch(fetchAreas()),
    fetchByCategory: cat => dispatch(fetchByCategory(cat)),
    fetchByArea: area => dispatch(fetchByArea(area))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
