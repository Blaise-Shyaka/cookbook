import { FILTERBYCATEGORY, FILTERBYAREA, SEARCH, UPDATEMEALS, GETCATEGORIES, GETAREAS } from '../actions/index';
const defaultState = {
  categoryFilter: '',
  areaFilter: '',
  searchTerm: '',
  meals: [],
  categories: [],
  areas: [],
}

export default function reducer(state=defaultState, action) {
  const { type, payload } = action
  switch(type) {
    case FILTERBYCATEGORY:
      return { ...state, categoryFilter: payload}
    case FILTERBYAREA:
      return { ...state, areaFilter: payload}
    case SEARCH:
      return { ...state, searchTerm: payload}
    case UPDATEMEALS:
      return { ...state, meals: [...payload] }
    case GETCATEGORIES:
      return { ...state, categories: [...payload]}
    case GETAREAS:
      return { ...state, areas: [...payload]}
    default:
      return state
  }
}