<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type p5 from 'p5';

	interface Props {
		sketch: (p: p5) => void;
		class?: string;
	}

	let { sketch, class: className = '' }: Props = $props();

	let container: HTMLDivElement;
	let instance: p5 | null = null;

	onMount(async () => {
		const P5 = (await import('p5')).default;
		instance = new P5(sketch, container);
	});

	onDestroy(() => {
		instance?.remove();
	});
</script>

<div bind:this={container} class="p5-wrapper {className}"></div>

<style>
	.p5-wrapper {
		line-height: 0;
	}

	.p5-wrapper :global(canvas) {
		display: block;
		max-width: 100%;
		height: auto !important;
		border-radius: 2px;
	}
</style>
