import { Application, Sprite } from '../flash'
import config from '../config';

import { WzUnitTestSample } from '../whizz/WzUnitTestSample';

class WhizzApplication extends Application {
  constructor () {
    super(config.view);

    this.setup();

    this.stage.interactive = true;
    

    const bg = new Sprite();
    bg.graphics.beginFill(0x00DD88);
    bg.graphics.drawRect(0, 0, 550, 400);
    this.stage.addChild(bg);

    const sample = new WzUnitTestSample(this.stage);
    this.stage.addChild(sample);
  }

  setup () {
    //window.addEventListener('resize', this.onResize); //debounce this

    document.body.appendChild(this.view);

    //this.onResize();
  }

  onResize = () => {
    /** This screws with the co-ordinates for some reason */
    const w = window.innerWidth;
    const h = window.innerHeight;
    const ww = config.view.worldWidth;
    const wh = config.view.worldHeight;
    const ratio = Math.min(w / ww, h / wh);

    this.renderer.resize(w, h);
    this.stage.scale.set(ratio);
    this.stage.position.set(0);//(w - (ww * ratio)) / 2, 0);
  }

}

export default WhizzApplication;