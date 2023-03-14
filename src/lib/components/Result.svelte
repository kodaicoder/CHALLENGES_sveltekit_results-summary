<script>
	const data = {
		score: 76,
		maxScore: 100,
		betterThan: 65
	};
	let scoreDiscription = `You scored higher than ${data.betterThan}% of the people who have taken these tests.`;
</script>

<div
	class="flex flex-1 flex-col justify-between items-center  p-10 rounded-b-3xl  md:rounded-3xl bg-gradient-to-b from-lightslateblue to-lightroyalblue"
>
	<h3 class="m-0 text-lightlavender">Your Result</h3>

	<div class=" relative p-20 rounded-full bg-gradient-to-b from-violetblue to-persianblue">
		<div
			class="absolute flex flex-col items-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
		>
			<h1 class="m-0 text-white">{data.score}</h1>
			<small class="text-lightlavender">of {data.maxScore}</small>
		</div>
	</div>

	<h2 class="text-white m-0 mt-3">Great</h2>
	<p class="m-0 text-lightlavender text-center">
		{scoreDiscription}
	</p>
</div>
