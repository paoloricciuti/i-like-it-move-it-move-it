<script lang="ts">
	import VideoHover from '$lib/components/VideoHover.svelte';
	import slide from './slide.mp4';
</script>

<VideoHover video={slide}>
	<shiki lang="svelte">
		<style>
			:root::view-transition-new(root),
			:root::view-transition-old(root) {
				animation: slide 250ms;
			}

			:root::view-transition-old(root) {
				--from: 0;
				--to: -100%;
			}

			:root::view-transition-new(root) {
				--from: 100%;
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
