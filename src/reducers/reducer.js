import { FILTERBYCATEGORY, FILTERBYAREA, SEARCH, UPDATEMEALS } from '../actions/index';

export default function reducer(state, action) {
  const { type, payload } = action
  switch(type) {
    case FILTERBYCATEGORY:
      return { ...state, categoryFilter: payload}
    case FILTERBYAREA:
      return { ...state, areaFilter: payload}
    case SEARCH:
      return { ...state, searchTerm: payload}
    case UPDATEMEALS:
      return { ...state, meals: payload }
    default:
      return state
  }
}