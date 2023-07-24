declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string
			primary_light: string
			secondary: string
			white: string
			black: string
			para_text_color: string
		}
		fonts: {
			family: string
			weight: {
				regular: number
				medium: number
				bold: number
			}
		}
		breakpoints: {
			tablet: string
			mobile: string
		}
	}
}

export const theme = {
	colors: {
		primary: '#0f172a',
		primary_light: '#131c31',
		secondary: '#7eadfc',
		white: '#fff',
		black: '#000',
		para_text_color: '#dcdcdc',
	},
	fonts: {
		family: 'DM Sans',
		weight: {
			regular: 400,
			medium: 500,
			bold: 700,
		},
	},
	breakpoints: {
		tablet: '768px',
		mobile: '400px'
	},
}
