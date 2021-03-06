import {
  FILTERBYCATEGORY, FILTERBYAREA, SEARCH, UPDATEMEALS, GETCATEGORIES, GETAREAS, GETONEMEAL,
} from './index';

export function filterByCategory(payload) {
  return {
    type: FILTERBYCATEGORY,
    payload,
  };
}

export function filterByArea(payload) {
  return {
    type: FILTERBYAREA,
    payload,
  };
}

export function search(payload) {
  return {
    type: SEARCH,
    payload,
  };
}

export function updateMealsList(payload) {
  return {
    type: UPDATEMEALS,
    payload,
  };
}

export function getCategories(categories) {
  return {
    type: GETCATEGORIES,
    payload: categories,
  };
}

export function getAreas(areas) {
  return {
    type: GETAREAS,
    payload: areas,
  };
}

export function getOneMeal(meal) {
  return {
    type: GETONEMEAL,
    payload: meal,
  };
}

export function fetchByCategory(category) {
  return async function fetchingByCategory(dispatch) {
    const cleanCategoryName = category.trim().toLowerCase();
    dispatch(filterByCategory(cleanCategoryName));
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cleanCategoryName}`);
      const data = await response.json();
      dispatch(updateMealsList(data.meals));
    } catch (e) {
      dispatch(updateMealsList(e.message));
    }
  };
}

export function fetchByArea(area) {
  return async function fetchingByArea(dispatch) {
    const cleanAreaName = area.trim().toLowerCase();
    dispatch(filterByArea(cleanAreaName));
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cleanAreaName}`);
      const data = await response.json();
      dispatch(updateMealsList(data.meals));
    } catch (e) {
      dispatch(updateMealsList(e.message));
    }
  };
}

export function fetchBySearch(searchTerm) {
  return async function fetchingBySearch(dispatch) {
    const cleanSearchTerm = searchTerm.trim().toLowerCase();
    dispatch(search(cleanSearchTerm));
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cleanSearchTerm}`);
      const data = await response.json();
      dispatch(updateMealsList(data.meals));
    } catch (e) {
      dispatch(updateMealsList(e.message));
    }
  };
}

export function fetchCategories() {
  return async function fetchingByCategories(dispatch) {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getCategories(data.meals));
      return data;
    } catch (e) {
      return e.message;
    }
  };
}

export function fetchAreas() {
  return async function fetchingByAreas(dispatch) {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getAreas(data.meals));
      return data;
    } catch (e) {
      return e.message;
    }
  };
}

export function fetchOneMeal(mealId) {
  return async function fetchingOneMeal(dispatch) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getOneMeal(data.meals[0]));
      return data;
    } catch (e) {
      return e.message;
    }
  };
}
