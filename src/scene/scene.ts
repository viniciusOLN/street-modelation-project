import {
  Scene,
  AmbientLight,
  DirectionalLight,
  Mesh,
  SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  BoxGeometry,  
  Color,
  DoubleSide,
  CylinderGeometry,
  CircleGeometry,
  CapsuleGeometry,
  RingGeometry,
  PointLight,
  MeshLambertMaterial,
} from "three"
import { updateRenderer } from "../core/renderer"

import { gui } from "../core/gui"

export const scene = new Scene()

const light = new PointLight( 0xFF0000, 8, 100 );
light.position.set( 2.2, -0.02, -0.82 );
scene.add( light );

const directionalLightCtrls = gui.addFolder({
  title: 'Luz do carro',
});

directionalLightCtrls.addInput(light.position, 'x', {
  label: 'direcao x',
})

directionalLightCtrls.addInput(light.position, 'y', {
  label: 'direcao y',
})

directionalLightCtrls.addInput(light.position, 'z', {
  label: 'direcao z',
})

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const PARAMS = {
  colorStreet: '#222',
  colorConcret: '#666',
  colorEdgeConcret: '#FFFF00',
  colorGrass: 0x00ff00,
  colorLineStreet: '#fff',
  colorPipeTrafficLight: '#AAA',
  colorPlateTrafficLight: '#555',
  colorRedLightTrafficLight: '#FF0000',
  colorYellowLight: '#FFFF00',
  colorGreenLight: '#008000',
  colorWheelCar: '#000',
}

const geometryWheel2 = new RingGeometry( .3, .1, 32 );
const materialWheel2 = new MeshLambertMaterial( { color: PARAMS.colorWheelCar, side: DoubleSide } );
const mesh = new Mesh( geometryWheel2, materialWheel2 );
mesh.position.set(4.5, .3, -1.3);
scene.add( mesh );

const mesh2 = new Mesh( geometryWheel2, materialWheel2 );
mesh2.position.set(5.5, .3, -.34);
scene.add( mesh2 );

const mesh3 = new Mesh( geometryWheel2, materialWheel2 );
mesh3.position.set(4.5, .3, -.34);
scene.add( mesh3 );

const mesh4 = new Mesh( geometryWheel2, materialWheel2 );
mesh4.position.set(5.5, .3, -1.34);
scene.add( mesh4 );

const geometryBenchWindow = new PlaneGeometry( .4, .8 );
const materialBenchWindow = new MeshLambertMaterial( {color:'#fff', side: DoubleSide} );
const windowCar = new Mesh( geometryBenchWindow, materialBenchWindow );
windowCar.rotation.set(0, Math.PI / 2, Math.PI / 2);
windowCar.position.set(4.48, 1, -.8);
scene.add( windowCar );

const geometryBenchWindow2 = new PlaneGeometry( .4, 1 );
const windowCar2 = new Mesh( geometryBenchWindow2, materialBenchWindow );
windowCar2.rotation.set(0, 0, Math.PI / 2);
windowCar2.position.set(5.2, 1, -.34);
scene.add( windowCar2 );

const windowCar3 = new Mesh( geometryBenchWindow2, materialBenchWindow );
windowCar3.rotation.set(0, 0, Math.PI / 2);
windowCar3.position.set(5.2, 1, -1.26);
scene.add( windowCar3 );

const windowCar4 = new Mesh( geometryBenchWindow, materialBenchWindow );
windowCar4.rotation.set(0, Math.PI / 2, Math.PI / 2);
windowCar4.position.set(5.92, 1, -.8);
scene.add( windowCar4 );

const geometrya = new SphereGeometry( .1, 32, 16 );
const materiala = new MeshLambertMaterial( { color: PARAMS.colorRedLightTrafficLight } );
const sphere = new Mesh( geometrya, materiala );
sphere.position.set(4.16, .6, -1.1);
scene.add( sphere );

