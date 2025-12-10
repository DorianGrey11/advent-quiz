import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

export default defineConfig({
    // used to generate images
    site: 'https://17.nzbka.de',
    trailingSlash: 'ignore',
    integrations: [sitemap(), UnoCSS({injectReset: true})],
    vite: {
        optimizeDeps: {
            exclude: ['@resvg/resvg-js'],
        },
    },
    redirects: {
        "/question": "/question/1",
    },
    prefetch: false,
});
