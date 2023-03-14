<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<div class="relative grid justify-center md:place-content-center min-h-screen">
	<main>
		<slot />
	</main>
	<footer class="m-12">
		<Footer />
	</footer>
</div>
