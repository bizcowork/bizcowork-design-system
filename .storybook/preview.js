/** @format */
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/stories/assets/styles/global-styles';
import theme from '../src/stories/assets/styles/theme.d';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Story />
		</ThemeProvider>
	),
];
