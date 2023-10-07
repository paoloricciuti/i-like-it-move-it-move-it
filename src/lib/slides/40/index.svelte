<script lang="ts">
	import Clicks from '$lib/components/Clicks.svelte';

	const phases = [
		'click',
		'beforeNavigate',
		'load',
		'onNavigate',
		'afterNavigate',
		'render',
	] as const;
	let selected_phase = -1;
</script>

<Clicks
	forward={() => {
		selected_phase++;
	}}
	back={() => {
		selected_phase--;
	}}
	can_back={selected_phase > -1}
	can_forward={selected_phase < phases.length - 1}
/>

<section>
	<shiki lang="svelte">
		<script lang="ts">
			import { onNavigate } from '$app/navigation';

			onNavigate(() => {
				document.startViewTransition(() => {
					// proceed with the navigation
				});
			});
		</script>
	</shiki>

	<ul>
		{#each phases as phase}
			<li class:current={phases[selected_phase] === phase}>{phase}</li>
		{/each}
	</ul>
</section>

<style>
	section {
		display: flex;
		gap: 2vmin;
	}
	section :global(.shiki) {
		font-size: 2vmin;
	}
	ul {
		padding: 0;
		list-style: none;
	}
	li {
		background-color: #222;
		padding: 1vmin;
	}
	li.current {
		background-color: #555;
	}
</style>
