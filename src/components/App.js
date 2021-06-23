import Nav from './Nav';
import Meals from './Meals';

import {
  Switch,
  Route,
} from "react-router-dom";
import SingleMeal from './SingleMeal';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Meals}></Route>
        <Route path="/meal" component={SingleMeal}></Route>
      </Switch>
    </div>
  );
}

export default App;
