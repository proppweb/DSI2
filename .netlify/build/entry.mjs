import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CF3R22kC.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/challenges/_---slug_.astro.mjs');
const _page1 = () => import('./pages/curatorship.astro.mjs');
const _page2 = () => import('./pages/exhibitions.astro.mjs');
const _page3 = () => import('./pages/principles/_---slug_.astro.mjs');
const _page4 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page5 = () => import('./pages/texts.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/challenges/[...slug].astro", _page0],
    ["src/pages/curatorship.astro", _page1],
    ["src/pages/exhibitions.astro", _page2],
    ["src/pages/principles/[...slug].astro", _page3],
    ["src/pages/projects/[...slug].astro", _page4],
    ["src/pages/texts.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "06b2054f-7abe-4283-a474-4995a4f09fb1"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
