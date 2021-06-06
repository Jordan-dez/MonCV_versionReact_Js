import './App.css';
import User from './conponents/User';
import Skills from './conponents/Skills';
import Profil from './conponents/Profil';
import FormationsExperiences from './conponents/FormationsExperiences';
import Darkmode from './conponents/Darkmode';
import { Preview, print } from 'react-html2pdf';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
  
function App() {
  const handelGenerateCV = ()=>{
    let cvTemplate =document.getElementById('cv-print');
    cvTemplate.setAttribute('style','width:210mm !important');
    cvTemplate.classList.add('cv-print');
    cvTemplate.classList.remove('dark');
    setTimeout(()=>{
      print("cv","cv-print");
      cvTemplate.setAttribute('style','width:100% !important');
      cvTemplate.classList.remove('cv-print');
    },300)
  }
  return (


  <Preview id={'cv-print'} >
    <div className="App">
      
    {/**react,materiel ui,react-html2pdf */}
    {/**variables css */}
    <div className="grid__container">
      <div className="sidebar">
        <div className="action">
          <Darkmode />
          <button onClick={handelGenerateCV}> <PictureAsPdfIcon/></button>
        </div>
        
        <User />
        <Skills />
       
      </div>
      <div className="main">
        <Profil />
        <FormationsExperiences />
      </div>
    </div>


    {/**colonne de gauche */}
    {/**détails personnels - user */}
    {/**Compétences - skills */}
    {/**langues - skills */}
    {/** centre d'interets - interests */}
    {/**colonne de droite */}
    {/**profil - profil */}
    {/**formations - formations*/}
    {/**exp - experience */}
    {/** light/dark mode */}
    {/**génération pdf */}
    </div>
  </Preview>
  );
}

export default App;
