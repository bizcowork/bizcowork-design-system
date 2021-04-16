/** @format */

// /** @format */

import 'styled-component';

declare module 'styled-components' {
	export interface DefaultTheme {
		borderRadius;
		fontSize;
		colors;
		border;
		opacity;
		// shadow;
	}
}

interface borderRadius {
	radiusNone: string;
	radius03: string;
	radius05: string;
	radius10: string;
	radius15: string;
	radius20: string;
	radius25: string;
	radiusHalf: string;
}

interface fontSize {
	textSmall: string;
	textBase: string;
	textLarge: string;
	titleSmall: string;
	titleBase: string;
	titleLarge: string;
	h1: string;
	h2: string;
	h3: string;
	h4: string;
	h5: string;
	h6: string;
}

interface colors {
	primary: {
		normal: string;
		hover: string;
		active: string;
	};
}

interface opacity {
	none: number;
	opacity10: number;
	opacity30: number;
	opacity50: number;
	opacity70: number;
	opacity90: number;
	opacityNone: number;
}

interface shadow {
	impleShadow: string;
	smallShadow: string;
	regularShadow: string;
	largeShadow: string;
	xLargeShadow: string;
}

interface border {
	simple: string;
	normal: string;
	thick: string;
	bold: string;
	black: string;
}
