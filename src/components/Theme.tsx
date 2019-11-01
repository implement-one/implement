import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/theme';

interface ThemeProps {
	children: React.ReactElement;
}

export default ({ children }: ThemeProps) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
