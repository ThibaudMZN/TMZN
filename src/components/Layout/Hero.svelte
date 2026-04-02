<script lang="ts">
	import { ArrowDown } from '@lucide/svelte';
</script>

<section class="relative flex min-h-[90vh] items-center pt-16">
	<div
		class="blur-1xl pointer-events-none absolute top-1/4 right-0 h-96 w-96 rounded-full bg-primary/5"
	></div>
	<div class="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
		<div class="max-w-3xl">
			<p class="mb-6 font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
				Creative Code Journal
			</p>
			<h1 class="mb-8 font-serif text-5xl leading-[1.1] text-balance md:text-6xl lg:text-7xl">
				Where algorithms meet
				<span class="text-primary italic">aesthetics</span>
			</h1>
			<p class="max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
				A collection of interactive visual experiments exploring generative art, computational
				design, and the beauty of mathematical patterns. Each sketch is crafted with code and
				curiosity.
			</p>
		</div>
	</div>
	<!--	<div-->
	<!--		class="absolute bottom-12 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2 text-muted-foreground"-->
	<!--	>-->
	<!--		<span class="text-xs tracking-widest uppercase">Scroll</span>-->
	<!--		<ArrowDown class="h-4 w-4" />-->
	<!--	</div>-->
</section>
