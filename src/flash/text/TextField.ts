import { DOMElement } from "../display/DOMElement";
import { TextFormat } from "./TextFormat";

const defaultStyles = {
  border: '1px solid black',
  borderRadius: '10px',
  background: 'rgba(255, 255, 255, 0.6)',
  padding: '10px',
};

class TextField extends DOMElement {
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
    console.log(textFormat.color)
    this.setStyles({
      textDecoration: textFormat.underline ? 'underline' : null,
      fontSize: textFormat.size,
      color: textFormat.color,
    });
  }
}

export { TextField };