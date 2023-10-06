<script lang="ts">
	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';
	export let phase = 0;

	export let new_page = false;

	let to_pay = !new_page ? [0, 1, 2, 3, 4] : [0, 1, 2, 3];
	let payed = !new_page ? [5, 6, 7] : [5, 6, 7, 4];

	const [send, receive] = crossfade({});

	let to_pay_sorted = false;
	let payed_sorted = false;
</script>

<section class:transitions={phase > 0} class:animations={phase > 1}>
	<div class="header"><span class="cool-emoji">😎</span> COOL</div>
	<div class="menu">
		<ul>
			<li>Home</li>
			<li class:selected={!new_page}>Dashboard</li>
			<li class:selected={new_page}>Invoice</li>
			<li>Users</li>
		</ul>
	</div>
	<div class="content">
		<div class="list">
			<span class="list-title"
				>To pay <button
					on:click={() => {
						to_pay_sorted = !to_pay_sorted;
						to_pay = to_pay.sort((a, b) => (to_pay_sorted ? b - a : a - b));
					}}
					><svg
						class:rotated={to_pay_sorted}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
						/>
					</svg>
				</button></span
			>
			{#each to_pay as num (num)}
				<button
					on:click={() => {
						payed.push(num);
						payed = payed;
						to_pay = to_pay.filter((el) => el !== num);
					}}
					out:send={{
						key: num,
						duration: phase > 3 ? 500 : 0,
					}}
					in:receive={{
						key: num,
						duration: phase > 3 ? 500 : 0,
					}}
					animate:flip={{
						duration: phase > 2 ? 500 : 0,
					}}>{num}</button
				>
			{/each}
		</div>
		<div class="list">
			<span class="list-title"
				>Paid <button
					on:click={() => {
						payed_sorted = !payed_sorted;
						payed = payed.sort((a, b) => (payed_sorted ? b - a : a - b));
					}}
					><svg
						class:rotated={payed_sorted}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
						/>
					</svg>
				</button></span
			>
			{#each payed as num (num)}
				<button
					on:click={() => {
						to_pay.push(num);
						to_pay = to_pay;
						payed = payed.filter((el) => el !== num);
					}}
					out:send={{
						key: num,
						duration: phase > 3 ? 500 : 0,
					}}
					in:receive={{
						key: num,
						duration: phase > 3 ? 500 : 0,
					}}
					animate:flip={{
						duration: phase > 2 ? 500 : 0,
					}}>{num}</button
				>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		width: 80%;
		aspect-ratio: 16/9;
		background-color: #eee;
		border-radius: 1vmin;
		font-size: 1.5vmin;
		display: grid;
		grid-template-columns: max-content 1fr;
		grid-template-rows: max-content 1fr;
		grid-template-areas: 'header header' 'menu content' 'menu content';
		overflow: hidden;
	}
	.header {
		grid-area: header;
		background-color: #777;
		font-size: 2vmin;
		padding: 1vmin;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
	}

	.cool-emoji {
		display: inline-block;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.selected {
		background-color: #999;
	}

	li {
		border-bottom: 1px solid #777;
		padding: 1vmin 1.5vmin;
		color: #222;
	}

	li:hover {
		background-color: #888;
	}

	.menu {
		grid-area: menu;
		background-color: #aaa;
	}

	.content {
		grid-area: content;
		background-color: #eee;
		display: grid;
		place-items: center;
		grid-template-columns: 1fr 1fr;
		color: #222;
	}

	.list {
		display: grid;
		width: 90%;
		height: 90%;
		align-content: start;
		gap: 1vmin;
		background-color: #ddd;
		padding: 2vmin;
		& button {
			height: 2vmin;
			border: 0;
			background-color: #ccc;
			border-radius: 1vmin;
			font-size: 1vmin;
		}
	}
	.list-title button {
		background-color: transparent;
	}
	.list-title svg {
		width: 1vmin;
	}
	.rotated {
		transform: rotate(180deg);
	}
	.transitions {
		& .list-title svg {
			transition: transform 500ms;
		}
		& li {
			transition: background-color 500ms;
		}
	}
	.animations .cool-emoji {
		animation: 1s bubble infinite alternate;
	}
	@keyframes bubble {
		from {
			scale: 1;
		}
		to {
			scale: 1.5;
		}
	}
</style>
