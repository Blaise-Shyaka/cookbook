import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Meals from '../components/Meals';
import { defaultState } from '../reducers/reducer';

const mockStore = configureStore([thunkMiddleware]);
const store = mockStore(defaultState);

describe('Meals Component', () => {
  const mealsComponent = (
    <Provider store={store}>
      <Meals />
    </Provider>
  );

  it('Should render correctly', () => {
    render(mealsComponent);
  });
});
