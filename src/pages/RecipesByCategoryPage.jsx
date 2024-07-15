import { useState, useEffect } from "react";
import RecipesDisplay from "./RecipesDisplay";

//Defining a functional component RecipesByCategoryPage.
function RecipesByCategoryPage() {
    const [recipes, setRecipes] = useState(null); //Initializing a state variable recipes using the useState hook. This state will hold the fetched recipes.

    const getRecipesByCategory = async (searchTerm) => {
        const queryParameters = new URLSearchParams(window.location.search);
        const category = queryParameters.get("category");

        fetch(import.meta.env.VITE_apiBaseUrl + "/api/recipes/?format=json") // sending a GET request to the API endpoint with category parameter.
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                data = data.filter((recipe) => recipe.category.id == category);
                setRecipes(data)    //Updating the recipes state using setRecipes.
            });
    };

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
        getRecipesByCategory();
    }, []);

    return (
        <div>
            <RecipesDisplay recipes={recipes} />
        </div>
    );
}

export default RecipesByCategoryPage;