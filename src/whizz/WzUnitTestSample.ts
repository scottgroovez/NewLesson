import type { AnimateAsset } from '../flash/types';
import { Ticker, Graphics, Container } from 'pixi.js';
import { Loader, MovieClip, Sprite, Text } from '../flash';
import { MovieClipSimpleAnimator } from './MovieClipSimpleAnimator';
import gsap from 'gsap';

class WzUnitTestSample extends Sprite {
  static pIgnoreFrameEventFromGoToAndStop: boolean;
  pAnimator!: MovieClipSimpleAnimator;
  pSkin!: AnimateAsset;
  pLoader!: Loader;
  pFps!: Text;
  pBallCount!: Text;
  pBallContainer!: Container;
  pBallInterval!: NodeJS.Timer;
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

    this.pBallContainer = new Container();
    this.addChild(this.pBallContainer);

    this.pFps = new Text('');
    this.pFps.x = 10;
    this.pFps.y = 10;
    this.addChild(this.pFps);

    this.pBallCount = new Text('');
    this.pBallCount.x = 10;
    this.pBallCount.y = 50;
    this.addChild(this.pBallCount);

    const anim = this.fGetDisplayObject('payoff2');
    anim.x = 275;
    anim.y = 350;
    this.addChild(anim);

    this.pAnimator = new MovieClipSimpleAnimator(anim, 20);
    this.pAnimator.fSetCallback(() => this.fRunIt());

    Ticker.shared
      .add(() => this.fAction())

    this.fRunIt();

    this.pBallInterval = setInterval(() => this.addObject(), 10);

    setInterval(() => this.pFps.text = `FPS: ${Math.round(Ticker.shared.FPS)}`, 100);
  }

  addObject() {
    /*
    const ball = new Graphics();//this.fGetDisplayObject('ball_select');
    ball.beginFill(0xCCCCCC);
    ball.lineStyle(1, 0x000000);
    ball.drawCircle(0,0, 20);
    */
    const ball = this.fGetDisplayObject('ball_select');
    ball.x = gsap.utils.random(10, 540);
    ball.y = 10;
    this.pBallContainer.addChild(ball);
    gsap.to(ball, { duration: 2, y: 375, ease: 'bounce.out' });

    this.updateDisplay();
  }

  updateDisplay() {
    const count = this.pBallContainer.children.length;
    this.pBallCount.text = `Balls: ${count}`;

    if (count >= 10000) {
      clearInterval(this.pBallInterval);
    }
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
