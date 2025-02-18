import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const mealApi = {
  getCategories: () => axios.get(`${BASE_URL}/categories.php`),
  getMealsByCategory: (category) => axios.get(`${BASE_URL}/filter.php?c=${category}`),
  getMealById: (id) => axios.get(`${BASE_URL}/lookup.php?i=${id}`),
  searchMeals: (term) => axios.get(`${BASE_URL}/search.php?s=${term}`)
};