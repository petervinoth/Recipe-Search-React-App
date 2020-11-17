import React,{useEffect,useState} from "react";
import "./food.css";
import Recipe from "./Recipes";

import  {
    Form,
    FormGroup,
    Label,
    Button,
    Input
} from 'reactstrap';

import './food.css';

const Food=()=>{

  const App_id="57863a71";
  const App_key="932fc1d299dbf285ea535b63d263f77b";

  const [recipess,setRecipe]=useState([]);
  const [searchs,setSearchs]=useState("");

  const [query,setQuery]=useState(""); 

useEffect(()=>{
getRecipe();

}, [query]);

const getRecipe=async()=>{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`);
  const data=await response.json();
 
  setRecipe(data.hits);
  console.log(data.hits);
  
}

const updateSearch=e=>{
  setSearchs(e.target.value);


}

const getSearch=e=>{
  e.preventDefault();
setQuery(searchs);
setSearchs("");
}

return(
  <div className="foodsss">
     <h1>Food Recipe</h1><br></br><br></br>
     
  <Form onSubmit={getSearch} className="form-main">
               <FormGroup>
                 <Label>Recipe:</Label>
                 
                 <Input type="text" className="serach-box" value={searchs} onChange={updateSearch}></Input>&nbsp;&nbsp;
            
                 <Button   className="danger"><h3>Search</h3></Button><br></br><br></br>
                 </FormGroup>
   
  </Form>
  <div className="recipess">
  {recipess.map((recipe,index)=>(
    <Recipe  id={index} key={recipe.recipe.label} title={recipe.recipe.label} Calories={recipe.recipe.calories} image={recipe.recipe.image} IngredientLines={recipe.recipe.ingredientLines}/ >
  ))}
  </div>
  </div>
);

}

export default Food;
