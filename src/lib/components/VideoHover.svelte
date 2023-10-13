<script lang="ts">
	export let video: string;
	export let font_size = 1.5;
	let paused = true;
	let hoverable = true;
	let currentTime: number;
</script>

<svelte:window
	on:keypress={(e) => {
		if (e.key === ' ' && !e.repeat) {
			hoverable = false;
		}
	}}
	on:keyup={() => {
		hoverable = true;
	}}
/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class:hoverable
	style:--font-size={font_size}
	on:mouseenter={() => {
		paused = false;
	}}
	on:mouseleave={() => {
		paused = true;
		currentTime = 0;
	}}
>
	<slot />
	<video bind:paused bind:currentTime muted autoplay playsinline loop>
		<source src={video} />
	</video>
</div>

<style>
	div {
		max-width: 100%;
		overflow-x: auto;
		display: flex;
		gap: 2vmin;
	}
	div :global(.shiki) {
		font-size: calc(var(--font-size) * 1vmin);
	}
	video {
		--inset: 5vmin;
		position: absolute;
		inset: var(--inset);
		object-fit: contain;
		width: calc(100% - var(--inset) * 2);
		height: calc(100% - var(--inset) * 2);
		opacity: 0;
		transition: opacity 250ms;
		background-color: #222;
		pointer-events: none;
	}
	div.hoverable:hover video {
		opacity: 1;
	}
</style>
