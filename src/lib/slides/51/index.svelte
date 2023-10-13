<div>
	<shiki lang="svelte">
		<script>
			import { setupViewTransition } from 'sveltekit-view-transition';

			const { on } = setupViewTransition();
			on(
				'before-start-view-transition',
				({ navigation }) => {
					// the navigation object
				},
				{
					registerDuringTransition: false, // by default it will be registered after the transition ends
					autoWrap: true, // by default wrapped in afterNavigate
					autoClean: true, // by default cleans the listener after the transition
				},
			);
		</script>
	</shiki>
</div>

<style>
	div :global(.shiki) {
		font-size: 1.5vmin;
	}
</style>
