<script lang="ts">
	import Footer from './components/Layout/Footer.svelte';
	import Header from './components/Layout/Header.svelte';
	import Hero from './components/Layout/Hero.svelte';
	import Articles from './components/Layout/Articles.svelte';
	import About from './components/Layout/About.svelte';
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
