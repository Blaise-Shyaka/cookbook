import Nav from './Nav';
import Meals from './Meals';

import {
  Switch,
  Route,
} from "react-router-dom";
import SingleMeal from './SingleMeal';
import * as appStyles from '../styles/App.module.css'

function App() {
  const { app } = appStyles
  return (
    <div className={app}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Meals}></Route>
        <Route path="/meal/:id" component={SingleMeal}></Route>
      </Switch>
    </div>
  );
}

export default App;
