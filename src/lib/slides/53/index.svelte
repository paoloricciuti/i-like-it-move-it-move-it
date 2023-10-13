<script lang="ts">
	import VideoHover from '$lib/components/VideoHover.svelte';
	import basicmeme from './basicmeme.mp4';
	let data = {
		images: [
			{
				id: '',
				src: '',
			},
		],
	};
</script>

<VideoHover video={basicmeme}>
	<shiki lang="svelte">
		<script lang="ts">
			export let data;
		</script>

		<ul>
			{#each data.images as image (image.id)}
				<li>
					<a href="/meme/{image.id}">
						<img src={image.src} alt={image.src} />
					</a>
				</li>
			{/each}
		</ul>

		<style>
			ul {
				list-style: none;
				padding: 0;
				display: grid;
				gap: 3rem;
				width: 100%;
			}
			a {
				display: grid;
				place-items: center;
			}
			img {
				max-width: 80%;
				display: block;
			}
		</style>
	</shiki>
</VideoHover>