const sphere2 = new Mesh( geometrya, materiala );
sphere2.position.set(4.16, .6, -.5);
scene.add( sphere2 );

const geometryCar2 = new BoxGeometry( 1.4, .8, .9 );
const materialCar2 = new MeshLambertMaterial( {color: PARAMS.colorPlateTrafficLight} );
const cubeCar2 = new Mesh( geometryCar2, materialCar2 );
cubeCar2.position.set(5.2, .9, -.8);
scene.add( cubeCar2 );

const geometryCar = new BoxGeometry( 1.8, .5, .9 );
const materialCar = new MeshLambertMaterial( {color: PARAMS.colorPlateTrafficLight} );
const cubeCar = new Mesh( geometryCar, materialCar );
cubeCar.position.set(5, .6, -.8);
scene.add( cubeCar );

const geometryBench4 = new PlaneGeometry( 1, 2.5 );
const materialBench4 = new MeshLambertMaterial( {color: PARAMS.colorStreet, side: DoubleSide} );
const bench17 = new Mesh( geometryBench4, materialBench4 );
bench17.rotation.set(Math.PI / 2, 0, 0);
bench17.position.set(-3, .7, 5);
scene.add( bench17 );

const bench18 = new Mesh( geometryBench4, materialBench4 );
bench18.rotation.set(0, Math.PI / 2, Math.PI / 2);
bench18.position.set(-3.5, 1.2, 5);
scene.add( bench18 );

const geometryPipeBench5 = new CapsuleGeometry( .1, .4, 2, 8 );
const materialPipeBench5 = new MeshLambertMaterial( {color: '#fff'} );
const pipeBench19 = new Mesh( geometryPipeBench5, materialPipeBench5 );
pipeBench19.position.set(-2.5, .5, 4);
scene.add( pipeBench19 );

const pipeBench20 = new Mesh( geometryPipeBench5, materialPipeBench5 );
pipeBench20.position.set(-2.5, .5, 6);
scene.add( pipeBench20 );


const pipeBench21 = new Mesh( geometryPipeBench5, materialPipeBench5 );
pipeBench21.position.set(-3.5, .5, 6);
scene.add( pipeBench21 );

const pipeBench22 = new Mesh( geometryPipeBench5, materialPipeBench5 );
pipeBench22.position.set(-3.5, .5, 4);
scene.add( pipeBench22 );

const geometryBench3 = new PlaneGeometry( 1, 2.5 );
const materialBench3 = new MeshLambertMaterial( {color: PARAMS.colorStreet, side: DoubleSide} );
const bench11 = new Mesh( geometryBench3, materialBench3 );
bench11.rotation.set(Math.PI / 2, 0, 0);
bench11.position.set(3, .7, 5);
scene.add( bench11 );

const bench12 = new Mesh( geometryBench3, materialBench3 );
bench12.rotation.set(0, Math.PI / 2, Math.PI / 2);
bench12.position.set(3.5, 1.2, 5);
scene.add( bench12 );

const geometryPipeBench4 = new CapsuleGeometry( .1, .4, 2, 8 );
const materialPipeBench4 = new MeshLambertMaterial( {color: '#fff'} );
const pipeBench13 = new Mesh( geometryPipeBench4, materialPipeBench4 );
pipeBench13.position.set(2.5, .5, 4);
scene.add( pipeBench13 );

const pipeBench14 = new Mesh( geometryPipeBench4, materialPipeBench4 );
pipeBench14.position.set(2.5, .5, 6);
scene.add( pipeBench14 );


const pipeBench15 = new Mesh( geometryPipeBench4, materialPipeBench4 );
pipeBench15.position.set(3.5, .5, 6);
scene.add( pipeBench15 );

const pipeBench16 = new Mesh( geometryPipeBench4, materialPipeBench4 );
pipeBench16.position.set(3.5, .5, 4);
scene.add( pipeBench16 );

