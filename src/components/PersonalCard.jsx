import { useContext } from 'react';
import {NavBarContext} from '../context/NavBarContext'

//gets homeClassName from NavBarContext

function PersonalCard() {
  const homeClassName = useContext(NavBarContext);
  return (
    <div className={homeClassName.homeClassName}>
      <h1 className="personal-card">Greetings!<br/>I&apos;m</h1>
      <h1 className="personal-card my-name-cyan">Javier</h1>
      <h1 className="personal-card my-name-red">Javier</h1>
      <h2 className="absolute text-forest-100 top-82 left-50 text-xl font-semibold opacity-75">Frontend developer</h2>
    </div>
  );
}

export default PersonalCard;
