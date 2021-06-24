import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchOneMeal } from '../actions/actionCreators';

function SingleMeal(props) {
  const { id } = useParams()
  const { fetchOneMeal, oneMeal } = props

  useEffect(() => {
    fetchOneMeal(id);
  })

  const { strMeal, strInstructions, strTags, strMealThumb } = oneMeal;
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
  ]

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
  ]

  const ingredientsMarkup = ingredients.map(ingr => ingr && <li>{ingr}</li>)
  const measuresMarkup = measures.map(mes => mes.trim() && <li>{mes}</li>)

  return (
    <div>
      <Link to="/">Back</Link>
      <div>
        <div>
          <div>
            <img src={strMealThumb} alt={strMeal} />
          </div>
          <div>
            <h2>{strMeal}</h2>
            <p>{strInstructions}</p>
            <p>{strTags}</p>
          </div>
        </div>
        <div>
          <ul>
            {ingredientsMarkup}
          </ul>
          <ul>
            {measuresMarkup}
          </ul>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  const { oneMeal } = state;
  return { oneMeal }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchOneMeal: meal => dispatch(fetchOneMeal(meal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeal)
