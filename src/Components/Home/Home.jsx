import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mealApi } from '../../services/mealApi';
import './Home.scss';

function Home() {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await mealApi.getCategories();
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await mealApi.searchMeals('');
        setMeals(response.data.meals);
      } catch (error) {
        console.error('Error fetching meals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return <>
    <div className="home">
      <h1>Welcome To Meal App</h1>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.idCategory}
            className="category-btn"
            onClick={() => navigate(`/category/${category.strCategory}`)}
          >
            {category.strCategory}
          </button>
        ))}
      </div>
    </div>
    <div className="home-container">
    <h1>Learn, Cook, Eat Your Food</h1>
    <div className="meals-grid">
      {meals && meals.length > 0 ? (
        meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="meal-info">
              <h3>{meal.strMeal}</h3>
              <p className="category">{meal.strCategory}</p>
              <button 
                className="view-recipe"
                onClick={() => navigate(`/mealdetiels/${meal.idMeal}`)}
              >
                View Recipe
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="no-meals">No meals found</div>
      )}
    </div>
  </div>
  </>;
}


export default Home;