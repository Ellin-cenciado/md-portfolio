import { useContext } from 'react';
import {NavBarContext} from '../context/NavBarContext'

//gets homeClassName from NavBarContext

function PersonalCard() {
  const homeClassName = useContext(NavBarContext).homeClassName;
  return (
    <div className={homeClassName}>
      <h1 className="personal-card">Greetings!<br/>I&apos;m</h1>
      <div className='max-w-0'>
        <h1 className="personal-card my-name-cyan">Javier</h1>
        <h1 className="personal-card my-name-red">Javier</h1>
      </div>
      <h2 className="role-description">Frontend developer</h2>
    </div>
  );
}

export default PersonalCard;
