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
  activeBorderColor: string;
}

export interface BorderStyle {
  borderThickness: string;
  borderColor: string;
  borderActive: string;
}

export interface ButtonFigure {
  colors: ButtonStateColor;
  border: BorderStyle;
  disabled: boolean;
  type: 'default' | 'outline' | 'inverted' | 'block' | 'hidden';
}
