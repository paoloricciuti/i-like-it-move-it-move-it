<script lang="ts">
	// importing and declaring stuff just to make typescript and eslint shut-up
	import { flip } from 'svelte/animate';
	let payed: Array<{ number: number }> = [];
</script>

<!-- eslint-disable svelte/valid-compile -->

<shiki lang="svelte">
	<script>
		import { flip } from 'svelte/animate';
	</script>

	<!-- other code -->

	{#each payed as payed_button}
		<button animate:flip>{payed_button.number}</button>
	{/each}
</shiki>
