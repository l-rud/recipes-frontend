export default function RecipeDisplay({ recipe }) {
    
const loaded = () => {
        return (
            <>
                <div className="recipe-details">
                    <h2>{recipe.title}</h2>
                    <h3>Directions</h3>
                    <p>{recipe.directions}</p>
                    <h3>Ingredients</h3>
                    <p>{recipe.ingredients}</p>
                    <h3>Image</h3>
                    <p><img src={`${import.meta.env.VITE_apiBaseUrl}/static/images/${recipe.image}`} /></p>
                </div>
            </>
        );
    };

    // Function to return loading JSX
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    // Ternary operator will determine which functions JSX we will return
    return recipe ? loaded() : loading();
}