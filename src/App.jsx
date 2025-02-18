import Home from './Components/Home/Home';
import MealDetiels from './Components/MealDetiels/MealDetiels';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Fix the path from 'Componants' to 'Components'
import Layout from './Components/Layout/Layout';
import CategoryMeals from './Components/CategoryMeals/CategoryMeals';
import './App.css';
import './styles/main.scss';  // Also fixed the import path for SCSS


const router = createBrowserRouter([
  {
    path : '/' ,
    element : <Layout></Layout> ,
    children : [
      {
        index: true ,
        element : <Home></Home>
      } ,
      {
        path : '/' ,
        element : <Home></Home>
      } ,
      {
        path: '/category/:categoryName',
        element: <CategoryMeals />
      },
      {
        path : '/mealdetiels/:id' ,
        element : <MealDetiels></MealDetiels>
      }
    ]}
  ]);

function App() {
  

  return (
    <>
          <RouterProvider router={router}/>
</>
  )
}

export default App
