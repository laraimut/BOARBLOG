import {AppRegistry} from 'react-360';

import AboutMe from './components/testing';
import TechSkill from './components/TechSkill';
import React3DView from './components/modelAbout';
import FlyingPlane from './components/planeflying';
import ContactMe from './components/Menu';
import Projects from './components/Movie';

import Meme from './components/meme';
import cloud from './components/cloud';


import Meme from './components/meme';

import cloud from './components/cloud';
import MeRobot from './components/meRobot';
import Scroll from './components/scrool';
import Storymenu from  './components/storymenu';
// import PhotoLib from './components/photoLib';


AppRegistry.registerComponent('testing', ()=> AboutMe);
AppRegistry.registerComponent('TechSkill', ()=> TechSkill);
AppRegistry.registerComponent('React3DView', ()=> React3DView);
AppRegistry.registerComponent('FlyingPlane', ()=>FlyingPlane);
AppRegistry.registerComponent('Menu',()=>ContactMe);
AppRegistry.registerComponent('Movie', ()=>Projects);
<<<<<<< HEAD
AppRegistry.registerComponent('Meme', ()=>Meme);
AppRegistry.registerComponent('cloud',()=>cloud);
=======

AppRegistry.registerComponent('Meme', ()=>Meme);

AppRegistry.registerComponent('cloud',()=>cloud);

>>>>>>> 6843b2ee64cf8939262f3a24f58d23bf45358a0a
AppRegistry.registerComponent('MeRobot', ()=>MeRobot);
AppRegistry.registerComponent('scrool', ()=>Scroll);
AppRegistry.registerComponent('storymenu', ()=>Storymenu);
// AppRegistry.registerComponent('PhotoLib',()=>PhotoLib)
