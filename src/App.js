
import './App.css';
//import Recipe from "./Recipes";
import Food from "./Api component/food";
import Home from "./Api component/Home";
import {Image} from 'react-bootstrap';
import {BrowserRouter,Switch,Route} from "react-router-dom";

const App=()=>{

  
return(
  <div className="App">
    
  <BrowserRouter>
    
   
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Recipe" component={Food}/>
       
      </Switch>
  
    </BrowserRouter>
  </div>
);

}

export default App;
