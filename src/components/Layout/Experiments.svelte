<script lang="ts">
	import type { Articles } from '../../lib/articles';
	import Article from '../Article.svelte';
	import TestArticle from '../../articles/TestArticle.svelte';

	const articles: Articles = [];
</script>

<section id="experiments" class="py-20 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-12">
		<div class="mb-16 lg:mb-24">
			<p class="mb-4 font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
				Experiments
			</p>
			<h2 class="font-serif text-3xl md:text-4xl">Interactive Sketches</h2>
		</div>

		<div class="space-y-24 lg:space-y-32">
			{#each articles as article, index (article.slug)}
				<div>
					{#if index > 0}
						<div class="mb-24 h-px w-full bg-border lg:mb-32"></div>
					{/if}
					<Article {article} />
				</div>
			{/each}
		</div>
	</div>
</section>
