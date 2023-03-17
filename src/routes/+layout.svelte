<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<div class="md:min-h-screen md:grid md:place-content-center">
	<main>
		<slot />
	</main>
	<footer class="m-12 md:m-0">
		<Footer />
	</footer>
</div>
