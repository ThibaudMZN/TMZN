<script lang="ts">
	import Article from '../components/Article.svelte';
	import P5Canvas from '../components/P5Canvas.svelte';
	import type p5 from 'p5';
	import { getParentSize } from '../lib/canvasHelpers';

	interface Props {
		date: Date;
	}

	let { date }: Props = $props();

	const sketch = (p: p5) => {
		let w = 0;
		let h = 0;
		let font: p5.Font;

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
			p.background(26, 33, 28);
			const sampleFactor = Math.max(p.map(p.mouseX, 0, w, 0.01, 0.15), 0.01);
			const letters = font.textToContours('aesthetics', w / 2, h / 2, {
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

<!--{#snippet controls()}-->
<!--	<p>Some controls</p>-->
<!--{/snippet}-->

{#snippet sketchContent()}
	<P5Canvas {sketch} class="aspect-4/3 w-full" />
{/snippet}

{#snippet description()}
	<span>
		This experiment lets you intentionally degrade a font's vector precision to create rough,
		“brutalist” letterforms.
	</span>
	<br />
	<span> Move your mouth over the canvas to see it in action. </span>
{/snippet}

<Article title="Font decimator" {description} {date} {sketchContent} />
