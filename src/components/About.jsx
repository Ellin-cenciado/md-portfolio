import { useContext } from 'react';
import {NavBarContext} from '../context/NavBarContext'
import {Description} from './AboutDescription'

//gets aboutClassName from NavBarContext
//I have to remove personal-card className and start stylizing this

function About() {
    const aboutClassName = useContext(NavBarContext).aboutClassName;
    return (
      <div className={aboutClassName}>
        <h1 className="about-card">About Me<br/></h1>
        <Description/>

{/*         <h2 className="absolute text-forest-100 top-82 left-50 text-xl font-semibold opacity-75">Frontend developer</h2>
 */}      </div>
    );
  }
  
  export default About;
  