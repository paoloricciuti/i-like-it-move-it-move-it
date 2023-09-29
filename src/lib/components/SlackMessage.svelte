<script lang="ts">
	import Avatar from './Avatar.svelte';

	export let img: string;
	export let name: string;
	export let date: string;
	export let message: string;
</script>

<article>
	<Avatar class="avatar" src={img} alt={name} />
	<p class="name">{name}</p>
	<time class="date">{date}</time>
	<p class="message">{message}</p>
</article>

<style>
	article {
		display: grid;
		grid-template-columns: 2.25rem auto 1fr;
		grid-template-rows: auto auto;
		gap: 0.5rem;
		width: fit-content;
		align-items: end;
		max-width: 100%;
		justify-items: start;
	}

	:global(.avatar) {
		grid-column: 1;
		grid-row: 1/-1;
		width: 100%;
		align-self: baseline;
	}
	p {
		margin: 0;
		font-size: 0.9375rem;
	}
	.name {
		grid-column: 2;
		grid-row: 1;
		font-weight: bold;
	}
	.date {
		grid-column: 3;
		grid-row: 1;
		color: rgb(171, 171, 173);
		font-size: 0.75rem;
	}
	.message {
		grid-column: 2/-1;
		grid-row: 2;
	}
</style>
