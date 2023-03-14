<script>
	import Card from '$lib/components/Card.svelte';
	import Result from '$lib/components/Result.svelte';
	import Summary from '$lib/components/Summary.svelte';
</script>

<svelte:head>
	<title>Result summary component</title>
</svelte:head>

<div class="prose prose-lg ">
	<Card>
		<Result />
		<Summary />
	</Card>
</div>
