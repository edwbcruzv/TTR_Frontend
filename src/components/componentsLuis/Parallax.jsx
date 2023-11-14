import React from "react";
import "./estilosLuis/parallax.css"
import mountain_behind from "./mountains_behind.png"
import stars from "./stars.png"
import mountains_front from "./mountains_front.png"
import moon from "./moon.png"
import "./estilosLuis/parallax.js"
const Parallax = ()=>{
    return(
        <div className="parallax">
            <img src={stars} alt="Stars" className="stars"/>
            <img src={moon} alt="Moon" className="moon" />
            <img src={mountain_behind} alt="Mountains behind" className="mountains_behind" />
            <h2 className="text">Case Builder</h2>
            <a href="#" className="btn">Login</a>
            <img src={mountains_front} alt="Mountains front" className="mountains_front" />            
        </div>
    )
}

export default Parallax;