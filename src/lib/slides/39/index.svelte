<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { beforeNavigate } from '$app/navigation';
</script>

<shiki lang="svelte">
	<script lang="ts">
		import { beforeNavigate } from '$app/navigation';

		beforeNavigate(() => {
			document.startViewTransition(() => {
				// proceed with the navigation
			});
		});
	</script>
</shiki>
