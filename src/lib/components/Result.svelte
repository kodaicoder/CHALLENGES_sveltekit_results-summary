<script>
	const data = {
		score: 76,
		maxScore: 100,
		betterThan: 65
	};
	let scoreDiscription = `You scored higher than ${data.betterThan}% of the people who have taken these tests.`;
</script>

<div
	class="grid items-start gap-8 text-center p-10 px-14
	bg-gradient-to-b from-lightslateblue to-lightroyalblue
	rounded-b-3xl md:rounded-3xl "
>
	<p class=" text-2xl font-bold leading-none">Your Result</p>

	<div
		class="grid place-content-center mx-auto  w-44 aspect-square rounded-full bg-gradient-to-b from-violetblue to-persianblue "
	>
		<p class="m-0 text-5xl font-bold text-white ">{data.score}</p>
		<p>of {data.maxScore}</p>
	</div>
	<div class="grid gap-4">
		<p class="text-white text-3xl font-bold leading-none">Great</p>
		<p class=" text-center leading-snug">
			{scoreDiscription}
		</p>
	</div>
</div>
