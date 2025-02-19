import { useState, useEffect } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import { mealApi } from '../../services/mealApi';
import Loading from '../CategoryMeals/Loading/Loading';


function CategoryMeals() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await mealApi.getMealsByCategory(categoryName);
        setMeals(response.data.meals);
      } catch (error) {
        console.error('Error fetching meals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [categoryName]);

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

  if (loading) return <Loading />;

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

    <div className="category-meals">
      <h2>{categoryName} Meals</h2>
      <div className="meals-grid">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="meal-info">
              <h3>{meal.strMeal}</h3>
              <button onClick={() => navigate(`/mealdetiels/${meal.idMeal}`)}>
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>;
}

export default CategoryMeals;