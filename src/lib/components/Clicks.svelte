<script lang="ts">
	export let forward: () => void;
	export let back: () => void;
	export let can_forward = false;
	export let can_back = false;
</script>

<svelte:window
	on:keydown|capture={(e) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		let func;

		if (e.key === 'ArrowLeft' && can_back) {
			func = () => {
				back();
			};
			e.stopPropagation();
			e.stopImmediatePropagation();
		}
		if (e.key === 'ArrowRight' && can_forward) {
			func = () => {
				forward();
			};
			e.stopPropagation();
			e.stopImmediatePropagation();
		}
		if (!func) return;
		if (
			!('startViewTransition' in document) ||
			typeof document.startViewTransition !== 'function'
		) {
			func();
			return;
		}
		document.startViewTransition(() => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			func();
		});
	}}
/>
