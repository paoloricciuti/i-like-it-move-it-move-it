<script lang="ts">
	import { goto } from '$app/navigation';
	import Slack from '$lib/components/Slack.svelte';
	import '@fontsource/lato';
	import '@fontsource/lato/700.css';
	import './global.css';
	export let data;
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'ArrowLeft' && data.num > 0) {
			goto(`/${data.num - 1}`);
		}
		if (e.key === 'ArrowRight' && data.num < data.last_slide) {
			goto(`/${data.num + 1}`);
		}
	}}
/>
<main class:lone={data.messages.length === 0}>
	<section>
		<slot />
	</section>
	<Slack {...data} />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 30%;
		aspect-ratio: 16/9;
		width: 100%;
		box-sizing: border-box;
		position: relative;
		background-color: #222245;
	}
	.lone {
		grid-template-columns: 1fr;
	}
</style>
