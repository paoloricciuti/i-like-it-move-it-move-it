import { rename, readdir, mkdir, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const [, , slide_str] = process.argv;

if (!slide_str) {
	console.log('You must pass a slide number');
	process.exit(1);
}

const slide_num = +slide_str;

if (isNaN(slide_num)) {
	console.log('You must pass a number as slide number');
	process.exit(1);
}

const slide_folder = resolve(process.cwd(), './src/lib/slides');

const slides_folders = await readdir(slide_folder);

const slides: number[] = [];

for (const slide_folder of slides_folders) {
	const num = +slide_folder;
	if (!isNaN(num)) {
		slides.push(num);
	}
}

slides.sort((slide_a, slide_b) => slide_b - slide_a);

for (let i = 0; slides[i] >= slide_num; i++) {
	const to_rename = slides[i];
	await rename(
		join(slide_folder, to_rename.toString()),
		join(slide_folder, (to_rename + 1).toString()),
	);
	console.log(`Renamed ${to_rename} to ${to_rename + 1}`);
}
await mkdir(join(slide_folder, slide_num.toString()));

await writeFile(join(slide_folder, slide_num.toString(), 'index.svelte'), '');

console.log(`${slide_num} created!`);
