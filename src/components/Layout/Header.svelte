<script lang="ts">
	import { Github, Code2 } from '@lucide/svelte';
	import Logo from '../Logo.svelte';
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md"
>
	<div class="mx-auto max-w-7xl px-6 lg:px-12">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="group flex items-center gap-3">
				<div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
					<Logo />
				</div>
				<span class="font-serif text-lg tracking-tight">tmzn</span>
			</a>

			<nav class="hidden items-center gap-8 md:flex">
				<a
					href="#experiments"
					class="text-sm text-muted-foreground transition-colors hover:text-foreground"
				>
					Experiments
				</a>
				<a
					href="#about"
					class="text-sm text-muted-foreground transition-colors hover:text-foreground"
				>
					About
				</a>
			</nav>

			<div class="flex items-center gap-4">
				<a
					href="https://github.com/ThibaudMZN"
					target="_blank"
					rel="noopener noreferrer"
					class="text-muted-foreground transition-colors hover:text-foreground"
					aria-label="GitHub"
				>
					<Github class="h-5 w-5" />
				</a>
			</div>
		</div>
	</div>
</header>
