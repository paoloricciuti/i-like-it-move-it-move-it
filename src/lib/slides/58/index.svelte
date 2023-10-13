<script lang="ts">
	import VideoHover from '$lib/components/VideoHover.svelte';
	import inviewport from './inviewport.mp4';
	import type { TransitionAction } from 'sveltekit-view-transition';

	let data = {
		images: [
			{
				id: '',
				src: '',
			},
		],
		img: '',
	};

	const transition: (node: HTMLElement, prop: TransitionAction | string) => void =
		'' as unknown as (node: HTMLElement, prop: TransitionAction | string) => void;
</script>

<VideoHover font_size={1.3} video={inviewport}>
	<shiki lang="svelte">
		<script lang="ts">
			export let data;
		</script>

		<ul>
			{#each data.images as image (image.id)}
				<li>
					<a href="/meme/{image.id}">
						<img
							use:transition={{
								name: 'image',
								shouldApply({ navigation }) {
									return navigation.to?.params?.id === image.id.toString();
								},
								applyImmediately({ navigation, isInViewport }) {
									return isInViewport && navigation.from?.params?.id === image.id.toString();
								},
							}}
							src={image.src}
							alt={image.src}
						/>
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
	<shiki lang="svelte">
		<script lang="ts">
			import { setupViewTransition } from 'sveltekit-view-transition';
			const { transition } = setupViewTransition();
			export let data;
		</script>

		<img
			use:transition={'image'}
			src={data.img}
			alt="This is the funniest meme evah!!!!!!!!!!!!!"
		/>

		<style>
			img {
				max-width: 90%;
				margin: auto;
				display: block;
			}
		</style>
	</shiki>
</VideoHover>
