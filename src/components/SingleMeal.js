import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchOneMeal } from '../actions/actionCreators';

function SingleMeal(props) {
  const { id } = useParams()
  const { fetchOneMeal, oneMeal } = props
  console.log('Single Meals', props)
  useEffect(() => {
    fetchOneMeal(id);
  })

  const { strMeal, strInstructions, strTags, strMealThumb } = oneMeal;

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
            <li>{oneMeal.strIngredient1}</li>
            <li>{oneMeal.strIngredient2}</li>
            <li>{oneMeal.strIngredient3}</li>
            <li>{oneMeal.strIngredient4}</li>
            <li>{oneMeal.strIngredient5}</li>
            <li>{oneMeal.strIngredient6}</li>
            <li>{oneMeal.strIngredient7}</li>
            <li>{oneMeal.strIngredient8}</li>
            <li>{oneMeal.strIngredient9}</li>
            <li>{oneMeal.strIngredient10}</li>
            <li>{oneMeal.strIngredient11}</li>
            <li>{oneMeal.strIngredient12}</li>
          </ul>
          <ul>
            <li>{oneMeal.strMeasure1}</li>
            <li>{oneMeal.strMeasure2}</li>
            <li>{oneMeal.strMeasure3}</li>
            <li>{oneMeal.strMeasure4}</li>
            <li>{oneMeal.strMeasure5}</li>
            <li>{oneMeal.strMeasure6}</li>
            <li>{oneMeal.strMeasure7}</li>
            <li>{oneMeal.strMeasure8}</li>
            <li>{oneMeal.strMeasure9}</li>
            <li>{oneMeal.strMeasure10}</li>
            <li>{oneMeal.strMeasure11}</li>
            <li>{oneMeal.strMeasure12}</li>
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
