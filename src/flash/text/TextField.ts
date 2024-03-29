import { TextFormat } from "./TextFormat";
import { BaseText } from "./BaseText";

const defaultStyles = {
  border: '1px solid black',
  borderRadius: '10px',
  background: 'rgba(255, 255, 255, 0.6)',
  padding: '10px',
  whiteSpace: 'nowrap',
};

class TextField extends BaseText {

  set bold(_bold:boolean) {
    this.setStyles({
      fontWeight: _bold ? 'bold' : 'normal'
    });
  }

  get bold():boolean {
    return this.style.fontWeight === 'bold';
  }

  public setTextFormat(textFormat: TextFormat) {
    this.setStyles({ ...textFormat });
  }

  public set multiline(_multiline:boolean) {
    this.setStyles({
      whiteSpace: _multiline ? 'normal' : 'nowrap',
      wordWrap: _multiline,
    })
  }

  public get multiline():boolean {
    return this.style.whiteSpace === 'normal';
  }

  public set selectable(_disabled: boolean) {
    //Todo fill
  }

  public get selectable():boolean {
    return true; //Todo fill
  }

  public get textWidth():number {
    return this.width; //Todo perhaps use PIXI.TextMetrics
  }

  public get textHeight():number {
    return this.height;
  }
}

export { TextField };