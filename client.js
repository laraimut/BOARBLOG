import {ReactInstance, Location, Surface} from 'react-360-web';


function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    assetRoot: './static_assets',
   
    ...options,
  });
//Cylinder
  const aboutMePanal = new Surface(800, 600, Surface.SurfaceShape.Flat);
  aboutMePanal.setAngle(0,0);
   const techSkillPanal = new Surface(600, 600, Surface.SurfaceShape.Flat);
   techSkillPanal.setAngle(67,0);

   const contactPanal = new Surface(800, 600, Surface.SurfaceShape.Flat);
   contactPanal.setAngle(0,-20); 

   const projectPanal = new Surface(600, 600, Surface.SurfaceShape.Flat);
   projectPanal.setAngle(40,0); 

   const photolibPanal = new Surface(1000, 600, Surface.SurfaceShape.Cylinder);
   photolibPanal.setAngle(0,-20); 



    r360.renderToSurface(
      r360.createRoot('AboutMe'),
      aboutMePanal,
    )

  r360.renderToSurface(
    r360.createRoot('TechSkill'),
    techSkillPanal,
  )

  
  r360.renderToSurface(
    r360.createRoot('ContactMe'),
    contactPanal,
  )

  r360.renderToSurface(
    r360.createRoot('Projects'),
    projectPanal,
  )

  r360.renderToSurface(
    r360.createRoot('PhotoLib'),
    photolibPanal,
  )

  r360.renderToLocation(
    r360.createRoot('FlyingPlane'),
    new Location([0, 2, 0]),
  )
  
  r360.renderToLocation(
    r360.createRoot('MeRobot'),
    new Location([-1, 0, -1]),
  )

  
  r360.compositor.setBackground('./static_assets/360_world.jpg');

}

window.React360 = {init};
