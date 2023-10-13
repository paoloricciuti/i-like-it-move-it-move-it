<script lang="ts">
	import { goto } from '$app/navigation';
	import Slack from '$lib/components/Slack.svelte';
	import '@fontsource/lato';
	import '@fontsource/lato/700.css';
	import './global.css';
	import { browser } from '$app/environment';
	export let data;

	const cam = browser && new URLSearchParams(window.location.search).get('presenter') !== null;

	function add_video(video: HTMLVideoElement) {
		(async () => {
			if (navigator.mediaDevices.getUserMedia) {
				try {
					const stream = await navigator.mediaDevices.getUserMedia({ video: true });
					video.srcObject = stream;
				} catch (e) {
					/**empty*/
				}
			}
		})();
	}
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
<main class:lone={data.messages.length === 0 || data.num > 28}>
	<section>
		<slot />
	</section>
	<Slack {...data} />
</main>
{#if cam}
	<video autoplay playsinline muted use:add_video>
		<track kind="captions" />
	</video>
{/if}

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 30%;
		aspect-ratio: 16/9;
		width: 100%;
		box-sizing: border-box;
		position: relative;
		background-color: #222245;
		max-height: 100%;
	}
	.lone {
		grid-template-columns: 1fr;
	}
	video {
		position: absolute;
		z-index: 100;
		left: 3vmin;
		bottom: 3vmin;
		aspect-ratio: 1;
		border-radius: 50%;
		width: 25vmin;
		object-fit: cover;
		view-transition-name: presenter;
	}
	:root::view-transition-new(presenter),
	:root::view-transition-old(presenter) {
		animation: none;
	}
</style>
