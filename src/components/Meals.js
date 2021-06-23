import { connect } from "react-redux";
import Meal from "./Meal";

function Meals(props) {
  const { meals } = props;
  const mealsMarkup = meals.map(meal => <Meal key={meal.idMeal} mealId={meal.idMeal} mealThumbnail={meal.strMealThumb} mealTitle={meal.strMeal} />)
  return (
    <div>
      <h1>All Meals</h1>
      {mealsMarkup}
    </div>
  )
}

function mapStateToProps(state) {
  const { meals } = state;
  return { meals };
}

export default connect(mapStateToProps)(Meals)
