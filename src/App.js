import './App.css';
import User from './conponents/User';
import Skills from './conponents/Skills';
import Profil from './conponents/Profil';
import FormationsExperiences from './conponents/FormationsExperiences';
function App() {
  return (
    <div className="App">
      
    {/**react,materiel ui,react-html2pdf */}
    {/**variables css */}
    <div className="grid__container">
      <div className="sidebar">
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
  );
}

export default App;
