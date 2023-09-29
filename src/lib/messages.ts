import type { Messages } from './types';

export const messages = Object.entries(
	import.meta.glob('./slides/*/message.json', { eager: true, import: 'default' }),
)
	.map(([file, message_json]) => {
		const regex = /.*\/slides\/(?<number>\d+)\/message\.json/;
		const match = file.match(regex);
		if (!message_json || typeof message_json !== 'object') throw Error('');
		if (!('date' in message_json)) throw new Error('');
		const { date } = message_json;
		if (!date) throw new Error('');
		if (typeof date !== 'string') throw new Error('');
		if (!('message' in message_json)) throw new Error('');
		if (!message_json.message) throw new Error('');
		const { message } = message_json;
		if (typeof message !== 'string') throw new Error('');
		return {
			id: +(match?.groups?.number ?? '0'),
			date,
			message,
		};
	})
	.sort((message_a, message_b) => message_a.id - message_b.id) satisfies Array<Messages>;
