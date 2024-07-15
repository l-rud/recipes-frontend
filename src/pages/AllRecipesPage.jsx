import { useState, useEffect } from "react";
import RecipesDisplay from "./RecipesDisplay";

//Defining a functional component AllRecipesPage.
function AllRecipesPage() {
    const [recipes, setRecipes] = useState(null); //Initializing a state variable recipes using the useState hook. This state will hold the fetched recipes.

    const getAllRecipes = async (searchTerm) => {
        fetch(import.meta.env.VITE_apiBaseUrl + "/api/recipes/?format=json") // sending a GET request to the API endpoint.
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setRecipes(data)    //Updating the recipes state using setRecipes.
            });
    };

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
        getAllRecipes();
    }, []);

    return (
        <div>
            <RecipesDisplay recipes={recipes} />
        </div>
    );
}

export default AllRecipesPage;