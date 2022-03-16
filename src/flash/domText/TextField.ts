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
  constructor(styles?: Record<string, unknown>) {
    super('p', { ...defaultStyles, ...styles });
  }

  set text(value: string) {
    this.domElement.innerHTML = value;
  }

  get text(): string {
    return this.domElement.innerHTML;
  }

  set bold(_bold:boolean) {
    this.setStyles({
      fontWeight: _bold ? 'bold' : 'normal'
    });
  }

  get bold():boolean {
    return this.domElementStyles.fontWeight === 'bold';
  }

  public setTextFormat(textFormat: TextFormat) {
    this.setStyles({
      textDecoration: textFormat.underline ? 'underline' : null,
      fontSize: textFormat.size,
      color: textFormat.color,
    });
  }

  public set multiline(_multiline:boolean) {
    this.setStyles({
      whiteSpace: _multiline ? 'normal' : 'nowrap'
    })
  }

  public get multiline():boolean {
    return this.domElementStyles.whiteSpace === 'normal';
  }

  public set selectable(_disabled: boolean) {
    this.domElement.setAttribute('disabled', String(_disabled));
  }

  public get selectable():boolean {
    return this.domElement.getAttribute('disabled') === 'true';
  }
}

export { TextField };