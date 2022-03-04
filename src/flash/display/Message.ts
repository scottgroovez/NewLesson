import { DOMElement } from "..";

const defaultStyles = {
  border: '1px solid black',
  borderRadius: '10px',
  background: 'rgba(255, 255, 255, 0.6)',
  padding: '10px',
};

class Message extends DOMElement {
  constructor(styles?: Record<string, unknown>) {
    super('p', { ...defaultStyles, ...styles });
  }

  set text(value: string) {
    this.domElement.innerHTML = value;
  }

  get text(): string {
    return this.domElement.innerHTML;
  }
}

export { Message };