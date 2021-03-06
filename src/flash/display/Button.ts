import { Graphics, Text } from "../";
import { Sprite } from './Sprite';

class Button extends Sprite {
  btnLabel: Text;
  constructor(label: string) {
    super();

    this.interactive = true;
    this.buttonMode = true;

    const btn = new Graphics();
    btn.beginFill(0xCCCCCC);
    btn.drawRect(-50, -25, 100, 50);
    this.addChild(btn);

    this.btnLabel = new Text(label);
    this.btnLabel.anchor.set(0.5);
    this.addChild(this.btnLabel);
    
  }

  public set label(labelText) {
    this.btnLabel.text = labelText;
  }

  public get label() {
    return this.btnLabel.text;
  }
}

export { Button };
