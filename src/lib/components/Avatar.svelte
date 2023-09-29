<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = HTMLImgAttributes;
</script>

<img alt="" {...$$restProps} />

<style>
	img {
		border-radius: 0.25rem;
		aspect-ratio: 1;
		object-fit: cover;
	}
</style>
