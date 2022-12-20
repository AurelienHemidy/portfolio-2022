import Experience from '../Experience.js';
import Helper from '../Helper.js';
import Environment from './Environment.js';

import Sand from './Sand.js';
import SphereSlider from './SphereSlider.js';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.time = this.experience.time;
    // this.resources = this.experience.resources;
    // this.helper = new Helper();

    this.sand = new Sand();
    this.sphereSlider = new SphereSlider();

    // Wait for resources
    // this.resources.on('ready', () => {
    //   // this.vinyl = new Vinyl();
    //   // this.objectSampling = new ObjectSampling();
    //   // this.cameraFollowPath = new CameraFollowPath();
    //   // Setup
    //   // this.floor = new Floor()
    //   // this.fox = new Fox()
    //   this.environment = new Environment();
    // });
  }

  update() {
    // if (this.fox) this.fox.update();
    if (this.sand) this.sand.update();
    if (this.sphereSlider) this.sphereSlider.update();
  }
}
