// // import node from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/kit/vite';
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   kit: {
//     adapter: adapter()
//   },
//   preprocess: vitePreprocess()
// };
// export default config;


import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter()
	}
};