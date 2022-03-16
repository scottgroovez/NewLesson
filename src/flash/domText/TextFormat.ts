import { TextStyle } from "@pixi/text";

class TextFormat extends TextStyle {
  _underline: boolean = false;

  set font (_fontFamily: TextStyle['fontFamily']) {
    this.fontFamily = _fontFamily;
  }

  get font (): TextStyle['fontFamily'] {
    return this.fontFamily;
  }

  set underline (_underline: TextFormat['_underline']) {
    this._underline = _underline;
  }

  get underline (): TextFormat['_underline'] {
    return this._underline;
  }

  set size (_size: TextStyle['fontSize']) {
    this.fontSize = _size;
  }

  get size (): TextStyle['fontSize'] {
    return this.fontSize;
  }

  set color (_color: TextStyle['fill']) {
    this.fill = _color;
  }

  get color (): TextStyle['fill'] {
    return this.fill;
  }
}

export { TextFormat };