import { mode, Styles } from '@chakra-ui/theme-tools';

export const styles: Styles = Object.freeze({
	global: props => ({
		'#nprogress .bar': {
			bg: 'palette.primary',
			height: 1,
		},
		'.wp-content': {
			'> h2': {
				fontSize: '3xl',
				fontWeight: 'bold',
				lineHeight: 1,
				my: 8,
				color: mode(
					`${props.colorScheme ?? 'gray'}.700`,
					`${props.colorScheme ?? 'gray'}.300`
				)(props),
			},
			'> h3': {
				fontSize: '2xl',
				fontWeight: 'bold',
				lineHeight: 1,
				my: 6,
				color: mode(
					`${props.colorScheme ?? 'gray'}.700`,
					`${props.colorScheme ?? 'gray'}.300`
				)(props),
			},
			'> h4': {
				fontSize: 'xl',
				fontWeight: 'bold',
				lineHeight: 1,
				my: 4,
				color: mode(
					`${props.colorScheme ?? 'gray'}.700`,
					`${props.colorScheme ?? 'gray'}.300`
				)(props),
			},
			'> p': {
				mb: 4,
				color: mode(
					`${props.colorScheme ?? 'gray'}.900`,
					`${props.colorScheme ?? 'gray'}.100`
				)(props),
			},
			'> ul, > p ul, ol': {
				ml: 4,
				mb: 8,
				fontSize: 'normal',
				color: mode(
					`${props.colorScheme ?? 'gray'}.900`,
					`${props.colorScheme ?? 'gray'}.100`
				)(props),
			},
			li: {
				mb: 2,
				mt: 2,
			},
			'> a, > p a': {
				transitionProperty: 'common',
				transitionDuration: 'fast',
				color: mode('palette.primary', 'primary.300')(props),
				_hover: {
					textDecoration: 'underline',
				},
			},
			'> a.wp-button, > p a.wp-button': {
				bg: mode('primary.500', 'primary.900')(props),
				color: mode('white', 'black')(props),
				_hover: {
					textDecoration: 'none',
					bg: mode(`primary.600`, `primary.800`)(props),
				},
				px: 4,
				py: 2,
				lineHeight: 8,
				rounded: 'full',
			},
			'> figure > table': {
				borderCollapse: 'collapse',
				width: '100%',
				overflowX: 'auto',
				margin: '0 auto 1rem',
				WebkitOverflowScrolling: 'touch',
				'@media(max-width:767px)': {
					display: 'block',
				},
			},
			'> figure > table td': {
				padding: '.75rem',
				borderTop: '1px solid #dee2e6',
			},
			'> figure > table th': {
				textAlign: 'left',
				padding: '.75rem',
				borderTop: '1px solid #dee2e6',
			},
			'> figure > table tbody': {
				backgroundColor: 'rgba(0,0,0,.01)',
			},
			'> figure > table tr:nth-of-type(odd)': {
				backgroundColor: 'rgba(0,0,0,.01)',
			},
			'> figure > table a': {
				color: '#4065ff',
			},
		},
	}),
});
