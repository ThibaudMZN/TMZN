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

	// const articles: Articles = [
	// {
	// 	slug: 'test_article',
	// 	title: 'First test article',
	// 	date: new Date(2026, 3, 2),
	// 	description: 'My first attempt at writing an article',
	// 	component: TestArticle,
	// 	controls: [
	// 		{ type: 'slider', label: 'Test slider', key: 'testValue', min: 0, max: 100, step: 1 }
	// 	],
	// 	sketch: (p: p5) => {
	// 		let freqX = $state(3);
	// 		let freqY = $state(2);
	// 		let phase = $state(Math.PI / 4);
	// 		let trail = $state(800);
	// 		let t = 0;
	// 		const W = 540,
	// 			H = 380;
	//
	// 		p.setup = () => {
	// 			p.createCanvas(W, H);
	// 			p.colorMode(p.HSB, 360, 100, 100, 100);
	// 		};
	//
	// 		p.draw = () => {
	// 			p.background(20, 8, 11, 18);
	//
	// 			const cx = W / 2,
	// 				cy = H / 2;
	// 			const r = Math.min(W, H) * 0.42;
	//
	// 			p.noFill();
	// 			p.strokeWeight(1.5);
	//
	// 			for (let i = 0; i < trail; i++) {
	// 				const tt = t - i * 0.004;
	// 				const x = cx + r * Math.sin(freqX * tt + phase);
	// 				const y = cy + r * Math.sin(freqY * tt);
	// 				const hue = (tt * 40 + 180) % 360;
	// 				const alpha = p.map(i, 0, trail, 90, 0);
	// 				p.stroke(hue, 70, 95, alpha);
	// 				p.point(x, y);
	// 			}
	//
	// 			// Leading dot
	// 			const lx = cx + r * Math.sin(freqX * t + phase);
	// 			const ly = cy + r * Math.sin(freqY * t);
	// 			p.noStroke();
	// 			p.fill(45, 90, 100, 95);
	// 			p.circle(lx, ly, 6);
	//
	// 			t += 0.016;
	// 		};
	// 	}
	// }
	// ];
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
