import { get_slides } from '$lib';
import { messages } from '$lib/messages.js';

export const prerender = true;

export function load({ params: { page = '0' } }) {
	const num = +page;
	const filtered_messages = messages.filter((message) => message.id <= num);
	const last_deleted = messages.find((message) => message.id > num);
	const slides = get_slides();
	const last_slide = +(
		slides
			.sort((slide_a, slide_b) => {
				return +slide_a.page - +slide_b.page;
			})
			.at(-1)?.page ?? '0'
	);
	return {
		messages: filtered_messages,
		last_deleted_id: last_deleted?.id,
		num,
		last_slide,
	};
}
