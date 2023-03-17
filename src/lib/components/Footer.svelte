<script>
	import { fade } from 'svelte/transition';
	let showLabel = false;
</script>

<div class="grid place-content-center fixed bottom-4 right-4 z-20 bg-white rounded-full not-prose">
	<!-- <div class="relative"> -->
	<button
		class="cursor-pointer w-16 aspect-square rounded-full border-4 overflow-hidden border-blue-300 opacity-70 transition-all duration-300 hover:border-blue-500 hover:opacity-100"
		on:click={() => {
			showLabel = !showLabel;
		}}
	>
		<img
			src="https://github.com/kodaicoder.png?size=64"
			alt="kodaicoder footer avatar"
			class=" rounded-full"
		/>
	</button>
	{#if showLabel}
		<div
			transition:fade
			class="footerLabel absolute w-72 md:w-max p-4 right-20 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-lg"
		>
			<p class="m-0">
				Challenge by <a
					href="https://www.frontendmentor.io/"
					target="_blank"
					class=" underline underline-offset-2">Frontend Mentor</a
				>. Coded by
				<a
					href="https://www.frontendmentor.io/profile/NutchaponMake"
					target="_blank"
					class=" underline underline-offset-2">KodaiCoder</a
				>.
			</p>
		</div>
	{/if}
	<!-- </div> -->
</div>
