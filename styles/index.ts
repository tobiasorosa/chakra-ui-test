import { extendTheme } from '@chakra-ui/react';
import { ChakraTheme } from '@chakra-ui/theme';

import { config } from './config';
import { styles } from './styles';
import { colors } from './colors';
import { fonts } from './fonts';

export const extensions: Partial<ChakraTheme> = Object.freeze({
	config,
	styles,
	colors,
	fonts,
});

export const theme = extendTheme(extensions);