const geometryBench2 = new PlaneGeometry( 1, 2.5 );
const materialBench2 = new MeshLambertMaterial( {color: PARAMS.colorStreet, side: DoubleSide} );
const bench5 = new Mesh( geometryBench2, materialBench2 );
bench5.rotation.set(Math.PI / 2, 0, 0);
bench5.position.set(3, .7, -5);
scene.add( bench5 );

const bench6 = new Mesh( geometryBench2, materialBench2 );
bench6.rotation.set(0, Math.PI / 2, Math.PI / 2);
bench6.position.set(3.5, 1.2, -5);
scene.add( bench6 );

const geometryPipeBench2 = new CapsuleGeometry( .1, .4, 2, 8 );
const materialPipeBench2 = new MeshLambertMaterial( {color: '#fff'} );
const pipeBench7 = new Mesh( geometryPipeBench2, materialPipeBench2 );
pipeBench7.position.set(2.5, .5, -4);
scene.add( pipeBench7 );

const pipeBench8 = new Mesh( geometryPipeBench2, materialPipeBench2 );
pipeBench8.position.set(2.5, .5, -6);
scene.add( pipeBench8 );


const pipeBench9 = new Mesh( geometryPipeBench2, materialPipeBench2 );
pipeBench9.position.set(3.5, .5, -6);
scene.add( pipeBench9 );

const pipeBench10 = new Mesh( geometryPipeBench2, materialPipeBench2 );
pipeBench10.position.set(3.5, .5, -4);
scene.add( pipeBench10 );

const geometryBench = new PlaneGeometry( 1, 2.5 );
const materialBench = new MeshLambertMaterial( {color: PARAMS.colorStreet, side: DoubleSide} );
const bench = new Mesh( geometryBench, materialBench );
bench.rotation.set(Math.PI / 2, 0, 0);
bench.position.set(-3, .7, -5);
scene.add( bench );

const bench2 = new Mesh( geometryBench, materialBench );
bench2.rotation.set(0, Math.PI / 2, Math.PI / 2);
bench2.position.set(-3.5, 1.2, -5);
scene.add( bench2 );

const geometryPipeBench = new CapsuleGeometry( .1, .4, 2, 8 );
const materialPipeBench = new MeshLambertMaterial( {color: '#fff'} );
const pipeBench = new Mesh( geometryPipeBench, materialPipeBench );
pipeBench.position.set(-2.5, .5, -4);
scene.add( pipeBench );

const pipeBench2 = new Mesh( geometryPipeBench, materialPipeBench );
pipeBench2.position.set(-2.5, .5, -6);
scene.add( pipeBench2 );


const pipeBench3 = new Mesh( geometryPipeBench, materialPipeBench );
pipeBench3.position.set(-3.5, .5, -6);
scene.add( pipeBench3 );

const pipeBench4 = new Mesh( geometryPipeBench, materialPipeBench );
pipeBench4.position.set(-3.5, .5, -4);
scene.add( pipeBench4 );

const geometryRedLight = new CircleGeometry( .2, 32 );
const materialRedLight = new MeshLambertMaterial( { color: PARAMS.colorRedLightTrafficLight } );
const redLight = new Mesh( geometryRedLight, materialRedLight );
redLight.rotation.set(0, Math.PI / 2, 0);
redLight.position.set(1.82, 2.6, 1.6);
scene.add( redLight );

const yellowLight = new Mesh( geometryRedLight, new MeshLambertMaterial( { color: PARAMS.colorYellowLight } ) );
yellowLight.rotation.set(0, Math.PI / 2, 0);
yellowLight.position.set(1.82, 2, 1.6);
scene.add( yellowLight );

const greenLight = new Mesh( geometryRedLight, new MeshLambertMaterial( { color: PARAMS.colorGreenLight } ) );
greenLight.rotation.set(0, Math.PI / 2, 0);
greenLight.position.set(1.82, 1.4, 1.6);
scene.add( greenLight );


