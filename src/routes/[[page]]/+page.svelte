<script lang="ts">
	export let data;
</script>

<section>
	<svelte:component this={data.component} />
</section>

<style>
	section {
		display: grid;
		place-items: center;
		min-height: 100%;
		position: relative;
	}
</style>
