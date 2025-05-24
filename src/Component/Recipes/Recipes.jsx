
import Recipe from './Recipe';
import './Recipes.css';

function Recipes({RecipeData}) {

  return (
    <div className='recipe-grid'>
      {RecipeData.map((items) => (
        <Recipe  Single_Recipe={items} />
      ))}
    </div>
  );
}

export default Recipes;
