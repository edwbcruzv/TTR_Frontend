import React from "react";
import "../../../public/styles/parallax.css"
import mountain_behind from "../../../public/images/mountains_behind.png"
import stars from "../../../public/images/stars.png"
import mountains_front from "../../../public/images/mountains_front.png"
import moon from "../../../public/images/moon.png"
import "../../../public/scripts/parallax.js"
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