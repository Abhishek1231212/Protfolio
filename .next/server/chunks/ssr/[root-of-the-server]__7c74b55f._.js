module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/portfolio/hooks.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EASE",
    ()=>EASE,
    "useFinePointer",
    ()=>useFinePointer,
    "useMediaQuery",
    ()=>useMediaQuery,
    "useReducedMotionSafe",
    ()=>useReducedMotionSafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useMediaQuery(query) {
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((onChange)=>{
        const list = window.matchMedia(query);
        list.addEventListener('change', onChange);
        return ()=>list.removeEventListener('change', onChange);
    }, [
        query
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, ()=>window.matchMedia(query).matches, ()=>false);
}
const useReducedMotionSafe = ()=>useMediaQuery('(prefers-reduced-motion: reduce)');
const useFinePointer = ()=>useMediaQuery('(hover: hover) and (pointer: fine)');
const EASE = [
    0.16,
    1,
    0.3,
    1
];
}),
"[project]/components/portfolio/lens-cursor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LensCursor",
    ()=>LensCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/portfolio/hooks.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const DOT_SPRING = {
    stiffness: 900,
    damping: 50,
    mass: 0.3
};
const LENS_SPRING = {
    stiffness: 190,
    damping: 22,
    mass: 0.55
};
function LensCursor() {
    const fine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFinePointer"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hot, setHot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [label, setLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const dotX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(x, DOT_SPRING);
    const dotY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(y, DOT_SPRING);
    const lensX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(x, LENS_SPRING);
    const lensY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(y, LENS_SPRING);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!fine) return;
        const root = document.documentElement;
        root.classList.add('has-lens-cursor');
        const handleMove = (event)=>{
            x.set(event.clientX);
            y.set(event.clientY);
            setVisible(true);
            const target = event.target instanceof Element ? event.target : null;
            const labelled = target?.closest('[data-cursor]');
            setLabel(labelled?.dataset.cursor ?? null);
            setHot(!!target?.closest('a, button, [data-cursor]'));
        };
        const handleLeave = (event)=>{
            if (!event.relatedTarget) setVisible(false);
        };
        window.addEventListener('pointermove', handleMove, {
            passive: true
        });
        document.addEventListener('pointerout', handleLeave);
        return ()=>{
            root.classList.remove('has-lens-cursor');
            window.removeEventListener('pointermove', handleMove);
            document.removeEventListener('pointerout', handleLeave);
        };
    }, [
        fine,
        x,
        y
    ]);
    // A new page starts without a stale hover state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setHot(false);
        setLabel(null);
    }, [
        pathname
    ]);
    if (!fine) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: "pointer-events-none fixed inset-0 z-[100]",
        style: {
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.3s'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "absolute top-0 left-0",
                style: {
                    x: lensX,
                    y: lensY
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    className: "glass absolute -top-10 -left-10 grid size-20 place-items-center rounded-full",
                    animate: {
                        scale: label ? 1.35 : hot ? 1.05 : 0.5
                    },
                    transition: {
                        duration: 0.4,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EASE"]
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                        className: "text-[10px] font-semibold tracking-[0.18em] text-ink uppercase",
                        animate: {
                            opacity: label ? 1 : 0
                        },
                        transition: {
                            duration: 0.2
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio/lens-cursor.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/portfolio/lens-cursor.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/portfolio/lens-cursor.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "absolute top-0 left-0",
                style: {
                    x: dotX,
                    y: dotY
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                    className: "absolute -top-[5px] -left-[5px] size-[10px] rounded-full bg-ember ring-2 ring-page",
                    animate: {
                        scale: label ? 0 : hot ? 0.5 : 1
                    },
                    transition: {
                        duration: 0.25,
                        ease: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EASE"]
                    }
                }, void 0, false, {
                    fileName: "[project]/components/portfolio/lens-cursor.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/portfolio/lens-cursor.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/portfolio/lens-cursor.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/portfolio/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers,
    "useLenis",
    ()=>useLenis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const LenisContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const useLenis = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LenisContext);
function Providers({ children }) {
    const [lenis, setLenis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const instance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            lerp: 0.09,
            wheelMultiplier: 0.95,
            smoothWheel: true
        });
        let frame = 0;
        const raf = (time)=>{
            instance.raf(time);
            frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);
        setLenis(instance);
        return ()=>{
            cancelAnimationFrame(frame);
            instance.destroy();
            setLenis(null);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (lenis) lenis.scrollTo(0, {
            immediate: true
        });
        else window.scrollTo(0, 0);
    }, [
        pathname,
        lenis
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LenisContext.Provider, {
        value: lenis,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionConfig"], {
            reducedMotion: "user",
            children: children
        }, void 0, false, {
            fileName: "[project]/components/portfolio/providers.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/portfolio/providers.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/components/portfolio/buttons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowButton",
    ()=>ArrowButton,
    "BrandIcon",
    ()=>BrandIcon,
    "GlassButton",
    ()=>GlassButton,
    "IconButton",
    ()=>IconButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
const isExternal = (href)=>/^(https?:|mailto:|tel:)/.test(href);
function SmartLink({ href, className, style, children, label }) {
    if (isExternal(href)) {
        const newTab = href.startsWith('http');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: className,
            style: style,
            "aria-label": label,
            target: newTab ? '_blank' : undefined,
            rel: newTab ? 'noreferrer' : undefined,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/portfolio/buttons.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: className,
        style: style,
        "aria-label": label,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/portfolio/buttons.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
function ArrowButton({ href, label, tone = 'light', className }) {
    const dark = tone === 'dark';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmartLink, {
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('btn btn-flood', dark ? 'glass-dark btn-outline-light text-page' : 'glass btn-outline text-ink', className),
        style: {
            '--flood': dark ? 'var(--color-ember)' : 'var(--color-ink)'
        },
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "btn-disc",
                style: dark ? {
                    background: 'var(--color-page)',
                    color: 'var(--color-ink)'
                } : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                        strokeWidth: 2.2,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio/buttons.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                        strokeWidth: 2.2,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio/buttons.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio/buttons.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/portfolio/buttons.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function GlassButton({ href, label, tone = 'light', icon, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmartLink, {
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('btn btn-plain lift', tone === 'dark' ? 'glass-dark text-page' : 'glass text-ink', className),
        children: [
            icon,
            label
        ]
    }, void 0, true, {
        fileName: "[project]/components/portfolio/buttons.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
function IconButton({ href, label, tone = 'light', children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SmartLink, {
        href: href,
        label: label,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('focus-ring lift grid size-12 shrink-0 place-items-center rounded-full transition-transform duration-300', tone === 'dark' ? 'glass-dark text-page' : 'glass text-ink'),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/portfolio/buttons.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
function BrandIcon({ name, className = 'size-[18px]' }) {
    const paths = {
        linkedin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v6.35h-4v-5.63c0-1.34-.03-3.07-1.87-3.07-1.88 0-2.17 1.46-2.17 2.97v5.73h-4v-11Z"
        }, void 0, false, {
            fileName: "[project]/components/portfolio/buttons.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this),
        github: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
        }, void 0, false, {
            fileName: "[project]/components/portfolio/buttons.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this),
        instagram: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.75a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1Zm4.9-8.98a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM12 3c-2.44 0-2.75.01-3.71.05-.96.05-1.62.2-2.19.42a4.4 4.4 0 0 0-1.6 1.04 4.4 4.4 0 0 0-1.03 1.6c-.23.57-.38 1.22-.42 2.18C3.01 9.25 3 9.56 3 12s.01 2.75.05 3.71c.05.96.2 1.62.42 2.19.23.6.54 1.1 1.04 1.6.5.5 1 .8 1.6 1.03.57.23 1.22.38 2.18.42.96.04 1.27.05 3.71.05s2.75-.01 3.71-.05c.96-.05 1.62-.2 2.19-.42a4.6 4.6 0 0 0 2.63-2.63c.23-.57.38-1.22.42-2.18.04-.96.05-1.27.05-3.71s-.01-2.75-.05-3.71c-.05-.96-.2-1.62-.42-2.19a4.4 4.4 0 0 0-1.04-1.6 4.4 4.4 0 0 0-1.6-1.03c-.57-.23-1.22-.38-2.18-.42C14.75 3.01 14.44 3 12 3Zm0 1.62c2.4 0 2.69.01 3.64.05.88.04 1.35.19 1.67.31.42.16.72.36 1.03.67.32.31.51.61.67 1.03.12.32.27.8.31 1.67.04.95.05 1.24.05 3.64s-.01 2.69-.05 3.64c-.04.88-.19 1.35-.31 1.67-.16.42-.36.72-.67 1.03-.31.32-.61.51-1.03.67-.32.12-.8.27-1.67.31-.95.04-1.24.05-3.64.05s-2.69-.01-3.64-.05c-.88-.04-1.35-.19-1.67-.31a2.8 2.8 0 0 1-1.03-.67 2.8 2.8 0 0 1-.67-1.03c-.12-.32-.27-.8-.31-1.67-.04-.95-.05-1.24-.05-3.64s.01-2.69.05-3.64c.04-.88.19-1.35.31-1.67.16-.42.36-.72.67-1.03.31-.32.61-.51 1.03-.67.32-.12.8-.27 1.67-.31.95-.04 1.24-.05 3.64-.05Z"
        }, void 0, false, {
            fileName: "[project]/components/portfolio/buttons.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this),
        youtube: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z"
        }, void 0, false, {
            fileName: "[project]/components/portfolio/buttons.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this),
        x: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.2h1.7L7.4 4.73H5.58L16.67 19.2Z"
        }, void 0, false, {
            fileName: "[project]/components/portfolio/buttons.tsx",
            lineNumber: 91,
            columnNumber: 8
        }, this),
        whatsapp: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12.04 2a9.9 9.9 0 0 0-8.5 14.97L2 22l5.17-1.5A9.92 9.92 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.07.89.9-2.99-.2-.31a8.2 8.2 0 1 1 6.86 3.74Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.96-.15.17-.29.19-.54.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.71c-.14-.25 0-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.48a.92.92 0 0 0-.66.31 2.78 2.78 0 0 0-.87 2.07 4.83 4.83 0 0 0 1.01 2.57 11.06 11.06 0 0 0 4.24 3.74c.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z"
        }, void 0, false, {
            fileName: "[project]/components/portfolio/buttons.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        className: className,
        fill: "currentColor",
        "aria-hidden": true,
        children: paths[name]
    }, void 0, false, {
        fileName: "[project]/components/portfolio/buttons.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/portfolio/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Everything the portfolio says lives here, so updating the site means editing this one file.
 * Experience comes from the resume; contact details are placeholders to replace.
 */ __turbopack_context__.s([
    "ABOUT",
    ()=>ABOUT,
    "CONTACT",
    ()=>CONTACT,
    "EDUCATION",
    ()=>EDUCATION,
    "EXPERIENCE",
    ()=>EXPERIENCE,
    "NAV",
    ()=>NAV,
    "PROCESS",
    ()=>PROCESS,
    "PROFILE",
    ()=>PROFILE,
    "PROJECTS",
    ()=>PROJECTS,
    "SERVICES",
    ()=>SERVICES,
    "SKILL_GROUPS",
    ()=>SKILL_GROUPS
]);
const PROFILE = {
    first: 'Abhishek',
    last: 'Bichala',
    role: 'Senior Software Engineer',
    roles: [
        'Senior Software Engineer',
        'Full Stack',
        'Freelancer'
    ],
    location: 'Hyderabad, India',
    headline: 'I build software that quietly works, at scale.',
    intro: 'Event-driven Java and Spring Boot services, React frontends, and the patience to make slow things fast. Five years across marketing automation, e-commerce and finance.',
    availability: 'Open to freelance work',
    /**
   * The cut-out portrait: a transparent PNG cropped just below the hands, standing on the hero's bottom edge.
   * To swap it, replace public/portrait.png and update the size below. Set portrait to null to show the drawn placeholder.
   */ portrait: '/portrait.png',
    portraitWidth: 822,
    portraitHeight: 1032,
    portraitAlt: 'Abhishek Bichala in a black jacket and sunglasses, sitting with his hands clasped'
};
const NAV = {
    left: [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'About me',
            href: '/about'
        }
    ],
    right: [
        {
            label: 'Experience',
            href: '/experience'
        },
        {
            label: 'Freelance',
            href: '/freelance'
        }
    ],
    cta: {
        label: 'Contact',
        href: '/contact'
    }
};
const ABOUT = {
    statement: "enior Software Engineer with 6+ years building event-driven Java/Spring Boot microservices and React frontends across marketing-automation, e-commerce and finance domains. Experienced in Kafka-based async processing, API and PostgreSQL performance tuning, Redis caching and secure OAuth2 APIs. Owns features from design through production support, and mentors junior engineers.",
    story: [
        "By day I'm a Senior Software Engineer at Oracle, building the event-driven services behind an enterprise marketing-automation platform. Before that I helped move Ford's e-commerce payments onto microservices at Grid Dynamics, and built finance applications for HAVI at EPAM.",
        "Outside the day job I help people get ready for interviews, design websites and apps, and make content about what I learn along the way. If something here sounds like you, I'd genuinely like to hear from you."
    ],
    details: [
        {
            label: 'Name',
            value: 'Abhishek Bichala'
        },
        {
            label: 'Role',
            value: 'Senior Software Engineer'
        },
        {
            label: 'Based in',
            value: 'Hyderabad, India'
        },
        {
            label: 'Experience',
            value: '6+ years'
        },
        {
            label: 'Currently',
            value: 'Oracle India'
        },
        {
            label: 'Education',
            value: 'B.Tech CSE · CGPA 9.0'
        },
        {
            label: 'Open to',
            value: 'Freelance & collaborations'
        }
    ],
    stats: [
        {
            value: 6,
            suffix: '+',
            label: 'Years building production software'
        },
        {
            value: 100,
            suffix: 'K+',
            label: 'Kafka events published a day'
        },
        {
            value: 60,
            suffix: '%',
            label: 'Faster campaign API after tuning'
        },
        {
            value: 90,
            suffix: '%+',
            label: 'Unit-test coverage on payments'
        }
    ],
    values: [
        {
            title: 'Own it end to end',
            text: 'From the first design discussion to the production fix, I stay with a feature until it works for the people using it.'
        },
        {
            title: 'Make it fast',
            text: 'I like finding the one slow query or missing cache that is quietly costing everyone time, and fixing it properly.'
        },
        {
            title: 'Lift people up',
            text: 'I mentor junior engineers and review code with care. The best teams I have worked in taught each other constantly.'
        }
    ],
    skills: [
        'Java 17',
        'Spring Boot',
        'Apache Kafka',
        'React',
        'TypeScript',
        'PostgreSQL',
        'Redis',
        'Microservices',
        'AWS',
        'OCI',
        'Docker',
        'Kubernetes',
        'OAuth2',
        'MongoDB',
        'Jenkins',
        'Grafana',
        'Python',
        'JUnit'
    ]
};
const EXPERIENCE = [
    {
        role: 'Senior Software Engineer',
        company: 'Oracle India',
        location: 'Hyderabad',
        period: 'Mar 2025 — Present',
        current: true,
        context: 'Enterprise marketing-automation platform',
        stack: [
            'Java',
            'Spring Boot',
            'Kafka',
            'PostgreSQL',
            'Redis',
            'React / VBCS',
            'OCI / AWS'
        ],
        highlights: [
            'Build Spring Boot microservices and ~100 REST APIs across 5 services for segment scheduling, email campaigns, landing pages and follow-up triggers, serving ~2,500 daily users and ~10K requests an hour.',
            'Publish campaign and trigger events to Kafka (~100K messages a day) with duplicate handling, so retried or redelivered events never re-trigger campaign actions.',
            'Cut a slow campaign API from ~10s to ~4s (60%) by reading PostgreSQL execution plans across sharded schemas and reworking queries and indexes.',
            'Introduced Redis caching for marketing templates, removing repeated database reads from a heavily used flow.',
            'Own production support across services, Kafka and the database using logs and Grafana, and mentor 2–3 junior engineers.'
        ]
    },
    {
        role: 'Full Stack Developer',
        company: 'Grid Dynamics',
        location: 'Hyderabad',
        period: 'Mar 2024 — Mar 2025',
        current: false,
        context: 'E-commerce platform for Ford',
        stack: [
            'Java 11',
            'Spring Boot',
            'Kafka',
            'React',
            'OAuth2'
        ],
        highlights: [
            'Led the migration of a monolithic payment gateway to Spring Boot microservices, so payment components deploy and scale independently.',
            'Built the React checkout and payment-handling flow for the customer-facing website.',
            'Built Kafka-based real-time event processing in Java 11 handling ~10K messages an hour.',
            'Engineered secure payment APIs with Spring Security and OAuth2, and kept unit-test coverage above 90%.'
        ]
    },
    {
        role: 'Associate Software Engineer',
        company: 'EPAM Systems',
        location: 'Hyderabad',
        period: 'Feb 2021 — Mar 2024',
        current: false,
        context: 'Finance applications for HAVI',
        stack: [
            'Java',
            'Spring Boot',
            'Kafka',
            'React',
            'Swagger'
        ],
        highlights: [
            'Developed Spring Boot REST APIs and Kafka integrations for finance applications handling ~10K API calls an hour.',
            'Designed and documented 50+ RESTful endpoints with Swagger / OpenAPI alongside the product team.',
            'Migrated legacy jQuery pages to React, making the frontend far easier to maintain.',
            'Reduced the open bug backlog by 60% in six months by adding automated integration tests.'
        ]
    }
];
const SKILL_GROUPS = [
    {
        title: 'Languages',
        icon: 'languages',
        items: [
            'Java 8 / 17',
            'JavaScript (ES6+)',
            'TypeScript',
            'SQL',
            'Python',
            'HTML5',
            'CSS3'
        ]
    },
    {
        title: 'Backend',
        icon: 'backend',
        items: [
            'Spring Boot',
            'Spring Security (OAuth2)',
            'Spring Data JPA',
            'Hibernate',
            'REST APIs',
            'Microservices'
        ]
    },
    {
        title: 'Messaging',
        icon: 'messaging',
        items: [
            'Apache Kafka',
            'AWS SQS',
            'Event-driven architecture'
        ]
    },
    {
        title: 'Frontend',
        icon: 'frontend',
        items: [
            'React.js',
            'Redux',
            'Context API',
            'Oracle VBCS'
        ]
    },
    {
        title: 'Databases',
        icon: 'databases',
        items: [
            'PostgreSQL (sharded schemas)',
            'MySQL',
            'MongoDB',
            'Redis'
        ]
    },
    {
        title: 'Cloud & DevOps',
        icon: 'cloud',
        wide: true,
        items: [
            'AWS EC2',
            'AWS S3',
            'AWS RDS',
            'AWS SQS',
            'OCI',
            'Azure',
            'Docker',
            'Kubernetes',
            'Jenkins CI/CD',
            'Git / GitHub',
            'Grafana'
        ]
    },
    {
        title: 'Testing & Docs',
        icon: 'testing',
        items: [
            'JUnit',
            'Mockito',
            'Swagger / OpenAPI'
        ]
    }
];
const PROJECTS = [
    {
        title: 'Event-driven architecture',
        text: 'Java services that talk asynchronously through Apache Kafka and AWS SQS, built to explore reliable messaging patterns.',
        stack: [
            'Spring Boot',
            'Kafka',
            'AWS SQS'
        ],
        href: 'https://github.com/your-handle'
    }
];
const EDUCATION = {
    degree: 'B.Tech, Computer Science',
    school: 'Vardhaman College of Engineering, Hyderabad',
    period: '2016 — 2020',
    note: 'CGPA 9.0 / 10'
};
const SERVICES = [
    {
        icon: 'code',
        title: 'Software projects',
        text: 'Web apps, REST APIs and backend systems built to last, from a first MVP to production-grade microservices.',
        tags: [
            'Full stack',
            'APIs',
            'Microservices'
        ]
    },
    {
        icon: 'interview',
        title: 'Interview preparation',
        text: 'Mock interviews, DSA and system-design practice, and honest resume reviews for software engineering roles.',
        tags: [
            'Mock interviews',
            'System design',
            'Resume review'
        ]
    },
    {
        icon: 'website',
        title: 'Website design',
        text: 'Fast, responsive websites with a clear story, designed and built end to end so they are easy to update.',
        tags: [
            'Landing pages',
            'Portfolios',
            'Business sites'
        ]
    },
    {
        icon: 'app',
        title: 'App design',
        text: 'Mobile and web app UI/UX, from wireframes and flows to polished, clickable prototypes ready to build.',
        tags: [
            'UI / UX',
            'Prototypes',
            'Design systems'
        ]
    },
    {
        icon: 'content',
        title: 'Content creation',
        text: 'Tech videos, posts and explainers that make engineering topics simple, useful and easy to follow.',
        tags: [
            'Videos',
            'Explainers',
            'Tutorials'
        ]
    },
    {
        icon: 'ugc',
        title: 'UGC ads',
        text: 'Authentic, creator-style video ads for tech products and apps that feel native to the feed.',
        tags: [
            'Short-form',
            'Product demos',
            'Reviews'
        ]
    }
];
const PROCESS = [
    {
        step: '01',
        title: 'Talk',
        text: 'A short call to understand what you need and why.'
    },
    {
        step: '02',
        title: 'Plan',
        text: 'A clear scope, timeline and quote, with no surprises.'
    },
    {
        step: '03',
        title: 'Build',
        text: 'Regular updates you can see and react to as it comes together.'
    },
    {
        step: '04',
        title: 'Launch',
        text: 'Shipped, handed over, and supported after go-live.'
    }
];
const CONTACT = {
    email: 'abhishekbichala123121@gmail.com',
    phone: '+91 99490 04765',
    phoneHref: 'tel:+919949004765',
    whatsappHref: 'https://wa.me/919949004765',
    socials: [
        {
            label: 'LinkedIn',
            handle: '@your-handle',
            href: 'https://www.linkedin.com/in/abhishekbichala',
            icon: 'linkedin'
        },
        {
            label: 'GitHub',
            handle: '@your-handle',
            href: 'https://github.com/Abhishek1231212',
            icon: 'github'
        },
        {
            label: 'Instagram',
            handle: '@your-handle',
            href: 'https://www.instagram.com/MotoTechMiles',
            icon: 'instagram'
        },
        {
            label: 'YouTube',
            handle: '@your-channel',
            href: 'https://www.youtube.com/@MotoTechMiles',
            icon: 'youtube'
        },
        {
            label: 'X',
            handle: '@your-handle',
            href: 'https://x.com/your-handle',
            icon: 'x'
        }
    ]
};
}),
"[project]/components/portfolio/site-nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteNav",
    ()=>SiteNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cn/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/portfolio/buttons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/portfolio/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/portfolio/hooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$providers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/portfolio/providers.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const ALL_LINKS = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV"].left,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV"].right
];
const isActive = (pathname, href)=>href === '/' ? pathname === '/' : pathname.startsWith(href);
function NavItem({ label, href, current, active, onHover }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            "aria-current": active ? 'page' : undefined,
            onPointerEnter: ()=>onHover(href),
            onFocus: ()=>onHover(href),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('focus-ring relative isolate inline-flex min-h-11 items-center gap-2 rounded-full px-[18px] text-[13.5px] font-medium tracking-[0.08em] whitespace-nowrap uppercase transition-colors duration-300', active ? 'text-ember' : 'text-ink'),
            children: [
                current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                    layoutId: "nav-oval",
                    className: "nav-oval",
                    transition: {
                        type: 'spring',
                        stiffness: 420,
                        damping: 34,
                        mass: 0.8
                    }
                }, void 0, false, {
                    fileName: "[project]/components/portfolio/site-nav.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this),
                active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": true,
                    className: "size-1.5 rounded-full bg-ember"
                }, void 0, false, {
                    fileName: "[project]/components/portfolio/site-nav.tsx",
                    lineNumber: 34,
                    columnNumber: 20
                }, this),
                label
            ]
        }, void 0, true, {
            fileName: "[project]/components/portfolio/site-nav.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/portfolio/site-nav.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function SiteNav() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$providers$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollY, 'change', (value)=>setScrolled(value > 24));
    const activeHref = ALL_LINKS.find((link)=>isActive(pathname, link.href))?.href ?? null;
    const ovalHref = hovered ?? activeHref;
    // The menu closes on navigation, and the page underneath holds still while it is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setOpen(false), [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (open) lenis?.stop();
        else lenis?.start();
        document.documentElement.style.overflow = open ? 'hidden' : '';
    }, [
        open,
        lenis
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const handleKey = (event)=>event.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', handleKey);
        return ()=>window.removeEventListener('keydown', handleKey);
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:pt-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].nav, {
                "aria-label": "Main",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('glass mx-auto hidden max-w-[1240px] grid-cols-[1fr_auto_1fr] items-center rounded-full py-2 pr-2 pl-4 transition-shadow duration-500 lg:grid', scrolled && 'shadow-[0_24px_50px_-20px_rgb(23_20_18/0.4)]'),
                initial: {
                    y: -24,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.9,
                    ease: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EASE"]
                },
                onPointerLeave: ()=>setHovered(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex justify-end gap-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV"].left.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                ...link,
                                current: ovalHref === link.href,
                                active: activeHref === link.href,
                                onHover: setHovered
                            }, link.href, false, {
                                fileName: "[project]/components/portfolio/site-nav.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio/site-nav.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "focus-ring display rounded-full px-7 text-[30px] tracking-[-0.045em] text-ember",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROFILE"].first
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio/site-nav.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex gap-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV"].right.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                                        ...link,
                                        current: ovalHref === link.href,
                                        active: activeHref === link.href,
                                        onHover: setHovered
                                    }, link.href, false, {
                                        fileName: "[project]/components/portfolio/site-nav.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/portfolio/site-nav.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowButton"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV"].cta.href,
                                label: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV"].cta.label
                            }, void 0, false, {
                                fileName: "[project]/components/portfolio/site-nav.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/portfolio/site-nav.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio/site-nav.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass relative z-10 flex items-center justify-between rounded-full py-1.5 pr-1.5 pl-5 lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "focus-ring display rounded-full text-[24px] tracking-[-0.045em] text-ember",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROFILE"].first
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio/site-nav.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": open ? 'Close menu' : 'Open menu',
                        "aria-expanded": open,
                        "aria-controls": "mobile-menu",
                        onClick: ()=>setOpen((value)=>!value),
                        className: "focus-ring grid size-11 cursor-pointer place-items-center rounded-full bg-ember text-white",
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "size-5"
                        }, void 0, false, {
                            fileName: "[project]/components/portfolio/site-nav.tsx",
                            lineNumber: 124,
                            columnNumber: 19
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "size-5"
                        }, void 0, false, {
                            fileName: "[project]/components/portfolio/site-nav.tsx",
                            lineNumber: 124,
                            columnNumber: 46
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/portfolio/site-nav.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/portfolio/site-nav.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                            className: "fixed inset-0 bg-ink/20 backdrop-blur-[2px] lg:hidden",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: ()=>setOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/components/portfolio/site-nav.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].nav, {
                            id: "mobile-menu",
                            "aria-label": "Mobile",
                            className: "glass absolute inset-x-4 top-[76px] rounded-[28px] p-3 sm:inset-x-6 lg:hidden",
                            initial: {
                                opacity: 0,
                                y: -14,
                                scale: 0.97
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: -10,
                                scale: 0.98
                            },
                            transition: {
                                duration: 0.4,
                                ease: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EASE"]
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "grid gap-1",
                                children: [
                                    ...ALL_LINKS,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV"].cta
                                ].map((link, index)=>{
                                    const active = isActive(pathname, link.href);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].li, {
                                        initial: {
                                            opacity: 0,
                                            x: -10
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.05 + index * 0.05,
                                            duration: 0.4,
                                            ease: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$portfolio$2f$hooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EASE"]
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            "aria-current": active ? 'page' : undefined,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('focus-ring flex min-h-14 items-center justify-between rounded-full px-5 text-[17px] font-medium tracking-[0.06em] uppercase', active ? 'bg-white/70 text-ember' : 'text-ink'),
                                            children: [
                                                link.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    className: "size-4 opacity-50"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/portfolio/site-nav.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/portfolio/site-nav.tsx",
                                            lineNumber: 158,
                                            columnNumber: 23
                                        }, this)
                                    }, link.href, false, {
                                        fileName: "[project]/components/portfolio/site-nav.tsx",
                                        lineNumber: 152,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/portfolio/site-nav.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/portfolio/site-nav.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/portfolio/site-nav.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/portfolio/site-nav.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7c74b55f._.js.map