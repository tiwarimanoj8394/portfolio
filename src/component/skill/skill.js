import React from "react";
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
import './skill.css'
// about page
const Skill = () => {
  return (
    <section id="skill">
        <span className="skilltitle"><h1>What I Do</h1></span>
        <br />
        <span className="skilldisc">I am a skilled web designer and developr and willig to work for you</span>
        <span   className="skilldisc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad rem qui reprehenderit deserunt mollitia odit officia suscipit neque inventore illum! Tenetur, aspernatur magnam! Illo quisquam odio soluta fugiat excepturi quasi!
        </span>
     
        <div className="skillbars" >
            <div className="skillbar">
                <img src={UIDesign} alt="UIDesign" className="skillbarimg" />
                <div className="skillbartext">
                <h2>UI/UX design</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus omnis fugit enim voluptas mollitia consequatur?</p>    
                </div>                
            </div>
            <div className="skillbar">
                <img src={WebDesign} alt="WebDesign" className="skillbarimg" />
                <div className="skillbartext">
                <h2>Web design</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta assumenda temporibus incidunt.</p>    
                </div>                
            </div>
            <div className="skillbar">
                <img src={AppDesign} alt="AppDesign" className="skillbarimg" />
                <div className="skillbartext">
                <h2> App design </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam inventore soluta dolorem ea.</p>    
                </div>                
            </div>

        </div>
    </section>
  )
}

export default Skill