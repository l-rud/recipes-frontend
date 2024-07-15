import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import RecipesByCategoryPage from "./pages/RecipesByCategoryPage";
import RecipePage from "./pages/RecipePage";
import './App.css';
import AllRecipesPage from './pages/AllRecipesPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="recipes-by-category" element={<RecipesByCategoryPage />} />
            <Route path="recipe" element={<RecipePage />} />
            <Route path="all-recipes" element={<AllRecipesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;