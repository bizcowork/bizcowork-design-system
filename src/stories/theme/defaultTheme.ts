/** @format */

import 'styled-component';

declare module 'styled-components' {
	export interface DefaultTheme {
		borderRadius: string;

		colors: {
			primary: string;
			secondary: string;
		};
	}
}
