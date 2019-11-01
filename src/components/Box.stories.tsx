import React from 'react';
import Box from './Box';

export default { title: 'Box' };

export const withPadding = () => (
	<>
		<Box padding={[1, 4]} border="1px #ccc solid">
			This box has 32px padding at the highest breakpoint and 4px at the lowest
			breakpoint.
		</Box>
	</>
);
