import { Sprite as PixiSprite } from '@pixi/sprite';
import { Graphics } from '@pixi/graphics';

class Sprite extends PixiSprite {
  _graphics: Graphics;

  constructor() {
    super();
    this._graphics = new Graphics();
    this.addChild(this._graphics);
  }

  get graphics():Graphics {
    return this._graphics;
  }
}

export { Sprite };