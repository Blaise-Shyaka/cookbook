import { Link } from "react-router-dom";

export default function Meals(props) {
  const { meals } = props;
  return (
    <div>
      <h1>All Meals</h1>
      <Link to="/meal/1">One Meal</Link>
      {meals}
    </div>
  )
}