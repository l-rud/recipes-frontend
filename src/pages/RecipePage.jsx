import { useState, useEffect } from "react";
import RecipeDisplay from "./RecipeDisplay";

//Defining a functional component RecipesByCategoryPage.
function RecipePage() {
    const [recipe, setRecipe] = useState(null); // defining React state for the page that will store recipe data 

    const getRecipe = async (searchTerm) => {
        const queryParameters = new URLSearchParams(window.location.search);
        const id = queryParameters.get("id");

        fetch(import.meta.env.VITE_apiBaseUrl + "/api/recipes/?format=json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                data = data.filter((recipe) => recipe.id == id);
                setRecipe(data[0]) 
            });
    };

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
        getRecipe();
    }, []);

    return (
        <div>
            <RecipeDisplay recipe={recipe} />
        </div>
    );
}

export default RecipePage;