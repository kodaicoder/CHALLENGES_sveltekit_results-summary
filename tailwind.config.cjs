const defaultTheme = require('tailwindcss/defaultTheme');
/**@type{import('tailwindcss').Config}*/
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				//! Primary
				lightred: 'hsl(0,100%,67%)',
				orangeyyellow: 'hsl(39,100%,56%)',
				greenteal: 'hsl(166,100%,37%)',
				cobaltblue: 'hsl(234,85%,45%)',
				//! Gradients
				lightslateblue: 'hsl(252,100%,67%)',
				lightroyalblue: 'hsl(241,81%,54%)',
				violetblue: 'hsla(256,72%,46%,1)',
				persianblue: 'hsla(241,72%,46%,0)',
				//! Neutral
				paleblue: 'hsl(221,100%,96%)',
				lightlavender: 'hsl(241,100%,89%)',
				darkgrayblue: 'hsl(224,30%,27%)'
			},
			fontFamily: {
				hankenGrotesk: ['"HankenGrotesk"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	// require('@tailwindcss/typography')
	plugins: []
};
