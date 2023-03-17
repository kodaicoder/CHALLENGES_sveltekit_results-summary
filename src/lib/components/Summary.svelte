<script>
	import Button from '$lib/components/Button.svelte';
	import List from '$lib/components/List.svelte';
	import reactionIcon from '$lib/images/icon-reaction.svg';
	import memoryIcon from '$lib/images/icon-memory.svg';
	import verbalIcon from '$lib/images/icon-verbal.svg';
	import visualIcon from '$lib/images/icon-visual.svg';

	const data = [
		{
			iconSrc: reactionIcon,
			text: 'reaction',
			score: 80,
			color: 'lightred'
		},
		{
			iconSrc: memoryIcon,
			text: 'memory',
			score: 92,
			color: 'orangeyyellow'
		},
		{
			iconSrc: verbalIcon,
			text: 'verbal',
			score: 61,
			color: 'greenteal'
		},
		{
			iconSrc: visualIcon,
			text: 'visual',
			score: 72,
			color: 'cobaltblue'
		}
	];
</script>

<div class="grid items-start gap-8 p-10">
	<h1 class=" text-2xl font-extrabold leading-none text-black">Summary</h1>
	<ul class="grid gap-4">
		{#each data as item}
			<List {...item} />
		{/each}
	</ul>

	<Button text="Continue" />
</div>
