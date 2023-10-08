<script lang="ts">
	function transition(_node: HTMLElement, _props: string) {
		// just to shut up TS
	}
</script>

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
		:global(::view-transition-old(header)),
		:global(::view-transition-new(header)) {
			/* ... */
		}
	</style>
</shiki>
