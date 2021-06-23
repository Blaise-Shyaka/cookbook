import { Link } from "react-router-dom";

export default function Meal(props) {
  const { mealThumbnail, mealTitle, mealId } = props;
  return (
    <div>
      <img src={mealThumbnail} alt={mealTitle}/>
      <div>
        <Link to={`/meal/${mealId}`}>{mealTitle}</Link>
      </div>
    </div>
  );
}