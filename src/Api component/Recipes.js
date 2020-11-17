import React,{useState} from "react";
//import {Card ,Button} from  'reactstrap';
import  "./Recipes.css";


const Recipe=({title,Calories,image,IngredientLines,id})=>{

 // const [ids,setIds]=useState("");
  //console.log(ids);
 

    return(
      <div className="recipe">
        <h1 className="uiu">{title}</h1>
        <ol>
          {IngredientLines.map(ingr=>(
            <li>{ingr}</li>
          ))}
        </ol>
        
        <img className="image" src={image} alt=""></img>
        <p className="ptag">Calories:{Calories}</p>
          
      </div>
     

     
    );
}



export default Recipe;