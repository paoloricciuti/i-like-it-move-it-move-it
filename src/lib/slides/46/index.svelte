<script lang="ts">
	import VideoHover from '$lib/components/VideoHover.svelte';
	import header from './header.mp4';
	function transition(_node: HTMLElement, _props: string) {
		// just to shut up TS
	}
</script>

<VideoHover video={header}>
	<shiki lang="svelte">
		<script>
			import { setupViewTransition } from 'sveltekit-view-transition';

			const { transition } = setupViewTransition();
		</script>

		<header use:transition={'header'}>
			<!-- links -->
		</header>

		<slot />

		<style>
			:root::view-transition-old(header),
			:root::view-transition-new(header) {
				animation-duration: 250ms;
			}
		</style>
	</shiki>
</VideoHover>
