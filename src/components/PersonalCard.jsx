import { useContext } from 'react';
import {NavBarContext} from '../context/NavBarContext'

//gets homeClassName from NavBarContext

function PersonalCard() {
  const homeClassName = useContext(NavBarContext).homeClassName;
  return (
    <div className={homeClassName + ' w-screen'}>
      <div className='relative flex top-[30vh] m-10'>
         <h1 className="text-5xl font-bold text-forest-200 drop-shadow-2xl">Greetings!<br/>I&apos;m <span className='text-forest-100'>Javier</span> </h1>
         <h2 className='relative top-1 text-sm font-bold opacity-60 text-forest-500 z-[-1]'>Front-end developer</h2> 
      </div>
    </div>
  );
}

export default PersonalCard;
