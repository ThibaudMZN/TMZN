<script lang="ts">
	import type { Article } from '../lib/articles';
	import ControlsPanel from './ControlsPanel.svelte';

	interface Props {
		article: Article;
	}

	let { article }: Props = $props();
</script>

<article class="group">
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
		<div class="flex flex-col justify-between lg:col-span-4">
			<div class="space-y-4">
				<time class="font-mono text-xs tracking-widest text-muted-foreground uppercase">
					{article.date.toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</time>
				<h2 class="font-serif text-3xl leading-tight text-balance lg:text-4xl">
					{article.title}
				</h2>
				<p class="leading-relaxed text-pretty text-muted-foreground">
					{article.description}
				</p>
			</div>

			<div class="mt-8 border-t border-border pt-6">
				<h3 class="mb-5 text-xs tracking-widest text-muted-foreground uppercase">Parameters</h3>
				<ControlsPanel controls={article.controls} />
			</div>
		</div>

		<div class="lg:col-span-8">
			<div
				class="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow duration-300 group-hover:shadow-md"
			></div>
		</div>
	</div>
</article>
