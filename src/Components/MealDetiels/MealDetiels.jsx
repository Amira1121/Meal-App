import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mealApi } from '../../services/mealApi';
import Loading from '../CategoryMeals/Loading/Loading';

import './MealDetiels.scss';


function MealDetiels() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await mealApi.getMealById(id);
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching meal:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  if (loading) return <Loading />;
  if (!meal) return <div>Meal not found</div>;

  return (
    <div className="meal-details">
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
      {meal && (
        <>
          <div className="ingredients-section">
            <h2>Ingredients</h2>
            <div className="ingredients-grid">
              {getIngredients(meal).map(({ ingredient, measure }, index) => (
                <div key={index} className="ingredient-item">
                  <span className="ingredient-name">{ingredient}</span>
                  <span className="ingredient-measure">{measure}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="meal-content">
          <div className="image-section">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <div className="action-buttons">
                <a 
                  href={meal.strYoutube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="youtube-btn"
                >
                  <span className="icon">▶</span> youtube
                </a>
                <a 
                  href={meal.strSource} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="source-btn"
                >
                  <span className="icon">🌐</span> source
                </a>
              </div>
            </div>



        <div className="meal-info">
          <h1>{meal.strMeal}</h1>
          <p className="category">Category: {meal.strCategory}</p>
          <p className="area">Area: {meal.strArea}</p>

          

          <div className="instructions">
            <h2>Instructions</h2>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
       </div>
        </>
      )}
    </div>
  );
}

export default MealDetiels;