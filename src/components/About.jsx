import { useContext } from 'react';
import {NavBarContext} from '../context/NavBarContext'

//gets aboutClassName from NavBarContext
//I have to remove personal-card className and start stylizing this

function About() {
    const aboutClassName = useContext(NavBarContext).aboutClassName;
    return (
      <div className={'w-screen ' +aboutClassName}>
        <div className='relative m-10 top-[20vh] max-w-[60vh]'>
          <h1 className="relative text-5xl font-bold text-forest-200">About Me<br/></h1>
          <p className="relative text-forest-500 font-bold">
          I am a Computer Science student at FaMAF. My passion for technology and
          continuous learning drives me to immerse myself in new technologies. I
          am excited about the opportunity to connect with individuals passionate
          about programming and ready to contribute my enthusiasm and skills to
          any challenging project that arises.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;
  