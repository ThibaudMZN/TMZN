<script lang="ts">
	import Article from '../components/Article.svelte';
	import P5Canvas from '../components/P5Canvas.svelte';
	import type p5 from 'p5';
	import { getParentSize } from '../lib/canvasHelpers';
	import ControlSlider from '../components/controls/ControlSlider.svelte';
	import ControlTextInput from '../components/controls/ControlTextInput.svelte';
	import ControlCheckbox from '../components/controls/ControlCheckbox.svelte';

	interface Props {
		date: Date;
	}

	let { date }: Props = $props();

	let text = $state('aesthetics');
	let sampleFactor = $state(0.1);
	let displayTrails = $state(false);

	const onreset = () => {
		text = 'aesthetics';
		sampleFactor = 0.1;
		displayTrails = false;
	};
	const sketch = (p: p5) => {
		let w = 0;
		let h = 0;
		let font: p5.Font;
		const textMargin = 32;

		const url =
			'https://cdn.jsdelivr.net/gh/google/fonts@main/ofl/courierprime/CourierPrime-Regular.ttf';

		p.setup = async () => {
			const size = getParentSize(p);
			w = size.w;
			h = size.h;
			p.createCanvas(w, h);
			font = await p.loadFont(url);
			p.textFont(font);
			p.textAlign(p.CENTER, p.CENTER);
			p.textSize(128);
			p.stroke(114, 154, 127);
			p.noFill();
		};

		p.draw = () => {
			if (!displayTrails) {
				p.background(26, 33, 28);
				p.stroke(114, 154, 127);
			} else {
				p.stroke(114, 154, 127, 10);
			}

			if (p.textWidth(text) + 2 * textMargin != Math.floor(w)) {
				const availableWidth = w - 2 * textMargin;
				p.textSize(1);
				const widthAtSizeOne = p.textWidth(text);
				const targetSize = availableWidth / widthAtSizeOne;
				p.textSize(targetSize);
			}

			const letters = font.textToContours(text, w / 2, h / 2, {
				sampleFactor
			});
			for (const letter of letters) {
				p.beginShape();
				for (const point of letter) {
					p.vertex(point.x, point.y);
				}
				p.endShape();
			}
		};

		p.windowResized = () => {
			const { w, h } = getParentSize(p);
			p.resizeCanvas(w, h);
		};
	};
</script>

{#snippet controls()}
	<ControlTextInput label="Text content" bind:value={text} />
	<ControlSlider
		min={0.01}
		max={0.1}
		step={0.001}
		label="Vector precision"
		bind:value={sampleFactor}
	/>
	<ControlCheckbox label="View trails" bind:checked={displayTrails} />
{/snippet}

{#snippet sketchContent()}
	<P5Canvas {sketch} class="aspect-4/3 w-full" />
{/snippet}

{#snippet description()}
	<span>
		This experiment lets you intentionally degrade a font's vector precision to create rough,
		“brutalist” letterforms.
	</span>
{/snippet}

<Article title="Font decimator" {description} {date} {sketchContent} {controls} {onreset} />
