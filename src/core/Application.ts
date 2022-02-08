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
    document.body.appendChild(this.view);
  }

}

export default WhizzApplication;