import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Nav from '../components/Nav';
import { defaultState } from '../reducers/reducer';

const mockStore = configureStore([thunkMiddleware]);
const store = mockStore(defaultState);

describe('Meals Component', () => {
  const navComponent = (
    <Provider store={store}>
      <Nav />
    </Provider>
  );

  it('Should render correctly', () => {
    render(navComponent);
  });

  it('Should display the logo and a search button', () => {
    const { getByText } = render(navComponent);
    getByText('CookBook');
    getByText('Search');
  });

  it('Should render a search input field', () => {
    render(navComponent);
    screen.getAllByPlaceholderText('Search Meal By Name');
  });

  it('Should render dropdown to filter by category', () => {
    render(navComponent);
    screen.getAllByDisplayValue('Filter By Category');
  });

  it('Should render dropdown to filter by area', () => {
    render(navComponent);
    screen.getAllByDisplayValue('Filter By Area');
  });
});
