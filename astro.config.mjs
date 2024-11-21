// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

import compressor from 'astro-compressor';

export default defineConfig({
    site: 'https://strong-gelato-2f9549.netlify.app',
    integrations: [
        tailwind(),
        sitemap(),
        robotsTxt(),
        icon({
            include: {
                mdi: ['*']
            }
        }),
        compressor()
    ],
    devToolbar: {
        enabled: false
    },

    build: {
        inlineStylesheets: 'auto',
        assets: '_ovftank'
    },
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'load'
    },
    output: 'server',
    adapter: netlify({
        imageCDN: true
    })
});
