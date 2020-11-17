import React from 'react';
import './Home.css';
import {Button} from 'reactstrap';
import {useHistory} from 'react-router-dom';

 const Home=()=> {
    const history=useHistory();

    const changess=()=>{
        history.push("/Recipe");
    }
    
  return (
    <div className="hh">
    
       <h1 class="serif">Food Recipe</h1><br></br><br></br><br></br>
       <h5>"People who love to eat are always the best people."</h5><br></br>
       <h5> "To eat is a necessity, but to eat intelligently is an art."</h5><br></br>
       <h5> "We all eat, an it would be a sad waste of opportunity to eat badly."</h5> <br></br>
        <h5>"If you really want to make a friend, go to someone's house and eat with him...the people who give you their food give you their heart"</h5><br></br><br></br>
       <Button onClick={changess}  className="danger"><h3>Search</h3></Button>
      
    </div>
  );
}

export default Home;