<script lang="ts">
	import type { Snippet } from 'svelte';
	import ControlsPanel from './ControlsPanel.svelte';

	interface Props {
		date: Date;
		title: string;
		description: Snippet;
		controls?: Snippet;
		onreset?: () => void;
		sketchContent: Snippet;
	}

	let { date, title, description, sketchContent, controls, onreset }: Props = $props();
</script>

<article class="group">
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
		<div class="flex flex-col justify-between lg:col-span-4">
			<div class="space-y-4">
				<time class="font-mono text-xs tracking-widest text-muted-foreground uppercase">
					{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
				</time>
				<h2 class="font-serif text-3xl leading-tight text-balance lg:text-4xl">
					{title}
				</h2>
				<p class="leading-relaxed text-pretty text-muted-foreground">
					{@render description()}
				</p>
			</div>

			{#if controls}
				<div class="mt-8 border-t border-border pt-6">
					<h3 class="mb-5 text-xs tracking-widest text-muted-foreground uppercase">Parameters</h3>
					<ControlsPanel {onreset}>
						{#snippet controls()}
							{@render controls()}
						{/snippet}
					</ControlsPanel>
				</div>
			{/if}
		</div>

		<div class="lg:col-span-8">
			<div
				class="flex justify-center overflow-hidden rounded-xl border border-border bg-border shadow-sm transition-shadow duration-300 group-hover:shadow-md"
			>
				{@render sketchContent()}
			</div>
		</div>
	</div>
</article>
