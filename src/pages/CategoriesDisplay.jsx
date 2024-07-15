//Importimg a 'Link' component from the 'react-router-dom' library, and you use the 
//'to'  attribute to specify the destination of the link.
import { Link } from "react-router-dom";

export default function CategoriesDisplay({ categories }) {

    // Function to return loaded JSX when categories are available.

//Iterates over the categories array and creates a list of <li> elements.
//Uses the Link component to create links that navigate to a route /recipes-by-category 
//with a query parameter category set to the current category.
//Returns a structured JSX with a <div>, <h2>, and <ul> containing the list of categories.
    
const loaded = () => {
        const categoriesList = [];

        categories.forEach((category, index) => {
            categoriesList.push(<li key={category.id}><Link to={`/recipes-by-category?category=${category.id}`}>{category.name}</Link></li>);
        });

        return (
            <>
                <div className="recipe-details">
                    <h2>Categories</h2>
                    <ul>{categoriesList}</ul>
                </div>
            </>
        );
    };

    // Function to return loading JSX.
    const loading = () => {
        return <h1>Loading...</h1>;
    };

    // Ternary operator will determine which functions JSX we will return.
    return categories ? loaded() : loading();
}