import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  BoxGeometry,
  MeshBasicMaterial,
  Color,
  DoubleSide,
} from "three"
import { renderer, updateRenderer } from "../core/renderer"

import { gui } from "../core/gui"

export const scene = new Scene()

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
}

const geometryLineStreet = new BoxGeometry( .4, .2, 1 );
const materialLineStreet = new MeshToonMaterial( {color: PARAMS.colorLineStreet} );
const lineStreet = new Mesh( geometryLineStreet, materialLineStreet );
lineStreet.position.set(0, 0, -7);
scene.add( lineStreet );

const lineStreet2 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreet2.position.set(0, 0, -5);
scene.add( lineStreet2 );

const lineStreet3 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreet3.position.set(0, 0, -3);
scene.add( lineStreet3 );

const lineStreet4 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreet4.position.set(0, 0, -1);
scene.add( lineStreet4 );

const lineStreet5 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreet5.position.set(0, 0, 1);
scene.add( lineStreet5 );

const lineStreet6 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreet6.position.set(0, 0, 3);
scene.add( lineStreet6 );

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

const lineStreetH3 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreetH3.rotation.set(0, Math.PI / 2, 0);
lineStreetH3.position.set(-3, 0, 0);
scene.add( lineStreetH3 );

const lineStreetH4 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreetH4.rotation.set(0, Math.PI / 2, 0);
lineStreetH4.position.set(-1, 0, 0);
scene.add( lineStreetH4 );

const lineStreetH5 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreetH5.rotation.set(0, Math.PI / 2, 0);
lineStreetH5.position.set(1, 0, 0);
scene.add( lineStreetH5 );

const lineStreetH6 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreetH6.rotation.set(0, Math.PI / 2, 0);
lineStreetH6.position.set(3, 0, 0);
scene.add( lineStreetH6 );

const lineStreetH7 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreetH7.rotation.set(0, Math.PI / 2, 0);
lineStreetH7.position.set(5, 0, 0);
scene.add( lineStreetH7 );

const lineStreetH8 = new Mesh( geometryLineStreet, materialLineStreet );
lineStreetH8.rotation.set(0, Math.PI / 2, 0);
lineStreetH8.position.set(7, 0, 0);
scene.add( lineStreetH8 );

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
