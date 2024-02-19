import NavBar from "./components/NavBar";
import PersonalCard from "./components/PersonalCard";
import Examples from './components/Examples';
import About from './components/About'
import "@material/web/ripple/ripple";

function PortFolio() {
  return (
    <div className="fixed left-16">
      <PersonalCard/>
      <About/>
      <Examples/>
      <NavBar/>
    </div>
  );
}

/* https://react.dev/learn/sharing-state-between-components Para hacer, tengo que hacer que al clickear
el icono home, PersonalCard deje de renderizarse, puede ser por una funcion idk, y se renderice la pagina home
para hacer.. */

export default PortFolio;
