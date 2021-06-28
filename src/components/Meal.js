import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { mealWrapper, mealImgWrapper, mealTitleWrapper } from '../styles/Meal.module.css';

export default function Meal(props) {
  const { mealThumbnail, mealTitle, mealId } = props;
  return (
    <div className={mealWrapper}>
      <div className={mealImgWrapper}>
        <img src={mealThumbnail} alt={mealTitle} />
      </div>
      <div className={mealTitleWrapper}>
        <Link to={`/meal/${mealId}`}>{mealTitle}</Link>
      </div>
    </div>
  );
}

Meal.propTypes = {
  mealThumbnail: PropTypes.string.isRequired,
  mealTitle: PropTypes.string.isRequired,
  mealId: PropTypes.string.isRequired,
};
