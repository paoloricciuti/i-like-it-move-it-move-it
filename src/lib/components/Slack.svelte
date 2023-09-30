<script lang="ts">
	import img from '$lib/assets/designer.jpg';
	import SlackMessage from './SlackMessage.svelte';

	const name = 'Patty Pixel';

	export let num: number;
	export let messages: Array<Messages>;
	export let last_deleted_id: number | undefined;

	import type { Messages } from '$lib/types';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import Avatar from './Avatar.svelte';

	const { transition, classes } = setupViewTransition();

	classes(({ navigation: { to } }) => {
		const next_num = +(to?.params?.page ?? '0');
		if (next_num < num) {
			return ['back'];
		}
	});
</script>

<svelte:head>
	{#if messages.at(-1)}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html `
		<style>
			::view-transition-new(message-${messages.at(-1).id}):only-child{
				animation: slide-in 250ms 250ms;
				transform: translateX(100vw);
			}

			.back::view-transition-new(message-${messages.at(-1).id}){
				animation: initial;
				mix-blend-mode: normal;
			}

			.back::view-transition-old(message-${last_deleted_id}){
				animation: slide-out 250ms;
			}
		</style>
	`}
	{/if}
</svelte:head>
<!--28 last slide with chat-->
{#if messages.length > 0 && num <= 28}
	<aside use:transition={'slack'}>
		<section>
			<Avatar class="avatar" src={img} alt="The Designer" />
			<p>{name}</p>
		</section>
		<ul>
			{#each messages as message (message.id)}
				<li use:transition={`message-${message.id}`}>
					<SlackMessage {...message} {img} {name} />
				</li>
			{/each}
		</ul>
	</aside>
{/if}

<style>
	:global(.avatar) {
		width: 100%;
	}
	section {
		display: grid;
		grid-template-columns: 1.5rem 1fr;
		gap: 0.5rem;
		align-items: end;
		border-bottom: 1px solid rgb(209, 210, 211, 0.3);
		padding: 1rem;
		& > p {
			margin: 0;
			font-size: 1.125rem;
			font-weight: bold;
		}
	}
	ul {
		list-style: none;
		padding: 1rem;
		display: grid;
		align-content: end;
		gap: 2rem;
		margin: 0;
	}
	aside {
		display: grid;
		grid-template-rows: auto 1fr;
		background-color: rgb(26, 29, 33);
		border-left: 1px solid rgb(209, 210, 211);
	}
	:root::view-transition-new(slack):only-child {
		animation: slide-in 250ms;
	}
</style>