const geometryBoxTrafficLight = new BoxGeometry( .4, 1.8, 1 );
const materialBoxTrafficLight = new MeshLambertMaterial( {color: PARAMS.colorPlateTrafficLight} );
const cube = new Mesh( geometryBoxTrafficLight, materialBoxTrafficLight );
cube.position.set(1.6, 2, 1.6);
scene.add( cube );

const geometryPipeTrafficLight = new CylinderGeometry( .1, .1, 2.2, 20 );
const materialPipeTrafficLight = new MeshLambertMaterial( {color: PARAMS.colorPipeTrafficLight} );
const pipe = new Mesh( geometryPipeTrafficLight, materialPipeTrafficLight );
pipe.position.set(1.6, 1.2, 1.6);
scene.add( pipe );

const geometryLineStreet = new BoxGeometry( .4, .2, 1 );
const materialLineStreet = new MeshToonMaterial( {color: PARAMS.colorLineStreet} );
const lineStreet = new Mesh( geometryLineStreet, materialLineStreet );
lineStreet.position.set(0, 0, -7);
scene.add( lineStreet );


const geometryPeopleWalk = new BoxGeometry( .2, .1, 2 );
const materialPeopleWalk = new MeshToonMaterial( {color: PARAMS.colorLineStreet} );

const lineStreet2 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreet2.position.set(0, 0, -5);
scene.add( lineStreet2 );

const linePeopleWalkH = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalkH.position.set(0, 0, -3);
scene.add( linePeopleWalkH );

const linePeopleWalkH1 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalkH1.position.set(-1.2, 0, -3);
scene.add( linePeopleWalkH1 );

const linePeopleWalkVH2 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalkVH2.position.set(-0.9, 0, -3);
scene.add( linePeopleWalkVH2 );

const linePeopleWalkVH3 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalkVH3.position.set(-0.6, 0, -3);
scene.add( linePeopleWalkVH3 );

const linePeopleWalkVH4 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalkVH4.position.set(-0.3, 0, -3);
scene.add( linePeopleWalkVH4 );

const linePeopleWalkVH5 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalkVH5.position.set(0, 0, -3);
scene.add( linePeopleWalkVH5 );

const linePeopleWalkVH6 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalkVH6.position.set(0.3, 0, -3);
scene.add( linePeopleWalkVH6 );

const linePeopleWalkVH7 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalkVH7.position.set(0.6, 0, -3);
scene.add( linePeopleWalkVH7 );

const linePeopleWalkVH8 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalkVH8.position.set(0.9, 0, -3);
scene.add( linePeopleWalkVH8 );

const linePeopleWalkVH9 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalkVH9.position.set(1.2, 0, -3);
scene.add( linePeopleWalkVH9 );

const lineStreet4 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreet4.position.set(0, 0, -1);
scene.add( lineStreet4 );

const lineStreet5 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreet5.position.set(0, 0, 1);
scene.add( lineStreet5 );

const linePeopleWalk3 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalk3.position.set(1.2, 0, 3);
scene.add( linePeopleWalk3 );

const linePeopleWalk4 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalk4.position.set(0.9, 0, 3);
scene.add( linePeopleWalk4 );

const linePeopleWalk5 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalk5.position.set(0.6, 0, 3);
scene.add( linePeopleWalk5 );

const linePeopleWalk6 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalk6.position.set(0.3, 0, 3);
scene.add( linePeopleWalk6 );

const linePeopleWalk7 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalk7.position.set(0, 0, 3);
scene.add( linePeopleWalk7 );

const linePeopleWalk8 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalk8.position.set(-0.3, 0, 3);
scene.add( linePeopleWalk8 );

const linePeopleWalk9 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalk9.position.set(-0.6, 0, 3);
scene.add( linePeopleWalk9 );

const linePeopleWalk10 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalk10.position.set(-0.9, 0, 3);
scene.add( linePeopleWalk10 );

