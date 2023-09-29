import { get_slides } from '$lib';

export async function entries() {
	return get_slides();
}

export function load({ params: { page = '0' } }) {
	const slide = +page;
	const component = import(`../../lib/slides/${page}/index.svelte`).then(
		(component) => component.default,
	);
	return {
		slide,
		component,
	};
}
