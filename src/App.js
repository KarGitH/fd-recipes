import React from "react";
import './App.css';
import './key';
import Axios from "axios"; 
import RecipeTile from "./RecipeTile";

function App() {
  const [query,setQuery] = React.useState("")
  const [recipes,setRecipes] = React.useState([])
  const [healthLabels,sethealthLabels] = React.useState("vegan")

  const YOUR_APP_ID="2ab9abf1";
const YOUR_APP_KEY="3d4e97370888d92bde515f39cf1463b6";
  var url = `https://api.edamam.com/search?q=chicken&
  app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&
  health=${healthLabels}`;
  async function getRecipes()
  {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }
  const onSubmit = (e) =>{
e.preventDefault();
getRecipes();
  }
  return (
    < div className = "app" >
        <h1>Food Recipe Plaza</h1>
        <form className="app_searchForm" onSubmit={onSubmit}>
         <input type="text"
         className="app_input"
          placeholder="Enter Ingridient"
         value={query} onChange={(e)=>{setQuery
          (e.target.value)}}
          />
          <input className="app_submit" type="submit" value="Search"/>
          <select className="app_healthLabels">
            <option onClick={()=>sethealthLabels("vegan")}>
              Vegan</option>
              <option onClick={()=>sethealthLabels("vegeterian")}>
              Vegeterian</option>
              <option onClick={()=>sethealthLabels("paleo")}>
              Paleo</option>
              <option onClick={()=>sethealthLabels("diary-free")}>
              diary-free</option>
              <option onClick={()=>sethealthLabels("gluten-free")}>
              gluten-free</option>
              <option onClick={()=>sethealthLabels("wheat-free")}>
              wheat-free</option>
              <option onClick={()=>sethealthLabels("fish-free")}>
              fish-free</option>

          </select>
        </form>
        <div className="app_recipes">
          {recipes.map(recipe=>{
            return <RecipeTile recipe={recipe}/>; 
          })}
        </div>
    </div>
  );
}

export default App;
