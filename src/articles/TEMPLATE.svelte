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

	const onreset = () => {};

	const sketch = (p: p5) => {
		p.setup = () => {};

		p.draw = () => {};

		p.windowResized = () => {
			const { w, h } = getParentSize(p);
			p.resizeCanvas(w, h);
		};
	};
</script>

{#snippet controls()}{/snippet}

{#snippet sketchContent()}
	<P5Canvas {sketch} class="aspect-4/3 w-full" />
{/snippet}

{#snippet description()}
	<span> New experiment </span>
{/snippet}

<Article title="New title" {description} {date} {sketchContent} {controls} {onreset} />