const linePeopleWalk11 = new Mesh( geometryPeopleWalk, materialPeopleWalk );
linePeopleWalk11.position.set(-1.2, 0, 3);
scene.add( linePeopleWalk11 );

const lineStreet7 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreet7.position.set(0, 0, 5);
scene.add( lineStreet7 );

const lineStreet8 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreet8.position.set(0, 0, 7);
scene.add( lineStreet8 );

const lineStreetH = new Mesh( geometryLineStreet, materialLineStreet );
lineStreetH.rotation.set(0, Math.PI / 2, 0);
lineStreetH.position.set(-7, 0, 0);
scene.add( lineStreetH );

const lineStreetH2 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreetH2.rotation.set(0, Math.PI / 2, 0);
lineStreetH2.position.set(-5, 0, 0);
scene.add( lineStreetH2 );

const linePeopleWalkH2 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkH2.rotation.set(0, Math.PI / 2, 0);
linePeopleWalkH2.position.set(-3, 0, 1.2);
scene.add( linePeopleWalkH2 );

const linePeopleWalkH3 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkH3.rotation.set(0, Math.PI / 2, 0);
linePeopleWalkH3.position.set(-3, 0, .9);
scene.add( linePeopleWalkH3 );

const linePeopleWalkH4 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkH4.rotation.set(0, Math.PI / 2, 0);
linePeopleWalkH4.position.set(-3, 0, .6);
scene.add( linePeopleWalkH4 );

const linePeopleWalkH5 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkH5.rotation.set(0, Math.PI / 2, 0);
linePeopleWalkH5.position.set(-3, 0, .3);
scene.add( linePeopleWalkH5 );

const linePeopleWalkH6 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkH6.rotation.set(0, Math.PI / 2, 0);
linePeopleWalkH6.position.set(-3, 0, .0);
scene.add( linePeopleWalkH6 );

const linePeopleWalkH7 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkH7.rotation.set(0, Math.PI / 2, 0);
linePeopleWalkH7.position.set(-3, 0, -0.3);
scene.add( linePeopleWalkH7 );

const linePeopleWalkH8 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkH8.rotation.set(0, Math.PI / 2, 0);
linePeopleWalkH8.position.set(-3, 0, -0.6);
scene.add( linePeopleWalkH8 );

const linePeopleWalkH9 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkH9.rotation.set(0, Math.PI / 2, 0);
linePeopleWalkH9.position.set(-3, 0, -0.9);
scene.add( linePeopleWalkH9 );

const linePeopleWalkH10 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkH10.rotation.set(0, Math.PI / 2, 0);
linePeopleWalkH10.position.set(-3, 0, -1.2);
scene.add( linePeopleWalkH10 );


const lineStreetH4 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreetH4.rotation.set(0, Math.PI / 2, 0);
lineStreetH4.position.set(-1, 0, 0);
scene.add( lineStreetH4 );

const lineStreetH5 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreetH5.rotation.set(0, Math.PI / 2, 0);
lineStreetH5.position.set(1, 0, 0);
scene.add( lineStreetH5 );

const linePeopleWalkHV1 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkHV1.rotation.set(0,  Math.PI / 2, 0);
linePeopleWalkHV1.position.set(3, 0, -1.2);
scene.add( linePeopleWalkHV1 );

const linePeopleWalkHV2 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkHV2.rotation.set(0,  Math.PI / 2, 0);
linePeopleWalkHV2.position.set(3, 0, -.9);
scene.add( linePeopleWalkHV2 );

const linePeopleWalkHV3 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkHV3.rotation.set(0,  Math.PI / 2, 0);
linePeopleWalkHV3.position.set(3, 0, -.6);
scene.add( linePeopleWalkHV3 );

const linePeopleWalkHV4 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkHV4.rotation.set(0,  Math.PI / 2, 0);
linePeopleWalkHV4.position.set(3, 0, -.3);
scene.add( linePeopleWalkHV4 );

