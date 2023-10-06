<script lang="ts">
	import { onMount } from 'svelte';

	let counter = 0;

	onMount(() => {
		const interval = setInterval(() => {
			counter++;
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<section>
	<shiki lang="svelte">
		<script lang="ts">
			import { onMount } from 'svelte';

			let counter = 0;

			onMount(() => {
				const interval = setInterval(() => {
					counter++;
				}, 1000);
				return () => {
					clearInterval(interval);
				};
			});
		</script>

		<div>{counter}</div>

		<style>
			div {
				background: #bada55;
				width: 10vmin;
				aspect-ratio: 1;
				border-radius: 1vmin;
				display: grid;
				place-items: center;
				color: black;
			}
		</style>
	</shiki>

	<div>{counter}</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;
		gap: 10vmin;
	}
	section :global(.shiki) {
		font-size: 1rem;
	}
	div {
		background: #bada55;
		width: 10vmin;
		aspect-ratio: 1;
		border-radius: 1vmin;
		display: grid;
		place-items: center;
		color: black;
	}
</style>
