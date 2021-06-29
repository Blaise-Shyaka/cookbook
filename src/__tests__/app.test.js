import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App';
import { defaultState } from '../reducers/reducer';

const mockStore = configureStore([thunkMiddleware]);
const store = mockStore(defaultState);

describe('Meals Component', () => {
  const appComponent = (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  it('Should render correctly', () => {
    render(appComponent);
  });

  it('Should display a list of meal items', () => {
    const tree = renderer.create(appComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
