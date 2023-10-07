<script lang="ts">
	import Clicks from '$lib/components/Clicks.svelte';
	import Design from '$lib/components/Design.svelte';
	const phases = ['start', 'screenshot', 'on-top', 'crossfade'] as const;
	let selected_phase = 0;

	function get_phase_for(phase: (typeof phases)[number]) {
		return phases.findIndex((el) => el === phase);
	}

	function is_after_phase(selected_phase: number, phase: (typeof phases)[number]) {
		return selected_phase >= get_phase_for(phase);
	}
</script>

<Clicks
	back={() => {
		selected_phase--;
	}}
	can_back={selected_phase >= 1}
	forward={() => {
		selected_phase++;
	}}
	can_forward={selected_phase < phases.length - 1}
/>

<section>
	<article
		class:screenshot={phases[selected_phase] === 'screenshot'}
		class:on-top={is_after_phase(selected_phase, 'on-top')}
		class:crossfade={is_after_phase(selected_phase, 'crossfade')}
		class="old"
	>
		<span>Old</span>
		<Design />
	</article>
	<article class:on-top={is_after_phase(selected_phase, 'on-top')}>
		<span>New</span>
		<Design new_page />
	</article>
</section>

<style>
	section {
		display: grid;
		width: 100%;
		gap: 3vmin;
		padding: 3vmin;
		position: relative;
		place-items: center;
	}
	article {
		position: relative;
		width: 50vmax;
		display: grid;
		place-items: center;
		view-transition-name: new;
	}
	article span {
		position: absolute;
		top: 0;
	}
	.screenshot {
		position: relative;
	}
	.screenshot:after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		height: 100%;
		aspect-ratio: 16/9;
		transform: translate(-50%, -50%);
		box-shadow:
			0 0 10vmin 2vmin white,
			inset 0 0 200vmin 2vmin white;
	}
	.old {
		z-index: 2;
		view-transition-name: old;
	}
	.on-top {
		position: absolute;
	}
	.crossfade {
		animation: fade 1s linear forwards;
	}
	@keyframes fade {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
