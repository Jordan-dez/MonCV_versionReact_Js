import React from 'react';
import "./Skills.css";
import Skill from "./Skill";
import Interests from "./Interests";

function Skills () {
    return (
      <>
        <div className="skills">
          <h2 className="h2">compétences</h2>
          <Skill title="HTML" rating="5"/>
          <Skill title="CSS" rating="4"/>
          <Skill title="JavaScript" rating="4"/>
          <Skill title="PHP" rating="5"/>
          <Skill title="REACT" rating="3"/>
          <Skill title="PHOTOSHOP" rating="3"/>
        </div>
        <div className="skills">
          <h2 className="h2">langues</h2>
          <Skill title="SANGO" rating="5"/>
          <Skill title="FRANCAIS" rating="4"/>
          <Skill title="ANGLAIS" rating="3"/>
        </div>
        <Interests />
      </>
      
    );
}

export default Skills;