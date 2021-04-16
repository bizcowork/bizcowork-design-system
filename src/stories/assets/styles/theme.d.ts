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

const colors = {};

const theme: DefaultTheme = {
	borderRadius,

	fontSize,
	colors: {
		primary: {
			normal: '#F4762A',
			hover: '#E9610C',
			active: '#C2510A',
		},
	},
};

export default theme;
