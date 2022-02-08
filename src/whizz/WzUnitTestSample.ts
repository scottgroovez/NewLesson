import type { AnimateAsset } from '../flash/types';
import { Ticker } from 'pixi.js';
import { Loader, MovieClip, Sprite } from '../flash';
import { MovieClipSimpleAnimator } from './MovieClipSimpleAnimator';

class WzUnitTestSample extends Sprite {
  static pIgnoreFrameEventFromGoToAndStop: boolean;
  pAnimator!: MovieClipSimpleAnimator;
  pSkin!: AnimateAsset;
  pLoader!: Loader;
  constructor() {
    super();
    this.fSetup();
  }

  fSetup () {
    this.pLoader = new Loader();
     //@ts-ignore
    this.pLoader.loadAnimate('MA_GBR_0650EAx0100', (asset, loader) => this.fLoadComplete(asset, loader) )
  }

  fGetDisplayObject(tName: string) {
    return new this.pSkin.lib[tName]() as MovieClip;
  }

  fLoadComplete(asset: AnimateAsset, loader: Loader) {
    this.pSkin = asset;
    //const stage = new this.pSkin.stage();
    //this.addChild(stage);
    //@ts-ignore
    //const worm = stage.payoff2;
    //worm.play();

    const anim = this.fGetDisplayObject('payoff2');
    anim.x = 275;
    anim.y = 350;
    this.addChild(anim);

    this.pAnimator = new MovieClipSimpleAnimator(anim, 20);
    this.pAnimator.fSetCallback(() => this.fRunIt());

    Ticker.shared.add(() => this.fAction());

    this.fRunIt();

  }

  fAction() {
    this.pAnimator.fAction();
  }

  fRunIt(tAnimator?: MovieClipSimpleAnimator) {
    this.pAnimator.fGoto(1, true);
  }

  public static fGoToFrame(
    tClip: MovieClip,
    tFrame: any,
    tPlay: boolean = false
  ) {
    WzUnitTestSample.pIgnoreFrameEventFromGoToAndStop = true;
    if (tPlay) {
      tClip.gotoAndPlay(tFrame);
    } else {
      tClip.gotoAndStop(tFrame);
    }
    WzUnitTestSample.pIgnoreFrameEventFromGoToAndStop = false;
  }
}

export { WzUnitTestSample };
