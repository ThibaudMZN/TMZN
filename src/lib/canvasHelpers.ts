import type p5 from 'p5';

export const getParentSize = (p: p5) => {
	const parent = (p as unknown as { canvas?: HTMLCanvasElement }).canvas?.parentElement;
	if (parent) {
		return { w: parent.clientWidth, h: parent.clientHeight };
	}
	return { w: 600, h: 400 };
};
