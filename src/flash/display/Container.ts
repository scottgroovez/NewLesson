import { Container } from '@pixi/display';

/** TODO: Experimental for augmenting modules */
declare module '@pixi/display' {
  interface Container {
    getObjectUnderPoint(): void;
  }
}

Container.prototype.getObjectUnderPoint = function () {
  console.log('getObjectUnderPoint')
}

export { Container };
