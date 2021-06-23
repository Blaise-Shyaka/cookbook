import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchByCategory } from "../actions/actionCreators";
import Meal from "./Meal";

function Meals(props) {
  const { meals, fetchByCategory } = props;
  const mealsMarkup = meals.map(meal => <Meal key={meal.idMeal} mealId={meal.idMeal} mealThumbnail={meal.strMealThumb} mealTitle={meal.strMeal} />)
  
  useEffect(() => {
    fetchByCategory('Beef')
  }, [fetchByCategory]);
  
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

function mapDispatchToProps(dispatch) {
  return {
    fetchByCategory: cat => dispatch(fetchByCategory(cat))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Meals)
