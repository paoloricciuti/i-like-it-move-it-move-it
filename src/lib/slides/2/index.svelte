<script lang="ts">
	import { setupViewTransition } from 'sveltekit-view-transition';

	const { transition } = setupViewTransition();
</script>

<span use:transition={'fullstack'}>👨🏻‍💻</span>

<style>
	span {
		font-size: 30vmin;
		position: absolute;
	}
</style>
