<script lang="ts">
	import Footer from './components/Layout/Footer.svelte';
	import Header from './components/Layout/Header.svelte';
	import Hero from './components/Layout/Hero.svelte';
	import Experiments from './components/Layout/Experiments.svelte';
	import About from './components/Layout/About.svelte';
</script>

<div class="min-h-screen bg-background">
	<Header />
	<main>
		<Hero />
		<Experiments />
		<About />
	</main>
	<Footer />
</div>
