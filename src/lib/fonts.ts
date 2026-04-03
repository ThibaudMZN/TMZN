export const googleFonts: Record<string, { label: string; url: string }> = {
	courierprime: {
		label: 'Courier Prime',
		url: 'CourierPrime-Regular'
	},
	roboto: {
		label: 'Roboto',
		url: 'Roboto%5Bwdth%2Cwght%5D'
	},
	poppins: {
		label: 'Poppins',
		url: 'Poppins-Regular'
	}
} as const;

export type GoogleFont = keyof typeof googleFonts;

export const googleFontURL = (font: GoogleFont) =>
	`https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/${font}/${googleFonts[font].url}.ttf`;
