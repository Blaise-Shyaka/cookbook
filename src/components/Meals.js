import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchByCategory } from '../actions/actionCreators';
import Meal from './Meal';
import * as mealsStyles from '../styles/Meals.module.css';

function Meals(props) {
  const { meals, fetchByCategory } = props;
  const mealsMarkup = meals.map((meal) => (
    <Meal
      key={meal.idMeal}
      mealId={meal.idMeal}
      mealThumbnail={meal.strMealThumb}
      mealTitle={meal.strMeal}
    />
  ));
  const { mealsContainer, mealsWrapper } = mealsStyles;

  useEffect(() => {
    fetchByCategory('Beef');
  }, [fetchByCategory]);

  return (
    <div className={mealsContainer}>
      <div className={mealsWrapper}>
        {mealsMarkup}
      </div>
    </div>
  );
}

Meals.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.shape({
    strCategory: 'Beef',
  })).isRequired,
  fetchByCategory: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { meals } = state;
  return { meals };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchByCategory: (cat) => dispatch(fetchByCategory(cat)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
