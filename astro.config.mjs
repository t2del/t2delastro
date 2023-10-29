import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    site: 'https://t2del.github.io/t2delastro/',
    base: '/t2delastro/',
    output: 'server',
    adapter: nodejs(),
});
