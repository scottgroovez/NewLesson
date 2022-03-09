import { DOMElement } from "../display/DOMElement";
import { TextFieldAutoSize } from "./TextFieldAutoSize";

class BaseText extends DOMElement {

  public set autoSize(_autoSize: TextFieldAutoSize) {
    this.setStyles({
      textAlign: _autoSize
    })
  }

  public get autoSize():TextFieldAutoSize {
    return this.domElementStyles.textAlign;
  }

}

export { BaseText }
