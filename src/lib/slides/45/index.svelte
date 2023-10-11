<script lang="ts">
	import basic from './basic.mp4';
	import VideoHover from '$lib/components/VideoHover.svelte';
</script>

<VideoHover video={basic}>
	<shiki lang="svelte">
		<script>
			import { setupViewTransition } from 'sveltekit-view-transition';

			setupViewTransition();
		</script>

		<slot />

		<style>
			/* Or, just modify the duration. */
			:root::view-transition-old(root),
			:root::view-transition-new(root) {
				animation-duration: 2s;
			}
		</style>
	</shiki>
</VideoHover>
