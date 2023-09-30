<script lang="ts">
	// importing and declaring stuff just to make typescript and eslint shut-up
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	const [send, receive] = crossfade({});

	let payed: Array<{ number: number }> = [];
	let to_pay: Array<{ number: number }> = [];
</script>

<main>
	<shiki lang="svelte">
		<script>
			import { flip } from 'svelte/animate';
			import { crossfade } from 'svelte/transition';

			const [send, receive] = crossfade({});
		</script>

		<!-- other code -->

		{#each to_pay as to_pay_button (to_pay_button.number)}
			<button
				in:receive={{
					key: to_pay_button.number,
				}}
				out:send={{
					key: to_pay_button.number,
				}}
				animate:flip>{to_pay_button.number}</button
			>
		{/each}
		{#each payed as payed_button (payed_button.number)}
			<button
				in:receive={{
					key: payed_button.number,
				}}
				out:send={{
					key: payed_button.number,
				}}
				animate:flip>{payed_button.number}</button
			>
		{/each}
	</shiki>
</main>

<style>
	main :global(.shiki) {
		font-size: 2vmin;
	}
</style>
