/** @format */

// /** @format */

import 'styled-component';

// interface IPalette {
// 	main: string;
// 	contrastText: string;
// }

declare module 'styled-components' {
	export interface DefaultTheme {
		borderRadius: string;
		fontSize: {
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
		};
		colors: {
			primary: {
				normal: string;
				hover: string;
				active: string;
			};
		};
	}
}
