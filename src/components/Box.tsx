import styled from 'styled-components';
import {
	color,
	padding,
	width,
	ColorProps,
	PaddingProps,
	WidthProps,
	border,
	BorderProps,
} from 'styled-system';

type BoxProps = ColorProps & PaddingProps & WidthProps & BorderProps;

export default styled.div<BoxProps>`
  ${color}
  ${padding}
  ${width}
  ${border}
`;
