import { Text } from "../";
import { TextFieldAutoSize } from "./TextFieldAutoSize";

class BaseText extends Text {

  constructor(text: string = '') {
    super(text);
  }

  public set autoSize(_autoSize: TextFieldAutoSize) {
    this.setStyles({
      textAlign: _autoSize
    })
  }


  public get autoSize():TextFieldAutoSize {
    return true; //Todo fill
  }

  public setStyles(styles: Record<string, unknown>) {
    this.style = { ...styles }; //Todo fix
  }

}

export { BaseText }
