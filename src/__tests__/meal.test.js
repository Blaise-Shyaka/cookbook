import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Meal from '../components/Meal';

describe('The Meal Component', () => {
  const mealTitle = 'Speghetti Bolognaise';
  const mealImage = 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg';
  const mealId = 23;
  const mealComponent = (
    <BrowserRouter>
      <Meal mealTitle={mealTitle} mealId={mealId} mealThumbnail={mealImage} />
    </BrowserRouter>
  );

  it('Should render successfully the Meal Component', () => {
    render(mealComponent);
  });

  it('Should display the correct name of the meal', () => {
    const { getByText } = render(mealComponent);
    getByText(mealTitle);
  });
});
