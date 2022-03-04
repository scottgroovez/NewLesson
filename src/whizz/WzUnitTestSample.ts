import type { AnimateAsset } from '../flash/types';
import {
  Button,
  Loader,
  MovieClip,
  Sprite,
  Text,
  Ticker,
  Graphics,
  Container,
  TextInput
} from '../flash';
import {
  TextField,
  TextFormat,
  TextFormatAlign
} from '../flash/text';

import { MovieClipSimpleAnimator } from './animation/MovieClipSimpleAnimator';
import gsap from 'gsap';
import * as PIXI from 'pixi.js';

type TFormatType = {
  nUnderline?: TextFormat['underline'],
  nFontSize?: TextFormat['size'],
  nAlignment?: TextFormat['align'],
  nVAlignment?: number,
  nPosition?: number,
  nColour?: TextFormat['color'],
  nItalic?: boolean,
  nFieldWidth?: number,
  nFieldHeight?: number,
  nCrop?: boolean,
  nWrap?: boolean,
  nCase?: unknown, //TODO fix
  nAllOnOneLine?: boolean,
  nBold?: boolean,
  nAlignToPoint?: boolean,
}

class WzUnitTestSample extends Sprite {
  static pIgnoreFrameEventFromGoToAndStop: boolean;
  pAnimator!: MovieClipSimpleAnimator;
  pSkin!: AnimateAsset;
  pLoader!: Loader;
  pFps!: Text;
  pBallCount!: Text;
  pBallContainer!: Container;
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
    const renderer = PIXI.autoDetectRenderer();

    this.pBallContainer = new Container();
    this.pBallContainer.interactiveChildren = true;

    this.pBallContainer.interactive = true;
    this.pBallContainer.interactiveChildren = true;
    this.pBallContainer.on('pointerdown', () => {
      const interaction = renderer.plugins.interaction;
      const mousePosition = interaction.mouse.global;
      const hitObject = interaction.hitTest(mousePosition, this.pBallContainer);
      if (hitObject) {
        hitObject.scale.set(2);
      }
    });

    this.addChild(this.pBallContainer);

    const anim = this.fGetDisplayObject('payoff2') as MovieClip;
    anim.x = 275;
    anim.y = 350;
    this.addChild(anim);



    this.pFps = new Text('');
    this.pFps.x = 10;
    this.pFps.y = 10;
    this.addChild(this.pFps);

    this.pBallCount = new Text('');
    this.pBallCount.x = 10;
    this.pBallCount.y = 50;
    this.addChild(this.pBallCount);

    this.pAnimator = new MovieClipSimpleAnimator(anim, 20);
    this.pAnimator.fSetCallback(() => this.fRunIt());

    Ticker.shared
    .add(() => this.fAction())

    this.fRunIt();

    setInterval(() => this.pFps.text = `FPS: ${Math.round(Ticker.shared.FPS)}`, 100);

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

    const input = new TextInput();
    input.x = 275;
    input.y = 200;
    this.addChild(input);

    const message = new TextField();
    message.text = 'Hello, Message box';
    message.bold = true;
    message.x = 50;
    message.y = 100;
    this.addChild(message);

    this.fSetFormat(message, { nColour: '#115b05', nFontSize: 25, nBold: true, nUnderline: true })

    this.reset();
  }

  getLabel() {
    return this.pType === 'circle' ? 'Circles' : 'Balls';
  }

  reset() {
    this.pBallContainer.removeChildren();
    for(var i = 0; i < 100; i++) {
      this.addObject();
    }
    this.updateDisplay();
  }

  ballType() {
    if (this.pType === 'circle') {
      const ball = new Graphics();
      ball.beginFill(Math.floor(Math.random()*16777215));
      ball.lineStyle(1, 0x000000);
      ball.drawCircle(0,0, 20);
      return ball;
    } else {
      return this.fGetDisplayObject('Graphic1');
    }
  }

  addObject() {
    if (this.pBallContainer.children.length >= 100) {
      return;
    }
    const ball = this.ballType();
    ball.interactive = true;
    ball.x = gsap.utils.random(10, 540);
    ball.y = 300;//gsap.utils.random(10, 200);
    this.pBallContainer.addChild(ball);
  }

  updateDisplay() {
    const count = this.pBallContainer.children.length;
    this.pBallCount.text = `Items: ${count}`;

    gsap.to(this.pBallContainer.children, { stagger: { each: 0.01, repeat: -1 }, ease: 'bounce.out', duration: 2, y: 375 });
  }

  fAction() {
    this.pAnimator.fAction();
  }

  fRunIt(tAnimator?: MovieClipSimpleAnimator) {
    this.pAnimator.fGoto(1, true);
  }

  fGetFormat(tFormat:TFormatType): TextFormat {
    const tTF:TextFormat = new TextFormat();
    tTF.font = "Arial";
    if (tFormat.nUnderline != null) {
      tTF.underline = tFormat.nUnderline
    }
    
    if (tFormat.nFontSize != null) {
      tTF.size = typeof tFormat.nFontSize === 'number' ? (tFormat.nFontSize - (tFormat.nPosition != null && tFormat.nPosition > 0 ? 4 : 0)) : tFormat.nFontSize;
    } else {
      tTF.size = 12
    }
    
    switch (tFormat.nAlignment) {
      case TextFormatAlign.RIGHT: 
        tTF.align = TextFormatAlign.RIGHT;
        break;
      case TextFormatAlign.CENTER: 
        tTF.align = TextFormatAlign.CENTER;
        break;
      default: 
        tTF.align = TextFormatAlign.LEFT;
    }
    if (tFormat.nColour == null) {
      tTF.color = 0;
   // } else if (typeof tFormat.nColour === 'string') {
      //tTF.color = Managers.pUI.fGetColour(tFormat.nColour);
    } else {
      tTF.color = tFormat.nColour;
    }
    
    return tTF;
  }
  
  private fSetFormat(tField:TextField, tFormat:TFormatType) {
    const tTF: TextFormat = this.fGetFormat(tFormat);
    tField.setTextFormat(tTF);
  }
  /* private fSetFormat(tField:SFTextField, tFormat:TFormatType):void
		{
			var tTF:TextFormat = this.fGetFormat(tFormat);
			tField.pProps.nAlignment = (tFormat.nAlignment == null ? Static.LEFT : tFormat.nAlignment);
			tField.pProps.nVAlignment = (tFormat.nVAlignment == null ? Static.CENTRE : tFormat.nVAlignment);
			tField.pProps.nCase = (tFormat.nCase == null ? Static.MIXEDCASE : tFormat.nCase);
			
			tField.pField.defaultTextFormat = tTF;
			tField.pField.setTextFormat(tTF);
			tField.pProps.nFieldWidth = tFormat.nFieldWidth;
			tField.pProps.nFieldHeight = tFormat.nFieldHeight;
			tField.pProps.nCrop = (tFormat.nCrop == null ? false : tFormat.nCrop);
			tField.pProps.nWrap = (tFormat.nWrap == null ? false : tFormat.nWrap);
			tField.pProps.nPosition = (tFormat.nPosition == null ? Static.NONE : tFormat.nPosition);
			if (tFormat.nAllOnOneLine)
			{
				tField.pProps.nAllOnOneLine = tFormat.nAllOnOneLine == null ? false : tFormat.nAllOnOneLine;
			}
			
			tField.pProps.nFontStyle = "" + (tFormat.nBold ? "Bold" : "") + (tFormat.nItalic ? "Italic" : "");
			tField.pProps.nAlignToPoint = (tFormat.nAlignToPoint == true ? true : false);
			tField.pProps.nSystem = true;
			
		} */

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
