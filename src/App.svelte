<script lang="ts">
	import Footer from './components/layout/Footer.svelte';
	import Header from './components/layout/Header.svelte';
	import Hero from './components/layout/Hero.svelte';
	import Articles from './components/layout/Articles.svelte';
	import About from './components/layout/About.svelte';
</script>

<div class="min-h-screen bg-background">
	<Header />
	<main>
		<Hero />
		<Articles />
		<About />
	</main>
	<Footer />
</div>
