export default function PopularMeal(props) {
  const { mealImage, mealTitle } = props;
  return (
    <div>
      <div>
        <img src={mealImage} alt={mealTitle} />
      </div>
      <div>
        <p>Some Meal</p>
      </div>
    </div>
  );
}