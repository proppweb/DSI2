import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CwHDIppT.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/challenges/_---slug_.astro.mjs');
const _page1 = () => import('./pages/curatorship.astro.mjs');
const _page2 = () => import('./pages/en/curatorship.astro.mjs');
const _page3 = () => import('./pages/en/exhibitions.astro.mjs');
const _page4 = () => import('./pages/en/texts.astro.mjs');
const _page5 = () => import('./pages/en.astro.mjs');
const _page6 = () => import('./pages/exhibitions.astro.mjs');
const _page7 = () => import('./pages/principles/_---slug_.astro.mjs');
const _page8 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page9 = () => import('./pages/texts.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/challenges/[...slug].astro", _page0],
    ["src/pages/curatorship.astro", _page1],
    ["src/pages/en/curatorship.astro", _page2],
    ["src/pages/en/exhibitions.astro", _page3],
    ["src/pages/en/texts.astro", _page4],
    ["src/pages/en/index.astro", _page5],
    ["src/pages/exhibitions.astro", _page6],
    ["src/pages/principles/[...slug].astro", _page7],
    ["src/pages/projects/[...slug].astro", _page8],
    ["src/pages/texts.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "43071086-0f48-4e4f-9207-fb880f23cf02"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
