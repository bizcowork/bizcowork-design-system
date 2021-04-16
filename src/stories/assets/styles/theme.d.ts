/** @format */
import { DefaultTheme } from 'styled-components';

const calcRem = (size: number) => `${size / 16}rem`;

const fontSize = {
	textSmall: calcRem(14),
	textBase: calcRem(16),
	textLarge: calcRem(18),
	h1: calcRem(52),
	h2: calcRem(46),
	h3: calcRem(40),
	h4: calcRem(36),
	h5: calcRem(30),
	h6: calcRem(24),
};

const fontWeight = {
	thin: 100,
	light: 300,
	regular: 400,
	medium: 500,
	bold: 700,
	black: 900,
};

const compSize = {
	avatarSmall: calcRem(36),
	avatarBase: calcRem(44),
	avatarLarge: calcRem(52),
};

const borderRadius = {
	radiusNone: calcRem(0),
	radius03: calcRem(3),
	radius05: calcRem(5),
	radius10: calcRem(10),
	radius15: calcRem(15),
	radius20: calcRem(20),
	radius25: calcRem(25),
	radiusHalf: '50%',
};

const opacity = {
	none: 0,
	opacity10: 0.1,
	opacity30: 0.3,
	opacity50: 0.5,
	opacity70: 0.7,
	opacity90: 0.9,
	max: 1,
};

const border = {
	simple: '0.5px solid #D3D3D3',
	normal: '1px solid #D3D3D3',
	thick: '1.5px solid #696969',
	bold: '2px solid #000000',
	black: '3px solid #000000',
};

const theme: DefaultTheme = {
	borderRadius,
	opacity,
	fontSize,
	border,
	colors: {
		primary: {
			normal: '#F4762A',
			hover: '#E9610C',
			active: '#C2510A',
		},
	},
};

export default theme;
