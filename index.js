import {AppRegistry} from 'react-360';

import AboutMe from './components/testing';
import TechSkill from './components/TechSkill';
import React3DView from './components/modelAbout';
import FlyingPlane from './components/planeflying';
import ContactMe from './components/contactMe';
import Projects from './components/Projects';

import MeRobot from './components/meRobot';
// import PhotoLib from './components/photoLib';


AppRegistry.registerComponent('testing', ()=> AboutMe);
AppRegistry.registerComponent('TechSkill', ()=> TechSkill);
AppRegistry.registerComponent('React3DView', ()=> React3DView);
AppRegistry.registerComponent('FlyingPlane', ()=>FlyingPlane);
AppRegistry.registerComponent('ContactMe',()=>ContactMe);
AppRegistry.registerComponent('Projects', ()=>Projects);

AppRegistry.registerComponent('MeRobot', ()=>MeRobot);
// AppRegistry.registerComponent('PhotoLib',()=>PhotoLib)
