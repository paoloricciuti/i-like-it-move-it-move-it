<shiki lang="svelte">
	<script lang="ts">
		import { onNavigate } from '$app/navigation';

		onNavigate((navigation) => {
			if (
				!('startViewTransition' in document) ||
				typeof document.startViewTransition !== 'function'
			) {
				return;
			}
			return new Promise((resolve) => {
				document.startViewTransition(async () => {
					resolve();
					await navigation.complete;
				});
			});
		});
	</script>
</shiki>

<style>
	:global(.shiki) {
		font-size: 2vmin;
	}
</style>
