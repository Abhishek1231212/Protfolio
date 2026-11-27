(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/abhishek-author-hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbhishekAuthorHero",
    ()=>AbhishekAuthorHero,
    "abhishek",
    ()=>AbhishekAuthorHero,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * abhishek: an editorial author hero. A giant outlined name, a cut-out portrait, a hardcover book carousel, a letter
 * to tomorrow that writes itself, an ink splash intro and an ink-spotlight cursor.
 *
 * Content lives in props (see abhishekProps); the demo supplies the original author, books and letter.
 *
 * Dependencies: motion (motion/react), lucide-react
 * Fonts: the design uses Inter (900), Figtree (300-600) and IBM Plex Mono (400); load them in the host page, the
 * component falls back to the system sans stack until they are available.
 *
 * Usage: <AbhishekAuthorHero name={{ first: 'Ada', last: 'Lovelace' }} intro={{ roles: ['Author'], headline: ['Hello'], description: '...' }} />
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/features-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-template.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRightIcon>");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "radial-gradient(circle ",
        "px at 50% 50%, transparent ",
        "px, #000 ",
        "px)"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "",
        "px"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "",
        "px"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "",
        "px"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature(), _s15 = __turbopack_context__.k.signature();
'use client';
;
;
;
// Joins the truthy class names; the block's classes are passed through untouched
const cn = function() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter(Boolean).join(' ');
};
/* ----------------------------- Defaults ----------------------------- */ // One long, soft ease-out shared by every reveal, so the pieces feel like one sequence
const EASE = [
    0.16,
    1,
    0.3,
    1
];
const DEFAULT_MOTION = {
    delays: {
        nav: 0,
        first: 0.1,
        last: 0.25,
        portrait: 0.4,
        book: 0.6,
        pad: 0.7,
        intro: 0.8,
        socials: 1.15
    },
    letterStagger: 0.055,
    depth: {
        portrait: 14,
        first: 6,
        last: 9
    },
    letter: {
        perCharacter: 0.075,
        pauseAfterPunctuation: 0.36,
        beforeSeal: 1.4,
        press: 0.8,
        sealHold: 4.8
    },
    bookTilt: 14,
    bookOpen: 34,
    bookCycle: 3,
    spotlight: {
        radius: 145,
        readyAfter: 2.1
    },
    cursor: {
        dot: 10,
        ring: 44,
        disc: 72,
        readLabel: 'Click'
    }
};
const DEFAULT_SPLASH = {
    drawAt: 0.1,
    drawDuration: 0.75,
    floodAt: 0.7,
    floodDuration: 0.65,
    openAt: 1.4,
    openDuration: 0.85,
    fontTimeout: 1.2
};
// When the cursor effects run: a mouse or trackpad, and the wide composition where the layers line up exactly
const MEDIA = {
    finePointer: '(hover: hover) and (pointer: fine)',
    composition: '(min-width: 1024px) and (min-aspect-ratio: 5/4)',
    reducedMotion: '(prefers-reduced-motion: reduce)'
};
const EMPTY_LETTER = {
    eyebrow: '',
    greeting: '',
    stamp: '',
    postmark: '',
    seal: '',
    sealing: '',
    messages: [],
    counter: ''
};
const abhishekContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useAbhishek = ()=>{
    _s();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(abhishekContext);
    if (!value) throw new Error('abhishek parts must render inside <AbhishekAuthorHero>');
    return value;
};
_s(useAbhishek, "ksutO2/Ix3UeCrGnhyM+QEP505Y=");
// The visitor's reduced-motion setting, unless the reducedMotion prop forces it. Read through useMediaQuery so the
// first client render matches the server (false) and avoids a hydration mismatch when reduced motion is on
const useReduce = ()=>{
    _s1();
    const { REDUCED } = useAbhishek();
    const system = useMediaQuery(MEDIA.reducedMotion);
    return REDUCED !== null && REDUCED !== void 0 ? REDUCED : system;
};
_s1(useReduce, "Znpj0Pa2Wk3xBTPwDp4mSyeIkc4=", false, function() {
    return [
        useAbhishek,
        useMediaQuery
    ];
});
/* ----------------------------- Parts ----------------------------- */ /**
 * Whether the hero's entrance may play. The splash holds it back and flips it the moment it opens onto the hero;
 * every entrance delay counts from that moment
 */ const IntroContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(true);
const useIntroStarted = ()=>{
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(IntroContext);
};
_s2(useIntroStarted, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
// Whether the hero is on screen in a visible tab; the self-running loops (letter, books) hold while it isn't
const OnScreenContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(true);
const useHeroOnScreen = ()=>{
    _s3();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OnScreenContext);
};
_s3(useHeroOnScreen, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
// Whether a media query matches, kept in sync as the window or device changes; false on the server
const useMediaQuery = (query)=>{
    _s4();
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMediaQuery.useCallback[subscribe]": (onChange)=>{
            const list = window.matchMedia(query);
            list.addEventListener('change', onChange);
            return ({
                "useMediaQuery.useCallback[subscribe]": ()=>list.removeEventListener('change', onChange)
            })["useMediaQuery.useCallback[subscribe]"];
        }
    }["useMediaQuery.useCallback[subscribe]"], [
        query
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, {
        "useMediaQuery.useSyncExternalStore": ()=>window.matchMedia(query).matches
    }["useMediaQuery.useSyncExternalStore"], {
        "useMediaQuery.useSyncExternalStore": ()=>false
    }["useMediaQuery.useSyncExternalStore"]);
};
_s4(useMediaQuery, "cjEjpY+sFKDo3+VqKvsXGsAth/s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
/**
 * One reveal's timing: the shared ease from its delay, or instant when the visitor asks for reduced motion, so
 * the hero simply appears in its final state
 */ const reveal = function(reduceMotion, delay) {
    let duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    return reduceMotion ? {
        duration: 0
    } : {
        delay,
        duration,
        ease: EASE
    };
};
/**
 * The ink filters, applied in CSS by id. ea-ink-duotone maps the portrait's brightness from ink through a warm
 * dark grey (so the coat keeps its texture) and the accent orange to the page colour. ea-ink-outline keeps
 * only a 2px band inside each letter's silhouette.
 */ const AuthorInkFilters = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "0",
        height: "0",
        "aria-hidden": true,
        focusable: "false",
        className: "absolute",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                id: "ea-ink-duotone",
                colorInterpolationFilters: "sRGB",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                        type: "matrix",
                        values: "0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0 0 0 1 0"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComponentTransfer", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFuncR", {
                                type: "table",
                                tableValues: "0.090 0.25 1 0.965"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFuncG", {
                                type: "table",
                                tableValues: "0.078 0.215 0.282 0.957"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFuncB", {
                                type: "table",
                                tableValues: "0.071 0.195 0.161 0.941"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                id: "ea-ink-outline",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMorphology", {
                        in: "SourceAlpha",
                        operator: "erode",
                        radius: "2",
                        result: "inside"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                        in: "SourceGraphic",
                        in2: "inside",
                        operator: "out"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 284,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AuthorInkFilters;
// Cover art for Small Days, Long Life: a calendar of small days in sky blue, with one day marked in coral
const AuthorCoverDays = (props)=>{
    // Five days across, four weeks down; the marked day sits in the third week
    const days = Array.from({
        length: 20
    }, (_, index)=>({
            x: 20 + index % 5 * 15,
            y: 84 + Math.floor(index / 5) * 11,
            marked: index === 12
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 100 139",
        preserveAspectRatio: "xMidYMid slice",
        "aria-hidden": true,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "100",
                height: "139",
                fill: "#d3e6f1"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 319,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            days.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: day.x,
                    cy: day.y,
                    r: day.marked ? 5 : 3.4,
                    fill: day.marked ? '#ff9f80' : '#a3c8de'
                }, "".concat(day.x, "-").concat(day.y), false, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 321,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 318,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = AuthorCoverDays;
// Cover art for Deep Work, Light Life: a stack of books under the warm round glow of a desk lamp, in sage
const AuthorCoverLamp = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 100 139",
        preserveAspectRatio: "xMidYMid slice",
        "aria-hidden": true,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "100",
                height: "139",
                fill: "#d3e3d2"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 339,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "70",
                cy: "86",
                r: "30",
                fill: "#e6efdf"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "70",
                cy: "86",
                r: "14",
                fill: "#f6efd9"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "12",
                y: "112",
                width: "56",
                height: "10",
                rx: "1.5",
                fill: "#8fb59a"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "18",
                y: "102",
                width: "46",
                height: "10",
                rx: "1.5",
                fill: "#a9c8b1"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "92",
                width: "40",
                height: "10",
                rx: "1.5",
                fill: "#f2e9d6"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "122",
                width: "100",
                height: "17",
                fill: "#bcd4bd"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 338,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = AuthorCoverLamp;
// Cover art for Notes on Being Here: a winding walking path with footsteps along it and a pale moon, in lavender
const AuthorCoverPath = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 100 139",
        preserveAspectRatio: "xMidYMid slice",
        "aria-hidden": true,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "100",
                height: "139",
                fill: "#e2daf0"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "84",
                cy: "30",
                r: "7",
                fill: "#f6f1fb"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M92 139c-10-14-34-14-30-28s24-12 14-26-46-6-50-18",
                fill: "none",
                stroke: "#b4a6d8",
                strokeWidth: "8",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "#f6f1fb",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "79",
                        cy: "128",
                        r: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 366,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "65",
                        cy: "116",
                        r: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "73",
                        cy: "100",
                        r: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "60",
                        cy: "88",
                        r: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "42",
                        cy: "82",
                        r: "1.6"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 355,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = AuthorCoverPath;
// Cover art for A More Intentional Life: a soft peach sun rising over a ruled horizon
const AuthorCoverSunrise = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 100 139",
        preserveAspectRatio: "xMidYMid slice",
        "aria-hidden": true,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "100",
                height: "139",
                fill: "#f8dccb"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "50",
                cy: "96",
                r: "38",
                fill: "#fbe7da"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 96a30 30 0 0 1 60 0Z",
                fill: "#ff9f80"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                y: "96",
                width: "100",
                height: "43",
                fill: "#f3c7ae"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "104",
                width: "72",
                height: "2.4",
                rx: "1.2",
                fill: "#eab295"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "24",
                y: "112",
                width: "52",
                height: "2.4",
                rx: "1.2",
                fill: "#eab295"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "34",
                y: "120",
                width: "32",
                height: "2.4",
                rx: "1.2",
                fill: "#eab295"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = AuthorCoverSunrise;
/**
 * The hero's one button style: an outlined pill with an orange disc. On hover ink floods the pill outward from the
 * disc, the label turns to the page colour, and the arrow leaves its disc as a fresh one slides in.
 */ const InkButton = (param)=>{
    let { label, icon = 'right', href, disabled = false, onClick, className } = param;
    // Vars
    const Arrow = icon === 'up-right' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRightIcon$3e$__["ArrowUpRightIcon"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"];
    const classes = cn('ea-cta', icon === 'up-right' && 'ea-cta-diagonal', className);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ea-cta-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "ea-cta-mark",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                        className: "ea-cta-arrow ea-cta-arrow-out",
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                        className: "ea-cta-arrow ea-cta-arrow-in",
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: classes,
            children: content
        }, void 0, false, {
            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
            lineNumber: 425,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: classes,
        disabled: disabled,
        onClick: onClick,
        children: content
    }, void 0, false, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 432,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = InkButton;
/**
 * Splitting a word into letters drops the font's kerning between them, so each pair's kerning is measured once
 * the font has loaded and given back as a margin; the settled word then matches the unsplit one exactly
 */ const measureKerning = (element, text)=>{
    const context = document.createElement('canvas').getContext('2d');
    if (!context) return [];
    const style = getComputedStyle(element);
    // Measured as drawn: an uppercased name kerns its capitals, not the lowercase letters in the config
    const shown = style.textTransform === 'uppercase' ? text.toUpperCase() : text;
    context.font = "".concat(style.fontWeight, " 100px ").concat(style.fontFamily);
    const width = (value)=>context.measureText(value).width;
    return [
        ...shown
    ].map((letter, index)=>{
        const next = shown[index + 1];
        return next ? (width(letter + next) - width(letter) - width(next)) / 100 : 0;
    });
};
const MaskedWord = (param)=>{
    let { text, delay, from, reverse = false } = param;
    _s5();
    // Context
    const { MOTION } = useAbhishek();
    // States
    const [kerning, setKerning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Refs
    const wordRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hooks
    const reduceMotion = useReduce();
    const started = useIntroStarted();
    // Vars
    const letters = [
        ...text
    ];
    const offset = from === 'below' ? '105%' : '-105%';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MaskedWord.useEffect": ()=>{
            let active = true;
            document.fonts.ready.then({
                "MaskedWord.useEffect": ()=>{
                    if (active && wordRef.current) setKerning(measureKerning(wordRef.current, text));
                }
            }["MaskedWord.useEffect"]);
            return ({
                "MaskedWord.useEffect": ()=>{
                    active = false;
                }
            })["MaskedWord.useEffect"];
        }
    }["MaskedWord.useEffect"], [
        text
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: wordRef,
        "aria-hidden": true,
        className: "inline-block whitespace-nowrap",
        children: letters.map((letter, index)=>{
            const order = reverse ? letters.length - 1 - index : index;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ea-letter-mask inline-block",
                style: kerning[index] ? {
                    marginRight: "".concat(kerning[index], "em")
                } : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                    className: "inline-block",
                    initial: {
                        transform: "translateY(".concat(offset, ")")
                    },
                    animate: started ? {
                        transform: 'translateY(0%)'
                    } : undefined,
                    transition: reveal(reduceMotion, delay + order * MOTION.letterStagger, 1.05),
                    children: letter
                }, void 0, false, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 522,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, "".concat(letter, "-").concat(index), false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 517,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 512,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s5(MaskedWord, "tTnNtfuttuX8OuW/E/tPRRj7Wg8=", false, function() {
    return [
        useAbhishek,
        useReduce,
        useIntroStarted
    ];
});
_c6 = MaskedWord;
// The ring trails the dot a little, so the pair reads as ink and the light it throws
const TRAIL_SPRING = {
    stiffness: 420,
    damping: 34,
    mass: 0.5
};
const modeFor = (target)=>{
    if (!(target instanceof Element)) return 'dot';
    if (target.closest('.ea-book-frame')) return 'read';
    if (target.closest('a, button')) return 'link';
    return 'dot';
};
/**
 * The hero's cursor: an orange ink dot rimmed in the page colour, so it shows on orange, ink and cream alike.
 * Over a link it opens into a thin orange ring; over the book it becomes a solid disc that reads "Click".
 */ const InkCursor = ()=>{
    _s6();
    // States
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dot');
    // Refs
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('dot');
    // Hooks
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(-100);
    const visible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const trailX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(x, TRAIL_SPRING);
    const trailY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(y, TRAIL_SPRING);
    // Vars
    const { MOTION } = useAbhishek();
    const { dot, ring, disc, readLabel } = MOTION.cursor;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InkCursor.useEffect": ()=>{
            var _rootRef_current;
            const hero = (_rootRef_current = rootRef.current) === null || _rootRef_current === void 0 ? void 0 : _rootRef_current.parentElement;
            if (!hero) return;
            // Positioned within the hero, which is the cursor's containing block
            const handleMove = {
                "InkCursor.useEffect.handleMove": (event)=>{
                    const rect = hero.getBoundingClientRect();
                    const next = modeFor(event.target);
                    x.set(event.clientX - rect.left);
                    y.set(event.clientY - rect.top);
                    visible.set(1);
                    if (next !== modeRef.current) {
                        modeRef.current = next;
                        setMode(next);
                    }
                }
            }["InkCursor.useEffect.handleMove"];
            const handleLeave = {
                "InkCursor.useEffect.handleLeave": ()=>visible.set(0)
            }["InkCursor.useEffect.handleLeave"];
            hero.addEventListener('pointermove', handleMove, {
                passive: true
            });
            hero.addEventListener('pointerleave', handleLeave);
            return ({
                "InkCursor.useEffect": ()=>{
                    hero.removeEventListener('pointermove', handleMove);
                    hero.removeEventListener('pointerleave', handleLeave);
                }
            })["InkCursor.useEffect"];
        }
    }["InkCursor.useEffect"], [
        x,
        y,
        visible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0 z-[60] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].div, {
                className: "absolute top-0 left-0",
                style: {
                    x: trailX,
                    y: trailY,
                    opacity: visible
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].div, {
                        className: "border-ea-accent absolute rounded-full border-[1.5px]",
                        style: {
                            width: ring,
                            height: ring,
                            left: -ring / 2,
                            top: -ring / 2
                        },
                        initial: {
                            transform: 'scale(0.2)',
                            opacity: 0
                        },
                        animate: mode === 'link' ? {
                            transform: 'scale(1)',
                            opacity: 1
                        } : {
                            transform: 'scale(0.2)',
                            opacity: 0
                        },
                        transition: {
                            duration: 0.35,
                            ease: EASE
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 613,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].div, {
                        className: "bg-ea-accent text-ea-page absolute grid place-items-center rounded-full text-[11px] font-medium tracking-[0.18em] uppercase",
                        style: {
                            width: disc,
                            height: disc,
                            left: -disc / 2,
                            top: -disc / 2
                        },
                        initial: {
                            transform: 'scale(0)',
                            opacity: 0
                        },
                        animate: mode === 'read' ? {
                            transform: 'scale(1)',
                            opacity: 1
                        } : {
                            transform: 'scale(0)',
                            opacity: 0
                        },
                        transition: {
                            duration: 0.4,
                            ease: EASE
                        },
                        children: readLabel
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 620,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 612,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].div, {
                className: "absolute top-0 left-0",
                style: {
                    x,
                    y,
                    opacity: visible
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].div, {
                    className: "bg-ea-accent ring-ea-page absolute rounded-full ring-2",
                    style: {
                        width: dot,
                        height: dot,
                        left: -dot / 2,
                        top: -dot / 2
                    },
                    animate: {
                        transform: mode === 'dot' ? 'scale(1)' : mode === 'link' ? 'scale(0.5)' : 'scale(0)'
                    },
                    transition: {
                        duration: 0.3,
                        ease: EASE
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 632,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 631,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 610,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s6(InkCursor, "cGZkAUpSpYy1AIc/3jB8d4mfKIc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        useAbhishek
    ];
});
_c7 = InkCursor;
// A slow-in, slow-out curve for the moves that travel across the screen: the light's sweep and the opening
const SWEEP_EASE = [
    0.76,
    0,
    0.24,
    1
];
// The light's radius at the start and end of its flood, drawn as a scale of the start circle so it runs on transforms
const FLOOD = {
    fromRadius: 70,
    toRadius: 760
};
/**
 * The opening scene on a page of ink. The name is drawn in outline as if on a proof, a circle of light
 * sweeps in and floods the letters solid, then the light opens from the centre into a hole onto the hero.
 */ const InkSplash = (param)=>{
    let { onOpen } = param;
    _s7();
    // Context
    const { INTRO, NAME, SPLASH } = useAbhishek();
    // States
    const [tracing, setTracing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs
    const openedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Hooks
    const clipId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const hole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const holeEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(hole, {
        "InkSplash.useTransform[holeEdge]": (value)=>value - 1
    }["InkSplash.useTransform[holeEdge]"]);
    const maskImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"])(_templateObject(), hole, holeEdge, hole);
    const wipeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InkSplash.useCallback[open]": ()=>{
            if (openedRef.current) return;
            openedRef.current = true;
            onOpen();
            // Grows until the hole passes the screen's corners
            const radius = Math.hypot(window.innerWidth, window.innerHeight) / 2 + 24;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(hole, radius, {
                duration: SPLASH.openDuration,
                ease: SWEEP_EASE
            }).then({
                "InkSplash.useCallback[open]": ()=>setDone(true)
            }["InkSplash.useCallback[open]"]);
        }
    }["InkSplash.useCallback[open]"], [
        hole,
        onOpen,
        SPLASH.openDuration
    ]);
    // Waits for the display font so the outlines trace the real letters, but never longer than fontTimeout
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InkSplash.useEffect": ()=>{
            let active = true;
            const timeout = new Promise({
                "InkSplash.useEffect": (resolve)=>window.setTimeout(resolve, SPLASH.fontTimeout * 1000)
            }["InkSplash.useEffect"]);
            Promise.race([
                document.fonts.ready,
                timeout
            ]).then({
                "InkSplash.useEffect": ()=>{
                    if (active) setTracing(true);
                }
            }["InkSplash.useEffect"]);
            return ({
                "InkSplash.useEffect": ()=>{
                    active = false;
                }
            })["InkSplash.useEffect"];
        }
    }["InkSplash.useEffect"], [
        SPLASH.fontTimeout
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InkSplash.useEffect": ()=>{
            if (!tracing) return;
            const timer = window.setTimeout(open, SPLASH.openAt * 1000);
            return ({
                "InkSplash.useEffect": ()=>window.clearTimeout(timer)
            })["InkSplash.useEffect"];
        }
    }["InkSplash.useEffect"], [
        tracing,
        open,
        SPLASH.openAt
    ]);
    // Holds the page still while the splash covers it, and lets any key skip straight to the opening
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InkSplash.useEffect": ()=>{
            if (done) return;
            const root = document.documentElement;
            const previous = root.style.overflow;
            root.style.overflow = 'hidden';
            window.addEventListener('keydown', open);
            return ({
                "InkSplash.useEffect": ()=>{
                    root.style.overflow = previous;
                    window.removeEventListener('keydown', open);
                }
            })["InkSplash.useEffect"];
        }
    }["InkSplash.useEffect"], [
        done,
        open
    ]);
    if (done) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].div, {
        "aria-hidden": true,
        className: "ea-splash bg-ea-ink fixed top-0 left-0 z-50 flex h-svh w-full flex-col",
        style: {
            maskImage,
            WebkitMaskImage: maskImage
        },
        onPointerDown: open,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ea-wrap flex h-19 shrink-0 items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].p, {
                    className: "text-ea-page/70 flex gap-[0.6em] text-[11px] font-medium tracking-[0.2em] uppercase",
                    initial: {
                        opacity: 0
                    },
                    animate: tracing ? {
                        opacity: 1
                    } : undefined,
                    transition: {
                        delay: 0.2,
                        duration: 0.8
                    },
                    children: INTRO.roles.map((role, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-ea-accent",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 747,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: role
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 748,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, role, true, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 746,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 739,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 738,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 23 1000 414",
                    className: "ea-splash-name font-ea-display font-black",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                    id: wipeId,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].rect, {
                                        x: 0,
                                        y: 0,
                                        width: 1000,
                                        height: 440,
                                        style: {
                                            originX: 0
                                        },
                                        initial: {
                                            scaleX: 0
                                        },
                                        animate: tracing ? {
                                            scaleX: 1
                                        } : undefined,
                                        transition: {
                                            delay: SPLASH.drawAt,
                                            duration: SPLASH.drawDuration,
                                            ease: EASE
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                        lineNumber: 761,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 759,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                    id: clipId,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].circle, {
                                        cx: 0,
                                        cy: 230,
                                        r: FLOOD.fromRadius,
                                        initial: {
                                            x: -260,
                                            scale: 1
                                        },
                                        animate: tracing ? {
                                            x: 500,
                                            scale: FLOOD.toRadius / FLOOD.fromRadius
                                        } : undefined,
                                        transition: {
                                            delay: SPLASH.floodAt,
                                            duration: SPLASH.floodDuration,
                                            ease: SWEEP_EASE
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                        lineNumber: 774,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 772,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 758,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            clipPath: "url(#".concat(wipeId, ")"),
                            filter: "url(#ea-ink-outline)",
                            textAnchor: "middle",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: 500,
                                    y: 255,
                                    fontSize: 300,
                                    letterSpacing: "0.02em",
                                    fill: "var(--color-ea-accent)",
                                    children: NAME.first.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 787,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: 500,
                                    y: 424,
                                    fontSize: 196,
                                    letterSpacing: "0.02em",
                                    fill: "var(--color-ea-page)",
                                    children: NAME.last.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 790,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 786,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            clipPath: "url(#".concat(clipId, ")"),
                            textAnchor: "middle",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: 500,
                                    y: 255,
                                    fontSize: 300,
                                    letterSpacing: "0.02em",
                                    fill: "var(--color-ea-accent)",
                                    children: NAME.first.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 796,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: 500,
                                    y: 424,
                                    fontSize: 196,
                                    letterSpacing: "0.02em",
                                    fill: "var(--color-ea-page)",
                                    children: NAME.last.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 799,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 795,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 757,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 755,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 732,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s7(InkSplash, "TbTzDB2PevrLiIVhFGlYUd89c1c=", false, function() {
    return [
        useAbhishek,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c8 = InkSplash;
// The wordmark arrives first; each link follows by its distance from it, so the bar opens outward from the centre
const NavLink = (param)=>{
    let { label, href, active = false, step } = param;
    _s8();
    // Hooks
    const { MOTION } = useAbhishek();
    const reduceMotion = useReduce();
    const started = useIntroStarted();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].li, {
        initial: {
            opacity: 0,
            transform: 'translateY(8px)'
        },
        animate: started ? {
            opacity: 1,
            transform: 'translateY(0px)'
        } : undefined,
        transition: reveal(reduceMotion, MOTION.delays.nav + 0.15 + step * 0.08, 0.8),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            "aria-current": active ? 'page' : undefined,
            className: cn('ea-nav-link inline-flex min-h-10 items-center gap-2 font-medium uppercase', active ? 'text-ea-accent' : 'text-ea-ink'),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ea-roll",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 840,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 841,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 839,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
            lineNumber: 830,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 825,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s8(NavLink, "5sRSKwT740gcnI1aD12e0s19BUQ=", false, function() {
    return [
        useAbhishek,
        useReduce,
        useIntroStarted
    ];
});
_c9 = NavLink;
const HeroNavbar = ()=>{
    _s9();
    // Hooks
    const { BRAND, MOTION, NAV_CTA, NAV_LINKS, NAV_STATUS } = useAbhishek();
    const reduceMotion = useReduce();
    const started = useIntroStarted();
    // Vars
    const { left, right } = NAV_LINKS;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "ea-wrap",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "Main",
            className: "ea-nav",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: BRAND.href,
                    className: "ea-nav-logo font-ea-display text-ea-accent overflow-y-clip leading-none font-black tracking-[-0.045em] uppercase",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                        className: "block",
                        initial: {
                            transform: 'translateY(105%)'
                        },
                        animate: started ? {
                            transform: 'translateY(0%)'
                        } : undefined,
                        transition: reveal(reduceMotion, MOTION.delays.nav, 0.9),
                        children: BRAND.name
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 864,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 860,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].p, {
                    className: "ea-nav-status",
                    initial: {
                        opacity: 0
                    },
                    animate: started ? {
                        opacity: 1
                    } : undefined,
                    transition: reveal(reduceMotion, MOTION.delays.nav + 0.5, 0.8),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            className: "ea-nav-status-dot"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 880,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        NAV_STATUS.label,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            className: "text-ea-accent",
                            children: "·"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 882,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-ea-ink",
                            children: NAV_STATUS.detail
                        }, void 0, false, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 885,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 874,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "ea-nav-left",
                    children: left.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                            ...link,
                            step: left.length - 1 - index
                        }, link.label, false, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 890,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 888,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "ea-nav-right",
                    children: right.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLink, {
                            ...link,
                            step: index
                        }, link.label, false, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 896,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 894,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].div, {
                    className: "ea-nav-cta",
                    initial: {
                        opacity: 0,
                        transform: 'translateY(8px)'
                    },
                    animate: started ? {
                        opacity: 1,
                        transform: 'translateY(0px)'
                    } : undefined,
                    transition: reveal(reduceMotion, MOTION.delays.nav + 0.15 + right.length * 0.08, 0.8),
                    children: NAV_CTA && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InkButton, {
                        label: NAV_CTA.label,
                        href: NAV_CTA.href,
                        icon: "up-right"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 906,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 900,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
            lineNumber: 859,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 858,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s9(HeroNavbar, "0uWso/urR8BsxozY8usIuXoLRlE=", false, function() {
    return [
        useAbhishek,
        useReduce,
        useIntroStarted
    ];
});
_c10 = HeroNavbar;
/**
 * Each line is wiped in from the top as it settles, like a line being written onto the page. The wipe ends
 * past the line's edges so descenders and tracking are never cut once it has finished
 */ const WRITTEN = {
    hidden: {
        opacity: 0,
        transform: 'translateY(0.45em)',
        clipPath: 'inset(0% 0% 100% 0%)'
    },
    shown: {
        opacity: 1,
        transform: 'translateY(0em)',
        clipPath: 'inset(-20% -5% -35% -5%)'
    }
};
const AuthorIntro = ()=>{
    _s10();
    // Hooks
    const { INTRO, MOTION } = useAbhishek();
    const reduceMotion = useReduce();
    const started = useIntroStarted();
    // Vars
    const start = MOTION.delays.intro;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ea-intro",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].p, {
                className: "ea-intro-roles text-ea-ink font-medium uppercase",
                initial: WRITTEN.hidden,
                animate: started ? WRITTEN.shown : undefined,
                transition: reveal(reduceMotion, start, 0.9),
                children: INTRO.roles.map((role, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": true,
                                className: "text-ea-accent",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                lineNumber: 949,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: role
                            }, void 0, false, {
                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                lineNumber: 953,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, role, true, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 947,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 940,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "ea-intro-headline text-ea-ink font-medium",
                children: INTRO.headline.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                        className: "block",
                        initial: WRITTEN.hidden,
                        animate: started ? WRITTEN.shown : undefined,
                        transition: reveal(reduceMotion, start + 0.1 + index * 0.09, 1),
                        children: line
                    }, line, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 960,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 958,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].hr, {
                className: "ea-intro-rule bg-ea-accent origin-left border-0",
                initial: {
                    transform: 'scaleX(0)'
                },
                animate: started ? {
                    transform: 'scaleX(1)'
                } : undefined,
                transition: reveal(reduceMotion, start + 0.45, 0.9)
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 973,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].p, {
                className: "ea-intro-description text-ea-muted font-light",
                initial: {
                    opacity: 0,
                    transform: 'translateY(10px)'
                },
                animate: started ? {
                    opacity: 1,
                    transform: 'translateY(0px)'
                } : undefined,
                transition: reveal(reduceMotion, start + 0.55, 0.9),
                children: INTRO.description
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 980,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 939,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s10(AuthorIntro, "iJI/qsWD0+mlqcf+Yx4fZMvPbrM=", false, function() {
    return [
        useAbhishek,
        useReduce,
        useIntroStarted
    ];
});
_c11 = AuthorIntro;
const SocialLinks = ()=>{
    _s11();
    // Hooks
    const { MOTION, SOCIAL_LINKS } = useAbhishek();
    const reduceMotion = useReduce();
    const started = useIntroStarted();
    // Vars
    const enter = (step)=>reveal(reduceMotion, MOTION.delays.socials + step * 0.07, 0.8);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        "aria-label": "Social links",
        className: "ea-socials text-ea-ink flex items-center gap-2.5 text-[14px] lg:gap-2 lg:text-[13px]",
        children: SOCIAL_LINKS.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].li, {
                        "aria-hidden": true,
                        className: "text-ea-accent",
                        initial: {
                            opacity: 0
                        },
                        animate: started ? {
                            opacity: 1
                        } : undefined,
                        transition: enter(index * 2 - 1),
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 1016,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].li, {
                        initial: {
                            opacity: 0,
                            transform: 'translateY(8px)'
                        },
                        animate: started ? {
                            opacity: 1,
                            transform: 'translateY(0px)'
                        } : undefined,
                        transition: enter(index * 2),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "ea-link inline-flex min-h-10 items-center",
                            children: link.label
                        }, void 0, false, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 1031,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 1026,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, link.label, true, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1014,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 1009,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s11(SocialLinks, "IK4v8xC2Tr7ok4kCBBKAZdJQ9EA=", false, function() {
    return [
        useAbhishek,
        useReduce,
        useIntroStarted
    ];
});
_c12 = SocialLinks;
// Tomorrow's date as the postmark shows it, read when the envelope is drawn
const tomorrowLabel = ()=>{
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
};
const pad = (value)=>String(value).padStart(2, '0');
/**
 * The envelope from the back, built in code, and the sealing in four beats: the letter slides down into the
 * pocket, the flap swings shut over it, the orange wax seal is pressed, and the postmark for the day it opens
 * is stamped on the bottom fold
 */ const Envelope = (param)=>{
    let { date } = param;
    _s12();
    // Hooks
    const { LETTER } = useAbhishek();
    const reduceMotion = useReduce();
    // Vars
    const timing = (delay, duration)=>reduceMotion ? {
            duration: 0
        } : {
            delay,
            duration,
            ease: EASE
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": true,
        className: "ea-envelope",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                className: "ea-envelope-letter",
                initial: {
                    transform: 'translateY(-78%)'
                },
                animate: {
                    transform: 'translateY(6%)'
                },
                transition: timing(0.2, 1.05)
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1081,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ea-envelope-side ea-envelope-left"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1087,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ea-envelope-side ea-envelope-right"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1088,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ea-envelope-bottom"
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1089,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                className: "ea-envelope-flap",
                initial: {
                    transform: 'rotateX(180deg)',
                    opacity: 0
                },
                animate: {
                    transform: 'rotateX(0deg)',
                    opacity: 1
                },
                transition: timing(1.2, 0.95),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ea-envelope-flap-shape"
                }, void 0, false, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 1096,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1090,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                className: "ea-wax-seal font-ea-display",
                initial: {
                    transform: 'scale(2.2)',
                    opacity: 0
                },
                animate: {
                    transform: 'scale(1)',
                    opacity: 1
                },
                transition: timing(2.25, 0.55),
                children: LETTER.seal
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1098,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                className: "ea-postmark",
                initial: {
                    transform: 'scale(1.7) rotate(-34deg)',
                    opacity: 0
                },
                animate: {
                    transform: 'scale(1) rotate(-12deg)',
                    opacity: 1
                },
                transition: timing(2.75, 0.55),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: LETTER.postmark
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 1112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ea-postmark-date",
                        children: date
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 1113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1106,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 1079,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s12(Envelope, "W8McTMo+fBPz2vJJQavYM+khcms=", false, function() {
    return [
        useAbhishek,
        useReduce
    ];
});
_c13 = Envelope;
/**
 * A letter to tomorrow that writes itself. Each promise is typed onto the sheet like a typewriter, the stamp
 * presses once it is finished, and the letter is packed into an envelope, sealed and postmarked for tomorrow;
 * then a fresh sheet arrives with the next promise. Under reduced motion the first letter simply rests, written.
 */ const TomorrowLetter = ()=>{
    _s13();
    // Context
    const { LETTER, MOTION } = useAbhishek();
    // States
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [typed, setTyped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('typing');
    // Refs
    const waitedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        step: '',
        ms: 0
    });
    // Hooks
    const reduceMotion = useReduce();
    const started = useIntroStarted();
    const onScreen = useHeroOnScreen();
    // Vars
    const timing = MOTION.letter;
    const message = LETTER.messages[index];
    const shown = reduceMotion ? message : message.slice(0, typed);
    const finished = shown.length === message.length;
    const swap = reduceMotion ? {
        duration: 0
    } : {
        duration: 0.75,
        ease: EASE
    };
    /**
   * One step of the loop at a time: the next character, the press, the sealing, then the next letter. Off screen
   * or in a hidden tab it holds, and waitedRef keeps how long the step had waited so it picks up with the rest
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TomorrowLetter.useEffect": ()=>{
            if (!started || reduceMotion || !onScreen) return;
            let delay;
            let step;
            if (stage === 'typing' && typed < message.length) {
                var _message_;
                const previous = (_message_ = message[typed - 1]) !== null && _message_ !== void 0 ? _message_ : '';
                delay = timing.perCharacter + (/[,.]/.test(previous) ? timing.pauseAfterPunctuation : 0);
                step = ({
                    "TomorrowLetter.useEffect": ()=>setTyped({
                            "TomorrowLetter.useEffect": (count)=>count + 1
                        }["TomorrowLetter.useEffect"])
                })["TomorrowLetter.useEffect"];
            } else if (stage === 'typing') {
                delay = timing.beforeSeal;
                step = ({
                    "TomorrowLetter.useEffect": ()=>setStage('pressing')
                })["TomorrowLetter.useEffect"];
            } else if (stage === 'pressing') {
                delay = timing.press;
                step = ({
                    "TomorrowLetter.useEffect": ()=>setStage('sealing')
                })["TomorrowLetter.useEffect"];
            } else {
                delay = timing.sealHold;
                step = ({
                    "TomorrowLetter.useEffect": ()=>{
                        setIndex({
                            "TomorrowLetter.useEffect": (current)=>(current + 1) % LETTER.messages.length
                        }["TomorrowLetter.useEffect"]);
                        setTyped(0);
                        setStage('typing');
                    }
                })["TomorrowLetter.useEffect"];
            }
            const key = "".concat(index, ":").concat(stage, ":").concat(typed);
            const waited = waitedRef.current.step === key ? waitedRef.current.ms : 0;
            const begun = performance.now() - waited;
            const timer = window.setTimeout(step, Math.max(0, delay * 1000 - waited));
            return ({
                "TomorrowLetter.useEffect": ()=>{
                    waitedRef.current = {
                        step: key,
                        ms: performance.now() - begun
                    };
                    window.clearTimeout(timer);
                }
            })["TomorrowLetter.useEffect"];
        }
    }["TomorrowLetter.useEffect"], [
        started,
        reduceMotion,
        onScreen,
        index,
        stage,
        typed,
        message,
        timing,
        LETTER.messages.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].section, {
        "aria-label": LETTER.eyebrow,
        className: "ea-pad",
        initial: {
            clipPath: 'inset(0% 0% 0% 100%)'
        },
        animate: started ? {
            clipPath: 'inset(-10% -10% 0% -10%)'
        } : undefined,
        transition: reveal(reduceMotion, MOTION.delays.pad, 1.15),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sr-only",
                children: "".concat(LETTER.greeting, " ").concat(LETTER.messages[0])
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1199,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "ea-pad-inner",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    initial: false,
                    children: stage !== 'sealing' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].div, {
                        className: "ea-letter-sheet",
                        initial: {
                            opacity: 0,
                            transform: 'translateY(28px) rotate(-1.4deg)'
                        },
                        animate: {
                            opacity: 1,
                            transform: 'translateY(0px) rotate(-1.4deg)'
                        },
                        exit: {
                            opacity: 0,
                            transform: 'translateY(40px) scale(0.94) rotate(-1.4deg)'
                        },
                        transition: swap,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ea-letter-eyebrow",
                                children: LETTER.eyebrow
                            }, void 0, false, {
                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                lineNumber: 1212,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: cn('ea-letter-stamp', finished && 'is-ready', stage === 'pressing' && 'is-pressed'),
                                children: LETTER.stamp
                            }, void 0, false, {
                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                lineNumber: 1213,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ea-letter-greeting",
                                children: LETTER.greeting
                            }, void 0, false, {
                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                lineNumber: 1216,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ea-letter-field ea-letter-read",
                                children: [
                                    shown,
                                    stage === 'typing' && !reduceMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ea-letter-caret"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                        lineNumber: 1219,
                                        columnNumber: 57
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                lineNumber: 1217,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ea-letter-meta",
                                children: [
                                    LETTER.counter,
                                    " ",
                                    pad(index + 1),
                                    " / ",
                                    pad(LETTER.messages.length)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                lineNumber: 1221,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, "sheet-".concat(index), true, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 1204,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].div, {
                        className: "ea-letter-envelope-view",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0,
                            x: '70%',
                            rotate: 8
                        },
                        transition: reduceMotion ? {
                            duration: 0
                        } : {
                            duration: 0.9,
                            ease: [
                                0.6,
                                0,
                                0.35,
                                1
                            ]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ea-letter-eyebrow",
                                children: [
                                    LETTER.sealing,
                                    " · ",
                                    tomorrowLabel()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                lineNumber: 1234,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Envelope, {
                                date: tomorrowLabel()
                            }, void 0, false, {
                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                lineNumber: 1237,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, "envelope-".concat(index), true, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 1226,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 1202,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1201,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 1191,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s13(TomorrowLetter, "tNrgRAbTR/9Sljm8IV0XnL+GP5I=", false, function() {
    return [
        useAbhishek,
        useReduce,
        useIntroStarted,
        useHeroOnScreen
    ];
});
_c14 = TomorrowLetter;
// Each book's pastel cover illustration, by the art name its entry in BOOKS gives
const COVER_ART = {
    sunrise: AuthorCoverSunrise,
    lamp: AuthorCoverLamp,
    path: AuthorCoverPath,
    days: AuthorCoverDays
};
const TURN_SPRING = {
    stiffness: 160,
    damping: 20,
    mass: 0.7
};
// Opening is slower and heavier than the hover turn, like a real cover swinging over
const OPEN_SPRING = {
    stiffness: 90,
    damping: 17,
    mass: 0.9
};
// How the book rests: turned a little so its orange spine shows, tipped back slightly as if standing on a shelf
const REST = {
    rotateY: -24,
    rotateX: 6
};
/**
 * The author's books, one at a time, each built in code as a real hardcover: cover, spine, page edges and back.
 * It turns toward a mouse and its cover lifts on hover. A click opens it where it stands: it turns to face the
 * reader, the cover swings over to the chapter and the first page shows its opening. A second click closes it,
 * and the book slides away as the next one arrives, round and round.
 */ const FeaturedBook = ()=>{
    _s14();
    // Context
    const { BOOK_CARD, BOOKS, MOTION, NAME } = useAbhishek();
    // States
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Set once the first swap happens: from then on a book arrives by sliding in, without the page-load entrance
    const [cycled, setCycled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // While the pointer is over the card the slideshow holds on the current book
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs
    const swapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hooks
    const reduceMotion = useReduce();
    const started = useIntroStarted();
    const onScreen = useHeroOnScreen();
    const finePointer = useMediaQuery(MEDIA.finePointer);
    const pointerX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const pointerY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const peek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const openness = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const springX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(pointerX, TURN_SPRING);
    const springY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(pointerY, TURN_SPRING);
    const springPeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(peek, TURN_SPRING);
    const springOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(openness, OPEN_SPRING);
    // Closed, the book rests at an angle and follows the cursor; open, it faces forward with only a slight sway
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])([
        springX,
        springOpen
    ], {
        "FeaturedBook.useTransform[rotateY]": (param)=>{
            let [x, o] = param;
            return (REST.rotateY + x * MOTION.bookTilt) * (1 - o) + x * 3 * o;
        }
    }["FeaturedBook.useTransform[rotateY]"]);
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])([
        springY,
        springOpen
    ], {
        "FeaturedBook.useTransform[rotateX]": (param)=>{
            let [y, o] = param;
            return (REST.rotateX - y * MOTION.bookTilt * 0.5) * (1 - o) - y * 2 * o;
        }
    }["FeaturedBook.useTransform[rotateX]"]);
    // Slides over by half its width as it opens, so the two-page spread sits centred in the card
    const shiftX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springOpen, {
        "FeaturedBook.useTransform[shiftX]": (value)=>"".concat(value * 50, "%")
    }["FeaturedBook.useTransform[shiftX]"]);
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springOpen, {
        "FeaturedBook.useTransform[scale]": (value)=>1 + value * 0.2
    }["FeaturedBook.useTransform[scale]"]);
    const shadowScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(springOpen, {
        "FeaturedBook.useTransform[shadowScale]": (value)=>1 + value * 1.1
    }["FeaturedBook.useTransform[shadowScale]"]);
    const coverRotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])([
        springPeek,
        springOpen
    ], {
        "FeaturedBook.useTransform[coverRotate]": (param)=>{
            let [p, o] = param;
            return -Math.max(p * MOTION.bookOpen, o * 178);
        }
    }["FeaturedBook.useTransform[coverRotate]"]);
    // Vars
    const turnActive = finePointer && !reduceMotion;
    const { delays } = MOTION;
    const book = BOOKS[index];
    const CoverArt = COVER_ART[book.art];
    // The cover's colours, handed to the book's CSS so one set of styles draws every cover
    const coverStyle = {
        rotateY,
        rotateX,
        x: shiftX,
        scale,
        '--ea-cover': book.colors.cover,
        '--ea-cover-type': book.colors.type,
        '--ea-spine': book.colors.spine
    };
    const closeBook = ()=>{
        setOpen(false);
        openness.set(0);
    };
    // Escape closes the open book without moving on; the pending swap is cancelled if the card goes away
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedBook.useEffect": ()=>{
            if (!open) return;
            const handleKey = {
                "FeaturedBook.useEffect.handleKey": (event)=>{
                    if (event.key === 'Escape') closeBook();
                }
            }["FeaturedBook.useEffect.handleKey"];
            window.addEventListener('keydown', handleKey);
            return ({
                "FeaturedBook.useEffect": ()=>window.removeEventListener('keydown', handleKey)
            })["FeaturedBook.useEffect"];
        }
    }["FeaturedBook.useEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedBook.useEffect": ()=>{
            return ({
                "FeaturedBook.useEffect": ()=>{
                    if (swapRef.current) window.clearTimeout(swapRef.current);
                }
            })["FeaturedBook.useEffect"];
        }
    }["FeaturedBook.useEffect"], []);
    // Closed: opens the book. Open: closes it, and once the cover has shut the next book takes its place
    const handleClick = ()=>{
        peek.set(0);
        if (!open) {
            setOpen(true);
            if (reduceMotion) springOpen.jump(1);
            openness.set(1);
            return;
        }
        closeBook();
        if (reduceMotion) springOpen.jump(0);
        swapRef.current = window.setTimeout(()=>{
            setCycled(true);
            setIndex((current)=>(current + 1) % BOOKS.length);
        }, reduceMotion ? 0 : 650);
    };
    /**
   * The books slide on by themselves, one every few seconds, unless the card is hovered or a book is open. Off
   * screen or in a hidden tab the wait holds, and shownRef keeps how long the book had been shown
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedBook.useEffect": ()=>{
            var _shownRef_current;
            if (!started || hovered || open || reduceMotion || !onScreen) return;
            const shown = ((_shownRef_current = shownRef.current) === null || _shownRef_current === void 0 ? void 0 : _shownRef_current.index) === index ? shownRef.current.ms : 0;
            const begun = performance.now() - shown;
            const timer = window.setTimeout({
                "FeaturedBook.useEffect.timer": ()=>{
                    setCycled(true);
                    setIndex({
                        "FeaturedBook.useEffect.timer": (current)=>(current + 1) % BOOKS.length
                    }["FeaturedBook.useEffect.timer"]);
                }
            }["FeaturedBook.useEffect.timer"], Math.max(0, MOTION.bookCycle * 1000 - shown));
            return ({
                "FeaturedBook.useEffect": ()=>{
                    shownRef.current = {
                        index,
                        ms: performance.now() - begun
                    };
                    window.clearTimeout(timer);
                }
            })["FeaturedBook.useEffect"];
        }
    }["FeaturedBook.useEffect"], [
        started,
        hovered,
        open,
        reduceMotion,
        onScreen,
        index,
        BOOKS.length,
        MOTION.bookCycle
    ]);
    // A hover or an open book starts the next wait from the beginning
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedBook.useEffect": ()=>{
            shownRef.current = null;
        }
    }["FeaturedBook.useEffect"], [
        hovered,
        open
    ]);
    const handlePointerEnter = ()=>{
        setHovered(true);
        if (turnActive && !open) peek.set(1);
    };
    const handlePointerMove = (event)=>{
        if (!turnActive) return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width * 2 - 1);
        pointerY.set((event.clientY - rect.top) / rect.height * 2 - 1);
    };
    const handlePointerLeave = ()=>{
        setHovered(false);
        pointerX.set(0);
        pointerY.set(0);
        peek.set(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: "ea-book",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].button, {
                type: "button",
                "aria-expanded": open,
                "aria-label": "".concat(open ? BOOK_CARD.close : BOOK_CARD.open, " ").concat(book.title),
                className: "ea-book-frame block w-full overflow-hidden",
                initial: {
                    clipPath: 'inset(0% 0% 100% 0%)'
                },
                animate: started ? {
                    clipPath: 'inset(0% 0% 0% 0%)'
                } : undefined,
                transition: reveal(reduceMotion, delays.book, 1.05),
                onPointerEnter: handlePointerEnter,
                onPointerMove: handlePointerMove,
                onPointerLeave: handlePointerLeave,
                onClick: handleClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": true,
                    className: "ea-book-stage",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                            className: "ea-book-shadow",
                            style: {
                                scaleX: shadowScale
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 1459,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            initial: false,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                                className: "ea-book-slot",
                                initial: {
                                    transform: 'translateX(100%)'
                                },
                                animate: {
                                    transform: 'translateX(0%)'
                                },
                                exit: {
                                    transform: 'translateX(-100%)'
                                },
                                transition: reduceMotion ? {
                                    duration: 0
                                } : {
                                    duration: 0.9,
                                    ease: [
                                        0.65,
                                        0,
                                        0.35,
                                        1
                                    ]
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                                    className: "ea-book-3d",
                                    style: coverStyle,
                                    initial: cycled ? false : {
                                        y: '18%',
                                        opacity: 0
                                    },
                                    animate: started ? {
                                        y: '0%',
                                        opacity: 1
                                    } : undefined,
                                    transition: reveal(reduceMotion, delays.book + 0.35, 1.1),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ea-book-back"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                            lineNumber: 1478,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ea-book-edge"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                            lineNumber: 1479,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ea-book-spine",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: book.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                lineNumber: 1481,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                            lineNumber: 1480,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ea-book-page",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ea-book-page-text",
                                                    children: book.text
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                    lineNumber: 1484,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ea-book-folio",
                                                    children: BOOK_CARD.folio
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                    lineNumber: 1485,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                            lineNumber: 1483,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ea-book-hinge",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                                                className: "ea-book-cover",
                                                style: {
                                                    rotateY: coverRotate
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ea-book-cover-front",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CoverArt, {
                                                                className: "ea-book-art"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                                lineNumber: 1491,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ea-book-title font-ea-display",
                                                                children: book.coverLines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "block",
                                                                        children: line
                                                                    }, line, false, {
                                                                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                                        lineNumber: 1494,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                                lineNumber: 1492,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ea-book-byline",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "".concat(NAME.first, " ").concat(NAME.last).trim()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                                    lineNumber: 1500,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                                lineNumber: 1499,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                        lineNumber: 1490,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ea-book-cover-inside",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ea-book-page-chapter",
                                                                children: book.chapter
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                                lineNumber: 1505,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ea-book-inside-title font-ea-display",
                                                                children: book.chapterTitle
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                                lineNumber: 1506,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                        lineNumber: 1504,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                lineNumber: 1489,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                            lineNumber: 1488,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 1471,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                lineNumber: 1463,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 1462,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 1458,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1445,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sr-only",
                "aria-live": "polite",
                children: open ? "".concat(book.title, ". ").concat(book.chapter, ": ").concat(book.chapterTitle, ". ").concat(book.text) : ''
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1515,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                className: "ea-book-caption flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                        className: "ea-book-label text-ea-ink mr-auto text-[15px] font-medium whitespace-nowrap",
                        initial: {
                            opacity: 0,
                            transform: 'translateX(-12px)'
                        },
                        animate: started ? {
                            opacity: 1,
                            transform: 'translateX(0px)'
                        } : undefined,
                        transition: reveal(reduceMotion, delays.book + 0.45, 0.8),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                            className: "block",
                            initial: {
                                opacity: 0,
                                transform: 'translateY(6px)'
                            },
                            animate: {
                                opacity: 1,
                                transform: 'translateY(0px)'
                            },
                            children: book.label
                        }, index, false, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 1526,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 1520,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                        className: "ea-book-topics text-ea-muted text-[13px] whitespace-nowrap",
                        initial: {
                            opacity: 0
                        },
                        animate: started ? {
                            opacity: 1
                        } : undefined,
                        transition: reveal(reduceMotion, delays.book + 0.6, 0.8),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                            className: "block",
                            initial: {
                                opacity: 0,
                                transform: 'translateY(6px)'
                            },
                            animate: {
                                opacity: 1,
                                transform: 'translateY(0px)'
                            },
                            children: book.topics.map((topic, position)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        position > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": true,
                                            className: "text-ea-accent",
                                            children: ' / '
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                            lineNumber: 1550,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        topic
                                    ]
                                }, topic, true, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 1548,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, index, false, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 1541,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 1535,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].a, {
                        href: BOOK_CARD.href,
                        "aria-label": "Read about ".concat(book.title),
                        className: "ea-book-arrow relative shrink-0 rounded-full after:absolute after:-inset-2",
                        initial: {
                            transform: 'scale(0) rotate(-90deg)'
                        },
                        animate: started ? {
                            transform: 'scale(1) rotate(0deg)'
                        } : undefined,
                        transition: reveal(reduceMotion, delays.book + 0.7, 0.7),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ea-cta-mark ea-cta-diagonal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRightIcon$3e$__["ArrowUpRightIcon"], {
                                    "aria-hidden": true,
                                    className: "ea-cta-arrow ea-cta-arrow-out",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 1569,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRightIcon$3e$__["ArrowUpRightIcon"], {
                                    "aria-hidden": true,
                                    className: "ea-cta-arrow ea-cta-arrow-in",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 1570,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 1568,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 1559,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1519,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 1444,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s14(FeaturedBook, "++Ymx2Irhqg3K2jf57qX2WaO4sE=", false, function() {
    return [
        useAbhishek,
        useReduce,
        useIntroStarted,
        useHeroOnScreen,
        useMediaQuery,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c15 = FeaturedBook;
// Slow and heavy, so the layers ease after the cursor instead of tracking it
const DEPTH_SPRING = {
    stiffness: 50,
    damping: 18,
    mass: 0.9
};
// Quick but soft, so the spotlight glides with the cursor rather than snapping to it
const SPOT_SPRING = {
    stiffness: 380,
    damping: 36,
    mass: 0.6
};
/**
 * Painted back to front: the giant name, the book and the letter to tomorrow, then the portrait. With a mouse, the portrait and
 * the name drift apart for depth, and an ink spotlight follows the cursor: inside it the name and portrait are
 * swapped for outlined type and an ink-and-orange duotone, like a light passed over a printer's proof.
 */ const HeroSection = ()=>{
    _s15();
    // Context
    const { BOOKS, IMAGES, LETTER: letter, MOTION, NAME, REDUCED } = useAbhishek();
    // States
    const [opened, setOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [spotReady, setSpotReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [onScreen, setOnScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Refs
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spotOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Hooks
    const reduceMotion = useReduce();
    const finePointer = useMediaQuery(MEDIA.finePointer);
    const composition = useMediaQuery(MEDIA.composition);
    const mediaReduced = useMediaQuery(MEDIA.reducedMotion);
    const prefersReduced = REDUCED !== null && REDUCED !== void 0 ? REDUCED : mediaReduced;
    const pointerX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const pointerY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const depthX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(pointerX, DEPTH_SPRING);
    const depthY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(pointerY, DEPTH_SPRING);
    const firstX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(depthX, {
        "HeroSection.useTransform[firstX]": (value)=>value * -MOTION.depth.first
    }["HeroSection.useTransform[firstX]"]);
    const firstY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(depthY, {
        "HeroSection.useTransform[firstY]": (value)=>value * -MOTION.depth.first * 0.4
    }["HeroSection.useTransform[firstY]"]);
    const lastX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(depthX, {
        "HeroSection.useTransform[lastX]": (value)=>value * -MOTION.depth.last
    }["HeroSection.useTransform[lastX]"]);
    const lastY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(depthY, {
        "HeroSection.useTransform[lastY]": (value)=>value * -MOTION.depth.last * 0.3
    }["HeroSection.useTransform[lastY]"]);
    // The portrait moves sideways only, so its cut-off bottom edge never lifts off the hero's bottom edge
    const portraitX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(depthX, {
        "HeroSection.useTransform[portraitX]": (value)=>value * MOTION.depth.portrait
    }["HeroSection.useTransform[portraitX]"]);
    // The spotlight's centre and radius, in px within the composition, handed to the CSS masks as variables
    const spotX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const spotY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const spotRadius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const spotCentreX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(spotX, SPOT_SPRING);
    const spotCentreY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(spotY, SPOT_SPRING);
    const spotXVar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"])(_templateObject1(), spotCentreX);
    const spotYVar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"])(_templateObject2(), spotCentreY);
    const spotRadiusVar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$template$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionTemplate"])(_templateObject3(), spotRadius);
    // Vars
    const { delays, spotlight } = MOTION;
    const depthActive = finePointer && !reduceMotion;
    const spotActive = depthActive && composition && spotReady;
    // The entrance waits for the splash to open, or plays at once when the visitor asks for reduced motion
    const started = opened || prefersReduced;
    // The custom cursor replaces the system one only with a mouse, and never under reduced motion
    const cursorActive = finePointer && !prefersReduced;
    // CSS variables the layer masks read; Motion writes them without re-rendering, though its types omit them
    const spotStyle = {
        '--ea-spot-x': spotXVar,
        '--ea-spot-y': spotYVar,
        '--ea-spot-r': spotRadiusVar
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            if (!started) return;
            const timer = window.setTimeout({
                "HeroSection.useEffect.timer": ()=>setSpotReady(true)
            }["HeroSection.useEffect.timer"], spotlight.readyAfter * 1000);
            return ({
                "HeroSection.useEffect": ()=>window.clearTimeout(timer)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        started,
        spotlight.readyAfter
    ]);
    // Tracks whether any of the hero is on screen while the tab is visible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            let visible = true;
            const update = {
                "HeroSection.useEffect.update": ()=>setOnScreen(visible && !document.hidden)
            }["HeroSection.useEffect.update"];
            const observer = new IntersectionObserver({
                "HeroSection.useEffect": (param)=>{
                    let [entry] = param;
                    visible = entry.isIntersecting;
                    update();
                }
            }["HeroSection.useEffect"]);
            observer.observe(section);
            document.addEventListener('visibilitychange', update);
            return ({
                "HeroSection.useEffect": ()=>{
                    observer.disconnect();
                    document.removeEventListener('visibilitychange', update);
                }
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    const handleSplashOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroSection.useCallback[handleSplashOpen]": ()=>setOpened(true)
    }["HeroSection.useCallback[handleSplashOpen]"], []);
    const handlePointerMove = (event)=>{
        if (!depthActive) return;
        pointerX.set(event.clientX / window.innerWidth * 2 - 1);
        pointerY.set(event.clientY / window.innerHeight * 2 - 1);
        if (!spotActive || !canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (!spotOpenRef.current) {
            spotOpenRef.current = true;
            // Fully closed, it is placed under the cursor first so it opens there instead of gliding over
            if (spotRadius.get() < 1) {
                spotCentreX.jump(x);
                spotCentreY.jump(y);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(spotRadius, spotlight.radius, {
                duration: 0.6,
                ease: EASE
            });
        }
        spotX.set(x);
        spotY.set(y);
    };
    const handlePointerLeave = ()=>{
        pointerX.set(0);
        pointerY.set(0);
        spotOpenRef.current = false;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(spotRadius, 0, {
            duration: 0.45,
            ease: EASE
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "top",
        "aria-label": "".concat(NAME.first, " ").concat(NAME.last),
        className: cn('ea-hero bg-ea-page text-ea-ink font-ea-sans relative', cursorActive && 'ea-has-cursor'),
        onPointerMove: handlePointerMove,
        onPointerLeave: handlePointerLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthorInkFilters, {}, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1731,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            cursorActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InkCursor, {}, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1732,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0)),
            !prefersReduced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InkSplash, {
                onOpen: handleSplashOpen
            }, void 0, false, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1733,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IntroContext.Provider, {
                value: started,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroNavbar, {}, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 1736,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ea-wrap ea-stage",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].div, {
                            ref: canvasRef,
                            className: "ea-canvas",
                            style: spotStyle,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ea-figure",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ea-layer ea-layer-name ea-layer-base",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "ea-name font-ea-display font-black uppercase",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sr-only",
                                                        children: "".concat(NAME.first, " ").concat(NAME.last)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                        lineNumber: 1743,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                                                        className: "ea-name-first text-ea-accent",
                                                        style: {
                                                            x: firstX,
                                                            y: firstY
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MaskedWord, {
                                                            text: NAME.first,
                                                            delay: delays.first,
                                                            from: "below"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                            lineNumber: 1747,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                        lineNumber: 1746,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                                                        className: "ea-name-last text-ea-ink",
                                                        style: {
                                                            x: lastX,
                                                            y: lastY
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MaskedWord, {
                                                            text: NAME.last,
                                                            delay: delays.last,
                                                            from: "above",
                                                            reverse: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                            lineNumber: 1750,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                        lineNumber: 1749,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                lineNumber: 1742,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                            lineNumber: 1741,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        spotActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": true,
                                            className: "ea-layer ea-layer-name ea-layer-ink",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ea-name font-ea-display font-black uppercase",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                                                        className: "ea-name-first ea-ink-first",
                                                        style: {
                                                            x: firstX,
                                                            y: firstY
                                                        },
                                                        children: NAME.first
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                        lineNumber: 1758,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                                                        className: "ea-name-last ea-ink-last",
                                                        style: {
                                                            x: lastX,
                                                            y: lastY
                                                        },
                                                        children: NAME.last
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                        lineNumber: 1761,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                lineNumber: 1757,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                            lineNumber: 1756,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ea-layer ea-layer-portrait ea-layer-base",
                                            children: IMAGES.portrait && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].img, {
                                                src: IMAGES.portrait.src,
                                                alt: IMAGES.portrait.alt,
                                                width: IMAGES.portrait.width,
                                                height: IMAGES.portrait.height,
                                                fetchPriority: "high",
                                                decoding: "async",
                                                className: "ea-portrait origin-bottom",
                                                style: {
                                                    x: portraitX
                                                },
                                                initial: {
                                                    clipPath: 'inset(100% 0% 0% 0%)',
                                                    scale: 1.06
                                                },
                                                animate: started ? {
                                                    clipPath: 'inset(0% 0% 0% 0%)',
                                                    scale: 1
                                                } : undefined,
                                                transition: reveal(reduceMotion, delays.portrait, 1.3)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                lineNumber: 1774,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                            lineNumber: 1768,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        spotActive && IMAGES.portrait && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": true,
                                            className: "ea-layer ea-layer-portrait ea-layer-ink",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].img, {
                                                src: IMAGES.portrait.src,
                                                alt: "",
                                                width: IMAGES.portrait.width,
                                                height: IMAGES.portrait.height,
                                                decoding: "async",
                                                className: "ea-portrait ea-ink-portrait",
                                                style: {
                                                    x: portraitX
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                                lineNumber: 1792,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                            lineNumber: 1791,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 1740,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthorIntro, {}, void 0, false, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 1805,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OnScreenContext.Provider, {
                                    value: onScreen,
                                    children: [
                                        letter.messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TomorrowLetter, {}, void 0, false, {
                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                            lineNumber: 1807,
                                            columnNumber: 46
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        BOOKS.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturedBook, {}, void 0, false, {
                                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                            lineNumber: 1808,
                                            columnNumber: 36
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 1806,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialLinks, {}, void 0, false, {
                                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                                    lineNumber: 1810,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                            lineNumber: 1739,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 1738,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                lineNumber: 1735,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 1723,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s15(HeroSection, "9h1NgYZW/tVjX16T6ZoR86g7JDI=", false, function() {
    return [
        useAbhishek,
        useReduce,
        useMediaQuery,
        useMediaQuery,
        useMediaQuery,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c16 = HeroSection;
/* ----------------------------- Root ----------------------------- */ // Fills its container even inside a centring flex/grid host (the hero is a size container, so it has no intrinsic width)
const FILL = {
    width: '100%'
};
const BLOCK_CSS = "/* Theme tokens of the block (its @theme), scoped to the component */\n[data-slot='abhishek'],\n.ea-hero {\n  --color-ea-page: #f6f4f0;\n  --color-ea-accent: #ff4829;\n  --color-ea-ink: #171412;\n  --color-ea-muted: #77716e;\n  --color-ea-paper: #efe9df;\n\n  --font-ea-display: 'Inter', ui-sans-serif, system-ui, sans-serif;\n  --font-ea-sans: 'Figtree', ui-sans-serif, system-ui, sans-serif;\n  --font-ea-mono: 'IBM Plex Mono', ui-monospace, 'Courier New', monospace;\n}\n\n/* The utilities the block's @theme generated (bg-ea-page, text-ea-ink, font-ea-display, ...), defined here because the host's Tailwind does not know these tokens */\n@layer utilities {\n  .bg-ea-page {\n    background-color: var(--color-ea-page);\n  }\n  .bg-ea-ink {\n    background-color: var(--color-ea-ink);\n  }\n  .bg-ea-accent {\n    background-color: var(--color-ea-accent);\n  }\n  .text-ea-page {\n    color: var(--color-ea-page);\n  }\n  .text-ea-page\\/70 {\n    color: color-mix(in oklab, var(--color-ea-page) 70%, transparent);\n  }\n  .text-ea-ink {\n    color: var(--color-ea-ink);\n  }\n  .text-ea-accent {\n    color: var(--color-ea-accent);\n  }\n  .text-ea-muted {\n    color: var(--color-ea-muted);\n  }\n  .border-ea-accent {\n    border-color: var(--color-ea-accent);\n  }\n  .ring-ea-page {\n    --tw-ring-color: var(--color-ea-page);\n  }\n  .font-ea-display {\n    font-family: var(--font-ea-display);\n  }\n  .font-ea-sans {\n    font-family: var(--font-ea-sans);\n  }\n  .font-ea-mono {\n    font-family: var(--font-ea-mono);\n  }\n}\n\n/**\n * The navbar and the composition share one centred container with a 16, 24 then 40px gutter; the hero is the\n * size container they measure it from. On the wide composition the container fills the screen's width up to\n * 1440px (--ea-w) and the design scales with it; past that nothing grows and the extra space goes to the sides.\n */\n.ea-hero {\n  --ea-gutter: 16px;\n  --ea-nav-h: 84px;\n  --ea-w: min(100cqw - 2 * var(--ea-gutter), 1440px);\n  container-type: inline-size;\n  min-height: 100svh;\n  overflow: clip;\n}\n\n@media (min-width: 640px) {\n  .ea-hero {\n    --ea-gutter: 24px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .ea-hero {\n    --ea-gutter: 40px;\n  }\n}\n\n.ea-wrap {\n  width: var(--ea-w);\n  margin-inline: auto;\n}\n\n/**\n * Navbar below 1024px: the logo centred on the first row with the contact button at its right end, and the four\n * links spread across the second row with equal space between them (the two link lists dissolve into the grid,\n * which spaces its four columns evenly). From 1024px it becomes a single row.\n */\n.ea-nav {\n  container-type: inline-size;\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  justify-content: space-between;\n  align-items: center;\n  row-gap: 6px;\n  padding-block: 14px 6px;\n}\n\n.ea-nav-logo {\n  grid-row: 1;\n  grid-column: 1 / -1;\n  justify-self: center;\n}\n\n.ea-nav-cta {\n  grid-row: 1;\n  grid-column: 1 / -1;\n  justify-self: end;\n}\n\n.ea-nav-left,\n.ea-nav-right {\n  display: contents;\n  white-space: nowrap;\n}\n\n.ea-nav-left > li,\n.ea-nav-right > li {\n  grid-row: 2;\n}\n\n/**\n * Below 1024px (phones and tablets) the contact button is its arrow disc alone; its label stays for screen\n * readers. On a desktop it shows the label beside the disc.\n */\n@media (max-width: 1023px) {\n  .ea-nav-cta .ea-cta {\n    gap: 0;\n    padding: 4px;\n  }\n\n  .ea-nav-cta .ea-cta-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    clip-path: inset(50%);\n    white-space: nowrap;\n  }\n}\n\n/* The note at the navbar's left edge: shown from 1024px, where it balances the contact button */\n.ea-nav-status {\n  display: none;\n}\n\n/* Rolling labels: the visible copy slides up and out as its twin slides up into place */\n.ea-roll {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  line-height: 1.25;\n}\n\n.ea-roll > span {\n  display: block;\n  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.ea-roll > span + span {\n  position: absolute;\n  inset: 0;\n  transform: translateY(100%);\n}\n\n@media (hover: hover) {\n  .ea-nav-link:hover .ea-roll > span:first-child {\n    transform: translateY(-100%);\n  }\n\n  .ea-nav-link:hover .ea-roll > span + span {\n    transform: translateY(0);\n  }\n}\n\n/* Menu type: medium capitals with open tracking; the current page is marked with a small orange dot */\n.ea-nav-link {\n  font-size: clamp(12px, 3.4vw, 13px);\n  letter-spacing: 0.06em;\n}\n\n.ea-nav-link[aria-current='page']::before {\n  content: '';\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n\n.ea-nav-logo {\n  font-size: 28px;\n}\n\n/**\n * From 640px the navbar is one row: the wordmark in the exact centre and the four links mirroring each other\n * around it with one equal gap (--ea-nav-gap); the contact button ends on the right edge. Type and spacing\n * follow the screen only within set limits, tighter on a tablet so everything fits on the row.\n */\n@media (min-width: 640px) {\n  .ea-nav {\n    --ea-nav-u: calc(100cqw / 1280);\n    --ea-nav-gap: clamp(16px, 2.6vw, 28px);\n    grid-template-columns: 1fr auto 1fr;\n    grid-template-areas: 'left logo right';\n    justify-content: normal;\n    height: var(--ea-nav-h);\n    padding-block: 0;\n  }\n\n  .ea-nav-logo {\n    grid-area: logo;\n  }\n\n  .ea-nav-left,\n  .ea-nav-right {\n    display: flex;\n  }\n\n  .ea-nav-left {\n    grid-area: left;\n    justify-self: end;\n    gap: var(--ea-nav-gap);\n    margin-right: var(--ea-nav-gap);\n  }\n\n  .ea-nav-right {\n    grid-area: right;\n    justify-self: start;\n    gap: var(--ea-nav-gap);\n    margin-left: var(--ea-nav-gap);\n  }\n\n  .ea-nav-cta {\n    grid-area: right;\n  }\n\n  .ea-nav-link {\n    font-size: clamp(13px, 14 * var(--ea-nav-u), 15px);\n  }\n\n  .ea-nav-logo {\n    font-size: clamp(26px, 29 * var(--ea-nav-u), 32px);\n  }\n}\n\n@media (min-width: 1024px) {\n  .ea-nav {\n    --ea-nav-gap: clamp(36px, 64 * var(--ea-nav-u), 80px);\n  }\n}\n\n/* The navbar's status note needs the room a wider screen gives, so it appears from 1280px */\n@media (min-width: 1280px) {\n  .ea-nav-status {\n    grid-area: left;\n    justify-self: start;\n    display: inline-flex;\n    align-items: center;\n    gap: 8px;\n    color: var(--color-ea-muted);\n    font-size: 11px;\n    font-weight: 600;\n    letter-spacing: 0.18em;\n    text-transform: uppercase;\n    white-space: nowrap;\n  }\n\n  /* A live dot: a soft ring breathes out from it, slowly, so it reads as present without pulling focus */\n  .ea-nav-status-dot {\n    position: relative;\n    width: 7px;\n    height: 7px;\n    margin-right: 2px;\n    border-radius: 50%;\n    background: var(--color-ea-accent);\n  }\n\n  .ea-nav-status-dot::after {\n    content: '';\n    position: absolute;\n    inset: 0;\n    border-radius: 50%;\n    background: var(--color-ea-accent);\n    animation: ea-breathe 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite;\n  }\n}\n\n/**\n * The ink button (CONTACT and the letter's actions): an outlined pill with an orange arrow disc at its end. On\n * hover or keyboard focus a circle of ink grows out of the disc until it fills the pill, the label turns to\n * the page colour, and the arrow leaves its disc as a fresh one arrives from the other side.\n */\n.ea-cta {\n  --ea-cta-mark: 34px;\n  position: relative;\n  isolation: isolate;\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  height: 44px;\n  padding-inline: 20px 5px;\n  overflow: hidden;\n  border: 1px solid rgb(23 20 18 / 0.4);\n  border-radius: 999px;\n  color: var(--color-ea-ink);\n  font-size: 12.5px;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  white-space: nowrap;\n  transition:\n    color 0.4s cubic-bezier(0.16, 1, 0.3, 1),\n    border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n/* The ink starts as a dot at the disc's centre; scaled up 14 times it covers any of these pills */\n.ea-cta::before {\n  content: '';\n  position: absolute;\n  z-index: -1;\n  top: 50%;\n  right: calc(5px + var(--ea-cta-mark) / 2);\n  width: var(--ea-cta-mark);\n  height: var(--ea-cta-mark);\n  margin: calc(var(--ea-cta-mark) / -2) calc(var(--ea-cta-mark) / -2) 0 0;\n  border-radius: 50%;\n  background: var(--color-ea-ink);\n  transform: scale(0);\n  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.ea-cta-mark {\n  position: relative;\n  display: grid;\n  place-items: center;\n  width: var(--ea-cta-mark);\n  height: var(--ea-cta-mark);\n  overflow: hidden;\n  border-radius: 50%;\n  background: var(--color-ea-accent);\n  color: var(--color-ea-page);\n  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.ea-cta-arrow {\n  position: absolute;\n  width: 44%;\n  height: 44%;\n  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.ea-cta-arrow-in {\n  transform: translateX(-160%);\n}\n\n.ea-cta-diagonal .ea-cta-arrow-in {\n  transform: translate(-160%, 160%);\n}\n\n.ea-cta:disabled {\n  opacity: 0.4;\n}\n\n@media (hover: hover) {\n  .ea-cta:not(:disabled):hover {\n    border-color: var(--color-ea-ink);\n    color: var(--color-ea-page);\n  }\n\n  .ea-cta:not(:disabled):hover::before {\n    transform: scale(14);\n  }\n\n  .ea-cta:not(:disabled):hover .ea-cta-mark {\n    transform: scale(1.06);\n  }\n\n  .ea-cta:not(:disabled):hover .ea-cta-arrow-out {\n    transform: translateX(160%);\n  }\n\n  .ea-cta-diagonal:not(:disabled):hover .ea-cta-arrow-out {\n    transform: translate(160%, -160%);\n  }\n\n  .ea-cta:not(:disabled):hover .ea-cta-arrow-in {\n    transform: translate(0, 0);\n  }\n}\n\n.ea-cta:focus-visible {\n  border-color: var(--color-ea-ink);\n  color: var(--color-ea-page);\n  outline: 2px solid var(--color-ea-accent);\n  outline-offset: 3px;\n}\n\n.ea-cta:focus-visible::before {\n  transform: scale(14);\n}\n\n/**\n * Phones and tablets: the name and portrait form one framed figure, the portrait standing on a sheet of paper;\n * the introduction, the writing pad, the book and the social links follow it\n */\n.ea-stage {\n  padding-block: 12px 40px;\n}\n\n.ea-canvas {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  grid-template-areas:\n    'figure'\n    'intro'\n    'pad'\n    'book'\n    'socials';\n  row-gap: 40px;\n}\n\n.ea-figure {\n  grid-area: figure;\n  position: relative;\n  container-type: inline-size;\n}\n\n/* The name and portrait layers only matter on the wide composition; on smaller screens they leave no box */\n.ea-layer {\n  display: contents;\n}\n\n/* The ink spotlight's twins: the name as outlined type, the portrait through the ink duotone filter */\n.ea-ink-first,\n.ea-ink-last {\n  color: var(--color-ea-accent);\n  filter: url(#ea-ink-outline);\n}\n\n.ea-ink-last {\n  color: var(--color-ea-ink);\n}\n\n.ea-ink-portrait {\n  filter: url(#ea-ink-duotone);\n}\n\n.ea-name {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  line-height: 0.8;\n}\n\n/* Set on each line, not the heading, so the em resolves against the giant size rather than 16px */\n.ea-name-first,\n.ea-name-last {\n  letter-spacing: 0.02em;\n}\n\n/**\n * Each letter of the name is revealed inside a mask that hugs the capitals (overshoot included) rather than the\n * line box, so a letter in motion only ever shows within its own line and never crosses the other one\n */\n.ea-name {\n  --ea-mask-top: 0.015em;\n  --ea-mask-bottom: 0.015em;\n}\n\n.ea-letter-mask {\n  clip-path: inset(var(--ea-mask-top) -0.25em var(--ea-mask-bottom) -0.25em);\n}\n\n/**\n * Inter's capitals start 0.039em inside their box and MONROE's box ends 0.05em past its last stroke (its\n * trailing letter-spacing included), so the margins put the ink itself on the container edges\n */\n\n.ea-name-first {\n  font-size: 27.4cqw;\n  margin-left: -0.039em;\n}\n\n.ea-name-last {\n  align-self: flex-end;\n  font-size: 22.3cqw;\n  margin-right: -0.05em;\n}\n\n/* The paper the portrait stands on, where the composition's desk sits on a wide screen */\n.ea-figure::after {\n  content: '';\n  display: block;\n  width: 64cqw;\n  height: 60cqw;\n  margin: 3cqw 0 0 auto;\n  border-radius: 10px 10px 0 0;\n  background: var(--color-ea-paper);\n}\n\n.ea-portrait {\n  position: absolute;\n  z-index: 1;\n  top: 9cqw;\n  left: -3cqw;\n  height: calc(100% - 9cqw);\n  width: auto;\n  max-width: none;\n}\n\n.ea-intro {\n  grid-area: intro;\n}\n\n.ea-intro-roles {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75em;\n  font-size: 11px;\n  letter-spacing: 0.2em;\n  margin-bottom: 14px;\n}\n\n.ea-intro-headline {\n  font-size: 24px;\n  line-height: 1.14;\n  letter-spacing: -0.01em;\n  margin-bottom: 22px;\n}\n\n.ea-intro-rule {\n  width: 52px;\n  height: 2px;\n  margin-bottom: 22px;\n}\n\n.ea-intro-description {\n  max-width: 260px;\n  font-size: 15px;\n  line-height: 1.55;\n}\n\n.ea-book {\n  grid-area: book;\n}\n\n.ea-book-frame {\n  position: relative;\n  aspect-ratio: 324 / 207;\n  border-radius: 10px;\n  background: var(--color-ea-paper);\n  container-type: size;\n}\n\n.ea-book-caption {\n  margin-top: 12px;\n}\n\n.ea-socials {\n  grid-area: socials;\n}\n\n@media (min-width: 640px) {\n  .ea-canvas {\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n    grid-template-areas:\n      'figure figure'\n      'intro book'\n      'pad pad'\n      'socials socials';\n    column-gap: 32px;\n  }\n\n  .ea-figure::after {\n    height: 48cqw;\n  }\n}\n\n/**\n * The letter to tomorrow. The area holds one view at a time: the letter sheet, the sealed envelope, the sent note,\n * the waiting envelope, or the opened letter. The sheet is the paper, tipped slightly as if just set down.\n */\n.ea-pad {\n  grid-area: pad;\n  position: relative;\n}\n\n.ea-pad-inner {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 380px;\n}\n\n.ea-letter-sheet,\n.ea-letter-envelope-view {\n  position: relative;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n.ea-letter-sheet {\n  padding: 24px 22px 18px;\n  border-radius: 4px;\n  background: #fbf9f5;\n  box-shadow: 0 18px 40px -18px rgb(23 20 18 / 0.45);\n}\n\n.ea-letter-eyebrow {\n  padding-right: 64px;\n  color: var(--color-ea-muted);\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.24em;\n  text-transform: uppercase;\n}\n\n.ea-letter-stamp {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  display: grid;\n  place-items: center;\n  width: 76px;\n  height: 76px;\n  padding: 0 0 0 0.16em;\n  border: 2px solid var(--color-ea-accent);\n  border-radius: 50%;\n  color: var(--color-ea-accent);\n  font-size: 10.5px;\n  font-weight: 700;\n  line-height: 1.3;\n  text-align: center;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  transform: rotate(12deg);\n  transition:\n    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),\n    background-color 0.3s,\n    color 0.3s,\n    opacity 0.4s;\n}\n\n/* Dim while the letter is being typed, full once it is finished, and pressed flat in orange as it seals */\n.ea-letter-stamp {\n  opacity: 0.35;\n}\n\n.ea-letter-stamp.is-ready {\n  opacity: 1;\n}\n\n.ea-letter-stamp.is-pressed {\n  background: var(--color-ea-accent);\n  color: var(--color-ea-page);\n  transform: rotate(0deg) scale(0.86);\n}\n\n.ea-letter-greeting {\n  display: block;\n  margin-top: 20px;\n  color: var(--color-ea-ink);\n  font-family: var(--font-ea-mono);\n  font-size: 17px;\n}\n\n.ea-letter-field {\n  flex: 1;\n  width: 100%;\n  min-height: 84px;\n  margin-top: 4px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: var(--color-ea-ink);\n  caret-color: var(--color-ea-accent);\n  font-family: var(--font-ea-mono);\n  font-size: 17px;\n  line-height: 1.65;\n  resize: none;\n  outline: none;\n}\n\n.ea-letter-read {\n  white-space: pre-wrap;\n}\n\n/* The typewriter's caret: an orange block that blinks after the last typed character */\n.ea-letter-caret {\n  display: inline-block;\n  width: 0.55em;\n  height: 1.1em;\n  margin-left: 2px;\n  background: var(--color-ea-accent);\n  vertical-align: -0.2em;\n  animation: ea-caret 1s steps(2, jump-none) infinite;\n}\n\n@keyframes ea-caret {\n  50% {\n    opacity: 0;\n  }\n}\n\n.ea-letter-meta {\n  margin-top: auto;\n  color: var(--color-ea-muted);\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n}\n\n.ea-letter-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px 16px;\n  margin-top: auto;\n}\n\n.ea-letter-row .ea-letter-meta {\n  margin-top: 0;\n}\n\n/* The sealing view: its label above the envelope, both centred in the letter's space at every width */\n.ea-letter-envelope-view {\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n  text-align: center;\n}\n\n/* The label here has no stamp to clear, so it drops the sheet's right inset and stays truly centred */\n.ea-letter-envelope-view .ea-letter-eyebrow {\n  padding-right: 0;\n}\n\n/**\n * The envelope from the back: paper body, two side folds and a bottom fold meeting under a top flap that is\n * hinged at the top edge. Sized in its own width (cqw) so the seal and postmark keep their proportions.\n */\n.ea-envelope {\n  position: relative;\n  display: block;\n  width: min(100%, 320px);\n  aspect-ratio: 1.62;\n  border-radius: 6px;\n  background: #e6dccb;\n  box-shadow:\n    0 22px 40px -22px rgb(23 20 18 / 0.55),\n    0 2px 6px -2px rgb(23 20 18 / 0.18);\n  container-type: inline-size;\n  perspective: 900px;\n}\n\n.ea-envelope > span {\n  position: absolute;\n}\n\n/* The letter being packed: a folded sheet with a few typed lines, slid down behind the folds */\n.ea-envelope-letter {\n  inset: 6% 7% auto;\n  height: 86%;\n  border-radius: 3px;\n  background:\n    repeating-linear-gradient(to bottom, transparent 0 9cqw, rgb(23 20 18 / 0.22) 9cqw 9.6cqw) 12% 22% / 62% 40%\n      no-repeat,\n    #fbf9f5;\n  box-shadow: 0 2px 6px rgb(23 20 18 / 0.15);\n}\n\n.ea-envelope-side {\n  inset: 0;\n  border-radius: 6px;\n  background: #ece3d4;\n}\n\n.ea-envelope-left {\n  clip-path: polygon(0 0, 52% 56%, 0 100%);\n}\n\n.ea-envelope-right {\n  clip-path: polygon(100% 0, 48% 56%, 100% 100%);\n}\n\n.ea-envelope-bottom {\n  inset: 0;\n  border-radius: 6px;\n  background: #f4eee4;\n  clip-path: polygon(0 100%, 50% 47%, 100% 100%);\n}\n\n/* The flap's soft shadow comes from a filter on its wrapper, since a clip-path would cut a box-shadow off */\n.ea-envelope-flap {\n  inset: 0 0 auto;\n  height: 60%;\n  filter: drop-shadow(0 3px 3px rgb(23 20 18 / 0.18));\n  transform-origin: top center;\n}\n\n.ea-envelope-flap-shape {\n  position: absolute;\n  inset: 0;\n  border-radius: 6px 6px 0 0;\n  background: linear-gradient(to bottom, #ddd0bb, #e3d7c4);\n  clip-path: polygon(0 0, 100% 0, 50% 100%);\n}\n\n/* The wax seal, pressed where the flap's tip meets the folds: a slightly domed disc with a raised rim */\n.ea-wax-seal {\n  top: 60%;\n  left: 50%;\n  display: grid;\n  place-items: center;\n  width: 17cqw;\n  aspect-ratio: 1;\n  margin: -8.5cqw 0 0 -8.5cqw;\n  border-radius: 50%;\n  background: radial-gradient(circle at 35% 30%, #ff7457, var(--color-ea-accent) 55%, #c9361c);\n  box-shadow:\n    0 3px 6px rgb(23 20 18 / 0.3),\n    inset 0 0 0 0.9cqw rgb(255 255 255 / 0.16);\n  color: rgb(246 244 240 / 0.9);\n  font-size: 7.5cqw;\n  font-weight: 900;\n  line-height: 1;\n}\n\n/* A round postmark on the bottom fold, with cancellation bars running off to its left */\n.ea-postmark {\n  right: 7%;\n  bottom: 9%;\n  display: grid;\n  place-items: center;\n  align-content: center;\n  width: 23cqw;\n  aspect-ratio: 1;\n  border: 0.5cqw solid var(--color-ea-accent);\n  border-radius: 50%;\n  color: var(--color-ea-accent);\n  font-size: 2.6cqw;\n  font-weight: 700;\n  line-height: 1.35;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  opacity: 0.88;\n}\n\n.ea-postmark::before {\n  content: '';\n  position: absolute;\n  inset: 7%;\n  border: 0.25cqw solid currentColor;\n  border-radius: 50%;\n}\n\n.ea-postmark::after {\n  content: '';\n  position: absolute;\n  top: 30%;\n  right: 100%;\n  width: 26cqw;\n  height: 40%;\n  background: repeating-linear-gradient(to bottom, currentColor 0 0.4cqw, transparent 0.4cqw 2.2cqw);\n  opacity: 0.7;\n}\n\n.ea-postmark-date {\n  font-family: var(--font-ea-mono);\n  font-weight: 400;\n  letter-spacing: 0.04em;\n}\n\n/**\n * Landscape screens from 1024px: the design's composition, measured on a 1280px grid in units of --ea-u, so\n * it scales with the container (1.0625px at 1440, never more). The canvas fills the hero below the navbar.\n */\n@media (min-width: 1024px) and (min-aspect-ratio: 5/4) {\n  .ea-hero {\n    display: grid;\n    grid-template-rows: auto 1fr;\n  }\n\n  /**\n   * Never shorter than the name, the introduction and the social links need at their smallest scale, so nothing\n   * can collide; only a very short window scrolls\n   */\n  .ea-stage {\n    position: relative;\n    min-height: calc(var(--ea-w) * 621 / 1600 + 40px);\n    padding: 0;\n  }\n\n  /**\n   * --ea-slack is the height beyond the composition's minimum. A small share opens above the name and the rest\n   * lengthens the portrait and the writing pad, which both run to the bottom edge. The portrait stops at\n   * 738 units (784px at 1440, never under 640px); past that the name moves down so the head stays over the first name.\n   */\n  /**\n   * --ea-u follows the width, but on a wide, short window it follows the height instead (the name, introduction\n   * and social links need 621 units plus 40px), so the design still fits one screen while staying anchored to\n   * both edges; it never drops below 80% of the width's unit\n   */\n  .ea-canvas {\n    --ea-u: max(min(100cqw / 1280, (100cqh - 40px) / 621), 100cqw / 1600);\n    --ea-slack: max(0px, 100cqh - 685 * var(--ea-u));\n    --ea-head: calc(55 * var(--ea-u));\n    --ea-portrait-max: max(738 * var(--ea-u), 640px);\n\n    /* The portrait keeps its place against MONROE (which is set from the right edge), never nearer than 221px */\n    --ea-portrait-left: max(100cqw - 1070 * var(--ea-u), 221px);\n    --ea-top: max(10 * var(--ea-u) + var(--ea-slack) * 0.15, 100cqh - var(--ea-portrait-max) - var(--ea-head));\n    --ea-portrait-h: min(100cqh - var(--ea-top) - var(--ea-head), var(--ea-portrait-max));\n    /* The name's two lines: the first name's cap top, then MONROE's, then MONROE's baseline */\n    --ea-last-top: calc(var(--ea-top) + 242 * var(--ea-u));\n    --ea-last-base: calc(var(--ea-top) + 406 * var(--ea-u));\n    position: absolute;\n    inset: 0;\n    display: block;\n    container-type: size;\n  }\n\n  .ea-figure {\n    display: contents;\n  }\n\n  /**\n   * Each layer covers the composition exactly, so the twins inside it land on the same pixels as the originals.\n   * The originals are masked to everything outside the spotlight and the twins to the inside. The twins reach\n   * 1px past the originals' soft edge, so no seam of page shows between them; at a radius of 0 the originals\n   * show whole and the twins not at all.\n   */\n  .ea-layer {\n    position: absolute;\n    inset: 0;\n    display: block;\n    pointer-events: none;\n  }\n\n  .ea-layer-name {\n    z-index: 0;\n  }\n\n  .ea-layer-portrait {\n    z-index: 2;\n  }\n\n  .ea-layer-base {\n    --ea-spot: radial-gradient(\n      circle var(--ea-spot-r, 0px) at var(--ea-spot-x, 0px) var(--ea-spot-y, 0px),\n      transparent calc(var(--ea-spot-r, 0px) - 1px),\n      #000 calc(var(--ea-spot-r, 0px) + 1px)\n    );\n    mask-image: var(--ea-spot);\n    -webkit-mask-image: var(--ea-spot);\n  }\n\n  .ea-layer-ink {\n    --ea-spot: radial-gradient(\n      circle var(--ea-spot-r, 0px) at var(--ea-spot-x, 0px) var(--ea-spot-y, 0px),\n      #000 calc(var(--ea-spot-r, 0px) + 1px),\n      transparent calc(var(--ea-spot-r, 0px) + 2px)\n    );\n    mask-image: var(--ea-spot);\n    -webkit-mask-image: var(--ea-spot);\n  }\n\n  /* At a line height of 1 the capitals sit 0.124em below the box top and end 0.124em above its bottom */\n  .ea-name {\n    --ea-mask-top: 0.115em;\n    --ea-mask-bottom: 0.115em;\n    position: static;\n    display: block;\n    line-height: 1;\n  }\n\n  /**\n   * Placed by their cap tops (0.136em is the gap Inter leaves above a capital at a line height of 1): the first\n   * name 220px tall and 881px wide, MONROE 164px tall and 1008px wide, with the ink on the container edges\n   */\n  .ea-name-first,\n  .ea-name-last {\n    position: absolute;\n    white-space: nowrap;\n  }\n\n  .ea-name-first {\n    top: calc(var(--ea-top) - 0.136em);\n    left: -0.039em;\n    margin: 0;\n    font-size: calc(302 * var(--ea-u));\n  }\n\n  .ea-name-last {\n    top: calc(var(--ea-last-top) - 0.136em);\n    right: -0.05em;\n    margin: 0;\n    font-size: calc(225 * var(--ea-u));\n  }\n\n  .ea-figure::after {\n    display: none;\n  }\n\n  /* Fills the space under MONROE, sharing the book's right edge; the letter inside runs off the bottom edge */\n  .ea-pad {\n    position: absolute;\n    z-index: 1;\n    top: calc(var(--ea-last-base) + 16 * var(--ea-u));\n    left: calc(620 * var(--ea-u));\n    width: calc(100% - 620 * var(--ea-u));\n    height: calc(100% - var(--ea-last-base) - 16 * var(--ea-u));\n  }\n\n  /**\n   * The letter starts clear of the portrait's coat, which reaches the full width of the cut-out (1072 of its\n   * 1336px height) and drifts up to 14px with the cursor; the inset is measured from the portrait's real size\n   */\n  .ea-pad-inner {\n    min-height: 0;\n    padding: calc(14 * var(--ea-u)) calc(18 * var(--ea-u)) 0\n      max(\n        120 * var(--ea-u),\n        var(--ea-portrait-left) + var(--ea-portrait-h) * 1072 / 1336 - 620 * var(--ea-u) + 14px + 24 * var(--ea-u)\n      );\n  }\n\n  .ea-letter-sheet {\n    padding: calc(24 * var(--ea-u)) calc(26 * var(--ea-u)) calc(18 * var(--ea-u));\n    border-radius: 4px 4px 0 0;\n  }\n\n  .ea-letter-eyebrow,\n  .ea-letter-meta {\n    font-size: max(10px, 11 * var(--ea-u));\n  }\n\n  .ea-letter-stamp {\n    top: calc(16 * var(--ea-u));\n    right: calc(18 * var(--ea-u));\n    width: max(64px, 78 * var(--ea-u));\n    height: max(64px, 78 * var(--ea-u));\n    font-size: max(9px, 10.5 * var(--ea-u));\n  }\n\n  .ea-letter-greeting {\n    margin-top: calc(22 * var(--ea-u));\n    font-size: max(14px, 18 * var(--ea-u));\n  }\n\n  .ea-letter-field {\n    min-height: 0;\n    font-size: max(14px, 18 * var(--ea-u));\n  }\n\n  .ea-envelope {\n    width: min(100%, 330 * var(--ea-u));\n  }\n\n  /**\n   * Stands on the bottom edge with the top of its head 55px under the top of the first name. Its left edge stays put as\n   * it grows, never nearer than 221px, so the coat clears the social links and leaves MONROE's M readable\n   */\n  .ea-portrait {\n    z-index: 2;\n    top: calc(100% - var(--ea-portrait-h));\n    left: var(--ea-portrait-left);\n    height: var(--ea-portrait-h);\n  }\n\n  .ea-intro {\n    position: absolute;\n    z-index: 3;\n    top: calc(var(--ea-last-top) + 44 * var(--ea-u));\n    left: 0;\n    width: calc(250 * var(--ea-u));\n  }\n\n  /* Spacing grows down the stack: label to heading, then heading to rule and rule to description */\n  .ea-intro-roles {\n    gap: 0.4em 0.55em;\n    font-size: max(10px, 11 * var(--ea-u));\n    letter-spacing: 0.15em;\n    margin-bottom: calc(18 * var(--ea-u));\n  }\n\n  .ea-intro-headline {\n    font-size: max(19px, 26 * var(--ea-u));\n    line-height: 1.12;\n    margin-bottom: calc(26 * var(--ea-u));\n  }\n\n  .ea-intro-rule {\n    width: calc(52 * var(--ea-u));\n    margin-bottom: calc(26 * var(--ea-u));\n  }\n\n  .ea-intro-description {\n    max-width: calc(240 * var(--ea-u));\n    font-size: max(14px, 15.5 * var(--ea-u));\n    line-height: 1.6;\n    text-wrap: pretty;\n  }\n\n  /* Its image spans the first name's upper 200px and its caption ends just above MONROE */\n  .ea-book {\n    position: absolute;\n    z-index: 1;\n    top: var(--ea-top);\n    right: 0;\n    width: calc(344 * var(--ea-u));\n  }\n\n  .ea-book-frame {\n    border-radius: calc(12 * var(--ea-u));\n  }\n\n  .ea-book-frame {\n    height: calc(200 * var(--ea-u));\n    aspect-ratio: auto;\n  }\n\n  .ea-book-caption {\n    gap: calc(10 * var(--ea-u));\n    margin-top: calc(8 * var(--ea-u));\n  }\n\n  .ea-book-label {\n    font-size: max(12px, 14 * var(--ea-u));\n  }\n\n  .ea-book-topics {\n    font-size: max(11px, 12.5 * var(--ea-u));\n  }\n\n  .ea-socials {\n    position: absolute;\n    z-index: 3;\n    font-size: max(13px, 13 * var(--ea-u));\n\n    /* Near the bottom edge, or just under the introduction when the screen is too short for that */\n    top: max(var(--ea-last-top) + 44 * var(--ea-u) + max(305 * var(--ea-u), 280px), 100% - 78 * var(--ea-u) - 40px);\n    left: 0;\n  }\n}\n\n/**\n * Hover feedback, only where the device can hover: a hairline drawn in from the left and wiped out to the\n * right, the contact button filling with ink from below, and the book's arrow swapping for a fresh one\n */\n.ea-link {\n  position: relative;\n}\n\n/**\n * The book's arrow is the CONTACT disc at a smaller size, shrinking with the composition on a smaller desktop\n * so the caption always clears the top of MONROE (--ea-u exists only there; elsewhere it stays 28px)\n */\n.ea-book-arrow .ea-cta-mark {\n  --ea-cta-mark: clamp(22px, 28 * var(--ea-u, 1px), 28px);\n}\n\n@media (hover: hover) {\n  .ea-link::after {\n    content: '';\n    position: absolute;\n    inset-inline: 0;\n    bottom: calc(50% - 0.95em);\n    height: 1px;\n    background: currentColor;\n    transform: scaleX(0);\n    transform-origin: right;\n    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);\n  }\n\n  .ea-link:hover::after {\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n\n  .ea-book:hover .ea-book-arrow .ea-cta-arrow-out {\n    transform: translate(160%, -160%);\n  }\n\n  .ea-book:hover .ea-book-arrow .ea-cta-arrow-in {\n    transform: translate(0, 0);\n  }\n}\n\n/* The splash's name fills most of the width but never grows past its 1440 size, and keeps clear of the edges */\n.ea-splash-name {\n  width: min(88vw, 130svh);\n  max-height: 70%;\n  height: auto;\n  overflow: visible;\n}\n\n/* With reduced motion the splash never shows, even for the moment before the script decides to skip it */\n@media (prefers-reduced-motion: reduce) {\n  .ea-splash {\n    display: none;\n  }\n}\n\n/* The custom cursor stands in for the system one everywhere in the hero, links and the splash included */\n.ea-has-cursor,\n.ea-has-cursor * {\n  cursor: none;\n}\n\n/**\n * The code-built hardcover, sized from its frame (cqh) so it keeps its proportion at every width. It is a box:\n * back, page edges, orange spine, the first page, and a cover hinged on its left edge so it can swing open.\n */\n/**\n * Holds one book while it slides in or out, so the book's own turning and opening stay independent of the swap.\n * Each fills the card, so the leaving and arriving books share the same place as they pass.\n */\n.ea-book-slot {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  transform-style: preserve-3d;\n}\n\n/* Left-aligned like a printed page, rather than centred like the button the book sits in */\n.ea-book-stage {\n  position: absolute;\n  inset: 0;\n  text-align: left;\n  display: grid;\n  place-items: center;\n  perspective: 900px;\n}\n\n.ea-book-shadow {\n  position: absolute;\n  bottom: 9cqh;\n  width: 46cqh;\n  height: 7cqh;\n  border-radius: 50%;\n  background: radial-gradient(closest-side, rgb(23 20 18 / 0.35), transparent);\n  filter: blur(4px);\n}\n\n.ea-book-3d {\n  --ea-book-depth: 9cqh;\n  position: relative;\n  display: block;\n  height: 74cqh;\n  aspect-ratio: 0.72;\n  transform-style: preserve-3d;\n}\n\n.ea-book-3d > span {\n  position: absolute;\n}\n\n.ea-book-back {\n  display: block;\n  inset: 0;\n  border-radius: 2px 5px 5px 2px;\n  background: color-mix(in srgb, var(--ea-cover, #171412) 78%, black);\n  transform: translateZ(calc(var(--ea-book-depth) / -2));\n}\n\n/* The page block's fore-edge, finely ruled like stacked leaves */\n.ea-book-edge {\n  display: block;\n  top: 2%;\n  right: 0;\n  width: var(--ea-book-depth);\n  height: 96%;\n  background: repeating-linear-gradient(to right, #f3eee6 0 1.5px, #ddd5c8 1.5px 2.5px);\n  transform: translateX(50%) rotateY(90deg);\n}\n\n.ea-book-spine {\n  top: 0;\n  left: 0;\n  width: var(--ea-book-depth);\n  height: 100%;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  background: var(--ea-spine, var(--color-ea-accent));\n  transform: translateX(-50%) rotateY(-90deg);\n}\n\n.ea-book-spine > span {\n  color: var(--ea-cover-type, var(--color-ea-ink));\n  font-size: 3.4cqh;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  white-space: nowrap;\n  transform: rotate(90deg);\n}\n\n.ea-book-page {\n  inset: 2% 3% 2% 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 2.5cqh;\n  padding: 0 10% 0 14%;\n  background: linear-gradient(to right, rgb(23 20 18 / 0.12), transparent 14%), #fbf9f5;\n  transform: translateZ(calc(var(--ea-book-depth) / 2 - 2px));\n}\n\n.ea-book-page-chapter {\n  color: var(--color-ea-accent);\n  font-size: 3cqh;\n  font-weight: 600;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n\n.ea-book-page-text {\n  color: #2a2522;\n  font-size: 3.8cqh;\n  line-height: 1.5;\n}\n\n.ea-book-folio {\n  position: absolute;\n  bottom: 6%;\n  left: 0;\n  right: 0;\n  color: var(--color-ea-muted);\n  font-size: 3cqh;\n  text-align: center;\n}\n\n/* Motion writes the cover's whole transform as it swings, so the front-face depth lives on this wrapper */\n.ea-book-hinge {\n  inset: 0;\n  transform: translateZ(calc(var(--ea-book-depth) / 2));\n  transform-style: preserve-3d;\n}\n\n.ea-book-cover {\n  position: absolute;\n  inset: 0;\n  transform-origin: left center;\n  transform-style: preserve-3d;\n}\n\n/* The cover's two faces: the dark front, and the inside that faces the reader once the cover has swung over */\n.ea-book-cover-front,\n.ea-book-cover-inside {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  backface-visibility: hidden;\n}\n\n.ea-book-cover-front {\n  justify-content: space-between;\n  padding: 11% 10% 9%;\n  border-radius: 2px 5px 5px 2px;\n  overflow: hidden;\n  background: var(--ea-cover, var(--color-ea-ink));\n  color: var(--ea-cover-type, var(--color-ea-page));\n  box-shadow: inset 3px 0 0 rgb(255 255 255 / 0.25);\n}\n\n.ea-book-cover-inside {\n  justify-content: center;\n  gap: 2.5cqh;\n  padding: 0 12%;\n  border-radius: 5px 2px 2px 5px;\n  background: linear-gradient(to left, rgb(23 20 18 / 0.12), transparent 14%), #fbf9f5;\n  transform: rotateY(180deg);\n}\n\n.ea-book-inside-title {\n  color: var(--color-ea-ink);\n  font-size: 8cqh;\n  font-weight: 900;\n  line-height: 0.95;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n}\n\n.ea-book-title {\n  font-size: 9.6cqh;\n  font-weight: 900;\n  line-height: 0.92;\n  letter-spacing: -0.02em;\n  text-transform: uppercase;\n}\n\n.ea-book-byline {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  font-size: 2.8cqh;\n  font-weight: 600;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n}\n\n/* The cover's pastel illustration fills the board behind the title and byline */\n.ea-book-art {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n}\n\n.ea-book-title,\n.ea-book-byline {\n  position: relative;\n}\n\n@keyframes ea-breathe {\n  0% {\n    opacity: 0.55;\n    transform: scale(1);\n  }\n\n  70%,\n  100% {\n    opacity: 0;\n    transform: scale(3);\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .ea-nav-status-dot::after,\n  .ea-letter-caret {\n    animation: none;\n  }\n}\n";
const AbhishekAuthorHero = (param)=>{
    let { brand = {
        name: '',
        href: '#'
    }, navLinks = {
        left: [],
        right: []
    }, navCta, navStatus = {
        label: '',
        detail: ''
    }, name = {
        first: '',
        last: ''
    }, intro = {
        roles: [],
        headline: [],
        description: ''
    }, portrait, books = [], bookCard = {
        href: '#',
        open: 'Open',
        close: 'Close and show the next book',
        folio: '1'
    }, letter, socialLinks = [], motion, splash, reducedMotion, className } = param;
    const value = {
        BRAND: brand,
        NAV_LINKS: navLinks,
        NAV_CTA: navCta,
        NAV_STATUS: navStatus,
        NAME: name,
        INTRO: intro,
        IMAGES: {
            portrait
        },
        BOOKS: books,
        BOOK_CARD: bookCard,
        LETTER: letter !== null && letter !== void 0 ? letter : EMPTY_LETTER,
        SOCIAL_LINKS: socialLinks,
        MOTION: {
            ...DEFAULT_MOTION,
            ...motion,
            delays: {
                ...DEFAULT_MOTION.delays,
                ...motion === null || motion === void 0 ? void 0 : motion.delays
            },
            depth: {
                ...DEFAULT_MOTION.depth,
                ...motion === null || motion === void 0 ? void 0 : motion.depth
            },
            letter: {
                ...DEFAULT_MOTION.letter,
                ...motion === null || motion === void 0 ? void 0 : motion.letter
            },
            spotlight: {
                ...DEFAULT_MOTION.spotlight,
                ...motion === null || motion === void 0 ? void 0 : motion.spotlight
            },
            cursor: {
                ...DEFAULT_MOTION.cursor,
                ...motion === null || motion === void 0 ? void 0 : motion.cursor
            }
        },
        SPLASH: {
            ...DEFAULT_SPLASH,
            ...splash
        },
        REDUCED: reducedMotion
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(abhishekContext.Provider, {
        value: value,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyMotion"], {
            features: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$features$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domAnimation"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: BLOCK_CSS
                }, void 0, false, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 3317,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    "data-slot": "abhishek",
                    className: cn('bg-ea-page', className),
                    style: FILL,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {}, void 0, false, {
                        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                        lineNumber: 3319,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/abhishek-author-hero.tsx",
                    lineNumber: 3318,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/abhishek-author-hero.tsx",
            lineNumber: 3316,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/abhishek-author-hero.tsx",
        lineNumber: 3315,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c17 = AbhishekAuthorHero;
;
const __TURBOPACK__default__export__ = AbhishekAuthorHero;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;
__turbopack_context__.k.register(_c, "AuthorInkFilters");
__turbopack_context__.k.register(_c1, "AuthorCoverDays");
__turbopack_context__.k.register(_c2, "AuthorCoverLamp");
__turbopack_context__.k.register(_c3, "AuthorCoverPath");
__turbopack_context__.k.register(_c4, "AuthorCoverSunrise");
__turbopack_context__.k.register(_c5, "InkButton");
__turbopack_context__.k.register(_c6, "MaskedWord");
__turbopack_context__.k.register(_c7, "InkCursor");
__turbopack_context__.k.register(_c8, "InkSplash");
__turbopack_context__.k.register(_c9, "NavLink");
__turbopack_context__.k.register(_c10, "HeroNavbar");
__turbopack_context__.k.register(_c11, "AuthorIntro");
__turbopack_context__.k.register(_c12, "SocialLinks");
__turbopack_context__.k.register(_c13, "Envelope");
__turbopack_context__.k.register(_c14, "TomorrowLetter");
__turbopack_context__.k.register(_c15, "FeaturedBook");
__turbopack_context__.k.register(_c16, "HeroSection");
__turbopack_context__.k.register(_c17, "AbhishekAuthorHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/abhishek-author-hero-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AbhishekAuthorHeroDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$abhishek$2d$author$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/abhishek-author-hero.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
/**
 * abhishek demo: the original author hero.
 * Fonts (Inter 900, Figtree, IBM Plex Mono) load from Google Fonts in app/layout.tsx.
 * Requires: motion, lucide-react
 */ /**
 * The cut-out portrait: a transparent image cropped at the waist, 1072x1336 in the original design.
 * Drop it in public/ (e.g. public/portrait.webp) and set PORTRAIT_SRC to '/portrait.webp' to show it;
 * while it is null the hero renders without a portrait.
 */ const PORTRAIT_SRC = null;
const BOOKS = [
    {
        label: 'The Latest Book',
        title: 'A More Intentional Life',
        coverLines: [
            'A more',
            'inten-',
            'tional',
            'life'
        ],
        topics: [
            'Ideas',
            'Behavior',
            'Life'
        ],
        art: 'sunrise',
        colors: {
            cover: '#f8dccb',
            type: '#171412',
            spine: '#ff9f80'
        },
        chapter: 'Chapter one',
        chapterTitle: 'The quiet hours',
        text: 'The quiet hours are where we decide who we become. Not in the meetings we fill, but in the unclaimed minutes between them, when no one is asking anything of us at all.'
    },
    {
        label: 'Also by abhishek',
        title: 'Deep Work, Light Life',
        coverLines: [
            'Deep',
            'work,',
            'light',
            'life'
        ],
        topics: [
            'Work',
            'Focus',
            'Craft'
        ],
        art: 'lamp',
        colors: {
            cover: '#d3e3d2',
            type: '#171412',
            spine: '#8fb59a'
        },
        chapter: 'Chapter one',
        chapterTitle: 'Busy is not useful',
        text: 'Most of what fills a working day is motion, not progress. The work that matters rarely shouts; it waits for a quiet hour and a single, unbroken thought.'
    },
    {
        label: 'Also by abhishek',
        title: 'Notes on Being Here',
        coverLines: [
            'Notes',
            'on being',
            'here'
        ],
        topics: [
            'Attention',
            'Presence',
            'Habit'
        ],
        art: 'path',
        colors: {
            cover: '#e2daf0',
            type: '#171412',
            spine: '#b4a6d8'
        },
        chapter: 'Chapter one',
        chapterTitle: 'The long walk home',
        text: 'Attention is the rarest form of generosity. To give it, we have to put something down first: the phone, the plan, the small need to be somewhere else.'
    },
    {
        label: 'Also by abhishek',
        title: 'Small Days, Long Life',
        coverLines: [
            'Small',
            'days,',
            'long',
            'life'
        ],
        topics: [
            'Time',
            'Habit',
            'Meaning'
        ],
        art: 'days',
        colors: {
            cover: '#d3e6f1',
            type: '#171412',
            spine: '#a3c8de'
        },
        chapter: 'Chapter one',
        chapterTitle: 'One honest page',
        text: 'A life is made of ordinary days. Change what one of them holds, one honest page, one slow meal, one call returned, and the years begin to follow.'
    }
];
// The preview renderer photographs the page right after load with ?capture=1; it gets the settled hero (no splash, no entrance)
const isCapture = ()=>"object" !== 'undefined' && /[?&]capture=1/.test(window.location.search);
function AbhishekAuthorHeroDemo() {
    _s();
    const [capture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isCapture);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$abhishek$2d$author$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        reducedMotion: capture ? true : undefined,
        brand: {
            name: 'abhishek',
            href: '#top'
        },
        navLinks: {
            left: [
                {
                    label: 'Home',
                    href: '#top',
                    active: true
                },
                {
                    label: 'About me',
                    href: '#about'
                }
            ],
            right: [
                {
                    label: 'Books',
                    href: '#books'
                },
                {
                    label: 'Journal',
                    href: '#journal'
                }
            ]
        },
        navCta: {
            label: 'Contact',
            href: '#contact'
        },
        navStatus: {
            label: 'Now writing',
            detail: 'Book two'
        },
        name: {
            first: 'Abhishek',
            last: 'Bichala'
        },
        intro: {
            roles: [
                'Author',
                'Thinker',
                'Researcher'
            ],
            headline: [
                'Stories and ideas',
                'for a more thoughtful',
                'tomorrow.'
            ],
            description: 'I write about human behavior, modern work, and the ideas that shape a better, more intentional life.'
        },
        portrait: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined,
        books: BOOKS,
        bookCard: {
            href: '#books',
            open: 'Open',
            close: 'Close and show the next book',
            folio: '1'
        },
        letter: {
            eyebrow: 'A letter to tomorrow',
            greeting: 'Dear tomorrow,',
            stamp: 'Seal & send',
            postmark: 'Tomorrow',
            seal: 'E',
            sealing: 'Sealed for tomorrow',
            messages: [
                'I will put my phone in the drawer and finish one thing I care about.',
                'I will take the long walk home and listen more than I speak.',
                'I will write one honest page before I open my inbox.',
                'I will say no to one meeting and yes to one quiet hour.'
            ],
            counter: 'Letter'
        },
        socialLinks: [
            {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com'
            },
            {
                label: 'Twitter',
                href: 'https://x.com'
            },
            {
                label: 'Instagram',
                href: 'https://www.instagram.com'
            }
        ]
    }, void 0, false, {
        fileName: "[project]/components/abhishek-author-hero-demo.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(AbhishekAuthorHeroDemo, "h/O8qg0/aJ1rWAmKNXJJb9RKD8s=");
_c = AbhishekAuthorHeroDemo;
var _c;
__turbopack_context__.k.register(_c, "AbhishekAuthorHeroDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_3c7391cf._.js.map