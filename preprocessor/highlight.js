import { getHighlighter } from 'shiki-es';
import MagicString from 'magic-string';

const highlighter = await getHighlighter({ theme: 'dark-plus' });

export const highlight = () => {
	return {
		markup({ content, filename }) {
			const magic_string = new MagicString(content);
			magic_string.replace(/<shiki lang="(.+)">((?:.|\n|\r\n)*)<\/shiki>/, (_, $1, $2) => {
				const lines = $2.split('\n');
				lines.shift();
				const number_of_tabs = [...lines[0]].findIndex((char) => char !== '\t');
				const code = lines
					.map((line) => {
						return line.substring(number_of_tabs).replaceAll('\t', '  ');
					})
					.join('\n');
				return `{@html \`${highlighter.codeToHtml(code, {
					lang: $1,
				})}\`}`;
			});
			return {
				code: magic_string.toString(),
				map: magic_string.generateMap({
					file: filename,
				}),
			};
		},
	};
};
