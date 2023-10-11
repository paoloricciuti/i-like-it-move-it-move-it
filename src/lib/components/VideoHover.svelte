<script lang="ts">
	export let video: string;
</script>

<div>
	<slot />
	<video muted autoplay playsinline loop>
		<source src={video} />
	</video>
</div>

<style>
	div {
		position: relative;
		max-width: 100%;
		overflow-x: auto;
	}
	div :global(.shiki) {
		font-size: 1.5vmin;
	}
	video {
		position: absolute;
		inset: 0;
		object-fit: contain;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 250ms;
		background-color: #111;
	}
	div:hover video {
		opacity: 1;
	}
</style>
