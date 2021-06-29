import thunkMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { defaultState } from '../reducers/reducer';
import {
  fetchByCategory,
  filterByCategory,
  fetchByArea,
  filterByArea,
  fetchBySearch,
  search,
  fetchCategories,
  getCategories,
  fetchAreas,
  getAreas,
  fetchOneMeal,
  getOneMeal,
} from '../actions/actionCreators';

const middlewares = [thunkMiddleware];
const mockStore = configureStore(middlewares);

describe('The reducer actions', () => {
  const store = mockStore(defaultState);
  const actions = [filterByCategory('pasta'), filterByArea('mexican'), search('pasta'), getCategories];

  it('Should execute fetchByCategory and update the category property of the store', () => store.dispatch(fetchByCategory('Pasta'))
    .then(() => {
      const calledActions = store.getActions();
      expect(calledActions[0]).toEqual(actions[0]);
    }));

  it('Should execute fetchByArea and update the area property of the store', () => store.dispatch(fetchByArea('mexican'))
    .then(() => {
      const calledActions = store.getActions();
      expect(calledActions[2]).toEqual(actions[1]);
    }));

  it('Should execute fetchBySearch and update the search property of the store', () => store.dispatch(fetchBySearch('Pasta'))
    .then(() => {
      const calledActions = store.getActions();
      expect(calledActions[4]).toEqual(actions[2]);
    }));

  it('Should execute fetchCategories and update the categories property array of the store', () => store.dispatch(fetchCategories())
    .then(() => {
      const calledActions = store.getActions();
      expect(getCategories([]).type).toEqual(calledActions[6].type);
    }));

  it('Should execute fetchAreas and update the areas property array of the store', () => store.dispatch(fetchAreas())
    .then(() => {
      const calledActions = store.getActions();
      expect(getAreas([]).type).toEqual(calledActions[7].type);
    }));

  it('Should execute fetchOneMeal and update the meal property of the store', () => store.dispatch(fetchOneMeal(52772))
    .then(() => {
      const calledActions = store.getActions();
      expect(getOneMeal('').type).toEqual(calledActions[8].type);
    }));
});
