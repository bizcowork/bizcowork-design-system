export interface ButtonSize {
  height: string;
  font: string;
  padding: string;
  boxShadow: string;
}

export interface ButtonStateColor {
  enabled: string;
  disabled: string;
  hover: string;
  active: string;
  lightFontColor: 'primary' | 'secondary' | 'mono';
  darkFontColor: string;
}

export interface BorderStyle {
  borderNormal: string;
  borderClick: string;
  borderStyle: string;
  borderColor: string;
  border: string;
  borderActive: string;
}

export interface ButtonFigure {
  colors: ButtonStateColor;
  border: BorderStyle;
  disabled: boolean;
  type: 'default' | 'outline' | 'inverted' | 'block';
}
