import { useContext } from 'react';
import {NavBarContext} from '../context/NavBarContext'
import ExampleCard from './ExampleCard';
import taskImage from '../assets/task-manager.png'

function Examples() {
    const examplesClassName = useContext(NavBarContext).examplesClassName;

    return (
      <div className={'flex flex-col relative items-center '+examplesClassName}>
        <h1 className='font-bold text-5xl text-forest-200 m-10'>Examples</h1>
        <div className='example-card-wrapper grid relative h-[80vh] w-[80vw] grid-cols-2 overflow-y-auto'>
          <ExampleCard imageSource={taskImage} cardTitle='title' cardDescription='description'/>
          <ExampleCard imageSource={taskImage} cardTitle='title' cardDescription='description'/>
          <ExampleCard imageSource={taskImage} cardTitle='title' cardDescription='description'/>  
          <ExampleCard imageSource={taskImage} cardTitle='title' cardDescription='description'/>
          <ExampleCard imageSource={taskImage} cardTitle='title' cardDescription='description'/>
        </div>
      </div>
    );
  }
  
  export default Examples;
  