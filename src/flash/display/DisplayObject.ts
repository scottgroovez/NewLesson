import * as PIXI from 'pixi.js';
import { DisplayObject } from '@pixi/display';
import { AbstractRenderer, Point } from 'pixi.js';

/** TODO: Experimental for augmenting modules */
declare module '@pixi/display' {
  interface DisplayObject {
    renderer: AbstractRenderer;
    hitTestPoint(x:number, y:number, shapeFlag?: boolean ): boolean;
    hitTestObject(object:DisplayObject): boolean;
    getObjectUnderPoint(point:Point): DisplayObject | undefined;
    getObjectsUnderPoint(point:Point): DisplayObject[];
  }
}
DisplayObject.prototype.renderer = PIXI.autoDetectRenderer();
DisplayObject.prototype.hitTestPoint = function(x, y, shapeFlag = false) {
  //Todo: Find a better way. Perhaps use https://www.npmjs.com/package/pixi-plugin-bump
  if (shapeFlag) {
    const hitObjects = this.parent.getObjectsUnderPoint(new Point(x, y));
    const find = hitObjects.find((obj) => obj === this);
    return !!find;
  }
  const aBox = this.getBounds();
  return aBox.x + aBox.width > x &&
      aBox.x < x &&
      aBox.y + aBox.height > y &&
      aBox.y < y;
}

DisplayObject.prototype.hitTestObject = function(object) {
  //Todo: Find a better way. Perhaps use https://www.npmjs.com/package/pixi-plugin-bump
  const aBox = this.getBounds();
  const bBox = object.getBounds();

  return aBox.x + aBox.width > bBox.x &&
      aBox.x < bBox.x + bBox.width &&
      aBox.y + aBox.height > bBox.y &&
      aBox.y < bBox.y + bBox.height;

}

DisplayObject.prototype.getObjectUnderPoint = function(point) {
  const interaction = this.renderer.plugins.interaction;
  const hitObject = interaction.hitTest(point, this);
  return hitObject;
}

DisplayObject.prototype.getObjectsUnderPoint = function (point) {
  const hitObjects: DisplayObject[] = [];
  const interaction = this.renderer.plugins.interaction;
  const hitTestEvent = {
    target: null,
    data: {
      global: point
    }
  }

  const callback = (interactionEvent: { target: DisplayObject | null }, displayObject: DisplayObject, hit: boolean) => {
    if (interactionEvent && interactionEvent.target) {
      //Need to clear the target otherwise it only finds the first hit target
      interactionEvent.target = null;
    }
    if (hit) {
      hitObjects.push(displayObject);
    }
  }
  interaction.processInteractive(hitTestEvent, this, callback, true);
  return hitObjects;
}

export { DisplayObject };