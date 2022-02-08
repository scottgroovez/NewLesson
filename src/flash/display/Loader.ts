import type { AnimateAsset } from '../types';
import { Loader as PixiLoader } from 'pixi.js';
import * as animate from '@pixi/animate';

class Loader extends PixiLoader {
  async loadAnimate (file: string, onLoad: (file: AnimateAsset, loader: Loader) => void) {
    const importFile = await import(`Animations/${file}`);
    const pFile: AnimateAsset = importFile.default;
    const loadAnimateComplete = (loader: Loader) => {
      pFile.setup(animate);
      onLoad(pFile, loader);
    }
    animate.load(pFile, () => loadAnimateComplete(this));
  }
  
 }

export { Loader };