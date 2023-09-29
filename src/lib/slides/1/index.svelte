<script lang="ts">
	import me from './me.jpg';
	import { setupViewTransition } from 'sveltekit-view-transition';

	let step = 1;
	let steps = [
		{ icon: '👨🏻‍💼', sentence: 'Paolo Ricciuti' },
		{ icon: '🍕', sentence: 'from Campobasso, Italy' },
		{ icon: '🧡', sentence: 'Svelte Ambassador' },
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 248 204" width="24" height="24">
  <path fill="#1d9bf0" d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"/>
</svg>`,
			sentence: '@paoloricciuti on <s>Twitter</s> X',
		},
		{
			icon: `<svg height="24" width="24" aria-hidden="true" viewBox="0 0 18 18" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle" xmlns="http://www.w3.org/2000/svg">
  <ellipse style="stroke: rgb(0, 0, 0); stroke-width: 0px; fill: rgb(255, 255, 255);" cx="9" cy="9" rx="9" ry="9"></ellipse>
  <path d="M 9 1.197 C 13.42 1.197 17 4.777 17 9.197 C 16.999 12.634 14.806 15.688 11.55 16.787 C 11.15 16.867 11 16.617 11 16.407 C 11 16.137 11.01 15.277 11.01 14.207 C 11.01 13.457 10.76 12.977 10.47 12.727 C 12.25 12.527 14.12 11.847 14.12 8.777 C 14.12 7.897 13.81 7.187 13.3 6.627 C 13.38 6.427 13.66 5.607 13.22 4.507 C 13.22 4.507 12.55 4.287 11.02 5.327 C 10.38 5.147 9.7 5.057 9.02 5.057 C 8.34 5.057 7.66 5.147 7.02 5.327 C 5.49 4.297 4.82 4.507 4.82 4.507 C 4.38 5.607 4.66 6.427 4.74 6.627 C 4.23 7.187 3.92 7.907 3.92 8.777 C 3.92 11.837 5.78 12.527 7.56 12.727 C 7.33 12.927 7.12 13.277 7.05 13.797 C 6.59 14.007 5.44 14.347 4.72 13.137 C 4.57 12.897 4.12 12.307 3.49 12.317 C 2.82 12.327 3.22 12.697 3.5 12.847 C 3.84 13.037 4.23 13.747 4.32 13.977 C 4.48 14.427 5 15.287 7.01 14.917 C 7.01 15.587 7.02 16.217 7.02 16.407 C 7.02 16.617 6.87 16.857 6.47 16.787 C 3.202 15.7 0.998 12.641 1 9.197 C 1 4.777 4.58 1.197 9 1.197 Z"></path>
</svg>`,
			sentence: '@paoloricciuti on GitHub',
		},
		{ icon: '👨🏻‍💻', sentence: 'Fullstack Software Engineer at Mainmatter' },
	];

	const { transition } = setupViewTransition();
</script>

<svelte:window
	on:keydown|capture={(e) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		let func;

		if (e.key === 'ArrowLeft' && step > 1) {
			func = () => {
				step--;
			};
			e.stopPropagation();
			e.stopImmediatePropagation();
		}
		if (e.key === 'ArrowRight' && step < steps.length) {
			func = () => {
				step++;
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

<section>
	<h1>Who am i?</h1>
	<img src={me} alt="Paolo Ricciuti" />
	<ul>
		{#each { length: step } as _, i}
			<li>
				<span
					use:transition={{
						name: 'fullstack',
						shouldApply() {
							return i === steps.findIndex((step) => step.icon === '👨🏻‍💻');
						},
						// eslint-disable-next-line svelte/no-at-html-tags
					}}>{@html steps[i].icon}</span
				>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html steps[i].sentence}
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr 30%;
		grid-template-rows: auto 1fr;
		width: 100%;
		height: 100%;
		padding: 5vmin;
	}
	h1 {
		font-size: 4vmin;
		margin: 0;
	}
	img {
		max-width: 100%;
		border-radius: 50%;
		grid-row: 1/-1;
		grid-column: 2;
	}
	ul {
		list-style: none;
		font-size: 3vmin;
		margin: 0;
		padding: 0;
		padding-block: 2vmin;
	}
	li {
		padding-bottom: 1vmin;
		display: flex;
		align-items: center;
		& span {
			padding-inline: 2vmin;
			display: inline-flex;
			align-items: center;
		}
	}
	:root::view-transition-new(fullstack),
	:root::view-transition-old(fullstack) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
