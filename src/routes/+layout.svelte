<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<div class="relative grid justify-center md:place-content-center min-h-screen">
	<slot />
	<div class="m-12">
		<Footer />
	</div>
</div>
