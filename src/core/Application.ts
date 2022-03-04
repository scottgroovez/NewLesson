import { Application } from '../flash'
import config from '../config';

import { WzUnitTestSample } from '../whizz/WzUnitTestSample';

class WhizzApplication extends Application {
  constructor () {
    super(config.view);

    this.setup();

    const sample = new WzUnitTestSample();
    this.stage.addChild(sample);
  }

  setup () {
    window.addEventListener('resize', this.onResize); //debounce this

    document.body.appendChild(this.view);

    this.onResize();
  }

  onResize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const ww = config.view.worldWidth;
    const wh = config.view.worldHeight;
    const ratio = Math.min(w / ww, h / wh);

    this.renderer.resize(w, h);
    this.stage.scale.set(ratio);
    this.stage.position.set((w - (ww * ratio)) / 2, 0);
  }

}

export default WhizzApplication;