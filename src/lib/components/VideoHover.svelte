<script lang="ts">
	export let video: string;
	let paused = true;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:mouseenter={() => {
		paused = false;
	}}
	on:mouseleave={() => {
		paused = true;
	}}
>
	<slot />
	<video bind:paused muted autoplay playsinline loop>
		<source src={video} />
	</video>
</div>

<style>
	div {
		max-width: 100%;
		overflow-x: auto;
	}
	div :global(.shiki) {
		font-size: 1.5vmin;
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
	div:hover video {
		opacity: 1;
	}
</style>
