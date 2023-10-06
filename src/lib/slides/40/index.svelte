<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { onNavigate } from '$app/navigation';
</script>

<shiki lang="svelte">
	<script lang="ts">
		import { onNavigate } from '$app/navigation';

		onNavigate(() => {
			document.startViewTransition(() => {
				// proceed with the navigation
			});
		});
	</script>
</shiki>
