import { Link } from "react-router-dom";
import { mealWrapper, mealImgWrapper, mealTitleWrapper } from '../styles/Meal.module.css'

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