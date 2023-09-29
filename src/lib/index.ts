// place files you want to import through the `$lib` alias in this folder.
export function get_slides() {
	const slides = import.meta.glob('./slides/*/index.svelte', { eager: true });
	return [
		{ page: undefined },
		...Object.keys(slides).map((slide) => {
			const regex = /.*\/slides\/(?<number>\d+)\/index.svelte/;
			const matches = slide.match(regex);
			const page = matches?.groups?.number ?? '0';
			return { page };
		}),
	];
}
