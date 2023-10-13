<script lang="ts">
	import Clicks from '$lib/components/Clicks.svelte';

	let line = -1;
	const lines = [4, 6, 8, 10, 13, 16, 19];
</script>

<Clicks
	forward={() => {
		line++;
	}}
	back={() => {
		line--;
	}}
	can_back={line > -1}
	can_forward={line < lines.length - 1}
/>

<svelte:head>
	{#if lines[line]}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html `
		<style>
			.shiki .line{
				filter: brightness(.5);
			}
			.shiki .line:nth-child(${lines[line]}){
				filter: unset;
			}
		</style>
	`}
	{/if}
</svelte:head>

<div style:--highlight={lines[line]}>
	<shiki lang="svelte">
		<script>
			onNavigate((navigation)=>{
				return new Promise((resolve)=>{
					// before-start-view-transition
					const transition = document.startViewTransition(()=>{
						// before-navigation
						resolve();
						// before-navigation-complete
						await navigation.complete;
						// after-navigation-complete
					});
					transition.ready.then(()=>{
						// transition-ready
					});
					transition.updateCallbackDone.then(()=>{
						// update-callback-done
					});
					transition.finished.then(()=>{
						// transition-finished
					});
				});
			});
		</script>
	</shiki>
</div>

<style>
	div :global(.shiki) {
		font-size: 1.5vmin;
	}
</style>
