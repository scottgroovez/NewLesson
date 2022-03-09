import { BaseText } from "./BaseText";

const defaultStyles = {
  fontSize: '40px',
  width: '100px',
  textAlign: 'center',
}

class TextInput extends BaseText {
  constructor(styles?: Record<string, unknown>) {
    super('input', { ...defaultStyles, ...styles });
  }
}

export { TextInput };