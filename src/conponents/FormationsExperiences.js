import React from 'react';
import DataFormation from "../data/Formations";
import Formations from "./Formations"
import "./FormationsExperiences.css" ;

function FormationsExperiences () {
  console.log(DataFormation)
    return <>
      <Formations data={DataFormation} />
    </>;

}

export default FormationsExperiences;