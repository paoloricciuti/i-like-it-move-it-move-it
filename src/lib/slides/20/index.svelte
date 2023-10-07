<script lang="ts">
	import Clicks from '$lib/components/Clicks.svelte';

	const phases = ['show', 'first', 'last', 'invert', 'play'] as const;
	let selected_phase = 0;
	$: phase = phases[selected_phase];

	let is_before = true;

	function store_bounding_rect(node: HTMLDivElement, fn: (rect: DOMRect) => void) {
		fn(node.getBoundingClientRect());
	}

	function play(node: HTMLDivElement) {
		setTimeout(() => {
			node.classList.remove('before', 'invert');
			node.classList.add('after', 'playing');
		}, 1000);
	}

	let first_before_el: DOMRect;
	let last_after_el: DOMRect;
</script>

<Clicks
	back={() => {
		selected_phase--;
		is_before = true;
	}}
	can_back={selected_phase > 1}
	forward={() => {
		selected_phase++;
		is_before = true;
	}}
	can_forward={selected_phase < phases.length - 1}
/>

<svelte:window
	on:click={() => {
		is_before = !is_before;
	}}
/>
<section>
	{#if phase !== 'show'}
		<h1>{phase[0].toUpperCase()}{phase.substring(1)}</h1>
	{/if}
	{#if phase === 'show'}
		<div class:before={is_before} class:after={!is_before}></div>
	{/if}
	{#if phase === 'first'}
		<div
			use:store_bounding_rect={(rect) => {
				first_before_el = rect;
			}}
			class="before"
		></div>
		<pre>First: {JSON.stringify(first_before_el, null, 2)}</pre>
	{/if}
	{#if phase === 'last'}
		<div
			use:store_bounding_rect={(rect) => {
				last_after_el = rect;
			}}
			class="after"
		></div>
		<pre>First: {JSON.stringify(first_before_el, null, 2)}</pre>
		<pre>Last: {JSON.stringify(last_after_el, null, 2)}</pre>
	{/if}
	{#if phase === 'invert'}
		<div class="before invert"></div>
		<pre>First: {JSON.stringify(first_before_el, null, 2)}</pre>
		<pre>Last: {JSON.stringify(last_after_el, null, 2)}</pre>
		<pre class="wrapper">
		<shiki lang="js">
			const top = last.top - first.top;
			const left = last.left - first.left;
			const scaleX = last.width / first.width;
			const scaleY = last.height / first.height;
			let transform = "translateX("+left+"px);";
			transform += "translateY("+top+"px);";
			transform += "scaleX("+scaleX+");";
			transform += "ScaleY("+scaleY+");";
			last.style.transform = transform;
		</shiki>
	</pre>
	{/if}
	{#if phase === 'play'}
		<div use:play class="before invert"></div>
		<pre>First: {JSON.stringify(first_before_el, null, 2)}</pre>
		<pre>Last: {JSON.stringify(last_after_el, null, 2)}</pre>
		<pre class="wrapper">
		<shiki lang="js">
			const top = last.top - first.top;
			const left = last.left - first.left;
			const scaleX = last.width / first.width;
			const scaleY = last.height / first.height;
			let transform = "translateX("+left+"px);";
			transform += "translateY("+top+"px);";
			transform += "scaleX("+scaleX+");";
			transform += "ScaleY("+scaleY+");";
			last.style.transform = transform;
			setTimeout(()=> last.style.transform="", 0);
		</shiki>
	</pre>
	{/if}
</section>

<style>
	div {
		position: absolute;
		background-color: #b00;
		border-radius: 1vmin;
		display: grid;
		place-items: center;
	}
	:global(.playing) {
		transition:
			top 1s,
			left 1s,
			width 1s,
			height 1s;
	}
	section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: min-content 1fr 1fr;
		width: 70%;
	}
	h1 {
		grid-column: 1/-1;
		text-align: center;
	}
	.before {
		width: 10vmin;
		height: 10vmin;
		top: 10vmin;
		left: 15vmin;
	}
	.before::before {
		content: 'F';
	}
	.after {
		width: 15vmin;
		height: 10vmin;
		top: 50vmin;
		left: 55vmin;
	}
	.after::after {
		content: 'L';
	}
	.invert:before {
		content: 'L';
	}
	.wrapper {
		all: unset;
		grid-column: 1/-1;
	}
	.wrapper :global(.shiki) {
		font-size: 1.5vmin;
	}
</style>
