import { useContext } from 'react';
import {NavBarContext} from '../context/NavBarContext'

//gets examplesClassName from NavBarContext
//I have to remove personal-card className and start stylizing this


function Examples() {
    const examplesClassName = useContext(NavBarContext);

    return (
      //<Greeting/>
      <div className={examplesClassName.examplesClassName}>
        <h1 className="personal-card">Examples Page!<br/>I&apos;m</h1>
        <h1 className="personal-card my-name-cyan">Javier</h1>
        <h1 className="personal-card my-name-red">Javier</h1>
        <h2 className="absolute text-forest-100 top-82 left-50 text-xl font-semibold opacity-75">Frontend developer</h2>
      </div>
    );
  }
  
  export default Examples;
  