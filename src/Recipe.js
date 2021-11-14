import React,{ useState } from 'react';
import style from './Recipe.module.css';
function RecipeTemplate({title,cal,imgsrc,ingredients}) {
    
    const [btnstate,setBtnstate] = useState("Show More");
    const showHide  = (e) => {
        
        var ingredient = e.target.parentNode.childNodes[3];
       if(ingredient.style.display == "none") {
           ingredient.style.display = "inherit";
           setBtnstate("Show Less");
          
       }
       else {
            ingredient.style.display = "none";
            setBtnstate("Show More");
            
       }
        

    }
     
     

    return(
        <div className={style.recipe_box}>
            <img src={imgsrc} alt="" />
            <h2>{title}</h2>
            <h3>{cal}</h3>
            <ol className="list" style={{display:"none"}}>{ingredients.map(ingredient => (
                <li>{ingredient}</li>
            ))}</ol>

           <button onClick={(e) => {showHide(e)}} className="togglebtn" >{btnstate}</button>
            
        </div>
    );
}
export default RecipeTemplate;