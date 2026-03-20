<script lang="ts">
	import { Code2, Menu, X } from '@lucide/svelte';
	import { fly, fade, slide } from 'svelte/transition';

	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);

	const navItems = [
		{ label: 'Accueil', id: 'hero' },
		{ label: 'À Propos', id: 'about' },
		{ label: 'Services', id: 'services' },
		{ label: 'Projets', id: 'projects' },
		{ label: 'Contact', id: 'contact' }
	];

	const handleScroll = () => {
		isScrolled = window.scrollY > 20;
	};
</script>

<svelte:window onscroll={handleScroll} />
<header
	in:fly={{ y: -100, duration: 500 }}
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {isScrolled
		? 'border-b border-emerald-500/20 bg-black/40 backdrop-blur-lg'
		: 'bg-transparent'}"
>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between sm:h-20">
			<!-- Logo -->
			<a
				href="#hero"
				class="group flex items-center gap-2 transition-transform duration-150 hover:scale-105 active:scale-95"
			>
				<div class="relative">
					<Code2 class="h-8 w-8 text-emerald-400 transition-transform group-hover:rotate-12" />
					<div
						class="absolute inset-0 bg-emerald-400 opacity-30 blur-xl transition-opacity group-hover:opacity-50"
					></div>
				</div>
				<span
					class="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-2xl font-bold text-transparent"
				>
					TMZN
				</span>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden items-center gap-8 md:flex">
				{#each navItems as item (item.id)}
					<a
						href="#{item.id}"
						class="group relative text-gray-300 transition-colors hover:text-emerald-400"
					>
						{item.label}
						<span
							class="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all group-hover:w-full"
						></span>
					</a>
				{/each}
			</nav>

			<button
				onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
				class="text-gray-300 transition-colors hover:text-emerald-400 md:hidden"
				aria-label="Toggle menu"
			>
				{#if isMobileMenuOpen}
					<X class="h-6 w-6" />
				{:else}
					<Menu class="h-6 w-6" />
				{/if}
			</button>
		</div>
	</div>

	{#if isMobileMenuOpen}
		<div
			transition:slide={{ duration: 300 }}
			class="border-b border-emerald-500/20 bg-black/95 backdrop-blur-lg md:hidden"
		>
			<nav class="container mx-auto flex flex-col gap-4 px-4 py-4">
				{#each navItems as item (item.id)}
					<a
						href="#{item.id}"
						class="py-2 text-left text-gray-300 transition-colors hover:text-emerald-400"
						onclick={() => (isMobileMenuOpen = false)}
					>
						{item.label}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>
