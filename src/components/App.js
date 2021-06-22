import Nav from './Nav';
import Meals from './Meals';
import Meal from './Meal';

import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Meals}></Route>
        <Route path="/meal" component={Meal}></Route>
      </Switch>
    </div>
  );
}

export default App;
