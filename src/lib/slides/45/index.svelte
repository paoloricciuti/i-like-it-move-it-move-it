<shiki lang="svelte">
	<script>
		import { setupViewTransition } from 'sveltekit-view-transition';

		setupViewTransition();
	</script>

	<slot />

	<style>
		/* Disable default crossfade. */
		:root {
			view-transition-name: none;
		}

		/* Or, just modify the duration. */
		:global(::view-transition-old(root)),
		:global(::view-transition-new(root)) {
			animation-duration: 2s;
		}
	</style>
</shiki>
