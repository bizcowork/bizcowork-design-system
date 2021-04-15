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
	borderRadiusNone: calcRem(0),
	borderRadiusFive: calcRem(10),
	borderRadiusTen: calcRem(15),
	borderRadiusFifteen: calcRem(20),
	borderRadiusTwenty: calcRem(25),
};

const colors = {};

const theme: DefaultTheme = {
	borderRadius: calcRem(15),

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