const linePeopleWalkHV5 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkHV5.rotation.set(0,  Math.PI / 2, 0);
linePeopleWalkHV5.position.set(3, 0, 0);
scene.add( linePeopleWalkHV5 );

const linePeopleWalkHV6 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkHV6.rotation.set(0,  Math.PI / 2, 0);
linePeopleWalkHV6.position.set(3, 0, 0.3);
scene.add( linePeopleWalkHV6 );

const linePeopleWalkHV7 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkHV7.rotation.set(0,  Math.PI / 2, 0);
linePeopleWalkHV7.position.set(3, 0, 0.6);
scene.add( linePeopleWalkHV7 );

const linePeopleWalkHV8 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkHV8.rotation.set(0,  Math.PI / 2, 0);
linePeopleWalkHV8.position.set(3, 0, 0.9);
scene.add( linePeopleWalkHV8 );

const linePeopleWalkHV9 = new Mesh( geometryPeopleWalk, materialLineStreet );
linePeopleWalkHV9.rotation.set(0,  Math.PI / 2, 0);
linePeopleWalkHV9.position.set(3, 0, 1.2);
scene.add( linePeopleWalkHV9 );

const lineStreetH7 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreetH7.rotation.set(0, Math.PI / 2, 0);
lineStreetH7.position.set(5, 0, 0);
scene.add( lineStreetH7 );

const lineStreetH8 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreetH8.rotation.set(0, Math.PI / 2, 0);
lineStreetH8.position.set(7, 0, 0);
scene.add( lineStreetH8 );

const geometryGrass = new BoxGeometry( 5.2, .2, 5.2 );
const materialGrass = new MeshToonMaterial( {color: PARAMS.colorGrass} );
const grass = new Mesh( geometryGrass, materialGrass );
grass.position.set(4.8, .3, 4.8);
scene.add( grass );

const grass2 = new Mesh( geometryGrass, materialGrass );
grass2.position.set(-4.8, .3, 4.8);
scene.add( grass2 );

const grass3 = new Mesh( geometryGrass, materialGrass );
grass3.position.set(-4.8, .3, -4.8);
scene.add( grass3 );

const grass4 = new Mesh( geometryGrass, materialGrass );
grass4.position.set(4.8, .3, -4.8);
scene.add( grass4 );

const geometryConcret = new BoxGeometry( 5.7, .2, 5.7 );
const materialConcret = new MeshToonMaterial( {color: PARAMS.colorConcret} );
const concret = new Mesh( geometryConcret, materialConcret );
concret.position.set(4.65, .2, 4.65);
scene.add( concret );

const concret2 = new Mesh( geometryConcret, materialConcret );
concret2.position.set(-4.65, .2, 4.65);
scene.add( concret2 );

const concret3 = new Mesh( geometryConcret, materialConcret );
concret3.position.set(4.65, .2, -4.65);
scene.add( concret3 );

const concret4 = new Mesh( geometryConcret, materialConcret );
concret4.position.set(-4.65, .2, -4.65);
scene.add( concret4 );

const geometry = new BoxGeometry( 6, .2, 6 );
const material = new MeshToonMaterial( {color: PARAMS.colorEdgeConcret} );
const edge = new Mesh( geometry, material );
edge.position.set(4.5, .1, 4.5);
scene.add( edge );

const edge2 = new Mesh( geometry, material );
edge2.position.set(-4.5, .1, -4.5);
scene.add( edge2 );

const edge3 = new Mesh( geometry, material );
edge3.position.set(-4.5, .1, 4.5);
scene.add( edge3 );

const edge4 = new Mesh( geometry, material );
edge4.position.set(4.5, .1, -4.5);
scene.add( edge4 );

const plane = new Mesh(
  new PlaneGeometry(15, 15, 15, 15),
  new MeshToonMaterial({
    color: new Color(PARAMS.colorStreet),
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

export function updateScene() {
  updateRenderer()
}
