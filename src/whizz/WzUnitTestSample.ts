import type { AnimateAsset } from '../flash/types';
import { Button, Loader, MovieClip, Sprite, Text, Ticker, Graphics, Container } from '../flash';
import { MovieClipSimpleAnimator } from './MovieClipSimpleAnimator';
import gsap from 'gsap';

class WzUnitTestSample extends Sprite {
  static pIgnoreFrameEventFromGoToAndStop: boolean;
  pAnimator!: MovieClipSimpleAnimator;
  pSkin!: AnimateAsset;
  pLoader!: Loader;
  pBallCount!: Text;
  pBallContainer!: Container;
  pBallInterval!: NodeJS.Timer;
  pType: 'circle' | 'ball' = 'circle';
  btn!: Button;
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
    return new this.pSkin.lib[tName]();
  }

  fLoadComplete(asset: AnimateAsset, loader: Loader) {
    this.pSkin = asset;
    //const stage = new this.pSkin.stage();
    //this.addChild(stage);
    //@ts-ignore
    //const worm = stage.payoff2;
    //worm.play();

    const anim = this.fGetDisplayObject('payoff2') as MovieClip;
    anim.x = 275;
    anim.y = 350;
    this.addChild(anim);

    this.pBallContainer = new Container();
    this.addChild(this.pBallContainer);

    this.pBallCount = new Text('');
    this.pBallCount.x = 10;
    this.pBallCount.y = 320;
    this.addChild(this.pBallCount);

    this.pAnimator = new MovieClipSimpleAnimator(anim, 20);
    this.pAnimator.fSetCallback(() => this.fRunIt());

    Ticker.shared.add(() => {
      this.addObject();
      this.fAction();
    });

    this.fRunIt();

    const btn = new Button(this.getLabel());
    btn.x = 60;
    btn.y = 380;
    btn.on('pointerdown', () => {
      this.pType = this.pType === 'circle' ? 'ball' : 'circle';
      btn.label = this.getLabel();
      this.reset();
    });
    this.addChild(btn);

    this.btn = btn;
  }

  getLabel() {
    return this.pType === 'circle' ? 'Circles' : 'Balls';
  }

  reset() {
    this.pBallContainer.removeChildren();
  }

  ballType() {
    if (this.pType === 'circle') {
      const ball = new Graphics();
      ball.beginFill(0xCCCCCC);
      ball.lineStyle(1, 0x000000);
      ball.drawCircle(0,0, 20);
      return ball;
    } else {
      return this.fGetDisplayObject('Graphic1');
    }
  }

  addObject() {
    const ball = this.ballType();
    ball.x = gsap.utils.random(10, 540);
    ball.y = gsap.utils.random(10, 200);
    this.pBallContainer.addChild(ball);
    gsap.to(ball, { duration: 2, y: 375, ease: 'bounce.out', repeat: -1 });

    this.updateDisplay();
  }

  updateDisplay() {
    const count = this.pBallContainer.children.length;
    this.pBallCount.text = `Items: ${count}`;
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
