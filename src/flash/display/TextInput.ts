import { DOMElement } from "..";

const defaultStyles = {
  fontSize: '40px',
  width: '100px',
  textAlign: 'center',
}

class TextInput extends DOMElement {
  constructor(styles?: Record<string, unknown>) {
    super('input', { ...defaultStyles, ...styles });
  }
}

export { TextInput };