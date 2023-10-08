<shiki lang="svelte">
	<script lang="ts">
		import { setupViewTransition } from 'sveltekit-view-transition';

		setupViewTransition();
	</script>

	<slot />
</shiki>
