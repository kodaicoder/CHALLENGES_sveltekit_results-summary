<script>
	// @ts-nocheck
	export let iconSrc = '';
	export let text = 'default_text';
	export let score = 0;
	export let maxScore = 100;
	export let color = 'greenteal';
	const colorVariants = {
		lightred: 'text-lightred bg-lightred/10 hover:bg-lightred/30',
		orangeyyellow: 'text-orangeyyellow bg-orangeyyellow/10 hover:bg-orangeyyellow/30',
		greenteal: 'text-greenteal bg-greenteal/10 hover:bg-greenteal/30',
		cobaltblue: 'text-cobaltblue bg-cobaltblue/10 hover:bg-cobaltblue/30'
	};
</script>

<li
	class="w-full flex justify-between align-middle rounded-xl p-4 transition duration-300 font-bold {`${colorVariants[color]}`}"
>
	<div class="inline-flex gap-2">
		<img src={iconSrc} alt={`${text} icon`} />
		<p class="text-inherit">{text.charAt(0).toUpperCase() + text.slice(1)}</p>
	</div>
	<div class="inline-flex gap-2">
		<p class="text-darkgrayblue font-bold">{score}</p>
		<p class="text-gray-500 font-bold">/</p>
		<p class="text-gray-500 font-bold">{maxScore}</p>
	</div>
</li>

<style>
	img,
	p {
		margin: 0;
	}
</style>
