<script lang="ts">
	import VideoHover from '$lib/components/VideoHover.svelte';
	import meme from './meme.mp4';
</script>

<VideoHover video={meme}>
	<shiki lang="svelte">
		<script>
			import { setupViewTransition } from 'sveltekit-view-transition';

			const { transition, classes } = setupViewTransition();

			const links = ['home', 'about', 'docs', 'contact'];

			classes(({ navigation }) => {
				if (navigation?.to?.route?.id === '/meme/[id]') return;
				if (navigation?.from?.route?.id === '/meme/[id]') return;
				const from = navigation.from?.params?.page ?? 'home';
				const to = navigation.to?.params?.page ?? 'home';
				const from_idx = links.findIndex((link) => link === from);
				const to_idx = links.findIndex((link) => link === to);

				if (from_idx > to_idx) {
					return ['back'];
				}
				return ['forward'];
			});
		</script>

		<style>
			:where(.forward, .back):root::view-transition-new(root),
			:where(.forward, .back):root::view-transition-old(root) {
				animation: slide 250ms;
			}
		</style>
	</shiki>
</VideoHover>
