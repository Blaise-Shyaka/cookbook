import { FILTERBYCATEGORY, FILTERBYAREA, SEARCH, UPDATEMEALS } from "../actions/index";

export function filterByCategory(payload) {
  return {
    type: FILTERBYCATEGORY,
    payload
  }
}

export function filterByArea(payload) {
  return {
    type: FILTERBYAREA,
    payload
  }
}

export function search(payload) {
  return {
    type: SEARCH,
    payload
  }
}

export function updateMealsList(payload) {
  return {
    type: UPDATEMEALS,
    payload
  }
}

export function fetchByCategory(category) {
  return async function(dispatch) {
    const cleanCategoryName = category.trim().toLowerCase();
    dispatch(filterByCategory(cleanCategoryName));
    try {
      const response = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${cleanCategoryName}`);
      const data = await response.json();
      dispatch(updateMealsList(data.meals));
    } catch(e) {
      dispatch(updateMealsList(e.message));
    }
  }
}

export function fetchByArea(area) {
  return async function(dispatch) {
    const cleanAreaName = area.trim().toLowerCase();
    dispatch(filterByArea(cleanAreaName));
    try {
      const response = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?a=${cleanAreaName}`);
      const data = await response.json();
      dispatch(updateMealsList(data.meals));
    } catch(e) {
      dispatch(updateMealsList(e.message));
    }
  }
}

export function fetchBySearch(searchTerm) {
  return async function(dispatch) {
    const cleanSearchTerm = searchTerm.trim().toLowerCase();
    dispatch(search(cleanSearchTerm));
    try {
      const response = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${cleanSearchTerm}`);
      const data = await response.json();
      dispatch(updateMealsList(data.meals));
    } catch(e) {
      dispatch(updateMealsList(e.message));
    }
  }
}
