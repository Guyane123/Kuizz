var Yt = Object.defineProperty;
var Xt = (t, e, n) =>
    e in t
        ? Yt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n);
var De = (t, e, n) => (Xt(t, typeof e != "symbol" ? e + "" : e, n), n);
(function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        o(s);
    new MutationObserver((s) => {
        for (const l of s)
            if (l.type === "childList")
                for (const r of l.addedNodes)
                    r.tagName === "LINK" && r.rel === "modulepreload" && o(r);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(s) {
        const l = {};
        return (
            s.integrity && (l.integrity = s.integrity),
            s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy),
            s.crossOrigin === "use-credentials"
                ? (l.credentials = "include")
                : s.crossOrigin === "anonymous"
                ? (l.credentials = "omit")
                : (l.credentials = "same-origin"),
            l
        );
    }
    function o(s) {
        if (s.ep) return;
        s.ep = !0;
        const l = n(s);
        fetch(s.href, l);
    }
})();
function j() {}
const Ct = (t) => t;
function ae(t, e) {
    for (const n in e) t[n] = e[n];
    return t;
}
function Zt(t) {
    return (
        !!t &&
        (typeof t == "object" || typeof t == "function") &&
        typeof t.then == "function"
    );
}
function Lt(t) {
    return t();
}
function ct() {
    return Object.create(null);
}
function me(t) {
    t.forEach(Lt);
}
function $e(t) {
    return typeof t == "function";
}
function U(t, e) {
    return t != t
        ? e == e
        : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let Ce;
function Fe(t, e) {
    return t === e
        ? !0
        : (Ce || (Ce = document.createElement("a")),
          (Ce.href = e),
          t === Ce.href);
}
function xt(t) {
    return Object.keys(t).length === 0;
}
function Tt(t, ...e) {
    if (t == null) {
        for (const o of e) o(void 0);
        return j;
    }
    const n = t.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n;
}
function fe(t, e, n) {
    t.$$.on_destroy.push(Tt(e, n));
}
function x(t, e, n, o) {
    if (t) {
        const s = Nt(t, e, n, o);
        return t[0](s);
    }
}
function Nt(t, e, n, o) {
    return t[1] && o ? ae(n.ctx.slice(), t[1](o(e))) : n.ctx;
}
function ee(t, e, n, o) {
    if (t[2] && o) {
        const s = t[2](o(n));
        if (e.dirty === void 0) return s;
        if (typeof s == "object") {
            const l = [],
                r = Math.max(e.dirty.length, s.length);
            for (let u = 0; u < r; u += 1) l[u] = e.dirty[u] | s[u];
            return l;
        }
        return e.dirty | s;
    }
    return e.dirty;
}
function te(t, e, n, o, s, l) {
    if (s) {
        const r = Nt(e, n, o, l);
        t.p(r, s);
    }
}
function ne(t) {
    if (t.ctx.length > 32) {
        const e = [],
            n = t.ctx.length / 32;
        for (let o = 0; o < n; o++) e[o] = -1;
        return e;
    }
    return -1;
}
function Ge(t) {
    const e = {};
    for (const n in t) n[0] !== "$" && (e[n] = t[n]);
    return e;
}
function ft(t, e) {
    const n = {};
    e = new Set(e);
    for (const o in t) !e.has(o) && o[0] !== "$" && (n[o] = t[o]);
    return n;
}
function en(t) {
    return t ?? "";
}
const At = typeof window < "u";
let Ot = At ? () => window.performance.now() : () => Date.now(),
    Ze = At ? (t) => requestAnimationFrame(t) : j;
const ge = new Set();
function jt(t) {
    ge.forEach((e) => {
        e.c(t) || (ge.delete(e), e.f());
    }),
        ge.size !== 0 && Ze(jt);
}
function Rt(t) {
    let e;
    return (
        ge.size === 0 && Ze(jt),
        {
            promise: new Promise((n) => {
                ge.add((e = { c: t, f: n }));
            }),
            abort() {
                ge.delete(e);
            },
        }
    );
}
function E(t, e) {
    t.appendChild(e);
}
function Mt(t) {
    if (!t) return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument;
}
function tn(t) {
    const e = P("style");
    return (e.textContent = "/* empty */"), nn(Mt(t), e), e.sheet;
}
function nn(t, e) {
    return E(t.head || t, e), e.sheet;
}
function S(t, e, n) {
    t.insertBefore(e, n || null);
}
function q(t) {
    t.parentNode && t.parentNode.removeChild(t);
}
function xe(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function P(t) {
    return document.createElement(t);
}
function F(t) {
    return document.createTextNode(t);
}
function D() {
    return F(" ");
}
function _e() {
    return F("");
}
function et(t, e, n, o) {
    return t.addEventListener(e, n, o), () => t.removeEventListener(e, n, o);
}
function k(t, e, n) {
    n == null
        ? t.removeAttribute(e)
        : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const sn = ["width", "height"];
function at(t, e) {
    const n = Object.getOwnPropertyDescriptors(t.__proto__);
    for (const o in e)
        e[o] == null
            ? t.removeAttribute(o)
            : o === "style"
            ? (t.style.cssText = e[o])
            : o === "__value"
            ? (t.value = t[o] = e[o])
            : n[o] && n[o].set && sn.indexOf(o) === -1
            ? (t[o] = e[o])
            : k(t, o, e[o]);
}
function on(t) {
    return Array.from(t.childNodes);
}
function Ke(t, e) {
    (e = "" + e), t.data !== e && (t.data = e);
}
function Dt(t, e, { bubbles: n = !1, cancelable: o = !1 } = {}) {
    return new CustomEvent(t, { detail: e, bubbles: n, cancelable: o });
}
function mt(t, e) {
    return new t(e);
}
const Oe = new Map();
let je = 0;
function ln(t) {
    let e = 5381,
        n = t.length;
    for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
    return e >>> 0;
}
function rn(t, e) {
    const n = { stylesheet: tn(e), rules: {} };
    return Oe.set(t, n), n;
}
function It(t, e, n, o, s, l, r, u = 0) {
    const i = 16.666 / o;
    let c = `{
`;
    for (let p = 0; p <= 1; p += i) {
        const h = e + (n - e) * l(p);
        c +=
            p * 100 +
            `%{${r(h, 1 - h)}}
`;
    }
    const f =
            c +
            `100% {${r(n, 1 - n)}}
}`,
        m = `__svelte_${ln(f)}_${u}`,
        _ = Mt(t),
        { stylesheet: a, rules: d } = Oe.get(_) || rn(_, t);
    d[m] ||
        ((d[m] = !0), a.insertRule(`@keyframes ${m} ${f}`, a.cssRules.length));
    const g = t.style.animation || "";
    return (
        (t.style.animation = `${
            g ? `${g}, ` : ""
        }${m} ${o}ms linear ${s}ms 1 both`),
        (je += 1),
        m
    );
}
function Ue(t, e) {
    const n = (t.style.animation || "").split(", "),
        o = n.filter(
            e ? (l) => l.indexOf(e) < 0 : (l) => l.indexOf("__svelte") === -1
        ),
        s = n.length - o.length;
    s && ((t.style.animation = o.join(", ")), (je -= s), je || un());
}
function un() {
    Ze(() => {
        je ||
            (Oe.forEach((t) => {
                const { ownerNode: e } = t.stylesheet;
                e && q(e);
            }),
            Oe.clear());
    });
}
let Ee;
function oe(t) {
    Ee = t;
}
function we() {
    if (!Ee)
        throw new Error("Function called outside component initialization");
    return Ee;
}
function cn(t) {
    we().$$.on_mount.push(t);
}
function fn(t) {
    we().$$.on_destroy.push(t);
}
function an() {
    const t = we();
    return (e, n, { cancelable: o = !1 } = {}) => {
        const s = t.$$.callbacks[e];
        if (s) {
            const l = Dt(e, n, { cancelable: o });
            return (
                s.slice().forEach((r) => {
                    r.call(t, l);
                }),
                !l.defaultPrevented
            );
        }
        return !0;
    };
}
function Ie(t, e) {
    return we().$$.context.set(t, e), e;
}
function be(t) {
    return we().$$.context.get(t);
}
function mn(t, e) {
    const n = t.$$.callbacks[e.type];
    n && n.slice().forEach((o) => o.call(this, e));
}
const he = [],
    X = [];
let ye = [];
const _t = [],
    _n = Promise.resolve();
let Je = !1;
function dn() {
    Je || ((Je = !0), _n.then(tt));
}
function ve(t) {
    ye.push(t);
}
const Qe = new Set();
let de = 0;
function tt() {
    if (de !== 0) return;
    const t = Ee;
    do {
        try {
            for (; de < he.length; ) {
                const e = he[de];
                de++, oe(e), pn(e.$$);
            }
        } catch (e) {
            throw ((he.length = 0), (de = 0), e);
        }
        for (oe(null), he.length = 0, de = 0; X.length; ) X.pop()();
        for (let e = 0; e < ye.length; e += 1) {
            const n = ye[e];
            Qe.has(n) || (Qe.add(n), n());
        }
        ye.length = 0;
    } while (he.length);
    for (; _t.length; ) _t.pop()();
    (Je = !1), Qe.clear(), oe(t);
}
function pn(t) {
    if (t.fragment !== null) {
        t.update(), me(t.before_update);
        const e = t.dirty;
        (t.dirty = [-1]),
            t.fragment && t.fragment.p(t.ctx, e),
            t.after_update.forEach(ve);
    }
}
function hn(t) {
    const e = [],
        n = [];
    ye.forEach((o) => (t.indexOf(o) === -1 ? e.push(o) : n.push(o))),
        n.forEach((o) => o()),
        (ye = e);
}
let qe;
function Qt() {
    return (
        qe ||
            ((qe = Promise.resolve()),
            qe.then(() => {
                qe = null;
            })),
        qe
    );
}
function Re(t, e, n) {
    t.dispatchEvent(Dt(`${e ? "intro" : "outro"}${n}`));
}
const Ne = new Set();
let re;
function ie() {
    re = { r: 0, c: [], p: re };
}
function ue() {
    re.r || me(re.c), (re = re.p);
}
function b(t, e) {
    t && t.i && (Ne.delete(t), t.i(e));
}
function w(t, e, n, o) {
    if (t && t.o) {
        if (Ne.has(t)) return;
        Ne.add(t),
            re.c.push(() => {
                Ne.delete(t), o && (n && t.d(1), o());
            }),
            t.o(e);
    } else o && o();
}
const Vt = { duration: 0 };
function gn(t, e, n) {
    const o = { direction: "in" };
    let s = e(t, n, o),
        l = !1,
        r,
        u,
        i = 0;
    function c() {
        r && Ue(t, r);
    }
    function f() {
        const {
            delay: _ = 0,
            duration: a = 300,
            easing: d = Ct,
            tick: g = j,
            css: p,
        } = s || Vt;
        p && (r = It(t, 0, 1, a, _, d, p, i++)), g(0, 1);
        const h = Ot() + _,
            C = h + a;
        u && u.abort(),
            (l = !0),
            ve(() => Re(t, !0, "start")),
            (u = Rt(($) => {
                if (l) {
                    if ($ >= C) return g(1, 0), Re(t, !0, "end"), c(), (l = !1);
                    if ($ >= h) {
                        const T = d(($ - h) / a);
                        g(T, 1 - T);
                    }
                }
                return l;
            }));
    }
    let m = !1;
    return {
        start() {
            m || ((m = !0), Ue(t), $e(s) ? ((s = s(o)), Qt().then(f)) : f());
        },
        invalidate() {
            m = !1;
        },
        end() {
            l && (c(), (l = !1));
        },
    };
}
function bn(t, e, n) {
    const o = { direction: "out" };
    let s = e(t, n, o),
        l = !0,
        r;
    const u = re;
    u.r += 1;
    let i;
    function c() {
        const {
            delay: f = 0,
            duration: m = 300,
            easing: _ = Ct,
            tick: a = j,
            css: d,
        } = s || Vt;
        d && (r = It(t, 1, 0, m, f, _, d));
        const g = Ot() + f,
            p = g + m;
        ve(() => Re(t, !1, "start")),
            "inert" in t && ((i = t.inert), (t.inert = !0)),
            Rt((h) => {
                if (l) {
                    if (h >= p)
                        return a(0, 1), Re(t, !1, "end"), --u.r || me(u.c), !1;
                    if (h >= g) {
                        const C = _((h - g) / m);
                        a(1 - C, C);
                    }
                }
                return l;
            });
    }
    return (
        $e(s)
            ? Qt().then(() => {
                  (s = s(o)), c();
              })
            : c(),
        {
            end(f) {
                f && "inert" in t && (t.inert = i),
                    f && s.tick && s.tick(1, 0),
                    l && (r && Ue(t, r), (l = !1));
            },
        }
    );
}
function dt(t, e) {
    const n = (e.token = {});
    function o(s, l, r, u) {
        if (e.token !== n) return;
        e.resolved = u;
        let i = e.ctx;
        r !== void 0 && ((i = i.slice()), (i[r] = u));
        const c = s && (e.current = s)(i);
        let f = !1;
        e.block &&
            (e.blocks
                ? e.blocks.forEach((m, _) => {
                      _ !== l &&
                          m &&
                          (ie(),
                          w(m, 1, 1, () => {
                              e.blocks[_] === m && (e.blocks[_] = null);
                          }),
                          ue());
                  })
                : e.block.d(1),
            c.c(),
            b(c, 1),
            c.m(e.mount(), e.anchor),
            (f = !0)),
            (e.block = c),
            e.blocks && (e.blocks[l] = c),
            f && tt();
    }
    if (Zt(t)) {
        const s = we();
        if (
            (t.then(
                (l) => {
                    oe(s), o(e.then, 1, e.value, l), oe(null);
                },
                (l) => {
                    if (
                        (oe(s),
                        o(e.catch, 2, e.error, l),
                        oe(null),
                        !e.hasCatch)
                    )
                        throw l;
                }
            ),
            e.current !== e.pending)
        )
            return o(e.pending, 0), !0;
    } else {
        if (e.current !== e.then) return o(e.then, 1, e.value, t), !0;
        e.resolved = t;
    }
}
function yn(t, e, n) {
    const o = e.slice(),
        { resolved: s } = t;
    t.current === t.then && (o[t.value] = s),
        t.current === t.catch && (o[t.error] = s),
        t.block.p(o, n);
}
function Se(t) {
    return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function We(t, e) {
    const n = {},
        o = {},
        s = { $$scope: 1 };
    let l = t.length;
    for (; l--; ) {
        const r = t[l],
            u = e[l];
        if (u) {
            for (const i in r) i in u || (o[i] = 1);
            for (const i in u) s[i] || ((n[i] = u[i]), (s[i] = 1));
            t[l] = u;
        } else for (const i in r) s[i] = 1;
    }
    for (const r in o) r in n || (n[r] = void 0);
    return n;
}
function Le(t) {
    return typeof t == "object" && t !== null ? t : {};
}
function I(t) {
    t && t.c();
}
function R(t, e, n) {
    const { fragment: o, after_update: s } = t.$$;
    o && o.m(e, n),
        ve(() => {
            const l = t.$$.on_mount.map(Lt).filter($e);
            t.$$.on_destroy ? t.$$.on_destroy.push(...l) : me(l),
                (t.$$.on_mount = []);
        }),
        s.forEach(ve);
}
function M(t, e) {
    const n = t.$$;
    n.fragment !== null &&
        (hn(n.after_update),
        me(n.on_destroy),
        n.fragment && n.fragment.d(e),
        (n.on_destroy = n.fragment = null),
        (n.ctx = []));
}
function vn(t, e) {
    t.$$.dirty[0] === -1 && (he.push(t), dn(), t.$$.dirty.fill(0)),
        (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function J(t, e, n, o, s, l, r = null, u = [-1]) {
    const i = Ee;
    oe(t);
    const c = (t.$$ = {
        fragment: null,
        ctx: [],
        props: l,
        update: j,
        not_equal: s,
        bound: ct(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (i ? i.$$.context : [])),
        callbacks: ct(),
        dirty: u,
        skip_bound: !1,
        root: e.target || i.$$.root,
    });
    r && r(c.root);
    let f = !1;
    if (
        ((c.ctx = n
            ? n(t, e.props || {}, (m, _, ...a) => {
                  const d = a.length ? a[0] : _;
                  return (
                      c.ctx &&
                          s(c.ctx[m], (c.ctx[m] = d)) &&
                          (!c.skip_bound && c.bound[m] && c.bound[m](d),
                          f && vn(t, m)),
                      _
                  );
              })
            : []),
        c.update(),
        (f = !0),
        me(c.before_update),
        (c.fragment = o ? o(c.ctx) : !1),
        e.target)
    ) {
        if (e.hydrate) {
            const m = on(e.target);
            c.fragment && c.fragment.l(m), m.forEach(q);
        } else c.fragment && c.fragment.c();
        e.intro && b(t.$$.fragment), R(t, e.target, e.anchor), tt();
    }
    oe(i);
}
class W {
    constructor() {
        De(this, "$$");
        De(this, "$$set");
    }
    $destroy() {
        M(this, 1), (this.$destroy = j);
    }
    $on(e, n) {
        if (!$e(n)) return j;
        const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return (
            o.push(n),
            () => {
                const s = o.indexOf(n);
                s !== -1 && o.splice(s, 1);
            }
        );
    }
    $set(e) {
        this.$$set &&
            !xt(e) &&
            ((this.$$.skip_bound = !0),
            this.$$set(e),
            (this.$$.skip_bound = !1));
    }
}
const kn = "4";
typeof window < "u" &&
    (window.__svelte || (window.__svelte = { v: new Set() })).v.add(kn);
const Ye = {},
    Me = {},
    Bt = {},
    Ht = /^:(.+)/,
    pt = 4,
    wn = 3,
    qn = 2,
    zn = 1,
    En = 1,
    Pe = (t) => t.replace(/(^\/+|\/+$)/g, "").split("/"),
    Ve = (t) => t.replace(/(^\/+|\/+$)/g, ""),
    Sn = (t, e) => {
        const n = t.default
            ? 0
            : Pe(t.path).reduce(
                  (o, s) => (
                      (o += pt),
                      s === ""
                          ? (o += En)
                          : Ht.test(s)
                          ? (o += qn)
                          : s[0] === "*"
                          ? (o -= pt + zn)
                          : (o += wn),
                      o
                  ),
                  0
              );
        return { route: t, score: n, index: e };
    },
    Pn = (t) =>
        t
            .map(Sn)
            .sort((e, n) =>
                e.score < n.score
                    ? 1
                    : e.score > n.score
                    ? -1
                    : e.index - n.index
            ),
    ht = (t, e) => {
        let n, o;
        const [s] = e.split("?"),
            l = Pe(s),
            r = l[0] === "",
            u = Pn(t);
        for (let i = 0, c = u.length; i < c; i++) {
            const f = u[i].route;
            let m = !1;
            if (f.default) {
                o = { route: f, params: {}, uri: e };
                continue;
            }
            const _ = Pe(f.path),
                a = {},
                d = Math.max(l.length, _.length);
            let g = 0;
            for (; g < d; g++) {
                const p = _[g],
                    h = l[g];
                if (p && p[0] === "*") {
                    const $ = p === "*" ? "*" : p.slice(1);
                    a[$] = l.slice(g).map(decodeURIComponent).join("/");
                    break;
                }
                if (typeof h > "u") {
                    m = !0;
                    break;
                }
                const C = Ht.exec(p);
                if (C && !r) {
                    const $ = decodeURIComponent(h);
                    a[C[1]] = $;
                } else if (p !== h) {
                    m = !0;
                    break;
                }
            }
            if (!m) {
                n = { route: f, params: a, uri: "/" + l.slice(0, g).join("/") };
                break;
            }
        }
        return n || o || null;
    },
    Be = (t, e) => t + (e ? `?${e}` : ""),
    $n = (t, e) => {
        if (t.startsWith("/")) return t;
        const [n, o] = t.split("?"),
            [s] = e.split("?"),
            l = Pe(n),
            r = Pe(s);
        if (l[0] === "") return Be(s, o);
        if (!l[0].startsWith(".")) {
            const c = r.concat(l).join("/");
            return Be((s === "/" ? "" : "/") + c, o);
        }
        const u = r.concat(l),
            i = [];
        return (
            u.forEach((c) => {
                c === ".." ? i.pop() : c !== "." && i.push(c);
            }),
            Be("/" + i.join("/"), o)
        );
    },
    gt = (t, e) => `${Ve(e === "/" ? t : `${Ve(t)}/${Ve(e)}`)}/`,
    Cn = (t) =>
        !t.defaultPrevented &&
        t.button === 0 &&
        !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey),
    Ft = () =>
        typeof window < "u" && "document" in window && "location" in window,
    Ln = (t) => ({ active: t & 4 }),
    bt = (t) => ({ active: !!t[2] });
function Tn(t) {
    let e, n, o, s;
    const l = t[17].default,
        r = x(l, t, t[16], bt);
    let u = [{ href: t[0] }, { "aria-current": t[2] }, t[1], t[6]],
        i = {};
    for (let c = 0; c < u.length; c += 1) i = ae(i, u[c]);
    return {
        c() {
            (e = P("a")), r && r.c(), at(e, i);
        },
        m(c, f) {
            S(c, e, f),
                r && r.m(e, null),
                (n = !0),
                o || ((s = et(e, "click", t[5])), (o = !0));
        },
        p(c, [f]) {
            r &&
                r.p &&
                (!n || f & 65540) &&
                te(r, l, c, c[16], n ? ee(l, c[16], f, Ln) : ne(c[16]), bt),
                at(
                    e,
                    (i = We(u, [
                        (!n || f & 1) && { href: c[0] },
                        (!n || f & 4) && { "aria-current": c[2] },
                        f & 2 && c[1],
                        f & 64 && c[6],
                    ]))
                );
        },
        i(c) {
            n || (b(r, c), (n = !0));
        },
        o(c) {
            w(r, c), (n = !1);
        },
        d(c) {
            c && q(e), r && r.d(c), (o = !1), s();
        },
    };
}
function Nn(t, e, n) {
    let o;
    const s = ["to", "replace", "state", "getProps", "preserveScroll"];
    let l = ft(e, s),
        r,
        u,
        { $$slots: i = {}, $$scope: c } = e,
        { to: f = "#" } = e,
        { replace: m = !1 } = e,
        { state: _ = {} } = e,
        { getProps: a = () => ({}) } = e,
        { preserveScroll: d = !1 } = e;
    const g = be(Ye);
    fe(t, g, (N) => n(14, (r = N)));
    const { base: p } = be(Me);
    fe(t, p, (N) => n(15, (u = N)));
    const { navigate: h } = be(Bt),
        C = an();
    let $, T, V, O;
    const Q = (N) => {
        if ((C("click", N), Cn(N))) {
            N.preventDefault();
            const y = r.pathname === $ || m;
            h($, { state: _, replace: y, preserveScroll: d });
        }
    };
    return (
        (t.$$set = (N) => {
            (e = ae(ae({}, e), Ge(N))),
                n(6, (l = ft(e, s))),
                "to" in N && n(7, (f = N.to)),
                "replace" in N && n(8, (m = N.replace)),
                "state" in N && n(9, (_ = N.state)),
                "getProps" in N && n(10, (a = N.getProps)),
                "preserveScroll" in N && n(11, (d = N.preserveScroll)),
                "$$scope" in N && n(16, (c = N.$$scope));
        }),
        (t.$$.update = () => {
            t.$$.dirty & 32896 && n(0, ($ = f === "/" ? u.uri : $n(f, u.uri))),
                t.$$.dirty & 16385 && n(12, (T = r.pathname.startsWith($))),
                t.$$.dirty & 16385 && n(13, (V = $ === r.pathname)),
                t.$$.dirty & 8192 && n(2, (o = V ? "page" : void 0)),
                n(
                    1,
                    (O = a({
                        location: r,
                        href: $,
                        isPartiallyCurrent: T,
                        isCurrent: V,
                        existingProps: l,
                    }))
                );
        }),
        [$, O, o, g, p, Q, l, f, m, _, a, d, T, V, r, u, c, i]
    );
}
class Gt extends W {
    constructor(e) {
        super(),
            J(this, e, Nn, Tn, U, {
                to: 7,
                replace: 8,
                state: 9,
                getProps: 10,
                preserveScroll: 11,
            });
    }
}
const An = (t) => ({ params: t & 4 }),
    yt = (t) => ({ params: t[2] });
function vt(t) {
    let e, n, o, s;
    const l = [jn, On],
        r = [];
    function u(i, c) {
        return i[0] ? 0 : 1;
    }
    return (
        (e = u(t)),
        (n = r[e] = l[e](t)),
        {
            c() {
                n.c(), (o = _e());
            },
            m(i, c) {
                r[e].m(i, c), S(i, o, c), (s = !0);
            },
            p(i, c) {
                let f = e;
                (e = u(i)),
                    e === f
                        ? r[e].p(i, c)
                        : (ie(),
                          w(r[f], 1, 1, () => {
                              r[f] = null;
                          }),
                          ue(),
                          (n = r[e]),
                          n ? n.p(i, c) : ((n = r[e] = l[e](i)), n.c()),
                          b(n, 1),
                          n.m(o.parentNode, o));
            },
            i(i) {
                s || (b(n), (s = !0));
            },
            o(i) {
                w(n), (s = !1);
            },
            d(i) {
                i && q(o), r[e].d(i);
            },
        }
    );
}
function On(t) {
    let e;
    const n = t[8].default,
        o = x(n, t, t[7], yt);
    return {
        c() {
            o && o.c();
        },
        m(s, l) {
            o && o.m(s, l), (e = !0);
        },
        p(s, l) {
            o &&
                o.p &&
                (!e || l & 132) &&
                te(o, n, s, s[7], e ? ee(n, s[7], l, An) : ne(s[7]), yt);
        },
        i(s) {
            e || (b(o, s), (e = !0));
        },
        o(s) {
            w(o, s), (e = !1);
        },
        d(s) {
            o && o.d(s);
        },
    };
}
function jn(t) {
    let e,
        n,
        o,
        s = {
            ctx: t,
            current: null,
            token: null,
            hasCatch: !1,
            pending: Dn,
            then: Mn,
            catch: Rn,
            value: 12,
            blocks: [, , ,],
        };
    return (
        dt((n = t[0]), s),
        {
            c() {
                (e = _e()), s.block.c();
            },
            m(l, r) {
                S(l, e, r),
                    s.block.m(l, (s.anchor = r)),
                    (s.mount = () => e.parentNode),
                    (s.anchor = e),
                    (o = !0);
            },
            p(l, r) {
                (t = l),
                    (s.ctx = t),
                    (r & 1 && n !== (n = t[0]) && dt(n, s)) || yn(s, t, r);
            },
            i(l) {
                o || (b(s.block), (o = !0));
            },
            o(l) {
                for (let r = 0; r < 3; r += 1) {
                    const u = s.blocks[r];
                    w(u);
                }
                o = !1;
            },
            d(l) {
                l && q(e), s.block.d(l), (s.token = null), (s = null);
            },
        }
    );
}
function Rn(t) {
    return { c: j, m: j, p: j, i: j, o: j, d: j };
}
function Mn(t) {
    var u;
    let e, n, o;
    const s = [t[2], t[3]];
    var l = ((u = t[12]) == null ? void 0 : u.default) || t[12];
    function r(i, c) {
        let f = {};
        if (c !== void 0 && c & 12)
            f = We(s, [c & 4 && Le(i[2]), c & 8 && Le(i[3])]);
        else for (let m = 0; m < s.length; m += 1) f = ae(f, s[m]);
        return { props: f };
    }
    return (
        l && (e = mt(l, r(t))),
        {
            c() {
                e && I(e.$$.fragment), (n = _e());
            },
            m(i, c) {
                e && R(e, i, c), S(i, n, c), (o = !0);
            },
            p(i, c) {
                var f;
                if (
                    c & 1 &&
                    l !==
                        (l =
                            ((f = i[12]) == null ? void 0 : f.default) || i[12])
                ) {
                    if (e) {
                        ie();
                        const m = e;
                        w(m.$$.fragment, 1, 0, () => {
                            M(m, 1);
                        }),
                            ue();
                    }
                    l
                        ? ((e = mt(l, r(i, c))),
                          I(e.$$.fragment),
                          b(e.$$.fragment, 1),
                          R(e, n.parentNode, n))
                        : (e = null);
                } else if (l) {
                    const m =
                        c & 12
                            ? We(s, [c & 4 && Le(i[2]), c & 8 && Le(i[3])])
                            : {};
                    e.$set(m);
                }
            },
            i(i) {
                o || (e && b(e.$$.fragment, i), (o = !0));
            },
            o(i) {
                e && w(e.$$.fragment, i), (o = !1);
            },
            d(i) {
                i && q(n), e && M(e, i);
            },
        }
    );
}
function Dn(t) {
    return { c: j, m: j, p: j, i: j, o: j, d: j };
}
function In(t) {
    let e,
        n,
        o = t[1] && t[1].route === t[5] && vt(t);
    return {
        c() {
            o && o.c(), (e = _e());
        },
        m(s, l) {
            o && o.m(s, l), S(s, e, l), (n = !0);
        },
        p(s, [l]) {
            s[1] && s[1].route === s[5]
                ? o
                    ? (o.p(s, l), l & 2 && b(o, 1))
                    : ((o = vt(s)), o.c(), b(o, 1), o.m(e.parentNode, e))
                : o &&
                  (ie(),
                  w(o, 1, 1, () => {
                      o = null;
                  }),
                  ue());
        },
        i(s) {
            n || (b(o), (n = !0));
        },
        o(s) {
            w(o), (n = !1);
        },
        d(s) {
            s && q(e), o && o.d(s);
        },
    };
}
function Qn(t, e, n) {
    let o,
        { $$slots: s = {}, $$scope: l } = e,
        { path: r = "" } = e,
        { component: u = null } = e,
        i = {},
        c = {};
    const { registerRoute: f, unregisterRoute: m, activeRoute: _ } = be(Me);
    fe(t, _, (d) => n(1, (o = d)));
    const a = { path: r, default: r === "" };
    return (
        f(a),
        fn(() => {
            m(a);
        }),
        (t.$$set = (d) => {
            n(11, (e = ae(ae({}, e), Ge(d)))),
                "path" in d && n(6, (r = d.path)),
                "component" in d && n(0, (u = d.component)),
                "$$scope" in d && n(7, (l = d.$$scope));
        }),
        (t.$$.update = () => {
            if (o && o.route === a) {
                n(2, (i = o.params));
                const { component: d, path: g, ...p } = e;
                n(3, (c = p)),
                    d &&
                        (d.toString().startsWith("class ")
                            ? n(0, (u = d))
                            : n(0, (u = d()))),
                    Ft() &&
                        !o.preserveScroll &&
                        (window == null || window.scrollTo(0, 0));
            }
        }),
        (e = Ge(e)),
        [u, o, i, c, _, a, r, l, s]
    );
}
class Te extends W {
    constructor(e) {
        super(), J(this, e, Qn, In, U, { path: 6, component: 0 });
    }
}
const pe = [];
function Vn(t, e) {
    return { subscribe: ze(t, e).subscribe };
}
function ze(t, e = j) {
    let n;
    const o = new Set();
    function s(u) {
        if (U(t, u) && ((t = u), n)) {
            const i = !pe.length;
            for (const c of o) c[1](), pe.push(c, t);
            if (i) {
                for (let c = 0; c < pe.length; c += 2) pe[c][0](pe[c + 1]);
                pe.length = 0;
            }
        }
    }
    function l(u) {
        s(u(t));
    }
    function r(u, i = j) {
        const c = [u, i];
        return (
            o.add(c),
            o.size === 1 && (n = e(s, l) || j),
            u(t),
            () => {
                o.delete(c), o.size === 0 && n && (n(), (n = null));
            }
        );
    }
    return { set: s, update: l, subscribe: r };
}
function Bn(t, e, n) {
    const o = !Array.isArray(t),
        s = o ? [t] : t;
    if (!s.every(Boolean))
        throw new Error("derived() expects stores as input, got a falsy value");
    const l = e.length < 2;
    return Vn(n, (r, u) => {
        let i = !1;
        const c = [];
        let f = 0,
            m = j;
        const _ = () => {
                if (f) return;
                m();
                const d = e(o ? c[0] : c, r, u);
                l ? r(d) : (m = $e(d) ? d : j);
            },
            a = s.map((d, g) =>
                Tt(
                    d,
                    (p) => {
                        (c[g] = p), (f &= ~(1 << g)), i && _();
                    },
                    () => {
                        f |= 1 << g;
                    }
                )
            );
        return (
            (i = !0),
            _(),
            function () {
                me(a), m(), (i = !1);
            }
        );
    });
}
const He = (t) => ({
        ...t.location,
        state: t.history.state,
        key: (t.history.state && t.history.state.key) || "initial",
    }),
    Hn = (t) => {
        const e = [];
        let n = He(t);
        return {
            get location() {
                return n;
            },
            listen(o) {
                e.push(o);
                const s = () => {
                    (n = He(t)), o({ location: n, action: "POP" });
                };
                return (
                    t.addEventListener("popstate", s),
                    () => {
                        t.removeEventListener("popstate", s);
                        const l = e.indexOf(o);
                        e.splice(l, 1);
                    }
                );
            },
            navigate(
                o,
                { state: s, replace: l = !1, preserveScroll: r = !1 } = {}
            ) {
                s = { ...s, key: Date.now() + "" };
                try {
                    l
                        ? t.history.replaceState(s, "", o)
                        : t.history.pushState(s, "", o);
                } catch {
                    t.location[l ? "replace" : "assign"](o);
                }
                (n = He(t)),
                    e.forEach((u) =>
                        u({ location: n, action: "PUSH", preserveScroll: r })
                    ),
                    document.activeElement.blur();
            },
        };
    },
    Fn = (t = "/") => {
        let e = 0;
        const n = [{ pathname: t, search: "" }],
            o = [];
        return {
            get location() {
                return n[e];
            },
            addEventListener(s, l) {},
            removeEventListener(s, l) {},
            history: {
                get entries() {
                    return n;
                },
                get index() {
                    return e;
                },
                get state() {
                    return o[e];
                },
                pushState(s, l, r) {
                    const [u, i = ""] = r.split("?");
                    e++, n.push({ pathname: u, search: i }), o.push(s);
                },
                replaceState(s, l, r) {
                    const [u, i = ""] = r.split("?");
                    (n[e] = { pathname: u, search: i }), (o[e] = s);
                },
            },
        };
    },
    Gn = Hn(Ft() ? window : Fn()),
    Kn = (t) => ({ route: t & 4, location: t & 2 }),
    kt = (t) => ({ route: t[2] && t[2].uri, location: t[1] }),
    Un = (t) => ({ route: t & 4, location: t & 2 }),
    wt = (t) => ({ route: t[2] && t[2].uri, location: t[1] });
function Jn(t) {
    let e;
    const n = t[15].default,
        o = x(n, t, t[14], kt);
    return {
        c() {
            o && o.c();
        },
        m(s, l) {
            o && o.m(s, l), (e = !0);
        },
        p(s, l) {
            o &&
                o.p &&
                (!e || l & 16390) &&
                te(o, n, s, s[14], e ? ee(n, s[14], l, Kn) : ne(s[14]), kt);
        },
        i(s) {
            e || (b(o, s), (e = !0));
        },
        o(s) {
            w(o, s), (e = !1);
        },
        d(s) {
            o && o.d(s);
        },
    };
}
function Wn(t) {
    let e = t[1].pathname,
        n,
        o,
        s = qt(t);
    return {
        c() {
            s.c(), (n = _e());
        },
        m(l, r) {
            s.m(l, r), S(l, n, r), (o = !0);
        },
        p(l, r) {
            r & 2 && U(e, (e = l[1].pathname))
                ? (ie(),
                  w(s, 1, 1, j),
                  ue(),
                  (s = qt(l)),
                  s.c(),
                  b(s, 1),
                  s.m(n.parentNode, n))
                : s.p(l, r);
        },
        i(l) {
            o || (b(s), (o = !0));
        },
        o(l) {
            w(s), (o = !1);
        },
        d(l) {
            l && q(n), s.d(l);
        },
    };
}
function qt(t) {
    let e, n, o, s;
    const l = t[15].default,
        r = x(l, t, t[14], wt);
    return {
        c() {
            (e = P("div")), r && r.c();
        },
        m(u, i) {
            S(u, e, i), r && r.m(e, null), (s = !0);
        },
        p(u, i) {
            r &&
                r.p &&
                (!s || i & 16390) &&
                te(r, l, u, u[14], s ? ee(l, u[14], i, Un) : ne(u[14]), wt);
        },
        i(u) {
            s ||
                (b(r, u),
                u &&
                    ve(() => {
                        s && (o && o.end(1), (n = gn(e, t[3], {})), n.start());
                    }),
                (s = !0));
        },
        o(u) {
            w(r, u), n && n.invalidate(), u && (o = bn(e, t[3], {})), (s = !1);
        },
        d(u) {
            u && q(e), r && r.d(u), u && o && o.end();
        },
    };
}
function Yn(t) {
    let e, n, o, s;
    const l = [Wn, Jn],
        r = [];
    function u(i, c) {
        return i[0] ? 0 : 1;
    }
    return (
        (e = u(t)),
        (n = r[e] = l[e](t)),
        {
            c() {
                n.c(), (o = _e());
            },
            m(i, c) {
                r[e].m(i, c), S(i, o, c), (s = !0);
            },
            p(i, [c]) {
                let f = e;
                (e = u(i)),
                    e === f
                        ? r[e].p(i, c)
                        : (ie(),
                          w(r[f], 1, 1, () => {
                              r[f] = null;
                          }),
                          ue(),
                          (n = r[e]),
                          n ? n.p(i, c) : ((n = r[e] = l[e](i)), n.c()),
                          b(n, 1),
                          n.m(o.parentNode, o));
            },
            i(i) {
                s || (b(n), (s = !0));
            },
            o(i) {
                w(n), (s = !1);
            },
            d(i) {
                i && q(o), r[e].d(i);
            },
        }
    );
}
function Xn(t, e, n) {
    let o,
        s,
        l,
        r,
        { $$slots: u = {}, $$scope: i } = e,
        { basepath: c = "/" } = e,
        { url: f = null } = e,
        { viewtransition: m = null } = e,
        { history: _ = Gn } = e;
    const a = (y, H, B) => {
        const G = m(B);
        return typeof (G == null ? void 0 : G.fn) == "function"
            ? G.fn(y, G)
            : G;
    };
    Ie(Bt, _);
    const d = be(Ye),
        g = be(Me),
        p = ze([]);
    fe(t, p, (y) => n(12, (s = y)));
    const h = ze(null);
    fe(t, h, (y) => n(2, (r = y)));
    let C = !1;
    const $ = d || ze(f ? { pathname: f } : _.location);
    fe(t, $, (y) => n(1, (o = y)));
    const T = g ? g.routerBase : ze({ path: c, uri: c });
    fe(t, T, (y) => n(13, (l = y)));
    const V = Bn([T, h], ([y, H]) => {
            if (!H) return y;
            const { path: B } = y,
                { route: G, uri: se } = H;
            return {
                path: G.default ? B : G.path.replace(/\*.*$/, ""),
                uri: se,
            };
        }),
        O = (y) => {
            const { path: H } = l;
            let { path: B } = y;
            if (((y._path = B), (y.path = gt(H, B)), typeof window > "u")) {
                if (C) return;
                const G = ht([y], o.pathname);
                G && (h.set(G), (C = !0));
            } else p.update((G) => [...G, y]);
        },
        Q = (y) => {
            p.update((H) => H.filter((B) => B !== y));
        };
    let N = !1;
    return (
        d ||
            (cn(() =>
                _.listen((H) => {
                    n(11, (N = H.preserveScroll || !1)), $.set(H.location);
                })
            ),
            Ie(Ye, $)),
        Ie(Me, {
            activeRoute: h,
            base: T,
            routerBase: V,
            registerRoute: O,
            unregisterRoute: Q,
        }),
        (t.$$set = (y) => {
            "basepath" in y && n(8, (c = y.basepath)),
                "url" in y && n(9, (f = y.url)),
                "viewtransition" in y && n(0, (m = y.viewtransition)),
                "history" in y && n(10, (_ = y.history)),
                "$$scope" in y && n(14, (i = y.$$scope));
        }),
        (t.$$.update = () => {
            if (t.$$.dirty & 8192) {
                const { path: y } = l;
                p.update((H) =>
                    H.map((B) => Object.assign(B, { path: gt(y, B._path) }))
                );
            }
            if (t.$$.dirty & 6146) {
                const y = ht(s, o.pathname);
                h.set({ ...y, preserveScroll: N });
            }
        }),
        [m, o, r, a, p, h, $, T, c, f, _, N, s, l, i, u]
    );
}
class Zn extends W {
    constructor(e) {
        super(),
            J(this, e, Xn, Yn, U, {
                basepath: 8,
                url: 9,
                viewtransition: 0,
                history: 10,
            });
    }
}
function xn(t) {
    let e, n, o, s, l;
    const r = t[7].default,
        u = x(r, t, t[9], null);
    return {
        c() {
            (e = P("button")),
                u && u.c(),
                k(e, "class", "btn svelte-1d7k0xm"),
                k(
                    e,
                    "style",
                    (n = `color: ${t[3]};font-size: ${t[2]}px;background-color: ${t[0]}; border: solid 2px ${t[1]}; height: ${t[5]}px; width: ${t[4]}px`)
                );
        },
        m(i, c) {
            S(i, e, c),
                u && u.m(e, null),
                (o = !0),
                s || ((l = et(e, "click", t[8])), (s = !0));
        },
        p(i, c) {
            u &&
                u.p &&
                (!o || c & 512) &&
                te(u, r, i, i[9], o ? ee(r, i[9], c, null) : ne(i[9]), null),
                (!o ||
                    (c & 63 &&
                        n !==
                            (n = `color: ${i[3]};font-size: ${i[2]}px;background-color: ${i[0]}; border: solid 2px ${i[1]}; height: ${i[5]}px; width: ${i[4]}px`))) &&
                    k(e, "style", n);
        },
        i(i) {
            o || (b(u, i), (o = !0));
        },
        o(i) {
            w(u, i), (o = !1);
        },
        d(i) {
            i && q(e), u && u.d(i), (s = !1), l();
        },
    };
}
function es(t) {
    let e, n, o;
    return (
        (n = new Gt({
            props: {
                to: t[6],
                $$slots: { default: [ts] },
                $$scope: { ctx: t },
            },
        })),
        {
            c() {
                (e = P("div")),
                    I(n.$$.fragment),
                    k(e, "class", "btn svelte-1d7k0xm");
            },
            m(s, l) {
                S(s, e, l), R(n, e, null), (o = !0);
            },
            p(s, l) {
                const r = {};
                l & 64 && (r.to = s[6]),
                    l & 512 && (r.$$scope = { dirty: l, ctx: s }),
                    n.$set(r);
            },
            i(s) {
                o || (b(n.$$.fragment, s), (o = !0));
            },
            o(s) {
                w(n.$$.fragment, s), (o = !1);
            },
            d(s) {
                s && q(e), M(n);
            },
        }
    );
}
function ts(t) {
    let e, n;
    const o = t[7].default,
        s = x(o, t, t[9], null);
    return {
        c() {
            (e = P("p")), s && s.c(), k(e, "class", "a svelte-1d7k0xm");
        },
        m(l, r) {
            S(l, e, r), s && s.m(e, null), (n = !0);
        },
        p(l, r) {
            s &&
                s.p &&
                (!n || r & 512) &&
                te(s, o, l, l[9], n ? ee(o, l[9], r, null) : ne(l[9]), null);
        },
        i(l) {
            n || (b(s, l), (n = !0));
        },
        o(l) {
            w(s, l), (n = !1);
        },
        d(l) {
            l && q(e), s && s.d(l);
        },
    };
}
function ns(t) {
    let e, n, o, s;
    const l = [es, xn],
        r = [];
    function u(i, c) {
        return i[6] ? 0 : 1;
    }
    return (
        (e = u(t)),
        (n = r[e] = l[e](t)),
        {
            c() {
                n.c(), (o = _e());
            },
            m(i, c) {
                r[e].m(i, c), S(i, o, c), (s = !0);
            },
            p(i, [c]) {
                let f = e;
                (e = u(i)),
                    e === f
                        ? r[e].p(i, c)
                        : (ie(),
                          w(r[f], 1, 1, () => {
                              r[f] = null;
                          }),
                          ue(),
                          (n = r[e]),
                          n ? n.p(i, c) : ((n = r[e] = l[e](i)), n.c()),
                          b(n, 1),
                          n.m(o.parentNode, o));
            },
            i(i) {
                s || (b(n), (s = !0));
            },
            o(i) {
                w(n), (s = !1);
            },
            d(i) {
                i && q(o), r[e].d(i);
            },
        }
    );
}
function ss(t, e, n) {
    let { $$slots: o = {}, $$scope: s } = e,
        { bgColor: l = "#4556DB" } = e,
        { borderColor: r = "transparent" } = e,
        { fontSize: u = 32 } = e,
        { color: i = "white" } = e,
        { width: c = 400 } = e,
        { height: f = 65 } = e,
        { link: m = void 0 } = e;
    function _(a) {
        mn.call(this, t, a);
    }
    return (
        (t.$$set = (a) => {
            "bgColor" in a && n(0, (l = a.bgColor)),
                "borderColor" in a && n(1, (r = a.borderColor)),
                "fontSize" in a && n(2, (u = a.fontSize)),
                "color" in a && n(3, (i = a.color)),
                "width" in a && n(4, (c = a.width)),
                "height" in a && n(5, (f = a.height)),
                "link" in a && n(6, (m = a.link)),
                "$$scope" in a && n(9, (s = a.$$scope));
        }),
        [l, r, u, i, c, f, m, o, _, s]
    );
}
class Ae extends W {
    constructor(e) {
        super(),
            J(this, e, ss, ns, U, {
                bgColor: 0,
                borderColor: 1,
                fontSize: 2,
                color: 3,
                width: 4,
                height: 5,
                link: 6,
            });
    }
}
function os(t) {
    let e, n;
    const o = t[1].default,
        s = x(o, t, t[0], null);
    return {
        c() {
            (e = P("p")), s && s.c(), k(e, "class", "desc svelte-1b1fdx0");
        },
        m(l, r) {
            S(l, e, r), s && s.m(e, null), (n = !0);
        },
        p(l, [r]) {
            s &&
                s.p &&
                (!n || r & 1) &&
                te(s, o, l, l[0], n ? ee(o, l[0], r, null) : ne(l[0]), null);
        },
        i(l) {
            n || (b(s, l), (n = !0));
        },
        o(l) {
            w(s, l), (n = !1);
        },
        d(l) {
            l && q(e), s && s.d(l);
        },
    };
}
function ls(t, e, n) {
    let { $$slots: o = {}, $$scope: s } = e;
    return (
        (t.$$set = (l) => {
            "$$scope" in l && n(0, (s = l.$$scope));
        }),
        [s, o]
    );
}
class Xe extends W {
    constructor(e) {
        super(), J(this, e, ls, os, U, {});
    }
}
const Kt = "./assets/kuizz-b314bb90.svg";
function rs(t) {
    let e, n, o;
    const s = t[1].default,
        l = x(s, t, t[0], null);
    return {
        c() {
            (e = P("nav")),
                (e.innerHTML = `<a href="/" class="a"><img width="48" height="48" src="${Kt}" class="logo" alt=""/></a>`),
                (n = D()),
                l && l.c(),
                k(e, "class", "nav svelte-1af0qv");
        },
        m(r, u) {
            S(r, e, u), S(r, n, u), l && l.m(r, u), (o = !0);
        },
        p(r, [u]) {
            l &&
                l.p &&
                (!o || u & 1) &&
                te(l, s, r, r[0], o ? ee(s, r[0], u, null) : ne(r[0]), null);
        },
        i(r) {
            o || (b(l, r), (o = !0));
        },
        o(r) {
            w(l, r), (o = !1);
        },
        d(r) {
            r && (q(e), q(n)), l && l.d(r);
        },
    };
}
function is(t, e, n) {
    let { $$slots: o = {}, $$scope: s } = e;
    return (
        (t.$$set = (l) => {
            "$$scope" in l && n(0, (s = l.$$scope));
        }),
        [s, o]
    );
}
class Ut extends W {
    constructor(e) {
        super(), J(this, e, is, rs, U, {});
    }
}
function us(t) {
    let e, n, o, s, l, r, u, i, c;
    return {
        c() {
            (e = P("img")),
                (o = D()),
                (s = P("div")),
                (l = P("div")),
                (r = F(t[0])),
                (u = D()),
                (i = P("p")),
                (c = F(t[2])),
                Fe(e.src, (n = t[3])) || k(e, "src", n),
                k(e, "alt", ""),
                k(e, "class", "img svelte-4048nx"),
                k(l, "class", "title svelte-4048nx"),
                k(i, "class", "desc svelte-4048nx"),
                k(s, "class", "body svelte-4048nx");
        },
        m(f, m) {
            S(f, e, m),
                S(f, o, m),
                S(f, s, m),
                E(s, l),
                E(l, r),
                E(s, u),
                E(s, i),
                E(i, c);
        },
        p(f, m) {
            m & 8 && !Fe(e.src, (n = f[3])) && k(e, "src", n),
                m & 1 && Ke(r, f[0]),
                m & 4 && Ke(c, f[2]);
        },
        d(f) {
            f && (q(e), q(o), q(s));
        },
    };
}
function cs(t) {
    let e, n, o;
    return (
        (n = new Gt({
            props: {
                to: t[1],
                $$slots: { default: [us] },
                $$scope: { ctx: t },
            },
        })),
        {
            c() {
                (e = P("div")),
                    I(n.$$.fragment),
                    k(e, "class", "card svelte-4048nx");
            },
            m(s, l) {
                S(s, e, l), R(n, e, null), (o = !0);
            },
            p(s, [l]) {
                const r = {};
                l & 2 && (r.to = s[1]),
                    l & 29 && (r.$$scope = { dirty: l, ctx: s }),
                    n.$set(r);
            },
            i(s) {
                o || (b(n.$$.fragment, s), (o = !0));
            },
            o(s) {
                w(n.$$.fragment, s), (o = !1);
            },
            d(s) {
                s && q(e), M(n);
            },
        }
    );
}
function fs(t, e, n) {
    let { title: o } = e,
        { link: s } = e,
        { desc: l } = e,
        { img: r } = e;
    return (
        (t.$$set = (u) => {
            "title" in u && n(0, (o = u.title)),
                "link" in u && n(1, (s = u.link)),
                "desc" in u && n(2, (l = u.desc)),
                "img" in u && n(3, (r = u.img));
        }),
        [o, s, l, r]
    );
}
let as = class extends W {
    constructor(e) {
        super(), J(this, e, fs, cs, U, { title: 0, link: 1, desc: 2, img: 3 });
    }
};
const Jt = [
    {
        name: "number",
        image: "https://cdn.pixabay.com/photo/2023/10/15/13/59/walnuts-8316999_1280.jpg",
        title: "Kuizz sur des calcules simples",
        link: "/quizs/quiz/number",
        img: "./assets/bourgeoisie.png",
        desc: "Testez vos connaissance sur des simples calcules.",
        minPoint: 3,
        maxPoint: 3,
        resultText: "Vous êtes intelligent !",
        questions: [
            {
                id: "1",
                question: "Est-ce que 1 + 1 fait 2 ?",
                answear: [
                    { type: "button", content: "oui", value: 1 },
                    { type: "button", content: "non", value: 0 },
                ],
            },
            {
                id: "2",
                question: "Combien fait 1 + 1 ?",
                awaited: 2,
                answear: [{ value: 1, type: "number", content: "undefined" }],
            },
            {
                id: "3",
                question: "Combien fait 1 + 1 ?",
                answear: [
                    { type: "button", content: "1", value: 0 },
                    { type: "button", content: "2", value: 1 },
                    { type: "button", content: "3", value: 0 },
                ],
            },
        ],
    },
    {
        name: "bourgeoisie",
        img: "./bourgeoisie.png",
        image: "https://cdn.pixabay.com/photo/2023/08/13/00/50/swallowtail-8186655_1280.jpg",
        title: "Kuizz de bourgeoisie",
        desc: "Suis-je un bourgeois ? Comment savoir si je suis un bourgeois ? Vous vous êtes déjà posé ces questions ? Si vous souhaitez y répondre, vous êtes au bonne endroit.",
        minPoint: 10,
        maxPoint: 16,
        link: "/quizs/quiz/bourgeoisie",
        resultText: "Vous êtes un bourgeois !",
        questions: [
            {
                id: "1",
                question: "Avez-vous déjà participer à un rallye mondain ?",
                answear: [
                    { type: "button", content: "oui", value: 2 },
                    { type: "button", content: "non", value: 0 },
                ],
            },
            {
                id: "2",
                question:
                    "Avez-vous déjà disfiscalisé un don à un parti politique ?",
                answear: [
                    { type: "button", content: "oui", value: 2 },
                    { type: "button", content: "non", value: 0 },
                ],
            },
            {
                id: "3",
                question: "Conaissez-vous l'héritage et la vie de vos aïeux  ?",
                answear: [
                    { type: "button", content: "oui", value: 1 },
                    { type: "button", content: "non", value: 0 },
                ],
            },
            {
                id: "4",
                question: "Faites vous des cousinades réguliéres ?",
                answear: [
                    { type: "button", content: "oui", value: 1 },
                    { type: "button", content: "non", value: 0 },
                ],
            },
            {
                id: "5",
                question: "Est-ce que vous comptez sur un héritage ?",
                answear: [
                    { type: "button", content: "oui", value: 1 },
                    { type: "button", content: "non", value: 0 },
                ],
            },
            {
                id: "6",
                question:
                    "Est-ce que vous prennez l'avion plus de 3 fois par ans ?",
                answear: [
                    { type: "button", content: "oui", value: 1 },
                    { type: "button", content: "non", value: 0 },
                ],
            },
            {
                id: "7",
                question:
                    "Votre famille possède t-elle une jolie maison de famille ?",
                answear: [
                    { type: "button", content: "oui", value: 2 },
                    { type: "button", content: "non", value: 0 },
                ],
            },
            {
                id: "8",
                question: "êtes-vous déjà aller dans une manif de droite ?",
                answear: [
                    { type: "button", content: "oui", value: 1 },
                    { type: "button", content: "non", value: 0 },
                ],
            },
            {
                id: "9",
                question:
                    "Combien de ces activités avez-vous pratiquer ? Golfes, équitation, tennis, polo, voile",
                answear: [{ value: 1, type: "number", content: "undefined" }],
            },
        ],
    },
    {
        name: "mediterranee-antique",
        img: "./bourgeoisie.png",
        image: "https://cdn.pixabay.com/photo/2023/08/13/00/50/swallowtail-8186655_1280.jpg",
        title: "kuizz sur la Méditerranée antique (V - IV)",
        desc: "Testez vos connaissance sur la méditerannée antique !",
        minPoint: 6,
        maxPoint: 8,
        link: "/quizs/quiz/mediterranee-antique",
        resultText: "Vous connaissez la mediterranée antique !",
        questions: [
            {
                id: "1",
                awaited: "490",
                question:
                    "En combien avant JC a eu lieu la bataille du Marathon ?",
                answear: [{ type: "number", content: "AV-JC", value: 1 }],
            },
            {
                id: "2",
                question:
                    "Comment pouvez-vous caractériser la démocratie athénienne ?",
                answear: [
                    {
                        type: "button",
                        content: "C'est une démocratie directe",
                        value: 1,
                    },
                    {
                        type: "button",
                        content:
                            "C'est une démocratie indirecte ou représentative.",
                        value: 0,
                    },
                ],
            },
            {
                id: "3",
                question:
                    "En combien avant JC a eu lieu la bataille de salamine ?",
                awaited: 480,
                answear: [{ type: "number", content: "AV-JC", value: 1 }],
            },
            {
                id: "4",
                question:
                    "Quel définition correspond le mieu au mot clérouquie ?",
                answear: [
                    {
                        type: "button",
                        content: "Fête national athénienne",
                        value: 0,
                    },
                    {
                        type: "button",
                        content:
                            "Expulsion temporaire d'un citoyen voté par l'Eclessia",
                        value: 0,
                    },
                    {
                        type: "button",
                        content:
                            "Envoie de population pauvre dans des territoires alliées pour les dominer",
                        value: 1,
                    },
                ],
            },
            {
                id: "5",
                question:
                    "Comment Périclés a contibué à renforcer la démocratie athénienne ? Séléctionner la mauvaise réponse.",
                answear: [
                    {
                        type: "button",
                        content: "En diminuant le nombre de citoyens",
                        value: 0,
                    },
                    {
                        type: "button",
                        content:
                            "En donnant l'accès gratuit au théâtre aux pauvres",
                        value: 0,
                    },
                    {
                        type: "button",
                        content:
                            "En créant une indemnité pour les citoyens siégent à l'Ecclesia (misthos)",
                        value: 0,
                    },
                    {
                        type: "button",
                        content: "En donnant le droit de vote aux femmes",
                        value: 1,
                    },
                ],
            },
            {
                id: "6",
                question: "Comment Athénne devient un empire maritime ?",
                answear: [
                    {
                        type: "button",
                        content: "Grâce à un très grand port de commerce",
                        value: 0,
                    },
                    { type: "button", content: "Grâce aux perses", value: 1 },
                    {
                        type: "button",
                        content: "Grâce au trésor de Dèlos",
                        value: 1,
                    },
                ],
            },
            {
                id: "7",
                question:
                    "Comment Athénne affirme sa puissance sur les alliées de la ligue de Dèlos ? Sélectionner la mauvaise réponse.",
                answear: [
                    {
                        type: "button",
                        content: "Grâce à des clérouquies",
                        value: 0,
                    },
                    {
                        type: "button",
                        content: "En déplacant le trésor de la ligue à athénne",
                        value: 0,
                    },
                    { type: "button", content: "Grâce aux perses", value: 1 },
                ],
            },
            {
                id: "8",
                question:
                    "Quand se déroule la bataille du Peloponèsse ? 431 - ?",
                answear: [
                    { type: "button", content: "456", value: 0 },
                    { type: "button", content: "404", value: 1 },
                ],
            },
        ],
    },
];
function ms(t, e, n) {
    const o = t.slice();
    return (o[0] = e[n]), o;
}
function _s(t) {
    let e, n;
    return (
        (e = new as({
            props: {
                title: t[0].title,
                link: t[0].link,
                desc: t[0].desc,
                img: t[0].image,
            },
        })),
        {
            c() {
                I(e.$$.fragment);
            },
            m(o, s) {
                R(e, o, s), (n = !0);
            },
            p: j,
            i(o) {
                n || (b(e.$$.fragment, o), (n = !0));
            },
            o(o) {
                w(e.$$.fragment, o), (n = !1);
            },
            d(o) {
                M(e, o);
            },
        }
    );
}
function ds(t) {
    let e,
        n,
        o = Se(Jt),
        s = [];
    for (let l = 0; l < o.length; l += 1) s[l] = _s(ms(t, o, l));
    return {
        c() {
            e = P("div");
            for (let l = 0; l < s.length; l += 1) s[l].c();
            k(e, "class", "quiz svelte-14g7ta0");
        },
        m(l, r) {
            S(l, e, r);
            for (let u = 0; u < s.length; u += 1) s[u] && s[u].m(e, null);
            n = !0;
        },
        p: j,
        i(l) {
            if (!n) {
                for (let r = 0; r < o.length; r += 1) b(s[r]);
                n = !0;
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let r = 0; r < s.length; r += 1) w(s[r]);
            n = !1;
        },
        d(l) {
            l && q(e), xe(s, l);
        },
    };
}
class Wt extends W {
    constructor(e) {
        super(), J(this, e, null, ds, U, {});
    }
}
function ps(t) {
    let e, n;
    const o = t[1].default,
        s = x(o, t, t[0], null);
    return {
        c() {
            (e = P("h2")), s && s.c(), k(e, "class", "title svelte-1kuhdy9");
        },
        m(l, r) {
            S(l, e, r), s && s.m(e, null), (n = !0);
        },
        p(l, [r]) {
            s &&
                s.p &&
                (!n || r & 1) &&
                te(s, o, l, l[0], n ? ee(o, l[0], r, null) : ne(l[0]), null);
        },
        i(l) {
            n || (b(s, l), (n = !0));
        },
        o(l) {
            w(s, l), (n = !1);
        },
        d(l) {
            l && q(e), s && s.d(l);
        },
    };
}
function hs(t, e, n) {
    let { $$slots: o = {}, $$scope: s } = e;
    return (
        (t.$$set = (l) => {
            "$$scope" in l && n(0, (s = l.$$scope));
        }),
        [s, o]
    );
}
class ke extends W {
    constructor(e) {
        super(), J(this, e, hs, ps, U, {});
    }
}
function gs(t) {
    let e;
    return {
        c() {
            e = F("Vous vous posez des questions ?");
        },
        m(n, o) {
            S(n, e, o);
        },
        d(n) {
            n && q(e);
        },
    };
}
function bs(t) {
    let e;
    return {
        c() {
            e = F("Testez-vous sur des quiz à thème divers et variés.");
        },
        m(n, o) {
            S(n, e, o);
        },
        d(n) {
            n && q(e);
        },
    };
}
function ys(t) {
    let e;
    return {
        c() {
            e = F("Voir les quiz !");
        },
        m(n, o) {
            S(n, e, o);
        },
        d(n) {
            n && q(e);
        },
    };
}
function vs(t) {
    let e;
    return {
        c() {
            e = F("Quiz");
        },
        m(n, o) {
            S(n, e, o);
        },
        d(n) {
            n && q(e);
        },
    };
}
function ks(t) {
    let e, n, o, s, l, r, u, i, c, f, m, _, a, d, g, p, h, C, $, T, V;
    return (
        (n = new Ut({})),
        (u = new ke({
            props: { $$slots: { default: [gs] }, $$scope: { ctx: t } },
        })),
        (c = new Xe({
            props: { $$slots: { default: [bs] }, $$scope: { ctx: t } },
        })),
        (_ = new Ae({
            props: {
                link: "/quizs",
                $$slots: { default: [ys] },
                $$scope: { ctx: t },
            },
        })),
        (C = new ke({
            props: { $$slots: { default: [vs] }, $$scope: { ctx: t } },
        })),
        (T = new Wt({})),
        {
            c() {
                (e = P("div")),
                    I(n.$$.fragment),
                    (o = D()),
                    (s = P("section")),
                    (l = P("div")),
                    (r = P("div")),
                    I(u.$$.fragment),
                    (i = D()),
                    I(c.$$.fragment),
                    (f = D()),
                    (m = P("div")),
                    I(_.$$.fragment),
                    (a = D()),
                    (d = P("p")),
                    (d.innerHTML =
                        '<span class="e svelte-182o0qf">!</span><span class="q svelte-182o0qf">?</span>'),
                    (g = D()),
                    (p = P("section")),
                    (h = P("div")),
                    I(C.$$.fragment),
                    ($ = D()),
                    I(T.$$.fragment),
                    k(m, "class", "btn svelte-182o0qf"),
                    k(l, "class", "body svelte-182o0qf"),
                    k(d, "class", "logo svelte-182o0qf"),
                    k(s, "class", "hero svelte-182o0qf"),
                    k(h, "class", "center"),
                    k(p, "class", "quiz"),
                    k(e, "class", "page svelte-182o0qf");
            },
            m(O, Q) {
                S(O, e, Q),
                    R(n, e, null),
                    E(e, o),
                    E(e, s),
                    E(s, l),
                    E(l, r),
                    R(u, r, null),
                    E(r, i),
                    R(c, r, null),
                    E(l, f),
                    E(l, m),
                    R(_, m, null),
                    E(s, a),
                    E(s, d),
                    E(e, g),
                    E(e, p),
                    E(p, h),
                    R(C, h, null),
                    E(p, $),
                    R(T, p, null),
                    (V = !0);
            },
            p(O, [Q]) {
                const N = {};
                Q & 1 && (N.$$scope = { dirty: Q, ctx: O }), u.$set(N);
                const y = {};
                Q & 1 && (y.$$scope = { dirty: Q, ctx: O }), c.$set(y);
                const H = {};
                Q & 1 && (H.$$scope = { dirty: Q, ctx: O }), _.$set(H);
                const B = {};
                Q & 1 && (B.$$scope = { dirty: Q, ctx: O }), C.$set(B);
            },
            i(O) {
                V ||
                    (b(n.$$.fragment, O),
                    b(u.$$.fragment, O),
                    b(c.$$.fragment, O),
                    b(_.$$.fragment, O),
                    b(C.$$.fragment, O),
                    b(T.$$.fragment, O),
                    (V = !0));
            },
            o(O) {
                w(n.$$.fragment, O),
                    w(u.$$.fragment, O),
                    w(c.$$.fragment, O),
                    w(_.$$.fragment, O),
                    w(C.$$.fragment, O),
                    w(T.$$.fragment, O),
                    (V = !1);
            },
            d(O) {
                O && q(e), M(n), M(u), M(c), M(_), M(C), M(T);
            },
        }
    );
}
let zt = class extends W {
    constructor(e) {
        super(), J(this, e, null, ks, U, {});
    }
};
function ws(t) {
    let e;
    return {
        c() {
            e = F("Quiz");
        },
        m(n, o) {
            S(n, e, o);
        },
        d(n) {
            n && q(e);
        },
    };
}
function qs(t) {
    let e, n, o, s, l, r, u, i, c;
    return (
        (n = new Ut({})),
        (r = new ke({
            props: { $$slots: { default: [ws] }, $$scope: { ctx: t } },
        })),
        (i = new Wt({})),
        {
            c() {
                (e = P("div")),
                    I(n.$$.fragment),
                    (o = D()),
                    (s = P("section")),
                    (l = P("div")),
                    I(r.$$.fragment),
                    (u = D()),
                    I(i.$$.fragment),
                    k(l, "class", "center svelte-kj67zp"),
                    k(s, "class", "quiz"),
                    k(e, "class", "page svelte-kj67zp");
            },
            m(f, m) {
                S(f, e, m),
                    R(n, e, null),
                    E(e, o),
                    E(e, s),
                    E(s, l),
                    R(r, l, null),
                    E(s, u),
                    R(i, s, null),
                    (c = !0);
            },
            p(f, [m]) {
                const _ = {};
                m & 1 && (_.$$scope = { dirty: m, ctx: f }), r.$set(_);
            },
            i(f) {
                c ||
                    (b(n.$$.fragment, f),
                    b(r.$$.fragment, f),
                    b(i.$$.fragment, f),
                    (c = !0));
            },
            o(f) {
                w(n.$$.fragment, f),
                    w(r.$$.fragment, f),
                    w(i.$$.fragment, f),
                    (c = !1);
            },
            d(f) {
                f && q(e), M(n), M(r), M(i);
            },
        }
    );
}
let zs = class extends W {
    constructor(e) {
        super(), J(this, e, null, qs, U, {});
    }
};
function Et(t, e, n) {
    const o = t.slice();
    return (o[28] = e[n]), o;
}
function St(t, e, n) {
    const o = t.slice();
    return (o[31] = e[n]), o;
}
function Es(t) {
    let e = t[11].title + "",
        n;
    return {
        c() {
            n = F(e);
        },
        m(o, s) {
            S(o, n, s);
        },
        p: j,
        d(o) {
            o && q(n);
        },
    };
}
function Ss(t) {
    let e = t[11].desc + "",
        n;
    return {
        c() {
            n = F(e);
        },
        m(o, s) {
            S(o, n, s);
        },
        p: j,
        d(o) {
            o && q(n);
        },
    };
}
function Ps(t) {
    let e;
    return {
        c() {
            e = F("Commencer le quiz");
        },
        m(n, o) {
            S(n, e, o);
        },
        d(n) {
            n && q(e);
        },
    };
}
function $s(t) {
    let e = t[28].question + "",
        n;
    return {
        c() {
            n = F(e);
        },
        m(o, s) {
            S(o, n, s);
        },
        p: j,
        d(o) {
            o && q(n);
        },
    };
}
function Pt(t) {
    let e, n, o;
    return {
        c() {
            (e = P("input")),
                k(e, "data-point", t[31].value),
                k(e, "type", t[31].type),
                (e.value = t[31].content),
                k(e, "class", "svelte-m49g08");
        },
        m(s, l) {
            S(s, e, l), n || ((o = et(e, "click", t[16])), (n = !0));
        },
        p: j,
        d(s) {
            s && q(e), (n = !1), o();
        },
    };
}
function $t(t) {
    let e,
        n,
        o,
        s,
        l,
        r,
        u,
        i = t[0] + 1 + "",
        c,
        f,
        m = t[11].questions.length + 1 + "",
        _,
        a,
        d;
    o = new ke({ props: { $$slots: { default: [$s] }, $$scope: { ctx: t } } });
    let g = Se(t[28].answear),
        p = [];
    for (let h = 0; h < g.length; h += 1) p[h] = Pt(St(t, g, h));
    return {
        c() {
            (e = P("div")),
                (n = P("div")),
                I(o.$$.fragment),
                (s = D()),
                (l = P("div"));
            for (let h = 0; h < p.length; h += 1) p[h].c();
            (r = D()),
                (u = P("p")),
                (c = F(i)),
                (f = F(" / ")),
                (_ = F(m)),
                (a = D()),
                k(n, "class", "center svelte-m49g08"),
                k(l, "class", "answears svelte-m49g08"),
                k(u, "class", "pageNbr svelte-m49g08"),
                k(
                    e,
                    "class",
                    en(`${t[28].id} question right`) + " svelte-m49g08"
                );
        },
        m(h, C) {
            S(h, e, C), E(e, n), R(o, n, null), E(e, s), E(e, l);
            for (let $ = 0; $ < p.length; $ += 1) p[$] && p[$].m(l, null);
            E(e, r), E(e, u), E(u, c), E(u, f), E(u, _), E(e, a), (d = !0);
        },
        p(h, C) {
            const $ = {};
            if (
                (C[1] & 8 && ($.$$scope = { dirty: C, ctx: h }),
                o.$set($),
                C[0] & 2052)
            ) {
                g = Se(h[28].answear);
                let T;
                for (T = 0; T < g.length; T += 1) {
                    const V = St(h, g, T);
                    p[T]
                        ? p[T].p(V, C)
                        : ((p[T] = Pt(V)), p[T].c(), p[T].m(l, null));
                }
                for (; T < p.length; T += 1) p[T].d(1);
                p.length = g.length;
            }
            (!d || C[0] & 1) && i !== (i = h[0] + 1 + "") && Ke(c, i);
        },
        i(h) {
            d || (b(o.$$.fragment, h), (d = !0));
        },
        o(h) {
            w(o.$$.fragment, h), (d = !1);
        },
        d(h) {
            h && q(e), M(o), xe(p, h);
        },
    };
}
function Cs(t) {
    let e, n, o;
    return {
        c() {
            (e = F("Vous avez ")), (n = P("span")), (o = F(" point !"));
        },
        m(s, l) {
            S(s, e, l), S(s, n, l), t[19](n), S(s, o, l);
        },
        p: j,
        d(s) {
            s && (q(e), q(n), q(o)), t[19](null);
        },
    };
}
function Ls(t) {
    let e;
    return {
        c() {
            e = P("span");
        },
        m(n, o) {
            S(n, e, o), t[20](e);
        },
        p: j,
        d(n) {
            n && q(e), t[20](null);
        },
    };
}
function Ts(t) {
    let e;
    return {
        c() {
            e = F("Prev");
        },
        m(n, o) {
            S(n, e, o);
        },
        d(n) {
            n && q(e);
        },
    };
}
function Ns(t) {
    let e;
    return {
        c() {
            e = F("Next");
        },
        m(n, o) {
            S(n, e, o);
        },
        d(n) {
            n && q(e);
        },
    };
}
function As(t) {
    let e,
        n,
        o,
        s,
        l,
        r,
        u,
        i,
        c,
        f,
        m,
        _,
        a,
        d,
        g,
        p,
        h,
        C,
        $,
        T,
        V,
        O,
        Q,
        N,
        y,
        H,
        B,
        G,
        se,
        v,
        le;
    (s = new ke({
        props: { $$slots: { default: [Es] }, $$scope: { ctx: t } },
    })),
        (r = new Xe({
            props: { $$slots: { default: [Ss] }, $$scope: { ctx: t } },
        })),
        (i = new Ae({
            props: { $$slots: { default: [Ps] }, $$scope: { ctx: t } },
        })),
        i.$on("click", t[14]);
    let Y = Se(t[11].questions),
        A = [];
    for (let z = 0; z < Y.length; z += 1) A[z] = $t(Et(t, Y, z));
    const Z = (z) =>
        w(A[z], 1, 1, () => {
            A[z] = null;
        });
    return (
        ($ = new ke({
            props: { $$slots: { default: [Cs] }, $$scope: { ctx: t } },
        })),
        (V = new Xe({
            props: { $$slots: { default: [Ls] }, $$scope: { ctx: t } },
        })),
        (y = new Ae({
            props: {
                bgColor: "transparent",
                borderColor: "gray",
                color: "black",
                width: 200,
                height: 32,
                fontSize: 16,
                $$slots: { default: [Ts] },
                $$scope: { ctx: t },
            },
        })),
        y.$on("click", t[22]),
        (v = new Ae({
            props: {
                color: "black",
                borderColor: "#4556DB",
                bgColor: "transparent",
                width: 200,
                height: 32,
                fontSize: 16,
                $$slots: { default: [Ns] },
                $$scope: { ctx: t },
            },
        })),
        v.$on("click", t[25]),
        {
            c() {
                (e = P("section")),
                    (n = P("div")),
                    (o = P("div")),
                    I(s.$$.fragment),
                    (l = D()),
                    I(r.$$.fragment),
                    (u = D()),
                    I(i.$$.fragment),
                    (c = D()),
                    (f = P("img")),
                    (_ = D()),
                    (a = P("section")),
                    (d = P("form")),
                    (g = P("div"));
                for (let z = 0; z < A.length; z += 1) A[z].c();
                (p = D()),
                    (h = P("section")),
                    (C = P("div")),
                    I($.$$.fragment),
                    (T = D()),
                    I(V.$$.fragment),
                    (O = D()),
                    (Q = P("footer")),
                    (N = P("div")),
                    I(y.$$.fragment),
                    (H = D()),
                    (B = P("a")),
                    (B.innerHTML = `<img width="64" height="64" src="${Kt}" alt=""/>`),
                    (G = D()),
                    (se = P("div")),
                    I(v.$$.fragment),
                    k(n, "class", "body svelte-m49g08"),
                    Fe(f.src, (m = t[11].image)) || k(f, "src", m),
                    k(f, "class", "img svelte-m49g08"),
                    k(f, "alt", ""),
                    k(f, "width", "600"),
                    k(f, "height", "400"),
                    k(e, "class", "hero svelte-m49g08"),
                    k(g, "class", "pages"),
                    k(d, "class", "form"),
                    k(a, "class", "currentQuiz"),
                    k(C, "class", "center svelte-m49g08"),
                    k(h, "class", "result svelte-m49g08"),
                    k(N, "class", "container svelte-m49g08"),
                    k(B, "class", "logo svelte-m49g08"),
                    k(B, "href", "/"),
                    k(se, "class", "container svelte-m49g08"),
                    k(Q, "class", "footer svelte-m49g08");
            },
            m(z, L) {
                S(z, e, L),
                    E(e, n),
                    E(n, o),
                    R(s, o, null),
                    E(o, l),
                    R(r, o, null),
                    E(n, u),
                    R(i, n, null),
                    E(e, c),
                    E(e, f),
                    t[15](e),
                    S(z, _, L),
                    S(z, a, L),
                    E(a, d),
                    E(d, g);
                for (let ce = 0; ce < A.length; ce += 1)
                    A[ce] && A[ce].m(g, null);
                t[17](g),
                    t[18](a),
                    S(z, p, L),
                    S(z, h, L),
                    E(h, C),
                    R($, C, null),
                    E(C, T),
                    R(V, C, null),
                    t[21](h),
                    S(z, O, L),
                    S(z, Q, L),
                    E(Q, N),
                    R(y, N, null),
                    t[23](N),
                    E(Q, H),
                    E(Q, B),
                    t[24](B),
                    E(Q, G),
                    E(Q, se),
                    R(v, se, null),
                    t[26](se),
                    (le = !0);
            },
            p(z, L) {
                const ce = {};
                L[1] & 8 && (ce.$$scope = { dirty: L, ctx: z }), s.$set(ce);
                const nt = {};
                L[1] & 8 && (nt.$$scope = { dirty: L, ctx: z }), r.$set(nt);
                const st = {};
                if (
                    (L[1] & 8 && (st.$$scope = { dirty: L, ctx: z }),
                    i.$set(st),
                    L[0] & 2053)
                ) {
                    Y = Se(z[11].questions);
                    let K;
                    for (K = 0; K < Y.length; K += 1) {
                        const ut = Et(z, Y, K);
                        A[K]
                            ? (A[K].p(ut, L), b(A[K], 1))
                            : ((A[K] = $t(ut)),
                              A[K].c(),
                              b(A[K], 1),
                              A[K].m(g, null));
                    }
                    for (ie(), K = Y.length; K < A.length; K += 1) Z(K);
                    ue();
                }
                const ot = {};
                (L[0] & 128) | (L[1] & 8) &&
                    (ot.$$scope = { dirty: L, ctx: z }),
                    $.$set(ot);
                const lt = {};
                (L[0] & 256) | (L[1] & 8) &&
                    (lt.$$scope = { dirty: L, ctx: z }),
                    V.$set(lt);
                const rt = {};
                L[1] & 8 && (rt.$$scope = { dirty: L, ctx: z }), y.$set(rt);
                const it = {};
                L[1] & 8 && (it.$$scope = { dirty: L, ctx: z }), v.$set(it);
            },
            i(z) {
                if (!le) {
                    b(s.$$.fragment, z),
                        b(r.$$.fragment, z),
                        b(i.$$.fragment, z);
                    for (let L = 0; L < Y.length; L += 1) b(A[L]);
                    b($.$$.fragment, z),
                        b(V.$$.fragment, z),
                        b(y.$$.fragment, z),
                        b(v.$$.fragment, z),
                        (le = !0);
                }
            },
            o(z) {
                w(s.$$.fragment, z),
                    w(r.$$.fragment, z),
                    w(i.$$.fragment, z),
                    (A = A.filter(Boolean));
                for (let L = 0; L < A.length; L += 1) w(A[L]);
                w($.$$.fragment, z),
                    w(V.$$.fragment, z),
                    w(y.$$.fragment, z),
                    w(v.$$.fragment, z),
                    (le = !1);
            },
            d(z) {
                z && (q(e), q(_), q(a), q(p), q(h), q(O), q(Q)),
                    M(s),
                    M(r),
                    M(i),
                    t[15](null),
                    xe(A, z),
                    t[17](null),
                    t[18](null),
                    M($),
                    M(V),
                    t[21](null),
                    M(y),
                    t[23](null),
                    t[24](null),
                    M(v),
                    t[26](null);
            },
        }
    );
}
function Os(t, e, n) {
    let { slug: o } = e,
        s,
        l = -1,
        r = null,
        u = null,
        i = null,
        c,
        f,
        m,
        _,
        a;
    const d = Jt.find((v) => v.name == o);
    let g, p;
    s = Array(d.questions.length).fill(null);
    const h = (v) => n(0, (l = 0));
    function C(v) {
        X[v ? "unshift" : "push"](() => {
            (r = v),
                n(4, r),
                n(1, u),
                n(2, c),
                n(0, l),
                n(13, s),
                n(8, _),
                n(3, p);
        });
    }
    const $ = (v) => n(2, (c = v.currentTarget));
    function T(v) {
        X[v ? "unshift" : "push"](() => {
            (u = v), n(1, u);
        });
    }
    function V(v) {
        X[v ? "unshift" : "push"](() => {
            (f = v),
                n(6, f),
                n(1, u),
                n(2, c),
                n(0, l),
                n(13, s),
                n(8, _),
                n(3, p);
        });
    }
    function O(v) {
        X[v ? "unshift" : "push"](() => {
            (m = v),
                n(7, m),
                n(1, u),
                n(2, c),
                n(0, l),
                n(13, s),
                n(8, _),
                n(3, p);
        });
    }
    function Q(v) {
        X[v ? "unshift" : "push"](() => {
            (_ = v), n(8, _), n(1, u), n(2, c), n(0, l), n(13, s), n(3, p);
        });
    }
    function N(v) {
        X[v ? "unshift" : "push"](() => {
            (i = v),
                n(5, i),
                n(1, u),
                n(2, c),
                n(0, l),
                n(13, s),
                n(8, _),
                n(3, p);
        });
    }
    const y = (v) => {
        v.preventDefault(), n(0, l--, l);
    };
    function H(v) {
        X[v ? "unshift" : "push"](() => {
            (p = v), n(3, p), n(1, u), n(2, c), n(0, l), n(13, s), n(8, _);
        });
    }
    function B(v) {
        X[v ? "unshift" : "push"](() => {
            (a = v),
                n(9, a),
                n(1, u),
                n(2, c),
                n(0, l),
                n(13, s),
                n(8, _),
                n(3, p);
        });
    }
    const G = (v) => {
        v.preventDefault(), n(0, l++, l);
    };
    function se(v) {
        X[v ? "unshift" : "push"](() => {
            (g = v),
                n(10, g),
                n(1, u),
                n(2, c),
                n(0, l),
                n(13, s),
                n(8, _),
                n(3, p);
        });
    }
    return (
        (t.$$set = (v) => {
            "slug" in v && n(12, (o = v.slug));
        }),
        (t.$$.update = () => {
            if ((t.$$.dirty[0] & 1, t.$$.dirty[0] & 8463 && u)) {
                if (
                    (c
                        ? (l !== -1 && n(13, (s[l] = c), s),
                          l <= d.questions.length
                              ? n(10, (g.style.visibility = "visible"), g)
                              : n(10, (g.style.visibility = "hidden"), g),
                          n(2, (c = null)))
                        : n(10, (g.style.visibility = "hidden"), g),
                    l >= 0
                        ? n(3, (p.style.visibility = "visible"), p)
                        : n(3, (p.style.visibility = "hidden"), p),
                    l == -1)
                )
                    n(4, (r.style.display = "flex"), r),
                        n(6, (f.style.display = "none"), f),
                        n(9, (a.style.visibility = "visible"), a);
                else if (l === d.questions.length) {
                    n(10, (g.style.visibility = "hidden"), g),
                        n(3, (p.style.visibility = "hidden"), p);
                    let A = 0;
                    n(9, (a.style.visibility = "visible"), a),
                        s.map((Z, z) => {
                            const L = Number(Z.getAttribute("data-point"));
                            Z.type == "text" || Z.type == "number"
                                ? (console.log(Z),
                                  d.questions[z].awaited
                                      ? Z.value ===
                                            String(d.questions[z].awaited) &&
                                        (A += L)
                                      : (A += Number(Z.value)))
                                : (A += L);
                        }),
                        n(
                            8,
                            (_.innerHTML = `<br />${String(A)} / ${
                                d.maxPoint
                            }`),
                            _
                        ),
                        n(
                            8,
                            (_.innerHTML += `<br />${Math.floor(
                                (100 * d.maxPoint) / A
                            )}% de bonnes réponses`),
                            _
                        ),
                        n(
                            8,
                            (_.innerHTML += `<br />${Math.floor(
                                (20 * A) / d.maxPoint
                            )}/20 de bonnes réponses`),
                            _
                        ),
                        A >= d.minPoint &&
                            n(8, (_.innerHTML += `<br />${d.resultText}`), _),
                        n(7, (m.innerText = String(A)), m),
                        n(5, (i.style.display = "block"), i);
                } else
                    n(9, (a.style.visibility = "hidden"), a),
                        n(4, (r.style.display = "none"), r),
                        n(6, (f.style.display = "block"), f),
                        n(5, (i.style.display = "none"), i);
                const v = u.querySelectorAll(".question"),
                    le = v[l - 1],
                    Y = v[l + 1];
                le &&
                    (p.classList.contains("right") &&
                        le.classList.remove("right"),
                    le.classList.add("left")),
                    Y &&
                        (p.classList.contains("next") &&
                            Y.classList.remove("left"),
                        Y.classList.remove("left"),
                        Y.classList.add("right")),
                    v.forEach((A, Z) => {
                        l === Z
                            ? A.classList.add("active")
                            : A.classList.remove("active");
                    });
            }
        }),
        [
            l,
            u,
            c,
            p,
            r,
            i,
            f,
            m,
            _,
            a,
            g,
            d,
            o,
            s,
            h,
            C,
            $,
            T,
            V,
            O,
            Q,
            N,
            y,
            H,
            B,
            G,
            se,
        ]
    );
}
class js extends W {
    constructor(e) {
        super(), J(this, e, Os, As, U, { slug: 12 }, null, [-1, -1]);
    }
}
function Rs(t) {
    let e, n, o, s, l, r, u, i, c, f;
    const m = t[0].default,
        _ = x(m, t, t[1], null);
    return (
        (o = new Te({ props: { path: "*", component: zt } })),
        (l = new Te({ props: { path: "/", component: zt } })),
        (u = new Te({ props: { path: "quizs", component: zs } })),
        (c = new Te({ props: { path: "quizs/quiz/:slug", component: js } })),
        {
            c() {
                _ && _.c(),
                    (e = D()),
                    (n = P("div")),
                    I(o.$$.fragment),
                    (s = D()),
                    I(l.$$.fragment),
                    (r = D()),
                    I(u.$$.fragment),
                    (i = D()),
                    I(c.$$.fragment);
            },
            m(a, d) {
                _ && _.m(a, d),
                    S(a, e, d),
                    S(a, n, d),
                    R(o, n, null),
                    E(n, s),
                    R(l, n, null),
                    E(n, r),
                    R(u, n, null),
                    E(n, i),
                    R(c, n, null),
                    (f = !0);
            },
            p(a, d) {
                _ &&
                    _.p &&
                    (!f || d & 2) &&
                    te(
                        _,
                        m,
                        a,
                        a[1],
                        f ? ee(m, a[1], d, null) : ne(a[1]),
                        null
                    );
            },
            i(a) {
                f ||
                    (b(_, a),
                    b(o.$$.fragment, a),
                    b(l.$$.fragment, a),
                    b(u.$$.fragment, a),
                    b(c.$$.fragment, a),
                    (f = !0));
            },
            o(a) {
                w(_, a),
                    w(o.$$.fragment, a),
                    w(l.$$.fragment, a),
                    w(u.$$.fragment, a),
                    w(c.$$.fragment, a),
                    (f = !1);
            },
            d(a) {
                a && (q(e), q(n)), _ && _.d(a), M(o), M(l), M(u), M(c);
            },
        }
    );
}
function Ms(t) {
    let e, n, o;
    return (
        (n = new Zn({
            props: { $$slots: { default: [Rs] }, $$scope: { ctx: t } },
        })),
        {
            c() {
                (e = P("main")), I(n.$$.fragment);
            },
            m(s, l) {
                S(s, e, l), R(n, e, null), (o = !0);
            },
            p(s, [l]) {
                const r = {};
                l & 2 && (r.$$scope = { dirty: l, ctx: s }), n.$set(r);
            },
            i(s) {
                o || (b(n.$$.fragment, s), (o = !0));
            },
            o(s) {
                w(n.$$.fragment, s), (o = !1);
            },
            d(s) {
                s && q(e), M(n);
            },
        }
    );
}
function Ds(t, e, n) {
    let { $$slots: o = {}, $$scope: s } = e;
    return (
        (t.$$set = (l) => {
            "$$scope" in l && n(1, (s = l.$$scope));
        }),
        [o, s]
    );
}
class Is extends W {
    constructor(e) {
        super(), J(this, e, Ds, Ms, U, {});
    }
}
new Is({ target: document.getElementById("app") });
