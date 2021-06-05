import React from 'react';
import DataFormation from "../data/Formations";
import Formations from "./Formations"
import "./FormationsExperiences.css" ;
import DataExperiences from "../data/Experiences"
import Experiences from "./Experiences" ;


function FormationsExperiences () {
  console.log(DataFormation)
    return <>
      <Formations data={DataFormation} />
      <Experiences data={DataExperiences} />
    </>;

}

export default FormationsExperiences;