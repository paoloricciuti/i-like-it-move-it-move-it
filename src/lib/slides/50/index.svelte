<script lang="ts">
	import VideoHover from '$lib/components/VideoHover.svelte';
	import backnav from './backnav.mp4';
</script>

<VideoHover video={backnav}>
	<shiki lang="svelte">
		<script>
			import { setupViewTransition } from 'sveltekit-view-transition';

			const { transition, classes } = setupViewTransition();

			const links = ['home', 'about', 'docs', 'contact'];

			classes(({ navigation }) => {
				const from = navigation.from?.params?.page ?? 'home';
				const to = navigation.to?.params?.page ?? 'home';
				const from_idx = links.findIndex((link) => link === from);
				const to_idx = links.findIndex((link) => link === to);

				if (from_idx > to_idx) {
					return ['back'];
				}
			});
		</script>

		<style>
			:root::view-transition-old(root) {
				--from: 0;
				--to: -100%;
			}
			:root::view-transition-new(root) {
				--from: 100%;
				--to: 0;
			}
			.back:root::view-transition-old(root) {
				--from: 0;
				--to: 100%;
			}
			.back:root::view-transition-new(root) {
				--from: -100%;
				--to: 0;
			}
			@keyframes slide {
				from {
					transform: translateX(var(--from));
				}
				to {
					transform: translateX(var(--to));
				}
			}
		</style>
	</shiki>
</VideoHover>
