import { MovieClip } from '../flash';
import type { FrameLabel } from '../flash/types'
import { WzUnitTestSample } from './WzUnitTestSample';


class MovieClipSimpleAnimator {
  _pClip!: MovieClip;
  _pLooping: boolean = false;
  pPlaying: boolean = false;
  pNextFrame: number = 0;
  pStartFrame: number = 0;
  pNextFrameTime: number = 0;
  pFrameLength: number = 0;
  pCallback: ((instance: MovieClipSimpleAnimator) => void) | null = null;
  pCallbackFrame: FrameLabel | null = null; // string should be FrameLabel.label
  pEndFrame: FrameLabel | null = null; //Check
  pNumLoops: number = 0;
  pTotalFrames: number = 0;

  constructor(
    tClip: MovieClip,
    tFrameRate: number = 12,
    tLooping: boolean = false
  ) {
    this.pClip = tClip;
    this.pFrameRate = tFrameRate;
    this._pLooping = tLooping;

    tClip.stop();

    if (tClip.currentLabel && tClip.currentLabel.indexOf('play') >= 0) {
      this.pPlaying = true;
      if (tClip.currentLabel.indexOf('loop') >= 0) {
        this._pLooping = true;
        this.pNumLoops = -1;
      }
    }
    this.pStartFrame = 0;
    this.pTotalFrames = tClip.totalFrames - 1;
  }

  getTimer(): number {
    return performance.now();
  }

  fGetLabeledFrame(tName: string): number {
    for (let i: number = 0; i < this.pClip.labels.length; i++) {
      const tLabel = this.pClip.labels[i];
      if (tLabel.label == tName) {
        return tLabel.position;
      }
    }
    return -1;
  }

  public fAction(): void {
    if (this.pPlaying) {
      const tTime: number = this.getTimer();
      while (this.pPlaying && tTime > this.pNextFrameTime) {
        this.fNextFrame();
      }
    }
  }

  public fSetCallback(
    tCallback: MovieClipSimpleAnimator['pCallback'],
    tFrame: MovieClipSimpleAnimator['pCallbackFrame'] = null
  ): void {
    this.pCallback = tCallback;
    this.pCallbackFrame = tFrame; // if null, it runs the callback on the final frame or end frame if specified
  }

  fNextFrame(): void {
    this.pNextFrameTime += this.pFrameLength;
    if (this.pClip.currentFrame + 1 > this.pTotalFrames) {
      this.pNextFrame = this.pStartFrame;
    }

    WzUnitTestSample.fGoToFrame(this.pClip, this.pNextFrame);

    if (this.pCallback !== null) {
      if (
        this.pCallbackFrame !== null &&
        (this.pClip.currentFrame == this.pCallbackFrame ||
          this.pClip.currentLabel == this.pCallbackFrame)
      ) {
        this.pCallback(this);
      }
    }
    this.pNextFrame++;
    if (
      !this._pLooping &&
      this.pClip.currentLabel &&
      this.pClip.currentLabel.indexOf('loop') >= 0
    ) {
      this._pLooping = true;
      this.pStartFrame = this.pClip.currentFrame;
      let tTimes: number = this.pClip.currentLabel.indexOf('x');
      if (tTimes >= 0) {
        this.pNumLoops = Number(this.pClip.currentLabel.charAt(tTimes + 1));
      } else {
        this.pNumLoops = -1;
      }
    } else if (
      this._pLooping &&
      this.pClip.currentLabel &&
      this.pClip.currentLabel.indexOf('loop_end') >= 0
    ) {
      if (this.pNumLoops > 0) {
        this.pNumLoops--;
      }
      this.pNextFrame = this.pStartFrame;
      if (this.pNumLoops == 0) {
        this.pPlaying = false;
        if (this.pCallback != null) {
          this.pCallback(this);
        }
      }
    }
    if (
      (this.pEndFrame !== null &&
        (this.pClip.currentFrame == this.pEndFrame ||
          this.pClip.currentLabel == this.pEndFrame)) ||
      this.pClip.currentFrame == this.pTotalFrames
    ) {
      if (!this._pLooping) {
        this.pPlaying = false;
        if (this.pCallback != null && !this.pCallbackFrame) {
          // no callback frame was specified but we're at the end of the animation
          this.pCallback(this);
        }
      }
      this.pNextFrame = this.pStartFrame;
    }
  }

  public fJumpToEnd(): void {
    if (!this._pLooping) {
      // jump to end doesn't make much sense in a looping animation
      for (let i: number = this.pNextFrame; i <= this.pTotalFrames; i++) {
        WzUnitTestSample.fGoToFrame(this.pClip, i);
        if (
          (this._pLooping &&
            this.pClip.currentLabel &&
            this.pClip.currentLabel.indexOf('loop_end') >= 0) ||
          (this.pEndFrame !== null &&
            (this.pClip.currentFrame === this.pEndFrame ||
              this.pClip.currentLabel === this.pEndFrame)) ||
          this.pClip.currentFrame === this.pTotalFrames
        ) {
          break;
        }
      }
    }
  }

  public fPlay(): void {
    this.pPlaying = true;
    this.pNextFrameTime = this.getTimer() + this.pFrameLength;
  }

  public fStop(): void {
    this.pPlaying = false;
  }

  public fGoto(
    tFrame: MovieClipSimpleAnimator['pStartFrame'],
    tAndPlay: boolean = false,
    tEndFrame: MovieClipSimpleAnimator['pEndFrame'] = null
  ): void {
    WzUnitTestSample.fGoToFrame(this.pClip, tFrame);
    this.pStartFrame = this.pClip.currentFrame;
    this.pNextFrame = this.pStartFrame + 1;
    this.pEndFrame = tEndFrame; // if not specified, plays to the end of the animation
    if (tAndPlay) {
      this.fPlay();
      this._pLooping = false;
    } else {
      this.pPlaying = false;
    }
  }

  public set pFrameRate(tRate: number) {
    this.pFrameLength = Math.round(1000 / tRate);
  }

  public get pLooping(): boolean {
    return this._pLooping;
  }

  public set pLooping(value: boolean) {
    this._pLooping = value;
  }

  public get pClip(): MovieClip {
    return this._pClip;
  }

  public set pClip(tClip: MovieClip) {
    this._pClip = tClip;
  }
}

export { MovieClipSimpleAnimator };
