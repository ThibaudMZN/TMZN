<script lang="ts">
	import Article from '../components/Article.svelte';
	import P5Canvas from '../components/P5Canvas.svelte';
	import type p5 from 'p5';
	import { getParentSize } from '../lib/canvasHelpers';
	import ControlSlider from '../components/controls/ControlSlider.svelte';
	import Button from '../components/ui/Button.svelte';

	interface Props {
		date: Date;
	}

	let { date }: Props = $props();

	let gridSize = $state(10);
	let probability = $state(50);
	let generated: Array<boolean> = [];
	const regenerate = () => {
		generated = new Array<boolean>(gridSize * gridSize)
			.fill(false)
			.map(() => Math.random() > probability / 100);
	};
	$effect(() => {
		regenerate();
	});
	const onreset = () => {
		gridSize = 10;
		probability = 50;
		regenerate();
	};

	const sketch = (p: p5) => {
		let w = 0;
		let h = 0;

		p.setup = () => {
			const size = getParentSize(p);
			w = size.w;
			h = size.h;
			p.createCanvas(w, h);
			p.stroke(114, 154, 127);
			p.strokeWeight(2);
		};

		p.draw = () => {
			p.background(26, 33, 28);

			let xStep = w / gridSize;
			let yStep = h / gridSize;
			let i = 0;
			for (let y = 0; y <= h; y += yStep) {
				for (let x = 0; x <= w; x += xStep) {
					let x1;
					let x2;
					let y1;
					let y2;
					if (generated[i]) {
						x1 = x;
						x2 = x + xStep;
						y1 = y + yStep / 2;
						y2 = y + yStep / 2;
					} else {
						x1 = x + xStep / 2;
						x2 = x + xStep / 2;
						y1 = y;
						y2 = y + yStep;
					}
					p.line(x1, y1, x2, y2);
					i++;
				}
			}
		};

		p.windowResized = () => {
			const { w, h } = getParentSize(p);
			p.resizeCanvas(w, h);
		};
	};
</script>

{#snippet controls()}
	<ControlSlider label="Grid size" min={1} max={50} step={1} bind:value={gridSize} />
	<ControlSlider label="Probability" min={0} max={100} step={1} bind:value={probability} />
{/snippet}

{#snippet sketchContent()}
	<P5Canvas {sketch} class="aspect-4/3 w-full" />
{/snippet}

{#snippet description()}
	<span>
		A shifted version of the classic <a href="https://10print.org/" target="_blank">10 PRINT</a> algorithm,
		trading diagonal lines for vertical and horizontal ones.
	</span>
{/snippet}

<Article title="Shifted 10 Print" {description} {date} {sketchContent} {controls} {onreset} />
