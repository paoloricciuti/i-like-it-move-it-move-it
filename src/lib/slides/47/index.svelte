<script lang="ts">
	import { page } from '$app/stores';
	function transition(_node: HTMLElement, _props: string) {
		// just to shut up TS
	}
	const links = ['home', 'about', 'docs', 'contact'];
</script>

<div>
	<shiki lang="svelte">
		<script>
			import { setupViewTransition } from 'sveltekit-view-transition';

			const { transition } = setupViewTransition();

			const links = ['home', 'about', 'docs', 'contact'];
		</script>

		<header use:transition={'header'}>
			{#each links as link (link)}
				<a class:current={$page.params.page === link} href="/{link}">{link}</a>
			{/each}
		</header>

		<slot />

		<style>
			:root::view-transition-old(header),
			:root::view-transition-new(header) {
				animation-duration: 250ms;
			}
			.current {
				position: relative;
			}
			.current:after {
				content: '';
				position: absolute;
				inset: 0;
				top: auto;
				height: 5%;
				background-color: #ff3e00;
				z-index: -1;
			}
		</style>
	</shiki>
</div>

<style>
	div :global(.shiki) {
		font-size: 1.5vmin;
	}
</style>
