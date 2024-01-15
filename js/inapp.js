!function(t) {
    var e = {};
    function n(r) {
        if (e[r])
            return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                n.d(r, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "/",
    n(n.s = 108)
}([function(t, e, n) {
    "use strict";
    n.d(e, "createObservable", function() {
        return r
    }),
    n.d(e, "isNamespaceInWindow", function() {
        return i
    }),
    n.d(e, "injectProvider", function() {
        return s
    });
    const r = ()=>{
        let t = [];
        return {
            notify: function(e) {
                t.forEach(t=>t(e))
            },
            observe: function(e) {
                return t.push(e),
                ()=>{
                    t = t.filter(t=>t !== e)
                }
            }
        }
    }
      , i = t=>t in window
      , o = (t,e,n,{overridable: r=!1, set: i}={})=>{
        const o = {
            configurable: r,
            enumerable: !0
        };
        return r ? (o.value = n,
        o.writable = !0) : (o.set = i,
        o.get = (()=>n)),
        Object.defineProperty(t, e, o)
    }
      , s = (t,e,{namespace: n, overridable: r, set: s}={
        namespace: null,
        overridable: !1
    })=>{
        try {
            let a = window;
            n && (i(n) || o(window, n, {}, {
                overridable: r,
                set: s
            }),
            a = window[n]),
            o(a, e, t, {
                overridable: r,
                set: s
            })
        } catch (t) {
            console.warn(`Could not assign Exodus provider to window ${n ? `.${n}` : ""}.${e}`)
        }
    }
}
, function(t, e, n) {
    t.exports = function(t, e) {
        e && (t.super_ = e,
        t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }))
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "ALGORAND_ALGOSIGNER_PROVIDER", function() {
        return r
    }),
    n.d(e, "ALGORAND_EXODUS_PROVIDER", function() {
        return i
    }),
    n.d(e, "ALGORAND_ARC_PROVIDER", function() {
        return o
    }),
    n.d(e, "ALGORAND_MYALGO_PROVIDER", function() {
        return s
    }),
    n.d(e, "CARDANO_EXODUS_PROVIDER", function() {
        return a
    }),
    n.d(e, "ETHEREUM_EXODUS_PROVIDER", function() {
        return u
    }),
    n.d(e, "COSMOS_EXODUS_PROVIDER", function() {
        return c
    }),
    n.d(e, "COSMOS_KEPLR_PROVIDER", function() {
        return l
    }),
    n.d(e, "SOLANA_EXODUS_PROVIDER", function() {
        return h
    }),
    n.d(e, "MANAGEMENT_EXODUS_PROVIDER", function() {
        return f
    });
    const r = Symbol.for("__exodus_algosigner_provider")
      , i = Symbol.for("__exodus_algorand_provider")
      , o = Symbol.for("__exodus_algorand_arc_provider")
      , s = Symbol.for("__exodus_myalgo_provider")
      , a = Symbol.for("__exodus_cardano_provider")
      , u = Symbol.for("__exodus_ethereum_provider")
      , c = Symbol.for("__exodus_cosmos_provider")
      , l = Symbol.for("__exodus_cosmos_keplr_provider")
      , h = Symbol.for("__exodus_solana_provider")
      , f = Symbol.for("__exodus_management_provider")
}
, function(t, e, n) {
    "use strict";
    n.d(e, "RPC_REQUEST_TIMEOUT", function() {
        return r
    }),
    n.d(e, "EXODUS_ICON", function() {
        return i
    });
    const r = 3e5
      , i = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8bWFzayBpZD0iYSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIj4KICAgIDxwYXRoIGQ9Ik03OS41MjEgMjIuMzM3IDQ1LjQ1MyAwdjEyLjQ4OUw2Ny4zMDggMjYuNjlsLTIuNTcxIDguMTM2SDQ1LjQ1M3YxMC4zNDhoMTkuMjg0bDIuNTcxIDguMTM2TDQ1LjQ1MyA2Ny41MVY4MGwzNC4wNjgtMjIuMjY2LTUuNTctMTcuNjk4IDUuNTctMTcuNjk5Wk0xNS44MTQgNDUuMTc0aDE5LjIxMlYzNC44MjZIMTUuNzQybC0yLjUtOC4xMzZMMzUuMDI2IDEyLjQ5VjBMLjk1OCAyMi4zMzdsNS41NyAxNy42OTktNS41NyAxNy42OThMMzUuMDk4IDgwVjY3LjUxMUwxMy4yNDIgNTMuMzFsMi41Ny04LjEzNloiIGZpbGw9IiMxRDFEMUIiLz4KICA8L21hc2s+CiAgPGcgbWFzaz0idXJsKCNhKSI+CiAgICA8cGF0aCBkPSJNNzkuNTIxIDIyLjMzNyA0NS40NTMgMHYxMi40ODlMNjcuMzA4IDI2LjY5bC0yLjU3MSA4LjEzNkg0NS40NTN2MTAuMzQ4aDE5LjI4NGwyLjU3MSA4LjEzNkw0NS40NTMgNjcuNTFWODBsMzQuMDY4LTIyLjI2Ni01LjU3LTE3LjY5OCA1LjU3LTE3LjY5OVpNMTUuODE0IDQ1LjE3NGgxOS4yMTJWMzQuODI2SDE1Ljc0MmwtMi41LTguMTM2TDM1LjAyNiAxMi40OVYwTC45NTggMjIuMzM3bDUuNTcgMTcuNjk5LTUuNTcgMTcuNjk4TDM1LjA5OCA4MFY2Ny41MTFMMTMuMjQyIDUzLjMxbDIuNTctOC4xMzZaIiBmaWxsPSIjZmZmIi8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNMS4wNiAwaDg2Ljk1NXY4OC40NzdIMS4wNnoiLz4KICAgIDxlbGxpcHNlIGN4PSI1LjgyMiIgY3k9IjE3LjU0NCIgcng9Ijc2LjQ4NCIgcnk9IjgyLjkyNCIgdHJhbnNmb3JtPSJyb3RhdGUoLTMzLjkzIDUuODIyIDE3LjU0NCkiIGZpbGw9InVybCgjYykiLz4KICA8L2c+CiAgPGRlZnM+CiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9ImMiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoNzIuMjU2IC05LjEwNiAxMi43Nikgc2NhbGUoNjIuNzM5IDU4LjgwOTYpIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIuMTIiIHN0b3AtY29sb3I9IiM4OTUyRkYiIHN0b3Atb3BhY2l0eT0iLjg3Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RBQkRGRiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8L3JhZGlhbEdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iNjguNjYyIiB5MT0iODUuODk3IiB4Mj0iNDUuNzUiIHkyPSItOC4yOTIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzBCNDZGOSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCQkZCRTAiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgo8L3N2Zz4K"
}
, function(t, e, n) {
    /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
    var r = n(7)
      , Buffer = r.Buffer;
    function i(t, e) {
        for (var n in t)
            e[n] = t[n]
    }
    function o(t, e, n) {
        return Buffer(t, e, n)
    }
    Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow ? t.exports = r : (i(r, e),
    e.Buffer = o),
    o.prototype = Object.create(Buffer.prototype),
    i(Buffer, o),
    o.from = function(t, e, n) {
        if ("number" == typeof t)
            throw new TypeError("Argument must not be a number");
        return Buffer(t, e, n)
    }
    ,
    o.alloc = function(t, e, n) {
        if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
        var r = Buffer(t);
        return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0),
        r
    }
    ,
    o.allocUnsafe = function(t) {
        if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
        return Buffer(t)
    }
    ,
    o.allocUnsafeSlow = function(t) {
        if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
        return r.SlowBuffer(t)
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "createMyAlgoProviderProxy", function() {
        return O
    }),
    n.d(e, "createAlgoSignerProviderProxy", function() {
        return I
    }),
    n.d(e, "createAlgorandProviderProxy", function() {
        return M
    }),
    n.d(e, "createAlgorandARCProviderProxy", function() {
        return T
    }),
    n.d(e, "createSolanaProviderProxy", function() {
        return j
    }),
    n.d(e, "createEthereumProviderProxy", function() {
        return A
    }),
    n.d(e, "createCardanoProviderProxy", function() {
        return N
    }),
    n.d(e, "createCosmosProviderProxy", function() {
        return P
    }),
    n.d(e, "createProfileProvider", function() {
        return x
    });
    var r = n(114)
      , i = n(3)
      , o = n(29)
      , s = n(6)
      , a = n(2);
    const u = `${new URL("/algorand-provider.js",document.currentScript.src)}`
      , c = `${new URL("/ethereum-provider.js",document.currentScript.src)}`
      , l = `${new URL("/solana-provider.js",document.currentScript.src)}`
      , h = `${new URL("/cardano-provider.js",document.currentScript.src)}`
      , f = `${new URL("/cosmos-provider.js",document.currentScript.src)}`
      , d = `${new URL("/management-provider.js",document.currentScript.src)}`
      , p = ["connect", "disconnect", "signTransaction", "signAndSendTransaction", "signMessage"]
      , g = ["enable", "enableNetwork", "enableAccounts", "getAlgodv2Client", "getIndexerClient", "signTxns", "postTxns", "signAndPostTxns"]
      , b = ["connect", "accounts", "signTxn", "send"]
      , _ = ["connect", "signTransaction"]
      , y = ["connect", "request", "signTransaction", "signAllTransactions", "signAndSendTransaction", "signMessage"]
      , w = ["enable", "isEnabled"]
      , v = new Set(["accountsChangedSet", "autoRefreshOnNetworkChange", "chainId", "enable", "isConnected", "isUnlocked", "networkChangedSet", "request", "selectedAddress", "send", "sendAsync"])
      , m = ["connect", "signTransaction", "signAminoTransaction"]
      , E = ["enable", "signAmino", "signDirect", "experimentalSuggestChain", "getKey", "getOfflineSignerOnlyAmino", "sendTx"]
      , S = Object(o.createWindowRpcTransport)({
        name: "provider-window",
        target: "provider"
    })
      , R = (t,e)=>new Proxy(t,{
        __proto__: null,
        defineProperty: ()=>null,
        deleteProperty: ()=>null,
        setPrototypeOf: ()=>null,
        set: ()=>!1,
        ...e
    })
      , O = t=>{
        let e = {};
        return R(e, {
            get: (n,r)=>void 0 !== e[r] ? "function" == typeof e[r] ? e[r].bind(e) : e[r] : _.includes(r) ? async(...n)=>(await (async()=>{
                window[a.ALGORAND_MYALGO_PROVIDER] || await Object(s.loadScript)({
                    src: u
                }),
                e = new window[a.ALGORAND_MYALGO_PROVIDER](t)
            }
            )(),
            e[r].bind(e)(...n)) : void 0,
            has: (t,e)=>_.includes(e)
        })
    }
      , I = t=>{
        const e = {
            base64ToMsgpack: t=>e.stringToByteArray(window.atob(t)),
            msgpackToBase64: t=>window.btoa(e.byteArrayToString(t)),
            stringToByteArray: t=>new Uint8Array(t.split("").map(t=>t.charCodeAt(0))),
            byteArrayToString: t=>String.fromCharCode.apply(null, t)
        };
        let n = {
            encoding: e
        };
        return R(n, {
            get: (e,r)=>void 0 !== n[r] ? "function" == typeof n[r] ? n[r].bind(n) : n[r] : b.includes(r) ? async(...e)=>(await (async()=>{
                window[a.ALGORAND_ALGOSIGNER_PROVIDER] || await Object(s.loadScript)({
                    src: u
                }),
                n = new window[a.ALGORAND_ALGOSIGNER_PROVIDER](t)
            }
            )(),
            n[r].bind(n)(...e)) : void 0,
            has: (t,e)=>b.includes(e)
        })
    }
      , M = ({accountsObservable: t})=>{
        let e = {}
          , n = [];
        const r = (t,e)=>{
            n.push([t, e])
        }
        ;
        e.address = null,
        e.isConnected = !1,
        e.isExodus = !0,
        e.on = r,
        e.addListener = r;
        return R(e, {
            get: (r,i)=>void 0 !== e[i] ? "function" == typeof e[i] ? e[i].bind(e) : e[i] : p.includes(i) ? async(...r)=>(await (async()=>{
                window[a.ALGORAND_EXODUS_PROVIDER] || await Object(s.loadScript)({
                    src: u
                }),
                (e = new window[a.ALGORAND_EXODUS_PROVIDER]({
                    accountsObservable: t,
                    transport: S
                })).off = e.removeListener,
                n.forEach(([t,n])=>e.on(t, n)),
                n = []
            }
            )(),
            e[i].bind(e)(...r)) : void 0,
            has: (t,e)=>p.includes(e)
        })
    }
      , T = ()=>{
        let t = {};
        return R(t, {
            get: (e,n)=>void 0 !== t[n] ? "function" == typeof t[n] ? t[n].bind(t) : t[n] : g.includes(n) ? async(...e)=>(await (async()=>{
                window[a.ALGORAND_ARC_PROVIDER] || await Object(s.loadScript)({
                    src: u
                }),
                t = new window[a.ALGORAND_ARC_PROVIDER]({
                    transport: S
                })
            }
            )(),
            t[n].bind(t)(...e)) : void 0,
            has: (t,e)=>g.includes(e)
        })
    }
      , j = ({accountsObservable: t, prioritizeExodus: e})=>{
        let n = {}
          , r = [];
        const i = (t,e)=>{
            r.push([t, e])
        }
        ;
        n.publicKey = null,
        n.isConnected = !1,
        n.isExodus = !0,
        n.isPhantom = e,
        n.supportedTransactionVersions = new Set(["legacy", 0]),
        n.on = i,
        n.addListener = i,
        n.removeAllListeners = (()=>{
            r = []
        }
        );
        return R(n, {
            get: (i,o)=>void 0 !== n[o] ? "function" == typeof n[o] ? n[o].bind(n) : n[o] : y.includes(o) ? async(...i)=>(await (async()=>{
                await Object(s.loadScript)({
                    src: l
                }),
                (n = new window[a.SOLANA_EXODUS_PROVIDER]({
                    accountsObservable: t,
                    transport: S
                })).off = n.removeListener,
                n.defineFlag("isExodus"),
                e && n.defineFlag("isPhantom"),
                r.forEach(([t,e])=>n.on(t, e)),
                r = []
            }
            )(),
            n[o].bind(n)(...i)) : void 0,
            set: (t,e,n)=>"_handleDisconnect" === e && (t[e] = n,
            !0),
            has: (t,e)=>y.includes(e)
        })
    }
      , A = ({accountsObservable: t, prioritizeExodus: e, storage: n, supportedChainIds: r, getDefaultChainId: i, walletProviderManager: o})=>{
        let u = []
          , l = {};
        const h = (t,e)=>{
            u.push([t, e])
        }
          , f = ()=>{
            e && (l.isMetaMask = !0,
            l._metamask = !0)
        }
          , p = t=>{
            u.forEach(([e,n])=>t.on(e, n)),
            u = []
        }
        ;
        l.isExodus = !0,
        l.on = h,
        l.addListener = h,
        l.removeAllListeners = (()=>{
            u = []
        }
        ),
        f();
        return R(l, {
            get: (e,u)=>{
                const h = (e,u=!1)=>{
                    var h;
                    return "Function" === (null == (h = l[e]) ? void 0 : h.constructor.name) ? l[e].bind(l) : async(...h)=>{
                        var g;
                        if (u && await (async()=>{
                            await Object(s.loadScript)({
                                src: c
                            }),
                            l = new window[a.ETHEREUM_EXODUS_PROVIDER]({
                                accountsObservable: t,
                                storage: n,
                                supportedChainIds: r,
                                transport: S,
                                getDefaultChainId: i
                            }),
                            f(),
                            p(l)
                        }
                        )(),
                        "enable" === e || "eth_requestAccounts" === (null == (g = h[0]) ? void 0 : g.method)) {
                            const t = await (async t=>(window[a.MANAGEMENT_EXODUS_PROVIDER] || await Object(s.loadScript)({
                                src: d
                            }),
                            new window[a.MANAGEMENT_EXODUS_PROVIDER](t)))({
                                transport: S,
                                walletProviderManager: o
                            })
                              , n = await (()=>l.request({
                                method: "eth_chainId"
                            }))() || await i();
                            await t.askUserToChooseWallet(`evm:${n}`);
                            const r = o.getDefaultWalletProvider();
                            if (r)
                                return p(r.provider),
                                r.provider[e].bind(r.provider)(...h)
                        }
                        return l[e].bind(l)(...h)
                    }
                }
                  , g = o.getDefaultWalletProvider();
                return g ? (p(g.provider),
                "function" == typeof g.provider[u] ? g.provider[u].bind(g.provider) : g.provider[u]) : void 0 !== l[u] ? "function" == typeof l[u] ? h(u) : l[u] : v.has(u) ? h(u, !0) : void 0
            }
            ,
            set: (t,e,n)=>"autoRefreshOnNetworkChange" === e && (t[e] = n,
            !0),
            has: (t,e)=>v.has(e)
        })
    }
      , N = ({supportedNetworkIds: t, nameToUse: e="Exodus"})=>{
        let n = {}
          , r = [];
        const o = (t,e)=>{
            r.push([t, e])
        }
        ;
        n.name = e,
        n.apiVersion = "0.1.0",
        n.icon = i.EXODUS_ICON,
        n.on = o,
        n.addListener = o,
        n.removeAllListeners = (()=>{
            r = []
        }
        );
        return R(n, {
            get: (e,i)=>{
                if ("experimental" === i)
                    return {
                        appVersion: {
                            major: 1,
                            minor: 10,
                            patch: 2
                        }
                    };
                if (void 0 !== n[i]) {
                    if ("function" == typeof n[i]) {
                        const t = n[i].bind(n);
                        return "enable" === i ? async()=>{
                            const e = await t();
                            return {
                                ...e,
                                experimental: {
                                    getCollateral: e.getCollateral
                                }
                            }
                        }
                        : t
                    }
                    return n[i]
                }
                return w.includes(i) ? async(...e)=>{
                    await (async()=>{
                        window[a.CARDANO_EXODUS_PROVIDER] || await Object(s.loadScript)({
                            src: h
                        }),
                        n = new window[a.CARDANO_EXODUS_PROVIDER]({
                            supportedNetworkIds: t,
                            transport: S
                        }),
                        r.forEach(([t,e])=>n.on(t, e)),
                        r = [],
                        n.off = n.removeListener
                    }
                    )();
                    const o = n[i].bind(n)(...e);
                    if ("enable" === i) {
                        const t = await o;
                        return {
                            ...t,
                            experimental: {
                                getCollateral: t.getCollateral
                            }
                        }
                    }
                    return o
                }
                : void 0
            }
            ,
            has: (t,e)=>w.includes(e) || e in n
        })
    }
      , P = ({accountsObservable: t, supportedChainIds: e, nameToUse: n="Exodus", mimicKeplr: r=!1})=>{
        let o = {}
          , u = [];
        const c = r ? a.COSMOS_KEPLR_PROVIDER : a.COSMOS_EXODUS_PROVIDER
          , l = (t,e)=>{
            u.push([t, e])
        }
        ;
        o.name = n,
        o.apiVersion = "0.1.0",
        o.icon = i.EXODUS_ICON,
        o.on = l,
        o.addListener = l,
        o.removeAllListeners = (()=>{
            u = []
        }
        );
        return R(o, {
            get: (n,r)=>{
                if (void 0 !== o[r])
                    return "function" == typeof o[r] ? o[r].bind(o) : o[r];
                if (m.includes(r) || E.includes(r))
                    return "getOfflineSignerOnlyAmino" === r ? t=>({
                        getAccounts: async()=>{
                            const e = await o.getKey.bind(o)(t);
                            return e.pubkey = e.pubKey,
                            [e]
                        }
                        ,
                        signAmino: (e,n)=>o.signAmino.bind(o)(t, e, n)
                    }) : async(...n)=>(await (async()=>{
                        window[c] || (window[c] || await Object(s.loadScript)({
                            src: f
                        }),
                        o = new window[c]({
                            supportedChainIds: e,
                            transport: S,
                            accountsObservable: t
                        }),
                        u.forEach(([t,e])=>o.on(t, e)),
                        u = [],
                        o.off = o.removeListener)
                    }
                    )(),
                    o[r].bind(o)(...n))
            }
            ,
            has: (t,e)=>m.includes(e) || E.includes(e) || e in o
        })
    }
      , x = ({profileObservable: t})=>new r.ProfileProvider({
        transport: S,
        profileObservable: t
    })
}
, function(t, e, n) {
    "use strict";
    n.d(e, "loadScript", function() {
        return r
    });
    const r = ({id: t, src: e, attributes: n={}})=>new Promise(r=>{
        const i = document.head || document.documentElement
          , o = document.createElement("script");
        o.id = t,
        o.src = e,
        Object.keys(n).map(t=>{
            o.setAttribute(t, n[t])
        }
        ),
        o.addEventListener("load", ()=>{
            r(),
            i.contains(o) && i.removeChild(o)
        }
        ),
        i.insertBefore(o, i.children[0])
    }
    )
}
, function(t, e, n) {
    "use strict";
    /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    const r = n(104)
      , i = n(103)
      , o = Symbol.for("nodejs.util.inspect.custom");
    e.Buffer = Buffer,
    e.SlowBuffer = function(t) {
        +t != t && (t = 0);
        return Buffer.alloc(+t)
    }
    ,
    e.INSPECT_MAX_BYTES = 50;
    const s = 2147483647;
    function a(t) {
        if (t > s)
            throw new RangeError('The value "' + t + '" is invalid for option "size"');
        const e = new Uint8Array(t);
        return Object.setPrototypeOf(e, Buffer.prototype),
        e
    }
    function Buffer(t, e, n) {
        if ("number" == typeof t) {
            if ("string" == typeof e)
                throw new TypeError('The "string" argument must be of type string. Received type number');
            return l(t)
        }
        return u(t, e, n)
    }
    function u(t, e, n) {
        if ("string" == typeof t)
            return function(t, e) {
                "string" == typeof e && "" !== e || (e = "utf8");
                if (!Buffer.isEncoding(e))
                    throw new TypeError("Unknown encoding: " + e);
                const n = 0 | p(t, e);
                let r = a(n);
                const i = r.write(t, e);
                i !== n && (r = r.slice(0, i));
                return r
            }(t, e);
        if (ArrayBuffer.isView(t))
            return function(t) {
                if (Y(t, Uint8Array)) {
                    const e = new Uint8Array(t);
                    return f(e.buffer, e.byteOffset, e.byteLength)
                }
                return h(t)
            }(t);
        if (null == t)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
        if (Y(t, ArrayBuffer) || t && Y(t.buffer, ArrayBuffer))
            return f(t, e, n);
        if ("undefined" != typeof SharedArrayBuffer && (Y(t, SharedArrayBuffer) || t && Y(t.buffer, SharedArrayBuffer)))
            return f(t, e, n);
        if ("number" == typeof t)
            throw new TypeError('The "value" argument must not be of type number. Received type number');
        const r = t.valueOf && t.valueOf();
        if (null != r && r !== t)
            return Buffer.from(r, e, n);
        const i = function(t) {
            if (Buffer.isBuffer(t)) {
                const e = 0 | d(t.length)
                  , n = a(e);
                return 0 === n.length ? n : (t.copy(n, 0, 0, e),
                n)
            }
            if (void 0 !== t.length)
                return "number" != typeof t.length || Z(t.length) ? a(0) : h(t);
            if ("Buffer" === t.type && Array.isArray(t.data))
                return h(t.data)
        }(t);
        if (i)
            return i;
        if (null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive])
            return Buffer.from(t[Symbol.toPrimitive]("string"), e, n);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
    }
    function c(t) {
        if ("number" != typeof t)
            throw new TypeError('"size" argument must be of type number');
        if (t < 0)
            throw new RangeError('The value "' + t + '" is invalid for option "size"')
    }
    function l(t) {
        return c(t),
        a(t < 0 ? 0 : 0 | d(t))
    }
    function h(t) {
        const e = t.length < 0 ? 0 : 0 | d(t.length)
          , n = a(e);
        for (let r = 0; r < e; r += 1)
            n[r] = 255 & t[r];
        return n
    }
    function f(t, e, n) {
        if (e < 0 || t.byteLength < e)
            throw new RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (n || 0))
            throw new RangeError('"length" is outside of buffer bounds');
        let r;
        return r = void 0 === e && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t,e) : new Uint8Array(t,e,n),
        Object.setPrototypeOf(r, Buffer.prototype),
        r
    }
    function d(t) {
        if (t >= s)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
        return 0 | t
    }
    function p(t, e) {
        if (Buffer.isBuffer(t))
            return t.length;
        if (ArrayBuffer.isView(t) || Y(t, ArrayBuffer))
            return t.byteLength;
        if ("string" != typeof t)
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
        const n = t.length
          , r = arguments.length > 2 && !0 === arguments[2];
        if (!r && 0 === n)
            return 0;
        let i = !1;
        for (; ; )
            switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
                return n;
            case "utf8":
            case "utf-8":
                return F(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * n;
            case "hex":
                return n >>> 1;
            case "base64":
                return V(t).length;
            default:
                if (i)
                    return r ? -1 : F(t).length;
                e = ("" + e).toLowerCase(),
                i = !0
            }
    }
    function g(t, e, n) {
        const r = t[e];
        t[e] = t[n],
        t[n] = r
    }
    function b(t, e, n, r, i) {
        if (0 === t.length)
            return -1;
        if ("string" == typeof n ? (r = n,
        n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
        Z(n = +n) && (n = i ? 0 : t.length - 1),
        n < 0 && (n = t.length + n),
        n >= t.length) {
            if (i)
                return -1;
            n = t.length - 1
        } else if (n < 0) {
            if (!i)
                return -1;
            n = 0
        }
        if ("string" == typeof e && (e = Buffer.from(e, r)),
        Buffer.isBuffer(e))
            return 0 === e.length ? -1 : _(t, e, n, r, i);
        if ("number" == typeof e)
            return e &= 255,
            "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : _(t, [e], n, r, i);
        throw new TypeError("val must be string, number or Buffer")
    }
    function _(t, e, n, r, i) {
        let o, s = 1, a = t.length, u = e.length;
        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
            if (t.length < 2 || e.length < 2)
                return -1;
            s = 2,
            a /= 2,
            u /= 2,
            n /= 2
        }
        function c(t, e) {
            return 1 === s ? t[e] : t.readUInt16BE(e * s)
        }
        if (i) {
            let r = -1;
            for (o = n; o < a; o++)
                if (c(t, o) === c(e, -1 === r ? 0 : o - r)) {
                    if (-1 === r && (r = o),
                    o - r + 1 === u)
                        return r * s
                } else
                    -1 !== r && (o -= o - r),
                    r = -1
        } else
            for (n + u > a && (n = a - u),
            o = n; o >= 0; o--) {
                let n = !0;
                for (let r = 0; r < u; r++)
                    if (c(t, o + r) !== c(e, r)) {
                        n = !1;
                        break
                    }
                if (n)
                    return o
            }
        return -1
    }
    function y(t, e, n, r) {
        n = Number(n) || 0;
        const i = t.length - n;
        r ? (r = Number(r)) > i && (r = i) : r = i;
        const o = e.length;
        let s;
        for (r > o / 2 && (r = o / 2),
        s = 0; s < r; ++s) {
            const r = parseInt(e.substr(2 * s, 2), 16);
            if (Z(r))
                return s;
            t[n + s] = r
        }
        return s
    }
    function w(t, e, n, r) {
        return H(F(e, t.length - n), t, n, r)
    }
    function v(t, e, n, r) {
        return H(function(t) {
            const e = [];
            for (let n = 0; n < t.length; ++n)
                e.push(255 & t.charCodeAt(n));
            return e
        }(e), t, n, r)
    }
    function m(t, e, n, r) {
        return H(V(e), t, n, r)
    }
    function E(t, e, n, r) {
        return H(function(t, e) {
            let n, r, i;
            const o = [];
            for (let s = 0; s < t.length && !((e -= 2) < 0); ++s)
                n = t.charCodeAt(s),
                r = n >> 8,
                i = n % 256,
                o.push(i),
                o.push(r);
            return o
        }(e, t.length - n), t, n, r)
    }
    function S(t, e, n) {
        return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
    }
    function R(t, e, n) {
        n = Math.min(t.length, n);
        const r = [];
        let i = e;
        for (; i < n; ) {
            const e = t[i];
            let o = null
              , s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
            if (i + s <= n) {
                let n, r, a, u;
                switch (s) {
                case 1:
                    e < 128 && (o = e);
                    break;
                case 2:
                    128 == (192 & (n = t[i + 1])) && (u = (31 & e) << 6 | 63 & n) > 127 && (o = u);
                    break;
                case 3:
                    n = t[i + 1],
                    r = t[i + 2],
                    128 == (192 & n) && 128 == (192 & r) && (u = (15 & e) << 12 | (63 & n) << 6 | 63 & r) > 2047 && (u < 55296 || u > 57343) && (o = u);
                    break;
                case 4:
                    n = t[i + 1],
                    r = t[i + 2],
                    a = t[i + 3],
                    128 == (192 & n) && 128 == (192 & r) && 128 == (192 & a) && (u = (15 & e) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & a) > 65535 && u < 1114112 && (o = u)
                }
            }
            null === o ? (o = 65533,
            s = 1) : o > 65535 && (o -= 65536,
            r.push(o >>> 10 & 1023 | 55296),
            o = 56320 | 1023 & o),
            r.push(o),
            i += s
        }
        return function(t) {
            const e = t.length;
            if (e <= O)
                return String.fromCharCode.apply(String, t);
            let n = ""
              , r = 0;
            for (; r < e; )
                n += String.fromCharCode.apply(String, t.slice(r, r += O));
            return n
        }(r)
    }
    e.kMaxLength = s,
    Buffer.TYPED_ARRAY_SUPPORT = function() {
        try {
            const t = new Uint8Array(1)
              , e = {
                foo: function() {
                    return 42
                }
            };
            return Object.setPrototypeOf(e, Uint8Array.prototype),
            Object.setPrototypeOf(t, e),
            42 === t.foo()
        } catch (t) {
            return !1
        }
    }(),
    Buffer.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
    Object.defineProperty(Buffer.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (Buffer.isBuffer(this))
                return this.buffer
        }
    }),
    Object.defineProperty(Buffer.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (Buffer.isBuffer(this))
                return this.byteOffset
        }
    }),
    Buffer.poolSize = 8192,
    Buffer.from = function(t, e, n) {
        return u(t, e, n)
    }
    ,
    Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(Buffer, Uint8Array),
    Buffer.alloc = function(t, e, n) {
        return function(t, e, n) {
            return c(t),
            t <= 0 ? a(t) : void 0 !== e ? "string" == typeof n ? a(t).fill(e, n) : a(t).fill(e) : a(t)
        }(t, e, n)
    }
    ,
    Buffer.allocUnsafe = function(t) {
        return l(t)
    }
    ,
    Buffer.allocUnsafeSlow = function(t) {
        return l(t)
    }
    ,
    Buffer.isBuffer = function(t) {
        return null != t && !0 === t._isBuffer && t !== Buffer.prototype
    }
    ,
    Buffer.compare = function(t, e) {
        if (Y(t, Uint8Array) && (t = Buffer.from(t, t.offset, t.byteLength)),
        Y(e, Uint8Array) && (e = Buffer.from(e, e.offset, e.byteLength)),
        !Buffer.isBuffer(t) || !Buffer.isBuffer(e))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === e)
            return 0;
        let n = t.length
          , r = e.length;
        for (let i = 0, o = Math.min(n, r); i < o; ++i)
            if (t[i] !== e[i]) {
                n = t[i],
                r = e[i];
                break
            }
        return n < r ? -1 : r < n ? 1 : 0
    }
    ,
    Buffer.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1
        }
    }
    ,
    Buffer.concat = function(t, e) {
        if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === t.length)
            return Buffer.alloc(0);
        let n;
        if (void 0 === e)
            for (e = 0,
            n = 0; n < t.length; ++n)
                e += t[n].length;
        const r = Buffer.allocUnsafe(e);
        let i = 0;
        for (n = 0; n < t.length; ++n) {
            let e = t[n];
            if (Y(e, Uint8Array))
                i + e.length > r.length ? (Buffer.isBuffer(e) || (e = Buffer.from(e)),
                e.copy(r, i)) : Uint8Array.prototype.set.call(r, e, i);
            else {
                if (!Buffer.isBuffer(e))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                e.copy(r, i)
            }
            i += e.length
        }
        return r
    }
    ,
    Buffer.byteLength = p,
    Buffer.prototype._isBuffer = !0,
    Buffer.prototype.swap16 = function() {
        const t = this.length;
        if (t % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let e = 0; e < t; e += 2)
            g(this, e, e + 1);
        return this
    }
    ,
    Buffer.prototype.swap32 = function() {
        const t = this.length;
        if (t % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let e = 0; e < t; e += 4)
            g(this, e, e + 3),
            g(this, e + 1, e + 2);
        return this
    }
    ,
    Buffer.prototype.swap64 = function() {
        const t = this.length;
        if (t % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let e = 0; e < t; e += 8)
            g(this, e, e + 7),
            g(this, e + 1, e + 6),
            g(this, e + 2, e + 5),
            g(this, e + 3, e + 4);
        return this
    }
    ,
    Buffer.prototype.toString = function() {
        const t = this.length;
        return 0 === t ? "" : 0 === arguments.length ? R(this, 0, t) : function(t, e, n) {
            let r = !1;
            if ((void 0 === e || e < 0) && (e = 0),
            e > this.length)
                return "";
            if ((void 0 === n || n > this.length) && (n = this.length),
            n <= 0)
                return "";
            if ((n >>>= 0) <= (e >>>= 0))
                return "";
            for (t || (t = "utf8"); ; )
                switch (t) {
                case "hex":
                    return T(this, e, n);
                case "utf8":
                case "utf-8":
                    return R(this, e, n);
                case "ascii":
                    return I(this, e, n);
                case "latin1":
                case "binary":
                    return M(this, e, n);
                case "base64":
                    return S(this, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return j(this, e, n);
                default:
                    if (r)
                        throw new TypeError("Unknown encoding: " + t);
                    t = (t + "").toLowerCase(),
                    r = !0
                }
        }
        .apply(this, arguments)
    }
    ,
    Buffer.prototype.toLocaleString = Buffer.prototype.toString,
    Buffer.prototype.equals = function(t) {
        if (!Buffer.isBuffer(t))
            throw new TypeError("Argument must be a Buffer");
        return this === t || 0 === Buffer.compare(this, t)
    }
    ,
    Buffer.prototype.inspect = function() {
        let t = "";
        const n = e.INSPECT_MAX_BYTES;
        return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(),
        this.length > n && (t += " ... "),
        "<Buffer " + t + ">"
    }
    ,
    o && (Buffer.prototype[o] = Buffer.prototype.inspect),
    Buffer.prototype.compare = function(t, e, n, r, i) {
        if (Y(t, Uint8Array) && (t = Buffer.from(t, t.offset, t.byteLength)),
        !Buffer.isBuffer(t))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
        if (void 0 === e && (e = 0),
        void 0 === n && (n = t ? t.length : 0),
        void 0 === r && (r = 0),
        void 0 === i && (i = this.length),
        e < 0 || n > t.length || r < 0 || i > this.length)
            throw new RangeError("out of range index");
        if (r >= i && e >= n)
            return 0;
        if (r >= i)
            return -1;
        if (e >= n)
            return 1;
        if (this === t)
            return 0;
        let o = (i >>>= 0) - (r >>>= 0)
          , s = (n >>>= 0) - (e >>>= 0);
        const a = Math.min(o, s)
          , u = this.slice(r, i)
          , c = t.slice(e, n);
        for (let t = 0; t < a; ++t)
            if (u[t] !== c[t]) {
                o = u[t],
                s = c[t];
                break
            }
        return o < s ? -1 : s < o ? 1 : 0
    }
    ,
    Buffer.prototype.includes = function(t, e, n) {
        return -1 !== this.indexOf(t, e, n)
    }
    ,
    Buffer.prototype.indexOf = function(t, e, n) {
        return b(this, t, e, n, !0)
    }
    ,
    Buffer.prototype.lastIndexOf = function(t, e, n) {
        return b(this, t, e, n, !1)
    }
    ,
    Buffer.prototype.write = function(t, e, n, r) {
        if (void 0 === e)
            r = "utf8",
            n = this.length,
            e = 0;
        else if (void 0 === n && "string" == typeof e)
            r = e,
            n = this.length,
            e = 0;
        else {
            if (!isFinite(e))
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            e >>>= 0,
            isFinite(n) ? (n >>>= 0,
            void 0 === r && (r = "utf8")) : (r = n,
            n = void 0)
        }
        const i = this.length - e;
        if ((void 0 === n || n > i) && (n = i),
        t.length > 0 && (n < 0 || e < 0) || e > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        r || (r = "utf8");
        let o = !1;
        for (; ; )
            switch (r) {
            case "hex":
                return y(this, t, e, n);
            case "utf8":
            case "utf-8":
                return w(this, t, e, n);
            case "ascii":
            case "latin1":
            case "binary":
                return v(this, t, e, n);
            case "base64":
                return m(this, t, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return E(this, t, e, n);
            default:
                if (o)
                    throw new TypeError("Unknown encoding: " + r);
                r = ("" + r).toLowerCase(),
                o = !0
            }
    }
    ,
    Buffer.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    ;
    const O = 4096;
    function I(t, e, n) {
        let r = "";
        n = Math.min(t.length, n);
        for (let i = e; i < n; ++i)
            r += String.fromCharCode(127 & t[i]);
        return r
    }
    function M(t, e, n) {
        let r = "";
        n = Math.min(t.length, n);
        for (let i = e; i < n; ++i)
            r += String.fromCharCode(t[i]);
        return r
    }
    function T(t, e, n) {
        const r = t.length;
        (!e || e < 0) && (e = 0),
        (!n || n < 0 || n > r) && (n = r);
        let i = "";
        for (let r = e; r < n; ++r)
            i += Q[t[r]];
        return i
    }
    function j(t, e, n) {
        const r = t.slice(e, n);
        let i = "";
        for (let t = 0; t < r.length - 1; t += 2)
            i += String.fromCharCode(r[t] + 256 * r[t + 1]);
        return i
    }
    function A(t, e, n) {
        if (t % 1 != 0 || t < 0)
            throw new RangeError("offset is not uint");
        if (t + e > n)
            throw new RangeError("Trying to access beyond buffer length")
    }
    function N(t, e, n, r, i, o) {
        if (!Buffer.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o)
            throw new RangeError('"value" argument is out of bounds');
        if (n + r > t.length)
            throw new RangeError("Index out of range")
    }
    function P(t, e, n, r, i) {
        W(e, r, i, t, n, 7);
        let o = Number(e & BigInt(4294967295));
        t[n++] = o,
        o >>= 8,
        t[n++] = o,
        o >>= 8,
        t[n++] = o,
        o >>= 8,
        t[n++] = o;
        let s = Number(e >> BigInt(32) & BigInt(4294967295));
        return t[n++] = s,
        s >>= 8,
        t[n++] = s,
        s >>= 8,
        t[n++] = s,
        s >>= 8,
        t[n++] = s,
        n
    }
    function x(t, e, n, r, i) {
        W(e, r, i, t, n, 7);
        let o = Number(e & BigInt(4294967295));
        t[n + 7] = o,
        o >>= 8,
        t[n + 6] = o,
        o >>= 8,
        t[n + 5] = o,
        o >>= 8,
        t[n + 4] = o;
        let s = Number(e >> BigInt(32) & BigInt(4294967295));
        return t[n + 3] = s,
        s >>= 8,
        t[n + 2] = s,
        s >>= 8,
        t[n + 1] = s,
        s >>= 8,
        t[n] = s,
        n + 8
    }
    function k(t, e, n, r, i, o) {
        if (n + r > t.length)
            throw new RangeError("Index out of range");
        if (n < 0)
            throw new RangeError("Index out of range")
    }
    function L(t, e, n, r, o) {
        return e = +e,
        n >>>= 0,
        o || k(t, 0, n, 4),
        i.write(t, e, n, r, 23, 4),
        n + 4
    }
    function D(t, e, n, r, o) {
        return e = +e,
        n >>>= 0,
        o || k(t, 0, n, 8),
        i.write(t, e, n, r, 52, 8),
        n + 8
    }
    Buffer.prototype.slice = function(t, e) {
        const n = this.length;
        (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
        (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
        e < t && (e = t);
        const r = this.subarray(t, e);
        return Object.setPrototypeOf(r, Buffer.prototype),
        r
    }
    ,
    Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function(t, e, n) {
        t >>>= 0,
        e >>>= 0,
        n || A(t, e, this.length);
        let r = this[t]
          , i = 1
          , o = 0;
        for (; ++o < e && (i *= 256); )
            r += this[t + o] * i;
        return r
    }
    ,
    Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function(t, e, n) {
        t >>>= 0,
        e >>>= 0,
        n || A(t, e, this.length);
        let r = this[t + --e]
          , i = 1;
        for (; e > 0 && (i *= 256); )
            r += this[t + --e] * i;
        return r
    }
    ,
    Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function(t, e) {
        return t >>>= 0,
        e || A(t, 1, this.length),
        this[t]
    }
    ,
    Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function(t, e) {
        return t >>>= 0,
        e || A(t, 2, this.length),
        this[t] | this[t + 1] << 8
    }
    ,
    Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function(t, e) {
        return t >>>= 0,
        e || A(t, 2, this.length),
        this[t] << 8 | this[t + 1]
    }
    ,
    Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function(t, e) {
        return t >>>= 0,
        e || A(t, 4, this.length),
        (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
    }
    ,
    Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function(t, e) {
        return t >>>= 0,
        e || A(t, 4, this.length),
        16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    }
    ,
    Buffer.prototype.readBigUInt64LE = K(function(t) {
        z(t >>>= 0, "offset");
        const e = this[t]
          , n = this[t + 7];
        void 0 !== e && void 0 !== n || q(t, this.length - 8);
        const r = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24
          , i = this[++t] + 256 * this[++t] + 65536 * this[++t] + n * 2 ** 24;
        return BigInt(r) + (BigInt(i) << BigInt(32))
    }),
    Buffer.prototype.readBigUInt64BE = K(function(t) {
        z(t >>>= 0, "offset");
        const e = this[t]
          , n = this[t + 7];
        void 0 !== e && void 0 !== n || q(t, this.length - 8);
        const r = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t]
          , i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n;
        return (BigInt(r) << BigInt(32)) + BigInt(i)
    }),
    Buffer.prototype.readIntLE = function(t, e, n) {
        t >>>= 0,
        e >>>= 0,
        n || A(t, e, this.length);
        let r = this[t]
          , i = 1
          , o = 0;
        for (; ++o < e && (i *= 256); )
            r += this[t + o] * i;
        return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)),
        r
    }
    ,
    Buffer.prototype.readIntBE = function(t, e, n) {
        t >>>= 0,
        e >>>= 0,
        n || A(t, e, this.length);
        let r = e
          , i = 1
          , o = this[t + --r];
        for (; r > 0 && (i *= 256); )
            o += this[t + --r] * i;
        return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)),
        o
    }
    ,
    Buffer.prototype.readInt8 = function(t, e) {
        return t >>>= 0,
        e || A(t, 1, this.length),
        128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
    }
    ,
    Buffer.prototype.readInt16LE = function(t, e) {
        t >>>= 0,
        e || A(t, 2, this.length);
        const n = this[t] | this[t + 1] << 8;
        return 32768 & n ? 4294901760 | n : n
    }
    ,
    Buffer.prototype.readInt16BE = function(t, e) {
        t >>>= 0,
        e || A(t, 2, this.length);
        const n = this[t + 1] | this[t] << 8;
        return 32768 & n ? 4294901760 | n : n
    }
    ,
    Buffer.prototype.readInt32LE = function(t, e) {
        return t >>>= 0,
        e || A(t, 4, this.length),
        this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    }
    ,
    Buffer.prototype.readInt32BE = function(t, e) {
        return t >>>= 0,
        e || A(t, 4, this.length),
        this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    }
    ,
    Buffer.prototype.readBigInt64LE = K(function(t) {
        z(t >>>= 0, "offset");
        const e = this[t]
          , n = this[t + 7];
        void 0 !== e && void 0 !== n || q(t, this.length - 8);
        const r = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (n << 24);
        return (BigInt(r) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
    }),
    Buffer.prototype.readBigInt64BE = K(function(t) {
        z(t >>>= 0, "offset");
        const e = this[t]
          , n = this[t + 7];
        void 0 !== e && void 0 !== n || q(t, this.length - 8);
        const r = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
        return (BigInt(r) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n)
    }),
    Buffer.prototype.readFloatLE = function(t, e) {
        return t >>>= 0,
        e || A(t, 4, this.length),
        i.read(this, t, !0, 23, 4)
    }
    ,
    Buffer.prototype.readFloatBE = function(t, e) {
        return t >>>= 0,
        e || A(t, 4, this.length),
        i.read(this, t, !1, 23, 4)
    }
    ,
    Buffer.prototype.readDoubleLE = function(t, e) {
        return t >>>= 0,
        e || A(t, 8, this.length),
        i.read(this, t, !0, 52, 8)
    }
    ,
    Buffer.prototype.readDoubleBE = function(t, e) {
        return t >>>= 0,
        e || A(t, 8, this.length),
        i.read(this, t, !1, 52, 8)
    }
    ,
    Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function(t, e, n, r) {
        if (t = +t,
        e >>>= 0,
        n >>>= 0,
        !r) {
            N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
        }
        let i = 1
          , o = 0;
        for (this[e] = 255 & t; ++o < n && (i *= 256); )
            this[e + o] = t / i & 255;
        return e + n
    }
    ,
    Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function(t, e, n, r) {
        if (t = +t,
        e >>>= 0,
        n >>>= 0,
        !r) {
            N(this, t, e, n, Math.pow(2, 8 * n) - 1, 0)
        }
        let i = n - 1
          , o = 1;
        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            this[e + i] = t / o & 255;
        return e + n
    }
    ,
    Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function(t, e, n) {
        return t = +t,
        e >>>= 0,
        n || N(this, t, e, 1, 255, 0),
        this[e] = 255 & t,
        e + 1
    }
    ,
    Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function(t, e, n) {
        return t = +t,
        e >>>= 0,
        n || N(this, t, e, 2, 65535, 0),
        this[e] = 255 & t,
        this[e + 1] = t >>> 8,
        e + 2
    }
    ,
    Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function(t, e, n) {
        return t = +t,
        e >>>= 0,
        n || N(this, t, e, 2, 65535, 0),
        this[e] = t >>> 8,
        this[e + 1] = 255 & t,
        e + 2
    }
    ,
    Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function(t, e, n) {
        return t = +t,
        e >>>= 0,
        n || N(this, t, e, 4, 4294967295, 0),
        this[e + 3] = t >>> 24,
        this[e + 2] = t >>> 16,
        this[e + 1] = t >>> 8,
        this[e] = 255 & t,
        e + 4
    }
    ,
    Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function(t, e, n) {
        return t = +t,
        e >>>= 0,
        n || N(this, t, e, 4, 4294967295, 0),
        this[e] = t >>> 24,
        this[e + 1] = t >>> 16,
        this[e + 2] = t >>> 8,
        this[e + 3] = 255 & t,
        e + 4
    }
    ,
    Buffer.prototype.writeBigUInt64LE = K(function(t, e=0) {
        return P(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    }),
    Buffer.prototype.writeBigUInt64BE = K(function(t, e=0) {
        return x(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    }),
    Buffer.prototype.writeIntLE = function(t, e, n, r) {
        if (t = +t,
        e >>>= 0,
        !r) {
            const r = Math.pow(2, 8 * n - 1);
            N(this, t, e, n, r - 1, -r)
        }
        let i = 0
          , o = 1
          , s = 0;
        for (this[e] = 255 & t; ++i < n && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
            this[e + i] = (t / o >> 0) - s & 255;
        return e + n
    }
    ,
    Buffer.prototype.writeIntBE = function(t, e, n, r) {
        if (t = +t,
        e >>>= 0,
        !r) {
            const r = Math.pow(2, 8 * n - 1);
            N(this, t, e, n, r - 1, -r)
        }
        let i = n - 1
          , o = 1
          , s = 0;
        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
            this[e + i] = (t / o >> 0) - s & 255;
        return e + n
    }
    ,
    Buffer.prototype.writeInt8 = function(t, e, n) {
        return t = +t,
        e >>>= 0,
        n || N(this, t, e, 1, 127, -128),
        t < 0 && (t = 255 + t + 1),
        this[e] = 255 & t,
        e + 1
    }
    ,
    Buffer.prototype.writeInt16LE = function(t, e, n) {
        return t = +t,
        e >>>= 0,
        n || N(this, t, e, 2, 32767, -32768),
        this[e] = 255 & t,
        this[e + 1] = t >>> 8,
        e + 2
    }
    ,
    Buffer.prototype.writeInt16BE = function(t, e, n) {
        return t = +t,
        e >>>= 0,
        n || N(this, t, e, 2, 32767, -32768),
        this[e] = t >>> 8,
        this[e + 1] = 255 & t,
        e + 2
    }
    ,
    Buffer.prototype.writeInt32LE = function(t, e, n) {
        return t = +t,
        e >>>= 0,
        n || N(this, t, e, 4, 2147483647, -2147483648),
        this[e] = 255 & t,
        this[e + 1] = t >>> 8,
        this[e + 2] = t >>> 16,
        this[e + 3] = t >>> 24,
        e + 4
    }
    ,
    Buffer.prototype.writeInt32BE = function(t, e, n) {
        return t = +t,
        e >>>= 0,
        n || N(this, t, e, 4, 2147483647, -2147483648),
        t < 0 && (t = 4294967295 + t + 1),
        this[e] = t >>> 24,
        this[e + 1] = t >>> 16,
        this[e + 2] = t >>> 8,
        this[e + 3] = 255 & t,
        e + 4
    }
    ,
    Buffer.prototype.writeBigInt64LE = K(function(t, e=0) {
        return P(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    }),
    Buffer.prototype.writeBigInt64BE = K(function(t, e=0) {
        return x(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    }),
    Buffer.prototype.writeFloatLE = function(t, e, n) {
        return L(this, t, e, !0, n)
    }
    ,
    Buffer.prototype.writeFloatBE = function(t, e, n) {
        return L(this, t, e, !1, n)
    }
    ,
    Buffer.prototype.writeDoubleLE = function(t, e, n) {
        return D(this, t, e, !0, n)
    }
    ,
    Buffer.prototype.writeDoubleBE = function(t, e, n) {
        return D(this, t, e, !1, n)
    }
    ,
    Buffer.prototype.copy = function(t, e, n, r) {
        if (!Buffer.isBuffer(t))
            throw new TypeError("argument should be a Buffer");
        if (n || (n = 0),
        r || 0 === r || (r = this.length),
        e >= t.length && (e = t.length),
        e || (e = 0),
        r > 0 && r < n && (r = n),
        r === n)
            return 0;
        if (0 === t.length || 0 === this.length)
            return 0;
        if (e < 0)
            throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length)
            throw new RangeError("Index out of range");
        if (r < 0)
            throw new RangeError("sourceEnd out of bounds");
        r > this.length && (r = this.length),
        t.length - e < r - n && (r = t.length - e + n);
        const i = r - n;
        return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, n, r) : Uint8Array.prototype.set.call(t, this.subarray(n, r), e),
        i
    }
    ,
    Buffer.prototype.fill = function(t, e, n, r) {
        if ("string" == typeof t) {
            if ("string" == typeof e ? (r = e,
            e = 0,
            n = this.length) : "string" == typeof n && (r = n,
            n = this.length),
            void 0 !== r && "string" != typeof r)
                throw new TypeError("encoding must be a string");
            if ("string" == typeof r && !Buffer.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r);
            if (1 === t.length) {
                const e = t.charCodeAt(0);
                ("utf8" === r && e < 128 || "latin1" === r) && (t = e)
            }
        } else
            "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
        if (e < 0 || this.length < e || this.length < n)
            throw new RangeError("Out of range index");
        if (n <= e)
            return this;
        let i;
        if (e >>>= 0,
        n = void 0 === n ? this.length : n >>> 0,
        t || (t = 0),
        "number" == typeof t)
            for (i = e; i < n; ++i)
                this[i] = t;
        else {
            const o = Buffer.isBuffer(t) ? t : Buffer.from(t, r)
              , s = o.length;
            if (0 === s)
                throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (i = 0; i < n - e; ++i)
                this[i + e] = o[i % s]
        }
        return this
    }
    ;
    const C = {};
    function B(t, e, n) {
        C[t] = class extends n {
            constructor() {
                super(),
                Object.defineProperty(this, "message", {
                    value: e.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }),
                this.name = `${this.name} [${t}]`,
                this.stack,
                delete this.name
            }
            get code() {
                return t
            }
            set code(t) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: t,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${t}]: ${this.message}`
            }
        }
    }
    function U(t) {
        let e = ""
          , n = t.length;
        const r = "-" === t[0] ? 1 : 0;
        for (; n >= r + 4; n -= 3)
            e = `_ ${t.slice(n - 3, n)}${e}`;
        return `${t.slice(0, n)}${e}`
    }
    function W(t, e, n, r, i, o) {
        if (t > n || t < e) {
            const r = "bigint" == typeof e ? "n" : "";
            let i;
            throw i = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0 ${r} and < 2 ${r} ** ${8 * (o + 1)}${r}` : `>= -(2 ${r} ** ${8 * (o + 1) - 1}${r}) and < 2 ** ` + `${8 * (o + 1) - 1}${r}` : `>= ${e}${r} and <= ${n}${r}`,
            new C.ERR_OUT_OF_RANGE("value",i,t)
        }
        !function(t, e, n) {
            z(e, "offset"),
            void 0 !== t[e] && void 0 !== t[e + n] || q(e, t.length - (n + 1))
        }(r, i, o)
    }
    function z(t, e) {
        if ("number" != typeof t)
            throw new C.ERR_INVALID_ARG_TYPE(e,"number",t)
    }
    function q(t, e, n) {
        if (Math.floor(t) !== t)
            throw z(t, n),
            new C.ERR_OUT_OF_RANGE(n || "offset","an integer",t);
        if (e < 0)
            throw new C.ERR_BUFFER_OUT_OF_BOUNDS;
        throw new C.ERR_OUT_OF_RANGE(n || "offset",`>= ${n ? 1 : 0} and <= ${e}`,t)
    }
    B("ERR_BUFFER_OUT_OF_BOUNDS", function(t) {
        return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError),
    B("ERR_INVALID_ARG_TYPE", function(t, e) {
        return `The "${t}" argument must be of type number. Received type ${typeof e}`
    }, TypeError),
    B("ERR_OUT_OF_RANGE", function(t, e, n) {
        let r = `The value of "${t}" is out of range.`
          , i = n;
        return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = U(String(n)) : "bigint" == typeof n && (i = String(n),
        (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = U(i)),
        i += "n"),
        r += ` It must be ${e}. Received ${i}`
    }, RangeError);
    const G = /[^+/0-9A-Za-z-_]/g;
    function F(t, e) {
        let n;
        e = e || 1 / 0;
        const r = t.length;
        let i = null;
        const o = [];
        for (let s = 0; s < r; ++s) {
            if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                if (!i) {
                    if (n > 56319) {
                        (e -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    if (s + 1 === r) {
                        (e -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    i = n;
                    continue
                }
                if (n < 56320) {
                    (e -= 3) > -1 && o.push(239, 191, 189),
                    i = n;
                    continue
                }
                n = 65536 + (i - 55296 << 10 | n - 56320)
            } else
                i && (e -= 3) > -1 && o.push(239, 191, 189);
            if (i = null,
            n < 128) {
                if ((e -= 1) < 0)
                    break;
                o.push(n)
            } else if (n < 2048) {
                if ((e -= 2) < 0)
                    break;
                o.push(n >> 6 | 192, 63 & n | 128)
            } else if (n < 65536) {
                if ((e -= 3) < 0)
                    break;
                o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
            } else {
                if (!(n < 1114112))
                    throw new Error("Invalid code point");
                if ((e -= 4) < 0)
                    break;
                o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
            }
        }
        return o
    }
    function V(t) {
        return r.toByteArray(function(t) {
            if ((t = (t = t.split("=")[0]).trim().replace(G, "")).length < 2)
                return "";
            for (; t.length % 4 != 0; )
                t += "=";
            return t
        }(t))
    }
    function H(t, e, n, r) {
        let i;
        for (i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i)
            e[i + n] = t[i];
        return i
    }
    function Y(t, e) {
        return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
    }
    function Z(t) {
        return t != t
    }
    const Q = function() {
        const t = new Array(256);
        for (let e = 0; e < 16; ++e) {
            const n = 16 * e;
            for (let r = 0; r < 16; ++r)
                t[n + r] = "0123456789abcdef"[e] + "0123456789abcdef"[r]
        }
        return t
    }();
    function K(t) {
        return t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(20)
      , i = Object.keys || function(t) {
        var e = [];
        for (var n in t)
            e.push(n);
        return e
    }
    ;
    t.exports = h;
    var o = n(15);
    o.inherits = n(1);
    var s = n(33)
      , a = n(23);
    o.inherits(h, s);
    for (var u = i(a.prototype), c = 0; c < u.length; c++) {
        var l = u[c];
        h.prototype[l] || (h.prototype[l] = a.prototype[l])
    }
    function h(t) {
        if (!(this instanceof h))
            return new h(t);
        s.call(this, t),
        a.call(this, t),
        t && !1 === t.readable && (this.readable = !1),
        t && !1 === t.writable && (this.writable = !1),
        this.allowHalfOpen = !0,
        t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", f)
    }
    function f() {
        this.allowHalfOpen || this._writableState.ended || r.nextTick(d, this)
    }
    function d(t) {
        t.end()
    }
    Object.defineProperty(h.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    }),
    Object.defineProperty(h.prototype, "destroyed", {
        get: function() {
            return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
        },
        set: function(t) {
            void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t,
            this._writableState.destroyed = t)
        }
    }),
    h.prototype._destroy = function(t, e) {
        this.push(null),
        this.end(),
        r.nextTick(e, t)
    }
}
, function(t, e) {
    var n, r, i = t.exports = {};
    function o() {
        throw new Error("setTimeout has not been defined")
    }
    function s() {
        throw new Error("clearTimeout has not been defined")
    }
    function a(t) {
        if (n === setTimeout)
            return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            r = s
        }
    }();
    var u, c = [], l = !1, h = -1;
    function f() {
        l && u && (l = !1,
        u.length ? c = u.concat(c) : h = -1,
        c.length && d())
    }
    function d() {
        if (!l) {
            var t = a(f);
            l = !0;
            for (var e = c.length; e; ) {
                for (u = c,
                c = []; ++h < e; )
                    u && u[h].run();
                h = -1,
                e = c.length
            }
            u = null,
            l = !1,
            function(t) {
                if (r === clearTimeout)
                    return clearTimeout(t);
                if ((r === s || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(t);
                try {
                    r(t)
                } catch (e) {
                    try {
                        return r.call(null, t)
                    } catch (e) {
                        return r.call(this, t)
                    }
                }
            }(t)
        }
    }
    function p(t, e) {
        this.fun = t,
        this.array = e
    }
    function g() {}
    i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
        c.push(new p(t,e)),
        1 !== c.length || l || a(d)
    }
    ,
    p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    i.title = "browser",
    i.browser = !0,
    i.env = {},
    i.argv = [],
    i.version = "",
    i.versions = {},
    i.on = g,
    i.addListener = g,
    i.once = g,
    i.off = g,
    i.removeListener = g,
    i.removeAllListeners = g,
    i.emit = g,
    i.prependListener = g,
    i.prependOnceListener = g,
    i.listeners = function(t) {
        return []
    }
    ,
    i.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    i.cwd = function() {
        return "/"
    }
    ,
    i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    i.umask = function() {
        return 0
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "SOLANA_CHAINS", function() {
        return r
    }),
    n.d(e, "isSolanaChain", function() {
        return i
    });
    const r = ["solana:mainnet"];
    function i(t) {
        return r.includes(t)
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "CARDANO_SUPPORTED_NETWORK_IDS", function() {
        return r
    }),
    n.d(e, "COSMOS_SUPPORTED_NETWORK_IDS", function() {
        return o
    }),
    n.d(e, "ETHEREUM_SUPPORTED_CHAIN_IDS", function() {
        return u
    }),
    n.d(e, "ETHEREUM_ASSET_NAMES_BY_CHAIN_ID", function() {
        return c
    });
    const r = [1]
      , i = [{
        assetName: "cosmos",
        chainId: "cosmoshub-4",
        enabled: !0
    }, {
        assetName: "osmosis",
        chainId: "osmosis-1",
        enabled: !0
    }]
      , o = i.filter(({enabled: t})=>t).map(({chainId: t})=>t)
      , s = (i.filter(({enabled: t})=>t).map(t=>({
        ...t,
        network: `cosmos:${t.chainId}`
    })),
    {
        aurora: 1313161554,
        avalanchec: 43114,
        bsc: 56,
        basemainnet: 8453,
        ethereum: 1,
        ethereumarbnova: 42170,
        ethereumarbone: 42161,
        ethereumclassic: 61,
        ethereumgoerli: 5,
        fantommainnet: 250,
        flare: 14,
        matic: 137,
        optimism: 10,
        rootstock: 30
    })
      , a = [{
        assetName: "ethereum",
        shouldSimulate: !0
    }, {
        assetName: "aurora",
        shouldSimulate: !1
    }, {
        assetName: "avalanchec",
        shouldSimulate: !1
    }, {
        assetName: "basemainnet",
        shouldSimulate: !1
    }, {
        assetName: "bsc",
        shouldSimulate: !0
    }, {
        assetName: "fantommainnet",
        shouldSimulate: !1
    }, {
        assetName: "flare",
        shouldSimulate: !1
    }, {
        assetName: "matic",
        shouldSimulate: !0
    }, {
        assetName: "ethereumarbone",
        shouldSimulate: !0
    }, {
        assetName: "ethereumarbnova",
        shouldSimulate: !1
    }, {
        assetName: "rootstock",
        shouldSimulate: !1
    }, {
        assetName: "optimism",
        shouldSimulate: !1
    }].map(t=>{
        const e = "0x" + s[t.assetName].toString(16);
        return {
            ...t,
            chainId: e,
            network: `evm:${e}`
        }
    }
    )
      , u = a.map(t=>t.chainId)
      , c = Object.fromEntries(a.map(t=>[t.chainId, t.assetName]))
}
, function(t, e, n) {
    var Buffer = n(4).Buffer;
    function r(t, e) {
        this._block = Buffer.alloc(t),
        this._finalSize = e,
        this._blockSize = t,
        this._len = 0
    }
    r.prototype.update = function(t, e) {
        "string" == typeof t && (e = e || "utf8",
        t = Buffer.from(t, e));
        for (var n = this._block, r = this._blockSize, i = t.length, o = this._len, s = 0; s < i; ) {
            for (var a = o % r, u = Math.min(i - s, r - a), c = 0; c < u; c++)
                n[a + c] = t[s + c];
            s += u,
            (o += u) % r == 0 && this._update(n)
        }
        return this._len += i,
        this
    }
    ,
    r.prototype.digest = function(t) {
        var e = this._len % this._blockSize;
        this._block[e] = 128,
        this._block.fill(0, e + 1),
        e >= this._finalSize && (this._update(this._block),
        this._block.fill(0));
        var n = 8 * this._len;
        if (n <= 4294967295)
            this._block.writeUInt32BE(n, this._blockSize - 4);
        else {
            var r = (4294967295 & n) >>> 0
              , i = (n - r) / 4294967296;
            this._block.writeUInt32BE(i, this._blockSize - 8),
            this._block.writeUInt32BE(r, this._blockSize - 4)
        }
        this._update(this._block);
        var o = this._hash();
        return t ? o.toString(t) : o
    }
    ,
    r.prototype._update = function() {
        throw new Error("_update must be implemented by subclass")
    }
    ,
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    (function(e) {
        var r = Object.keys || function(t) {
            var e = [];
            for (var n in t)
                e.push(n);
            return e
        }
        ;
        t.exports = c;
        var i = n(42)
          , o = n(38);
        n(1)(c, i);
        for (var s = r(o.prototype), a = 0; a < s.length; a++) {
            var u = s[a];
            c.prototype[u] || (c.prototype[u] = o.prototype[u])
        }
        function c(t) {
            if (!(this instanceof c))
                return new c(t);
            i.call(this, t),
            o.call(this, t),
            this.allowHalfOpen = !0,
            t && (!1 === t.readable && (this.readable = !1),
            !1 === t.writable && (this.writable = !1),
            !1 === t.allowHalfOpen && (this.allowHalfOpen = !1,
            this.once("end", l)))
        }
        function l() {
            this._writableState.ended || e.nextTick(h, this)
        }
        function h(t) {
            t.end()
        }
        Object.defineProperty(c.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }),
        Object.defineProperty(c.prototype, "writableBuffer", {
            enumerable: !1,
            get: function() {
                return this._writableState && this._writableState.getBuffer()
            }
        }),
        Object.defineProperty(c.prototype, "writableLength", {
            enumerable: !1,
            get: function() {
                return this._writableState.length
            }
        }),
        Object.defineProperty(c.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
            },
            set: function(t) {
                void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t,
                this._writableState.destroyed = t)
            }
        })
    }
    ).call(this, n(9))
}
, function(t, e, n) {
    "use strict";
    var r = {};
    function i(t, e, n) {
        n || (n = Error);
        var i = function(t) {
            var n, r;
            function i(n, r, i) {
                return t.call(this, function(t, n, r) {
                    return "string" == typeof e ? e : e(t, n, r)
                }(n, r, i)) || this
            }
            return r = t,
            (n = i).prototype = Object.create(r.prototype),
            n.prototype.constructor = n,
            n.__proto__ = r,
            i
        }(n);
        i.prototype.name = n.name,
        i.prototype.code = t,
        r[t] = i
    }
    function o(t, e) {
        if (Array.isArray(t)) {
            var n = t.length;
            return t = t.map(function(t) {
                return String(t)
            }),
            n > 2 ? "one of ".concat(e, " ").concat(t.slice(0, n - 1).join(", "), ", or ") + t[n - 1] : 2 === n ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0])
        }
        return "of ".concat(e, " ").concat(String(t))
    }
    i("ERR_INVALID_OPT_VALUE", function(t, e) {
        return 'The value "' + e + '" is invalid for option "' + t + '"'
    }, TypeError),
    i("ERR_INVALID_ARG_TYPE", function(t, e, n) {
        var r, i, s, a;
        if ("string" == typeof e && (i = "not ",
        e.substr(!s || s < 0 ? 0 : +s, i.length) === i) ? (r = "must not be",
        e = e.replace(/^not /, "")) : r = "must be",
        function(t, e, n) {
            return (void 0 === n || n > t.length) && (n = t.length),
            t.substring(n - e.length, n) === e
        }(t, " argument"))
            a = "The ".concat(t, " ").concat(r, " ").concat(o(e, "type"));
        else {
            var u = function(t, e, n) {
                return "number" != typeof n && (n = 0),
                !(n + e.length > t.length) && -1 !== t.indexOf(e, n)
            }(t, ".") ? "property" : "argument";
            a = 'The "'.concat(t, '" ').concat(u, " ").concat(r, " ").concat(o(e, "type"))
        }
        return a += ". Received type ".concat(typeof n)
    }, TypeError),
    i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
    i("ERR_METHOD_NOT_IMPLEMENTED", function(t) {
        return "The " + t + " method is not implemented"
    }),
    i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
    i("ERR_STREAM_DESTROYED", function(t) {
        return "Cannot call " + t + " after a stream was destroyed"
    }),
    i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
    i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
    i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
    i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
    i("ERR_UNKNOWN_ENCODING", function(t) {
        return "Unknown encoding: " + t
    }, TypeError),
    i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
    t.exports.codes = r
}
, function(t, e, n) {
    (function(Buffer) {
        function t(t) {
            return Object.prototype.toString.call(t)
        }
        e.isArray = function(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === t(e)
        }
        ,
        e.isBoolean = function(t) {
            return "boolean" == typeof t
        }
        ,
        e.isNull = function(t) {
            return null === t
        }
        ,
        e.isNullOrUndefined = function(t) {
            return null == t
        }
        ,
        e.isNumber = function(t) {
            return "number" == typeof t
        }
        ,
        e.isString = function(t) {
            return "string" == typeof t
        }
        ,
        e.isSymbol = function(t) {
            return "symbol" == typeof t
        }
        ,
        e.isUndefined = function(t) {
            return void 0 === t
        }
        ,
        e.isRegExp = function(e) {
            return "[object RegExp]" === t(e)
        }
        ,
        e.isObject = function(t) {
            return "object" == typeof t && null !== t
        }
        ,
        e.isDate = function(e) {
            return "[object Date]" === t(e)
        }
        ,
        e.isError = function(e) {
            return "[object Error]" === t(e) || e instanceof Error
        }
        ,
        e.isFunction = function(t) {
            return "function" == typeof t
        }
        ,
        e.isPrimitive = function(t) {
            return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
        }
        ,
        e.isBuffer = Buffer.isBuffer
    }
    ).call(this, n(7).Buffer)
}
, function(t, e, n) {
    "use strict";
    var Buffer = n(4).Buffer
      , r = Buffer.isEncoding || function(t) {
        switch ((t = "" + t) && t.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return !0;
        default:
            return !1
        }
    }
    ;
    function i(t) {
        var e;
        switch (this.encoding = function(t) {
            var e = function(t) {
                if (!t)
                    return "utf8";
                for (var e; ; )
                    switch (t) {
                    case "utf8":
                    case "utf-8":
                        return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return "utf16le";
                    case "latin1":
                    case "binary":
                        return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                        return t;
                    default:
                        if (e)
                            return;
                        t = ("" + t).toLowerCase(),
                        e = !0
                    }
            }(t);
            if ("string" != typeof e && (Buffer.isEncoding === r || !r(t)))
                throw new Error("Unknown encoding: " + t);
            return e || t
        }(t),
        this.encoding) {
        case "utf16le":
            this.text = a,
            this.end = u,
            e = 4;
            break;
        case "utf8":
            this.fillLast = s,
            e = 4;
            break;
        case "base64":
            this.text = c,
            this.end = l,
            e = 3;
            break;
        default:
            return this.write = h,
            void (this.end = f)
        }
        this.lastNeed = 0,
        this.lastTotal = 0,
        this.lastChar = Buffer.allocUnsafe(e)
    }
    function o(t) {
        return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2
    }
    function s(t) {
        var e = this.lastTotal - this.lastNeed
          , n = function(t, e, n) {
            if (128 != (192 & e[0]))
                return t.lastNeed = 0,
                "�";
            if (t.lastNeed > 1 && e.length > 1) {
                if (128 != (192 & e[1]))
                    return t.lastNeed = 1,
                    "�";
                if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2]))
                    return t.lastNeed = 2,
                    "�"
            }
        }(this, t);
        return void 0 !== n ? n : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length),
        void (this.lastNeed -= t.length))
    }
    function a(t, e) {
        if ((t.length - e) % 2 == 0) {
            var n = t.toString("utf16le", e);
            if (n) {
                var r = n.charCodeAt(n.length - 1);
                if (r >= 55296 && r <= 56319)
                    return this.lastNeed = 2,
                    this.lastTotal = 4,
                    this.lastChar[0] = t[t.length - 2],
                    this.lastChar[1] = t[t.length - 1],
                    n.slice(0, -1)
            }
            return n
        }
        return this.lastNeed = 1,
        this.lastTotal = 2,
        this.lastChar[0] = t[t.length - 1],
        t.toString("utf16le", e, t.length - 1)
    }
    function u(t) {
        var e = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
            var n = this.lastTotal - this.lastNeed;
            return e + this.lastChar.toString("utf16le", 0, n)
        }
        return e
    }
    function c(t, e) {
        var n = (t.length - e) % 3;
        return 0 === n ? t.toString("base64", e) : (this.lastNeed = 3 - n,
        this.lastTotal = 3,
        1 === n ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2],
        this.lastChar[1] = t[t.length - 1]),
        t.toString("base64", e, t.length - n))
    }
    function l(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
    }
    function h(t) {
        return t.toString(this.encoding)
    }
    function f(t) {
        return t && t.length ? this.write(t) : ""
    }
    e.StringDecoder = i,
    i.prototype.write = function(t) {
        if (0 === t.length)
            return "";
        var e, n;
        if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t)))
                return "";
            n = this.lastNeed,
            this.lastNeed = 0
        } else
            n = 0;
        return n < t.length ? e ? e + this.text(t, n) : this.text(t, n) : e || ""
    }
    ,
    i.prototype.end = function(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed ? e + "�" : e
    }
    ,
    i.prototype.text = function(t, e) {
        var n = function(t, e, n) {
            var r = e.length - 1;
            if (r < n)
                return 0;
            var i = o(e[r]);
            if (i >= 0)
                return i > 0 && (t.lastNeed = i - 1),
                i;
            if (--r < n || -2 === i)
                return 0;
            if ((i = o(e[r])) >= 0)
                return i > 0 && (t.lastNeed = i - 2),
                i;
            if (--r < n || -2 === i)
                return 0;
            if ((i = o(e[r])) >= 0)
                return i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3),
                i;
            return 0
        }(this, t, e);
        if (!this.lastNeed)
            return t.toString("utf8", e);
        this.lastTotal = n;
        var r = t.length - (n - this.lastNeed);
        return t.copy(this.lastChar, 0, r),
        t.toString("utf8", e, r)
    }
    ,
    i.prototype.fillLast = function(t) {
        if (this.lastNeed <= t.length)
            return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal);
        t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
        this.lastNeed -= t.length
    }
}
, function(t, e) {
    function n() {
        this._events = this._events || {},
        this._maxListeners = this._maxListeners || void 0
    }
    function r(t) {
        return "function" == typeof t
    }
    function i(t) {
        return "object" == typeof t && null !== t
    }
    function o(t) {
        return void 0 === t
    }
    t.exports = n,
    n.EventEmitter = n,
    n.prototype._events = void 0,
    n.prototype._maxListeners = void 0,
    n.defaultMaxListeners = 10,
    n.prototype.setMaxListeners = function(t) {
        if ("number" != typeof t || t < 0 || isNaN(t))
            throw TypeError("n must be a positive number");
        return this._maxListeners = t,
        this
    }
    ,
    n.prototype.emit = function(t) {
        var e, n, s, a, u, c;
        if (this._events || (this._events = {}),
        "error" === t && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
            if ((e = arguments[1])instanceof Error)
                throw e;
            var l = new Error('Uncaught, unspecified "error" event. (' + e + ")");
            throw l.context = e,
            l
        }
        if (o(n = this._events[t]))
            return !1;
        if (r(n))
            switch (arguments.length) {
            case 1:
                n.call(this);
                break;
            case 2:
                n.call(this, arguments[1]);
                break;
            case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
            default:
                a = Array.prototype.slice.call(arguments, 1),
                n.apply(this, a)
            }
        else if (i(n))
            for (a = Array.prototype.slice.call(arguments, 1),
            s = (c = n.slice()).length,
            u = 0; u < s; u++)
                c[u].apply(this, a);
        return !0
    }
    ,
    n.prototype.addListener = function(t, e) {
        var s;
        if (!r(e))
            throw TypeError("listener must be a function");
        return this._events || (this._events = {}),
        this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e),
        this._events[t] ? i(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e,
        i(this._events[t]) && !this._events[t].warned && (s = o(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[t].length > s && (this._events[t].warned = !0,
        console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length),
        "function" == typeof console.trace && console.trace()),
        this
    }
    ,
    n.prototype.on = n.prototype.addListener,
    n.prototype.once = function(t, e) {
        if (!r(e))
            throw TypeError("listener must be a function");
        var n = !1;
        function i() {
            this.removeListener(t, i),
            n || (n = !0,
            e.apply(this, arguments))
        }
        return i.listener = e,
        this.on(t, i),
        this
    }
    ,
    n.prototype.removeListener = function(t, e) {
        var n, o, s, a;
        if (!r(e))
            throw TypeError("listener must be a function");
        if (!this._events || !this._events[t])
            return this;
        if (s = (n = this._events[t]).length,
        o = -1,
        n === e || r(n.listener) && n.listener === e)
            delete this._events[t],
            this._events.removeListener && this.emit("removeListener", t, e);
        else if (i(n)) {
            for (a = s; a-- > 0; )
                if (n[a] === e || n[a].listener && n[a].listener === e) {
                    o = a;
                    break
                }
            if (o < 0)
                return this;
            1 === n.length ? (n.length = 0,
            delete this._events[t]) : n.splice(o, 1),
            this._events.removeListener && this.emit("removeListener", t, e)
        }
        return this
    }
    ,
    n.prototype.removeAllListeners = function(t) {
        var e, n;
        if (!this._events)
            return this;
        if (!this._events.removeListener)
            return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t],
            this;
        if (0 === arguments.length) {
            for (e in this._events)
                "removeListener" !== e && this.removeAllListeners(e);
            return this.removeAllListeners("removeListener"),
            this._events = {},
            this
        }
        if (r(n = this._events[t]))
            this.removeListener(t, n);
        else if (n)
            for (; n.length; )
                this.removeListener(t, n[n.length - 1]);
        return delete this._events[t],
        this
    }
    ,
    n.prototype.listeners = function(t) {
        return this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
    }
    ,
    n.prototype.listenerCount = function(t) {
        if (this._events) {
            var e = this._events[t];
            if (r(e))
                return 1;
            if (e)
                return e.length
        }
        return 0
    }
    ,
    n.listenerCount = function(t, e) {
        return t.listenerCount(e)
    }
}
, function(t, e, n) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0,
        eval)("this")
    } catch (t) {
        r = window
    }
    t.exports = r
}
, function(t, e, n) {
    "use strict";
    n.d(e, "registerWallet", function() {
        return o
    });
    var r = 0;
    function i(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e))
            throw new TypeError("attempted to use private field on non-instance");
        return t
    }
    function o(t) {
        const e = ({register: e})=>e(t);
        try {
            window.dispatchEvent(new s(e))
        } catch (t) {
            console.error("wallet-standard:register-wallet event could not be dispatched\n", t)
        }
        try {
            window.addEventListener("wallet-standard:app-ready", ({detail: t})=>e(t))
        } catch (t) {
            console.error("wallet-standard:app-ready event listener could not be added\n", t)
        }
    }
    class s extends Event {
        get detail() {
            return i(this, a)[a]
        }
        get type() {
            return "wallet-standard:register-wallet"
        }
        constructor(t) {
            super("wallet-standard:register-wallet", {
                bubbles: !1,
                cancelable: !1,
                composed: !1
            }),
            Object.defineProperty(this, a, {
                writable: !0,
                value: void 0
            }),
            i(this, a)[a] = t
        }
        preventDefault() {
            throw new Error("preventDefault cannot be called")
        }
        stopImmediatePropagation() {
            throw new Error("stopImmediatePropagation cannot be called")
        }
        stopPropagation() {
            throw new Error("stopPropagation cannot be called")
        }
    }
    var a = "__private_" + r++ + "_" + "detail"
}
, function(t, e, n) {
    "use strict";
    (function(e) {
        !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
            nextTick: function(t, n, r, i) {
                if ("function" != typeof t)
                    throw new TypeError('"callback" argument must be a function');
                var o, s, a = arguments.length;
                switch (a) {
                case 0:
                case 1:
                    return e.nextTick(t);
                case 2:
                    return e.nextTick(function() {
                        t.call(null, n)
                    });
                case 3:
                    return e.nextTick(function() {
                        t.call(null, n, r)
                    });
                case 4:
                    return e.nextTick(function() {
                        t.call(null, n, r, i)
                    });
                default:
                    for (o = new Array(a - 1),
                    s = 0; s < o.length; )
                        o[s++] = arguments[s];
                    return e.nextTick(function() {
                        t.apply(null, o)
                    })
                }
            }
        } : t.exports = e
    }
    ).call(this, n(9))
}
, function(t, e, n) {
    const r = n(105)
      , i = ()=>{
        let t = 0;
        return ()=>t++
    }
      , o = t=>Number.isInteger(t) || "string" == typeof t || null === t;
    t.exports = class {
        constructor({transport: t, requestTimeout: e=2e4, generateId: n=i, methods: r=new Map, parse: o=JSON.parse, stringify: s=JSON.stringify, getIsDevelopmentMode: a=(()=>!1)}={}) {
            if (!t)
                throw new Error("TRANSPORT_REQUIRED");
            if (this._transport = t,
            this._requestTimeout = e,
            this._pendingRequest = new Map,
            this._generateId = n(),
            this._processResponse = this._processResponse.bind(this),
            this._methods = r,
            this.parse = o,
            this._stringify = s,
            "function" != typeof a)
                throw new Error("getIsDevelopmentMode must be a function");
            this._getIsDevelopmentMode = a,
            t.on("data", this._processResponse)
        }
        end() {
            this._transport.removeListener("data", this._processResponse)
        }
        exposeMethods(t) {
            t instanceof Map || (t = Object.entries(t).reduce((t,[e,n])=>t.set(e, n), new Map));
            const e = this._methods;
            return this._methods = t,
            e
        }
        exposeFunction(t, e) {
            if ("string" != typeof t)
                throw new Error("Function name must be a string");
            if ("function" != typeof e)
                throw new Error("Invalid function implementation");
            this._methods.set(t, e)
        }
        async callMethod(t, e) {
            const n = this._generateId()
              , r = this._makeRequestObject({
                method: t,
                params: e,
                id: n
            });
            return this._sendRequest({
                request: r
            })
        }
        async callMethodWithRawResponse(t, e) {
            const n = this._generateId()
              , r = this._makeRequestObject({
                method: t,
                params: e,
                id: n
            });
            return this._sendRequest({
                request: r,
                getRawResponse: !0
            })
        }
        async notify(t, e) {
            const n = this._makeRequestObject({
                method: t,
                params: e
            });
            this._transport.write(this._stringify(n))
        }
        _sendRequest({request: t, getRawResponse: e=!1}) {
            const {id: n} = t
              , r = this._stringify(t);
            return new Promise((i,o)=>{
                const s = setTimeout(()=>{
                    this._pendingRequest.has(n) && (this._pendingRequest.delete(n),
                    o(new Error(`JSON-RPC: method call timeout calling ${t.method}`)))
                }
                , this._requestTimeout);
                this._pendingRequest.set(n, {
                    resolve: i,
                    reject: o,
                    timeoutTimer: s,
                    getRawResponse: e
                }),
                (async()=>{
                    try {
                        await this._transport.write(r)
                    } catch (t) {
                        clearTimeout(s),
                        this._pendingRequest.delete(n),
                        o(t)
                    }
                }
                )()
            }
            )
        }
        _processResponse(t) {
            let e;
            try {
                e = this.parse(t)
            } catch (e) {
                const {id: n} = JSON.parse(t);
                if (!o(n))
                    throw e;
                const {message: i} = e;
                return void this._sendError({
                    ...r.INVALID_REQUEST,
                    message: i
                }, n)
            }
            if (Object.hasOwnProperty.call(e, "method"))
                return this._processCallMethod(e);
            const n = Object.hasOwnProperty.call(e, "error")
              , i = this._pendingRequest.get(e.id);
            if (i)
                if (this._pendingRequest.delete(e.id),
                clearTimeout(i.timeoutTimer),
                i.getRawResponse)
                    i.resolve(e);
                else if (n) {
                    const t = this._makeErrorObject(e.error);
                    i.reject(t)
                } else
                    i.resolve(e.result)
        }
        async _processCallMethod(t) {
            const {method: e, params: n=[], id: i} = t
              , o = this._methods.get(e);
            if (o)
                if ("function" != typeof o)
                    this._sendError(r.INTERNAL_ERROR, i);
                else {
                    const t = Array.isArray(n) ? n : [n];
                    try {
                        const e = await Promise.resolve(o.apply(this._methods, t));
                        this._sendSuccess({
                            result: e,
                            id: i
                        })
                    } catch (t) {
                        this._sendError(t, i)
                    }
                }
            else
                this._sendError({
                    ...r.METHOD_NOT_FOUND,
                    methodName: e
                }, i)
        }
        _sendError(t, e) {
            let {message: n=r.INTERNAL_ERROR.message, code: i=r.INTERNAL_ERROR.code, cause: o, stack: s, ...a} = t || {};
            "object" != typeof t && (a = t),
            null === t && (a = null),
            t instanceof Error && this._getIsDevelopmentMode() && (a.cause = {
                message: n,
                stack: s,
                cause: o
            });
            const u = this._stringify({
                jsonrpc: "2.0",
                id: e,
                error: {
                    code: i,
                    message: n,
                    data: a
                }
            });
            this._transport.write(u)
        }
        _sendSuccess({result: t, id: e}) {
            if (void 0 === e)
                return;
            const n = this._stringify({
                jsonrpc: "2.0",
                id: e,
                result: t
            });
            this._transport.write(n)
        }
        _makeRequestObject({method: t, params: e, id: n}) {
            return {
                jsonrpc: "2.0",
                method: t,
                params: e,
                id: n
            }
        }
        _createRecursiveError(t) {
            if ("object" != typeof t || null === t)
                return null;
            let e = null;
            t.cause && (e = this._createRecursiveError(t.cause));
            const n = new Error(t.message,{
                cause: e
            });
            return n.stack = t.stack,
            n
        }
        _makeErrorObject(t) {
            const e = t.code
              , n = r[e]
              , i = t.message || n && n.message
              , o = new Error(i);
            if (o.code = e,
            Object.hasOwnProperty.call(t, "data"))
                if ("object" == typeof t.data && null !== t.data) {
                    const {name: e, cause: n, ...r} = t.data;
                    o.name = e,
                    n && (o.cause = this._createRecursiveError(n)),
                    o.data = r
                } else
                    o.data = t.data;
            return o
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty
      , i = "~";
    function o() {}
    function s(t, e, n) {
        this.fn = t,
        this.context = e,
        this.once = n || !1
    }
    function a(t, e, n, r, o) {
        if ("function" != typeof n)
            throw new TypeError("The listener must be a function");
        var a = new s(n,r || t,o)
          , u = i ? i + e : e;
        return t._events[u] ? t._events[u].fn ? t._events[u] = [t._events[u], a] : t._events[u].push(a) : (t._events[u] = a,
        t._eventsCount++),
        t
    }
    function u(t, e) {
        0 == --t._eventsCount ? t._events = new o : delete t._events[e]
    }
    function c() {
        this._events = new o,
        this._eventsCount = 0
    }
    Object.create && (o.prototype = Object.create(null),
    (new o).__proto__ || (i = !1)),
    c.prototype.eventNames = function() {
        var t, e, n = [];
        if (0 === this._eventsCount)
            return n;
        for (e in t = this._events)
            r.call(t, e) && n.push(i ? e.slice(1) : e);
        return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
    }
    ,
    c.prototype.listeners = function(t) {
        var e = i ? i + t : t
          , n = this._events[e];
        if (!n)
            return [];
        if (n.fn)
            return [n.fn];
        for (var r = 0, o = n.length, s = new Array(o); r < o; r++)
            s[r] = n[r].fn;
        return s
    }
    ,
    c.prototype.listenerCount = function(t) {
        var e = i ? i + t : t
          , n = this._events[e];
        return n ? n.fn ? 1 : n.length : 0
    }
    ,
    c.prototype.emit = function(t, e, n, r, o, s) {
        var a = i ? i + t : t;
        if (!this._events[a])
            return !1;
        var u, c, l = this._events[a], h = arguments.length;
        if (l.fn) {
            switch (l.once && this.removeListener(t, l.fn, void 0, !0),
            h) {
            case 1:
                return l.fn.call(l.context),
                !0;
            case 2:
                return l.fn.call(l.context, e),
                !0;
            case 3:
                return l.fn.call(l.context, e, n),
                !0;
            case 4:
                return l.fn.call(l.context, e, n, r),
                !0;
            case 5:
                return l.fn.call(l.context, e, n, r, o),
                !0;
            case 6:
                return l.fn.call(l.context, e, n, r, o, s),
                !0
            }
            for (c = 1,
            u = new Array(h - 1); c < h; c++)
                u[c - 1] = arguments[c];
            l.fn.apply(l.context, u)
        } else {
            var f, d = l.length;
            for (c = 0; c < d; c++)
                switch (l[c].once && this.removeListener(t, l[c].fn, void 0, !0),
                h) {
                case 1:
                    l[c].fn.call(l[c].context);
                    break;
                case 2:
                    l[c].fn.call(l[c].context, e);
                    break;
                case 3:
                    l[c].fn.call(l[c].context, e, n);
                    break;
                case 4:
                    l[c].fn.call(l[c].context, e, n, r);
                    break;
                default:
                    if (!u)
                        for (f = 1,
                        u = new Array(h - 1); f < h; f++)
                            u[f - 1] = arguments[f];
                    l[c].fn.apply(l[c].context, u)
                }
        }
        return !0
    }
    ,
    c.prototype.on = function(t, e, n) {
        return a(this, t, e, n, !1)
    }
    ,
    c.prototype.once = function(t, e, n) {
        return a(this, t, e, n, !0)
    }
    ,
    c.prototype.removeListener = function(t, e, n, r) {
        var o = i ? i + t : t;
        if (!this._events[o])
            return this;
        if (!e)
            return u(this, o),
            this;
        var s = this._events[o];
        if (s.fn)
            s.fn !== e || r && !s.once || n && s.context !== n || u(this, o);
        else {
            for (var a = 0, c = [], l = s.length; a < l; a++)
                (s[a].fn !== e || r && !s[a].once || n && s[a].context !== n) && c.push(s[a]);
            c.length ? this._events[o] = 1 === c.length ? c[0] : c : u(this, o)
        }
        return this
    }
    ,
    c.prototype.removeAllListeners = function(t) {
        var e;
        return t ? (e = i ? i + t : t,
        this._events[e] && u(this, e)) : (this._events = new o,
        this._eventsCount = 0),
        this
    }
    ,
    c.prototype.off = c.prototype.removeListener,
    c.prototype.addListener = c.prototype.on,
    c.prefixed = i,
    c.EventEmitter = c,
    t.exports = c
}
, function(t, e, n) {
    "use strict";
    (function(e) {
        var r = n(20);
        function i(t) {
            var e = this;
            this.next = null,
            this.entry = null,
            this.finish = function() {
                !function(t, e, n) {
                    var r = t.entry;
                    t.entry = null;
                    for (; r; ) {
                        var i = r.callback;
                        e.pendingcb--,
                        i(n),
                        r = r.next
                    }
                    e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
                }(e, t)
            }
        }
        t.exports = g;
        var o, s = r.nextTick;
        g.WritableState = p;
        var a = n(15);
        a.inherits = n(1);
        var u = {
            deprecate: n(37)
        }
          , c = n(32)
          , Buffer = n(24).Buffer
          , l = e.Uint8Array || function() {}
        ;
        var h, f = n(31);
        function d() {}
        function p(t, e) {
            o = o || n(8),
            t = t || {};
            var a = e instanceof o;
            this.objectMode = !!t.objectMode,
            a && (this.objectMode = this.objectMode || !!t.writableObjectMode);
            var u = t.highWaterMark
              , c = t.writableHighWaterMark
              , l = this.objectMode ? 16 : 16384;
            this.highWaterMark = u || 0 === u ? u : a && (c || 0 === c) ? c : l,
            this.highWaterMark = Math.floor(this.highWaterMark),
            this.finalCalled = !1,
            this.needDrain = !1,
            this.ending = !1,
            this.ended = !1,
            this.finished = !1,
            this.destroyed = !1;
            var h = !1 === t.decodeStrings;
            this.decodeStrings = !h,
            this.defaultEncoding = t.defaultEncoding || "utf8",
            this.length = 0,
            this.writing = !1,
            this.corked = 0,
            this.sync = !0,
            this.bufferProcessing = !1,
            this.onwrite = function(t) {
                !function(t, e) {
                    var n = t._writableState
                      , i = n.sync
                      , o = n.writecb;
                    if (function(t) {
                        t.writing = !1,
                        t.writecb = null,
                        t.length -= t.writelen,
                        t.writelen = 0
                    }(n),
                    e)
                        !function(t, e, n, i, o) {
                            --e.pendingcb,
                            n ? (r.nextTick(o, i),
                            r.nextTick(m, t, e),
                            t._writableState.errorEmitted = !0,
                            t.emit("error", i)) : (o(i),
                            t._writableState.errorEmitted = !0,
                            t.emit("error", i),
                            m(t, e))
                        }(t, n, i, e, o);
                    else {
                        var a = w(n);
                        a || n.corked || n.bufferProcessing || !n.bufferedRequest || y(t, n),
                        i ? s(_, t, n, a, o) : _(t, n, a, o)
                    }
                }(e, t)
            }
            ,
            this.writecb = null,
            this.writelen = 0,
            this.bufferedRequest = null,
            this.lastBufferedRequest = null,
            this.pendingcb = 0,
            this.prefinished = !1,
            this.errorEmitted = !1,
            this.bufferedRequestCount = 0,
            this.corkedRequestsFree = new i(this)
        }
        function g(t) {
            if (o = o || n(8),
            !(h.call(g, this) || this instanceof o))
                return new g(t);
            this._writableState = new p(t,this),
            this.writable = !0,
            t && ("function" == typeof t.write && (this._write = t.write),
            "function" == typeof t.writev && (this._writev = t.writev),
            "function" == typeof t.destroy && (this._destroy = t.destroy),
            "function" == typeof t.final && (this._final = t.final)),
            c.call(this)
        }
        function b(t, e, n, r, i, o, s) {
            e.writelen = r,
            e.writecb = s,
            e.writing = !0,
            e.sync = !0,
            n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite),
            e.sync = !1
        }
        function _(t, e, n, r) {
            n || function(t, e) {
                0 === e.length && e.needDrain && (e.needDrain = !1,
                t.emit("drain"))
            }(t, e),
            e.pendingcb--,
            r(),
            m(t, e)
        }
        function y(t, e) {
            e.bufferProcessing = !0;
            var n = e.bufferedRequest;
            if (t._writev && n && n.next) {
                var r = e.bufferedRequestCount
                  , o = new Array(r)
                  , s = e.corkedRequestsFree;
                s.entry = n;
                for (var a = 0, u = !0; n; )
                    o[a] = n,
                    n.isBuf || (u = !1),
                    n = n.next,
                    a += 1;
                o.allBuffers = u,
                b(t, e, !0, e.length, o, "", s.finish),
                e.pendingcb++,
                e.lastBufferedRequest = null,
                s.next ? (e.corkedRequestsFree = s.next,
                s.next = null) : e.corkedRequestsFree = new i(e),
                e.bufferedRequestCount = 0
            } else {
                for (; n; ) {
                    var c = n.chunk
                      , l = n.encoding
                      , h = n.callback;
                    if (b(t, e, !1, e.objectMode ? 1 : c.length, c, l, h),
                    n = n.next,
                    e.bufferedRequestCount--,
                    e.writing)
                        break
                }
                null === n && (e.lastBufferedRequest = null)
            }
            e.bufferedRequest = n,
            e.bufferProcessing = !1
        }
        function w(t) {
            return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
        }
        function v(t, e) {
            t._final(function(n) {
                e.pendingcb--,
                n && t.emit("error", n),
                e.prefinished = !0,
                t.emit("prefinish"),
                m(t, e)
            })
        }
        function m(t, e) {
            var n = w(e);
            return n && (!function(t, e) {
                e.prefinished || e.finalCalled || ("function" == typeof t._final ? (e.pendingcb++,
                e.finalCalled = !0,
                r.nextTick(v, t, e)) : (e.prefinished = !0,
                t.emit("prefinish")))
            }(t, e),
            0 === e.pendingcb && (e.finished = !0,
            t.emit("finish"))),
            n
        }
        a.inherits(g, c),
        p.prototype.getBuffer = function() {
            for (var t = this.bufferedRequest, e = []; t; )
                e.push(t),
                t = t.next;
            return e
        }
        ,
        function() {
            try {
                Object.defineProperty(p.prototype, "buffer", {
                    get: u.deprecate(function() {
                        return this.getBuffer()
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch (t) {}
        }(),
        Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (h = Function.prototype[Symbol.hasInstance],
        Object.defineProperty(g, Symbol.hasInstance, {
            value: function(t) {
                return !!h.call(this, t) || this === g && (t && t._writableState instanceof p)
            }
        })) : h = function(t) {
            return t instanceof this
        }
        ,
        g.prototype.pipe = function() {
            this.emit("error", new Error("Cannot pipe, not readable"))
        }
        ,
        g.prototype.write = function(t, e, n) {
            var i, o = this._writableState, s = !1, a = !o.objectMode && (i = t,
            Buffer.isBuffer(i) || i instanceof l);
            return a && !Buffer.isBuffer(t) && (t = function(t) {
                return Buffer.from(t)
            }(t)),
            "function" == typeof e && (n = e,
            e = null),
            a ? e = "buffer" : e || (e = o.defaultEncoding),
            "function" != typeof n && (n = d),
            o.ended ? function(t, e) {
                var n = new Error("write after end");
                t.emit("error", n),
                r.nextTick(e, n)
            }(this, n) : (a || function(t, e, n, i) {
                var o = !0
                  , s = !1;
                return null === n ? s = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || e.objectMode || (s = new TypeError("Invalid non-string/buffer chunk")),
                s && (t.emit("error", s),
                r.nextTick(i, s),
                o = !1),
                o
            }(this, o, t, n)) && (o.pendingcb++,
            s = function(t, e, n, r, i, o) {
                if (!n) {
                    var s = function(t, e, n) {
                        t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = Buffer.from(e, n));
                        return e
                    }(e, r, i);
                    r !== s && (n = !0,
                    i = "buffer",
                    r = s)
                }
                var a = e.objectMode ? 1 : r.length;
                e.length += a;
                var u = e.length < e.highWaterMark;
                u || (e.needDrain = !0);
                if (e.writing || e.corked) {
                    var c = e.lastBufferedRequest;
                    e.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: o,
                        next: null
                    },
                    c ? c.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest,
                    e.bufferedRequestCount += 1
                } else
                    b(t, e, !1, a, r, i, o);
                return u
            }(this, o, a, t, e, n)),
            s
        }
        ,
        g.prototype.cork = function() {
            this._writableState.corked++
        }
        ,
        g.prototype.uncork = function() {
            var t = this._writableState;
            t.corked && (t.corked--,
            t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || y(this, t))
        }
        ,
        g.prototype.setDefaultEncoding = function(t) {
            if ("string" == typeof t && (t = t.toLowerCase()),
            !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1))
                throw new TypeError("Unknown encoding: " + t);
            return this._writableState.defaultEncoding = t,
            this
        }
        ,
        Object.defineProperty(g.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }),
        g.prototype._write = function(t, e, n) {
            n(new Error("_write() is not implemented"))
        }
        ,
        g.prototype._writev = null,
        g.prototype.end = function(t, e, n) {
            var i = this._writableState;
            "function" == typeof t ? (n = t,
            t = null,
            e = null) : "function" == typeof e && (n = e,
            e = null),
            null != t && this.write(t, e),
            i.corked && (i.corked = 1,
            this.uncork()),
            i.ending || i.finished || function(t, e, n) {
                e.ending = !0,
                m(t, e),
                n && (e.finished ? r.nextTick(n) : t.once("finish", n));
                e.ended = !0,
                t.writable = !1
            }(this, i, n)
        }
        ,
        Object.defineProperty(g.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._writableState && this._writableState.destroyed
            },
            set: function(t) {
                this._writableState && (this._writableState.destroyed = t)
            }
        }),
        g.prototype.destroy = f.destroy,
        g.prototype._undestroy = f.undestroy,
        g.prototype._destroy = function(t, e) {
            this.end(),
            e(t)
        }
    }
    ).call(this, n(18))
}
, function(t, e, n) {
    var r = n(7)
      , Buffer = r.Buffer;
    function i(t, e) {
        for (var n in t)
            e[n] = t[n]
    }
    function o(t, e, n) {
        return Buffer(t, e, n)
    }
    Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow ? t.exports = r : (i(r, e),
    e.Buffer = o),
    i(Buffer, o),
    o.from = function(t, e, n) {
        if ("number" == typeof t)
            throw new TypeError("Argument must not be a number");
        return Buffer(t, e, n)
    }
    ,
    o.alloc = function(t, e, n) {
        if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
        var r = Buffer(t);
        return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0),
        r
    }
    ,
    o.allocUnsafe = function(t) {
        if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
        return Buffer(t)
    }
    ,
    o.allocUnsafeSlow = function(t) {
        if ("number" != typeof t)
            throw new TypeError("Argument must be a number");
        return r.SlowBuffer(t)
    }
}
, function(t, e, n) {
    (e = t.exports = n(33)).Stream = e,
    e.Readable = e,
    e.Writable = n(23),
    e.Duplex = n(8),
    e.Transform = n(30),
    e.PassThrough = n(80)
}
, function(t, e, n) {
    "use strict";
    var r = n(14).codes.ERR_STREAM_PREMATURE_CLOSE;
    function i() {}
    t.exports = function t(e, n, o) {
        if ("function" == typeof n)
            return t(e, null, n);
        n || (n = {}),
        o = function(t) {
            var e = !1;
            return function() {
                if (!e) {
                    e = !0;
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                        r[i] = arguments[i];
                    t.apply(this, r)
                }
            }
        }(o || i);
        var s = n.readable || !1 !== n.readable && e.readable
          , a = n.writable || !1 !== n.writable && e.writable
          , u = function() {
            e.writable || l()
        }
          , c = e._writableState && e._writableState.finished
          , l = function() {
            a = !1,
            c = !0,
            s || o.call(e)
        }
          , h = e._readableState && e._readableState.endEmitted
          , f = function() {
            s = !1,
            h = !0,
            a || o.call(e)
        }
          , d = function(t) {
            o.call(e, t)
        }
          , p = function() {
            var t;
            return s && !h ? (e._readableState && e._readableState.ended || (t = new r),
            o.call(e, t)) : a && !c ? (e._writableState && e._writableState.ended || (t = new r),
            o.call(e, t)) : void 0
        }
          , g = function() {
            e.req.on("finish", l)
        };
        return function(t) {
            return t.setHeader && "function" == typeof t.abort
        }(e) ? (e.on("complete", l),
        e.on("abort", p),
        e.req ? g() : e.on("request", g)) : a && !e._writableState && (e.on("end", u),
        e.on("close", u)),
        e.on("end", f),
        e.on("finish", l),
        !1 !== n.error && e.on("error", d),
        e.on("close", p),
        function() {
            e.removeListener("complete", l),
            e.removeListener("abort", p),
            e.removeListener("request", g),
            e.req && e.req.removeListener("finish", l),
            e.removeListener("end", u),
            e.removeListener("close", u),
            e.removeListener("finish", l),
            e.removeListener("end", f),
            e.removeListener("error", d),
            e.removeListener("close", p)
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "icon", function() {
        return r
    });
    const r = n(3).EXODUS_ICON
}
, function(t, e, n) {
    "use strict";
    n.d(e, "enablePrivateFeatures", function() {
        return r
    });
    const r = !1
}
, function(t, e, n) {
    "use strict";
    n.d(e, "createWindowRpcTransport", function() {
        return o
    });
    var r = n(69)
      , i = n(70);
    function o({name: t, target: e}) {
        const n = new i.WindowTransport;
        return new r.MultiplexTransport({
            name: t,
            target: e,
            transport: n
        })
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = s;
    var r = n(8)
      , i = n(15);
    function o(t, e) {
        var n = this._transformState;
        n.transforming = !1;
        var r = n.writecb;
        if (!r)
            return this.emit("error", new Error("write callback called multiple times"));
        n.writechunk = null,
        n.writecb = null,
        null != e && this.push(e),
        r(t);
        var i = this._readableState;
        i.reading = !1,
        (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
    }
    function s(t) {
        if (!(this instanceof s))
            return new s(t);
        r.call(this, t),
        this._transformState = {
            afterTransform: o.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        },
        this._readableState.needReadable = !0,
        this._readableState.sync = !1,
        t && ("function" == typeof t.transform && (this._transform = t.transform),
        "function" == typeof t.flush && (this._flush = t.flush)),
        this.on("prefinish", a)
    }
    function a() {
        var t = this;
        "function" == typeof this._flush ? this._flush(function(e, n) {
            u(t, e, n)
        }) : u(this, null, null)
    }
    function u(t, e, n) {
        if (e)
            return t.emit("error", e);
        if (null != n && t.push(n),
        t._writableState.length)
            throw new Error("Calling transform done when ws.length != 0");
        if (t._transformState.transforming)
            throw new Error("Calling transform done when still transforming");
        return t.push(null)
    }
    i.inherits = n(1),
    i.inherits(s, r),
    s.prototype.push = function(t, e) {
        return this._transformState.needTransform = !1,
        r.prototype.push.call(this, t, e)
    }
    ,
    s.prototype._transform = function(t, e, n) {
        throw new Error("_transform() is not implemented")
    }
    ,
    s.prototype._write = function(t, e, n) {
        var r = this._transformState;
        if (r.writecb = n,
        r.writechunk = t,
        r.writeencoding = e,
        !r.transforming) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
    }
    ,
    s.prototype._read = function(t) {
        var e = this._transformState;
        null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0,
        this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
    }
    ,
    s.prototype._destroy = function(t, e) {
        var n = this;
        r.prototype._destroy.call(this, t, function(t) {
            e(t),
            n.emit("close")
        })
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(20);
    function i(t, e) {
        t.emit("error", e)
    }
    t.exports = {
        destroy: function(t, e) {
            var n = this
              , o = this._readableState && this._readableState.destroyed
              , s = this._writableState && this._writableState.destroyed;
            return o || s ? (e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || r.nextTick(i, this, t),
            this) : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(t || null, function(t) {
                !e && t ? (r.nextTick(i, n, t),
                n._writableState && (n._writableState.errorEmitted = !0)) : e && e(t)
            }),
            this)
        },
        undestroy: function() {
            this._readableState && (this._readableState.destroyed = !1,
            this._readableState.reading = !1,
            this._readableState.ended = !1,
            this._readableState.endEmitted = !1),
            this._writableState && (this._writableState.destroyed = !1,
            this._writableState.ended = !1,
            this._writableState.ending = !1,
            this._writableState.finished = !1,
            this._writableState.errorEmitted = !1)
        }
    }
}
, function(t, e, n) {
    t.exports = n(17).EventEmitter
}
, function(t, e, n) {
    "use strict";
    (function(e, r) {
        var i = n(20);
        t.exports = y;
        var o, s = n(84);
        y.ReadableState = _;
        n(17).EventEmitter;
        var a = function(t, e) {
            return t.listeners(e).length
        }
          , u = n(32)
          , Buffer = n(24).Buffer
          , c = e.Uint8Array || function() {}
        ;
        var l = n(15);
        l.inherits = n(1);
        var h = n(83)
          , f = void 0;
        f = h && h.debuglog ? h.debuglog("stream") : function() {}
        ;
        var d, p = n(82), g = n(31);
        l.inherits(y, u);
        var b = ["error", "close", "destroy", "pause", "resume"];
        function _(t, e) {
            t = t || {};
            var r = e instanceof (o = o || n(8));
            this.objectMode = !!t.objectMode,
            r && (this.objectMode = this.objectMode || !!t.readableObjectMode);
            var i = t.highWaterMark
              , s = t.readableHighWaterMark
              , a = this.objectMode ? 16 : 16384;
            this.highWaterMark = i || 0 === i ? i : r && (s || 0 === s) ? s : a,
            this.highWaterMark = Math.floor(this.highWaterMark),
            this.buffer = new p,
            this.length = 0,
            this.pipes = null,
            this.pipesCount = 0,
            this.flowing = null,
            this.ended = !1,
            this.endEmitted = !1,
            this.reading = !1,
            this.sync = !0,
            this.needReadable = !1,
            this.emittedReadable = !1,
            this.readableListening = !1,
            this.resumeScheduled = !1,
            this.destroyed = !1,
            this.defaultEncoding = t.defaultEncoding || "utf8",
            this.awaitDrain = 0,
            this.readingMore = !1,
            this.decoder = null,
            this.encoding = null,
            t.encoding && (d || (d = n(16).StringDecoder),
            this.decoder = new d(t.encoding),
            this.encoding = t.encoding)
        }
        function y(t) {
            if (o = o || n(8),
            !(this instanceof y))
                return new y(t);
            this._readableState = new _(t,this),
            this.readable = !0,
            t && ("function" == typeof t.read && (this._read = t.read),
            "function" == typeof t.destroy && (this._destroy = t.destroy)),
            u.call(this)
        }
        function w(t, e, n, r, i) {
            var o, s = t._readableState;
            null === e ? (s.reading = !1,
            function(t, e) {
                if (e.ended)
                    return;
                if (e.decoder) {
                    var n = e.decoder.end();
                    n && n.length && (e.buffer.push(n),
                    e.length += e.objectMode ? 1 : n.length)
                }
                e.ended = !0,
                S(t)
            }(t, s)) : (i || (o = function(t, e) {
                var n;
                r = e,
                Buffer.isBuffer(r) || r instanceof c || "string" == typeof e || void 0 === e || t.objectMode || (n = new TypeError("Invalid non-string/buffer chunk"));
                var r;
                return n
            }(s, e)),
            o ? t.emit("error", o) : s.objectMode || e && e.length > 0 ? ("string" == typeof e || s.objectMode || Object.getPrototypeOf(e) === Buffer.prototype || (e = function(t) {
                return Buffer.from(t)
            }(e)),
            r ? s.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : v(t, s, e, !0) : s.ended ? t.emit("error", new Error("stream.push() after EOF")) : (s.reading = !1,
            s.decoder && !n ? (e = s.decoder.write(e),
            s.objectMode || 0 !== e.length ? v(t, s, e, !1) : O(t, s)) : v(t, s, e, !1))) : r || (s.reading = !1));
            return function(t) {
                return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length)
            }(s)
        }
        function v(t, e, n, r) {
            e.flowing && 0 === e.length && !e.sync ? (t.emit("data", n),
            t.read(0)) : (e.length += e.objectMode ? 1 : n.length,
            r ? e.buffer.unshift(n) : e.buffer.push(n),
            e.needReadable && S(t)),
            O(t, e)
        }
        Object.defineProperty(y.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && this._readableState.destroyed
            },
            set: function(t) {
                this._readableState && (this._readableState.destroyed = t)
            }
        }),
        y.prototype.destroy = g.destroy,
        y.prototype._undestroy = g.undestroy,
        y.prototype._destroy = function(t, e) {
            this.push(null),
            e(t)
        }
        ,
        y.prototype.push = function(t, e) {
            var n, r = this._readableState;
            return r.objectMode ? n = !0 : "string" == typeof t && ((e = e || r.defaultEncoding) !== r.encoding && (t = Buffer.from(t, e),
            e = ""),
            n = !0),
            w(this, t, e, !1, n)
        }
        ,
        y.prototype.unshift = function(t) {
            return w(this, t, null, !0, !1)
        }
        ,
        y.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }
        ,
        y.prototype.setEncoding = function(t) {
            return d || (d = n(16).StringDecoder),
            this._readableState.decoder = new d(t),
            this._readableState.encoding = t,
            this
        }
        ;
        var m = 8388608;
        function E(t, e) {
            return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function(t) {
                return t >= m ? t = m : (t--,
                t |= t >>> 1,
                t |= t >>> 2,
                t |= t >>> 4,
                t |= t >>> 8,
                t |= t >>> 16,
                t++),
                t
            }(t)),
            t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0,
            0))
        }
        function S(t) {
            var e = t._readableState;
            e.needReadable = !1,
            e.emittedReadable || (f("emitReadable", e.flowing),
            e.emittedReadable = !0,
            e.sync ? i.nextTick(R, t) : R(t))
        }
        function R(t) {
            f("emit readable"),
            t.emit("readable"),
            j(t)
        }
        function O(t, e) {
            e.readingMore || (e.readingMore = !0,
            i.nextTick(I, t, e))
        }
        function I(t, e) {
            for (var n = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (f("maybeReadMore read 0"),
            t.read(0),
            n !== e.length); )
                n = e.length;
            e.readingMore = !1
        }
        function M(t) {
            f("readable nexttick read 0"),
            t.read(0)
        }
        function T(t, e) {
            e.reading || (f("resume read 0"),
            t.read(0)),
            e.resumeScheduled = !1,
            e.awaitDrain = 0,
            t.emit("resume"),
            j(t),
            e.flowing && !e.reading && t.read(0)
        }
        function j(t) {
            var e = t._readableState;
            for (f("flow", e.flowing); e.flowing && null !== t.read(); )
                ;
        }
        function A(t, e) {
            return 0 === e.length ? null : (e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length),
            e.buffer.clear()) : n = function(t, e, n) {
                var r;
                t < e.head.data.length ? (r = e.head.data.slice(0, t),
                e.head.data = e.head.data.slice(t)) : r = t === e.head.data.length ? e.shift() : n ? function(t, e) {
                    var n = e.head
                      , r = 1
                      , i = n.data;
                    t -= i.length;
                    for (; n = n.next; ) {
                        var o = n.data
                          , s = t > o.length ? o.length : t;
                        if (s === o.length ? i += o : i += o.slice(0, t),
                        0 === (t -= s)) {
                            s === o.length ? (++r,
                            n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n,
                            n.data = o.slice(s));
                            break
                        }
                        ++r
                    }
                    return e.length -= r,
                    i
                }(t, e) : function(t, e) {
                    var n = Buffer.allocUnsafe(t)
                      , r = e.head
                      , i = 1;
                    r.data.copy(n),
                    t -= r.data.length;
                    for (; r = r.next; ) {
                        var o = r.data
                          , s = t > o.length ? o.length : t;
                        if (o.copy(n, n.length - t, 0, s),
                        0 === (t -= s)) {
                            s === o.length ? (++i,
                            r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r,
                            r.data = o.slice(s));
                            break
                        }
                        ++i
                    }
                    return e.length -= i,
                    n
                }(t, e);
                return r
            }(t, e.buffer, e.decoder),
            n);
            var n
        }
        function N(t) {
            var e = t._readableState;
            if (e.length > 0)
                throw new Error('"endReadable()" called on non-empty stream');
            e.endEmitted || (e.ended = !0,
            i.nextTick(P, e, t))
        }
        function P(t, e) {
            t.endEmitted || 0 !== t.length || (t.endEmitted = !0,
            e.readable = !1,
            e.emit("end"))
        }
        function x(t, e) {
            for (var n = 0, r = t.length; n < r; n++)
                if (t[n] === e)
                    return n;
            return -1
        }
        y.prototype.read = function(t) {
            f("read", t),
            t = parseInt(t, 10);
            var e = this._readableState
              , n = t;
            if (0 !== t && (e.emittedReadable = !1),
            0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended))
                return f("read: emitReadable", e.length, e.ended),
                0 === e.length && e.ended ? N(this) : S(this),
                null;
            if (0 === (t = E(t, e)) && e.ended)
                return 0 === e.length && N(this),
                null;
            var r, i = e.needReadable;
            return f("need readable", i),
            (0 === e.length || e.length - t < e.highWaterMark) && f("length less than watermark", i = !0),
            e.ended || e.reading ? f("reading or ended", i = !1) : i && (f("do read"),
            e.reading = !0,
            e.sync = !0,
            0 === e.length && (e.needReadable = !0),
            this._read(e.highWaterMark),
            e.sync = !1,
            e.reading || (t = E(n, e))),
            null === (r = t > 0 ? A(t, e) : null) ? (e.needReadable = !0,
            t = 0) : e.length -= t,
            0 === e.length && (e.ended || (e.needReadable = !0),
            n !== t && e.ended && N(this)),
            null !== r && this.emit("data", r),
            r
        }
        ,
        y.prototype._read = function(t) {
            this.emit("error", new Error("_read() is not implemented"))
        }
        ,
        y.prototype.pipe = function(t, e) {
            var n = this
              , o = this._readableState;
            switch (o.pipesCount) {
            case 0:
                o.pipes = t;
                break;
            case 1:
                o.pipes = [o.pipes, t];
                break;
            default:
                o.pipes.push(t)
            }
            o.pipesCount += 1,
            f("pipe count=%d opts=%j", o.pipesCount, e);
            var u = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr ? l : w;
            function c(e, r) {
                f("onunpipe"),
                e === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0,
                f("cleanup"),
                t.removeListener("close", _),
                t.removeListener("finish", y),
                t.removeListener("drain", h),
                t.removeListener("error", b),
                t.removeListener("unpipe", c),
                n.removeListener("end", l),
                n.removeListener("end", w),
                n.removeListener("data", g),
                d = !0,
                !o.awaitDrain || t._writableState && !t._writableState.needDrain || h())
            }
            function l() {
                f("onend"),
                t.end()
            }
            o.endEmitted ? i.nextTick(u) : n.once("end", u),
            t.on("unpipe", c);
            var h = function(t) {
                return function() {
                    var e = t._readableState;
                    f("pipeOnDrain", e.awaitDrain),
                    e.awaitDrain && e.awaitDrain--,
                    0 === e.awaitDrain && a(t, "data") && (e.flowing = !0,
                    j(t))
                }
            }(n);
            t.on("drain", h);
            var d = !1;
            var p = !1;
            function g(e) {
                f("ondata"),
                p = !1,
                !1 !== t.write(e) || p || ((1 === o.pipesCount && o.pipes === t || o.pipesCount > 1 && -1 !== x(o.pipes, t)) && !d && (f("false write response, pause", n._readableState.awaitDrain),
                n._readableState.awaitDrain++,
                p = !0),
                n.pause())
            }
            function b(e) {
                f("onerror", e),
                w(),
                t.removeListener("error", b),
                0 === a(t, "error") && t.emit("error", e)
            }
            function _() {
                t.removeListener("finish", y),
                w()
            }
            function y() {
                f("onfinish"),
                t.removeListener("close", _),
                w()
            }
            function w() {
                f("unpipe"),
                n.unpipe(t)
            }
            return n.on("data", g),
            function(t, e, n) {
                if ("function" == typeof t.prependListener)
                    return t.prependListener(e, n);
                t._events && t._events[e] ? s(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]] : t.on(e, n)
            }(t, "error", b),
            t.once("close", _),
            t.once("finish", y),
            t.emit("pipe", n),
            o.flowing || (f("pipe resume"),
            n.resume()),
            t
        }
        ,
        y.prototype.unpipe = function(t) {
            var e = this._readableState
              , n = {
                hasUnpiped: !1
            };
            if (0 === e.pipesCount)
                return this;
            if (1 === e.pipesCount)
                return t && t !== e.pipes ? this : (t || (t = e.pipes),
                e.pipes = null,
                e.pipesCount = 0,
                e.flowing = !1,
                t && t.emit("unpipe", this, n),
                this);
            if (!t) {
                var r = e.pipes
                  , i = e.pipesCount;
                e.pipes = null,
                e.pipesCount = 0,
                e.flowing = !1;
                for (var o = 0; o < i; o++)
                    r[o].emit("unpipe", this, n);
                return this
            }
            var s = x(e.pipes, t);
            return -1 === s ? this : (e.pipes.splice(s, 1),
            e.pipesCount -= 1,
            1 === e.pipesCount && (e.pipes = e.pipes[0]),
            t.emit("unpipe", this, n),
            this)
        }
        ,
        y.prototype.on = function(t, e) {
            var n = u.prototype.on.call(this, t, e);
            if ("data" === t)
                !1 !== this._readableState.flowing && this.resume();
            else if ("readable" === t) {
                var r = this._readableState;
                r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0,
                r.emittedReadable = !1,
                r.reading ? r.length && S(this) : i.nextTick(M, this))
            }
            return n
        }
        ,
        y.prototype.addListener = y.prototype.on,
        y.prototype.resume = function() {
            var t = this._readableState;
            return t.flowing || (f("resume"),
            t.flowing = !0,
            function(t, e) {
                e.resumeScheduled || (e.resumeScheduled = !0,
                i.nextTick(T, t, e))
            }(this, t)),
            this
        }
        ,
        y.prototype.pause = function() {
            return f("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing && (f("pause"),
            this._readableState.flowing = !1,
            this.emit("pause")),
            this
        }
        ,
        y.prototype.wrap = function(t) {
            var e = this
              , n = this._readableState
              , r = !1;
            for (var i in t.on("end", function() {
                if (f("wrapped end"),
                n.decoder && !n.ended) {
                    var t = n.decoder.end();
                    t && t.length && e.push(t)
                }
                e.push(null)
            }),
            t.on("data", function(i) {
                (f("wrapped data"),
                n.decoder && (i = n.decoder.write(i)),
                n.objectMode && null == i) || (n.objectMode || i && i.length) && (e.push(i) || (r = !0,
                t.pause()))
            }),
            t)
                void 0 === this[i] && "function" == typeof t[i] && (this[i] = function(e) {
                    return function() {
                        return t[e].apply(t, arguments)
                    }
                }(i));
            for (var o = 0; o < b.length; o++)
                t.on(b[o], this.emit.bind(this, b[o]));
            return this._read = function(e) {
                f("wrapped _read", e),
                r && (r = !1,
                t.resume())
            }
            ,
            this
        }
        ,
        Object.defineProperty(y.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark
            }
        }),
        y._fromList = A
    }
    ).call(this, n(18), n(9))
}
, function(t, e, n) {
    var r = n(1)
      , i = n(12)
      , Buffer = n(4).Buffer
      , o = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
      , s = new Array(160);
    function a() {
        this.init(),
        this._w = s,
        i.call(this, 128, 112)
    }
    function u(t, e, n) {
        return n ^ t & (e ^ n)
    }
    function c(t, e, n) {
        return t & e | n & (t | e)
    }
    function l(t, e) {
        return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25)
    }
    function h(t, e) {
        return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23)
    }
    function f(t, e) {
        return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7
    }
    function d(t, e) {
        return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25)
    }
    function p(t, e) {
        return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6
    }
    function g(t, e) {
        return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26)
    }
    function b(t, e) {
        return t >>> 0 < e >>> 0 ? 1 : 0
    }
    r(a, i),
    a.prototype.init = function() {
        return this._ah = 1779033703,
        this._bh = 3144134277,
        this._ch = 1013904242,
        this._dh = 2773480762,
        this._eh = 1359893119,
        this._fh = 2600822924,
        this._gh = 528734635,
        this._hh = 1541459225,
        this._al = 4089235720,
        this._bl = 2227873595,
        this._cl = 4271175723,
        this._dl = 1595750129,
        this._el = 2917565137,
        this._fl = 725511199,
        this._gl = 4215389547,
        this._hl = 327033209,
        this
    }
    ,
    a.prototype._update = function(t) {
        for (var e = this._w, n = 0 | this._ah, r = 0 | this._bh, i = 0 | this._ch, s = 0 | this._dh, a = 0 | this._eh, _ = 0 | this._fh, y = 0 | this._gh, w = 0 | this._hh, v = 0 | this._al, m = 0 | this._bl, E = 0 | this._cl, S = 0 | this._dl, R = 0 | this._el, O = 0 | this._fl, I = 0 | this._gl, M = 0 | this._hl, T = 0; T < 32; T += 2)
            e[T] = t.readInt32BE(4 * T),
            e[T + 1] = t.readInt32BE(4 * T + 4);
        for (; T < 160; T += 2) {
            var j = e[T - 30]
              , A = e[T - 30 + 1]
              , N = f(j, A)
              , P = d(A, j)
              , x = p(j = e[T - 4], A = e[T - 4 + 1])
              , k = g(A, j)
              , L = e[T - 14]
              , D = e[T - 14 + 1]
              , C = e[T - 32]
              , B = e[T - 32 + 1]
              , U = P + D | 0
              , W = N + L + b(U, P) | 0;
            W = (W = W + x + b(U = U + k | 0, k) | 0) + C + b(U = U + B | 0, B) | 0,
            e[T] = W,
            e[T + 1] = U
        }
        for (var z = 0; z < 160; z += 2) {
            W = e[z],
            U = e[z + 1];
            var q = c(n, r, i)
              , G = c(v, m, E)
              , F = l(n, v)
              , V = l(v, n)
              , H = h(a, R)
              , Y = h(R, a)
              , Z = o[z]
              , Q = o[z + 1]
              , K = u(a, _, y)
              , J = u(R, O, I)
              , X = M + Y | 0
              , $ = w + H + b(X, M) | 0;
            $ = ($ = ($ = $ + K + b(X = X + J | 0, J) | 0) + Z + b(X = X + Q | 0, Q) | 0) + W + b(X = X + U | 0, U) | 0;
            var tt = V + G | 0
              , et = F + q + b(tt, V) | 0;
            w = y,
            M = I,
            y = _,
            I = O,
            _ = a,
            O = R,
            a = s + $ + b(R = S + X | 0, S) | 0,
            s = i,
            S = E,
            i = r,
            E = m,
            r = n,
            m = v,
            n = $ + et + b(v = X + tt | 0, X) | 0
        }
        this._al = this._al + v | 0,
        this._bl = this._bl + m | 0,
        this._cl = this._cl + E | 0,
        this._dl = this._dl + S | 0,
        this._el = this._el + R | 0,
        this._fl = this._fl + O | 0,
        this._gl = this._gl + I | 0,
        this._hl = this._hl + M | 0,
        this._ah = this._ah + n + b(this._al, v) | 0,
        this._bh = this._bh + r + b(this._bl, m) | 0,
        this._ch = this._ch + i + b(this._cl, E) | 0,
        this._dh = this._dh + s + b(this._dl, S) | 0,
        this._eh = this._eh + a + b(this._el, R) | 0,
        this._fh = this._fh + _ + b(this._fl, O) | 0,
        this._gh = this._gh + y + b(this._gl, I) | 0,
        this._hh = this._hh + w + b(this._hl, M) | 0
    }
    ,
    a.prototype._hash = function() {
        var t = Buffer.allocUnsafe(64);
        function e(e, n, r) {
            t.writeInt32BE(e, r),
            t.writeInt32BE(n, r + 4)
        }
        return e(this._ah, this._al, 0),
        e(this._bh, this._bl, 8),
        e(this._ch, this._cl, 16),
        e(this._dh, this._dl, 24),
        e(this._eh, this._el, 32),
        e(this._fh, this._fl, 40),
        e(this._gh, this._gl, 48),
        e(this._hh, this._hl, 56),
        t
    }
    ,
    t.exports = a
}
, function(t, e, n) {
    var r = n(1)
      , i = n(12)
      , Buffer = n(4).Buffer
      , o = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
      , s = new Array(64);
    function a() {
        this.init(),
        this._w = s,
        i.call(this, 64, 56)
    }
    function u(t, e, n) {
        return n ^ t & (e ^ n)
    }
    function c(t, e, n) {
        return t & e | n & (t | e)
    }
    function l(t) {
        return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)
    }
    function h(t) {
        return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7)
    }
    function f(t) {
        return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3
    }
    r(a, i),
    a.prototype.init = function() {
        return this._a = 1779033703,
        this._b = 3144134277,
        this._c = 1013904242,
        this._d = 2773480762,
        this._e = 1359893119,
        this._f = 2600822924,
        this._g = 528734635,
        this._h = 1541459225,
        this
    }
    ,
    a.prototype._update = function(t) {
        for (var e, n = this._w, r = 0 | this._a, i = 0 | this._b, s = 0 | this._c, a = 0 | this._d, d = 0 | this._e, p = 0 | this._f, g = 0 | this._g, b = 0 | this._h, _ = 0; _ < 16; ++_)
            n[_] = t.readInt32BE(4 * _);
        for (; _ < 64; ++_)
            n[_] = 0 | (((e = n[_ - 2]) >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) + n[_ - 7] + f(n[_ - 15]) + n[_ - 16];
        for (var y = 0; y < 64; ++y) {
            var w = b + h(d) + u(d, p, g) + o[y] + n[y] | 0
              , v = l(r) + c(r, i, s) | 0;
            b = g,
            g = p,
            p = d,
            d = a + w | 0,
            a = s,
            s = i,
            i = r,
            r = w + v | 0
        }
        this._a = r + this._a | 0,
        this._b = i + this._b | 0,
        this._c = s + this._c | 0,
        this._d = a + this._d | 0,
        this._e = d + this._e | 0,
        this._f = p + this._f | 0,
        this._g = g + this._g | 0,
        this._h = b + this._h | 0
    }
    ,
    a.prototype._hash = function() {
        var t = Buffer.allocUnsafe(32);
        return t.writeInt32BE(this._a, 0),
        t.writeInt32BE(this._b, 4),
        t.writeInt32BE(this._c, 8),
        t.writeInt32BE(this._d, 12),
        t.writeInt32BE(this._e, 16),
        t.writeInt32BE(this._f, 20),
        t.writeInt32BE(this._g, 24),
        t.writeInt32BE(this._h, 28),
        t
    }
    ,
    t.exports = a
}
, function(t, e, n) {
    "use strict";
    t.exports = l;
    var r = n(14).codes
      , i = r.ERR_METHOD_NOT_IMPLEMENTED
      , o = r.ERR_MULTIPLE_CALLBACK
      , s = r.ERR_TRANSFORM_ALREADY_TRANSFORMING
      , a = r.ERR_TRANSFORM_WITH_LENGTH_0
      , u = n(13);
    function c(t, e) {
        var n = this._transformState;
        n.transforming = !1;
        var r = n.writecb;
        if (null === r)
            return this.emit("error", new o);
        n.writechunk = null,
        n.writecb = null,
        null != e && this.push(e),
        r(t);
        var i = this._readableState;
        i.reading = !1,
        (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
    }
    function l(t) {
        if (!(this instanceof l))
            return new l(t);
        u.call(this, t),
        this._transformState = {
            afterTransform: c.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        },
        this._readableState.needReadable = !0,
        this._readableState.sync = !1,
        t && ("function" == typeof t.transform && (this._transform = t.transform),
        "function" == typeof t.flush && (this._flush = t.flush)),
        this.on("prefinish", h)
    }
    function h() {
        var t = this;
        "function" != typeof this._flush || this._readableState.destroyed ? f(this, null, null) : this._flush(function(e, n) {
            f(t, e, n)
        })
    }
    function f(t, e, n) {
        if (e)
            return t.emit("error", e);
        if (null != n && t.push(n),
        t._writableState.length)
            throw new a;
        if (t._transformState.transforming)
            throw new s;
        return t.push(null)
    }
    n(1)(l, u),
    l.prototype.push = function(t, e) {
        return this._transformState.needTransform = !1,
        u.prototype.push.call(this, t, e)
    }
    ,
    l.prototype._transform = function(t, e, n) {
        n(new i("_transform()"))
    }
    ,
    l.prototype._write = function(t, e, n) {
        var r = this._transformState;
        if (r.writecb = n,
        r.writechunk = t,
        r.writeencoding = e,
        !r.transforming) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
    }
    ,
    l.prototype._read = function(t) {
        var e = this._transformState;
        null === e.writechunk || e.transforming ? e.needTransform = !0 : (e.transforming = !0,
        this._transform(e.writechunk, e.writeencoding, e.afterTransform))
    }
    ,
    l.prototype._destroy = function(t, e) {
        u.prototype._destroy.call(this, t, function(t) {
            e(t)
        })
    }
}
, function(t, e, n) {
    (function(e) {
        function n(t) {
            try {
                if (!e.localStorage)
                    return !1
            } catch (t) {
                return !1
            }
            var n = e.localStorage[t];
            return null != n && "true" === String(n).toLowerCase()
        }
        t.exports = function(t, e) {
            if (n("noDeprecation"))
                return t;
            var r = !1;
            return function() {
                if (!r) {
                    if (n("throwDeprecation"))
                        throw new Error(e);
                    n("traceDeprecation") ? console.trace(e) : console.warn(e),
                    r = !0
                }
                return t.apply(this, arguments)
            }
        }
    }
    ).call(this, n(18))
}
, function(t, e, n) {
    "use strict";
    (function(e, r) {
        function i(t) {
            var e = this;
            this.next = null,
            this.entry = null,
            this.finish = function() {
                !function(t, e, n) {
                    var r = t.entry;
                    t.entry = null;
                    for (; r; ) {
                        var i = r.callback;
                        e.pendingcb--,
                        i(n),
                        r = r.next
                    }
                    e.corkedRequestsFree.next = t
                }(e, t)
            }
        }
        var o;
        t.exports = R,
        R.WritableState = S;
        var s = {
            deprecate: n(37)
        }
          , a = n(41)
          , Buffer = n(7).Buffer
          , u = e.Uint8Array || function() {}
        ;
        var c, l = n(40), h = n(39).getHighWaterMark, f = n(14).codes, d = f.ERR_INVALID_ARG_TYPE, p = f.ERR_METHOD_NOT_IMPLEMENTED, g = f.ERR_MULTIPLE_CALLBACK, b = f.ERR_STREAM_CANNOT_PIPE, _ = f.ERR_STREAM_DESTROYED, y = f.ERR_STREAM_NULL_VALUES, w = f.ERR_STREAM_WRITE_AFTER_END, v = f.ERR_UNKNOWN_ENCODING, m = l.errorOrDestroy;
        function E() {}
        function S(t, e, s) {
            o = o || n(13),
            t = t || {},
            "boolean" != typeof s && (s = e instanceof o),
            this.objectMode = !!t.objectMode,
            s && (this.objectMode = this.objectMode || !!t.writableObjectMode),
            this.highWaterMark = h(this, t, "writableHighWaterMark", s),
            this.finalCalled = !1,
            this.needDrain = !1,
            this.ending = !1,
            this.ended = !1,
            this.finished = !1,
            this.destroyed = !1;
            var a = !1 === t.decodeStrings;
            this.decodeStrings = !a,
            this.defaultEncoding = t.defaultEncoding || "utf8",
            this.length = 0,
            this.writing = !1,
            this.corked = 0,
            this.sync = !0,
            this.bufferProcessing = !1,
            this.onwrite = function(t) {
                !function(t, e) {
                    var n = t._writableState
                      , i = n.sync
                      , o = n.writecb;
                    if ("function" != typeof o)
                        throw new g;
                    if (function(t) {
                        t.writing = !1,
                        t.writecb = null,
                        t.length -= t.writelen,
                        t.writelen = 0
                    }(n),
                    e)
                        !function(t, e, n, i, o) {
                            --e.pendingcb,
                            n ? (r.nextTick(o, i),
                            r.nextTick(A, t, e),
                            t._writableState.errorEmitted = !0,
                            m(t, i)) : (o(i),
                            t._writableState.errorEmitted = !0,
                            m(t, i),
                            A(t, e))
                        }(t, n, i, e, o);
                    else {
                        var s = T(n) || t.destroyed;
                        s || n.corked || n.bufferProcessing || !n.bufferedRequest || M(t, n),
                        i ? r.nextTick(I, t, n, s, o) : I(t, n, s, o)
                    }
                }(e, t)
            }
            ,
            this.writecb = null,
            this.writelen = 0,
            this.bufferedRequest = null,
            this.lastBufferedRequest = null,
            this.pendingcb = 0,
            this.prefinished = !1,
            this.errorEmitted = !1,
            this.emitClose = !1 !== t.emitClose,
            this.autoDestroy = !!t.autoDestroy,
            this.bufferedRequestCount = 0,
            this.corkedRequestsFree = new i(this)
        }
        function R(t) {
            var e = this instanceof (o = o || n(13));
            if (!e && !c.call(R, this))
                return new R(t);
            this._writableState = new S(t,this,e),
            this.writable = !0,
            t && ("function" == typeof t.write && (this._write = t.write),
            "function" == typeof t.writev && (this._writev = t.writev),
            "function" == typeof t.destroy && (this._destroy = t.destroy),
            "function" == typeof t.final && (this._final = t.final)),
            a.call(this)
        }
        function O(t, e, n, r, i, o, s) {
            e.writelen = r,
            e.writecb = s,
            e.writing = !0,
            e.sync = !0,
            e.destroyed ? e.onwrite(new _("write")) : n ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite),
            e.sync = !1
        }
        function I(t, e, n, r) {
            n || function(t, e) {
                0 === e.length && e.needDrain && (e.needDrain = !1,
                t.emit("drain"))
            }(t, e),
            e.pendingcb--,
            r(),
            A(t, e)
        }
        function M(t, e) {
            e.bufferProcessing = !0;
            var n = e.bufferedRequest;
            if (t._writev && n && n.next) {
                var r = e.bufferedRequestCount
                  , o = new Array(r)
                  , s = e.corkedRequestsFree;
                s.entry = n;
                for (var a = 0, u = !0; n; )
                    o[a] = n,
                    n.isBuf || (u = !1),
                    n = n.next,
                    a += 1;
                o.allBuffers = u,
                O(t, e, !0, e.length, o, "", s.finish),
                e.pendingcb++,
                e.lastBufferedRequest = null,
                s.next ? (e.corkedRequestsFree = s.next,
                s.next = null) : e.corkedRequestsFree = new i(e),
                e.bufferedRequestCount = 0
            } else {
                for (; n; ) {
                    var c = n.chunk
                      , l = n.encoding
                      , h = n.callback;
                    if (O(t, e, !1, e.objectMode ? 1 : c.length, c, l, h),
                    n = n.next,
                    e.bufferedRequestCount--,
                    e.writing)
                        break
                }
                null === n && (e.lastBufferedRequest = null)
            }
            e.bufferedRequest = n,
            e.bufferProcessing = !1
        }
        function T(t) {
            return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing
        }
        function j(t, e) {
            t._final(function(n) {
                e.pendingcb--,
                n && m(t, n),
                e.prefinished = !0,
                t.emit("prefinish"),
                A(t, e)
            })
        }
        function A(t, e) {
            var n = T(e);
            if (n && (function(t, e) {
                e.prefinished || e.finalCalled || ("function" != typeof t._final || e.destroyed ? (e.prefinished = !0,
                t.emit("prefinish")) : (e.pendingcb++,
                e.finalCalled = !0,
                r.nextTick(j, t, e)))
            }(t, e),
            0 === e.pendingcb && (e.finished = !0,
            t.emit("finish"),
            e.autoDestroy))) {
                var i = t._readableState;
                (!i || i.autoDestroy && i.endEmitted) && t.destroy()
            }
            return n
        }
        n(1)(R, a),
        S.prototype.getBuffer = function() {
            for (var t = this.bufferedRequest, e = []; t; )
                e.push(t),
                t = t.next;
            return e
        }
        ,
        function() {
            try {
                Object.defineProperty(S.prototype, "buffer", {
                    get: s.deprecate(function() {
                        return this.getBuffer()
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch (t) {}
        }(),
        Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (c = Function.prototype[Symbol.hasInstance],
        Object.defineProperty(R, Symbol.hasInstance, {
            value: function(t) {
                return !!c.call(this, t) || this === R && (t && t._writableState instanceof S)
            }
        })) : c = function(t) {
            return t instanceof this
        }
        ,
        R.prototype.pipe = function() {
            m(this, new b)
        }
        ,
        R.prototype.write = function(t, e, n) {
            var i, o = this._writableState, s = !1, a = !o.objectMode && (i = t,
            Buffer.isBuffer(i) || i instanceof u);
            return a && !Buffer.isBuffer(t) && (t = function(t) {
                return Buffer.from(t)
            }(t)),
            "function" == typeof e && (n = e,
            e = null),
            a ? e = "buffer" : e || (e = o.defaultEncoding),
            "function" != typeof n && (n = E),
            o.ending ? function(t, e) {
                var n = new w;
                m(t, n),
                r.nextTick(e, n)
            }(this, n) : (a || function(t, e, n, i) {
                var o;
                return null === n ? o = new y : "string" == typeof n || e.objectMode || (o = new d("chunk",["string", "Buffer"],n)),
                !o || (m(t, o),
                r.nextTick(i, o),
                !1)
            }(this, o, t, n)) && (o.pendingcb++,
            s = function(t, e, n, r, i, o) {
                if (!n) {
                    var s = function(t, e, n) {
                        t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = Buffer.from(e, n));
                        return e
                    }(e, r, i);
                    r !== s && (n = !0,
                    i = "buffer",
                    r = s)
                }
                var a = e.objectMode ? 1 : r.length;
                e.length += a;
                var u = e.length < e.highWaterMark;
                u || (e.needDrain = !0);
                if (e.writing || e.corked) {
                    var c = e.lastBufferedRequest;
                    e.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: o,
                        next: null
                    },
                    c ? c.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest,
                    e.bufferedRequestCount += 1
                } else
                    O(t, e, !1, a, r, i, o);
                return u
            }(this, o, a, t, e, n)),
            s
        }
        ,
        R.prototype.cork = function() {
            this._writableState.corked++
        }
        ,
        R.prototype.uncork = function() {
            var t = this._writableState;
            t.corked && (t.corked--,
            t.writing || t.corked || t.bufferProcessing || !t.bufferedRequest || M(this, t))
        }
        ,
        R.prototype.setDefaultEncoding = function(t) {
            if ("string" == typeof t && (t = t.toLowerCase()),
            !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1))
                throw new v(t);
            return this._writableState.defaultEncoding = t,
            this
        }
        ,
        Object.defineProperty(R.prototype, "writableBuffer", {
            enumerable: !1,
            get: function() {
                return this._writableState && this._writableState.getBuffer()
            }
        }),
        Object.defineProperty(R.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }),
        R.prototype._write = function(t, e, n) {
            n(new p("_write()"))
        }
        ,
        R.prototype._writev = null,
        R.prototype.end = function(t, e, n) {
            var i = this._writableState;
            return "function" == typeof t ? (n = t,
            t = null,
            e = null) : "function" == typeof e && (n = e,
            e = null),
            null != t && this.write(t, e),
            i.corked && (i.corked = 1,
            this.uncork()),
            i.ending || function(t, e, n) {
                e.ending = !0,
                A(t, e),
                n && (e.finished ? r.nextTick(n) : t.once("finish", n));
                e.ended = !0,
                t.writable = !1
            }(this, i, n),
            this
        }
        ,
        Object.defineProperty(R.prototype, "writableLength", {
            enumerable: !1,
            get: function() {
                return this._writableState.length
            }
        }),
        Object.defineProperty(R.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return void 0 !== this._writableState && this._writableState.destroyed
            },
            set: function(t) {
                this._writableState && (this._writableState.destroyed = t)
            }
        }),
        R.prototype.destroy = l.destroy,
        R.prototype._undestroy = l.undestroy,
        R.prototype._destroy = function(t, e) {
            e(t)
        }
    }
    ).call(this, n(18), n(9))
}
, function(t, e, n) {
    "use strict";
    var r = n(14).codes.ERR_INVALID_OPT_VALUE;
    t.exports = {
        getHighWaterMark: function(t, e, n, i) {
            var o = function(t, e, n) {
                return null != t.highWaterMark ? t.highWaterMark : e ? t[n] : null
            }(e, i, n);
            if (null != o) {
                if (!isFinite(o) || Math.floor(o) !== o || o < 0)
                    throw new r(i ? n : "highWaterMark",o);
                return Math.floor(o)
            }
            return t.objectMode ? 16 : 16384
        }
    }
}
, function(t, e, n) {
    "use strict";
    (function(e) {
        function n(t, e) {
            i(t, e),
            r(t)
        }
        function r(t) {
            t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close")
        }
        function i(t, e) {
            t.emit("error", e)
        }
        t.exports = {
            destroy: function(t, o) {
                var s = this
                  , a = this._readableState && this._readableState.destroyed
                  , u = this._writableState && this._writableState.destroyed;
                return a || u ? (o ? o(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
                e.nextTick(i, this, t)) : e.nextTick(i, this, t)),
                this) : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(t || null, function(t) {
                    !o && t ? s._writableState ? s._writableState.errorEmitted ? e.nextTick(r, s) : (s._writableState.errorEmitted = !0,
                    e.nextTick(n, s, t)) : e.nextTick(n, s, t) : o ? (e.nextTick(r, s),
                    o(t)) : e.nextTick(r, s)
                }),
                this)
            },
            undestroy: function() {
                this._readableState && (this._readableState.destroyed = !1,
                this._readableState.reading = !1,
                this._readableState.ended = !1,
                this._readableState.endEmitted = !1),
                this._writableState && (this._writableState.destroyed = !1,
                this._writableState.ended = !1,
                this._writableState.ending = !1,
                this._writableState.finalCalled = !1,
                this._writableState.prefinished = !1,
                this._writableState.finished = !1,
                this._writableState.errorEmitted = !1)
            },
            errorOrDestroy: function(t, e) {
                var n = t._readableState
                  , r = t._writableState;
                n && n.autoDestroy || r && r.autoDestroy ? t.destroy(e) : t.emit("error", e)
            }
        }
    }
    ).call(this, n(9))
}
, function(t, e, n) {
    t.exports = n(17).EventEmitter
}
, function(t, e, n) {
    "use strict";
    (function(e, r) {
        var i;
        t.exports = R,
        R.ReadableState = S;
        n(17).EventEmitter;
        var o = function(t, e) {
            return t.listeners(e).length
        }
          , s = n(41)
          , Buffer = n(7).Buffer
          , a = e.Uint8Array || function() {}
        ;
        var u, c = n(99);
        u = c && c.debuglog ? c.debuglog("stream") : function() {}
        ;
        var l, h, f, d = n(98), p = n(40), g = n(39).getHighWaterMark, b = n(14).codes, _ = b.ERR_INVALID_ARG_TYPE, y = b.ERR_STREAM_PUSH_AFTER_EOF, w = b.ERR_METHOD_NOT_IMPLEMENTED, v = b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        n(1)(R, s);
        var m = p.errorOrDestroy
          , E = ["error", "close", "destroy", "pause", "resume"];
        function S(t, e, r) {
            i = i || n(13),
            t = t || {},
            "boolean" != typeof r && (r = e instanceof i),
            this.objectMode = !!t.objectMode,
            r && (this.objectMode = this.objectMode || !!t.readableObjectMode),
            this.highWaterMark = g(this, t, "readableHighWaterMark", r),
            this.buffer = new d,
            this.length = 0,
            this.pipes = null,
            this.pipesCount = 0,
            this.flowing = null,
            this.ended = !1,
            this.endEmitted = !1,
            this.reading = !1,
            this.sync = !0,
            this.needReadable = !1,
            this.emittedReadable = !1,
            this.readableListening = !1,
            this.resumeScheduled = !1,
            this.paused = !0,
            this.emitClose = !1 !== t.emitClose,
            this.autoDestroy = !!t.autoDestroy,
            this.destroyed = !1,
            this.defaultEncoding = t.defaultEncoding || "utf8",
            this.awaitDrain = 0,
            this.readingMore = !1,
            this.decoder = null,
            this.encoding = null,
            t.encoding && (l || (l = n(16).StringDecoder),
            this.decoder = new l(t.encoding),
            this.encoding = t.encoding)
        }
        function R(t) {
            if (i = i || n(13),
            !(this instanceof R))
                return new R(t);
            var e = this instanceof i;
            this._readableState = new S(t,this,e),
            this.readable = !0,
            t && ("function" == typeof t.read && (this._read = t.read),
            "function" == typeof t.destroy && (this._destroy = t.destroy)),
            s.call(this)
        }
        function O(t, e, n, r, i) {
            u("readableAddChunk", e);
            var o, s = t._readableState;
            if (null === e)
                s.reading = !1,
                function(t, e) {
                    if (u("onEofChunk"),
                    e.ended)
                        return;
                    if (e.decoder) {
                        var n = e.decoder.end();
                        n && n.length && (e.buffer.push(n),
                        e.length += e.objectMode ? 1 : n.length)
                    }
                    e.ended = !0,
                    e.sync ? j(t) : (e.needReadable = !1,
                    e.emittedReadable || (e.emittedReadable = !0,
                    A(t)))
                }(t, s);
            else if (i || (o = function(t, e) {
                var n;
                r = e,
                Buffer.isBuffer(r) || r instanceof a || "string" == typeof e || void 0 === e || t.objectMode || (n = new _("chunk",["string", "Buffer", "Uint8Array"],e));
                var r;
                return n
            }(s, e)),
            o)
                m(t, o);
            else if (s.objectMode || e && e.length > 0)
                if ("string" == typeof e || s.objectMode || Object.getPrototypeOf(e) === Buffer.prototype || (e = function(t) {
                    return Buffer.from(t)
                }(e)),
                r)
                    s.endEmitted ? m(t, new v) : I(t, s, e, !0);
                else if (s.ended)
                    m(t, new y);
                else {
                    if (s.destroyed)
                        return !1;
                    s.reading = !1,
                    s.decoder && !n ? (e = s.decoder.write(e),
                    s.objectMode || 0 !== e.length ? I(t, s, e, !1) : N(t, s)) : I(t, s, e, !1)
                }
            else
                r || (s.reading = !1,
                N(t, s));
            return !s.ended && (s.length < s.highWaterMark || 0 === s.length)
        }
        function I(t, e, n, r) {
            e.flowing && 0 === e.length && !e.sync ? (e.awaitDrain = 0,
            t.emit("data", n)) : (e.length += e.objectMode ? 1 : n.length,
            r ? e.buffer.unshift(n) : e.buffer.push(n),
            e.needReadable && j(t)),
            N(t, e)
        }
        Object.defineProperty(R.prototype, "destroyed", {
            enumerable: !1,
            get: function() {
                return void 0 !== this._readableState && this._readableState.destroyed
            },
            set: function(t) {
                this._readableState && (this._readableState.destroyed = t)
            }
        }),
        R.prototype.destroy = p.destroy,
        R.prototype._undestroy = p.undestroy,
        R.prototype._destroy = function(t, e) {
            e(t)
        }
        ,
        R.prototype.push = function(t, e) {
            var n, r = this._readableState;
            return r.objectMode ? n = !0 : "string" == typeof t && ((e = e || r.defaultEncoding) !== r.encoding && (t = Buffer.from(t, e),
            e = ""),
            n = !0),
            O(this, t, e, !1, n)
        }
        ,
        R.prototype.unshift = function(t) {
            return O(this, t, null, !0, !1)
        }
        ,
        R.prototype.isPaused = function() {
            return !1 === this._readableState.flowing
        }
        ,
        R.prototype.setEncoding = function(t) {
            l || (l = n(16).StringDecoder);
            var e = new l(t);
            this._readableState.decoder = e,
            this._readableState.encoding = this._readableState.decoder.encoding;
            for (var r = this._readableState.buffer.head, i = ""; null !== r; )
                i += e.write(r.data),
                r = r.next;
            return this._readableState.buffer.clear(),
            "" !== i && this._readableState.buffer.push(i),
            this._readableState.length = i.length,
            this
        }
        ;
        var M = 1073741824;
        function T(t, e) {
            return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function(t) {
                return t >= M ? t = M : (t--,
                t |= t >>> 1,
                t |= t >>> 2,
                t |= t >>> 4,
                t |= t >>> 8,
                t |= t >>> 16,
                t++),
                t
            }(t)),
            t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0,
            0))
        }
        function j(t) {
            var e = t._readableState;
            u("emitReadable", e.needReadable, e.emittedReadable),
            e.needReadable = !1,
            e.emittedReadable || (u("emitReadable", e.flowing),
            e.emittedReadable = !0,
            r.nextTick(A, t))
        }
        function A(t) {
            var e = t._readableState;
            u("emitReadable_", e.destroyed, e.length, e.ended),
            e.destroyed || !e.length && !e.ended || (t.emit("readable"),
            e.emittedReadable = !1),
            e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark,
            D(t)
        }
        function N(t, e) {
            e.readingMore || (e.readingMore = !0,
            r.nextTick(P, t, e))
        }
        function P(t, e) {
            for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && 0 === e.length); ) {
                var n = e.length;
                if (u("maybeReadMore read 0"),
                t.read(0),
                n === e.length)
                    break
            }
            e.readingMore = !1
        }
        function x(t) {
            var e = t._readableState;
            e.readableListening = t.listenerCount("readable") > 0,
            e.resumeScheduled && !e.paused ? e.flowing = !0 : t.listenerCount("data") > 0 && t.resume()
        }
        function k(t) {
            u("readable nexttick read 0"),
            t.read(0)
        }
        function L(t, e) {
            u("resume", e.reading),
            e.reading || t.read(0),
            e.resumeScheduled = !1,
            t.emit("resume"),
            D(t),
            e.flowing && !e.reading && t.read(0)
        }
        function D(t) {
            var e = t._readableState;
            for (u("flow", e.flowing); e.flowing && null !== t.read(); )
                ;
        }
        function C(t, e) {
            return 0 === e.length ? null : (e.objectMode ? n = e.buffer.shift() : !t || t >= e.length ? (n = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.first() : e.buffer.concat(e.length),
            e.buffer.clear()) : n = e.buffer.consume(t, e.decoder),
            n);
            var n
        }
        function B(t) {
            var e = t._readableState;
            u("endReadable", e.endEmitted),
            e.endEmitted || (e.ended = !0,
            r.nextTick(U, e, t))
        }
        function U(t, e) {
            if (u("endReadableNT", t.endEmitted, t.length),
            !t.endEmitted && 0 === t.length && (t.endEmitted = !0,
            e.readable = !1,
            e.emit("end"),
            t.autoDestroy)) {
                var n = e._writableState;
                (!n || n.autoDestroy && n.finished) && e.destroy()
            }
        }
        function W(t, e) {
            for (var n = 0, r = t.length; n < r; n++)
                if (t[n] === e)
                    return n;
            return -1
        }
        R.prototype.read = function(t) {
            u("read", t),
            t = parseInt(t, 10);
            var e = this._readableState
              , n = t;
            if (0 !== t && (e.emittedReadable = !1),
            0 === t && e.needReadable && ((0 !== e.highWaterMark ? e.length >= e.highWaterMark : e.length > 0) || e.ended))
                return u("read: emitReadable", e.length, e.ended),
                0 === e.length && e.ended ? B(this) : j(this),
                null;
            if (0 === (t = T(t, e)) && e.ended)
                return 0 === e.length && B(this),
                null;
            var r, i = e.needReadable;
            return u("need readable", i),
            (0 === e.length || e.length - t < e.highWaterMark) && u("length less than watermark", i = !0),
            e.ended || e.reading ? u("reading or ended", i = !1) : i && (u("do read"),
            e.reading = !0,
            e.sync = !0,
            0 === e.length && (e.needReadable = !0),
            this._read(e.highWaterMark),
            e.sync = !1,
            e.reading || (t = T(n, e))),
            null === (r = t > 0 ? C(t, e) : null) ? (e.needReadable = e.length <= e.highWaterMark,
            t = 0) : (e.length -= t,
            e.awaitDrain = 0),
            0 === e.length && (e.ended || (e.needReadable = !0),
            n !== t && e.ended && B(this)),
            null !== r && this.emit("data", r),
            r
        }
        ,
        R.prototype._read = function(t) {
            m(this, new w("_read()"))
        }
        ,
        R.prototype.pipe = function(t, e) {
            var n = this
              , i = this._readableState;
            switch (i.pipesCount) {
            case 0:
                i.pipes = t;
                break;
            case 1:
                i.pipes = [i.pipes, t];
                break;
            default:
                i.pipes.push(t)
            }
            i.pipesCount += 1,
            u("pipe count=%d opts=%j", i.pipesCount, e);
            var s = (!e || !1 !== e.end) && t !== r.stdout && t !== r.stderr ? c : b;
            function a(e, r) {
                u("onunpipe"),
                e === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0,
                u("cleanup"),
                t.removeListener("close", p),
                t.removeListener("finish", g),
                t.removeListener("drain", l),
                t.removeListener("error", d),
                t.removeListener("unpipe", a),
                n.removeListener("end", c),
                n.removeListener("end", b),
                n.removeListener("data", f),
                h = !0,
                !i.awaitDrain || t._writableState && !t._writableState.needDrain || l())
            }
            function c() {
                u("onend"),
                t.end()
            }
            i.endEmitted ? r.nextTick(s) : n.once("end", s),
            t.on("unpipe", a);
            var l = function(t) {
                return function() {
                    var e = t._readableState;
                    u("pipeOnDrain", e.awaitDrain),
                    e.awaitDrain && e.awaitDrain--,
                    0 === e.awaitDrain && o(t, "data") && (e.flowing = !0,
                    D(t))
                }
            }(n);
            t.on("drain", l);
            var h = !1;
            function f(e) {
                u("ondata");
                var r = t.write(e);
                u("dest.write", r),
                !1 === r && ((1 === i.pipesCount && i.pipes === t || i.pipesCount > 1 && -1 !== W(i.pipes, t)) && !h && (u("false write response, pause", i.awaitDrain),
                i.awaitDrain++),
                n.pause())
            }
            function d(e) {
                u("onerror", e),
                b(),
                t.removeListener("error", d),
                0 === o(t, "error") && m(t, e)
            }
            function p() {
                t.removeListener("finish", g),
                b()
            }
            function g() {
                u("onfinish"),
                t.removeListener("close", p),
                b()
            }
            function b() {
                u("unpipe"),
                n.unpipe(t)
            }
            return n.on("data", f),
            function(t, e, n) {
                if ("function" == typeof t.prependListener)
                    return t.prependListener(e, n);
                t._events && t._events[e] ? Array.isArray(t._events[e]) ? t._events[e].unshift(n) : t._events[e] = [n, t._events[e]] : t.on(e, n)
            }(t, "error", d),
            t.once("close", p),
            t.once("finish", g),
            t.emit("pipe", n),
            i.flowing || (u("pipe resume"),
            n.resume()),
            t
        }
        ,
        R.prototype.unpipe = function(t) {
            var e = this._readableState
              , n = {
                hasUnpiped: !1
            };
            if (0 === e.pipesCount)
                return this;
            if (1 === e.pipesCount)
                return t && t !== e.pipes ? this : (t || (t = e.pipes),
                e.pipes = null,
                e.pipesCount = 0,
                e.flowing = !1,
                t && t.emit("unpipe", this, n),
                this);
            if (!t) {
                var r = e.pipes
                  , i = e.pipesCount;
                e.pipes = null,
                e.pipesCount = 0,
                e.flowing = !1;
                for (var o = 0; o < i; o++)
                    r[o].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                return this
            }
            var s = W(e.pipes, t);
            return -1 === s ? this : (e.pipes.splice(s, 1),
            e.pipesCount -= 1,
            1 === e.pipesCount && (e.pipes = e.pipes[0]),
            t.emit("unpipe", this, n),
            this)
        }
        ,
        R.prototype.on = function(t, e) {
            var n = s.prototype.on.call(this, t, e)
              , i = this._readableState;
            return "data" === t ? (i.readableListening = this.listenerCount("readable") > 0,
            !1 !== i.flowing && this.resume()) : "readable" === t && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0,
            i.flowing = !1,
            i.emittedReadable = !1,
            u("on readable", i.length, i.reading),
            i.length ? j(this) : i.reading || r.nextTick(k, this))),
            n
        }
        ,
        R.prototype.addListener = R.prototype.on,
        R.prototype.removeListener = function(t, e) {
            var n = s.prototype.removeListener.call(this, t, e);
            return "readable" === t && r.nextTick(x, this),
            n
        }
        ,
        R.prototype.removeAllListeners = function(t) {
            var e = s.prototype.removeAllListeners.apply(this, arguments);
            return "readable" !== t && void 0 !== t || r.nextTick(x, this),
            e
        }
        ,
        R.prototype.resume = function() {
            var t = this._readableState;
            return t.flowing || (u("resume"),
            t.flowing = !t.readableListening,
            function(t, e) {
                e.resumeScheduled || (e.resumeScheduled = !0,
                r.nextTick(L, t, e))
            }(this, t)),
            t.paused = !1,
            this
        }
        ,
        R.prototype.pause = function() {
            return u("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing && (u("pause"),
            this._readableState.flowing = !1,
            this.emit("pause")),
            this._readableState.paused = !0,
            this
        }
        ,
        R.prototype.wrap = function(t) {
            var e = this
              , n = this._readableState
              , r = !1;
            for (var i in t.on("end", function() {
                if (u("wrapped end"),
                n.decoder && !n.ended) {
                    var t = n.decoder.end();
                    t && t.length && e.push(t)
                }
                e.push(null)
            }),
            t.on("data", function(i) {
                (u("wrapped data"),
                n.decoder && (i = n.decoder.write(i)),
                n.objectMode && null == i) || (n.objectMode || i && i.length) && (e.push(i) || (r = !0,
                t.pause()))
            }),
            t)
                void 0 === this[i] && "function" == typeof t[i] && (this[i] = function(e) {
                    return function() {
                        return t[e].apply(t, arguments)
                    }
                }(i));
            for (var o = 0; o < E.length; o++)
                t.on(E[o], this.emit.bind(this, E[o]));
            return this._read = function(e) {
                u("wrapped _read", e),
                r && (r = !1,
                t.resume())
            }
            ,
            this
        }
        ,
        R.prototype[Symbol.asyncIterator] = function() {
            return void 0 === h && (h = n(96)),
            h(this)
        }
        ,
        Object.defineProperty(R.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark
            }
        }),
        Object.defineProperty(R.prototype, "readableBuffer", {
            enumerable: !1,
            get: function() {
                return this._readableState && this._readableState.buffer
            }
        }),
        Object.defineProperty(R.prototype, "readableFlowing", {
            enumerable: !1,
            get: function() {
                return this._readableState.flowing
            },
            set: function(t) {
                this._readableState && (this._readableState.flowing = t)
            }
        }),
        R._fromList = C,
        Object.defineProperty(R.prototype, "readableLength", {
            enumerable: !1,
            get: function() {
                return this._readableState.length
            }
        }),
        R.from = function(t, e) {
            return void 0 === f && (f = n(95)),
            f(R, t, e)
        }
    }
    ).call(this, n(18), n(9))
}
, function(t, e, n) {
    "use strict";
    var Buffer = n(4).Buffer
      , r = n(100).Transform;
    function i(t) {
        r.call(this),
        this._block = Buffer.allocUnsafe(t),
        this._blockSize = t,
        this._blockOffset = 0,
        this._length = [0, 0, 0, 0],
        this._finalized = !1
    }
    n(1)(i, r),
    i.prototype._transform = function(t, e, n) {
        var r = null;
        try {
            this.update(t, e)
        } catch (t) {
            r = t
        }
        n(r)
    }
    ,
    i.prototype._flush = function(t) {
        var e = null;
        try {
            this.push(this.digest())
        } catch (t) {
            e = t
        }
        t(e)
    }
    ,
    i.prototype.update = function(t, e) {
        if (function(t, e) {
            if (!Buffer.isBuffer(t) && "string" != typeof t)
                throw new TypeError(e + " must be a string or a buffer")
        }(t, "Data"),
        this._finalized)
            throw new Error("Digest already called");
        Buffer.isBuffer(t) || (t = Buffer.from(t, e));
        for (var n = this._block, r = 0; this._blockOffset + t.length - r >= this._blockSize; ) {
            for (var i = this._blockOffset; i < this._blockSize; )
                n[i++] = t[r++];
            this._update(),
            this._blockOffset = 0
        }
        for (; r < t.length; )
            n[this._blockOffset++] = t[r++];
        for (var o = 0, s = 8 * t.length; s > 0; ++o)
            this._length[o] += s,
            (s = this._length[o] / 4294967296 | 0) > 0 && (this._length[o] -= 4294967296 * s);
        return this
    }
    ,
    i.prototype._update = function() {
        throw new Error("_update is not implemented")
    }
    ,
    i.prototype.digest = function(t) {
        if (this._finalized)
            throw new Error("Digest already called");
        this._finalized = !0;
        var e = this._digest();
        void 0 !== t && (e = e.toString(t)),
        this._block.fill(0),
        this._blockOffset = 0;
        for (var n = 0; n < 4; ++n)
            this._length[n] = 0;
        return e
    }
    ,
    i.prototype._digest = function() {
        throw new Error("_digest is not implemented")
    }
    ,
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    n.d(e, "StandardEvents", function() {
        return r
    });
    const r = "standard:events"
}
, function(t, e, n) {
    "use strict"
}
, function(t, e, n) {
    "use strict"
}
, function(t, e, n) {
    "use strict";
    n.d(e, "BitcoinConnect", function() {
        return r
    });
    const r = "bitcoin:connect"
}
, function(t, e, n) {
    "use strict";
    n.d(e, "initialize", function() {
        return a
    });
    var r = n(115)
      , i = n(116)
      , o = n(19)
      , s = n(67);
    function a(t, e=[]) {
        Object(o.registerWallet)(new i.ExodusEthereumWallet(t.exodus.ethereum)),
        Object(o.registerWallet)(new s.ExodusSolanaWallet(t.exodus)),
        Object(o.registerWallet)(new r.ExodusAlgorandWallet(t.algorand)),
        e.forEach(o.registerWallet)
    }
}
, , function(t, e, n) {
    "use strict";
    const r = globalThis.crypto;
    e.randomUUID = r.randomUUID.bind(r)
}
, function(t, e, n) {
    "use strict";
    var r = n(102)
      , i = n(75);
    t.exports = i(function(t) {
        var e = r("sha256").update(t).digest();
        return r("sha256").update(e).digest()
    })
}
, function(t, e, n) {
    "use strict";
    n.d(e, "ExodusWalletAccount", function() {
        return s
    });
    var r = 0;
    function i(t) {
        return "__private_" + r++ + "_" + t
    }
    function o(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e))
            throw new TypeError("attempted to use private field on non-instance");
        return t
    }
    class s {
        get purpose() {
            return o(this, a)[a]
        }
        get address() {
            return o(this, u)[u]
        }
        get publicKey() {
            return o(this, c)[c].slice()
        }
        get chains() {
            return o(this, l)[l].slice()
        }
        get features() {
            return o(this, h)[h].slice()
        }
        get label() {
            return o(this, f)[f]
        }
        get icon() {
            return o(this, d)[d]
        }
        constructor({purpose: t, address: e, publicKey: n, icon: r}) {
            Object.defineProperty(this, a, {
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, u, {
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, c, {
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, l, {
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, h, {
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, f, {
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, d, {
                writable: !0,
                value: void 0
            }),
            o(this, a)[a] = t,
            o(this, u)[u] = e,
            o(this, c)[c] = n,
            o(this, d)[d] = r,
            o(this, l)[l] = [],
            o(this, h)[h] = []
        }
    }
    var a = i("purpose")
      , u = i("address")
      , c = i("publicKey")
      , l = i("chains")
      , h = i("features")
      , f = i("label")
      , d = i("icon")
}
, function(t, e, n) {
    "use strict";
    var r = n(46);
    n.o(r, "StandardEvents") && n.d(e, "StandardEvents", function() {
        return r.StandardEvents
    });
    var i = n(45);
    n.o(i, "StandardEvents") && n.d(e, "StandardEvents", function() {
        return i.StandardEvents
    });
    var o = n(44);
    n.o(o, "StandardEvents") && n.d(e, "StandardEvents", function() {
        return o.StandardEvents
    })
}
, function(t, e, n) {
    "use strict";
    var r = n(47);
    n.o(r, "BitcoinConnect") && n.d(e, "BitcoinConnect", function() {
        return r.BitcoinConnect
    })
}
, function(t, e, n) {
    "use strict";
    const r = globalThis.crypto;
    e.randomUUID = r.randomUUID.bind(r)
}
, function(t, e, n) {
    "use strict";
    var r = 0;
    function i(t) {
        return "__private_" + r++ + "_" + t
    }
    function o(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e))
            throw new TypeError("attempted to use private field on non-instance");
        return t
    }
    const s = "exodus:wallet-provider-manager";
    var a = i("wallets")
      , u = i("storage")
      , c = i("namespace")
      , l = i("setProvider")
      , h = i("getStorageKey")
      , f = i("getProviderName");
    e.default = class {
        constructor({namespace: t, storage: e}) {
            Object.defineProperty(this, a, {
                writable: !0,
                value: new Map
            }),
            Object.defineProperty(this, u, {
                writable: !0,
                value: null
            }),
            Object.defineProperty(this, c, {
                writable: !0,
                value: null
            }),
            Object.defineProperty(this, l, {
                writable: !0,
                value: ({provider: t, providerName: e})=>{
                    o(this, a)[a].set(e, {
                        name: e,
                        provider: t
                    })
                }
            }),
            Object.defineProperty(this, h, {
                writable: !0,
                value: ()=>`${s}:${o(this, c)[c]}`
            }),
            Object.defineProperty(this, f, {
                writable: !0,
                value: t=>"isPhantom"in t ? "phantom" : t.isMetaMask ? "metamask" : "unknown"
            }),
            o(this, c)[c] = t,
            o(this, u)[u] = e
        }
        addWalletProvider(t, e=null) {
            t && (e || (e = o(this, f)[f](t)),
            o(this, l)[l]({
                provider: t,
                providerName: e
            }))
        }
        getWalletProviders() {
            return Array.from(o(this, a)[a].values())
        }
        setDefaultWalletProvider(t) {
            o(this, u)[u].setItem(o(this, h)[h](), t)
        }
        getDefaultWalletProvider() {
            const t = o(this, u)[u].getItem(o(this, h)[h]());
            return o(this, a)[a].get(t)
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "RPC_REQUEST_TIMEOUT", function() {
        return r
    });
    const r = 3e5
}
, function(t, e, n) {
    "use strict";
    const r = globalThis.crypto;
    e.randomUUID = r.randomUUID.bind(r)
}
, function(t, e, n) {
    const r = n(106)
      , i = ()=>{
        let t = 0;
        return ()=>t++
    }
      , o = t=>Number.isInteger(t) || "string" == typeof t || null === t;
    t.exports = class {
        constructor({transport: t, requestTimeout: e=2e4, generateId: n=i, methods: r=new Map, parse: o=JSON.parse, stringify: s=JSON.stringify, getIsDevelopmentMode: a=(()=>!1)}={}) {
            if (!t)
                throw new Error("TRANSPORT_REQUIRED");
            if (this._transport = t,
            this._requestTimeout = e,
            this._pendingRequest = new Map,
            this._generateId = n(),
            this._processResponse = this._processResponse.bind(this),
            this._methods = r,
            this.parse = o,
            this._stringify = s,
            "function" != typeof a)
                throw new Error("getIsDevelopmentMode must be a function");
            this._getIsDevelopmentMode = a,
            t.on("data", this._processResponse)
        }
        end() {
            this._transport.removeListener("data", this._processResponse)
        }
        exposeMethods(t) {
            t instanceof Map || (t = Object.entries(t).reduce((t,[e,n])=>t.set(e, n), new Map));
            const e = this._methods;
            return this._methods = t,
            e
        }
        exposeFunction(t, e) {
            if ("string" != typeof t)
                throw new Error("Function name must be a string");
            if ("function" != typeof e)
                throw new Error("Invalid function implementation");
            this._methods.set(t, e)
        }
        async callMethod(t, e) {
            const n = this._generateId()
              , r = this._makeRequestObject({
                method: t,
                params: e,
                id: n
            });
            return this._sendRequest({
                request: r
            })
        }
        async callMethodWithRawResponse(t, e) {
            const n = this._generateId()
              , r = this._makeRequestObject({
                method: t,
                params: e,
                id: n
            });
            return this._sendRequest({
                request: r,
                getRawResponse: !0
            })
        }
        async notify(t, e) {
            const n = this._makeRequestObject({
                method: t,
                params: e
            });
            this._transport.write(this._stringify(n))
        }
        _sendRequest({request: t, getRawResponse: e=!1}) {
            const {id: n} = t
              , r = this._stringify(t);
            return new Promise((i,o)=>{
                const s = setTimeout(()=>{
                    this._pendingRequest.has(n) && (this._pendingRequest.delete(n),
                    o(new Error(`JSON-RPC: method call timeout calling ${t.method}`)))
                }
                , this._requestTimeout);
                this._pendingRequest.set(n, {
                    resolve: i,
                    reject: o,
                    timeoutTimer: s,
                    getRawResponse: e
                }),
                (async()=>{
                    try {
                        await this._transport.write(r)
                    } catch (t) {
                        clearTimeout(s),
                        this._pendingRequest.delete(n),
                        o(t)
                    }
                }
                )()
            }
            )
        }
        _processResponse(t) {
            let e;
            try {
                e = this.parse(t)
            } catch (e) {
                const {id: n} = JSON.parse(t);
                if (!o(n))
                    throw e;
                const {message: i} = e;
                return void this._sendError({
                    ...r.INVALID_REQUEST,
                    message: i
                }, n)
            }
            if (Object.hasOwnProperty.call(e, "method"))
                return this._processCallMethod(e);
            const n = Object.hasOwnProperty.call(e, "error")
              , i = this._pendingRequest.get(e.id);
            if (i)
                if (this._pendingRequest.delete(e.id),
                clearTimeout(i.timeoutTimer),
                i.getRawResponse)
                    i.resolve(e);
                else if (n) {
                    const t = this._makeErrorObject(e.error);
                    i.reject(t)
                } else
                    i.resolve(e.result)
        }
        async _processCallMethod(t) {
            const {method: e, params: n=[], id: i} = t
              , o = this._methods.get(e);
            if (o)
                if ("function" != typeof o)
                    this._sendError(r.INTERNAL_ERROR, i);
                else {
                    const t = Array.isArray(n) ? n : [n];
                    try {
                        const e = await Promise.resolve(o.apply(this._methods, t));
                        this._sendSuccess({
                            result: e,
                            id: i
                        })
                    } catch (t) {
                        this._sendError(t, i)
                    }
                }
            else
                this._sendError({
                    ...r.METHOD_NOT_FOUND,
                    methodName: e
                }, i)
        }
        _sendError(t, e) {
            let {message: n=r.INTERNAL_ERROR.message, code: i=r.INTERNAL_ERROR.code, cause: o, stack: s, ...a} = t || {};
            "object" != typeof t && (a = t),
            null === t && (a = null),
            t instanceof Error && this._getIsDevelopmentMode() && (a.cause = {
                message: n,
                stack: s,
                cause: o
            });
            const u = this._stringify({
                jsonrpc: "2.0",
                id: e,
                error: {
                    code: i,
                    message: n,
                    data: a
                }
            });
            this._transport.write(u)
        }
        _sendSuccess({result: t, id: e}) {
            if (void 0 === e)
                return;
            const n = this._stringify({
                jsonrpc: "2.0",
                id: e,
                result: t
            });
            this._transport.write(n)
        }
        _makeRequestObject({method: t, params: e, id: n}) {
            return {
                jsonrpc: "2.0",
                method: t,
                params: e,
                id: n
            }
        }
        _createRecursiveError(t) {
            if ("object" != typeof t || null === t)
                return null;
            let e = null;
            t.cause && (e = this._createRecursiveError(t.cause));
            const n = new Error(t.message,{
                cause: e
            });
            return n.stack = t.stack,
            n
        }
        _makeErrorObject(t) {
            const e = t.code
              , n = r[e]
              , i = t.message || n && n.message
              , o = new Error(i);
            if (o.code = e,
            Object.hasOwnProperty.call(t, "data"))
                if ("object" == typeof t.data && null !== t.data) {
                    const {name: e, cause: n, ...r} = t.data;
                    o.name = e,
                    n && (o.cause = this._createRecursiveError(n)),
                    o.data = r
                } else
                    o.data = t.data;
            return o
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "createInternalProvider", function() {
        return r
    });
    const r = ({contentRpc: t})=>{
        return {
            openExtensionPopup: ({route: e})=>{
                t.callMethod("openExtensionPopup", {
                    route: e
                })
            }
            ,
            openSecuritize: ()=>t.callMethod("openSecuritize")
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "icon", function() {
        return r
    });
    const r = n(3).EXODUS_ICON
}
, function(t, e, n) {
    "use strict";
    n.d(e, "ALGORAND_CHAINS", function() {
        return r
    });
    const r = ["algorand:wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8="]
}
, function(t, e, n) {
    "use strict";
    n.d(e, "icon", function() {
        return r
    });
    const r = n(3).EXODUS_ICON
}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        return function(t, e) {
            if (t === e)
                return !0;
            const n = t.length;
            if (n !== e.length)
                return !1;
            for (let r = 0; r < n; r++)
                if (t[r] !== e[r])
                    return !1;
            return !0
        }(t, e)
    }
    n.d(e, "bytesEqual", function() {
        return r
    })
}
, function(t, e, n) {
    "use strict";
    n.d(e, "ExodusSolanaWalletAccount", function() {
        return c
    });
    var r = n(10)
      , i = 0;
    function o(t) {
        return "__private_" + i++ + "_" + t
    }
    function s(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e))
            throw new TypeError("attempted to use private field on non-instance");
        return t
    }
    const a = r.SOLANA_CHAINS
      , u = ["solana:signAndSendTransaction", "solana:signTransaction", "solana:signMessage"];
    class c {
        get address() {
            return s(this, l)[l]
        }
        get publicKey() {
            return s(this, h)[h].slice()
        }
        get chains() {
            return s(this, f)[f].slice()
        }
        get features() {
            return s(this, d)[d].slice()
        }
        get label() {
            return s(this, p)[p]
        }
        get icon() {
            return s(this, g)[g]
        }
        constructor({address: t, publicKey: e, label: n, icon: r}) {
            Object.defineProperty(this, l, {
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, h, {
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, f, {
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, d, {
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, p, {
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, g, {
                writable: !0,
                value: void 0
            }),
            s(this, l)[l] = t,
            s(this, h)[h] = e,
            s(this, f)[f] = a,
            s(this, d)[d] = u,
            s(this, p)[p] = n,
            s(this, g)[g] = r
        }
    }
    var l = o("address")
      , h = o("publicKey")
      , f = o("chains")
      , d = o("features")
      , p = o("label")
      , g = o("icon")
}
, function(t, e, n) {
    "use strict";
    n.d(e, "icon", function() {
        return r
    });
    const r = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIyIiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyMiAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxtYXNrIGlkPSJtYXNrMF8zMF8xMTAiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMjIiIGhlaWdodD0iMTI0Ij4KPHBhdGggZD0iTTEyMS43ODcgMzQuODMzMUw2OS4zODc2IDAuNDc2NTYyVjE5LjY4NTVMMTAzLjAwMiA0MS41Mjg4TDk5LjA0NzQgNTQuMDQySDY5LjM4NzZWNjkuOTU4SDk5LjA0NzRMMTAzLjAwMiA4Mi40NzEyTDY5LjM4NzYgMTA0LjMxNFYxMjMuNTIzTDEyMS43ODcgODkuMjc2N0wxMTMuMjE4IDYyLjA1NDlMMTIxLjc4NyAzNC44MzMxWiIgZmlsbD0iIzFEMUQxQiIvPgo8cGF0aCBkPSJNMjMuNzk5MyA2OS45NThINTMuMzQ5M1Y1NC4wNDJIMjMuNjg5NEwxOS44NDQ2IDQxLjUyODhMNTMuMzQ5MyAxOS42ODU1VjAuNDc2NTYyTDAuOTUwMTk1IDM0LjgzMzFMOS41MTg2IDYyLjA1NDlMMC45NTAxOTUgODkuMjc2N0w1My40NTkxIDEyMy41MjNWMTA0LjMxNEwxOS44NDQ2IDgyLjQ3MTJMMjMuNzk5MyA2OS45NThaIiBmaWxsPSIjMUQxRDFCIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8zMF8xMTApIj4KPHBhdGggZD0iTTEyMS43ODcgMzQuODMzMUw2OS4zODc2IDAuNDc2NTYyVjE5LjY4NTVMMTAzLjAwMiA0MS41Mjg4TDk5LjA0NzQgNTQuMDQySDY5LjM4NzZWNjkuOTU4SDk5LjA0NzRMMTAzLjAwMiA4Mi40NzEyTDY5LjM4NzYgMTA0LjMxNFYxMjMuNTIzTDEyMS43ODcgODkuMjc2N0wxMTMuMjE4IDYyLjA1NDlMMTIxLjc4NyAzNC44MzMxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTIzLjc5OTMgNjkuOTU4SDUzLjM0OTNWNTQuMDQySDIzLjY4OTRMMTkuODQ0NiA0MS41Mjg4TDUzLjM0OTMgMTkuNjg1NVYwLjQ3NjU2MkwwLjk1MDE5NSAzNC44MzMxTDkuNTE4NiA2Mi4wNTQ5TDAuOTUwMTk1IDg5LjI3NjdMNTMuNDU5MSAxMjMuNTIzVjEwNC4zMTRMMTkuODQ0NiA4Mi40NzEyTDIzLjc5OTMgNjkuOTU4WiIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMS4xMDYzMiIgeT0iMC40NzY1NjIiIHdpZHRoPSIxMzMuNzQ0IiBoZWlnaHQ9IjEzNi4wODUiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8zMF8xMTApIi8+CjxlbGxpcHNlIGN4PSI4LjQzMTc2IiBjeT0iMjcuNDYwMiIgcng9IjExNy42MzkiIHJ5PSIxMjcuNTQ1IiB0cmFuc2Zvcm09InJvdGF0ZSgtMzMuOTMwMyA4LjQzMTc2IDI3LjQ2MDIpIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfMzBfMTEwKSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzBfMTEwIiB4MT0iMTA1LjA4NCIgeTE9IjEzMi41OTQiIHgyPSI2OS44NDM5IiB5Mj0iLTEyLjI3NjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzBCNDZGOSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCQkZCRTAiLz4KPC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDFfcmFkaWFsXzMwXzExMCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg4LjQzMTc1IDI3LjQ2MDIpIHJvdGF0ZSg3Mi4yNTU3KSBzY2FsZSg5Ni40OTc5IDkwLjQ1NDMpIj4KPHN0b3Agb2Zmc2V0PSIwLjExOTc5MiIgc3RvcC1jb2xvcj0iIzg5NTJGRiIgc3RvcC1vcGFjaXR5PSIwLjg3Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RBQkRGRiIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="
}
, function(t, e, n) {
    "use strict";
    n.d(e, "ExodusSolanaWallet", function() {
        return l
    });
    var r = n(66)
      , i = n(65)
      , o = n(10)
      , s = n(64)
      , a = 0;
    function u(t) {
        return "__private_" + a++ + "_" + t
    }
    function c(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e))
            throw new TypeError("attempted to use private field on non-instance");
        return t
    }
    class l {
        get version() {
            return c(this, d)[d]
        }
        get name() {
            return c(this, p)[p]
        }
        get icon() {
            return c(this, g)[g]
        }
        get chains() {
            return o.SOLANA_CHAINS.slice()
        }
        get features() {
            const {supportedTransactionVersions: t} = c(this, h)[h].solana;
            return {
                "standard:connect": {
                    version: "1.0.0",
                    connect: c(this, S)[S]
                },
                "standard:disconnect": {
                    version: "1.0.0",
                    disconnect: c(this, R)[R]
                },
                "standard:events": {
                    version: "1.0.0",
                    on: c(this, _)[_]
                },
                "solana:signAndSendTransaction": {
                    version: "1.0.0",
                    supportedTransactionVersions: t,
                    signAndSendTransaction: c(this, O)[O]
                },
                "solana:signTransaction": {
                    version: "1.0.0",
                    supportedTransactionVersions: t,
                    signTransaction: c(this, I)[I]
                },
                "solana:signMessage": {
                    version: "1.0.0",
                    signMessage: c(this, M)[M]
                },
                "exodus:": {
                    exodus: c(this, h)[h]
                }
            }
        }
        get accounts() {
            return c(this, b)[b] ? [c(this, b)[b]] : []
        }
        constructor(t) {
            if (Object.defineProperty(this, h, {
                writable: !0,
                value: null
            }),
            Object.defineProperty(this, f, {
                writable: !0,
                value: {}
            }),
            Object.defineProperty(this, d, {
                writable: !0,
                value: "1.0.0"
            }),
            Object.defineProperty(this, p, {
                writable: !0,
                value: "Exodus"
            }),
            Object.defineProperty(this, g, {
                writable: !0,
                value: r.icon
            }),
            Object.defineProperty(this, b, {
                writable: !0,
                value: null
            }),
            Object.defineProperty(this, _, {
                writable: !0,
                value: (t,e)=>{
                    var n;
                    return (null == (n = c(this, f)[f][t]) ? void 0 : n.push(e)) || (c(this, f)[f][t] = [e]),
                    ()=>c(this, w)[w](t, e)
                }
            }),
            Object.defineProperty(this, y, {
                writable: !0,
                value: (t,...e)=>{
                    var n;
                    null == (n = c(this, f)[f][t]) || n.forEach(t=>t.apply(null, e))
                }
            }),
            Object.defineProperty(this, w, {
                writable: !0,
                value: (t,e)=>{
                    var n;
                    c(this, f)[f][t] = null == (n = c(this, f)[f][t]) ? void 0 : n.filter(t=>e !== t)
                }
            }),
            Object.defineProperty(this, v, {
                writable: !0,
                value: ()=>{
                    var t;
                    const e = null == (t = c(this, h)[h].solana.publicKey) ? void 0 : t.toBase58();
                    if (e) {
                        const t = c(this, h)[h].solana.publicKey.toBytes()
                          , n = c(this, b)[b];
                        n && n.address === e && Object(s.bytesEqual)(n.publicKey, t) || (c(this, b)[b] = new i.ExodusSolanaWalletAccount({
                            address: e,
                            publicKey: t
                        }),
                        c(this, y)[y]("change", {
                            accounts: this.accounts
                        }))
                    }
                }
            }),
            Object.defineProperty(this, m, {
                writable: !0,
                value: ()=>{
                    c(this, b)[b] && (c(this, b)[b] = null,
                    c(this, y)[y]("change", {
                        accounts: this.accounts
                    }))
                }
            }),
            Object.defineProperty(this, E, {
                writable: !0,
                value: ()=>{
                    c(this, h)[h].solana.publicKey ? c(this, v)[v]() : c(this, m)[m]()
                }
            }),
            Object.defineProperty(this, S, {
                writable: !0,
                value: async({silent: t}={})=>(await c(this, h)[h].solana.connect(t ? {
                    onlyIfTrusted: !0
                } : void 0),
                c(this, v)[v](),
                {
                    accounts: this.accounts
                })
            }),
            Object.defineProperty(this, R, {
                writable: !0,
                value: async()=>{
                    await c(this, h)[h].solana.disconnect()
                }
            }),
            Object.defineProperty(this, O, {
                writable: !0,
                value: async(...t)=>{
                    if (!c(this, b)[b])
                        throw new Error("not connected");
                    const e = [];
                    if (1 === t.length) {
                        const {transaction: n, account: r, chain: i, options: s} = t[0]
                          , {minContextSlot: a, preflightCommitment: u, skipPreflight: l, maxRetries: f} = s || {};
                        if (r !== c(this, b)[b])
                            throw new Error("invalid account");
                        if (!Object(o.isSolanaChain)(i))
                            throw new Error("invalid chain");
                        const {signature: d} = await c(this, h)[h].solana.signAndSendTransaction(n, {
                            maxRetries: f,
                            minContextSlot: a,
                            preflightCommitment: u,
                            skipPreflight: l
                        });
                        e.push({
                            signature: d
                        })
                    } else if (t.length > 1)
                        for (const n of t)
                            e.push(...await c(this, O)[O](n));
                    return e
                }
            }),
            Object.defineProperty(this, I, {
                writable: !0,
                value: async(...t)=>{
                    if (!c(this, b)[b])
                        throw new Error("not connected");
                    const e = [];
                    if (1 === t.length) {
                        const {transaction: n, account: r, chain: i} = t[0];
                        if (r !== c(this, b)[b])
                            throw new Error("invalid account");
                        if (i && !Object(o.isSolanaChain)(i))
                            throw new Error("invalid chain");
                        const s = await c(this, h)[h].solana.signTransaction(n);
                        e.push({
                            signedTransaction: s
                        })
                    } else if (t.length > 1) {
                        let n;
                        for (const e of t) {
                            if (e.account !== c(this, b)[b])
                                throw new Error("invalid account");
                            if (e.chain) {
                                if (!Object(o.isSolanaChain)(e.chain))
                                    throw new Error("invalid chain");
                                if (n) {
                                    if (e.chain !== n)
                                        throw new Error("conflicting chain")
                                } else
                                    n = e.chain
                            }
                        }
                        const r = t.map(({transaction: t})=>t)
                          , i = await c(this, h)[h].solana.signAllTransactions(r);
                        e.push(...i.map(t=>({
                            signedTransaction: t
                        })))
                    }
                    return e
                }
            }),
            Object.defineProperty(this, M, {
                writable: !0,
                value: async(...t)=>{
                    if (!c(this, b)[b])
                        throw new Error("not connected");
                    const e = [];
                    if (1 === t.length) {
                        const {message: n, account: r} = t[0];
                        if (r !== c(this, b)[b])
                            throw new Error("invalid account");
                        const {signature: i} = await c(this, h)[h].solana.signMessage(n);
                        e.push({
                            signedMessage: n,
                            signature: i
                        })
                    } else if (t.length > 1)
                        for (const n of t)
                            e.push(...await c(this, M)[M](n));
                    return e
                }
            }),
            !t)
                throw new Error("Exodus Provider is required!");
            if (!t.solana)
                throw new Error("Exodus Provider must include Solana Provider!");
            c(this, h)[h] = t,
            c(this, h)[h].solana.on("connect", c(this, v)[v], this),
            c(this, h)[h].solana.on("disconnect", c(this, m)[m], this),
            c(this, h)[h].solana.on("accountChanged", c(this, E)[E], this),
            c(this, v)[v]()
        }
    }
    var h = u("exodus")
      , f = u("listeners")
      , d = u("version")
      , p = u("name")
      , g = u("icon")
      , b = u("account")
      , _ = u("on")
      , y = u("emit")
      , w = u("off")
      , v = u("connected")
      , m = u("disconnected")
      , E = u("reconnected")
      , S = u("connect")
      , R = u("disconnect")
      , O = u("signAndSendTransaction")
      , I = u("signTransaction")
      , M = u("signMessage")
}
, function(t, e, n) {
    "use strict";
    var r = n(48);
    n.o(r, "initialize") && n.d(e, "initialize", function() {
        return r.initialize
    })
}
, function(t, e, n) {
    "use strict";
    n.d(e, "MultiplexTransport", function() {
        return s
    });
    var r = 0;
    function i(t) {
        return "__private_" + r++ + "_" + t
    }
    function o(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e))
            throw new TypeError("attempted to use private field on non-instance");
        return t
    }
    class s {
        constructor({name: t, target: e, transport: n}) {
            this.name = void 0,
            this.target = void 0,
            Object.defineProperty(this, a, {
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, u, {
                writable: !0,
                value: t=>t.target === this.name && t.data
            }),
            this.write = (t=>{
                o(this, a)[a].write({
                    target: this.target,
                    data: t
                })
            }
            ),
            this.on = ((t,e)=>{
                o(this, a)[a].on(t, t=>{
                    o(this, u)[u](t) && e(t.data)
                }
                )
            }
            ),
            this.name = t,
            this.target = e,
            o(this, a)[a] = n
        }
        removeListener(t, e) {
            o(this, a)[a].removeListener(t, e)
        }
    }
    var a = i("transport")
      , u = i("isValidEvent")
}
, function(t, e, n) {
    "use strict";
    n.d(e, "WindowTransport", function() {
        return i
    });
    var r = 0;
    class i {
        constructor() {
            Object.defineProperty(this, o, {
                writable: !0,
                value: t=>{
                    return "object" == typeof (null == t ? void 0 : t.data) && t.origin === window.location.origin
                }
            }),
            this.write = (t=>{
                var e;
                const n = window;
                if (null != (e = n.ReactNativeWebView) && e.postMessage)
                    n.ReactNativeWebView.postMessage(JSON.stringify(t));
                else {
                    if (!window.postMessage)
                        throw new Error("unable to write data because no postMessage is available");
                    {
                        const e = window.location.origin;
                        window.postMessage(t, e)
                    }
                }
            }
            ),
            this.on = ((t,e)=>{
                window.addEventListener("message", t=>{
                    (function(t, e) {
                        if (!Object.prototype.hasOwnProperty.call(t, e))
                            throw new TypeError("attempted to use private field on non-instance");
                        return t
                    }
                    )(this, o)[o](t) && e(t.data)
                }
                )
            }
            )
        }
        removeListener(t, e) {}
    }
    var o = "__private_" + r++ + "_" + "isValidEvent"
}
, function(t, e, n) {
    const r = n(107)
      , i = ()=>{
        let t = 0;
        return ()=>t++
    }
      , o = t=>Number.isInteger(t) || "string" == typeof t || null === t;
    t.exports = class {
        constructor({transport: t, requestTimeout: e=2e4, generateId: n=i, methods: r=new Map, parse: o=JSON.parse, stringify: s=JSON.stringify}={}) {
            if (!t)
                throw new Error("TRANSPORT_REQUIRED");
            this._transport = t,
            this._requestTimeout = e,
            this._pendingRequest = new Map,
            this._generateId = n(),
            this._processResponse = this._processResponse.bind(this),
            this._methods = r,
            this.parse = o,
            this._stringify = s,
            t.on("data", this._processResponse)
        }
        end() {
            this._transport.removeListener("data", this._processResponse)
        }
        exposeMethods(t) {
            t instanceof Map || (t = Object.entries(t).reduce((t,[e,n])=>t.set(e, n), new Map));
            const e = this._methods;
            return this._methods = t,
            e
        }
        exposeFunction(t, e) {
            if ("string" != typeof t)
                throw new Error("Function name must be a string");
            if ("function" != typeof e)
                throw new Error("Invalid function implementation");
            this._methods.set(t, e)
        }
        async callMethod(t, e) {
            const n = this._generateId()
              , r = this._makeRequestObject({
                method: t,
                params: e,
                id: n
            });
            return this._sendRequest({
                request: r
            })
        }
        async callMethodWithRawResponse(t, e) {
            const n = this._generateId()
              , r = this._makeRequestObject({
                method: t,
                params: e,
                id: n
            });
            return this._sendRequest({
                request: r,
                getRawResponse: !0
            })
        }
        async notify(t, e) {
            const n = this._makeRequestObject({
                method: t,
                params: e
            });
            this._transport.write(this._stringify(n))
        }
        _sendRequest({request: t, getRawResponse: e=!1}) {
            const {id: n} = t
              , r = this._stringify(t);
            return new Promise((i,o)=>{
                const s = setTimeout(()=>{
                    this._pendingRequest.has(n) && (this._pendingRequest.delete(n),
                    o(new Error(`JSON-RPC: method call timeout calling ${t.method}`)))
                }
                , this._requestTimeout);
                this._pendingRequest.set(n, {
                    resolve: i,
                    reject: o,
                    timeoutTimer: s,
                    getRawResponse: e
                }),
                (async()=>{
                    try {
                        await this._transport.write(r)
                    } catch (t) {
                        clearTimeout(s),
                        this._pendingRequest.delete(n),
                        o(t)
                    }
                }
                )()
            }
            )
        }
        _processResponse(t) {
            let e;
            try {
                e = this.parse(t)
            } catch (e) {
                const {id: n} = JSON.parse(t);
                if (!o(n))
                    throw e;
                const {message: i} = e;
                return void this._sendError({
                    ...r.INVALID_REQUEST,
                    message: i
                }, n)
            }
            if (Object.hasOwnProperty.call(e, "method"))
                return this._processCallMethod(e);
            const n = Object.hasOwnProperty.call(e, "error")
              , i = this._pendingRequest.get(e.id);
            if (i)
                if (this._pendingRequest.delete(e.id),
                clearTimeout(i.timeoutTimer),
                i.getRawResponse)
                    i.resolve(e);
                else if (n) {
                    const t = this._makeErrorObject(e.error);
                    i.reject(t)
                } else
                    i.resolve(e.result)
        }
        async _processCallMethod(t) {
            const {method: e, params: n=[], id: i} = t
              , o = this._methods.get(e);
            if (o)
                if ("function" != typeof o)
                    this._sendError(r.INTERNAL_ERROR, i);
                else {
                    const t = Array.isArray(n) ? n : [n];
                    try {
                        const e = await Promise.resolve(o.apply(this._methods, t));
                        this._sendSuccess({
                            result: e,
                            id: i
                        })
                    } catch (t) {
                        this._sendError(t, i)
                    }
                }
            else
                this._sendError({
                    ...r.METHOD_NOT_FOUND,
                    methodName: e
                }, i)
        }
        _sendError(t, e) {
            let {message: n=r.INTERNAL_ERROR.message, code: i=r.INTERNAL_ERROR.code, cause: o, ...s} = t || {};
            "object" != typeof t && (s = t),
            null === t && (s = null),
            t instanceof Error && o && (s = {
                ...s,
                cause: o
            });
            const a = this._stringify({
                jsonrpc: "2.0",
                id: e,
                error: {
                    code: i,
                    message: n,
                    data: s
                }
            });
            this._transport.write(a)
        }
        _sendSuccess({result: t, id: e}) {
            if (void 0 === e)
                return;
            const n = this._stringify({
                jsonrpc: "2.0",
                id: e,
                result: t
            });
            this._transport.write(n)
        }
        _makeRequestObject({method: t, params: e, id: n}) {
            return {
                jsonrpc: "2.0",
                method: t,
                params: e,
                id: n
            }
        }
        _makeErrorObject(t) {
            const e = t.code
              , n = r[e]
              , i = t.message || n && n.message
              , o = new Error(i);
            if (o.code = e,
            Object.hasOwnProperty.call(t, "data"))
                if ("object" == typeof t.data && null !== t.data) {
                    const {name: e, cause: n, ...r} = t.data;
                    o.name = e,
                    o.cause = n,
                    o.data = r
                } else
                    o.data = t.data;
            return o
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "createRPC", function() {
        return s
    });
    var r = n(71)
      , i = n.n(r)
      , o = n(29);
    const s = ({name: t})=>{
        const e = Object(o.createWindowRpcTransport)({
            name: `${t}-window`,
            target: t
        });
        return new i.a({
            transport: e
        })
    }
}
, function(t, e, n) {
    var Buffer = n(4).Buffer;
    t.exports = function(t) {
        for (var e = {}, n = t.length, r = t.charAt(0), i = 0; i < t.length; i++) {
            var o = t.charAt(i);
            if (void 0 !== e[o])
                throw new TypeError(o + " is ambiguous");
            e[o] = i
        }
        function s(t) {
            if ("string" != typeof t)
                throw new TypeError("Expected String");
            if (0 === t.length)
                return Buffer.allocUnsafe(0);
            for (var i = [0], o = 0; o < t.length; o++) {
                var s = e[t[o]];
                if (void 0 === s)
                    return;
                for (var a = 0, u = s; a < i.length; ++a)
                    u += i[a] * n,
                    i[a] = 255 & u,
                    u >>= 8;
                for (; u > 0; )
                    i.push(255 & u),
                    u >>= 8
            }
            for (var c = 0; t[c] === r && c < t.length - 1; ++c)
                i.push(0);
            return Buffer.from(i.reverse())
        }
        return {
            encode: function(e) {
                if (0 === e.length)
                    return "";
                for (var i = [0], o = 0; o < e.length; ++o) {
                    for (var s = 0, a = e[o]; s < i.length; ++s)
                        a += i[s] << 8,
                        i[s] = a % n,
                        a = a / n | 0;
                    for (; a > 0; )
                        i.push(a % n),
                        a = a / n | 0
                }
                for (var u = "", c = 0; 0 === e[c] && c < e.length - 1; ++c)
                    u += r;
                for (var l = i.length - 1; l >= 0; --l)
                    u += t[i[l]];
                return u
            },
            decodeUnsafe: s,
            decode: function(t) {
                var e = s(t);
                if (e)
                    return e;
                throw new Error("Non-base" + n + " character")
            }
        }
    }
}
, function(t, e, n) {
    var r = n(73);
    t.exports = r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
}
, function(t, e, n) {
    "use strict";
    var r = n(74)
      , Buffer = n(4).Buffer;
    t.exports = function(t) {
        function e(e) {
            var n = e.slice(0, -4)
              , r = e.slice(-4)
              , i = t(n);
            if (!(r[0] ^ i[0] | r[1] ^ i[1] | r[2] ^ i[2] | r[3] ^ i[3]))
                return n
        }
        return {
            encode: function(e) {
                var n = t(e);
                return r.encode(Buffer.concat([e, n], e.length + 4))
            },
            decode: function(t) {
                var n = e(r.decode(t));
                if (!n)
                    throw new Error("Invalid checksum");
                return n
            },
            decodeUnsafe: function(t) {
                var n = r.decodeUnsafe(t);
                if (n)
                    return e(n)
            }
        }
    }
}
, function(t, e, n) {
    t.exports = n(25).PassThrough
}
, function(t, e, n) {
    t.exports = n(25).Transform
}
, function(t, e, n) {
    t.exports = n(8)
}
, function(t, e, n) {
    t.exports = n(23)
}
, function(t, e, n) {
    "use strict";
    t.exports = o;
    var r = n(30)
      , i = n(15);
    function o(t) {
        if (!(this instanceof o))
            return new o(t);
        r.call(this, t)
    }
    i.inherits = n(1),
    i.inherits(o, r),
    o.prototype._transform = function(t, e, n) {
        n(null, t)
    }
}
, function(t, e) {}
, function(t, e, n) {
    "use strict";
    var Buffer = n(24).Buffer
      , r = n(81);
    t.exports = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.head = null,
            this.tail = null,
            this.length = 0
        }
        return t.prototype.push = function(t) {
            var e = {
                data: t,
                next: null
            };
            this.length > 0 ? this.tail.next = e : this.head = e,
            this.tail = e,
            ++this.length
        }
        ,
        t.prototype.unshift = function(t) {
            var e = {
                data: t,
                next: this.head
            };
            0 === this.length && (this.tail = e),
            this.head = e,
            ++this.length
        }
        ,
        t.prototype.shift = function() {
            if (0 !== this.length) {
                var t = this.head.data;
                return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                --this.length,
                t
            }
        }
        ,
        t.prototype.clear = function() {
            this.head = this.tail = null,
            this.length = 0
        }
        ,
        t.prototype.join = function(t) {
            if (0 === this.length)
                return "";
            for (var e = this.head, n = "" + e.data; e = e.next; )
                n += t + e.data;
            return n
        }
        ,
        t.prototype.concat = function(t) {
            if (0 === this.length)
                return Buffer.alloc(0);
            if (1 === this.length)
                return this.head.data;
            for (var e, n, r, i = Buffer.allocUnsafe(t >>> 0), o = this.head, s = 0; o; )
                e = o.data,
                n = i,
                r = s,
                e.copy(n, r),
                s += o.data.length,
                o = o.next;
            return i
        }
        ,
        t
    }(),
    r && r.inspect && r.inspect.custom && (t.exports.prototype[r.inspect.custom] = function() {
        var t = r.inspect({
            length: this.length
        });
        return this.constructor.name + " " + t
    }
    )
}
, function(t, e) {}
, function(t, e) {
    var n = {}.toString;
    t.exports = Array.isArray || function(t) {
        return "[object Array]" == n.call(t)
    }
}
, function(t, e, n) {
    t.exports = i;
    var r = n(17).EventEmitter;
    function i() {
        r.call(this)
    }
    n(1)(i, r),
    i.Readable = n(25),
    i.Writable = n(79),
    i.Duplex = n(78),
    i.Transform = n(77),
    i.PassThrough = n(76),
    i.Stream = i,
    i.prototype.pipe = function(t, e) {
        var n = this;
        function i(e) {
            t.writable && !1 === t.write(e) && n.pause && n.pause()
        }
        function o() {
            n.readable && n.resume && n.resume()
        }
        n.on("data", i),
        t.on("drain", o),
        t._isStdio || e && !1 === e.end || (n.on("end", a),
        n.on("close", u));
        var s = !1;
        function a() {
            s || (s = !0,
            t.end())
        }
        function u() {
            s || (s = !0,
            "function" == typeof t.destroy && t.destroy())
        }
        function c(t) {
            if (l(),
            0 === r.listenerCount(this, "error"))
                throw t
        }
        function l() {
            n.removeListener("data", i),
            t.removeListener("drain", o),
            n.removeListener("end", a),
            n.removeListener("close", u),
            n.removeListener("error", c),
            t.removeListener("error", c),
            n.removeListener("end", l),
            n.removeListener("close", l),
            t.removeListener("close", l)
        }
        return n.on("error", c),
        t.on("error", c),
        n.on("end", l),
        n.on("close", l),
        t.on("close", l),
        t.emit("pipe", n),
        t
    }
}
, function(t, e, n) {
    var Buffer = n(4).Buffer
      , r = n(85).Transform
      , i = n(16).StringDecoder;
    function o(t) {
        r.call(this),
        this.hashMode = "string" == typeof t,
        this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest,
        this._final && (this.__final = this._final,
        this._final = null),
        this._decoder = null,
        this._encoding = null
    }
    n(1)(o, r),
    o.prototype.update = function(t, e, n) {
        "string" == typeof t && (t = Buffer.from(t, e));
        var r = this._update(t);
        return this.hashMode ? this : (n && (r = this._toString(r, n)),
        r)
    }
    ,
    o.prototype.setAutoPadding = function() {}
    ,
    o.prototype.getAuthTag = function() {
        throw new Error("trying to get auth tag in unsupported state")
    }
    ,
    o.prototype.setAuthTag = function() {
        throw new Error("trying to set auth tag in unsupported state")
    }
    ,
    o.prototype.setAAD = function() {
        throw new Error("trying to set aad in unsupported state")
    }
    ,
    o.prototype._transform = function(t, e, n) {
        var r;
        try {
            this.hashMode ? this._update(t) : this.push(this._update(t))
        } catch (t) {
            r = t
        } finally {
            n(r)
        }
    }
    ,
    o.prototype._flush = function(t) {
        var e;
        try {
            this.push(this.__final())
        } catch (t) {
            e = t
        }
        t(e)
    }
    ,
    o.prototype._finalOrDigest = function(t) {
        var e = this.__final() || Buffer.alloc(0);
        return t && (e = this._toString(e, t, !0)),
        e
    }
    ,
    o.prototype._toString = function(t, e, n) {
        if (this._decoder || (this._decoder = new i(e),
        this._encoding = e),
        this._encoding !== e)
            throw new Error("can't switch encodings");
        var r = this._decoder.write(t);
        return n && (r += this._decoder.end()),
        r
    }
    ,
    t.exports = o
}
, function(t, e, n) {
    var r = n(1)
      , i = n(34)
      , o = n(12)
      , Buffer = n(4).Buffer
      , s = new Array(160);
    function a() {
        this.init(),
        this._w = s,
        o.call(this, 128, 112)
    }
    r(a, i),
    a.prototype.init = function() {
        return this._ah = 3418070365,
        this._bh = 1654270250,
        this._ch = 2438529370,
        this._dh = 355462360,
        this._eh = 1731405415,
        this._fh = 2394180231,
        this._gh = 3675008525,
        this._hh = 1203062813,
        this._al = 3238371032,
        this._bl = 914150663,
        this._cl = 812702999,
        this._dl = 4144912697,
        this._el = 4290775857,
        this._fl = 1750603025,
        this._gl = 1694076839,
        this._hl = 3204075428,
        this
    }
    ,
    a.prototype._hash = function() {
        var t = Buffer.allocUnsafe(48);
        function e(e, n, r) {
            t.writeInt32BE(e, r),
            t.writeInt32BE(n, r + 4)
        }
        return e(this._ah, this._al, 0),
        e(this._bh, this._bl, 8),
        e(this._ch, this._cl, 16),
        e(this._dh, this._dl, 24),
        e(this._eh, this._el, 32),
        e(this._fh, this._fl, 40),
        t
    }
    ,
    t.exports = a
}
, function(t, e, n) {
    var r = n(1)
      , i = n(35)
      , o = n(12)
      , Buffer = n(4).Buffer
      , s = new Array(64);
    function a() {
        this.init(),
        this._w = s,
        o.call(this, 64, 56)
    }
    r(a, i),
    a.prototype.init = function() {
        return this._a = 3238371032,
        this._b = 914150663,
        this._c = 812702999,
        this._d = 4144912697,
        this._e = 4290775857,
        this._f = 1750603025,
        this._g = 1694076839,
        this._h = 3204075428,
        this
    }
    ,
    a.prototype._hash = function() {
        var t = Buffer.allocUnsafe(28);
        return t.writeInt32BE(this._a, 0),
        t.writeInt32BE(this._b, 4),
        t.writeInt32BE(this._c, 8),
        t.writeInt32BE(this._d, 12),
        t.writeInt32BE(this._e, 16),
        t.writeInt32BE(this._f, 20),
        t.writeInt32BE(this._g, 24),
        t
    }
    ,
    t.exports = a
}
, function(t, e, n) {
    var r = n(1)
      , i = n(12)
      , Buffer = n(4).Buffer
      , o = [1518500249, 1859775393, -1894007588, -899497514]
      , s = new Array(80);
    function a() {
        this.init(),
        this._w = s,
        i.call(this, 64, 56)
    }
    function u(t) {
        return t << 5 | t >>> 27
    }
    function c(t) {
        return t << 30 | t >>> 2
    }
    function l(t, e, n, r) {
        return 0 === t ? e & n | ~e & r : 2 === t ? e & n | e & r | n & r : e ^ n ^ r
    }
    r(a, i),
    a.prototype.init = function() {
        return this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520,
        this
    }
    ,
    a.prototype._update = function(t) {
        for (var e, n = this._w, r = 0 | this._a, i = 0 | this._b, s = 0 | this._c, a = 0 | this._d, h = 0 | this._e, f = 0; f < 16; ++f)
            n[f] = t.readInt32BE(4 * f);
        for (; f < 80; ++f)
            n[f] = (e = n[f - 3] ^ n[f - 8] ^ n[f - 14] ^ n[f - 16]) << 1 | e >>> 31;
        for (var d = 0; d < 80; ++d) {
            var p = ~~(d / 20)
              , g = u(r) + l(p, i, s, a) + h + n[d] + o[p] | 0;
            h = a,
            a = s,
            s = c(i),
            i = r,
            r = g
        }
        this._a = r + this._a | 0,
        this._b = i + this._b | 0,
        this._c = s + this._c | 0,
        this._d = a + this._d | 0,
        this._e = h + this._e | 0
    }
    ,
    a.prototype._hash = function() {
        var t = Buffer.allocUnsafe(20);
        return t.writeInt32BE(0 | this._a, 0),
        t.writeInt32BE(0 | this._b, 4),
        t.writeInt32BE(0 | this._c, 8),
        t.writeInt32BE(0 | this._d, 12),
        t.writeInt32BE(0 | this._e, 16),
        t
    }
    ,
    t.exports = a
}
, function(t, e, n) {
    var r = n(1)
      , i = n(12)
      , Buffer = n(4).Buffer
      , o = [1518500249, 1859775393, -1894007588, -899497514]
      , s = new Array(80);
    function a() {
        this.init(),
        this._w = s,
        i.call(this, 64, 56)
    }
    function u(t) {
        return t << 30 | t >>> 2
    }
    function c(t, e, n, r) {
        return 0 === t ? e & n | ~e & r : 2 === t ? e & n | e & r | n & r : e ^ n ^ r
    }
    r(a, i),
    a.prototype.init = function() {
        return this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520,
        this
    }
    ,
    a.prototype._update = function(t) {
        for (var e, n = this._w, r = 0 | this._a, i = 0 | this._b, s = 0 | this._c, a = 0 | this._d, l = 0 | this._e, h = 0; h < 16; ++h)
            n[h] = t.readInt32BE(4 * h);
        for (; h < 80; ++h)
            n[h] = n[h - 3] ^ n[h - 8] ^ n[h - 14] ^ n[h - 16];
        for (var f = 0; f < 80; ++f) {
            var d = ~~(f / 20)
              , p = 0 | ((e = r) << 5 | e >>> 27) + c(d, i, s, a) + l + n[f] + o[d];
            l = a,
            a = s,
            s = u(i),
            i = r,
            r = p
        }
        this._a = r + this._a | 0,
        this._b = i + this._b | 0,
        this._c = s + this._c | 0,
        this._d = a + this._d | 0,
        this._e = l + this._e | 0
    }
    ,
    a.prototype._hash = function() {
        var t = Buffer.allocUnsafe(20);
        return t.writeInt32BE(0 | this._a, 0),
        t.writeInt32BE(0 | this._b, 4),
        t.writeInt32BE(0 | this._c, 8),
        t.writeInt32BE(0 | this._d, 12),
        t.writeInt32BE(0 | this._e, 16),
        t
    }
    ,
    t.exports = a
}
, function(t, e, n) {
    (e = t.exports = function(t) {
        t = t.toLowerCase();
        var n = e[t];
        if (!n)
            throw new Error(t + " is not supported (we accept pull requests)");
        return new n
    }
    ).sha = n(90),
    e.sha1 = n(89),
    e.sha224 = n(88),
    e.sha256 = n(35),
    e.sha384 = n(87),
    e.sha512 = n(34)
}
, function(t, e, n) {
    "use strict";
    var Buffer = n(7).Buffer
      , r = n(1)
      , i = n(43)
      , o = new Array(16)
      , s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
      , a = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
      , u = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
      , c = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
      , l = [0, 1518500249, 1859775393, 2400959708, 2840853838]
      , h = [1352829926, 1548603684, 1836072691, 2053994217, 0];
    function f() {
        i.call(this, 64),
        this._a = 1732584193,
        this._b = 4023233417,
        this._c = 2562383102,
        this._d = 271733878,
        this._e = 3285377520
    }
    function d(t, e) {
        return t << e | t >>> 32 - e
    }
    function p(t, e, n, r, i, o, s, a) {
        return d(t + (e ^ n ^ r) + o + s | 0, a) + i | 0
    }
    function g(t, e, n, r, i, o, s, a) {
        return d(t + (e & n | ~e & r) + o + s | 0, a) + i | 0
    }
    function b(t, e, n, r, i, o, s, a) {
        return d(t + ((e | ~n) ^ r) + o + s | 0, a) + i | 0
    }
    function _(t, e, n, r, i, o, s, a) {
        return d(t + (e & r | n & ~r) + o + s | 0, a) + i | 0
    }
    function y(t, e, n, r, i, o, s, a) {
        return d(t + (e ^ (n | ~r)) + o + s | 0, a) + i | 0
    }
    r(f, i),
    f.prototype._update = function() {
        for (var t = o, e = 0; e < 16; ++e)
            t[e] = this._block.readInt32LE(4 * e);
        for (var n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, f = 0 | this._d, w = 0 | this._e, v = 0 | this._a, m = 0 | this._b, E = 0 | this._c, S = 0 | this._d, R = 0 | this._e, O = 0; O < 80; O += 1) {
            var I, M;
            O < 16 ? (I = p(n, r, i, f, w, t[s[O]], l[0], u[O]),
            M = y(v, m, E, S, R, t[a[O]], h[0], c[O])) : O < 32 ? (I = g(n, r, i, f, w, t[s[O]], l[1], u[O]),
            M = _(v, m, E, S, R, t[a[O]], h[1], c[O])) : O < 48 ? (I = b(n, r, i, f, w, t[s[O]], l[2], u[O]),
            M = b(v, m, E, S, R, t[a[O]], h[2], c[O])) : O < 64 ? (I = _(n, r, i, f, w, t[s[O]], l[3], u[O]),
            M = g(v, m, E, S, R, t[a[O]], h[3], c[O])) : (I = y(n, r, i, f, w, t[s[O]], l[4], u[O]),
            M = p(v, m, E, S, R, t[a[O]], h[4], c[O])),
            n = w,
            w = f,
            f = d(i, 10),
            i = r,
            r = I,
            v = R,
            R = S,
            S = d(E, 10),
            E = m,
            m = M
        }
        var T = this._b + i + S | 0;
        this._b = this._c + f + R | 0,
        this._c = this._d + w + v | 0,
        this._d = this._e + n + m | 0,
        this._e = this._a + r + E | 0,
        this._a = T
    }
    ,
    f.prototype._digest = function() {
        this._block[this._blockOffset++] = 128,
        this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
        this._update(),
        this._blockOffset = 0),
        this._block.fill(0, this._blockOffset, 56),
        this._block.writeUInt32LE(this._length[0], 56),
        this._block.writeUInt32LE(this._length[1], 60),
        this._update();
        var t = Buffer.alloc ? Buffer.alloc(20) : new Buffer(20);
        return t.writeInt32LE(this._a, 0),
        t.writeInt32LE(this._b, 4),
        t.writeInt32LE(this._c, 8),
        t.writeInt32LE(this._d, 12),
        t.writeInt32LE(this._e, 16),
        t
    }
    ,
    t.exports = f
}
, function(t, e, n) {
    "use strict";
    var r;
    var i = n(14).codes
      , o = i.ERR_MISSING_ARGS
      , s = i.ERR_STREAM_DESTROYED;
    function a(t) {
        if (t)
            throw t
    }
    function u(t) {
        t()
    }
    function c(t, e) {
        return t.pipe(e)
    }
    t.exports = function() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        var l, h = function(t) {
            return t.length ? "function" != typeof t[t.length - 1] ? a : t.pop() : a
        }(e);
        if (Array.isArray(e[0]) && (e = e[0]),
        e.length < 2)
            throw new o("streams");
        var f = e.map(function(t, i) {
            var o = i < e.length - 1;
            return function(t, e, i, o) {
                o = function(t) {
                    var e = !1;
                    return function() {
                        e || (e = !0,
                        t.apply(void 0, arguments))
                    }
                }(o);
                var a = !1;
                t.on("close", function() {
                    a = !0
                }),
                void 0 === r && (r = n(26)),
                r(t, {
                    readable: e,
                    writable: i
                }, function(t) {
                    if (t)
                        return o(t);
                    a = !0,
                    o()
                });
                var u = !1;
                return function(e) {
                    if (!a && !u)
                        return u = !0,
                        function(t) {
                            return t.setHeader && "function" == typeof t.abort
                        }(t) ? t.abort() : "function" == typeof t.destroy ? t.destroy() : void o(e || new s("pipe"))
                }
            }(t, o, i > 0, function(t) {
                l || (l = t),
                t && f.forEach(u),
                o || (f.forEach(u),
                h(l))
            })
        });
        return e.reduce(c)
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = i;
    var r = n(36);
    function i(t) {
        if (!(this instanceof i))
            return new i(t);
        r.call(this, t)
    }
    n(1)(i, r),
    i.prototype._transform = function(t, e, n) {
        n(null, t)
    }
}
, function(t, e) {
    t.exports = function() {
        throw new Error("Readable.from is not available in the browser")
    }
}
, function(t, e, n) {
    "use strict";
    (function(e) {
        var r;
        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        var o = n(26)
          , s = Symbol("lastResolve")
          , a = Symbol("lastReject")
          , u = Symbol("error")
          , c = Symbol("ended")
          , l = Symbol("lastPromise")
          , h = Symbol("handlePromise")
          , f = Symbol("stream");
        function d(t, e) {
            return {
                value: t,
                done: e
            }
        }
        function p(t) {
            var e = t[s];
            if (null !== e) {
                var n = t[f].read();
                null !== n && (t[l] = null,
                t[s] = null,
                t[a] = null,
                e(d(n, !1)))
            }
        }
        var g = Object.getPrototypeOf(function() {})
          , b = Object.setPrototypeOf((i(r = {
            get stream() {
                return this[f]
            },
            next: function() {
                var t = this
                  , n = this[u];
                if (null !== n)
                    return Promise.reject(n);
                if (this[c])
                    return Promise.resolve(d(void 0, !0));
                if (this[f].destroyed)
                    return new Promise(function(n, r) {
                        e.nextTick(function() {
                            t[u] ? r(t[u]) : n(d(void 0, !0))
                        })
                    }
                    );
                var r, i = this[l];
                if (i)
                    r = new Promise(function(t, e) {
                        return function(n, r) {
                            t.then(function() {
                                e[c] ? n(d(void 0, !0)) : e[h](n, r)
                            }, r)
                        }
                    }(i, this));
                else {
                    var o = this[f].read();
                    if (null !== o)
                        return Promise.resolve(d(o, !1));
                    r = new Promise(this[h])
                }
                return this[l] = r,
                r
            }
        }, Symbol.asyncIterator, function() {
            return this
        }),
        i(r, "return", function() {
            var t = this;
            return new Promise(function(e, n) {
                t[f].destroy(null, function(t) {
                    t ? n(t) : e(d(void 0, !0))
                })
            }
            )
        }),
        r), g);
        t.exports = function(t) {
            var n, r = Object.create(b, (i(n = {}, f, {
                value: t,
                writable: !0
            }),
            i(n, s, {
                value: null,
                writable: !0
            }),
            i(n, a, {
                value: null,
                writable: !0
            }),
            i(n, u, {
                value: null,
                writable: !0
            }),
            i(n, c, {
                value: t._readableState.endEmitted,
                writable: !0
            }),
            i(n, h, {
                value: function(t, e) {
                    var n = r[f].read();
                    n ? (r[l] = null,
                    r[s] = null,
                    r[a] = null,
                    t(d(n, !1))) : (r[s] = t,
                    r[a] = e)
                },
                writable: !0
            }),
            n));
            return r[l] = null,
            o(t, function(t) {
                if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                    var e = r[a];
                    return null !== e && (r[l] = null,
                    r[s] = null,
                    r[a] = null,
                    e(t)),
                    void (r[u] = t)
                }
                var n = r[s];
                null !== n && (r[l] = null,
                r[s] = null,
                r[a] = null,
                n(d(void 0, !0))),
                r[c] = !0
            }),
            t.on("readable", function(t) {
                e.nextTick(p, t)
            }
            .bind(null, r)),
            r
        }
    }
    ).call(this, n(9))
}
, function(t, e) {}
, function(t, e, n) {
    "use strict";
    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
    }
    function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    var Buffer = n(7).Buffer
      , s = n(97).inspect
      , a = s && s.custom || "inspect";
    t.exports = function() {
        function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.head = null,
            this.tail = null,
            this.length = 0
        }
        var e, n, u;
        return e = t,
        (n = [{
            key: "push",
            value: function(t) {
                var e = {
                    data: t,
                    next: null
                };
                this.length > 0 ? this.tail.next = e : this.head = e,
                this.tail = e,
                ++this.length
            }
        }, {
            key: "unshift",
            value: function(t) {
                var e = {
                    data: t,
                    next: this.head
                };
                0 === this.length && (this.tail = e),
                this.head = e,
                ++this.length
            }
        }, {
            key: "shift",
            value: function() {
                if (0 !== this.length) {
                    var t = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                    --this.length,
                    t
                }
            }
        }, {
            key: "clear",
            value: function() {
                this.head = this.tail = null,
                this.length = 0
            }
        }, {
            key: "join",
            value: function(t) {
                if (0 === this.length)
                    return "";
                for (var e = this.head, n = "" + e.data; e = e.next; )
                    n += t + e.data;
                return n
            }
        }, {
            key: "concat",
            value: function(t) {
                if (0 === this.length)
                    return Buffer.alloc(0);
                for (var e, n, r, i = Buffer.allocUnsafe(t >>> 0), o = this.head, s = 0; o; )
                    e = o.data,
                    n = i,
                    r = s,
                    Buffer.prototype.copy.call(e, n, r),
                    s += o.data.length,
                    o = o.next;
                return i
            }
        }, {
            key: "consume",
            value: function(t, e) {
                var n;
                return t < this.head.data.length ? (n = this.head.data.slice(0, t),
                this.head.data = this.head.data.slice(t)) : n = t === this.head.data.length ? this.shift() : e ? this._getString(t) : this._getBuffer(t),
                n
            }
        }, {
            key: "first",
            value: function() {
                return this.head.data
            }
        }, {
            key: "_getString",
            value: function(t) {
                var e = this.head
                  , n = 1
                  , r = e.data;
                for (t -= r.length; e = e.next; ) {
                    var i = e.data
                      , o = t > i.length ? i.length : t;
                    if (o === i.length ? r += i : r += i.slice(0, t),
                    0 === (t -= o)) {
                        o === i.length ? (++n,
                        e.next ? this.head = e.next : this.head = this.tail = null) : (this.head = e,
                        e.data = i.slice(o));
                        break
                    }
                    ++n
                }
                return this.length -= n,
                r
            }
        }, {
            key: "_getBuffer",
            value: function(t) {
                var e = Buffer.allocUnsafe(t)
                  , n = this.head
                  , r = 1;
                for (n.data.copy(e),
                t -= n.data.length; n = n.next; ) {
                    var i = n.data
                      , o = t > i.length ? i.length : t;
                    if (i.copy(e, e.length - t, 0, o),
                    0 === (t -= o)) {
                        o === i.length ? (++r,
                        n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n,
                        n.data = i.slice(o));
                        break
                    }
                    ++r
                }
                return this.length -= r,
                e
            }
        }, {
            key: a,
            value: function(t, e) {
                return s(this, function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? r(Object(n), !0).forEach(function(e) {
                            i(t, e, n[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        })
                    }
                    return t
                }({}, e, {
                    depth: 0,
                    customInspect: !1
                }))
            }
        }]) && o(e.prototype, n),
        u && o(e, u),
        t
    }()
}
, function(t, e) {}
, function(t, e, n) {
    (e = t.exports = n(42)).Stream = e,
    e.Readable = e,
    e.Writable = n(38),
    e.Duplex = n(13),
    e.Transform = n(36),
    e.PassThrough = n(94),
    e.finished = n(26),
    e.pipeline = n(93)
}
, function(t, e, n) {
    "use strict";
    (function(Buffer) {
        var e = n(1)
          , r = n(43)
          , i = new Array(16);
        function o() {
            r.call(this, 64),
            this._a = 1732584193,
            this._b = 4023233417,
            this._c = 2562383102,
            this._d = 271733878
        }
        function s(t, e) {
            return t << e | t >>> 32 - e
        }
        function a(t, e, n, r, i, o, a) {
            return s(t + (e & n | ~e & r) + i + o | 0, a) + e | 0
        }
        function u(t, e, n, r, i, o, a) {
            return s(t + (e & r | n & ~r) + i + o | 0, a) + e | 0
        }
        function c(t, e, n, r, i, o, a) {
            return s(t + (e ^ n ^ r) + i + o | 0, a) + e | 0
        }
        function l(t, e, n, r, i, o, a) {
            return s(t + (n ^ (e | ~r)) + i + o | 0, a) + e | 0
        }
        e(o, r),
        o.prototype._update = function() {
            for (var t = i, e = 0; e < 16; ++e)
                t[e] = this._block.readInt32LE(4 * e);
            var n = this._a
              , r = this._b
              , o = this._c
              , s = this._d;
            n = a(n, r, o, s, t[0], 3614090360, 7),
            s = a(s, n, r, o, t[1], 3905402710, 12),
            o = a(o, s, n, r, t[2], 606105819, 17),
            r = a(r, o, s, n, t[3], 3250441966, 22),
            n = a(n, r, o, s, t[4], 4118548399, 7),
            s = a(s, n, r, o, t[5], 1200080426, 12),
            o = a(o, s, n, r, t[6], 2821735955, 17),
            r = a(r, o, s, n, t[7], 4249261313, 22),
            n = a(n, r, o, s, t[8], 1770035416, 7),
            s = a(s, n, r, o, t[9], 2336552879, 12),
            o = a(o, s, n, r, t[10], 4294925233, 17),
            r = a(r, o, s, n, t[11], 2304563134, 22),
            n = a(n, r, o, s, t[12], 1804603682, 7),
            s = a(s, n, r, o, t[13], 4254626195, 12),
            o = a(o, s, n, r, t[14], 2792965006, 17),
            n = u(n, r = a(r, o, s, n, t[15], 1236535329, 22), o, s, t[1], 4129170786, 5),
            s = u(s, n, r, o, t[6], 3225465664, 9),
            o = u(o, s, n, r, t[11], 643717713, 14),
            r = u(r, o, s, n, t[0], 3921069994, 20),
            n = u(n, r, o, s, t[5], 3593408605, 5),
            s = u(s, n, r, o, t[10], 38016083, 9),
            o = u(o, s, n, r, t[15], 3634488961, 14),
            r = u(r, o, s, n, t[4], 3889429448, 20),
            n = u(n, r, o, s, t[9], 568446438, 5),
            s = u(s, n, r, o, t[14], 3275163606, 9),
            o = u(o, s, n, r, t[3], 4107603335, 14),
            r = u(r, o, s, n, t[8], 1163531501, 20),
            n = u(n, r, o, s, t[13], 2850285829, 5),
            s = u(s, n, r, o, t[2], 4243563512, 9),
            o = u(o, s, n, r, t[7], 1735328473, 14),
            n = c(n, r = u(r, o, s, n, t[12], 2368359562, 20), o, s, t[5], 4294588738, 4),
            s = c(s, n, r, o, t[8], 2272392833, 11),
            o = c(o, s, n, r, t[11], 1839030562, 16),
            r = c(r, o, s, n, t[14], 4259657740, 23),
            n = c(n, r, o, s, t[1], 2763975236, 4),
            s = c(s, n, r, o, t[4], 1272893353, 11),
            o = c(o, s, n, r, t[7], 4139469664, 16),
            r = c(r, o, s, n, t[10], 3200236656, 23),
            n = c(n, r, o, s, t[13], 681279174, 4),
            s = c(s, n, r, o, t[0], 3936430074, 11),
            o = c(o, s, n, r, t[3], 3572445317, 16),
            r = c(r, o, s, n, t[6], 76029189, 23),
            n = c(n, r, o, s, t[9], 3654602809, 4),
            s = c(s, n, r, o, t[12], 3873151461, 11),
            o = c(o, s, n, r, t[15], 530742520, 16),
            n = l(n, r = c(r, o, s, n, t[2], 3299628645, 23), o, s, t[0], 4096336452, 6),
            s = l(s, n, r, o, t[7], 1126891415, 10),
            o = l(o, s, n, r, t[14], 2878612391, 15),
            r = l(r, o, s, n, t[5], 4237533241, 21),
            n = l(n, r, o, s, t[12], 1700485571, 6),
            s = l(s, n, r, o, t[3], 2399980690, 10),
            o = l(o, s, n, r, t[10], 4293915773, 15),
            r = l(r, o, s, n, t[1], 2240044497, 21),
            n = l(n, r, o, s, t[8], 1873313359, 6),
            s = l(s, n, r, o, t[15], 4264355552, 10),
            o = l(o, s, n, r, t[6], 2734768916, 15),
            r = l(r, o, s, n, t[13], 1309151649, 21),
            n = l(n, r, o, s, t[4], 4149444226, 6),
            s = l(s, n, r, o, t[11], 3174756917, 10),
            o = l(o, s, n, r, t[2], 718787259, 15),
            r = l(r, o, s, n, t[9], 3951481745, 21),
            this._a = this._a + n | 0,
            this._b = this._b + r | 0,
            this._c = this._c + o | 0,
            this._d = this._d + s | 0
        }
        ,
        o.prototype._digest = function() {
            this._block[this._blockOffset++] = 128,
            this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64),
            this._update(),
            this._blockOffset = 0),
            this._block.fill(0, this._blockOffset, 56),
            this._block.writeUInt32LE(this._length[0], 56),
            this._block.writeUInt32LE(this._length[1], 60),
            this._update();
            var t = new Buffer(16);
            return t.writeInt32LE(this._a, 0),
            t.writeInt32LE(this._b, 4),
            t.writeInt32LE(this._c, 8),
            t.writeInt32LE(this._d, 12),
            t
        }
        ,
        t.exports = o
    }
    ).call(this, n(7).Buffer)
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , i = n(101)
      , o = n(92)
      , s = n(91)
      , a = n(86);
    function u(t) {
        a.call(this, "digest"),
        this._hash = t
    }
    r(u, a),
    u.prototype._update = function(t) {
        this._hash.update(t)
    }
    ,
    u.prototype._final = function() {
        return this._hash.digest()
    }
    ,
    t.exports = function(t) {
        return "md5" === (t = t.toLowerCase()) ? new i : "rmd160" === t || "ripemd160" === t ? new o : new u(s(t))
    }
}
, function(t, e) {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    e.read = function(t, e, n, r, i) {
        var o, s, a = 8 * i - r - 1, u = (1 << a) - 1, c = u >> 1, l = -7, h = n ? i - 1 : 0, f = n ? -1 : 1, d = t[e + h];
        for (h += f,
        o = d & (1 << -l) - 1,
        d >>= -l,
        l += a; l > 0; o = 256 * o + t[e + h],
        h += f,
        l -= 8)
            ;
        for (s = o & (1 << -l) - 1,
        o >>= -l,
        l += r; l > 0; s = 256 * s + t[e + h],
        h += f,
        l -= 8)
            ;
        if (0 === o)
            o = 1 - c;
        else {
            if (o === u)
                return s ? NaN : 1 / 0 * (d ? -1 : 1);
            s += Math.pow(2, r),
            o -= c
        }
        return (d ? -1 : 1) * s * Math.pow(2, o - r)
    }
    ,
    e.write = function(t, e, n, r, i, o) {
        var s, a, u, c = 8 * o - i - 1, l = (1 << c) - 1, h = l >> 1, f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = r ? 0 : o - 1, p = r ? 1 : -1, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e),
        isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0,
        s = l) : (s = Math.floor(Math.log(e) / Math.LN2),
        e * (u = Math.pow(2, -s)) < 1 && (s--,
        u *= 2),
        (e += s + h >= 1 ? f / u : f * Math.pow(2, 1 - h)) * u >= 2 && (s++,
        u /= 2),
        s + h >= l ? (a = 0,
        s = l) : s + h >= 1 ? (a = (e * u - 1) * Math.pow(2, i),
        s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, i),
        s = 0)); i >= 8; t[n + d] = 255 & a,
        d += p,
        a /= 256,
        i -= 8)
            ;
        for (s = s << i | a,
        c += i; c > 0; t[n + d] = 255 & s,
        d += p,
        s /= 256,
        c -= 8)
            ;
        t[n + d - p] |= 128 * g
    }
}
, function(t, e, n) {
    "use strict";
    e.byteLength = function(t) {
        var e = c(t)
          , n = e[0]
          , r = e[1];
        return 3 * (n + r) / 4 - r
    }
    ,
    e.toByteArray = function(t) {
        var e, n, r = c(t), s = r[0], a = r[1], u = new o(function(t, e, n) {
            return 3 * (e + n) / 4 - n
        }(0, s, a)), l = 0, h = a > 0 ? s - 4 : s;
        for (n = 0; n < h; n += 4)
            e = i[t.charCodeAt(n)] << 18 | i[t.charCodeAt(n + 1)] << 12 | i[t.charCodeAt(n + 2)] << 6 | i[t.charCodeAt(n + 3)],
            u[l++] = e >> 16 & 255,
            u[l++] = e >> 8 & 255,
            u[l++] = 255 & e;
        2 === a && (e = i[t.charCodeAt(n)] << 2 | i[t.charCodeAt(n + 1)] >> 4,
        u[l++] = 255 & e);
        1 === a && (e = i[t.charCodeAt(n)] << 10 | i[t.charCodeAt(n + 1)] << 4 | i[t.charCodeAt(n + 2)] >> 2,
        u[l++] = e >> 8 & 255,
        u[l++] = 255 & e);
        return u
    }
    ,
    e.fromByteArray = function(t) {
        for (var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383)
            o.push(l(t, s, s + 16383 > a ? a : s + 16383));
        1 === i ? (e = t[n - 1],
        o.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1],
        o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
        return o.join("")
    }
    ;
    for (var r = [], i = [], o = Uint8Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a)
        r[a] = s[a],
        i[s.charCodeAt(a)] = a;
    function c(t) {
        var e = t.length;
        if (e % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        return -1 === n && (n = e),
        [n, n === e ? 0 : 4 - n % 4]
    }
    function l(t, e, n) {
        for (var i, o, s = [], a = e; a < n; a += 3)
            i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]),
            s.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
        return s.join("")
    }
    i["-".charCodeAt(0)] = 62,
    i["_".charCodeAt(0)] = 63
}
, function(t, e) {
    t.exports = {
        PARSE_ERROR: {
            code: -32700,
            message: "Parse error"
        },
        INVALID_REQUEST: {
            code: -32600,
            message: "Invalid request"
        },
        METHOD_NOT_FOUND: {
            code: -32601,
            message: "Method not found"
        },
        INVALID_PARAMS: {
            code: -32602,
            message: "Invalid parameters"
        },
        INTERNAL_ERROR: {
            code: -32603,
            message: "Internal error"
        }
    }
}
, function(t, e) {
    t.exports = {
        PARSE_ERROR: {
            code: -32700,
            message: "Parse error"
        },
        INVALID_REQUEST: {
            code: -32600,
            message: "Invalid request"
        },
        METHOD_NOT_FOUND: {
            code: -32601,
            message: "Method not found"
        },
        INVALID_PARAMS: {
            code: -32602,
            message: "Invalid parameters"
        },
        INTERNAL_ERROR: {
            code: -32603,
            message: "Internal error"
        }
    }
}
, function(t, e) {
    t.exports = {
        PARSE_ERROR: {
            code: -32700,
            message: "Parse error"
        },
        INVALID_REQUEST: {
            code: -32600,
            message: "Invalid request"
        },
        METHOD_NOT_FOUND: {
            code: -32601,
            message: "Method not found"
        },
        INVALID_PARAMS: {
            code: -32602,
            message: "Invalid parameters"
        },
        INTERNAL_ERROR: {
            code: -32603,
            message: "Internal error"
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(72)
      , i = n(112)
      , o = n(29)
      , s = n(68)
      , a = n(28)
      , u = n(11)
      , c = n(60)
      , l = n(5)
      , h = n(0)
      , f = n(56);
    const d = "true" === document.currentScript.dataset.prioritizeExodus
      , p = Object(r.createRPC)({
        name: "content"
    });
    if (["https://www.exodus.com", "https://referrals.exodus.com"].includes(document.location.origin)) {
        const t = Object(c.createInternalProvider)({
            contentRpc: p
        });
        Object(h.injectProvider)(t, "internal", {
            namespace: "exodus"
        })
    }
    const g = Object(h.createObservable)();
    p.exposeFunction("onProfileChange", async()=>{
        const t = await (()=>p.callMethod("getCurrentProfile"))();
        g.notify(t)
    }
    );
    const b = Object(l.createProfileProvider)({
        profileObservable: g
    });
    Object(h.injectProvider)(b, "profile", {
        namespace: "exodus"
    });
    const _ = ()=>p.callMethod("connect")
      , y = ()=>p.callMethod("untrust")
      , w = t=>p.callMethod("getCurrentAddress", {
        assetName: t
    })
      , v = Object(h.createObservable)()
      , m = async()=>{
        const t = await (()=>w("algorand"))();
        t && v.notify([t])
    }
      , E = Object(l.createAlgorandProviderProxy)({
        accountsObservable: v
    });
    E.on("connect", _),
    E.on("disconnect", y),
    Object(h.injectProvider)(E, "algorand", {
        namespace: "exodus"
    });
    const S = Object(l.createAlgorandARCProviderProxy)();
    if (Object(h.injectProvider)(S, "algorand"),
    d) {
        const t = Object(l.createMyAlgoProviderProxy)(E);
        Object(h.injectProvider)(t, "myalgo", {
            namespace: "exodus"
        });
        const e = Object(l.createAlgoSignerProviderProxy)(E);
        Object(h.injectProvider)(e, "AlgoSigner")
    }
    const R = new i.ExodusBitcoinWallet({
        transport: Object(o.createWindowRpcTransport)({
            name: "provider-window",
            target: "provider"
        })
    })
      , O = Object(l.createCardanoProviderProxy)({
        supportedNetworkIds: u.CARDANO_SUPPORTED_NETWORK_IDS
    });
    if (O.on("enabled", _),
    Object(h.injectProvider)(O, "cardano", {
        namespace: "exodus"
    }),
    Object(h.injectProvider)(O, "exodus", {
        namespace: "cardano"
    }),
    d) {
        const t = Object(l.createCardanoProviderProxy)({
            supportedNetworkIds: u.CARDANO_SUPPORTED_NETWORK_IDS,
            nameToUse: "eternl"
        });
        t.on("enabled", _),
        Object(h.injectProvider)(t, "eternl", {
            namespace: "cardano"
        })
    }
    const I = Object(h.createObservable)()
      , M = async()=>{
        const t = await w("cosmos");
        t && I.notify(t)
    }
    ;
    if (a.enablePrivateFeatures) {
        const t = Object(l.createCosmosProviderProxy)({
            supportedChainIds: u.COSMOS_SUPPORTED_NETWORK_IDS,
            accountsObservable: I
        });
        if (t.on("connect", _),
        Object(h.injectProvider)(t, "cosmos", {
            namespace: "exodus"
        }),
        d) {
            const t = Object(l.createCosmosProviderProxy)({
                supportedChainIds: u.COSMOS_SUPPORTED_NETWORK_IDS,
                nameToUse: "keplr",
                accountsObservable: I,
                mimicKeplr: !0
            });
            t.on("connect", _),
            Object(h.injectProvider)(t, "keplr")
        }
    }
    const T = Object(h.createObservable)()
      , j = async()=>{
        const t = await (()=>w("ethereum"))();
        t && T.notify([t])
    }
      , A = new f.default({
        storage: window.sessionStorage,
        namespace: "ethereum"
    })
      , N = Object(l.createEthereumProviderProxy)({
        accountsObservable: T,
        getDefaultChainId: ()=>p.callMethod("ethGetDefaultChainId", {
            origin: document.location.origin
        }),
        prioritizeExodus: d,
        storage: window.localStorage,
        supportedChainIds: u.ETHEREUM_SUPPORTED_CHAIN_IDS,
        walletProviderManager: A
    });
    N.on("accountsChanged", t=>{
        0 === t.length ? (y(),
        A.setDefaultWalletProvider(null)) : _()
    }
    ),
    N.on("chainChanged", t=>p.callMethod("ethHandleChainChanged", {
        chainId: t,
        assetName: u.ETHEREUM_ASSET_NAMES_BY_CHAIN_ID[t]
    })),
    Object(h.injectProvider)(N, "ethereum", {
        namespace: "exodus"
    });
    const P = !d;
    !d && Object(h.isNamespaceInWindow)("ethereum") || (A.addWalletProvider(window.ethereum),
    Object(h.injectProvider)(N, "ethereum", {
        overridable: P,
        set: t=>A.addWalletProvider(t)
    }),
    Object(h.injectProvider)(N, "currentProvider", {
        namespace: "web3",
        overridable: !0
    }));
    const x = Object(h.createObservable)()
      , k = async()=>{
        const t = await (()=>w("solana"))();
        t && x.notify([t])
    }
      , L = Object(l.createSolanaProviderProxy)({
        accountsObservable: x,
        prioritizeExodus: d
    });
    L.on("connect", _),
    L.on("disconnect", y),
    Object(h.injectProvider)(L, "solana", {
        namespace: "exodus"
    }),
    !d && Object(h.isNamespaceInWindow)("solana") || (Object(h.injectProvider)(L, "solana", {
        overridable: P
    }),
    Object(h.injectProvider)(L, "solana", {
        namespace: "phantom",
        overridable: P
    })),
    Object(s.initialize)(window, a.enablePrivateFeatures ? [R] : []),
    p.exposeFunction("onAddressChange", async()=>Promise.allSettled([m(), j(), M(), k()])),
    p.exposeFunction("onUntrustOrigin", async({origin: t})=>{
        if (document.location.origin === t)
            return Promise.allSettled([E.disconnect(), T.notify([]), L.disconnect()])
    }
    ),
    window.addEventListener("beforeunload", ()=>p.callMethod("disconnect"))
}
, function(t, e, n) {
    "use strict";
    n.d(e, "BaseProvider", function() {
        return h
    });
    var r = n(50)
      , i = n(21)
      , o = n.n(i)
      , s = n(3)
      , a = n(22)
      , u = n.n(a)
      , c = 0;
    function l(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e))
            throw new TypeError("attempted to use private field on non-instance");
        return t
    }
    class h extends u.a {
        constructor({transport: t}) {
            super(),
            this.isExodus = !0,
            Object.defineProperty(this, f, {
                writable: !0,
                value: null
            }),
            l(this, f)[f] = new o.a({
                transport: t,
                generateId: ()=>r.randomUUID,
                requestTimeout: s.RPC_REQUEST_TIMEOUT
            })
        }
        _callRpcMethod(t, e) {
            return l(this, f)[f].callMethod(t, e)
        }
    }
    var f = "__private_" + c++ + "_" + "rpc"
}
, function(t, e, n) {
    "use strict";
    n.d(e, "BitcoinProvider", function() {
        return i
    });
    var r = n(109);
    class i extends r.BaseProvider {
        constructor({transport: t}) {
            super({
                transport: t
            })
        }
        call(t) {
            return this._callRpcMethod("bitcoin_call", [t])
        }
        async connect(t) {
            return {
                addresses: await this._callRpcMethod("bitcoin_connect", [t])
            }
        }
        sendBtcTransaction(t) {
            return this._callRpcMethod("bitcoin_sendTransaction", [t])
        }
        signMessage(t) {
            return this._callRpcMethod("bitcoin_signMessage", [t])
        }
        signTransaction(t) {
            return this._callRpcMethod("bitcoin_signTransaction", [t])
        }
    }
}
, function(t, e, n) {
    "use strict";
    (function(Buffer) {
        n.d(e, "deserializeToBytes", function() {
            return t
        });
        n(51);
        const t = (t,e="base64")=>new Uint8Array(Buffer.from(t, e))
    }
    ).call(this, n(7).Buffer)
}
, function(t, e, n) {
    "use strict";
    n.d(e, "ExodusBitcoinWallet", function() {
        return v
    });
    var r = n(54)
      , i = n(55)
      , o = n(21)
      , s = n.n(o)
      , a = n(3)
      , u = n(111)
      , c = n(53)
      , l = n(52)
      , h = n(27)
      , f = n(110)
      , d = 0;
    function p(t) {
        return "__private_" + d++ + "_" + t
    }
    function g(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e))
            throw new TypeError("attempted to use private field on non-instance");
        return t
    }
    const b = "sats-connect:";
    var _ = p("callRpcMethod")
      , y = p("off")
      , w = p("emit");
    class v {
        get version() {
            return g(this, R)[R]
        }
        get name() {
            return g(this, O)[O]
        }
        get icon() {
            return g(this, I)[I]
        }
        get chains() {
            return []
        }
        get features() {
            return {
                [r.BitcoinConnect]: {
                    version: "1.0.0",
                    connect: g(this, N)[N]
                },
                [c.StandardEvents]: {
                    version: "1.0.0",
                    on: g(this, P)[P]
                },
                [b]: {
                    provider: g(this, j)[j]
                }
            }
        }
        get accounts() {
            return g(this, T)[T]
        }
        constructor({transport: t}) {
            Object.defineProperty(this, w, {
                value: S
            }),
            Object.defineProperty(this, y, {
                value: E
            }),
            Object.defineProperty(this, _, {
                value: m
            }),
            Object.defineProperty(this, R, {
                writable: !0,
                value: "1.0.0"
            }),
            Object.defineProperty(this, O, {
                writable: !0,
                value: "Exodus"
            }),
            Object.defineProperty(this, I, {
                writable: !0,
                value: h.icon
            }),
            Object.defineProperty(this, M, {
                writable: !0,
                value: {}
            }),
            Object.defineProperty(this, T, {
                writable: !0,
                value: []
            }),
            Object.defineProperty(this, j, {
                writable: !0,
                value: void 0
            }),
            Object.defineProperty(this, A, {
                writable: !0,
                value: null
            }),
            Object.defineProperty(this, N, {
                writable: !0,
                value: async t=>{
                    const e = await g(this, _)[_]("connect", [t]);
                    return g(this, T)[T] = e.map(({address: t, publicKey: e, purpose: n})=>new l.ExodusWalletAccount({
                        address: t,
                        publicKey: Object(u.deserializeToBytes)(e),
                        purpose: n,
                        icon: h.icon
                    })),
                    g(this, w)[w]("change", {
                        accounts: this.accounts
                    }),
                    {
                        accounts: g(this, T)[T]
                    }
                }
            }),
            Object.defineProperty(this, P, {
                writable: !0,
                value: (t,e)=>{
                    var n;
                    return (null == (n = g(this, M)[M][t]) ? void 0 : n.push(e)) || (g(this, M)[M][t] = [e]),
                    ()=>g(this, y)[y](t, e)
                }
            }),
            g(this, A)[A] = new s.a({
                transport: t,
                generateId: ()=>i.randomUUID,
                requestTimeout: a.RPC_REQUEST_TIMEOUT
            }),
            g(this, j)[j] = new f.BitcoinProvider({
                transport: t
            })
        }
    }
    function m(t, e) {
        return g(this, A)[A].callMethod(`bitcoin_standard_ ${t}`, e)
    }
    function E(t, e) {
        var n;
        g(this, M)[M][t] = null == (n = g(this, M)[M][t]) ? void 0 : n.filter(t=>e !== t)
    }
    function S(t, ...e) {
        var n;
        null == (n = g(this, M)[M][t]) || n.forEach(t=>t.apply(null, e))
    }
    var R = p("version")
      , O = p("name")
      , I = p("icon")
      , M = p("listeners")
      , T = p("accounts")
      , j = p("provider")
      , A = p("rpc")
      , N = p("connect")
      , P = p("on")
}
, function(t, e, n) {
    "use strict";
    n.d(e, "BaseProvider", function() {
        return h
    });
    var r = n(22)
      , i = n.n(r)
      , o = n(59)
      , s = n.n(o)
      , a = n(57)
      , u = n(58)
      , c = 0;
    function l(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e))
            throw new TypeError("attempted to use private field on non-instance");
        return t
    }
    class h extends i.a {
        constructor({transport: t}) {
            super(),
            this.isExodus = !0,
            Object.defineProperty(this, f, {
                writable: !0,
                value: null
            }),
            l(this, f)[f] = new s.a({
                transport: t,
                generateId: ()=>u.randomUUID,
                requestTimeout: a.RPC_REQUEST_TIMEOUT
            })
        }
        _callRpcMethod(t, e) {
            return l(this, f)[f].callMethod(t, e)
        }
    }
    var f = "__private_" + c++ + "_" + "rpc"
}
, function(t, e, n) {
    "use strict";
    n.d(e, "ProfileProvider", function() {
        return a
    });
    var r = n(113)
      , i = 0;
    function o(t) {
        return "__private_" + i++ + "_" + t
    }
    function s(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e))
            throw new TypeError("attempted to use private field on non-instance");
        return t
    }
    class a extends r.BaseProvider {
        constructor({transport: t, profileObservable: e}) {
            super({
                transport: t
            }),
            Object.defineProperty(this, u, {
                writable: !0,
                value: null
            }),
            Object.defineProperty(this, c, {
                writable: !0,
                value: null
            }),
            Object.defineProperty(this, l, {
                writable: !0,
                value: t=>{
                    const {name: e, avatar: n} = t;
                    e === s(this, u)[u] && n === s(this, c)[c] || (s(this, u)[u] = e,
                    s(this, c)[c] = n,
                    this.emit("changed", t))
                }
            }),
            e.observe(t=>{
                s(this, l)[l](t)
            }
            )
        }
        get name() {
            return s(this, u)[u]
        }
        get avatar() {
            return s(this, c)[c]
        }
    }
    var u = o("name")
      , c = o("avatar")
      , l = o("handleProfileChange")
}
, function(t, e, n) {
    "use strict";
    n.d(e, "ExodusAlgorandWallet", function() {
        return c
    });
    var r = n(62)
      , i = n(61)
      , o = 0;
    function s(t) {
        return "__private_" + o++ + "_" + t
    }
    function a(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e))
            throw new TypeError("attempted to use private field on non-instance");
        return t
    }
    const u = "arc10:";
    class c {
        get version() {
            return a(this, l)[l]
        }
        get name() {
            return a(this, h)[h]
        }
        get icon() {
            return a(this, f)[f]
        }
        get chains() {
            return r.ALGORAND_CHAINS
        }
        get features() {
            return {
                [u]: {
                    api: a(this, d)[d]
                }
            }
        }
        get accounts() {
            return []
        }
        constructor(t) {
            if (Object.defineProperty(this, l, {
                writable: !0,
                value: "1.0.0"
            }),
            Object.defineProperty(this, h, {
                writable: !0,
                value: "Exodus"
            }),
            Object.defineProperty(this, f, {
                writable: !0,
                value: i.icon
            }),
            Object.defineProperty(this, d, {
                writable: !0,
                value: void 0
            }),
            !t)
                throw new Error("Algorand ARC10 Provider is required!");
            a(this, d)[d] = t
        }
    }
    var l = s("version")
      , h = s("name")
      , f = s("icon")
      , d = s("provider")
}
, function(t, e, n) {
    "use strict";
    n.d(e, "ExodusEthereumWallet", function() {
        return a
    });
    var r = n(63)
      , i = 0;
    function o(t) {
        return "__private_" + i++ + "_" + t
    }
    function s(t, e) {
        if (!Object.prototype.hasOwnProperty.call(t, e))
            throw new TypeError("attempted to use private field on non-instance");
        return t
    }
    class a {
        get version() {
            return s(this, u)[u]
        }
        get name() {
            return s(this, c)[c]
        }
        get icon() {
            return s(this, l)[l]
        }
        get chains() {
            return []
        }
        get features() {
            return {
                "eip1193:provider": {
                    provider: s(this, h)[h]
                }
            }
        }
        get accounts() {
            return []
        }
        constructor(t) {
            if (Object.defineProperty(this, u, {
                writable: !0,
                value: "1.0.0"
            }),
            Object.defineProperty(this, c, {
                writable: !0,
                value: "Exodus"
            }),
            Object.defineProperty(this, l, {
                writable: !0,
                value: r.icon
            }),
            Object.defineProperty(this, h, {
                writable: !0,
                value: null
            }),
            !t)
                throw new Error("Ethereum Provider is required!");
            s(this, h)[h] = t
        }
    }
    var u = o("version")
      , c = o("name")
      , l = o("icon")
      , h = o("provider")
}
]);
