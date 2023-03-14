<script>
	export let text = 'default';
</script>

<button
	name={`${text}-btn`}
	class="relative rounded-full w-full py-2 bg-darkgrayblue text-white bg-grad z-[1]
     before:absolute before:content-[''] before:inset-0 before:opacity-0 before:rounded-full before:transition-all before:duration-300
     before:bg-gradient-to-b from-lightslateblue to-lightroyalblue before:-z-[1]
     hover:before:opacity-100
    "
>
	{text}
</button>
