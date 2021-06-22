export default function Meal(props) {
  const { mealThumbnail, mealTitle } = props;
  return (
    <div>
      <h1>One Meal</h1>
      <img src={mealThumbnail} alt={mealTitle}/>
      <div>
        <p>{mealTitle}</p>
      </div>
    </div>
  );
}