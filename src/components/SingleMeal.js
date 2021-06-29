import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { fetchOneMeal } from '../actions/actionCreators';
import * as singleMealStyles from '../styles/SingleMeal.module.css';

function SingleMeal(props) {
  const { id } = useParams();
  const { fetchOneMeal, oneMeal } = props;
  const {
    singleMealContainer,
    mealInstrContainer,
    mealImgWrapper,
    titleInstructionsWrapper,
    imgIngrWrapper,
  } = singleMealStyles;

  useEffect(() => {
    fetchOneMeal(id);
  });

  const {
    strMeal, strInstructions, strTags, strMealThumb,
  } = oneMeal;
  const ingredients = [
    oneMeal.strIngredient1,
    oneMeal.strIngredient2,
    oneMeal.strIngredient3,
    oneMeal.strIngredient4,
    oneMeal.strIngredient5,
    oneMeal.strIngredient6,
    oneMeal.strIngredient7,
    oneMeal.strIngredient8,
    oneMeal.strIngredient9,
    oneMeal.strIngredient10,
    oneMeal.strIngredient11,
    oneMeal.strIngredient12,
  ];

  const measures = [
    oneMeal.strMeasure1,
    oneMeal.strMeasure2,
    oneMeal.strMeasure3,
    oneMeal.strMeasure4,
    oneMeal.strMeasure5,
    oneMeal.strMeasure6,
    oneMeal.strMeasure7,
    oneMeal.strMeasure8,
    oneMeal.strMeasure9,
    oneMeal.strMeasure10,
    oneMeal.strMeasure11,
    oneMeal.strMeasure12,
  ];

  const ingredientsMarkup = ingredients
    .map((ingr) => (ingr || false))
    .filter((elt) => elt !== false);

  const measuresMarkup = measures.map((mes) => (mes ? mes.trim() : '') && mes);
  const measOfIngredients = ingredientsMarkup.map((ingr) => {
    const ingrIndex = ingredientsMarkup.indexOf(ingr);

    return (
      <li key={ingrIndex}>
        <span>{ingr}</span>
        :
        {' '}
        <span>{measuresMarkup[ingrIndex]}</span>
      </li>
    );
  });

  return (
    <div className={singleMealContainer}>
      <Link to="/">Back</Link>
      <div>
        <div className={mealInstrContainer}>
          <div className={imgIngrWrapper}>
            <div className={mealImgWrapper}>
              <img src={strMealThumb} alt={strMeal} />
            </div>
            <div>
              <ul>
                {measOfIngredients}
              </ul>
            </div>
          </div>
          <div className={titleInstructionsWrapper}>
            <h2>{strMeal}</h2>
            <p>{strInstructions}</p>
            <p>{strTags}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

SingleMeal.propTypes = {
  fetchOneMeal: PropTypes.func.isRequired,
  oneMeal: PropTypes.objectOf(PropTypes.shape({ idMeal: '52834' })).isRequired,

};

function mapStateToProps(state) {
  const { oneMeal } = state;
  return { oneMeal };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchOneMeal: (meal) => dispatch(fetchOneMeal(meal)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeal);
