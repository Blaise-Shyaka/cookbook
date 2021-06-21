export default function Meal(props) {
  const { mealThumbnail, mealTitle } = props;
  return (
    <div>
      <img src={mealThumbnail} alt={mealTitle}/>
      <div>
        <p>{mealTitle}</p>
      </div>
    </div>
  );
}