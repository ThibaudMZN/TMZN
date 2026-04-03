<script lang="ts">
	import { type Component, onMount } from 'svelte';

	type Articles = Record<
		string,
		{
			date: Date;
			component?: Component;
		}
	>;

	const articles: Articles = $state({});
	const loaders = import.meta.glob('../../articles/[0-9]*.svelte', { eager: false });
	onMount(() => {
		Object.entries(loaders).forEach(([path, load]) => {
			const [dateStr, slug] = path.replace('../../articles/', '').replace('.svelte', '').split('_');
			articles[slug] = { date: new Date(dateStr) };
			load().then((mod) => {
				articles[slug].component = (mod as any).default;
			});
		});
	});
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
			{#each Object.entries(articles) as [slug, article], index (slug)}
				{@const Component = article.component}
				<div>
					{#if index > 0}
						<div class="mb-24 h-px w-full bg-border lg:mb-32"></div>
					{/if}
					{#if Component}
						<Component date={article.date} />
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
