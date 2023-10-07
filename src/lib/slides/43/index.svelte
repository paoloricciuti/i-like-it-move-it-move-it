<script>
	import { confetti } from '@neoconfetti/svelte';
	import { onMount } from 'svelte';
	let count = 0;
	onMount(() => {
		setTimeout(() => {
			count++;
		}, 1000);
	});
</script>

<svelte:window
	on:click={() => {
		count++;
	}}
/>

{#each { length: count } as _, i (i)}
	<div
		use:confetti={{
			force: 1,
			particleCount: 300,
		}}
	/>
{/each}
<pre>
	<shiki lang="bash">
		$> pnpm i sveltekit-view-transition
	</shiki>
</pre>

<style>
	div {
		position: absolute;
		z-index: 2;
	}
	pre {
		z-index: 3;
	}
</style>
