<script lang="ts">
	import Logo from '../Logo.svelte';
</script>

<footer class="border-t border-border bg-muted/30">
	<div class="mx-auto max-w-7xl px-6 py-12 lg:px-12">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div>
				<div class="mb-4 flex items-center gap-3">
					<div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
						<Logo />
					</div>
					<span class="font-serif text-lg">tmzn</span>
				</div>
				<p class="text-sm leading-relaxed text-muted-foreground">
					Exploring the intersection of code and visual art through interactive experiments.
				</p>
			</div>

			<div>
				<h4 class="mb-4 text-xs tracking-widest text-muted-foreground uppercase">Navigation</h4>
				<nav class="flex flex-col gap-2">
					<a href="#experiments" class="text-sm transition-colors hover:text-primary">
						Experiments
					</a>
					<a href="#about" class="text-sm transition-colors hover:text-primary"> About </a>
				</nav>
			</div>

			<div>
				<h4 class="mb-4 text-xs tracking-widest text-muted-foreground uppercase">Connect</h4>
				<nav class="flex flex-col gap-2">
					<a
						href="https://github.com/ThibaudMZN"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm transition-colors hover:text-primary"
					>
						GitHub
					</a>
				</nav>
			</div>
		</div>

		<div class="mt-12 border-t border-border/50 pt-8">
			<p class="text-center text-xs text-muted-foreground">
				Made with care and curiosity. All sketches are open source.
			</p>
			<p class="text-center text-xs text-muted-foreground">
				© {new Date().getFullYear()} TMZN.
			</p>
		</div>
	</div>
</footer>
