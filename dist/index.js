// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = N;
exports.hydrate = O;
exports.h = exports.createElement = a;
exports.Fragment = y;
exports.createRef = h;
exports.Component = p;
exports.cloneElement = S;
exports.createContext = q;
exports.toChildArray = w;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    r,
    o = {},
    f = [],
    e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
exports.isValidElement = l;
exports.options = n;

function c(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function s(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function a(n, l, u) {
  var i,
      t,
      r,
      o = arguments,
      f = {};

  for (r in l) "key" == r ? i = l[r] : "ref" == r ? t = l[r] : f[r] = l[r];

  if (arguments.length > 3) for (u = [u], r = 3; r < arguments.length; r++) u.push(o[r]);
  if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (r in n.defaultProps) void 0 === f[r] && (f[r] = n.defaultProps[r]);
  return v(n, f, i, t, null);
}

function v(l, u, i, t, r) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++n.__v : r
  };
  return null != n.vnode && n.vnode(o), o;
}

function h() {
  return {
    current: null
  };
}

function y(n) {
  return n.children;
}

function p(n, l) {
  this.props = n, this.context = l;
}

function d(n, l) {
  if (null == l) return n.__ ? d(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? d(n) : null;
}

function _(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return _(n);
  }
}

function k(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !m.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(m);
}

function m() {
  for (var n; m.__r = u.length;) n = u.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), u = [], n.some(function (n) {
    var l, u, i, t, r, o;
    n.__d && (r = (t = (l = n).__v).__e, (o = l.__P) && (u = [], (i = c({}, t)).__v = t.__v + 1, T(o, t, i, l.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [r] : null, u, null == r ? d(t) : r, t.__h), j(u, t), t.__e != r && _(t)));
  });
}

function b(n, l, u, i, t, r, e, c, s, a) {
  var h,
      p,
      _,
      k,
      m,
      b,
      w,
      A = i && i.__k || f,
      P = A.length;

  for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(y, {
    children: k
  }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (_ = A[h]) || _ && k.key == _.key && k.type === _.type) A[h] = void 0;else for (p = 0; p < P; p++) {
      if ((_ = A[p]) && k.key == _.key && k.type === _.type) {
        A[p] = void 0;
        break;
      }

      _ = null;
    }
    T(n, k, _ = _ || o, t, r, e, c, s, a), m = k.__e, (p = k.ref) && _.ref != p && (w || (w = []), _.ref && w.push(_.ref, null, k), w.push(p, k.__c || m, k)), null != m ? (null == b && (b = m), "function" == typeof k.type && null != k.__k && k.__k === _.__k ? k.__d = s = g(k, s, n) : s = x(n, k, _, A, m, s), a || "option" !== u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && _.__e == s && s.parentNode != n && (s = d(_));
  }

  for (u.__e = b, h = P; h--;) null != A[h] && ("function" == typeof u.type && null != A[h].__e && A[h].__e == u.__d && (u.__d = d(i, h + 1)), L(A[h], A[h]));

  if (w) for (h = 0; h < w.length; h++) I(w[h], w[++h], w[++h]);
}

function g(n, l, u) {
  var i, t;

  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, l = "function" == typeof t.type ? g(t, l, u) : x(u, t, t, n.__k, t.__e, l));

  return l;
}

function w(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    w(n, l);
  }) : l.push(n)), l;
}

function x(n, l, u, i, t, r) {
  var o, f, e;
  if (void 0 !== l.__d) o = l.__d, l.__d = void 0;else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;else {
    for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

    n.insertBefore(t, r), o = r;
  }
  return void 0 !== o ? o : t.nextSibling;
}

function A(n, l, u, i, t) {
  var r;

  for (r in u) "children" === r || "key" === r || r in l || C(n, r, null, u[r], i);

  for (r in l) t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || C(n, r, l[r], u[r], i);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || e.test(l) ? u : u + "px";
}

function C(n, l, u, i, t) {
  var r;

  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || P(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || P(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? H : $, r) : n.removeEventListener(l, r ? H : $, r);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
  }
}

function $(l) {
  this.l[l.type + !1](n.event ? n.event(l) : l);
}

function H(l) {
  this.l[l.type + !0](n.event ? n.event(l) : l);
}

function T(l, u, i, t, r, o, f, e, s) {
  var a,
      v,
      h,
      d,
      _,
      k,
      m,
      g,
      w,
      x,
      A,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  null != i.__h && (s = i.__h, e = u.__e = i.__e, u.__h = null, o = [e]), (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (g = u.props, w = (a = P.contextType) && t[a.__c], x = a ? w ? w.props.value : a.__ : t, i.__c ? m = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new p(g, x), v.constructor = P, v.render = M), w && w.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = c({}, v.__s)), c(v.__s, P.getDerivedStateFromProps(g, v.__s))), d = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && g !== d && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
          v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v);
          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(d, _, k);
        });
      }
      v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = c(c({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (k = v.getSnapshotBeforeUpdate(d, _)), A = null != a && a.type === y && null == a.key ? a.props.children : a, b(l, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, s), v.base = u.__e, u.__h = null, v.__h.length && f.push(v), m && (v.__E = v.__ = null), v.__e = !1;
    } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = z(i.__e, u, i, t, r, o, f, s);

    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, (s || null != o) && (u.__e = e, u.__h = !!s, o[o.indexOf(e)] = null), n.__e(l, u, i);
  }
}

function j(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function z(n, l, u, i, t, r, e, c) {
  var a,
      v,
      h,
      y,
      p = u.props,
      d = l.props,
      _ = l.type,
      k = 0;
  if ("svg" === _ && (t = !0), null != r) for (; k < r.length; k++) if ((a = r[k]) && (a === n || (_ ? a.localName == _ : 3 == a.nodeType))) {
    n = a, r[k] = null;
    break;
  }

  if (null == n) {
    if (null === _) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", _) : document.createElement(_, d.is && d), r = null, c = !1;
  }

  if (null === _) p === d || c && n.data === d || (n.data = d);else {
    if (r = r && f.slice.call(n.childNodes), v = (p = u.props || o).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
      if (null != r) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
      (h || v) && (h && (v && h.__html == v.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
    }

    if (A(n, d, p, t, c), h) l.__k = [];else if (k = l.props.children, b(n, Array.isArray(k) ? k : [k], l, u, i, t && "foreignObject" !== _, r, e, n.firstChild, c), null != r) for (k = r.length; k--;) null != r[k] && s(r[k]);
    c || ("value" in d && void 0 !== (k = d.value) && (k !== n.value || "progress" === _ && !k) && C(n, "value", k, p.value, !1), "checked" in d && void 0 !== (k = d.checked) && k !== n.checked && C(n, "checked", k, p.checked, !1));
  }
  return n;
}

function I(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function L(l, u, i) {
  var t, r, o;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || I(t, null, u)), i || "function" == typeof l.type || (i = null != (r = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (o = 0; o < t.length; o++) t[o] && L(t[o], u, i);
  null != r && s(r);
}

function M(n, l, u) {
  return this.constructor(n, u);
}

function N(l, u, i) {
  var t, r, e;
  n.__ && n.__(l, u), r = (t = "function" == typeof i) ? null : i && i.__k || u.__k, e = [], T(u, l = (!t && i || u).__k = a(y, null, [l]), r || o, o, void 0 !== u.ownerSVGElement, !t && i ? [i] : r ? null : u.firstChild ? f.slice.call(u.childNodes) : null, e, !t && i ? i : r ? r.__e : u.firstChild, t), j(e, l);
}

function O(n, l) {
  N(n, l, O);
}

function S(n, l, u) {
  var i,
      t,
      r,
      o = arguments,
      f = c({}, n.props);

  for (r in l) "key" == r ? i = l[r] : "ref" == r ? t = l[r] : f[r] = l[r];

  if (arguments.length > 3) for (u = [u], r = 3; r < arguments.length; r++) u.push(o[r]);
  return null != u && (f.children = u), v(n.type, f, i || n.key, t || n.ref, null);
}

function q(n, l) {
  var u = {
    __c: l = "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(k);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u, i, t; l = l.__;) if ((u = l.__c) && !u.__) try {
      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
    } catch (l) {
      n = l;
    }

    throw n;
  },
  __v: 0
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, p.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), "function" == typeof n && (n = n(c({}, u), this.props)), n && c(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
}, p.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
}, p.prototype.render = y, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m.__r = 0, r = 0; //# sourceMappingURL=preact.module.js.map
},{}],"../node_modules/preact-router/dist/preact-router.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentUrl = getCurrentUrl;
exports.route = route;
exports.exec = exec;
exports.default = exports.Link = exports.Route = exports.Router = exports.subscribers = void 0;

var _preact = require("preact");

var EMPTY$1 = {};

function assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }

  return obj;
}

function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
      c = url.match(reg),
      matches = {},
      ret;

  if (c && c[1]) {
    var p = c[1].split('&');

    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }

  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);

  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
          flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
          plus = ~flags.indexOf('+'),
          star = ~flags.indexOf('*'),
          val = url[i$1] || '';

      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }

      matches[param] = decodeURIComponent(val);

      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }

  if (opts.default !== true && ret === false) {
    return false;
  }

  return matches;
}

function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
} // filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.


function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}

function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}

var customHistory = null;
var ROUTERS = [];
var subscribers = [];
exports.subscribers = subscribers;
var EMPTY = {};

function setUrl(url, type) {
  if (type === void 0) type = 'push';

  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}

function getCurrentUrl() {
  var url;

  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }

  return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
  if (replace === void 0) replace = false;

  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  } // only push URL into history if we can handle it


  if (canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }

  return routeTo(url);
}
/** Check if the given URL can be handled by any router instances. */


function canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }

  return false;
}
/** Tell all router instances to handle the given URL.  */


function routeTo(url) {
  var didRoute = false;

  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }

  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }

  return didRoute;
}

function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }

  var href = node.getAttribute('href'),
      target = node.getAttribute('target'); // ignore links with targets and non-path URLs

  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  } // attempt to route, if no match simply cede control to browser


  return route(href);
}

function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }

  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}

function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }

    if (e.stopPropagation) {
      e.stopPropagation();
    }

    e.preventDefault();
  }

  return false;
}

function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }

  var t = e.target;

  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      } // if link is handled by the router, prevent browser defaults


      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }

  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }

    addEventListener('click', delegateLinkHandler);
  }

  eventListenersInitialized = true;
}

var Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);

    if (props.history) {
      customHistory = props.history;
    }

    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }

  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;

  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }

    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };
  /** Check if the given URL can be matched against any children */


  Router.prototype.canRoute = function canRoute(url) {
    var children = (0, _preact.toChildArray)(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };
  /** Re-render children with a new URL to match against. */


  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url); // trigger a manual re-route if we're not in the middle of an update:

    if (!this.updating) {
      this.forceUpdate();
    }

    return didRoute;
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };

  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;

    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }

    this.updating = false;
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }

    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };

  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };

  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };

  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);

      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return (0, _preact.cloneElement)(vnode, newProps);
        }

        return vnode;
      }
    }).filter(Boolean);
  };

  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren((0, _preact.toChildArray)(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;

    if (url !== previous) {
      this.previousUrl = url;

      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }

    return current;
  };

  return Router;
}(_preact.Component);

exports.Router = Router;

var Link = function (props) {
  return (0, _preact.createElement)('a', assign({
    onClick: handleLinkClick
  }, props));
};

exports.Link = Link;

var Route = function (props) {
  return (0, _preact.createElement)(props.component, props);
};

exports.Route = Route;
Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
Router.exec = exec;
var _default = Router; //# sourceMappingURL=preact-router.es.js.map

exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useState = l;
exports.useReducer = p;
exports.useEffect = y;
exports.useLayoutEffect = h;
exports.useRef = s;
exports.useImperativeHandle = _;
exports.useMemo = d;
exports.useCallback = A;
exports.useContext = F;
exports.useDebugValue = T;
exports.useErrorBoundary = q;

var _preact = require("preact");

var t,
    u,
    r,
    o = 0,
    i = [],
    c = _preact.options.__b,
    f = _preact.options.__r,
    e = _preact.options.diffed,
    a = _preact.options.__c,
    v = _preact.options.unmount;

function m(t, r) {
  _preact.options.__h && _preact.options.__h(u, t, o || r), o = 0;
  var i = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}

function l(n) {
  return o = 1, p(w, n);
}

function p(n, r, o) {
  var i = m(t++, 2);
  return i.t = n, i.__c || (i.__ = [o ? o(r) : w(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }], i.__c = u), i.__;
}

function y(r, o) {
  var i = m(t++, 3);
  !_preact.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
}

function h(r, o) {
  var i = m(t++, 4);
  !_preact.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
}

function s(n) {
  return o = 5, d(function () {
    return {
      current: n
    };
  }, []);
}

function _(n, t, u) {
  o = 6, h(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function d(n, u) {
  var r = m(t++, 7);
  return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}

function A(n, t) {
  return o = 8, d(function () {
    return n;
  }, t);
}

function F(n) {
  var r = u.context[n.__c],
      o = m(t++, 9);
  return o.__c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}

function T(t, u) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}

function q(n) {
  var r = m(t++, 10),
      o = l();
  return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}

function x() {
  i.forEach(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(g), t.__H.__h.forEach(j), t.__H.__h = [];
    } catch (u) {
      t.__H.__h = [], _preact.options.__e(u, t.__v);
    }
  }), i = [];
}

_preact.options.__b = function (n) {
  u = null, c && c(n);
}, _preact.options.__r = function (n) {
  f && f(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(g), r.__h.forEach(j), r.__h = []);
}, _preact.options.diffed = function (t) {
  e && e(t);
  var o = t.__c;
  o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r === _preact.options.requestAnimationFrame || ((r = _preact.options.requestAnimationFrame) || function (n) {
    var t,
        u = function () {
      clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    b && (t = requestAnimationFrame(u));
  })(x)), u = void 0;
}, _preact.options.__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || j(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], _preact.options.__e(r, t.__v);
    }
  }), a && a(t, u);
}, _preact.options.unmount = function (t) {
  v && v(t);
  var u = t.__c;
  if (u && u.__H) try {
    u.__H.__.forEach(g);
  } catch (t) {
    _preact.options.__e(t, u.__v);
  }
};
var b = "function" == typeof requestAnimationFrame;

function g(n) {
  var t = u;
  "function" == typeof n.__c && n.__c(), u = t;
}

function j(n) {
  var t = u;
  n.__c = n.__(), u = t;
}

function k(n, t) {
  return !n || n.length !== t.length || t.some(function (t, u) {
    return t !== n[u];
  });
}

function w(n, t) {
  return "function" == typeof t ? t(n) : t;
} //# sourceMappingURL=hooks.module.js.map
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"services/lipsticks.service.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SORTED_LIPSTICKS = exports.LIPSTICKS = void 0;
var LIPSTICKS = [{
  "value": "rgb(229.0,109.0,137.0)",
  "brand": "Yves Saint Laurent",
  "colour": "1 - Dream Me Nude - Neutral Mauve",
  "r": 229,
  "g": 109,
  "b": 137,
  "rgb": "rgb(229, 109, 137)",
  "hex": "#e56d89"
}, {
  "value": "rgb(229.0,110.0,138.0)",
  "brand": "Yves Saint Laurent",
  "colour": "2 - Tease Me Pink - Soft Rose Pink",
  "r": 229,
  "g": 110,
  "b": 138,
  "rgb": "rgb(229, 110, 138)",
  "hex": "#e56e8a"
}, {
  "value": "rgb(244.0,132.0,128.0)",
  "brand": "Yves Saint Laurent",
  "colour": "3 - Call Me Rose - Bubblegum Pink",
  "r": 244,
  "g": 132,
  "b": 128,
  "rgb": "rgb(244, 132, 128)",
  "hex": "#f48480"
}, {
  "value": "rgb(217.0,25.0,74.0)",
  "brand": "Yves Saint Laurent",
  "colour": "4 - Desire Me Pink - Bright Watermelon Fuschia",
  "r": 217,
  "g": 25,
  "b": 74,
  "rgb": "rgb(217, 25, 74)",
  "hex": "#d9194a"
}, {
  "value": "rgb(90.0,11.0,43.0)",
  "brand": "Yves Saint Laurent",
  "colour": "5 - Dare Me Plum - Dark Rich Berry",
  "r": 90,
  "g": 11,
  "b": 43,
  "rgb": "rgb(90, 11, 43)",
  "hex": "#5a0b2b"
}, {
  "value": "rgb(202.0,7.0,39.0)",
  "brand": "Yves Saint Laurent",
  "colour": "6 - Touch Me Red - Cherry Red",
  "r": 202,
  "g": 7,
  "b": 39,
  "rgb": "rgb(202, 7, 39)",
  "hex": "#ca0727"
}, {
  "value": "rgb(242.0,109.0,102.0)",
  "brand": "Yves Saint Laurent",
  "colour": "7 - Flirt Me Coral - Peachy Coral",
  "r": 242,
  "g": 109,
  "b": 102,
  "rgb": "rgb(242, 109, 102)",
  "hex": "#f26d66"
}, {
  "value": "rgb(230.0,40.0,36.0)",
  "brand": "Yves Saint Laurent",
  "colour": "8 - Catch Me Orange - True Orange",
  "r": 230,
  "g": 40,
  "b": 36,
  "rgb": "rgb(230, 40, 36)",
  "hex": "#e62824"
}, {
  "value": "rgb(240.0,67.0,97.0)",
  "brand": "Yves Saint Laurent",
  "colour": "9 - Tempt Me Pink - Hot Pink",
  "r": 240,
  "g": 67,
  "b": 97,
  "rgb": "rgb(240, 67, 97)",
  "hex": "#f04361"
}, {
  "value": "rgb(159.0,19.0,52.0)",
  "brand": "Yves Saint Laurent",
  "colour": "10 - Seduce Me Pink - Deep Berry",
  "r": 159,
  "g": 19,
  "b": 52,
  "rgb": "rgb(159, 19, 52)",
  "hex": "#9f1334"
}, {
  "value": "rgb(209.0,19.0,103.0)",
  "brand": "Yves Saint Laurent",
  "colour": "11 - Play Me Fuchsia - Hot Pink Fuchsia",
  "r": 209,
  "g": 19,
  "b": 103,
  "rgb": "rgb(209, 19, 103)",
  "hex": "#d11367"
}, {
  "value": "rgb(178.0,34.0,65.0)",
  "brand": "Yves Saint Laurent",
  "colour": "12 - Try Me Berry - Pinkish Plum",
  "r": 178,
  "g": 34,
  "b": 65,
  "rgb": "rgb(178, 34, 65)",
  "hex": "#b22241"
}, {
  "value": "rgb(232.0,149.0,135.0)",
  "brand": "Yves Saint Laurent",
  "colour": "14 - Underground Pink",
  "r": 232,
  "g": 149,
  "b": 135,
  "rgb": "rgb(232, 149, 135)",
  "hex": "#e89587"
}, {
  "value": "rgb(231.0,20.0,113.0)",
  "brand": "Yves Saint Laurent",
  "colour": "50 ??? Fuchsia Stiletto - Shocking Magenta",
  "r": 231,
  "g": 20,
  "b": 113,
  "rgb": "rgb(231, 20, 113)",
  "hex": "#e71471"
}, {
  "value": "rgb(185.0,26.0,46.0)",
  "brand": "Yves Saint Laurent",
  "colour": "04 ??? Rouge In Danger - Deep Strawberry Red",
  "r": 185,
  "g": 26,
  "b": 46,
  "rgb": "rgb(185, 26, 46)",
  "hex": "#b91a2e"
}, {
  "value": "rgb(180.0,30.0,68.0)",
  "brand": "Yves Saint Laurent",
  "colour": "05 ??? Fuchsia In Excess - Bright Luminous Pink",
  "r": 180,
  "g": 30,
  "b": 68,
  "rgb": "rgb(180, 30, 68)",
  "hex": "#b41e44"
}, {
  "value": "rgb(224.0,29.0,95.0)",
  "brand": "Yves Saint Laurent",
  "colour": "06 ??? Pink In Devotion - Bright Hibiscus Pink",
  "r": 224,
  "g": 29,
  "b": 95,
  "rgb": "rgb(224, 29, 95)",
  "hex": "#e01d5f"
}, {
  "value": "rgb(225.0,49.0,62.0)",
  "brand": "Yves Saint Laurent",
  "colour": "12 ??? Corail Incandescent - Bright Cajun Coral",
  "r": 225,
  "g": 49,
  "b": 62,
  "rgb": "rgb(225, 49, 62)",
  "hex": "#e1313e"
}, {
  "value": "rgb(226.0,110.0,110.0)",
  "brand": "Yves Saint Laurent",
  "colour": "13 ??? Pink in Paris - Dried Rose Pink",
  "r": 226,
  "g": 110,
  "b": 110,
  "rgb": "rgb(226, 110, 110)",
  "hex": "#e26e6e"
}, {
  "value": "rgb(222.0,74.0,60.0)",
  "brand": "Yves Saint Laurent",
  "colour": "14 ??? Corail In Touch - Creamy Orange Coral",
  "r": 222,
  "g": 74,
  "b": 60,
  "rgb": "rgb(222, 74, 60)",
  "hex": "#de4a3c"
}, {
  "value": "rgb(226.0,107.0,101.0)",
  "brand": "Yves Saint Laurent",
  "colour": "15 ??? Corail Intuitive - Soft Smoky Coral",
  "r": 226,
  "g": 107,
  "b": 101,
  "rgb": "rgb(226, 107, 101)",
  "hex": "#e26b65"
}, {
  "value": "rgb(207.0,64.0,60.0)",
  "brand": "Yves Saint Laurent",
  "colour": "16 ??? Orange Impertinent - Orange",
  "r": 207,
  "g": 64,
  "b": 60,
  "rgb": "rgb(207, 64, 60)",
  "hex": "#cf403c"
}, {
  "value": "rgb(165.0,36.0,119.0)",
  "brand": "Yves Saint Laurent",
  "colour": "19 ??? Fuchsia in Rage",
  "r": 165,
  "g": 36,
  "b": 119,
  "rgb": "rgb(165, 36, 119)",
  "hex": "#a52477"
}, {
  "value": "rgb(241.0,82.0,66.0)",
  "brand": "Yves Saint Laurent",
  "colour": "30 ??? Coral Ingenious - Coral Red",
  "r": 241,
  "g": 82,
  "b": 66,
  "rgb": "rgb(241, 82, 66)",
  "hex": "#f15242"
}, {
  "value": "rgb(243.0,101.0,101.0)",
  "brand": "Yves Saint Laurent",
  "colour": "31 ??? Rose Innocent - Light Rose",
  "r": 243,
  "g": 101,
  "b": 101,
  "rgb": "rgb(243, 101, 101)",
  "hex": "#f36565"
}, {
  "value": "rgb(212.0,92.0,116.0)",
  "brand": "Yves Saint Laurent",
  "colour": "32 ??? Pink Independent - True Pink",
  "r": 212,
  "g": 92,
  "b": 116,
  "rgb": "rgb(212, 92, 116)",
  "hex": "#d45c74"
}, {
  "value": "rgb(154.0,52.0,83.0)",
  "brand": "Yves Saint Laurent",
  "colour": "33 ??? Fuchsia Intense - Deep Fuschia",
  "r": 154,
  "g": 52,
  "b": 83,
  "rgb": "rgb(154, 52, 83)",
  "hex": "#9a3453"
}, {
  "value": "rgb(200.0,100.0,124.0)",
  "brand": "Yves Saint Laurent",
  "colour": "35 ??? Fuchsia in Grunge - Cool Plum",
  "r": 200,
  "g": 100,
  "b": 124,
  "rgb": "rgb(200, 100, 124)",
  "hex": "#c8647c"
}, {
  "value": "rgb(238.0,108.0,116.0)",
  "brand": "Yves Saint Laurent",
  "colour": "41 ??? Corail A Porter - Light Coral",
  "r": 238,
  "g": 108,
  "b": 116,
  "rgb": "rgb(238, 108, 116)",
  "hex": "#ee6c74"
}, {
  "value": "rgb(242.0,236.0,224.0)",
  "brand": "Yves Saint Laurent",
  "colour": "42 ??? Baume Mini Minuit - Sheer Shimmer",
  "r": 242,
  "g": 236,
  "b": 224,
  "rgb": "rgb(242, 236, 224)",
  "hex": "#f2ece0"
}, {
  "value": "rgb(208.0,60.0,74.0)",
  "brand": "Yves Saint Laurent",
  "colour": "43 ??? Rose Rive Gauche - Smoky Rose",
  "r": 208,
  "g": 60,
  "b": 74,
  "rgb": "rgb(208, 60, 74)",
  "hex": "#d03c4a"
}, {
  "value": "rgb(204.0,123.0,120.0)",
  "brand": "Yves Saint Laurent",
  "colour": "44 ??? Nude Lavalliere - Pinkish Brown",
  "r": 204,
  "g": 123,
  "b": 120,
  "rgb": "rgb(204, 123, 120)",
  "hex": "#cc7b78"
}, {
  "value": "rgb(195.0,15.0,42.0)",
  "brand": "Yves Saint Laurent",
  "colour": "45 ??? Rouge Tuxedo - Cherry Red",
  "r": 195,
  "g": 15,
  "b": 42,
  "rgb": "rgb(195, 15, 42)",
  "hex": "#c30f2a"
}, {
  "value": "rgb(218.0,18.0,21.0)",
  "brand": "Yves Saint Laurent",
  "colour": "46 ??? Orange Perfecto - Poppy Coral",
  "r": 218,
  "g": 18,
  "b": 21,
  "rgb": "rgb(218, 18, 21)",
  "hex": "#da1215"
}, {
  "value": "rgb(192.0,109.0,105.0)",
  "brand": "Yves Saint Laurent",
  "colour": "47 ??? Beige Blouse - Soft Beige",
  "r": 192,
  "g": 109,
  "b": 105,
  "rgb": "rgb(192, 109, 105)",
  "hex": "#c06d69"
}, {
  "value": "rgb(178.0,87.0,84.0)",
  "brand": "Yves Saint Laurent",
  "colour": "09 ??? Nude In Private - Spicy Warm Beige",
  "r": 178,
  "g": 87,
  "b": 84,
  "rgb": "rgb(178, 87, 84)",
  "hex": "#b25754"
}, {
  "value": "rgb(143.0,39.0,64.0)",
  "brand": "Yves Saint Laurent",
  "colour": "48 ??? Smoking Plum - Juicy Plum",
  "r": 143,
  "g": 39,
  "b": 64,
  "rgb": "rgb(143, 39, 64)",
  "hex": "#8f2740"
}, {
  "value": "rgb(216.0,34.0,85.0)",
  "brand": "Yves Saint Laurent",
  "colour": "49 ??? Rose Saint Germain - Bright Strawberry Pink",
  "r": 216,
  "g": 34,
  "b": 85,
  "rgb": "rgb(216, 34, 85)",
  "hex": "#d82255"
}, {
  "value": "rgb(239.0,121.0,137.0)",
  "brand": "Yves Saint Laurent",
  "colour": "51 ??? Rose Saharienne - Soft Pink",
  "r": 239,
  "g": 121,
  "b": 137,
  "rgb": "rgb(239, 121, 137)",
  "hex": "#ef7989"
}, {
  "value": "rgb(216.0,97.0,137.0)",
  "brand": "Yves Saint Laurent",
  "colour": "52 ??? Trapeze Pink - Pure Pink",
  "r": 216,
  "g": 97,
  "b": 137,
  "rgb": "rgb(216, 97, 137)",
  "hex": "#d86189"
}, {
  "value": "rgb(223.0,61.0,72.0)",
  "brand": "Yves Saint Laurent",
  "colour": "57 ??? Rouge Spencer",
  "r": 223,
  "g": 61,
  "b": 72,
  "rgb": "rgb(223, 61, 72)",
  "hex": "#df3d48"
}, {
  "value": "rgb(227.0,60.0,41.0)",
  "brand": "Yves Saint Laurent",
  "colour": "58 ??? Orange Touron - True Orange",
  "r": 227,
  "g": 60,
  "b": 41,
  "rgb": "rgb(227, 60, 41)",
  "hex": "#e33c29"
}, {
  "value": "rgb(221.0,3.0,51.0)",
  "brand": "Yves Saint Laurent",
  "colour": "60 ??? Rose Marceau - Cherry Red",
  "r": 221,
  "g": 3,
  "b": 51,
  "rgb": "rgb(221, 3, 51)",
  "hex": "#dd0333"
}, {
  "value": "rgb(180.0,111.0,116.0)",
  "brand": "Yves Saint Laurent",
  "colour": "61 ??? Nu Impulsif",
  "r": 180,
  "g": 111,
  "b": 116,
  "rgb": "rgb(180, 111, 116)",
  "hex": "#b46f74"
}, {
  "value": "rgb(216.0,132.0,156.0)",
  "brand": "Yves Saint Laurent",
  "colour": "62 ??? Turbulent Pink",
  "r": 216,
  "g": 132,
  "b": 156,
  "rgb": "rgb(216, 132, 156)",
  "hex": "#d8849c"
}, {
  "value": "rgb(208.0,19.0,91.0)",
  "brand": "Yves Saint Laurent",
  "colour": "63 ??? Effervescent Fuchsia",
  "r": 208,
  "g": 19,
  "b": 91,
  "rgb": "rgb(208, 19, 91)",
  "hex": "#d0135b"
}, {
  "value": "rgb(184.0,25.0,79.0)",
  "brand": "Yves Saint Laurent",
  "colour": "64 ??? Electric Fuchsia",
  "r": 184,
  "g": 25,
  "b": 79,
  "rgb": "rgb(184, 25, 79)",
  "hex": "#b8194f"
}, {
  "value": "rgb(235.0,69.0,81.0)",
  "brand": "Yves Saint Laurent",
  "colour": "65 ??? Iridescent Coral",
  "r": 235,
  "g": 69,
  "b": 81,
  "rgb": "rgb(235, 69, 81)",
  "hex": "#eb4551"
}, {
  "value": "rgb(241.0,97.0,124.0)",
  "brand": "Yves Saint Laurent",
  "colour": "66 ??? Pink Infusion",
  "r": 241,
  "g": 97,
  "b": 124,
  "rgb": "rgb(241, 97, 124)",
  "hex": "#f1617c"
}, {
  "value": "rgb(158.0,66.0,69.0)",
  "brand": "Yves Saint Laurent",
  "colour": "91 - Nude Avant-Garde",
  "r": 158,
  "g": 66,
  "b": 69,
  "rgb": "rgb(158, 66, 69)",
  "hex": "#9e4245"
}, {
  "value": "rgb(175.0,89.0,92.0)",
  "brand": "Lancome",
  "colour": "006 Rose Nu",
  "r": 175,
  "g": 89,
  "b": 92,
  "rgb": "rgb(175, 89, 92)",
  "hex": "#af595c"
}, {
  "value": "rgb(110.0,47.0,40.0)",
  "brand": "Lancome",
  "colour": "011 Rose Nature",
  "r": 110,
  "g": 47,
  "b": 40,
  "rgb": "rgb(110, 47, 40)",
  "hex": "#6e2f28"
}, {
  "value": "rgb(160.0,5.0,9.0)",
  "brand": "Lancome",
  "colour": "132 CAPRICE",
  "r": 160,
  "g": 5,
  "b": 9,
  "rgb": "rgb(160, 5, 9)",
  "hex": "#a00509"
}, {
  "value": "rgb(185.0,121.0,119.0)",
  "brand": "Lancome",
  "colour": "250 Beige Mirage",
  "r": 185,
  "g": 121,
  "b": 119,
  "rgb": "rgb(185, 121, 119)",
  "hex": "#b97977"
}, {
  "value": "rgb(183.0,71.0,70.0)",
  "brand": "Lancome",
  "colour": "350 Rose Incarnation",
  "r": 183,
  "g": 71,
  "b": 70,
  "rgb": "rgb(183, 71, 70)",
  "hex": "#b74746"
}, {
  "value": "rgb(207.0,93.0,83.0)",
  "brand": "Lancome",
  "colour": "241 Tr??sor",
  "r": 207,
  "g": 93,
  "b": 83,
  "rgb": "rgb(207, 93, 83)",
  "hex": "#cf5d53"
}, {
  "value": "rgb(224.0,77.0,106.0)",
  "brand": "Lancome",
  "colour": "324 Teen R??se",
  "r": 224,
  "g": 77,
  "b": 106,
  "rgb": "rgb(224, 77, 106)",
  "hex": "#e04d6a"
}, {
  "value": "rgb(185.0,32.0,35.0)",
  "brand": "Lancome",
  "colour": "122 Indecise",
  "r": 185,
  "g": 32,
  "b": 35,
  "rgb": "rgb(185, 32, 35)",
  "hex": "#b92023"
}, {
  "value": "rgb(210.0,134.0,121.0)",
  "brand": "Lancome",
  "colour": "202 Nuit Et Jour",
  "r": 210,
  "g": 134,
  "b": 121,
  "rgb": "rgb(210, 134, 121)",
  "hex": "#d28679"
}, {
  "value": "rgb(176.0,96.0,97.0)",
  "brand": "Lancome",
  "colour": "264 Peut-etre",
  "r": 176,
  "g": 96,
  "b": 97,
  "rgb": "rgb(176, 96, 97)",
  "hex": "#b06061"
}, {
  "value": "rgb(220.0,73.0,125.0)",
  "brand": "Lancome",
  "colour": "315 Rose Printemps",
  "r": 220,
  "g": 73,
  "b": 125,
  "rgb": "rgb(220, 73, 125)",
  "hex": "#dc497d"
}, {
  "value": "rgb(208.0,63.0,106.0)",
  "brand": "Lancome",
  "colour": "317 POURQUOI PAS",
  "r": 208,
  "g": 63,
  "b": 106,
  "rgb": "rgb(208, 63, 106)",
  "hex": "#d03f6a"
}, {
  "value": "rgb(150.0,45.0,129.0)",
  "brand": "Lancome",
  "colour": "325 Impertinente",
  "r": 150,
  "g": 45,
  "b": 129,
  "rgb": "rgb(150, 45, 129)",
  "hex": "#962d81"
}, {
  "value": "rgb(164.0,51.0,107.0)",
  "brand": "Lancome",
  "colour": "367 Bouquet Final",
  "r": 164,
  "g": 51,
  "b": 107,
  "rgb": "rgb(164, 51, 107)",
  "hex": "#a4336b"
}, {
  "value": "rgb(151.0,62.0,68.0)",
  "brand": "Lancome",
  "colour": "007 Rose Nocturne",
  "r": 151,
  "g": 62,
  "b": 68,
  "rgb": "rgb(151, 62, 68)",
  "hex": "#973e44"
}, {
  "value": "rgb(156.0,41.0,70.0)",
  "brand": "Lancome",
  "colour": "008 Rose Reflet",
  "r": 156,
  "g": 41,
  "b": 70,
  "rgb": "rgb(156, 41, 70)",
  "hex": "#9c2946"
}, {
  "value": "rgb(132.0,36.0,40.0)",
  "brand": "Lancome",
  "colour": "012 Rose Nuance",
  "r": 132,
  "g": 36,
  "b": 40,
  "rgb": "rgb(132, 36, 40)",
  "hex": "#842428"
}, {
  "value": "rgb(155.0,41.0,41.0)",
  "brand": "Lancome",
  "colour": "047 Rouge rayonnant",
  "r": 155,
  "g": 41,
  "b": 41,
  "rgb": "rgb(155, 41, 41)",
  "hex": "#9b2929"
}, {
  "value": "rgb(180.0,94.0,107.0)",
  "brand": "Lancome",
  "colour": "354 Rose Rhapsodie",
  "r": 180,
  "g": 94,
  "b": 107,
  "rgb": "rgb(180, 94, 107)",
  "hex": "#b45e6b"
}, {
  "value": "rgb(166.0,31.0,37.0)",
  "brand": "Lancome",
  "colour": "160 Rouge Amour",
  "r": 166,
  "g": 31,
  "b": 37,
  "rgb": "rgb(166, 31, 37)",
  "hex": "#a61f25"
}, {
  "value": "rgb(145.0,36.0,39.0)",
  "brand": "Lancome",
  "colour": "176 Soir",
  "r": 145,
  "g": 36,
  "b": 39,
  "rgb": "rgb(145, 36, 39)",
  "hex": "#912427"
}, {
  "value": "rgb(196.0,149.0,129.0)",
  "brand": "Lancome",
  "colour": "239 Au Naturel",
  "r": 196,
  "g": 149,
  "b": 129,
  "rgb": "rgb(196, 149, 129)",
  "hex": "#c49581"
}, {
  "value": "rgb(200.0,116.0,106.0)",
  "brand": "Lancome",
  "colour": "262 Imprevu",
  "r": 200,
  "g": 116,
  "b": 106,
  "rgb": "rgb(200, 116, 106)",
  "hex": "#c8746a"
}, {
  "value": "rgb(176.0,100.0,86.0)",
  "brand": "Lancome",
  "colour": "343 Suspense",
  "r": 176,
  "g": 100,
  "b": 86,
  "rgb": "rgb(176, 100, 86)",
  "hex": "#b06456"
}, {
  "value": "rgb(204.0,94.0,103.0)",
  "brand": "Lancome",
  "colour": "361 Effortless Chic",
  "r": 204,
  "g": 94,
  "b": 103,
  "rgb": "rgb(204, 94, 103)",
  "hex": "#cc5e67"
}, {
  "value": "rgb(162.0,24.0,49.0)",
  "brand": "Lancome",
  "colour": "371 Passionn??ment",
  "r": 162,
  "g": 24,
  "b": 49,
  "rgb": "rgb(162, 24, 49)",
  "hex": "#a21831"
}, {
  "value": "rgb(213.0,65.0,113.0)",
  "brand": "Lancome",
  "colour": "381 Rose Rendez-Vous",
  "r": 213,
  "g": 65,
  "b": 113,
  "rgb": "rgb(213, 65, 113)",
  "hex": "#d54171"
}, {
  "value": "rgb(203.0,77.0,55.0)",
  "brand": "Lancome",
  "colour": "006 Orange Sacr??e",
  "r": 203,
  "g": 77,
  "b": 55,
  "rgb": "rgb(203, 77, 55)",
  "hex": "#cb4d37"
}, {
  "value": "rgb(167.0,31.0,69.0)",
  "brand": "Lancome",
  "colour": "369 Rose Lanc??me",
  "r": 167,
  "g": 31,
  "b": 69,
  "rgb": "rgb(167, 31, 69)",
  "hex": "#a71f45"
}, {
  "value": "rgb(148.0,84.0,57.0)",
  "brand": "Lancome",
  "colour": "112 Mars",
  "r": 148,
  "g": 84,
  "b": 57,
  "rgb": "rgb(148, 84, 57)",
  "hex": "#945439"
}, {
  "value": "rgb(189.0,22.0,29.0)",
  "brand": "Lancome",
  "colour": "162 Rouge Chic",
  "r": 189,
  "g": 22,
  "b": 29,
  "rgb": "rgb(189, 22, 29)",
  "hex": "#bd161d"
}, {
  "value": "rgb(125.0,88.0,72.0)",
  "brand": "Lancome",
  "colour": "245 Amande Sucree",
  "r": 125,
  "g": 88,
  "b": 72,
  "rgb": "rgb(125, 88, 72)",
  "hex": "#7d5848"
}, {
  "value": "rgb(183.0,39.0,49.0)",
  "brand": "Lancome",
  "colour": "186 Idole",
  "r": 183,
  "g": 39,
  "b": 49,
  "rgb": "rgb(183, 39, 49)",
  "hex": "#b72731"
}, {
  "value": "rgb(141.0,32.0,35.0)",
  "brand": "Lancome",
  "colour": "189 Isabella",
  "r": 141,
  "g": 32,
  "b": 35,
  "rgb": "rgb(141, 32, 35)",
  "hex": "#8d2023"
}, {
  "value": "rgb(147.0,67.0,80.0)",
  "brand": "Lancome",
  "colour": "290 Peome",
  "r": 147,
  "g": 67,
  "b": 80,
  "rgb": "rgb(147, 67, 80)",
  "hex": "#934350"
}, {
  "value": "rgb(157.0,26.0,66.0)",
  "brand": "Lancome",
  "colour": "378 Rose Lancome",
  "r": 157,
  "g": 26,
  "b": 66,
  "rgb": "rgb(157, 26, 66)",
  "hex": "#9d1a42"
}, {
  "value": "rgb(208.0,106.0,127.0)",
  "brand": "Lancome",
  "colour": "393 Rose Rose",
  "r": 208,
  "g": 106,
  "b": 127,
  "rgb": "rgb(208, 106, 127)",
  "hex": "#d06a7f"
}, {
  "value": "rgb(103.0,42.0,49.0)",
  "brand": "Lancome",
  "colour": "397 Berry Noir",
  "r": 103,
  "g": 42,
  "b": 49,
  "rgb": "rgb(103, 42, 49)",
  "hex": "#672a31"
}, {
  "value": "rgb(200.0,65.0,67.0)",
  "brand": "Lancome",
  "colour": "197 Rouge Ch??rie",
  "r": 200,
  "g": 65,
  "b": 67,
  "rgb": "rgb(200, 65, 67)",
  "hex": "#c84143"
}, {
  "value": "rgb(159.0,31.0,32.0)",
  "brand": "Lancome",
  "colour": "178 Rouge Vintage",
  "r": 159,
  "g": 31,
  "b": 32,
  "rgb": "rgb(159, 31, 32)",
  "hex": "#9f1f20"
}, {
  "value": "rgb(155.0,52.0,78.0)",
  "brand": "Lancome",
  "colour": "388 Plum d'Audace",
  "r": 155,
  "g": 52,
  "b": 78,
  "rgb": "rgb(155, 52, 78)",
  "hex": "#9b344e"
}, {
  "value": "rgb(203.0,12.0,57.0)",
  "brand": "Lancome",
  "colour": "120 ?? my Rouge",
  "r": 203,
  "g": 12,
  "b": 57,
  "rgb": "rgb(203, 12, 57)",
  "hex": "#cb0c39"
}, {
  "value": "rgb(243.0,107.0,80.0)",
  "brand": "Lancome",
  "colour": "136 Amuse-Bouche",
  "r": 243,
  "g": 107,
  "b": 80,
  "rgb": "rgb(243, 107, 80)",
  "hex": "#f36b50"
}, {
  "value": "rgb(203.0,12.0,57.0)",
  "brand": "Lancome",
  "colour": "160 Unconventional",
  "r": 203,
  "g": 12,
  "b": 57,
  "rgb": "rgb(203, 12, 57)",
  "hex": "#cb0c39"
}, {
  "value": "rgb(161.0,59.0,68.0)",
  "brand": "Lancome",
  "colour": "286 Brun de Coquette",
  "r": 161,
  "g": 59,
  "b": 68,
  "rgb": "rgb(161, 59, 68)",
  "hex": "#a13b44"
}, {
  "value": "rgb(215.0,142.0,144.0)",
  "brand": "Lancome",
  "colour": "212 Twisted Beige",
  "r": 215,
  "g": 142,
  "b": 144,
  "rgb": "rgb(215, 142, 144)",
  "hex": "#d78e90"
}, {
  "value": "rgb(215.0,153.0,148.0)",
  "brand": "Lancome",
  "colour": "218 Beige B??guin",
  "r": 215,
  "g": 153,
  "b": 148,
  "rgb": "rgb(215, 153, 148)",
  "hex": "#d79994"
}, {
  "value": "rgb(246.0,128.0,144.0)",
  "brand": "Lancome",
  "colour": "314 Spontan??e",
  "r": 246,
  "g": 128,
  "b": 144,
  "rgb": "rgb(246, 128, 144)",
  "hex": "#f68090"
}, {
  "value": "rgb(235.0,101.0,135.0)",
  "brand": "Lancome",
  "colour": "316 Eclat de Rose",
  "r": 235,
  "g": 101,
  "b": 135,
  "rgb": "rgb(235, 101, 135)",
  "hex": "#eb6587"
}, {
  "value": "rgb(230.0,114.0,125.0)",
  "brand": "Lancome",
  "colour": "321 BC Beig??",
  "r": 230,
  "g": 114,
  "b": 125,
  "rgb": "rgb(230, 114, 125)",
  "hex": "#e6727d"
}, {
  "value": "rgb(105.0,37.0,60.0)",
  "brand": "Estee Lauder",
  "colour": "Plum Bite",
  "r": 105,
  "g": 37,
  "b": 60,
  "rgb": "rgb(105, 37, 60)",
  "hex": "#69253c"
}, {
  "value": "rgb(240.0,104.0,142.0)",
  "brand": "Estee Lauder",
  "colour": "Candy",
  "r": 240,
  "g": 104,
  "b": 142,
  "rgb": "rgb(240, 104, 142)",
  "hex": "#f0688e"
}, {
  "value": "rgb(198.0,51.0,105.0)",
  "brand": "Estee Lauder",
  "colour": "Thrill Seeker",
  "r": 198,
  "g": 51,
  "b": 105,
  "rgb": "rgb(198, 51, 105)",
  "hex": "#c63369"
}, {
  "value": "rgb(238.0,108.0,121.0)",
  "brand": "Estee Lauder",
  "colour": "Bold Innocent",
  "r": 238,
  "g": 108,
  "b": 121,
  "rgb": "rgb(238, 108, 121)",
  "hex": "#ee6c79"
}, {
  "value": "rgb(158.0,49.0,44.0)",
  "brand": "Estee Lauder",
  "colour": "Slow Burn",
  "r": 158,
  "g": 49,
  "b": 44,
  "rgb": "rgb(158, 49, 44)",
  "hex": "#9e312c"
}, {
  "value": "rgb(152.0,17.0,53.0)",
  "brand": "Estee Lauder",
  "colour": "Sly Ingenue",
  "r": 152,
  "g": 17,
  "b": 53,
  "rgb": "rgb(152, 17, 53)",
  "hex": "#981135"
}, {
  "value": "rgb(249.0,81.0,99.0)",
  "brand": "Estee Lauder",
  "colour": "Sheer Sin",
  "r": 249,
  "g": 81,
  "b": 99,
  "rgb": "rgb(249, 81, 99)",
  "hex": "#f95163"
}, {
  "value": "rgb(122.0,32.0,83.0)",
  "brand": "Estee Lauder",
  "colour": "Lure Me On",
  "r": 122,
  "g": 32,
  "b": 83,
  "rgb": "rgb(122, 32, 83)",
  "hex": "#7a2053"
}, {
  "value": "rgb(160.0,9.0,40.0)",
  "brand": "Estee Lauder",
  "colour": "Intense Emotion",
  "r": 160,
  "g": 9,
  "b": 40,
  "rgb": "rgb(160, 9, 40)",
  "hex": "#a00928"
}, {
  "value": "rgb(182.0,76.0,77.0)",
  "brand": "Estee Lauder",
  "colour": "Naked Ambition",
  "r": 182,
  "g": 76,
  "b": 77,
  "rgb": "rgb(182, 76, 77)",
  "hex": "#b64c4d"
}, {
  "value": "rgb(216.0,108.0,105.0)",
  "brand": "Estee Lauder",
  "colour": "Nude Reveal",
  "r": 216,
  "g": 108,
  "b": 105,
  "rgb": "rgb(216, 108, 105)",
  "hex": "#d86c69"
}, {
  "value": "rgb(163.0,95.0,82.0)",
  "brand": "Estee Lauder",
  "colour": "Tiger Eye",
  "r": 163,
  "g": 95,
  "b": 82,
  "rgb": "rgb(163, 95, 82)",
  "hex": "#a35f52"
}, {
  "value": "rgb(248.0,59.0,38.0)",
  "brand": "Estee Lauder",
  "colour": "Hot Chills",
  "r": 248,
  "g": 59,
  "b": 38,
  "rgb": "rgb(248, 59, 38)",
  "hex": "#f83b26"
}, {
  "value": "rgb(220.0,120.0,120.0)",
  "brand": "Estee Lauder",
  "colour": "Naked Truth",
  "r": 220,
  "g": 120,
  "b": 120,
  "rgb": "rgb(220, 120, 120)",
  "hex": "#dc7878"
}, {
  "value": "rgb(208.0,61.0,88.0)",
  "brand": "Estee Lauder",
  "colour": "Power Mode",
  "r": 208,
  "g": 61,
  "b": 88,
  "rgb": "rgb(208, 61, 88)",
  "hex": "#d03d58"
}, {
  "value": "rgb(204.0,18.0,25.0)",
  "brand": "Estee Lauder",
  "colour": "Nectarine",
  "r": 204,
  "g": 18,
  "b": 25,
  "rgb": "rgb(204, 18, 25)",
  "hex": "#cc1219"
}, {
  "value": "rgb(228.0,27.0,42.0)",
  "brand": "Estee Lauder",
  "colour": "Drop Dead Red",
  "r": 228,
  "g": 27,
  "b": 42,
  "rgb": "rgb(228, 27, 42)",
  "hex": "#e41b2a"
}, {
  "value": "rgb(229.0,129.0,124.0)",
  "brand": "Estee Lauder",
  "colour": "Crystal Baby",
  "r": 229,
  "g": 129,
  "b": 124,
  "rgb": "rgb(229, 129, 124)",
  "hex": "#e5817c"
}, {
  "value": "rgb(198.0,94.0,119.0)",
  "brand": "Estee Lauder",
  "colour": "Pink Parfait",
  "r": 198,
  "g": 94,
  "b": 119,
  "rgb": "rgb(198, 94, 119)",
  "hex": "#c65e77"
}, {
  "value": "rgb(246.0,74.0,80.0)",
  "brand": "Estee Lauder",
  "colour": "Bad Angel",
  "r": 246,
  "g": 74,
  "b": 80,
  "rgb": "rgb(246, 74, 80)",
  "hex": "#f64a50"
}, {
  "value": "rgb(255.0,118.0,105.0)",
  "brand": "Estee Lauder",
  "colour": "Melon",
  "r": 255,
  "g": 118,
  "b": 105,
  "rgb": "rgb(255, 118, 105)",
  "hex": "#ff7669"
}, {
  "value": "rgb(217.0,15.0,59.0)",
  "brand": "Estee Lauder",
  "colour": "Lava",
  "r": 217,
  "g": 15,
  "b": 59,
  "rgb": "rgb(217, 15, 59)",
  "hex": "#d90f3b"
}, {
  "value": "rgb(98.0,28.0,38.0)",
  "brand": "Estee Lauder",
  "colour": "Lies & Kiss",
  "r": 98,
  "g": 28,
  "b": 38,
  "rgb": "rgb(98, 28, 38)",
  "hex": "#621c26"
}, {
  "value": "rgb(217.0,21.0,49.0)",
  "brand": "Estee Lauder",
  "colour": "Pretty Shocking",
  "r": 217,
  "g": 21,
  "b": 49,
  "rgb": "rgb(217, 21, 49)",
  "hex": "#d91531"
}, {
  "value": "rgb(111.0,59.0,63.0)",
  "brand": "Estee Lauder",
  "colour": "Hot Kiss",
  "r": 111,
  "g": 59,
  "b": 63,
  "rgb": "rgb(111, 59, 63)",
  "hex": "#6f3b3f"
}, {
  "value": "rgb(155.0,57.0,66.0)",
  "brand": "Estee Lauder",
  "colour": "Raw Edge",
  "r": 155,
  "g": 57,
  "b": 66,
  "rgb": "rgb(155, 57, 66)",
  "hex": "#9b3942"
}, {
  "value": "rgb(219.0,136.0,113.0)",
  "brand": "Estee Lauder",
  "colour": "Quiet Roar",
  "r": 219,
  "g": 136,
  "b": 113,
  "rgb": "rgb(219, 136, 113)",
  "hex": "#db8871"
}, {
  "value": "rgb(190.0,69.0,77.0)",
  "brand": "Estee Lauder",
  "colour": "Culture Clash",
  "r": 190,
  "g": 69,
  "b": 77,
  "rgb": "rgb(190, 69, 77)",
  "hex": "#be454d"
}, {
  "value": "rgb(236.0,96.0,102.0)",
  "brand": "Estee Lauder",
  "colour": "Blush Crush",
  "r": 236,
  "g": 96,
  "b": 102,
  "rgb": "rgb(236, 96, 102)",
  "hex": "#ec6066"
}, {
  "value": "rgb(207.0,139.0,122.0)",
  "brand": "Estee Lauder",
  "colour": "Covetous Nude",
  "r": 207,
  "g": 139,
  "b": 122,
  "rgb": "rgb(207, 139, 122)",
  "hex": "#cf8b7a"
}, {
  "value": "rgb(253.0,91.0,123.0)",
  "brand": "Estee Lauder",
  "colour": "Private Party",
  "r": 253,
  "g": 91,
  "b": 123,
  "rgb": "rgb(253, 91, 123)",
  "hex": "#fd5b7b"
}, {
  "value": "rgb(200.0,49.0,88.0)",
  "brand": "Estee Lauder",
  "colour": "Aloof",
  "r": 200,
  "g": 49,
  "b": 88,
  "rgb": "rgb(200, 49, 88)",
  "hex": "#c83158"
}, {
  "value": "rgb(177.0,33.0,66.0)",
  "brand": "Estee Lauder",
  "colour": "Decisive",
  "r": 177,
  "g": 33,
  "b": 66,
  "rgb": "rgb(177, 33, 66)",
  "hex": "#b12142"
}, {
  "value": "rgb(242.0,113.0,142.0)",
  "brand": "Estee Lauder",
  "colour": "No Restraint",
  "r": 242,
  "g": 113,
  "b": 142,
  "rgb": "rgb(242, 113, 142)",
  "hex": "#f2718e"
}, {
  "value": "rgb(199.0,30.0,62.0)",
  "brand": "Estee Lauder",
  "colour": "Fame Seeker",
  "r": 199,
  "g": 30,
  "b": 62,
  "rgb": "rgb(199, 30, 62)",
  "hex": "#c71e3e"
}, {
  "value": "rgb(189.0,75.0,67.0)",
  "brand": "Estee Lauder",
  "colour": "Persuasive",
  "r": 189,
  "g": 75,
  "b": 67,
  "rgb": "rgb(189, 75, 67)",
  "hex": "#bd4b43"
}, {
  "value": "rgb(246.0,54.0,57.0)",
  "brand": "Estee Lauder",
  "colour": "Short Fuse",
  "r": 246,
  "g": 54,
  "b": 57,
  "rgb": "rgb(246, 54, 57)",
  "hex": "#f63639"
}, {
  "value": "rgb(142.0,30.0,21.0)",
  "brand": "Estee Lauder",
  "colour": "Irrepressible",
  "r": 142,
  "g": 30,
  "b": 21,
  "rgb": "rgb(142, 30, 21)",
  "hex": "#8e1e15"
}, {
  "value": "rgb(118.0,39.0,26.0)",
  "brand": "Estee Lauder",
  "colour": "Desirous",
  "r": 118,
  "g": 39,
  "b": 26,
  "rgb": "rgb(118, 39, 26)",
  "hex": "#76271a"
}, {
  "value": "rgb(241.0,40.0,115.0)",
  "brand": "Estee Lauder",
  "colour": "Neon Azalea",
  "r": 241,
  "g": 40,
  "b": 115,
  "rgb": "rgb(241, 40, 115)",
  "hex": "#f12873"
}, {
  "value": "rgb(177.0,33.0,66.0)",
  "brand": "Estee Lauder",
  "colour": "Unattainable",
  "r": 177,
  "g": 33,
  "b": 66,
  "rgb": "rgb(177, 33, 66)",
  "hex": "#b12142"
}, {
  "value": "rgb(218.0,31.0,25.0)",
  "brand": "Estee Lauder",
  "colour": "Volatile",
  "r": 218,
  "g": 31,
  "b": 25,
  "rgb": "rgb(218, 31, 25)",
  "hex": "#da1f19"
}, {
  "value": "rgb(151.0,20.0,11.0)",
  "brand": "Estee Lauder",
  "colour": "Decisive Poppy",
  "r": 151,
  "g": 20,
  "b": 11,
  "rgb": "rgb(151, 20, 11)",
  "hex": "#97140b"
}, {
  "value": "rgb(150.0,50.0,107.0)",
  "brand": "Estee Lauder",
  "colour": "Stronger",
  "r": 150,
  "g": 50,
  "b": 107,
  "rgb": "rgb(150, 50, 107)",
  "hex": "#96326b"
}, {
  "value": "rgb(178.0,30.0,46.0)",
  "brand": "Estee Lauder",
  "colour": "Riveted",
  "r": 178,
  "g": 30,
  "b": 46,
  "rgb": "rgb(178, 30, 46)",
  "hex": "#b21e2e"
}, {
  "value": "rgb(138.0,34.0,69.0)",
  "brand": "Estee Lauder",
  "colour": "Passion Patina",
  "r": 138,
  "g": 34,
  "b": 69,
  "rgb": "rgb(138, 34, 69)",
  "hex": "#8a2245"
}, {
  "value": "rgb(216.0,48.0,106.0)",
  "brand": "Estee Lauder",
  "colour": "Crush It",
  "r": 216,
  "g": 48,
  "b": 106,
  "rgb": "rgb(216, 48, 106)",
  "hex": "#d8306a"
}, {
  "value": "rgb(164.0,44.0,42.0)",
  "brand": "Estee Lauder",
  "colour": "Sizzling Metal",
  "r": 164,
  "g": 44,
  "b": 42,
  "rgb": "rgb(164, 44, 42)",
  "hex": "#a42c2a"
}, {
  "value": "rgb(171.0,62.0,58.0)",
  "brand": "Estee Lauder",
  "colour": "Magnetic Wave",
  "r": 171,
  "g": 62,
  "b": 58,
  "rgb": "rgb(171, 62, 58)",
  "hex": "#ab3e3a"
}, {
  "value": "rgb(132.0,63.0,63.0)",
  "brand": "Estee Lauder",
  "colour": "Brushed Bronze",
  "r": 132,
  "g": 63,
  "b": 63,
  "rgb": "rgb(132, 63, 63)",
  "hex": "#843f3f"
}, {
  "value": "rgb(209.0,134.0,102.0)",
  "brand": "Smashbox",
  "colour": "NYLON NUDE",
  "r": 209,
  "g": 134,
  "b": 102,
  "rgb": "rgb(209, 134, 102)",
  "hex": "#d18666"
}, {
  "value": "rgb(166.0,11.0,32.0)",
  "brand": "Smashbox",
  "colour": "UNZIPPED MATTE",
  "r": 166,
  "g": 11,
  "b": 32,
  "rgb": "rgb(166, 11, 32)",
  "hex": "#a60b20"
}, {
  "value": "rgb(138.0,37.0,30.0)",
  "brand": "Smashbox",
  "colour": "CHESTNUT",
  "r": 138,
  "g": 37,
  "b": 30,
  "rgb": "rgb(138, 37, 30)",
  "hex": "#8a251e"
}, {
  "value": "rgb(114.0,16.0,32.0)",
  "brand": "Smashbox",
  "colour": "PLUM SCENE",
  "r": 114,
  "g": 16,
  "b": 32,
  "rgb": "rgb(114, 16, 32)",
  "hex": "#721020"
}, {
  "value": "rgb(230.0,44.0,153.0)",
  "brand": "Smashbox",
  "colour": "FUCHSIA FLASH",
  "r": 230,
  "g": 44,
  "b": 153,
  "rgb": "rgb(230, 44, 153)",
  "hex": "#e62c99"
}, {
  "value": "rgb(255.0,75.0,124.0)",
  "brand": "Smashbox",
  "colour": "PINK PETAL",
  "r": 255,
  "g": 75,
  "b": 124,
  "rgb": "rgb(255, 75, 124)",
  "hex": "#ff4b7c"
}, {
  "value": "rgb(255.0,84.0,192.0)",
  "brand": "Smashbox",
  "colour": "TALK TO ME MATTE",
  "r": 255,
  "g": 84,
  "b": 192,
  "rgb": "rgb(255, 84, 192)",
  "hex": "#ff54c0"
}, {
  "value": "rgb(227.0,31.0,105.0)",
  "brand": "Smashbox",
  "colour": "PUNCH DRUNK",
  "r": 227,
  "g": 31,
  "b": 105,
  "rgb": "rgb(227, 31, 105)",
  "hex": "#e31f69"
}, {
  "value": "rgb(139.0,27.0,90.0)",
  "brand": "Smashbox",
  "colour": "VIVID VIOLET",
  "r": 139,
  "g": 27,
  "b": 90,
  "rgb": "rgb(139, 27, 90)",
  "hex": "#8b1b5a"
}, {
  "value": "rgb(109.0,20.0,27.0)",
  "brand": "Smashbox",
  "colour": "SCREEN QUEEN MATTE",
  "r": 109,
  "g": 20,
  "b": 27,
  "rgb": "rgb(109, 20, 27)",
  "hex": "#6d141b"
}, {
  "value": "rgb(168.0,42.0,57.0)",
  "brand": "Smashbox",
  "colour": "MULBERRY",
  "r": 168,
  "g": 42,
  "b": 57,
  "rgb": "rgb(168, 42, 57)",
  "hex": "#a82a39"
}, {
  "value": "rgb(237.0,38.0,47.0)",
  "brand": "Smashbox",
  "colour": "MANDARIN CREAM",
  "r": 237,
  "g": 38,
  "b": 47,
  "rgb": "rgb(237, 38, 47)",
  "hex": "#ed262f"
}, {
  "value": "rgb(232.0,117.0,122.0)",
  "brand": "Smashbox",
  "colour": "POSY PINK",
  "r": 232,
  "g": 117,
  "b": 122,
  "rgb": "rgb(232, 117, 122)",
  "hex": "#e8757a"
}, {
  "value": "rgb(193.0,96.0,85.0)",
  "brand": "Smashbox",
  "colour": "HONEY",
  "r": 193,
  "g": 96,
  "b": 85,
  "rgb": "rgb(193, 96, 85)",
  "hex": "#c16055"
}, {
  "value": "rgb(204.0,112.0,92.0)",
  "brand": "Smashbox",
  "colour": "LATTE",
  "r": 204,
  "g": 112,
  "b": 92,
  "rgb": "rgb(204, 112, 92)",
  "hex": "#cc705c"
}, {
  "value": "rgb(254.0,115.0,133.0)",
  "brand": "Smashbox",
  "colour": "PARIS PINK",
  "r": 254,
  "g": 115,
  "b": 133,
  "rgb": "rgb(254, 115, 133)",
  "hex": "#fe7385"
}, {
  "value": "rgb(249.0,144.0,129.0)",
  "brand": "Smashbox",
  "colour": "NUDE BEACH",
  "r": 249,
  "g": 144,
  "b": 129,
  "rgb": "rgb(249, 144, 129)",
  "hex": "#f99081"
}, {
  "value": "rgb(192.0,23.0,59.0)",
  "brand": "Smashbox",
  "colour": "GRENADINE",
  "r": 192,
  "g": 23,
  "b": 59,
  "rgb": "rgb(192, 23, 59)",
  "hex": "#c0173b"
}, {
  "value": "rgb(251.0,36.0,107.0)",
  "brand": "Smashbox",
  "colour": "ELECTRIC PINK",
  "r": 251,
  "g": 36,
  "b": 107,
  "rgb": "rgb(251, 36, 107)",
  "hex": "#fb246b"
}, {
  "value": "rgb(255.0,93.0,161.0)",
  "brand": "Smashbox",
  "colour": "SHOCK ME PINK",
  "r": 255,
  "g": 93,
  "b": 161,
  "rgb": "rgb(255, 93, 161)",
  "hex": "#ff5da1"
}, {
  "value": "rgb(251.0,73.0,210.0)",
  "brand": "Smashbox",
  "colour": "MAGENTA",
  "r": 251,
  "g": 73,
  "b": 210,
  "rgb": "rgb(251, 73, 210)",
  "hex": "#fb49d2"
}, {
  "value": "rgb(201.0,111.0,74.0)",
  "brand": "Smashbox",
  "colour": "CHAI",
  "r": 201,
  "g": 111,
  "b": 74,
  "rgb": "rgb(201, 111, 74)",
  "hex": "#c96f4a"
}, {
  "value": "rgb(196.0,37.0,125.0)",
  "brand": "Smashbox",
  "colour": "PUBLICIST MATTE",
  "r": 196,
  "g": 37,
  "b": 125,
  "rgb": "rgb(196, 37, 125)",
  "hex": "#c4257d"
}, {
  "value": "rgb(241.0,88.0,90.0)",
  "brand": "Smashbox",
  "colour": "PINCH ME MATTE",
  "r": 241,
  "g": 88,
  "b": 90,
  "rgb": "rgb(241, 88, 90)",
  "hex": "#f1585a"
}, {
  "value": "rgb(255.0,170.0,209.0)",
  "brand": "Smashbox",
  "colour": "POUT",
  "r": 255,
  "g": 170,
  "b": 209,
  "rgb": "rgb(255, 170, 209)",
  "hex": "#ffaad1"
}, {
  "value": "rgb(224.0,139.0,122.0)",
  "brand": "Smashbox",
  "colour": "FAMOUS",
  "r": 224,
  "g": 139,
  "b": 122,
  "rgb": "rgb(224, 139, 122)",
  "hex": "#e08b7a"
}, {
  "value": "rgb(222.0,183.0,202.0)",
  "brand": "Smashbox",
  "colour": "FAIR PLAY MATTE",
  "r": 222,
  "g": 183,
  "b": 202,
  "rgb": "rgb(222, 183, 202)",
  "hex": "#deb7ca"
}, {
  "value": "rgb(187.0,69.0,57.0)",
  "brand": "Smashbox",
  "colour": "BING MATTE",
  "r": 187,
  "g": 69,
  "b": 57,
  "rgb": "rgb(187, 69, 57)",
  "hex": "#bb4539"
}, {
  "value": "rgb(203.0,127.0,128.0)",
  "brand": "Smashbox",
  "colour": "AUDITION",
  "r": 203,
  "g": 127,
  "b": 128,
  "rgb": "rgb(203, 127, 128)",
  "hex": "#cb7f80"
}, {
  "value": "rgb(234.0,157.0,167.0)",
  "brand": "Smashbox",
  "colour": "PRETTY SOCIAL",
  "r": 234,
  "g": 157,
  "b": 167,
  "rgb": "rgb(234, 157, 167)",
  "hex": "#ea9da7"
}, {
  "value": "rgb(135.0,43.0,130.0)",
  "brand": "Smashbox",
  "colour": "VIOLET RIOT MATTE",
  "r": 135,
  "g": 43,
  "b": 130,
  "rgb": "rgb(135, 43, 130)",
  "hex": "#872b82"
}, {
  "value": "rgb(208.0,16.0,94.0)",
  "brand": "Smashbox",
  "colour": "INSPIRATION",
  "r": 208,
  "g": 16,
  "b": 94,
  "rgb": "rgb(208, 16, 94)",
  "hex": "#d0105e"
}, {
  "value": "rgb(244.0,154.0,160.0)",
  "brand": "Smashbox",
  "colour": "OBVI CREAM",
  "r": 244,
  "g": 154,
  "b": 160,
  "rgb": "rgb(244, 154, 160)",
  "hex": "#f49aa0"
}, {
  "value": "rgb(246.0,129.0,163.0)",
  "brand": "Smashbox",
  "colour": "PANORAMA PINK",
  "r": 246,
  "g": 129,
  "b": 163,
  "rgb": "rgb(246, 129, 163)",
  "hex": "#f681a3"
}, {
  "value": "rgb(159.0,19.0,71.0)",
  "brand": "Smashbox",
  "colour": "JAM IT ON MATTE",
  "r": 159,
  "g": 19,
  "b": 71,
  "rgb": "rgb(159, 19, 71)",
  "hex": "#9f1347"
}, {
  "value": "rgb(178.0,98.0,89.0)",
  "brand": "Smashbox",
  "colour": "SAFE WORD MATTE",
  "r": 178,
  "g": 98,
  "b": 89,
  "rgb": "rgb(178, 98, 89)",
  "hex": "#b26259"
}, {
  "value": "rgb(235.0,16.0,16.0)",
  "brand": "Smashbox",
  "colour": "GET FIRED",
  "r": 235,
  "g": 16,
  "b": 16,
  "rgb": "rgb(235, 16, 16)",
  "hex": "#eb1010"
}, {
  "value": "rgb(162.0,14.0,38.0)",
  "brand": "Smashbox",
  "colour": "RED RAGE",
  "r": 162,
  "g": 14,
  "b": 38,
  "rgb": "rgb(162, 14, 38)",
  "hex": "#a20e26"
}, {
  "value": "rgb(201.0,78.0,79.0)",
  "brand": "Smashbox",
  "colour": "FIRST TIME MATTE",
  "r": 201,
  "g": 78,
  "b": 79,
  "rgb": "rgb(201, 78, 79)",
  "hex": "#c94e4f"
}, {
  "value": "rgb(232.0,50.0,68.0)",
  "brand": "Smashbox",
  "colour": "L.A. SUNSET",
  "r": 232,
  "g": 50,
  "b": 68,
  "rgb": "rgb(232, 50, 68)",
  "hex": "#e83244"
}, {
  "value": "rgb(183.0,65.0,85.0)",
  "brand": "Smashbox",
  "colour": "STYLIST MATTE",
  "r": 183,
  "g": 65,
  "b": 85,
  "rgb": "rgb(183, 65, 85)",
  "hex": "#b74155"
}, {
  "value": "rgb(205.0,59.0,204.0)",
  "brand": "Smashbox",
  "colour": "TABLOID",
  "r": 205,
  "g": 59,
  "b": 204,
  "rgb": "rgb(205, 59, 204)",
  "hex": "#cd3bcc"
}, {
  "value": "rgb(154.0,25.0,17.0)",
  "brand": "Smashbox",
  "colour": "MADE IT MATTE",
  "r": 154,
  "g": 25,
  "b": 17,
  "rgb": "rgb(154, 25, 17)",
  "hex": "#9a1911"
}, {
  "value": "rgb(241.0,37.0,1.0)",
  "brand": "Smashbox",
  "colour": "FIREBALL MATTE",
  "r": 241,
  "g": 37,
  "b": 1,
  "rgb": "rgb(241, 37, 1)",
  "hex": "#f12501"
}, {
  "value": "rgb(116.0,97.0,107.0)",
  "brand": "Smashbox",
  "colour": "PUNKED MATTE",
  "r": 116,
  "g": 97,
  "b": 107,
  "rgb": "rgb(116, 97, 107)",
  "hex": "#74616b"
}, {
  "value": "rgb(103.0,26.0,17.0)",
  "brand": "Smashbox",
  "colour": "COFFEE RUN",
  "r": 103,
  "g": 26,
  "b": 17,
  "rgb": "rgb(103, 26, 17)",
  "hex": "#671a11"
}, {
  "value": "rgb(81.0,5.0,16.0)",
  "brand": "Smashbox",
  "colour": "WITCHY",
  "r": 81,
  "g": 5,
  "b": 16,
  "rgb": "rgb(81, 5, 16)",
  "hex": "#510510"
}, {
  "value": "rgb(70.0,21.0,39.0)",
  "brand": "Smashbox",
  "colour": "PLUM ROLE MATTE",
  "r": 70,
  "g": 21,
  "b": 39,
  "rgb": "rgb(70, 21, 39)",
  "hex": "#461527"
}, {
  "value": "rgb(216.0,110.0,124.0)",
  "brand": "Smashbox",
  "colour": "PRIMROSE",
  "r": 216,
  "g": 110,
  "b": 124,
  "rgb": "rgb(216, 110, 124)",
  "hex": "#d86e7c"
}, {
  "value": "rgb(155.0,65.0,60.0)",
  "brand": "Smashbox",
  "colour": "COGNAC",
  "r": 155,
  "g": 65,
  "b": 60,
  "rgb": "rgb(155, 65, 60)",
  "hex": "#9b413c"
}, {
  "value": "rgb(209.0,39.0,50.0)",
  "brand": "MAC",
  "colour": "#Winner",
  "r": 209,
  "g": 39,
  "b": 50,
  "rgb": "rgb(209, 39, 50)",
  "hex": "#d12732"
}, {
  "value": "rgb(180.0,131.0,194.0)",
  "brand": "MAC",
  "colour": "4Eva",
  "r": 180,
  "g": 131,
  "b": 194,
  "rgb": "rgb(180, 131, 194)",
  "hex": "#b483c2"
}, {
  "value": "rgb(112.0,47.0,43.0)",
  "brand": "MAC",
  "colour": "Antique Velvet",
  "r": 112,
  "g": 47,
  "b": 43,
  "rgb": "rgb(112, 47, 43)",
  "hex": "#702f2b"
}, {
  "value": "rgb(131.0,45.0,48.0)",
  "brand": "MAC",
  "colour": "Apr??s Soiree",
  "r": 131,
  "g": 45,
  "b": 48,
  "rgb": "rgb(131, 45, 48)",
  "hex": "#832d30"
}, {
  "value": "rgb(253.0,61.0,131.0)",
  "brand": "MAC",
  "colour": "Breathing Fire",
  "r": 253,
  "g": 61,
  "b": 131,
  "rgb": "rgb(253, 61, 131)",
  "hex": "#fd3d83"
}, {
  "value": "rgb(193.0,125.0,112.0)",
  "brand": "MAC",
  "colour": "Bronx",
  "r": 193,
  "g": 125,
  "b": 112,
  "rgb": "rgb(193, 125, 112)",
  "hex": "#c17d70"
}, {
  "value": "rgb(227.0,68.0,147.0)",
  "brand": "MAC",
  "colour": "Candy Yum-Yum",
  "r": 227,
  "g": 68,
  "b": 147,
  "rgb": "rgb(227, 68, 147)",
  "hex": "#e34493"
}, {
  "value": "rgb(163.0,67.0,58.0)",
  "brand": "MAC",
  "colour": "Chili",
  "r": 163,
  "g": 67,
  "b": 58,
  "rgb": "rgb(163, 67, 58)",
  "hex": "#a3433a"
}, {
  "value": "rgb(168.0,48.0,75.0)",
  "brand": "MAC",
  "colour": "D for Danger",
  "r": 168,
  "g": 48,
  "b": 75,
  "rgb": "rgb(168, 48, 75)",
  "hex": "#a8304b"
}, {
  "value": "rgb(135.0,101.0,100.0)",
  "brand": "MAC",
  "colour": "Deep Rooted",
  "r": 135,
  "g": 101,
  "b": 100,
  "rgb": "rgb(135, 101, 100)",
  "hex": "#876564"
}, {
  "value": "rgb(120.0,58.0,66.0)",
  "brand": "MAC",
  "colour": "Diva",
  "r": 120,
  "g": 58,
  "b": 66,
  "rgb": "rgb(120, 58, 66)",
  "hex": "#783a42"
}, {
  "value": "rgb(138.0,216.0,254.0)",
  "brand": "MAC",
  "colour": "Dreampot",
  "r": 138,
  "g": 216,
  "b": 254,
  "rgb": "rgb(138, 216, 254)",
  "hex": "#8ad8fe"
}, {
  "value": "rgb(116.0,66.0,127.0)",
  "brand": "MAC",
  "colour": "Heroine",
  "r": 116,
  "g": 66,
  "b": 127,
  "rgb": "rgb(116, 66, 127)",
  "hex": "#74427f"
}, {
  "value": "rgb(207.0,150.0,136.0)",
  "brand": "MAC",
  "colour": "Honeylove",
  "r": 207,
  "g": 150,
  "b": 136,
  "rgb": "rgb(207, 150, 136)",
  "hex": "#cf9688"
}, {
  "value": "rgb(82.0,65.0,62.0)",
  "brand": "MAC",
  "colour": "In My Fashion",
  "r": 82,
  "g": 65,
  "b": 62,
  "rgb": "rgb(82, 65, 62)",
  "hex": "#52413e"
}, {
  "value": "rgb(82.0,77.0,80.0)",
  "brand": "MAC",
  "colour": "In The Spirit",
  "r": 82,
  "g": 77,
  "b": 80,
  "rgb": "rgb(82, 77, 80)",
  "hex": "#524d50"
}, {
  "value": "rgb(80.0,35.0,64.0)",
  "brand": "MAC",
  "colour": "Instigator",
  "r": 80,
  "g": 35,
  "b": 64,
  "rgb": "rgb(80, 35, 64)",
  "hex": "#502340"
}, {
  "value": "rgb(196.0,128.0,117.0)",
  "brand": "MAC",
  "colour": "Kinda Sexy",
  "r": 196,
  "g": 128,
  "b": 117,
  "rgb": "rgb(196, 128, 117)",
  "hex": "#c48075"
}, {
  "value": "rgb(205.0,40.0,52.0)",
  "brand": "MAC",
  "colour": "Lady Danger",
  "r": 205,
  "g": 40,
  "b": 52,
  "rgb": "rgb(205, 40, 52)",
  "hex": "#cd2834"
}, {
  "value": "rgb(233.0,122.0,229.0)",
  "brand": "MAC",
  "colour": "Lavender Jade",
  "r": 233,
  "g": 122,
  "b": 229,
  "rgb": "rgb(233, 122, 229)",
  "hex": "#e97ae5"
}, {
  "value": "rgb(236.0,195.0,200.0)",
  "brand": "MAC",
  "colour": "Lazy Lullaby",
  "r": 236,
  "g": 195,
  "b": 200,
  "rgb": "rgb(236, 195, 200)",
  "hex": "#ecc3c8"
}, {
  "value": "rgb(132.0,97.0,106.0)",
  "brand": "MAC",
  "colour": "Lightly Charred",
  "r": 132,
  "g": 97,
  "b": 106,
  "rgb": "rgb(132, 97, 106)",
  "hex": "#84616a"
}, {
  "value": "rgb(251.0,58.0,61.0)",
  "brand": "MAC",
  "colour": "Mangrove",
  "r": 251,
  "g": 58,
  "b": 61,
  "rgb": "rgb(251, 58, 61)",
  "hex": "#fb3a3d"
}, {
  "value": "rgb(155.0,56.0,30.0)",
  "brand": "MAC",
  "colour": "Marrakesh",
  "r": 155,
  "g": 56,
  "b": 30,
  "rgb": "rgb(155, 56, 30)",
  "hex": "#9b381e"
}, {
  "value": "rgb(32.0,29.0,74.0)",
  "brand": "MAC",
  "colour": "Matte Royal",
  "r": 32,
  "g": 29,
  "b": 74,
  "rgb": "rgb(32, 29, 74)",
  "hex": "#201d4a"
}, {
  "value": "rgb(175.0,108.0,115.0)",
  "brand": "MAC",
  "colour": "Mehr",
  "r": 175,
  "g": 108,
  "b": 115,
  "rgb": "rgb(175, 108, 115)",
  "hex": "#af6c73"
}, {
  "value": "rgb(185.0,92.0,145.0)",
  "brand": "MAC",
  "colour": "Men Love Mystery",
  "r": 185,
  "g": 92,
  "b": 145,
  "rgb": "rgb(185, 92, 145)",
  "hex": "#b95c91"
}, {
  "value": "rgb(174.0,117.0,88.0)",
  "brand": "MAC",
  "colour": "Naturally Transformed",
  "r": 174,
  "g": 117,
  "b": 88,
  "rgb": "rgb(174, 117, 88)",
  "hex": "#ae7558"
}, {
  "value": "rgb(144.0,82.0,69.0)",
  "brand": "MAC",
  "colour": "Persistence",
  "r": 144,
  "g": 82,
  "b": 69,
  "rgb": "rgb(144, 82, 69)",
  "hex": "#905245"
}, {
  "value": "rgb(226.0,57.0,122.0)",
  "brand": "MAC",
  "colour": "Pink Pigeon",
  "r": 226,
  "g": 57,
  "b": 122,
  "rgb": "rgb(226, 57, 122)",
  "hex": "#e2397a"
}, {
  "value": "rgb(198.0,122.0,138.0)",
  "brand": "MAC",
  "colour": "Pink Plaid",
  "r": 198,
  "g": 122,
  "b": 138,
  "rgb": "rgb(198, 122, 138)",
  "hex": "#c67a8a"
}, {
  "value": "rgb(202.0,121.0,129.0)",
  "brand": "MAC",
  "colour": "Please Me",
  "r": 202,
  "g": 121,
  "b": 129,
  "rgb": "rgb(202, 121, 129)",
  "hex": "#ca7981"
}, {
  "value": "rgb(125.0,80.0,138.0)",
  "brand": "MAC",
  "colour": "Punk Couture",
  "r": 125,
  "g": 80,
  "b": 138,
  "rgb": "rgb(125, 80, 138)",
  "hex": "#7d508a"
}, {
  "value": "rgb(208.0,145.0,145.0)",
  "brand": "MAC",
  "colour": "Really Me",
  "r": 208,
  "g": 145,
  "b": 145,
  "rgb": "rgb(208, 145, 145)",
  "hex": "#d09191"
}, {
  "value": "rgb(232.0,24.0,29.0)",
  "brand": "MAC",
  "colour": "Red Rock",
  "r": 232,
  "g": 24,
  "b": 29,
  "rgb": "rgb(232, 24, 29)",
  "hex": "#e8181d"
}, {
  "value": "rgb(131.0,54.0,75.0)",
  "brand": "MAC",
  "colour": "Rocker",
  "r": 131,
  "g": 54,
  "b": 75,
  "rgb": "rgb(131, 54, 75)",
  "hex": "#83364b"
}, {
  "value": "rgb(161.0,55.0,61.0)",
  "brand": "MAC",
  "colour": "Russian Red",
  "r": 161,
  "g": 55,
  "b": 61,
  "rgb": "rgb(161, 55, 61)",
  "hex": "#a1373d"
}, {
  "value": "rgb(101.0,57.0,54.0)",
  "brand": "MAC",
  "colour": "Sin",
  "r": 101,
  "g": 57,
  "b": 54,
  "rgb": "rgb(101, 57, 54)",
  "hex": "#653936"
}, {
  "value": "rgb(87.0,62.0,78.0)",
  "brand": "MAC",
  "colour": "Smoked Purple",
  "r": 87,
  "g": 62,
  "b": 78,
  "rgb": "rgb(87, 62, 78)",
  "hex": "#573e4e"
}, {
  "value": "rgb(215.0,82.0,61.0)",
  "brand": "MAC",
  "colour": "So Chaud",
  "r": 215,
  "g": 82,
  "b": 61,
  "rgb": "rgb(215, 82, 61)",
  "hex": "#d7523d"
}, {
  "value": "rgb(131.0,93.0,82.0)",
  "brand": "MAC",
  "colour": "Stone",
  "r": 131,
  "g": 93,
  "b": 82,
  "rgb": "rgb(131, 93, 82)",
  "hex": "#835d52"
}, {
  "value": "rgb(138.0,44.0,36.0)",
  "brand": "MAC",
  "colour": "Studded Kiss",
  "r": 138,
  "g": 44,
  "b": 36,
  "rgb": "rgb(138, 44, 36)",
  "hex": "#8a2c24"
}, {
  "value": "rgb(174.0,108.0,91.0)",
  "brand": "MAC",
  "colour": "Taupe",
  "r": 174,
  "g": 108,
  "b": 91,
  "rgb": "rgb(174, 108, 91)",
  "hex": "#ae6c5b"
}, {
  "value": "rgb(243.0,105.0,105.0)",
  "brand": "MAC",
  "colour": "Tropic Tonic",
  "r": 243,
  "g": 105,
  "b": 105,
  "rgb": "rgb(243, 105, 105)",
  "hex": "#f36969"
}, {
  "value": "rgb(179.0,116.0,104.0)",
  "brand": "MAC",
  "colour": "Velvet Teddy",
  "r": 179,
  "g": 116,
  "b": 104,
  "rgb": "rgb(179, 116, 104)",
  "hex": "#b37468"
}, {
  "value": "rgb(158.0,87.0,81.0)",
  "brand": "MAC",
  "colour": "Whirl",
  "r": 158,
  "g": 87,
  "b": 81,
  "rgb": "rgb(158, 87, 81)",
  "hex": "#9e5751"
}, {
  "value": "rgb(175.0,122.0,97.0)",
  "brand": "MAC",
  "colour": "Yash",
  "r": 175,
  "g": 122,
  "b": 97,
  "rgb": "rgb(175, 122, 97)",
  "hex": "#af7a61"
}, {
  "value": "rgb(253.0,177.0,153.0)",
  "brand": "MAC",
  "colour": "The Envelope, Please",
  "r": 253,
  "g": 177,
  "b": 153,
  "rgb": "rgb(253, 177, 153)",
  "hex": "#fdb199"
}, {
  "value": "rgb(204.0,160.0,153.0)",
  "brand": "MAC",
  "colour": "Blankety",
  "r": 204,
  "g": 160,
  "b": 153,
  "rgb": "rgb(204, 160, 153)",
  "hex": "#cca099"
}, {
  "value": "rgb(192.0,107.0,111.0)",
  "brand": "MAC",
  "colour": "Brick-O-La",
  "r": 192,
  "g": 107,
  "b": 111,
  "rgb": "rgb(192, 107, 111)",
  "hex": "#c06b6f"
}, {
  "value": "rgb(200.0,130.0,113.0)",
  "brand": "Givenchy",
  "colour": "N??101-Beige Mousseline",
  "r": 200,
  "g": 130,
  "b": 113,
  "rgb": "rgb(200, 130, 113)",
  "hex": "#c88271"
}, {
  "value": "rgb(229.0,147.0,130.0)",
  "brand": "Givenchy",
  "colour": "N??102-Beige Plume",
  "r": 229,
  "g": 147,
  "b": 130,
  "rgb": "rgb(229, 147, 130)",
  "hex": "#e59382"
}, {
  "value": "rgb(205.0,108.0,101.0)",
  "brand": "Givenchy",
  "colour": "N??103-Brun Cr??ateur",
  "r": 205,
  "g": 108,
  "b": 101,
  "rgb": "rgb(205, 108, 101)",
  "hex": "#cd6c65"
}, {
  "value": "rgb(201.0,98.0,101.0)",
  "brand": "Givenchy",
  "colour": "N??105-Brun Vintage",
  "r": 201,
  "g": 98,
  "b": 101,
  "rgb": "rgb(201, 98, 101)",
  "hex": "#c96265"
}, {
  "value": "rgb(214.0,128.0,120.0)",
  "brand": "Givenchy",
  "colour": "N??106-Nude Guipure",
  "r": 214,
  "g": 128,
  "b": 120,
  "rgb": "rgb(214, 128, 120)",
  "hex": "#d68078"
}, {
  "value": "rgb(187.0,109.0,101.0)",
  "brand": "Givenchy",
  "colour": "N??109-Brun casual",
  "r": 187,
  "g": 109,
  "b": 101,
  "rgb": "rgb(187, 109, 101)",
  "hex": "#bb6d65"
}, {
  "value": "rgb(229.0,114.0,108.0)",
  "brand": "Givenchy",
  "colour": "N??201-Rose Taffetas",
  "r": 229,
  "g": 114,
  "b": 108,
  "rgb": "rgb(229, 114, 108)",
  "hex": "#e5726c"
}, {
  "value": "rgb(231.0,101.0,105.0)",
  "brand": "Givenchy",
  "colour": "N??202-Rose Dressing",
  "r": 231,
  "g": 101,
  "b": 105,
  "rgb": "rgb(231, 101, 105)",
  "hex": "#e76569"
}, {
  "value": "rgb(218.0,107.0,124.0)",
  "brand": "Givenchy",
  "colour": "N??204-Rose Boudoir",
  "r": 218,
  "g": 107,
  "b": 124,
  "rgb": "rgb(218, 107, 124)",
  "hex": "#da6b7c"
}, {
  "value": "rgb(228.0,62.0,114.0)",
  "brand": "Givenchy",
  "colour": "N??205-Fuchsia Irresistible",
  "r": 228,
  "g": 62,
  "b": 114,
  "rgb": "rgb(228, 62, 114)",
  "hex": "#e43e72"
}, {
  "value": "rgb(234.0,94.0,159.0)",
  "brand": "Givenchy",
  "colour": "N??209-Rose Perfecto",
  "r": 234,
  "g": 94,
  "b": 159,
  "rgb": "rgb(234, 94, 159)",
  "hex": "#ea5e9f"
}, {
  "value": "rgb(241.0,132.0,165.0)",
  "brand": "Givenchy",
  "colour": "N??210-Rose Dahlia",
  "r": 241,
  "g": 132,
  "b": 165,
  "rgb": "rgb(241, 132, 165)",
  "hex": "#f184a5"
}, {
  "value": "rgb(224.0,112.0,139.0)",
  "brand": "Givenchy",
  "colour": "N??214-Rose Broderie",
  "r": 224,
  "g": 112,
  "b": 139,
  "rgb": "rgb(224, 112, 139)",
  "hex": "#e0708b"
}, {
  "value": "rgb(227.0,109.0,123.0)",
  "brand": "Givenchy",
  "colour": "N??301-Magnolia Organza",
  "r": 227,
  "g": 109,
  "b": 123,
  "rgb": "rgb(227, 109, 123)",
  "hex": "#e36d7b"
}, {
  "value": "rgb(231.0,117.0,139.0)",
  "brand": "Givenchy",
  "colour": "N??302-Hibiscus Exclusif",
  "r": 231,
  "g": 117,
  "b": 139,
  "rgb": "rgb(231, 117, 139)",
  "hex": "#e7758b"
}, {
  "value": "rgb(239.0,100.0,100.0)",
  "brand": "Givenchy",
  "colour": "N??303-Corail D??collet??",
  "r": 239,
  "g": 100,
  "b": 100,
  "rgb": "rgb(239, 100, 100)",
  "hex": "#ef6464"
}, {
  "value": "rgb(200.0,53.0,63.0)",
  "brand": "Givenchy",
  "colour": "N??304-Mandarine Bol??ro",
  "r": 200,
  "g": 53,
  "b": 63,
  "rgb": "rgb(200, 53, 63)",
  "hex": "#c8353f"
}, {
  "value": "rgb(217.0,68.0,90.0)",
  "brand": "Givenchy",
  "colour": "N??305-Rouge Eg??rie",
  "r": 217,
  "g": 68,
  "b": 90,
  "rgb": "rgb(217, 68, 90)",
  "hex": "#d9445a"
}, {
  "value": "rgb(208.0,40.0,52.0)",
  "brand": "Givenchy",
  "colour": "N??306-Carmin Escarpin",
  "r": 208,
  "g": 40,
  "b": 52,
  "rgb": "rgb(208, 40, 52)",
  "hex": "#d02834"
}, {
  "value": "rgb(201.0,41.0,60.0)",
  "brand": "Givenchy",
  "colour": "N??307-Grenat Initi??",
  "r": 201,
  "g": 41,
  "b": 60,
  "rgb": "rgb(201, 41, 60)",
  "hex": "#c9293c"
}, {
  "value": "rgb(188.0,79.0,108.0)",
  "brand": "Givenchy",
  "colour": "N??315-Framboise Velours",
  "r": 188,
  "g": 79,
  "b": 108,
  "rgb": "rgb(188, 79, 108)",
  "hex": "#bc4f6c"
}, {
  "value": "rgb(221.0,82.0,70.0)",
  "brand": "Givenchy",
  "colour": "N??317-Corail Signature",
  "r": 221,
  "g": 82,
  "b": 70,
  "rgb": "rgb(221, 82, 70)",
  "hex": "#dd5246"
}, {
  "value": "rgb(194.0,42.0,106.0)",
  "brand": "Givenchy",
  "colour": "N??323-Framboise Couture",
  "r": 194,
  "g": 42,
  "b": 106,
  "rgb": "rgb(194, 42, 106)",
  "hex": "#c22a6a"
}, {
  "value": "rgb(248.0,103.0,115.0)",
  "brand": "Givenchy",
  "colour": "N??324-Corail Backstage",
  "r": 248,
  "g": 103,
  "b": 115,
  "rgb": "rgb(248, 103, 115)",
  "hex": "#f86773"
}, {
  "value": "rgb(199.0,10.0,21.0)",
  "brand": "Givenchy",
  "colour": "N??325-Rouge F??tiche",
  "r": 199,
  "g": 10,
  "b": 21,
  "rgb": "rgb(199, 10, 21)",
  "hex": "#c70a15"
}, {
  "value": "rgb(192.0,39.0,77.0)",
  "brand": "Givenchy",
  "colour": "N??326-Pourpre Edgy",
  "r": 192,
  "g": 39,
  "b": 77,
  "rgb": "rgb(192, 39, 77)",
  "hex": "#c0274d"
}, {
  "value": "rgb(199.0,37.0,117.0)",
  "brand": "Givenchy",
  "colour": "N??327-Prune Trendy",
  "r": 199,
  "g": 37,
  "b": 117,
  "rgb": "rgb(199, 37, 117)",
  "hex": "#c72575"
}, {
  "value": "rgb(157.0,98.0,95.0)",
  "brand": "Givenchy",
  "colour": "N??110-Nude Androgyne",
  "r": 157,
  "g": 98,
  "b": 95,
  "rgb": "rgb(157, 98, 95)",
  "hex": "#9d625f"
}, {
  "value": "rgb(157.0,102.0,117.0)",
  "brand": "Givenchy",
  "colour": "N??215-Neo Nude",
  "r": 157,
  "g": 102,
  "b": 117,
  "rgb": "rgb(157, 102, 117)",
  "hex": "#9d6675"
}, {
  "value": "rgb(214.0,104.0,125.0)",
  "brand": "Givenchy",
  "colour": "N??216-Rose Graphique",
  "r": 214,
  "g": 104,
  "b": 125,
  "rgb": "rgb(214, 104, 125)",
  "hex": "#d6687d"
}, {
  "value": "rgb(169.0,47.0,47.0)",
  "brand": "Givenchy",
  "colour": "N??329-Rouge Stiletto",
  "r": 169,
  "g": 47,
  "b": 47,
  "rgb": "rgb(169, 47, 47)",
  "hex": "#a92f2f"
}, {
  "value": "rgb(126.0,62.0,84.0)",
  "brand": "Givenchy",
  "colour": "N??330-Violine Retro",
  "r": 126,
  "g": 62,
  "b": 84,
  "rgb": "rgb(126, 62, 84)",
  "hex": "#7e3e54"
}, {
  "value": "rgb(119.0,64.0,60.0)",
  "brand": "Givenchy",
  "colour": "N??331-Pourpre D??fil??",
  "r": 119,
  "g": 64,
  "b": 60,
  "rgb": "rgb(119, 64, 60)",
  "hex": "#77403c"
}, {
  "value": "rgb(191.0,141.0,123.0)",
  "brand": "Givenchy",
  "colour": "N??101-Nude Ultime",
  "r": 191,
  "g": 141,
  "b": 123,
  "rgb": "rgb(191, 141, 123)",
  "hex": "#bf8d7b"
}, {
  "value": "rgb(182.0,121.0,104.0)",
  "brand": "Givenchy",
  "colour": "N??102-Beige Mousseline",
  "r": 182,
  "g": 121,
  "b": 104,
  "rgb": "rgb(182, 121, 104)",
  "hex": "#b67968"
}, {
  "value": "rgb(200.0,118.0,110.0)",
  "brand": "Givenchy",
  "colour": "N??103-Beige Plumetis",
  "r": 200,
  "g": 118,
  "b": 110,
  "rgb": "rgb(200, 118, 110)",
  "hex": "#c8766e"
}, {
  "value": "rgb(185.0,105.0,102.0)",
  "brand": "Givenchy",
  "colour": "N??104-Beige Floral",
  "r": 185,
  "g": 105,
  "b": 102,
  "rgb": "rgb(185, 105, 102)",
  "hex": "#b96966"
}, {
  "value": "rgb(166.0,89.0,96.0)",
  "brand": "Givenchy",
  "colour": "N??105-Brun Vintage",
  "r": 166,
  "g": 89,
  "b": 96,
  "rgb": "rgb(166, 89, 96)",
  "hex": "#a65960"
}, {
  "value": "rgb(183.0,91.0,91.0)",
  "brand": "Givenchy",
  "colour": "N??106-Parme Silhouette",
  "r": 183,
  "g": 91,
  "b": 91,
  "rgb": "rgb(183, 91, 91)",
  "hex": "#b75b5b"
}, {
  "value": "rgb(239.0,109.0,118.0)",
  "brand": "Givenchy",
  "colour": "N??201-Rose Aristocrate",
  "r": 239,
  "g": 109,
  "b": 118,
  "rgb": "rgb(239, 109, 118)",
  "hex": "#ef6d76"
}, {
  "value": "rgb(217.0,108.0,144.0)",
  "brand": "Givenchy",
  "colour": "N??202-Rose Fantaisie",
  "r": 217,
  "g": 108,
  "b": 144,
  "rgb": "rgb(217, 108, 144)",
  "hex": "#d96c90"
}, {
  "value": "rgb(215.0,89.0,116.0)",
  "brand": "Givenchy",
  "colour": "N??203-Rose Avant-Garde",
  "r": 215,
  "g": 89,
  "b": 116,
  "rgb": "rgb(215, 89, 116)",
  "hex": "#d75974"
}, {
  "value": "rgb(214.0,59.0,109.0)",
  "brand": "Givenchy",
  "colour": "N??204-Rose Perfecto",
  "r": 214,
  "g": 59,
  "b": 109,
  "rgb": "rgb(214, 59, 109)",
  "hex": "#d63b6d"
}, {
  "value": "rgb(214.0,59.0,109.0)",
  "brand": "Givenchy",
  "colour": "N??205-Violine Inspiration",
  "r": 214,
  "g": 59,
  "b": 109,
  "rgb": "rgb(214, 59, 109)",
  "hex": "#d63b6d"
}, {
  "value": "rgb(205.0,52.0,73.0)",
  "brand": "Givenchy",
  "colour": "N??206-Corail D??collet??",
  "r": 205,
  "g": 52,
  "b": 73,
  "rgb": "rgb(205, 52, 73)",
  "hex": "#cd3449"
}, {
  "value": "rgb(207.0,37.0,43.0)",
  "brand": "Givenchy",
  "colour": "N??301-Vermillon Cr??ation",
  "r": 207,
  "g": 37,
  "b": 43,
  "rgb": "rgb(207, 37, 43)",
  "hex": "#cf252b"
}, {
  "value": "rgb(186.0,46.0,53.0)",
  "brand": "Givenchy",
  "colour": "N??302-Rouge Atelier",
  "r": 186,
  "g": 46,
  "b": 53,
  "rgb": "rgb(186, 46, 53)",
  "hex": "#ba2e35"
}, {
  "value": "rgb(194.0,144.0,126.0)",
  "brand": "Givenchy",
  "colour": "N??303-Framboise Griff??e",
  "r": 194,
  "g": 144,
  "b": 126,
  "rgb": "rgb(194, 144, 126)",
  "hex": "#c2907e"
}, {
  "value": "rgb(125.0,66.0,74.0)",
  "brand": "Givenchy",
  "colour": "N??304-Moka Imprim??",
  "r": 125,
  "g": 66,
  "b": 74,
  "rgb": "rgb(125, 66, 74)",
  "hex": "#7d424a"
}, {
  "value": "rgb(172.0,108.0,92.0)",
  "brand": "Givenchy",
  "colour": "N??100-Nude Tweed",
  "r": 172,
  "g": 108,
  "b": 92,
  "rgb": "rgb(172, 108, 92)",
  "hex": "#ac6c5c"
}, {
  "value": "rgb(165.0,20.0,44.0)",
  "brand": "Guerlain",
  "colour": "325 Rouge Kiss",
  "r": 165,
  "g": 20,
  "b": 44,
  "rgb": "rgb(165, 20, 44)",
  "hex": "#a5142c"
}, {
  "value": "rgb(133.0,51.0,69.0)",
  "brand": "Guerlain",
  "colour": "320 Red Insolence",
  "r": 133,
  "g": 51,
  "b": 69,
  "rgb": "rgb(133, 51, 69)",
  "hex": "#853345"
}, {
  "value": "rgb(147.0,39.0,55.0)",
  "brand": "Guerlain",
  "colour": "321 Red Passion",
  "r": 147,
  "g": 39,
  "b": 55,
  "rgb": "rgb(147, 39, 55)",
  "hex": "#932737"
}, {
  "value": "rgb(146.0,19.0,44.0)",
  "brand": "Guerlain",
  "colour": "326 Love Kiss",
  "r": 146,
  "g": 19,
  "b": 44,
  "rgb": "rgb(146, 19, 44)",
  "hex": "#92132c"
}, {
  "value": "rgb(105.0,13.0,48.0)",
  "brand": "Guerlain",
  "colour": "328 Red Hot",
  "r": 105,
  "g": 13,
  "b": 48,
  "rgb": "rgb(105, 13, 48)",
  "hex": "#690d30"
}, {
  "value": "rgb(160.0,37.0,74.0)",
  "brand": "Guerlain",
  "colour": "360 Very Pink",
  "r": 160,
  "g": 37,
  "b": 74,
  "rgb": "rgb(160, 37, 74)",
  "hex": "#a0254a"
}, {
  "value": "rgb(101.0,20.0,56.0)",
  "brand": "Guerlain",
  "colour": "362 Cherry Pink",
  "r": 101,
  "g": 20,
  "b": 56,
  "rgb": "rgb(101, 20, 56)",
  "hex": "#651438"
}, {
  "value": "rgb(119.0,54.0,74.0)",
  "brand": "Guerlain",
  "colour": "363 Fabulous Rose",
  "r": 119,
  "g": 54,
  "b": 74,
  "rgb": "rgb(119, 54, 74)",
  "hex": "#77364a"
}, {
  "value": "rgb(140.0,71.0,94.0)",
  "brand": "Guerlain",
  "colour": "364 Pinky Groove",
  "r": 140,
  "g": 71,
  "b": 94,
  "rgb": "rgb(140, 71, 94)",
  "hex": "#8c475e"
}, {
  "value": "rgb(209.0,145.0,145.0)",
  "brand": "Guerlain",
  "colour": "368 Baby Rose",
  "r": 209,
  "g": 145,
  "b": 145,
  "rgb": "rgb(209, 145, 145)",
  "hex": "#d19191"
}, {
  "value": "rgb(165.0,84.0,102.0)",
  "brand": "Guerlain",
  "colour": "369 Rosy Boop",
  "r": 165,
  "g": 84,
  "b": 102,
  "rgb": "rgb(165, 84, 102)",
  "hex": "#a55466"
}, {
  "value": "rgb(206.0,77.0,77.0)",
  "brand": "Guerlain",
  "colour": "340 Miss Kiss",
  "r": 206,
  "g": 77,
  "b": 77,
  "rgb": "rgb(206, 77, 77)",
  "hex": "#ce4d4d"
}, {
  "value": "rgb(176.0,56.0,62.0)",
  "brand": "Guerlain",
  "colour": "344 Sexy Coral",
  "r": 176,
  "g": 56,
  "b": 62,
  "rgb": "rgb(176, 56, 62)",
  "hex": "#b0383e"
}, {
  "value": "rgb(166.0,35.0,105.0)",
  "brand": "Guerlain",
  "colour": "361 Excessive Rose",
  "r": 166,
  "g": 35,
  "b": 105,
  "rgb": "rgb(166, 35, 105)",
  "hex": "#a62369"
}, {
  "value": "rgb(199.0,89.0,49.0)",
  "brand": "Guerlain",
  "colour": "540 Peach Satin",
  "r": 199,
  "g": 89,
  "b": 49,
  "rgb": "rgb(199, 89, 49)",
  "hex": "#c75931"
}, {
  "value": "rgb(218.0,42.0,74.0)",
  "brand": "Guerlain",
  "colour": "371 Darling Baby",
  "r": 218,
  "g": 42,
  "b": 74,
  "rgb": "rgb(218, 42, 74)",
  "hex": "#da2a4a"
}, {
  "value": "rgb(186.0,69.0,118.0)",
  "brand": "Guerlain",
  "colour": "372 All About Pink",
  "r": 186,
  "g": 69,
  "b": 118,
  "rgb": "rgb(186, 69, 118)",
  "hex": "#ba4576"
}, {
  "value": "rgb(222.0,105.0,117.0)",
  "brand": "Guerlain",
  "colour": "367 Kiss Blossom",
  "r": 222,
  "g": 105,
  "b": 117,
  "rgb": "rgb(222, 105, 117)",
  "hex": "#de6975"
}, {
  "value": "rgb(216.0,31.0,59.0)",
  "brand": "Guerlain",
  "colour": "567 Pink Sunrise",
  "r": 216,
  "g": 31,
  "b": 59,
  "rgb": "rgb(216, 31, 59)",
  "hex": "#d81f3b"
}, {
  "value": "rgb(234.0,83.0,57.0)",
  "brand": "Guerlain",
  "colour": "542 Orange Peps",
  "r": 234,
  "g": 83,
  "b": 57,
  "rgb": "rgb(234, 83, 57)",
  "hex": "#ea5339"
}, {
  "value": "rgb(227.0,76.0,59.0)",
  "brand": "Guerlain",
  "colour": "020 Poppy Cap",
  "r": 227,
  "g": 76,
  "b": 59,
  "rgb": "rgb(227, 76, 59)",
  "hex": "#e34c3b"
}, {
  "value": "rgb(149.0,16.0,42.0)",
  "brand": "Guerlain",
  "colour": "023 Ruby Ring",
  "r": 149,
  "g": 16,
  "b": 42,
  "rgb": "rgb(149, 16, 42)",
  "hex": "#95102a"
}, {
  "value": "rgb(229.0,45.0,24.0)",
  "brand": "Guerlain",
  "colour": "043 Sun-Glasses",
  "r": 229,
  "g": 45,
  "b": 24,
  "rgb": "rgb(229, 45, 24)",
  "hex": "#e52d18"
}, {
  "value": "rgb(240.0,197.0,201.0)",
  "brand": "Guerlain",
  "colour": "001 My First Lipstick",
  "r": 240,
  "g": 197,
  "b": 201,
  "rgb": "rgb(240, 197, 201)",
  "hex": "#f0c5c9"
}, {
  "value": "rgb(194.0,69.0,69.0)",
  "brand": "Guerlain",
  "colour": "041 Sun-Twin-Set",
  "r": 194,
  "g": 69,
  "b": 69,
  "rgb": "rgb(194, 69, 69)",
  "hex": "#c24545"
}, {
  "value": "rgb(211.0,102.0,107.0)",
  "brand": "Guerlain",
  "colour": "040 Coral Collar",
  "r": 211,
  "g": 102,
  "b": 107,
  "rgb": "rgb(211, 102, 107)",
  "hex": "#d3666b"
}, {
  "value": "rgb(209.0,55.0,44.0)",
  "brand": "Guerlain",
  "colour": "003 Red Heels",
  "r": 209,
  "g": 55,
  "b": 44,
  "rgb": "rgb(209, 55, 44)",
  "hex": "#d1372c"
}, {
  "value": "rgb(216.0,2.0,70.0)",
  "brand": "Guerlain",
  "colour": "021 Red Teddy",
  "r": 216,
  "g": 2,
  "b": 70,
  "rgb": "rgb(216, 2, 70)",
  "hex": "#d80246"
}, {
  "value": "rgb(177.0,0.0,53.0)",
  "brand": "Guerlain",
  "colour": "022 Red Bow Tie",
  "r": 177,
  "g": 0,
  "b": 53,
  "rgb": "rgb(177, 0, 53)",
  "hex": "#b10035"
}, {
  "value": "rgb(226.0,87.0,122.0)",
  "brand": "Guerlain",
  "colour": "061 Pink Ballerinas",
  "r": 226,
  "g": 87,
  "b": 122,
  "rgb": "rgb(226, 87, 122)",
  "hex": "#e2577a"
}, {
  "value": "rgb(235.0,88.0,142.0)",
  "brand": "Guerlain",
  "colour": "002 Pink Tie",
  "r": 235,
  "g": 88,
  "b": 142,
  "rgb": "rgb(235, 88, 142)",
  "hex": "#eb588e"
}, {
  "value": "rgb(193.0,57.0,95.0)",
  "brand": "Guerlain",
  "colour": "063 Pink Button",
  "r": 193,
  "g": 57,
  "b": 95,
  "rgb": "rgb(193, 57, 95)",
  "hex": "#c1395f"
}, {
  "value": "rgb(142.0,7.0,54.0)",
  "brand": "Guerlain",
  "colour": "066 Berry Beret",
  "r": 142,
  "g": 7,
  "b": 54,
  "rgb": "rgb(142, 7, 54)",
  "hex": "#8e0736"
}, {
  "value": "rgb(172.0,99.0,102.0)",
  "brand": "Guerlain",
  "colour": "011 Beige Lingerie",
  "r": 172,
  "g": 99,
  "b": 102,
  "rgb": "rgb(172, 99, 102)",
  "hex": "#ac6366"
}, {
  "value": "rgb(232.0,132.0,112.0)",
  "brand": "Guerlain",
  "colour": "060 Rose Ribbon",
  "r": 232,
  "g": 132,
  "b": 112,
  "rgb": "rgb(232, 132, 112)",
  "hex": "#e88470"
}, {
  "value": "rgb(83.0,46.0,44.0)",
  "brand": "Guerlain",
  "colour": "013 Leather Blazer",
  "r": 83,
  "g": 46,
  "b": 44,
  "rgb": "rgb(83, 46, 44)",
  "hex": "#532e2c"
}, {
  "value": "rgb(128.0,86.0,90.0)",
  "brand": "Guerlain",
  "colour": "007 Black Perfecto",
  "r": 128,
  "g": 86,
  "b": 90,
  "rgb": "rgb(128, 86, 90)",
  "hex": "#80565a"
}, {
  "value": "rgb(162.0,72.0,136.0)",
  "brand": "Guerlain",
  "colour": "069 Lilac Belt",
  "r": 162,
  "g": 72,
  "b": 136,
  "rgb": "rgb(162, 72, 136)",
  "hex": "#a24888"
}, {
  "value": "rgb(130.0,50.0,86.0)",
  "brand": "Guerlain",
  "colour": "068 Mauve Gloves",
  "r": 130,
  "g": 50,
  "b": 86,
  "rgb": "rgb(130, 50, 86)",
  "hex": "#823256"
}, {
  "value": "rgb(217.0,25.0,127.0)",
  "brand": "Guerlain",
  "colour": "073 Orchid Beanie",
  "r": 217,
  "g": 25,
  "b": 127,
  "rgb": "rgb(217, 25, 127)",
  "hex": "#d9197f"
}, {
  "value": "rgb(120.0,37.0,44.0)",
  "brand": "Guerlain",
  "colour": "024 Red Studs",
  "r": 120,
  "g": 37,
  "b": 44,
  "rgb": "rgb(120, 37, 44)",
  "hex": "#78252c"
}, {
  "value": "rgb(113.0,65.0,55.0)",
  "brand": "Guerlain",
  "colour": "017 Leather Coffee",
  "r": 113,
  "g": 65,
  "b": 55,
  "rgb": "rgb(113, 65, 55)",
  "hex": "#714137"
}, {
  "value": "rgb(124.0,91.0,98.0)",
  "brand": "Guerlain",
  "colour": "074 Plum Passion",
  "r": 124,
  "g": 91,
  "b": 98,
  "rgb": "rgb(124, 91, 98)",
  "hex": "#7c5b62"
}, {
  "value": "rgb(253.0,247.0,243.0)",
  "brand": "Guerlain",
  "colour": "005 Lip Strobing",
  "r": 253,
  "g": 247,
  "b": 243,
  "rgb": "rgb(253, 247, 243)",
  "hex": "#fdf7f3"
}, {
  "value": "rgb(229.0,101.0,103.0)",
  "brand": "Guerlain",
  "colour": "570 CORAL",
  "r": 229,
  "g": 101,
  "b": 103,
  "rgb": "rgb(229, 101, 103)",
  "hex": "#e56567"
}, {
  "value": "rgb(215.0,92.0,86.0)",
  "brand": "Guerlain",
  "colour": "571 BEIGE",
  "r": 215,
  "g": 92,
  "b": 86,
  "rgb": "rgb(215, 92, 86)",
  "hex": "#d75c56"
}, {
  "value": "rgb(221.0,25.0,55.0)",
  "brand": "Guerlain",
  "colour": "572 RED",
  "r": 221,
  "g": 25,
  "b": 55,
  "rgb": "rgb(221, 25, 55)",
  "hex": "#dd1937"
}, {
  "value": "rgb(228.0,76.0,111.0)",
  "brand": "Guerlain",
  "colour": "573 PINK",
  "r": 228,
  "g": 76,
  "b": 111,
  "rgb": "rgb(228, 76, 111)",
  "hex": "#e44c6f"
}, {
  "value": "rgb(232.0,66.0,64.0)",
  "brand": "Guerlain",
  "colour": "574 ORANGE",
  "r": 232,
  "g": 66,
  "b": 64,
  "rgb": "rgb(232, 66, 64)",
  "hex": "#e84240"
}, {
  "value": "rgb(173.0,50.0,48.0)",
  "brand": "Guerlain",
  "colour": "M330 Spicy Burgundy",
  "r": 173,
  "g": 50,
  "b": 48,
  "rgb": "rgb(173, 50, 48)",
  "hex": "#ad3230"
}, {
  "value": "rgb(210.0,92.0,90.0)",
  "brand": "Kat Von D",
  "colour": "Noble",
  "r": 210,
  "g": 92,
  "b": 90,
  "rgb": "rgb(210, 92, 90)",
  "hex": "#d25c5a"
}, {
  "value": "rgb(178.0,76.0,89.0)",
  "brand": "Kat Von D",
  "colour": "OG Lolita",
  "r": 178,
  "g": 76,
  "b": 89,
  "rgb": "rgb(178, 76, 89)",
  "hex": "#b24c59"
}, {
  "value": "rgb(240.0,144.0,122.0)",
  "brand": "Kat Von D",
  "colour": "Mu??eca",
  "r": 240,
  "g": 144,
  "b": 122,
  "rgb": "rgb(240, 144, 122)",
  "hex": "#f0907a"
}, {
  "value": "rgb(172.0,87.0,80.0)",
  "brand": "Kat Von D",
  "colour": "Lolita II",
  "r": 172,
  "g": 87,
  "b": 80,
  "rgb": "rgb(172, 87, 80)",
  "hex": "#ac5750"
}, {
  "value": "rgb(179.0,112.0,96.0)",
  "brand": "Kat Von D",
  "colour": "Ophelia",
  "r": 179,
  "g": 112,
  "b": 96,
  "rgb": "rgb(179, 112, 96)",
  "hex": "#b37060"
}, {
  "value": "rgb(174.0,127.0,101.0)",
  "brand": "Kat Von D",
  "colour": "Bow N Arrow",
  "r": 174,
  "g": 127,
  "b": 101,
  "rgb": "rgb(174, 127, 101)",
  "hex": "#ae7f65"
}, {
  "value": "rgb(190.0,59.0,73.0)",
  "brand": "Kat Von D",
  "colour": "Double Dare",
  "r": 190,
  "g": 59,
  "b": 73,
  "rgb": "rgb(190, 59, 73)",
  "hex": "#be3b49"
}, {
  "value": "rgb(176.0,93.0,87.0)",
  "brand": "Kat Von D",
  "colour": "Ludwig",
  "r": 176,
  "g": 93,
  "b": 87,
  "rgb": "rgb(176, 93, 87)",
  "hex": "#b05d57"
}, {
  "value": "rgb(138.0,75.0,83.0)",
  "brand": "Kat Von D",
  "colour": "Sanctuary",
  "r": 138,
  "g": 75,
  "b": 83,
  "rgb": "rgb(138, 75, 83)",
  "hex": "#8a4b53"
}, {
  "value": "rgb(141.0,60.0,69.0)",
  "brand": "Kat Von D",
  "colour": "Cathedral",
  "r": 141,
  "g": 60,
  "b": 69,
  "rgb": "rgb(141, 60, 69)",
  "hex": "#8d3c45"
}, {
  "value": "rgb(110.0,61.0,47.0)",
  "brand": "Kat Von D",
  "colour": "Hawkwind",
  "r": 110,
  "g": 61,
  "b": 47,
  "rgb": "rgb(110, 61, 47)",
  "hex": "#6e3d2f"
}, {
  "value": "rgb(184.0,108.0,121.0)",
  "brand": "Kat Von D",
  "colour": "Lovecraft",
  "r": 184,
  "g": 108,
  "b": 121,
  "rgb": "rgb(184, 108, 121)",
  "hex": "#b86c79"
}, {
  "value": "rgb(172.0,59.0,113.0)",
  "brand": "Kat Von D",
  "colour": "Mother",
  "r": 172,
  "g": 59,
  "b": 113,
  "rgb": "rgb(172, 59, 113)",
  "hex": "#ac3b71"
}, {
  "value": "rgb(221.0,1.0,49.0)",
  "brand": "Kat Von D",
  "colour": "Outlaw",
  "r": 221,
  "g": 1,
  "b": 49,
  "rgb": "rgb(221, 1, 49)",
  "hex": "#dd0131"
}, {
  "value": "rgb(196.0,0.0,48.0)",
  "brand": "Kat Von D",
  "colour": "Underage Red",
  "r": 196,
  "g": 0,
  "b": 48,
  "rgb": "rgb(196, 0, 48)",
  "hex": "#c40030"
}, {
  "value": "rgb(178.0,33.0,40.0)",
  "brand": "Kat Von D",
  "colour": "Adora",
  "r": 178,
  "g": 33,
  "b": 40,
  "rgb": "rgb(178, 33, 40)",
  "hex": "#b22128"
}, {
  "value": "rgb(158.0,22.0,46.0)",
  "brand": "Kat Von D",
  "colour": "Hexagram",
  "r": 158,
  "g": 22,
  "b": 46,
  "rgb": "rgb(158, 22, 46)",
  "hex": "#9e162e"
}, {
  "value": "rgb(140.0,35.0,50.0)",
  "brand": "Kat Von D",
  "colour": "Nahz Fur Atoo",
  "r": 140,
  "g": 35,
  "b": 50,
  "rgb": "rgb(140, 35, 50)",
  "hex": "#8c2332"
}, {
  "value": "rgb(164.0,42.0,41.0)",
  "brand": "Kat Von D",
  "colour": "Misfit",
  "r": 164,
  "g": 42,
  "b": 41,
  "rgb": "rgb(164, 42, 41)",
  "hex": "#a42a29"
}, {
  "value": "rgb(208.0,10.0,45.0)",
  "brand": "Kat Von D",
  "colour": "Gold Blooded",
  "r": 208,
  "g": 10,
  "b": 45,
  "rgb": "rgb(208, 10, 45)",
  "hex": "#d00a2d"
}, {
  "value": "rgb(229.0,62.0,46.0)",
  "brand": "Kat Von D",
  "colour": "A-Go-Go",
  "r": 229,
  "g": 62,
  "b": 46,
  "rgb": "rgb(229, 62, 46)",
  "hex": "#e53e2e"
}, {
  "value": "rgb(238.0,81.0,150.0)",
  "brand": "Kat Von D",
  "colour": "Backstage Bambi",
  "r": 238,
  "g": 81,
  "b": 150,
  "rgb": "rgb(238, 81, 150)",
  "hex": "#ee5196"
}, {
  "value": "rgb(219.0,44.0,145.0)",
  "brand": "Kat Von D",
  "colour": "Crush",
  "r": 219,
  "g": 44,
  "b": 145,
  "rgb": "rgb(219, 44, 145)",
  "hex": "#db2c91"
}, {
  "value": "rgb(171.0,164.0,208.0)",
  "brand": "Kat Von D",
  "colour": "Coven",
  "r": 171,
  "g": 164,
  "b": 208,
  "rgb": "rgb(171, 164, 208)",
  "hex": "#aba4d0"
}, {
  "value": "rgb(127.0,106.0,175.0)",
  "brand": "Kat Von D",
  "colour": "Ozzy",
  "r": 127,
  "g": 106,
  "b": 175,
  "rgb": "rgb(127, 106, 175)",
  "hex": "#7f6aaf"
}, {
  "value": "rgb(79.0,0.0,141.0)",
  "brand": "Kat Von D",
  "colour": "Roxy",
  "r": 79,
  "g": 0,
  "b": 141,
  "rgb": "rgb(79, 0, 141)",
  "hex": "#4f008d"
}, {
  "value": "rgb(149.0,53.0,142.0)",
  "brand": "Kat Von D",
  "colour": "L. U. V.",
  "r": 149,
  "g": 53,
  "b": 142,
  "rgb": "rgb(149, 53, 142)",
  "hex": "#95358e"
}, {
  "value": "rgb(105.0,18.0,50.0)",
  "brand": "Kat Von D",
  "colour": "Mercy",
  "r": 105,
  "g": 18,
  "b": 50,
  "rgb": "rgb(105, 18, 50)",
  "hex": "#691232"
}, {
  "value": "rgb(113.0,45.0,60.0)",
  "brand": "Kat Von D",
  "colour": "Prayer",
  "r": 113,
  "g": 45,
  "b": 60,
  "rgb": "rgb(113, 45, 60)",
  "hex": "#712d3c"
}, {
  "value": "rgb(95.0,61.0,49.0)",
  "brand": "Kat Von D",
  "colour": "Crucifix",
  "r": 95,
  "g": 61,
  "b": 49,
  "rgb": "rgb(95, 61, 49)",
  "hex": "#5f3d31"
}, {
  "value": "rgb(115.0,35.0,60.0)",
  "brand": "Kat Von D",
  "colour": "Vampira",
  "r": 115,
  "g": 35,
  "b": 60,
  "rgb": "rgb(115, 35, 60)",
  "hex": "#73233c"
}, {
  "value": "rgb(113.0,28.0,69.0)",
  "brand": "Kat Von D",
  "colour": "M??torhead",
  "r": 113,
  "g": 28,
  "b": 69,
  "rgb": "rgb(113, 28, 69)",
  "hex": "#711c45"
}, {
  "value": "rgb(83.0,42.0,58.0)",
  "brand": "Kat Von D",
  "colour": "Homegirl",
  "r": 83,
  "g": 42,
  "b": 58,
  "rgb": "rgb(83, 42, 58)",
  "hex": "#532a3a"
}, {
  "value": "rgb(82.0,49.0,44.0)",
  "brand": "Kat Von D",
  "colour": "Piaf",
  "r": 82,
  "g": 49,
  "b": 44,
  "rgb": "rgb(82, 49, 44)",
  "hex": "#52312c"
}, {
  "value": "rgb(0.0,149.0,109.0)",
  "brand": "Kat Von D",
  "colour": "Plan 9",
  "r": 0,
  "g": 149,
  "b": 109,
  "rgb": "rgb(0, 149, 109)",
  "hex": "#00956d"
}, {
  "value": "rgb(153.0,135.0,149.0)",
  "brand": "Kat Von D",
  "colour": "Zero",
  "r": 153,
  "g": 135,
  "b": 149,
  "rgb": "rgb(153, 135, 149)",
  "hex": "#998795"
}, {
  "value": "rgb(33.0,24.0,71.0)",
  "brand": "Kat Von D",
  "colour": "Poe",
  "r": 33,
  "g": 24,
  "b": 71,
  "rgb": "rgb(33, 24, 71)",
  "hex": "#211847"
}, {
  "value": "rgb(38.0,39.0,41.0)",
  "brand": "Kat Von D",
  "colour": "NaYeon",
  "r": 38,
  "g": 39,
  "b": 41,
  "rgb": "rgb(38, 39, 41)",
  "hex": "#262729"
}, {
  "value": "rgb(46.0,43.0,38.0)",
  "brand": "Kat Von D",
  "colour": "Slayer",
  "r": 46,
  "g": 43,
  "b": 38,
  "rgb": "rgb(46, 43, 38)",
  "hex": "#2e2b26"
}, {
  "value": "rgb(255.0,255.0,255.0)",
  "brand": "Kat Von D",
  "colour": "White Out",
  "r": 255,
  "g": 255,
  "b": 255,
  "rgb": "rgb(255, 255, 255)",
  "hex": "#ffffff"
}, {
  "value": "rgb(186.0,85.0,211.0)",
  "brand": "Maybelline",
  "colour": "Berry Bossy",
  "r": 186,
  "g": 85,
  "b": 211,
  "rgb": "rgb(186, 85, 211)",
  "hex": "#ba55d3"
}, {
  "value": "rgb(255.0,105.0,180.0)",
  "brand": "Maybelline",
  "colour": "Fiery Fuchsia",
  "r": 255,
  "g": 105,
  "b": 180,
  "rgb": "rgb(255, 105, 180)",
  "hex": "#ff69b4"
}, {
  "value": "rgb(75.0,0.0,130.0)",
  "brand": "Maybelline",
  "colour": "Midnight Merlot",
  "r": 75,
  "g": 0,
  "b": 130,
  "rgb": "rgb(75, 0, 130)",
  "hex": "#4b0082"
}, {
  "value": "rgb(255.0,69.0,0.0)",
  "brand": "Maybelline",
  "colour": "Orange Danger",
  "r": 255,
  "g": 69,
  "b": 0,
  "rgb": "rgb(255, 69, 0)",
  "hex": "#ff4500"
}, {
  "value": "rgb(85.0,26.0,139.0)",
  "brand": "Maybelline",
  "colour": "Blackest Berry",
  "r": 85,
  "g": 26,
  "b": 139,
  "rgb": "rgb(85, 26, 139)",
  "hex": "#551a8b"
}, {
  "value": "rgb(216.0,191.0,216.0)",
  "brand": "Maybelline",
  "colour": "Gone Greige",
  "r": 216,
  "g": 191,
  "b": 216,
  "rgb": "rgb(216, 191, 216)",
  "hex": "#d8bfd8"
}, {
  "value": "rgb(58.0,102.0,167.0)",
  "brand": "Maybelline",
  "colour": "Midnight Blue",
  "r": 58,
  "g": 102,
  "b": 167,
  "rgb": "rgb(58, 102, 167)",
  "hex": "#3a66a7"
}, {
  "value": "rgb(0.0,0.0,0.0)",
  "brand": "Maybelline",
  "colour": "Pitch Black",
  "r": 0,
  "g": 0,
  "b": 0,
  "rgb": "rgb(0, 0, 0)",
  "hex": "#000000"
}, {
  "value": "rgb(13.0,79.0,139.0)",
  "brand": "Maybelline",
  "colour": "Sapphire Siren",
  "r": 13,
  "g": 79,
  "b": 139,
  "rgb": "rgb(13, 79, 139)",
  "hex": "#0d4f8b"
}, {
  "value": "rgb(153.0,50.0,204.0)",
  "brand": "Maybelline",
  "colour": "Vivid Vixen",
  "r": 153,
  "g": 50,
  "b": 204,
  "rgb": "rgb(153, 50, 204)",
  "hex": "#9932cc"
}, {
  "value": "rgb(155.0,55.0,113.0)",
  "brand": "Maybelline",
  "colour": "Galactic Mauve",
  "r": 155,
  "g": 55,
  "b": 113,
  "rgb": "rgb(155, 55, 113)",
  "hex": "#9b3771"
}, {
  "value": "rgb(231.0,73.0,129.0)",
  "brand": "Maybelline",
  "colour": "Summer Pink",
  "r": 231,
  "g": 73,
  "b": 129,
  "rgb": "rgb(231, 73, 129)",
  "hex": "#e74981"
}, {
  "value": "rgb(233.0,94.0,152.0)",
  "brand": "Maybelline",
  "colour": "Stellar Pink",
  "r": 233,
  "g": 94,
  "b": 152,
  "rgb": "rgb(233, 94, 152)",
  "hex": "#e95e98"
}, {
  "value": "rgb(209.0,0.0,86.0)",
  "brand": "Maybelline",
  "colour": "Pink Punch",
  "r": 209,
  "g": 0,
  "b": 86,
  "rgb": "rgb(209, 0, 86)",
  "hex": "#d10056"
}, {
  "value": "rgb(175.0,11.0,55.0)",
  "brand": "Maybelline",
  "colour": "Fatal Red",
  "r": 175,
  "g": 11,
  "b": 55,
  "rgb": "rgb(175, 11, 55)",
  "hex": "#af0b37"
}, {
  "value": "rgb(210.0,0.0,68.0)",
  "brand": "Maybelline",
  "colour": "Pleasure Me Red",
  "r": 210,
  "g": 0,
  "b": 68,
  "rgb": "rgb(210, 0, 68)",
  "hex": "#d20044"
}, {
  "value": "rgb(255.0,20.0,147.0)",
  "brand": "Maybelline",
  "colour": "Fuschia Flash",
  "r": 255,
  "g": 20,
  "b": 147,
  "rgb": "rgb(255, 20, 147)",
  "hex": "#ff1493"
}, {
  "value": "rgb(236.0,160.0,179.0)",
  "brand": "Maybelline",
  "colour": "Blushing Pout",
  "r": 236,
  "g": 160,
  "b": 179,
  "rgb": "rgb(236, 160, 179)",
  "hex": "#eca0b3"
}, {
  "value": "rgb(145.0,80.0,74.0)",
  "brand": "Maybelline",
  "colour": "Burgundy Blush",
  "r": 145,
  "g": 80,
  "b": 74,
  "rgb": "rgb(145, 80, 74)",
  "hex": "#91504a"
}, {
  "value": "rgb(220.0,141.0,125.0)",
  "brand": "Maybelline",
  "colour": "Clay Crush",
  "r": 220,
  "g": 141,
  "b": 125,
  "rgb": "rgb(220, 141, 125)",
  "hex": "#dc8d7d"
}, {
  "value": "rgb(205.0,47.0,48.0)",
  "brand": "Maybelline",
  "colour": "Craving Coral",
  "r": 205,
  "g": 47,
  "b": 48,
  "rgb": "rgb(205, 47, 48)",
  "hex": "#cd2f30"
}, {
  "value": "rgb(84.0,33.0,41.0)",
  "brand": "Maybelline",
  "colour": "Divine Wine",
  "r": 84,
  "g": 33,
  "b": 41,
  "rgb": "rgb(84, 33, 41)",
  "hex": "#542129"
}, {
  "value": "rgb(187.0,127.0,111.0)",
  "brand": "Maybelline",
  "colour": "Nude Embrace",
  "r": 187,
  "g": 127,
  "b": 111,
  "rgb": "rgb(187, 127, 111)",
  "hex": "#bb7f6f"
}, {
  "value": "rgb(217.0,140.0,130.0)",
  "brand": "Maybelline",
  "colour": "Beige Babe",
  "r": 217,
  "g": 140,
  "b": 130,
  "rgb": "rgb(217, 140, 130)",
  "hex": "#d98c82"
}, {
  "value": "rgb(210.0,105.0,30.0)",
  "brand": "Maybelline",
  "colour": "Brown Sugar",
  "r": 210,
  "g": 105,
  "b": 30,
  "rgb": "rgb(210, 105, 30)",
  "hex": "#d2691e"
}, {
  "value": "rgb(206.0,131.0,112.0)",
  "brand": "Maybelline",
  "colour": "Melted Chocolate",
  "r": 206,
  "g": 131,
  "b": 112,
  "rgb": "rgb(206, 131, 112)",
  "hex": "#ce8370"
}, {
  "value": "rgb(209.0,135.0,129.0)",
  "brand": "Maybelline",
  "colour": "Peach Buff",
  "r": 209,
  "g": 135,
  "b": 129,
  "rgb": "rgb(209, 135, 129)",
  "hex": "#d18781"
}, {
  "value": "rgb(206.0,134.0,109.0)",
  "brand": "Maybelline",
  "colour": "Purely Nude",
  "r": 206,
  "g": 134,
  "b": 109,
  "rgb": "rgb(206, 134, 109)",
  "hex": "#ce866d"
}, {
  "value": "rgb(215.0,121.0,119.0)",
  "brand": "Maybelline",
  "colour": "Smoky Rose",
  "r": 215,
  "g": 121,
  "b": 119,
  "rgb": "rgb(215, 121, 119)",
  "hex": "#d77977"
}, {
  "value": "rgb(165.0,90.0,98.0)",
  "brand": "Maybelline",
  "colour": "Velvet Beige",
  "r": 165,
  "g": 90,
  "b": 98,
  "rgb": "rgb(165, 90, 98)",
  "hex": "#a55a62"
}, {
  "value": "rgb(180.0,132.0,132.0)",
  "brand": "Maybelline",
  "colour": "Mauve Mania",
  "r": 180,
  "g": 132,
  "b": 132,
  "rgb": "rgb(180, 132, 132)",
  "hex": "#b48484"
}, {
  "value": "rgb(98.0,42.0,84.0)",
  "brand": "Maybelline",
  "colour": "Midnight Plum",
  "r": 98,
  "g": 42,
  "b": 84,
  "rgb": "rgb(98, 42, 84)",
  "hex": "#622a54"
}, {
  "value": "rgb(255.0,192.0,203.0)",
  "brand": "Maybelline",
  "colour": "Peach and Poppy",
  "r": 255,
  "g": 192,
  "b": 203,
  "rgb": "rgb(255, 192, 203)",
  "hex": "#ffc0cb"
}, {
  "value": "rgb(186.0,85.0,211.0)",
  "brand": "Maybelline",
  "colour": "Plum Passion",
  "r": 186,
  "g": 85,
  "b": 211,
  "rgb": "rgb(186, 85, 211)",
  "hex": "#ba55d3"
}, {
  "value": "rgb(233.0,119.0,188.0)",
  "brand": "Maybelline",
  "colour": "Power Peony",
  "r": 233,
  "g": 119,
  "b": 188,
  "rgb": "rgb(233, 119, 188)",
  "hex": "#e977bc"
}, {
  "value": "rgb(205.0,0.0,0.0)",
  "brand": "Maybelline",
  "colour": "Ravishing Rose",
  "r": 205,
  "g": 0,
  "b": 0,
  "rgb": "rgb(205, 0, 0)",
  "hex": "#cd0000"
}, {
  "value": "rgb(212.0,0.0,62.0)",
  "brand": "Maybelline",
  "colour": "Red Revolution",
  "r": 212,
  "g": 0,
  "b": 62,
  "rgb": "rgb(212, 0, 62)",
  "hex": "#d4003e"
}, {
  "value": "rgb(147.0,61.0,96.0)",
  "brand": "Maybelline",
  "colour": "Sugar Plum",
  "r": 147,
  "g": 61,
  "b": 96,
  "rgb": "rgb(147, 61, 96)",
  "hex": "#933d60"
}, {
  "value": "rgb(189.0,65.0,55.0)",
  "brand": "Maybelline",
  "colour": "Rich Ruby",
  "r": 189,
  "g": 65,
  "b": 55,
  "rgb": "rgb(189, 65, 55)",
  "hex": "#bd4137"
}, {
  "value": "rgb(162.0,26.0,31.0)",
  "brand": "Maybelline",
  "colour": "Siren in Scarlet",
  "r": 162,
  "g": 26,
  "b": 31,
  "rgb": "rgb(162, 26, 31)",
  "hex": "#a21a1f"
}, {
  "value": "rgb(181.0,72.0,111.0)",
  "brand": "Maybelline",
  "colour": "Treat Yourself",
  "r": 181,
  "g": 72,
  "b": 111,
  "rgb": "rgb(181, 72, 111)",
  "hex": "#b5486f"
}, {
  "value": "rgb(99.0,61.0,60.0)",
  "brand": "Maybelline",
  "colour": "Live on the Edge",
  "r": 99,
  "g": 61,
  "b": 60,
  "rgb": "rgb(99, 61, 60)",
  "hex": "#633d3c"
}, {
  "value": "rgb(158.0,110.0,108.0)",
  "brand": "Maybelline",
  "colour": "Lead the Way",
  "r": 158,
  "g": 110,
  "b": 108,
  "rgb": "rgb(158, 110, 108)",
  "hex": "#9e6e6c"
}, {
  "value": "rgb(156.0,99.0,92.0)",
  "brand": "Maybelline",
  "colour": "Enjoy the View",
  "r": 156,
  "g": 99,
  "b": 92,
  "rgb": "rgb(156, 99, 92)",
  "hex": "#9c635c"
}, {
  "value": "rgb(146.0,92.0,105.0)",
  "brand": "Maybelline",
  "colour": "Stay Exceptional",
  "r": 146,
  "g": 92,
  "b": 105,
  "rgb": "rgb(146, 92, 105)",
  "hex": "#925c69"
}, {
  "value": "rgb(187.0,121.0,135.0)",
  "brand": "Maybelline",
  "colour": "Seek Adventure",
  "r": 187,
  "g": 121,
  "b": 135,
  "rgb": "rgb(187, 121, 135)",
  "hex": "#bb7987"
}, {
  "value": "rgb(182.0,78.0,67.0)",
  "brand": "Maybelline",
  "colour": "Laugh Louder",
  "r": 182,
  "g": 78,
  "b": 67,
  "rgb": "rgb(182, 78, 67)",
  "hex": "#b64e43"
}, {
  "value": "rgb(175.0,65.0,66.0)",
  "brand": "Maybelline",
  "colour": "Hustle in Heels",
  "r": 175,
  "g": 65,
  "b": 66,
  "rgb": "rgb(175, 65, 66)",
  "hex": "#af4142"
}, {
  "value": "rgb(157.0,50.0,66.0)",
  "brand": "Maybelline",
  "colour": "Own Your Empire",
  "r": 157,
  "g": 50,
  "b": 66,
  "rgb": "rgb(157, 50, 66)",
  "hex": "#9d3242"
}, {
  "value": "rgb(115.0,41.0,54.0)",
  "brand": "Maybelline",
  "colour": "Make It Happen",
  "r": 115,
  "g": 41,
  "b": 54,
  "rgb": "rgb(115, 41, 54)",
  "hex": "#732936"
}, {
  "value": "rgb(212.0,59.0,60.0)",
  "brand": "Revlon",
  "colour": "HD Lava",
  "r": 212,
  "g": 59,
  "b": 60,
  "rgb": "rgb(212, 59, 60)",
  "hex": "#d43b3c"
}, {
  "value": "rgb(180.0,43.0,69.0)",
  "brand": "Revlon",
  "colour": "HD Rhubarb",
  "r": 180,
  "g": 43,
  "b": 69,
  "rgb": "rgb(180, 43, 69)",
  "hex": "#b42b45"
}, {
  "value": "rgb(155.0,47.0,57.0)",
  "brand": "Revlon",
  "colour": "HD Adobe",
  "r": 155,
  "g": 47,
  "b": 57,
  "rgb": "rgb(155, 47, 57)",
  "hex": "#9b2f39"
}, {
  "value": "rgb(120.0,63.0,55.0)",
  "brand": "Revlon",
  "colour": "HD Arabica",
  "r": 120,
  "g": 63,
  "b": 55,
  "rgb": "rgb(120, 63, 55)",
  "hex": "#783f37"
}, {
  "value": "rgb(127.0,46.0,116.0)",
  "brand": "Revlon",
  "colour": "HD Twilight",
  "r": 127,
  "g": 46,
  "b": 116,
  "rgb": "rgb(127, 46, 116)",
  "hex": "#7f2e74"
}, {
  "value": "rgb(187.0,79.0,107.0)",
  "brand": "Revlon",
  "colour": "HD Vineyard",
  "r": 187,
  "g": 79,
  "b": 107,
  "rgb": "rgb(187, 79, 107)",
  "hex": "#bb4f6b"
}, {
  "value": "rgb(228.0,90.0,154.0)",
  "brand": "Revlon",
  "colour": "HD Tropical",
  "r": 228,
  "g": 90,
  "b": 154,
  "rgb": "rgb(228, 90, 154)",
  "hex": "#e45a9a"
}, {
  "value": "rgb(233.0,130.0,150.0)",
  "brand": "Revlon",
  "colour": "HD Pink Cloud",
  "r": 233,
  "g": 130,
  "b": 150,
  "rgb": "rgb(233, 130, 150)",
  "hex": "#e98296"
}, {
  "value": "rgb(242.0,131.0,145.0)",
  "brand": "Revlon",
  "colour": "HD Coral",
  "r": 242,
  "g": 131,
  "b": 145,
  "rgb": "rgb(242, 131, 145)",
  "hex": "#f28391"
}, {
  "value": "rgb(194.0,115.0,114.0)",
  "brand": "Revlon",
  "colour": "HD Sand",
  "r": 194,
  "g": 115,
  "b": 114,
  "rgb": "rgb(194, 115, 114)",
  "hex": "#c27372"
}, {
  "value": "rgb(194.0,115.0,114.0)",
  "brand": "Revlon",
  "colour": "HD Desert",
  "r": 194,
  "g": 115,
  "b": 114,
  "rgb": "rgb(194, 115, 114)",
  "hex": "#c27372"
}, {
  "value": "rgb(182.0,98.0,110.0)",
  "brand": "Revlon",
  "colour": "HD Dawn",
  "r": 182,
  "g": 98,
  "b": 110,
  "rgb": "rgb(182, 98, 110)",
  "hex": "#b6626e"
}, {
  "value": "rgb(203.0,132.0,124.0)",
  "brand": "Revlon",
  "colour": "Bare Affair",
  "r": 203,
  "g": 132,
  "b": 124,
  "rgb": "rgb(203, 132, 124)",
  "hex": "#cb847c"
}, {
  "value": "rgb(151.0,5.0,66.0)",
  "brand": "Revlon",
  "colour": "Bombshell Red",
  "r": 151,
  "g": 5,
  "b": 66,
  "rgb": "rgb(151, 5, 66)",
  "hex": "#970542"
}, {
  "value": "rgb(119.0,77.0,81.0)",
  "brand": "Revlon",
  "colour": "Naughty Plum",
  "r": 119,
  "g": 77,
  "b": 81,
  "rgb": "rgb(119, 77, 81)",
  "hex": "#774d51"
}, {
  "value": "rgb(239.0,75.0,39.0)",
  "brand": "Revlon",
  "colour": "Carnival Spirit",
  "r": 239,
  "g": 75,
  "b": 39,
  "rgb": "rgb(239, 75, 39)",
  "hex": "#ef4b27"
}, {
  "value": "rgb(249.0,170.0,137.0)",
  "brand": "Revlon",
  "colour": "smoked peach",
  "r": 249,
  "g": 170,
  "b": 137,
  "rgb": "rgb(249, 170, 137)",
  "hex": "#f9aa89"
}, {
  "value": "rgb(241.0,102.0,105.0)",
  "brand": "Revlon",
  "colour": "Lovers Coral",
  "r": 241,
  "g": 102,
  "b": 105,
  "rgb": "rgb(241, 102, 105)",
  "hex": "#f16669"
}, {
  "value": "rgb(249.0,195.0,196.0)",
  "brand": "Revlon",
  "colour": "Ipanema Beach",
  "r": 249,
  "g": 195,
  "b": 196,
  "rgb": "rgb(249, 195, 196)",
  "hex": "#f9c3c4"
}, {
  "value": "rgb(255.0,132.0,183.0)",
  "brand": "Revlon",
  "colour": "Kiss Me Coral",
  "r": 255,
  "g": 132,
  "b": 183,
  "rgb": "rgb(255, 132, 183)",
  "hex": "#ff84b7"
}, {
  "value": "rgb(239.0,169.0,169.0)",
  "brand": "Revlon",
  "colour": "Sky Line Pink",
  "r": 239,
  "g": 169,
  "b": 169,
  "rgb": "rgb(239, 169, 169)",
  "hex": "#efa9a9"
}, {
  "value": "rgb(186.0,9.0,62.0)",
  "brand": "Revlon",
  "colour": "Cherry Blossom",
  "r": 186,
  "g": 9,
  "b": 62,
  "rgb": "rgb(186, 9, 62)",
  "hex": "#ba093e"
}, {
  "value": "rgb(211.0,24.0,35.0)",
  "brand": "Revlon",
  "colour": "Fire & Ice",
  "r": 211,
  "g": 24,
  "b": 35,
  "rgb": "rgb(211, 24, 35)",
  "hex": "#d31823"
}, {
  "value": "rgb(215.0,31.0,57.0)",
  "brand": "Revlon",
  "colour": "Revlon Red",
  "r": 215,
  "g": 31,
  "b": 57,
  "rgb": "rgb(215, 31, 57)",
  "hex": "#d71f39"
}, {
  "value": "rgb(183.0,121.0,123.0)",
  "brand": "Revlon",
  "colour": "Pink Pearl",
  "r": 183,
  "g": 121,
  "b": 123,
  "rgb": "rgb(183, 121, 123)",
  "hex": "#b7797b"
}, {
  "value": "rgb(152.0,84.0,77.0)",
  "brand": "Revlon",
  "colour": "Mink",
  "r": 152,
  "g": 84,
  "b": 77,
  "rgb": "rgb(152, 84, 77)",
  "hex": "#98544d"
}, {
  "value": "rgb(90.0,87.0,200.0)",
  "brand": "Revlon",
  "colour": "Va Va Violet",
  "r": 90,
  "g": 87,
  "b": 200,
  "rgb": "rgb(90, 87, 200)",
  "hex": "#5a57c8"
}, {
  "value": "rgb(50.0,21.0,4.0)",
  "brand": "Revlon",
  "colour": "Choco-Liscious",
  "r": 50,
  "g": 21,
  "b": 4,
  "rgb": "rgb(50, 21, 4)",
  "hex": "#321504"
}, {
  "value": "rgb(209.0,70.0,132.0)",
  "brand": "Revlon",
  "colour": "Amethyst Shell",
  "r": 209,
  "g": 70,
  "b": 132,
  "rgb": "rgb(209, 70, 132)",
  "hex": "#d14684"
}, {
  "value": "rgb(235.0,139.0,134.0)",
  "brand": "Revlon",
  "colour": "Pink In The Afternoon",
  "r": 235,
  "g": 139,
  "b": 134,
  "rgb": "rgb(235, 139, 134)",
  "hex": "#eb8b86"
}, {
  "value": "rgb(206.0,0.0,74.0)",
  "brand": "Revlon",
  "colour": "Cherries In The Snow",
  "r": 206,
  "g": 0,
  "b": 74,
  "rgb": "rgb(206, 0, 74)",
  "hex": "#ce004a"
}, {
  "value": "rgb(241.0,97.0,134.0)",
  "brand": "Revlon",
  "colour": "Soft Silver Rose",
  "r": 241,
  "g": 97,
  "b": 134,
  "rgb": "rgb(241, 97, 134)",
  "hex": "#f16186"
}, {
  "value": "rgb(194.0,133.0,149.0)",
  "brand": "Revlon",
  "colour": "Cappucino",
  "r": 194,
  "g": 133,
  "b": 149,
  "rgb": "rgb(194, 133, 149)",
  "hex": "#c28595"
}, {
  "value": "rgb(121.0,64.0,79.0)",
  "brand": "Revlon",
  "colour": "Rich Raisin Frost",
  "r": 121,
  "g": 64,
  "b": 79,
  "rgb": "rgb(121, 64, 79)",
  "hex": "#79404f"
}, {
  "value": "rgb(196.0,58.0,72.0)",
  "brand": "Revlon",
  "colour": "Cinnamon Bronze",
  "r": 196,
  "g": 58,
  "b": 72,
  "rgb": "rgb(196, 58, 72)",
  "hex": "#c43a48"
}, {
  "value": "rgb(214.0,106.0,104.0)",
  "brand": "Revlon",
  "colour": "Blushed",
  "r": 214,
  "g": 106,
  "b": 104,
  "rgb": "rgb(214, 106, 104)",
  "hex": "#d66a68"
}, {
  "value": "rgb(177.0,82.0,42.0)",
  "brand": "Revlon",
  "colour": "Smoky Rose",
  "r": 177,
  "g": 82,
  "b": 42,
  "rgb": "rgb(177, 82, 42)",
  "hex": "#b1522a"
}, {
  "value": "rgb(213.0,131.0,118.0)",
  "brand": "Revlon",
  "colour": "Caramel Glac??",
  "r": 213,
  "g": 131,
  "b": 118,
  "rgb": "rgb(213, 131, 118)",
  "hex": "#d58376"
}, {
  "value": "rgb(255.0,132.0,183.0)",
  "brand": "Revlon",
  "colour": "Gentlemen Prefer Pink",
  "r": 255,
  "g": 132,
  "b": 183,
  "rgb": "rgb(255, 132, 183)",
  "hex": "#ff84b7"
}, {
  "value": "rgb(208.0,71.0,153.0)",
  "brand": "Revlon",
  "colour": "Wild Orchid",
  "r": 208,
  "g": 71,
  "b": 153,
  "rgb": "rgb(208, 71, 153)",
  "hex": "#d04799"
}, {
  "value": "rgb(209.0,103.0,103.0)",
  "brand": "Revlon",
  "colour": "Blushing Mauve",
  "r": 209,
  "g": 103,
  "b": 103,
  "rgb": "rgb(209, 103, 103)",
  "hex": "#d16767"
}, {
  "value": "rgb(188.0,80.0,111.0)",
  "brand": "Revlon",
  "colour": "Sassy Mauve",
  "r": 188,
  "g": 80,
  "b": 111,
  "rgb": "rgb(188, 80, 111)",
  "hex": "#bc506f"
}, {
  "value": "rgb(188.0,69.0,74.0)",
  "brand": "Revlon",
  "colour": "Copper Frost",
  "r": 188,
  "g": 69,
  "b": 74,
  "rgb": "rgb(188, 69, 74)",
  "hex": "#bc454a"
}, {
  "value": "rgb(96.0,8.0,37.0)",
  "brand": "Revlon",
  "colour": "Black Cherry",
  "r": 96,
  "g": 8,
  "b": 37,
  "rgb": "rgb(96, 8, 37)",
  "hex": "#600825"
}, {
  "value": "rgb(246.0,177.0,151.0)",
  "brand": "Revlon",
  "colour": "nude attitude",
  "r": 246,
  "g": 177,
  "b": 151,
  "rgb": "rgb(246, 177, 151)",
  "hex": "#f6b197"
}, {
  "value": "rgb(233.0,164.0,195.0)",
  "brand": "Revlon",
  "colour": "pink pout",
  "r": 233,
  "g": 164,
  "b": 195,
  "rgb": "rgb(233, 164, 195)",
  "hex": "#e9a4c3"
}, {
  "value": "rgb(236.0,0.0,139.0)",
  "brand": "Revlon",
  "colour": "Sultry Samba",
  "r": 236,
  "g": 0,
  "b": 139,
  "rgb": "rgb(236, 0, 139)",
  "hex": "#ec008b"
}, {
  "value": "rgb(194.0,25.0,25.0)",
  "brand": "Revlon",
  "colour": "Really Red",
  "r": 194,
  "g": 25,
  "b": 25,
  "rgb": "rgb(194, 25, 25)",
  "hex": "#c21919"
}, {
  "value": "rgb(153.0,30.0,32.0)",
  "brand": "Revlon",
  "colour": "LOVE IS ON",
  "r": 153,
  "g": 30,
  "b": 32,
  "rgb": "rgb(153, 30, 32)",
  "hex": "#991e20"
}, {
  "value": "rgb(203.0,132.0,124.0)",
  "brand": "Revlon",
  "colour": "Bare Affair",
  "r": 203,
  "g": 132,
  "b": 124,
  "rgb": "rgb(203, 132, 124)",
  "hex": "#cb847c"
}, {
  "value": "rgb(156.0,56.0,137.0)",
  "brand": "L'Or??al Paris",
  "colour": "Burnished",
  "r": 156,
  "g": 56,
  "b": 137,
  "rgb": "rgb(156, 56, 137)",
  "hex": "#9c3889"
}, {
  "value": "rgb(184.0,134.0,11.0)",
  "brand": "L'Or??al Paris",
  "colour": "Brass",
  "r": 184,
  "g": 134,
  "b": 11,
  "rgb": "rgb(184, 134, 11)",
  "hex": "#b8860b"
}, {
  "value": "rgb(128.0,0.0,32.0)",
  "brand": "L'Or??al Paris",
  "colour": "Bronze",
  "r": 128,
  "g": 0,
  "b": 32,
  "rgb": "rgb(128, 0, 32)",
  "hex": "#800020"
}, {
  "value": "rgb(184.0,115.0,51.0)",
  "brand": "L'Or??al Paris",
  "colour": "Copper",
  "r": 184,
  "g": 115,
  "b": 51,
  "rgb": "rgb(184, 115, 51)",
  "hex": "#b87333"
}, {
  "value": "rgb(186.0,85.0,77.0)",
  "brand": "L'Or??al Paris",
  "colour": "Beige A Nu 630",
  "r": 186,
  "g": 85,
  "b": 77,
  "rgb": "rgb(186, 85, 77)",
  "hex": "#ba554d"
}, {
  "value": "rgb(206.0,0.0,15.0)",
  "brand": "L'Or??al Paris",
  "colour": "Red Carpet 357",
  "r": 206,
  "g": 0,
  "b": 15,
  "rgb": "rgb(206, 0, 15)",
  "hex": "#ce000f"
}, {
  "value": "rgb(142.0,39.0,88.0)",
  "brand": "L'Or??al Paris",
  "colour": "216 Permanent Plum",
  "r": 142,
  "g": 39,
  "b": 88,
  "rgb": "rgb(142, 39, 88)",
  "hex": "#8e2758"
}, {
  "value": "rgb(160.0,100.0,87.0)",
  "brand": "L'Or??al Paris",
  "colour": "114 Ever Nude",
  "r": 160,
  "g": 100,
  "b": 87,
  "rgb": "rgb(160, 100, 87)",
  "hex": "#a06457"
}, {
  "value": "rgb(170.0,101.0,92.0)",
  "brand": "L'Or??al Paris",
  "colour": "115 Infinitely Mocha",
  "r": 170,
  "g": 101,
  "b": 92,
  "rgb": "rgb(170, 101, 92)",
  "hex": "#aa655c"
}, {
  "value": "rgb(185.0,106.0,87.0)",
  "brand": "L'Or??al Paris",
  "colour": "116 Beige To Stay",
  "r": 185,
  "g": 106,
  "b": 87,
  "rgb": "rgb(185, 106, 87)",
  "hex": "#b96a57"
}, {
  "value": "rgb(81.0,33.0,20.0)",
  "brand": "L'Or??al Paris",
  "colour": "117 Perpetual Brown",
  "r": 81,
  "g": 33,
  "b": 20,
  "rgb": "rgb(81, 33, 20)",
  "hex": "#512114"
}, {
  "value": "rgb(186.0,86.0,95.0)",
  "brand": "L'Or??al Paris",
  "colour": "125 Born To Blush",
  "r": 186,
  "g": 86,
  "b": 95,
  "rgb": "rgb(186, 86, 95)",
  "hex": "#ba565f"
}, {
  "value": "rgb(111.0,33.0,62.0)",
  "brand": "L'Or??al Paris",
  "colour": "217 Eternal Vamp",
  "r": 111,
  "g": 33,
  "b": 62,
  "rgb": "rgb(111, 33, 62)",
  "hex": "#6f213e"
}, {
  "value": "rgb(173.0,67.0,85.0)",
  "brand": "L'Or??al Paris",
  "colour": "218 Wandering Wildberry",
  "r": 173,
  "g": 67,
  "b": 85,
  "rgb": "rgb(173, 67, 85)",
  "hex": "#ad4355"
}, {
  "value": "rgb(205.0,0.0,0.0)",
  "brand": "L'Or??al Paris",
  "colour": "Insanesation",
  "r": 205,
  "g": 0,
  "b": 0,
  "rgb": "rgb(205, 0, 0)",
  "hex": "#cd0000"
}, {
  "value": "rgb(255.0,255.0,255.0)",
  "brand": "L'Or??al Paris",
  "colour": "#BAE",
  "r": 255,
  "g": 255,
  "b": 255,
  "rgb": "rgb(255, 255, 255)",
  "hex": "#ffffff"
}, {
  "value": "rgb(255.0,0.0,0.0)",
  "brand": "L'Or??al Paris",
  "colour": "#BEAUTYGURU",
  "r": 255,
  "g": 0,
  "b": 0,
  "rgb": "rgb(255, 0, 0)",
  "hex": "#ff0000"
}, {
  "value": "rgb(230.0,230.0,250.0)",
  "brand": "L'Or??al Paris",
  "colour": "#GIRLSNIGHT",
  "r": 230,
  "g": 230,
  "b": 250,
  "rgb": "rgb(230, 230, 250)",
  "hex": "#e6e6fa"
}, {
  "value": "rgb(160.0,32.0,240.0)",
  "brand": "L'Or??al Paris",
  "colour": "#LIKEABOSS",
  "r": 160,
  "g": 32,
  "b": 240,
  "rgb": "rgb(160, 32, 240)",
  "hex": "#a020f0"
}, {
  "value": "rgb(160.0,82.0,45.0)",
  "brand": "L'Or??al Paris",
  "colour": "#MLBB",
  "r": 160,
  "g": 82,
  "b": 45,
  "rgb": "rgb(160, 82, 45)",
  "hex": "#a0522d"
}, {
  "value": "rgb(255.0,20.0,147.0)",
  "brand": "L'Or??al Paris",
  "colour": "#TRENDING",
  "r": 255,
  "g": 20,
  "b": 147,
  "rgb": "rgb(255, 20, 147)",
  "hex": "#ff1493"
}, {
  "value": "rgb(205.0,115.0,93.0)",
  "brand": "L'Or??al Paris",
  "colour": "Beige In The City",
  "r": 205,
  "g": 115,
  "b": 93,
  "rgb": "rgb(205, 115, 93)",
  "hex": "#cd735d"
}, {
  "value": "rgb(202.0,128.0,115.0)",
  "brand": "L'Or??al Paris",
  "colour": "Blush My Baby",
  "r": 202,
  "g": 128,
  "b": 115,
  "rgb": "rgb(202, 128, 115)",
  "hex": "#ca8073"
}, {
  "value": "rgb(225.0,39.0,95.0)",
  "brand": "L'Or??al Paris",
  "colour": "Color Hype",
  "r": 225,
  "g": 39,
  "b": 95,
  "rgb": "rgb(225, 39, 95)",
  "hex": "#e1275f"
}, {
  "value": "rgb(228.0,154.0,129.0)",
  "brand": "L'Or??al Paris",
  "colour": "Get Naked",
  "r": 228,
  "g": 154,
  "b": 129,
  "rgb": "rgb(228, 154, 129)",
  "hex": "#e49a81"
}, {
  "value": "rgb(202.0,145.0,106.0)",
  "brand": "L'Or??al Paris",
  "colour": "Glow Mon Amour",
  "r": 202,
  "g": 145,
  "b": 106,
  "rgb": "rgb(202, 145, 106)",
  "hex": "#ca916a"
}, {
  "value": "rgb(238.0,106.0,80.0)",
  "brand": "L'Or??al Paris",
  "colour": "High on Craze",
  "r": 238,
  "g": 106,
  "b": 80,
  "rgb": "rgb(238, 106, 80)",
  "hex": "#ee6a50"
}, {
  "value": "rgb(139.0,69.0,19.0)",
  "brand": "L'Or??al Paris",
  "colour": "Hot IRL",
  "r": 139,
  "g": 69,
  "b": 19,
  "rgb": "rgb(139, 69, 19)",
  "hex": "#8b4513"
}, {
  "value": "rgb(128.0,0.0,96.0)",
  "brand": "L'Or??al Paris",
  "colour": "Map to Nirvana",
  "r": 128,
  "g": 0,
  "b": 96,
  "rgb": "rgb(128, 0, 96)",
  "hex": "#800060"
}, {
  "value": "rgb(249.0,139.0,136.0)",
  "brand": "L'Or??al Paris",
  "colour": "Only in Paris",
  "r": 249,
  "g": 139,
  "b": 136,
  "rgb": "rgb(249, 139, 136)",
  "hex": "#f98b88"
}, {
  "value": "rgb(229.0,132.0,104.0)",
  "brand": "L'Or??al Paris",
  "colour": "Peach On The Beach",
  "r": 229,
  "g": 132,
  "b": 104,
  "rgb": "rgb(229, 132, 104)",
  "hex": "#e58468"
}, {
  "value": "rgb(242.0,59.0,28.0)",
  "brand": "L'Or??al Paris",
  "colour": "Pursue Pretty",
  "r": 242,
  "g": 59,
  "b": 28,
  "rgb": "rgb(242, 59, 28)",
  "hex": "#f23b1c"
}, {
  "value": "rgb(228.0,171.0,140.0)",
  "brand": "L'Or??al Paris",
  "colour": "Steal The Sun",
  "r": 228,
  "g": 171,
  "b": 140,
  "rgb": "rgb(228, 171, 140)",
  "hex": "#e4ab8c"
}, {
  "value": "rgb(178.0,104.0,141.0)",
  "brand": "L'Or??al Paris",
  "colour": "471 Voodoo",
  "r": 178,
  "g": 104,
  "b": 141,
  "rgb": "rgb(178, 104, 141)",
  "hex": "#b2688d"
}, {
  "value": "rgb(242.0,0.0,39.0)",
  "brand": "L'Or??al Paris",
  "colour": "358 Lava",
  "r": 242,
  "g": 0,
  "b": 39,
  "rgb": "rgb(242, 0, 39)",
  "hex": "#f20027"
}, {
  "value": "rgb(191.0,68.0,133.0)",
  "brand": "L'Or??al Paris",
  "colour": "472 Purple Studs",
  "r": 191,
  "g": 68,
  "b": 133,
  "rgb": "rgb(191, 68, 133)",
  "hex": "#bf4485"
}, {
  "value": "rgb(104.0,57.0,75.0)",
  "brand": "L'Or??al Paris",
  "colour": "473 Obsidian",
  "r": 104,
  "g": 57,
  "b": 75,
  "rgb": "rgb(104, 57, 75)",
  "hex": "#68394b"
}, {
  "value": "rgb(208.0,143.0,123.0)",
  "brand": "L'Or??al Paris",
  "colour": "652 Stone",
  "r": 208,
  "g": 143,
  "b": 123,
  "rgb": "rgb(208, 143, 123)",
  "hex": "#d08f7b"
}, {
  "value": "rgb(136.0,78.0,77.0)",
  "brand": "L'Or??al Paris",
  "colour": "654 Bronze Sautoir",
  "r": 136,
  "g": 78,
  "b": 77,
  "rgb": "rgb(136, 78, 77)",
  "hex": "#884e4d"
}, {
  "value": "rgb(181.0,74.0,58.0)",
  "brand": "L'Or??al Paris",
  "colour": "655 Copper Clutch",
  "r": 181,
  "g": 74,
  "b": 58,
  "rgb": "rgb(181, 74, 58)",
  "hex": "#b54a3a"
}, {
  "value": "rgb(155.0,118.0,125.0)",
  "brand": "L'Or??al Paris",
  "colour": "908 Storm",
  "r": 155,
  "g": 118,
  "b": 125,
  "rgb": "rgb(155, 118, 125)",
  "hex": "#9b767d"
}, {
  "value": "rgb(125.0,186.0,168.0)",
  "brand": "L'Or??al Paris",
  "colour": "909 Amulet",
  "r": 125,
  "g": 186,
  "b": 168,
  "rgb": "rgb(125, 186, 168)",
  "hex": "#7dbaa8"
}, {
  "value": "rgb(245.0,43.0,113.0)",
  "brand": "L'Or??al Paris",
  "colour": "Pink Gold",
  "r": 245,
  "g": 43,
  "b": 113,
  "rgb": "rgb(245, 43, 113)",
  "hex": "#f52b71"
}, {
  "value": "rgb(196.0,120.0,65.0)",
  "brand": "L'Or??al Paris",
  "colour": "Nude Gold",
  "r": 196,
  "g": 120,
  "b": 65,
  "rgb": "rgb(196, 120, 65)",
  "hex": "#c47841"
}, {
  "value": "rgb(134.0,16.0,64.0)",
  "brand": "L'Or??al Paris",
  "colour": "Plum Gold",
  "r": 134,
  "g": 16,
  "b": 64,
  "rgb": "rgb(134, 16, 64)",
  "hex": "#861040"
}, {
  "value": "rgb(255.0,215.0,0.0)",
  "brand": "L'Or??al Paris",
  "colour": "Pure Gold",
  "r": 255,
  "g": 215,
  "b": 0,
  "rgb": "rgb(255, 215, 0)",
  "hex": "#ffd700"
}, {
  "value": "rgb(214.0,45.0,45.0)",
  "brand": "L'Or??al Paris",
  "colour": "Rouge Gold",
  "r": 214,
  "g": 45,
  "b": 45,
  "rgb": "rgb(214, 45, 45)",
  "hex": "#d62d2d"
}, {
  "value": "rgb(198.0,69.0,107.0)",
  "brand": "L'Or??al Paris",
  "colour": "106 Luminous Pink",
  "r": 198,
  "g": 69,
  "b": 107,
  "rgb": "rgb(198, 69, 107)",
  "hex": "#c6456b"
}, {
  "value": "rgb(209.0,86.0,107.0)",
  "brand": "L'Or??al Paris",
  "colour": "105 Beautiful Rosewood",
  "r": 209,
  "g": 86,
  "b": 107,
  "rgb": "rgb(209, 86, 107)",
  "hex": "#d1566b"
}, {
  "value": "rgb(194.0,46.0,16.0)",
  "brand": "L'Or??al Paris",
  "colour": "107 Radiant Tea Rose",
  "r": 194,
  "g": 46,
  "b": 16,
  "rgb": "rgb(194, 46, 16)",
  "hex": "#c22e10"
}, {
  "value": "rgb(210.0,126.0,108.0)",
  "brand": "Clinique",
  "colour": "Nude Pop",
  "r": 210,
  "g": 126,
  "b": 108,
  "rgb": "rgb(210, 126, 108)",
  "hex": "#d27e6c"
}, {
  "value": "rgb(204.0,117.0,108.0)",
  "brand": "Clinique",
  "colour": "Beige Pop",
  "r": 204,
  "g": 117,
  "b": 108,
  "rgb": "rgb(204, 117, 108)",
  "hex": "#cc756c"
}, {
  "value": "rgb(244.0,90.0,59.0)",
  "brand": "Clinique",
  "colour": "Melon Pop",
  "r": 244,
  "g": 90,
  "b": 59,
  "rgb": "rgb(244, 90, 59)",
  "hex": "#f45a3b"
}, {
  "value": "rgb(248.0,58.0,60.0)",
  "brand": "Clinique",
  "colour": "Poppy Pop",
  "r": 248,
  "g": 58,
  "b": 60,
  "rgb": "rgb(248, 58, 60)",
  "hex": "#f83a3c"
}, {
  "value": "rgb(190.0,80.0,113.0)",
  "brand": "Clinique",
  "colour": "Grape Pop",
  "r": 190,
  "g": 80,
  "b": 113,
  "rgb": "rgb(190, 80, 113)",
  "hex": "#be5071"
}, {
  "value": "rgb(195.0,0.0,66.0)",
  "brand": "Clinique",
  "colour": "Punch Pop",
  "r": 195,
  "g": 0,
  "b": 66,
  "rgb": "rgb(195, 0, 66)",
  "hex": "#c30042"
}, {
  "value": "rgb(175.0,6.0,4.0)",
  "brand": "Clinique",
  "colour": "Passion Pop",
  "r": 175,
  "g": 6,
  "b": 4,
  "rgb": "rgb(175, 6, 4)",
  "hex": "#af0604"
}, {
  "value": "rgb(143.0,23.0,35.0)",
  "brand": "Clinique",
  "colour": "Berry Pop",
  "r": 143,
  "g": 23,
  "b": 35,
  "rgb": "rgb(143, 23, 35)",
  "hex": "#8f1723"
}, {
  "value": "rgb(121.0,45.0,57.0)",
  "brand": "Clinique",
  "colour": "Raspberry Pop",
  "r": 121,
  "g": 45,
  "b": 57,
  "rgb": "rgb(121, 45, 57)",
  "hex": "#792d39"
}, {
  "value": "rgb(90.0,30.0,27.0)",
  "brand": "Clinique",
  "colour": "Cola Pop",
  "r": 90,
  "g": 30,
  "b": 27,
  "rgb": "rgb(90, 30, 27)",
  "hex": "#5a1e1b"
}, {
  "value": "rgb(204.0,159.0,158.0)",
  "brand": "Clinique",
  "colour": "01 Barely",
  "r": 204,
  "g": 159,
  "b": 158,
  "rgb": "rgb(204, 159, 158)",
  "hex": "#cc9f9e"
}, {
  "value": "rgb(226.0,164.0,156.0)",
  "brand": "Clinique",
  "colour": "02 Innocently",
  "r": 226,
  "g": 164,
  "b": 156,
  "rgb": "rgb(226, 164, 156)",
  "hex": "#e2a49c"
}, {
  "value": "rgb(177.0,138.0,130.0)",
  "brand": "Clinique",
  "colour": "03 Creamy Nude",
  "r": 177,
  "g": 138,
  "b": 130,
  "rgb": "rgb(177, 138, 130)",
  "hex": "#b18a82"
}, {
  "value": "rgb(213.0,131.0,119.0)",
  "brand": "Clinique",
  "colour": "04 Canoodle",
  "r": 213,
  "g": 131,
  "b": 119,
  "rgb": "rgb(213, 131, 119)",
  "hex": "#d58377"
}, {
  "value": "rgb(182.0,105.0,88.0)",
  "brand": "Clinique",
  "colour": "05 Go Fig",
  "r": 182,
  "g": 105,
  "b": 88,
  "rgb": "rgb(182, 105, 88)",
  "hex": "#b66958"
}, {
  "value": "rgb(183.0,113.0,102.0)",
  "brand": "Clinique",
  "colour": "06 Tenderheart",
  "r": 183,
  "g": 113,
  "b": 102,
  "rgb": "rgb(183, 113, 102)",
  "hex": "#b77166"
}, {
  "value": "rgb(160.0,112.0,114.0)",
  "brand": "Clinique",
  "colour": "07 Blushing Nude",
  "r": 160,
  "g": 112,
  "b": 114,
  "rgb": "rgb(160, 112, 114)",
  "hex": "#a07072"
}, {
  "value": "rgb(149.0,75.0,68.0)",
  "brand": "Clinique",
  "colour": "08 Intimately",
  "r": 149,
  "g": 75,
  "b": 68,
  "rgb": "rgb(149, 75, 68)",
  "hex": "#954b44"
}, {
  "value": "rgb(186.0,136.0,115.0)",
  "brand": "Clinique",
  "colour": "09 In Real Life",
  "r": 186,
  "g": 136,
  "b": 115,
  "rgb": "rgb(186, 136, 115)",
  "hex": "#ba8873"
}, {
  "value": "rgb(170.0,78.0,61.0)",
  "brand": "Clinique",
  "colour": "10 Berry Freeze",
  "r": 170,
  "g": 78,
  "b": 61,
  "rgb": "rgb(170, 78, 61)",
  "hex": "#aa4e3d"
}, {
  "value": "rgb(185.0,129.0,131.0)",
  "brand": "Clinique",
  "colour": "11 Sugared Maple",
  "r": 185,
  "g": 129,
  "b": 131,
  "rgb": "rgb(185, 129, 131)",
  "hex": "#b98183"
}, {
  "value": "rgb(183.0,107.0,108.0)",
  "brand": "Clinique",
  "colour": "15 Sugarcoated",
  "r": 183,
  "g": 107,
  "b": 108,
  "rgb": "rgb(183, 107, 108)",
  "hex": "#b76b6c"
}, {
  "value": "rgb(183.0,121.0,130.0)",
  "brand": "Clinique",
  "colour": "26 Vintage",
  "r": 183,
  "g": 121,
  "b": 130,
  "rgb": "rgb(183, 121, 130)",
  "hex": "#b77982"
}, {
  "value": "rgb(230.0,117.0,143.0)",
  "brand": "Clinique",
  "colour": "28 Romanticize",
  "r": 230,
  "g": 117,
  "b": 143,
  "rgb": "rgb(230, 117, 143)",
  "hex": "#e6758f"
}, {
  "value": "rgb(231.0,126.0,135.0)",
  "brand": "Clinique",
  "colour": "29 Glazed Berry",
  "r": 231,
  "g": 126,
  "b": 135,
  "rgb": "rgb(231, 126, 135)",
  "hex": "#e77e87"
}, {
  "value": "rgb(183.0,118.0,131.0)",
  "brand": "Clinique",
  "colour": "31 Pink Desire",
  "r": 183,
  "g": 118,
  "b": 131,
  "rgb": "rgb(183, 118, 131)",
  "hex": "#b77683"
}, {
  "value": "rgb(183.0,114.0,124.0)",
  "brand": "Clinique",
  "colour": "32 Wine & Dine",
  "r": 183,
  "g": 114,
  "b": 124,
  "rgb": "rgb(183, 114, 124)",
  "hex": "#b7727c"
}, {
  "value": "rgb(195.0,135.0,127.0)",
  "brand": "Clinique",
  "colour": "33 Bamboo Pink",
  "r": 195,
  "g": 135,
  "b": 127,
  "rgb": "rgb(195, 135, 127)",
  "hex": "#c3877f"
}, {
  "value": "rgb(193.0,119.0,114.0)",
  "brand": "Clinique",
  "colour": "34 Beauty",
  "r": 193,
  "g": 119,
  "b": 114,
  "rgb": "rgb(193, 119, 114)",
  "hex": "#c17772"
}, {
  "value": "rgb(194.0,127.0,117.0)",
  "brand": "Clinique",
  "colour": "35 Think Bronze",
  "r": 194,
  "g": 127,
  "b": 117,
  "rgb": "rgb(194, 127, 117)",
  "hex": "#c27f75"
}, {
  "value": "rgb(213.0,131.0,119.0)",
  "brand": "Clinique",
  "colour": "36 Rosette",
  "r": 213,
  "g": 131,
  "b": 119,
  "rgb": "rgb(213, 131, 119)",
  "hex": "#d58377"
}, {
  "value": "rgb(151.0,79.0,82.0)",
  "brand": "Clinique",
  "colour": "37 Shy",
  "r": 151,
  "g": 79,
  "b": 82,
  "rgb": "rgb(151, 79, 82)",
  "hex": "#974f52"
}, {
  "value": "rgb(182.0,99.0,96.0)",
  "brand": "Clinique",
  "colour": "38 Plum Brandy",
  "r": 182,
  "g": 99,
  "b": 96,
  "rgb": "rgb(182, 99, 96)",
  "hex": "#b66360"
}, {
  "value": "rgb(151.0,64.0,68.0)",
  "brand": "Clinique",
  "colour": "39 Passionately",
  "r": 151,
  "g": 64,
  "b": 68,
  "rgb": "rgb(151, 64, 68)",
  "hex": "#974044"
}, {
  "value": "rgb(203.0,141.0,143.0)",
  "brand": "Clinique",
  "colour": "40 Earthy",
  "r": 203,
  "g": 141,
  "b": 143,
  "rgb": "rgb(203, 141, 143)",
  "hex": "#cb8d8f"
}, {
  "value": "rgb(194.0,136.0,139.0)",
  "brand": "Clinique",
  "colour": "41 Moody",
  "r": 194,
  "g": 136,
  "b": 139,
  "rgb": "rgb(194, 136, 139)",
  "hex": "#c2888b"
}, {
  "value": "rgb(182.0,137.0,156.0)",
  "brand": "Clinique",
  "colour": "42 Silvery Moon",
  "r": 182,
  "g": 137,
  "b": 156,
  "rgb": "rgb(182, 137, 156)",
  "hex": "#b6899c"
}, {
  "value": "rgb(182.0,99.0,102.0)",
  "brand": "Clinique",
  "colour": "43 Violet Berry",
  "r": 182,
  "g": 99,
  "b": 102,
  "rgb": "rgb(182, 99, 102)",
  "hex": "#b66366"
}, {
  "value": "rgb(200.0,93.0,106.0)",
  "brand": "Clinique",
  "colour": "44 Raspberry Glace",
  "r": 200,
  "g": 93,
  "b": 106,
  "rgb": "rgb(200, 93, 106)",
  "hex": "#c85d6a"
}, {
  "value": "rgb(137.0,77.0,83.0)",
  "brand": "Clinique",
  "colour": "46 Rumour Has It",
  "r": 137,
  "g": 77,
  "b": 83,
  "rgb": "rgb(137, 77, 83)",
  "hex": "#894d53"
}, {
  "value": "rgb(183.0,113.0,113.0)",
  "brand": "Clinique",
  "colour": "47 Pink Spice",
  "r": 183,
  "g": 113,
  "b": 113,
  "rgb": "rgb(183, 113, 113)",
  "hex": "#b77171"
}, {
  "value": "rgb(185.0,141.0,148.0)",
  "brand": "Clinique",
  "colour": "48 Heather Moon",
  "r": 185,
  "g": 141,
  "b": 148,
  "rgb": "rgb(185, 141, 148)",
  "hex": "#b98d94"
}, {
  "value": "rgb(151.0,93.0,68.0)",
  "brand": "Clinique",
  "colour": "49 Surprise",
  "r": 151,
  "g": 93,
  "b": 68,
  "rgb": "rgb(151, 93, 68)",
  "hex": "#975d44"
}, {
  "value": "rgb(165.0,81.0,96.0)",
  "brand": "Clinique",
  "colour": "50 A Different Grape",
  "r": 165,
  "g": 81,
  "b": 96,
  "rgb": "rgb(165, 81, 96)",
  "hex": "#a55160"
}, {
  "value": "rgb(230.0,107.0,103.0)",
  "brand": "Clinique",
  "colour": "16 Whimsy",
  "r": 230,
  "g": 107,
  "b": 103,
  "rgb": "rgb(230, 107, 103)",
  "hex": "#e66b67"
}, {
  "value": "rgb(203.0,107.0,111.0)",
  "brand": "Clinique",
  "colour": "17 Strawberry Ice",
  "r": 203,
  "g": 107,
  "b": 111,
  "rgb": "rgb(203, 107, 111)",
  "hex": "#cb6b6f"
}, {
  "value": "rgb(213.0,131.0,112.0)",
  "brand": "Clinique",
  "colour": "21 Peach Pop",
  "r": 213,
  "g": 131,
  "b": 112,
  "rgb": "rgb(213, 131, 112)",
  "hex": "#d58370"
}, {
  "value": "rgb(212.0,115.0,94.0)",
  "brand": "Clinique",
  "colour": "22 Golden Brandy",
  "r": 212,
  "g": 115,
  "b": 94,
  "rgb": "rgb(212, 115, 94)",
  "hex": "#d4735e"
}, {
  "value": "rgb(202.0,88.0,94.0)",
  "brand": "Clinique",
  "colour": "23 All Heart",
  "r": 202,
  "g": 88,
  "b": 94,
  "rgb": "rgb(202, 88, 94)",
  "hex": "#ca585e"
}, {
  "value": "rgb(151.0,64.0,68.0)",
  "brand": "Clinique",
  "colour": "24 Merlot",
  "r": 151,
  "g": 64,
  "b": 68,
  "rgb": "rgb(151, 64, 68)",
  "hex": "#974044"
}, {
  "value": "rgb(239.0,235.0,236.0)",
  "brand": "Dior",
  "colour": "001 ULTRA LIGHT 47",
  "r": 239,
  "g": 235,
  "b": 236,
  "rgb": "rgb(239, 235, 236)",
  "hex": "#efebec"
}, {
  "value": "rgb(2.0,0.0,1.0)",
  "brand": "Dior",
  "colour": "111 ULTRA NIGHT 47",
  "r": 2,
  "g": 0,
  "b": 1,
  "rgb": "rgb(2, 0, 1)",
  "hex": "#020001"
}, {
  "value": "rgb(156.0,72.0,72.0)",
  "brand": "Dior",
  "colour": "325 ULTRA TENDER",
  "r": 156,
  "g": 72,
  "b": 72,
  "rgb": "rgb(156, 72, 72)",
  "hex": "#9c4848"
}, {
  "value": "rgb(130.0,37.0,45.0)",
  "brand": "Dior",
  "colour": "843 ULTRA CRAVE",
  "r": 130,
  "g": 37,
  "b": 45,
  "rgb": "rgb(130, 37, 45)",
  "hex": "#82252d"
}, {
  "value": "rgb(183.0,31.0,20.0)",
  "brand": "Dior",
  "colour": "436 ULTRA TROUBLE",
  "r": 183,
  "g": 31,
  "b": 20,
  "rgb": "rgb(183, 31, 20)",
  "hex": "#b71f14"
}, {
  "value": "rgb(215.0,83.0,81.0)",
  "brand": "Dior",
  "colour": "450 ULTRA LIVELY",
  "r": 215,
  "g": 83,
  "b": 81,
  "rgb": "rgb(215, 83, 81)",
  "hex": "#d75351"
}, {
  "value": "rgb(194.0,80.0,88.0)",
  "brand": "Dior",
  "colour": "485 ULTRA LUST",
  "r": 194,
  "g": 80,
  "b": 88,
  "rgb": "rgb(194, 80, 88)",
  "hex": "#c25058"
}, {
  "value": "rgb(224.0,67.0,32.0)",
  "brand": "Dior",
  "colour": "545 ULTRA MAD",
  "r": 224,
  "g": 67,
  "b": 32,
  "rgb": "rgb(224, 67, 32)",
  "hex": "#e04320"
}, {
  "value": "rgb(229.0,68.0,83.0)",
  "brand": "Dior",
  "colour": "555 ULTRA KISS",
  "r": 229,
  "g": 68,
  "b": 83,
  "rgb": "rgb(229, 68, 83)",
  "hex": "#e54453"
}, {
  "value": "rgb(153.0,67.0,76.0)",
  "brand": "Dior",
  "colour": "587 ULTRA APPEAL",
  "r": 153,
  "g": 67,
  "b": 76,
  "rgb": "rgb(153, 67, 76)",
  "hex": "#99434c"
}, {
  "value": "rgb(140.0,90.0,99.0)",
  "brand": "Dior",
  "colour": "600 ULTRA TOUGH",
  "r": 140,
  "g": 90,
  "b": 99,
  "rgb": "rgb(140, 90, 99)",
  "hex": "#8c5a63"
}, {
  "value": "rgb(165.0,42.0,37.0)",
  "brand": "Dior",
  "colour": "641 ULTRA SPICE",
  "r": 165,
  "g": 42,
  "b": 37,
  "rgb": "rgb(165, 42, 37)",
  "hex": "#a52a25"
}, {
  "value": "rgb(221.0,28.0,55.0)",
  "brand": "Dior",
  "colour": "651 ULTRA FIRE",
  "r": 221,
  "g": 28,
  "b": 55,
  "rgb": "rgb(221, 28, 55)",
  "hex": "#dd1c37"
}, {
  "value": "rgb(224.0,24.0,73.0)",
  "brand": "Dior",
  "colour": "660 ULTRA ATOMIC",
  "r": 224,
  "g": 24,
  "b": 73,
  "rgb": "rgb(224, 24, 73)",
  "hex": "#e01849"
}, {
  "value": "rgb(177.0,28.0,112.0)",
  "brand": "Dior",
  "colour": "755 ULTRA DARING",
  "r": 177,
  "g": 28,
  "b": 112,
  "rgb": "rgb(177, 28, 112)",
  "hex": "#b11c70"
}, {
  "value": "rgb(225.0,20.0,61.0)",
  "brand": "Dior",
  "colour": "770",
  "r": 225,
  "g": 20,
  "b": 61,
  "rgb": "rgb(225, 20, 61)",
  "hex": "#e1143d"
}, {
  "value": "rgb(216.0,13.0,9.0)",
  "brand": "Dior",
  "colour": "777 ULTRA STAR",
  "r": 216,
  "g": 13,
  "b": 9,
  "rgb": "rgb(216, 13, 9)",
  "hex": "#d80d09"
}, {
  "value": "rgb(157.0,41.0,41.0)",
  "brand": "Dior",
  "colour": "851 ULTRA SHOCK",
  "r": 157,
  "g": 41,
  "b": 41,
  "rgb": "rgb(157, 41, 41)",
  "hex": "#9d2929"
}, {
  "value": "rgb(158.0,27.0,77.0)",
  "brand": "Dior",
  "colour": "870 ULTRA PULSE",
  "r": 158,
  "g": 27,
  "b": 77,
  "rgb": "rgb(158, 27, 77)",
  "hex": "#9e1b4d"
}, {
  "value": "rgb(99.0,26.0,33.0)",
  "brand": "Dior",
  "colour": "883 ULTRA POISON",
  "r": 99,
  "g": 26,
  "b": 33,
  "rgb": "rgb(99, 26, 33)",
  "hex": "#631a21"
}, {
  "value": "rgb(91.0,26.0,34.0)",
  "brand": "Dior",
  "colour": "986 ULTRA RADICAL",
  "r": 91,
  "g": 26,
  "b": 34,
  "rgb": "rgb(91, 26, 34)",
  "hex": "#5b1a22"
}, {
  "value": "rgb(189.0,10.0,14.0)",
  "brand": "Dior",
  "colour": "999 ULTRA DIOR",
  "r": 189,
  "g": 10,
  "b": 14,
  "rgb": "rgb(189, 10, 14)",
  "hex": "#bd0a0e"
}, {
  "value": "rgb(232.0,63.0,74.0)",
  "brand": "Dior",
  "colour": "028 Actrice",
  "r": 232,
  "g": 63,
  "b": 74,
  "rgb": "rgb(232, 63, 74)",
  "hex": "#e83f4a"
}, {
  "value": "rgb(228.0,0.0,104.0)",
  "brand": "Dior",
  "colour": "047 Miss",
  "r": 228,
  "g": 0,
  "b": 104,
  "rgb": "rgb(228, 0, 104)",
  "hex": "#e40068"
}, {
  "value": "rgb(211.0,97.0,121.0)",
  "brand": "Dior",
  "colour": "060 Premi??re",
  "r": 211,
  "g": 97,
  "b": 121,
  "rgb": "rgb(211, 97, 121)",
  "hex": "#d36179"
}, {
  "value": "rgb(217.0,25.0,32.0)",
  "brand": "Dior",
  "colour": "080 Red Smile",
  "r": 217,
  "g": 25,
  "b": 32,
  "rgb": "rgb(217, 25, 32)",
  "hex": "#d91920"
}, {
  "value": "rgb(187.0,195.0,194.0)",
  "brand": "Dior",
  "colour": "207 Montaigne Matte",
  "r": 187,
  "g": 195,
  "b": 194,
  "rgb": "rgb(187, 195, 194)",
  "hex": "#bbc3c2"
}, {
  "value": "rgb(208.0,120.0,102.0)",
  "brand": "Dior",
  "colour": "219 Rose Montaigne",
  "r": 208,
  "g": 120,
  "b": 102,
  "rgb": "rgb(208, 120, 102)",
  "hex": "#d07866"
}, {
  "value": "rgb(219.0,111.0,109.0)",
  "brand": "Dior",
  "colour": "263 Hasard",
  "r": 219,
  "g": 111,
  "b": 109,
  "rgb": "rgb(219, 111, 109)",
  "hex": "#db6f6d"
}, {
  "value": "rgb(219.0,112.0,150.0)",
  "brand": "Dior",
  "colour": "277 Os??e",
  "r": 219,
  "g": 112,
  "b": 150,
  "rgb": "rgb(219, 112, 150)",
  "hex": "#db7096"
}, {
  "value": "rgb(219.0,111.0,109.0)",
  "brand": "Dior",
  "colour": "343 Panar??a",
  "r": 219,
  "g": 111,
  "b": 109,
  "rgb": "rgb(219, 111, 109)",
  "hex": "#db6f6d"
}, {
  "value": "rgb(224.0,110.0,109.0)",
  "brand": "Dior",
  "colour": "365 New World",
  "r": 224,
  "g": 110,
  "b": 109,
  "rgb": "rgb(224, 110, 109)",
  "hex": "#e06e6d"
}, {
  "value": "rgb(202.0,104.0,99.0)",
  "brand": "Dior",
  "colour": "414 Saint Germain",
  "r": 202,
  "g": 104,
  "b": 99,
  "rgb": "rgb(202, 104, 99)",
  "hex": "#ca6863"
}, {
  "value": "rgb(213.0,143.0,127.0)",
  "brand": "Dior",
  "colour": "426 Sensual Matte",
  "r": 213,
  "g": 143,
  "b": 127,
  "rgb": "rgb(213, 143, 127)",
  "hex": "#d58f7f"
}, {
  "value": "rgb(173.0,94.0,86.0)",
  "brand": "Dior",
  "colour": "434 Promenade",
  "r": 173,
  "g": 94,
  "b": 86,
  "rgb": "rgb(173, 94, 86)",
  "hex": "#ad5e56"
}, {
  "value": "rgb(193.0,89.0,97.0)",
  "brand": "Dior",
  "colour": "458 Paris",
  "r": 193,
  "g": 89,
  "b": 97,
  "rgb": "rgb(193, 89, 97)",
  "hex": "#c15961"
}, {
  "value": "rgb(183.0,101.0,102.0)",
  "brand": "Dior",
  "colour": "481 Hypnotic Matte",
  "r": 183,
  "g": 101,
  "b": 102,
  "rgb": "rgb(183, 101, 102)",
  "hex": "#b76566"
}, {
  "value": "rgb(228.0,0.0,62.0)",
  "brand": "Dior",
  "colour": "520 Feel Good",
  "r": 228,
  "g": 0,
  "b": 62,
  "rgb": "rgb(228, 0, 62)",
  "hex": "#e4003e"
}, {
  "value": "rgb(46.0,71.0,99.0)",
  "brand": "Dior",
  "colour": "602 Visionary Matte",
  "r": 46,
  "g": 71,
  "b": 99,
  "rgb": "rgb(46, 71, 99)",
  "hex": "#2e4763"
}, {
  "value": "rgb(235.0,89.0,89.0)",
  "brand": "Dior",
  "colour": "634 Strong Matte",
  "r": 235,
  "g": 89,
  "b": 89,
  "rgb": "rgb(235, 89, 89)",
  "hex": "#eb5959"
}, {
  "value": "rgb(234.0,81.0,86.0)",
  "brand": "Dior",
  "colour": "642 Ready",
  "r": 234,
  "g": 81,
  "b": 86,
  "rgb": "rgb(234, 81, 86)",
  "hex": "#ea5156"
}, {
  "value": "rgb(232.0,70.0,24.0)",
  "brand": "Dior",
  "colour": "643 Stand Out",
  "r": 232,
  "g": 70,
  "b": 24,
  "rgb": "rgb(232, 70, 24)",
  "hex": "#e84618"
}, {
  "value": "rgb(183.0,62.0,66.0)",
  "brand": "Dior",
  "colour": "644 Sydney",
  "r": 183,
  "g": 62,
  "b": 66,
  "rgb": "rgb(183, 62, 66)",
  "hex": "#b73e42"
}, {
  "value": "rgb(237.0,108.0,126.0)",
  "brand": "Dior",
  "colour": "652 Euphoric Matte",
  "r": 237,
  "g": 108,
  "b": 126,
  "rgb": "rgb(237, 108, 126)",
  "hex": "#ed6c7e"
}, {
  "value": "rgb(208.0,84.0,107.0)",
  "brand": "Dior",
  "colour": "663 D??sir",
  "r": 208,
  "g": 84,
  "b": 107,
  "rgb": "rgb(208, 84, 107)",
  "hex": "#d0546b"
}, {
  "value": "rgb(204.0,74.0,107.0)",
  "brand": "Dior",
  "colour": "678 Culte",
  "r": 204,
  "g": 74,
  "b": 107,
  "rgb": "rgb(204, 74, 107)",
  "hex": "#cc4a6b"
}, {
  "value": "rgb(188.0,85.0,83.0)",
  "brand": "Dior",
  "colour": "683 Rendez-Vous",
  "r": 188,
  "g": 85,
  "b": 83,
  "rgb": "rgb(188, 85, 83)",
  "hex": "#bc5553"
}, {
  "value": "rgb(164.0,18.0,32.0)",
  "brand": "Dior",
  "colour": "743 Rouge Zinnia",
  "r": 164,
  "g": 18,
  "b": 32,
  "rgb": "rgb(164, 18, 32)",
  "hex": "#a41220"
}, {
  "value": "rgb(207.0,29.0,88.0)",
  "brand": "Dior",
  "colour": "766 Rose Harpers",
  "r": 207,
  "g": 29,
  "b": 88,
  "rgb": "rgb(207, 29, 88)",
  "hex": "#cf1d58"
}, {
  "value": "rgb(233.0,108.0,129.0)",
  "brand": "Dior",
  "colour": "771 Radiant Matte",
  "r": 233,
  "g": 108,
  "b": 129,
  "rgb": "rgb(233, 108, 129)",
  "hex": "#e96c81"
}, {
  "value": "rgb(212.0,53.0,143.0)",
  "brand": "NARS",
  "colour": "Angela",
  "r": 212,
  "g": 53,
  "b": 143,
  "rgb": "rgb(212, 53, 143)",
  "hex": "#d4358f"
}, {
  "value": "rgb(191.0,99.0,101.0)",
  "brand": "NARS",
  "colour": "Anita",
  "r": 191,
  "g": 99,
  "b": 101,
  "rgb": "rgb(191, 99, 101)",
  "hex": "#bf6365"
}, {
  "value": "rgb(175.0,84.0,101.0)",
  "brand": "NARS",
  "colour": "Anna",
  "r": 175,
  "g": 84,
  "b": 101,
  "rgb": "rgb(175, 84, 101)",
  "hex": "#af5465"
}, {
  "value": "rgb(228.0,5.0,24.0)",
  "brand": "NARS",
  "colour": "Annabella",
  "r": 228,
  "g": 5,
  "b": 24,
  "rgb": "rgb(228, 5, 24)",
  "hex": "#e40518"
}, {
  "value": "rgb(175.0,73.0,75.0)",
  "brand": "NARS",
  "colour": "Apoline",
  "r": 175,
  "g": 73,
  "b": 75,
  "rgb": "rgb(175, 73, 75)",
  "hex": "#af494b"
}, {
  "value": "rgb(135.0,31.0,40.0)",
  "brand": "NARS",
  "colour": "Audrey",
  "r": 135,
  "g": 31,
  "b": 40,
  "rgb": "rgb(135, 31, 40)",
  "hex": "#871f28"
}, {
  "value": "rgb(104.0,53.0,39.0)",
  "brand": "NARS",
  "colour": "Aya",
  "r": 104,
  "g": 53,
  "b": 39,
  "rgb": "rgb(104, 53, 39)",
  "hex": "#683527"
}, {
  "value": "rgb(191.0,105.0,92.0)",
  "brand": "NARS",
  "colour": "Barbara",
  "r": 191,
  "g": 105,
  "b": 92,
  "rgb": "rgb(191, 105, 92)",
  "hex": "#bf695c"
}, {
  "value": "rgb(69.0,17.0,26.0)",
  "brand": "NARS",
  "colour": "Bette",
  "r": 69,
  "g": 17,
  "b": 26,
  "rgb": "rgb(69, 17, 26)",
  "hex": "#45111a"
}, {
  "value": "rgb(214.0,116.0,105.0)",
  "brand": "NARS",
  "colour": "Brigitte",
  "r": 214,
  "g": 116,
  "b": 105,
  "rgb": "rgb(214, 116, 105)",
  "hex": "#d67469"
}, {
  "value": "rgb(190.0,3.0,2.0)",
  "brand": "NARS",
  "colour": "Carmen",
  "r": 190,
  "g": 3,
  "b": 2,
  "rgb": "rgb(190, 3, 2)",
  "hex": "#be0302"
}, {
  "value": "rgb(240.0,86.0,72.0)",
  "brand": "NARS",
  "colour": "Catherine",
  "r": 240,
  "g": 86,
  "b": 72,
  "rgb": "rgb(240, 86, 72)",
  "hex": "#f05648"
}, {
  "value": "rgb(130.0,5.0,32.0)",
  "brand": "NARS",
  "colour": "Charlotte",
  "r": 130,
  "g": 5,
  "b": 32,
  "rgb": "rgb(130, 5, 32)",
  "hex": "#820520"
}, {
  "value": "rgb(242.0,97.0,160.0)",
  "brand": "NARS",
  "colour": "Claudia",
  "r": 242,
  "g": 97,
  "b": 160,
  "rgb": "rgb(242, 97, 160)",
  "hex": "#f261a0"
}, {
  "value": "rgb(177.0,121.0,120.0)",
  "brand": "NARS",
  "colour": "Dayle",
  "r": 177,
  "g": 121,
  "b": 120,
  "rgb": "rgb(177, 121, 120)",
  "hex": "#b17978"
}, {
  "value": "rgb(101.0,43.0,27.0)",
  "brand": "NARS",
  "colour": "Deborah",
  "r": 101,
  "g": 43,
  "b": 27,
  "rgb": "rgb(101, 43, 27)",
  "hex": "#652b1b"
}, {
  "value": "rgb(158.0,95.0,129.0)",
  "brand": "NARS",
  "colour": "Dominique",
  "r": 158,
  "g": 95,
  "b": 129,
  "rgb": "rgb(158, 95, 129)",
  "hex": "#9e5f81"
}, {
  "value": "rgb(130.0,16.0,54.0)",
  "brand": "NARS",
  "colour": "Fanny",
  "r": 130,
  "g": 16,
  "b": 54,
  "rgb": "rgb(130, 16, 54)",
  "hex": "#821036"
}, {
  "value": "rgb(254.0,67.0,26.0)",
  "brand": "NARS",
  "colour": "Geraldine",
  "r": 254,
  "g": 67,
  "b": 26,
  "rgb": "rgb(254, 67, 26)",
  "hex": "#fe431a"
}, {
  "value": "rgb(231.0,25.0,61.0)",
  "brand": "NARS",
  "colour": "Grace",
  "r": 231,
  "g": 25,
  "b": 61,
  "rgb": "rgb(231, 25, 61)",
  "hex": "#e7193d"
}, {
  "value": "rgb(217.0,27.0,83.0)",
  "brand": "NARS",
  "colour": "Greta",
  "r": 217,
  "g": 27,
  "b": 83,
  "rgb": "rgb(217, 27, 83)",
  "hex": "#d91b53"
}, {
  "value": "rgb(79.0,20.0,34.0)",
  "brand": "NARS",
  "colour": "Ingrid",
  "r": 79,
  "g": 20,
  "b": 34,
  "rgb": "rgb(79, 20, 34)",
  "hex": "#4f1422"
}, {
  "value": "rgb(196.0,84.0,64.0)",
  "brand": "NARS",
  "colour": "Jane",
  "r": 196,
  "g": 84,
  "b": 64,
  "rgb": "rgb(196, 84, 64)",
  "hex": "#c45440"
}, {
  "value": "rgb(168.0,3.0,83.0)",
  "brand": "NARS",
  "colour": "Janet",
  "r": 168,
  "g": 3,
  "b": 83,
  "rgb": "rgb(168, 3, 83)",
  "hex": "#a80353"
}, {
  "value": "rgb(105.0,17.0,11.0)",
  "brand": "NARS",
  "colour": "Jeanne",
  "r": 105,
  "g": 17,
  "b": 11,
  "rgb": "rgb(105, 17, 11)",
  "hex": "#69110b"
}, {
  "value": "rgb(237.0,120.0,107.0)",
  "brand": "NARS",
  "colour": "Julie",
  "r": 237,
  "g": 120,
  "b": 107,
  "rgb": "rgb(237, 120, 107)",
  "hex": "#ed786b"
}, {
  "value": "rgb(237.0,95.0,85.0)",
  "brand": "NARS",
  "colour": "Juliette",
  "r": 237,
  "g": 95,
  "b": 85,
  "rgb": "rgb(237, 95, 85)",
  "hex": "#ed5f55"
}, {
  "value": "rgb(130.0,46.0,87.0)",
  "brand": "NARS",
  "colour": "Kate",
  "r": 130,
  "g": 46,
  "b": 87,
  "rgb": "rgb(130, 46, 87)",
  "hex": "#822e57"
}, {
  "value": "rgb(227.0,46.0,65.0)",
  "brand": "NARS",
  "colour": "Kelly",
  "r": 227,
  "g": 46,
  "b": 65,
  "rgb": "rgb(227, 46, 65)",
  "hex": "#e32e41"
}, {
  "value": "rgb(104.0,53.0,39.0)",
  "brand": "NARS",
  "colour": "Kirat",
  "r": 104,
  "g": 53,
  "b": 39,
  "rgb": "rgb(104, 53, 39)",
  "hex": "#683527"
}, {
  "value": "rgb(247.0,0.0,0.0)",
  "brand": "NARS",
  "colour": "Lana",
  "r": 247,
  "g": 0,
  "b": 0,
  "rgb": "rgb(247, 0, 0)",
  "hex": "#f70000"
}, {
  "value": "rgb(173.0,84.0,52.0)",
  "brand": "NARS",
  "colour": "Linda",
  "r": 173,
  "g": 84,
  "b": 52,
  "rgb": "rgb(173, 84, 52)",
  "hex": "#ad5434"
}, {
  "value": "rgb(56.0,21.0,36.0)",
  "brand": "NARS",
  "colour": "Liv",
  "r": 56,
  "g": 21,
  "b": 36,
  "rgb": "rgb(56, 21, 36)",
  "hex": "#381524"
}, {
  "value": "rgb(132.0,29.0,22.0)",
  "brand": "NARS",
  "colour": "Louise",
  "r": 132,
  "g": 29,
  "b": 22,
  "rgb": "rgb(132, 29, 22)",
  "hex": "#841d16"
}, {
  "value": "rgb(227.0,79.0,111.0)",
  "brand": "NARS",
  "colour": "Marisa",
  "r": 227,
  "g": 79,
  "b": 111,
  "rgb": "rgb(227, 79, 111)",
  "hex": "#e34f6f"
}, {
  "value": "rgb(219.0,18.0,105.0)",
  "brand": "NARS",
  "colour": "Michiyo",
  "r": 219,
  "g": 18,
  "b": 105,
  "rgb": "rgb(219, 18, 105)",
  "hex": "#db1269"
}, {
  "value": "rgb(119.0,36.0,32.0)",
  "brand": "NARS",
  "colour": "Mona",
  "r": 119,
  "g": 36,
  "b": 32,
  "rgb": "rgb(119, 36, 32)",
  "hex": "#772420"
}, {
  "value": "rgb(244.0,76.0,102.0)",
  "brand": "NARS",
  "colour": "Natalie",
  "r": 244,
  "g": 76,
  "b": 102,
  "rgb": "rgb(244, 76, 102)",
  "hex": "#f44c66"
}, {
  "value": "rgb(204.0,123.0,100.0)",
  "brand": "NARS",
  "colour": "Raquel",
  "r": 204,
  "g": 123,
  "b": 100,
  "rgb": "rgb(204, 123, 100)",
  "hex": "#cc7b64"
}, {
  "value": "rgb(148.0,24.0,15.0)",
  "brand": "NARS",
  "colour": "Rita",
  "r": 148,
  "g": 24,
  "b": 15,
  "rgb": "rgb(148, 24, 15)",
  "hex": "#94180f"
}, {
  "value": "rgb(111.0,31.0,22.0)",
  "brand": "NARS",
  "colour": "Sandra",
  "r": 111,
  "g": 31,
  "b": 22,
  "rgb": "rgb(111, 31, 22)",
  "hex": "#6f1f16"
}, {
  "value": "rgb(124.0,17.0,23.0)",
  "brand": "NARS",
  "colour": "Shirley",
  "r": 124,
  "g": 17,
  "b": 23,
  "rgb": "rgb(124, 17, 23)",
  "hex": "#7c1117"
}, {
  "value": "rgb(153.0,44.0,120.0)",
  "brand": "NARS",
  "colour": "Silvia",
  "r": 153,
  "g": 44,
  "b": 120,
  "rgb": "rgb(153, 44, 120)",
  "hex": "#992c78"
}, {
  "value": "rgb(172.0,9.0,83.0)",
  "brand": "NARS",
  "colour": "Stefania",
  "r": 172,
  "g": 9,
  "b": 83,
  "rgb": "rgb(172, 9, 83)",
  "hex": "#ac0953"
}, {
  "value": "rgb(181.0,111.0,103.0)",
  "brand": "NARS",
  "colour": "Vanessa",
  "r": 181,
  "g": 111,
  "b": 103,
  "rgb": "rgb(181, 111, 103)",
  "hex": "#b56f67"
}, {
  "value": "rgb(160.0,10.0,60.0)",
  "brand": "NARS",
  "colour": "Vera",
  "r": 160,
  "g": 10,
  "b": 60,
  "rgb": "rgb(160, 10, 60)",
  "hex": "#a00a3c"
}, {
  "value": "rgb(211.0,119.0,95.0)",
  "brand": "NARS",
  "colour": "Vibeke",
  "r": 211,
  "g": 119,
  "b": 95,
  "rgb": "rgb(211, 119, 95)",
  "hex": "#d3775f"
}, {
  "value": "rgb(135.0,41.0,53.0)",
  "brand": "NARS",
  "colour": "Vivien",
  "r": 135,
  "g": 41,
  "b": 53,
  "rgb": "rgb(135, 41, 53)",
  "hex": "#872935"
}, {
  "value": "rgb(217.0,27.0,29.0)",
  "brand": "NARS",
  "colour": "Bloodflower",
  "r": 217,
  "g": 27,
  "b": 29,
  "rgb": "rgb(217, 27, 29)",
  "hex": "#d91b1d"
}, {
  "value": "rgb(231.0,34.0,77.0)",
  "brand": "NARS",
  "colour": "Carnal Carnation",
  "r": 231,
  "g": 34,
  "b": 77,
  "rgb": "rgb(231, 34, 77)",
  "hex": "#e7224d"
}, {
  "value": "rgb(236.0,91.0,144.0)",
  "brand": "Wet n Wild",
  "colour": "Mutually Beneficial",
  "r": 236,
  "g": 91,
  "b": 144,
  "rgb": "rgb(236, 91, 144)",
  "hex": "#ec5b90"
}, {
  "value": "rgb(176.0,59.0,57.0)",
  "brand": "Wet n Wild",
  "colour": "Pretty Pocket Pair",
  "r": 176,
  "g": 59,
  "b": 57,
  "rgb": "rgb(176, 59, 57)",
  "hex": "#b03b39"
}, {
  "value": "rgb(234.0,134.0,132.0)",
  "brand": "Wet n Wild",
  "colour": "Berry Tales",
  "r": 234,
  "g": 134,
  "b": 132,
  "rgb": "rgb(234, 134, 132)",
  "hex": "#ea8684"
}, {
  "value": "rgb(175.0,84.0,117.0)",
  "brand": "Wet n Wild",
  "colour": "Charred Cherry",
  "r": 175,
  "g": 84,
  "b": 117,
  "rgb": "rgb(175, 84, 117)",
  "hex": "#af5475"
}, {
  "value": "rgb(213.0,89.0,89.0)",
  "brand": "Wet n Wild",
  "colour": "Hickory Smoked",
  "r": 213,
  "g": 89,
  "b": 89,
  "rgb": "rgb(213, 89, 89)",
  "hex": "#d55959"
}, {
  "value": "rgb(216.0,133.0,185.0)",
  "brand": "Wet n Wild",
  "colour": "Lie Lack",
  "r": 216,
  "g": 133,
  "b": 185,
  "rgb": "rgb(216, 133, 185)",
  "hex": "#d885b9"
}, {
  "value": "rgb(172.0,70.0,45.0)",
  "brand": "Wet n Wild",
  "colour": "Looking for Truffle",
  "r": 172,
  "g": 70,
  "b": 45,
  "rgb": "rgb(172, 70, 45)",
  "hex": "#ac462d"
}, {
  "value": "rgb(195.0,148.0,106.0)",
  "brand": "Wet n Wild",
  "colour": "Nude Streak",
  "r": 195,
  "g": 148,
  "b": 106,
  "rgb": "rgb(195, 148, 106)",
  "hex": "#c3946a"
}, {
  "value": "rgb(247.0,132.0,88.0)",
  "brand": "Wet n Wild",
  "colour": "Shelly Shocked",
  "r": 247,
  "g": 132,
  "b": 88,
  "rgb": "rgb(247, 132, 88)",
  "hex": "#f78458"
}, {
  "value": "rgb(182.0,94.0,54.0)",
  "brand": "Wet n Wild",
  "colour": "Toffee Frappe",
  "r": 182,
  "g": 94,
  "b": 54,
  "rgb": "rgb(182, 94, 54)",
  "hex": "#b65e36"
}, {
  "value": "rgb(234.0,124.0,107.0)",
  "brand": "Wet n Wild",
  "colour": "Turnt Orange",
  "r": 234,
  "g": 124,
  "b": 107,
  "rgb": "rgb(234, 124, 107)",
  "hex": "#ea7c6b"
}, {
  "value": "rgb(171.0,108.0,101.0)",
  "brand": "Wet n Wild",
  "colour": "Bare It All",
  "r": 171,
  "g": 108,
  "b": 101,
  "rgb": "rgb(171, 108, 101)",
  "hex": "#ab6c65"
}, {
  "value": "rgb(91.0,45.0,56.0)",
  "brand": "Wet n Wild",
  "colour": "Cherry Bomb",
  "r": 91,
  "g": 45,
  "b": 56,
  "rgb": "rgb(91, 45, 56)",
  "hex": "#5b2d38"
}, {
  "value": "rgb(153.0,30.0,77.0)",
  "brand": "Wet n Wild",
  "colour": "Cherry Picking",
  "r": 153,
  "g": 30,
  "b": 77,
  "rgb": "rgb(153, 30, 77)",
  "hex": "#991e4d"
}, {
  "value": "rgb(123.0,21.0,58.0)",
  "brand": "Wet n Wild",
  "colour": "Cinnamon Spice",
  "r": 123,
  "g": 21,
  "b": 58,
  "rgb": "rgb(123, 21, 58)",
  "hex": "#7b153a"
}, {
  "value": "rgb(219.0,127.0,176.0)",
  "brand": "Wet n Wild",
  "colour": "Dollhouse Pink",
  "r": 219,
  "g": 127,
  "b": 176,
  "rgb": "rgb(219, 127, 176)",
  "hex": "#db7fb0"
}, {
  "value": "rgb(197.0,27.0,116.0)",
  "brand": "Wet n Wild",
  "colour": "Don't Blink Pink",
  "r": 197,
  "g": 27,
  "b": 116,
  "rgb": "rgb(197, 27, 116)",
  "hex": "#c51b74"
}, {
  "value": "rgb(170.0,116.0,132.0)",
  "brand": "Wet n Wild",
  "colour": "In the Flesh",
  "r": 170,
  "g": 116,
  "b": 132,
  "rgb": "rgb(170, 116, 132)",
  "hex": "#aa7484"
}, {
  "value": "rgb(226.0,151.0,146.0)",
  "brand": "Wet n Wild",
  "colour": "Just Peachy",
  "r": 226,
  "g": 151,
  "b": 146,
  "rgb": "rgb(226, 151, 146)",
  "hex": "#e29792"
}, {
  "value": "rgb(145.0,86.0,118.0)",
  "brand": "Wet n Wild",
  "colour": "Mauve Outta Here",
  "r": 145,
  "g": 86,
  "b": 118,
  "rgb": "rgb(145, 86, 118)",
  "hex": "#915676"
}, {
  "value": "rgb(102.0,67.0,74.0)",
  "brand": "Wet n Wild",
  "colour": "Mocha-licious",
  "r": 102,
  "g": 67,
  "b": 74,
  "rgb": "rgb(102, 67, 74)",
  "hex": "#66434a"
}, {
  "value": "rgb(199.0,59.0,60.0)",
  "brand": "Wet n Wild",
  "colour": "Purty Persimmon",
  "r": 199,
  "g": 59,
  "b": 60,
  "rgb": "rgb(199, 59, 60)",
  "hex": "#c73b3c"
}, {
  "value": "rgb(106.0,43.0,64.0)",
  "brand": "Wet n Wild",
  "colour": "Ravin' Raisin",
  "r": 106,
  "g": 43,
  "b": 64,
  "rgb": "rgb(106, 43, 64)",
  "hex": "#6a2b40"
}, {
  "value": "rgb(199.0,50.0,88.0)",
  "brand": "Wet n Wild",
  "colour": "Red Velvet",
  "r": 199,
  "g": 50,
  "b": 88,
  "rgb": "rgb(199, 50, 88)",
  "hex": "#c73258"
}, {
  "value": "rgb(213.0,110.0,140.0)",
  "brand": "Wet n Wild",
  "colour": "Rose-bud",
  "r": 213,
  "g": 110,
  "b": 140,
  "rgb": "rgb(213, 110, 140)",
  "hex": "#d56e8c"
}, {
  "value": "rgb(157.0,93.0,84.0)",
  "brand": "Wet n Wild",
  "colour": "Sand Storm",
  "r": 157,
  "g": 93,
  "b": 84,
  "rgb": "rgb(157, 93, 84)",
  "hex": "#9d5d54"
}, {
  "value": "rgb(213.0,81.0,139.0)",
  "brand": "Wet n Wild",
  "colour": "Smokin' Hot Pink",
  "r": 213,
  "g": 81,
  "b": 139,
  "rgb": "rgb(213, 81, 139)",
  "hex": "#d5518b"
}, {
  "value": "rgb(148.0,30.0,65.0)",
  "brand": "Wet n Wild",
  "colour": "Stoplight Red",
  "r": 148,
  "g": 30,
  "b": 65,
  "rgb": "rgb(148, 30, 65)",
  "hex": "#941e41"
}, {
  "value": "rgb(128.0,12.0,95.0)",
  "brand": "Wet n Wild",
  "colour": "Sugar Plum Fairy",
  "r": 128,
  "g": 12,
  "b": 95,
  "rgb": "rgb(128, 12, 95)",
  "hex": "#800c5f"
}, {
  "value": "rgb(234.0,184.0,196.0)",
  "brand": "Wet n Wild",
  "colour": "Think Pink",
  "r": 234,
  "g": 184,
  "b": 196,
  "rgb": "rgb(234, 184, 196)",
  "hex": "#eab8c4"
}, {
  "value": "rgb(70.0,47.0,73.0)",
  "brand": "Wet n Wild",
  "colour": "Vamp It Up",
  "r": 70,
  "g": 47,
  "b": 73,
  "rgb": "rgb(70, 47, 73)",
  "hex": "#462f49"
}, {
  "value": "rgb(185.0,100.0,123.0)",
  "brand": "Wet n Wild",
  "colour": "Wine Room",
  "r": 185,
  "g": 100,
  "b": 123,
  "rgb": "rgb(185, 100, 123)",
  "hex": "#b9647b"
}, {
  "value": "rgb(195.0,141.0,135.0)",
  "brand": "Wet n Wild",
  "colour": "Never Nude",
  "r": 195,
  "g": 141,
  "b": 135,
  "rgb": "rgb(195, 141, 135)",
  "hex": "#c38d87"
}, {
  "value": "rgb(216.0,124.0,144.0)",
  "brand": "Wet n Wild",
  "colour": "Rose the Matter",
  "r": 216,
  "g": 124,
  "b": 144,
  "rgb": "rgb(216, 124, 144)",
  "hex": "#d87c90"
}, {
  "value": "rgb(197.0,113.0,134.0)",
  "brand": "Wet n Wild",
  "colour": "Smooth Mauves",
  "r": 197,
  "g": 113,
  "b": 134,
  "rgb": "rgb(197, 113, 134)",
  "hex": "#c57186"
}, {
  "value": "rgb(140.0,42.0,96.0)",
  "brand": "Wet n Wild",
  "colour": "Violet's Kiss",
  "r": 140,
  "g": 42,
  "b": 96,
  "rgb": "rgb(140, 42, 96)",
  "hex": "#8c2a60"
}, {
  "value": "rgb(18.0,12.0,10.0)",
  "brand": "Wet n Wild",
  "colour": "Black Out",
  "r": 18,
  "g": 12,
  "b": 10,
  "rgb": "rgb(18, 12, 10)",
  "hex": "#120c0a"
}, {
  "value": "rgb(182.0,117.0,125.0)",
  "brand": "Wet n Wild",
  "colour": "A Short Affair",
  "r": 182,
  "g": 117,
  "b": 125,
  "rgb": "rgb(182, 117, 125)",
  "hex": "#b6757d"
}, {
  "value": "rgb(85.0,12.0,41.0)",
  "brand": "Wet n Wild",
  "colour": "Black Orchid",
  "r": 85,
  "g": 12,
  "b": 41,
  "rgb": "rgb(85, 12, 41)",
  "hex": "#550c29"
}, {
  "value": "rgb(105.0,10.0,40.0)",
  "brand": "Wet n Wild",
  "colour": "Blind Date",
  "r": 105,
  "g": 10,
  "b": 40,
  "rgb": "rgb(105, 10, 40)",
  "hex": "#690a28"
}, {
  "value": "rgb(147.0,87.0,79.0)",
  "brand": "Wet n Wild",
  "colour": "Breeze",
  "r": 147,
  "g": 87,
  "b": 79,
  "rgb": "rgb(147, 87, 79)",
  "hex": "#93574f"
}, {
  "value": "rgb(96.0,54.0,56.0)",
  "brand": "Wet n Wild",
  "colour": "Cashmere",
  "r": 96,
  "g": 54,
  "b": 56,
  "rgb": "rgb(96, 54, 56)",
  "hex": "#603638"
}, {
  "value": "rgb(169.0,30.0,33.0)",
  "brand": "Wet n Wild",
  "colour": "Cherry Frost",
  "r": 169,
  "g": 30,
  "b": 33,
  "rgb": "rgb(169, 30, 33)",
  "hex": "#a91e21"
}, {
  "value": "rgb(173.0,102.0,120.0)",
  "brand": "Wet n Wild",
  "colour": "Dark Pink Frost",
  "r": 173,
  "g": 102,
  "b": 120,
  "rgb": "rgb(173, 102, 120)",
  "hex": "#ad6678"
}, {
  "value": "rgb(125.0,0.0,21.0)",
  "brand": "Wet n Wild",
  "colour": "Dark Wine",
  "r": 125,
  "g": 0,
  "b": 21,
  "rgb": "rgb(125, 0, 21)",
  "hex": "#7d0015"
}, {
  "value": "rgb(191.0,23.0,144.0)",
  "brand": "Wet n Wild",
  "colour": "Fuchsia w Blue Pearl",
  "r": 191,
  "g": 23,
  "b": 144,
  "rgb": "rgb(191, 23, 144)",
  "hex": "#bf1790"
}, {
  "value": "rgb(204.0,15.0,73.0)",
  "brand": "Wet n Wild",
  "colour": "Hot Paris Pink",
  "r": 204,
  "g": 15,
  "b": 73,
  "rgb": "rgb(204, 15, 73)",
  "hex": "#cc0f49"
}, {
  "value": "rgb(186.0,22.0,33.0)",
  "brand": "Wet n Wild",
  "colour": "Hot Red",
  "r": 186,
  "g": 22,
  "b": 33,
  "rgb": "rgb(186, 22, 33)",
  "hex": "#ba1621"
}, {
  "value": "rgb(115.0,66.0,62.0)",
  "brand": "Wet n Wild",
  "colour": "Java",
  "r": 115,
  "g": 66,
  "b": 62,
  "rgb": "rgb(115, 66, 62)",
  "hex": "#73423e"
}, {
  "value": "rgb(146.0,0.0,70.0)",
  "brand": "Wet n Wild",
  "colour": "Just Garnet",
  "r": 146,
  "g": 0,
  "b": 70,
  "rgb": "rgb(146, 0, 70)",
  "hex": "#920046"
}, {
  "value": "rgb(219.0,144.0,138.0)",
  "brand": "Tom Ford",
  "colour": "13 BLUSH NUDE",
  "r": 219,
  "g": 144,
  "b": 138,
  "rgb": "rgb(219, 144, 138)",
  "hex": "#db908a"
}, {
  "value": "rgb(197.0,109.0,97.0)",
  "brand": "Tom Ford",
  "colour": "14 SABLE SMOKE",
  "r": 197,
  "g": 109,
  "b": 97,
  "rgb": "rgb(197, 109, 97)",
  "hex": "#c56d61"
}, {
  "value": "rgb(142.0,85.0,92.0)",
  "brand": "Tom Ford",
  "colour": "50 SO VAIN",
  "r": 142,
  "g": 85,
  "b": 92,
  "rgb": "rgb(142, 85, 92)",
  "hex": "#8e555c"
}, {
  "value": "rgb(243.0,128.0,110.0)",
  "brand": "Tom Ford",
  "colour": "23 BARE PEACH",
  "r": 243,
  "g": 128,
  "b": 110,
  "rgb": "rgb(243, 128, 110)",
  "hex": "#f3806e"
}, {
  "value": "rgb(207.0,82.0,88.0)",
  "brand": "Tom Ford",
  "colour": "01 SPANISH PINK",
  "r": 207,
  "g": 82,
  "b": 88,
  "rgb": "rgb(207, 82, 88)",
  "hex": "#cf5258"
}, {
  "value": "rgb(207.0,82.0,88.0)",
  "brand": "Tom Ford",
  "colour": "22 FORBIDDEN PINK",
  "r": 207,
  "g": 82,
  "b": 88,
  "rgb": "rgb(207, 82, 88)",
  "hex": "#cf5258"
}, {
  "value": "rgb(238.0,75.0,94.0)",
  "brand": "Tom Ford",
  "colour": "21 NAKED CORAL",
  "r": 238,
  "g": 75,
  "b": 94,
  "rgb": "rgb(238, 75, 94)",
  "hex": "#ee4b5e"
}, {
  "value": "rgb(231.0,30.0,38.0)",
  "brand": "Tom Ford",
  "colour": "09 TRUE CORAL",
  "r": 231,
  "g": 30,
  "b": 38,
  "rgb": "rgb(231, 30, 38)",
  "hex": "#e71e26"
}, {
  "value": "rgb(223.0,141.0,143.0)",
  "brand": "Tom Ford",
  "colour": "07 PINK DUSK",
  "r": 223,
  "g": 141,
  "b": 143,
  "rgb": "rgb(223, 141, 143)",
  "hex": "#df8d8f"
}, {
  "value": "rgb(212.0,111.0,119.0)",
  "brand": "Tom Ford",
  "colour": "04 INDIAN ROSE",
  "r": 212,
  "g": 111,
  "b": 119,
  "rgb": "rgb(212, 111, 119)",
  "hex": "#d46f77"
}, {
  "value": "rgb(173.0,92.0,88.0)",
  "brand": "Tom Ford",
  "colour": "03 CASABLANCA",
  "r": 173,
  "g": 92,
  "b": 88,
  "rgb": "rgb(173, 92, 88)",
  "hex": "#ad5c58"
}, {
  "value": "rgb(177.0,31.0,130.0)",
  "brand": "Tom Ford",
  "colour": "17 VIOLET FATALE",
  "r": 177,
  "g": 31,
  "b": 130,
  "rgb": "rgb(177, 31, 130)",
  "hex": "#b11f82"
}, {
  "value": "rgb(131.0,46.0,67.0)",
  "brand": "Tom Ford",
  "colour": "27 BRUISED PLUM",
  "r": 131,
  "g": 46,
  "b": 67,
  "rgb": "rgb(131, 46, 67)",
  "hex": "#832e43"
}, {
  "value": "rgb(239.0,66.0,111.0)",
  "brand": "Tom Ford",
  "colour": "08 FLAMINGO",
  "r": 239,
  "g": 66,
  "b": 111,
  "rgb": "rgb(239, 66, 111)",
  "hex": "#ef426f"
}, {
  "value": "rgb(243.0,36.0,52.0)",
  "brand": "Tom Ford",
  "colour": "15 WILD GINGER",
  "r": 243,
  "g": 36,
  "b": 52,
  "rgb": "rgb(243, 36, 52)",
  "hex": "#f32434"
}, {
  "value": "rgb(213.0,87.0,88.0)",
  "brand": "Tom Ford",
  "colour": "31 TWIST OF FATE",
  "r": 213,
  "g": 87,
  "b": 88,
  "rgb": "rgb(213, 87, 88)",
  "hex": "#d55758"
}, {
  "value": "rgb(212.0,28.0,90.0)",
  "brand": "Tom Ford",
  "colour": "10 CHERRY LUSH",
  "r": 212,
  "g": 28,
  "b": 90,
  "rgb": "rgb(212, 28, 90)",
  "hex": "#d41c5a"
}, {
  "value": "rgb(197.0,0.0,48.0)",
  "brand": "Tom Ford",
  "colour": "16 SCARLET ROUGE",
  "r": 197,
  "g": 0,
  "b": 48,
  "rgb": "rgb(197, 0, 48)",
  "hex": "#c50030"
}, {
  "value": "rgb(239.0,196.0,177.0)",
  "brand": "Tom Ford",
  "colour": "56 NAKED AMBITION",
  "r": 239,
  "g": 196,
  "b": 177,
  "rgb": "rgb(239, 196, 177)",
  "hex": "#efc4b1"
}, {
  "value": "rgb(249.0,181.0,162.0)",
  "brand": "Tom Ford",
  "colour": "57 SPICED HONEY",
  "r": 249,
  "g": 181,
  "b": 162,
  "rgb": "rgb(249, 181, 162)",
  "hex": "#f9b5a2"
}, {
  "value": "rgb(217.0,151.0,139.0)",
  "brand": "Tom Ford",
  "colour": "58 ALL MINE",
  "r": 217,
  "g": 151,
  "b": 139,
  "rgb": "rgb(217, 151, 139)",
  "hex": "#d9978b"
}, {
  "value": "rgb(238.0,159.0,142.0)",
  "brand": "Tom Ford",
  "colour": "59 EROGENOUS",
  "r": 238,
  "g": 159,
  "b": 142,
  "rgb": "rgb(238, 159, 142)",
  "hex": "#ee9f8e"
}, {
  "value": "rgb(209.0,143.0,131.0)",
  "brand": "Tom Ford",
  "colour": "60 BAD LIEUTENANT",
  "r": 209,
  "g": 143,
  "b": 131,
  "rgb": "rgb(209, 143, 131)",
  "hex": "#d18f83"
}, {
  "value": "rgb(220.0,158.0,145.0)",
  "brand": "Tom Ford",
  "colour": "61 OPEN KIMONO",
  "r": 220,
  "g": 158,
  "b": 145,
  "rgb": "rgb(220, 158, 145)",
  "hex": "#dc9e91"
}, {
  "value": "rgb(217.0,160.0,140.0)",
  "brand": "Tom Ford",
  "colour": "62 SATIN CHIC",
  "r": 217,
  "g": 160,
  "b": 140,
  "rgb": "rgb(217, 160, 140)",
  "hex": "#d9a08c"
}, {
  "value": "rgb(181.0,122.0,116.0)",
  "brand": "Tom Ford",
  "colour": "63 DEVORE",
  "r": 181,
  "g": 122,
  "b": 116,
  "rgb": "rgb(181, 122, 116)",
  "hex": "#b57a74"
}, {
  "value": "rgb(213.0,17.0,103.0)",
  "brand": "Tom Ford",
  "colour": "64 EROTIQUE",
  "r": 213,
  "g": 17,
  "b": 103,
  "rgb": "rgb(213, 17, 103)",
  "hex": "#d51167"
}, {
  "value": "rgb(217.0,145.0,149.0)",
  "brand": "Tom Ford",
  "colour": "66 PAPER DOLL",
  "r": 217,
  "g": 145,
  "b": 149,
  "rgb": "rgb(217, 145, 149)",
  "hex": "#d99195"
}, {
  "value": "rgb(206.0,92.0,161.0)",
  "brand": "Tom Ford",
  "colour": "67 PRETTY PERSUASIVE",
  "r": 206,
  "g": 92,
  "b": 161,
  "rgb": "rgb(206, 92, 161)",
  "hex": "#ce5ca1"
}, {
  "value": "rgb(189.0,81.0,94.0)",
  "brand": "Tom Ford",
  "colour": "NIGHT MAUVE",
  "r": 189,
  "g": 81,
  "b": 94,
  "rgb": "rgb(189, 81, 94)",
  "hex": "#bd515e"
}, {
  "value": "rgb(173.0,69.0,96.0)",
  "brand": "Tom Ford",
  "colour": "70 ADORA",
  "r": 173,
  "g": 69,
  "b": 96,
  "rgb": "rgb(173, 69, 96)",
  "hex": "#ad4560"
}, {
  "value": "rgb(235.0,81.0,53.0)",
  "brand": "Tom Ford",
  "colour": "71 CONTEMPT",
  "r": 235,
  "g": 81,
  "b": 53,
  "rgb": "rgb(235, 81, 53)",
  "hex": "#eb5135"
}, {
  "value": "rgb(225.0,70.0,78.0)",
  "brand": "Tom Ford",
  "colour": "72 SWEET TEMPEST",
  "r": 225,
  "g": 70,
  "b": 78,
  "rgb": "rgb(225, 70, 78)",
  "hex": "#e1464e"
}, {
  "value": "rgb(225.0,63.0,74.0)",
  "brand": "Tom Ford",
  "colour": "73 VERMILLIONAIRE",
  "r": 225,
  "g": 63,
  "b": 74,
  "rgb": "rgb(225, 63, 74)",
  "hex": "#e13f4a"
}, {
  "value": "rgb(223.0,46.0,40.0)",
  "brand": "Tom Ford",
  "colour": "74 DRESSED TO KILL",
  "r": 223,
  "g": 46,
  "b": 40,
  "rgb": "rgb(223, 46, 40)",
  "hex": "#df2e28"
}, {
  "value": "rgb(199.0,37.0,58.0)",
  "brand": "Tom Ford",
  "colour": "75 JASMIN ROUGE",
  "r": 199,
  "g": 37,
  "b": 58,
  "rgb": "rgb(199, 37, 58)",
  "hex": "#c7253a"
}, {
  "value": "rgb(153.0,27.0,31.0)",
  "brand": "Tom Ford",
  "colour": "76 ORIGINAL SIN",
  "r": 153,
  "g": 27,
  "b": 31,
  "rgb": "rgb(153, 27, 31)",
  "hex": "#991b1f"
}, {
  "value": "rgb(194.0,66.0,91.0)",
  "brand": "Tom Ford",
  "colour": "77 DANGEROUS BEAUTY",
  "r": 194,
  "g": 66,
  "b": 91,
  "rgb": "rgb(194, 66, 91)",
  "hex": "#c2425b"
}, {
  "value": "rgb(158.0,60.0,85.0)",
  "brand": "Tom Ford",
  "colour": "78 LOVE CRIME",
  "r": 158,
  "g": 60,
  "b": 85,
  "rgb": "rgb(158, 60, 85)",
  "hex": "#9e3c55"
}, {
  "value": "rgb(137.0,64.0,81.0)",
  "brand": "Tom Ford",
  "colour": "79 DISCRETION",
  "r": 137,
  "g": 64,
  "b": 81,
  "rgb": "rgb(137, 64, 81)",
  "hex": "#894051"
}, {
  "value": "rgb(108.0,8.0,10.0)",
  "brand": "Tom Ford",
  "colour": "80 IMPASSIONED",
  "r": 108,
  "g": 8,
  "b": 10,
  "rgb": "rgb(108, 8, 10)",
  "hex": "#6c080a"
}, {
  "value": "rgb(83.0,26.0,9.0)",
  "brand": "Tom Ford",
  "colour": "82 AFTER DARK",
  "r": 83,
  "g": 26,
  "b": 9,
  "rgb": "rgb(83, 26, 9)",
  "hex": "#531a09"
}, {
  "value": "rgb(83.0,1.0,23.0)",
  "brand": "Tom Ford",
  "colour": "81 NEAR DARK",
  "r": 83,
  "g": 1,
  "b": 23,
  "rgb": "rgb(83, 1, 23)",
  "hex": "#530117"
}, {
  "value": "rgb(221.0,67.0,103.0)",
  "brand": "Tom Ford",
  "colour": "83 STIMULANT",
  "r": 221,
  "g": 67,
  "b": 103,
  "rgb": "rgb(221, 67, 103)",
  "hex": "#dd4367"
}, {
  "value": "rgb(213.0,91.0,70.0)",
  "brand": "Tom Ford",
  "colour": "84 EXOTICA",
  "r": 213,
  "g": 91,
  "b": 70,
  "rgb": "rgb(213, 91, 70)",
  "hex": "#d55b46"
}, {
  "value": "rgb(238.0,69.0,48.0)",
  "brand": "Tom Ford",
  "colour": "85 FOXFIRE",
  "r": 238,
  "g": 69,
  "b": 48,
  "rgb": "rgb(238, 69, 48)",
  "hex": "#ee4530"
}, {
  "value": "rgb(207.0,66.0,118.0)",
  "brand": "Tom Ford",
  "colour": "86 ELECTRIQUE",
  "r": 207,
  "g": 66,
  "b": 118,
  "rgb": "rgb(207, 66, 118)",
  "hex": "#cf4276"
}, {
  "value": "rgb(226.0,116.0,163.0)",
  "brand": "Tom Ford",
  "colour": "87 PLAYGIRL",
  "r": 226,
  "g": 116,
  "b": 163,
  "rgb": "rgb(226, 116, 163)",
  "hex": "#e274a3"
}, {
  "value": "rgb(117.0,63.0,51.0)",
  "brand": "Tom Ford",
  "colour": "65 MAGNETIC ATTRACTION",
  "r": 117,
  "g": 63,
  "b": 51,
  "rgb": "rgb(117, 63, 51)",
  "hex": "#753f33"
}, {
  "value": "rgb(185.0,128.0,134.0)",
  "brand": "Tom Ford",
  "colour": "68 SUGAR GLIDER",
  "r": 185,
  "g": 128,
  "b": 134,
  "rgb": "rgb(185, 128, 134)",
  "hex": "#b98086"
}, {
  "value": "rgb(168.0,19.0,25.0)",
  "brand": "Fenty Beauty",
  "colour": "Ma'Damn - Royal Red",
  "r": 168,
  "g": 19,
  "b": 25,
  "rgb": "rgb(168, 19, 25)",
  "hex": "#a81319"
}, {
  "value": "rgb(148.0,50.0,41.0)",
  "brand": "Fenty Beauty",
  "colour": "Spanked - Dusty Rose",
  "r": 148,
  "g": 50,
  "b": 41,
  "rgb": "rgb(148, 50, 41)",
  "hex": "#943229"
}, {
  "value": "rgb(220.0,52.0,103.0)",
  "brand": "Fenty Beauty",
  "colour": "Candy Venom - Electric Pink",
  "r": 220,
  "g": 52,
  "b": 103,
  "rgb": "rgb(220, 52, 103)",
  "hex": "#dc3467"
}, {
  "value": "rgb(255.0,115.0,0.0)",
  "brand": "Fenty Beauty",
  "colour": "Saw-C - Exotic Tangerine",
  "r": 255,
  "g": 115,
  "b": 0,
  "rgb": "rgb(255, 115, 0)",
  "hex": "#ff7300"
}, {
  "value": "rgb(224.0,140.0,104.0)",
  "brand": "Fenty Beauty",
  "colour": "Up 2 No Good - Nude Peach",
  "r": 224,
  "g": 140,
  "b": 104,
  "rgb": "rgb(224, 140, 104)",
  "hex": "#e08c68"
}, {
  "value": "rgb(202.0,103.0,71.0)",
  "brand": "Fenty Beauty",
  "colour": "S1ngle - Blushing Nude",
  "r": 202,
  "g": 103,
  "b": 71,
  "rgb": "rgb(202, 103, 71)",
  "hex": "#ca6747"
}, {
  "value": "rgb(190.0,82.0,44.0)",
  "brand": "Fenty Beauty",
  "colour": "Freckle Fiesta - Spiced Terracotta",
  "r": 190,
  "g": 82,
  "b": 44,
  "rgb": "rgb(190, 82, 44)",
  "hex": "#be522c"
}, {
  "value": "rgb(119.0,50.0,35.0)",
  "brand": "Fenty Beauty",
  "colour": "Shawty - Warm Chestnut",
  "r": 119,
  "g": 50,
  "b": 35,
  "rgb": "rgb(119, 50, 35)",
  "hex": "#773223"
}, {
  "value": "rgb(103.0,31.0,16.0)",
  "brand": "Fenty Beauty",
  "colour": "PMS - Moody Brown",
  "r": 103,
  "g": 31,
  "b": 16,
  "rgb": "rgb(103, 31, 16)",
  "hex": "#671f10"
}, {
  "value": "rgb(52.0,108.0,71.0)",
  "brand": "Fenty Beauty",
  "colour": "Midnight Wasabi - Wicked Green",
  "r": 52,
  "g": 108,
  "b": 71,
  "rgb": "rgb(52, 108, 71)",
  "hex": "#346c47"
}, {
  "value": "rgb(96.0,126.0,180.0)",
  "brand": "Fenty Beauty",
  "colour": "Ya Dig?! - Periwinkle Blue",
  "r": 96,
  "g": 126,
  "b": 180,
  "rgb": "rgb(96, 126, 180)",
  "hex": "#607eb4"
}, {
  "value": "rgb(0.0,23.0,57.0)",
  "brand": "Fenty Beauty",
  "colour": "Clapback - True Navy",
  "r": 0,
  "g": 23,
  "b": 57,
  "rgb": "rgb(0, 23, 57)",
  "hex": "#001739"
}, {
  "value": "rgb(150.0,119.0,189.0)",
  "brand": "Fenty Beauty",
  "colour": "One of the Boyz - Wild Lilac",
  "r": 150,
  "g": 119,
  "b": 189,
  "rgb": "rgb(150, 119, 189)",
  "hex": "#9677bd"
}, {
  "value": "rgb(78.0,13.0,21.0)",
  "brand": "Fenty Beauty",
  "colour": "Griselda - Bold Burgundy",
  "r": 78,
  "g": 13,
  "b": 21,
  "rgb": "rgb(78, 13, 21)",
  "hex": "#4e0d15"
}, {
  "value": "rgb(251.0,105.0,186.0)",
  "brand": "Fenty Beauty",
  "colour": "Gravity - Shimmering Hot Pink",
  "r": 251,
  "g": 105,
  "b": 186,
  "rgb": "rgb(251, 105, 186)",
  "hex": "#fb69ba"
}, {
  "value": "rgb(255.0,146.0,109.0)",
  "brand": "Fenty Beauty",
  "colour": "Supermoon - Sparkling Peach",
  "r": 255,
  "g": 146,
  "b": 109,
  "rgb": "rgb(255, 146, 109)",
  "hex": "#ff926d"
}, {
  "value": "rgb(134.0,53.0,109.0)",
  "brand": "Fenty Beauty",
  "colour": "Sci-Fly - Glimmering Garnet",
  "r": 134,
  "g": 53,
  "b": 109,
  "rgb": "rgb(134, 53, 109)",
  "hex": "#86356d"
}, {
  "value": "rgb(242.0,162.0,201.0)",
  "brand": "Fenty Beauty",
  "colour": "$upanova - Twinkling Pink Orchid",
  "r": 242,
  "g": 162,
  "b": 201,
  "rgb": "rgb(242, 162, 201)",
  "hex": "#f2a2c9"
}, {
  "value": "rgb(165.81705836919176,19.678252234361075,25.3800066203247)",
  "brand": "Fenty Beauty",
  "colour": "MaDamn - Royal Red",
  "r": 165,
  "g": 19,
  "b": 25,
  "rgb": "rgb(165, 19, 25)",
  "hex": "#a51319"
}, {
  "value": "rgb(97.3872800586379,35.44397605081669,57.09958455523602)",
  "brand": "Fenty Beauty",
  "colour": "Ballerina Blackout - Loud Bubblegum",
  "r": 97,
  "g": 35,
  "b": 57,
  "rgb": "rgb(97, 35, 57)",
  "hex": "#612339"
}, {
  "value": "rgb(181.17343389698635,50.932945810921915,62.349500384300306)",
  "brand": "Fenty Beauty",
  "colour": "Dragon Mami - Tropical Papaya",
  "r": 181,
  "g": 50,
  "b": 62,
  "rgb": "rgb(181, 50, 62)",
  "hex": "#b5323e"
}, {
  "value": "rgb(127.52449687717552,64.48945948027693,93.48264322618668)",
  "brand": "Fenty Beauty",
  "colour": "Flamingo Acid - Bright Berry",
  "r": 127,
  "g": 64,
  "b": 93,
  "rgb": "rgb(127, 64, 93)",
  "hex": "#7f405d"
}, {
  "value": "rgb(35.71273084848661,34.92810862509686,39.04883009818628)",
  "brand": "Fenty Beauty",
  "colour": "F'n Black - Navy Black",
  "r": 35,
  "g": 34,
  "b": 39,
  "rgb": "rgb(35, 34, 39)",
  "hex": "#232227"
}, {
  "value": "rgb(112.128201634861,83.8287329700131,80.65851498635658)",
  "brand": "Fenty Beauty",
  "colour": "I Quit - True Mink",
  "r": 112,
  "g": 83,
  "b": 80,
  "rgb": "rgb(112, 83, 80)",
  "hex": "#705350"
}, {
  "value": "rgb(90.67438382717718,43.426419274433805,16.657823317651136)",
  "brand": "Fenty Beauty",
  "colour": "Pumpkin Rose - Rich Marigold",
  "r": 90,
  "g": 43,
  "b": 16,
  "rgb": "rgb(90, 43, 16)",
  "hex": "#5a2b10"
}, {
  "value": "rgb(153.48848657535063,89.02621215282677,96.36174624131911)",
  "brand": "Fenty Beauty",
  "colour": "Thicc - Sultry Mauve",
  "r": 153,
  "g": 89,
  "b": 96,
  "rgb": "rgb(153, 89, 96)",
  "hex": "#995960"
}, {
  "value": "rgb(188.2938036908328,51.74814940544527,39.05573000650473)",
  "brand": "Fenty Beauty",
  "colour": "Tiger Tini - Exotic Orange",
  "r": 188,
  "g": 51,
  "b": 39,
  "rgb": "rgb(188, 51, 39)",
  "hex": "#bc3327"
}, {
  "value": "rgb(22.928333644016774,47.72143066393241,53.41385922395761)",
  "brand": "Fenty Beauty",
  "colour": "Turks and Caicos - Deep Teal",
  "r": 22,
  "g": 47,
  "b": 53,
  "rgb": "rgb(22, 47, 53)",
  "hex": "#162f35"
}, {
  "value": "rgb(38.10645313233924,25.666204870997007,70.05173034826736)",
  "brand": "Fenty Beauty",
  "colour": "Violet Fury - Vivid Violet",
  "r": 38,
  "g": 25,
  "b": 70,
  "rgb": "rgb(38, 25, 70)",
  "hex": "#261946"
}, {
  "value": "rgb(178.0,124.0,111.0)",
  "brand": "Jeffree Star",
  "colour": "Celebrity Skin",
  "r": 178,
  "g": 124,
  "b": 111,
  "rgb": "rgb(178, 124, 111)",
  "hex": "#b27c6f"
}, {
  "value": "rgb(255.0,148.0,216.0)",
  "brand": "Jeffree Star",
  "colour": "Ice Cream BLVD",
  "r": 255,
  "g": 148,
  "b": 216,
  "rgb": "rgb(255, 148, 216)",
  "hex": "#ff94d8"
}, {
  "value": "rgb(168.0,55.0,109.0)",
  "brand": "Jeffree Star",
  "colour": "Beauty Pageant",
  "r": 168,
  "g": 55,
  "b": 109,
  "rgb": "rgb(168, 55, 109)",
  "hex": "#a8376d"
}, {
  "value": "rgb(89.0,28.0,15.0)",
  "brand": "Jeffree Star",
  "colour": "Unicorn Blood",
  "r": 89,
  "g": 28,
  "b": 15,
  "rgb": "rgb(89, 28, 15)",
  "hex": "#591c0f"
}, {
  "value": "rgb(136.0,48.0,56.0)",
  "brand": "Jeffree Star",
  "colour": "Calabasas",
  "r": 136,
  "g": 48,
  "b": 56,
  "rgb": "rgb(136, 48, 56)",
  "hex": "#883038"
}, {
  "value": "rgb(85.0,30.0,52.0)",
  "brand": "Jeffree Star",
  "colour": "Sinister",
  "r": 85,
  "g": 30,
  "b": 52,
  "rgb": "rgb(85, 30, 52)",
  "hex": "#551e34"
}, {
  "value": "rgb(148.0,28.0,38.0)",
  "brand": "Jeffree Star",
  "colour": "Redrum",
  "r": 148,
  "g": 28,
  "b": 38,
  "rgb": "rgb(148, 28, 38)",
  "hex": "#941c26"
}, {
  "value": "rgb(146.0,74.0,78.0)",
  "brand": "Jeffree Star",
  "colour": "Allegedly",
  "r": 146,
  "g": 74,
  "b": 78,
  "rgb": "rgb(146, 74, 78)",
  "hex": "#924a4e"
}, {
  "value": "rgb(85.0,77.0,90.0)",
  "brand": "Jeffree Star",
  "colour": "Gargoyle",
  "r": 85,
  "g": 77,
  "b": 90,
  "rgb": "rgb(85, 77, 90)",
  "hex": "#554d5a"
}, {
  "value": "rgb(141.72651006711408,86.8724832214765,58.620805369127496)",
  "brand": "Urban Decay",
  "colour": "ROACH",
  "r": 141,
  "g": 86,
  "b": 58,
  "rgb": "rgb(141, 86, 58)",
  "hex": "#8d563a"
}, {
  "value": "rgb(174.3106995884774,73.47119341563777,60.44444444444437)",
  "brand": "Urban Decay",
  "colour": "BACKSEAT",
  "r": 174,
  "g": 73,
  "b": 60,
  "rgb": "rgb(174, 73, 60)",
  "hex": "#ae493c"
}, {
  "value": "rgb(239.99394987035444,49.51339671564411,98.42955920483996)",
  "brand": "Urban Decay",
  "colour": "CALIENTE",
  "r": 239,
  "g": 49,
  "b": 98,
  "rgb": "rgb(239, 49, 98)",
  "hex": "#ef3162"
}, {
  "value": "rgb(3.272166538165582,96.20508866615288,165.06399383192)",
  "brand": "Urban Decay",
  "colour": "CONTROL",
  "r": 3,
  "g": 96,
  "b": 165,
  "rgb": "rgb(3, 96, 165)",
  "hex": "#0360a5"
}, {
  "value": "rgb(122.05059523809523,77.92460317460316,110.61111111111107)",
  "brand": "Urban Decay",
  "colour": "PLAGUE",
  "r": 122,
  "g": 77,
  "b": 110,
  "rgb": "rgb(122, 77, 110)",
  "hex": "#7a4d6e"
}, {
  "value": "rgb(158.8586688578473,8.379622021364447,29.391947411667488)",
  "brand": "Urban Decay",
  "colour": "69",
  "r": 158,
  "g": 8,
  "b": 29,
  "rgb": "rgb(158, 8, 29)",
  "hex": "#9e081d"
}, {
  "value": "rgb(194.39819004524907,12.647058823529967,99.81628959276094)",
  "brand": "Urban Decay",
  "colour": "ANARCHY",
  "r": 194,
  "g": 12,
  "b": 99,
  "rgb": "rgb(194, 12, 99)",
  "hex": "#c20c63"
}, {
  "value": "rgb(193.55148095909658,7.806770098729828,5.160789844852701)",
  "brand": "Urban Decay",
  "colour": "BANG",
  "r": 193,
  "g": 7,
  "b": 5,
  "rgb": "rgb(193, 7, 5)",
  "hex": "#c10705"
}, {
  "value": "rgb(224.5460599334073,136.53163152053247,112.93451720310725)",
  "brand": "Urban Decay",
  "colour": "BARFLY",
  "r": 224,
  "g": 136,
  "b": 112,
  "rgb": "rgb(224, 136, 112)",
  "hex": "#e08870"
}, {
  "value": "rgb(142.6709732988801,64.2782084409985,72.80792420327265)",
  "brand": "Urban Decay",
  "colour": "CRISIS",
  "r": 142,
  "g": 64,
  "b": 72,
  "rgb": "rgb(142, 64, 72)",
  "hex": "#8e4048"
}, {
  "value": "rgb(243.0072568940495,5.526850507983653,100.8751814223507)",
  "brand": "Urban Decay",
  "colour": "CRUSH",
  "r": 243,
  "g": 5,
  "b": 100,
  "rgb": "rgb(243, 5, 100)",
  "hex": "#f30564"
}, {
  "value": "rgb(158.87192536047485,76.4724342663277,123.1229855810004)",
  "brand": "Urban Decay",
  "colour": "CRUZ",
  "r": 158,
  "g": 76,
  "b": 123,
  "rgb": "rgb(158, 76, 123)",
  "hex": "#9e4c7b"
}, {
  "value": "rgb(223.42383512544788,113.60394265232972,132.5071684587814)",
  "brand": "Urban Decay",
  "colour": "DISOBEDIENT",
  "r": 223,
  "g": 113,
  "b": 132,
  "rgb": "rgb(223, 113, 132)",
  "hex": "#df7184"
}, {
  "value": "rgb(233.35185185185208,31.935185185184423,24.856060606060858)",
  "brand": "Urban Decay",
  "colour": "EZ",
  "r": 233,
  "g": 31,
  "b": 24,
  "rgb": "rgb(233, 31, 24)",
  "hex": "#e91f18"
}, {
  "value": "rgb(127.4076723016912,3.9921976592970765,21.1762028608579)",
  "brand": "Urban Decay",
  "colour": "F-BOMB",
  "r": 127,
  "g": 3,
  "b": 21,
  "rgb": "rgb(127, 3, 21)",
  "hex": "#7f0315"
}, {
  "value": "rgb(128.2913806254763,7.140350877192063,71.64073226544733)",
  "brand": "Urban Decay",
  "colour": "FIREBIRD",
  "r": 128,
  "g": 7,
  "b": 71,
  "rgb": "rgb(128, 7, 71)",
  "hex": "#800747"
}, {
  "value": "rgb(239.4710451977402,15.512711864407152,132.89548022598865)",
  "brand": "Urban Decay",
  "colour": "FRENEMY",
  "r": 239,
  "g": 15,
  "b": 132,
  "rgb": "rgb(239, 15, 132)",
  "hex": "#ef0f84"
}, {
  "value": "rgb(99.21069797782033,15.657534246574727,27.04566210045803)",
  "brand": "Urban Decay",
  "colour": "GASH",
  "r": 99,
  "g": 15,
  "b": 27,
  "rgb": "rgb(99, 15, 27)",
  "hex": "#630f1b"
}, {
  "value": "rgb(195.6927871772039,112.31878895814816,87.89314336598349)",
  "brand": "Urban Decay",
  "colour": "INSANITY",
  "r": 195,
  "g": 112,
  "b": 87,
  "rgb": "rgb(195, 112, 87)",
  "hex": "#c37057"
}, {
  "value": "rgb(208.5203389830509,103.51949152542409,88.30508474576328)",
  "brand": "Urban Decay",
  "colour": "INTERROGATE",
  "r": 208,
  "g": 103,
  "b": 88,
  "rgb": "rgb(208, 103, 88)",
  "hex": "#d06758"
}, {
  "value": "rgb(131.94448030987726,5.321497740476353,52.71142672692168)",
  "brand": "Urban Decay",
  "colour": "JILTED",
  "r": 131,
  "g": 5,
  "b": 52,
  "rgb": "rgb(131, 5, 52)",
  "hex": "#830534"
}, {
  "value": "rgb(172.33211009174298,84.11376146788989,77.23761467889855)",
  "brand": "Urban Decay",
  "colour": "LIAR",
  "r": 172,
  "g": 84,
  "b": 77,
  "rgb": "rgb(172, 84, 77)",
  "hex": "#ac544d"
}, {
  "value": "rgb(148.78082191780823,22.260273972603073,52.81115459882638)",
  "brand": "Urban Decay",
  "colour": "MANIC",
  "r": 148,
  "g": 22,
  "b": 52,
  "rgb": "rgb(148, 22, 52)",
  "hex": "#941634"
}, {
  "value": "rgb(113.36303387334272,19.801178203240003,64.81664212076643)",
  "brand": "Urban Decay",
  "colour": "MOSHPIT",
  "r": 113,
  "g": 19,
  "b": 64,
  "rgb": "rgb(113, 19, 64)",
  "hex": "#711340"
}, {
  "value": "rgb(101.89933333333339,7.8606666666665745,18.80733333333282)",
  "brand": "Urban Decay",
  "colour": "MRS. MIA WALLACE",
  "r": 101,
  "g": 7,
  "b": 18,
  "rgb": "rgb(101, 7, 18)",
  "hex": "#650712"
}, {
  "value": "rgb(175.756194251734,77.87413280475691,81.07829534192345)",
  "brand": "Urban Decay",
  "colour": "NAKED",
  "r": 175,
  "g": 77,
  "b": 81,
  "rgb": "rgb(175, 77, 81)",
  "hex": "#af4d51"
}, {
  "value": "rgb(210.6504927975739,118.36846095526958,120.10310841546594)",
  "brand": "Urban Decay",
  "colour": "NATIVE",
  "r": 210,
  "g": 118,
  "b": 120,
  "rgb": "rgb(210, 118, 120)",
  "hex": "#d27678"
}, {
  "value": "rgb(94.84385607603541,21.913102511881313,10.298031228785419)",
  "brand": "Urban Decay",
  "colour": "NIGHTHAWK",
  "r": 94,
  "g": 21,
  "b": 10,
  "rgb": "rgb(94, 21, 10)",
  "hex": "#5e150a"
}, {
  "value": "rgb(182.79833206974988,7.737680060651499,8.34799090219822)",
  "brand": "Urban Decay",
  "colour": "NO-TELL MOTEL",
  "r": 182,
  "g": 7,
  "b": 8,
  "rgb": "rgb(182, 7, 8)",
  "hex": "#b60708"
}, {
  "value": "rgb(220.7470355731224,75.66304347826066,120.87944664031602)",
  "brand": "Urban Decay",
  "colour": "PDA",
  "r": 220,
  "g": 75,
  "b": 120,
  "rgb": "rgb(220, 75, 120)",
  "hex": "#dc4b78"
}, {
  "value": "rgb(154.47194465795522,57.074558032283015,80.8816295157568)",
  "brand": "Urban Decay",
  "colour": "RAPTURE",
  "r": 154,
  "g": 57,
  "b": 80,
  "rgb": "rgb(154, 57, 80)",
  "hex": "#9a3950"
}, {
  "value": "rgb(166.0319488817891,79.59584664536744,83.53115015974441)",
  "brand": "Urban Decay",
  "colour": "RAVENSWOOD",
  "r": 166,
  "g": 79,
  "b": 83,
  "rgb": "rgb(166, 79, 83)",
  "hex": "#a64f53"
}, {
  "value": "rgb(99.2669090909104,7.2560000000007605,18.723636363636935)",
  "brand": "Urban Decay",
  "colour": "ROCK STEADY",
  "r": 99,
  "g": 7,
  "b": 18,
  "rgb": "rgb(99, 7, 18)",
  "hex": "#630712"
}, {
  "value": "rgb(163.49565217391313,86.20395256917021,97.34940711462477)",
  "brand": "Urban Decay",
  "colour": "RUSH",
  "r": 163,
  "g": 86,
  "b": 97,
  "rgb": "rgb(163, 86, 97)",
  "hex": "#a35661"
}, {
  "value": "rgb(114.10834132310654,25.24928092042242,51.32023010546443)",
  "brand": "Urban Decay",
  "colour": "SABOTAGE",
  "r": 114,
  "g": 25,
  "b": 51,
  "rgb": "rgb(114, 25, 51)",
  "hex": "#721933"
}, {
  "value": "rgb(52.85382993675416,4.59241040056348,11.158116654954682)",
  "brand": "Urban Decay",
  "colour": "SHAME",
  "r": 52,
  "g": 4,
  "b": 11,
  "rgb": "rgb(52, 4, 11)",
  "hex": "#34040b"
}, {
  "value": "rgb(95.68012232415786,11.67400611620895,80.59449541284322)",
  "brand": "Urban Decay",
  "colour": "SPEEDBALL",
  "r": 95,
  "g": 11,
  "b": 80,
  "rgb": "rgb(95, 11, 80)",
  "hex": "#5f0b50"
}, {
  "value": "rgb(168.86333333333337,8.544999999998844,15.71416666666731)",
  "brand": "Urban Decay",
  "colour": "SPIDERWEB",
  "r": 168,
  "g": 8,
  "b": 15,
  "rgb": "rgb(168, 8, 15)",
  "hex": "#a8080f"
}, {
  "value": "rgb(238.5096079938508,79.96310530361293,91.13297463489658)",
  "brand": "Urban Decay",
  "colour": "STREAK",
  "r": 238,
  "g": 79,
  "b": 91,
  "rgb": "rgb(238, 79, 91)",
  "hex": "#ee4f5b"
}, {
  "value": "rgb(229.25922887612825,36.61689909762029,61.72354388843238)",
  "brand": "Urban Decay",
  "colour": "TRYST",
  "r": 229,
  "g": 36,
  "b": 61,
  "rgb": "rgb(229, 36, 61)",
  "hex": "#e5243d"
}, {
  "value": "rgb(175.52554112554097,115.29004329004329,172.71688311688322)",
  "brand": "Urban Decay",
  "colour": "TWITCH",
  "r": 175,
  "g": 115,
  "b": 172,
  "rgb": "rgb(175, 115, 172)",
  "hex": "#af73ac"
}, {
  "value": "rgb(76.63702623906829,5.230320699707562,28.593294460641914)",
  "brand": "Urban Decay",
  "colour": "VENOM",
  "r": 76,
  "g": 5,
  "b": 28,
  "rgb": "rgb(76, 5, 28)",
  "hex": "#4c051c"
}, {
  "value": "rgb(174.95497026338137,95.93797790994022,109.82922684791788)",
  "brand": "Urban Decay",
  "colour": "VIOLATE",
  "r": 174,
  "g": 95,
  "b": 109,
  "rgb": "rgb(174, 95, 109)",
  "hex": "#ae5f6d"
}, {
  "value": "rgb(236.29501607717071,139.40916398713827,133.87781350482317)",
  "brand": "Urban Decay",
  "colour": "WEIRDO",
  "r": 236,
  "g": 139,
  "b": 133,
  "rgb": "rgb(236, 139, 133)",
  "hex": "#ec8b85"
}, {
  "value": "rgb(240.19197707736387,78.84909264565458,81.30754536771731)",
  "brand": "Urban Decay",
  "colour": "WIRED",
  "r": 240,
  "g": 78,
  "b": 81,
  "rgb": "rgb(240, 78, 81)",
  "hex": "#f04e51"
}, {
  "value": "rgb(197.61644951140065,13.47475570032504,47.422638436481634)",
  "brand": "Urban Decay",
  "colour": "WONDERLAND",
  "r": 197,
  "g": 13,
  "b": 47,
  "rgb": "rgb(197, 13, 47)",
  "hex": "#c50d2f"
}, {
  "value": "rgb(193.00890868596886,90.70267260579084,129.285077951002)",
  "brand": "Urban Decay",
  "colour": "ZZ",
  "r": 193,
  "g": 90,
  "b": 129,
  "rgb": "rgb(193, 90, 129)",
  "hex": "#c15a81"
}, {
  "value": "rgb(196.04052684903743,115.4478216818643,93.20466058763938)",
  "brand": "Urban Decay",
  "colour": "FUEL 2.0",
  "r": 196,
  "g": 115,
  "b": 93,
  "rgb": "rgb(196, 115, 93)",
  "hex": "#c4735d"
}, {
  "value": "rgb(248.01380368098145,123.13036809815955,98.86963190184039)",
  "brand": "Urban Decay",
  "colour": "FIRST SIN",
  "r": 248,
  "g": 123,
  "b": 98,
  "rgb": "rgb(248, 123, 98)",
  "hex": "#f87b62"
}, {
  "value": "rgb(140.1715330450506,76.02759123972201,138.72168093848245)",
  "brand": "Urban Decay",
  "colour": "CLOUD9",
  "r": 140,
  "g": 76,
  "b": 138,
  "rgb": "rgb(140, 76, 138)",
  "hex": "#8c4c8a"
}, {
  "value": "rgb(210.0,27.0,49.0)",
  "brand": "Sugarpill",
  "colour": "Nurse",
  "r": 210,
  "g": 27,
  "b": 49,
  "rgb": "rgb(210, 27, 49)",
  "hex": "#d21b31"
}, {
  "value": "rgb(233.0,56.0,123.0)",
  "brand": "Sugarpill",
  "colour": "Girl Crush",
  "r": 233,
  "g": 56,
  "b": 123,
  "rgb": "rgb(233, 56, 123)",
  "hex": "#e9387b"
}, {
  "value": "rgb(255.0,78.0,87.0)",
  "brand": "Sugarpill",
  "colour": "Cubby",
  "r": 255,
  "g": 78,
  "b": 87,
  "rgb": "rgb(255, 78, 87)",
  "hex": "#ff4e57"
}, {
  "value": "rgb(90.0,68.0,111.0)",
  "brand": "Sugarpill",
  "colour": "Spank",
  "r": 90,
  "g": 68,
  "b": 111,
  "rgb": "rgb(90, 68, 111)",
  "hex": "#5a446f"
}, {
  "value": "rgb(0.0,69.0,84.0)",
  "brand": "Sugarpill",
  "colour": "U4EA",
  "r": 0,
  "g": 69,
  "b": 84,
  "rgb": "rgb(0, 69, 84)",
  "hex": "#004554"
}, {
  "value": "rgb(255.0,65.0,16.0)",
  "brand": "Sugarpill",
  "colour": "Detox",
  "r": 255,
  "g": 65,
  "b": 16,
  "rgb": "rgb(255, 65, 16)",
  "hex": "#ff4110"
}, {
  "value": "rgb(255.0,171.0,63.0)",
  "brand": "Sugarpill",
  "colour": "Glint",
  "r": 255,
  "g": 171,
  "b": 63,
  "rgb": "rgb(255, 171, 63)",
  "hex": "#ffab3f"
}, {
  "value": "rgb(85.0,32.0,38.0)",
  "brand": "Sugarpill",
  "colour": "Anti-Socialite",
  "r": 85,
  "g": 32,
  "b": 38,
  "rgb": "rgb(85, 32, 38)",
  "hex": "#552026"
}, {
  "value": "rgb(7.0,5.0,8.0)",
  "brand": "Sugarpill",
  "colour": "Zero",
  "r": 7,
  "g": 5,
  "b": 8,
  "rgb": "rgb(7, 5, 8)",
  "hex": "#070508"
}, {
  "value": "rgb(46.0,49.0,72.0)",
  "brand": "Sugarpill",
  "colour": "Shiver",
  "r": 46,
  "g": 49,
  "b": 72,
  "rgb": "rgb(46, 49, 72)",
  "hex": "#2e3148"
}, {
  "value": "rgb(54.0,38.0,47.0)",
  "brand": "Sugarpill",
  "colour": "Dark-Sided",
  "r": 54,
  "g": 38,
  "b": 47,
  "rgb": "rgb(54, 38, 47)",
  "hex": "#36262f"
}, {
  "value": "rgb(182.0,117.0,92.0)",
  "brand": "Dose of Colors",
  "colour": "Glazed",
  "r": 182,
  "g": 117,
  "b": 92,
  "rgb": "rgb(182, 117, 92)",
  "hex": "#b6755c"
}, {
  "value": "rgb(174.0,111.0,107.0)",
  "brand": "Dose of Colors",
  "colour": "Parfait",
  "r": 174,
  "g": 111,
  "b": 107,
  "rgb": "rgb(174, 111, 107)",
  "hex": "#ae6f6b"
}, {
  "value": "rgb(111.0,58.0,45.0)",
  "brand": "Dose of Colors",
  "colour": "Mocha",
  "r": 111,
  "g": 58,
  "b": 45,
  "rgb": "rgb(111, 58, 45)",
  "hex": "#6f3a2d"
}, {
  "value": "rgb(97.0,37.0,33.0)",
  "brand": "Dose of Colors",
  "colour": "Lava Cake",
  "r": 97,
  "g": 37,
  "b": 33,
  "rgb": "rgb(97, 37, 33)",
  "hex": "#612521"
}, {
  "value": "rgb(75.0,39.0,25.0)",
  "brand": "Dose of Colors",
  "colour": "Fudge",
  "r": 75,
  "g": 39,
  "b": 25,
  "rgb": "rgb(75, 39, 25)",
  "hex": "#4b2719"
}, {
  "value": "rgb(198.0,137.0,102.0)",
  "brand": "Dose of Colors",
  "colour": "Butterscotch",
  "r": 198,
  "g": 137,
  "b": 102,
  "rgb": "rgb(198, 137, 102)",
  "hex": "#c68966"
}, {
  "value": "rgb(133.0,59.0,41.0)",
  "brand": "Dose of Colors",
  "colour": "Cinnamon Swirl",
  "r": 133,
  "g": 59,
  "b": 41,
  "rgb": "rgb(133, 59, 41)",
  "hex": "#853b29"
}, {
  "value": "rgb(186.0,118.0,102.0)",
  "brand": "Dose of Colors",
  "colour": "Br??l??e",
  "r": 186,
  "g": 118,
  "b": 102,
  "rgb": "rgb(186, 118, 102)",
  "hex": "#ba7666"
}, {
  "value": "rgb(136.0,83.0,61.0)",
  "brand": "Dose of Colors",
  "colour": "Toast",
  "r": 136,
  "g": 83,
  "b": 61,
  "rgb": "rgb(136, 83, 61)",
  "hex": "#88533d"
}, {
  "value": "rgb(181.0,103.0,112.0)",
  "brand": "Dose of Colors",
  "colour": "Mochi",
  "r": 181,
  "g": 103,
  "b": 112,
  "rgb": "rgb(181, 103, 112)",
  "hex": "#b56770"
}, {
  "value": "rgb(211.0,142.0,153.0)",
  "brand": "Dose of Colors",
  "colour": "Soft Touch",
  "r": 211,
  "g": 142,
  "b": 153,
  "rgb": "rgb(211, 142, 153)",
  "hex": "#d38e99"
}, {
  "value": "rgb(223.0,134.0,130.0)",
  "brand": "Dose of Colors",
  "colour": "Sorbet",
  "r": 223,
  "g": 134,
  "b": 130,
  "rgb": "rgb(223, 134, 130)",
  "hex": "#df8682"
}, {
  "value": "rgb(217.0,102.0,82.0)",
  "brand": "Dose of Colors",
  "colour": "Angelic",
  "r": 217,
  "g": 102,
  "b": 82,
  "rgb": "rgb(217, 102, 82)",
  "hex": "#d96652"
}, {
  "value": "rgb(215.0,128.0,113.0)",
  "brand": "Dose of Colors",
  "colour": "Coy",
  "r": 215,
  "g": 128,
  "b": 113,
  "rgb": "rgb(215, 128, 113)",
  "hex": "#d78071"
}, {
  "value": "rgb(232.0,49.0,60.0)",
  "brand": "Dose of Colors",
  "colour": "Karma",
  "r": 232,
  "g": 49,
  "b": 60,
  "rgb": "rgb(232, 49, 60)",
  "hex": "#e8313c"
}, {
  "value": "rgb(223.0,109.0,118.0)",
  "brand": "Dose of Colors",
  "colour": "Play Date",
  "r": 223,
  "g": 109,
  "b": 118,
  "rgb": "rgb(223, 109, 118)",
  "hex": "#df6d76"
}, {
  "value": "rgb(178.0,136.0,121.0)",
  "brand": "Dose of Colors",
  "colour": "Poise",
  "r": 178,
  "g": 136,
  "b": 121,
  "rgb": "rgb(178, 136, 121)",
  "hex": "#b28879"
}, {
  "value": "rgb(188.0,115.0,117.0)",
  "brand": "Dose of Colors",
  "colour": "Blush",
  "r": 188,
  "g": 115,
  "b": 117,
  "rgb": "rgb(188, 115, 117)",
  "hex": "#bc7375"
}, {
  "value": "rgb(154.0,91.0,82.0)",
  "brand": "Dose of Colors",
  "colour": "Ditto",
  "r": 154,
  "g": 91,
  "b": 82,
  "rgb": "rgb(154, 91, 82)",
  "hex": "#9a5b52"
}, {
  "value": "rgb(229.0,127.0,108.0)",
  "brand": "Dose of Colors",
  "colour": "Hey Girl",
  "r": 229,
  "g": 127,
  "b": 108,
  "rgb": "rgb(229, 127, 108)",
  "hex": "#e57f6c"
}, {
  "value": "rgb(193.0,83.0,70.0)",
  "brand": "Dose of Colors",
  "colour": "Aftermath",
  "r": 193,
  "g": 83,
  "b": 70,
  "rgb": "rgb(193, 83, 70)",
  "hex": "#c15346"
}, {
  "value": "rgb(169.11558538404148,124.54436987322913,82.35272184936608)",
  "brand": "NYX",
  "colour": "Grind",
  "r": 169,
  "g": 124,
  "b": 82,
  "rgb": "rgb(169, 124, 82)",
  "hex": "#a97c52"
}, {
  "value": "rgb(193.90216579536968,128.39208364451088,119.17475728155375)",
  "brand": "NYX",
  "colour": "Steam",
  "r": 193,
  "g": 128,
  "b": 119,
  "rgb": "rgb(193, 128, 119)",
  "hex": "#c18077"
}, {
  "value": "rgb(148.59248120300734,95.44661654135261,93.96616541353426)",
  "brand": "NYX",
  "colour": "Ignite",
  "r": 148,
  "g": 95,
  "b": 93,
  "rgb": "rgb(148, 95, 93)",
  "hex": "#945f5d"
}, {
  "value": "rgb(236.2204081632653,118.22959183673444,172.7775510204082)",
  "brand": "NYX",
  "colour": "Electroshock",
  "r": 236,
  "g": 118,
  "b": 172,
  "rgb": "rgb(236, 118, 172)",
  "hex": "#ec76ac"
}, {
  "value": "rgb(185.11122881355922,37.95444915254206,106.78177966101741)",
  "brand": "NYX",
  "colour": "Clinger",
  "r": 185,
  "g": 37,
  "b": 106,
  "rgb": "rgb(185, 37, 106)",
  "hex": "#b9256a"
}, {
  "value": "rgb(152.0947712418302,37.445533769062784,92.51851851851858)",
  "brand": "NYX",
  "colour": "Sweet Tooth",
  "r": 152,
  "g": 37,
  "b": 92,
  "rgb": "rgb(152, 37, 92)",
  "hex": "#98255c"
}, {
  "value": "rgb(127.09880564603678,68.52985884907766,76.5863192182406)",
  "brand": "NYX",
  "colour": "Lolita",
  "r": 127,
  "g": 68,
  "b": 76,
  "rgb": "rgb(127, 68, 76)",
  "hex": "#7f444c"
}, {
  "value": "rgb(112.3093363329585,51.371203599550455,80.95838020247493)",
  "brand": "NYX",
  "colour": "Girl, Bye",
  "r": 112,
  "g": 51,
  "b": 80,
  "rgb": "rgb(112, 51, 80)",
  "hex": "#703350"
}, {
  "value": "rgb(167.86363636363643,36.296536796536486,59.88095238095265)",
  "brand": "NYX",
  "colour": "Spicy",
  "r": 167,
  "g": 36,
  "b": 59,
  "rgb": "rgb(167, 36, 59)",
  "hex": "#a7243b"
}, {
  "value": "rgb(202.18834547346512,135.90218522372507,111.33714880332982)",
  "brand": "NYX",
  "colour": "Fetish",
  "r": 202,
  "g": 135,
  "b": 111,
  "rgb": "rgb(202, 135, 111)",
  "hex": "#ca876f"
}, {
  "value": "rgb(178.80331262939953,112.20807453416128,97.53519668737079)",
  "brand": "NYX",
  "colour": "Ros?? The Day",
  "r": 178,
  "g": 112,
  "b": 97,
  "rgb": "rgb(178, 112, 97)",
  "hex": "#b27061"
}, {
  "value": "rgb(160.2146709816614,104.10679611650444,93.44336569579258)",
  "brand": "NYX",
  "colour": "Free Spirit",
  "r": 160,
  "g": 104,
  "b": 93,
  "rgb": "rgb(160, 104, 93)",
  "hex": "#a0685d"
}, {
  "value": "rgb(172.41701680672267,108.85504201680666,106.72899159663865)",
  "brand": "NYX",
  "colour": "Brunch Me",
  "r": 172,
  "g": 108,
  "b": 106,
  "rgb": "rgb(172, 108, 106)",
  "hex": "#ac6c6a"
}, {
  "value": "rgb(171.2420042643924,89.98081023454145,65.00746268656725)",
  "brand": "NYX",
  "colour": "Peach Don't Kill My Vibe",
  "r": 171,
  "g": 89,
  "b": 65,
  "rgb": "rgb(171, 89, 65)",
  "hex": "#ab5941"
}, {
  "value": "rgb(138.49684873949562,117.23004201680683,112.23424369747892)",
  "brand": "NYX",
  "colour": "Munchies",
  "r": 138,
  "g": 117,
  "b": 112,
  "rgb": "rgb(138, 117, 112)",
  "hex": "#8a7570"
}, {
  "value": "rgb(104.81681034482742,83.18103448275907,82.23383620689626)",
  "brand": "NYX",
  "colour": "Moonwalk",
  "r": 104,
  "g": 83,
  "b": 82,
  "rgb": "rgb(104, 83, 82)",
  "hex": "#685352"
}, {
  "value": "rgb(88.38632162661756,52.6728280961184,47.19038817005585)",
  "brand": "NYX",
  "colour": "Cold Brew",
  "r": 88,
  "g": 52,
  "b": 47,
  "rgb": "rgb(88, 52, 47)",
  "hex": "#58342f"
}, {
  "value": "rgb(70.87431091510453,85.31312017640562,82.1499448732083)",
  "brand": "NYX",
  "colour": "Shake That Money",
  "r": 70,
  "g": 85,
  "b": 82,
  "rgb": "rgb(70, 85, 82)",
  "hex": "#465552"
}, {
  "value": "rgb(165.864077669903,128.42502696871605,150.4800431499458)",
  "brand": "NYX",
  "colour": "Violet Smoke",
  "r": 165,
  "g": 128,
  "b": 150,
  "rgb": "rgb(165, 128, 150)",
  "hex": "#a58096"
}, {
  "value": "rgb(144.3822269807279,101.93790149892955,108.45289079229141)",
  "brand": "NYX",
  "colour": "Lavender & Lace",
  "r": 144,
  "g": 101,
  "b": 108,
  "rgb": "rgb(144, 101, 108)",
  "hex": "#90656c"
}, {
  "value": "rgb(111.70319148936184,58.55638297872291,113.01170212765985)",
  "brand": "NYX",
  "colour": "STFU",
  "r": 111,
  "g": 58,
  "b": 113,
  "rgb": "rgb(111, 58, 113)",
  "hex": "#6f3a71"
}, {
  "value": "rgb(107.14721919302056,82.28898582333667,162.70338058887685)",
  "brand": "NYX",
  "colour": "Cyberpop",
  "r": 107,
  "g": 82,
  "b": 162,
  "rgb": "rgb(107, 82, 162)",
  "hex": "#6b52a2"
}, {
  "value": "rgb(67.99252336448606,54.314018691588885,69.96448598130837)",
  "brand": "NYX",
  "colour": "Doom",
  "r": 67,
  "g": 54,
  "b": 69,
  "rgb": "rgb(67, 54, 69)",
  "hex": "#433645"
}, {
  "value": "rgb(85.00106382978743,96.71595744680832,109.71063829787258)",
  "brand": "NYX",
  "colour": "Smudge Me",
  "r": 85,
  "g": 96,
  "b": 109,
  "rgb": "rgb(85, 96, 109)",
  "hex": "#55606d"
}, {
  "value": "rgb(73.36477987421351,101.1446540880501,111.27044025157215)",
  "brand": "NYX",
  "colour": "Ace",
  "r": 73,
  "g": 101,
  "b": 111,
  "rgb": "rgb(73, 101, 111)",
  "hex": "#49656f"
}, {
  "value": "rgb(44.57142857142888,64.53214285714313,114.04642857142838)",
  "brand": "NYX",
  "colour": "Ex's Tears",
  "r": 44,
  "g": 64,
  "b": 114,
  "rgb": "rgb(44, 64, 114)",
  "hex": "#2c4072"
}, {
  "value": "rgb(181.99393326592536,125.13346814964581,111.52072800808921)",
  "brand": "NYX",
  "colour": "Dainty Daze",
  "r": 181,
  "g": 125,
  "b": 111,
  "rgb": "rgb(181, 125, 111)",
  "hex": "#b57d6f"
}, {
  "value": "rgb(215.21658986175117,123.55837173579074,100.28801843317956)",
  "brand": "NYX",
  "colour": "On The DL",
  "r": 215,
  "g": 123,
  "b": 100,
  "rgb": "rgb(215, 123, 100)",
  "hex": "#d77b64"
}, {
  "value": "rgb(231.9844840961986,101.60589604344526,106.12955779674135)",
  "brand": "NYX",
  "colour": "Oh So Pretty",
  "r": 231,
  "g": 101,
  "b": 106,
  "rgb": "rgb(231, 101, 106)",
  "hex": "#e7656a"
}, {
  "value": "rgb(161.547599674532,63.834011391375086,85.82994304312464)",
  "brand": "NYX",
  "colour": "Obvs",
  "r": 161,
  "g": 63,
  "b": 85,
  "rgb": "rgb(161, 63, 85)",
  "hex": "#a13f55"
}, {
  "value": "rgb(127.07642799678152,80.96057924376564,72.84553499597678)",
  "brand": "NYX",
  "colour": "Conform",
  "r": 127,
  "g": 80,
  "b": 72,
  "rgb": "rgb(127, 80, 72)",
  "hex": "#7f5048"
}, {
  "value": "rgb(191.3073868149327,37.4567116759334,91.2962668784751)",
  "brand": "NYX",
  "colour": "Serpent",
  "r": 191,
  "g": 37,
  "b": 91,
  "rgb": "rgb(191, 37, 91)",
  "hex": "#bf255b"
}, {
  "value": "rgb(191.11111111111092,37.41746031745988,124.88174603174639)",
  "brand": "NYX",
  "colour": "Chain Reaction",
  "r": 191,
  "g": 37,
  "b": 124,
  "rgb": "rgb(191, 37, 124)",
  "hex": "#bf257c"
}, {
  "value": "rgb(213.6377708978327,64.5611455108355,66.67105263157954)",
  "brand": "NYX",
  "colour": "Snarky",
  "r": 213,
  "g": 64,
  "b": 66,
  "rgb": "rgb(213, 64, 66)",
  "hex": "#d54042"
}, {
  "value": "rgb(188.86949293433102,13.260182876143666,56.68578553615909)",
  "brand": "NYX",
  "colour": "In The Red",
  "r": 188,
  "g": 13,
  "b": 56,
  "rgb": "rgb(188, 13, 56)",
  "hex": "#bc0d38"
}, {
  "value": "rgb(160.34786253143335,31.170997485330595,50.19111483654628)",
  "brand": "NYX",
  "colour": "Risktaker",
  "r": 160,
  "g": 31,
  "b": 50,
  "rgb": "rgb(160, 31, 50)",
  "hex": "#a01f32"
}, {
  "value": "rgb(102.31150159744368,34.97124600639003,121.00638977635782)",
  "brand": "NYX",
  "colour": "Ruthless",
  "r": 102,
  "g": 34,
  "b": 121,
  "rgb": "rgb(102, 34, 121)",
  "hex": "#662279"
}, {
  "value": "rgb(146.801568627451,75.54509803921516,69.82117647058746)",
  "brand": "NYX",
  "colour": "Empowered",
  "r": 146,
  "g": 75,
  "b": 69,
  "rgb": "rgb(146, 75, 69)",
  "hex": "#924b45"
}, {
  "value": "rgb(118.6545754328111,38.39076669414649,54.3619126133559)",
  "brand": "NYX",
  "colour": "Dangerous",
  "r": 118,
  "g": 38,
  "b": 54,
  "rgb": "rgb(118, 38, 54)",
  "hex": "#762636"
}, {
  "value": "rgb(212.6828828828828,104.81621621621582,124.10630630630638)",
  "brand": "NYX",
  "colour": "Darling",
  "r": 212,
  "g": 104,
  "b": 124,
  "rgb": "rgb(212, 104, 124)",
  "hex": "#d4687c"
}, {
  "value": "rgb(219.81696428571425,87.9982142857148,101.90446428571506)",
  "brand": "NYX",
  "colour": "Opinionated",
  "r": 219,
  "g": 87,
  "b": 101,
  "rgb": "rgb(219, 87, 101)",
  "hex": "#db5765"
}, {
  "value": "rgb(238.08859649122812,84.13157894736773,142.85000000000025)",
  "brand": "NYX",
  "colour": "Dance Party",
  "r": 238,
  "g": 84,
  "b": 142,
  "rgb": "rgb(238, 84, 142)",
  "hex": "#ee548e"
}, {
  "value": "rgb(208.90369036903684,27.450945094510132,81.0540054005402)",
  "brand": "NYX",
  "colour": "Bombshell",
  "r": 208,
  "g": 27,
  "b": 81,
  "rgb": "rgb(208, 27, 81)",
  "hex": "#d01b51"
}, {
  "value": "rgb(193.79547511312217,106.17828054298613,102.54117647058872)",
  "brand": "NYX",
  "colour": "Boundless",
  "r": 193,
  "g": 106,
  "b": 102,
  "rgb": "rgb(193, 106, 102)",
  "hex": "#c16a66"
}, {
  "value": "rgb(164.5352241537055,89.53430924062152,95.61848124428145)",
  "brand": "NYX",
  "colour": "Almost Famous",
  "r": 164,
  "g": 89,
  "b": 95,
  "rgb": "rgb(164, 89, 95)",
  "hex": "#a4595f"
}, {
  "value": "rgb(158.71953405017885,42.06093189964197,88.6084229390681)",
  "brand": "NYX",
  "colour": "Cocktail Hour",
  "r": 158,
  "g": 42,
  "b": 88,
  "rgb": "rgb(158, 42, 88)",
  "hex": "#9e2a58"
}, {
  "value": "rgb(237.42062780269055,65.56053811659123,52.08251121076324)",
  "brand": "NYX",
  "colour": "Fiery",
  "r": 237,
  "g": 65,
  "b": 52,
  "rgb": "rgb(237, 65, 52)",
  "hex": "#ed4134"
}, {
  "value": "rgb(161.75616438356184,5.319634703195597,8.751598173517046)",
  "brand": "NYX",
  "colour": "Lucy",
  "r": 161,
  "g": 5,
  "b": 8,
  "rgb": "rgb(161, 5, 8)",
  "hex": "#a10508"
}, {
  "value": "rgb(134.72386895475736,9.14274570982721,4.001560062401296)",
  "brand": "NYX",
  "colour": "Red Haute",
  "r": 134,
  "g": 9,
  "b": 4,
  "rgb": "rgb(134, 9, 4)",
  "hex": "#860904"
}, {
  "value": "rgb(102.41457680250709,31.981191222571482,33.850313479622436)",
  "brand": "NYX",
  "colour": "Revolution",
  "r": 102,
  "g": 31,
  "b": 33,
  "rgb": "rgb(102, 31, 33)",
  "hex": "#661f21"
}, {
  "value": "rgb(217.0,31.0,56.0)",
  "brand": "Max Factor",
  "colour": "Marilyn Berry Red",
  "r": 217,
  "g": 31,
  "b": 56,
  "rgb": "rgb(217, 31, 56)",
  "hex": "#d91f38"
}, {
  "value": "rgb(207.0,36.0,39.0)",
  "brand": "Max Factor",
  "colour": "Marilyn Sunset Red",
  "r": 207,
  "g": 36,
  "b": 39,
  "rgb": "rgb(207, 36, 39)",
  "hex": "#cf2427"
}, {
  "value": "rgb(171.0,19.0,57.0)",
  "brand": "Max Factor",
  "colour": "Marilyn Cabernet Red",
  "r": 171,
  "g": 19,
  "b": 57,
  "rgb": "rgb(171, 19, 57)",
  "hex": "#ab1339"
}, {
  "value": "rgb(191.0,32.0,38.0)",
  "brand": "Max Factor",
  "colour": "Marilyn Ruby Red",
  "r": 191,
  "g": 32,
  "b": 38,
  "rgb": "rgb(191, 32, 38)",
  "hex": "#bf2026"
}, {
  "value": "rgb(171.0,86.0,92.0)",
  "brand": "Max Factor",
  "colour": "Pearl Maron",
  "r": 171,
  "g": 86,
  "b": 92,
  "rgb": "rgb(171, 86, 92)",
  "hex": "#ab565c"
}, {
  "value": "rgb(186.0,89.0,89.0)",
  "brand": "Max Factor",
  "colour": "English Rose",
  "r": 186,
  "g": 89,
  "b": 89,
  "rgb": "rgb(186, 89, 89)",
  "hex": "#ba5959"
}, {
  "value": "rgb(212.0,163.0,163.0)",
  "brand": "Max Factor",
  "colour": "Angel Pink",
  "r": 212,
  "g": 163,
  "b": 163,
  "rgb": "rgb(212, 163, 163)",
  "hex": "#d4a3a3"
}, {
  "value": "rgb(110.0,37.0,45.0)",
  "brand": "Max Factor",
  "colour": "Mulberry",
  "r": 110,
  "g": 37,
  "b": 45,
  "rgb": "rgb(110, 37, 45)",
  "hex": "#6e252d"
}, {
  "value": "rgb(153.0,81.0,85.0)",
  "brand": "Max Factor",
  "colour": "Midnight Mauve",
  "r": 153,
  "g": 81,
  "b": 85,
  "rgb": "rgb(153, 81, 85)",
  "hex": "#995155"
}, {
  "value": "rgb(166.0,23.0,23.0)",
  "brand": "Max Factor",
  "colour": "Ruby Tuesday",
  "r": 166,
  "g": 23,
  "b": 23,
  "rgb": "rgb(166, 23, 23)",
  "hex": "#a61717"
}, {
  "value": "rgb(152.0,97.0,95.0)",
  "brand": "Max Factor",
  "colour": "Burnt Caramel",
  "r": 152,
  "g": 97,
  "b": 95,
  "rgb": "rgb(152, 97, 95)",
  "hex": "#98615f"
}, {
  "value": "rgb(133.0,65.0,65.0)",
  "brand": "Max Factor",
  "colour": "Firefly",
  "r": 133,
  "g": 65,
  "b": 65,
  "rgb": "rgb(133, 65, 65)",
  "hex": "#854141"
}, {
  "value": "rgb(181.0,52.0,45.0)",
  "brand": "Max Factor",
  "colour": "Pink Brandy",
  "r": 181,
  "g": 52,
  "b": 45,
  "rgb": "rgb(181, 52, 45)",
  "hex": "#b5342d"
}, {
  "value": "rgb(184.0,53.0,53.0)",
  "brand": "Max Factor",
  "colour": "Bewitching Coral",
  "r": 184,
  "g": 53,
  "b": 53,
  "rgb": "rgb(184, 53, 53)",
  "hex": "#b83535"
}, {
  "value": "rgb(194.0,81.0,100.0)",
  "brand": "Max Factor",
  "colour": "Dusky Rose",
  "r": 194,
  "g": 81,
  "b": 100,
  "rgb": "rgb(194, 81, 100)",
  "hex": "#c25164"
}, {
  "value": "rgb(140.0,74.0,70.0)",
  "brand": "Max Factor",
  "colour": "Rosewood",
  "r": 140,
  "g": 74,
  "b": 70,
  "rgb": "rgb(140, 74, 70)",
  "hex": "#8c4a46"
}, {
  "value": "rgb(117.0,57.0,49.0)",
  "brand": "Max Factor",
  "colour": "Sunbronze",
  "r": 117,
  "g": 57,
  "b": 49,
  "rgb": "rgb(117, 57, 49)",
  "hex": "#753931"
}, {
  "value": "rgb(179.0,30.0,36.0)",
  "brand": "Max Factor",
  "colour": "Chilli",
  "r": 179,
  "g": 30,
  "b": 36,
  "rgb": "rgb(179, 30, 36)",
  "hex": "#b31e24"
}, {
  "value": "rgb(133.0,52.0,56.0)",
  "brand": "Max Factor",
  "colour": "Raisin",
  "r": 133,
  "g": 52,
  "b": 56,
  "rgb": "rgb(133, 52, 56)",
  "hex": "#853438"
}, {
  "value": "rgb(173.0,64.0,95.0)",
  "brand": "Max Factor",
  "colour": "Icy Rose",
  "r": 173,
  "g": 64,
  "b": 95,
  "rgb": "rgb(173, 64, 95)",
  "hex": "#ad405f"
}, {
  "value": "rgb(218.0,153.0,139.0)",
  "brand": "Max Factor",
  "colour": "Simply Nude",
  "r": 218,
  "g": 153,
  "b": 139,
  "rgb": "rgb(218, 153, 139)",
  "hex": "#da998b"
}, {
  "value": "rgb(202.0,138.0,139.0)",
  "brand": "Max Factor",
  "colour": "Nude",
  "r": 202,
  "g": 138,
  "b": 139,
  "rgb": "rgb(202, 138, 139)",
  "hex": "#ca8a8b"
}, {
  "value": "rgb(201.0,76.0,74.0)",
  "brand": "Max Factor",
  "colour": "Sunkiss",
  "r": 201,
  "g": 76,
  "b": 74,
  "rgb": "rgb(201, 76, 74)",
  "hex": "#c94c4a"
}, {
  "value": "rgb(215.0,38.0,56.0)",
  "brand": "Max Factor",
  "colour": "Flame",
  "r": 215,
  "g": 38,
  "b": 56,
  "rgb": "rgb(215, 38, 56)",
  "hex": "#d72638"
}, {
  "value": "rgb(206.0,72.0,99.0)",
  "brand": "Max Factor",
  "colour": "Rose",
  "r": 206,
  "g": 72,
  "b": 99,
  "rgb": "rgb(206, 72, 99)",
  "hex": "#ce4863"
}, {
  "value": "rgb(192.0,3.0,83.0)",
  "brand": "Max Factor",
  "colour": "Blush",
  "r": 192,
  "g": 3,
  "b": 83,
  "rgb": "rgb(192, 3, 83)",
  "hex": "#c00353"
}, {
  "value": "rgb(187.0,6.0,23.0)",
  "brand": "Max Factor",
  "colour": "Desire",
  "r": 187,
  "g": 6,
  "b": 23,
  "rgb": "rgb(187, 6, 23)",
  "hex": "#bb0617"
}, {
  "value": "rgb(127.0,13.0,12.0)",
  "brand": "Max Factor",
  "colour": "Love",
  "r": 127,
  "g": 13,
  "b": 12,
  "rgb": "rgb(127, 13, 12)",
  "hex": "#7f0d0c"
}, {
  "value": "rgb(217.0,124.0,144.0)",
  "brand": "Max Factor",
  "colour": "Evermore Sublime",
  "r": 217,
  "g": 124,
  "b": 144,
  "rgb": "rgb(217, 124, 144)",
  "hex": "#d97c90"
}, {
  "value": "rgb(189.0,113.0,133.0)",
  "brand": "Max Factor",
  "colour": "Evermore Lush",
  "r": 189,
  "g": 113,
  "b": 133,
  "rgb": "rgb(189, 113, 133)",
  "hex": "#bd7185"
}, {
  "value": "rgb(117.0,64.0,64.0)",
  "brand": "Max Factor",
  "colour": "Always Elegant",
  "r": 117,
  "g": 64,
  "b": 64,
  "rgb": "rgb(117, 64, 64)",
  "hex": "#754040"
}, {
  "value": "rgb(154.0,44.0,42.0)",
  "brand": "Max Factor",
  "colour": "Always Chic",
  "r": 154,
  "g": 44,
  "b": 42,
  "rgb": "rgb(154, 44, 42)",
  "hex": "#9a2c2a"
}, {
  "value": "rgb(221.0,148.0,173.0)",
  "brand": "Max Factor",
  "colour": "Stay Exclusive",
  "r": 221,
  "g": 148,
  "b": 173,
  "rgb": "rgb(221, 148, 173)",
  "hex": "#dd94ad"
}, {
  "value": "rgb(221.0,107.0,96.0)",
  "brand": "Max Factor",
  "colour": "Ever Sumptuous",
  "r": 221,
  "g": 107,
  "b": 96,
  "rgb": "rgb(221, 107, 96)",
  "hex": "#dd6b60"
}, {
  "value": "rgb(215.0,71.0,65.0)",
  "brand": "Max Factor",
  "colour": "Just Deluxe",
  "r": 215,
  "g": 71,
  "b": 65,
  "rgb": "rgb(215, 71, 65)",
  "hex": "#d74741"
}, {
  "value": "rgb(207.0,45.0,85.0)",
  "brand": "Max Factor",
  "colour": "So Vivid",
  "r": 207,
  "g": 45,
  "b": 85,
  "rgb": "rgb(207, 45, 85)",
  "hex": "#cf2d55"
}, {
  "value": "rgb(197.0,62.0,116.0)",
  "brand": "Max Factor",
  "colour": "Just Alluring",
  "r": 197,
  "g": 62,
  "b": 116,
  "rgb": "rgb(197, 62, 116)",
  "hex": "#c53e74"
}, {
  "value": "rgb(133.0,44.0,65.0)",
  "brand": "Max Factor",
  "colour": "So Luxuriant",
  "r": 133,
  "g": 44,
  "b": 65,
  "rgb": "rgb(133, 44, 65)",
  "hex": "#852c41"
}, {
  "value": "rgb(51.0,30.0,27.0)",
  "brand": "BH",
  "colour": "Seduction",
  "r": 51,
  "g": 30,
  "b": 27,
  "rgb": "rgb(51, 30, 27)",
  "hex": "#331e1b"
}, {
  "value": "rgb(237.0,94.0,122.0)",
  "brand": "BH",
  "colour": "Crazy In Love",
  "r": 237,
  "g": 94,
  "b": 122,
  "rgb": "rgb(237, 94, 122)",
  "hex": "#ed5e7a"
}, {
  "value": "rgb(150.0,68.0,68.0)",
  "brand": "BH",
  "colour": "Devotion",
  "r": 150,
  "g": 68,
  "b": 68,
  "rgb": "rgb(150, 68, 68)",
  "hex": "#964444"
}, {
  "value": "rgb(179.0,112.0,119.0)",
  "brand": "BH",
  "colour": "Faithful",
  "r": 179,
  "g": 112,
  "b": 119,
  "rgb": "rgb(179, 112, 119)",
  "hex": "#b37077"
}, {
  "value": "rgb(126.0,38.0,146.0)",
  "brand": "BH",
  "colour": "Passionate",
  "r": 126,
  "g": 38,
  "b": 146,
  "rgb": "rgb(126, 38, 146)",
  "hex": "#7e2692"
}, {
  "value": "rgb(92.0,36.0,49.0)",
  "brand": "BH",
  "colour": "Rapture",
  "r": 92,
  "g": 36,
  "b": 49,
  "rgb": "rgb(92, 36, 49)",
  "hex": "#5c2431"
}, {
  "value": "rgb(110.0,54.0,79.0)",
  "brand": "BH",
  "colour": "Blissful",
  "r": 110,
  "g": 54,
  "b": 79,
  "rgb": "rgb(110, 54, 79)",
  "hex": "#6e364f"
}, {
  "value": "rgb(131.0,31.0,57.0)",
  "brand": "BH",
  "colour": "Dark Rose",
  "r": 131,
  "g": 31,
  "b": 57,
  "rgb": "rgb(131, 31, 57)",
  "hex": "#831f39"
}, {
  "value": "rgb(255.0,157.0,133.0)",
  "brand": "BH",
  "colour": "Naked Peach",
  "r": 255,
  "g": 157,
  "b": 133,
  "rgb": "rgb(255, 157, 133)",
  "hex": "#ff9d85"
}, {
  "value": "rgb(191.0,52.0,106.0)",
  "brand": "BH",
  "colour": "Pop Culture",
  "r": 191,
  "g": 52,
  "b": 106,
  "rgb": "rgb(191, 52, 106)",
  "hex": "#bf346a"
}, {
  "value": "rgb(149.0,13.0,25.0)",
  "brand": "BH",
  "colour": "Te Amo",
  "r": 149,
  "g": 13,
  "b": 25,
  "rgb": "rgb(149, 13, 25)",
  "hex": "#950d19"
}, {
  "value": "rgb(214.0,91.0,108.0)",
  "brand": "BH",
  "colour": "Tea Time",
  "r": 214,
  "g": 91,
  "b": 108,
  "rgb": "rgb(214, 91, 108)",
  "hex": "#d65b6c"
}, {
  "value": "rgb(194.0,50.0,46.0)",
  "brand": "BH",
  "colour": "Sweet Mango",
  "r": 194,
  "g": 50,
  "b": 46,
  "rgb": "rgb(194, 50, 46)",
  "hex": "#c2322e"
}, {
  "value": "rgb(244.0,132.0,108.0)",
  "brand": "Rimmel",
  "colour": "Coral in Gold",
  "r": 244,
  "g": 132,
  "b": 108,
  "rgb": "rgb(244, 132, 108)",
  "hex": "#f4846c"
}, {
  "value": "rgb(246.0,150.0,135.0)",
  "brand": "Rimmel",
  "colour": "Nude Pink",
  "r": 246,
  "g": 150,
  "b": 135,
  "rgb": "rgb(246, 150, 135)",
  "hex": "#f69687"
}, {
  "value": "rgb(196.0,18.0,47.0)",
  "brand": "Rimmel",
  "colour": "Alarm",
  "r": 196,
  "g": 18,
  "b": 47,
  "rgb": "rgb(196, 18, 47)",
  "hex": "#c4122f"
}, {
  "value": "rgb(145.0,108.0,114.0)",
  "brand": "Rimmel",
  "colour": "Coffee Shimmer",
  "r": 145,
  "g": 108,
  "b": 114,
  "rgb": "rgb(145, 108, 114)",
  "hex": "#916c72"
}, {
  "value": "rgb(204.0,141.0,120.0)",
  "brand": "Rimmel",
  "colour": "Birthday Suit",
  "r": 204,
  "g": 141,
  "b": 120,
  "rgb": "rgb(204, 141, 120)",
  "hex": "#cc8d78"
}, {
  "value": "rgb(134.0,49.0,44.0)",
  "brand": "Rimmel",
  "colour": "Starry Eyed",
  "r": 134,
  "g": 49,
  "b": 44,
  "rgb": "rgb(134, 49, 44)",
  "hex": "#86312c"
}, {
  "value": "rgb(183.0,75.0,118.0)",
  "brand": "Rimmel",
  "colour": "Amethyst Shimmer",
  "r": 183,
  "g": 75,
  "b": 118,
  "rgb": "rgb(183, 75, 118)",
  "hex": "#b74b76"
}, {
  "value": "rgb(166.0,82.0,101.0)",
  "brand": "Rimmel",
  "colour": "Heather Shimmer",
  "r": 166,
  "g": 82,
  "b": 101,
  "rgb": "rgb(166, 82, 101)",
  "hex": "#a65265"
}, {
  "value": "rgb(175.0,101.0,113.0)",
  "brand": "Rimmel",
  "colour": "Asia",
  "r": 175,
  "g": 101,
  "b": 113,
  "rgb": "rgb(175, 101, 113)",
  "hex": "#af6571"
}, {
  "value": "rgb(209.0,89.0,129.0)",
  "brand": "Rimmel",
  "colour": "Sugar Plum",
  "r": 209,
  "g": 89,
  "b": 129,
  "rgb": "rgb(209, 89, 129)",
  "hex": "#d15981"
}, {
  "value": "rgb(167.0,78.0,106.0)",
  "brand": "Rimmel",
  "colour": "Drop of Sherry",
  "r": 167,
  "g": 78,
  "b": 106,
  "rgb": "rgb(167, 78, 106)",
  "hex": "#a74e6a"
}, {
  "value": "rgb(199.0,5.0,61.0)",
  "brand": "Rimmel",
  "colour": "002 ??? RED INSTINCT",
  "r": 199,
  "g": 5,
  "b": 61,
  "rgb": "rgb(199, 5, 61)",
  "hex": "#c7053d"
}, {
  "value": "rgb(150.0,5.0,57.0)",
  "brand": "Rimmel",
  "colour": "003 ??? CRIMSON LOVE",
  "r": 150,
  "g": 5,
  "b": 57,
  "rgb": "rgb(150, 5, 57)",
  "hex": "#960539"
}, {
  "value": "rgb(213.0,163.0,150.0)",
  "brand": "Rimmel",
  "colour": "03",
  "r": 213,
  "g": 163,
  "b": 150,
  "rgb": "rgb(213, 163, 150)",
  "hex": "#d5a396"
}, {
  "value": "rgb(199.0,51.0,85.0)",
  "brand": "Rimmel",
  "colour": "05",
  "r": 199,
  "g": 51,
  "b": 85,
  "rgb": "rgb(199, 51, 85)",
  "hex": "#c73355"
}, {
  "value": "rgb(191.0,97.0,108.0)",
  "brand": "Rimmel",
  "colour": "08",
  "r": 191,
  "g": 97,
  "b": 108,
  "rgb": "rgb(191, 97, 108)",
  "hex": "#bf616c"
}, {
  "value": "rgb(220.0,109.0,170.0)",
  "brand": "Rimmel",
  "colour": "35",
  "r": 220,
  "g": 109,
  "b": 170,
  "rgb": "rgb(220, 109, 170)",
  "hex": "#dc6daa"
}, {
  "value": "rgb(238.0,35.0,70.0)",
  "brand": "Rimmel",
  "colour": "37",
  "r": 238,
  "g": 35,
  "b": 70,
  "rgb": "rgb(238, 35, 70)",
  "hex": "#ee2346"
}, {
  "value": "rgb(233.0,140.0,136.0)",
  "brand": "Rimmel",
  "colour": "38",
  "r": 233,
  "g": 140,
  "b": 136,
  "rgb": "rgb(233, 140, 136)",
  "hex": "#e98c88"
}, {
  "value": "rgb(240.0,91.0,131.0)",
  "brand": "Rimmel",
  "colour": "110 Leader Of The Pink",
  "r": 240,
  "g": 91,
  "b": 131,
  "rgb": "rgb(240, 91, 131)",
  "hex": "#f05b83"
}, {
  "value": "rgb(237.0,20.0,89.0)",
  "brand": "Rimmel",
  "colour": "120 Call The Shots",
  "r": 237,
  "g": 20,
  "b": 89,
  "rgb": "rgb(237, 20, 89)",
  "hex": "#ed1459"
}, {
  "value": "rgb(206.0,119.0,132.0)",
  "brand": "Rimmel",
  "colour": "200 Salute",
  "r": 206,
  "g": 119,
  "b": 132,
  "rgb": "rgb(206, 119, 132)",
  "hex": "#ce7784"
}, {
  "value": "rgb(196.0,14.0,59.0)",
  "brand": "Rimmel",
  "colour": "500 Take The Stage",
  "r": 196,
  "g": 14,
  "b": 59,
  "rgb": "rgb(196, 14, 59)",
  "hex": "#c40e3b"
}, {
  "value": "rgb(197.0,83.0,111.0)",
  "brand": "Rimmel",
  "colour": "610 High Flyer",
  "r": 197,
  "g": 83,
  "b": 111,
  "rgb": "rgb(197, 83, 111)",
  "hex": "#c5536f"
}, {
  "value": "rgb(176.0,81.0,87.0)",
  "brand": "Rimmel",
  "colour": "700 Trendsetter",
  "r": 176,
  "g": 81,
  "b": 87,
  "rgb": "rgb(176, 81, 87)",
  "hex": "#b05157"
}, {
  "value": "rgb(176.0,81.0,87.0)",
  "brand": "Rimmel",
  "colour": "750 Look Who's Talking",
  "r": 176,
  "g": 81,
  "b": 87,
  "rgb": "rgb(176, 81, 87)",
  "hex": "#b05157"
}, {
  "value": "rgb(133.0,67.0,153.0)",
  "brand": "Rimmel",
  "colour": "800 Run The Show",
  "r": 133,
  "g": 67,
  "b": 153,
  "rgb": "rgb(133, 67, 153)",
  "hex": "#854399"
}, {
  "value": "rgb(146.0,0.0,68.0)",
  "brand": "Rimmel",
  "colour": "810 The Matte Factor",
  "r": 146,
  "g": 0,
  "b": 68,
  "rgb": "rgb(146, 0, 68)",
  "hex": "#920044"
}, {
  "value": "rgb(241.0,102.0,128.0)",
  "brand": "Rimmel",
  "colour": "200 Glow-Rious Pink",
  "r": 241,
  "g": 102,
  "b": 128,
  "rgb": "rgb(241, 102, 128)",
  "hex": "#f16680"
}, {
  "value": "rgb(237.0,8.0,115.0)",
  "brand": "Rimmel",
  "colour": "300 Pink Rules",
  "r": 237,
  "g": 8,
  "b": 115,
  "rgb": "rgb(237, 8, 115)",
  "hex": "#ed0873"
}, {
  "value": "rgb(174.0,77.0,88.0)",
  "brand": "Rimmel",
  "colour": "400 Good Mauve",
  "r": 174,
  "g": 77,
  "b": 88,
  "rgb": "rgb(174, 77, 88)",
  "hex": "#ae4d58"
}, {
  "value": "rgb(238.0,35.0,68.0)",
  "brand": "Rimmel",
  "colour": "500 Red-y, Set, Go!",
  "r": 238,
  "g": 35,
  "b": 68,
  "rgb": "rgb(238, 35, 68)",
  "hex": "#ee2344"
}, {
  "value": "rgb(242.0,113.0,119.0)",
  "brand": "Rimmel",
  "colour": "600 Spin All Spring",
  "r": 242,
  "g": 113,
  "b": 119,
  "rgb": "rgb(242, 113, 119)",
  "hex": "#f27177"
}, {
  "value": "rgb(194.0,110.0,107.0)",
  "brand": "Rimmel",
  "colour": "700 Better & Brighter",
  "r": 194,
  "g": 110,
  "b": 107,
  "rgb": "rgb(194, 110, 107)",
  "hex": "#c26e6b"
}, {
  "value": "rgb(217.0,130.0,158.0)",
  "brand": "Rimmel",
  "colour": "100 Pink Me Love Me",
  "r": 217,
  "g": 130,
  "b": 158,
  "rgb": "rgb(217, 130, 158)",
  "hex": "#d9829e"
}, {
  "value": "rgb(207.0,72.0,126.0)",
  "brand": "Rimmel",
  "colour": "120 You're All Mine",
  "r": 207,
  "g": 72,
  "b": 126,
  "rgb": "rgb(207, 72, 126)",
  "hex": "#cf487e"
}, {
  "value": "rgb(182.0,92.0,124.0)",
  "brand": "Rimmel",
  "colour": "200 It's A Keeper",
  "r": 182,
  "g": 92,
  "b": 124,
  "rgb": "rgb(182, 92, 124)",
  "hex": "#b65c7c"
}, {
  "value": "rgb(203.0,29.0,75.0)",
  "brand": "Rimmel",
  "colour": "500 Revolution Red",
  "r": 203,
  "g": 29,
  "b": 75,
  "rgb": "rgb(203, 29, 75)",
  "hex": "#cb1d4b"
}, {
  "value": "rgb(187.0,25.0,68.0)",
  "brand": "Rimmel",
  "colour": "510 Best Of The Best",
  "r": 187,
  "g": 25,
  "b": 68,
  "rgb": "rgb(187, 25, 68)",
  "hex": "#bb1944"
}, {
  "value": "rgb(206.0,65.0,98.0)",
  "brand": "Rimmel",
  "colour": "610 Cheeky Coral",
  "r": 206,
  "g": 65,
  "b": 98,
  "rgb": "rgb(206, 65, 98)",
  "hex": "#ce4162"
}, {
  "value": "rgb(204.0,38.0,16.0)",
  "brand": "Rimmel",
  "colour": "620 Call Me Crazy",
  "r": 204,
  "g": 38,
  "b": 16,
  "rgb": "rgb(204, 38, 16)",
  "hex": "#cc2610"
}, {
  "value": "rgb(177.0,105.0,112.0)",
  "brand": "Rimmel",
  "colour": "700 Naughty Nude",
  "r": 177,
  "g": 105,
  "b": 112,
  "rgb": "rgb(177, 105, 112)",
  "hex": "#b16970"
}, {
  "value": "rgb(152.0,78.0,89.0)",
  "brand": "Rimmel",
  "colour": "710 Easy Does It",
  "r": 152,
  "g": 78,
  "b": 89,
  "rgb": "rgb(152, 78, 89)",
  "hex": "#984e59"
}, {
  "value": "rgb(128.0,0.0,98.0)",
  "brand": "Rimmel",
  "colour": "800 Under My Spell",
  "r": 128,
  "g": 0,
  "b": 98,
  "rgb": "rgb(128, 0, 98)",
  "hex": "#800062"
}, {
  "value": "rgb(182.0,0.0,70.0)",
  "brand": "Rimmel",
  "colour": "810 One-Of-A-Kind",
  "r": 182,
  "g": 0,
  "b": 70,
  "rgb": "rgb(182, 0, 70)",
  "hex": "#b60046"
}, {
  "value": "rgb(188.0,104.0,105.0)",
  "brand": "Rimmel",
  "colour": "210 Mauve-Ment",
  "r": 188,
  "g": 104,
  "b": 105,
  "rgb": "rgb(188, 104, 105)",
  "hex": "#bc6869"
}, {
  "value": "rgb(172.0,97.0,90.0)",
  "brand": "Rimmel",
  "colour": "760 Ain't No Other",
  "r": 172,
  "g": 97,
  "b": 90,
  "rgb": "rgb(172, 97, 90)",
  "hex": "#ac615a"
}, {
  "value": "rgb(244.0,192.0,167.0)",
  "brand": "Rimmel",
  "colour": "040",
  "r": 244,
  "g": 192,
  "b": 167,
  "rgb": "rgb(244, 192, 167)",
  "hex": "#f4c0a7"
}, {
  "value": "rgb(199.0,129.0,115.0)",
  "brand": "Rimmel",
  "colour": "042",
  "r": 199,
  "g": 129,
  "b": 115,
  "rgb": "rgb(199, 129, 115)",
  "hex": "#c78173"
}, {
  "value": "rgb(181.0,116.0,93.0)",
  "brand": "Rimmel",
  "colour": "043",
  "r": 181,
  "g": 116,
  "b": 93,
  "rgb": "rgb(181, 116, 93)",
  "hex": "#b5745d"
}, {
  "value": "rgb(232.0,45.0,36.0)",
  "brand": "BECCA",
  "colour": "Khlo??'s Hot Tamale",
  "r": 232,
  "g": 45,
  "b": 36,
  "rgb": "rgb(232, 45, 36)",
  "hex": "#e82d24"
}, {
  "value": "rgb(189.0,118.0,98.0)",
  "brand": "BECCA",
  "colour": "Khlo??'s Cupid's Kiss",
  "r": 189,
  "g": 118,
  "b": 98,
  "rgb": "rgb(189, 118, 98)",
  "hex": "#bd7662"
}, {
  "value": "rgb(195.0,30.0,34.0)",
  "brand": "BECCA",
  "colour": "Malika's Brave",
  "r": 195,
  "g": 30,
  "b": 34,
  "rgb": "rgb(195, 30, 34)",
  "hex": "#c31e22"
}, {
  "value": "rgb(213.0,152.0,131.0)",
  "brand": "BECCA",
  "colour": "Malika's Yours Truly",
  "r": 213,
  "g": 152,
  "b": 131,
  "rgb": "rgb(213, 152, 131)",
  "hex": "#d59883"
}, {
  "value": "rgb(166.0,91.0,72.0)",
  "brand": "BECCA",
  "colour": "Taupe",
  "r": 166,
  "g": 91,
  "b": 72,
  "rgb": "rgb(166, 91, 72)",
  "hex": "#a65b48"
}, {
  "value": "rgb(213.0,137.0,113.0)",
  "brand": "BECCA",
  "colour": "Dune",
  "r": 213,
  "g": 137,
  "b": 113,
  "rgb": "rgb(213, 137, 113)",
  "hex": "#d58971"
}, {
  "value": "rgb(209.0,141.0,130.0)",
  "brand": "BECCA",
  "colour": "Sugar",
  "r": 209,
  "g": 141,
  "b": 130,
  "rgb": "rgb(209, 141, 130)",
  "hex": "#d18d82"
}, {
  "value": "rgb(226.0,140.0,123.0)",
  "brand": "BECCA",
  "colour": "Bare",
  "r": 226,
  "g": 140,
  "b": 123,
  "rgb": "rgb(226, 140, 123)",
  "hex": "#e28c7b"
}, {
  "value": "rgb(187.0,111.0,88.0)",
  "brand": "BECCA",
  "colour": "Tawny",
  "r": 187,
  "g": 111,
  "b": 88,
  "rgb": "rgb(187, 111, 88)",
  "hex": "#bb6f58"
}, {
  "value": "rgb(185.0,103.0,107.0)",
  "brand": "BECCA",
  "colour": "Petal",
  "r": 185,
  "g": 103,
  "b": 107,
  "rgb": "rgb(185, 103, 107)",
  "hex": "#b9676b"
}, {
  "value": "rgb(226.0,132.0,122.0)",
  "brand": "BECCA",
  "colour": "Tulip",
  "r": 226,
  "g": 132,
  "b": 122,
  "rgb": "rgb(226, 132, 122)",
  "hex": "#e2847a"
}, {
  "value": "rgb(186.0,95.0,100.0)",
  "brand": "BECCA",
  "colour": "Sorbet",
  "r": 186,
  "g": 95,
  "b": 100,
  "rgb": "rgb(186, 95, 100)",
  "hex": "#ba5f64"
}, {
  "value": "rgb(210.0,129.0,112.0)",
  "brand": "BECCA",
  "colour": "Dusk",
  "r": 210,
  "g": 129,
  "b": 112,
  "rgb": "rgb(210, 129, 112)",
  "hex": "#d28170"
}, {
  "value": "rgb(175.0,88.0,78.0)",
  "brand": "BECCA",
  "colour": "Mocha",
  "r": 175,
  "g": 88,
  "b": 78,
  "rgb": "rgb(175, 88, 78)",
  "hex": "#af584e"
}, {
  "value": "rgb(174.0,97.0,103.0)",
  "brand": "BECCA",
  "colour": "Orchid",
  "r": 174,
  "g": 97,
  "b": 103,
  "rgb": "rgb(174, 97, 103)",
  "hex": "#ae6167"
}, {
  "value": "rgb(214.0,115.0,109.0)",
  "brand": "BECCA",
  "colour": "Blush",
  "r": 214,
  "g": 115,
  "b": 109,
  "rgb": "rgb(214, 115, 109)",
  "hex": "#d6736d"
}, {
  "value": "rgb(164.0,76.0,66.0)",
  "brand": "BECCA",
  "colour": "Burgundy",
  "r": 164,
  "g": 76,
  "b": 66,
  "rgb": "rgb(164, 76, 66)",
  "hex": "#a44c42"
}, {
  "value": "rgb(184.0,93.0,92.0)",
  "brand": "BECCA",
  "colour": "Mauve",
  "r": 184,
  "g": 93,
  "b": 92,
  "rgb": "rgb(184, 93, 92)",
  "hex": "#b85d5c"
}, {
  "value": "rgb(200.0,118.0,107.0)",
  "brand": "BECCA",
  "colour": "Truffle",
  "r": 200,
  "g": 118,
  "b": 107,
  "rgb": "rgb(200, 118, 107)",
  "hex": "#c8766b"
}, {
  "value": "rgb(108.0,36.0,22.0)",
  "brand": "BECCA",
  "colour": "Chocolate",
  "r": 108,
  "g": 36,
  "b": 22,
  "rgb": "rgb(108, 36, 22)",
  "hex": "#6c2416"
}, {
  "value": "rgb(179.0,102.0,96.0)",
  "brand": "BECCA",
  "colour": "Souffle",
  "r": 179,
  "g": 102,
  "b": 96,
  "rgb": "rgb(179, 102, 96)",
  "hex": "#b36660"
}, {
  "value": "rgb(193.0,73.0,74.0)",
  "brand": "BECCA",
  "colour": "Rosewood",
  "r": 193,
  "g": 73,
  "b": 74,
  "rgb": "rgb(193, 73, 74)",
  "hex": "#c1494a"
}, {
  "value": "rgb(232.0,68.0,59.0)",
  "brand": "BECCA",
  "colour": "Poppy",
  "r": 232,
  "g": 68,
  "b": 59,
  "rgb": "rgb(232, 68, 59)",
  "hex": "#e8443b"
}, {
  "value": "rgb(255.0,105.0,114.0)",
  "brand": "BECCA",
  "colour": "Blaze",
  "r": 255,
  "g": 105,
  "b": 114,
  "rgb": "rgb(255, 105, 114)",
  "hex": "#ff6972"
}, {
  "value": "rgb(218.0,20.0,17.0)",
  "brand": "BECCA",
  "colour": "Flame",
  "r": 218,
  "g": 20,
  "b": 17,
  "rgb": "rgb(218, 20, 17)",
  "hex": "#da1411"
}, {
  "value": "rgb(185.0,28.0,35.0)",
  "brand": "BECCA",
  "colour": "Cherry",
  "r": 185,
  "g": 28,
  "b": 35,
  "rgb": "rgb(185, 28, 35)",
  "hex": "#b91c23"
}, {
  "value": "rgb(199.0,13.0,16.0)",
  "brand": "BECCA",
  "colour": "Crimson",
  "r": 199,
  "g": 13,
  "b": 16,
  "rgb": "rgb(199, 13, 16)",
  "hex": "#c70d10"
}, {
  "value": "rgb(171.0,35.0,37.0)",
  "brand": "BECCA",
  "colour": "Garnet",
  "r": 171,
  "g": 35,
  "b": 37,
  "rgb": "rgb(171, 35, 37)",
  "hex": "#ab2325"
}, {
  "value": "rgb(170.0,30.0,15.0)",
  "brand": "BECCA",
  "colour": "Scarlet",
  "r": 170,
  "g": 30,
  "b": 15,
  "rgb": "rgb(170, 30, 15)",
  "hex": "#aa1e0f"
}, {
  "value": "rgb(177.0,21.0,43.0)",
  "brand": "BECCA",
  "colour": "Ruby",
  "r": 177,
  "g": 21,
  "b": 43,
  "rgb": "rgb(177, 21, 43)",
  "hex": "#b1152b"
}, {
  "value": "rgb(158.0,56.0,42.0)",
  "brand": "BECCA",
  "colour": "Rouge",
  "r": 158,
  "g": 56,
  "b": 42,
  "rgb": "rgb(158, 56, 42)",
  "hex": "#9e382a"
}, {
  "value": "rgb(127.0,37.0,39.0)",
  "brand": "BECCA",
  "colour": "Merlot",
  "r": 127,
  "g": 37,
  "b": 39,
  "rgb": "rgb(127, 37, 39)",
  "hex": "#7f2527"
}, {
  "value": "rgb(143.0,21.0,20.0)",
  "brand": "BECCA",
  "colour": "Ember",
  "r": 143,
  "g": 21,
  "b": 20,
  "rgb": "rgb(143, 21, 20)",
  "hex": "#8f1514"
}, {
  "value": "rgb(105.0,34.0,28.0)",
  "brand": "BECCA",
  "colour": "Maroon",
  "r": 105,
  "g": 34,
  "b": 28,
  "rgb": "rgb(105, 34, 28)",
  "hex": "#69221c"
}, {
  "value": "rgb(162.0,105.0,112.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Dusty Mauve",
  "r": 162,
  "g": 105,
  "b": 112,
  "rgb": "rgb(162, 105, 112)",
  "hex": "#a26970"
}, {
  "value": "rgb(157.0,63.0,63.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Rum Punch",
  "r": 157,
  "g": 63,
  "b": 63,
  "rgb": "rgb(157, 63, 63)",
  "hex": "#9d3f3f"
}, {
  "value": "rgb(193.0,117.0,107.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Staunch",
  "r": 193,
  "g": 117,
  "b": 107,
  "rgb": "rgb(193, 117, 107)",
  "hex": "#c1756b"
}, {
  "value": "rgb(206.0,135.0,129.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Kiss",
  "r": 206,
  "g": 135,
  "b": 129,
  "rgb": "rgb(206, 135, 129)",
  "hex": "#ce8781"
}, {
  "value": "rgb(134.0,53.0,130.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Rage",
  "r": 134,
  "g": 53,
  "b": 130,
  "rgb": "rgb(134, 53, 130)",
  "hex": "#863582"
}, {
  "value": "rgb(220.0,82.0,142.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Cotton Candy",
  "r": 220,
  "g": 82,
  "b": 142,
  "rgb": "rgb(220, 82, 142)",
  "hex": "#dc528e"
}, {
  "value": "rgb(186.0,78.0,128.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Orchid",
  "r": 186,
  "g": 78,
  "b": 128,
  "rgb": "rgb(186, 78, 128)",
  "hex": "#ba4e80"
}, {
  "value": "rgb(109.0,61.0,49.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Rust",
  "r": 109,
  "g": 61,
  "b": 49,
  "rgb": "rgb(109, 61, 49)",
  "hex": "#6d3d31"
}, {
  "value": "rgb(146.0,75.0,69.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Stevie",
  "r": 146,
  "g": 75,
  "b": 69,
  "rgb": "rgb(146, 75, 69)",
  "hex": "#924b45"
}, {
  "value": "rgb(144.0,65.0,58.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Rogue",
  "r": 144,
  "g": 65,
  "b": 58,
  "rgb": "rgb(144, 65, 58)",
  "hex": "#90413a"
}, {
  "value": "rgb(152.0,69.0,63.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Rosewood",
  "r": 152,
  "g": 69,
  "b": 63,
  "rgb": "rgb(152, 69, 63)",
  "hex": "#98453f"
}, {
  "value": "rgb(231.0,55.0,104.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Stargazer",
  "r": 231,
  "g": 55,
  "b": 104,
  "rgb": "rgb(231, 55, 104)",
  "hex": "#e73768"
}, {
  "value": "rgb(108.0,86.0,88.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Griffin",
  "r": 108,
  "g": 86,
  "b": 88,
  "rgb": "rgb(108, 86, 88)",
  "hex": "#6c5658"
}, {
  "value": "rgb(144.0,97.0,81.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Dread",
  "r": 144,
  "g": 97,
  "b": 81,
  "rgb": "rgb(144, 97, 81)",
  "hex": "#906151"
}, {
  "value": "rgb(135.0,82.0,66.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Cool Brown",
  "r": 135,
  "g": 82,
  "b": 66,
  "rgb": "rgb(135, 82, 66)",
  "hex": "#875242"
}, {
  "value": "rgb(155.0,95.0,95.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Dead Roses",
  "r": 155,
  "g": 95,
  "b": 95,
  "rgb": "rgb(155, 95, 95)",
  "hex": "#9b5f5f"
}, {
  "value": "rgb(231.0,178.0,164.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Honey",
  "r": 231,
  "g": 178,
  "b": 164,
  "rgb": "rgb(231, 178, 164)",
  "hex": "#e7b2a4"
}, {
  "value": "rgb(34.0,30.0,31.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Midnight",
  "r": 34,
  "g": 30,
  "b": 31,
  "rgb": "rgb(34, 30, 31)",
  "hex": "#221e1f"
}, {
  "value": "rgb(158.0,81.0,71.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Spice",
  "r": 158,
  "g": 81,
  "b": 71,
  "rgb": "rgb(158, 81, 71)",
  "hex": "#9e5147"
}, {
  "value": "rgb(194.0,113.0,92.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Peachy",
  "r": 194,
  "g": 113,
  "b": 92,
  "rgb": "rgb(194, 113, 92)",
  "hex": "#c2715c"
}, {
  "value": "rgb(207.0,102.0,107.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Soft Pink",
  "r": 207,
  "g": 102,
  "b": 107,
  "rgb": "rgb(207, 102, 107)",
  "hex": "#cf666b"
}, {
  "value": "rgb(177.0,104.0,98.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Buff",
  "r": 177,
  "g": 104,
  "b": 98,
  "rgb": "rgb(177, 104, 98)",
  "hex": "#b16862"
}, {
  "value": "rgb(143.0,31.0,77.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Plumeria",
  "r": 143,
  "g": 31,
  "b": 77,
  "rgb": "rgb(143, 31, 77)",
  "hex": "#8f1f4d"
}, {
  "value": "rgb(152.0,92.0,82.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Latte",
  "r": 152,
  "g": 92,
  "b": 82,
  "rgb": "rgb(152, 92, 82)",
  "hex": "#985c52"
}, {
  "value": "rgb(96.0,101.0,107.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Smoke",
  "r": 96,
  "g": 101,
  "b": 107,
  "rgb": "rgb(96, 101, 107)",
  "hex": "#60656b"
}, {
  "value": "rgb(160.0,37.0,40.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Ruby",
  "r": 160,
  "g": 37,
  "b": 40,
  "rgb": "rgb(160, 37, 40)",
  "hex": "#a02528"
}, {
  "value": "rgb(60.0,141.0,135.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Insomniac",
  "r": 60,
  "g": 141,
  "b": 135,
  "rgb": "rgb(60, 141, 135)",
  "hex": "#3c8d87"
}, {
  "value": "rgb(32.0,40.0,113.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Cobalt",
  "r": 32,
  "g": 40,
  "b": 113,
  "rgb": "rgb(32, 40, 113)",
  "hex": "#202871"
}, {
  "value": "rgb(118.0,91.0,96.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Resin",
  "r": 118,
  "g": 91,
  "b": 96,
  "rgb": "rgb(118, 91, 96)",
  "hex": "#765b60"
}, {
  "value": "rgb(97.0,42.0,35.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Brandy",
  "r": 97,
  "g": 42,
  "b": 35,
  "rgb": "rgb(97, 42, 35)",
  "hex": "#612a23"
}, {
  "value": "rgb(218.0,122.0,98.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Soft Touch",
  "r": 218,
  "g": 122,
  "b": 98,
  "rgb": "rgb(218, 122, 98)",
  "hex": "#da7a62"
}, {
  "value": "rgb(210.0,109.0,79.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Hollywood",
  "r": 210,
  "g": 109,
  "b": 79,
  "rgb": "rgb(210, 109, 79)",
  "hex": "#d26d4f"
}, {
  "value": "rgb(218.0,106.0,97.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Sedona",
  "r": 218,
  "g": 106,
  "b": 97,
  "rgb": "rgb(218, 106, 97)",
  "hex": "#da6a61"
}, {
  "value": "rgb(217.0,137.0,100.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Nude",
  "r": 217,
  "g": 137,
  "b": 100,
  "rgb": "rgb(217, 137, 100)",
  "hex": "#d98964"
}, {
  "value": "rgb(201.0,114.0,122.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Sweet Pea",
  "r": 201,
  "g": 114,
  "b": 122,
  "rgb": "rgb(201, 114, 122)",
  "hex": "#c9727a"
}, {
  "value": "rgb(214.0,120.0,104.0)",
  "brand": "Anastasia Beverly Hills",
  "colour": "Petal",
  "r": 214,
  "g": 120,
  "b": 104,
  "rgb": "rgb(214, 120, 104)",
  "hex": "#d67868"
}, {
  "value": "rgb(248.0,125.0,138.0)",
  "brand": "Chantecaille",
  "colour": "DAHLIA",
  "r": 248,
  "g": 125,
  "b": 138,
  "rgb": "rgb(248, 125, 138)",
  "hex": "#f87d8a"
}, {
  "value": "rgb(248.0,161.0,190.0)",
  "brand": "Chantecaille",
  "colour": "CAMELLIA",
  "r": 248,
  "g": 161,
  "b": 190,
  "rgb": "rgb(248, 161, 190)",
  "hex": "#f8a1be"
}, {
  "value": "rgb(234.0,4.0,55.0)",
  "brand": "Chantecaille",
  "colour": "AMARYLLIS",
  "r": 234,
  "g": 4,
  "b": 55,
  "rgb": "rgb(234, 4, 55)",
  "hex": "#ea0437"
}, {
  "value": "rgb(228.0,77.0,111.0)",
  "brand": "Chantecaille",
  "colour": "ZINNIA",
  "r": 228,
  "g": 77,
  "b": 111,
  "rgb": "rgb(228, 77, 111)",
  "hex": "#e44d6f"
}, {
  "value": "rgb(255.0,91.0,96.0)",
  "brand": "Chantecaille",
  "colour": "GERANIUM",
  "r": 255,
  "g": 91,
  "b": 96,
  "rgb": "rgb(255, 91, 96)",
  "hex": "#ff5b60"
}, {
  "value": "rgb(139.0,35.0,80.0)",
  "brand": "Chantecaille",
  "colour": "DAMASK",
  "r": 139,
  "g": 35,
  "b": 80,
  "rgb": "rgb(139, 35, 80)",
  "hex": "#8b2350"
}, {
  "value": "rgb(202.0,97.0,114.0)",
  "brand": "Chantecaille",
  "colour": "TEA ROSE",
  "r": 202,
  "g": 97,
  "b": 114,
  "rgb": "rgb(202, 97, 114)",
  "hex": "#ca6172"
}, {
  "value": "rgb(222.0,148.0,133.0)",
  "brand": "Chantecaille",
  "colour": "SARI ROSE",
  "r": 222,
  "g": 148,
  "b": 133,
  "rgb": "rgb(222, 148, 133)",
  "hex": "#de9485"
}, {
  "value": "rgb(217.0,119.0,108.0)",
  "brand": "Chantecaille",
  "colour": "ANA??S",
  "r": 217,
  "g": 119,
  "b": 108,
  "rgb": "rgb(217, 119, 108)",
  "hex": "#d9776c"
}, {
  "value": "rgb(110.0,26.0,62.0)",
  "brand": "Chantecaille",
  "colour": "VIOLETTA",
  "r": 110,
  "g": 26,
  "b": 62,
  "rgb": "rgb(110, 26, 62)",
  "hex": "#6e1a3e"
}, {
  "value": "rgb(105.0,48.0,55.0)",
  "brand": "Chantecaille",
  "colour": "CALLA LILY",
  "r": 105,
  "g": 48,
  "b": 55,
  "rgb": "rgb(105, 48, 55)",
  "hex": "#693037"
}, {
  "value": "rgb(211.0,109.0,108.0)",
  "brand": "Chantecaille",
  "colour": "SUNRISE",
  "r": 211,
  "g": 109,
  "b": 108,
  "rgb": "rgb(211, 109, 108)",
  "hex": "#d36d6c"
}, {
  "value": "rgb(154.0,111.0,128.0)",
  "brand": "Chantecaille",
  "colour": "NOCTURNE",
  "r": 154,
  "g": 111,
  "b": 128,
  "rgb": "rgb(154, 111, 128)",
  "hex": "#9a6f80"
}, {
  "value": "rgb(231.0,187.0,185.0)",
  "brand": "Chantecaille",
  "colour": "DAPHNE",
  "r": 231,
  "g": 187,
  "b": 185,
  "rgb": "rgb(231, 187, 185)",
  "hex": "#e7bbb9"
}, {
  "value": "rgb(181.0,98.0,112.0)",
  "brand": "Chantecaille",
  "colour": "WILD ROSE",
  "r": 181,
  "g": 98,
  "b": 112,
  "rgb": "rgb(181, 98, 112)",
  "hex": "#b56270"
}, {
  "value": "rgb(247.0,143.0,116.0)",
  "brand": "Chantecaille",
  "colour": "MANDARIN",
  "r": 247,
  "g": 143,
  "b": 116,
  "rgb": "rgb(247, 143, 116)",
  "hex": "#f78f74"
}, {
  "value": "rgb(221.0,162.0,158.0)",
  "brand": "Chantecaille",
  "colour": "PATIENCE",
  "r": 221,
  "g": 162,
  "b": 158,
  "rgb": "rgb(221, 162, 158)",
  "hex": "#dda29e"
}, {
  "value": "rgb(233.0,93.0,106.0)",
  "brand": "Chantecaille",
  "colour": "WILD POPPY",
  "r": 233,
  "g": 93,
  "b": 106,
  "rgb": "rgb(233, 93, 106)",
  "hex": "#e95d6a"
}, {
  "value": "rgb(208.0,64.0,91.0)",
  "brand": "Chantecaille",
  "colour": "RED JUNIPER",
  "r": 208,
  "g": 64,
  "b": 91,
  "rgb": "rgb(208, 64, 91)",
  "hex": "#d0405b"
}, {
  "value": "rgb(227.0,141.0,160.0)",
  "brand": "Chantecaille",
  "colour": "GYPSY ROSE",
  "r": 227,
  "g": 141,
  "b": 160,
  "rgb": "rgb(227, 141, 160)",
  "hex": "#e38da0"
}, {
  "value": "rgb(240.0,106.0,139.0)",
  "brand": "Chantecaille",
  "colour": "COSMO",
  "r": 240,
  "g": 106,
  "b": 139,
  "rgb": "rgb(240, 106, 139)",
  "hex": "#f06a8b"
}, {
  "value": "rgb(181.0,98.0,94.0)",
  "brand": "Chantecaille",
  "colour": "HYACINTH",
  "r": 181,
  "g": 98,
  "b": 94,
  "rgb": "rgb(181, 98, 94)",
  "hex": "#b5625e"
}, {
  "value": "rgb(154.0,83.0,101.0)",
  "brand": "Chantecaille",
  "colour": "WISTERIA",
  "r": 154,
  "g": 83,
  "b": 101,
  "rgb": "rgb(154, 83, 101)",
  "hex": "#9a5365"
}, {
  "value": "rgb(175.0,64.0,81.0)",
  "brand": "Chantecaille",
  "colour": "FOXGLOVE",
  "r": 175,
  "g": 64,
  "b": 81,
  "rgb": "rgb(175, 64, 81)",
  "hex": "#af4051"
}, {
  "value": "rgb(192.0,135.0,141.0)",
  "brand": "Chantecaille",
  "colour": "AMOUR",
  "r": 192,
  "g": 135,
  "b": 141,
  "rgb": "rgb(192, 135, 141)",
  "hex": "#c0878d"
}, {
  "value": "rgb(218.0,121.0,114.0)",
  "brand": "Chantecaille",
  "colour": "LILY",
  "r": 218,
  "g": 121,
  "b": 114,
  "rgb": "rgb(218, 121, 114)",
  "hex": "#da7972"
}, {
  "value": "rgb(192.0,100.0,111.0)",
  "brand": "Chantecaille",
  "colour": "TUBEROSE",
  "r": 192,
  "g": 100,
  "b": 111,
  "rgb": "rgb(192, 100, 111)",
  "hex": "#c0646f"
}, {
  "value": "rgb(220.0,128.0,151.0)",
  "brand": "Chantecaille",
  "colour": "PETUNIA",
  "r": 220,
  "g": 128,
  "b": 151,
  "rgb": "rgb(220, 128, 151)",
  "hex": "#dc8097"
}, {
  "value": "rgb(203.0,96.0,112.0)",
  "brand": "Chantecaille",
  "colour": "MAGNOLIA",
  "r": 203,
  "g": 96,
  "b": 112,
  "rgb": "rgb(203, 96, 112)",
  "hex": "#cb6070"
}, {
  "value": "rgb(225.0,0.0,91.0)",
  "brand": "Chantecaille",
  "colour": "TULIPE",
  "r": 225,
  "g": 0,
  "b": 91,
  "rgb": "rgb(225, 0, 91)",
  "hex": "#e1005b"
}, {
  "value": "rgb(232.0,134.0,144.0)",
  "brand": "Chantecaille",
  "colour": "SWEET PEA",
  "r": 232,
  "g": 134,
  "b": 144,
  "rgb": "rgb(232, 134, 144)",
  "hex": "#e88690"
}, {
  "value": "rgb(255.0,79.0,97.0)",
  "brand": "Chantecaille",
  "colour": "HIBISCUS",
  "r": 255,
  "g": 79,
  "b": 97,
  "rgb": "rgb(255, 79, 97)",
  "hex": "#ff4f61"
}, {
  "value": "rgb(190.0,102.0,110.0)",
  "brand": "Chantecaille",
  "colour": "LOTUS",
  "r": 190,
  "g": 102,
  "b": 110,
  "rgb": "rgb(190, 102, 110)",
  "hex": "#be666e"
}, {
  "value": "rgb(225.0,120.0,122.0)",
  "brand": "Chantecaille",
  "colour": "NARCISSIA",
  "r": 225,
  "g": 120,
  "b": 122,
  "rgb": "rgb(225, 120, 122)",
  "hex": "#e1787a"
}, {
  "value": "rgb(170.0,76.0,78.0)",
  "brand": "Chantecaille",
  "colour": "CERISE",
  "r": 170,
  "g": 76,
  "b": 78,
  "rgb": "rgb(170, 76, 78)",
  "hex": "#aa4c4e"
}, {
  "value": "rgb(170.0,76.0,78.0)",
  "brand": "Chantecaille",
  "colour": "CASSIA",
  "r": 170,
  "g": 76,
  "b": 78,
  "rgb": "rgb(170, 76, 78)",
  "hex": "#aa4c4e"
}, {
  "value": "rgb(175.0,40.0,72.0)",
  "brand": "Chantecaille",
  "colour": "HOLLYHOCK",
  "r": 175,
  "g": 40,
  "b": 72,
  "rgb": "rgb(175, 40, 72)",
  "hex": "#af2848"
}, {
  "value": "rgb(255.0,66.0,66.0)",
  "brand": "Chantecaille",
  "colour": "NIRVANA",
  "r": 255,
  "g": 66,
  "b": 66,
  "rgb": "rgb(255, 66, 66)",
  "hex": "#ff4242"
}, {
  "value": "rgb(206.0,118.0,114.0)",
  "brand": "Chantecaille",
  "colour": "SUNSET",
  "r": 206,
  "g": 118,
  "b": 114,
  "rgb": "rgb(206, 118, 114)",
  "hex": "#ce7672"
}, {
  "value": "rgb(219.0,165.0,153.0)",
  "brand": "Chantecaille",
  "colour": "MIRAGE",
  "r": 219,
  "g": 165,
  "b": 153,
  "rgb": "rgb(219, 165, 153)",
  "hex": "#dba599"
}, {
  "value": "rgb(120.0,42.0,64.0)",
  "brand": "Chantecaille",
  "colour": "AFRICAN VIOLET",
  "r": 120,
  "g": 42,
  "b": 64,
  "rgb": "rgb(120, 42, 64)",
  "hex": "#782a40"
}, {
  "value": "rgb(183.0,125.0,113.0)",
  "brand": "Chantecaille",
  "colour": "AGAVE",
  "r": 183,
  "g": 125,
  "b": 113,
  "rgb": "rgb(183, 125, 113)",
  "hex": "#b77d71"
}, {
  "value": "rgb(221.0,119.0,132.0)",
  "brand": "Chantecaille",
  "colour": "FLAMINGO",
  "r": 221,
  "g": 119,
  "b": 132,
  "rgb": "rgb(221, 119, 132)",
  "hex": "#dd7784"
}, {
  "value": "rgb(165.0,116.0,112.0)",
  "brand": "Chantecaille",
  "colour": "LYCHEE",
  "r": 165,
  "g": 116,
  "b": 112,
  "rgb": "rgb(165, 116, 112)",
  "hex": "#a57470"
}, {
  "value": "rgb(137.0,56.0,100.0)",
  "brand": "Chantecaille",
  "colour": "ACAI",
  "r": 137,
  "g": 56,
  "b": 100,
  "rgb": "rgb(137, 56, 100)",
  "hex": "#893864"
}, {
  "value": "rgb(194.0,41.0,22.0)",
  "brand": "Chantecaille",
  "colour": "PAPAYA",
  "r": 194,
  "g": 41,
  "b": 22,
  "rgb": "rgb(194, 41, 22)",
  "hex": "#c22916"
}, {
  "value": "rgb(255.0,112.0,129.0)",
  "brand": "Chantecaille",
  "colour": "CALYPSO",
  "r": 255,
  "g": 112,
  "b": 129,
  "rgb": "rgb(255, 112, 129)",
  "hex": "#ff7081"
}, {
  "value": "rgb(203.0,64.0,85.0)",
  "brand": "Chantecaille",
  "colour": "GRENADINE",
  "r": 203,
  "g": 64,
  "b": 85,
  "rgb": "rgb(203, 64, 85)",
  "hex": "#cb4055"
}, {
  "value": "rgb(180.0,20.0,89.0)",
  "brand": "Chantecaille",
  "colour": "ORCHID",
  "r": 180,
  "g": 20,
  "b": 89,
  "rgb": "rgb(180, 20, 89)",
  "hex": "#b41459"
}, {
  "value": "rgb(226.0,0.0,62.0)",
  "brand": "Chantecaille",
  "colour": "PROTEA",
  "r": 226,
  "g": 0,
  "b": 62,
  "rgb": "rgb(226, 0, 62)",
  "hex": "#e2003e"
}, {
  "value": "rgb(133.0,61.0,59.0)",
  "brand": "Gerard Cosmetics",
  "colour": "All Access",
  "r": 133,
  "g": 61,
  "b": 59,
  "rgb": "rgb(133, 61, 59)",
  "hex": "#853d3b"
}, {
  "value": "rgb(163.0,78.0,65.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Fame",
  "r": 163,
  "g": 78,
  "b": 65,
  "rgb": "rgb(163, 78, 65)",
  "hex": "#a34e41"
}, {
  "value": "rgb(199.0,119.0,101.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Hollywood Blvd",
  "r": 199,
  "g": 119,
  "b": 101,
  "rgb": "rgb(199, 119, 101)",
  "hex": "#c77765"
}, {
  "value": "rgb(141.0,116.0,139.0)",
  "brand": "Gerard Cosmetics",
  "colour": "DM Me",
  "r": 141,
  "g": 116,
  "b": 139,
  "rgb": "rgb(141, 116, 139)",
  "hex": "#8d748b"
}, {
  "value": "rgb(149.0,77.0,94.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Swipe Right",
  "r": 149,
  "g": 77,
  "b": 94,
  "rgb": "rgb(149, 77, 94)",
  "hex": "#954d5e"
}, {
  "value": "rgb(186.0,44.0,43.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Cupid",
  "r": 186,
  "g": 44,
  "b": 43,
  "rgb": "rgb(186, 44, 43)",
  "hex": "#ba2c2b"
}, {
  "value": "rgb(100.0,49.0,50.0)",
  "brand": "Gerard Cosmetics",
  "colour": "1995",
  "r": 100,
  "g": 49,
  "b": 50,
  "rgb": "rgb(100, 49, 50)",
  "hex": "#643132"
}, {
  "value": "rgb(191.0,53.0,101.0)",
  "brand": "Gerard Cosmetics",
  "colour": "All Dolled Up",
  "r": 191,
  "g": 53,
  "b": 101,
  "rgb": "rgb(191, 53, 101)",
  "hex": "#bf3565"
}, {
  "value": "rgb(139.0,65.0,71.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Berry Smoothie",
  "r": 139,
  "g": 65,
  "b": 71,
  "rgb": "rgb(139, 65, 71)",
  "hex": "#8b4147"
}, {
  "value": "rgb(203.0,137.0,111.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Between the Sheets",
  "r": 203,
  "g": 137,
  "b": 111,
  "rgb": "rgb(203, 137, 111)",
  "hex": "#cb896f"
}, {
  "value": "rgb(165.0,111.0,107.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Buttercup",
  "r": 165,
  "g": 111,
  "b": 107,
  "rgb": "rgb(165, 111, 107)",
  "hex": "#a56f6b"
}, {
  "value": "rgb(62.0,22.0,27.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Cherry Cordial",
  "r": 62,
  "g": 22,
  "b": 27,
  "rgb": "rgb(62, 22, 27)",
  "hex": "#3e161b"
}, {
  "value": "rgb(160.0,43.0,88.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Dragon Berry",
  "r": 160,
  "g": 43,
  "b": 88,
  "rgb": "rgb(160, 43, 88)",
  "hex": "#a02b58"
}, {
  "value": "rgb(125.0,70.0,102.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Enchant??",
  "r": 125,
  "g": 70,
  "b": 102,
  "rgb": "rgb(125, 70, 102)",
  "hex": "#7d4666"
}, {
  "value": "rgb(235.0,123.0,150.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Fairy Godmother",
  "r": 235,
  "g": 123,
  "b": 150,
  "rgb": "rgb(235, 123, 150)",
  "hex": "#eb7b96"
}, {
  "value": "rgb(145.0,20.0,22.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Fire Engine",
  "r": 145,
  "g": 20,
  "b": 22,
  "rgb": "rgb(145, 20, 22)",
  "hex": "#911416"
}, {
  "value": "rgb(130.0,64.0,65.0)",
  "brand": "Gerard Cosmetics",
  "colour": "French Toast",
  "r": 130,
  "g": 64,
  "b": 65,
  "rgb": "rgb(130, 64, 65)",
  "hex": "#824041"
}, {
  "value": "rgb(101.0,11.0,139.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Grape Soda",
  "r": 101,
  "g": 11,
  "b": 139,
  "rgb": "rgb(101, 11, 139)",
  "hex": "#650b8b"
}, {
  "value": "rgb(208.0,140.0,133.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Kimchi Doll",
  "r": 208,
  "g": 140,
  "b": 133,
  "rgb": "rgb(208, 140, 133)",
  "hex": "#d08c85"
}, {
  "value": "rgb(193.0,38.0,70.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Kiss & Tell",
  "r": 193,
  "g": 38,
  "b": 70,
  "rgb": "rgb(193, 38, 70)",
  "hex": "#c12646"
}, {
  "value": "rgb(195.0,132.0,201.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Lilac Moon",
  "r": 195,
  "g": 132,
  "b": 201,
  "rgb": "rgb(195, 132, 201)",
  "hex": "#c384c9"
}, {
  "value": "rgb(137.0,105.0,108.0)",
  "brand": "Gerard Cosmetics",
  "colour": "London Fog",
  "r": 137,
  "g": 105,
  "b": 108,
  "rgb": "rgb(137, 105, 108)",
  "hex": "#89696c"
}, {
  "value": "rgb(241.0,53.0,7.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Mai Tai",
  "r": 241,
  "g": 53,
  "b": 7,
  "rgb": "rgb(241, 53, 7)",
  "hex": "#f13507"
}, {
  "value": "rgb(77.0,21.0,22.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Merlot",
  "r": 77,
  "g": 21,
  "b": 22,
  "rgb": "rgb(77, 21, 22)",
  "hex": "#4d1516"
}, {
  "value": "rgb(164.0,124.0,116.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Mystic Moon",
  "r": 164,
  "g": 124,
  "b": 116,
  "rgb": "rgb(164, 124, 116)",
  "hex": "#a47c74"
}, {
  "value": "rgb(157.0,96.0,86.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Nude",
  "r": 157,
  "g": 96,
  "b": 86,
  "rgb": "rgb(157, 96, 86)",
  "hex": "#9d6056"
}, {
  "value": "rgb(232.0,18.0,52.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Passion Play",
  "r": 232,
  "g": 18,
  "b": 52,
  "rgb": "rgb(232, 18, 52)",
  "hex": "#e81234"
}, {
  "value": "rgb(247.0,130.0,113.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Peachy Keen",
  "r": 247,
  "g": 130,
  "b": 113,
  "rgb": "rgb(247, 130, 113)",
  "hex": "#f78271"
}, {
  "value": "rgb(134.0,75.0,81.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Rodeo Drive",
  "r": 134,
  "g": 75,
  "b": 81,
  "rgb": "rgb(134, 75, 81)",
  "hex": "#864b51"
}, {
  "value": "rgb(99.0,2.0,55.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Sangria",
  "r": 99,
  "g": 2,
  "b": 55,
  "rgb": "rgb(99, 2, 55)",
  "hex": "#630237"
}, {
  "value": "rgb(183.0,68.0,71.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Tequila Sunrise",
  "r": 183,
  "g": 68,
  "b": 71,
  "rgb": "rgb(183, 68, 71)",
  "hex": "#b74447"
}, {
  "value": "rgb(123.0,92.0,93.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Underground",
  "r": 123,
  "g": 92,
  "b": 93,
  "rgb": "rgb(123, 92, 93)",
  "hex": "#7b5c5d"
}, {
  "value": "rgb(176.0,101.0,108.0)",
  "brand": "Gerard Cosmetics",
  "colour": "Vintage Rose",
  "r": 176,
  "g": 101,
  "b": 108,
  "rgb": "rgb(176, 101, 108)",
  "hex": "#b0656c"
}, {
  "value": "rgb(196.0,12.0,66.0)",
  "brand": "Charlotte Tilbury",
  "colour": "The Queen",
  "r": 196,
  "g": 12,
  "b": 66,
  "rgb": "rgb(196, 12, 66)",
  "hex": "#c40c42"
}, {
  "value": "rgb(202.0,123.0,118.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Pillow Talk",
  "r": 202,
  "g": 123,
  "b": 118,
  "rgb": "rgb(202, 123, 118)",
  "hex": "#ca7b76"
}, {
  "value": "rgb(148.0,1.0,19.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Red Carpet Red",
  "r": 148,
  "g": 1,
  "b": 19,
  "rgb": "rgb(148, 1, 19)",
  "hex": "#940113"
}, {
  "value": "rgb(255.0,90.0,94.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Lost Cherry",
  "r": 255,
  "g": 90,
  "b": 94,
  "rgb": "rgb(255, 90, 94)",
  "hex": "#ff5a5e"
}, {
  "value": "rgb(223.0,73.0,84.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Amazing Grace",
  "r": 223,
  "g": 73,
  "b": 84,
  "rgb": "rgb(223, 73, 84)",
  "hex": "#df4954"
}, {
  "value": "rgb(237.0,107.0,93.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Sexy Sienna",
  "r": 237,
  "g": 107,
  "b": 93,
  "rgb": "rgb(237, 107, 93)",
  "hex": "#ed6b5d"
}, {
  "value": "rgb(166.0,31.0,28.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Walk of Shame",
  "r": 166,
  "g": 31,
  "b": 28,
  "rgb": "rgb(166, 31, 28)",
  "hex": "#a61f1c"
}, {
  "value": "rgb(140.0,41.0,20.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Birkin Brown",
  "r": 140,
  "g": 41,
  "b": 20,
  "rgb": "rgb(140, 41, 20)",
  "hex": "#8c2914"
}, {
  "value": "rgb(112.0,10.0,34.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Glastonberry",
  "r": 112,
  "g": 10,
  "b": 34,
  "rgb": "rgb(112, 10, 34)",
  "hex": "#700a22"
}, {
  "value": "rgb(175.0,82.0,65.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Very Victoria",
  "r": 175,
  "g": 82,
  "b": 65,
  "rgb": "rgb(175, 82, 65)",
  "hex": "#af5241"
}, {
  "value": "rgb(158.0,57.0,47.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Bond Girl",
  "r": 158,
  "g": 57,
  "b": 47,
  "rgb": "rgb(158, 57, 47)",
  "hex": "#9e392f"
}, {
  "value": "rgb(181.0,33.0,47.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Love Liberty",
  "r": 181,
  "g": 33,
  "b": 47,
  "rgb": "rgb(181, 33, 47)",
  "hex": "#b5212f"
}, {
  "value": "rgb(142.0,52.0,51.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Walk of Shame",
  "r": 142,
  "g": 52,
  "b": 51,
  "rgb": "rgb(142, 52, 51)",
  "hex": "#8e3433"
}, {
  "value": "rgb(185.0,126.0,120.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Pillowtalk",
  "r": 185,
  "g": 126,
  "b": 120,
  "rgb": "rgb(185, 126, 120)",
  "hex": "#b97e78"
}, {
  "value": "rgb(106.0,23.0,41.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Confident Lips",
  "r": 106,
  "g": 23,
  "b": 41,
  "rgb": "rgb(106, 23, 41)",
  "hex": "#6a1729"
}, {
  "value": "rgb(223.0,98.0,96.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Happy Lips",
  "r": 223,
  "g": 98,
  "b": 96,
  "rgb": "rgb(223, 98, 96)",
  "hex": "#df6260"
}, {
  "value": "rgb(212.0,121.0,128.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Bitch Perfect",
  "r": 212,
  "g": 121,
  "b": 128,
  "rgb": "rgb(212, 121, 128)",
  "hex": "#d47980"
}, {
  "value": "rgb(219.0,142.0,136.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Penelope Pink",
  "r": 219,
  "g": 142,
  "b": 136,
  "rgb": "rgb(219, 142, 136)",
  "hex": "#db8e88"
}, {
  "value": "rgb(221.0,149.0,135.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Nude Kate",
  "r": 221,
  "g": 149,
  "b": 135,
  "rgb": "rgb(221, 149, 135)",
  "hex": "#dd9587"
}, {
  "value": "rgb(208.0,147.0,129.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Hepburn Honey",
  "r": 208,
  "g": 147,
  "b": 129,
  "rgb": "rgb(208, 147, 129)",
  "hex": "#d09381"
}, {
  "value": "rgb(200.0,69.0,77.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Coachella Coral",
  "r": 200,
  "g": 69,
  "b": 77,
  "rgb": "rgb(200, 69, 77)",
  "hex": "#c8454d"
}, {
  "value": "rgb(202.0,1.0,20.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Love Bite",
  "r": 202,
  "g": 1,
  "b": 20,
  "rgb": "rgb(202, 1, 20)",
  "hex": "#ca0114"
}, {
  "value": "rgb(167.0,45.0,86.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Velvet Underground",
  "r": 167,
  "g": 45,
  "b": 86,
  "rgb": "rgb(167, 45, 86)",
  "hex": "#a72d56"
}, {
  "value": "rgb(141.0,20.0,27.0)",
  "brand": "Charlotte Tilbury",
  "colour": "So Marilyn",
  "r": 141,
  "g": 20,
  "b": 27,
  "rgb": "rgb(141, 20, 27)",
  "hex": "#8d141b"
}, {
  "value": "rgb(190.0,113.0,107.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Stoned Rose",
  "r": 190,
  "g": 113,
  "b": 107,
  "rgb": "rgb(190, 113, 107)",
  "hex": "#be716b"
}, {
  "value": "rgb(94.0,26.0,37.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Night Crimson",
  "r": 94,
  "g": 26,
  "b": 37,
  "rgb": "rgb(94, 26, 37)",
  "hex": "#5e1a25"
}, {
  "value": "rgb(244.0,176.0,173.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Kim K.W",
  "r": 244,
  "g": 176,
  "b": 173,
  "rgb": "rgb(244, 176, 173)",
  "hex": "#f4b0ad"
}, {
  "value": "rgb(231.0,128.0,132.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Kidman's Kiss",
  "r": 231,
  "g": 128,
  "b": 132,
  "rgb": "rgb(231, 128, 132)",
  "hex": "#e78084"
}, {
  "value": "rgb(249.0,154.0,162.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Liv It Up",
  "r": 249,
  "g": 154,
  "b": 162,
  "rgb": "rgb(249, 154, 162)",
  "hex": "#f99aa2"
}, {
  "value": "rgb(255.0,116.0,155.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Bosworth's Beauty",
  "r": 255,
  "g": 116,
  "b": 155,
  "rgb": "rgb(255, 116, 155)",
  "hex": "#ff749b"
}, {
  "value": "rgb(224.0,135.0,127.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Super Cindy",
  "r": 224,
  "g": 135,
  "b": 127,
  "rgb": "rgb(224, 135, 127)",
  "hex": "#e0877f"
}, {
  "value": "rgb(255.0,69.0,83.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Miranda May",
  "r": 255,
  "g": 69,
  "b": 83,
  "rgb": "rgb(255, 69, 83)",
  "hex": "#ff4553"
}, {
  "value": "rgb(255.0,57.0,106.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Electric Poppy",
  "r": 255,
  "g": 57,
  "b": 106,
  "rgb": "rgb(255, 57, 106)",
  "hex": "#ff396a"
}, {
  "value": "rgb(229.0,48.0,67.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Carina's Love",
  "r": 229,
  "g": 48,
  "b": 67,
  "rgb": "rgb(229, 48, 67)",
  "hex": "#e53043"
}, {
  "value": "rgb(221.0,48.0,42.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Tell Laura",
  "r": 221,
  "g": 48,
  "b": 42,
  "rgb": "rgb(221, 48, 42)",
  "hex": "#dd302a"
}, {
  "value": "rgb(252.0,67.0,73.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Hot Emily",
  "r": 252,
  "g": 67,
  "b": 73,
  "rgb": "rgb(252, 67, 73)",
  "hex": "#fc4349"
}, {
  "value": "rgb(212.0,95.0,121.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Secret Salma",
  "r": 212,
  "g": 95,
  "b": 121,
  "rgb": "rgb(212, 95, 121)",
  "hex": "#d45f79"
}, {
  "value": "rgb(157.0,56.0,96.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Hel's Bells",
  "r": 157,
  "g": 56,
  "b": 96,
  "rgb": "rgb(157, 56, 96)",
  "hex": "#9d3860"
}, {
  "value": "rgb(165.0,43.0,64.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Wild Lips",
  "r": 165,
  "g": 43,
  "b": 64,
  "rgb": "rgb(165, 43, 64)",
  "hex": "#a52b40"
}, {
  "value": "rgb(183.0,85.0,76.0)",
  "brand": "Charlotte Tilbury",
  "colour": "Sexy Lips",
  "r": 183,
  "g": 85,
  "b": 76,
  "rgb": "rgb(183, 85, 76)",
  "hex": "#b7554c"
}, {
  "value": "rgb(118.0,55.0,38.0)",
  "brand": "Charlotte Tilbury",
  "colour": "LUCKY DIAMONDS",
  "r": 118,
  "g": 55,
  "b": 38,
  "rgb": "rgb(118, 55, 38)",
  "hex": "#763726"
}, {
  "value": "rgb(198.0,145.0,131.0)",
  "brand": "Charlotte Tilbury",
  "colour": "JK MAGIC 3.5g",
  "r": 198,
  "g": 145,
  "b": 131,
  "rgb": "rgb(198, 145, 131)",
  "hex": "#c69183"
}, {
  "value": "rgb(189.0,119.0,93.0)",
  "brand": "Charlotte Tilbury",
  "colour": "ANGEL ALESSANDRA 3.5g",
  "r": 189,
  "g": 119,
  "b": 93,
  "rgb": "rgb(189, 119, 93)",
  "hex": "#bd775d"
}, {
  "value": "rgb(147.0,72.0,93.0)",
  "brand": "Charlotte Tilbury",
  "colour": "AMAZING AMAL 3.5g",
  "r": 147,
  "g": 72,
  "b": 93,
  "rgb": "rgb(147, 72, 93)",
  "hex": "#93485d"
}, {
  "value": "rgb(143.0,48.0,40.0)",
  "brand": "Charlotte Tilbury",
  "colour": "RED HOT SUSAN 3.5g",
  "r": 143,
  "g": 48,
  "b": 40,
  "rgb": "rgb(143, 48, 40)",
  "hex": "#8f3028"
}, {
  "value": "rgb(159.0,25.0,36.0)",
  "brand": "Charlotte Tilbury",
  "colour": "PATSY RED 3.5g",
  "r": 159,
  "g": 25,
  "b": 36,
  "rgb": "rgb(159, 25, 36)",
  "hex": "#9f1924"
}, {
  "value": "rgb(169.0,81.0,80.0)",
  "brand": "Charlotte Tilbury",
  "colour": "CARINA'S STAR 3.5g",
  "r": 169,
  "g": 81,
  "b": 80,
  "rgb": "rgb(169, 81, 80)",
  "hex": "#a95150"
}, {
  "value": "rgb(180.0,119.0,114.0)",
  "brand": "Charlotte Tilbury",
  "colour": "IN LOVE WITH OLIVIA 3.5g",
  "r": 180,
  "g": 119,
  "b": 114,
  "rgb": "rgb(180, 119, 114)",
  "hex": "#b47772"
}, {
  "value": "rgb(148.0,89.0,85.0)",
  "brand": "Charlotte Tilbury",
  "colour": "GLOWING JEN 3.5g",
  "r": 148,
  "g": 89,
  "b": 85,
  "rgb": "rgb(148, 89, 85)",
  "hex": "#945955"
}, {
  "value": "rgb(163.0,107.0,108.0)",
  "brand": "Charlotte Tilbury",
  "colour": "DANCEFLOOR PRINCESS 3.5g",
  "r": 163,
  "g": 107,
  "b": 108,
  "rgb": "rgb(163, 107, 108)",
  "hex": "#a36b6c"
}, {
  "value": "rgb(140.23522012578636,39.53584905660389,55.701257861634865)",
  "brand": "ColourPop",
  "colour": "On Repeat",
  "r": 140,
  "g": 39,
  "b": 55,
  "rgb": "rgb(140, 39, 55)",
  "hex": "#8c2737"
}, {
  "value": "rgb(148.89761570827477,67.78260869565196,62.455820476858236)",
  "brand": "ColourPop",
  "colour": "Lay Over",
  "r": 148,
  "g": 67,
  "b": 62,
  "rgb": "rgb(148, 67, 62)",
  "hex": "#94433e"
}, {
  "value": "rgb(150.91597177678014,19.208466966003268,27.945477870429393)",
  "brand": "ColourPop",
  "colour": "On Display",
  "r": 150,
  "g": 19,
  "b": 27,
  "rgb": "rgb(150, 19, 27)",
  "hex": "#96131b"
}, {
  "value": "rgb(127.73020527859232,41.964222873900255,38.629325513196434)",
  "brand": "ColourPop",
  "colour": "LA Lady",
  "r": 127,
  "g": 41,
  "b": 38,
  "rgb": "rgb(127, 41, 38)",
  "hex": "#7f2926"
}, {
  "value": "rgb(145.7818877551021,62.08163265306144,74.5522959183676)",
  "brand": "ColourPop",
  "colour": "Still Crazy",
  "r": 145,
  "g": 62,
  "b": 74,
  "rgb": "rgb(145, 62, 74)",
  "hex": "#913e4a"
}, {
  "value": "rgb(147.50700073691982,5.793662490788712,33.579218865144014)",
  "brand": "ColourPop",
  "colour": "What If",
  "r": 147,
  "g": 5,
  "b": 33,
  "rgb": "rgb(147, 5, 33)",
  "hex": "#930521"
}, {
  "value": "rgb(77.41997729852463,34.98013620885365,41.79398410896687)",
  "brand": "ColourPop",
  "colour": "Hello Stranger",
  "r": 77,
  "g": 34,
  "b": 41,
  "rgb": "rgb(77, 34, 41)",
  "hex": "#4d2229"
}, {
  "value": "rgb(159.35853658536575,80.09329268292718,58.89024390243917)",
  "brand": "ColourPop",
  "colour": "Appy",
  "r": 159,
  "g": 80,
  "b": 58,
  "rgb": "rgb(159, 80, 58)",
  "hex": "#9f503a"
}, {
  "value": "rgb(196.20358180884455,67.33381774662382,50.39498204821369)",
  "brand": "ColourPop",
  "colour": "Love Life",
  "r": 196,
  "g": 67,
  "b": 50,
  "rgb": "rgb(196, 67, 50)",
  "hex": "#c44332"
}, {
  "value": "rgb(209.8470809530425,35.377595095446736,45.062839626585955)",
  "brand": "ColourPop",
  "colour": "Trust Me",
  "r": 209,
  "g": 35,
  "b": 45,
  "rgb": "rgb(209, 35, 45)",
  "hex": "#d1232d"
}, {
  "value": "rgb(166.48264576347043,62.017899713119476,64.26578851670759)",
  "brand": "ColourPop",
  "colour": "Fly-Fi",
  "r": 166,
  "g": 62,
  "b": 64,
  "rgb": "rgb(166, 62, 64)",
  "hex": "#a63e40"
}, {
  "value": "rgb(161.36044787765223,75.46180555555445,67.55071785268433)",
  "brand": "ColourPop",
  "colour": "Ziggie",
  "r": 161,
  "g": 75,
  "b": 67,
  "rgb": "rgb(161, 75, 67)",
  "hex": "#a14b43"
}, {
  "value": "rgb(193.51718938479965,88.03697979493371,93.58579613992757)",
  "brand": "ColourPop",
  "colour": "Byron Babe",
  "r": 193,
  "g": 88,
  "b": 93,
  "rgb": "rgb(193, 88, 93)",
  "hex": "#c1585d"
}, {
  "value": "rgb(205.11345726028424,99.01078390708756,96.97002375475459)",
  "brand": "ColourPop",
  "colour": "Slacker",
  "r": 205,
  "g": 99,
  "b": 96,
  "rgb": "rgb(205, 99, 96)",
  "hex": "#cd6360"
}, {
  "value": "rgb(181.21424820584414,54.33436898302607,78.05894451251562)",
  "brand": "ColourPop",
  "colour": "Songbird",
  "r": 181,
  "g": 54,
  "b": 78,
  "rgb": "rgb(181, 54, 78)",
  "hex": "#b5364e"
}, {
  "value": "rgb(202.96383788099394,14.307988540821562,65.32498943314057)",
  "brand": "ColourPop",
  "colour": "Runaway",
  "r": 202,
  "g": 14,
  "b": 65,
  "rgb": "rgb(202, 14, 65)",
  "hex": "#ca0e41"
}, {
  "value": "rgb(240.13085587637417,71.7873516106564,84.72070923278852)",
  "brand": "ColourPop",
  "colour": "Cherry Bomb",
  "r": 240,
  "g": 71,
  "b": 84,
  "rgb": "rgb(240, 71, 84)",
  "hex": "#f04754"
}, {
  "value": "rgb(186.60541836307465,13.115558768681847,40.67170199002915)",
  "brand": "ColourPop",
  "colour": "Jam Sesh",
  "r": 186,
  "g": 13,
  "b": 40,
  "rgb": "rgb(186, 13, 40)",
  "hex": "#ba0d28"
}, {
  "value": "rgb(248.33688631630798,75.36046306427129,63.86125719126275)",
  "brand": "ColourPop",
  "colour": "Daytrip",
  "r": 248,
  "g": 75,
  "b": 63,
  "rgb": "rgb(248, 75, 63)",
  "hex": "#f84b3f"
}, {
  "value": "rgb(215.06909857231855,31.73126354218235,22.04565017364013)",
  "brand": "ColourPop",
  "colour": "Parachute",
  "r": 215,
  "g": 31,
  "b": 22,
  "rgb": "rgb(215, 31, 22)",
  "hex": "#d71f16"
}, {
  "value": "rgb(243.31451266638285,20.973915843707793,100.36560755689378)",
  "brand": "ColourPop",
  "colour": "Casanova",
  "r": 243,
  "g": 20,
  "b": 100,
  "rgb": "rgb(243, 20, 100)",
  "hex": "#f31464"
}, {
  "value": "rgb(222.41324035885484,101.73349207024073,129.96874867128557)",
  "brand": "ColourPop",
  "colour": "Goodie Bag",
  "r": 222,
  "g": 101,
  "b": 129,
  "rgb": "rgb(222, 101, 129)",
  "hex": "#de6581"
}, {
  "value": "rgb(108.57635068416019,35.750141063627204,39.52394554944144)",
  "brand": "ColourPop",
  "colour": "Infinite Best",
  "r": 108,
  "g": 35,
  "b": 39,
  "rgb": "rgb(108, 35, 39)",
  "hex": "#6c2327"
}, {
  "value": "rgb(202.96142282252242,84.62551459364344,66.71039363522833)",
  "brand": "ColourPop",
  "colour": "Who Run This",
  "r": 202,
  "g": 84,
  "b": 66,
  "rgb": "rgb(202, 84, 66)",
  "hex": "#ca5442"
}, {
  "value": "rgb(139.83586063201795,24.937338426502166,29.90380831114052)",
  "brand": "ColourPop",
  "colour": "Poison",
  "r": 139,
  "g": 24,
  "b": 29,
  "rgb": "rgb(139, 24, 29)",
  "hex": "#8b181d"
}, {
  "value": "rgb(197.51555666625742,108.88021158732285,101.23878545545513)",
  "brand": "ColourPop",
  "colour": "Brink",
  "r": 197,
  "g": 108,
  "b": 101,
  "rgb": "rgb(197, 108, 101)",
  "hex": "#c56c65"
}, {
  "value": "rgb(164.94004396270037,41.448457515342675,44.66095656787629)",
  "brand": "ColourPop",
  "colour": "Goldie",
  "r": 164,
  "g": 41,
  "b": 44,
  "rgb": "rgb(164, 41, 44)",
  "hex": "#a4292c"
}, {
  "value": "rgb(212.77761096354598,116.22431381606744,121.38561034761449)",
  "brand": "ColourPop",
  "colour": "After Shock",
  "r": 212,
  "g": 116,
  "b": 121,
  "rgb": "rgb(212, 116, 121)",
  "hex": "#d47479"
}, {
  "value": "rgb(193.53294465298447,110.2219870617376,117.94625029949496)",
  "brand": "ColourPop",
  "colour": "Lumi??re",
  "r": 193,
  "g": 110,
  "b": 117,
  "rgb": "rgb(193, 110, 117)",
  "hex": "#c16e75"
}, {
  "value": "rgb(198.87130128174852,94.81812550626542,90.90189164720992)",
  "brand": "ColourPop",
  "colour": "Goal Digger",
  "r": 198,
  "g": 94,
  "b": 90,
  "rgb": "rgb(198, 94, 90)",
  "hex": "#c65e5a"
}, {
  "value": "rgb(214.35928114471307,140.48293207012958,125.0131855252256)",
  "brand": "ColourPop",
  "colour": "Aquarius",
  "r": 214,
  "g": 140,
  "b": 125,
  "rgb": "rgb(214, 140, 125)",
  "hex": "#d68c7d"
}, {
  "value": "rgb(121.0,71.0,65.0)",
  "brand": "No.7",
  "colour": "Nutmeg spice",
  "r": 121,
  "g": 71,
  "b": 65,
  "rgb": "rgb(121, 71, 65)",
  "hex": "#794741"
}, {
  "value": "rgb(141.0,91.0,85.0)",
  "brand": "No.7",
  "colour": "Spiced Latte",
  "r": 141,
  "g": 91,
  "b": 85,
  "rgb": "rgb(141, 91, 85)",
  "hex": "#8d5b55"
}, {
  "value": "rgb(132.0,72.0,97.0)",
  "brand": "No.7",
  "colour": "Deep Plum",
  "r": 132,
  "g": 72,
  "b": 97,
  "rgb": "rgb(132, 72, 97)",
  "hex": "#844861"
}, {
  "value": "rgb(136.0,85.0,86.0)",
  "brand": "No.7",
  "colour": "Berry Blush",
  "r": 136,
  "g": 85,
  "b": 86,
  "rgb": "rgb(136, 85, 86)",
  "hex": "#885556"
}, {
  "value": "rgb(152.0,74.0,94.0)",
  "brand": "No.7",
  "colour": "Berry Romance",
  "r": 152,
  "g": 74,
  "b": 94,
  "rgb": "rgb(152, 74, 94)",
  "hex": "#984a5e"
}, {
  "value": "rgb(164.0,74.0,98.0)",
  "brand": "No.7",
  "colour": "Cranberry Kiss",
  "r": 164,
  "g": 74,
  "b": 98,
  "rgb": "rgb(164, 74, 98)",
  "hex": "#a44a62"
}, {
  "value": "rgb(153.0,86.0,96.0)",
  "brand": "No.7",
  "colour": "Berry Shine",
  "r": 153,
  "g": 86,
  "b": 96,
  "rgb": "rgb(153, 86, 96)",
  "hex": "#995660"
}, {
  "value": "rgb(174.0,71.0,100.0)",
  "brand": "No.7",
  "colour": "Pink Burst",
  "r": 174,
  "g": 71,
  "b": 100,
  "rgb": "rgb(174, 71, 100)",
  "hex": "#ae4764"
}, {
  "value": "rgb(163.0,84.0,104.0)",
  "brand": "No.7",
  "colour": "Magenta Shine",
  "r": 163,
  "g": 84,
  "b": 104,
  "rgb": "rgb(163, 84, 104)",
  "hex": "#a35468"
}, {
  "value": "rgb(150.0,72.0,87.0)",
  "brand": "No.7",
  "colour": "Raspberry Truffle",
  "r": 150,
  "g": 72,
  "b": 87,
  "rgb": "rgb(150, 72, 87)",
  "hex": "#964857"
}, {
  "value": "rgb(166.0,64.0,87.0)",
  "brand": "No.7",
  "colour": "Soft Ruby",
  "r": 166,
  "g": 64,
  "b": 87,
  "rgb": "rgb(166, 64, 87)",
  "hex": "#a64057"
}, {
  "value": "rgb(164.0,84.0,99.0)",
  "brand": "No.7",
  "colour": "Spring Pink",
  "r": 164,
  "g": 84,
  "b": 99,
  "rgb": "rgb(164, 84, 99)",
  "hex": "#a45463"
}, {
  "value": "rgb(177.0,74.0,97.0)",
  "brand": "No.7",
  "colour": "Rose Berry",
  "r": 177,
  "g": 74,
  "b": 97,
  "rgb": "rgb(177, 74, 97)",
  "hex": "#b14a61"
}, {
  "value": "rgb(164.0,85.0,89.0)",
  "brand": "No.7",
  "colour": "Soft Tulip",
  "r": 164,
  "g": 85,
  "b": 89,
  "rgb": "rgb(164, 85, 89)",
  "hex": "#a45559"
}, {
  "value": "rgb(177.0,76.0,84.0)",
  "brand": "No.7",
  "colour": "Sweet Copper",
  "r": 177,
  "g": 76,
  "b": 84,
  "rgb": "rgb(177, 76, 84)",
  "hex": "#b14c54"
}, {
  "value": "rgb(166.0,54.0,68.0)",
  "brand": "No.7",
  "colour": "Soft Paprika",
  "r": 166,
  "g": 54,
  "b": 68,
  "rgb": "rgb(166, 54, 68)",
  "hex": "#a63644"
}, {
  "value": "rgb(164.0,77.0,77.0)",
  "brand": "No.7",
  "colour": "Deep Rust",
  "r": 164,
  "g": 77,
  "b": 77,
  "rgb": "rgb(164, 77, 77)",
  "hex": "#a44d4d"
}, {
  "value": "rgb(166.0,89.0,87.0)",
  "brand": "No.7",
  "colour": "Ginger Rose",
  "r": 166,
  "g": 89,
  "b": 87,
  "rgb": "rgb(166, 89, 87)",
  "hex": "#a65957"
}, {
  "value": "rgb(165.0,56.0,61.0)",
  "brand": "No.7",
  "colour": "Pillarbox",
  "r": 165,
  "g": 56,
  "b": 61,
  "rgb": "rgb(165, 56, 61)",
  "hex": "#a5383d"
}, {
  "value": "rgb(172.0,76.0,70.0)",
  "brand": "No.7",
  "colour": "Flame",
  "r": 172,
  "g": 76,
  "b": 70,
  "rgb": "rgb(172, 76, 70)",
  "hex": "#ac4c46"
}, {
  "value": "rgb(172.0,70.0,86.0)",
  "brand": "No.7",
  "colour": "Rosy Ribbon",
  "r": 172,
  "g": 70,
  "b": 86,
  "rgb": "rgb(172, 70, 86)",
  "hex": "#ac4656"
}, {
  "value": "rgb(168.0,77.0,90.0)",
  "brand": "No.7",
  "colour": "Rose Dream",
  "r": 168,
  "g": 77,
  "b": 90,
  "rgb": "rgb(168, 77, 90)",
  "hex": "#a84d5a"
}, {
  "value": "rgb(164.0,85.0,94.0)",
  "brand": "No.7",
  "colour": "Deep Rose",
  "r": 164,
  "g": 85,
  "b": 94,
  "rgb": "rgb(164, 85, 94)",
  "hex": "#a4555e"
}, {
  "value": "rgb(170.0,90.0,99.0)",
  "brand": "No.7",
  "colour": "Pink Hint",
  "r": 170,
  "g": 90,
  "b": 99,
  "rgb": "rgb(170, 90, 99)",
  "hex": "#aa5a63"
}, {
  "value": "rgb(175.0,95.0,104.0)",
  "brand": "No.7",
  "colour": "Rose Mist",
  "r": 175,
  "g": 95,
  "b": 104,
  "rgb": "rgb(175, 95, 104)",
  "hex": "#af5f68"
}, {
  "value": "rgb(147.0,70.0,75.0)",
  "brand": "No.7",
  "colour": "Sweet Chestnut",
  "r": 147,
  "g": 70,
  "b": 75,
  "rgb": "rgb(147, 70, 75)",
  "hex": "#93464b"
}, {
  "value": "rgb(153.0,66.0,73.0)",
  "brand": "No.7",
  "colour": "Soft Cherry",
  "r": 153,
  "g": 66,
  "b": 73,
  "rgb": "rgb(153, 66, 73)",
  "hex": "#994249"
}, {
  "value": "rgb(143.0,77.0,80.0)",
  "brand": "No.7",
  "colour": "Soft Earth",
  "r": 143,
  "g": 77,
  "b": 80,
  "rgb": "rgb(143, 77, 80)",
  "hex": "#8f4d50"
}, {
  "value": "rgb(147.0,87.0,85.0)",
  "brand": "No.7",
  "colour": "Tawny Rose",
  "r": 147,
  "g": 87,
  "b": 85,
  "rgb": "rgb(147, 87, 85)",
  "hex": "#935755"
}, {
  "value": "rgb(155.0,106.0,100.0)",
  "brand": "No.7",
  "colour": "Honey Bloom",
  "r": 155,
  "g": 106,
  "b": 100,
  "rgb": "rgb(155, 106, 100)",
  "hex": "#9b6a64"
}, {
  "value": "rgb(151.0,101.0,94.0)",
  "brand": "No.7",
  "colour": "Caramel Silk",
  "r": 151,
  "g": 101,
  "b": 94,
  "rgb": "rgb(151, 101, 94)",
  "hex": "#97655e"
}, {
  "value": "rgb(174.0,85.0,70.0)",
  "brand": "No.7",
  "colour": "Shiny Conker",
  "r": 174,
  "g": 85,
  "b": 70,
  "rgb": "rgb(174, 85, 70)",
  "hex": "#ae5546"
}, {
  "value": "rgb(140.0,55.0,97.0)",
  "brand": "No.7",
  "colour": "Sugar Plum",
  "r": 140,
  "g": 55,
  "b": 97,
  "rgb": "rgb(140, 55, 97)",
  "hex": "#8c3761"
}, {
  "value": "rgb(170.0,104.0,97.0)",
  "brand": "No.7",
  "colour": "Plum Beautiful",
  "r": 170,
  "g": 104,
  "b": 97,
  "rgb": "rgb(170, 104, 97)",
  "hex": "#aa6861"
}, {
  "value": "rgb(243.0,113.0,137.0)",
  "brand": "No.7",
  "colour": "Waterlily",
  "r": 243,
  "g": 113,
  "b": 137,
  "rgb": "rgb(243, 113, 137)",
  "hex": "#f37189"
}, {
  "value": "rgb(142.0,81.0,83.0)",
  "brand": "No.7",
  "colour": "Highland Mist",
  "r": 142,
  "g": 81,
  "b": 83,
  "rgb": "rgb(142, 81, 83)",
  "hex": "#8e5153"
}, {
  "value": "rgb(221.0,138.0,170.0)",
  "brand": "No.7",
  "colour": "Cameo",
  "r": 221,
  "g": 138,
  "b": 170,
  "rgb": "rgb(221, 138, 170)",
  "hex": "#dd8aaa"
}, {
  "value": "rgb(137.0,85.0,79.0)",
  "brand": "No.7",
  "colour": "Cinnamon Spice",
  "r": 137,
  "g": 85,
  "b": 79,
  "rgb": "rgb(137, 85, 79)",
  "hex": "#89554f"
}, {
  "value": "rgb(129.0,80.0,88.0)",
  "brand": "No.7",
  "colour": "Dark Berry",
  "r": 129,
  "g": 80,
  "b": 88,
  "rgb": "rgb(129, 80, 88)",
  "hex": "#815058"
}, {
  "value": "rgb(156.0,67.0,91.0)",
  "brand": "No.7",
  "colour": "Loganberry",
  "r": 156,
  "g": 67,
  "b": 91,
  "rgb": "rgb(156, 67, 91)",
  "hex": "#9c435b"
}, {
  "value": "rgb(160.0,58.0,82.0)",
  "brand": "No.7",
  "colour": "Raspberry Blush",
  "r": 160,
  "g": 58,
  "b": 82,
  "rgb": "rgb(160, 58, 82)",
  "hex": "#a03a52"
}, {
  "value": "rgb(155.0,77.0,92.0)",
  "brand": "No.7",
  "colour": "Pomegranate",
  "r": 155,
  "g": 77,
  "b": 92,
  "rgb": "rgb(155, 77, 92)",
  "hex": "#9b4d5c"
}, {
  "value": "rgb(171.0,69.0,92.0)",
  "brand": "No.7",
  "colour": "Raspberry Silk",
  "r": 171,
  "g": 69,
  "b": 92,
  "rgb": "rgb(171, 69, 92)",
  "hex": "#ab455c"
}, {
  "value": "rgb(172.0,92.0,106.0)",
  "brand": "No.7",
  "colour": "Pink Blush",
  "r": 172,
  "g": 92,
  "b": 106,
  "rgb": "rgb(172, 92, 106)",
  "hex": "#ac5c6a"
}, {
  "value": "rgb(168.0,78.0,84.0)",
  "brand": "No.7",
  "colour": "Blushing Tulip",
  "r": 168,
  "g": 78,
  "b": 84,
  "rgb": "rgb(168, 78, 84)",
  "hex": "#a84e54"
}, {
  "value": "rgb(165.0,55.0,64.0)",
  "brand": "No.7",
  "colour": "Brick Red",
  "r": 165,
  "g": 55,
  "b": 64,
  "rgb": "rgb(165, 55, 64)",
  "hex": "#a53740"
}, {
  "value": "rgb(155.0,69.0,70.0)",
  "brand": "No.7",
  "colour": "Hot Copper",
  "r": 155,
  "g": 69,
  "b": 70,
  "rgb": "rgb(155, 69, 70)",
  "hex": "#9b4546"
}, {
  "value": "rgb(165.0,56.0,61.0)",
  "brand": "No.7",
  "colour": "Pillarbox",
  "r": 165,
  "g": 56,
  "b": 61,
  "rgb": "rgb(165, 56, 61)",
  "hex": "#a5383d"
}, {
  "value": "rgb(164.0,77.0,77.0)",
  "brand": "No.7",
  "colour": "Deep Rust",
  "r": 164,
  "g": 77,
  "b": 77,
  "rgb": "rgb(164, 77, 77)",
  "hex": "#a44d4d"
}, {
  "value": "rgb(176.0,85.0,97.0)",
  "brand": "No.7",
  "colour": "Rose Kiss",
  "r": 176,
  "g": 85,
  "b": 97,
  "rgb": "rgb(176, 85, 97)",
  "hex": "#b05561"
}, {
  "value": "rgb(149.0,94.0,75.0)",
  "brand": "Bourjois",
  "colour": "01 Abracadabeige",
  "r": 149,
  "g": 94,
  "b": 75,
  "rgb": "rgb(149, 94, 75)",
  "hex": "#955e4b"
}, {
  "value": "rgb(165.0,102.0,103.0)",
  "brand": "Bourjois",
  "colour": "02 A l'eau de rose",
  "r": 165,
  "g": 102,
  "b": 103,
  "rgb": "rgb(165, 102, 103)",
  "hex": "#a56667"
}, {
  "value": "rgb(144.0,78.0,80.0)",
  "brand": "Bourjois",
  "colour": "03 Bohemian Raspberry",
  "r": 144,
  "g": 78,
  "b": 80,
  "rgb": "rgb(144, 78, 80)",
  "hex": "#904e50"
}, {
  "value": "rgb(130.0,70.0,78.0)",
  "brand": "Bourjois",
  "colour": "04 Jolie Mauve",
  "r": 130,
  "g": 70,
  "b": 78,
  "rgb": "rgb(130, 70, 78)",
  "hex": "#82464e"
}, {
  "value": "rgb(132.0,80.0,70.0)",
  "brand": "Bourjois",
  "colour": "05 Peanut Better",
  "r": 132,
  "g": 80,
  "b": 70,
  "rgb": "rgb(132, 80, 70)",
  "hex": "#845046"
}, {
  "value": "rgb(148.0,85.0,88.0)",
  "brand": "Bourjois",
  "colour": "06 Sleepink Beauty",
  "r": 148,
  "g": 85,
  "b": 88,
  "rgb": "rgb(148, 85, 88)",
  "hex": "#945558"
}, {
  "value": "rgb(210.0,109.0,126.0)",
  "brand": "Bourjois",
  "colour": "07 Perlimpinpink",
  "r": 210,
  "g": 109,
  "b": 126,
  "rgb": "rgb(210, 109, 126)",
  "hex": "#d26d7e"
}, {
  "value": "rgb(172.0,25.0,78.0)",
  "brand": "Bourjois",
  "colour": "08 Once upon a pink",
  "r": 172,
  "g": 25,
  "b": 78,
  "rgb": "rgb(172, 25, 78)",
  "hex": "#ac194e"
}, {
  "value": "rgb(191.0,31.0,30.0)",
  "brand": "Bourjois",
  "colour": "10 Scarlet it be",
  "r": 191,
  "g": 31,
  "b": 30,
  "rgb": "rgb(191, 31, 30)",
  "hex": "#bf1f1e"
}, {
  "value": "rgb(158.0,28.0,39.0)",
  "brand": "Bourjois",
  "colour": "11 Cindered-lla",
  "r": 158,
  "g": 28,
  "b": 39,
  "rgb": "rgb(158, 28, 39)",
  "hex": "#9e1c27"
}, {
  "value": "rgb(128.0,29.0,40.0)",
  "brand": "Bourjois",
  "colour": "12 Beauty and the red",
  "r": 128,
  "g": 29,
  "b": 40,
  "rgb": "rgb(128, 29, 40)",
  "hex": "#801d28"
}, {
  "value": "rgb(107.0,31.0,21.0)",
  "brand": "Bourjois",
  "colour": "13 Cranberry Tales",
  "r": 107,
  "g": 31,
  "b": 21,
  "rgb": "rgb(107, 31, 21)",
  "hex": "#6b1f15"
}, {
  "value": "rgb(79.0,36.0,58.0)",
  "brand": "Bourjois",
  "colour": "15 Plum plum pidou",
  "r": 79,
  "g": 36,
  "b": 58,
  "rgb": "rgb(79, 36, 58)",
  "hex": "#4f243a"
}, {
  "value": "rgb(177.0,115.0,90.0)",
  "brand": "Bourjois",
  "colour": "01 Hey Nude??!",
  "r": 177,
  "g": 115,
  "b": 90,
  "rgb": "rgb(177, 115, 90)",
  "hex": "#b1735a"
}, {
  "value": "rgb(174.0,94.0,92.0)",
  "brand": "Bourjois",
  "colour": "02 Flamin G???rose",
  "r": 174,
  "g": 94,
  "b": 92,
  "rgb": "rgb(174, 94, 92)",
  "hex": "#ae5e5c"
}, {
  "value": "rgb(158.0,63.0,83.0)",
  "brand": "Bourjois",
  "colour": "03 Hyppink Chic",
  "r": 158,
  "g": 63,
  "b": 83,
  "rgb": "rgb(158, 63, 83)",
  "hex": "#9e3f53"
}, {
  "value": "rgb(162.0,50.0,74.0)",
  "brand": "Bourjois",
  "colour": "04 Hip Hip Pink",
  "r": 162,
  "g": 50,
  "b": 74,
  "rgb": "rgb(162, 50, 74)",
  "hex": "#a2324a"
}, {
  "value": "rgb(149.0,34.0,44.0)",
  "brand": "Bourjois",
  "colour": "05 Brique-??-Brac",
  "r": 149,
  "g": 34,
  "b": 44,
  "rgb": "rgb(149, 34, 44)",
  "hex": "#95222c"
}, {
  "value": "rgb(204.0,79.0,70.0)",
  "brand": "Bourjois",
  "colour": "06 Abrico???dabra!",
  "r": 204,
  "g": 79,
  "b": 70,
  "rgb": "rgb(204, 79, 70)",
  "hex": "#cc4f46"
}, {
  "value": "rgb(184.0,32.0,31.0)",
  "brand": "Bourjois",
  "colour": "07 Joli Carmin???ois",
  "r": 184,
  "g": 32,
  "b": 31,
  "rgb": "rgb(184, 32, 31)",
  "hex": "#b8201f"
}, {
  "value": "rgb(157.0,20.0,29.0)",
  "brand": "Bourjois",
  "colour": "08 Rubi???s Cute",
  "r": 157,
  "g": 20,
  "b": 29,
  "rgb": "rgb(157, 20, 29)",
  "hex": "#9d141d"
}, {
  "value": "rgb(164.0,27.0,67.0)",
  "brand": "Bourjois",
  "colour": "09 Fuchsia Botte",
  "r": 164,
  "g": 27,
  "b": 67,
  "rgb": "rgb(164, 27, 67)",
  "hex": "#a41b43"
}, {
  "value": "rgb(114.0,24.0,58.0)",
  "brand": "Bourjois",
  "colour": "10 Ma Gni-Fig",
  "r": 114,
  "g": 24,
  "b": 58,
  "rgb": "rgb(114, 24, 58)",
  "hex": "#72183a"
}, {
  "value": "rgb(121.0,30.0,33.0)",
  "brand": "Bourjois",
  "colour": "11 Berry Formidable",
  "r": 121,
  "g": 30,
  "b": 33,
  "rgb": "rgb(121, 30, 33)",
  "hex": "#791e21"
}, {
  "value": "rgb(97.0,44.0,38.0)",
  "brand": "Bourjois",
  "colour": "12 Brunette",
  "r": 97,
  "g": 44,
  "b": 38,
  "rgb": "rgb(97, 44, 38)",
  "hex": "#612c26"
}, {
  "value": "rgb(139.0,91.0,88.0)",
  "brand": "Bourjois",
  "colour": "13 Nohalicious",
  "r": 139,
  "g": 91,
  "b": 88,
  "rgb": "rgb(139, 91, 88)",
  "hex": "#8b5b58"
}, {
  "value": "rgb(85.0,58.0,42.0)",
  "brand": "Bourjois",
  "colour": "14 Brownette",
  "r": 85,
  "g": 58,
  "b": 42,
  "rgb": "rgb(85, 58, 42)",
  "hex": "#553a2a"
}, {
  "value": "rgb(161.0,90.0,81.0)",
  "brand": "Bourjois",
  "colour": "15 Peach Tatin",
  "r": 161,
  "g": 90,
  "b": 81,
  "rgb": "rgb(161, 90, 81)",
  "hex": "#a15a51"
}, {
  "value": "rgb(130.0,85.0,73.0)",
  "brand": "Bourjois",
  "colour": "16 Caramelody",
  "r": 130,
  "g": 85,
  "b": 73,
  "rgb": "rgb(130, 85, 73)",
  "hex": "#825549"
}, {
  "value": "rgb(128.0,90.0,98.0)",
  "brand": "Bourjois",
  "colour": "17 From Paris with Mauve",
  "r": 128,
  "g": 90,
  "b": 98,
  "rgb": "rgb(128, 90, 98)",
  "hex": "#805a62"
}, {
  "value": "rgb(142.0,99.0,108.0)",
  "brand": "Bourjois",
  "colour": "18 Mauve-martre",
  "r": 142,
  "g": 99,
  "b": 108,
  "rgb": "rgb(142, 99, 108)",
  "hex": "#8e636c"
}, {
  "value": "rgb(137.0,83.0,102.0)",
  "brand": "Bourjois",
  "colour": "19 Place des Roses",
  "r": 137,
  "g": 83,
  "b": 102,
  "rgb": "rgb(137, 83, 102)",
  "hex": "#895366"
}, {
  "value": "rgb(83.0,50.0,70.0)",
  "brand": "Bourjois",
  "colour": "20 Plum Royal",
  "r": 83,
  "g": 50,
  "b": 70,
  "rgb": "rgb(83, 50, 70)",
  "hex": "#533246"
}, {
  "value": "rgb(157.0,63.0,53.0)",
  "brand": "Bourjois",
  "colour": "21 Grande Roux",
  "r": 157,
  "g": 63,
  "b": 53,
  "rgb": "rgb(157, 63, 53)",
  "hex": "#9d3f35"
}, {
  "value": "rgb(143.0,94.0,82.0)",
  "brand": "Bourjois",
  "colour": "22 Moka-d??ro",
  "r": 143,
  "g": 94,
  "b": 82,
  "rgb": "rgb(143, 94, 82)",
  "hex": "#8f5e52"
}, {
  "value": "rgb(119.0,79.0,67.0)",
  "brand": "Bourjois",
  "colour": "23 Taupe of Paris",
  "r": 119,
  "g": 79,
  "b": 67,
  "rgb": "rgb(119, 79, 67)",
  "hex": "#774f43"
}, {
  "value": "rgb(124.0,69.0,60.0)",
  "brand": "Bourjois",
  "colour": "24 Pari'sienne",
  "r": 124,
  "g": 69,
  "b": 60,
  "rgb": "rgb(124, 69, 60)",
  "hex": "#7c453c"
}, {
  "value": "rgb(88.0,57.0,42.0)",
  "brand": "Bourjois",
  "colour": "25 Maca'brown",
  "r": 88,
  "g": 57,
  "b": 42,
  "rgb": "rgb(88, 57, 42)",
  "hex": "#58392a"
}, {
  "value": "rgb(71.0,44.0,49.0)",
  "brand": "Bourjois",
  "colour": "26 French Op??ra",
  "r": 71,
  "g": 44,
  "b": 49,
  "rgb": "rgb(71, 44, 49)",
  "hex": "#472c31"
}, {
  "value": "rgb(173.0,136.0,135.0)",
  "brand": "Bourjois",
  "colour": "02 Beige Trench",
  "r": 173,
  "g": 136,
  "b": 135,
  "rgb": "rgb(173, 136, 135)",
  "hex": "#ad8887"
}, {
  "value": "rgb(206.0,125.0,119.0)",
  "brand": "Bourjois",
  "colour": "03 Peche Cosy",
  "r": 206,
  "g": 125,
  "b": 119,
  "rgb": "rgb(206, 125, 119)",
  "hex": "#ce7d77"
}, {
  "value": "rgb(161.0,101.0,103.0)",
  "brand": "Bourjois",
  "colour": "04 Rose Tweed",
  "r": 161,
  "g": 101,
  "b": 103,
  "rgb": "rgb(161, 101, 103)",
  "hex": "#a16567"
}, {
  "value": "rgb(124.0,63.0,54.0)",
  "brand": "Bourjois",
  "colour": "05 Brun Boheme",
  "r": 124,
  "g": 63,
  "b": 54,
  "rgb": "rgb(124, 63, 54)",
  "hex": "#7c3f36"
}, {
  "value": "rgb(168.0,2.0,100.0)",
  "brand": "Bourjois",
  "colour": "07 Fuchsia Graffiti",
  "r": 168,
  "g": 2,
  "b": 100,
  "rgb": "rgb(168, 2, 100)",
  "hex": "#a80264"
}, {
  "value": "rgb(169.0,48.0,37.0)",
  "brand": "Bourjois",
  "colour": "10 Rouge Buzz",
  "r": 169,
  "g": 48,
  "b": 37,
  "rgb": "rgb(169, 48, 37)",
  "hex": "#a93025"
}, {
  "value": "rgb(203.0,78.0,98.0)",
  "brand": "Bourjois",
  "colour": "11 Fraise Remix",
  "r": 203,
  "g": 78,
  "b": 98,
  "rgb": "rgb(203, 78, 98)",
  "hex": "#cb4e62"
}, {
  "value": "rgb(141.0,25.0,22.0)",
  "brand": "Bourjois",
  "colour": "13 Rouge Jet Set",
  "r": 141,
  "g": 25,
  "b": 22,
  "rgb": "rgb(141, 25, 22)",
  "hex": "#8d1916"
}, {
  "value": "rgb(110.0,41.0,49.0)",
  "brand": "Bourjois",
  "colour": "14 Pretty Prune",
  "r": 110,
  "g": 41,
  "b": 49,
  "rgb": "rgb(110, 41, 49)",
  "hex": "#6e2931"
}, {
  "value": "rgb(163.0,71.0,81.0)",
  "brand": "Bourjois",
  "colour": "17 Rose Millesime",
  "r": 163,
  "g": 71,
  "b": 81,
  "rgb": "rgb(163, 71, 81)",
  "hex": "#a34751"
}, {
  "value": "rgb(110.0,44.0,69.0)",
  "brand": "Bourjois",
  "colour": "18 Violine Strass",
  "r": 110,
  "g": 44,
  "b": 69,
  "rgb": "rgb(110, 44, 69)",
  "hex": "#6e2c45"
}, {
  "value": "rgb(114.0,55.0,41.0)",
  "brand": "Makeup Revolution",
  "colour": "Inclination",
  "r": 114,
  "g": 55,
  "b": 41,
  "rgb": "rgb(114, 55, 41)",
  "hex": "#723729"
}, {
  "value": "rgb(155.0,98.0,79.0)",
  "brand": "Makeup Revolution",
  "colour": "Wishful",
  "r": 155,
  "g": 98,
  "b": 79,
  "rgb": "rgb(155, 98, 79)",
  "hex": "#9b624f"
}, {
  "value": "rgb(120.0,67.0,54.0)",
  "brand": "Makeup Revolution",
  "colour": "Inspiration",
  "r": 120,
  "g": 67,
  "b": 54,
  "rgb": "rgb(120, 67, 54)",
  "hex": "#784336"
}, {
  "value": "rgb(163.0,104.0,79.0)",
  "brand": "Makeup Revolution",
  "colour": "Expose",
  "r": 163,
  "g": 104,
  "b": 79,
  "rgb": "rgb(163, 104, 79)",
  "hex": "#a3684f"
}, {
  "value": "rgb(155.0,66.0,70.0)",
  "brand": "Makeup Revolution",
  "colour": "Lust",
  "r": 155,
  "g": 66,
  "b": 70,
  "rgb": "rgb(155, 66, 70)",
  "hex": "#9b4246"
}, {
  "value": "rgb(168.0,95.0,88.0)",
  "brand": "Makeup Revolution",
  "colour": "Cake",
  "r": 168,
  "g": 95,
  "b": 88,
  "rgb": "rgb(168, 95, 88)",
  "hex": "#a85f58"
}, {
  "value": "rgb(168.0,98.0,73.0)",
  "brand": "Makeup Revolution",
  "colour": "Syrup",
  "r": 168,
  "g": 98,
  "b": 73,
  "rgb": "rgb(168, 98, 73)",
  "hex": "#a86249"
}, {
  "value": "rgb(144.0,77.0,62.0)",
  "brand": "Makeup Revolution",
  "colour": "Fudge",
  "r": 144,
  "g": 77,
  "b": 62,
  "rgb": "rgb(144, 77, 62)",
  "hex": "#904d3e"
}, {
  "value": "rgb(166.0,115.0,111.0)",
  "brand": "Makeup Revolution",
  "colour": "Chauffeur",
  "r": 166,
  "g": 115,
  "b": 111,
  "rgb": "rgb(166, 115, 111)",
  "hex": "#a6736f"
}, {
  "value": "rgb(179.0,13.0,37.0)",
  "brand": "Makeup Revolution",
  "colour": "Red Carpet",
  "r": 179,
  "g": 13,
  "b": 37,
  "rgb": "rgb(179, 13, 37)",
  "hex": "#b30d25"
}, {
  "value": "rgb(182.0,62.0,125.0)",
  "brand": "Makeup Revolution",
  "colour": "Diamond Life",
  "r": 182,
  "g": 62,
  "b": 125,
  "rgb": "rgb(182, 62, 125)",
  "hex": "#b63e7d"
}, {
  "value": "rgb(247.0,124.0,186.0)",
  "brand": "Makeup Revolution",
  "colour": "Girls Best Friend",
  "r": 247,
  "g": 124,
  "b": 186,
  "rgb": "rgb(247, 124, 186)",
  "hex": "#f77cba"
}, {
  "value": "rgb(76.0,20.0,59.0)",
  "brand": "Makeup Revolution",
  "colour": "Private Members Club",
  "r": 76,
  "g": 20,
  "b": 59,
  "rgb": "rgb(76, 20, 59)",
  "hex": "#4c143b"
}, {
  "value": "rgb(200.0,49.0,72.0)",
  "brand": "Makeup Revolution",
  "colour": "Dazzle",
  "r": 200,
  "g": 49,
  "b": 72,
  "rgb": "rgb(200, 49, 72)",
  "hex": "#c83148"
}, {
  "value": "rgb(228.0,38.0,24.0)",
  "brand": "Makeup Revolution",
  "colour": "Lady",
  "r": 228,
  "g": 38,
  "b": 24,
  "rgb": "rgb(228, 38, 24)",
  "hex": "#e42618"
}, {
  "value": "rgb(219.0,132.0,82.0)",
  "brand": "Makeup Revolution",
  "colour": "Nude",
  "r": 219,
  "g": 132,
  "b": 82,
  "rgb": "rgb(219, 132, 82)",
  "hex": "#db8452"
}, {
  "value": "rgb(129.0,58.0,52.0)",
  "brand": "Makeup Revolution",
  "colour": "Reckless",
  "r": 129,
  "g": 58,
  "b": 52,
  "rgb": "rgb(129, 58, 52)",
  "hex": "#813a34"
}, {
  "value": "rgb(239.0,114.0,79.0)",
  "brand": "Makeup Revolution",
  "colour": "Bliss",
  "r": 239,
  "g": 114,
  "b": 79,
  "rgb": "rgb(239, 114, 79)",
  "hex": "#ef724f"
}, {
  "value": "rgb(219.0,70.0,157.0)",
  "brand": "Makeup Revolution",
  "colour": "Scandalous Crime",
  "r": 219,
  "g": 70,
  "b": 157,
  "rgb": "rgb(219, 70, 157)",
  "hex": "#db469d"
}, {
  "value": "rgb(149.0,84.0,88.0)",
  "brand": "Makeup Revolution",
  "colour": "Rebel With Cause",
  "r": 149,
  "g": 84,
  "b": 88,
  "rgb": "rgb(149, 84, 88)",
  "hex": "#955458"
}, {
  "value": "rgb(141.0,109.0,172.0)",
  "brand": "Makeup Revolution",
  "colour": "Scandalous Depraved",
  "r": 141,
  "g": 109,
  "b": 172,
  "rgb": "rgb(141, 109, 172)",
  "hex": "#8d6dac"
}, {
  "value": "rgb(71.0,63.0,71.0)",
  "brand": "Makeup Revolution",
  "colour": "100% Vamp",
  "r": 71,
  "g": 63,
  "b": 71,
  "rgb": "rgb(71, 63, 71)",
  "hex": "#473f47"
}, {
  "value": "rgb(218.0,145.0,121.0)",
  "brand": "Makeup Revolution",
  "colour": "The One",
  "r": 218,
  "g": 145,
  "b": 121,
  "rgb": "rgb(218, 145, 121)",
  "hex": "#da9179"
}, {
  "value": "rgb(149.0,0.0,1.0)",
  "brand": "Makeup Revolution",
  "colour": "Atomic Ruby",
  "r": 149,
  "g": 0,
  "b": 1,
  "rgb": "rgb(149, 0, 1)",
  "hex": "#950001"
}, {
  "value": "rgb(137.0,87.0,76.0)",
  "brand": "Makeup Revolution",
  "colour": "Chauffeur",
  "r": 137,
  "g": 87,
  "b": 76,
  "rgb": "rgb(137, 87, 76)",
  "hex": "#89574c"
}, {
  "value": "rgb(148.0,59.0,63.0)",
  "brand": "Makeup Revolution",
  "colour": "Red Carpet",
  "r": 148,
  "g": 59,
  "b": 63,
  "rgb": "rgb(148, 59, 63)",
  "hex": "#943b3f"
}, {
  "value": "rgb(60.0,10.0,22.0)",
  "brand": "Makeup Revolution",
  "colour": "Diam Life",
  "r": 60,
  "g": 10,
  "b": 22,
  "rgb": "rgb(60, 10, 22)",
  "hex": "#3c0a16"
}, {
  "value": "rgb(170.0,43.0,114.0)",
  "brand": "Makeup Revolution",
  "colour": "Best Friend",
  "r": 170,
  "g": 43,
  "b": 114,
  "rgb": "rgb(170, 43, 114)",
  "hex": "#aa2b72"
}, {
  "value": "rgb(43.0,20.0,28.0)",
  "brand": "Makeup Revolution",
  "colour": "Members Club",
  "r": 43,
  "g": 20,
  "b": 28,
  "rgb": "rgb(43, 20, 28)",
  "hex": "#2b141c"
}, {
  "value": "rgb(120.0,12.0,24.0)",
  "brand": "Makeup Revolution",
  "colour": "Duel Matt",
  "r": 120,
  "g": 12,
  "b": 24,
  "rgb": "rgb(120, 12, 24)",
  "hex": "#780c18"
}, {
  "value": "rgb(124.0,51.0,48.0)",
  "brand": "Makeup Revolution",
  "colour": "Looking Ahead",
  "r": 124,
  "g": 51,
  "b": 48,
  "rgb": "rgb(124, 51, 48)",
  "hex": "#7c3330"
}, {
  "value": "rgb(180.0,103.0,92.0)",
  "brand": "Makeup Revolution",
  "colour": "Game Of Mystery Matte",
  "r": 180,
  "g": 103,
  "b": 92,
  "rgb": "rgb(180, 103, 92)",
  "hex": "#b4675c"
}, {
  "value": "rgb(179.0,110.0,71.0)",
  "brand": "Makeup Revolution",
  "colour": "You Are Beautiful",
  "r": 179,
  "g": 110,
  "b": 71,
  "rgb": "rgb(179, 110, 71)",
  "hex": "#b36e47"
}, {
  "value": "rgb(165.0,104.0,76.0)",
  "brand": "Makeup Revolution",
  "colour": "Absolutely Flawless",
  "r": 165,
  "g": 104,
  "b": 76,
  "rgb": "rgb(165, 104, 76)",
  "hex": "#a5684c"
}, {
  "value": "rgb(152.0,36.0,45.0)",
  "brand": "Makeup Revolution",
  "colour": "Propoganda Matte",
  "r": 152,
  "g": 36,
  "b": 45,
  "rgb": "rgb(152, 36, 45)",
  "hex": "#98242d"
}, {
  "value": "rgb(180.0,113.0,95.0)",
  "brand": "Makeup Revolution",
  "colour": "You're A Star",
  "r": 180,
  "g": 113,
  "b": 95,
  "rgb": "rgb(180, 113, 95)",
  "hex": "#b4715f"
}, {
  "value": "rgb(62.0,15.0,17.0)",
  "brand": "Makeup Revolution",
  "colour": "Blindfolded",
  "r": 62,
  "g": 15,
  "b": 17,
  "rgb": "rgb(62, 15, 17)",
  "hex": "#3e0f11"
}, {
  "value": "rgb(164.0,4.0,52.0)",
  "brand": "Makeup Revolution",
  "colour": "We Were Lovers",
  "r": 164,
  "g": 4,
  "b": 52,
  "rgb": "rgb(164, 4, 52)",
  "hex": "#a40434"
}, {
  "value": "rgb(137.0,15.0,98.0)",
  "brand": "Makeup Revolution",
  "colour": "Liberty Matte",
  "r": 137,
  "g": 15,
  "b": 98,
  "rgb": "rgb(137, 15, 98)",
  "hex": "#890f62"
}, {
  "value": "rgb(218.0,142.0,129.0)",
  "brand": "Makeup Revolution",
  "colour": "Higher",
  "r": 218,
  "g": 142,
  "b": 129,
  "rgb": "rgb(218, 142, 129)",
  "hex": "#da8e81"
}, {
  "value": "rgb(36.0,14.0,16.0)",
  "brand": "Makeup Revolution",
  "colour": "Untouched",
  "r": 36,
  "g": 14,
  "b": 16,
  "rgb": "rgb(36, 14, 16)",
  "hex": "#240e10"
}, {
  "value": "rgb(163.0,29.0,64.0)",
  "brand": "Makeup Revolution",
  "colour": "Highness",
  "r": 163,
  "g": 29,
  "b": 64,
  "rgb": "rgb(163, 29, 64)",
  "hex": "#a31d40"
}, {
  "value": "rgb(207.0,161.0,164.0)",
  "brand": "Covergirl",
  "colour": "Honeyed Bloom",
  "r": 207,
  "g": 161,
  "b": 164,
  "rgb": "rgb(207, 161, 164)",
  "hex": "#cfa1a4"
}, {
  "value": "rgb(202.0,154.0,142.0)",
  "brand": "Covergirl",
  "colour": "Champagne",
  "r": 202,
  "g": 154,
  "b": 142,
  "rgb": "rgb(202, 154, 142)",
  "hex": "#ca9a8e"
}, {
  "value": "rgb(225.0,183.0,167.0)",
  "brand": "Covergirl",
  "colour": "Cr??me",
  "r": 225,
  "g": 183,
  "b": 167,
  "rgb": "rgb(225, 183, 167)",
  "hex": "#e1b7a7"
}, {
  "value": "rgb(226.0,96.0,156.0)",
  "brand": "Covergirl",
  "colour": "Bombshell Pink",
  "r": 226,
  "g": 96,
  "b": 156,
  "rgb": "rgb(226, 96, 156)",
  "hex": "#e2609c"
}, {
  "value": "rgb(215.0,109.0,149.0)",
  "brand": "Covergirl",
  "colour": "Enchantress",
  "r": 215,
  "g": 109,
  "b": 149,
  "rgb": "rgb(215, 109, 149)",
  "hex": "#d76d95"
}, {
  "value": "rgb(210.0,116.0,132.0)",
  "brand": "Covergirl",
  "colour": "Delight Blush",
  "r": 210,
  "g": 116,
  "b": 132,
  "rgb": "rgb(210, 116, 132)",
  "hex": "#d27484"
}, {
  "value": "rgb(199.0,106.0,117.0)",
  "brand": "Covergirl",
  "colour": "Ravishing Rose",
  "r": 199,
  "g": 106,
  "b": 117,
  "rgb": "rgb(199, 106, 117)",
  "hex": "#c76a75"
}, {
  "value": "rgb(238.0,130.0,145.0)",
  "brand": "Covergirl",
  "colour": "Temptress Rose",
  "r": 238,
  "g": 130,
  "b": 145,
  "rgb": "rgb(238, 130, 145)",
  "hex": "#ee8291"
}, {
  "value": "rgb(223.0,165.0,179.0)",
  "brand": "Covergirl",
  "colour": "Darling Kiss",
  "r": 223,
  "g": 165,
  "b": 179,
  "rgb": "rgb(223, 165, 179)",
  "hex": "#dfa5b3"
}, {
  "value": "rgb(201.0,131.0,139.0)",
  "brand": "Covergirl",
  "colour": "Sweetheart",
  "r": 201,
  "g": 131,
  "b": 139,
  "rgb": "rgb(201, 131, 139)",
  "hex": "#c9838b"
}, {
  "value": "rgb(204.0,125.0,146.0)",
  "brand": "Covergirl",
  "colour": "Yummy Pink",
  "r": 204,
  "g": 125,
  "b": 146,
  "rgb": "rgb(204, 125, 146)",
  "hex": "#cc7d92"
}, {
  "value": "rgb(229.0,196.0,177.0)",
  "brand": "Covergirl",
  "colour": "Dulce de Leche",
  "r": 229,
  "g": 196,
  "b": 177,
  "rgb": "rgb(229, 196, 177)",
  "hex": "#e5c4b1"
}, {
  "value": "rgb(191.0,152.0,135.0)",
  "brand": "Covergirl",
  "colour": "Tempting Toffee",
  "r": 191,
  "g": 152,
  "b": 135,
  "rgb": "rgb(191, 152, 135)",
  "hex": "#bf9887"
}, {
  "value": "rgb(197.0,149.0,163.0)",
  "brand": "Covergirl",
  "colour": "Romance Mauve",
  "r": 197,
  "g": 149,
  "b": 163,
  "rgb": "rgb(197, 149, 163)",
  "hex": "#c595a3"
}, {
  "value": "rgb(187.0,140.0,122.0)",
  "brand": "Covergirl",
  "colour": "Coffee Crave",
  "r": 187,
  "g": 140,
  "b": 122,
  "rgb": "rgb(187, 140, 122)",
  "hex": "#bb8c7a"
}, {
  "value": "rgb(225.0,150.0,144.0)",
  "brand": "Covergirl",
  "colour": "Decadent Peach",
  "r": 225,
  "g": 150,
  "b": 144,
  "rgb": "rgb(225, 150, 144)",
  "hex": "#e19690"
}, {
  "value": "rgb(212.0,71.0,88.0)",
  "brand": "Covergirl",
  "colour": "Succulent Cherry",
  "r": 212,
  "g": 71,
  "b": 88,
  "rgb": "rgb(212, 71, 88)",
  "hex": "#d44758"
}, {
  "value": "rgb(205.0,73.0,71.0)",
  "brand": "Covergirl",
  "colour": "HOT",
  "r": 205,
  "g": 73,
  "b": 71,
  "rgb": "rgb(205, 73, 71)",
  "hex": "#cd4947"
}, {
  "value": "rgb(169.0,37.0,58.0)",
  "brand": "Covergirl",
  "colour": "Seduce Scarlet",
  "r": 169,
  "g": 37,
  "b": 58,
  "rgb": "rgb(169, 37, 58)",
  "hex": "#a9253a"
}, {
  "value": "rgb(190.0,126.0,150.0)",
  "brand": "Covergirl",
  "colour": "Coquette Orchid",
  "r": 190,
  "g": 126,
  "b": 150,
  "rgb": "rgb(190, 126, 150)",
  "hex": "#be7e96"
}, {
  "value": "rgb(213.0,158.0,187.0)",
  "brand": "Covergirl",
  "colour": "Verve Violet",
  "r": 213,
  "g": 158,
  "b": 187,
  "rgb": "rgb(213, 158, 187)",
  "hex": "#d59ebb"
}, {
  "value": "rgb(190.0,126.0,142.0)",
  "brand": "Covergirl",
  "colour": "Delicious",
  "r": 190,
  "g": 126,
  "b": 142,
  "rgb": "rgb(190, 126, 142)",
  "hex": "#be7e8e"
}, {
  "value": "rgb(191.0,123.0,146.0)",
  "brand": "Covergirl",
  "colour": "Tantalize",
  "r": 191,
  "g": 123,
  "b": 146,
  "rgb": "rgb(191, 123, 146)",
  "hex": "#bf7b92"
}, {
  "value": "rgb(218.0,126.0,173.0)",
  "brand": "Covergirl",
  "colour": "Spellbound",
  "r": 218,
  "g": 126,
  "b": 173,
  "rgb": "rgb(218, 126, 173)",
  "hex": "#da7ead"
}, {
  "value": "rgb(203.0,152.0,149.0)",
  "brand": "Covergirl",
  "colour": "Sultry Sienna",
  "r": 203,
  "g": 152,
  "b": 149,
  "rgb": "rgb(203, 152, 149)",
  "hex": "#cb9895"
}, {
  "value": "rgb(214.0,161.0,143.0)",
  "brand": "Covergirl",
  "colour": "Caramel Kiss",
  "r": 214,
  "g": 161,
  "b": 143,
  "rgb": "rgb(214, 161, 143)",
  "hex": "#d6a18f"
}, {
  "value": "rgb(0.0,0.0,0.0)",
  "brand": "Covergirl",
  "colour": "Don't Tell",
  "r": 0,
  "g": 0,
  "b": 0,
  "rgb": "rgb(0, 0, 0)",
  "hex": "#000000"
}, {
  "value": "rgb(48.0,79.0,110.0)",
  "brand": "Covergirl",
  "colour": "Deeper",
  "r": 48,
  "g": 79,
  "b": 110,
  "rgb": "rgb(48, 79, 110)",
  "hex": "#304f6e"
}, {
  "value": "rgb(51.0,43.0,118.0)",
  "brand": "Covergirl",
  "colour": "Steal",
  "r": 51,
  "g": 43,
  "b": 118,
  "rgb": "rgb(51, 43, 118)",
  "hex": "#332b76"
}, {
  "value": "rgb(99.0,80.0,100.0)",
  "brand": "Covergirl",
  "colour": "Stop the Press",
  "r": 99,
  "g": 80,
  "b": 100,
  "rgb": "rgb(99, 80, 100)",
  "hex": "#635064"
}, {
  "value": "rgb(75.0,28.0,34.0)",
  "brand": "Covergirl",
  "colour": "Rendezvous",
  "r": 75,
  "g": 28,
  "b": 34,
  "rgb": "rgb(75, 28, 34)",
  "hex": "#4b1c22"
}, {
  "value": "rgb(140.0,87.0,93.0)",
  "brand": "Covergirl",
  "colour": "Getaway",
  "r": 140,
  "g": 87,
  "b": 93,
  "rgb": "rgb(140, 87, 93)",
  "hex": "#8c575d"
}, {
  "value": "rgb(168.0,35.0,28.0)",
  "brand": "Covergirl",
  "colour": "Ready or Not",
  "r": 168,
  "g": 35,
  "b": 28,
  "rgb": "rgb(168, 35, 28)",
  "hex": "#a8231c"
}, {
  "value": "rgb(159.0,135.0,131.0)",
  "brand": "Covergirl",
  "colour": "Can't Stop",
  "r": 159,
  "g": 135,
  "b": 131,
  "rgb": "rgb(159, 135, 131)",
  "hex": "#9f8783"
}, {
  "value": "rgb(250.0,123.0,194.0)",
  "brand": "Covergirl",
  "colour": "Love Me Later",
  "r": 250,
  "g": 123,
  "b": 194,
  "rgb": "rgb(250, 123, 194)",
  "hex": "#fa7bc2"
}, {
  "value": "rgb(221.0,165.0,178.0)",
  "brand": "Covergirl",
  "colour": "Call Me",
  "r": 221,
  "g": 165,
  "b": 178,
  "rgb": "rgb(221, 165, 178)",
  "hex": "#dda5b2"
}, {
  "value": "rgb(249.0,250.0,245.0)",
  "brand": "Covergirl",
  "colour": "Flushed",
  "r": 249,
  "g": 250,
  "b": 245,
  "rgb": "rgb(249, 250, 245)",
  "hex": "#f9faf5"
}, {
  "value": "rgb(253.0,246.0,230.0)",
  "brand": "Covergirl",
  "colour": "Razzle Dazzle",
  "r": 253,
  "g": 246,
  "b": 230,
  "rgb": "rgb(253, 246, 230)",
  "hex": "#fdf6e6"
}, {
  "value": "rgb(129.0,22.0,25.0)",
  "brand": "Covergirl",
  "colour": "Crown Ruby",
  "r": 129,
  "g": 22,
  "b": 25,
  "rgb": "rgb(129, 22, 25)",
  "hex": "#811619"
}, {
  "value": "rgb(205.0,24.0,120.0)",
  "brand": "Covergirl",
  "colour": "Enchant",
  "r": 205,
  "g": 24,
  "b": 120,
  "rgb": "rgb(205, 24, 120)",
  "hex": "#cd1878"
}, {
  "value": "rgb(155.0,44.0,86.0)",
  "brand": "Covergirl",
  "colour": "Throne",
  "r": 155,
  "g": 44,
  "b": 86,
  "rgb": "rgb(155, 44, 86)",
  "hex": "#9b2c56"
}, {
  "value": "rgb(133.0,42.0,115.0)",
  "brand": "Covergirl",
  "colour": "Elegance",
  "r": 133,
  "g": 42,
  "b": 115,
  "rgb": "rgb(133, 42, 115)",
  "hex": "#852a73"
}, {
  "value": "rgb(117.0,25.0,27.0)",
  "brand": "Covergirl",
  "colour": "Monarch",
  "r": 117,
  "g": 25,
  "b": 27,
  "rgb": "rgb(117, 25, 27)",
  "hex": "#75191b"
}, {
  "value": "rgb(163.0,106.0,172.0)",
  "brand": "Covergirl",
  "colour": "Pink Reign",
  "r": 163,
  "g": 106,
  "b": 172,
  "rgb": "rgb(163, 106, 172)",
  "hex": "#a36aac"
}, {
  "value": "rgb(172.0,19.0,48.0)",
  "brand": "Covergirl",
  "colour": "Jubilee",
  "r": 172,
  "g": 19,
  "b": 48,
  "rgb": "rgb(172, 19, 48)",
  "hex": "#ac1330"
}, {
  "value": "rgb(137.0,72.0,59.0)",
  "brand": "Covergirl",
  "colour": "Grace",
  "r": 137,
  "g": 72,
  "b": 59,
  "rgb": "rgb(137, 72, 59)",
  "hex": "#89483b"
}, {
  "value": "rgb(164.0,16.0,45.0)",
  "brand": "Covergirl",
  "colour": "Passion",
  "r": 164,
  "g": 16,
  "b": 45,
  "rgb": "rgb(164, 16, 45)",
  "hex": "#a4102d"
}, {
  "value": "rgb(129.0,48.0,73.0)",
  "brand": "Covergirl",
  "colour": "Duchess",
  "r": 129,
  "g": 48,
  "b": 73,
  "rgb": "rgb(129, 48, 73)",
  "hex": "#813049"
}, {
  "value": "rgb(147.0,6.0,49.0)",
  "brand": "Covergirl",
  "colour": "Pink Shock",
  "r": 147,
  "g": 6,
  "b": 49,
  "rgb": "rgb(147, 6, 49)",
  "hex": "#930631"
}, {
  "value": "rgb(209.0,101.0,114.0)",
  "brand": "Covergirl",
  "colour": "Pink Pow",
  "r": 209,
  "g": 101,
  "b": 114,
  "rgb": "rgb(209, 101, 114)",
  "hex": "#d16572"
}, {
  "value": "rgb(145.0,58.0,127.0)",
  "brand": "BUXOM",
  "colour": "Shameless Magenta",
  "r": 145,
  "g": 58,
  "b": 127,
  "rgb": "rgb(145, 58, 127)",
  "hex": "#913a7f"
}, {
  "value": "rgb(91.0,4.0,55.0)",
  "brand": "BUXOM",
  "colour": "Graphic Grape",
  "r": 91,
  "g": 4,
  "b": 55,
  "rgb": "rgb(91, 4, 55)",
  "hex": "#5b0437"
}, {
  "value": "rgb(209.0,5.0,120.0)",
  "brand": "BUXOM",
  "colour": "Fuchsia Fetish",
  "r": 209,
  "g": 5,
  "b": 120,
  "rgb": "rgb(209, 5, 120)",
  "hex": "#d10578"
}, {
  "value": "rgb(141.0,23.0,55.0)",
  "brand": "BUXOM",
  "colour": "Forbidden Berry",
  "r": 141,
  "g": 23,
  "b": 55,
  "rgb": "rgb(141, 23, 55)",
  "hex": "#8d1737"
}, {
  "value": "rgb(208.0,88.0,100.0)",
  "brand": "BUXOM",
  "colour": "Pink Coquette",
  "r": 208,
  "g": 88,
  "b": 100,
  "rgb": "rgb(208, 88, 100)",
  "hex": "#d05864"
}, {
  "value": "rgb(247.0,82.0,114.0)",
  "brand": "BUXOM",
  "colour": "Wicked Pink",
  "r": 247,
  "g": 82,
  "b": 114,
  "rgb": "rgb(247, 82, 114)",
  "hex": "#f75272"
}, {
  "value": "rgb(236.0,106.0,104.0)",
  "brand": "BUXOM",
  "colour": "Coral Confessions",
  "r": 236,
  "g": 106,
  "b": 104,
  "rgb": "rgb(236, 106, 104)",
  "hex": "#ec6a68"
}, {
  "value": "rgb(213.0,28.0,46.0)",
  "brand": "BUXOM",
  "colour": "Rouge Red",
  "r": 213,
  "g": 28,
  "b": 46,
  "rgb": "rgb(213, 28, 46)",
  "hex": "#d51c2e"
}, {
  "value": "rgb(242.0,37.0,54.0)",
  "brand": "BUXOM",
  "colour": "Extreme Heat",
  "r": 242,
  "g": 37,
  "b": 54,
  "rgb": "rgb(242, 37, 54)",
  "hex": "#f22536"
}, {
  "value": "rgb(156.0,84.0,88.0)",
  "brand": "BUXOM",
  "colour": "Rebel Rose",
  "r": 156,
  "g": 84,
  "b": 88,
  "rgb": "rgb(156, 84, 88)",
  "hex": "#9c5458"
}, {
  "value": "rgb(152.0,39.0,45.0)",
  "brand": "BUXOM",
  "colour": "Burning Desire",
  "r": 152,
  "g": 39,
  "b": 45,
  "rgb": "rgb(152, 39, 45)",
  "hex": "#98272d"
}, {
  "value": "rgb(191.0,105.0,106.0)",
  "brand": "BUXOM",
  "colour": "Guilty Angel",
  "r": 191,
  "g": 105,
  "b": 106,
  "rgb": "rgb(191, 105, 106)",
  "hex": "#bf696a"
}, {
  "value": "rgb(110.0,38.0,58.0)",
  "brand": "BUXOM",
  "colour": "Sultry Mauve",
  "r": 110,
  "g": 38,
  "b": 58,
  "rgb": "rgb(110, 38, 58)",
  "hex": "#6e263a"
}, {
  "value": "rgb(176.0,89.0,79.0)",
  "brand": "BUXOM",
  "colour": "Poison Nectar",
  "r": 176,
  "g": 89,
  "b": 79,
  "rgb": "rgb(176, 89, 79)",
  "hex": "#b0594f"
}, {
  "value": "rgb(183.0,105.0,83.0)",
  "brand": "BUXOM",
  "colour": "Nude Exposure",
  "r": 183,
  "g": 105,
  "b": 83,
  "rgb": "rgb(183, 105, 83)",
  "hex": "#b76953"
}, {
  "value": "rgb(236.0,143.0,138.0)",
  "brand": "BUXOM",
  "colour": "White Russian",
  "r": 236,
  "g": 143,
  "b": 138,
  "rgb": "rgb(236, 143, 138)",
  "hex": "#ec8f8a"
}, {
  "value": "rgb(171.0,78.0,70.0)",
  "brand": "BUXOM",
  "colour": "Racy Reveal",
  "r": 171,
  "g": 78,
  "b": 70,
  "rgb": "rgb(171, 78, 70)",
  "hex": "#ab4e46"
}, {
  "value": "rgb(248.0,116.0,153.0)",
  "brand": "BUXOM",
  "colour": "Uncensored Candy",
  "r": 248,
  "g": 116,
  "b": 153,
  "rgb": "rgb(248, 116, 153)",
  "hex": "#f87499"
}, {
  "value": "rgb(215.0,103.0,101.0)",
  "brand": "BUXOM",
  "colour": "Naturally Daring",
  "r": 215,
  "g": 103,
  "b": 101,
  "rgb": "rgb(215, 103, 101)",
  "hex": "#d76765"
}, {
  "value": "rgb(226.0,98.0,133.0)",
  "brand": "BUXOM",
  "colour": "Defiant Bloom",
  "r": 226,
  "g": 98,
  "b": 133,
  "rgb": "rgb(226, 98, 133)",
  "hex": "#e26285"
}, {
  "value": "rgb(88.0,35.0,29.0)",
  "brand": "BUXOM",
  "colour": "Sinful Cinnamon",
  "r": 88,
  "g": 35,
  "b": 29,
  "rgb": "rgb(88, 35, 29)",
  "hex": "#58231d"
}, {
  "value": "rgb(207.0,21.0,45.0)",
  "brand": "BUXOM",
  "colour": "Pink Decoy",
  "r": 207,
  "g": 21,
  "b": 45,
  "rgb": "rgb(207, 21, 45)",
  "hex": "#cf152d"
}, {
  "value": "rgb(156.0,51.0,55.0)",
  "brand": "BUXOM",
  "colour": "Evocative Petal",
  "r": 156,
  "g": 51,
  "b": 55,
  "rgb": "rgb(156, 51, 55)",
  "hex": "#9c3337"
}, {
  "value": "rgb(203.0,53.0,38.0)",
  "brand": "BUXOM",
  "colour": "Wildfire",
  "r": 203,
  "g": 53,
  "b": 38,
  "rgb": "rgb(203, 53, 38)",
  "hex": "#cb3526"
}, {
  "value": "rgb(154.0,23.0,39.0)",
  "brand": "BUXOM",
  "colour": "Ruby Temptress",
  "r": 154,
  "g": 23,
  "b": 39,
  "rgb": "rgb(154, 23, 39)",
  "hex": "#9a1727"
}, {
  "value": "rgb(162.0,42.0,43.0)",
  "brand": "BUXOM",
  "colour": "Red Inferno",
  "r": 162,
  "g": 42,
  "b": 43,
  "rgb": "rgb(162, 42, 43)",
  "hex": "#a22a2b"
}, {
  "value": "rgb(144.0,41.0,42.0)",
  "brand": "BUXOM",
  "colour": "Classified Crimson",
  "r": 144,
  "g": 41,
  "b": 42,
  "rgb": "rgb(144, 41, 42)",
  "hex": "#90292a"
}, {
  "value": "rgb(145.0,18.0,35.0)",
  "brand": "BUXOM",
  "colour": "Toxic Cherry",
  "r": 145,
  "g": 18,
  "b": 35,
  "rgb": "rgb(145, 18, 35)",
  "hex": "#911223"
}, {
  "value": "rgb(68.0,0.0,13.0)",
  "brand": "BUXOM",
  "colour": "Voodoo Spice",
  "r": 68,
  "g": 0,
  "b": 13,
  "rgb": "rgb(68, 0, 13)",
  "hex": "#44000d"
}, {
  "value": "rgb(149.0,59.0,110.0)",
  "brand": "BUXOM",
  "colour": "Ultraviolet",
  "r": 149,
  "g": 59,
  "b": 110,
  "rgb": "rgb(149, 59, 110)",
  "hex": "#953b6e"
}, {
  "value": "rgb(44.0,4.0,12.0)",
  "brand": "BUXOM",
  "colour": "Vampy Plum",
  "r": 44,
  "g": 4,
  "b": 12,
  "rgb": "rgb(44, 4, 12)",
  "hex": "#2c040c"
}, {
  "value": "rgb(221.0,99.0,114.0)",
  "brand": "tarte",
  "colour": "Rosy View",
  "r": 221,
  "g": 99,
  "b": 114,
  "rgb": "rgb(221, 99, 114)",
  "hex": "#dd6372"
}, {
  "value": "rgb(218.0,85.0,80.0)",
  "brand": "tarte",
  "colour": "Tangerine Target",
  "r": 218,
  "g": 85,
  "b": 80,
  "rgb": "rgb(218, 85, 80)",
  "hex": "#da5550"
}, {
  "value": "rgb(227.0,85.0,107.0)",
  "brand": "tarte",
  "colour": "Pink Tutu",
  "r": 227,
  "g": 85,
  "b": 107,
  "rgb": "rgb(227, 85, 107)",
  "hex": "#e3556b"
}, {
  "value": "rgb(235.0,74.0,89.0)",
  "brand": "tarte",
  "colour": "Melon Punch",
  "r": 235,
  "g": 74,
  "b": 89,
  "rgb": "rgb(235, 74, 89)",
  "hex": "#eb4a59"
}, {
  "value": "rgb(189.0,113.0,115.0)",
  "brand": "tarte",
  "colour": "Bare Bud",
  "r": 189,
  "g": 113,
  "b": 115,
  "rgb": "rgb(189, 113, 115)",
  "hex": "#bd7173"
}, {
  "value": "rgb(194.0,98.0,109.0)",
  "brand": "tarte",
  "colour": "Berry Cruiser",
  "r": 194,
  "g": 98,
  "b": 109,
  "rgb": "rgb(194, 98, 109)",
  "hex": "#c2626d"
}, {
  "value": "rgb(190.0,100.0,98.0)",
  "brand": "ARTDECO",
  "colour": "724 Mat Terracotta",
  "r": 190,
  "g": 100,
  "b": 98,
  "rgb": "rgb(190, 100, 98)",
  "hex": "#be6462"
}, {
  "value": "rgb(113.0,33.0,46.0)",
  "brand": "ARTDECO",
  "colour": "738 Mat Crimson Red",
  "r": 113,
  "g": 33,
  "b": 46,
  "rgb": "rgb(113, 33, 46)",
  "hex": "#71212e"
}, {
  "value": "rgb(96.0,35.0,43.0)",
  "brand": "ARTDECO",
  "colour": "749 Mat Garnet Red",
  "r": 96,
  "g": 35,
  "b": 43,
  "rgb": "rgb(96, 35, 43)",
  "hex": "#60232b"
}, {
  "value": "rgb(114.0,55.0,75.0)",
  "brand": "ARTDECO",
  "colour": "762 Mat Grape Juice",
  "r": 114,
  "g": 55,
  "b": 75,
  "rgb": "rgb(114, 55, 75)",
  "hex": "#72374b"
}, {
  "value": "rgb(213.0,33.0,34.0)",
  "brand": "ARTDECO",
  "colour": "801",
  "r": 213,
  "g": 33,
  "b": 34,
  "rgb": "rgb(213, 33, 34)",
  "hex": "#d52122"
}, {
  "value": "rgb(151.0,34.0,35.0)",
  "brand": "ARTDECO",
  "colour": "803",
  "r": 151,
  "g": 34,
  "b": 35,
  "rgb": "rgb(151, 34, 35)",
  "hex": "#972223"
}, {
  "value": "rgb(121.0,26.0,32.0)",
  "brand": "ARTDECO",
  "colour": "806",
  "r": 121,
  "g": 26,
  "b": 32,
  "rgb": "rgb(121, 26, 32)",
  "hex": "#791a20"
}, {
  "value": "rgb(96.0,30.0,34.0)",
  "brand": "ARTDECO",
  "colour": "809",
  "r": 96,
  "g": 30,
  "b": 34,
  "rgb": "rgb(96, 30, 34)",
  "hex": "#601e22"
}, {
  "value": "rgb(63.0,30.0,34.0)",
  "brand": "ARTDECO",
  "colour": "812",
  "r": 63,
  "g": 30,
  "b": 34,
  "rgb": "rgb(63, 30, 34)",
  "hex": "#3f1e22"
}, {
  "value": "rgb(145.0,56.0,74.0)",
  "brand": "ARTDECO",
  "colour": "818",
  "r": 145,
  "g": 56,
  "b": 74,
  "rgb": "rgb(145, 56, 74)",
  "hex": "#91384a"
}, {
  "value": "rgb(136.0,75.0,83.0)",
  "brand": "ARTDECO",
  "colour": "820",
  "r": 136,
  "g": 75,
  "b": 83,
  "rgb": "rgb(136, 75, 83)",
  "hex": "#884b53"
}, {
  "value": "rgb(96.0,46.0,57.0)",
  "brand": "ARTDECO",
  "colour": "823",
  "r": 96,
  "g": 46,
  "b": 57,
  "rgb": "rgb(96, 46, 57)",
  "hex": "#602e39"
}, {
  "value": "rgb(113.0,62.0,67.0)",
  "brand": "ARTDECO",
  "colour": "826",
  "r": 113,
  "g": 62,
  "b": 67,
  "rgb": "rgb(113, 62, 67)",
  "hex": "#713e43"
}, {
  "value": "rgb(148.0,73.0,79.0)",
  "brand": "ARTDECO",
  "colour": "830",
  "r": 148,
  "g": 73,
  "b": 79,
  "rgb": "rgb(148, 73, 79)",
  "hex": "#94494f"
}, {
  "value": "rgb(143.0,93.0,84.0)",
  "brand": "ARTDECO",
  "colour": "854",
  "r": 143,
  "g": 93,
  "b": 84,
  "rgb": "rgb(143, 93, 84)",
  "hex": "#8f5d54"
}, {
  "value": "rgb(147.0,63.0,79.0)",
  "brand": "ARTDECO",
  "colour": "885",
  "r": 147,
  "g": 63,
  "b": 79,
  "rgb": "rgb(147, 63, 79)",
  "hex": "#933f4f"
}, {
  "value": "rgb(196.0,88.0,86.0)",
  "brand": "ARTDECO",
  "colour": "898",
  "r": 196,
  "g": 88,
  "b": 86,
  "rgb": "rgb(196, 88, 86)",
  "hex": "#c45856"
}, {
  "value": "rgb(171.0,65.0,87.0)",
  "brand": "ARTDECO",
  "colour": "915",
  "r": 171,
  "g": 65,
  "b": 87,
  "rgb": "rgb(171, 65, 87)",
  "hex": "#ab4157"
}, {
  "value": "rgb(164.0,39.0,73.0)",
  "brand": "ARTDECO",
  "colour": "922",
  "r": 164,
  "g": 39,
  "b": 73,
  "rgb": "rgb(164, 39, 73)",
  "hex": "#a42749"
}, {
  "value": "rgb(74.0,19.0,37.0)",
  "brand": "ARTDECO",
  "colour": "931",
  "r": 74,
  "g": 19,
  "b": 37,
  "rgb": "rgb(74, 19, 37)",
  "hex": "#4a1325"
}, {
  "value": "rgb(103.0,55.0,67.0)",
  "brand": "ARTDECO",
  "colour": "935",
  "r": 103,
  "g": 55,
  "b": 67,
  "rgb": "rgb(103, 55, 67)",
  "hex": "#673743"
}, {
  "value": "rgb(126.0,71.0,94.0)",
  "brand": "ARTDECO",
  "colour": "939",
  "r": 126,
  "g": 71,
  "b": 94,
  "rgb": "rgb(126, 71, 94)",
  "hex": "#7e475e"
}, {
  "value": "rgb(157.0,80.0,121.0)",
  "brand": "ARTDECO",
  "colour": "944",
  "r": 157,
  "g": 80,
  "b": 121,
  "rgb": "rgb(157, 80, 121)",
  "hex": "#9d5079"
}, {
  "value": "rgb(188.0,106.0,128.0)",
  "brand": "ARTDECO",
  "colour": "955",
  "r": 188,
  "g": 106,
  "b": 128,
  "rgb": "rgb(188, 106, 128)",
  "hex": "#bc6a80"
}, {
  "value": "rgb(164.0,84.0,99.0)",
  "brand": "ARTDECO",
  "colour": "961",
  "r": 164,
  "g": 84,
  "b": 99,
  "rgb": "rgb(164, 84, 99)",
  "hex": "#a45463"
}, {
  "value": "rgb(189.0,61.0,62.0)",
  "brand": "ARTDECO",
  "colour": "Red Hibiscus",
  "r": 189,
  "g": 61,
  "b": 62,
  "rgb": "rgb(189, 61, 62)",
  "hex": "#bd3d3e"
}, {
  "value": "rgb(130.0,37.0,67.0)",
  "brand": "ARTDECO",
  "colour": "Wild Berry Sorbet",
  "r": 130,
  "g": 37,
  "b": 67,
  "rgb": "rgb(130, 37, 67)",
  "hex": "#822543"
}, {
  "value": "rgb(169.0,84.0,107.0)",
  "brand": "ARTDECO",
  "colour": "Mellow Mauve",
  "r": 169,
  "g": 84,
  "b": 107,
  "rgb": "rgb(169, 84, 107)",
  "hex": "#a9546b"
}, {
  "value": "rgb(185.0,101.0,101.0)",
  "brand": "ARTDECO",
  "colour": "Peach Blossom",
  "r": 185,
  "g": 101,
  "b": 101,
  "rgb": "rgb(185, 101, 101)",
  "hex": "#b96565"
}, {
  "value": "rgb(223.0,98.0,112.0)",
  "brand": "ARTDECO",
  "colour": "Shy Core",
  "r": 223,
  "g": 98,
  "b": 112,
  "rgb": "rgb(223, 98, 112)",
  "hex": "#df6270"
}, {
  "value": "rgb(162.0,76.0,128.0)",
  "brand": "ARTDECO",
  "colour": "Floral Balcony",
  "r": 162,
  "g": 76,
  "b": 128,
  "rgb": "rgb(162, 76, 128)",
  "hex": "#a24c80"
}, {
  "value": "rgb(153.0,6.0,22.0)",
  "brand": "ARTDECO",
  "colour": "116 Poppy Red",
  "r": 153,
  "g": 6,
  "b": 22,
  "rgb": "rgb(153, 6, 22)",
  "hex": "#990616"
}, {
  "value": "rgb(143.0,29.0,89.0)",
  "brand": "ARTDECO",
  "colour": "144 Pinky Mauve",
  "r": 143,
  "g": 29,
  "b": 89,
  "rgb": "rgb(143, 29, 89)",
  "hex": "#8f1d59"
}, {
  "value": "rgb(210.0,104.0,124.0)",
  "brand": "ARTDECO",
  "colour": "160 Rosy Cloud",
  "r": 210,
  "g": 104,
  "b": 124,
  "rgb": "rgb(210, 104, 124)",
  "hex": "#d2687c"
}, {
  "value": "rgb(197.0,74.0,94.0)",
  "brand": "ARTDECO",
  "colour": "179 Indian Rose",
  "r": 197,
  "g": 74,
  "b": 94,
  "rgb": "rgb(197, 74, 94)",
  "hex": "#c54a5e"
}, {
  "value": "rgb(159.0,73.0,84.0)",
  "brand": "ARTDECO",
  "colour": "188 Dark Rosewood",
  "r": 159,
  "g": 73,
  "b": 84,
  "rgb": "rgb(159, 73, 84)",
  "hex": "#9f4954"
}, {
  "value": "rgb(172.0,215.0,226.0)",
  "brand": "Anna Sui",
  "colour": "Pale Aqua Hydrangea",
  "r": 172,
  "g": 215,
  "b": 226,
  "rgb": "rgb(172, 215, 226)",
  "hex": "#acd7e2"
}, {
  "value": "rgb(178.0,67.0,74.0)",
  "brand": "Anna Sui",
  "colour": "Shiny Coral Cattleya",
  "r": 178,
  "g": 67,
  "b": 74,
  "rgb": "rgb(178, 67, 74)",
  "hex": "#b2434a"
}, {
  "value": "rgb(146.0,50.0,27.0)",
  "brand": "Anna Sui",
  "colour": "Orange Red Lilly",
  "r": 146,
  "g": 50,
  "b": 27,
  "rgb": "rgb(146, 50, 27)",
  "hex": "#92321b"
}, {
  "value": "rgb(29.0,11.0,11.0)",
  "brand": "Anna Sui",
  "colour": "Plum Red Dehlia",
  "r": 29,
  "g": 11,
  "b": 11,
  "rgb": "rgb(29, 11, 11)",
  "hex": "#1d0b0b"
}, {
  "value": "rgb(170.0,88.0,66.0)",
  "brand": "Anna Sui",
  "colour": "Apricot Iris",
  "r": 170,
  "g": 88,
  "b": 66,
  "rgb": "rgb(170, 88, 66)",
  "hex": "#aa5842"
}, {
  "value": "rgb(223.0,95.0,96.0)",
  "brand": "Anna Sui",
  "colour": "Pink Dianthus",
  "r": 223,
  "g": 95,
  "b": 96,
  "rgb": "rgb(223, 95, 96)",
  "hex": "#df5f60"
}, {
  "value": "rgb(199.0,41.0,64.0)",
  "brand": "Anna Sui",
  "colour": "Red Pink Camellia",
  "r": 199,
  "g": 41,
  "b": 64,
  "rgb": "rgb(199, 41, 64)",
  "hex": "#c72940"
}, {
  "value": "rgb(100.0,5.0,11.0)",
  "brand": "Anna Sui",
  "colour": "Rose Red",
  "r": 100,
  "g": 5,
  "b": 11,
  "rgb": "rgb(100, 5, 11)",
  "hex": "#64050b"
}, {
  "value": "rgb(202.0,53.0,47.0)",
  "brand": "Anna Sui",
  "colour": "Orange Tulip",
  "r": 202,
  "g": 53,
  "b": 47,
  "rgb": "rgb(202, 53, 47)",
  "hex": "#ca352f"
}, {
  "value": "rgb(204.0,106.0,92.0)",
  "brand": "Anna Sui",
  "colour": "Pale Pink Peony",
  "r": 204,
  "g": 106,
  "b": 92,
  "rgb": "rgb(204, 106, 92)",
  "hex": "#cc6a5c"
}, {
  "value": "rgb(182.0,84.0,81.0)",
  "brand": "Stila",
  "colour": "Bonbon",
  "r": 182,
  "g": 84,
  "b": 81,
  "rgb": "rgb(182, 84, 81)",
  "hex": "#b65451"
}, {
  "value": "rgb(120.0,44.0,60.0)",
  "brand": "Stila",
  "colour": "Bordeaux",
  "r": 120,
  "g": 44,
  "b": 60,
  "rgb": "rgb(120, 44, 60)",
  "hex": "#782c3c"
}, {
  "value": "rgb(191.0,128.0,113.0)",
  "brand": "Stila",
  "colour": "Coquille",
  "r": 191,
  "g": 128,
  "b": 113,
  "rgb": "rgb(191, 128, 113)",
  "hex": "#bf8071"
}, {
  "value": "rgb(237.0,178.0,173.0)",
  "brand": "Stila",
  "colour": "??toile",
  "r": 237,
  "g": 178,
  "b": 173,
  "rgb": "rgb(237, 178, 173)",
  "hex": "#edb2ad"
}, {
  "value": "rgb(177.0,90.0,85.0)",
  "brand": "Stila",
  "colour": "Mon Ami",
  "r": 177,
  "g": 90,
  "b": 85,
  "rgb": "rgb(177, 90, 85)",
  "hex": "#b15a55"
}, {
  "value": "rgb(63.0,5.0,4.0)",
  "brand": "Pretty Vulgar",
  "colour": "If Kisses Could Kill",
  "r": 63,
  "g": 5,
  "b": 4,
  "rgb": "rgb(63, 5, 4)",
  "hex": "#3f0504"
}, {
  "value": "rgb(181.0,118.0,135.0)",
  "brand": "Pretty Vulgar",
  "colour": "Prim and Proper",
  "r": 181,
  "g": 118,
  "b": 135,
  "rgb": "rgb(181, 118, 135)",
  "hex": "#b57687"
}, {
  "value": "rgb(126.0,0.0,81.0)",
  "brand": "Pretty Vulgar",
  "colour": "Darling be Daring",
  "r": 126,
  "g": 0,
  "b": 81,
  "rgb": "rgb(126, 0, 81)",
  "hex": "#7e0051"
}, {
  "value": "rgb(183.0,1.0,42.0)",
  "brand": "Pretty Vulgar",
  "colour": "Blood Flower",
  "r": 183,
  "g": 1,
  "b": 42,
  "rgb": "rgb(183, 1, 42)",
  "hex": "#b7012a"
}, {
  "value": "rgb(206.0,118.0,140.0)",
  "brand": "Pretty Vulgar",
  "colour": "Baby Doll Against BS",
  "r": 206,
  "g": 118,
  "b": 140,
  "rgb": "rgb(206, 118, 140)",
  "hex": "#ce768c"
}, {
  "value": "rgb(93.0,8.0,29.0)",
  "brand": "Pretty Vulgar",
  "colour": "Back Stabber",
  "r": 93,
  "g": 8,
  "b": 29,
  "rgb": "rgb(93, 8, 29)",
  "hex": "#5d081d"
}, {
  "value": "rgb(78.0,0.0,40.0)",
  "brand": "Pretty Vulgar",
  "colour": "Honest Truth",
  "r": 78,
  "g": 0,
  "b": 40,
  "rgb": "rgb(78, 0, 40)",
  "hex": "#4e0028"
}, {
  "value": "rgb(142.0,8.0,18.0)",
  "brand": "Paul & Joe",
  "colour": "202 Silk Stockings",
  "r": 142,
  "g": 8,
  "b": 18,
  "rgb": "rgb(142, 8, 18)",
  "hex": "#8e0812"
}, {
  "value": "rgb(174.0,82.0,72.0)",
  "brand": "Paul & Joe",
  "colour": "203 Petite Princess",
  "r": 174,
  "g": 82,
  "b": 72,
  "rgb": "rgb(174, 82, 72)",
  "hex": "#ae5248"
}, {
  "value": "rgb(176.0,103.0,99.0)",
  "brand": "Paul & Joe",
  "colour": "206 Muget Rose",
  "r": 176,
  "g": 103,
  "b": 99,
  "rgb": "rgb(176, 103, 99)",
  "hex": "#b06763"
}, {
  "value": "rgb(189.0,67.0,68.0)",
  "brand": "Paul & Joe",
  "colour": "207 Flower Vase",
  "r": 189,
  "g": 67,
  "b": 68,
  "rgb": "rgb(189, 67, 68)",
  "hex": "#bd4344"
}, {
  "value": "rgb(196.0,102.0,103.0)",
  "brand": "Paul & Joe",
  "colour": "209 Rose Sachet",
  "r": 196,
  "g": 102,
  "b": 103,
  "rgb": "rgb(196, 102, 103)",
  "hex": "#c46667"
}, {
  "value": "rgb(209.0,105.0,106.0)",
  "brand": "Paul & Joe",
  "colour": "210 Rode d'or",
  "r": 209,
  "g": 105,
  "b": 106,
  "rgb": "rgb(209, 105, 106)",
  "hex": "#d1696a"
}, {
  "value": "rgb(221.0,93.0,109.0)",
  "brand": "Paul & Joe",
  "colour": "211 Flamant Rose",
  "r": 221,
  "g": 93,
  "b": 109,
  "rgb": "rgb(221, 93, 109)",
  "hex": "#dd5d6d"
}, {
  "value": "rgb(97.0,33.0,43.0)",
  "brand": "Paul & Joe",
  "colour": "213 Fruit Rouge",
  "r": 97,
  "g": 33,
  "b": 43,
  "rgb": "rgb(97, 33, 43)",
  "hex": "#61212b"
}, {
  "value": "rgb(185.0,118.0,109.0)",
  "brand": "Paul & Joe",
  "colour": "214 Paris Metro",
  "r": 185,
  "g": 118,
  "b": 109,
  "rgb": "rgb(185, 118, 109)",
  "hex": "#b9766d"
}, {
  "value": "rgb(120.0,21.0,27.0)",
  "brand": "Paul & Joe",
  "colour": "301 Poisson Rouge",
  "r": 120,
  "g": 21,
  "b": 27,
  "rgb": "rgb(120, 21, 27)",
  "hex": "#78151b"
}, {
  "value": "rgb(98.0,48.0,40.0)",
  "brand": "Paul & Joe",
  "colour": "306 Cerise Noir",
  "r": 98,
  "g": 48,
  "b": 40,
  "rgb": "rgb(98, 48, 40)",
  "hex": "#623028"
}, {
  "value": "rgb(137.0,62.0,76.0)",
  "brand": "Paul & Joe",
  "colour": "307 Le Marais",
  "r": 137,
  "g": 62,
  "b": 76,
  "rgb": "rgb(137, 62, 76)",
  "hex": "#893e4c"
}, {
  "value": "rgb(99.0,33.0,45.0)",
  "brand": "Linda Hallberg",
  "colour": "Garnet",
  "r": 99,
  "g": 33,
  "b": 45,
  "rgb": "rgb(99, 33, 45)",
  "hex": "#63212d"
}, {
  "value": "rgb(212.0,45.0,26.0)",
  "brand": "Linda Hallberg",
  "colour": "Bullseye",
  "r": 212,
  "g": 45,
  "b": 26,
  "rgb": "rgb(212, 45, 26)",
  "hex": "#d42d1a"
}, {
  "value": "rgb(178.0,136.0,150.0)",
  "brand": "Linda Hallberg",
  "colour": "Ametrine",
  "r": 178,
  "g": 136,
  "b": 150,
  "rgb": "rgb(178, 136, 150)",
  "hex": "#b28896"
}, {
  "value": "rgb(228.0,162.0,167.0)",
  "brand": "Linda Hallberg",
  "colour": "Goldstone",
  "r": 228,
  "g": 162,
  "b": 167,
  "rgb": "rgb(228, 162, 167)",
  "hex": "#e4a2a7"
}, {
  "value": "rgb(210.0,159.0,156.0)",
  "brand": "Linda Hallberg",
  "colour": "Pink Opal",
  "r": 210,
  "g": 159,
  "b": 156,
  "rgb": "rgb(210, 159, 156)",
  "hex": "#d29f9c"
}, {
  "value": "rgb(162.0,38.0,66.0)",
  "brand": "NABLA",
  "colour": "Party in Paris",
  "r": 162,
  "g": 38,
  "b": 66,
  "rgb": "rgb(162, 38, 66)",
  "hex": "#a22642"
}, {
  "value": "rgb(128.0,48.0,51.0)",
  "brand": "NABLA",
  "colour": "Allusive",
  "r": 128,
  "g": 48,
  "b": 51,
  "rgb": "rgb(128, 48, 51)",
  "hex": "#803033"
}, {
  "value": "rgb(154.0,83.0,79.0)",
  "brand": "NABLA",
  "colour": "Backbeat",
  "r": 154,
  "g": 83,
  "b": 79,
  "rgb": "rgb(154, 83, 79)",
  "hex": "#9a534f"
}, {
  "value": "rgb(116.0,32.0,30.0)",
  "brand": "NABLA",
  "colour": "Masterpiece",
  "r": 116,
  "g": 32,
  "b": 30,
  "rgb": "rgb(116, 32, 30)",
  "hex": "#74201e"
}, {
  "value": "rgb(178.0,91.0,81.0)",
  "brand": "NABLA",
  "colour": "Chloe",
  "r": 178,
  "g": 91,
  "b": 81,
  "rgb": "rgb(178, 91, 81)",
  "hex": "#b25b51"
}, {
  "value": "rgb(119.0,58.0,63.0)",
  "brand": "NABLA",
  "colour": "Time Flies",
  "r": 119,
  "g": 58,
  "b": 63,
  "rgb": "rgb(119, 58, 63)",
  "hex": "#773a3f"
}, {
  "value": "rgb(142.0,68.0,57.0)",
  "brand": "NABLA",
  "colour": "Lust",
  "r": 142,
  "g": 68,
  "b": 57,
  "rgb": "rgb(142, 68, 57)",
  "hex": "#8e4439"
}, {
  "value": "rgb(89.0,36.0,62.0)",
  "brand": "NABLA",
  "colour": "Foxy Lady",
  "r": 89,
  "g": 36,
  "b": 62,
  "rgb": "rgb(89, 36, 62)",
  "hex": "#59243e"
}, {
  "value": "rgb(180.0,1.0,40.0)",
  "brand": "NABLA",
  "colour": "Fool me",
  "r": 180,
  "g": 1,
  "b": 40,
  "rgb": "rgb(180, 1, 40)",
  "hex": "#b40128"
}, {
  "value": "rgb(106.0,56.0,57.0)",
  "brand": "NABLA",
  "colour": "Indie Lips",
  "r": 106,
  "g": 56,
  "b": 57,
  "rgb": "rgb(106, 56, 57)",
  "hex": "#6a3839"
}, {
  "value": "rgb(98.0,27.0,31.0)",
  "brand": "NABLA",
  "colour": "Nolita",
  "r": 98,
  "g": 27,
  "b": 31,
  "rgb": "rgb(98, 27, 31)",
  "hex": "#621b1f"
}, {
  "value": "rgb(68.0,22.0,25.0)",
  "brand": "NABLA",
  "colour": "Criminal Babe",
  "r": 68,
  "g": 22,
  "b": 25,
  "rgb": "rgb(68, 22, 25)",
  "hex": "#441619"
}, {
  "value": "rgb(199.0,111.0,97.0)",
  "brand": "NABLA",
  "colour": "Touch Me",
  "r": 199,
  "g": 111,
  "b": 97,
  "rgb": "rgb(199, 111, 97)",
  "hex": "#c76f61"
}, {
  "value": "rgb(236.0,7.0,27.0)",
  "brand": "NABLA",
  "colour": "Red Lantern",
  "r": 236,
  "g": 7,
  "b": 27,
  "rgb": "rgb(236, 7, 27)",
  "hex": "#ec071b"
}, {
  "value": "rgb(236.0,126.0,139.0)",
  "brand": "NABLA",
  "colour": "Jolie",
  "r": 236,
  "g": 126,
  "b": 139,
  "rgb": "rgb(236, 126, 139)",
  "hex": "#ec7e8b"
}, {
  "value": "rgb(237.0,135.0,123.0)",
  "brand": "NABLA",
  "colour": "Magnolia",
  "r": 237,
  "g": 135,
  "b": 123,
  "rgb": "rgb(237, 135, 123)",
  "hex": "#ed877b"
}, {
  "value": "rgb(174.0,78.0,64.0)",
  "brand": "NABLA",
  "colour": "Body Language",
  "r": 174,
  "g": 78,
  "b": 64,
  "rgb": "rgb(174, 78, 64)",
  "hex": "#ae4e40"
}, {
  "value": "rgb(212.64317180616737,131.9603524229073,109.71428571428592)",
  "brand": "Kylie Cosmetics",
  "colour": "Butterscotch",
  "r": 212,
  "g": 131,
  "b": 109,
  "rgb": "rgb(212, 131, 109)",
  "hex": "#d4836d"
}, {
  "value": "rgb(110.94491766042029,44.32254400908591,37.23793299261773)",
  "brand": "Kylie Cosmetics",
  "colour": "Chocolate Souffle",
  "r": 110,
  "g": 44,
  "b": 37,
  "rgb": "rgb(110, 44, 37)",
  "hex": "#6e2c25"
}, {
  "value": "rgb(201.52777777777774,128.34580498866197,114.9937641723355)",
  "brand": "Kylie Cosmetics",
  "colour": "Cr??me Brulee",
  "r": 201,
  "g": 128,
  "b": 114,
  "rgb": "rgb(201, 128, 114)",
  "hex": "#c98072"
}, {
  "value": "rgb(196.9926387315969,71.98187995469961,74.67044167610399)",
  "brand": "Kylie Cosmetics",
  "colour": "Crush",
  "r": 196,
  "g": 71,
  "b": 74,
  "rgb": "rgb(196, 71, 74)",
  "hex": "#c4474a"
}, {
  "value": "rgb(198.65647990945112,109.51726089417087,87.48443689869794)",
  "brand": "Kylie Cosmetics",
  "colour": "Dulce de Leche",
  "r": 198,
  "g": 109,
  "b": 87,
  "rgb": "rgb(198, 109, 87)",
  "hex": "#c66d57"
}, {
  "value": "rgb(184.6291759465477,65.80512249443227,67.75890868596892)",
  "brand": "Kylie Cosmetics",
  "colour": "Madeleine",
  "r": 184,
  "g": 65,
  "b": 67,
  "rgb": "rgb(184, 65, 67)",
  "hex": "#b84143"
}, {
  "value": "rgb(200.45490417136406,96.08455467869204,112.71645997745195)",
  "brand": "Kylie Cosmetics",
  "colour": "Passion",
  "r": 200,
  "g": 96,
  "b": 112,
  "rgb": "rgb(200, 96, 112)",
  "hex": "#c86070"
}, {
  "value": "rgb(210.10661345496004,143.00456100342058,135.14025085518813)",
  "brand": "Kylie Cosmetics",
  "colour": "August",
  "r": 210,
  "g": 143,
  "b": 135,
  "rgb": "rgb(210, 143, 135)",
  "hex": "#d28f87"
}, {
  "value": "rgb(201.65382467895023,62.52205471803477,54.426577331100084)",
  "brand": "Kylie Cosmetics",
  "colour": "Boss",
  "r": 201,
  "g": 62,
  "b": 54,
  "rgb": "rgb(201, 62, 54)",
  "hex": "#c93e36"
}, {
  "value": "rgb(234.61358447488584,121.94406392694039,128.44349315068462)",
  "brand": "Kylie Cosmetics",
  "colour": "Flirtini",
  "r": 234,
  "g": 121,
  "b": 128,
  "rgb": "rgb(234, 121, 128)",
  "hex": "#ea7980"
}, {
  "value": "rgb(216.46149490373728,104.98810872027191,88.30804077010163)",
  "brand": "Kylie Cosmetics",
  "colour": "Miami",
  "r": 216,
  "g": 104,
  "b": 88,
  "rgb": "rgb(216, 104, 88)",
  "hex": "#d86858"
}, {
  "value": "rgb(221.0088915234144,131.8417308832247,112.77119146413781)",
  "brand": "Kylie Cosmetics",
  "colour": "Nova",
  "r": 221,
  "g": 131,
  "b": 112,
  "rgb": "rgb(221, 131, 112)",
  "hex": "#dd8370"
}, {
  "value": "rgb(247.2126339537507,97.06429780033832,59.92780597856671)",
  "brand": "Kylie Cosmetics",
  "colour": "Tangerine",
  "r": 247,
  "g": 97,
  "b": 59,
  "rgb": "rgb(247, 97, 59)",
  "hex": "#f7613b"
}, {
  "value": "rgb(205.98448275862071,53.707471264367335,120.72298850574725)",
  "brand": "Kylie Cosmetics",
  "colour": "Vacay",
  "r": 205,
  "g": 53,
  "b": 120,
  "rgb": "rgb(205, 53, 120)",
  "hex": "#cd3578"
}, {
  "value": "rgb(201.0,142.0,136.0)",
  "brand": "Bobbi Brown",
  "colour": "Sazan Nude",
  "r": 201,
  "g": 142,
  "b": 136,
  "rgb": "rgb(201, 142, 136)",
  "hex": "#c98e88"
}, {
  "value": "rgb(208.0,119.0,117.0)",
  "brand": "Bobbi Brown",
  "colour": "Bare",
  "r": 208,
  "g": 119,
  "b": 117,
  "rgb": "rgb(208, 119, 117)",
  "hex": "#d07775"
}, {
  "value": "rgb(223.0,116.0,123.0)",
  "brand": "Bobbi Brown",
  "colour": "Angel",
  "r": 223,
  "g": 116,
  "b": 123,
  "rgb": "rgb(223, 116, 123)",
  "hex": "#df747b"
}, {
  "value": "rgb(185.0,91.0,114.0)",
  "brand": "Bobbi Brown",
  "colour": "Lilac",
  "r": 185,
  "g": 91,
  "b": 114,
  "rgb": "rgb(185, 91, 114)",
  "hex": "#b95b72"
}, {
  "value": "rgb(198.0,96.0,103.0)",
  "brand": "Bobbi Brown",
  "colour": "Baby",
  "r": 198,
  "g": 96,
  "b": 103,
  "rgb": "rgb(198, 96, 103)",
  "hex": "#c66067"
}, {
  "value": "rgb(186.0,75.0,88.0)",
  "brand": "Bobbi Brown",
  "colour": "Babe",
  "r": 186,
  "g": 75,
  "b": 88,
  "rgb": "rgb(186, 75, 88)",
  "hex": "#ba4b58"
}, {
  "value": "rgb(197.0,91.0,83.0)",
  "brand": "Bobbi Brown",
  "colour": "Cabana",
  "r": 197,
  "g": 91,
  "b": 83,
  "rgb": "rgb(197, 91, 83)",
  "hex": "#c55b53"
}, {
  "value": "rgb(177.0,64.0,91.0)",
  "brand": "Bobbi Brown",
  "colour": "Cali Rose",
  "r": 177,
  "g": 64,
  "b": 91,
  "rgb": "rgb(177, 64, 91)",
  "hex": "#b1405b"
}, {
  "value": "rgb(208.0,72.0,91.0)",
  "brand": "Bobbi Brown",
  "colour": "Bitten",
  "r": 208,
  "g": 72,
  "b": 91,
  "rgb": "rgb(208, 72, 91)",
  "hex": "#d0485b"
}, {
  "value": "rgb(212.0,53.0,86.0)",
  "brand": "Bobbi Brown",
  "colour": "Crush",
  "r": 212,
  "g": 53,
  "b": 86,
  "rgb": "rgb(212, 53, 86)",
  "hex": "#d43556"
}, {
  "value": "rgb(228.0,42.0,97.0)",
  "brand": "Bobbi Brown",
  "colour": "Punch",
  "r": 228,
  "g": 42,
  "b": 97,
  "rgb": "rgb(228, 42, 97)",
  "hex": "#e42a61"
}, {
  "value": "rgb(215.0,24.0,84.0)",
  "brand": "Bobbi Brown",
  "colour": "Watermelon",
  "r": 215,
  "g": 24,
  "b": 84,
  "rgb": "rgb(215, 24, 84)",
  "hex": "#d71854"
}, {
  "value": "rgb(236.0,65.0,56.0)",
  "brand": "Bobbi Brown",
  "colour": "Sunset",
  "r": 236,
  "g": 65,
  "b": 56,
  "rgb": "rgb(236, 65, 56)",
  "hex": "#ec4138"
}, {
  "value": "rgb(160.0,58.0,67.0)",
  "brand": "Bobbi Brown",
  "colour": "Grenadine",
  "r": 160,
  "g": 58,
  "b": 67,
  "rgb": "rgb(160, 58, 67)",
  "hex": "#a03a43"
}, {
  "value": "rgb(179.0,39.0,54.0)",
  "brand": "Bobbi Brown",
  "colour": "Regal",
  "r": 179,
  "g": 39,
  "b": 54,
  "rgb": "rgb(179, 39, 54)",
  "hex": "#b32736"
}, {
  "value": "rgb(202.0,35.0,28.0)",
  "brand": "Bobbi Brown",
  "colour": "The LouLou",
  "r": 202,
  "g": 35,
  "b": 28,
  "rgb": "rgb(202, 35, 28)",
  "hex": "#ca231c"
}, {
  "value": "rgb(154.0,52.0,58.0)",
  "brand": "Bobbi Brown",
  "colour": "Cranberry",
  "r": 154,
  "g": 52,
  "b": 58,
  "rgb": "rgb(154, 52, 58)",
  "hex": "#9a343a"
}, {
  "value": "rgb(127.0,36.0,55.0)",
  "brand": "Bobbi Brown",
  "colour": "Plum",
  "r": 127,
  "g": 36,
  "b": 55,
  "rgb": "rgb(127, 36, 55)",
  "hex": "#7f2437"
}, {
  "value": "rgb(141.0,42.0,45.0)",
  "brand": "Bobbi Brown",
  "colour": "Ruby",
  "r": 141,
  "g": 42,
  "b": 45,
  "rgb": "rgb(141, 42, 45)",
  "hex": "#8d2a2d"
}, {
  "value": "rgb(140.0,69.0,63.0)",
  "brand": "Bobbi Brown",
  "colour": "Telluride",
  "r": 140,
  "g": 69,
  "b": 63,
  "rgb": "rgb(140, 69, 63)",
  "hex": "#8c453f"
}, {
  "value": "rgb(118.0,31.0,42.0)",
  "brand": "Bobbi Brown",
  "colour": "Cherry",
  "r": 118,
  "g": 31,
  "b": 42,
  "rgb": "rgb(118, 31, 42)",
  "hex": "#761f2a"
}, {
  "value": "rgb(92.0,48.0,63.0)",
  "brand": "Bobbi Brown",
  "colour": "Daring Dalalid",
  "r": 92,
  "g": 48,
  "b": 63,
  "rgb": "rgb(92, 48, 63)",
  "hex": "#5c303f"
}, {
  "value": "rgb(79.0,30.0,34.0)",
  "brand": "Bobbi Brown",
  "colour": "Blackberry",
  "r": 79,
  "g": 30,
  "b": 34,
  "rgb": "rgb(79, 30, 34)",
  "hex": "#4f1e22"
}, {
  "value": "rgb(189.0,118.0,103.0)",
  "brand": "Bobbi Brown",
  "colour": "Almost Bare",
  "r": 189,
  "g": 118,
  "b": 103,
  "rgb": "rgb(189, 118, 103)",
  "hex": "#bd7667"
}, {
  "value": "rgb(213.0,139.0,124.0)",
  "brand": "Bobbi Brown",
  "colour": "Bare Pink",
  "r": 213,
  "g": 139,
  "b": 124,
  "rgb": "rgb(213, 139, 124)",
  "hex": "#d58b7c"
}, {
  "value": "rgb(209.0,123.0,118.0)",
  "brand": "Bobbi Brown",
  "colour": "Pale Mauve",
  "r": 209,
  "g": 123,
  "b": 118,
  "rgb": "rgb(209, 123, 118)",
  "hex": "#d17b76"
}, {
  "value": "rgb(218.0,131.0,124.0)",
  "brand": "Bobbi Brown",
  "colour": "Pink Nude",
  "r": 218,
  "g": 131,
  "b": 124,
  "rgb": "rgb(218, 131, 124)",
  "hex": "#da837c"
}, {
  "value": "rgb(240.0,132.0,138.0)",
  "brand": "Bobbi Brown",
  "colour": "Pink Cloud",
  "r": 240,
  "g": 132,
  "b": 138,
  "rgb": "rgb(240, 132, 138)",
  "hex": "#f0848a"
}, {
  "value": "rgb(255.0,112.0,104.0)",
  "brand": "Bobbi Brown",
  "colour": "Retro Coral",
  "r": 255,
  "g": 112,
  "b": 104,
  "rgb": "rgb(255, 112, 104)",
  "hex": "#ff7068"
}, {
  "value": "rgb(182.0,104.0,111.0)",
  "brand": "Bobbi Brown",
  "colour": "Neutral Rose",
  "r": 182,
  "g": 104,
  "b": 111,
  "rgb": "rgb(182, 104, 111)",
  "hex": "#b6686f"
}, {
  "value": "rgb(168.0,104.0,108.0)",
  "brand": "Bobbi Brown",
  "colour": "Bahama Brown",
  "r": 168,
  "g": 104,
  "b": 108,
  "rgb": "rgb(168, 104, 108)",
  "hex": "#a8686c"
}, {
  "value": "rgb(174.0,96.0,92.0)",
  "brand": "Bobbi Brown",
  "colour": "Pink Buff",
  "r": 174,
  "g": 96,
  "b": 92,
  "rgb": "rgb(174, 96, 92)",
  "hex": "#ae605c"
}, {
  "value": "rgb(177.0,109.0,94.0)",
  "brand": "Bobbi Brown",
  "colour": "Uber Beige",
  "r": 177,
  "g": 109,
  "b": 94,
  "rgb": "rgb(177, 109, 94)",
  "hex": "#b16d5e"
}, {
  "value": "rgb(233.0,85.0,96.0)",
  "brand": "Bobbi Brown",
  "colour": "Spring Pink",
  "r": 233,
  "g": 85,
  "b": 96,
  "rgb": "rgb(233, 85, 96)",
  "hex": "#e95560"
}, {
  "value": "rgb(181.0,89.0,99.0)",
  "brand": "Bobbi Brown",
  "colour": "Soft Berry",
  "r": 181,
  "g": 89,
  "b": 99,
  "rgb": "rgb(181, 89, 99)",
  "hex": "#b55963"
}, {
  "value": "rgb(173.0,95.0,97.0)",
  "brand": "Bobbi Brown",
  "colour": "Downtown Plum",
  "r": 173,
  "g": 95,
  "b": 97,
  "rgb": "rgb(173, 95, 97)",
  "hex": "#ad5f61"
}, {
  "value": "rgb(190.0,93.0,93.0)",
  "brand": "Bobbi Brown",
  "colour": "Uber Pink",
  "r": 190,
  "g": 93,
  "b": 93,
  "rgb": "rgb(190, 93, 93)",
  "hex": "#be5d5d"
}, {
  "value": "rgb(174.0,88.0,91.0)",
  "brand": "Bobbi Brown",
  "colour": "Desert Rose",
  "r": 174,
  "g": 88,
  "b": 91,
  "rgb": "rgb(174, 88, 91)",
  "hex": "#ae585b"
}, {
  "value": "rgb(233.0,99.0,81.0)",
  "brand": "Bobbi Brown",
  "colour": "Soft Coral",
  "r": 233,
  "g": 99,
  "b": 81,
  "rgb": "rgb(233, 99, 81)",
  "hex": "#e96351"
}, {
  "value": "rgb(255.0,80.0,97.0)",
  "brand": "Bobbi Brown",
  "colour": "Pink Guava",
  "r": 255,
  "g": 80,
  "b": 97,
  "rgb": "rgb(255, 80, 97)",
  "hex": "#ff5061"
}, {
  "value": "rgb(241.0,66.0,92.0)",
  "brand": "Bobbi Brown",
  "colour": "Bright Peony",
  "r": 241,
  "g": 66,
  "b": 92,
  "rgb": "rgb(241, 66, 92)",
  "hex": "#f1425c"
}, {
  "value": "rgb(232.0,52.0,99.0)",
  "brand": "Bobbi Brown",
  "colour": "Raspberry Pink",
  "r": 232,
  "g": 52,
  "b": 99,
  "rgb": "rgb(232, 52, 99)",
  "hex": "#e83463"
}, {
  "value": "rgb(254.0,64.0,44.0)",
  "brand": "Bobbi Brown",
  "colour": "Atomic Orange",
  "r": 254,
  "g": 64,
  "b": 44,
  "rgb": "rgb(254, 64, 44)",
  "hex": "#fe402c"
}, {
  "value": "rgb(238.0,52.0,98.0)",
  "brand": "Bobbi Brown",
  "colour": "Tahiti Pink",
  "r": 238,
  "g": 52,
  "b": 98,
  "rgb": "rgb(238, 52, 98)",
  "hex": "#ee3462"
}, {
  "value": "rgb(236.0,56.0,56.0)",
  "brand": "Bobbi Brown",
  "colour": "Flame",
  "r": 236,
  "g": 56,
  "b": 56,
  "rgb": "rgb(236, 56, 56)",
  "hex": "#ec3838"
}, {
  "value": "rgb(238.0,84.0,88.0)",
  "brand": "Bobbi Brown",
  "colour": "Guava",
  "r": 238,
  "g": 84,
  "b": 88,
  "rgb": "rgb(238, 84, 88)",
  "hex": "#ee5458"
}, {
  "value": "rgb(230.0,49.0,38.0)",
  "brand": "Bobbi Brown",
  "colour": "Sunset Orange ",
  "r": 230,
  "g": 49,
  "b": 38,
  "rgb": "rgb(230, 49, 38)",
  "hex": "#e63126"
}, {
  "value": "rgb(164.0,60.0,82.0)",
  "brand": "Bobbi Brown",
  "colour": "Plum Rose",
  "r": 164,
  "g": 60,
  "b": 82,
  "rgb": "rgb(164, 60, 82)",
  "hex": "#a43c52"
}, {
  "value": "rgb(153.0,54.0,60.0)",
  "brand": "Bobbi Brown",
  "colour": "Red Berry ",
  "r": 153,
  "g": 54,
  "b": 60,
  "rgb": "rgb(153, 54, 60)",
  "hex": "#99363c"
}, {
  "value": "rgb(147.0,66.0,82.0)",
  "brand": "Bobbi Brown",
  "colour": "Hibiscus",
  "r": 147,
  "g": 66,
  "b": 82,
  "rgb": "rgb(147, 66, 82)",
  "hex": "#934252"
}, {
  "value": "rgb(249.0,147.0,124.0)",
  "brand": "Chanel",
  "colour": "Daylight",
  "r": 249,
  "g": 147,
  "b": 124,
  "rgb": "rgb(249, 147, 124)",
  "hex": "#f9937c"
}, {
  "value": "rgb(203.0,98.0,76.0)",
  "brand": "Chanel",
  "colour": "Adrienne",
  "r": 203,
  "g": 98,
  "b": 76,
  "rgb": "rgb(203, 98, 76)",
  "hex": "#cb624c"
}, {
  "value": "rgb(253.0,107.0,82.0)",
  "brand": "Chanel",
  "colour": "Sari dor????",
  "r": 253,
  "g": 107,
  "b": 82,
  "rgb": "rgb(253, 107, 82)",
  "hex": "#fd6b52"
}, {
  "value": "rgb(251.0,92.0,86.0)",
  "brand": "Chanel",
  "colour": "T????h????ran",
  "r": 251,
  "g": 92,
  "b": 86,
  "rgb": "rgb(251, 92, 86)",
  "hex": "#fb5c56"
}, {
  "value": "rgb(255.0,92.0,109.0)",
  "brand": "Chanel",
  "colour": "Corail vibrant",
  "r": 255,
  "g": 92,
  "b": 109,
  "rgb": "rgb(255, 92, 109)",
  "hex": "#ff5c6d"
}, {
  "value": "rgb(234.0,31.0,50.0)",
  "brand": "Chanel",
  "colour": "Exp????rimental",
  "r": 234,
  "g": 31,
  "b": 50,
  "rgb": "rgb(234, 31, 50)",
  "hex": "#ea1f32"
}, {
  "value": "rgb(243.0,42.0,24.0)",
  "brand": "Chanel",
  "colour": "Coco",
  "r": 243,
  "g": 42,
  "b": 24,
  "rgb": "rgb(243, 42, 24)",
  "hex": "#f32a18"
}, {
  "value": "rgb(233.0,32.0,24.0)",
  "brand": "Chanel",
  "colour": "Arthur",
  "r": 233,
  "g": 32,
  "b": 24,
  "rgb": "rgb(233, 32, 24)",
  "hex": "#e92018"
}, {
  "value": "rgb(190.0,6.0,34.0)",
  "brand": "Chanel",
  "colour": "Dimitri",
  "r": 190,
  "g": 6,
  "b": 34,
  "rgb": "rgb(190, 6, 34)",
  "hex": "#be0622"
}, {
  "value": "rgb(196.0,11.0,25.0)",
  "brand": "Chanel",
  "colour": "Gabrielle",
  "r": 196,
  "g": 11,
  "b": 25,
  "rgb": "rgb(196, 11, 25)",
  "hex": "#c40b19"
}, {
  "value": "rgb(191.0,6.0,22.0)",
  "brand": "Chanel",
  "colour": "Carmen",
  "r": 191,
  "g": 6,
  "b": 22,
  "rgb": "rgb(191, 6, 22)",
  "hex": "#bf0616"
}, {
  "value": "rgb(180.0,22.0,47.0)",
  "brand": "Chanel",
  "colour": "Rouge intimiste",
  "r": 180,
  "g": 22,
  "b": 47,
  "rgb": "rgb(180, 22, 47)",
  "hex": "#b4162f"
}, {
  "value": "rgb(113.0,0.0,7.0)",
  "brand": "Chanel",
  "colour": "Marthe",
  "r": 113,
  "g": 0,
  "b": 7,
  "rgb": "rgb(113, 0, 7)",
  "hex": "#710007"
}, {
  "value": "rgb(224.0,77.0,96.0)",
  "brand": "Chanel",
  "colour": "Edith",
  "r": 224,
  "g": 77,
  "b": 96,
  "rgb": "rgb(224, 77, 96)",
  "hex": "#e04d60"
}, {
  "value": "rgb(250.0,70.0,107.0)",
  "brand": "Chanel",
  "colour": "Roussy",
  "r": 250,
  "g": 70,
  "b": 107,
  "rgb": "rgb(250, 70, 107)",
  "hex": "#fa466b"
}, {
  "value": "rgb(241.0,15.0,113.0)",
  "brand": "Chanel",
  "colour": "Ina",
  "r": 241,
  "g": 15,
  "b": 113,
  "rgb": "rgb(241, 15, 113)",
  "hex": "#f10f71"
}, {
  "value": "rgb(235.0,43.0,80.0)",
  "brand": "Chanel",
  "colour": "Rose malicieux",
  "r": 235,
  "g": 43,
  "b": 80,
  "rgb": "rgb(235, 43, 80)",
  "hex": "#eb2b50"
}, {
  "value": "rgb(171.0,23.0,85.0)",
  "brand": "Chanel",
  "colour": "Jean",
  "r": 171,
  "g": 23,
  "b": 85,
  "rgb": "rgb(171, 23, 85)",
  "hex": "#ab1755"
}, {
  "value": "rgb(171.0,28.0,74.0)",
  "brand": "Chanel",
  "colour": "Emilienne",
  "r": 171,
  "g": 28,
  "b": 74,
  "rgb": "rgb(171, 28, 74)",
  "hex": "#ab1c4a"
}, {
  "value": "rgb(200.0,99.0,105.0)",
  "brand": "Chanel",
  "colour": "C????cile",
  "r": 200,
  "g": 99,
  "b": 105,
  "rgb": "rgb(200, 99, 105)",
  "hex": "#c86369"
}, {
  "value": "rgb(220.0,97.0,89.0)",
  "brand": "Chanel",
  "colour": "Mich????le",
  "r": 220,
  "g": 97,
  "b": 89,
  "rgb": "rgb(220, 97, 89)",
  "hex": "#dc6159"
}, {
  "value": "rgb(196.0,94.0,89.0)",
  "brand": "Chanel",
  "colour": "Mademoiselle",
  "r": 196,
  "g": 94,
  "b": 89,
  "rgb": "rgb(196, 94, 89)",
  "hex": "#c45e59"
}, {
  "value": "rgb(198.0,72.0,76.0)",
  "brand": "Chanel",
  "colour": "Marie",
  "r": 198,
  "g": 72,
  "b": 76,
  "rgb": "rgb(198, 72, 76)",
  "hex": "#c6484c"
}, {
  "value": "rgb(218.0,81.0,99.0)",
  "brand": "Chanel",
  "colour": "L????gende",
  "r": 218,
  "g": 81,
  "b": 99,
  "rgb": "rgb(218, 81, 99)",
  "hex": "#da5163"
}, {
  "value": "rgb(142.0,56.0,57.0)",
  "brand": "Chanel",
  "colour": "Suzanne",
  "r": 142,
  "g": 56,
  "b": 57,
  "rgb": "rgb(142, 56, 57)",
  "hex": "#8e3839"
}, {
  "value": "rgb(100.0,0.0,13.0)",
  "brand": "Chanel",
  "colour": "Etienne",
  "r": 100,
  "g": 0,
  "b": 13,
  "rgb": "rgb(100, 0, 13)",
  "hex": "#64000d"
}, {
  "value": "rgb(255.0,101.0,115.0)",
  "brand": "Chanel",
  "colour": "Ami",
  "r": 255,
  "g": 101,
  "b": 115,
  "rgb": "rgb(255, 101, 115)",
  "hex": "#ff6573"
}, {
  "value": "rgb(148.0,3.0,36.0)",
  "brand": "Chanel",
  "colour": "Lover",
  "r": 148,
  "g": 3,
  "b": 36,
  "rgb": "rgb(148, 3, 36)",
  "hex": "#940324"
}, {
  "value": "rgb(247.0,24.0,19.0)",
  "brand": "Chanel",
  "colour": "Fiction",
  "r": 247,
  "g": 24,
  "b": 19,
  "rgb": "rgb(247, 24, 19)",
  "hex": "#f71813"
}, {
  "value": "rgb(191.0,13.0,63.0)",
  "brand": "Chanel",
  "colour": "Framboise sensuelle",
  "r": 191,
  "g": 13,
  "b": 63,
  "rgb": "rgb(191, 13, 63)",
  "hex": "#bf0d3f"
}, {
  "value": "rgb(255.0,115.0,132.0)",
  "brand": "Chanel",
  "colour": "Rose ????clatant",
  "r": 255,
  "g": 115,
  "b": 132,
  "rgb": "rgb(255, 115, 132)",
  "hex": "#ff7384"
}, {
  "value": "rgb(255.0,71.0,109.0)",
  "brand": "Chanel",
  "colour": "Rose mutin",
  "r": 255,
  "g": 71,
  "b": 109,
  "rgb": "rgb(255, 71, 109)",
  "hex": "#ff476d"
}, {
  "value": "rgb(230.0,142.0,132.0)",
  "brand": "Chanel",
  "colour": "Stilness",
  "r": 230,
  "g": 142,
  "b": 132,
  "rgb": "rgb(230, 142, 132)",
  "hex": "#e68e84"
}, {
  "value": "rgb(222.0,137.0,134.0)",
  "brand": "Chanel",
  "colour": "Sensible",
  "r": 222,
  "g": 137,
  "b": 134,
  "rgb": "rgb(222, 137, 134)",
  "hex": "#de8986"
}, {
  "value": "rgb(135.0,45.0,45.0)",
  "brand": "Chanel",
  "colour": "Secret",
  "r": 135,
  "g": 45,
  "b": 45,
  "rgb": "rgb(135, 45, 45)",
  "hex": "#872d2d"
}, {
  "value": "rgb(100.0,46.0,46.0)",
  "brand": "Chanel",
  "colour": "Incognito",
  "r": 100,
  "g": 46,
  "b": 46,
  "rgb": "rgb(100, 46, 46)",
  "hex": "#642e2e"
}, {
  "value": "rgb(195.0,93.0,79.0)",
  "brand": "Chanel",
  "colour": "Rouge ang????lique",
  "r": 195,
  "g": 93,
  "b": 79,
  "rgb": "rgb(195, 93, 79)",
  "hex": "#c35d4f"
}, {
  "value": "rgb(254.0,67.0,48.0)",
  "brand": "Chanel",
  "colour": "Excentrique",
  "r": 254,
  "g": 67,
  "b": 48,
  "rgb": "rgb(254, 67, 48)",
  "hex": "#fe4330"
}, {
  "value": "rgb(255.0,75.0,52.0)",
  "brand": "Chanel",
  "colour": "Vibrante",
  "r": 255,
  "g": 75,
  "b": 52,
  "rgb": "rgb(255, 75, 52)",
  "hex": "#ff4b34"
}, {
  "value": "rgb(242.0,23.0,45.0)",
  "brand": "Chanel",
  "colour": "Ardente",
  "r": 242,
  "g": 23,
  "b": 45,
  "rgb": "rgb(242, 23, 45)",
  "hex": "#f2172d"
}, {
  "value": "rgb(255.0,61.0,72.0)",
  "brand": "Chanel",
  "colour": "Insaisissable",
  "r": 255,
  "g": 61,
  "b": 72,
  "rgb": "rgb(255, 61, 72)",
  "hex": "#ff3d48"
}, {
  "value": "rgb(252.0,33.0,63.0)",
  "brand": "Chanel",
  "colour": "Rouge rebelle",
  "r": 252,
  "g": 33,
  "b": 63,
  "rgb": "rgb(252, 33, 63)",
  "hex": "#fc213f"
}, {
  "value": "rgb(193.0,52.0,61.0)",
  "brand": "Chanel",
  "colour": "????nigmatique",
  "r": 193,
  "g": 52,
  "b": 61,
  "rgb": "rgb(193, 52, 61)",
  "hex": "#c1343d"
}, {
  "value": "rgb(212.0,10.0,34.0)",
  "brand": "Chanel",
  "colour": "Passion",
  "r": 212,
  "g": 10,
  "b": 34,
  "rgb": "rgb(212, 10, 34)",
  "hex": "#d40a22"
}, {
  "value": "rgb(180.0,3.0,32.0)",
  "brand": "Chanel",
  "colour": "Pirate",
  "r": 180,
  "g": 3,
  "b": 32,
  "rgb": "rgb(180, 3, 32)",
  "hex": "#b40320"
}, {
  "value": "rgb(211.0,42.0,47.0)",
  "brand": "Chanel",
  "colour": "Coromandel",
  "r": 211,
  "g": 42,
  "b": 47,
  "rgb": "rgb(211, 42, 47)",
  "hex": "#d32a2f"
}, {
  "value": "rgb(207.0,14.0,31.0)",
  "brand": "Chanel",
  "colour": "Ind????pendante",
  "r": 207,
  "g": 14,
  "b": 31,
  "rgb": "rgb(207, 14, 31)",
  "hex": "#cf0e1f"
}, {
  "value": "rgb(180.0,0.0,14.0)",
  "brand": "Chanel",
  "colour": "Rouge tentation",
  "r": 180,
  "g": 0,
  "b": 14,
  "rgb": "rgb(180, 0, 14)",
  "hex": "#b4000e"
}, {
  "value": "rgb(218.0,93.0,109.0)",
  "brand": "Chanel",
  "colour": "S????duisante",
  "r": 218,
  "g": 93,
  "b": 109,
  "rgb": "rgb(218, 93, 109)",
  "hex": "#da5d6d"
}, {
  "value": "rgb(253.0,57.0,97.0)",
  "brand": "Chanel",
  "colour": "Fougueuse",
  "r": 253,
  "g": 57,
  "b": 97,
  "rgb": "rgb(253, 57, 97)",
  "hex": "#fd3961"
}, {
  "value": "rgb(201.0,115.0,124.0)",
  "brand": "Lipstick Queen",
  "colour": "BRIGHT NATURAL SAINT",
  "r": 201,
  "g": 115,
  "b": 124,
  "rgb": "rgb(201, 115, 124)",
  "hex": "#c9737c"
}, {
  "value": "rgb(197.0,116.0,125.0)",
  "brand": "Lipstick Queen",
  "colour": "PINKY NUDE SAINT",
  "r": 197,
  "g": 116,
  "b": 125,
  "rgb": "rgb(197, 116, 125)",
  "hex": "#c5747d"
}, {
  "value": "rgb(209.0,160.0,143.0)",
  "brand": "Lipstick Queen",
  "colour": "PEACHY NUDE SAINT",
  "r": 209,
  "g": 160,
  "b": 143,
  "rgb": "rgb(209, 160, 143)",
  "hex": "#d1a08f"
}, {
  "value": "rgb(182.0,110.0,145.0)",
  "brand": "Lipstick Queen",
  "colour": "SAINT MAUVE",
  "r": 182,
  "g": 110,
  "b": 145,
  "rgb": "rgb(182, 110, 145)",
  "hex": "#b66e91"
}, {
  "value": "rgb(143.0,49.0,76.0)",
  "brand": "Lipstick Queen",
  "colour": "SAINT BORDEAUX",
  "r": 143,
  "g": 49,
  "b": 76,
  "rgb": "rgb(143, 49, 76)",
  "hex": "#8f314c"
}, {
  "value": "rgb(110.0,25.0,67.0)",
  "brand": "Lipstick Queen",
  "colour": "PLUM SAINT",
  "r": 110,
  "g": 25,
  "b": 67,
  "rgb": "rgb(110, 25, 67)",
  "hex": "#6e1943"
}, {
  "value": "rgb(255.0,172.0,185.0)",
  "brand": "Lipstick Queen",
  "colour": "PINK SAINT",
  "r": 255,
  "g": 172,
  "b": 185,
  "rgb": "rgb(255, 172, 185)",
  "hex": "#ffacb9"
}, {
  "value": "rgb(240.0,34.0,51.0)",
  "brand": "Lipstick Queen",
  "colour": "RED SAINT",
  "r": 240,
  "g": 34,
  "b": 51,
  "rgb": "rgb(240, 34, 51)",
  "hex": "#f02233"
}, {
  "value": "rgb(236.0,195.0,165.0)",
  "brand": "Lipstick Queen",
  "colour": "NATURAL SAINT",
  "r": 236,
  "g": 195,
  "b": 165,
  "rgb": "rgb(236, 195, 165)",
  "hex": "#ecc3a5"
}, {
  "value": "rgb(137.0,32.0,52.0)",
  "brand": "Lipstick Queen",
  "colour": "WINE SAINT",
  "r": 137,
  "g": 32,
  "b": 52,
  "rgb": "rgb(137, 32, 52)",
  "hex": "#892034"
}, {
  "value": "rgb(228.0,77.0,111.0)",
  "brand": "Lipstick Queen",
  "colour": "ROSE SAINT",
  "r": 228,
  "g": 77,
  "b": 111,
  "rgb": "rgb(228, 77, 111)",
  "hex": "#e44d6f"
}, {
  "value": "rgb(179.0,83.0,69.0)",
  "brand": "Lipstick Queen",
  "colour": "PEACHY NATURAL",
  "r": 179,
  "g": 83,
  "b": 69,
  "rgb": "rgb(179, 83, 69)",
  "hex": "#b35345"
}, {
  "value": "rgb(232.0,58.0,60.0)",
  "brand": "Lipstick Queen",
  "colour": "CORAL RED",
  "r": 232,
  "g": 58,
  "b": 60,
  "rgb": "rgb(232, 58, 60)",
  "hex": "#e83a3c"
}, {
  "value": "rgb(177.0,6.0,63.0)",
  "brand": "Lipstick Queen",
  "colour": "BRIGHT BERRY",
  "r": 177,
  "g": 6,
  "b": 63,
  "rgb": "rgb(177, 6, 63)",
  "hex": "#b1063f"
}, {
  "value": "rgb(203.0,124.0,120.0)",
  "brand": "Lipstick Queen",
  "colour": "BRIGHT NATURAL SINNER",
  "r": 203,
  "g": 124,
  "b": 120,
  "rgb": "rgb(203, 124, 120)",
  "hex": "#cb7c78"
}, {
  "value": "rgb(224.0,167.0,156.0)",
  "brand": "Lipstick Queen",
  "colour": "PINKY NUDE SINNER",
  "r": 224,
  "g": 167,
  "b": 156,
  "rgb": "rgb(224, 167, 156)",
  "hex": "#e0a79c"
}, {
  "value": "rgb(221.0,160.0,142.0)",
  "brand": "Lipstick Queen",
  "colour": "PEACHY NUDE SINNER",
  "r": 221,
  "g": 160,
  "b": 142,
  "rgb": "rgb(221, 160, 142)",
  "hex": "#dda08e"
}, {
  "value": "rgb(186.0,118.0,151.0)",
  "brand": "Lipstick Queen",
  "colour": "MAUVE SINNER",
  "r": 186,
  "g": 118,
  "b": 151,
  "rgb": "rgb(186, 118, 151)",
  "hex": "#ba7697"
}, {
  "value": "rgb(143.0,49.0,76.0)",
  "brand": "Lipstick Queen",
  "colour": "BORDEAUX SINNER",
  "r": 143,
  "g": 49,
  "b": 76,
  "rgb": "rgb(143, 49, 76)",
  "hex": "#8f314c"
}, {
  "value": "rgb(110.0,25.0,67.0)",
  "brand": "Lipstick Queen",
  "colour": "PLUM SINNER",
  "r": 110,
  "g": 25,
  "b": 67,
  "rgb": "rgb(110, 25, 67)",
  "hex": "#6e1943"
}, {
  "value": "rgb(255.0,172.0,185.0)",
  "brand": "Lipstick Queen",
  "colour": "PINK SINNER",
  "r": 255,
  "g": 172,
  "b": 185,
  "rgb": "rgb(255, 172, 185)",
  "hex": "#ffacb9"
}, {
  "value": "rgb(202.0,54.0,65.0)",
  "brand": "Lipstick Queen",
  "colour": "RED SINNER",
  "r": 202,
  "g": 54,
  "b": 65,
  "rgb": "rgb(202, 54, 65)",
  "hex": "#ca3641"
}, {
  "value": "rgb(213.0,143.0,89.0)",
  "brand": "Lipstick Queen",
  "colour": "NUDE SINNER",
  "r": 213,
  "g": 143,
  "b": 89,
  "rgb": "rgb(213, 143, 89)",
  "hex": "#d58f59"
}, {
  "value": "rgb(137.0,32.0,52.0)",
  "brand": "Lipstick Queen",
  "colour": "WINE SINNER",
  "r": 137,
  "g": 32,
  "b": 52,
  "rgb": "rgb(137, 32, 52)",
  "hex": "#892034"
}, {
  "value": "rgb(228.0,77.0,111.0)",
  "brand": "Lipstick Queen",
  "colour": "ROSE SINNER",
  "r": 228,
  "g": 77,
  "b": 111,
  "rgb": "rgb(228, 77, 111)",
  "hex": "#e44d6f"
}, {
  "value": "rgb(199.0,118.0,114.0)",
  "brand": "Lipstick Queen",
  "colour": "NUDE ROSE",
  "r": 199,
  "g": 118,
  "b": 114,
  "rgb": "rgb(199, 118, 114)",
  "hex": "#c77672"
}, {
  "value": "rgb(210.0,109.0,86.0)",
  "brand": "Lipstick Queen",
  "colour": "CORAL RED",
  "r": 210,
  "g": 109,
  "b": 86,
  "rgb": "rgb(210, 109, 86)",
  "hex": "#d26d56"
}, {
  "value": "rgb(171.0,114.0,147.0)",
  "brand": "Lipstick Queen",
  "colour": "BERRY WINE",
  "r": 171,
  "g": 114,
  "b": 147,
  "rgb": "rgb(171, 114, 147)",
  "hex": "#ab7293"
}, {
  "value": "rgb(115.0,44.0,46.0)",
  "brand": "Lipstick Queen",
  "colour": "RED PLUM",
  "r": 115,
  "g": 44,
  "b": 46,
  "rgb": "rgb(115, 44, 46)",
  "hex": "#732c2e"
}, {
  "value": "rgb(216.0,127.0,129.0)",
  "brand": "Lipstick Queen",
  "colour": "THE TRUTH",
  "r": 216,
  "g": 127,
  "b": 129,
  "rgb": "rgb(216, 127, 129)",
  "hex": "#d87f81"
}, {
  "value": "rgb(217.0,141.0,128.0)",
  "brand": "Lipstick Queen",
  "colour": "THE WHOLE TRUTH",
  "r": 217,
  "g": 141,
  "b": 128,
  "rgb": "rgb(217, 141, 128)",
  "hex": "#d98d80"
}, {
  "value": "rgb(215.0,137.0,127.0)",
  "brand": "Lipstick Queen",
  "colour": "NOTHING BUT THE TRUTH",
  "r": 215,
  "g": 137,
  "b": 127,
  "rgb": "rgb(215, 137, 127)",
  "hex": "#d7897f"
}, {
  "value": "rgb(153.0,90.0,101.0)",
  "brand": "Lipstick Queen",
  "colour": "TEMPTING TAUPE",
  "r": 153,
  "g": 90,
  "b": 101,
  "rgb": "rgb(153, 90, 101)",
  "hex": "#995a65"
}, {
  "value": "rgb(191.0,101.0,101.0)",
  "brand": "Lipstick Queen",
  "colour": "BLOOMING BLUSH",
  "r": 191,
  "g": 101,
  "b": 101,
  "rgb": "rgb(191, 101, 101)",
  "hex": "#bf6565"
}, {
  "value": "rgb(179.0,91.0,107.0)",
  "brand": "Lipstick Queen",
  "colour": "HANKY PANKY PINK",
  "r": 179,
  "g": 91,
  "b": 107,
  "rgb": "rgb(179, 91, 107)",
  "hex": "#b35b6b"
}, {
  "value": "rgb(206.0,127.0,133.0)",
  "brand": "Lipstick Queen",
  "colour": "SWEET AS HONEY",
  "r": 206,
  "g": 127,
  "b": 133,
  "rgb": "rgb(206, 127, 133)",
  "hex": "#ce7f85"
}, {
  "value": "rgb(214.0,146.0,147.0)",
  "brand": "Lipstick Queen",
  "colour": "TRUTH OR BARE",
  "r": 214,
  "g": 146,
  "b": 147,
  "rgb": "rgb(214, 146, 147)",
  "hex": "#d69293"
}, {
  "value": "rgb(217.0,130.0,133.0)",
  "brand": "Lipstick Queen",
  "colour": "NAKED TRUTH",
  "r": 217,
  "g": 130,
  "b": 133,
  "rgb": "rgb(217, 130, 133)",
  "hex": "#d98285"
}, {
  "value": "rgb(152.0,81.0,75.0)",
  "brand": "Lipstick Queen",
  "colour": "CHEEKY CHESTNUT",
  "r": 152,
  "g": 81,
  "b": 75,
  "rgb": "rgb(152, 81, 75)",
  "hex": "#98514b"
}, {
  "value": "rgb(118.0,43.0,65.0)",
  "brand": "Lipstick Queen",
  "colour": "KING",
  "r": 118,
  "g": 43,
  "b": 65,
  "rgb": "rgb(118, 43, 65)",
  "hex": "#762b41"
}, {
  "value": "rgb(120.0,24.0,24.0)",
  "brand": "Lipstick Queen",
  "colour": "QUEEN",
  "r": 120,
  "g": 24,
  "b": 24,
  "rgb": "rgb(120, 24, 24)",
  "hex": "#781818"
}, {
  "value": "rgb(148.0,42.0,74.0)",
  "brand": "Lipstick Queen",
  "colour": "ROOK",
  "r": 148,
  "g": 42,
  "b": 74,
  "rgb": "rgb(148, 42, 74)",
  "hex": "#942a4a"
}, {
  "value": "rgb(191.0,77.0,102.0)",
  "brand": "Lipstick Queen",
  "colour": "BISHOP",
  "r": 191,
  "g": 77,
  "b": 102,
  "rgb": "rgb(191, 77, 102)",
  "hex": "#bf4d66"
}, {
  "value": "rgb(81.0,0.0,0.0)",
  "brand": "Lipstick Queen",
  "colour": "KNIGHT",
  "r": 81,
  "g": 0,
  "b": 0,
  "rgb": "rgb(81, 0, 0)",
  "hex": "#510000"
}, {
  "value": "rgb(154.0,69.0,47.0)",
  "brand": "Lipstick Queen",
  "colour": "PAWN",
  "r": 154,
  "g": 69,
  "b": 47,
  "rgb": "rgb(154, 69, 47)",
  "hex": "#9a452f"
}, {
  "value": "rgb(216.0,61.0,101.0)",
  "brand": "Lipstick Queen",
  "colour": "MR. RIGHT",
  "r": 216,
  "g": 61,
  "b": 101,
  "rgb": "rgb(216, 61, 101)",
  "hex": "#d83d65"
}, {
  "value": "rgb(152.0,29.0,109.0)",
  "brand": "Lipstick Queen",
  "colour": "MR. RIGHT NOW",
  "r": 152,
  "g": 29,
  "b": 109,
  "rgb": "rgb(152, 29, 109)",
  "hex": "#981d6d"
}, {
  "value": "rgb(204.0,57.0,125.0)",
  "brand": "Lipstick Queen",
  "colour": "BAD BOY",
  "r": 204,
  "g": 57,
  "b": 125,
  "rgb": "rgb(204, 57, 125)",
  "hex": "#cc397d"
}, {
  "value": "rgb(215.0,97.0,123.0)",
  "brand": "Lipstick Queen",
  "colour": "GOOD CATCH",
  "r": 215,
  "g": 97,
  "b": 123,
  "rgb": "rgb(215, 97, 123)",
  "hex": "#d7617b"
}, {
  "value": "rgb(168.0,102.0,86.0)",
  "brand": "Lipstick Queen",
  "colour": "NONSENSE NUDE",
  "r": 168,
  "g": 102,
  "b": 86,
  "rgb": "rgb(168, 102, 86)",
  "hex": "#a86656"
}, {
  "value": "rgb(215.0,126.0,108.0)",
  "brand": "Laura Mercier",
  "colour": "NUDE NOUVEAU",
  "r": 215,
  "g": 126,
  "b": 108,
  "rgb": "rgb(215, 126, 108)",
  "hex": "#d77e6c"
}, {
  "value": "rgb(187.0,107.0,96.0)",
  "brand": "Laura Mercier",
  "colour": "NU PR??F??R??",
  "r": 187,
  "g": 107,
  "b": 96,
  "rgb": "rgb(187, 107, 96)",
  "hex": "#bb6b60"
}, {
  "value": "rgb(173.0,112.0,93.0)",
  "brand": "Laura Mercier",
  "colour": "BRUN P??LE",
  "r": 173,
  "g": 112,
  "b": 93,
  "rgb": "rgb(173, 112, 93)",
  "hex": "#ad705d"
}, {
  "value": "rgb(128.0,81.0,63.0)",
  "brand": "Laura Mercier",
  "colour": "BRUN NATUREL",
  "r": 128,
  "g": 81,
  "b": 63,
  "rgb": "rgb(128, 81, 63)",
  "hex": "#80513f"
}, {
  "value": "rgb(170.0,104.0,106.0)",
  "brand": "Laura Mercier",
  "colour": "BEIGE INTIME",
  "r": 170,
  "g": 104,
  "b": 106,
  "rgb": "rgb(170, 104, 106)",
  "hex": "#aa686a"
}, {
  "value": "rgb(79.0,48.0,43.0)",
  "brand": "Laura Mercier",
  "colour": "CHOCOLAT DIVIN",
  "r": 79,
  "g": 48,
  "b": 43,
  "rgb": "rgb(79, 48, 43)",
  "hex": "#4f302b"
}, {
  "value": "rgb(196.0,118.0,131.0)",
  "brand": "Laura Mercier",
  "colour": "?? LA ROSE",
  "r": 196,
  "g": 118,
  "b": 131,
  "rgb": "rgb(196, 118, 131)",
  "hex": "#c47683"
}, {
  "value": "rgb(158.0,90.0,113.0)",
  "brand": "Laura Mercier",
  "colour": "ROSE CLAIRE",
  "r": 158,
  "g": 90,
  "b": 113,
  "rgb": "rgb(158, 90, 113)",
  "hex": "#9e5a71"
}, {
  "value": "rgb(231.0,103.0,126.0)",
  "brand": "Laura Mercier",
  "colour": "ROSE ULTIMATE",
  "r": 231,
  "g": 103,
  "b": 126,
  "rgb": "rgb(231, 103, 126)",
  "hex": "#e7677e"
}, {
  "value": "rgb(217.0,105.0,141.0)",
  "brand": "Laura Mercier",
  "colour": "BLUSH PINK",
  "r": 217,
  "g": 105,
  "b": 141,
  "rgb": "rgb(217, 105, 141)",
  "hex": "#d9698d"
}, {
  "value": "rgb(134.0,43.0,61.0)",
  "brand": "Laura Mercier",
  "colour": "ROSE VIF",
  "r": 134,
  "g": 43,
  "b": 61,
  "rgb": "rgb(134, 43, 61)",
  "hex": "#862b3d"
}, {
  "value": "rgb(193.0,57.0,81.0)",
  "brand": "Laura Mercier",
  "colour": "FUCHSIA INTENSE",
  "r": 193,
  "g": 57,
  "b": 81,
  "rgb": "rgb(193, 57, 81)",
  "hex": "#c13951"
}, {
  "value": "rgb(138.0,61.0,93.0)",
  "brand": "Laura Mercier",
  "colour": "ROSE MAUVE",
  "r": 138,
  "g": 61,
  "b": 93,
  "rgb": "rgb(138, 61, 93)",
  "hex": "#8a3d5d"
}, {
  "value": "rgb(171.0,105.0,117.0)",
  "brand": "Laura Mercier",
  "colour": "MAUVE MERVEILLEUX",
  "r": 171,
  "g": 105,
  "b": 117,
  "rgb": "rgb(171, 105, 117)",
  "hex": "#ab6975"
}, {
  "value": "rgb(117.0,39.0,81.0)",
  "brand": "Laura Mercier",
  "colour": "PLUM SUBLIME",
  "r": 117,
  "g": 39,
  "b": 81,
  "rgb": "rgb(117, 39, 81)",
  "hex": "#752751"
}, {
  "value": "rgb(101.0,45.0,72.0)",
  "brand": "Laura Mercier",
  "colour": "VIOLETTE",
  "r": 101,
  "g": 45,
  "b": 72,
  "rgb": "rgb(101, 45, 72)",
  "hex": "#652d48"
}, {
  "value": "rgb(107.0,65.0,87.0)",
  "brand": "Laura Mercier",
  "colour": "PLUM FATALE",
  "r": 107,
  "g": 65,
  "b": 87,
  "rgb": "rgb(107, 65, 87)",
  "hex": "#6b4157"
}, {
  "value": "rgb(78.0,46.0,61.0)",
  "brand": "Laura Mercier",
  "colour": "PLUM NOIRE",
  "r": 78,
  "g": 46,
  "b": 61,
  "rgb": "rgb(78, 46, 61)",
  "hex": "#4e2e3d"
}, {
  "value": "rgb(221.0,140.0,119.0)",
  "brand": "Laura Mercier",
  "colour": "CORAL NU",
  "r": 221,
  "g": 140,
  "b": 119,
  "rgb": "rgb(221, 140, 119)",
  "hex": "#dd8c77"
}, {
  "value": "rgb(207.0,118.0,110.0)",
  "brand": "Laura Mercier",
  "colour": "CORAL CLAIR",
  "r": 207,
  "g": 118,
  "b": 110,
  "rgb": "rgb(207, 118, 110)",
  "hex": "#cf766e"
}, {
  "value": "rgb(253.0,140.0,147.0)",
  "brand": "Laura Mercier",
  "colour": "L'ORANGE",
  "r": 253,
  "g": 140,
  "b": 147,
  "rgb": "rgb(253, 140, 147)",
  "hex": "#fd8c93"
}, {
  "value": "rgb(215.0,62.0,65.0)",
  "brand": "Laura Mercier",
  "colour": "CORAL VIF",
  "r": 215,
  "g": 62,
  "b": 65,
  "rgb": "rgb(215, 62, 65)",
  "hex": "#d73e41"
}, {
  "value": "rgb(211.0,62.0,100.0)",
  "brand": "Laura Mercier",
  "colour": "ROSE D??CADENT",
  "r": 211,
  "g": 62,
  "b": 100,
  "rgb": "rgb(211, 62, 100)",
  "hex": "#d33e64"
}, {
  "value": "rgb(191.0,52.0,65.0)",
  "brand": "Laura Mercier",
  "colour": "ROUGE ??CLATANT",
  "r": 191,
  "g": 52,
  "b": 65,
  "rgb": "rgb(191, 52, 65)",
  "hex": "#bf3441"
}, {
  "value": "rgb(179.0,46.0,41.0)",
  "brand": "Laura Mercier",
  "colour": "ROUGE ??LECTRIQUE",
  "r": 179,
  "g": 46,
  "b": 41,
  "rgb": "rgb(179, 46, 41)",
  "hex": "#b32e29"
}, {
  "value": "rgb(155.0,35.0,44.0)",
  "brand": "Laura Mercier",
  "colour": "ROUGE MUSE",
  "r": 155,
  "g": 35,
  "b": 44,
  "rgb": "rgb(155, 35, 44)",
  "hex": "#9b232c"
}, {
  "value": "rgb(151.0,34.0,53.0)",
  "brand": "Laura Mercier",
  "colour": "ROUGE ULTIME",
  "r": 151,
  "g": 34,
  "b": 53,
  "rgb": "rgb(151, 34, 53)",
  "hex": "#972235"
}, {
  "value": "rgb(124.0,27.0,31.0)",
  "brand": "Laura Mercier",
  "colour": "ROUGE PROFOND",
  "r": 124,
  "g": 27,
  "b": 31,
  "rgb": "rgb(124, 27, 31)",
  "hex": "#7c1b1f"
}, {
  "value": "rgb(119.0,37.0,60.0)",
  "brand": "Laura Mercier",
  "colour": "ROSE ROUGE",
  "r": 119,
  "g": 37,
  "b": 60,
  "rgb": "rgb(119, 37, 60)",
  "hex": "#77253c"
}, {
  "value": "rgb(225.0,39.0,42.0)",
  "brand": "Laura Mercier",
  "colour": "FIRE",
  "r": 225,
  "g": 39,
  "b": 42,
  "rgb": "rgb(225, 39, 42)",
  "hex": "#e1272a"
}, {
  "value": "rgb(166.0,33.0,26.0)",
  "brand": "Laura Mercier",
  "colour": "CONTROL",
  "r": 166,
  "g": 33,
  "b": 26,
  "rgb": "rgb(166, 33, 26)",
  "hex": "#a6211a"
}, {
  "value": "rgb(210.0,97.0,115.0)",
  "brand": "Laura Mercier",
  "colour": "GOALS",
  "r": 210,
  "g": 97,
  "b": 115,
  "rgb": "rgb(210, 97, 115)",
  "hex": "#d26173"
}, {
  "value": "rgb(227.0,69.0,102.0)",
  "brand": "Laura Mercier",
  "colour": "BRING IT",
  "r": 227,
  "g": 69,
  "b": 102,
  "rgb": "rgb(227, 69, 102)",
  "hex": "#e34566"
}, {
  "value": "rgb(224.0,56.0,81.0)",
  "brand": "Laura Mercier",
  "colour": "CLIQUE",
  "r": 224,
  "g": 56,
  "b": 81,
  "rgb": "rgb(224, 56, 81)",
  "hex": "#e03851"
}, {
  "value": "rgb(231.0,51.0,112.0)",
  "brand": "Laura Mercier",
  "colour": "IT GIRL",
  "r": 231,
  "g": 51,
  "b": 112,
  "rgb": "rgb(231, 51, 112)",
  "hex": "#e73370"
}, {
  "value": "rgb(201.0,127.0,106.0)",
  "brand": "Laura Mercier",
  "colour": "RESPECT",
  "r": 201,
  "g": 127,
  "b": 106,
  "rgb": "rgb(201, 127, 106)",
  "hex": "#c97f6a"
}, {
  "value": "rgb(208.0,126.0,130.0)",
  "brand": "Laura Mercier",
  "colour": "RUTHLESS",
  "r": 208,
  "g": 126,
  "b": 130,
  "rgb": "rgb(208, 126, 130)",
  "hex": "#d07e82"
}, {
  "value": "rgb(218.0,110.0,129.0)",
  "brand": "Laura Mercier",
  "colour": "VIBE",
  "r": 218,
  "g": 110,
  "b": 129,
  "rgb": "rgb(218, 110, 129)",
  "hex": "#da6e81"
}, {
  "value": "rgb(158.0,74.0,98.0)",
  "brand": "Laura Mercier",
  "colour": "FRESH",
  "r": 158,
  "g": 74,
  "b": 98,
  "rgb": "rgb(158, 74, 98)",
  "hex": "#9e4a62"
}, {
  "value": "rgb(185.0,40.0,115.0)",
  "brand": "Laura Mercier",
  "colour": "QUEEN",
  "r": 185,
  "g": 40,
  "b": 115,
  "rgb": "rgb(185, 40, 115)",
  "hex": "#b92873"
}, {
  "value": "rgb(117.0,29.0,67.0)",
  "brand": "Laura Mercier",
  "colour": "FATALE",
  "r": 117,
  "g": 29,
  "b": 67,
  "rgb": "rgb(117, 29, 67)",
  "hex": "#751d43"
}, {
  "value": "rgb(157.0,46.0,63.0)",
  "brand": "Laura Mercier",
  "colour": "HOT",
  "r": 157,
  "g": 46,
  "b": 63,
  "rgb": "rgb(157, 46, 63)",
  "hex": "#9d2e3f"
}, {
  "value": "rgb(114.0,74.0,111.0)",
  "brand": "Laura Mercier",
  "colour": "BOSS",
  "r": 114,
  "g": 74,
  "b": 111,
  "rgb": "rgb(114, 74, 111)",
  "hex": "#724a6f"
}, {
  "value": "rgb(108.0,73.0,71.0)",
  "brand": "Laura Mercier",
  "colour": "DARE",
  "r": 108,
  "g": 73,
  "b": 71,
  "rgb": "rgb(108, 73, 71)",
  "hex": "#6c4947"
}, {
  "value": "rgb(95.0,81.0,106.0)",
  "brand": "Laura Mercier",
  "colour": "EXTREME",
  "r": 95,
  "g": 81,
  "b": 106,
  "rgb": "rgb(95, 81, 106)",
  "hex": "#5f516a"
}, {
  "value": "rgb(212.0,100.0,86.0)",
  "brand": "Laura Mercier",
  "colour": "COOL",
  "r": 212,
  "g": 100,
  "b": 86,
  "rgb": "rgb(212, 100, 86)",
  "hex": "#d46456"
}, {
  "value": "rgb(241.0,109.0,96.0)",
  "brand": "Laura Mercier",
  "colour": "STYLIN",
  "r": 241,
  "g": 109,
  "b": 96,
  "rgb": "rgb(241, 109, 96)",
  "hex": "#f16d60"
}, {
  "value": "rgb(238.0,92.0,69.0)",
  "brand": "Laura Mercier",
  "colour": "ONPOINT",
  "r": 238,
  "g": 92,
  "b": 69,
  "rgb": "rgb(238, 92, 69)",
  "hex": "#ee5c45"
}, {
  "value": "rgb(232.0,19.0,125.0)",
  "brand": "Laura Mercier",
  "colour": "FAB",
  "r": 232,
  "g": 19,
  "b": 125,
  "rgb": "rgb(232, 19, 125)",
  "hex": "#e8137d"
}, {
  "value": "rgb(188.0,19.0,114.0)",
  "brand": "Laura Mercier",
  "colour": "POWER",
  "r": 188,
  "g": 19,
  "b": 114,
  "rgb": "rgb(188, 19, 114)",
  "hex": "#bc1372"
}, {
  "value": "rgb(219.0,50.0,93.0)",
  "brand": "Hourglass",
  "colour": "I ALWAYS",
  "r": 219,
  "g": 50,
  "b": 93,
  "rgb": "rgb(219, 50, 93)",
  "hex": "#db325d"
}, {
  "value": "rgb(178.0,71.0,101.0)",
  "brand": "Hourglass",
  "colour": "I BELIEVE",
  "r": 178,
  "g": 71,
  "b": 101,
  "rgb": "rgb(178, 71, 101)",
  "hex": "#b24765"
}, {
  "value": "rgb(139.0,30.0,49.0)",
  "brand": "Hourglass",
  "colour": "I CAN'T LIVE WITHOUT",
  "r": 139,
  "g": 30,
  "b": 49,
  "rgb": "rgb(139, 30, 49)",
  "hex": "#8b1e31"
}, {
  "value": "rgb(173.0,35.0,60.0)",
  "brand": "Hourglass",
  "colour": "I CAN'T WAIT",
  "r": 173,
  "g": 35,
  "b": 60,
  "rgb": "rgb(173, 35, 60)",
  "hex": "#ad233c"
}, {
  "value": "rgb(175.0,23.0,35.0)",
  "brand": "Hourglass",
  "colour": "I CRAVE",
  "r": 175,
  "g": 23,
  "b": 35,
  "rgb": "rgb(175, 23, 35)",
  "hex": "#af1723"
}, {
  "value": "rgb(224.0,55.0,22.0)",
  "brand": "Hourglass",
  "colour": "I DESIRE",
  "r": 224,
  "g": 55,
  "b": 22,
  "rgb": "rgb(224, 55, 22)",
  "hex": "#e03716"
}, {
  "value": "rgb(131.0,70.0,86.0)",
  "brand": "Hourglass",
  "colour": "I HIDE MY",
  "r": 131,
  "g": 70,
  "b": 86,
  "rgb": "rgb(131, 70, 86)",
  "hex": "#834656"
}, {
  "value": "rgb(223.0,54.0,35.0)",
  "brand": "Hourglass",
  "colour": "I LIVE FOR",
  "r": 223,
  "g": 54,
  "b": 35,
  "rgb": "rgb(223, 54, 35)",
  "hex": "#df3623"
}, {
  "value": "rgb(168.0,63.0,77.0)",
  "brand": "Hourglass",
  "colour": "MY ICON IS",
  "r": 168,
  "g": 63,
  "b": 77,
  "rgb": "rgb(168, 63, 77)",
  "hex": "#a83f4d"
}, {
  "value": "rgb(200.0,110.0,86.0)",
  "brand": "Hourglass",
  "colour": "I LUST FOR",
  "r": 200,
  "g": 110,
  "b": 86,
  "rgb": "rgb(200, 110, 86)",
  "hex": "#c86e56"
}, {
  "value": "rgb(157.0,87.0,77.0)",
  "brand": "Hourglass",
  "colour": "I WANT",
  "r": 157,
  "g": 87,
  "b": 77,
  "rgb": "rgb(157, 87, 77)",
  "hex": "#9d574d"
}, {
  "value": "rgb(211.0,145.0,119.0)",
  "brand": "Hourglass",
  "colour": "I WISH",
  "r": 211,
  "g": 145,
  "b": 119,
  "rgb": "rgb(211, 145, 119)",
  "hex": "#d39177"
}, {
  "value": "rgb(163.0,84.0,90.0)",
  "brand": "Hourglass",
  "colour": "I WOKE UP",
  "r": 163,
  "g": 84,
  "b": 90,
  "rgb": "rgb(163, 84, 90)",
  "hex": "#a3545a"
}, {
  "value": "rgb(140.0,48.0,91.0)",
  "brand": "Hourglass",
  "colour": "IF I COULD",
  "r": 140,
  "g": 48,
  "b": 91,
  "rgb": "rgb(140, 48, 91)",
  "hex": "#8c305b"
}, {
  "value": "rgb(139.0,59.0,60.0)",
  "brand": "Hourglass",
  "colour": "IF ONLY",
  "r": 139,
  "g": 59,
  "b": 60,
  "rgb": "rgb(139, 59, 60)",
  "hex": "#8b3b3c"
}, {
  "value": "rgb(162.0,105.0,86.0)",
  "brand": "Hourglass",
  "colour": "I'LL NEVER STOP",
  "r": 162,
  "g": 105,
  "b": 86,
  "rgb": "rgb(162, 105, 86)",
  "hex": "#a26956"
}, {
  "value": "rgb(184.0,97.0,90.0)",
  "brand": "Hourglass",
  "colour": "I'M ADDICTED",
  "r": 184,
  "g": 97,
  "b": 90,
  "rgb": "rgb(184, 97, 90)",
  "hex": "#b8615a"
}, {
  "value": "rgb(104.0,44.0,30.0)",
  "brand": "Hourglass",
  "colour": "I'VE BEEN",
  "r": 104,
  "g": 44,
  "b": 30,
  "rgb": "rgb(104, 44, 30)",
  "hex": "#682c1e"
}, {
  "value": "rgb(156.0,78.0,91.0)",
  "brand": "Hourglass",
  "colour": "I'VE KISSED",
  "r": 156,
  "g": 78,
  "b": 91,
  "rgb": "rgb(156, 78, 91)",
  "hex": "#9c4e5b"
}, {
  "value": "rgb(180.0,101.0,84.0)",
  "brand": "Hourglass",
  "colour": "I'VE NEVER",
  "r": 180,
  "g": 101,
  "b": 84,
  "rgb": "rgb(180, 101, 84)",
  "hex": "#b46554"
}, {
  "value": "rgb(200.0,78.0,99.0)",
  "brand": "Hourglass",
  "colour": "MY FAVORITE",
  "r": 200,
  "g": 78,
  "b": 99,
  "rgb": "rgb(200, 78, 99)",
  "hex": "#c84e63"
}, {
  "value": "rgb(214.0,103.0,94.0)",
  "brand": "Hourglass",
  "colour": "NO ONE KNOWS",
  "r": 214,
  "g": 103,
  "b": 94,
  "rgb": "rgb(214, 103, 94)",
  "hex": "#d6675e"
}, {
  "value": "rgb(190.0,114.0,97.0)",
  "brand": "Hourglass",
  "colour": "ONE DAY",
  "r": 190,
  "g": 114,
  "b": 97,
  "rgb": "rgb(190, 114, 97)",
  "hex": "#be7261"
}, {
  "value": "rgb(106.0,47.0,49.0)",
  "brand": "Hourglass",
  "colour": "ONE TIME",
  "r": 106,
  "g": 47,
  "b": 49,
  "rgb": "rgb(106, 47, 49)",
  "hex": "#6a2f31"
}, {
  "value": "rgb(131.0,21.0,26.0)",
  "brand": "Hourglass",
  "colour": "SECRETLY",
  "r": 131,
  "g": 21,
  "b": 26,
  "rgb": "rgb(131, 21, 26)",
  "hex": "#83151a"
}, {
  "value": "rgb(208.0,131.0,115.0)",
  "brand": "Hourglass",
  "colour": "THE FIRST TIME",
  "r": 208,
  "g": 131,
  "b": 115,
  "rgb": "rgb(208, 131, 115)",
  "hex": "#d08373"
}, {
  "value": "rgb(141.0,72.0,90.0)",
  "brand": "Hourglass",
  "colour": "WHEN I'M ALONE",
  "r": 141,
  "g": 72,
  "b": 90,
  "rgb": "rgb(141, 72, 90)",
  "hex": "#8d485a"
}, {
  "value": "rgb(143.0,34.0,90.0)",
  "brand": "Hourglass",
  "colour": "WHEN I'M WITH YOU",
  "r": 143,
  "g": 34,
  "b": 90,
  "rgb": "rgb(143, 34, 90)",
  "hex": "#8f225a"
}, {
  "value": "rgb(200.0,66.0,63.0)",
  "brand": "Hourglass",
  "colour": "YOU CAN FIND ME",
  "r": 200,
  "g": 66,
  "b": 63,
  "rgb": "rgb(200, 66, 63)",
  "hex": "#c8423f"
}, {
  "value": "rgb(218.0,131.0,114.0)",
  "brand": "Hourglass",
  "colour": "DREAMER",
  "r": 218,
  "g": 131,
  "b": 114,
  "rgb": "rgb(218, 131, 114)",
  "hex": "#da8372"
}, {
  "value": "rgb(207.0,138.0,107.0)",
  "brand": "Hourglass",
  "colour": "BELIEVER",
  "r": 207,
  "g": 138,
  "b": 107,
  "rgb": "rgb(207, 138, 107)",
  "hex": "#cf8a6b"
}, {
  "value": "rgb(172.0,97.0,91.0)",
  "brand": "Hourglass",
  "colour": "CREATOR",
  "r": 172,
  "g": 97,
  "b": 91,
  "rgb": "rgb(172, 97, 91)",
  "hex": "#ac615b"
}, {
  "value": "rgb(181.0,121.0,84.0)",
  "brand": "Hourglass",
  "colour": "IDEALIST",
  "r": 181,
  "g": 121,
  "b": 84,
  "rgb": "rgb(181, 121, 84)",
  "hex": "#b57954"
}, {
  "value": "rgb(184.0,93.0,92.0)",
  "brand": "Hourglass",
  "colour": "SEEKER",
  "r": 184,
  "g": 93,
  "b": 92,
  "rgb": "rgb(184, 93, 92)",
  "hex": "#b85d5c"
}, {
  "value": "rgb(152.0,72.0,73.0)",
  "brand": "Hourglass",
  "colour": "INVENTOR",
  "r": 152,
  "g": 72,
  "b": 73,
  "rgb": "rgb(152, 72, 73)",
  "hex": "#984849"
}, {
  "value": "rgb(156.0,77.0,72.0)",
  "brand": "Hourglass",
  "colour": "ACTIVIST",
  "r": 156,
  "g": 77,
  "b": 72,
  "rgb": "rgb(156, 77, 72)",
  "hex": "#9c4d48"
}, {
  "value": "rgb(218.0,110.0,84.0)",
  "brand": "Hourglass",
  "colour": "EXPLORER",
  "r": 218,
  "g": 110,
  "b": 84,
  "rgb": "rgb(218, 110, 84)",
  "hex": "#da6e54"
}, {
  "value": "rgb(190.0,50.0,37.0)",
  "brand": "Hourglass",
  "colour": "LOVER",
  "r": 190,
  "g": 50,
  "b": 37,
  "rgb": "rgb(190, 50, 37)",
  "hex": "#be3225"
}, {
  "value": "rgb(165.0,27.0,52.0)",
  "brand": "Hourglass",
  "colour": "LEADER",
  "r": 165,
  "g": 27,
  "b": 52,
  "rgb": "rgb(165, 27, 52)",
  "hex": "#a51b34"
}, {
  "value": "rgb(121.0,55.0,65.0)",
  "brand": "Hourglass",
  "colour": "LIBERATOR",
  "r": 121,
  "g": 55,
  "b": 65,
  "rgb": "rgb(121, 55, 65)",
  "hex": "#793741"
}, {
  "value": "rgb(99.0,20.0,49.0)",
  "brand": "Hourglass",
  "colour": "PROTECTOR",
  "r": 99,
  "g": 20,
  "b": 49,
  "rgb": "rgb(99, 20, 49)",
  "hex": "#631431"
}, {
  "value": "rgb(120.0,15.0,20.0)",
  "brand": "Hourglass",
  "colour": "INNOVATOR",
  "r": 120,
  "g": 15,
  "b": 20,
  "rgb": "rgb(120, 15, 20)",
  "hex": "#780f14"
}, {
  "value": "rgb(151.0,28.0,46.0)",
  "brand": "Hourglass",
  "colour": "ICON",
  "r": 151,
  "g": 28,
  "b": 46,
  "rgb": "rgb(151, 28, 46)",
  "hex": "#971c2e"
}, {
  "value": "rgb(58.0,12.0,23.0)",
  "brand": "Hourglass",
  "colour": "WARRIOR",
  "r": 58,
  "g": 12,
  "b": 23,
  "rgb": "rgb(58, 12, 23)",
  "hex": "#3a0c17"
}, {
  "value": "rgb(177.0,110.0,93.0)",
  "brand": "Hourglass",
  "colour": "PEACEMAKER",
  "r": 177,
  "g": 110,
  "b": 93,
  "rgb": "rgb(177, 110, 93)",
  "hex": "#b16e5d"
}, {
  "value": "rgb(163.0,98.0,78.0)",
  "brand": "Hourglass",
  "colour": "INFLUENCER",
  "r": 163,
  "g": 98,
  "b": 78,
  "rgb": "rgb(163, 98, 78)",
  "hex": "#a3624e"
}, {
  "value": "rgb(168.0,113.0,83.0)",
  "brand": "Hourglass",
  "colour": "FUTURIST",
  "r": 168,
  "g": 113,
  "b": 83,
  "rgb": "rgb(168, 113, 83)",
  "hex": "#a87153"
}, {
  "value": "rgb(121.0,69.0,56.0)",
  "brand": "Hourglass",
  "colour": "ACHIEVER",
  "r": 121,
  "g": 69,
  "b": 56,
  "rgb": "rgb(121, 69, 56)",
  "hex": "#794538"
}, {
  "value": "rgb(211.0,145.0,119.0)",
  "brand": "Hourglass",
  "colour": "I WISH",
  "r": 211,
  "g": 145,
  "b": 119,
  "rgb": "rgb(211, 145, 119)",
  "hex": "#d39177"
}, {
  "value": "rgb(190.0,114.0,97.0)",
  "brand": "Hourglass",
  "colour": "ONE DAY",
  "r": 190,
  "g": 114,
  "b": 97,
  "rgb": "rgb(190, 114, 97)",
  "hex": "#be7261"
}, {
  "value": "rgb(210.0,167.0,151.0)",
  "brand": "Jaclyn Hill",
  "colour": "Nude AF - cream nude",
  "r": 210,
  "g": 167,
  "b": 151,
  "rgb": "rgb(210, 167, 151)",
  "hex": "#d2a797"
}, {
  "value": "rgb(210.0,157.0,141.0)",
  "brand": "Jaclyn Hill",
  "colour": "Amazeballs - buff nude",
  "r": 210,
  "g": 157,
  "b": 141,
  "rgb": "rgb(210, 157, 141)",
  "hex": "#d29d8d"
}, {
  "value": "rgb(207.0,159.0,157.0)",
  "brand": "Jaclyn Hill",
  "colour": "As If - fawn nude",
  "r": 207,
  "g": 159,
  "b": 157,
  "rgb": "rgb(207, 159, 157)",
  "hex": "#cf9f9d"
}, {
  "value": "rgb(175.0,124.0,107.0)",
  "brand": "Jaclyn Hill",
  "colour": "Hustle - caramel peach",
  "r": 175,
  "g": 124,
  "b": 107,
  "rgb": "rgb(175, 124, 107)",
  "hex": "#af7c6b"
}, {
  "value": "rgb(196.0,138.0,126.0)",
  "brand": "Jaclyn Hill",
  "colour": "Obsessed - blushing peach",
  "r": 196,
  "g": 138,
  "b": 126,
  "rgb": "rgb(196, 138, 126)",
  "hex": "#c48a7e"
}, {
  "value": "rgb(211.0,149.0,136.0)",
  "brand": "Jaclyn Hill",
  "colour": "That Girl - sweet peach",
  "r": 211,
  "g": 149,
  "b": 136,
  "rgb": "rgb(211, 149, 136)",
  "hex": "#d39588"
}, {
  "value": "rgb(176.0,115.0,96.0)",
  "brand": "Jaclyn Hill",
  "colour": "Tipsy - toasted apricot",
  "r": 176,
  "g": 115,
  "b": 96,
  "rgb": "rgb(176, 115, 96)",
  "hex": "#b07360"
}, {
  "value": "rgb(146.0,107.0,90.0)",
  "brand": "Jaclyn Hill",
  "colour": "Decaf - iced mocha",
  "r": 146,
  "g": 107,
  "b": 90,
  "rgb": "rgb(146, 107, 90)",
  "hex": "#926b5a"
}, {
  "value": "rgb(153.0,95.0,81.0)",
  "brand": "Jaclyn Hill",
  "colour": "Independent - praline",
  "r": 153,
  "g": 95,
  "b": 81,
  "rgb": "rgb(153, 95, 81)",
  "hex": "#995f51"
}, {
  "value": "rgb(163.0,114.0,97.0)",
  "brand": "Jaclyn Hill",
  "colour": "Cheeky - chai latte",
  "r": 163,
  "g": 114,
  "b": 97,
  "rgb": "rgb(163, 114, 97)",
  "hex": "#a37261"
}, {
  "value": "rgb(161.0,109.0,87.0)",
  "brand": "Jaclyn Hill",
  "colour": "Gossip - toffee ",
  "r": 161,
  "g": 109,
  "b": 87,
  "rgb": "rgb(161, 109, 87)",
  "hex": "#a16d57"
}, {
  "value": "rgb(201.0,141.0,149.0)",
  "brand": "Jaclyn Hill",
  "colour": "Isla - rose petal",
  "r": 201,
  "g": 141,
  "b": 149,
  "rgb": "rgb(201, 141, 149)",
  "hex": "#c98d95"
}, {
  "value": "rgb(159.0,110.0,105.0)",
  "brand": "Jaclyn Hill",
  "colour": "Fussy - chocolate mauve",
  "r": 159,
  "g": 110,
  "b": 105,
  "rgb": "rgb(159, 110, 105)",
  "hex": "#9f6e69"
}, {
  "value": "rgb(173.0,102.0,96.0)",
  "brand": "Jaclyn Hill",
  "colour": "Sofia - dusty rose",
  "r": 173,
  "g": 102,
  "b": 96,
  "rgb": "rgb(173, 102, 96)",
  "hex": "#ad6660"
}, {
  "value": "rgb(204.0,119.0,142.0)",
  "brand": "Jaclyn Hill",
  "colour": "Mom - berry pink",
  "r": 204,
  "g": 119,
  "b": 142,
  "rgb": "rgb(204, 119, 142)",
  "hex": "#cc778e"
}, {
  "value": "rgb(165.0,107.0,103.0)",
  "brand": "Jaclyn Hill",
  "colour": "Perfectionist - blushing terracotta",
  "r": 165,
  "g": 107,
  "b": 103,
  "rgb": "rgb(165, 107, 103)",
  "hex": "#a56b67"
}, {
  "value": "rgb(132.0,85.0,93.0)",
  "brand": "Jaclyn Hill",
  "colour": "Control Freak - smoky plum",
  "r": 132,
  "g": 85,
  "b": 93,
  "rgb": "rgb(132, 85, 93)",
  "hex": "#84555d"
}, {
  "value": "rgb(151.0,89.0,76.0)",
  "brand": "Jaclyn Hill",
  "colour": "Hot Toddy - cinnamon",
  "r": 151,
  "g": 89,
  "b": 76,
  "rgb": "rgb(151, 89, 76)",
  "hex": "#97594c"
}, {
  "value": "rgb(109.0,58.0,54.0)",
  "brand": "Jaclyn Hill",
  "colour": "Bada$$ - chocolate cherry",
  "r": 109,
  "g": 58,
  "b": 54,
  "rgb": "rgb(109, 58, 54)",
  "hex": "#6d3a36"
}, {
  "value": "rgb(101.0,63.0,54.0)",
  "brand": "Jaclyn Hill",
  "colour": "Ambition - chocolate truffle",
  "r": 101,
  "g": 63,
  "b": 54,
  "rgb": "rgb(101, 63, 54)",
  "hex": "#653f36"
}, {
  "value": "rgb(167.0,0.0,52.0)",
  "brand": "Lakme India",
  "colour": "Red Extreme",
  "r": 167,
  "g": 0,
  "b": 52,
  "rgb": "rgb(167, 0, 52)",
  "hex": "#a70034"
}, {
  "value": "rgb(186.0,27.0,75.0)",
  "brand": "Lakme India",
  "colour": "Sinful Cherry",
  "r": 186,
  "g": 27,
  "b": 75,
  "rgb": "rgb(186, 27, 75)",
  "hex": "#ba1b4b"
}, {
  "value": "rgb(190.0,140.0,133.0)",
  "brand": "Lakme India",
  "colour": "Petal Pink",
  "r": 190,
  "g": 140,
  "b": 133,
  "rgb": "rgb(190, 140, 133)",
  "hex": "#be8c85"
}, {
  "value": "rgb(198.0,79.0,104.0)",
  "brand": "Lakme India",
  "colour": "Rose Pink",
  "r": 198,
  "g": 79,
  "b": 104,
  "rgb": "rgb(198, 79, 104)",
  "hex": "#c64f68"
}, {
  "value": "rgb(185.0,68.0,88.0)",
  "brand": "Lakme India",
  "colour": "Rouge Splash",
  "r": 185,
  "g": 68,
  "b": 88,
  "rgb": "rgb(185, 68, 88)",
  "hex": "#b94458"
}, {
  "value": "rgb(167.0,0.0,83.0)",
  "brand": "Lakme India",
  "colour": "Berry Boost",
  "r": 167,
  "g": 0,
  "b": 83,
  "rgb": "rgb(167, 0, 83)",
  "hex": "#a70053"
}, {
  "value": "rgb(192.0,63.0,122.0)",
  "brand": "Lakme India",
  "colour": "Orchid Pink",
  "r": 192,
  "g": 63,
  "b": 122,
  "rgb": "rgb(192, 63, 122)",
  "hex": "#c03f7a"
}, {
  "value": "rgb(127.0,3.0,75.0)",
  "brand": "Lakme India",
  "colour": "Delicious Plum",
  "r": 127,
  "g": 3,
  "b": 75,
  "rgb": "rgb(127, 3, 75)",
  "hex": "#7f034b"
}, {
  "value": "rgb(187.0,136.0,124.0)",
  "brand": "Lakme India",
  "colour": "Brunch Nude",
  "r": 187,
  "g": 136,
  "b": 124,
  "rgb": "rgb(187, 136, 124)",
  "hex": "#bb887c"
}, {
  "value": "rgb(163.0,108.0,100.0)",
  "brand": "Lakme India",
  "colour": "Chocolate Brownie",
  "r": 163,
  "g": 108,
  "b": 100,
  "rgb": "rgb(163, 108, 100)",
  "hex": "#a36c64"
}, {
  "value": "rgb(169.0,71.0,80.0)",
  "brand": "Lakme India",
  "colour": "Royal Rush",
  "r": 169,
  "g": 71,
  "b": 80,
  "rgb": "rgb(169, 71, 80)",
  "hex": "#a94750"
}, {
  "value": "rgb(205.0,76.0,43.0)",
  "brand": "Lakme India",
  "colour": "Orange County",
  "r": 205,
  "g": 76,
  "b": 43,
  "rgb": "rgb(205, 76, 43)",
  "hex": "#cd4c2b"
}, {
  "value": "rgb(228.0,64.0,38.0)",
  "brand": "Lakme India",
  "colour": "Crazy Tangerine",
  "r": 228,
  "g": 64,
  "b": 38,
  "rgb": "rgb(228, 64, 38)",
  "hex": "#e44026"
}, {
  "value": "rgb(94.0,41.0,54.0)",
  "brand": "Lakme India",
  "colour": "Wine N Dine",
  "r": 94,
  "g": 41,
  "b": 54,
  "rgb": "rgb(94, 41, 54)",
  "hex": "#5e2936"
}, {
  "value": "rgb(145.0,81.0,87.0)",
  "brand": "Lakme India",
  "colour": "Vintage Pink",
  "r": 145,
  "g": 81,
  "b": 87,
  "rgb": "rgb(145, 81, 87)",
  "hex": "#915157"
}, {
  "value": "rgb(156.0,49.0,107.0)",
  "brand": "Lakme India",
  "colour": "Mulberry Feast",
  "r": 156,
  "g": 49,
  "b": 107,
  "rgb": "rgb(156, 49, 107)",
  "hex": "#9c316b"
}, {
  "value": "rgb(146.0,37.0,42.0)",
  "brand": "Lakme India",
  "colour": "Red Smoke",
  "r": 146,
  "g": 37,
  "b": 42,
  "rgb": "rgb(146, 37, 42)",
  "hex": "#92252a"
}, {
  "value": "rgb(151.0,109.0,107.0)",
  "brand": "Lakme India",
  "colour": "Mild Mauve",
  "r": 151,
  "g": 109,
  "b": 107,
  "rgb": "rgb(151, 109, 107)",
  "hex": "#976d6b"
}, {
  "value": "rgb(209.0,102.0,83.0)",
  "brand": "Lakme India",
  "colour": "Peach Rose",
  "r": 209,
  "g": 102,
  "b": 83,
  "rgb": "rgb(209, 102, 83)",
  "hex": "#d16653"
}, {
  "value": "rgb(174.0,31.0,37.0)",
  "brand": "Lakme India",
  "colour": "Firestarter Red",
  "r": 174,
  "g": 31,
  "b": 37,
  "rgb": "rgb(174, 31, 37)",
  "hex": "#ae1f25"
}, {
  "value": "rgb(141.0,81.0,71.0)",
  "brand": "Lakme India",
  "colour": "Natural Nude",
  "r": 141,
  "g": 81,
  "b": 71,
  "rgb": "rgb(141, 81, 71)",
  "hex": "#8d5147"
}, {
  "value": "rgb(150.0,53.0,69.0)",
  "brand": "Lakme India",
  "colour": "Pink Silk",
  "r": 150,
  "g": 53,
  "b": 69,
  "rgb": "rgb(150, 53, 69)",
  "hex": "#963545"
}, {
  "value": "rgb(147.0,55.0,44.0)",
  "brand": "Lakme India",
  "colour": "Nude Hit",
  "r": 147,
  "g": 55,
  "b": 44,
  "rgb": "rgb(147, 55, 44)",
  "hex": "#93372c"
}, {
  "value": "rgb(154.0,62.0,77.0)",
  "brand": "Lakme India",
  "colour": "Rose Love",
  "r": 154,
  "g": 62,
  "b": 77,
  "rgb": "rgb(154, 62, 77)",
  "hex": "#9a3e4d"
}, {
  "value": "rgb(86.0,38.0,23.0)",
  "brand": "Lakme India",
  "colour": "Cocoa Butter",
  "r": 86,
  "g": 38,
  "b": 23,
  "rgb": "rgb(86, 38, 23)",
  "hex": "#562617"
}, {
  "value": "rgb(130.0,49.0,28.0)",
  "brand": "Lakme India",
  "colour": "Crushed Caramel",
  "r": 130,
  "g": 49,
  "b": 28,
  "rgb": "rgb(130, 49, 28)",
  "hex": "#82311c"
}, {
  "value": "rgb(158.0,46.0,35.0)",
  "brand": "Lakme India",
  "colour": "Coral Flip",
  "r": 158,
  "g": 46,
  "b": 35,
  "rgb": "rgb(158, 46, 35)",
  "hex": "#9e2e23"
}, {
  "value": "rgb(114.0,29.0,25.0)",
  "brand": "Lakme India",
  "colour": "Red Vibe",
  "r": 114,
  "g": 29,
  "b": 25,
  "rgb": "rgb(114, 29, 25)",
  "hex": "#721d19"
}, {
  "value": "rgb(207.0,41.0,55.0)",
  "brand": "Lakme India",
  "colour": "Rhythmic Red",
  "r": 207,
  "g": 41,
  "b": 55,
  "rgb": "rgb(207, 41, 55)",
  "hex": "#cf2937"
}, {
  "value": "rgb(123.0,50.0,77.0)",
  "brand": "Lakme India",
  "colour": "Mauve Mix",
  "r": 123,
  "g": 50,
  "b": 77,
  "rgb": "rgb(123, 50, 77)",
  "hex": "#7b324d"
}, {
  "value": "rgb(180.0,31.0,105.0)",
  "brand": "Lakme India",
  "colour": "Pink Heels",
  "r": 180,
  "g": 31,
  "b": 105,
  "rgb": "rgb(180, 31, 105)",
  "hex": "#b41f69"
}, {
  "value": "rgb(179.0,31.0,80.0)",
  "brand": "Lakme India",
  "colour": "Pink Poison",
  "r": 179,
  "g": 31,
  "b": 80,
  "rgb": "rgb(179, 31, 80)",
  "hex": "#b31f50"
}, {
  "value": "rgb(144.0,61.0,69.0)",
  "brand": "Lakme India",
  "colour": "Rosy Sunday",
  "r": 144,
  "g": 61,
  "b": 69,
  "rgb": "rgb(144, 61, 69)",
  "hex": "#903d45"
}, {
  "value": "rgb(236.0,85.0,94.0)",
  "brand": "Lakme India",
  "colour": "Sorbet Tuesday",
  "r": 236,
  "g": 85,
  "b": 94,
  "rgb": "rgb(236, 85, 94)",
  "hex": "#ec555e"
}, {
  "value": "rgb(139.0,54.0,51.0)",
  "brand": "Lakme India",
  "colour": "Cherry Chic",
  "r": 139,
  "g": 54,
  "b": 51,
  "rgb": "rgb(139, 54, 51)",
  "hex": "#8b3633"
}, {
  "value": "rgb(184.0,59.0,65.0)",
  "brand": "Lakme India",
  "colour": "Roseatte Motive",
  "r": 184,
  "g": 59,
  "b": 65,
  "rgb": "rgb(184, 59, 65)",
  "hex": "#b83b41"
}, {
  "value": "rgb(238.0,82.0,69.0)",
  "brand": "Lakme India",
  "colour": "Vermilion Fired",
  "r": 238,
  "g": 82,
  "b": 69,
  "rgb": "rgb(238, 82, 69)",
  "hex": "#ee5245"
}, {
  "value": "rgb(241.0,88.0,73.0)",
  "brand": "Lakme India",
  "colour": "Saffron Gossip",
  "r": 241,
  "g": 88,
  "b": 73,
  "rgb": "rgb(241, 88, 73)",
  "hex": "#f15849"
}, {
  "value": "rgb(102.0,45.0,51.0)",
  "brand": "Lakme India",
  "colour": "Cabernet Category",
  "r": 102,
  "g": 45,
  "b": 51,
  "rgb": "rgb(102, 45, 51)",
  "hex": "#662d33"
}, {
  "value": "rgb(218.0,5.0,51.0)",
  "brand": "Lakme India",
  "colour": "Red Coat",
  "r": 218,
  "g": 5,
  "b": 51,
  "rgb": "rgb(218, 5, 51)",
  "hex": "#da0533"
}, {
  "value": "rgb(181.0,84.0,78.0)",
  "brand": "Lakme India",
  "colour": "Maple Map",
  "r": 181,
  "g": 84,
  "b": 78,
  "rgb": "rgb(181, 84, 78)",
  "hex": "#b5544e"
}, {
  "value": "rgb(200.0,107.0,81.0)",
  "brand": "Lakme India",
  "colour": "Caramel Cut",
  "r": 200,
  "g": 107,
  "b": 81,
  "rgb": "rgb(200, 107, 81)",
  "hex": "#c86b51"
}, {
  "value": "rgb(135.0,72.0,65.0)",
  "brand": "Lakme India",
  "colour": "Coffee Command",
  "r": 135,
  "g": 72,
  "b": 65,
  "rgb": "rgb(135, 72, 65)",
  "hex": "#874841"
}, {
  "value": "rgb(158.0,99.0,93.0)",
  "brand": "Lakme India",
  "colour": "Brownie Point",
  "r": 158,
  "g": 99,
  "b": 93,
  "rgb": "rgb(158, 99, 93)",
  "hex": "#9e635d"
}, {
  "value": "rgb(239.0,47.0,36.0)",
  "brand": "Lakme India",
  "colour": "Orange Edge",
  "r": 239,
  "g": 47,
  "b": 36,
  "rgb": "rgb(239, 47, 36)",
  "hex": "#ef2f24"
}, {
  "value": "rgb(232.0,44.0,95.0)",
  "brand": "Lakme India",
  "colour": "Pink Perfect",
  "r": 232,
  "g": 44,
  "b": 95,
  "rgb": "rgb(232, 44, 95)",
  "hex": "#e82c5f"
}, {
  "value": "rgb(233.0,43.0,89.0)",
  "brand": "Lakme India",
  "colour": "Rosy Mind",
  "r": 233,
  "g": 43,
  "b": 89,
  "rgb": "rgb(233, 43, 89)",
  "hex": "#e92b59"
}, {
  "value": "rgb(175.0,59.0,106.0)",
  "brand": "Lakme India",
  "colour": "Plum Pick",
  "r": 175,
  "g": 59,
  "b": 106,
  "rgb": "rgb(175, 59, 106)",
  "hex": "#af3b6a"
}, {
  "value": "rgb(222.0,43.0,49.0)",
  "brand": "Lakme India",
  "colour": "Red Letter",
  "r": 222,
  "g": 43,
  "b": 49,
  "rgb": "rgb(222, 43, 49)",
  "hex": "#de2b31"
}, {
  "value": "rgb(240.0,63.0,43.0)",
  "brand": "Lakme India",
  "colour": "Red Rebel",
  "r": 240,
  "g": 63,
  "b": 43,
  "rgb": "rgb(240, 63, 43)",
  "hex": "#f03f2b"
}, {
  "value": "rgb(253.0,86.0,149.0)",
  "brand": "RODIN olio lusso",
  "colour": "Winks",
  "r": 253,
  "g": 86,
  "b": 149,
  "rgb": "rgb(253, 86, 149)",
  "hex": "#fd5695"
}, {
  "value": "rgb(223.0,21.0,85.0)",
  "brand": "RODIN olio lusso",
  "colour": "Arancia Adore",
  "r": 223,
  "g": 21,
  "b": 85,
  "rgb": "rgb(223, 21, 85)",
  "hex": "#df1555"
}, {
  "value": "rgb(192.0,34.0,98.0)",
  "brand": "RODIN olio lusso",
  "colour": "Pinky Winky",
  "r": 192,
  "g": 34,
  "b": 98,
  "rgb": "rgb(192, 34, 98)",
  "hex": "#c02262"
}, {
  "value": "rgb(223.0,21.0,85.0)",
  "brand": "RODIN olio lusso",
  "colour": "Arancia Adore",
  "r": 223,
  "g": 21,
  "b": 85,
  "rgb": "rgb(223, 21, 85)",
  "hex": "#df1555"
}, {
  "value": "rgb(179.0,3.0,35.0)",
  "brand": "RODIN olio lusso",
  "colour": "Loving Lucy",
  "r": 179,
  "g": 3,
  "b": 35,
  "rgb": "rgb(179, 3, 35)",
  "hex": "#b30323"
}, {
  "value": "rgb(205.0,136.0,133.0)",
  "brand": "RODIN olio lusso",
  "colour": "Heavenly Hopp",
  "r": 205,
  "g": 136,
  "b": 133,
  "rgb": "rgb(205, 136, 133)",
  "hex": "#cd8885"
}, {
  "value": "rgb(164.0,74.0,105.0)",
  "brand": "RODIN olio lusso",
  "colour": "Berry Baci",
  "r": 164,
  "g": 74,
  "b": 105,
  "rgb": "rgb(164, 74, 105)",
  "hex": "#a44a69"
}, {
  "value": "rgb(239.0,88.0,146.0)",
  "brand": "RODIN olio lusso",
  "colour": "Winks",
  "r": 239,
  "g": 88,
  "b": 146,
  "rgb": "rgb(239, 88, 146)",
  "hex": "#ef5892"
}, {
  "value": "rgb(198.0,32.0,38.0)",
  "brand": "RODIN olio lusso",
  "colour": "Red Hedy",
  "r": 198,
  "g": 32,
  "b": 38,
  "rgb": "rgb(198, 32, 38)",
  "hex": "#c62026"
}, {
  "value": "rgb(140.0,36.0,106.0)",
  "brand": "RODIN olio lusso",
  "colour": "Billie on the Bike",
  "r": 140,
  "g": 36,
  "b": 106,
  "rgb": "rgb(140, 36, 106)",
  "hex": "#8c246a"
}, {
  "value": "rgb(239.0,67.0,35.0)",
  "brand": "RODIN olio lusso",
  "colour": "Tough Tomato",
  "r": 239,
  "g": 67,
  "b": 35,
  "rgb": "rgb(239, 67, 35)",
  "hex": "#ef4323"
}, {
  "value": "rgb(232.0,156.0,166.0)",
  "brand": "RODIN olio lusso",
  "colour": "So Mod",
  "r": 232,
  "g": 156,
  "b": 166,
  "rgb": "rgb(232, 156, 166)",
  "hex": "#e89ca6"
}, {
  "value": "rgb(182.0,89.0,101.0)",
  "brand": "ILIA Beauty",
  "colour": "Rosette",
  "r": 182,
  "g": 89,
  "b": 101,
  "rgb": "rgb(182, 89, 101)",
  "hex": "#b65965"
}, {
  "value": "rgb(175.0,93.0,86.0)",
  "brand": "ILIA Beauty",
  "colour": "Amberlight",
  "r": 175,
  "g": 93,
  "b": 86,
  "rgb": "rgb(175, 93, 86)",
  "hex": "#af5d56"
}, {
  "value": "rgb(179.0,76.0,89.0)",
  "brand": "ILIA Beauty",
  "colour": "Rococco",
  "r": 179,
  "g": 76,
  "b": 89,
  "rgb": "rgb(179, 76, 89)",
  "hex": "#b34c59"
}, {
  "value": "rgb(141.0,60.0,69.0)",
  "brand": "ILIA Beauty",
  "colour": "Wild Aster",
  "r": 141,
  "g": 60,
  "b": 69,
  "rgb": "rgb(141, 60, 69)",
  "hex": "#8d3c45"
}, {
  "value": "rgb(170.0,72.0,61.0)",
  "brand": "ILIA Beauty",
  "colour": "Cinnabar",
  "r": 170,
  "g": 72,
  "b": 61,
  "rgb": "rgb(170, 72, 61)",
  "hex": "#aa483d"
}, {
  "value": "rgb(209.0,50.0,57.0)",
  "brand": "ILIA Beauty",
  "colour": "Flame",
  "r": 209,
  "g": 50,
  "b": 57,
  "rgb": "rgb(209, 50, 57)",
  "hex": "#d13239"
}, {
  "value": "rgb(166.0,81.0,70.0)",
  "brand": "ILIA Beauty",
  "colour": "Marsala",
  "r": 166,
  "g": 81,
  "b": 70,
  "rgb": "rgb(166, 81, 70)",
  "hex": "#a65146"
}, {
  "value": "rgb(169.0,52.0,57.0)",
  "brand": "ILIA Beauty",
  "colour": "Grenadine",
  "r": 169,
  "g": 52,
  "b": 57,
  "rgb": "rgb(169, 52, 57)",
  "hex": "#a93439"
}, {
  "value": "rgb(171.0,0.0,79.0)",
  "brand": "ILIA Beauty",
  "colour": "Knockout",
  "r": 171,
  "g": 0,
  "b": 79,
  "rgb": "rgb(171, 0, 79)",
  "hex": "#ab004f"
}, {
  "value": "rgb(171.0,92.0,87.0)",
  "brand": "ILIA Beauty",
  "colour": "Wild Rose",
  "r": 171,
  "g": 92,
  "b": 87,
  "rgb": "rgb(171, 92, 87)",
  "hex": "#ab5c57"
}, {
  "value": "rgb(144.0,41.0,41.0)",
  "brand": "ILIA Beauty",
  "colour": "Tango",
  "r": 144,
  "g": 41,
  "b": 41,
  "rgb": "rgb(144, 41, 41)",
  "hex": "#902929"
}, {
  "value": "rgb(128.0,37.0,40.0)",
  "brand": "ILIA Beauty",
  "colour": "Rumba",
  "r": 128,
  "g": 37,
  "b": 40,
  "rgb": "rgb(128, 37, 40)",
  "hex": "#802528"
}, {
  "value": "rgb(165.0,0.0,52.0)",
  "brand": "ILIA Beauty",
  "colour": "True Red",
  "r": 165,
  "g": 0,
  "b": 52,
  "rgb": "rgb(165, 0, 52)",
  "hex": "#a50034"
}, {
  "value": "rgb(112.0,28.0,69.0)",
  "brand": "ILIA Beauty",
  "colour": "Ultra Violet",
  "r": 112,
  "g": 28,
  "b": 69,
  "rgb": "rgb(112, 28, 69)",
  "hex": "#701c45"
}, {
  "value": "rgb(127.0,48.0,53.0)",
  "brand": "ILIA Beauty",
  "colour": "Rosewood",
  "r": 127,
  "g": 48,
  "b": 53,
  "rgb": "rgb(127, 48, 53)",
  "hex": "#7f3035"
}, {
  "value": "rgb(163.0,0.0,70.0)",
  "brand": "ILIA Beauty",
  "colour": "Arabian Knights",
  "r": 163,
  "g": 0,
  "b": 70,
  "rgb": "rgb(163, 0, 70)",
  "hex": "#a30046"
}, {
  "value": "rgb(237.0,23.0,79.0)",
  "brand": "ILIA Beauty",
  "colour": "Crimson & Clover",
  "r": 237,
  "g": 23,
  "b": 79,
  "rgb": "rgb(237, 23, 79)",
  "hex": "#ed174f"
}, {
  "value": "rgb(246.0,160.0,165.0)",
  "brand": "ILIA Beauty",
  "colour": "Hold Me Now",
  "r": 246,
  "g": 160,
  "b": 165,
  "rgb": "rgb(246, 160, 165)",
  "hex": "#f6a0a5"
}, {
  "value": "rgb(211.0,18.0,69.0)",
  "brand": "ILIA Beauty",
  "colour": "Bang Bang",
  "r": 211,
  "g": 18,
  "b": 69,
  "rgb": "rgb(211, 18, 69)",
  "hex": "#d31245"
}, {
  "value": "rgb(235.0,104.0,82.0)",
  "brand": "ILIA Beauty",
  "colour": "In Paradise",
  "r": 235,
  "g": 104,
  "b": 82,
  "rgb": "rgb(235, 104, 82)",
  "hex": "#eb6852"
}, {
  "value": "rgb(243.0,119.0,111.0)",
  "brand": "ILIA Beauty",
  "colour": "Shell Shock",
  "r": 243,
  "g": 119,
  "b": 111,
  "rgb": "rgb(243, 119, 111)",
  "hex": "#f3776f"
}, {
  "value": "rgb(203.0,126.0,128.0)",
  "brand": "ILIA Beauty",
  "colour": "Blossom Lady",
  "r": 203,
  "g": 126,
  "b": 128,
  "rgb": "rgb(203, 126, 128)",
  "hex": "#cb7e80"
}, {
  "value": "rgb(147.0,31.0,89.0)",
  "brand": "ILIA Beauty",
  "colour": "Jump",
  "r": 147,
  "g": 31,
  "b": 89,
  "rgb": "rgb(147, 31, 89)",
  "hex": "#931f59"
}, {
  "value": "rgb(207.0,156.0,133.0)",
  "brand": "ILIA Beauty",
  "colour": "Nobody's Baby",
  "r": 207,
  "g": 156,
  "b": 133,
  "rgb": "rgb(207, 156, 133)",
  "hex": "#cf9c85"
}, {
  "value": "rgb(166.0,113.0,99.0)",
  "brand": "ILIA Beauty",
  "colour": "These Days",
  "r": 166,
  "g": 113,
  "b": 99,
  "rgb": "rgb(166, 113, 99)",
  "hex": "#a67163"
}, {
  "value": "rgb(151.0,0.0,72.0)",
  "brand": "ILIA Beauty",
  "colour": "Pink Moon",
  "r": 151,
  "g": 0,
  "b": 72,
  "rgb": "rgb(151, 0, 72)",
  "hex": "#970048"
}, {
  "value": "rgb(221.0,121.0,117.0)",
  "brand": "ILIA Beauty",
  "colour": "O Baby",
  "r": 221,
  "g": 121,
  "b": 117,
  "rgb": "rgb(221, 121, 117)",
  "hex": "#dd7975"
}, {
  "value": "rgb(134.0,38.0,51.0)",
  "brand": "ILIA Beauty",
  "colour": "Europa",
  "r": 134,
  "g": 38,
  "b": 51,
  "rgb": "rgb(134, 38, 51)",
  "hex": "#862633"
}, {
  "value": "rgb(182.0,108.0,118.0)",
  "brand": "ILIA Beauty",
  "colour": "Forever",
  "r": 182,
  "g": 108,
  "b": 118,
  "rgb": "rgb(182, 108, 118)",
  "hex": "#b66c76"
}, {
  "value": "rgb(207.0,111.0,119.0)",
  "brand": "ILIA Beauty",
  "colour": "Little Sister",
  "r": 207,
  "g": 111,
  "b": 119,
  "rgb": "rgb(207, 111, 119)",
  "hex": "#cf6f77"
}, {
  "value": "rgb(138.0,77.0,76.0)",
  "brand": "Giorgio Armani",
  "colour": "501 - Milano",
  "r": 138,
  "g": 77,
  "b": 76,
  "rgb": "rgb(138, 77, 76)",
  "hex": "#8a4d4c"
}, {
  "value": "rgb(178.0,45.0,102.0)",
  "brand": "Giorgio Armani",
  "colour": "506 - Maharajah",
  "r": 178,
  "g": 45,
  "b": 102,
  "rgb": "rgb(178, 45, 102)",
  "hex": "#b22d66"
}, {
  "value": "rgb(187.0,114.0,108.0)",
  "brand": "Giorgio Armani",
  "colour": "500 - Fatale",
  "r": 187,
  "g": 114,
  "b": 108,
  "rgb": "rgb(187, 114, 108)",
  "hex": "#bb726c"
}, {
  "value": "rgb(87.0,33.0,61.0)",
  "brand": "Giorgio Armani",
  "colour": "600 - Attitude",
  "r": 87,
  "g": 33,
  "b": 61,
  "rgb": "rgb(87, 33, 61)",
  "hex": "#57213d"
}, {
  "value": "rgb(180.0,93.0,96.0)",
  "brand": "Giorgio Armani",
  "colour": "503 - Pastel Glow",
  "r": 180,
  "g": 93,
  "b": 96,
  "rgb": "rgb(180, 93, 96)",
  "hex": "#b45d60"
}, {
  "value": "rgb(194.0,21.0,21.0)",
  "brand": "Giorgio Armani",
  "colour": "401 - Red Fire",
  "r": 194,
  "g": 21,
  "b": 21,
  "rgb": "rgb(194, 21, 21)",
  "hex": "#c21515"
}, {
  "value": "rgb(150.0,85.0,105.0)",
  "brand": "Giorgio Armani",
  "colour": "502 - Kimono",
  "r": 150,
  "g": 85,
  "b": 105,
  "rgb": "rgb(150, 85, 105)",
  "hex": "#965569"
}, {
  "value": "rgb(131.0,81.0,72.0)",
  "brand": "Giorgio Armani",
  "colour": "103 - DOWNTOWN",
  "r": 131,
  "g": 81,
  "b": 72,
  "rgb": "rgb(131, 81, 72)",
  "hex": "#835148"
}, {
  "value": "rgb(101.0,53.0,44.0)",
  "brand": "Giorgio Armani",
  "colour": "200 - Diva",
  "r": 101,
  "g": 53,
  "b": 44,
  "rgb": "rgb(101, 53, 44)",
  "hex": "#65352c"
}, {
  "value": "rgb(139.0,35.0,39.0)",
  "brand": "Giorgio Armani",
  "colour": "400 - Four Hundred",
  "r": 139,
  "g": 35,
  "b": 39,
  "rgb": "rgb(139, 35, 39)",
  "hex": "#8b2327"
}, {
  "value": "rgb(201.0,27.0,59.0)",
  "brand": "Giorgio Armani",
  "colour": "404 - STROKE",
  "r": 201,
  "g": 27,
  "b": 59,
  "rgb": "rgb(201, 27, 59)",
  "hex": "#c91b3b"
}, {
  "value": "rgb(194.0,31.0,73.0)",
  "brand": "Giorgio Armani",
  "colour": "505 - Crescendo",
  "r": 194,
  "g": 31,
  "b": 73,
  "rgb": "rgb(194, 31, 73)",
  "hex": "#c21f49"
}, {
  "value": "rgb(118.0,46.0,55.0)",
  "brand": "Giorgio Armani",
  "colour": "201 - Nightberry",
  "r": 118,
  "g": 46,
  "b": 55,
  "rgb": "rgb(118, 46, 55)",
  "hex": "#762e37"
}, {
  "value": "rgb(183.0,106.0,102.0)",
  "brand": "Giorgio Armani",
  "colour": "102 - Androgino",
  "r": 183,
  "g": 106,
  "b": 102,
  "rgb": "rgb(183, 106, 102)",
  "hex": "#b76a66"
}, {
  "value": "rgb(168.0,105.0,90.0)",
  "brand": "Giorgio Armani",
  "colour": "101 - Scene",
  "r": 168,
  "g": 105,
  "b": 90,
  "rgb": "rgb(168, 105, 90)",
  "hex": "#a8695a"
}, {
  "value": "rgb(154.0,76.0,78.0)",
  "brand": "Giorgio Armani",
  "colour": "100 Smile",
  "r": 154,
  "g": 76,
  "b": 78,
  "rgb": "rgb(154, 76, 78)",
  "hex": "#9a4c4e"
}, {
  "value": "rgb(156.0,84.0,80.0)",
  "brand": "Giorgio Armani",
  "colour": "101 Nuda",
  "r": 156,
  "g": 84,
  "b": 80,
  "rgb": "rgb(156, 84, 80)",
  "hex": "#9c5450"
}, {
  "value": "rgb(128.0,75.0,74.0)",
  "brand": "Giorgio Armani",
  "colour": "200 Silenzio",
  "r": 128,
  "g": 75,
  "b": 74,
  "rgb": "rgb(128, 75, 74)",
  "hex": "#804b4a"
}, {
  "value": "rgb(156.0,49.0,39.0)",
  "brand": "Giorgio Armani",
  "colour": "201 Scarlatto",
  "r": 156,
  "g": 49,
  "b": 39,
  "rgb": "rgb(156, 49, 39)",
  "hex": "#9c3127"
}, {
  "value": "rgb(161.0,39.0,32.0)",
  "brand": "Giorgio Armani",
  "colour": "300 Play",
  "r": 161,
  "g": 39,
  "b": 32,
  "rgb": "rgb(161, 39, 32)",
  "hex": "#a12720"
}, {
  "value": "rgb(196.0,71.0,106.0)",
  "brand": "Giorgio Armani",
  "colour": "501 Eccentrico",
  "r": 196,
  "g": 71,
  "b": 106,
  "rgb": "rgb(196, 71, 106)",
  "hex": "#c4476a"
}, {
  "value": "rgb(151.0,28.0,65.0)",
  "brand": "Giorgio Armani",
  "colour": "502 Drama",
  "r": 151,
  "g": 28,
  "b": 65,
  "rgb": "rgb(151, 28, 65)",
  "hex": "#971c41"
}, {
  "value": "rgb(163.0,90.0,102.0)",
  "brand": "Giorgio Armani",
  "colour": "503 Fatale",
  "r": 163,
  "g": 90,
  "b": 102,
  "rgb": "rgb(163, 90, 102)",
  "hex": "#a35a66"
}, {
  "value": "rgb(136.0,61.0,66.0)",
  "brand": "Giorgio Armani",
  "colour": "504 Flirt",
  "r": 136,
  "g": 61,
  "b": 66,
  "rgb": "rgb(136, 61, 66)",
  "hex": "#883d42"
}, {
  "value": "rgb(152.0,63.0,92.0)",
  "brand": "Giorgio Armani",
  "colour": "600 Gar??onne",
  "r": 152,
  "g": 63,
  "b": 92,
  "rgb": "rgb(152, 63, 92)",
  "hex": "#983f5c"
}, {
  "value": "rgb(164.0,89.0,82.0)",
  "brand": "Giorgio Armani",
  "colour": "202 - Milano",
  "r": 164,
  "g": 89,
  "b": 82,
  "rgb": "rgb(164, 89, 82)",
  "hex": "#a45952"
}, {
  "value": "rgb(194.0,4.0,8.0)",
  "brand": "Giorgio Armani",
  "colour": "301 - Gio",
  "r": 194,
  "g": 4,
  "b": 8,
  "rgb": "rgb(194, 4, 8)",
  "hex": "#c20408"
}, {
  "value": "rgb(238.0,103.0,96.0)",
  "brand": "Giorgio Armani",
  "colour": "303 - Dragee",
  "r": 238,
  "g": 103,
  "b": 96,
  "rgb": "rgb(238, 103, 96)",
  "hex": "#ee6760"
}, {
  "value": "rgb(213.0,72.0,73.0)",
  "brand": "Giorgio Armani",
  "colour": "304 - Heat",
  "r": 213,
  "g": 72,
  "b": 73,
  "rgb": "rgb(213, 72, 73)",
  "hex": "#d54849"
}, {
  "value": "rgb(192.0,71.0,73.0)",
  "brand": "Giorgio Armani",
  "colour": "305 - Brick",
  "r": 192,
  "g": 71,
  "b": 73,
  "rgb": "rgb(192, 71, 73)",
  "hex": "#c04749"
}, {
  "value": "rgb(148.0,4.0,4.0)",
  "brand": "Giorgio Armani",
  "colour": "400 - Four hundred",
  "r": 148,
  "g": 4,
  "b": 4,
  "rgb": "rgb(148, 4, 4)",
  "hex": "#940404"
}, {
  "value": "rgb(139.0,4.0,4.0)",
  "brand": "Giorgio Armani",
  "colour": "402 - Teatro",
  "r": 139,
  "g": 4,
  "b": 4,
  "rgb": "rgb(139, 4, 4)",
  "hex": "#8b0404"
}, {
  "value": "rgb(252.0,41.0,77.0)",
  "brand": "Giorgio Armani",
  "colour": "500 - Eccentrico",
  "r": 252,
  "g": 41,
  "b": 77,
  "rgb": "rgb(252, 41, 77)",
  "hex": "#fc294d"
}, {
  "value": "rgb(210.0,43.0,64.0)",
  "brand": "Giorgio Armani",
  "colour": "501 - Peony",
  "r": 210,
  "g": 43,
  "b": 64,
  "rgb": "rgb(210, 43, 64)",
  "hex": "#d22b40"
}, {
  "value": "rgb(158.0,25.0,56.0)",
  "brand": "Giorgio Armani",
  "colour": "502 - Scarlatto",
  "r": 158,
  "g": 25,
  "b": 56,
  "rgb": "rgb(158, 25, 56)",
  "hex": "#9e1938"
}, {
  "value": "rgb(184.0,75.0,85.0)",
  "brand": "Giorgio Armani",
  "colour": "508 - Daybreak",
  "r": 184,
  "g": 75,
  "b": 85,
  "rgb": "rgb(184, 75, 85)",
  "hex": "#b84b55"
}, {
  "value": "rgb(144.0,33.0,52.0)",
  "brand": "Giorgio Armani",
  "colour": "510 - Dolci",
  "r": 144,
  "g": 33,
  "b": 52,
  "rgb": "rgb(144, 33, 52)",
  "hex": "#902134"
}, {
  "value": "rgb(182.0,59.0,80.0)",
  "brand": "Giorgio Armani",
  "colour": "509 - Boudoir",
  "r": 182,
  "g": 59,
  "b": 80,
  "rgb": "rgb(182, 59, 80)",
  "hex": "#b63b50"
}, {
  "value": "rgb(120.0,10.0,10.0)",
  "brand": "Giorgio Armani",
  "colour": "401 - Hot",
  "r": 120,
  "g": 10,
  "b": 10,
  "rgb": "rgb(120, 10, 10)",
  "hex": "#780a0a"
}, {
  "value": "rgb(245.0,111.0,121.0)",
  "brand": "Giorgio Armani",
  "colour": "504 - Flesh",
  "r": 245,
  "g": 111,
  "b": 121,
  "rgb": "rgb(245, 111, 121)",
  "hex": "#f56f79"
}, {
  "value": "rgb(197.0,14.0,46.0)",
  "brand": "Giorgio Armani",
  "colour": "503 - Diva",
  "r": 197,
  "g": 14,
  "b": 46,
  "rgb": "rgb(197, 14, 46)",
  "hex": "#c50e2e"
}, {
  "value": "rgb(162.0,30.0,30.0)",
  "brand": "Giorgio Armani",
  "colour": "403 Scarlatto Excess - Poppy Red",
  "r": 162,
  "g": 30,
  "b": 30,
  "rgb": "rgb(162, 30, 30)",
  "hex": "#a21e1e"
}, {
  "value": "rgb(167.0,21.0,57.0)",
  "brand": "Giorgio Armani",
  "colour": "404 Red Excess - Garnet Red",
  "r": 167,
  "g": 21,
  "b": 57,
  "rgb": "rgb(167, 21, 57)",
  "hex": "#a71539"
}, {
  "value": "rgb(187.0,151.0,135.0)",
  "brand": "Giorgio Armani",
  "colour": "104 Nude Excess - Sand Beige",
  "r": 187,
  "g": 151,
  "b": 135,
  "rgb": "rgb(187, 151, 135)",
  "hex": "#bb9787"
}, {
  "value": "rgb(174.0,111.0,104.0)",
  "brand": "Giorgio Armani",
  "colour": "203 Leather Excess - Pink Chocolate",
  "r": 174,
  "g": 111,
  "b": 104,
  "rgb": "rgb(174, 111, 104)",
  "hex": "#ae6f68"
}, {
  "value": "rgb(116.0,27.0,45.0)",
  "brand": "BITE Beauty",
  "colour": "Beetroot",
  "r": 116,
  "g": 27,
  "b": 45,
  "rgb": "rgb(116, 27, 45)",
  "hex": "#741b2d"
}, {
  "value": "rgb(60.0,30.0,42.0)",
  "brand": "BITE Beauty",
  "colour": "Black Truffle",
  "r": 60,
  "g": 30,
  "b": 42,
  "rgb": "rgb(60, 30, 42)",
  "hex": "#3c1e2a"
}, {
  "value": "rgb(187.0,129.0,128.0)",
  "brand": "BITE Beauty",
  "colour": "Cava",
  "r": 187,
  "g": 129,
  "b": 128,
  "rgb": "rgb(187, 129, 128)",
  "hex": "#bb8180"
}, {
  "value": "rgb(212.0,50.0,39.0)",
  "brand": "BITE Beauty",
  "colour": "Cayenne",
  "r": 212,
  "g": 50,
  "b": 39,
  "rgb": "rgb(212, 50, 39)",
  "hex": "#d43227"
}, {
  "value": "rgb(149.0,70.0,65.0)",
  "brand": "BITE Beauty",
  "colour": "Chai",
  "r": 149,
  "g": 70,
  "b": 65,
  "rgb": "rgb(149, 70, 65)",
  "hex": "#954641"
}, {
  "value": "rgb(241.0,99.0,149.0)",
  "brand": "BITE Beauty",
  "colour": "Cotton Candy",
  "r": 241,
  "g": 99,
  "b": 149,
  "rgb": "rgb(241, 99, 149)",
  "hex": "#f16395"
}, {
  "value": "rgb(206.0,72.0,125.0)",
  "brand": "BITE Beauty",
  "colour": "Dragonfruit",
  "r": 206,
  "g": 72,
  "b": 125,
  "rgb": "rgb(206, 72, 125)",
  "hex": "#ce487d"
}, {
  "value": "rgb(154.0,59.0,103.0)",
  "brand": "BITE Beauty",
  "colour": "Eggplant",
  "r": 154,
  "g": 59,
  "b": 103,
  "rgb": "rgb(154, 59, 103)",
  "hex": "#9a3b67"
}, {
  "value": "rgb(208.0,98.0,111.0)",
  "brand": "BITE Beauty",
  "colour": "Fig",
  "r": 208,
  "g": 98,
  "b": 111,
  "rgb": "rgb(208, 98, 111)",
  "hex": "#d0626f"
}, {
  "value": "rgb(181.0,35.0,35.0)",
  "brand": "BITE Beauty",
  "colour": "Gazpacho",
  "r": 181,
  "g": 35,
  "b": 35,
  "rgb": "rgb(181, 35, 35)",
  "hex": "#b52323"
}, {
  "value": "rgb(220.0,95.0,129.0)",
  "brand": "BITE Beauty",
  "colour": "Gin Fizz",
  "r": 220,
  "g": 95,
  "b": 129,
  "rgb": "rgb(220, 95, 129)",
  "hex": "#dc5f81"
}, {
  "value": "rgb(234.0,102.0,90.0)",
  "brand": "BITE Beauty",
  "colour": "Gingersnap",
  "r": 234,
  "g": 102,
  "b": 90,
  "rgb": "rgb(234, 102, 90)",
  "hex": "#ea665a"
}, {
  "value": "rgb(188.0,127.0,109.0)",
  "brand": "BITE Beauty",
  "colour": "Honeycomb",
  "r": 188,
  "g": 127,
  "b": 109,
  "rgb": "rgb(188, 127, 109)",
  "hex": "#bc7f6d"
}, {
  "value": "rgb(89.0,24.0,58.0)",
  "brand": "BITE Beauty",
  "colour": "Jam",
  "r": 89,
  "g": 24,
  "b": 58,
  "rgb": "rgb(89, 24, 58)",
  "hex": "#59183a"
}, {
  "value": "rgb(36.0,52.0,52.0)",
  "brand": "BITE Beauty",
  "colour": "Kale",
  "r": 36,
  "g": 52,
  "b": 52,
  "rgb": "rgb(36, 52, 52)",
  "hex": "#243434"
}, {
  "value": "rgb(250.0,79.0,131.0)",
  "brand": "BITE Beauty",
  "colour": "Kimchi",
  "r": 250,
  "g": 79,
  "b": 131,
  "rgb": "rgb(250, 79, 131)",
  "hex": "#fa4f83"
}, {
  "value": "rgb(87.0,31.0,30.0)",
  "brand": "BITE Beauty",
  "colour": "Liquorice",
  "r": 87,
  "g": 31,
  "b": 30,
  "rgb": "rgb(87, 31, 30)",
  "hex": "#571f1e"
}, {
  "value": "rgb(162.0,55.0,49.0)",
  "brand": "BITE Beauty",
  "colour": "Maple",
  "r": 162,
  "g": 55,
  "b": 49,
  "rgb": "rgb(162, 55, 49)",
  "hex": "#a23731"
}, {
  "value": "rgb(206.0,132.0,121.0)",
  "brand": "BITE Beauty",
  "colour": "Meringue",
  "r": 206,
  "g": 132,
  "b": 121,
  "rgb": "rgb(206, 132, 121)",
  "hex": "#ce8479"
}, {
  "value": "rgb(134.0,70.0,68.0)",
  "brand": "BITE Beauty",
  "colour": "Molasses",
  "r": 134,
  "g": 70,
  "b": 68,
  "rgb": "rgb(134, 70, 68)",
  "hex": "#864644"
}, {
  "value": "rgb(101.0,37.0,35.0)",
  "brand": "BITE Beauty",
  "colour": "Nori",
  "r": 101,
  "g": 37,
  "b": 35,
  "rgb": "rgb(101, 37, 35)",
  "hex": "#652523"
}, {
  "value": "rgb(178.0,90.0,88.0)",
  "brand": "BITE Beauty",
  "colour": "Pepper",
  "r": 178,
  "g": 90,
  "b": 88,
  "rgb": "rgb(178, 90, 88)",
  "hex": "#b25a58"
}, {
  "value": "rgb(203.0,50.0,36.0)",
  "brand": "BITE Beauty",
  "colour": "Persimmon",
  "r": 203,
  "g": 50,
  "b": 36,
  "rgb": "rgb(203, 50, 36)",
  "hex": "#cb3224"
}, {
  "value": "rgb(252.0,78.0,77.0)",
  "brand": "BITE Beauty",
  "colour": "Pickled Ginger",
  "r": 252,
  "g": 78,
  "b": 77,
  "rgb": "rgb(252, 78, 77)",
  "hex": "#fc4e4d"
}, {
  "value": "rgb(185.0,41.0,76.0)",
  "brand": "BITE Beauty",
  "colour": "Radish",
  "r": 185,
  "g": 41,
  "b": 76,
  "rgb": "rgb(185, 41, 76)",
  "hex": "#b9294c"
}, {
  "value": "rgb(146.0,66.0,69.0)",
  "brand": "BITE Beauty",
  "colour": "Rhubarb",
  "r": 146,
  "g": 66,
  "b": 69,
  "rgb": "rgb(146, 66, 69)",
  "hex": "#924245"
}, {
  "value": "rgb(177.0,96.0,95.0)",
  "brand": "BITE Beauty",
  "colour": "Sake",
  "r": 177,
  "g": 96,
  "b": 95,
  "rgb": "rgb(177, 96, 95)",
  "hex": "#b1605f"
}, {
  "value": "rgb(216.0,64.0,102.0)",
  "brand": "BITE Beauty",
  "colour": "Sangria",
  "r": 216,
  "g": 64,
  "b": 102,
  "rgb": "rgb(216, 64, 102)",
  "hex": "#d84066"
}, {
  "value": "rgb(205.0,137.0,148.0)",
  "brand": "BITE Beauty",
  "colour": "Souffl??",
  "r": 205,
  "g": 137,
  "b": 148,
  "rgb": "rgb(205, 137, 148)",
  "hex": "#cd8994"
}, {
  "value": "rgb(161.0,26.0,33.0)",
  "brand": "BITE Beauty",
  "colour": "Sour Cherry",
  "r": 161,
  "g": 26,
  "b": 33,
  "rgb": "rgb(161, 26, 33)",
  "hex": "#a11a21"
}, {
  "value": "rgb(182.0,100.0,148.0)",
  "brand": "BITE Beauty",
  "colour": "Spritzer",
  "r": 182,
  "g": 100,
  "b": 148,
  "rgb": "rgb(182, 100, 148)",
  "hex": "#b66494"
}, {
  "value": "rgb(45.0,44.0,58.0)",
  "brand": "BITE Beauty",
  "colour": "Squid Ink",
  "r": 45,
  "g": 44,
  "b": 58,
  "rgb": "rgb(45, 44, 58)",
  "hex": "#2d2c3a"
}, {
  "value": "rgb(193.0,118.0,115.0)",
  "brand": "BITE Beauty",
  "colour": "Sugarcane",
  "r": 193,
  "g": 118,
  "b": 115,
  "rgb": "rgb(193, 118, 115)",
  "hex": "#c17673"
}, {
  "value": "rgb(189.0,82.0,74.0)",
  "brand": "BITE Beauty",
  "colour": "Sweet Cream",
  "r": 189,
  "g": 82,
  "b": 74,
  "rgb": "rgb(189, 82, 74)",
  "hex": "#bd524a"
}, {
  "value": "rgb(103.0,27.0,31.0)",
  "brand": "BITE Beauty",
  "colour": "Tannin",
  "r": 103,
  "g": 27,
  "b": 31,
  "rgb": "rgb(103, 27, 31)",
  "hex": "#671b1f"
}, {
  "value": "rgb(150.0,99.0,95.0)",
  "brand": "BITE Beauty",
  "colour": "Thistle",
  "r": 150,
  "g": 99,
  "b": 95,
  "rgb": "rgb(150, 99, 95)",
  "hex": "#96635f"
}, {
  "value": "rgb(166.0,74.0,63.0)",
  "brand": "BITE Beauty",
  "colour": "Verbena",
  "r": 166,
  "g": 74,
  "b": 63,
  "rgb": "rgb(166, 74, 63)",
  "hex": "#a64a3f"
}, {
  "value": "rgb(97.0,54.0,48.0)",
  "brand": "BITE Beauty",
  "colour": "Whiskey",
  "r": 97,
  "g": 54,
  "b": 48,
  "rgb": "rgb(97, 54, 48)",
  "hex": "#613630"
}, {
  "value": "rgb(212.0,99.0,105.0)",
  "brand": "BITE Beauty",
  "colour": "Sorbet",
  "r": 212,
  "g": 99,
  "b": 105,
  "rgb": "rgb(212, 99, 105)",
  "hex": "#d46369"
}, {
  "value": "rgb(179.0,37.0,36.0)",
  "brand": "BITE Beauty",
  "colour": "Toronto",
  "r": 179,
  "g": 37,
  "b": 36,
  "rgb": "rgb(179, 37, 36)",
  "hex": "#b32524"
}, {
  "value": "rgb(201.0,30.0,64.0)",
  "brand": "BITE Beauty",
  "colour": "New York City",
  "r": 201,
  "g": 30,
  "b": 64,
  "rgb": "rgb(201, 30, 64)",
  "hex": "#c91e40"
}, {
  "value": "rgb(234.0,27.0,45.0)",
  "brand": "BITE Beauty",
  "colour": "San Francisco",
  "r": 234,
  "g": 27,
  "b": 45,
  "rgb": "rgb(234, 27, 45)",
  "hex": "#ea1b2d"
}, {
  "value": "rgb(212.0,27.0,94.0)",
  "brand": "BITE Beauty",
  "colour": "Miami",
  "r": 212,
  "g": 27,
  "b": 94,
  "rgb": "rgb(212, 27, 94)",
  "hex": "#d41b5e"
}, {
  "value": "rgb(170.0,29.0,63.0)",
  "brand": "BITE Beauty",
  "colour": "Dallas",
  "r": 170,
  "g": 29,
  "b": 63,
  "rgb": "rgb(170, 29, 63)",
  "hex": "#aa1d3f"
}, {
  "value": "rgb(103.0,28.0,48.0)",
  "brand": "BITE Beauty",
  "colour": "Chicago",
  "r": 103,
  "g": 28,
  "b": 48,
  "rgb": "rgb(103, 28, 48)",
  "hex": "#671c30"
}, {
  "value": "rgb(162.0,96.0,84.0)",
  "brand": "BITE Beauty",
  "colour": "Los Angeles",
  "r": 162,
  "g": 96,
  "b": 84,
  "rgb": "rgb(162, 96, 84)",
  "hex": "#a26054"
}, {
  "value": "rgb(208.0,83.0,89.0)",
  "brand": "BITE Beauty",
  "colour": "Atlanta",
  "r": 208,
  "g": 83,
  "b": 89,
  "rgb": "rgb(208, 83, 89)",
  "hex": "#d05359"
}, {
  "value": "rgb(192.0,30.0,87.0)",
  "brand": "BITE Beauty",
  "colour": "Strawberry Froz??",
  "r": 192,
  "g": 30,
  "b": 87,
  "rgb": "rgb(192, 30, 87)",
  "hex": "#c01e57"
}, {
  "value": "rgb(141.0,5.0,27.0)",
  "brand": "BITE Beauty",
  "colour": "Sangria Slush",
  "r": 141,
  "g": 5,
  "b": 27,
  "rgb": "rgb(141, 5, 27)",
  "hex": "#8d051b"
}, {
  "value": "rgb(205.0,43.0,41.0)",
  "brand": "BITE Beauty",
  "colour": "Orange Fizz",
  "r": 205,
  "g": 43,
  "b": 41,
  "rgb": "rgb(205, 43, 41)",
  "hex": "#cd2b29"
}, {
  "value": "rgb(156.0,55.0,87.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "1 Old Rose",
  "r": 156,
  "g": 55,
  "b": 87,
  "rgb": "rgb(156, 55, 87)",
  "hex": "#9c3757"
}, {
  "value": "rgb(173.0,95.0,119.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "2 Lavender",
  "r": 173,
  "g": 95,
  "b": 119,
  "rgb": "rgb(173, 95, 119)",
  "hex": "#ad5f77"
}, {
  "value": "rgb(221.0,95.0,109.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "3 Sweet Satin",
  "r": 221,
  "g": 95,
  "b": 109,
  "rgb": "rgb(221, 95, 109)",
  "hex": "#dd5f6d"
}, {
  "value": "rgb(216.0,65.0,100.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "4 Dahlia",
  "r": 216,
  "g": 65,
  "b": 100,
  "rgb": "rgb(216, 65, 100)",
  "hex": "#d84164"
}, {
  "value": "rgb(229.0,99.0,107.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "5 Perfect Peach",
  "r": 229,
  "g": 99,
  "b": 107,
  "rgb": "rgb(229, 99, 107)",
  "hex": "#e5636b"
}, {
  "value": "rgb(236.0,103.0,132.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "6 Rose Dragee",
  "r": 236,
  "g": 103,
  "b": 132,
  "rgb": "rgb(236, 103, 132)",
  "hex": "#ec6784"
}, {
  "value": "rgb(226.0,61.0,95.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "7 Candy Pink",
  "r": 226,
  "g": 61,
  "b": 95,
  "rgb": "rgb(226, 61, 95)",
  "hex": "#e23d5f"
}, {
  "value": "rgb(234.0,88.0,73.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "8 Sweetie Darling",
  "r": 234,
  "g": 88,
  "b": 73,
  "rgb": "rgb(234, 88, 73)",
  "hex": "#ea5849"
}, {
  "value": "rgb(226.0,73.0,103.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "9 Cute Kiss",
  "r": 226,
  "g": 73,
  "b": 103,
  "rgb": "rgb(226, 73, 103)",
  "hex": "#e24967"
}, {
  "value": "rgb(222.0,41.0,76.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "10 Sweet as Candy",
  "r": 222,
  "g": 41,
  "b": 76,
  "rgb": "rgb(222, 41, 76)",
  "hex": "#de294c"
}, {
  "value": "rgb(156.0,55.0,87.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "11 Damson Jelly",
  "r": 156,
  "g": 55,
  "b": 87,
  "rgb": "rgb(156, 55, 87)",
  "hex": "#9c3757"
}, {
  "value": "rgb(142.0,45.0,62.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "12 Grenadine",
  "r": 142,
  "g": 45,
  "b": 62,
  "rgb": "rgb(142, 45, 62)",
  "hex": "#8e2d3e"
}, {
  "value": "rgb(249.0,140.0,135.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "506 Porcelain Pink",
  "r": 249,
  "g": 140,
  "b": 135,
  "rgb": "rgb(249, 140, 135)",
  "hex": "#f98c87"
}, {
  "value": "rgb(230.0,38.0,83.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "507 Glace",
  "r": 230,
  "g": 38,
  "b": 83,
  "rgb": "rgb(230, 38, 83)",
  "hex": "#e62653"
}, {
  "value": "rgb(148.0,67.0,60.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "101 Pouty",
  "r": 148,
  "g": 67,
  "b": 60,
  "rgb": "rgb(148, 67, 60)",
  "hex": "#94433c"
}, {
  "value": "rgb(112.0,32.0,26.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "102 Sweet Song",
  "r": 112,
  "g": 32,
  "b": 26,
  "rgb": "rgb(112, 32, 26)",
  "hex": "#70201a"
}, {
  "value": "rgb(147.0,0.0,14.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "103 Legend",
  "r": 147,
  "g": 0,
  "b": 14,
  "rgb": "rgb(147, 0, 14)",
  "hex": "#93000e"
}, {
  "value": "rgb(87.0,4.0,6.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "104 Decadent",
  "r": 87,
  "g": 4,
  "b": 6,
  "rgb": "rgb(87, 4, 6)",
  "hex": "#570406"
}, {
  "value": "rgb(181.0,54.0,68.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "105 Flower Power",
  "r": 181,
  "g": 54,
  "b": 68,
  "rgb": "rgb(181, 54, 68)",
  "hex": "#b53644"
}, {
  "value": "rgb(167.0,13.0,31.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "106 Wild Geranium",
  "r": 167,
  "g": 13,
  "b": 31,
  "rgb": "rgb(167, 13, 31)",
  "hex": "#a70d1f"
}, {
  "value": "rgb(228.0,0.0,31.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "107 Coquelicot",
  "r": 228,
  "g": 0,
  "b": 31,
  "rgb": "rgb(228, 0, 31)",
  "hex": "#e4001f"
}, {
  "value": "rgb(188.0,2.0,47.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "108 Entrapment",
  "r": 188,
  "g": 2,
  "b": 47,
  "rgb": "rgb(188, 2, 47)",
  "hex": "#bc022f"
}, {
  "value": "rgb(131.0,61.0,51.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "1 Bamboo",
  "r": 131,
  "g": 61,
  "b": 51,
  "rgb": "rgb(131, 61, 51)",
  "hex": "#833d33"
}, {
  "value": "rgb(157.0,73.0,47.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "2 Silk Scroll",
  "r": 157,
  "g": 73,
  "b": 47,
  "rgb": "rgb(157, 73, 47)",
  "hex": "#9d492f"
}, {
  "value": "rgb(202.0,61.0,54.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "3 Hummingbird",
  "r": 202,
  "g": 61,
  "b": 54,
  "rgb": "rgb(202, 61, 54)",
  "hex": "#ca3d36"
}, {
  "value": "rgb(142.0,51.0,48.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "4 Lotus Flower",
  "r": 142,
  "g": 51,
  "b": 48,
  "rgb": "rgb(142, 51, 48)",
  "hex": "#8e3330"
}, {
  "value": "rgb(127.0,3.0,3.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "5 Camellia",
  "r": 127,
  "g": 3,
  "b": 3,
  "rgb": "rgb(127, 3, 3)",
  "hex": "#7f0303"
}, {
  "value": "rgb(181.0,42.0,61.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "6 Passion Flower",
  "r": 181,
  "g": 42,
  "b": 61,
  "rgb": "rgb(181, 42, 61)",
  "hex": "#b52a3d"
}, {
  "value": "rgb(157.0,0.0,7.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "7 Dragon Red",
  "r": 157,
  "g": 0,
  "b": 7,
  "rgb": "rgb(157, 0, 7)",
  "hex": "#9d0007"
}, {
  "value": "rgb(145.0,39.0,51.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "9 Silk Thread",
  "r": 145,
  "g": 39,
  "b": 51,
  "rgb": "rgb(145, 39, 51)",
  "hex": "#912733"
}, {
  "value": "rgb(201.0,72.0,90.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "10 Chinoiserie",
  "r": 201,
  "g": 72,
  "b": 90,
  "rgb": "rgb(201, 72, 90)",
  "hex": "#c9485a"
}, {
  "value": "rgb(210.0,58.0,75.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "13 Peach Stone",
  "r": 210,
  "g": 58,
  "b": 75,
  "rgb": "rgb(210, 58, 75)",
  "hex": "#d23a4b"
}, {
  "value": "rgb(154.0,77.0,76.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "14 Crystal Star",
  "r": 154,
  "g": 77,
  "b": 76,
  "rgb": "rgb(154, 77, 76)",
  "hex": "#9a4d4c"
}, {
  "value": "rgb(112.0,27.0,41.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "15 Desert Rose",
  "r": 112,
  "g": 27,
  "b": 41,
  "rgb": "rgb(112, 27, 41)",
  "hex": "#701b29"
}, {
  "value": "rgb(196.0,6.0,36.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "501 Red Carpet",
  "r": 196,
  "g": 6,
  "b": 36,
  "rgb": "rgb(196, 6, 36)",
  "hex": "#c40624"
}, {
  "value": "rgb(146.0,58.0,54.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "502 Water Lily",
  "r": 146,
  "g": 58,
  "b": 54,
  "rgb": "rgb(146, 58, 54)",
  "hex": "#923a36"
}, {
  "value": "rgb(66.0,1.0,7.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "12 Pillow Book",
  "r": 66,
  "g": 1,
  "b": 7,
  "rgb": "rgb(66, 1, 7)",
  "hex": "#420107"
}, {
  "value": "rgb(94.0,23.0,21.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "11 China Doll",
  "r": 94,
  "g": 23,
  "b": 21,
  "rgb": "rgb(94, 23, 21)",
  "hex": "#5e1715"
}, {
  "value": "rgb(207.0,84.0,104.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "16 Petal Delight",
  "r": 207,
  "g": 84,
  "b": 104,
  "rgb": "rgb(207, 84, 104)",
  "hex": "#cf5468"
}, {
  "value": "rgb(239.0,44.0,81.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "17 Rose Water",
  "r": 239,
  "g": 44,
  "b": 81,
  "rgb": "rgb(239, 44, 81)",
  "hex": "#ef2c51"
}, {
  "value": "rgb(162.0,56.0,60.0)",
  "brand": "Cl?? de Peau Beaut??",
  "colour": "18 Cherry Berry",
  "r": 162,
  "g": 56,
  "b": 60,
  "rgb": "rgb(162, 56, 60)",
  "hex": "#a2383c"
}, {
  "value": "rgb(194.0,19.0,34.0)",
  "brand": "Besame",
  "colour": "1941 - Victory Red Lipstick",
  "r": 194,
  "g": 19,
  "b": 34,
  "rgb": "rgb(194, 19, 34)",
  "hex": "#c21322"
}, {
  "value": "rgb(136.0,25.0,42.0)",
  "brand": "Besame",
  "colour": "1946 - Red Velvet Lipstick",
  "r": 136,
  "g": 25,
  "b": 42,
  "rgb": "rgb(136, 25, 42)",
  "hex": "#88192a"
}, {
  "value": "rgb(186.0,90.0,101.0)",
  "brand": "Besame",
  "colour": "1969 - Dusty Rose Lipstick",
  "r": 186,
  "g": 90,
  "b": 101,
  "rgb": "rgb(186, 90, 101)",
  "hex": "#ba5a65"
}, {
  "value": "rgb(103.0,50.0,42.0)",
  "brand": "Besame",
  "colour": "1930 - Noir Red Lipstick",
  "r": 103,
  "g": 50,
  "b": 42,
  "rgb": "rgb(103, 50, 42)",
  "hex": "#67322a"
}, {
  "value": "rgb(215.0,56.0,53.0)",
  "brand": "Besame",
  "colour": "1920 - Besame Red Lipstick",
  "r": 215,
  "g": 56,
  "b": 53,
  "rgb": "rgb(215, 56, 53)",
  "hex": "#d73835"
}, {
  "value": "rgb(168.0,31.0,57.0)",
  "brand": "Besame",
  "colour": "1935 - Cherry Red Lipstick",
  "r": 168,
  "g": 31,
  "b": 57,
  "rgb": "rgb(168, 31, 57)",
  "hex": "#a81f39"
}, {
  "value": "rgb(227.0,145.0,121.0)",
  "brand": "Besame",
  "colour": "1965 - Portrait Peach Lipstick",
  "r": 227,
  "g": 145,
  "b": 121,
  "rgb": "rgb(227, 145, 121)",
  "hex": "#e39179"
}, {
  "value": "rgb(142.0,48.0,36.0)",
  "brand": "Besame",
  "colour": "1933 - Merlot Lipstick",
  "r": 142,
  "g": 48,
  "b": 36,
  "rgb": "rgb(142, 48, 36)",
  "hex": "#8e3024"
}, {
  "value": "rgb(195.0,34.0,76.0)",
  "brand": "Besame",
  "colour": "1945 - American Beauty Lipstick",
  "r": 195,
  "g": 34,
  "b": 76,
  "rgb": "rgb(195, 34, 76)",
  "hex": "#c3224c"
}, {
  "value": "rgb(160.0,79.0,62.0)",
  "brand": "Besame",
  "colour": "1970 - Chocolate Kiss Lipstick",
  "r": 160,
  "g": 79,
  "b": 62,
  "rgb": "rgb(160, 79, 62)",
  "hex": "#a04f3e"
}, {
  "value": "rgb(131.0,23.0,75.0)",
  "brand": "Besame",
  "colour": "1952 - Wild Orchid Lipstick",
  "r": 131,
  "g": 23,
  "b": 75,
  "rgb": "rgb(131, 23, 75)",
  "hex": "#83174b"
}, {
  "value": "rgb(214.0,62.0,51.0)",
  "brand": "Besame",
  "colour": "1959 - Red Hot Red Lipstick",
  "r": 214,
  "g": 62,
  "b": 51,
  "rgb": "rgb(214, 62, 51)",
  "hex": "#d63e33"
}, {
  "value": "rgb(210.0,69.0,62.0)",
  "brand": "Besame",
  "colour": "1939 - Tango Red Lipstick",
  "r": 210,
  "g": 69,
  "b": 62,
  "rgb": "rgb(210, 69, 62)",
  "hex": "#d2453e"
}, {
  "value": "rgb(248.0,151.0,162.0)",
  "brand": "Besame",
  "colour": "1963 - Portrait Pink Lipstick",
  "r": 248,
  "g": 151,
  "b": 162,
  "rgb": "rgb(248, 151, 162)",
  "hex": "#f897a2"
}, {
  "value": "rgb(220.0,90.0,54.0)",
  "brand": "Besame",
  "colour": "1931 - Carmine Lipstick",
  "r": 220,
  "g": 90,
  "b": 54,
  "rgb": "rgb(220, 90, 54)",
  "hex": "#dc5a36"
}, {
  "value": "rgb(140.0,26.0,26.0)",
  "brand": "Besame",
  "colour": "1925 - Forever Red Lipstick",
  "r": 140,
  "g": 26,
  "b": 26,
  "rgb": "rgb(140, 26, 26)",
  "hex": "#8c1a1a"
}, {
  "value": "rgb(145.0,0.0,72.0)",
  "brand": "HERA",
  "colour": "NO.088 SECRET BURGUNDY",
  "r": 145,
  "g": 0,
  "b": 72,
  "rgb": "rgb(145, 0, 72)",
  "hex": "#910048"
}, {
  "value": "rgb(126.0,45.0,64.0)",
  "brand": "HERA",
  "colour": "NO.090 WINTER BURGUNDY",
  "r": 126,
  "g": 45,
  "b": 64,
  "rgb": "rgb(126, 45, 64)",
  "hex": "#7e2d40"
}, {
  "value": "rgb(132.0,11.0,85.0)",
  "brand": "HERA",
  "colour": "NO.099 BLACK ROSE",
  "r": 132,
  "g": 11,
  "b": 85,
  "rgb": "rgb(132, 11, 85)",
  "hex": "#840b55"
}, {
  "value": "rgb(246.0,117.0,153.0)",
  "brand": "HERA",
  "colour": "NO.103 COTTON CANDY",
  "r": 246,
  "g": 117,
  "b": 153,
  "rgb": "rgb(246, 117, 153)",
  "hex": "#f67599"
}, {
  "value": "rgb(176.0,74.0,90.0)",
  "brand": "HERA",
  "colour": "NO.123 GRACE PINK",
  "r": 176,
  "g": 74,
  "b": 90,
  "rgb": "rgb(176, 74, 90)",
  "hex": "#b04a5a"
}, {
  "value": "rgb(230.0,56.0,136.0)",
  "brand": "HERA",
  "colour": "NO.143 COBALK PINK",
  "r": 230,
  "g": 56,
  "b": 136,
  "rgb": "rgb(230, 56, 136)",
  "hex": "#e63888"
}, {
  "value": "rgb(219.0,10.0,91.0)",
  "brand": "HERA",
  "colour": "NO.150 K-FUSHIA",
  "r": 219,
  "g": 10,
  "b": 91,
  "rgb": "rgb(219, 10, 91)",
  "hex": "#db0a5b"
}, {
  "value": "rgb(190.0,0.0,126.0)",
  "brand": "HERA",
  "colour": "NO.192 PUNCH FUSHIA",
  "r": 190,
  "g": 0,
  "b": 126,
  "rgb": "rgb(190, 0, 126)",
  "hex": "#be007e"
}, {
  "value": "rgb(255.0,128.0,139.0)",
  "brand": "HERA",
  "colour": "NO.107 PINK SPRING",
  "r": 255,
  "g": 128,
  "b": 139,
  "rgb": "rgb(255, 128, 139)",
  "hex": "#ff808b"
}, {
  "value": "rgb(210.0,91.0,115.0)",
  "brand": "HERA",
  "colour": "NO.110 PINK BALLOON",
  "r": 210,
  "g": 91,
  "b": 115,
  "rgb": "rgb(210, 91, 115)",
  "hex": "#d25b73"
}, {
  "value": "rgb(255.0,88.0,105.0)",
  "brand": "HERA",
  "colour": "NO.243 BIJOU ORANGE",
  "r": 255,
  "g": 88,
  "b": 105,
  "rgb": "rgb(255, 88, 105)",
  "hex": "#ff5869"
}, {
  "value": "rgb(239.0,74.0,129.0)",
  "brand": "HERA",
  "colour": "NO.147 SUPREME PINK",
  "r": 239,
  "g": 74,
  "b": 129,
  "rgb": "rgb(239, 74, 129)",
  "hex": "#ef4a81"
}, {
  "value": "rgb(248.0,72.0,94.0)",
  "brand": "HERA",
  "colour": "NO.245 CORAL FESTA",
  "r": 248,
  "g": 72,
  "b": 94,
  "rgb": "rgb(248, 72, 94)",
  "hex": "#f8485e"
}, {
  "value": "rgb(238.0,39.0,55.0)",
  "brand": "HERA",
  "colour": "NO.315 CAMELLIA ORANGE",
  "r": 238,
  "g": 39,
  "b": 55,
  "rgb": "rgb(238, 39, 55)",
  "hex": "#ee2737"
}, {
  "value": "rgb(115.0,52.0,56.0)",
  "brand": "HERA",
  "colour": "NO.298 COPER ORANGE",
  "r": 115,
  "g": 52,
  "b": 56,
  "rgb": "rgb(115, 52, 56)",
  "hex": "#733438"
}, {
  "value": "rgb(210.0,38.0,48.0)",
  "brand": "HERA",
  "colour": "NO.329 POPPY RED",
  "r": 210,
  "g": 38,
  "b": 48,
  "rgb": "rgb(210, 38, 48)",
  "hex": "#d22630"
}, {
  "value": "rgb(158.0,42.0,43.0)",
  "brand": "HERA",
  "colour": "NO.338 ONE PERFECT RED",
  "r": 158,
  "g": 42,
  "b": 43,
  "rgb": "rgb(158, 42, 43)",
  "hex": "#9e2a2b"
}, {
  "value": "rgb(165.0,0.0,52.0)",
  "brand": "HERA",
  "colour": "NO.341 AMAZING RED",
  "r": 165,
  "g": 0,
  "b": 52,
  "rgb": "rgb(165, 0, 52)",
  "hex": "#a50034"
}, {
  "value": "rgb(207.0,113.0,119.0)",
  "brand": "HERA",
  "colour": "NO.411 NUDE PINK",
  "r": 207,
  "g": 113,
  "b": 119,
  "rgb": "rgb(207, 113, 119)",
  "hex": "#cf7177"
}, {
  "value": "rgb(164.0,82.0,72.0)",
  "brand": "HERA",
  "colour": "NO.432 STUDIO BEIGE",
  "r": 164,
  "g": 82,
  "b": 72,
  "rgb": "rgb(164, 82, 72)",
  "hex": "#a45248"
}, {
  "value": "rgb(235.0,37.0,80.0)",
  "brand": "HERA",
  "colour": "175 FROZEN BERRY",
  "r": 235,
  "g": 37,
  "b": 80,
  "rgb": "rgb(235, 37, 80)",
  "hex": "#eb2550"
}, {
  "value": "rgb(149.0,29.0,53.0)",
  "brand": "HERA",
  "colour": "193 DRY PLUM",
  "r": 149,
  "g": 29,
  "b": 53,
  "rgb": "rgb(149, 29, 53)",
  "hex": "#951d35"
}, {
  "value": "rgb(208.0,33.0,66.0)",
  "brand": "HERA",
  "colour": "199 RASPBERRY SHERBET",
  "r": 208,
  "g": 33,
  "b": 66,
  "rgb": "rgb(208, 33, 66)",
  "hex": "#d02142"
}, {
  "value": "rgb(224.0,90.0,79.0)",
  "brand": "HERA",
  "colour": "244 SUGAR PEACH CREAM",
  "r": 224,
  "g": 90,
  "b": 79,
  "rgb": "rgb(224, 90, 79)",
  "hex": "#e05a4f"
}, {
  "value": "rgb(247.0,72.0,4.0)",
  "brand": "HERA",
  "colour": "278 CANDIED ORANGE",
  "r": 247,
  "g": 72,
  "b": 4,
  "rgb": "rgb(247, 72, 4)",
  "hex": "#f74804"
}, {
  "value": "rgb(247.0,51.0,44.0)",
  "brand": "HERA",
  "colour": "295 ENERGETIC GRAPEFRUIT",
  "r": 247,
  "g": 51,
  "b": 44,
  "rgb": "rgb(247, 51, 44)",
  "hex": "#f7332c"
}, {
  "value": "rgb(250.0,39.0,7.0)",
  "brand": "HERA",
  "colour": "317 DELICATE LYCHEE",
  "r": 250,
  "g": 39,
  "b": 7,
  "rgb": "rgb(250, 39, 7)",
  "hex": "#fa2707"
}, {
  "value": "rgb(221.0,19.0,33.0)",
  "brand": "HERA",
  "colour": "326 RIPE APPLE",
  "r": 221,
  "g": 19,
  "b": 33,
  "rgb": "rgb(221, 19, 33)",
  "hex": "#dd1321"
}, {
  "value": "rgb(172.0,18.0,32.0)",
  "brand": "HERA",
  "colour": "335 SHOCKING STRAWBERRY",
  "r": 172,
  "g": 18,
  "b": 32,
  "rgb": "rgb(172, 18, 32)",
  "hex": "#ac1220"
}, {
  "value": "rgb(188.0,9.0,54.0)",
  "brand": "HERA",
  "colour": "340 POMEGRANATE RED",
  "r": 188,
  "g": 9,
  "b": 54,
  "rgb": "rgb(188, 9, 54)",
  "hex": "#bc0936"
}, {
  "value": "rgb(174.0,37.0,115.0)",
  "brand": "HERA",
  "colour": "NO.43 ORCHID GARDEN",
  "r": 174,
  "g": 37,
  "b": 115,
  "rgb": "rgb(174, 37, 115)",
  "hex": "#ae2573"
}, {
  "value": "rgb(140.0,28.0,89.0)",
  "brand": "HERA",
  "colour": "NO.47 MAGIC CARPET",
  "r": 140,
  "g": 28,
  "b": 89,
  "rgb": "rgb(140, 28, 89)",
  "hex": "#8c1c59"
}, {
  "value": "rgb(165.0,52.0,91.0)",
  "brand": "HERA",
  "colour": "NO.184 DRESSY ROSA",
  "r": 165,
  "g": 52,
  "b": 91,
  "rgb": "rgb(165, 52, 91)",
  "hex": "#a5345b"
}, {
  "value": "rgb(155.0,65.0,82.0)",
  "brand": "HERA",
  "colour": "NO.033 URBAN MULBERRY",
  "r": 155,
  "g": 65,
  "b": 82,
  "rgb": "rgb(155, 65, 82)",
  "hex": "#9b4152"
}, {
  "value": "rgb(155.0,65.0,82.0)",
  "brand": "HERA",
  "colour": "NO.030 MEMORIES OF MILANO",
  "r": 155,
  "g": 65,
  "b": 82,
  "rgb": "rgb(155, 65, 82)",
  "hex": "#9b4152"
}, {
  "value": "rgb(207.0,111.0,119.0)",
  "brand": "HERA",
  "colour": "NO.102 PINK IN HEAVEN",
  "r": 207,
  "g": 111,
  "b": 119,
  "rgb": "rgb(207, 111, 119)",
  "hex": "#cf6f77"
}, {
  "value": "rgb(181.0,82.0,93.0)",
  "brand": "HERA",
  "colour": "NO.153 GENTLE WOMAN",
  "r": 181,
  "g": 82,
  "b": 93,
  "rgb": "rgb(181, 82, 93)",
  "hex": "#b5525d"
}, {
  "value": "rgb(239.0,96.0,121.0)",
  "brand": "HERA",
  "colour": "NO.112 KILLING PINK",
  "r": 239,
  "g": 96,
  "b": 121,
  "rgb": "rgb(239, 96, 121)",
  "hex": "#ef6079"
}, {
  "value": "rgb(239.0,74.0,129.0)",
  "brand": "HERA",
  "colour": "NO.145 HAVANA PINK",
  "r": 239,
  "g": 74,
  "b": 129,
  "rgb": "rgb(239, 74, 129)",
  "hex": "#ef4a81"
}, {
  "value": "rgb(240.0,78.0,152.0)",
  "brand": "HERA",
  "colour": "NO.152 UPTOWN PINK",
  "r": 240,
  "g": 78,
  "b": 152,
  "rgb": "rgb(240, 78, 152)",
  "hex": "#f04e98"
}, {
  "value": "rgb(255.0,88.0,105.0)",
  "brand": "HERA",
  "colour": "NO.205 HAWAIIAN BABY",
  "r": 255,
  "g": 88,
  "b": 105,
  "rgb": "rgb(255, 88, 105)",
  "hex": "#ff5869"
}, {
  "value": "rgb(255.0,88.0,93.0)",
  "brand": "HERA",
  "colour": "NO.230 CORAL LOVER",
  "r": 255,
  "g": 88,
  "b": 93,
  "rgb": "rgb(255, 88, 93)",
  "hex": "#ff585d"
}, {
  "value": "rgb(229.0,85.0,79.0)",
  "brand": "HERA",
  "colour": "NO.237 BURNT CORAL",
  "r": 229,
  "g": 85,
  "b": 79,
  "rgb": "rgb(229, 85, 79)",
  "hex": "#e5554f"
}, {
  "value": "rgb(197.0,65.0,73.0)",
  "brand": "HERA",
  "colour": "NO.247 STUNNING CORAL",
  "r": 197,
  "g": 65,
  "b": 73,
  "rgb": "rgb(197, 65, 73)",
  "hex": "#c54149"
}, {
  "value": "rgb(225.0,6.0,0.0)",
  "brand": "HERA",
  "colour": "NO.297 FLAME",
  "r": 225,
  "g": 6,
  "b": 0,
  "rgb": "rgb(225, 6, 0)",
  "hex": "#e10600"
}, {
  "value": "rgb(238.0,83.0,64.0)",
  "brand": "HERA",
  "colour": "NO.277 LALA ORANGE",
  "r": 238,
  "g": 83,
  "b": 64,
  "rgb": "rgb(238, 83, 64)",
  "hex": "#ee5340"
}, {
  "value": "rgb(206.0,0.0,88.0)",
  "brand": "HERA",
  "colour": "NO.327 TEMPTING CHERRY",
  "r": 206,
  "g": 0,
  "b": 88,
  "rgb": "rgb(206, 0, 88)",
  "hex": "#ce0058"
}, {
  "value": "rgb(210.0,38.0,48.0)",
  "brand": "HERA",
  "colour": "NO.298 SCARLET",
  "r": 210,
  "g": 38,
  "b": 48,
  "rgb": "rgb(210, 38, 48)",
  "hex": "#d22630"
}, {
  "value": "rgb(186.0,12.0,47.0)",
  "brand": "HERA",
  "colour": "NO.332 RED HOLIC",
  "r": 186,
  "g": 12,
  "b": 47,
  "rgb": "rgb(186, 12, 47)",
  "hex": "#ba0c2f"
}, {
  "value": "rgb(151.0,27.0,47.0)",
  "brand": "HERA",
  "colour": "NO.342 CHISTMAS RED",
  "r": 151,
  "g": 27,
  "b": 47,
  "rgb": "rgb(151, 27, 47)",
  "hex": "#971b2f"
}, {
  "value": "rgb(198.0,86.0,87.0)",
  "brand": "LUNASOL",
  "colour": "05 Mocha",
  "r": 198,
  "g": 86,
  "b": 87,
  "rgb": "rgb(198, 86, 87)",
  "hex": "#c65657"
}, {
  "value": "rgb(220.0,111.0,98.0)",
  "brand": "LUNASOL",
  "colour": "06 Camel Orange",
  "r": 220,
  "g": 111,
  "b": 98,
  "rgb": "rgb(220, 111, 98)",
  "hex": "#dc6f62"
}, {
  "value": "rgb(192.0,93.0,93.0)",
  "brand": "LUNASOL",
  "colour": "07 Bitter",
  "r": 192,
  "g": 93,
  "b": 93,
  "rgb": "rgb(192, 93, 93)",
  "hex": "#c05d5d"
}, {
  "value": "rgb(185.0,68.0,74.0)",
  "brand": "LUNASOL",
  "colour": "08 Brown Red",
  "r": 185,
  "g": 68,
  "b": 74,
  "rgb": "rgb(185, 68, 74)",
  "hex": "#b9444a"
}, {
  "value": "rgb(198.0,49.0,86.0)",
  "brand": "LUNASOL",
  "colour": "09 Deep Red",
  "r": 198,
  "g": 49,
  "b": 86,
  "rgb": "rgb(198, 49, 86)",
  "hex": "#c63156"
}, {
  "value": "rgb(235.0,115.0,127.0)",
  "brand": "LUNASOL",
  "colour": "03 Warm Pink",
  "r": 235,
  "g": 115,
  "b": 127,
  "rgb": "rgb(235, 115, 127)",
  "hex": "#eb737f"
}, {
  "value": "rgb(221.0,80.0,88.0)",
  "brand": "LUNASOL",
  "colour": "08 Soft Red Rose",
  "r": 221,
  "g": 80,
  "b": 88,
  "rgb": "rgb(221, 80, 88)",
  "hex": "#dd5058"
}, {
  "value": "rgb(234.0,73.0,91.0)",
  "brand": "LUNASOL",
  "colour": "11 Soft Red",
  "r": 234,
  "g": 73,
  "b": 91,
  "rgb": "rgb(234, 73, 91)",
  "hex": "#ea495b"
}, {
  "value": "rgb(241.0,145.0,133.0)",
  "brand": "LUNASOL",
  "colour": "24 Soft Beige Pink",
  "r": 241,
  "g": 145,
  "b": 133,
  "rgb": "rgb(241, 145, 133)",
  "hex": "#f19185"
}, {
  "value": "rgb(191.0,75.0,84.0)",
  "brand": "LUNASOL",
  "colour": "33 Soft Brown Rose",
  "r": 191,
  "g": 75,
  "b": 84,
  "rgb": "rgb(191, 75, 84)",
  "hex": "#bf4b54"
}, {
  "value": "rgb(212.0,100.0,99.0)",
  "brand": "LUNASOL",
  "colour": "34 Rose Pink",
  "r": 212,
  "g": 100,
  "b": 99,
  "rgb": "rgb(212, 100, 99)",
  "hex": "#d46463"
}, {
  "value": "rgb(194.0,99.0,93.0)",
  "brand": "LUNASOL",
  "colour": "35 Pink Beige",
  "r": 194,
  "g": 99,
  "b": 93,
  "rgb": "rgb(194, 99, 93)",
  "hex": "#c2635d"
}, {
  "value": "rgb(219.0,132.0,102.0)",
  "brand": "LUNASOL",
  "colour": "36 Soft Beige",
  "r": 219,
  "g": 132,
  "b": 102,
  "rgb": "rgb(219, 132, 102)",
  "hex": "#db8466"
}, {
  "value": "rgb(240.0,146.0,134.0)",
  "brand": "LUNASOL",
  "colour": "39 Soft Pink Beige",
  "r": 240,
  "g": 146,
  "b": 134,
  "rgb": "rgb(240, 146, 134)",
  "hex": "#f09286"
}, {
  "value": "rgb(238.0,106.0,125.0)",
  "brand": "LUNASOL",
  "colour": "41 Soft Coral Pink",
  "r": 238,
  "g": 106,
  "b": 125,
  "rgb": "rgb(238, 106, 125)",
  "hex": "#ee6a7d"
}, {
  "value": "rgb(238.0,115.0,99.0)",
  "brand": "LUNASOL",
  "colour": "42 Soft Beige Orange",
  "r": 238,
  "g": 115,
  "b": 99,
  "rgb": "rgb(238, 115, 99)",
  "hex": "#ee7363"
}, {
  "value": "rgb(236.0,103.0,103.0)",
  "brand": "LUNASOL",
  "colour": "43 Autumn Coral",
  "r": 236,
  "g": 103,
  "b": 103,
  "rgb": "rgb(236, 103, 103)",
  "hex": "#ec6767"
}, {
  "value": "rgb(222.0,96.0,86.0)",
  "brand": "LUNASOL",
  "colour": "44 Autumn Orange",
  "r": 222,
  "g": 96,
  "b": 86,
  "rgb": "rgb(222, 96, 86)",
  "hex": "#de6056"
}, {
  "value": "rgb(230.0,133.0,133.0)",
  "brand": "LUNASOL",
  "colour": "45 Cool Pink Beige",
  "r": 230,
  "g": 133,
  "b": 133,
  "rgb": "rgb(230, 133, 133)",
  "hex": "#e68585"
}, {
  "value": "rgb(200.0,78.0,82.0)",
  "brand": "LUNASOL",
  "colour": "46 Soft Brown Red",
  "r": 200,
  "g": 78,
  "b": 82,
  "rgb": "rgb(200, 78, 82)",
  "hex": "#c84e52"
}, {
  "value": "rgb(210.0,156.0,139.0)",
  "brand": "Sisley",
  "colour": "1 Sheer Nude",
  "r": 210,
  "g": 156,
  "b": 139,
  "rgb": "rgb(210, 156, 139)",
  "hex": "#d29c8b"
}, {
  "value": "rgb(232.0,177.0,180.0)",
  "brand": "Sisley",
  "colour": "2 Sheer Sorbet",
  "r": 232,
  "g": 177,
  "b": 180,
  "rgb": "rgb(232, 177, 180)",
  "hex": "#e8b1b4"
}, {
  "value": "rgb(237.0,127.0,133.0)",
  "brand": "Sisley",
  "colour": "3 Sheer Rose",
  "r": 237,
  "g": 127,
  "b": 133,
  "rgb": "rgb(237, 127, 133)",
  "hex": "#ed7f85"
}, {
  "value": "rgb(185.0,100.0,102.0)",
  "brand": "Sisley",
  "colour": "4 Sheer Rosewood",
  "r": 185,
  "g": 100,
  "b": 102,
  "rgb": "rgb(185, 100, 102)",
  "hex": "#b96466"
}, {
  "value": "rgb(192.0,60.0,96.0)",
  "brand": "Sisley",
  "colour": "5 Sheer Raspberry",
  "r": 192,
  "g": 60,
  "b": 96,
  "rgb": "rgb(192, 60, 96)",
  "hex": "#c03c60"
}, {
  "value": "rgb(146.0,58.0,84.0)",
  "brand": "Sisley",
  "colour": "6 Sheer Burgundy",
  "r": 146,
  "g": 58,
  "b": 84,
  "rgb": "rgb(146, 58, 84)",
  "hex": "#923a54"
}, {
  "value": "rgb(252.0,148.0,130.0)",
  "brand": "Sisley",
  "colour": "7 Sheer Peach",
  "r": 252,
  "g": 148,
  "b": 130,
  "rgb": "rgb(252, 148, 130)",
  "hex": "#fc9482"
}, {
  "value": "rgb(232.0,119.0,128.0)",
  "brand": "Sisley",
  "colour": "11 Sheer Baby",
  "r": 232,
  "g": 119,
  "b": 128,
  "rgb": "rgb(232, 119, 128)",
  "hex": "#e87780"
}, {
  "value": "rgb(111.0,50.0,61.0)",
  "brand": "Sisley",
  "colour": "12 Sheer Plum",
  "r": 111,
  "g": 50,
  "b": 61,
  "rgb": "rgb(111, 50, 61)",
  "hex": "#6f323d"
}, {
  "value": "rgb(141.0,76.0,58.0)",
  "brand": "Sisley",
  "colour": "13 Sheer Beige",
  "r": 141,
  "g": 76,
  "b": 58,
  "rgb": "rgb(141, 76, 58)",
  "hex": "#8d4c3a"
}, {
  "value": "rgb(195.0,14.0,77.0)",
  "brand": "Sisley",
  "colour": "14 Sheer Fushia",
  "r": 195,
  "g": 14,
  "b": 77,
  "rgb": "rgb(195, 14, 77)",
  "hex": "#c30e4d"
}, {
  "value": "rgb(249.0,197.0,195.0)",
  "brand": "Sisley",
  "colour": "15 Sheer Balm",
  "r": 249,
  "g": 197,
  "b": 195,
  "rgb": "rgb(249, 197, 195)",
  "hex": "#f9c5c3"
}, {
  "value": "rgb(235.0,157.0,134.0)",
  "brand": "Sisley",
  "colour": "1 Nude",
  "r": 235,
  "g": 157,
  "b": 134,
  "rgb": "rgb(235, 157, 134)",
  "hex": "#eb9d86"
}, {
  "value": "rgb(255.0,139.0,151.0)",
  "brand": "Sisley",
  "colour": "2 Baby",
  "r": 255,
  "g": 139,
  "b": 151,
  "rgb": "rgb(255, 139, 151)",
  "hex": "#ff8b97"
}, {
  "value": "rgb(243.0,116.0,95.0)",
  "brand": "Sisley",
  "colour": "3 Peach",
  "r": 243,
  "g": 116,
  "b": 95,
  "rgb": "rgb(243, 116, 95)",
  "hex": "#f3745f"
}, {
  "value": "rgb(227.0,63.0,113.0)",
  "brand": "Sisley",
  "colour": "4 Pinky",
  "r": 227,
  "g": 63,
  "b": 113,
  "rgb": "rgb(227, 63, 113)",
  "hex": "#e33f71"
}, {
  "value": "rgb(166.0,47.0,72.0)",
  "brand": "Sisley",
  "colour": "5 Berry",
  "r": 166,
  "g": 47,
  "b": 72,
  "rgb": "rgb(166, 47, 72)",
  "hex": "#a62f48"
}, {
  "value": "rgb(224.0,28.0,51.0)",
  "brand": "Sisley",
  "colour": "6 Cherry",
  "r": 224,
  "g": 28,
  "b": 51,
  "rgb": "rgb(224, 28, 51)",
  "hex": "#e01c33"
}, {
  "value": "rgb(224.0,96.0,59.0)",
  "brand": "Sisley",
  "colour": "7 Coral",
  "r": 224,
  "g": 96,
  "b": 59,
  "rgb": "rgb(224, 96, 59)",
  "hex": "#e0603b"
}, {
  "value": "rgb(239.0,93.0,107.0)",
  "brand": "Sisley",
  "colour": "8 Candy",
  "r": 239,
  "g": 93,
  "b": 107,
  "rgb": "rgb(239, 93, 107)",
  "hex": "#ef5d6b"
}, {
  "value": "rgb(152.0,74.0,70.0)",
  "brand": "Sisley",
  "colour": "9 Chestnut",
  "r": 152,
  "g": 74,
  "b": 70,
  "rgb": "rgb(152, 74, 70)",
  "hex": "#984a46"
}, {
  "value": "rgb(244.0,179.0,186.0)",
  "brand": "Sisley",
  "colour": "16 Balm",
  "r": 244,
  "g": 179,
  "b": 186,
  "rgb": "rgb(244, 179, 186)",
  "hex": "#f4b3ba"
}, {
  "value": "rgb(118.0,46.0,52.0)",
  "brand": "Sisley",
  "colour": "23 Black Rose",
  "r": 118,
  "g": 46,
  "b": 52,
  "rgb": "rgb(118, 46, 52)",
  "hex": "#762e34"
}, {
  "value": "rgb(219.0,59.0,152.0)",
  "brand": "Sisley",
  "colour": "L12 Grenadine",
  "r": 219,
  "g": 59,
  "b": 152,
  "rgb": "rgb(219, 59, 152)",
  "hex": "#db3b98"
}, {
  "value": "rgb(243.0,125.0,116.0)",
  "brand": "Sisley",
  "colour": "L13 P??tale",
  "r": 243,
  "g": 125,
  "b": 116,
  "rgb": "rgb(243, 125, 116)",
  "hex": "#f37d74"
}, {
  "value": "rgb(206.0,127.0,132.0)",
  "brand": "Sisley",
  "colour": "L14 Rose Transparent",
  "r": 206,
  "g": 127,
  "b": 132,
  "rgb": "rgb(206, 127, 132)",
  "hex": "#ce7f84"
}, {
  "value": "rgb(251.0,152.0,177.0)",
  "brand": "Sisley",
  "colour": "L15 Rose Baby Doll",
  "r": 251,
  "g": 152,
  "b": 177,
  "rgb": "rgb(251, 152, 177)",
  "hex": "#fb98b1"
}, {
  "value": "rgb(246.0,110.0,136.0)",
  "brand": "Sisley",
  "colour": "L16 Rose Rose",
  "r": 246,
  "g": 110,
  "b": 136,
  "rgb": "rgb(246, 110, 136)",
  "hex": "#f66e88"
}, {
  "value": "rgb(148.0,32.0,32.0)",
  "brand": "Sisley",
  "colour": "L17 Rouge Baroque",
  "r": 148,
  "g": 32,
  "b": 32,
  "rgb": "rgb(148, 32, 32)",
  "hex": "#942020"
}, {
  "value": "rgb(219.0,111.0,92.0)",
  "brand": "Sisley",
  "colour": "L18 Cognac",
  "r": 219,
  "g": 111,
  "b": 92,
  "rgb": "rgb(219, 111, 92)",
  "hex": "#db6f5c"
}, {
  "value": "rgb(236.0,129.0,116.0)",
  "brand": "Sisley",
  "colour": "L21 Rose Pamplemousse",
  "r": 236,
  "g": 129,
  "b": 116,
  "rgb": "rgb(236, 129, 116)",
  "hex": "#ec8174"
}, {
  "value": "rgb(159.0,43.0,66.0)",
  "brand": "Sisley",
  "colour": "L23 Flamant Rose",
  "r": 159,
  "g": 43,
  "b": 66,
  "rgb": "rgb(159, 43, 66)",
  "hex": "#9f2b42"
}, {
  "value": "rgb(147.0,44.0,64.0)",
  "brand": "Sisley",
  "colour": "L24 Prune",
  "r": 147,
  "g": 44,
  "b": 64,
  "rgb": "rgb(147, 44, 64)",
  "hex": "#932c40"
}, {
  "value": "rgb(194.0,24.0,50.0)",
  "brand": "Sisley",
  "colour": "L25 Rouge Geisha",
  "r": 194,
  "g": 24,
  "b": 50,
  "rgb": "rgb(194, 24, 50)",
  "hex": "#c21832"
}, {
  "value": "rgb(198.0,124.0,121.0)",
  "brand": "Sisley",
  "colour": "L26 Rose Indien",
  "r": 198,
  "g": 124,
  "b": 121,
  "rgb": "rgb(198, 124, 121)",
  "hex": "#c67c79"
}, {
  "value": "rgb(170.0,73.0,57.0)",
  "brand": "Sisley",
  "colour": "L27 Cuivre Dor??",
  "r": 170,
  "g": 73,
  "b": 57,
  "rgb": "rgb(170, 73, 57)",
  "hex": "#aa4939"
}, {
  "value": "rgb(216.0,121.0,100.0)",
  "brand": "Sisley",
  "colour": "L28 Rose Corail",
  "r": 216,
  "g": 121,
  "b": 100,
  "rgb": "rgb(216, 121, 100)",
  "hex": "#d87964"
}, {
  "value": "rgb(180.0,32.0,45.0)",
  "brand": "Sisley",
  "colour": "L29 Rouge Rubis",
  "r": 180,
  "g": 32,
  "b": 45,
  "rgb": "rgb(180, 32, 45)",
  "hex": "#b4202d"
}, {
  "value": "rgb(215.0,61.0,20.0)",
  "brand": "Sisley",
  "colour": "L30 Mandarine",
  "r": 215,
  "g": 61,
  "b": 20,
  "rgb": "rgb(215, 61, 20)",
  "hex": "#d73d14"
}, {
  "value": "rgb(215.0,50.0,110.0)",
  "brand": "Sisley",
  "colour": "L31 Rose Fushia",
  "r": 215,
  "g": 50,
  "b": 110,
  "rgb": "rgb(215, 50, 110)",
  "hex": "#d7326e"
}, {
  "value": "rgb(203.0,105.0,96.0)",
  "brand": "Sisley",
  "colour": "L32 Rose Cashmere",
  "r": 203,
  "g": 105,
  "b": 96,
  "rgb": "rgb(203, 105, 96)",
  "hex": "#cb6960"
}, {
  "value": "rgb(189.0,0.0,0.0)",
  "brand": "Sisley",
  "colour": "L33 Rouge Passion",
  "r": 189,
  "g": 0,
  "b": 0,
  "rgb": "rgb(189, 0, 0)",
  "hex": "#bd0000"
}, {
  "value": "rgb(203.0,85.0,102.0)",
  "brand": "Sisley",
  "colour": "L34 Rose Petunia",
  "r": 203,
  "g": 85,
  "b": 102,
  "rgb": "rgb(203, 85, 102)",
  "hex": "#cb5566"
}, {
  "value": "rgb(171.0,133.0,112.0)",
  "brand": "Sisley",
  "colour": "10 Beige Jaipur",
  "r": 171,
  "g": 133,
  "b": 112,
  "rgb": "rgb(171, 133, 112)",
  "hex": "#ab8570"
}, {
  "value": "rgb(158.0,111.0,93.0)",
  "brand": "Sisley",
  "colour": "11 Beige Tahiti",
  "r": 158,
  "g": 111,
  "b": 93,
  "rgb": "rgb(158, 111, 93)",
  "hex": "#9e6f5d"
}, {
  "value": "rgb(166.0,97.0,81.0)",
  "brand": "Sisley",
  "colour": "12 Beige Bali",
  "r": 166,
  "g": 97,
  "b": 81,
  "rgb": "rgb(166, 97, 81)",
  "hex": "#a66151"
}, {
  "value": "rgb(118.0,66.0,53.0)",
  "brand": "Sisley",
  "colour": "13 Beige Eldorado",
  "r": 118,
  "g": 66,
  "b": 53,
  "rgb": "rgb(118, 66, 53)",
  "hex": "#764235"
}, {
  "value": "rgb(105.0,79.0,66.0)",
  "brand": "Sisley",
  "colour": "14 Beige Copacabana",
  "r": 105,
  "g": 79,
  "b": 66,
  "rgb": "rgb(105, 79, 66)",
  "hex": "#694f42"
}, {
  "value": "rgb(165.0,113.0,117.0)",
  "brand": "Sisley",
  "colour": "20 Rose Portofino",
  "r": 165,
  "g": 113,
  "b": 117,
  "rgb": "rgb(165, 113, 117)",
  "hex": "#a57175"
}, {
  "value": "rgb(160.0,84.0,96.0)",
  "brand": "Sisley",
  "colour": "21 Rose Noum??a",
  "r": 160,
  "g": 84,
  "b": 96,
  "rgb": "rgb(160, 84, 96)",
  "hex": "#a05460"
}, {
  "value": "rgb(213.0,131.0,119.0)",
  "brand": "bareMinerals",
  "colour": "Peony",
  "r": 213,
  "g": 131,
  "b": 119,
  "rgb": "rgb(213, 131, 119)",
  "hex": "#d58377"
}, {
  "value": "rgb(203.0,124.0,96.0)",
  "brand": "bareMinerals",
  "colour": "Camellia",
  "r": 203,
  "g": 124,
  "b": 96,
  "rgb": "rgb(203, 124, 96)",
  "hex": "#cb7c60"
}, {
  "value": "rgb(202.0,117.0,124.0)",
  "brand": "bareMinerals",
  "colour": "Petal",
  "r": 202,
  "g": 117,
  "b": 124,
  "rgb": "rgb(202, 117, 124)",
  "hex": "#ca757c"
}, {
  "value": "rgb(200.0,93.0,106.0)",
  "brand": "bareMinerals",
  "colour": "Bloom",
  "r": 200,
  "g": 93,
  "b": 106,
  "rgb": "rgb(200, 93, 106)",
  "hex": "#c85d6a"
}, {
  "value": "rgb(202.0,110.0,107.0)",
  "brand": "bareMinerals",
  "colour": "Cinnamon",
  "r": 202,
  "g": 110,
  "b": 107,
  "rgb": "rgb(202, 110, 107)",
  "hex": "#ca6e6b"
}, {
  "value": "rgb(173.0,75.0,92.0)",
  "brand": "bareMinerals",
  "colour": "Strawberry",
  "r": 173,
  "g": 75,
  "b": 92,
  "rgb": "rgb(173, 75, 92)",
  "hex": "#ad4b5c"
}, {
  "value": "rgb(145.0,67.0,92.0)",
  "brand": "bareMinerals",
  "colour": "Boysenberry",
  "r": 145,
  "g": 67,
  "b": 92,
  "rgb": "rgb(145, 67, 92)",
  "hex": "#91435c"
}, {
  "value": "rgb(165.0,81.0,72.0)",
  "brand": "bareMinerals",
  "colour": "Spice",
  "r": 165,
  "g": 81,
  "b": 72,
  "rgb": "rgb(165, 81, 72)",
  "hex": "#a55148"
}, {
  "value": "rgb(160.0,66.0,53.0)",
  "brand": "bareMinerals",
  "colour": "Nutmeg",
  "r": 160,
  "g": 66,
  "b": 53,
  "rgb": "rgb(160, 66, 53)",
  "hex": "#a04235"
}, {
  "value": "rgb(86.0,32.0,35.0)",
  "brand": "bareMinerals",
  "colour": "Raisin",
  "r": 86,
  "g": 32,
  "b": 35,
  "rgb": "rgb(86, 32, 35)",
  "hex": "#562023"
}, {
  "value": "rgb(200.0,93.0,101.0)",
  "brand": "bareMinerals",
  "colour": "Carnation",
  "r": 200,
  "g": 93,
  "b": 101,
  "rgb": "rgb(200, 93, 101)",
  "hex": "#c85d65"
}, {
  "value": "rgb(169.0,51.0,68.0)",
  "brand": "bareMinerals",
  "colour": "Geranium",
  "r": 169,
  "g": 51,
  "b": 68,
  "rgb": "rgb(169, 51, 68)",
  "hex": "#a93344"
}, {
  "value": "rgb(196.0,9.0,74.0)",
  "brand": "bareMinerals",
  "colour": "Hibiscus",
  "r": 196,
  "g": 9,
  "b": 74,
  "rgb": "rgb(196, 9, 74)",
  "hex": "#c4094a"
}, {
  "value": "rgb(168.0,21.0,83.0)",
  "brand": "bareMinerals",
  "colour": "Petunia",
  "r": 168,
  "g": 21,
  "b": 83,
  "rgb": "rgb(168, 21, 83)",
  "hex": "#a81553"
}, {
  "value": "rgb(181.0,85.0,145.0)",
  "brand": "bareMinerals",
  "colour": "Dahlia",
  "r": 181,
  "g": 85,
  "b": 145,
  "rgb": "rgb(181, 85, 145)",
  "hex": "#b55591"
}, {
  "value": "rgb(150.0,19.0,52.0)",
  "brand": "bareMinerals",
  "colour": "Raspberry",
  "r": 150,
  "g": 19,
  "b": 52,
  "rgb": "rgb(150, 19, 52)",
  "hex": "#961334"
}, {
  "value": "rgb(96.0,29.0,46.0)",
  "brand": "bareMinerals",
  "colour": "Blackberry",
  "r": 96,
  "g": 29,
  "b": 46,
  "rgb": "rgb(96, 29, 46)",
  "hex": "#601d2e"
}, {
  "value": "rgb(217.0,59.0,32.0)",
  "brand": "bareMinerals",
  "colour": "Saffron",
  "r": 217,
  "g": 59,
  "b": 32,
  "rgb": "rgb(217, 59, 32)",
  "hex": "#d93b20"
}, {
  "value": "rgb(215.0,24.0,42.0)",
  "brand": "bareMinerals",
  "colour": "Cherry",
  "r": 215,
  "g": 24,
  "b": 42,
  "rgb": "rgb(215, 24, 42)",
  "hex": "#d7182a"
}, {
  "value": "rgb(118.0,33.0,35.0)",
  "brand": "bareMinerals",
  "colour": "Cranberry",
  "r": 118,
  "g": 33,
  "b": 35,
  "rgb": "rgb(118, 33, 35)",
  "hex": "#762123"
}, {
  "value": "rgb(233.0,144.0,136.0)",
  "brand": "bareMinerals",
  "colour": "Tutu",
  "r": 233,
  "g": 144,
  "b": 136,
  "rgb": "rgb(233, 144, 136)",
  "hex": "#e99088"
}, {
  "value": "rgb(184.0,86.0,95.0)",
  "brand": "bareMinerals",
  "colour": "XOX",
  "r": 184,
  "g": 86,
  "b": 95,
  "rgb": "rgb(184, 86, 95)",
  "hex": "#b8565f"
}, {
  "value": "rgb(185.0,93.0,81.0)",
  "brand": "bareMinerals",
  "colour": "Notorious",
  "r": 185,
  "g": 93,
  "b": 81,
  "rgb": "rgb(185, 93, 81)",
  "hex": "#b95d51"
}, {
  "value": "rgb(176.0,93.0,96.0)",
  "brand": "bareMinerals",
  "colour": "Mantra",
  "r": 176,
  "g": 93,
  "b": 96,
  "rgb": "rgb(176, 93, 96)",
  "hex": "#b05d60"
}, {
  "value": "rgb(116.0,50.0,58.0)",
  "brand": "bareMinerals",
  "colour": "Queen",
  "r": 116,
  "g": 50,
  "b": 58,
  "rgb": "rgb(116, 50, 58)",
  "hex": "#74323a"
}, {
  "value": "rgb(223.0,128.0,116.0)",
  "brand": "bareMinerals",
  "colour": "Kitty",
  "r": 223,
  "g": 128,
  "b": 116,
  "rgb": "rgb(223, 128, 116)",
  "hex": "#df8074"
}, {
  "value": "rgb(202.0,88.0,94.0)",
  "brand": "bareMinerals",
  "colour": "Love",
  "r": 202,
  "g": 88,
  "b": 94,
  "rgb": "rgb(202, 88, 94)",
  "hex": "#ca585e"
}, {
  "value": "rgb(180.0,83.0,81.0)",
  "brand": "bareMinerals",
  "colour": "Panko",
  "r": 180,
  "g": 83,
  "b": 81,
  "rgb": "rgb(180, 83, 81)",
  "hex": "#b45351"
}, {
  "value": "rgb(194.0,126.0,101.0)",
  "brand": "bareMinerals",
  "colour": "Sexpot",
  "r": 194,
  "g": 126,
  "b": 101,
  "rgb": "rgb(194, 126, 101)",
  "hex": "#c27e65"
}, {
  "value": "rgb(183.0,112.0,96.0)",
  "brand": "bareMinerals",
  "colour": "Honeybun",
  "r": 183,
  "g": 112,
  "b": 96,
  "rgb": "rgb(183, 112, 96)",
  "hex": "#b77060"
}, {
  "value": "rgb(118.0,27.0,34.0)",
  "brand": "e.l.f",
  "colour": "Red Carpet",
  "r": 118,
  "g": 27,
  "b": 34,
  "rgb": "rgb(118, 27, 34)",
  "hex": "#761b22"
}, {
  "value": "rgb(108.0,48.0,60.0)",
  "brand": "e.l.f",
  "colour": "Wine Tour",
  "r": 108,
  "g": 48,
  "b": 60,
  "rgb": "rgb(108, 48, 60)",
  "hex": "#6c303c"
}, {
  "value": "rgb(166.0,90.0,92.0)",
  "brand": "e.l.f",
  "colour": "Pink Minx",
  "r": 166,
  "g": 90,
  "b": 92,
  "rgb": "rgb(166, 90, 92)",
  "hex": "#a65a5c"
}, {
  "value": "rgb(213.0,65.0,17.0)",
  "brand": "e.l.f",
  "colour": "Orange Dream",
  "r": 213,
  "g": 65,
  "b": 17,
  "rgb": "rgb(213, 65, 17)",
  "hex": "#d54111"
}, {
  "value": "rgb(74.0,37.0,28.0)",
  "brand": "e.l.f",
  "colour": "Bordeaux Beauty",
  "r": 74,
  "g": 37,
  "b": 28,
  "rgb": "rgb(74, 37, 28)",
  "hex": "#4a251c"
}, {
  "value": "rgb(102.0,47.0,42.0)",
  "brand": "e.l.f",
  "colour": "Razzle Dazzle",
  "r": 102,
  "g": 47,
  "b": 42,
  "rgb": "rgb(102, 47, 42)",
  "hex": "#662f2a"
}, {
  "value": "rgb(214.0,151.0,118.0)",
  "brand": "e.l.f",
  "colour": "Nearly Nude",
  "r": 214,
  "g": 151,
  "b": 118,
  "rgb": "rgb(214, 151, 118)",
  "hex": "#d69776"
}, {
  "value": "rgb(177.0,59.0,59.0)",
  "brand": "e.l.f",
  "colour": "Rich Red",
  "r": 177,
  "g": 59,
  "b": 59,
  "rgb": "rgb(177, 59, 59)",
  "hex": "#b13b3b"
}, {
  "value": "rgb(126.0,52.0,69.0)",
  "brand": "e.l.f",
  "colour": "Wine",
  "r": 126,
  "g": 52,
  "b": 69,
  "rgb": "rgb(126, 52, 69)",
  "hex": "#7e3445"
}, {
  "value": "rgb(182.0,40.0,64.0)",
  "brand": "e.l.f",
  "colour": "Dash of Pink",
  "r": 182,
  "g": 40,
  "b": 64,
  "rgb": "rgb(182, 40, 64)",
  "hex": "#b62840"
}, {
  "value": "rgb(147.0,47.0,97.0)",
  "brand": "e.l.f",
  "colour": "Berry Sorbet",
  "r": 147,
  "g": 47,
  "b": 97,
  "rgb": "rgb(147, 47, 97)",
  "hex": "#932f61"
}, {
  "value": "rgb(185.67479131886495,106.65742904841287,93.99365609348922)",
  "brand": "BY TERRY",
  "colour": "N??1 Mimetic Beige",
  "r": 185,
  "g": 106,
  "b": 93,
  "rgb": "rgb(185, 106, 93)",
  "hex": "#b96a5d"
}, {
  "value": "rgb(180.56640491635488,87.77808125640081,72.89621031068603)",
  "brand": "BY TERRY",
  "colour": "N??2 Bloom Nude",
  "r": 180,
  "g": 87,
  "b": 72,
  "rgb": "rgb(180, 87, 72)",
  "hex": "#b45748"
}, {
  "value": "rgb(169.18454106280092,91.18132045088609,79.29436392914693)",
  "brand": "BY TERRY",
  "colour": "N??3 Bare Me",
  "r": 169,
  "g": 91,
  "b": 79,
  "rgb": "rgb(169, 91, 79)",
  "hex": "#a95b4f"
}, {
  "value": "rgb(192.8707435719252,84.5976372480885,91.61188325225831)",
  "brand": "BY TERRY",
  "colour": "N??4 Rose Ease",
  "r": 192,
  "g": 84,
  "b": 91,
  "rgb": "rgb(192, 84, 91)",
  "hex": "#c0545b"
}, {
  "value": "rgb(220.8651230101301,81.87756874095533,120.17134587554263)",
  "brand": "BY TERRY",
  "colour": "N??5 Flamingo Kiss",
  "r": 220,
  "g": 81,
  "b": 120,
  "rgb": "rgb(220, 81, 120)",
  "hex": "#dc5178"
}, {
  "value": "rgb(205.7621826670556,76.02188503063911,75.2961774146484)",
  "brand": "BY TERRY",
  "colour": "N??6 Rosy Flush",
  "r": 205,
  "g": 76,
  "b": 75,
  "rgb": "rgb(205, 76, 75)",
  "hex": "#cd4c4b"
}, {
  "value": "rgb(182.18389095415097,29.150185873606052,62.588351920693796)",
  "brand": "BY TERRY",
  "colour": "N??7 Flirt Affair",
  "r": 182,
  "g": 29,
  "b": 62,
  "rgb": "rgb(182, 29, 62)",
  "hex": "#b61d3e"
}, {
  "value": "rgb(164.12390133257745,39.0703147150552,76.82166146867057)",
  "brand": "BY TERRY",
  "colour": "N??8 Flower Attitude",
  "r": 164,
  "g": 39,
  "b": 76,
  "rgb": "rgb(164, 39, 76)",
  "hex": "#a4274c"
}, {
  "value": "rgb(163.8189950013158,28.78374112075749,62.08918705603783)",
  "brand": "BY TERRY",
  "colour": "N??9 Flesh Award",
  "r": 163,
  "g": 28,
  "b": 62,
  "rgb": "rgb(163, 28, 62)",
  "hex": "#a31c3e"
}, {
  "value": "rgb(153.76929553746822,27.188885770418192,57.05079988773487)",
  "brand": "BY TERRY",
  "colour": "N??10 Garnet Glow",
  "r": 153,
  "g": 27,
  "b": 57,
  "rgb": "rgb(153, 27, 57)",
  "hex": "#991b39"
}, {
  "value": "rgb(184.76909200240556,47.529464822609455,47.788634996993416)",
  "brand": "BY TERRY",
  "colour": "N??11 Baby Brick",
  "r": 184,
  "g": 47,
  "b": 47,
  "rgb": "rgb(184, 47, 47)",
  "hex": "#b82f2f"
}, {
  "value": "rgb(203.23919402014914,56.72798180045529,47.38999025024402)",
  "brand": "BY TERRY",
  "colour": "N??12 Naked Nectar",
  "r": 203,
  "g": 56,
  "b": 47,
  "rgb": "rgb(203, 56, 47)",
  "hex": "#cb382f"
}, {
  "value": "rgb(205.38211382113815,55.89605110336811,39.01045296167241)",
  "brand": "BY TERRY",
  "colour": "N??13 Chilly Cream",
  "r": 205,
  "g": 55,
  "b": 39,
  "rgb": "rgb(205, 55, 39)",
  "hex": "#cd3727"
}, {
  "value": "rgb(234.82575272261386,38.51121076233184,51.50352338244706)",
  "brand": "BY TERRY",
  "colour": "N??16 Rouge Initiation",
  "r": 234,
  "g": 38,
  "b": 51,
  "rgb": "rgb(234, 38, 51)",
  "hex": "#ea2633"
}, {
  "value": "rgb(193.8964259664477,25.85813274981765,52.142961342086096)",
  "brand": "BY TERRY",
  "colour": "N??17 My Red",
  "r": 193,
  "g": 25,
  "b": 52,
  "rgb": "rgb(193, 25, 52)",
  "hex": "#c11934"
}, {
  "value": "rgb(176.719228210246,29.337658017298757,33.66001330671987)",
  "brand": "BY TERRY",
  "colour": "N??18 Be Mine",
  "r": 176,
  "g": 29,
  "b": 33,
  "rgb": "rgb(176, 29, 33)",
  "hex": "#b01d21"
}, {
  "value": "rgb(184.1950442477878,29.106902654867277,33.33769911504426)",
  "brand": "BY TERRY",
  "colour": "N??20 Mystic Red",
  "r": 184,
  "g": 29,
  "b": 33,
  "rgb": "rgb(184, 29, 33)",
  "hex": "#b81d21"
}, {
  "value": "rgb(108.4890776699031,19.046116504854428,24.642293689320397)",
  "brand": "BY TERRY",
  "colour": "N??21 Palace Wine",
  "r": 108,
  "g": 19,
  "b": 24,
  "rgb": "rgb(108, 19, 24)",
  "hex": "#6c1318"
}, {
  "value": "rgb(155.05054644808757,26.41769125683059,67.6786202185793)",
  "brand": "BY TERRY",
  "colour": "N??22 Play Plum",
  "r": 155,
  "g": 26,
  "b": 67,
  "rgb": "rgb(155, 26, 67)",
  "hex": "#9b1a43"
}, {
  "value": "rgb(153.83705962059602,26.75575880758815,90.99051490514921)",
  "brand": "BY TERRY",
  "colour": "N??23 Pink Pong",
  "r": 153,
  "g": 26,
  "b": 90,
  "rgb": "rgb(153, 26, 90)",
  "hex": "#991a5a"
}, {
  "value": "rgb(73.12921348314529,11.064205457464102,34.55564472980185)",
  "brand": "BY TERRY",
  "colour": "N??25 Dark Purple",
  "r": 73,
  "g": 11,
  "b": 34,
  "rgb": "rgb(73, 11, 34)",
  "hex": "#490b22"
}, {
  "value": "rgb(89.23428835489806,40.95147874306827,35.340341959334445)",
  "brand": "BY TERRY",
  "colour": "N??26 Choco Chic",
  "r": 89,
  "g": 40,
  "b": 35,
  "rgb": "rgb(89, 40, 35)",
  "hex": "#592823"
}, {
  "value": "rgb(70.46835443037978,36.31968758416374,27.369243199569095)",
  "brand": "BY TERRY",
  "colour": "N??27 Chocolate Tea",
  "r": 70,
  "g": 36,
  "b": 27,
  "rgb": "rgb(70, 36, 27)",
  "hex": "#46241b"
}, {
  "value": "rgb(118.42126245847165,67.95880398671108,57.33554817275738)",
  "brand": "BY TERRY",
  "colour": "N??28 Pecan Nude",
  "r": 118,
  "g": 67,
  "b": 57,
  "rgb": "rgb(118, 67, 57)",
  "hex": "#764339"
}, {
  "value": "rgb(158.9491470872224,97.94946894110106,102.78661087866097)",
  "brand": "BY TERRY",
  "colour": "N??29 Orchid Glaze",
  "r": 158,
  "g": 97,
  "b": 102,
  "rgb": "rgb(158, 97, 102)",
  "hex": "#9e6166"
}, {
  "value": "rgb(150.80420544639716,101.00930713547017,82.85039641502948)",
  "brand": "BY TERRY",
  "colour": "N??30 Chai Latte",
  "r": 150,
  "g": 101,
  "b": 82,
  "rgb": "rgb(150, 101, 82)",
  "hex": "#966552"
}, {
  "value": "rgb(250.60089186176148,207.23968784838348,218.2954292084726)",
  "brand": "BY TERRY",
  "colour": "N??1 Bare Balm",
  "r": 250,
  "g": 207,
  "b": 218,
  "rgb": "rgb(250, 207, 218)",
  "hex": "#facfda"
}, {
  "value": "rgb(243.6393581081081,147.77702702702672,133.97888513513496)",
  "brand": "BY TERRY",
  "colour": "N??2 Innocent Kiss",
  "r": 243,
  "g": 147,
  "b": 133,
  "rgb": "rgb(243, 147, 133)",
  "hex": "#f39385"
}, {
  "value": "rgb(235.59983498349834,140.329207920792,158.59735973597387)",
  "brand": "BY TERRY",
  "colour": "N??3 Nude Pulp",
  "r": 235,
  "g": 140,
  "b": 158,
  "rgb": "rgb(235, 140, 158)",
  "hex": "#eb8c9e"
}, {
  "value": "rgb(213.66171003717474,84.37472118959057,72.23345724907102)",
  "brand": "BY TERRY",
  "colour": "N??4 Sheer Glow",
  "r": 213,
  "g": 84,
  "b": 72,
  "rgb": "rgb(213, 84, 72)",
  "hex": "#d55448"
}, {
  "value": "rgb(157.0865467009425,58.690659811482426,56.67352185090034)",
  "brand": "BY TERRY",
  "colour": "N??5 Flush Contour",
  "r": 157,
  "g": 58,
  "b": 56,
  "rgb": "rgb(157, 58, 56)",
  "hex": "#9d3a38"
}, {
  "value": "rgb(207.72468483123225,115.3472956486374,100.5327368849127)",
  "brand": "BY TERRY",
  "colour": "N??1 Nudissimo",
  "r": 207,
  "g": 115,
  "b": 100,
  "rgb": "rgb(207, 115, 100)",
  "hex": "#cf7364"
}, {
  "value": "rgb(217.26914062500003,113.77890624999978,117.84414062500002)",
  "brand": "BY TERRY",
  "colour": "N??3 Baby Bloom",
  "r": 217,
  "g": 113,
  "b": 117,
  "rgb": "rgb(217, 113, 117)",
  "hex": "#d97175"
}, {
  "value": "rgb(242.06408227848107,121.21874999999986,149.76780063291156)",
  "brand": "BY TERRY",
  "colour": "N??4 Princess in Rose",
  "r": 242,
  "g": 121,
  "b": 149,
  "rgb": "rgb(242, 121, 149)",
  "hex": "#f27995"
}, {
  "value": "rgb(176.56445497630295,41.2118483412322,131.13033175355457)",
  "brand": "BY TERRY",
  "colour": "N??5 Dragon Pink",
  "r": 176,
  "g": 41,
  "b": 131,
  "rgb": "rgb(176, 41, 131)",
  "hex": "#b02983"
}, {
  "value": "rgb(221.15239154616253,68.01446051167933,80.85984427141213)",
  "brand": "BY TERRY",
  "colour": "N??6 Party Girl",
  "r": 221,
  "g": 68,
  "b": 80,
  "rgb": "rgb(221, 68, 80)",
  "hex": "#dd4450"
}, {
  "value": "rgb(193.32582781456946,64.49183222957996,51.98852097130292)",
  "brand": "BY TERRY",
  "colour": "N??7 Bang Bang",
  "r": 193,
  "g": 64,
  "b": 51,
  "rgb": "rgb(193, 64, 51)",
  "hex": "#c14033"
}, {
  "value": "rgb(174.60516605166143,60.93972939729292,52.149241492413424)",
  "brand": "BY TERRY",
  "colour": "N??8 Hot Spot",
  "r": 174,
  "g": 60,
  "b": 52,
  "rgb": "rgb(174, 60, 52)",
  "hex": "#ae3c34"
}, {
  "value": "rgb(189.9229629629632,60.44814814814896,65.2918518518519)",
  "brand": "BY TERRY",
  "colour": "N??9 Dare to Bare",
  "r": 189,
  "g": 60,
  "b": 65,
  "rgb": "rgb(189, 60, 65)",
  "hex": "#bd3c41"
}, {
  "value": "rgb(106.47591382231751,29.25102880658205,26.61365286855505)",
  "brand": "BY TERRY",
  "colour": "N??10 Berry Boom",
  "r": 106,
  "g": 29,
  "b": 26,
  "rgb": "rgb(106, 29, 26)",
  "hex": "#6a1d1a"
}, {
  "value": "rgb(166.7362732382188,65.30350194552496,74.83830523130082)",
  "brand": "BY TERRY",
  "colour": "N??11 Fatal Shot",
  "r": 166,
  "g": 65,
  "b": 74,
  "rgb": "rgb(166, 65, 74)",
  "hex": "#a6414a"
}, {
  "value": "rgb(143.0722713864307,36.46238938053161,74.29056047197662)",
  "brand": "BY TERRY",
  "colour": "N??14 Plump Plump Girl",
  "r": 143,
  "g": 36,
  "b": 74,
  "rgb": "rgb(143, 36, 74)",
  "hex": "#8f244a"
}, {
  "value": "rgb(167.59624765478424,82.22814258911772,111.05703564727911)",
  "brand": "BY TERRY",
  "colour": "N??15 Grand Cru",
  "r": 167,
  "g": 82,
  "b": 111,
  "rgb": "rgb(167, 82, 111)",
  "hex": "#a7526f"
}, {
  "value": "rgb(212.99999999999864,5.000000000000827,80.99999999999996)",
  "brand": "Kosas",
  "colour": "Violet Fury",
  "r": 212,
  "g": 5,
  "b": 80,
  "rgb": "rgb(212, 5, 80)",
  "hex": "#d40550"
}, {
  "value": "rgb(171.0000000000006,23.999999999999826,16.00000000000058)",
  "brand": "Kosas",
  "colour": "Phoenix",
  "r": 171,
  "g": 23,
  "b": 16,
  "rgb": "rgb(171, 23, 16)",
  "hex": "#ab1710"
}, {
  "value": "rgb(219.9223931282458,116.04704354774218,130.0302636835802)",
  "brand": "Kosas",
  "colour": "Rosewater",
  "r": 219,
  "g": 116,
  "b": 130,
  "rgb": "rgb(219, 116, 130)",
  "hex": "#db7482"
}, {
  "value": "rgb(203.00000000000142,76.0,76.0)",
  "brand": "Kosas",
  "colour": "Stardust",
  "r": 203,
  "g": 76,
  "b": 76,
  "rgb": "rgb(203, 76, 76)",
  "hex": "#cb4c4c"
}, {
  "value": "rgb(171.99999999999898,56.00000000000002,66.00000000000004)",
  "brand": "Kosas",
  "colour": "Undone",
  "r": 171,
  "g": 56,
  "b": 66,
  "rgb": "rgb(171, 56, 66)",
  "hex": "#ab3842"
}, {
  "value": "rgb(141.0000000000004,36.000000000000284,65.00000000000001)",
  "brand": "Kosas",
  "colour": "Royal",
  "r": 141,
  "g": 36,
  "b": 65,
  "rgb": "rgb(141, 36, 65)",
  "hex": "#8d2441"
}, {
  "value": "rgb(202.99999999999866,17.99999999999982,36.000000000000256)",
  "brand": "Kosas",
  "colour": "Electra",
  "r": 202,
  "g": 17,
  "b": 36,
  "rgb": "rgb(202, 17, 36)",
  "hex": "#ca1124"
}, {
  "value": "rgb(220.99999999999815,16.00000000000024,16.00000000000024)",
  "brand": "Kosas",
  "colour": "Thrillest",
  "r": 220,
  "g": 16,
  "b": 16,
  "rgb": "rgb(220, 16, 16)",
  "hex": "#dc1010"
}, {
  "value": "rgb(101.8453947368423,19.11014752791052,19.11014752791052)",
  "brand": "Kosas",
  "colour": "Fringe",
  "r": 101,
  "g": 19,
  "b": 19,
  "rgb": "rgb(101, 19, 19)",
  "hex": "#651313"
}, {
  "value": "rgb(71.89387755102041,13.158188153309618,12.162667994026858)",
  "brand": "Kosas",
  "colour": "Darkroom",
  "r": 71,
  "g": 13,
  "b": 12,
  "rgb": "rgb(71, 13, 12)",
  "hex": "#470d0c"
}, {
  "value": "rgb(182.0,78.0,85.0)",
  "brand": "rms beauty",
  "colour": "temptation",
  "r": 182,
  "g": 78,
  "b": 85,
  "rgb": "rgb(182, 78, 85)",
  "hex": "#b64e55"
}, {
  "value": "rgb(241.0,95.0,83.0)",
  "brand": "rms beauty",
  "colour": "flight of fancy",
  "r": 241,
  "g": 95,
  "b": 83,
  "rgb": "rgb(241, 95, 83)",
  "hex": "#f15f53"
}, {
  "value": "rgb(208.0,138.0,113.0)",
  "brand": "rms beauty",
  "colour": "magic hour",
  "r": 208,
  "g": 138,
  "b": 113,
  "rgb": "rgb(208, 138, 113)",
  "hex": "#d08a71"
}, {
  "value": "rgb(243.0,76.0,52.0)",
  "brand": "rms beauty",
  "colour": "firestarter",
  "r": 243,
  "g": 76,
  "b": 52,
  "rgb": "rgb(243, 76, 52)",
  "hex": "#f34c34"
}, {
  "value": "rgb(253.0,136.0,143.0)",
  "brand": "rms beauty",
  "colour": "unbridled passion",
  "r": 253,
  "g": 136,
  "b": 143,
  "rgb": "rgb(253, 136, 143)",
  "hex": "#fd888f"
}, {
  "value": "rgb(200.0,19.0,4.0)",
  "brand": "rms beauty",
  "colour": "rms red",
  "r": 200,
  "g": 19,
  "b": 4,
  "rgb": "rgb(200, 19, 4)",
  "hex": "#c81304"
}, {
  "value": "rgb(249.0,111.0,121.0)",
  "brand": "rms beauty",
  "colour": "pretty vacant",
  "r": 249,
  "g": 111,
  "b": 121,
  "rgb": "rgb(249, 111, 121)",
  "hex": "#f96f79"
}, {
  "value": "rgb(197.0,26.0,46.0)",
  "brand": "rms beauty",
  "colour": "rebound",
  "r": 197,
  "g": 26,
  "b": 46,
  "rgb": "rgb(197, 26, 46)",
  "hex": "#c51a2e"
}, {
  "value": "rgb(225.0,149.0,128.0)",
  "brand": "rms beauty",
  "colour": "breathless",
  "r": 225,
  "g": 149,
  "b": 128,
  "rgb": "rgb(225, 149, 128)",
  "hex": "#e19580"
}, {
  "value": "rgb(172.0,26.0,44.0)",
  "brand": "rms beauty",
  "colour": "russian roulette",
  "r": 172,
  "g": 26,
  "b": 44,
  "rgb": "rgb(172, 26, 44)",
  "hex": "#ac1a2c"
}, {
  "value": "rgb(247.0,141.0,128.0)",
  "brand": "rms beauty",
  "colour": "vogue rose",
  "r": 247,
  "g": 141,
  "b": 128,
  "rgb": "rgb(247, 141, 128)",
  "hex": "#f78d80"
}, {
  "value": "rgb(146.0,15.0,36.0)",
  "brand": "rms beauty",
  "colour": "rapture",
  "r": 146,
  "g": 15,
  "b": 36,
  "rgb": "rgb(146, 15, 36)",
  "hex": "#920f24"
}, {
  "value": "rgb(211.0,104.0,141.0)",
  "brand": "rms beauty",
  "colour": "sweet nothing",
  "r": 211,
  "g": 104,
  "b": 141,
  "rgb": "rgb(211, 104, 141)",
  "hex": "#d3688d"
}, {
  "value": "rgb(177.0,47.0,52.0)",
  "brand": "rms beauty",
  "colour": "jezebel",
  "r": 177,
  "g": 47,
  "b": 52,
  "rgb": "rgb(177, 47, 52)",
  "hex": "#b12f34"
}, {
  "value": "rgb(181.0,89.0,86.0)",
  "brand": "rms beauty",
  "colour": "brain teaser",
  "r": 181,
  "g": 89,
  "b": 86,
  "rgb": "rgb(181, 89, 86)",
  "hex": "#b55956"
}, {
  "value": "rgb(136.32150537634487,6.334408602151058,18.060752688171824)",
  "brand": "FLOWER BEAUTY",
  "colour": "Wild Azalea - Matte",
  "r": 136,
  "g": 6,
  "b": 18,
  "rgb": "rgb(136, 6, 18)",
  "hex": "#880612"
}, {
  "value": "rgb(230.53906810035843,161.4939068100356,153.0064516129031)",
  "brand": "FLOWER BEAUTY",
  "colour": "Naked Blush - Matte",
  "r": 230,
  "g": 161,
  "b": 153,
  "rgb": "rgb(230, 161, 153)",
  "hex": "#e6a199"
}, {
  "value": "rgb(213.28157503714706,78.9970282317974,132.3224368499261)",
  "brand": "FLOWER BEAUTY",
  "colour": "Pink Orchid - Matte",
  "r": 213,
  "g": 78,
  "b": 132,
  "rgb": "rgb(213, 78, 132)",
  "hex": "#d54e84"
}, {
  "value": "rgb(162.65910753474768,97.12362838332103,90.98098024872021)",
  "brand": "FLOWER BEAUTY",
  "colour": "Cinnamon Crush - Matte",
  "r": 162,
  "g": 97,
  "b": 90,
  "rgb": "rgb(162, 97, 90)",
  "hex": "#a2615a"
}, {
  "value": "rgb(201.90264255910978,60.02294853963856,70.26634214186303)",
  "brand": "FLOWER BEAUTY",
  "colour": "Poppy Pout - Matte",
  "r": 201,
  "g": 60,
  "b": 70,
  "rgb": "rgb(201, 60, 70)",
  "hex": "#c93c46"
}, {
  "value": "rgb(156.04397270659558,88.81880212282078,105.90447308567063)",
  "brand": "FLOWER BEAUTY",
  "colour": "Autumn Rose - Matte",
  "r": 156,
  "g": 88,
  "b": 105,
  "rgb": "rgb(156, 88, 105)",
  "hex": "#9c5869"
}, {
  "value": "rgb(142.50840618695332,39.778076664425384,73.70342972427758)",
  "brand": "FLOWER BEAUTY",
  "colour": "Rosey Garden - Matte",
  "r": 142,
  "g": 39,
  "b": 73,
  "rgb": "rgb(142, 39, 73)",
  "hex": "#8e2749"
}, {
  "value": "rgb(118.40135033758418,31.77794448612232,94.84021005251336)",
  "brand": "FLOWER BEAUTY",
  "colour": "Fuchsia Flush - Matte",
  "r": 118,
  "g": 31,
  "b": 94,
  "rgb": "rgb(118, 31, 94)",
  "hex": "#761f5e"
}, {
  "value": "rgb(223.00512820512824,86.20293040293046,99.97655677655757)",
  "brand": "FLOWER BEAUTY",
  "colour": "Hibis-Kiss - Matte",
  "r": 223,
  "g": 86,
  "b": 99,
  "rgb": "rgb(223, 86, 99)",
  "hex": "#df5663"
}, {
  "value": "rgb(172.75286916602886,72.71308339709282,91.56924254016782)",
  "brand": "FLOWER BEAUTY",
  "colour": "Berry More - Matte",
  "r": 172,
  "g": 72,
  "b": 91,
  "rgb": "rgb(172, 72, 91)",
  "hex": "#ac485b"
}, {
  "value": "rgb(243.85812883435582,181.48696319018416,168.5912576687114)",
  "brand": "FLOWER BEAUTY",
  "colour": "Bare Pout - Cream",
  "r": 243,
  "g": 181,
  "b": 168,
  "rgb": "rgb(243, 181, 168)",
  "hex": "#f3b5a8"
}, {
  "value": "rgb(117.35845070422509,28.442957746477518,45.24295774647947)",
  "brand": "FLOWER BEAUTY",
  "colour": "Wild Berry - Matte",
  "r": 117,
  "g": 28,
  "b": 45,
  "rgb": "rgb(117, 28, 45)",
  "hex": "#751c2d"
}, {
  "value": "rgb(192.16244314489956,120.04028589993463,118.11890838206594)",
  "brand": "FLOWER BEAUTY",
  "colour": "Warm Sand - Matte",
  "r": 192,
  "g": 120,
  "b": 118,
  "rgb": "rgb(192, 120, 118)",
  "hex": "#c07876"
}, {
  "value": "rgb(221.94256259204718,146.8534609720176,132.0729013254784)",
  "brand": "FLOWER BEAUTY",
  "colour": "Peachy Nude - Cream",
  "r": 221,
  "g": 146,
  "b": 132,
  "rgb": "rgb(221, 146, 132)",
  "hex": "#dd9284"
}, {
  "value": "rgb(153.75343406593385,93.33241758241701,97.70673076923026)",
  "brand": "FLOWER BEAUTY",
  "colour": "Pink Dusk - Cream",
  "r": 153,
  "g": 93,
  "b": 97,
  "rgb": "rgb(153, 93, 97)",
  "hex": "#995d61"
}, {
  "value": "rgb(132.40524344569235,71.68988764045,69.55805243445703)",
  "brand": "FLOWER BEAUTY",
  "colour": "Chestnut Kiss - Cream",
  "r": 132,
  "g": 71,
  "b": 69,
  "rgb": "rgb(132, 71, 69)",
  "hex": "#844745"
}, {
  "value": "rgb(125.19864864864864,54.47094594594522,70.69662162162136)",
  "brand": "FLOWER BEAUTY",
  "colour": "Rouge Berry - Cream",
  "r": 125,
  "g": 54,
  "b": 70,
  "rgb": "rgb(125, 54, 70)",
  "hex": "#7d3646"
}, {
  "value": "rgb(234.89064039408876,119.92019704433464,129.83152709359632)",
  "brand": "FLOWER BEAUTY",
  "colour": "Coral Crush - Cream",
  "r": 234,
  "g": 119,
  "b": 129,
  "rgb": "rgb(234, 119, 129)",
  "hex": "#ea7781"
}, {
  "value": "rgb(248.1111111111112,78.23099415204742,83.42982456140255)",
  "brand": "FLOWER BEAUTY",
  "colour": "Flamingo Flirt - Cream",
  "r": 248,
  "g": 78,
  "b": 83,
  "rgb": "rgb(248, 78, 83)",
  "hex": "#f84e53"
}, {
  "value": "rgb(242.93216463414635,93.23856707317117,138.22942073170714)",
  "brand": "FLOWER BEAUTY",
  "colour": "Bright Peony - Cream",
  "r": 242,
  "g": 93,
  "b": 138,
  "rgb": "rgb(242, 93, 138)",
  "hex": "#f25d8a"
}, {
  "value": "rgb(150.98246575342517,20.29808219177952,27.111232876712435)",
  "brand": "FLOWER BEAUTY",
  "colour": "Ruby Rouge - Cream",
  "r": 150,
  "g": 20,
  "b": 27,
  "rgb": "rgb(150, 20, 27)",
  "hex": "#96141b"
}, {
  "value": "rgb(160.52631578947395,55.0877192982447,121.69371345029273)",
  "brand": "FLOWER BEAUTY",
  "colour": "Dahlia Desire - Cream",
  "r": 160,
  "g": 55,
  "b": 121,
  "rgb": "rgb(160, 55, 121)",
  "hex": "#a03779"
}, {
  "value": "rgb(180.4719896973602,128.61236316806227,119.22923374114582)",
  "brand": "FLOWER BEAUTY",
  "colour": "Spiced Petal - Cream",
  "r": 180,
  "g": 128,
  "b": 119,
  "rgb": "rgb(180, 128, 119)",
  "hex": "#b48077"
}, {
  "value": "rgb(217.0,100.0,109.0)",
  "brand": "Too Faced",
  "colour": "Stoked",
  "r": 217,
  "g": 100,
  "b": 109,
  "rgb": "rgb(217, 100, 109)",
  "hex": "#d9646d"
}, {
  "value": "rgb(169.0,65.0,87.0)",
  "brand": "Too Faced",
  "colour": "Boy, Bye!",
  "r": 169,
  "g": 65,
  "b": 87,
  "rgb": "rgb(169, 65, 87)",
  "hex": "#a94157"
}, {
  "value": "rgb(146.0,55.0,47.0)",
  "brand": "Too Faced",
  "colour": "Scary Spice",
  "r": 146,
  "g": 55,
  "b": 47,
  "rgb": "rgb(146, 55, 47)",
  "hex": "#92372f"
}, {
  "value": "rgb(213.0,98.0,96.0)",
  "brand": "Too Faced",
  "colour": "Peachin' to the Choir",
  "r": 213,
  "g": 98,
  "b": 96,
  "rgb": "rgb(213, 98, 96)",
  "hex": "#d56260"
}, {
  "value": "rgb(184.0,104.0,80.0)",
  "brand": "Too Faced",
  "colour": "In the Flesh",
  "r": 184,
  "g": 104,
  "b": 80,
  "rgb": "rgb(184, 104, 80)",
  "hex": "#b86850"
}, {
  "value": "rgb(134.0,63.0,62.0)",
  "brand": "Too Faced",
  "colour": "Day Drinking",
  "r": 134,
  "g": 63,
  "b": 62,
  "rgb": "rgb(134, 63, 62)",
  "hex": "#863f3e"
}, {
  "value": "rgb(62.0,24.0,17.0)",
  "brand": "Too Faced",
  "colour": "Sippin' Tea",
  "r": 62,
  "g": 24,
  "b": 17,
  "rgb": "rgb(62, 24, 17)",
  "hex": "#3e1811"
}, {
  "value": "rgb(105.0,23.0,74.0)",
  "brand": "Too Faced",
  "colour": "Don't @ Me",
  "r": 105,
  "g": 23,
  "b": 74,
  "rgb": "rgb(105, 23, 74)",
  "hex": "#69174a"
}, {
  "value": "rgb(145.0,82.0,71.0)",
  "brand": "Too Faced",
  "colour": "You Wish",
  "r": 145,
  "g": 82,
  "b": 71,
  "rgb": "rgb(145, 82, 71)",
  "hex": "#915247"
}, {
  "value": "rgb(125.0,8.0,6.0)",
  "brand": "Too Faced",
  "colour": "Straight Fire",
  "r": 125,
  "g": 8,
  "b": 6,
  "rgb": "rgb(125, 8, 6)",
  "hex": "#7d0806"
}, {
  "value": "rgb(92.0,21.0,28.0)",
  "brand": "Too Faced",
  "colour": "Velvet Rope",
  "r": 92,
  "g": 21,
  "b": 28,
  "rgb": "rgb(92, 21, 28)",
  "hex": "#5c151c"
}, {
  "value": "rgb(82.0,47.0,36.0)",
  "brand": "Too Faced",
  "colour": "Brunchin'",
  "r": 82,
  "g": 47,
  "b": 36,
  "rgb": "rgb(82, 47, 36)",
  "hex": "#522f24"
}, {
  "value": "rgb(231.0,62.0,121.0)",
  "brand": "Too Faced",
  "colour": "Homecoming Queen",
  "r": 231,
  "g": 62,
  "b": 121,
  "rgb": "rgb(231, 62, 121)",
  "hex": "#e73e79"
}, {
  "value": "rgb(141.0,6.0,39.0)",
  "brand": "Too Faced",
  "colour": "Get Ur Freak On",
  "r": 141,
  "g": 6,
  "b": 39,
  "rgb": "rgb(141, 6, 39)",
  "hex": "#8d0627"
}, {
  "value": "rgb(173.0,87.0,100.0)",
  "brand": "Too Faced",
  "colour": "Flight Risk",
  "r": 173,
  "g": 87,
  "b": 100,
  "rgb": "rgb(173, 87, 100)",
  "hex": "#ad5764"
}, {
  "value": "rgb(249.0,173.0,137.0)",
  "brand": "Too Faced",
  "colour": "Doll Face",
  "r": 249,
  "g": 173,
  "b": 137,
  "rgb": "rgb(249, 173, 137)",
  "hex": "#f9ad89"
}, {
  "value": "rgb(175.0,92.0,88.0)",
  "brand": "Too Faced",
  "colour": "Undercover Lover",
  "r": 175,
  "g": 92,
  "b": 88,
  "rgb": "rgb(175, 92, 88)",
  "hex": "#af5c58"
}, {
  "value": "rgb(199.0,109.0,98.0)",
  "brand": "Too Faced",
  "colour": "Disrobed",
  "r": 199,
  "g": 109,
  "b": 98,
  "rgb": "rgb(199, 109, 98)",
  "hex": "#c76d62"
}, {
  "value": "rgb(212.0,111.0,119.0)",
  "brand": "Too Faced",
  "colour": "Bridezilla",
  "r": 212,
  "g": 111,
  "b": 119,
  "rgb": "rgb(212, 111, 119)",
  "hex": "#d46f77"
}, {
  "value": "rgb(156.0,52.0,27.0)",
  "brand": "Too Faced",
  "colour": "Chill Pill",
  "r": 156,
  "g": 52,
  "b": 27,
  "rgb": "rgb(156, 52, 27)",
  "hex": "#9c341b"
}, {
  "value": "rgb(214.0,146.0,123.0)",
  "brand": "Too Faced",
  "colour": "Sunday Funday",
  "r": 214,
  "g": 146,
  "b": 123,
  "rgb": "rgb(214, 146, 123)",
  "hex": "#d6927b"
}, {
  "value": "rgb(208.0,111.0,102.0)",
  "brand": "Too Faced",
  "colour": "Got Peach?",
  "r": 208,
  "g": 111,
  "b": 102,
  "rgb": "rgb(208, 111, 102)",
  "hex": "#d06f66"
}, {
  "value": "rgb(187.0,108.0,111.0)",
  "brand": "Too Faced",
  "colour": "Sex on the Peach",
  "r": 187,
  "g": 108,
  "b": 111,
  "rgb": "rgb(187, 108, 111)",
  "hex": "#bb6c6f"
}, {
  "value": "rgb(234.0,133.0,151.0)",
  "brand": "Too Faced",
  "colour": "Make Me Blush",
  "r": 234,
  "g": 133,
  "b": 151,
  "rgb": "rgb(234, 133, 151)",
  "hex": "#ea8597"
}, {
  "value": "rgb(217.0,102.0,99.0)",
  "brand": "Too Faced",
  "colour": "Peach Beach",
  "r": 217,
  "g": 102,
  "b": 99,
  "rgb": "rgb(217, 102, 99)",
  "hex": "#d96663"
}, {
  "value": "rgb(207.0,32.0,47.0)",
  "brand": "Too Faced",
  "colour": "Breakfast Club",
  "r": 207,
  "g": 32,
  "b": 47,
  "rgb": "rgb(207, 32, 47)",
  "hex": "#cf202f"
}, {
  "value": "rgb(184.0,41.0,47.0)",
  "brand": "Too Faced",
  "colour": "He's With Me",
  "r": 184,
  "g": 41,
  "b": 47,
  "rgb": "rgb(184, 41, 47)",
  "hex": "#b8292f"
}, {
  "value": "rgb(130.0,34.0,95.0)",
  "brand": "Too Faced",
  "colour": "Drunk Dial",
  "r": 130,
  "g": 34,
  "b": 95,
  "rgb": "rgb(130, 34, 95)",
  "hex": "#82225f"
}, {
  "value": "rgb(139.0,34.0,49.0)",
  "brand": "Too Faced",
  "colour": "Stop Traffic",
  "r": 139,
  "g": 34,
  "b": 49,
  "rgb": "rgb(139, 34, 49)",
  "hex": "#8b2231"
}, {
  "value": "rgb(110.0,43.0,61.0)",
  "brand": "Too Faced",
  "colour": "Love is a Battefield",
  "r": 110,
  "g": 43,
  "b": 61,
  "rgb": "rgb(110, 43, 61)",
  "hex": "#6e2b3d"
}, {
  "value": "rgb(247.0,174.0,191.0)",
  "brand": "Too Faced",
  "colour": "Peach Dream",
  "r": 247,
  "g": 174,
  "b": 191,
  "rgb": "rgb(247, 174, 191)",
  "hex": "#f7aebf"
}, {
  "value": "rgb(218.0,145.0,136.0)",
  "brand": "Too Faced",
  "colour": "Pinch My Peach",
  "r": 218,
  "g": 145,
  "b": 136,
  "rgb": "rgb(218, 145, 136)",
  "hex": "#da9188"
}, {
  "value": "rgb(176.0,113.0,100.0)",
  "brand": "Too Faced",
  "colour": "Spiced Peach",
  "r": 176,
  "g": 113,
  "b": 100,
  "rgb": "rgb(176, 113, 100)",
  "hex": "#b07164"
}, {
  "value": "rgb(246.0,146.0,112.0)",
  "brand": "Too Faced",
  "colour": "Ginger Peach",
  "r": 246,
  "g": 146,
  "b": 112,
  "rgb": "rgb(246, 146, 112)",
  "hex": "#f69270"
}, {
  "value": "rgb(152.0,56.0,77.0)",
  "brand": "Too Faced",
  "colour": "Peach Berry",
  "r": 152,
  "g": 56,
  "b": 77,
  "rgb": "rgb(152, 56, 77)",
  "hex": "#98384d"
}, {
  "value": "rgb(231.0,145.0,146.0)",
  "brand": "Too Faced",
  "colour": "Birthday Suit",
  "r": 231,
  "g": 145,
  "b": 146,
  "rgb": "rgb(231, 145, 146)",
  "hex": "#e79192"
}, {
  "value": "rgb(249.0,175.0,172.0)",
  "brand": "Too Faced",
  "colour": "Strip Search",
  "r": 249,
  "g": 175,
  "b": 172,
  "rgb": "rgb(249, 175, 172)",
  "hex": "#f9afac"
}, {
  "value": "rgb(249.0,173.0,137.0)",
  "brand": "Too Faced",
  "colour": "Send Nudes",
  "r": 249,
  "g": 173,
  "b": 137,
  "rgb": "rgb(249, 173, 137)",
  "hex": "#f9ad89"
}, {
  "value": "rgb(214.0,146.0,123.0)",
  "brand": "Too Faced",
  "colour": "Skinny Dippin'",
  "r": 214,
  "g": 146,
  "b": 123,
  "rgb": "rgb(214, 146, 123)",
  "hex": "#d6927b"
}, {
  "value": "rgb(185.0,117.0,118.0)",
  "brand": "Too Faced",
  "colour": "Pout About It",
  "r": 185,
  "g": 117,
  "b": 118,
  "rgb": "rgb(185, 117, 118)",
  "hex": "#b97576"
}, {
  "value": "rgb(170.0,108.0,119.0)",
  "brand": "Too Faced",
  "colour": "Overexposed",
  "r": 170,
  "g": 108,
  "b": 119,
  "rgb": "rgb(170, 108, 119)",
  "hex": "#aa6c77"
}, {
  "value": "rgb(178.0,117.0,98.0)",
  "brand": "Too Faced",
  "colour": "Nip Slip",
  "r": 178,
  "g": 117,
  "b": 98,
  "rgb": "rgb(178, 117, 98)",
  "hex": "#b27562"
}, {
  "value": "rgb(111.0,81.0,81.0)",
  "brand": "Too Faced",
  "colour": "Throwin' Suede",
  "r": 111,
  "g": 81,
  "b": 81,
  "rgb": "rgb(111, 81, 81)",
  "hex": "#6f5151"
}, {
  "value": "rgb(120.0,56.0,73.0)",
  "brand": "Too Faced",
  "colour": "Girl Code",
  "r": 120,
  "g": 56,
  "b": 73,
  "rgb": "rgb(120, 56, 73)",
  "hex": "#783849"
}, {
  "value": "rgb(86.0,35.0,18.0)",
  "brand": "Too Faced",
  "colour": "Indecent Proposal",
  "r": 86,
  "g": 35,
  "b": 18,
  "rgb": "rgb(86, 35, 18)",
  "hex": "#562312"
}, {
  "value": "rgb(207.0,111.0,119.0)",
  "brand": "Shiseido",
  "colour": "Jazz Den",
  "r": 207,
  "g": 111,
  "b": 119,
  "rgb": "rgb(207, 111, 119)",
  "hex": "#cf6f77"
}, {
  "value": "rgb(214.0,147.0,138.0)",
  "brand": "Shiseido",
  "colour": "Whisper",
  "r": 214,
  "g": 147,
  "b": 138,
  "rgb": "rgb(214, 147, 138)",
  "hex": "#d6938a"
}, {
  "value": "rgb(180.0,106.0,85.0)",
  "brand": "Shiseido",
  "colour": "Nude Streak",
  "r": 180,
  "g": 106,
  "b": 85,
  "rgb": "rgb(180, 106, 85)",
  "hex": "#b46a55"
}, {
  "value": "rgb(154.0,106.0,79.0)",
  "brand": "Shiseido",
  "colour": "Thigh High",
  "r": 154,
  "g": 106,
  "b": 79,
  "rgb": "rgb(154, 106, 79)",
  "hex": "#9a6a4f"
}, {
  "value": "rgb(182.0,90.0,101.0)",
  "brand": "Shiseido",
  "colour": "Peep Show",
  "r": 182,
  "g": 90,
  "b": 101,
  "rgb": "rgb(182, 90, 101)",
  "hex": "#b65a65"
}, {
  "value": "rgb(171.0,92.0,87.0)",
  "brand": "Shiseido",
  "colour": "Disrobed",
  "r": 171,
  "g": 92,
  "b": 87,
  "rgb": "rgb(171, 92, 87)",
  "hex": "#ab5c57"
}, {
  "value": "rgb(182.0,108.0,109.0)",
  "brand": "Shiseido",
  "colour": "Murmur",
  "r": 182,
  "g": 108,
  "b": 109,
  "rgb": "rgb(182, 108, 109)",
  "hex": "#b66c6d"
}, {
  "value": "rgb(164.0,82.0,72.0)",
  "brand": "Shiseido",
  "colour": "Semi Nude",
  "r": 164,
  "g": 82,
  "b": 72,
  "rgb": "rgb(164, 82, 72)",
  "hex": "#a45248"
}, {
  "value": "rgb(235.0,51.0,0.0)",
  "brand": "Shiseido",
  "colour": "Flame",
  "r": 235,
  "g": 51,
  "b": 0,
  "rgb": "rgb(235, 51, 0)",
  "hex": "#eb3300"
}, {
  "value": "rgb(192.0,13.0,30.0)",
  "brand": "Shiseido",
  "colour": "Night Life",
  "r": 192,
  "g": 13,
  "b": 30,
  "rgb": "rgb(192, 13, 30)",
  "hex": "#c00d1e"
}, {
  "value": "rgb(198.0,54.0,99.0)",
  "brand": "Shiseido",
  "colour": "Unfiltered",
  "r": 198,
  "g": 54,
  "b": 99,
  "rgb": "rgb(198, 54, 99)",
  "hex": "#c63663"
}, {
  "value": "rgb(191.0,13.0,62.0)",
  "brand": "Shiseido",
  "colour": "Sling Back",
  "r": 191,
  "g": 13,
  "b": 62,
  "rgb": "rgb(191, 13, 62)",
  "hex": "#bf0d3e"
}, {
  "value": "rgb(228.0,0.0,70.0)",
  "brand": "Shiseido",
  "colour": "Shock Wave",
  "r": 228,
  "g": 0,
  "b": 70,
  "rgb": "rgb(228, 0, 70)",
  "hex": "#e40046"
}, {
  "value": "rgb(151.0,27.0,47.0)",
  "brand": "Shiseido",
  "colour": "Hyper Red",
  "r": 151,
  "g": 27,
  "b": 47,
  "rgb": "rgb(151, 27, 47)",
  "hex": "#971b2f"
}, {
  "value": "rgb(147.0,39.0,44.0)",
  "brand": "Shiseido",
  "colour": "Mellow Drama",
  "r": 147,
  "g": 39,
  "b": 44,
  "rgb": "rgb(147, 39, 44)",
  "hex": "#93272c"
}, {
  "value": "rgb(165.0,0.0,52.0)",
  "brand": "Shiseido",
  "colour": "Exotic Red",
  "r": 165,
  "g": 0,
  "b": 52,
  "rgb": "rgb(165, 0, 52)",
  "hex": "#a50034"
}, {
  "value": "rgb(193.0,103.0,132.0)",
  "brand": "Shiseido",
  "colour": "Rose Hip",
  "r": 193,
  "g": 103,
  "b": 132,
  "rgb": "rgb(193, 103, 132)",
  "hex": "#c16784"
}, {
  "value": "rgb(153.0,30.0,102.0)",
  "brand": "Shiseido",
  "colour": "Selfie",
  "r": 153,
  "g": 30,
  "b": 102,
  "rgb": "rgb(153, 30, 102)",
  "hex": "#991e66"
}, {
  "value": "rgb(209.0,43.0,146.0)",
  "brand": "Shiseido",
  "colour": "Fuchsia Fetish",
  "r": 209,
  "g": 43,
  "b": 146,
  "rgb": "rgb(209, 43, 146)",
  "hex": "#d12b92"
}, {
  "value": "rgb(128.0,39.0,108.0)",
  "brand": "Shiseido",
  "colour": "After Hours",
  "r": 128,
  "g": 39,
  "b": 108,
  "rgb": "rgb(128, 39, 108)",
  "hex": "#80276c"
}, {
  "value": "rgb(129.0,49.0,47.0)",
  "brand": "Shiseido",
  "colour": "Nocturnal",
  "r": 129,
  "g": 49,
  "b": 47,
  "rgb": "rgb(129, 49, 47)",
  "hex": "#81312f"
}, {
  "value": "rgb(127.0,48.0,53.0)",
  "brand": "Shiseido",
  "colour": "Velvet Rope",
  "r": 127,
  "g": 48,
  "b": 53,
  "rgb": "rgb(127, 48, 53)",
  "hex": "#7f3035"
}, {
  "value": "rgb(63.0,32.0,33.0)",
  "brand": "Shiseido",
  "colour": "Majo",
  "r": 63,
  "g": 32,
  "b": 33,
  "rgb": "rgb(63, 32, 33)",
  "hex": "#3f2021"
}, {
  "value": "rgb(101.0,29.0,50.0)",
  "brand": "Shiseido",
  "colour": "Dark Fantasy",
  "r": 101,
  "g": 29,
  "b": 50,
  "rgb": "rgb(101, 29, 50)",
  "hex": "#651d32"
}, {
  "value": "rgb(192.0,125.0,89.0)",
  "brand": "Shiseido",
  "colour": "Cyber Beige",
  "r": 192,
  "g": 125,
  "b": 89,
  "rgb": "rgb(192, 125, 89)",
  "hex": "#c07d59"
}, {
  "value": "rgb(214.0,105.0,101.0)",
  "brand": "Shiseido",
  "colour": "Bullet Train",
  "r": 214,
  "g": 105,
  "b": 101,
  "rgb": "rgb(214, 105, 101)",
  "hex": "#d66965"
}, {
  "value": "rgb(171.0,92.0,87.0)",
  "brand": "Shiseido",
  "colour": "Night Rose",
  "r": 171,
  "g": 92,
  "b": 87,
  "rgb": "rgb(171, 92, 87)",
  "hex": "#ab5c57"
}, {
  "value": "rgb(134.0,38.0,51.0)",
  "brand": "Shiseido",
  "colour": "Scarlet Rush",
  "r": 134,
  "g": 38,
  "b": 51,
  "rgb": "rgb(134, 38, 51)",
  "hex": "#862633"
}, {
  "value": "rgb(231.0,130.0,169.0)",
  "brand": "Shiseido",
  "colour": "Pixel Pink",
  "r": 231,
  "g": 130,
  "b": 169,
  "rgb": "rgb(231, 130, 169)",
  "hex": "#e782a9"
}, {
  "value": "rgb(224.0,98.0,135.0)",
  "brand": "Shiseido",
  "colour": "Botan",
  "r": 224,
  "g": 98,
  "b": 135,
  "rgb": "rgb(224, 98, 135)",
  "hex": "#e06287"
}, {
  "value": "rgb(210.0,91.0,115.0)",
  "brand": "Shiseido",
  "colour": "Pink Dynasty",
  "r": 210,
  "g": 91,
  "b": 115,
  "rgb": "rgb(210, 91, 115)",
  "hex": "#d25b73"
}, {
  "value": "rgb(168.0,85.0,102.0)",
  "brand": "Shiseido",
  "colour": "Streaming Mauve",
  "r": 168,
  "g": 85,
  "b": 102,
  "rgb": "rgb(168, 85, 102)",
  "hex": "#a85566"
}, {
  "value": "rgb(194.0,110.0,96.0)",
  "brand": "Shiseido",
  "colour": "Incense",
  "r": 194,
  "g": 110,
  "b": 96,
  "rgb": "rgb(194, 110, 96)",
  "hex": "#c26e60"
}, {
  "value": "rgb(182.0,90.0,101.0)",
  "brand": "Shiseido",
  "colour": "J-Pop",
  "r": 182,
  "g": 90,
  "b": 101,
  "rgb": "rgb(182, 90, 101)",
  "hex": "#b65a65"
}, {
  "value": "rgb(182.0,108.0,109.0)",
  "brand": "Shiseido",
  "colour": "Rose Muse",
  "r": 182,
  "g": 108,
  "b": 109,
  "rgb": "rgb(182, 108, 109)",
  "hex": "#b66c6d"
}, {
  "value": "rgb(124.0,58.0,45.0)",
  "brand": "Shiseido",
  "colour": "Woodblock",
  "r": 124,
  "g": 58,
  "b": 45,
  "rgb": "rgb(124, 58, 45)",
  "hex": "#7c3a2d"
}, {
  "value": "rgb(227.0,28.0,121.0)",
  "brand": "Shiseido",
  "colour": "Neon Buzz",
  "r": 227,
  "g": 28,
  "b": 121,
  "rgb": "rgb(227, 28, 121)",
  "hex": "#e31c79"
}, {
  "value": "rgb(161.0,34.0,78.0)",
  "brand": "Shiseido",
  "colour": "Pink Flash",
  "r": 161,
  "g": 34,
  "b": 78,
  "rgb": "rgb(161, 34, 78)",
  "hex": "#a1224e"
}, {
  "value": "rgb(131.0,49.0,119.0)",
  "brand": "Shiseido",
  "colour": "Future Shock",
  "r": 131,
  "g": 49,
  "b": 119,
  "rgb": "rgb(131, 49, 119)",
  "hex": "#833177"
}, {
  "value": "rgb(115.0,46.0,74.0)",
  "brand": "Shiseido",
  "colour": "Vortex",
  "r": 115,
  "g": 46,
  "b": 74,
  "rgb": "rgb(115, 46, 74)",
  "hex": "#732e4a"
}, {
  "value": "rgb(255.0,88.0,93.0)",
  "brand": "Shiseido",
  "colour": "Coral Pop",
  "r": 255,
  "g": 88,
  "b": 93,
  "rgb": "rgb(255, 88, 93)",
  "hex": "#ff585d"
}, {
  "value": "rgb(207.0,69.0,32.0)",
  "brand": "Shiseido",
  "colour": "Volcanic",
  "r": 207,
  "g": 69,
  "b": 32,
  "rgb": "rgb(207, 69, 32)",
  "hex": "#cf4520"
}, {
  "value": "rgb(203.0,44.0,48.0)",
  "brand": "Shiseido",
  "colour": "Firecracker",
  "r": 203,
  "g": 44,
  "b": 48,
  "rgb": "rgb(203, 44, 48)",
  "hex": "#cb2c30"
}, {
  "value": "rgb(167.0,43.0,42.0)",
  "brand": "Shiseido",
  "colour": "Lantern Red",
  "r": 167,
  "g": 43,
  "b": 42,
  "rgb": "rgb(167, 43, 42)",
  "hex": "#a72b2a"
}, {
  "value": "rgb(186.0,12.0,47.0)",
  "brand": "Shiseido",
  "colour": "Code Red",
  "r": 186,
  "g": 12,
  "b": 47,
  "rgb": "rgb(186, 12, 47)",
  "hex": "#ba0c2f"
}, {
  "value": "rgb(171.0,35.0,40.0)",
  "brand": "Shiseido",
  "colour": "Ginza Red",
  "r": 171,
  "g": 35,
  "b": 40,
  "rgb": "rgb(171, 35, 40)",
  "hex": "#ab2328"
}, {
  "value": "rgb(128.0,47.0,45.0)",
  "brand": "Shiseido",
  "colour": "Shizuka Red",
  "r": 128,
  "g": 47,
  "b": 45,
  "rgb": "rgb(128, 47, 45)",
  "hex": "#802f2d"
}, {
  "value": "rgb(80.0,43.0,58.0)",
  "brand": "Shiseido",
  "colour": "Noble Plum",
  "r": 80,
  "g": 43,
  "b": 58,
  "rgb": "rgb(80, 43, 58)",
  "hex": "#502b3a"
}, {
  "value": "rgb(248.0,72.0,94.0)",
  "brand": "Shiseido",
  "colour": "High Rise",
  "r": 248,
  "g": 72,
  "b": 94,
  "rgb": "rgb(248, 72, 94)",
  "hex": "#f8485e"
}, {
  "value": "rgb(224.0,0.0,77.0)",
  "brand": "Shiseido",
  "colour": "Cherry Festival",
  "r": 224,
  "g": 0,
  "b": 77,
  "rgb": "rgb(224, 0, 77)",
  "hex": "#e0004d"
}, {
  "value": "rgb(204.84385763490246,126.04133180252583,117.68771526980478)",
  "brand": "Milk Makeup",
  "colour": "Skillz",
  "r": 204,
  "g": 126,
  "b": 117,
  "rgb": "rgb(204, 126, 117)",
  "hex": "#cc7e75"
}, {
  "value": "rgb(191.14387464387465,112.55413105413103,110.43019943019948)",
  "brand": "Milk Makeup",
  "colour": "C.R.E.A.M.",
  "r": 191,
  "g": 112,
  "b": 110,
  "rgb": "rgb(191, 112, 110)",
  "hex": "#bf706e"
}, {
  "value": "rgb(158.199036918138,90.29534510433386,108.27768860353132)",
  "brand": "Milk Makeup",
  "colour": "Hype",
  "r": 158,
  "g": 90,
  "b": 108,
  "rgb": "rgb(158, 90, 108)",
  "hex": "#9e5a6c"
}, {
  "value": "rgb(144.90111940298513,95.51305970149261,95.76679104477616)",
  "brand": "Milk Makeup",
  "colour": "Low Key",
  "r": 144,
  "g": 95,
  "b": 95,
  "rgb": "rgb(144, 95, 95)",
  "hex": "#905f5f"
}, {
  "value": "rgb(169.67908653846152,94.96754807692307,91.82812500000001)",
  "brand": "Milk Makeup",
  "colour": "Deuces",
  "r": 169,
  "g": 94,
  "b": 91,
  "rgb": "rgb(169, 94, 91)",
  "hex": "#a95e5b"
}, {
  "value": "rgb(108.01692047377327,56.66159052453467,49.793570219966156)",
  "brand": "Milk Makeup",
  "colour": "Wavy",
  "r": 108,
  "g": 56,
  "b": 49,
  "rgb": "rgb(108, 56, 49)",
  "hex": "#6c3831"
}, {
  "value": "rgb(149.15714285714276,80.51904761904764,86.47619047619047)",
  "brand": "Milk Makeup",
  "colour": "Wifey",
  "r": 149,
  "g": 80,
  "b": 86,
  "rgb": "rgb(149, 80, 86)",
  "hex": "#955056"
}, {
  "value": "rgb(93.4449760765551,17.886762360446617,32.940988835725705)",
  "brand": "Milk Makeup",
  "colour": "New Whip",
  "r": 93,
  "g": 17,
  "b": 32,
  "rgb": "rgb(93, 17, 32)",
  "hex": "#5d1120"
}, {
  "value": "rgb(215.1457800511509,35.654731457800516,37.81457800511507)",
  "brand": "Milk Makeup",
  "colour": "Name Drop",
  "r": 215,
  "g": 35,
  "b": 37,
  "rgb": "rgb(215, 35, 37)",
  "hex": "#d72325"
}, {
  "value": "rgb(185.45053475935828,18.001336898395717,43.70989304812832)",
  "brand": "Milk Makeup",
  "colour": "O.G. Red",
  "r": 185,
  "g": 18,
  "b": 43,
  "rgb": "rgb(185, 18, 43)",
  "hex": "#b9122b"
}, {
  "value": "rgb(191.29432624113485,105.52718676122895,101.34160756501188)",
  "brand": "Milk Makeup",
  "colour": "Werk",
  "r": 191,
  "g": 105,
  "b": 101,
  "rgb": "rgb(191, 105, 101)",
  "hex": "#bf6965"
}, {
  "value": "rgb(250.69855967078246,101.32818930041157,106.00925925925921)",
  "brand": "Milk Makeup",
  "colour": "Perk",
  "r": 250,
  "g": 101,
  "b": 106,
  "rgb": "rgb(250, 101, 106)",
  "hex": "#fa656a"
}, {
  "value": "rgb(208.75921908893716,86.13665943600843,134.04013015184375)",
  "brand": "Milk Makeup",
  "colour": "Rally",
  "r": 208,
  "g": 86,
  "b": 134,
  "rgb": "rgb(208, 86, 134)",
  "hex": "#d05686"
}, {
  "value": "rgb(251.59633027522915,130.7981651376145,197.32415902140687)",
  "brand": "Milk Makeup",
  "colour": "Swish",
  "r": 251,
  "g": 130,
  "b": 197,
  "rgb": "rgb(251, 130, 197)",
  "hex": "#fb82c5"
}, {
  "value": "rgb(121.98775510204084,9.467346938775737,36.869387755102004)",
  "brand": "Milk Makeup",
  "colour": "Quickie",
  "r": 121,
  "g": 9,
  "b": 36,
  "rgb": "rgb(121, 9, 36)",
  "hex": "#790924"
}, {
  "value": "rgb(236.01103752759386,27.995584988962264,71.05518763796849)",
  "brand": "Milk Makeup",
  "colour": "Solar",
  "r": 236,
  "g": 27,
  "b": 71,
  "rgb": "rgb(236, 27, 71)",
  "hex": "#ec1b47"
}, {
  "value": "rgb(251.50641025641028,93.5683760683755,147.33547008547023)",
  "brand": "Milk Makeup",
  "colour": "Halo",
  "r": 251,
  "g": 93,
  "b": 147,
  "rgb": "rgb(251, 93, 147)",
  "hex": "#fb5d93"
}, {
  "value": "rgb(207.35172413793103,128.41149425287355,167.0804597701149)",
  "brand": "Milk Makeup",
  "colour": "Astro",
  "r": 207,
  "g": 128,
  "b": 167,
  "rgb": "rgb(207, 128, 167)",
  "hex": "#cf80a7"
}, {
  "value": "rgb(254.79259259259263,157.54074074074077,148.30864197530883)",
  "brand": "Milk Makeup",
  "colour": "Flare",
  "r": 254,
  "g": 157,
  "b": 148,
  "rgb": "rgb(254, 157, 148)",
  "hex": "#fe9d94"
}, {
  "value": "rgb(197.80306345733067,94.16192560175008,96.56892778993449)",
  "brand": "Milk Makeup",
  "colour": "Glimmer",
  "r": 197,
  "g": 94,
  "b": 96,
  "rgb": "rgb(197, 94, 96)",
  "hex": "#c55e60"
}, {
  "value": "rgb(191.29432624113485,105.52718676122895,101.34160756501188)",
  "brand": "Milk Makeup",
  "colour": "Werk",
  "r": 191,
  "g": 105,
  "b": 101,
  "rgb": "rgb(191, 105, 101)",
  "hex": "#bf6965"
}, {
  "value": "rgb(250.69855967078246,101.32818930041157,106.00925925925921)",
  "brand": "Milk Makeup",
  "colour": "Perk",
  "r": 250,
  "g": 101,
  "b": 106,
  "rgb": "rgb(250, 101, 106)",
  "hex": "#fa656a"
}, {
  "value": "rgb(144.0,72.0,58.0)",
  "brand": "KKW BEAUTY",
  "colour": "Classic Icon 1",
  "r": 144,
  "g": 72,
  "b": 58,
  "rgb": "rgb(144, 72, 58)",
  "hex": "#90483a"
}, {
  "value": "rgb(205.0,123.0,99.0)",
  "brand": "KKW BEAUTY",
  "colour": "Classic Icon 2",
  "r": 205,
  "g": 123,
  "b": 99,
  "rgb": "rgb(205, 123, 99)",
  "hex": "#cd7b63"
}, {
  "value": "rgb(233.0,148.0,143.0)",
  "brand": "KKW BEAUTY",
  "colour": "Pink 1",
  "r": 233,
  "g": 148,
  "b": 143,
  "rgb": "rgb(233, 148, 143)",
  "hex": "#e9948f"
}, {
  "value": "rgb(218.0,123.0,131.0)",
  "brand": "KKW BEAUTY",
  "colour": "Pink 2",
  "r": 218,
  "g": 123,
  "b": 131,
  "rgb": "rgb(218, 123, 131)",
  "hex": "#da7b83"
}, {
  "value": "rgb(206.0,105.0,109.0)",
  "brand": "KKW BEAUTY",
  "colour": "Pink 3",
  "r": 206,
  "g": 105,
  "b": 109,
  "rgb": "rgb(206, 105, 109)",
  "hex": "#ce696d"
}, {
  "value": "rgb(205.0,106.0,111.0)",
  "brand": "KKW BEAUTY",
  "colour": "Pink 4",
  "r": 205,
  "g": 106,
  "b": 111,
  "rgb": "rgb(205, 106, 111)",
  "hex": "#cd6a6f"
}, {
  "value": "rgb(185.0,110.0,115.0)",
  "brand": "KKW BEAUTY",
  "colour": "Pink 5",
  "r": 185,
  "g": 110,
  "b": 115,
  "rgb": "rgb(185, 110, 115)",
  "hex": "#b96e73"
}, {
  "value": "rgb(158.0,62.0,76.0)",
  "brand": "KKW BEAUTY",
  "colour": "Pink 6",
  "r": 158,
  "g": 62,
  "b": 76,
  "rgb": "rgb(158, 62, 76)",
  "hex": "#9e3e4c"
}, {
  "value": "rgb(217.0,12.0,27.0)",
  "brand": "KKW BEAUTY",
  "colour": "Classic Red",
  "r": 217,
  "g": 12,
  "b": 27,
  "rgb": "rgb(217, 12, 27)",
  "hex": "#d90c1b"
}, {
  "value": "rgb(234.0,51.0,43.0)",
  "brand": "KKW BEAUTY",
  "colour": "Hot Sauce",
  "r": 234,
  "g": 51,
  "b": 43,
  "rgb": "rgb(234, 51, 43)",
  "hex": "#ea332b"
}, {
  "value": "rgb(189.0,13.0,33.0)",
  "brand": "KKW BEAUTY",
  "colour": "Candy Apple Red",
  "r": 189,
  "g": 13,
  "b": 33,
  "rgb": "rgb(189, 13, 33)",
  "hex": "#bd0d21"
}, {
  "value": "rgb(158.0,45.0,47.0)",
  "brand": "KKW BEAUTY",
  "colour": "Cherry Pop",
  "r": 158,
  "g": 45,
  "b": 47,
  "rgb": "rgb(158, 45, 47)",
  "hex": "#9e2d2f"
}, {
  "value": "rgb(211.0,141.0,133.0)",
  "brand": "KKW BEAUTY",
  "colour": "Nude 1",
  "r": 211,
  "g": 141,
  "b": 133,
  "rgb": "rgb(211, 141, 133)",
  "hex": "#d38d85"
}, {
  "value": "rgb(228.0,180.0,158.0)",
  "brand": "KKW BEAUTY",
  "colour": "Nude 1.5",
  "r": 228,
  "g": 180,
  "b": 158,
  "rgb": "rgb(228, 180, 158)",
  "hex": "#e4b49e"
}, {
  "value": "rgb(203.0,120.0,102.0)",
  "brand": "KKW BEAUTY",
  "colour": "Nude 2",
  "r": 203,
  "g": 120,
  "b": 102,
  "rgb": "rgb(203, 120, 102)",
  "hex": "#cb7866"
}, {
  "value": "rgb(220.0,145.0,116.0)",
  "brand": "KKW BEAUTY",
  "colour": "Nude 2.5",
  "r": 220,
  "g": 145,
  "b": 116,
  "rgb": "rgb(220, 145, 116)",
  "hex": "#dc9174"
}, {
  "value": "rgb(187.0,112.0,93.0)",
  "brand": "KKW BEAUTY",
  "colour": "Nude 3",
  "r": 187,
  "g": 112,
  "b": 93,
  "rgb": "rgb(187, 112, 93)",
  "hex": "#bb705d"
}, {
  "value": "rgb(198.0,122.0,106.0)",
  "brand": "KKW BEAUTY",
  "colour": "Nude 3.5",
  "r": 198,
  "g": 122,
  "b": 106,
  "rgb": "rgb(198, 122, 106)",
  "hex": "#c67a6a"
}, {
  "value": "rgb(189.0,121.0,110.0)",
  "brand": "KKW BEAUTY",
  "colour": "Nude 4",
  "r": 189,
  "g": 121,
  "b": 110,
  "rgb": "rgb(189, 121, 110)",
  "hex": "#bd796e"
}, {
  "value": "rgb(181.0,92.0,88.0)",
  "brand": "KKW BEAUTY",
  "colour": "Nude 5",
  "r": 181,
  "g": 92,
  "b": 88,
  "rgb": "rgb(181, 92, 88)",
  "hex": "#b55c58"
}, {
  "value": "rgb(143.0,72.0,66.0)",
  "brand": "KKW BEAUTY",
  "colour": "Nude 6",
  "r": 143,
  "g": 72,
  "b": 66,
  "rgb": "rgb(143, 72, 66)",
  "hex": "#8f4842"
}, {
  "value": "rgb(135.0,71.0,69.0)",
  "brand": "KKW BEAUTY",
  "colour": "Nude 7",
  "r": 135,
  "g": 71,
  "b": 69,
  "rgb": "rgb(135, 71, 69)",
  "hex": "#874745"
}, {
  "value": "rgb(81.0,46.0,40.0)",
  "brand": "KKW BEAUTY",
  "colour": "Nude 8",
  "r": 81,
  "g": 46,
  "b": 40,
  "rgb": "rgb(81, 46, 40)",
  "hex": "#512e28"
}, {
  "value": "rgb(238.16157690172128,154.107162687396,166.98611882287608)",
  "brand": "IT Cosmetics",
  "colour": "Damsel",
  "r": 238,
  "g": 154,
  "b": 166,
  "rgb": "rgb(238, 154, 166)",
  "hex": "#ee9aa6"
}, {
  "value": "rgb(247.29850746268662,194.9781859931113,208.1412169919632)",
  "brand": "IT Cosmetics",
  "colour": "Je Ne Sais Quoi",
  "r": 247,
  "g": 194,
  "b": 208,
  "rgb": "rgb(247, 194, 208)",
  "hex": "#f7c2d0"
}, {
  "value": "rgb(236.11384783798576,137.03393541324567,156.93760262725772)",
  "brand": "IT Cosmetics",
  "colour": "Love Story",
  "r": 236,
  "g": 137,
  "b": 156,
  "rgb": "rgb(236, 137, 156)",
  "hex": "#ec899c"
}, {
  "value": "rgb(196.93114754098352,70.08852459016418,87.03497267759568)",
  "brand": "IT Cosmetics",
  "colour": "Pretty Woman",
  "r": 196,
  "g": 70,
  "b": 87,
  "rgb": "rgb(196, 70, 87)",
  "hex": "#c44657"
}, {
  "value": "rgb(173.95673603504912,89.09529025191675,91.97535596933206)",
  "brand": "IT Cosmetics",
  "colour": "Pure Joy",
  "r": 173,
  "g": 89,
  "b": 91,
  "rgb": "rgb(173, 89, 91)",
  "hex": "#ad595b"
}, {
  "value": "rgb(216.20066703724294,119.04391328515841,128.07448582545865)",
  "brand": "IT Cosmetics",
  "colour": "Rose Flush",
  "r": 216,
  "g": 119,
  "b": 128,
  "rgb": "rgb(216, 119, 128)",
  "hex": "#d87780"
}, {
  "value": "rgb(167.21892497200432,97.12541993281056,85.09014557670777)",
  "brand": "UOMA BEAUTY",
  "colour": "Angela",
  "r": 167,
  "g": 97,
  "b": 85,
  "rgb": "rgb(167, 97, 85)",
  "hex": "#a76155"
}, {
  "value": "rgb(156.16638655462197,98.01288515406175,87.12044817927203)",
  "brand": "UOMA BEAUTY",
  "colour": "Aretha",
  "r": 156,
  "g": 98,
  "b": 87,
  "rgb": "rgb(156, 98, 87)",
  "hex": "#9c6257"
}, {
  "value": "rgb(104.67279821627616,44.25529542920863,46.63099219620973)",
  "brand": "UOMA BEAUTY",
  "colour": "Brenda",
  "r": 104,
  "g": 44,
  "b": 46,
  "rgb": "rgb(104, 44, 46)",
  "hex": "#682c2e"
}, {
  "value": "rgb(151.93694690265508,65.99336283185856,113.06581858407056)",
  "brand": "UOMA BEAUTY",
  "colour": "Chaka",
  "r": 151,
  "g": 65,
  "b": 113,
  "rgb": "rgb(151, 65, 113)",
  "hex": "#974171"
}, {
  "value": "rgb(208.94804469273748,107.10446927374295,103.09273743016773)",
  "brand": "UOMA BEAUTY",
  "colour": "Coretta",
  "r": 208,
  "g": 107,
  "b": 103,
  "rgb": "rgb(208, 107, 103)",
  "hex": "#d06b67"
}, {
  "value": "rgb(145.98443579766553,47.20844913841056,50.54085603112865)",
  "brand": "UOMA BEAUTY",
  "colour": "Diana",
  "r": 145,
  "g": 47,
  "b": 50,
  "rgb": "rgb(145, 47, 50)",
  "hex": "#912f32"
}, {
  "value": "rgb(216.18270332187856,144.25200458190153,119.11798396334488)",
  "brand": "UOMA BEAUTY",
  "colour": "Eartha",
  "r": 216,
  "g": 144,
  "b": 119,
  "rgb": "rgb(216, 144, 119)",
  "hex": "#d89077"
}, {
  "value": "rgb(146.02879291251406,57.11129568106308,85.0609080841642)",
  "brand": "UOMA BEAUTY",
  "colour": "Funmilayo",
  "r": 146,
  "g": 57,
  "b": 85,
  "rgb": "rgb(146, 57, 85)",
  "hex": "#923955"
}, {
  "value": "rgb(194.97431602456717,119.2490228922386,103.12004466778369)",
  "brand": "UOMA BEAUTY",
  "colour": "Maya",
  "r": 194,
  "g": 119,
  "b": 103,
  "rgb": "rgb(194, 119, 103)",
  "hex": "#c27767"
}, {
  "value": "rgb(170.20699379582635,88.12239142696008,89.98364354201898)",
  "brand": "UOMA BEAUTY",
  "colour": "Miriam",
  "r": 170,
  "g": 88,
  "b": 89,
  "rgb": "rgb(170, 88, 89)",
  "hex": "#aa5859"
}, {
  "value": "rgb(131.11240310077537,78.95957918050934,66.0913621262458)",
  "brand": "UOMA BEAUTY",
  "colour": "Nina",
  "r": 131,
  "g": 78,
  "b": 66,
  "rgb": "rgb(131, 78, 66)",
  "hex": "#834e42"
}, {
  "value": "rgb(205.77746793084202,42.23591745677676,51.138873396541584)",
  "brand": "UOMA BEAUTY",
  "colour": "Sade",
  "r": 205,
  "g": 42,
  "b": 51,
  "rgb": "rgb(205, 42, 51)",
  "hex": "#cd2a33"
}, {
  "value": "rgb(244.6503653738055,73.10230466554304,70.99044406970177)",
  "brand": "UOMA BEAUTY",
  "colour": "Tina",
  "r": 244,
  "g": 73,
  "b": 70,
  "rgb": "rgb(244, 73, 70)",
  "hex": "#f44946"
}, {
  "value": "rgb(126.1509433962263,69.13041065482777,50.18479467258578)",
  "brand": "UOMA BEAUTY",
  "colour": "Tracy",
  "r": 126,
  "g": 69,
  "b": 50,
  "rgb": "rgb(126, 69, 50)",
  "hex": "#7e4532"
}, {
  "value": "rgb(238.76460767946577,62.07456872565346,91.0818030050081)",
  "brand": "UOMA BEAUTY",
  "colour": "Whitney",
  "r": 238,
  "g": 62,
  "b": 91,
  "rgb": "rgb(238, 62, 91)",
  "hex": "#ee3e5b"
}, {
  "value": "rgb(124.17461197339233,61.183481152993686,69.02050997782688)",
  "brand": "UOMA BEAUTY",
  "colour": "Winnie",
  "r": 124,
  "g": 61,
  "b": 69,
  "rgb": "rgb(124, 61, 69)",
  "hex": "#7c3d45"
}, {
  "value": "rgb(101.18054779206224,2.869759642258444,85.1498043599778)",
  "brand": "UOMA BEAUTY",
  "colour": "Allure",
  "r": 101,
  "g": 2,
  "b": 85,
  "rgb": "rgb(101, 2, 85)",
  "hex": "#650255"
}, {
  "value": "rgb(178.6339537507049,118.5826283135926,55.218838127467365)",
  "brand": "UOMA BEAUTY",
  "colour": "Lady of Gold",
  "r": 178,
  "g": 118,
  "b": 55,
  "rgb": "rgb(178, 118, 55)",
  "hex": "#b27637"
}, {
  "value": "rgb(88.22247065399634,32.25656791503653,41.182783678032614)",
  "brand": "UOMA BEAUTY",
  "colour": "Mother",
  "r": 88,
  "g": 32,
  "b": 41,
  "rgb": "rgb(88, 32, 41)",
  "hex": "#582029"
}, {
  "value": "rgb(122.6146547179757,0.9752240379545647,1.0785450711642035)",
  "brand": "UOMA BEAUTY",
  "colour": "On-fire",
  "r": 122,
  "g": 0,
  "b": 1,
  "rgb": "rgb(122, 0, 1)",
  "hex": "#7a0001"
}, {
  "value": "rgb(94.2709541381126,18.013705851343822,10.54348972061185)",
  "brand": "UOMA BEAUTY",
  "colour": "Poise",
  "r": 94,
  "g": 18,
  "b": 10,
  "rgb": "rgb(94, 18, 10)",
  "hex": "#5e120a"
}, {
  "value": "rgb(169.047443331576,4.218766473378359,42.43331576172914)",
  "brand": "UOMA BEAUTY",
  "colour": "Savage",
  "r": 169,
  "g": 4,
  "b": 42,
  "rgb": "rgb(169, 4, 42)",
  "hex": "#a9042a"
}, {
  "value": "rgb(61.070601013758136,31.138667632150682,35.61259956553218)",
  "brand": "Huda Beauty",
  "colour": "Masquerade",
  "r": 61,
  "g": 31,
  "b": 35,
  "rgb": "rgb(61, 31, 35)",
  "hex": "#3d1f23"
}, {
  "value": "rgb(104.54082436334984,36.942504594381745,47.789708584930366)",
  "brand": "Huda Beauty",
  "colour": "Ladies Night",
  "r": 104,
  "g": 36,
  "b": 47,
  "rgb": "rgb(104, 36, 47)",
  "hex": "#68242f"
}, {
  "value": "rgb(148.17917448405254,67.21044402751718,86.15916197623513)",
  "brand": "Huda Beauty",
  "colour": "Pool Party",
  "r": 148,
  "g": 67,
  "b": 86,
  "rgb": "rgb(148, 67, 86)",
  "hex": "#944356"
}, {
  "value": "rgb(141.34549434512945,75.42904049616928,69.54359722728931)",
  "brand": "Huda Beauty",
  "colour": "Graduation Day",
  "r": 141,
  "g": 75,
  "b": 69,
  "rgb": "rgb(141, 75, 69)",
  "hex": "#8d4b45"
}, {
  "value": "rgb(155.6060402684565,76.25234899328856,85.70570469798663)",
  "brand": "Huda Beauty",
  "colour": "Pay Day",
  "r": 155,
  "g": 76,
  "b": 85,
  "rgb": "rgb(155, 76, 85)",
  "hex": "#9b4c55"
}, {
  "value": "rgb(135.40590582601735,61.737110933758835,60.64102154828413)",
  "brand": "Huda Beauty",
  "colour": "Third Date",
  "r": 135,
  "g": 61,
  "b": 60,
  "rgb": "rgb(135, 61, 60)",
  "hex": "#873d3c"
}, {
  "value": "rgb(147.0166867366248,88.73335627042817,81.04249096851917)",
  "brand": "Huda Beauty",
  "colour": "Joyride",
  "r": 147,
  "g": 88,
  "b": 81,
  "rgb": "rgb(147, 88, 81)",
  "hex": "#935851"
}, {
  "value": "rgb(171.44771611929025,87.90033975084933,80.08342770856922)",
  "brand": "Huda Beauty",
  "colour": "Interview",
  "r": 171,
  "g": 87,
  "b": 80,
  "rgb": "rgb(171, 87, 80)",
  "hex": "#ab5750"
}, {
  "value": "rgb(204.90144048521606,52.08415466262324,91.29871114480669)",
  "brand": "Huda Beauty",
  "colour": "Bachelorette",
  "r": 204,
  "g": 52,
  "b": 91,
  "rgb": "rgb(204, 52, 91)",
  "hex": "#cc345b"
}, {
  "value": "rgb(228.11218501898506,59.50189851570582,71.41146013117007)",
  "brand": "Huda Beauty",
  "colour": "Spring Break",
  "r": 228,
  "g": 59,
  "b": 71,
  "rgb": "rgb(228, 59, 71)",
  "hex": "#e43b47"
}, {
  "value": "rgb(180.88786279683376,116.10004397537381,91.92897977132804)",
  "brand": "Huda Beauty",
  "colour": "Staycation",
  "r": 180,
  "g": 116,
  "b": 91,
  "rgb": "rgb(180, 116, 91)",
  "hex": "#b4745b"
}, {
  "value": "rgb(184.9853747714808,112.00388482632538,93.03999085923212)",
  "brand": "Huda Beauty",
  "colour": "Anniversary",
  "r": 184,
  "g": 112,
  "b": 93,
  "rgb": "rgb(184, 112, 93)",
  "hex": "#b8705d"
}, {
  "value": "rgb(209.76975169300223,87.65208803611749,100.68312641083497)",
  "brand": "Huda Beauty",
  "colour": "Honeymoon",
  "r": 209,
  "g": 87,
  "b": 100,
  "rgb": "rgb(209, 87, 100)",
  "hex": "#d15764"
}, {
  "value": "rgb(200.20977198697045,100.12247557003255,97.8439739413679)",
  "brand": "Huda Beauty",
  "colour": "Rendez-Vous",
  "r": 200,
  "g": 100,
  "b": 97,
  "rgb": "rgb(200, 100, 97)",
  "hex": "#c86461"
}, {
  "value": "rgb(140.31888544891638,35.66160990712071,35.66191950464399)",
  "brand": "Huda Beauty",
  "colour": "Promotion Day",
  "r": 140,
  "g": 35,
  "b": 35,
  "rgb": "rgb(140, 35, 35)",
  "hex": "#8c2323"
}, {
  "value": "rgb(172.7677072843236,22.11178247734138,33.92614971466934)",
  "brand": "Huda Beauty",
  "colour": "El Cinco de Mayo",
  "r": 172,
  "g": 22,
  "b": 33,
  "rgb": "rgb(172, 22, 33)",
  "hex": "#ac1621"
}, {
  "value": "rgb(169.51068533529846,86.57553426676495,82.5887988209285)",
  "brand": "Huda Beauty",
  "colour": "Wedding Day",
  "r": 169,
  "g": 86,
  "b": 82,
  "rgb": "rgb(169, 86, 82)",
  "hex": "#a95652"
}, {
  "value": "rgb(157.4371565934066,79.5518543956044,71.93509615384615)",
  "brand": "Huda Beauty",
  "colour": "First Kiss",
  "r": 157,
  "g": 79,
  "b": 71,
  "rgb": "rgb(157, 79, 71)",
  "hex": "#9d4f47"
}, {
  "value": "rgb(179.17158527030548,99.64873335074434,95.93862627317836)",
  "brand": "Huda Beauty",
  "colour": "Girls Trip",
  "r": 179,
  "g": 99,
  "b": 95,
  "rgb": "rgb(179, 99, 95)",
  "hex": "#b3635f"
}, {
  "value": "rgb(190.38662033014768,110.01824500434401,101.13958876339417)",
  "brand": "Huda Beauty",
  "colour": "Prom Night",
  "r": 190,
  "g": 110,
  "b": 101,
  "rgb": "rgb(190, 110, 101)",
  "hex": "#be6e65"
}, {
  "value": "rgb(126.02961215932915,75.1391509433962,58.12237945492661)",
  "brand": "Huda Beauty",
  "colour": "Last Night",
  "r": 126,
  "g": 75,
  "b": 58,
  "rgb": "rgb(126, 75, 58)",
  "hex": "#7e4b3a"
}, {
  "value": "rgb(160.70147874306838,95.92536968576711,78.08918669131238)",
  "brand": "Huda Beauty",
  "colour": "Board Meeting",
  "r": 160,
  "g": 95,
  "b": 78,
  "rgb": "rgb(160, 95, 78)",
  "hex": "#a05f4e"
}, {
  "value": "rgb(127.92541856925423,70.20015220700148,58.10730593607305)",
  "brand": "Huda Beauty",
  "colour": "Game Night  ",
  "r": 127,
  "g": 70,
  "b": 58,
  "rgb": "rgb(127, 70, 58)",
  "hex": "#7f463a"
}, {
  "value": "rgb(130.8351603735282,86.59358505887126,88.07673568818511)",
  "brand": "Huda Beauty",
  "colour": "Dirty Thirty",
  "r": 130,
  "g": 86,
  "b": 88,
  "rgb": "rgb(130, 86, 88)",
  "hex": "#825658"
}, {
  "value": "rgb(216.0,118.0,144.0)",
  "brand": "Burt's Bees",
  "colour": "IcedIris",
  "r": 216,
  "g": 118,
  "b": 144,
  "rgb": "rgb(216, 118, 144)",
  "hex": "#d87690"
}, {
  "value": "rgb(178.0,50.0,93.0)",
  "brand": "Burt's Bees",
  "colour": "FuchsiaFlood",
  "r": 178,
  "g": 50,
  "b": 93,
  "rgb": "rgb(178, 50, 93)",
  "hex": "#b2325d"
}, {
  "value": "rgb(147.0,21.0,78.0)",
  "brand": "Burt's Bees",
  "colour": "MagentaRush",
  "r": 147,
  "g": 21,
  "b": 78,
  "rgb": "rgb(147, 21, 78)",
  "hex": "#93154e"
}, {
  "value": "rgb(181.0,62.0,62.0)",
  "brand": "Burt's Bees",
  "colour": "SunsetCruise",
  "r": 181,
  "g": 62,
  "b": 62,
  "rgb": "rgb(181, 62, 62)",
  "hex": "#b53e3e"
}, {
  "value": "rgb(200.0,128.0,104.0)",
  "brand": "Burt's Bees",
  "colour": "NileNude",
  "r": 200,
  "g": 128,
  "b": 104,
  "rgb": "rgb(200, 128, 104)",
  "hex": "#c88068"
}, {
  "value": "rgb(165.0,81.0,86.0)",
  "brand": "Burt's Bees",
  "colour": "BlushBasin",
  "r": 165,
  "g": 81,
  "b": 86,
  "rgb": "rgb(165, 81, 86)",
  "hex": "#a55156"
}, {
  "value": "rgb(166.0,98.0,98.0)",
  "brand": "Burt's Bees",
  "colour": "SuedeSplash",
  "r": 166,
  "g": 98,
  "b": 98,
  "rgb": "rgb(166, 98, 98)",
  "hex": "#a66262"
}, {
  "value": "rgb(149.0,11.0,13.0)",
  "brand": "Burt's Bees",
  "colour": "ScarletSoaked",
  "r": 149,
  "g": 11,
  "b": 13,
  "rgb": "rgb(149, 11, 13)",
  "hex": "#950b0d"
}, {
  "value": "rgb(132.0,35.0,53.0)",
  "brand": "Burt's Bees",
  "colour": "RubyRipple",
  "r": 132,
  "g": 35,
  "b": 53,
  "rgb": "rgb(132, 35, 53)",
  "hex": "#842335"
}, {
  "value": "rgb(119.0,37.0,38.0)",
  "brand": "Burt's Bees",
  "colour": "RussetRiver",
  "r": 119,
  "g": 37,
  "b": 38,
  "rgb": "rgb(119, 37, 38)",
  "hex": "#772526"
}, {
  "value": "rgb(189.0,116.0,159.0)",
  "brand": "Burt's Bees",
  "colour": "TulipTide",
  "r": 189,
  "g": 116,
  "b": 159,
  "rgb": "rgb(189, 116, 159)",
  "hex": "#bd749f"
}, {
  "value": "rgb(141.0,52.0,80.0)",
  "brand": "Burt's Bees",
  "colour": "LilyLake",
  "r": 141,
  "g": 52,
  "b": 80,
  "rgb": "rgb(141, 52, 80)",
  "hex": "#8d3450"
}, {
  "value": "rgb(110.0,17.0,52.0)",
  "brand": "Burt's Bees",
  "colour": "BrimmingBerry",
  "r": 110,
  "g": 17,
  "b": 52,
  "rgb": "rgb(110, 17, 52)",
  "hex": "#6e1134"
}, {
  "value": "rgb(82.0,31.0,52.0)",
  "brand": "Burt's Bees",
  "colour": "JuniperWater",
  "r": 82,
  "g": 31,
  "b": 52,
  "rgb": "rgb(82, 31, 52)",
  "hex": "#521f34"
}, {
  "value": "rgb(104.0,20.0,42.0)",
  "brand": "Burt's Bees",
  "colour": "crimsoncoast",
  "r": 104,
  "g": 20,
  "b": 42,
  "rgb": "rgb(104, 20, 42)",
  "hex": "#68142a"
}, {
  "value": "rgb(96.0,48.0,65.0)",
  "brand": "Burt's Bees",
  "colour": "orchidocean",
  "r": 96,
  "g": 48,
  "b": 65,
  "rgb": "rgb(96, 48, 65)",
  "hex": "#603041"
}, {
  "value": "rgb(139.0,38.0,59.0)",
  "brand": "Burt's Bees",
  "colour": "winewave",
  "r": 139,
  "g": 38,
  "b": 59,
  "rgb": "rgb(139, 38, 59)",
  "hex": "#8b263b"
}, {
  "value": "rgb(164.0,75.0,90.0)",
  "brand": "Burt's Bees",
  "colour": "dousedrose",
  "r": 164,
  "g": 75,
  "b": 90,
  "rgb": "rgb(164, 75, 90)",
  "hex": "#a44b5a"
}, {
  "value": "rgb(234.0,191.0,199.0)",
  "brand": "Burt's Bees",
  "colour": "Champagne",
  "r": 234,
  "g": 191,
  "b": 199,
  "rgb": "rgb(234, 191, 199)",
  "hex": "#eabfc7"
}, {
  "value": "rgb(214.0,141.0,142.0)",
  "brand": "Burt's Bees",
  "colour": "Peony",
  "r": 214,
  "g": 141,
  "b": 142,
  "rgb": "rgb(214, 141, 142)",
  "hex": "#d68d8e"
}, {
  "value": "rgb(188.0,118.0,107.0)",
  "brand": "Burt's Bees",
  "colour": "Caramel",
  "r": 188,
  "g": 118,
  "b": 107,
  "rgb": "rgb(188, 118, 107)",
  "hex": "#bc766b"
}, {
  "value": "rgb(164.0,114.0,111.0)",
  "brand": "Burt's Bees",
  "colour": "Cocoa",
  "r": 164,
  "g": 114,
  "b": 111,
  "rgb": "rgb(164, 114, 111)",
  "hex": "#a4726f"
}, {
  "value": "rgb(245.0,168.0,137.0)",
  "brand": "Burt's Bees",
  "colour": "Apricot",
  "r": 245,
  "g": 168,
  "b": 137,
  "rgb": "rgb(245, 168, 137)",
  "hex": "#f5a889"
}, {
  "value": "rgb(243.0,166.0,161.0)",
  "brand": "Burt's Bees",
  "colour": "Grapefruit",
  "r": 243,
  "g": 166,
  "b": 161,
  "rgb": "rgb(243, 166, 161)",
  "hex": "#f3a6a1"
}, {
  "value": "rgb(231.0,156.0,184.0)",
  "brand": "Burt's Bees",
  "colour": "Strawberry",
  "r": 231,
  "g": 156,
  "b": 184,
  "rgb": "rgb(231, 156, 184)",
  "hex": "#e79cb8"
}, {
  "value": "rgb(216.0,161.0,179.0)",
  "brand": "Burt's Bees",
  "colour": "Guava",
  "r": 216,
  "g": 161,
  "b": 179,
  "rgb": "rgb(216, 161, 179)",
  "hex": "#d8a1b3"
}, {
  "value": "rgb(177.0,97.0,124.0)",
  "brand": "Burt's Bees",
  "colour": "Watermelon",
  "r": 177,
  "g": 97,
  "b": 124,
  "rgb": "rgb(177, 97, 124)",
  "hex": "#b1617c"
}, {
  "value": "rgb(217.0,88.0,108.0)",
  "brand": "Burt's Bees",
  "colour": "Rhubarb",
  "r": 217,
  "g": 88,
  "b": 108,
  "rgb": "rgb(217, 88, 108)",
  "hex": "#d9586c"
}, {
  "value": "rgb(197.0,66.0,76.0)",
  "brand": "Burt's Bees",
  "colour": "Cherry",
  "r": 197,
  "g": 66,
  "b": 76,
  "rgb": "rgb(197, 66, 76)",
  "hex": "#c5424c"
}, {
  "value": "rgb(217.0,93.0,117.0)",
  "brand": "Burt's Bees",
  "colour": "Raisin",
  "r": 217,
  "g": 93,
  "b": 117,
  "rgb": "rgb(217, 93, 117)",
  "hex": "#d95d75"
}, {
  "value": "rgb(171.0,89.0,97.0)",
  "brand": "Burt's Bees",
  "colour": "Fig",
  "r": 171,
  "g": 89,
  "b": 97,
  "rgb": "rgb(171, 89, 97)",
  "hex": "#ab5961"
}, {
  "value": "rgb(158.0,77.0,100.0)",
  "brand": "Burt's Bees",
  "colour": "Plum",
  "r": 158,
  "g": 77,
  "b": 100,
  "rgb": "rgb(158, 77, 100)",
  "hex": "#9e4d64"
}, {
  "value": "rgb(239.0,105.0,130.0)",
  "brand": "Burt's Bees",
  "colour": "BlushBay",
  "r": 239,
  "g": 105,
  "b": 130,
  "rgb": "rgb(239, 105, 130)",
  "hex": "#ef6982"
}, {
  "value": "rgb(186.0,54.0,60.0)",
  "brand": "Burt's Bees",
  "colour": "DahliaDew",
  "r": 186,
  "g": 54,
  "b": 60,
  "rgb": "rgb(186, 54, 60)",
  "hex": "#ba363c"
}, {
  "value": "rgb(152.0,37.0,59.0)",
  "brand": "Burt's Bees",
  "colour": "LilacLagoon",
  "r": 152,
  "g": 37,
  "b": 59,
  "rgb": "rgb(152, 37, 59)",
  "hex": "#98253b"
}, {
  "value": "rgb(227.0,148.0,104.0)",
  "brand": "Burt's Bees",
  "colour": "PeachPond",
  "r": 227,
  "g": 148,
  "b": 104,
  "rgb": "rgb(227, 148, 104)",
  "hex": "#e39468"
}, {
  "value": "rgb(227.0,112.0,111.0)",
  "brand": "Burt's Bees",
  "colour": "PeonyPool",
  "r": 227,
  "g": 112,
  "b": 111,
  "rgb": "rgb(227, 112, 111)",
  "hex": "#e3706f"
}, {
  "value": "rgb(205.0,117.0,111.0)",
  "brand": "Burt's Bees",
  "colour": "SuezSands",
  "r": 205,
  "g": 117,
  "b": 111,
  "rgb": "rgb(205, 117, 111)",
  "hex": "#cd756f"
}, {
  "value": "rgb(107.0,84.0,103.0)",
  "brand": "Burt's Bees",
  "colour": "puddleofplum",
  "r": 107,
  "g": 84,
  "b": 103,
  "rgb": "rgb(107, 84, 103)",
  "hex": "#6b5467"
}, {
  "value": "rgb(102.0,35.0,26.0)",
  "brand": "Burt's Bees",
  "colour": "liquidruby",
  "r": 102,
  "g": 35,
  "b": 26,
  "rgb": "rgb(102, 35, 26)",
  "hex": "#66231a"
}, {
  "value": "rgb(172.0,100.0,128.0)",
  "brand": "Burt's Bees",
  "colour": "rushofraspberry",
  "r": 172,
  "g": 100,
  "b": 128,
  "rgb": "rgb(172, 100, 128)",
  "hex": "#ac6480"
}, {
  "value": "rgb(157.0,106.0,111.0)",
  "brand": "Burt's Bees",
  "colour": "butteryblush",
  "r": 157,
  "g": 106,
  "b": 111,
  "rgb": "rgb(157, 106, 111)",
  "hex": "#9d6a6f"
}, {
  "value": "rgb(183.0,87.0,107.0)",
  "brand": "Burt's Bees",
  "colour": "rhubarbrapids",
  "r": 183,
  "g": 87,
  "b": 107,
  "rgb": "rgb(183, 87, 107)",
  "hex": "#b7576b"
}, {
  "value": "rgb(151.0,90.0,86.0)",
  "brand": "Burt's Bees",
  "colour": "liquidhoney",
  "r": 151,
  "g": 90,
  "b": 86,
  "rgb": "rgb(151, 90, 86)",
  "hex": "#975a56"
}, {
  "value": "rgb(211.0,136.0,153.0)",
  "brand": "Burt's Bees",
  "colour": "ripplingrose",
  "r": 211,
  "g": 136,
  "b": 153,
  "rgb": "rgb(211, 136, 153)",
  "hex": "#d38899"
}, {
  "value": "rgb(127.0,64.0,79.0)",
  "brand": "Burt's Bees",
  "colour": "meltedmauve",
  "r": 127,
  "g": 64,
  "b": 79,
  "rgb": "rgb(127, 64, 79)",
  "hex": "#7f404f"
}, {
  "value": "rgb(163.0,100.0,116.0)",
  "brand": "Burt's Bees",
  "colour": "canyoncreek",
  "r": 163,
  "g": 100,
  "b": 116,
  "rgb": "rgb(163, 100, 116)",
  "hex": "#a36474"
}, {
  "value": "rgb(108.0,82.0,103.0)",
  "brand": "Burt's Bees",
  "colour": "lilaclagoon",
  "r": 108,
  "g": 82,
  "b": 103,
  "rgb": "rgb(108, 82, 103)",
  "hex": "#6c5267"
}, {
  "value": "rgb(100.0,42.0,54.0)",
  "brand": "Burt's Bees",
  "colour": "mulberrymist",
  "r": 100,
  "g": 42,
  "b": 54,
  "rgb": "rgb(100, 42, 54)",
  "hex": "#642a36"
}, {
  "value": "rgb(142.0,53.0,72.0)",
  "brand": "Burt's Bees",
  "colour": "crimsoncascade",
  "r": 142,
  "g": 53,
  "b": 72,
  "rgb": "rgb(142, 53, 72)",
  "hex": "#8e3548"
}, {
  "value": "rgb(208.0,79.0,48.0)",
  "brand": "Kevyn Aucoin",
  "colour": "MICAVEL",
  "r": 208,
  "g": 79,
  "b": 48,
  "rgb": "rgb(208, 79, 48)",
  "hex": "#d04f30"
}, {
  "value": "rgb(153.0,55.0,54.0)",
  "brand": "Kevyn Aucoin",
  "colour": "LEAJANA",
  "r": 153,
  "g": 55,
  "b": 54,
  "rgb": "rgb(153, 55, 54)",
  "hex": "#993736"
}, {
  "value": "rgb(108.0,0.0,57.0)",
  "brand": "Kevyn Aucoin",
  "colour": "POISONBERRY",
  "r": 108,
  "g": 0,
  "b": 57,
  "rgb": "rgb(108, 0, 57)",
  "hex": "#6c0039"
}, {
  "value": "rgb(67.0,10.0,10.0)",
  "brand": "Kevyn Aucoin",
  "colour": "BLACK DAHLIA",
  "r": 67,
  "g": 10,
  "b": 10,
  "rgb": "rgb(67, 10, 10)",
  "hex": "#430a0a"
}, {
  "value": "rgb(216.0,187.0,171.0)",
  "brand": "Kevyn Aucoin",
  "colour": "EVERMORE",
  "r": 216,
  "g": 187,
  "b": 171,
  "rgb": "rgb(216, 187, 171)",
  "hex": "#d8bbab"
}, {
  "value": "rgb(193.0,142.0,139.0)",
  "brand": "Kevyn Aucoin",
  "colour": "UNINTERRUPTED",
  "r": 193,
  "g": 142,
  "b": 139,
  "rgb": "rgb(193, 142, 139)",
  "hex": "#c18e8b"
}, {
  "value": "rgb(176.0,86.0,144.0)",
  "brand": "Kevyn Aucoin",
  "colour": "RESILIENT",
  "r": 176,
  "g": 86,
  "b": 144,
  "rgb": "rgb(176, 86, 144)",
  "hex": "#b05690"
}, {
  "value": "rgb(166.0,106.0,118.0)",
  "brand": "Kevyn Aucoin",
  "colour": "INVINCIBLE",
  "r": 166,
  "g": 106,
  "b": 118,
  "rgb": "rgb(166, 106, 118)",
  "hex": "#a66a76"
}, {
  "value": "rgb(174.0,64.0,58.0)",
  "brand": "Kevyn Aucoin",
  "colour": "ENDLESS",
  "r": 174,
  "g": 64,
  "b": 58,
  "rgb": "rgb(174, 64, 58)",
  "hex": "#ae403a"
}, {
  "value": "rgb(118.0,45.0,30.0)",
  "brand": "Kevyn Aucoin",
  "colour": "EVERLASTING",
  "r": 118,
  "g": 45,
  "b": 30,
  "rgb": "rgb(118, 45, 30)",
  "hex": "#762d1e"
}, {
  "value": "rgb(153.0,80.0,149.0)",
  "brand": "Kevyn Aucoin",
  "colour": "PERSISTENCE",
  "r": 153,
  "g": 80,
  "b": 149,
  "rgb": "rgb(153, 80, 149)",
  "hex": "#995095"
}, {
  "value": "rgb(167.0,24.0,30.0)",
  "brand": "Kevyn Aucoin",
  "colour": "ETERNAL",
  "r": 167,
  "g": 24,
  "b": 30,
  "rgb": "rgb(167, 24, 30)",
  "hex": "#a7181e"
}, {
  "value": "rgb(228.0,132.0,159.0)",
  "brand": "Delilah",
  "colour": "BRINK",
  "r": 228,
  "g": 132,
  "b": 159,
  "rgb": "rgb(228, 132, 159)",
  "hex": "#e4849f"
}, {
  "value": "rgb(228.0,139.0,131.0)",
  "brand": "Surratt",
  "colour": "FEE SOIE",
  "r": 228,
  "g": 139,
  "b": 131,
  "rgb": "rgb(228, 139, 131)",
  "hex": "#e48b83"
}, {
  "value": "rgb(246.0,162.0,175.0)",
  "brand": "Surratt",
  "colour": "BON BON",
  "r": 246,
  "g": 162,
  "b": 175,
  "rgb": "rgb(246, 162, 175)",
  "hex": "#f6a2af"
}, {
  "value": "rgb(235.0,101.0,134.0)",
  "brand": "Surratt",
  "colour": "POM PON",
  "r": 235,
  "g": 101,
  "b": 134,
  "rgb": "rgb(235, 101, 134)",
  "hex": "#eb6586"
}, {
  "value": "rgb(198.0,33.0,40.0)",
  "brand": "Surratt",
  "colour": "RUBIS",
  "r": 198,
  "g": 33,
  "b": 40,
  "rgb": "rgb(198, 33, 40)",
  "hex": "#c62128"
}, {
  "value": "rgb(216.0,124.0,111.0)",
  "brand": "Surratt",
  "colour": "RITZY",
  "r": 216,
  "g": 124,
  "b": 111,
  "rgb": "rgb(216, 124, 111)",
  "hex": "#d87c6f"
}, {
  "value": "rgb(213.0,80.0,49.0)",
  "brand": "Surratt",
  "colour": "LADYBUG",
  "r": 213,
  "g": 80,
  "b": 49,
  "rgb": "rgb(213, 80, 49)",
  "hex": "#d55031"
}, {
  "value": "rgb(225.0,151.0,148.0)",
  "brand": "Surratt",
  "colour": "CHUCHOTER",
  "r": 225,
  "g": 151,
  "b": 148,
  "rgb": "rgb(225, 151, 148)",
  "hex": "#e19794"
}, {
  "value": "rgb(214.0,154.0,128.0)",
  "brand": "Surratt",
  "colour": "NU DE SOLEIL",
  "r": 214,
  "g": 154,
  "b": 128,
  "rgb": "rgb(214, 154, 128)",
  "hex": "#d69a80"
}, {
  "value": "rgb(196.0,79.0,85.0)",
  "brand": "Surratt",
  "colour": "PERFECTIONNISTE",
  "r": 196,
  "g": 79,
  "b": 85,
  "rgb": "rgb(196, 79, 85)",
  "hex": "#c44f55"
}, {
  "value": "rgb(160.0,92.0,81.0)",
  "brand": "Surratt",
  "colour": "BANDY",
  "r": 160,
  "g": 92,
  "b": 81,
  "rgb": "rgb(160, 92, 81)",
  "hex": "#a05c51"
}, {
  "value": "rgb(190.0,121.0,116.0)",
  "brand": "Surratt",
  "colour": "HEVYN",
  "r": 190,
  "g": 121,
  "b": 116,
  "rgb": "rgb(190, 121, 116)",
  "hex": "#be7974"
}, {
  "value": "rgb(162.0,95.0,86.0)",
  "brand": "Surratt",
  "colour": "EGLANTINE",
  "r": 162,
  "g": 95,
  "b": 86,
  "rgb": "rgb(162, 95, 86)",
  "hex": "#a25f56"
}, {
  "value": "rgb(190.0,25.0,31.0)",
  "brand": "Surratt",
  "colour": "OH L'AMOUR",
  "r": 190,
  "g": 25,
  "b": 31,
  "rgb": "rgb(190, 25, 31)",
  "hex": "#be191f"
}, {
  "value": "rgb(85.0,44.0,50.0)",
  "brand": "Surratt",
  "colour": "PECCADILLE",
  "r": 85,
  "g": 44,
  "b": 50,
  "rgb": "rgb(85, 44, 50)",
  "hex": "#552c32"
}, {
  "value": "rgb(121.0,71.0,62.0)",
  "brand": "Surratt",
  "colour": "AU COURANT",
  "r": 121,
  "g": 71,
  "b": 62,
  "rgb": "rgb(121, 71, 62)",
  "hex": "#79473e"
}, {
  "value": "rgb(188.0,65.0,66.0)",
  "brand": "Surratt",
  "colour": "BONNE",
  "r": 188,
  "g": 65,
  "b": 66,
  "rgb": "rgb(188, 65, 66)",
  "hex": "#bc4142"
}, {
  "value": "rgb(213.0,62.0,64.0)",
  "brand": "Surratt",
  "colour": "GALOCHER",
  "r": 213,
  "g": 62,
  "b": 64,
  "rgb": "rgb(213, 62, 64)",
  "hex": "#d53e40"
}, {
  "value": "rgb(215.0,129.0,138.0)",
  "brand": "Surratt",
  "colour": "QUAINTRELLE",
  "r": 215,
  "g": 129,
  "b": 138,
  "rgb": "rgb(215, 129, 138)",
  "hex": "#d7818a"
}, {
  "value": "rgb(152.0,77.0,87.0)",
  "brand": "Surratt",
  "colour": "MARGAUX",
  "r": 152,
  "g": 77,
  "b": 87,
  "rgb": "rgb(152, 77, 87)",
  "hex": "#984d57"
}, {
  "value": "rgb(112.0,67.0,72.0)",
  "brand": "Surratt",
  "colour": "ELYSIAN",
  "r": 112,
  "g": 67,
  "b": 72,
  "rgb": "rgb(112, 67, 72)",
  "hex": "#704348"
}, {
  "value": "rgb(120.0,84.0,72.0)",
  "brand": "Surratt",
  "colour": "DIABOLIQUE",
  "r": 120,
  "g": 84,
  "b": 72,
  "rgb": "rgb(120, 84, 72)",
  "hex": "#785448"
}, {
  "value": "rgb(229.0,229.0,229.0)",
  "brand": "Surratt",
  "colour": "DIAMANTEE",
  "r": 229,
  "g": 229,
  "b": 229,
  "rgb": "rgb(229, 229, 229)",
  "hex": "#e5e5e5"
}, {
  "value": "rgb(242.0,233.0,204.0)",
  "brand": "Surratt",
  "colour": "LAME",
  "r": 242,
  "g": 233,
  "b": 204,
  "rgb": "rgb(242, 233, 204)",
  "hex": "#f2e9cc"
}, {
  "value": "rgb(235.0,136.0,155.0)",
  "brand": "Surratt",
  "colour": "PAILLETTES",
  "r": 235,
  "g": 136,
  "b": 155,
  "rgb": "rgb(235, 136, 155)",
  "hex": "#eb889b"
}, {
  "value": "rgb(217.0,93.0,126.0)",
  "brand": "Surratt",
  "colour": "FROU FROU",
  "r": 217,
  "g": 93,
  "b": 126,
  "rgb": "rgb(217, 93, 126)",
  "hex": "#d95d7e"
}, {
  "value": "rgb(222.0,80.0,71.0)",
  "brand": "Surratt",
  "colour": "HAUTE MONDE",
  "r": 222,
  "g": 80,
  "b": 71,
  "rgb": "rgb(222, 80, 71)",
  "hex": "#de5047"
}, {
  "value": "rgb(165.0,114.0,63.0)",
  "brand": "Surratt",
  "colour": "CAFE SOCIETE",
  "r": 165,
  "g": 114,
  "b": 63,
  "rgb": "rgb(165, 114, 63)",
  "hex": "#a5723f"
}, {
  "value": "rgb(102.0,39.0,48.0)",
  "brand": "Revolution Beauty",
  "colour": "Thirst",
  "r": 102,
  "g": 39,
  "b": 48,
  "rgb": "rgb(102, 39, 48)",
  "hex": "#662730"
}, {
  "value": "rgb(147.0,23.0,31.0)",
  "brand": "Revolution Beauty",
  "colour": "Stiletto",
  "r": 147,
  "g": 23,
  "b": 31,
  "rgb": "rgb(147, 23, 31)",
  "hex": "#93171f"
}, {
  "value": "rgb(161.0,109.0,95.0)",
  "brand": "Revolution Beauty",
  "colour": "Cashmere",
  "r": 161,
  "g": 109,
  "b": 95,
  "rgb": "rgb(161, 109, 95)",
  "hex": "#a16d5f"
}, {
  "value": "rgb(174.0,129.0,126.0)",
  "brand": "Revolution Beauty",
  "colour": "Stripped",
  "r": 174,
  "g": 129,
  "b": 126,
  "rgb": "rgb(174, 129, 126)",
  "hex": "#ae817e"
}, {
  "value": "rgb(76.0,34.0,35.0)",
  "brand": "Revolution Beauty",
  "colour": "Vamped",
  "r": 76,
  "g": 34,
  "b": 35,
  "rgb": "rgb(76, 34, 35)",
  "hex": "#4c2223"
}, {
  "value": "rgb(132.0,68.0,69.0)",
  "brand": "Revolution Beauty",
  "colour": "Velvet",
  "r": 132,
  "g": 68,
  "b": 69,
  "rgb": "rgb(132, 68, 69)",
  "hex": "#844445"
}, {
  "value": "rgb(197.0,118.0,121.0)",
  "brand": "Revolution Beauty",
  "colour": "Teddy",
  "r": 197,
  "g": 118,
  "b": 121,
  "rgb": "rgb(197, 118, 121)",
  "hex": "#c57679"
}, {
  "value": "rgb(213.0,101.0,64.0)",
  "brand": "Revolution Beauty",
  "colour": "Spice",
  "r": 213,
  "g": 101,
  "b": 64,
  "rgb": "rgb(213, 101, 64)",
  "hex": "#d56540"
}, {
  "value": "rgb(212.0,71.0,87.0)",
  "brand": "Revolution Beauty",
  "colour": "Rosy",
  "r": 212,
  "g": 71,
  "b": 87,
  "rgb": "rgb(212, 71, 87)",
  "hex": "#d44757"
}, {
  "value": "rgb(251.0,68.0,151.0)",
  "brand": "Revolution Beauty",
  "colour": "flamingo",
  "r": 251,
  "g": 68,
  "b": 151,
  "rgb": "rgb(251, 68, 151)",
  "hex": "#fb4497"
}, {
  "value": "rgb(82.0,30.0,34.0)",
  "brand": "Revolution Beauty",
  "colour": "Ornate",
  "r": 82,
  "g": 30,
  "b": 34,
  "rgb": "rgb(82, 30, 34)",
  "hex": "#521e22"
}, {
  "value": "rgb(229.0,142.0,123.0)",
  "brand": "Revolution Beauty",
  "colour": "Naked",
  "r": 229,
  "g": 142,
  "b": 123,
  "rgb": "rgb(229, 142, 123)",
  "hex": "#e58e7b"
}, {
  "value": "rgb(249.0,155.0,143.0)",
  "brand": "Revolution Beauty",
  "colour": "Frost",
  "r": 249,
  "g": 155,
  "b": 143,
  "rgb": "rgb(249, 155, 143)",
  "hex": "#f99b8f"
}, {
  "value": "rgb(176.0,26.0,37.0)",
  "brand": "Revolution Beauty",
  "colour": "Fascination",
  "r": 176,
  "g": 26,
  "b": 37,
  "rgb": "rgb(176, 26, 37)",
  "hex": "#b01a25"
}, {
  "value": "rgb(252.0,171.0,177.0)",
  "brand": "Revolution Beauty",
  "colour": "love",
  "r": 252,
  "g": 171,
  "b": 177,
  "rgb": "rgb(252, 171, 177)",
  "hex": "#fcabb1"
}, {
  "value": "rgb(242.0,44.0,31.0)",
  "brand": "Revolution Beauty",
  "colour": "Captivate",
  "r": 242,
  "g": 44,
  "b": 31,
  "rgb": "rgb(242, 44, 31)",
  "hex": "#f22c1f"
}, {
  "value": "rgb(153.0,58.0,66.0)",
  "brand": "Revolution Beauty",
  "colour": "Bon Bon",
  "r": 153,
  "g": 58,
  "b": 66,
  "rgb": "rgb(153, 58, 66)",
  "hex": "#993a42"
}, {
  "value": "rgb(209.0,42.0,114.0)",
  "brand": "Revolution Beauty",
  "colour": "Lust",
  "r": 209,
  "g": 42,
  "b": 114,
  "rgb": "rgb(209, 42, 114)",
  "hex": "#d12a72"
}, {
  "value": "rgb(204.0,49.0,47.0)",
  "brand": "Revolution Beauty",
  "colour": "Cherry",
  "r": 204,
  "g": 49,
  "b": 47,
  "rgb": "rgb(204, 49, 47)",
  "hex": "#cc312f"
}, {
  "value": "rgb(230.0,147.0,131.0)",
  "brand": "Revolution Beauty",
  "colour": "Biscuit",
  "r": 230,
  "g": 147,
  "b": 131,
  "rgb": "rgb(230, 147, 131)",
  "hex": "#e69383"
}, {
  "value": "rgb(102.0,40.0,63.0)",
  "brand": "Revolution Beauty",
  "colour": "Blackberry",
  "r": 102,
  "g": 40,
  "b": 63,
  "rgb": "rgb(102, 40, 63)",
  "hex": "#66283f"
}, {
  "value": "rgb(184.0,106.0,83.0)",
  "brand": "Revolution Beauty",
  "colour": "Attraction 105",
  "r": 184,
  "g": 106,
  "b": 83,
  "rgb": "rgb(184, 106, 83)",
  "hex": "#b86a53"
}, {
  "value": "rgb(180.0,100.0,101.0)",
  "brand": "Revolution Beauty",
  "colour": "Ballerina 112",
  "r": 180,
  "g": 100,
  "b": 101,
  "rgb": "rgb(180, 100, 101)",
  "hex": "#b46465"
}, {
  "value": "rgb(163.0,97.0,107.0)",
  "brand": "Revolution Beauty",
  "colour": "Bouquet 117",
  "r": 163,
  "g": 97,
  "b": 107,
  "rgb": "rgb(163, 97, 107)",
  "hex": "#a3616b"
}, {
  "value": "rgb(184.0,128.0,115.0)",
  "brand": "Revolution Beauty",
  "colour": "Chauffeur 110",
  "r": 184,
  "g": 128,
  "b": 115,
  "rgb": "rgb(184, 128, 115)",
  "hex": "#b88073"
}, {
  "value": "rgb(206.0,0.0,55.0)",
  "brand": "Revolution Beauty",
  "colour": "Cherry 132",
  "r": 206,
  "g": 0,
  "b": 55,
  "rgb": "rgb(206, 0, 55)",
  "hex": "#ce0037"
}, {
  "value": "rgb(232.0,146.0,124.0)",
  "brand": "Revolution Beauty",
  "colour": "Control 104",
  "r": 232,
  "g": 146,
  "b": 124,
  "rgb": "rgb(232, 146, 124)",
  "hex": "#e8927c"
}, {
  "value": "rgb(194.0,110.0,96.0)",
  "brand": "Revolution Beauty",
  "colour": "Crush 111",
  "r": 194,
  "g": 110,
  "b": 96,
  "rgb": "rgb(194, 110, 96)",
  "hex": "#c26e60"
}, {
  "value": "rgb(230.0,56.0,136.0)",
  "brand": "Revolution Beauty",
  "colour": "Cupcake 137",
  "r": 230,
  "g": 56,
  "b": 136,
  "rgb": "rgb(230, 56, 136)",
  "hex": "#e63888"
}, {
  "value": "rgb(227.0,28.0,121.0)",
  "brand": "Revolution Beauty",
  "colour": "Cutie 139",
  "r": 227,
  "g": 28,
  "b": 121,
  "rgb": "rgb(227, 28, 121)",
  "hex": "#e31c79"
}, {
  "value": "rgb(228.0,0.0,70.0)",
  "brand": "Revolution Beauty",
  "colour": "Decadence 130",
  "r": 228,
  "g": 0,
  "b": 70,
  "rgb": "rgb(228, 0, 70)",
  "hex": "#e40046"
}, {
  "value": "rgb(188.0,32.0,75.0)",
  "brand": "Revolution Beauty",
  "colour": "Destiny 133",
  "r": 188,
  "g": 32,
  "b": 75,
  "rgb": "rgb(188, 32, 75)",
  "hex": "#bc204b"
}, {
  "value": "rgb(174.0,87.0,96.0)",
  "brand": "Revolution Beauty",
  "colour": "Dollhouse 116",
  "r": 174,
  "g": 87,
  "b": 96,
  "rgb": "rgb(174, 87, 96)",
  "hex": "#ae5760"
}, {
  "value": "rgb(210.0,91.0,115.0)",
  "brand": "Revolution Beauty",
  "colour": "Excess 138",
  "r": 210,
  "g": 91,
  "b": 115,
  "rgb": "rgb(210, 91, 115)",
  "hex": "#d25b73"
}, {
  "value": "rgb(208.0,148.0,137.0)",
  "brand": "Revolution Beauty",
  "colour": "Featured 109",
  "r": 208,
  "g": 148,
  "b": 137,
  "rgb": "rgb(208, 148, 137)",
  "hex": "#d09489"
}, {
  "value": "rgb(166.0,90.0,76.0)",
  "brand": "Revolution Beauty",
  "colour": "Fling 125",
  "r": 166,
  "g": 90,
  "b": 76,
  "rgb": "rgb(166, 90, 76)",
  "hex": "#a65a4c"
}, {
  "value": "rgb(196.0,108.0,98.0)",
  "brand": "Revolution Beauty",
  "colour": "Glorified 106",
  "r": 196,
  "g": 108,
  "b": 98,
  "rgb": "rgb(196, 108, 98)",
  "hex": "#c46c62"
}, {
  "value": "rgb(151.0,88.0,73.0)",
  "brand": "Revolution Beauty",
  "colour": "Gone Rogue 124",
  "r": 151,
  "g": 88,
  "b": 73,
  "rgb": "rgb(151, 88, 73)",
  "hex": "#975849"
}, {
  "value": "rgb(177.0,121.0,98.0)",
  "brand": "Revolution Beauty",
  "colour": "Head-turner 121",
  "r": 177,
  "g": 121,
  "b": 98,
  "rgb": "rgb(177, 121, 98)",
  "hex": "#b17962"
}, {
  "value": "rgb(185.0,108.0,102.0)",
  "brand": "Revolution Beauty",
  "colour": "Heart race 113",
  "r": 185,
  "g": 108,
  "b": 102,
  "rgb": "rgb(185, 108, 102)",
  "hex": "#b96c66"
}, {
  "value": "rgb(189.0,111.0,109.0)",
  "brand": "Revolution Beauty",
  "colour": "Icon 135",
  "r": 189,
  "g": 111,
  "b": 109,
  "rgb": "rgb(189, 111, 109)",
  "hex": "#bd6f6d"
}, {
  "value": "rgb(214.0,137.0,107.0)",
  "brand": "Revolution Beauty",
  "colour": "Knockout 103",
  "r": 214,
  "g": 137,
  "b": 107,
  "rgb": "rgb(214, 137, 107)",
  "hex": "#d6896b"
}, {
  "value": "rgb(216.0,151.0,133.0)",
  "brand": "Revolution Beauty",
  "colour": "Misbehaving 102",
  "r": 216,
  "g": 151,
  "b": 133,
  "rgb": "rgb(216, 151, 133)",
  "hex": "#d89785"
}, {
  "value": "rgb(207.0,154.0,136.0)",
  "brand": "Revolution Beauty",
  "colour": "Piece of Cake 101",
  "r": 207,
  "g": 154,
  "b": 136,
  "rgb": "rgb(207, 154, 136)",
  "hex": "#cf9a88"
}, {
  "value": "rgb(81.0,40.0,79.0)",
  "brand": "Revolution Beauty",
  "colour": "Plum 148",
  "r": 81,
  "g": 40,
  "b": 79,
  "rgb": "rgb(81, 40, 79)",
  "hex": "#51284f"
}, {
  "value": "rgb(131.0,69.0,80.0)",
  "brand": "Revolution Beauty",
  "colour": "Poise 115",
  "r": 131,
  "g": 69,
  "b": 80,
  "rgb": "rgb(131, 69, 80)",
  "hex": "#834550"
}, {
  "value": "rgb(194.0,147.0,137.0)",
  "brand": "Revolution Beauty",
  "colour": "Raw 136",
  "r": 194,
  "g": 147,
  "b": 137,
  "rgb": "rgb(194, 147, 137)",
  "hex": "#c29389"
}, {
  "value": "rgb(199.0,103.0,91.0)",
  "brand": "Revolution Beauty",
  "colour": "RBF 107",
  "r": 199,
  "g": 103,
  "b": 91,
  "rgb": "rgb(199, 103, 91)",
  "hex": "#c7675b"
}, {
  "value": "rgb(124.0,62.0,73.0)",
  "brand": "Revolution Beauty",
  "colour": "Ros?? 118",
  "r": 124,
  "g": 62,
  "b": 73,
  "rgb": "rgb(124, 62, 73)",
  "hex": "#7c3e49"
}, {
  "value": "rgb(145.0,47.0,70.0)",
  "brand": "Revolution Beauty",
  "colour": "Rouge 141",
  "r": 145,
  "g": 47,
  "b": 70,
  "rgb": "rgb(145, 47, 70)",
  "hex": "#912f46"
}, {
  "value": "rgb(248.32253886010363,210.48186528497402,198.6683937823834)",
  "brand": "Glossier",
  "colour": "Cake",
  "r": 248,
  "g": 210,
  "b": 198,
  "rgb": "rgb(248, 210, 198)",
  "hex": "#f8d2c6"
}, {
  "value": "rgb(213.42042042042044,87.30530530530544,127.00600600600592)",
  "brand": "Glossier",
  "colour": "Crush",
  "r": 213,
  "g": 87,
  "b": 127,
  "rgb": "rgb(213, 87, 127)",
  "hex": "#d5577f"
}, {
  "value": "rgb(236.71271929824556,199.60526315789477,212.0493421052632)",
  "brand": "Glossier",
  "colour": "Like",
  "r": 236,
  "g": 199,
  "b": 212,
  "rgb": "rgb(236, 199, 212)",
  "hex": "#ecc7d4"
}, {
  "value": "rgb(242.7267605633803,77.06948356807521,81.04976525821597)",
  "brand": "Glossier",
  "colour": "Zip",
  "r": 242,
  "g": 77,
  "b": 81,
  "rgb": "rgb(242, 77, 81)",
  "hex": "#f24d51"
}, {
  "value": "rgb(196.32349602724176,125.13961407491493,105.25993189557315)",
  "brand": "Glossier",
  "colour": "Leo",
  "r": 196,
  "g": 125,
  "b": 105,
  "rgb": "rgb(196, 125, 105)",
  "hex": "#c47d69"
}, {
  "value": "rgb(165.59921026653507,75.7522211253701,123.37216189536036)",
  "brand": "Glossier",
  "colour": "Jam",
  "r": 165,
  "g": 75,
  "b": 123,
  "rgb": "rgb(165, 75, 123)",
  "hex": "#a54b7b"
}, {
  "value": "rgb(162.75075437537717,98.32166566083282,89.0778515389258)",
  "brand": "Glossier",
  "colour": "Pony",
  "r": 162,
  "g": 98,
  "b": 89,
  "rgb": "rgb(162, 98, 89)",
  "hex": "#a26259"
}, {
  "value": "rgb(202.34352441613586,82.04840764331212,100.99617834394905)",
  "brand": "Glossier",
  "colour": "Blow-Up",
  "r": 202,
  "g": 82,
  "b": 100,
  "rgb": "rgb(202, 82, 100)",
  "hex": "#ca5264"
}, {
  "value": "rgb(215.78134110787178,0.6355685131195323,4.477162293488819)",
  "brand": "Glossier",
  "colour": "Baby",
  "r": 215,
  "g": 0,
  "b": 4,
  "rgb": "rgb(215, 0, 4)",
  "hex": "#d70004"
}, {
  "value": "rgb(229.9373665480427,49.08896797153025,6.92740213523131)",
  "brand": "Glossier",
  "colour": "Casino",
  "r": 229,
  "g": 49,
  "b": 6,
  "rgb": "rgb(229, 49, 6)",
  "hex": "#e53106"
}, {
  "value": "rgb(158.57681365576096,41.305120910384076,15.157894736842106)",
  "brand": "Glossier",
  "colour": "Disco",
  "r": 158,
  "g": 41,
  "b": 15,
  "rgb": "rgb(158, 41, 15)",
  "hex": "#9e290f"
}, {
  "value": "rgb(96.61104718066738,17.71001150747986,22.965477560414257)",
  "brand": "Glossier",
  "colour": "Bank",
  "r": 96,
  "g": 17,
  "b": 22,
  "rgb": "rgb(96, 17, 22)",
  "hex": "#601116"
}, {
  "value": "rgb(190.78048780487805,44.80851063829787,45.84379865075248)",
  "brand": "Gucci",
  "colour": "501 Constance Vermillon",
  "r": 190,
  "g": 44,
  "b": 45,
  "rgb": "rgb(190, 44, 45)",
  "hex": "#be2c2d"
}, {
  "value": "rgb(178.77395470383274,27.202961672473855,46.5065331010453)",
  "brand": "Gucci",
  "colour": "25 Goldie Red",
  "r": 178,
  "g": 27,
  "b": 46,
  "rgb": "rgb(178, 27, 46)",
  "hex": "#b21b2e"
}, {
  "value": "rgb(201.05221386800332,20.775271512113644,33.06265664160403)",
  "brand": "Gucci",
  "colour": "500 Odalie Red",
  "r": 201,
  "g": 20,
  "b": 33,
  "rgb": "rgb(201, 20, 33)",
  "hex": "#c91421"
}, {
  "value": "rgb(151.30164609053497,11.887242798353919,38.67942386831275)",
  "brand": "Gucci",
  "colour": "502 Eadie Scarlet",
  "r": 151,
  "g": 11,
  "b": 38,
  "rgb": "rgb(151, 11, 38)",
  "hex": "#970b26"
}, {
  "value": "rgb(139.69445656918379,40.69445656918378,45.683107813181984)",
  "brand": "Gucci",
  "colour": "504 Myra Crimson",
  "r": 139,
  "g": 40,
  "b": 45,
  "rgb": "rgb(139, 40, 45)",
  "hex": "#8b282d"
}, {
  "value": "rgb(162.43395225464192,61.796816976127324,51.675862068965536)",
  "brand": "Gucci",
  "colour": "505 Janet Rust",
  "r": 162,
  "g": 61,
  "b": 51,
  "rgb": "rgb(162, 61, 51)",
  "hex": "#a23d33"
}, {
  "value": "rgb(113.60984095427436,33.60984095427436,36.60984095427436)",
  "brand": "Gucci",
  "colour": "506 Louisa Red",
  "r": 113,
  "g": 33,
  "b": 36,
  "rgb": "rgb(113, 33, 36)",
  "hex": "#712124"
}, {
  "value": "rgb(142.91762208067945,19.40976645435245,37.40976645435245)",
  "brand": "Gucci",
  "colour": "509 Janie Scarlet",
  "r": 142,
  "g": 19,
  "b": 37,
  "rgb": "rgb(142, 19, 37)",
  "hex": "#8e1325"
}, {
  "value": "rgb(98.43602865916075,41.436028659160755,48.436028659160755)",
  "brand": "Gucci",
  "colour": "510 Joanna Burgundy",
  "r": 98,
  "g": 41,
  "b": 48,
  "rgb": "rgb(98, 41, 48)",
  "hex": "#622930"
}, {
  "value": "rgb(185.22050290135397,133.22050290135397,109.83268858800774)",
  "brand": "Gucci",
  "colour": "103 Carol Beige",
  "r": 185,
  "g": 133,
  "b": 109,
  "rgb": "rgb(185, 133, 109)",
  "hex": "#b9856d"
}, {
  "value": "rgb(161.65165876777252,113.35402843601895,90.42654028436017)",
  "brand": "Gucci",
  "colour": "104 Penny Beige",
  "r": 161,
  "g": 113,
  "b": 90,
  "rgb": "rgb(161, 113, 90)",
  "hex": "#a1715a"
}, {
  "value": "rgb(137.6090190609019,99.01394700139471,88.31148303114831)",
  "brand": "Gucci",
  "colour": "105 Susan Nude",
  "r": 137,
  "g": 99,
  "b": 88,
  "rgb": "rgb(137, 99, 88)",
  "hex": "#896358"
}, {
  "value": "rgb(96.00000000000001,66.00000000000001,56.00000000000001)",
  "brand": "Gucci",
  "colour": "106 Tacey Hazel",
  "r": 96,
  "g": 66,
  "b": 56,
  "rgb": "rgb(96, 66, 56)",
  "hex": "#604238"
}, {
  "value": "rgb(161.3169196593854,94.30359126249539,88.36727138097)",
  "brand": "Gucci",
  "colour": "201 The Painted Veil",
  "r": 161,
  "g": 94,
  "b": 88,
  "rgb": "rgb(161, 94, 88)",
  "hex": "#a15e58"
}, {
  "value": "rgb(159.53261379633975,86.17503519474423,93.25762552792115)",
  "brand": "Gucci",
  "colour": "204 Peggy Taupe",
  "r": 159,
  "g": 86,
  "b": 93,
  "rgb": "rgb(159, 86, 93)",
  "hex": "#9f565d"
}, {
  "value": "rgb(176.53026265702323,91.53026265702321,86.53026265702321)",
  "brand": "Gucci",
  "colour": "208 They Met in Argentina",
  "r": 176,
  "g": 91,
  "b": 86,
  "rgb": "rgb(176, 91, 86)",
  "hex": "#b05b56"
}, {
  "value": "rgb(117.6399568810636,67.61839741286384,60.41178584261588)",
  "brand": "Gucci",
  "colour": "209 Mona Leslie Cameo",
  "r": 117,
  "g": 67,
  "b": 60,
  "rgb": "rgb(117, 67, 60)",
  "hex": "#75433c"
}, {
  "value": "rgb(230.3093617021277,97.97659574468094,134.8319148936171)",
  "brand": "Gucci",
  "colour": "407 Patricia Pink",
  "r": 230,
  "g": 97,
  "b": 134,
  "rgb": "rgb(230, 97, 134)",
  "hex": "#e66186"
}, {
  "value": "rgb(204.4695091720377,51.746157659890926,79.54288547347548)",
  "brand": "Gucci",
  "colour": "401 Three Wise Girls",
  "r": 204,
  "g": 51,
  "b": 79,
  "rgb": "rgb(204, 51, 79)",
  "hex": "#cc334f"
}, {
  "value": "rgb(226.73750000000004,51.98000000000001,126.6475)",
  "brand": "Gucci",
  "colour": "402 Vantine Fuchsia",
  "r": 226,
  "g": 51,
  "b": 126,
  "rgb": "rgb(226, 51, 126)",
  "hex": "#e2337e"
}, {
  "value": "rgb(191.01333333333335,20.178888888888903,88.06666666666663)",
  "brand": "Gucci",
  "colour": "403 Love Before Breakfast",
  "r": 191,
  "g": 20,
  "b": 88,
  "rgb": "rgb(191, 20, 88)",
  "hex": "#bf1458"
}, {
  "value": "rgb(174.9099287808965,51.608294930875545,86.44868035190615)",
  "brand": "Gucci",
  "colour": "404 Cassie Magenta",
  "r": 174,
  "g": 51,
  "b": 86,
  "rgb": "rgb(174, 51, 86)",
  "hex": "#ae3356"
}, {
  "value": "rgb(141.5702775290958,69.75380483437777,83.37242614145029)",
  "brand": "Gucci",
  "colour": "601 Virginia Fleur de Lis",
  "r": 141,
  "g": 69,
  "b": 83,
  "rgb": "rgb(141, 69, 83)",
  "hex": "#8d4553"
}, {
  "value": "rgb(172.6916774471755,117.7425614489004,175.74256144890037)",
  "brand": "Gucci",
  "colour": "605 Vienna Amaranth",
  "r": 172,
  "g": 117,
  "b": 175,
  "rgb": "rgb(172, 117, 175)",
  "hex": "#ac75af"
}, {
  "value": "rgb(159.23318385650228,67.08642478597632,144.1598043212393)",
  "brand": "Gucci",
  "colour": "606 Sophie Plum",
  "r": 159,
  "g": 67,
  "b": 144,
  "rgb": "rgb(159, 67, 144)",
  "hex": "#9f4390"
}, {
  "value": "rgb(87.60191846522778,36.71366906474822,51.306474820143904)",
  "brand": "Gucci",
  "colour": "701 Sydney Lavender",
  "r": 87,
  "g": 36,
  "b": 51,
  "rgb": "rgb(87, 36, 51)",
  "hex": "#572433"
}, {
  "value": "rgb(88.58772311710926,55.58249891162386,76.5981715280801)",
  "brand": "Gucci",
  "colour": "702 Anne Lilac",
  "r": 88,
  "g": 55,
  "b": 76,
  "rgb": "rgb(88, 55, 76)",
  "hex": "#58374c"
}, {
  "value": "rgb(73.64373673036094,45.64373673036095,41.64373673036095)",
  "brand": "Gucci",
  "colour": "703 Toni Purple",
  "r": 73,
  "g": 45,
  "b": 41,
  "rgb": "rgb(73, 45, 41)",
  "hex": "#492d29"
}, {
  "value": "rgb(35.55180722891569,76.59807228915666,68.57493975903617)",
  "brand": "Gucci",
  "colour": "704 Valentine Verdante",
  "r": 35,
  "g": 76,
  "b": 68,
  "rgb": "rgb(35, 76, 68)",
  "hex": "#234c44"
}, {
  "value": "rgb(220.63519753719854,63.5125705489995,54.327347357619324)",
  "brand": "Gucci",
  "colour": "302 Agatha Orange",
  "r": 220,
  "g": 63,
  "b": 54,
  "rgb": "rgb(220, 63, 54)",
  "hex": "#dc3f36"
}, {
  "value": "rgb(230.75443147427586,95.77475140510161,92.7181150021617)",
  "brand": "Gucci",
  "colour": "304 Queen Christina",
  "r": 230,
  "g": 95,
  "b": 92,
  "rgb": "rgb(230, 95, 92)",
  "hex": "#e65f5c"
}, {
  "value": "rgb(212.99295065458205,104.98288016112787,101.9828801611279)",
  "brand": "Gucci",
  "colour": "305 Ruby Firelight",
  "r": 212,
  "g": 104,
  "b": 101,
  "rgb": "rgb(212, 104, 101)",
  "hex": "#d46865"
}, {
  "value": "rgb(144.20592991913753,26.73638814016177,71.96495956873325)",
  "brand": "Gucci",
  "colour": "409 Billie Magenta",
  "r": 144,
  "g": 26,
  "b": 71,
  "rgb": "rgb(144, 26, 71)",
  "hex": "#901a47"
}, {
  "value": "rgb(149.3542997542998,64.49877149877149,61.75921375921371)",
  "brand": "Gucci",
  "colour": "408 Norma Pink",
  "r": 149,
  "g": 64,
  "b": 61,
  "rgb": "rgb(149, 64, 61)",
  "hex": "#95403d"
}, {
  "value": "rgb(101.84639782510209,23.339374716810113,25.663343905754438)",
  "brand": "Gucci",
  "colour": "25 Goldie Red",
  "r": 101,
  "g": 23,
  "b": 25,
  "rgb": "rgb(101, 23, 25)",
  "hex": "#651719"
}, {
  "value": "rgb(158.2355017650028,104.98285426122057,95.01613716590998)",
  "brand": "Gucci",
  "colour": "705 Lynn Silver",
  "r": 158,
  "g": 104,
  "b": 95,
  "rgb": "rgb(158, 104, 95)",
  "hex": "#9e685f"
}, {
  "value": "rgb(149.99943788645314,98.98988195615534,55.51096121416513)",
  "brand": "Gucci",
  "colour": "706 My Forbidden Past",
  "r": 149,
  "g": 98,
  "b": 55,
  "rgb": "rgb(149, 98, 55)",
  "hex": "#956237"
}, {
  "value": "rgb(59.19018112488078,69.81649189704471,85.87797902764542)",
  "brand": "Gucci",
  "colour": "707 Charlotte Blue",
  "r": 59,
  "g": 69,
  "b": 85,
  "rgb": "rgb(59, 69, 85)",
  "hex": "#3b4555"
}, {
  "value": "rgb(31.172735760971037,54.494397759103585,99.17740429505129)",
  "brand": "Gucci",
  "colour": "708 Victoriana Blue",
  "r": 31,
  "g": 54,
  "b": 99,
  "rgb": "rgb(31, 54, 99)",
  "hex": "#1f3663"
}, {
  "value": "rgb(36.69475138121548,98.10174953959483,94.04005524861877)",
  "brand": "Gucci",
  "colour": "709 Princess Olga Green",
  "r": 36,
  "g": 98,
  "b": 94,
  "rgb": "rgb(36, 98, 94)",
  "hex": "#24625e"
}, {
  "value": "rgb(164.65848670756645,72.37321063394688,42.528629856850664)",
  "brand": "Gucci",
  "colour": "306 Letty Orange",
  "r": 164,
  "g": 72,
  "b": 42,
  "rgb": "rgb(164, 72, 42)",
  "hex": "#a4482a"
}, {
  "value": "rgb(173.36918918918917,33.952972972973186,38.263783783783936)",
  "brand": "Gucci",
  "colour": "25 Goldie Red",
  "r": 173,
  "g": 33,
  "b": 38,
  "rgb": "rgb(173, 33, 38)",
  "hex": "#ad2126"
}, {
  "value": "rgb(28.790341578327492,108.53356890459364,148.38339222614871)",
  "brand": "Gucci",
  "colour": "710 Fay Turquoise",
  "r": 28,
  "g": 108,
  "b": 148,
  "rgb": "rgb(28, 108, 148)",
  "hex": "#1c6c94"
}, {
  "value": "rgb(206.4706906558328,46.26871735345331,46.78467788740565)",
  "brand": "Gucci",
  "colour": "500 Odalie Red",
  "r": 206,
  "g": 46,
  "b": 46,
  "rgb": "rgb(206, 46, 46)",
  "hex": "#ce2e2e"
}, {
  "value": "rgb(194.10660377358496,22.35094339622643,29.65047169811323)",
  "brand": "Gucci",
  "colour": "501 Constance Vermillion",
  "r": 194,
  "g": 22,
  "b": 29,
  "rgb": "rgb(194, 22, 29)",
  "hex": "#c2161d"
}, {
  "value": "rgb(189.30672645739907,18.793721973094147,44.74573991031395)",
  "brand": "Gucci",
  "colour": "502 Eadie Scarlet",
  "r": 189,
  "g": 18,
  "b": 44,
  "rgb": "rgb(189, 18, 44)",
  "hex": "#bd122c"
}, {
  "value": "rgb(180.1553620531623,16.084784601283193,49.32493125572871)",
  "brand": "Gucci",
  "colour": "503 Teresina Ruby",
  "r": 180,
  "g": 16,
  "b": 49,
  "rgb": "rgb(180, 16, 49)",
  "hex": "#b41031"
}, {
  "value": "rgb(120.81531776208585,41.815317762085854,47.26181423139599)",
  "brand": "Gucci",
  "colour": "504 Myra Crimson",
  "r": 120,
  "g": 41,
  "b": 47,
  "rgb": "rgb(120, 41, 47)",
  "hex": "#78292f"
}, {
  "value": "rgb(153.37206020696135,47.47883349012235,48.653339604891855)",
  "brand": "Gucci",
  "colour": "505 Janet Rust",
  "r": 153,
  "g": 47,
  "b": 48,
  "rgb": "rgb(153, 47, 48)",
  "hex": "#992f30"
}, {
  "value": "rgb(138.4693986162853,25.15220862160725,55.010643959552986)",
  "brand": "Gucci",
  "colour": "506 Louisa Red",
  "r": 138,
  "g": 25,
  "b": 55,
  "rgb": "rgb(138, 25, 55)",
  "hex": "#8a1937"
}, {
  "value": "rgb(214.0,34.0,73.0)",
  "brand": "Burberry",
  "colour": "POPPY RED 309",
  "r": 214,
  "g": 34,
  "b": 73,
  "rgb": "rgb(214, 34, 73)",
  "hex": "#d62249"
}, {
  "value": "rgb(229.0,26.0,48.0)",
  "brand": "Burberry",
  "colour": "MILITARY RED 305",
  "r": 229,
  "g": 26,
  "b": 48,
  "rgb": "rgb(229, 26, 48)",
  "hex": "#e51a30"
}, {
  "value": "rgb(244.0,13.0,65.0)",
  "brand": "Burberry",
  "colour": "CHERRY RED 301",
  "r": 244,
  "g": 13,
  "b": 65,
  "rgb": "rgb(244, 13, 65)",
  "hex": "#f40d41"
}, {
  "value": "rgb(146.0,33.0,51.0)",
  "brand": "Burberry",
  "colour": "OXBLOOD 293",
  "r": 146,
  "g": 33,
  "b": 51,
  "rgb": "rgb(146, 33, 51)",
  "hex": "#922133"
}, {
  "value": "rgb(176.0,33.0,77.0)",
  "brand": "Burberry",
  "colour": "BOYSENBERRY 289",
  "r": 176,
  "g": 33,
  "b": 77,
  "rgb": "rgb(176, 33, 77)",
  "hex": "#b0214d"
}, {
  "value": "rgb(173.0,72.0,78.0)",
  "brand": "Burberry",
  "colour": "TEA ROSE 277",
  "r": 173,
  "g": 72,
  "b": 78,
  "rgb": "rgb(173, 72, 78)",
  "hex": "#ad484e"
}, {
  "value": "rgb(243.0,50.0,77.0)",
  "brand": "Burberry",
  "colour": "LIGHT CRIMSON 269",
  "r": 243,
  "g": 50,
  "b": 77,
  "rgb": "rgb(243, 50, 77)",
  "hex": "#f3324d"
}, {
  "value": "rgb(230.0,70.0,72.0)",
  "brand": "Burberry",
  "colour": "CORAL PINK 265",
  "r": 230,
  "g": 70,
  "b": 72,
  "rgb": "rgb(230, 70, 72)",
  "hex": "#e64648"
}, {
  "value": "rgb(255.0,93.0,88.0)",
  "brand": "Burberry",
  "colour": "CORAL 257",
  "r": 255,
  "g": 93,
  "b": 88,
  "rgb": "rgb(255, 93, 88)",
  "hex": "#ff5d58"
}, {
  "value": "rgb(213.0,53.0,81.0)",
  "brand": "Burberry",
  "colour": "POMEGRANATE 253",
  "r": 213,
  "g": 53,
  "b": 81,
  "rgb": "rgb(213, 53, 81)",
  "hex": "#d53551"
}, {
  "value": "rgb(201.0,60.0,95.0)",
  "brand": "Burberry",
  "colour": "HYDRANGEA 249",
  "r": 201,
  "g": 60,
  "b": 95,
  "rgb": "rgb(201, 60, 95)",
  "hex": "#c93c5f"
}, {
  "value": "rgb(224.0,48.0,87.0)",
  "brand": "Burberry",
  "colour": "SWEAT PEA 245",
  "r": 224,
  "g": 48,
  "b": 87,
  "rgb": "rgb(224, 48, 87)",
  "hex": "#e03057"
}, {
  "value": "rgb(241.0,40.0,86.0)",
  "brand": "Burberry",
  "colour": "CRIMSON PINK 241",
  "r": 241,
  "g": 40,
  "b": 86,
  "rgb": "rgb(241, 40, 86)",
  "hex": "#f12856"
}, {
  "value": "rgb(254.0,36.0,110.0)",
  "brand": "Burberry",
  "colour": "HIBISCUS 237",
  "r": 254,
  "g": 36,
  "b": 110,
  "rgb": "rgb(254, 36, 110)",
  "hex": "#fe246e"
}, {
  "value": "rgb(254.0,36.0,96.0)",
  "brand": "Burberry",
  "colour": "BRIGHT PINK 233",
  "r": 254,
  "g": 36,
  "b": 96,
  "rgb": "rgb(254, 36, 96)",
  "hex": "#fe2460"
}, {
  "value": "rgb(247.0,66.0,111.0)",
  "brand": "Burberry",
  "colour": "CAMELIA 229",
  "r": 247,
  "g": 66,
  "b": 111,
  "rgb": "rgb(247, 66, 111)",
  "hex": "#f7426f"
}, {
  "value": "rgb(255.0,72.0,139.0)",
  "brand": "Burberry",
  "colour": "CARNATION 225",
  "r": 255,
  "g": 72,
  "b": 139,
  "rgb": "rgb(255, 72, 139)",
  "hex": "#ff488b"
}, {
  "value": "rgb(196.0,112.0,102.0)",
  "brand": "Burberry",
  "colour": "NUDE 221",
  "r": 196,
  "g": 112,
  "b": 102,
  "rgb": "rgb(196, 112, 102)",
  "hex": "#c47066"
}, {
  "value": "rgb(211.0,115.0,116.0)",
  "brand": "Burberry",
  "colour": "ORCHID PINK 213",
  "r": 211,
  "g": 115,
  "b": 116,
  "rgb": "rgb(211, 115, 116)",
  "hex": "#d37374"
}, {
  "value": "rgb(233.0,131.0,129.0)",
  "brand": "Burberry",
  "colour": "CAMEO ROSE 209",
  "r": 233,
  "g": 131,
  "b": 129,
  "rgb": "rgb(233, 131, 129)",
  "hex": "#e98381"
}, {
  "value": "rgb(231.0,96.0,103.0)",
  "brand": "Burberry",
  "colour": "NUDE PINK 205",
  "r": 231,
  "g": 96,
  "b": 103,
  "rgb": "rgb(231, 96, 103)",
  "hex": "#e76067"
}, {
  "value": "rgb(231.0,40.0,47.0)",
  "brand": "Burberry",
  "colour": "Military Red 553",
  "r": 231,
  "g": 40,
  "b": 47,
  "rgb": "rgb(231, 40, 47)",
  "hex": "#e7282f"
}, {
  "value": "rgb(131.0,63.0,54.0)",
  "brand": "Burberry",
  "colour": "Oxblood 549",
  "r": 131,
  "g": 63,
  "b": 54,
  "rgb": "rgb(131, 63, 54)",
  "hex": "#833f36"
}, {
  "value": "rgb(128.0,47.0,79.0)",
  "brand": "Burberry",
  "colour": "Dewberry 545",
  "r": 128,
  "g": 47,
  "b": 79,
  "rgb": "rgb(128, 47, 79)",
  "hex": "#802f4f"
}, {
  "value": "rgb(211.0,118.0,128.0)",
  "brand": "Burberry",
  "colour": "Rosehip 537",
  "r": 211,
  "g": 118,
  "b": 128,
  "rgb": "rgb(211, 118, 128)",
  "hex": "#d37680"
}, {
  "value": "rgb(187.0,94.0,87.0)",
  "brand": "Burberry",
  "colour": "Rosewood 533",
  "r": 187,
  "g": 94,
  "b": 87,
  "rgb": "rgb(187, 94, 87)",
  "hex": "#bb5e57"
}, {
  "value": "rgb(203.0,126.0,120.0)",
  "brand": "Burberry",
  "colour": "English Rose 529",
  "r": 203,
  "g": 126,
  "b": 120,
  "rgb": "rgb(203, 126, 120)",
  "hex": "#cb7e78"
}, {
  "value": "rgb(245.0,95.0,71.0)",
  "brand": "Burberry",
  "colour": "Coral Red 525",
  "r": 245,
  "g": 95,
  "b": 71,
  "rgb": "rgb(245, 95, 71)",
  "hex": "#f55f47"
}, {
  "value": "rgb(255.0,141.0,120.0)",
  "brand": "Burberry",
  "colour": "Rose Apricot 521",
  "r": 255,
  "g": 141,
  "b": 120,
  "rgb": "rgb(255, 141, 120)",
  "hex": "#ff8d78"
}, {
  "value": "rgb(248.0,96.0,108.0)",
  "brand": "Burberry",
  "colour": "Light Crimson 517",
  "r": 248,
  "g": 96,
  "b": 108,
  "rgb": "rgb(248, 96, 108)",
  "hex": "#f8606c"
}, {
  "value": "rgb(249.0,127.0,152.0)",
  "brand": "Burberry",
  "colour": "Peony Rose 513",
  "r": 249,
  "g": 127,
  "b": 152,
  "rgb": "rgb(249, 127, 152)",
  "hex": "#f97f98"
}, {
  "value": "rgb(192.0,130.0,107.0)",
  "brand": "Burberry",
  "colour": "Nude 505",
  "r": 192,
  "g": 130,
  "b": 107,
  "rgb": "rgb(192, 130, 107)",
  "hex": "#c0826b"
}, {
  "value": "rgb(215.0,163.0,141.0)",
  "brand": "Burberry",
  "colour": "Nude Blush 501",
  "r": 215,
  "g": 163,
  "b": 141,
  "rgb": "rgb(215, 163, 141)",
  "hex": "#d7a38d"
}, {
  "value": "rgb(74.0,1.0,8.0)",
  "brand": "Burberry",
  "colour": "BLACK CHERRY 439",
  "r": 74,
  "g": 1,
  "b": 8,
  "rgb": "rgb(74, 1, 8)",
  "hex": "#4a0108"
}, {
  "value": "rgb(114.0,44.0,54.0)",
  "brand": "Burberry",
  "colour": "Oxblood 437",
  "r": 114,
  "g": 44,
  "b": 54,
  "rgb": "rgb(114, 44, 54)",
  "hex": "#722c36"
}, {
  "value": "rgb(196.0,45.0,54.0)",
  "brand": "Burberry",
  "colour": "RUBY 434",
  "r": 196,
  "g": 45,
  "b": 54,
  "rgb": "rgb(196, 45, 54)",
  "hex": "#c42d36"
}, {
  "value": "rgb(181.0,24.0,51.0)",
  "brand": "Burberry",
  "colour": "Poppy Red 433",
  "r": 181,
  "g": 24,
  "b": 51,
  "rgb": "rgb(181, 24, 51)",
  "hex": "#b51833"
}, {
  "value": "rgb(194.0,19.0,36.0)",
  "brand": "Burberry",
  "colour": "Military Red 429",
  "r": 194,
  "g": 19,
  "b": 36,
  "rgb": "rgb(194, 19, 36)",
  "hex": "#c21324"
}, {
  "value": "rgb(235.0,51.0,63.0)",
  "brand": "Burberry",
  "colour": "Rosy Red 428",
  "r": 235,
  "g": 51,
  "b": 63,
  "rgb": "rgb(235, 51, 63)",
  "hex": "#eb333f"
}, {
  "value": "rgb(171.0,57.0,91.0)",
  "brand": "Burberry",
  "colour": "Bright Plum 426",
  "r": 171,
  "g": 57,
  "b": 91,
  "rgb": "rgb(171, 57, 91)",
  "hex": "#ab395b"
}, {
  "value": "rgb(163.0,45.0,79.0)",
  "brand": "Burberry",
  "colour": "Damson 425",
  "r": 163,
  "g": 45,
  "b": 79,
  "rgb": "rgb(163, 45, 79)",
  "hex": "#a32d4f"
}, {
  "value": "rgb(227.0,78.0,136.0)",
  "brand": "Burberry",
  "colour": "Lilac 424",
  "r": 227,
  "g": 78,
  "b": 136,
  "rgb": "rgb(227, 78, 136)",
  "hex": "#e34e88"
}, {
  "value": "rgb(193.0,95.0,110.0)",
  "brand": "Burberry",
  "colour": "Rosewood 421",
  "r": 193,
  "g": 95,
  "b": 110,
  "rgb": "rgb(193, 95, 110)",
  "hex": "#c15f6e"
}, {
  "value": "rgb(255.0,57.0,100.0)",
  "brand": "Burberry",
  "colour": "MAGENTA PINK 419",
  "r": 255,
  "g": 57,
  "b": 100,
  "rgb": "rgb(255, 57, 100)",
  "hex": "#ff3964"
}, {
  "value": "rgb(255.0,87.0,136.0)",
  "brand": "Burberry",
  "colour": "Fuchsia Pink 418",
  "r": 255,
  "g": 87,
  "b": 136,
  "rgb": "rgb(255, 87, 136)",
  "hex": "#ff5788"
}, {
  "value": "rgb(255.0,31.0,71.0)",
  "brand": "Burberry",
  "colour": "Bright Rose 417",
  "r": 255,
  "g": 31,
  "b": 71,
  "rgb": "rgb(255, 31, 71)",
  "hex": "#ff1f47"
}, {
  "value": "rgb(226.0,77.0,96.0)",
  "brand": "Burberry",
  "colour": "Pomegranate Pink 413",
  "r": 226,
  "g": 77,
  "b": 96,
  "rgb": "rgb(226, 77, 96)",
  "hex": "#e24d60"
}, {
  "value": "rgb(251.0,62.0,60.0)",
  "brand": "Burberry",
  "colour": "ORANGE RED 412",
  "r": 251,
  "g": 62,
  "b": 60,
  "rgb": "rgb(251, 62, 60)",
  "hex": "#fb3e3c"
}, {
  "value": "rgb(255.0,83.0,69.0)",
  "brand": "Burberry",
  "colour": "Coral Orange 411",
  "r": 255,
  "g": 83,
  "b": 69,
  "rgb": "rgb(255, 83, 69)",
  "hex": "#ff5345"
}, {
  "value": "rgb(211.0,71.0,72.0)",
  "brand": "Burberry",
  "colour": "Honeysuckle 409",
  "r": 211,
  "g": 71,
  "b": 72,
  "rgb": "rgb(211, 71, 72)",
  "hex": "#d34748"
}, {
  "value": "rgb(205.0,29.0,48.0)",
  "brand": "Vapour",
  "colour": "Coquette",
  "r": 205,
  "g": 29,
  "b": 48,
  "rgb": "rgb(205, 29, 48)",
  "hex": "#cd1d30"
}, {
  "value": "rgb(222.0,150.0,118.0)",
  "brand": "Vapour",
  "colour": "Chill",
  "r": 222,
  "g": 150,
  "b": 118,
  "rgb": "rgb(222, 150, 118)",
  "hex": "#de9676"
}, {
  "value": "rgb(230.0,110.0,121.0)",
  "brand": "Vapour",
  "colour": "Desire",
  "r": 230,
  "g": 110,
  "b": 121,
  "rgb": "rgb(230, 110, 121)",
  "hex": "#e66e79"
}, {
  "value": "rgb(232.0,81.0,75.0)",
  "brand": "Vapour",
  "colour": "Hint",
  "r": 232,
  "g": 81,
  "b": 75,
  "rgb": "rgb(232, 81, 75)",
  "hex": "#e8514b"
}, {
  "value": "rgb(189.0,29.0,0.0)",
  "brand": "Vapour",
  "colour": "Tempest",
  "r": 189,
  "g": 29,
  "b": 0,
  "rgb": "rgb(189, 29, 0)",
  "hex": "#bd1d00"
}, {
  "value": "rgb(213.0,105.0,98.0)",
  "brand": "Vapour",
  "colour": "Tempt",
  "r": 213,
  "g": 105,
  "b": 98,
  "rgb": "rgb(213, 105, 98)",
  "hex": "#d56962"
}, {
  "value": "rgb(168.0,25.0,23.0)",
  "brand": "Vapour",
  "colour": "Blaze",
  "r": 168,
  "g": 25,
  "b": 23,
  "rgb": "rgb(168, 25, 23)",
  "hex": "#a81917"
}, {
  "value": "rgb(195.0,119.0,116.0)",
  "brand": "Vapour",
  "colour": "Chere",
  "r": 195,
  "g": 119,
  "b": 116,
  "rgb": "rgb(195, 119, 116)",
  "hex": "#c37774"
}, {
  "value": "rgb(171.0,88.0,86.0)",
  "brand": "Vapour",
  "colour": "Madam",
  "r": 171,
  "g": 88,
  "b": 86,
  "rgb": "rgb(171, 88, 86)",
  "hex": "#ab5856"
}, {
  "value": "rgb(151.0,9.0,44.0)",
  "brand": "Vapour",
  "colour": "Primal",
  "r": 151,
  "g": 9,
  "b": 44,
  "rgb": "rgb(151, 9, 44)",
  "hex": "#97092c"
}, {
  "value": "rgb(161.0,16.0,2.0)",
  "brand": "Vapour",
  "colour": "Adore",
  "r": 161,
  "g": 16,
  "b": 2,
  "rgb": "rgb(161, 16, 2)",
  "hex": "#a11002"
}, {
  "value": "rgb(207.0,109.0,134.0)",
  "brand": "Vapour",
  "colour": "Au Pair",
  "r": 207,
  "g": 109,
  "b": 134,
  "rgb": "rgb(207, 109, 134)",
  "hex": "#cf6d86"
}, {
  "value": "rgb(216.0,118.0,102.0)",
  "brand": "Vapour",
  "colour": "Bare",
  "r": 216,
  "g": 118,
  "b": 102,
  "rgb": "rgb(216, 118, 102)",
  "hex": "#d87666"
}, {
  "value": "rgb(133.0,1.0,20.0)",
  "brand": "Vapour",
  "colour": "Bold",
  "r": 133,
  "g": 1,
  "b": 20,
  "rgb": "rgb(133, 1, 20)",
  "hex": "#850114"
}, {
  "value": "rgb(227.0,113.0,104.0)",
  "brand": "Vapour",
  "colour": "Chemistry",
  "r": 227,
  "g": 113,
  "b": 104,
  "rgb": "rgb(227, 113, 104)",
  "hex": "#e37168"
}, {
  "value": "rgb(148.0,2.0,2.0)",
  "brand": "Vapour",
  "colour": "Legend",
  "r": 148,
  "g": 2,
  "b": 2,
  "rgb": "rgb(148, 2, 2)",
  "hex": "#940202"
}, {
  "value": "rgb(211.0,89.0,86.0)",
  "brand": "Vapour",
  "colour": "Murmur",
  "r": 211,
  "g": 89,
  "b": 86,
  "rgb": "rgb(211, 89, 86)",
  "hex": "#d35956"
}, {
  "value": "rgb(230.0,95.0,106.0)",
  "brand": "Vapour",
  "colour": "Pin Up",
  "r": 230,
  "g": 95,
  "b": 106,
  "rgb": "rgb(230, 95, 106)",
  "hex": "#e65f6a"
}, {
  "value": "rgb(209.50995024875633,133.51990049751254,121.06716417910454)",
  "brand": "SEPHORA COLLECTION",
  "colour": "02 Cinnamon Crush nude-brown - semi-matte",
  "r": 209,
  "g": 133,
  "b": 121,
  "rgb": "rgb(209, 133, 121)",
  "hex": "#d18579"
}, {
  "value": "rgb(167.1959706959708,93.1703296703296,79.77838827838828)",
  "brand": "SEPHORA COLLECTION",
  "colour": "04 Brown Is Back! pinky light brown - matte",
  "r": 167,
  "g": 93,
  "b": 79,
  "rgb": "rgb(167, 93, 79)",
  "hex": "#a75d4f"
}, {
  "value": "rgb(174.4460694698353,81.55393053016465,81.24680073126137)",
  "brand": "SEPHORA COLLECTION",
  "colour": "06 Blooming Rose brownish pink - matte ",
  "r": 174,
  "g": 81,
  "b": 81,
  "rgb": "rgb(174, 81, 81)",
  "hex": "#ae5151"
}, {
  "value": "rgb(205.45017182130564,9.774914089347046,95.02233676975948)",
  "brand": "SEPHORA COLLECTION",
  "colour": "12 Royal Raspberry fuschia - semi-ma",
  "r": 205,
  "g": 9,
  "b": 95,
  "rgb": "rgb(205, 9, 95)",
  "hex": "#cd095f"
}, {
  "value": "rgb(172.09019607843126,27.411764705882362,44.42156862745098)",
  "brand": "SEPHORA COLLECTION",
  "colour": "19 Pure Red red - matte ",
  "r": 172,
  "g": 27,
  "b": 44,
  "rgb": "rgb(172, 27, 44)",
  "hex": "#ac1b2c"
}, {
  "value": "rgb(113.1786542923433,48.39907192575401,54.21809744779595)",
  "brand": "SEPHORA COLLECTION",
  "colour": "23 Elegant In Brown deep mauve - semi-matte ",
  "r": 113,
  "g": 48,
  "b": 54,
  "rgb": "rgb(113, 48, 54)",
  "hex": "#713036"
}, {
  "value": "rgb(222.3506329113923,143.40759493670902,137.267088607595)",
  "brand": "SEPHORA COLLECTION",
  "colour": "27 Fresh Nude",
  "r": 222,
  "g": 143,
  "b": 137,
  "rgb": "rgb(222, 143, 137)",
  "hex": "#de8f89"
}, {
  "value": "rgb(233.28271604938274,132.94320987654305,126.46543209876548)",
  "brand": "SEPHORA COLLECTION",
  "colour": "28 Spring Rose",
  "r": 233,
  "g": 132,
  "b": 126,
  "rgb": "rgb(233, 132, 126)",
  "hex": "#e9847e"
}, {
  "value": "rgb(247.13591022443876,110.14339152119706,124.49625935162106)",
  "brand": "SEPHORA COLLECTION",
  "colour": "30 Elegant In Pink",
  "r": 247,
  "g": 110,
  "b": 124,
  "rgb": "rgb(247, 110, 124)",
  "hex": "#f76e7c"
}, {
  "value": "rgb(254.11830635118326,104.57285180572863,125.07970112079695)",
  "brand": "SEPHORA COLLECTION",
  "colour": "31 Marvelous Pink",
  "r": 254,
  "g": 104,
  "b": 125,
  "rgb": "rgb(254, 104, 125)",
  "hex": "#fe687d"
}, {
  "value": "rgb(206.4804964539006,63.900709219858044,59.53723404255325)",
  "brand": "SEPHORA COLLECTION",
  "colour": "35 Red is Back",
  "r": 206,
  "g": 63,
  "b": 59,
  "rgb": "rgb(206, 63, 59)",
  "hex": "#ce3f3b"
}, {
  "value": "rgb(187.86724137931049,63.78103448275853,55.594827586206975)",
  "brand": "SEPHORA COLLECTION",
  "colour": "36 Midnight Red",
  "r": 187,
  "g": 63,
  "b": 55,
  "rgb": "rgb(187, 63, 55)",
  "hex": "#bb3f37"
}, {
  "value": "rgb(204.00823723228996,80.0560131795716,113.92257001647437)",
  "brand": "SEPHORA COLLECTION",
  "colour": "37 Fabulous Berry",
  "r": 204,
  "g": 80,
  "b": 113,
  "rgb": "rgb(204, 80, 113)",
  "hex": "#cc5071"
}, {
  "value": "rgb(206.6619897959183,102.14668367346944,147.45535714285722)",
  "brand": "SEPHORA COLLECTION",
  "colour": "38 Hint of Plum",
  "r": 206,
  "g": 102,
  "b": 147,
  "rgb": "rgb(206, 102, 147)",
  "hex": "#ce6693"
}, {
  "value": "rgb(208.61208267090635,96.07949125596194,138.50874403815578)",
  "brand": "SEPHORA COLLECTION",
  "colour": "39 Funky Rose",
  "r": 208,
  "g": 96,
  "b": 138,
  "rgb": "rgb(208, 96, 138)",
  "hex": "#d0608a"
}, {
  "value": "rgb(147.8185404339251,75.55424063116364,88.27810650887574)",
  "brand": "SEPHORA COLLECTION",
  "colour": "42 Mythic Magenta",
  "r": 147,
  "g": 75,
  "b": 88,
  "rgb": "rgb(147, 75, 88)",
  "hex": "#934b58"
}, {
  "value": "rgb(159.40196078431364,78.62156862745105,65.34705882352942)",
  "brand": "SEPHORA COLLECTION",
  "colour": "43 Chocolate Cherry",
  "r": 159,
  "g": 78,
  "b": 65,
  "rgb": "rgb(159, 78, 65)",
  "hex": "#9f4e41"
}, {
  "value": "rgb(253.12262521588946,90.39550949913654,103.23661485319502)",
  "brand": "SEPHORA COLLECTION",
  "colour": "14 Go For Pink! pink coral - semi-matte ",
  "r": 253,
  "g": 90,
  "b": 103,
  "rgb": "rgb(253, 90, 103)",
  "hex": "#fd5a67"
}, {
  "value": "rgb(168.9377358490565,92.49999999999991,108.03018867924519)",
  "brand": "SEPHORA COLLECTION",
  "colour": "M03 No Superstar",
  "r": 168,
  "g": 92,
  "b": 108,
  "rgb": "rgb(168, 92, 108)",
  "hex": "#a85c6c"
}, {
  "value": "rgb(242.31201550387587,18.988372093023216,124.8565891472869)",
  "brand": "SEPHORA COLLECTION",
  "colour": "M08 Peace And Rock",
  "r": 242,
  "g": 18,
  "b": 124,
  "rgb": "rgb(242, 18, 124)",
  "hex": "#f2127c"
}, {
  "value": "rgb(208.91844660194158,52.097087378640744,139.29514563106798)",
  "brand": "SEPHORA COLLECTION",
  "colour": "M09 No Games",
  "r": 208,
  "g": 52,
  "b": 139,
  "rgb": "rgb(208, 52, 139)",
  "hex": "#d0348b"
}, {
  "value": "rgb(216.7787021630615,133.32113144758722,101.73876871880192)",
  "brand": "SEPHORA COLLECTION",
  "colour": "SR30 Love Life",
  "r": 216,
  "g": 133,
  "b": 101,
  "rgb": "rgb(216, 133, 101)",
  "hex": "#d88565"
}, {
  "value": "rgb(223.6683291770571,155.37655860349122,107.56982543640906)",
  "brand": "SEPHORA COLLECTION",
  "colour": "R63 Delicious Temptation",
  "r": 223,
  "g": 155,
  "b": 107,
  "rgb": "rgb(223, 155, 107)",
  "hex": "#df9b6b"
}, {
  "value": "rgb(197.850819672131,122.16721311475415,120.55901639344272)",
  "brand": "SEPHORA COLLECTION",
  "colour": "Ingenuous 21 cool beigey brown",
  "r": 197,
  "g": 122,
  "b": 120,
  "rgb": "rgb(197, 122, 120)",
  "hex": "#c57a78"
}, {
  "value": "rgb(201.57645259938826,113.23547400611626,106.11926605504588)",
  "brand": "SEPHORA COLLECTION",
  "colour": "Charmer 19 warm toffee",
  "r": 201,
  "g": 113,
  "b": 106,
  "rgb": "rgb(201, 113, 106)",
  "hex": "#c9716a"
}, {
  "value": "rgb(168.2159533073931,98.48832684824916,97.96498054474706)",
  "brand": "SEPHORA COLLECTION",
  "colour": "Angelic 65",
  "r": 168,
  "g": 98,
  "b": 97,
  "rgb": "rgb(168, 98, 97)",
  "hex": "#a86261"
}, {
  "value": "rgb(136.30818965517247,70.75862068965522,68.8060344827587)",
  "brand": "SEPHORA COLLECTION",
  "colour": "Authentic 68",
  "r": 136,
  "g": 70,
  "b": 68,
  "rgb": "rgb(136, 70, 68)",
  "hex": "#884644"
}, {
  "value": "rgb(184.65770609318986,99.09139784946231,97.55734767025102)",
  "brand": "SEPHORA COLLECTION",
  "colour": "R61 Lucky One",
  "r": 184,
  "g": 99,
  "b": 97,
  "rgb": "rgb(184, 99, 97)",
  "hex": "#b86361"
}, {
  "value": "rgb(189.72664359861577,95.65743944636677,107.13494809688582)",
  "brand": "SEPHORA COLLECTION",
  "colour": "h Oh! 18 muted pinky brown",
  "r": 189,
  "g": 95,
  "b": 107,
  "rgb": "rgb(189, 95, 107)",
  "hex": "#bd5f6b"
}, {
  "value": "rgb(136.1685649202733,74.75398633257403,77.91571753986344)",
  "brand": "SEPHORA COLLECTION",
  "colour": "Magnetism 27 deep browned bronze",
  "r": 136,
  "g": 74,
  "b": 77,
  "rgb": "rgb(136, 74, 77)",
  "hex": "#884a4d"
}, {
  "value": "rgb(238.61845386533656,106.3092269326684,156.60224438902733)",
  "brand": "SEPHORA COLLECTION",
  "colour": "SR31 Miss Or Madam",
  "r": 238,
  "g": 106,
  "b": 156,
  "rgb": "rgb(238, 106, 156)",
  "hex": "#ee6a9c"
}, {
  "value": "rgb(232.14249363867685,111.48854961832069,141.95801526717565)",
  "brand": "SEPHORA COLLECTION",
  "colour": "R55 Irresistable Attraction",
  "r": 232,
  "g": 111,
  "b": 141,
  "rgb": "rgb(232, 111, 141)",
  "hex": "#e86f8d"
}, {
  "value": "rgb(252.74222797927456,92.7383419689119,97.16709844559576)",
  "brand": "SEPHORA COLLECTION",
  "colour": "SR33 Unfaithful",
  "r": 252,
  "g": 92,
  "b": 97,
  "rgb": "rgb(252, 92, 97)",
  "hex": "#fc5c61"
}, {
  "value": "rgb(200.92504570383923,43.63071297989029,94.59232175502756)",
  "brand": "SEPHORA COLLECTION",
  "colour": "Mr. Lover 10 bright fuchsia",
  "r": 200,
  "g": 43,
  "b": 94,
  "rgb": "rgb(200, 43, 94)",
  "hex": "#c82b5e"
}, {
  "value": "rgb(254.320895522388,95.13308457711439,175.91417910447768)",
  "brand": "SEPHORA COLLECTION",
  "colour": "R56 Call Me Baby",
  "r": 254,
  "g": 95,
  "b": 175,
  "rgb": "rgb(254, 95, 175)",
  "hex": "#fe5faf"
}, {
  "value": "rgb(222.88099467140333,47.78152753108347,49.7264653641209)",
  "brand": "SEPHORA COLLECTION",
  "colour": "SR43 We Have To Talk",
  "r": 222,
  "g": 47,
  "b": 49,
  "rgb": "rgb(222, 47, 49)",
  "hex": "#de2f31"
}, {
  "value": "rgb(174.76436781609195,45.7969348659004,31.51532567049816)",
  "brand": "SEPHORA COLLECTION",
  "colour": "Brazen 67",
  "r": 174,
  "g": 45,
  "b": 31,
  "rgb": "rgb(174, 45, 31)",
  "hex": "#ae2d1f"
}, {
  "value": "rgb(216.31755424063132,91.30177514792895,119.8106508875741)",
  "brand": "SEPHORA COLLECTION",
  "colour": "1st Night 13 true warm rose",
  "r": 216,
  "g": 91,
  "b": 119,
  "rgb": "rgb(216, 91, 119)",
  "hex": "#d85b77"
}, {
  "value": "rgb(182.9344569288391,31.668539325842616,32.67602996254673)",
  "brand": "SEPHORA COLLECTION",
  "colour": "The Red 04 classic bright red",
  "r": 182,
  "g": 31,
  "b": 32,
  "rgb": "rgb(182, 31, 32)",
  "hex": "#b61f20"
}, {
  "value": "rgb(192.27560521415262,42.661080074487906,59.12104283054007)",
  "brand": "SEPHORA COLLECTION",
  "colour": "Hot Tango 05 bright pink red",
  "r": 192,
  "g": 42,
  "b": 59,
  "rgb": "rgb(192, 42, 59)",
  "hex": "#c02a3b"
}, {
  "value": "rgb(199.13465346534664,73.03168316831696,81.36435643564353)",
  "brand": "SEPHORA COLLECTION",
  "colour": "R49 Belly-dancing ",
  "r": 199,
  "g": 73,
  "b": 81,
  "rgb": "rgb(199, 73, 81)",
  "hex": "#c74951"
}, {
  "value": "rgb(176.51132075471705,66.54528301886785,88.05471698113213)",
  "brand": "SEPHORA COLLECTION",
  "colour": "Passion Red 03 dark rosey red",
  "r": 176,
  "g": 66,
  "b": 88,
  "rgb": "rgb(176, 66, 88)",
  "hex": "#b04258"
}, {
  "value": "rgb(121.36027713625869,36.635103926097,51.83833718244802)",
  "brand": "SEPHORA COLLECTION",
  "colour": "Intrepid 64",
  "r": 121,
  "g": 36,
  "b": 51,
  "rgb": "rgb(121, 36, 51)",
  "hex": "#792433"
}, {
  "value": "rgb(145.30168776371292,51.91350210970458,87.76371308016878)",
  "brand": "SEPHORA COLLECTION",
  "colour": "Crush 23 deep reddish plum",
  "r": 145,
  "g": 51,
  "b": 87,
  "rgb": "rgb(145, 51, 87)",
  "hex": "#913357"
}, {
  "value": "rgb(104.73643410852725,86.40503875968986,126.36434108527115)",
  "brand": "SEPHORA COLLECTION",
  "colour": "R62 Private Boudoir",
  "r": 104,
  "g": 86,
  "b": 126,
  "rgb": "rgb(104, 86, 126)",
  "hex": "#68567e"
}, {
  "value": "rgb(237.9640287769784,184.25179856115113,147.7625899280575)",
  "brand": "SEPHORA COLLECTION",
  "colour": "48 my everything",
  "r": 237,
  "g": 184,
  "b": 147,
  "rgb": "rgb(237, 184, 147)",
  "hex": "#edb893"
}, {
  "value": "rgb(251.66351829988204,183.4309327036599,163.62927981109812)",
  "brand": "SEPHORA COLLECTION",
  "colour": "49 run on love",
  "r": 251,
  "g": 183,
  "b": 163,
  "rgb": "rgb(251, 183, 163)",
  "hex": "#fbb7a3"
}, {
  "value": "rgb(220.0075949367087,151.91645569620272,134.91392405063306)",
  "brand": "SEPHORA COLLECTION",
  "colour": "54 romantic holidays",
  "r": 220,
  "g": 151,
  "b": 134,
  "rgb": "rgb(220, 151, 134)",
  "hex": "#dc9786"
}, {
  "value": "rgb(247.8257261410789,154.03526970954354,144.5)",
  "brand": "SEPHORA COLLECTION",
  "colour": "5 shining moment",
  "r": 247,
  "g": 154,
  "b": 144,
  "rgb": "rgb(247, 154, 144)",
  "hex": "#f79a90"
}, {
  "value": "rgb(244.4485645933017,146.52870813397135,154.3456937799044)",
  "brand": "SEPHORA COLLECTION",
  "colour": "4 so cute!",
  "r": 244,
  "g": 146,
  "b": 154,
  "rgb": "rgb(244, 146, 154)",
  "hex": "#f4929a"
}, {
  "value": "rgb(150.22306940128718,74.0135411122614,79.0319012431545)",
  "brand": "Rituel de Fille",
  "colour": "Carnal",
  "r": 150,
  "g": 74,
  "b": 79,
  "rgb": "rgb(150, 74, 79)",
  "hex": "#964a4f"
}, {
  "value": "rgb(51.30194778227306,13.246746772401721,11.487487586479652)",
  "brand": "Rituel de Fille",
  "colour": "Ravenous",
  "r": 51,
  "g": 13,
  "b": 11,
  "rgb": "rgb(51, 13, 11)",
  "hex": "#330d0b"
}, {
  "value": "rgb(101.19513866315633,59.241571432128055,69.46877391281721)",
  "brand": "Rituel de Fille",
  "colour": "Conjurer",
  "r": 101,
  "g": 59,
  "b": 69,
  "rgb": "rgb(101, 59, 69)",
  "hex": "#653b45"
}, {
  "value": "rgb(57.538631151989655,1.4861762803268164,9.737672722975766)",
  "brand": "Rituel de Fille",
  "colour": "Fortune Teller",
  "r": 57,
  "g": 1,
  "b": 9,
  "rgb": "rgb(57, 1, 9)",
  "hex": "#390109"
}, {
  "value": "rgb(159.45052019274144,1.5113516330088075,8.82066735150774)",
  "brand": "Rituel de Fille",
  "colour": "Written in Blood",
  "r": 159,
  "g": 1,
  "b": 8,
  "rgb": "rgb(159, 1, 8)",
  "hex": "#9f0108"
}, {
  "value": "rgb(150.84398447264513,12.230477976873313,47.59035014599262)",
  "brand": "Rituel de Fille",
  "colour": "Love in Madness",
  "r": 150,
  "g": 12,
  "b": 47,
  "rgb": "rgb(150, 12, 47)",
  "hex": "#960c2f"
}, {
  "value": "rgb(165.04219515179878,101.5216381269025,96.54865280541085)",
  "brand": "Rituel de Fille",
  "colour": "Oracle",
  "r": 165,
  "g": 101,
  "b": 96,
  "rgb": "rgb(165, 101, 96)",
  "hex": "#a56560"
}, {
  "value": "rgb(157.7121736181751,105.36554365390612,115.43542177808237)",
  "brand": "Rituel de Fille",
  "colour": "Prey",
  "r": 157,
  "g": 105,
  "b": 115,
  "rgb": "rgb(157, 105, 115)",
  "hex": "#9d6973"
}, {
  "value": "rgb(185.47566150094957,112.74786176925922,126.34740407557791)",
  "brand": "Rituel de Fille",
  "colour": "Hex",
  "r": 185,
  "g": 112,
  "b": 126,
  "rgb": "rgb(185, 112, 126)",
  "hex": "#b9707e"
}, {
  "value": "rgb(17.53797754337682,18.931894662250826,37.11191287040273)",
  "brand": "Rituel de Fille",
  "colour": "Shadow Self",
  "r": 17,
  "g": 18,
  "b": 37,
  "rgb": "rgb(17, 18, 37)",
  "hex": "#111225"
}, {
  "value": "rgb(24.442541250951408,30.773392781752996,29.054192237782388)",
  "brand": "Rituel de Fille",
  "colour": "Chrysalis",
  "r": 24,
  "g": 30,
  "b": 29,
  "rgb": "rgb(24, 30, 29)",
  "hex": "#181e1d"
}, {
  "value": "rgb(216.71778743240083,117.82221344526275,97.37105952225619)",
  "brand": "Rituel de Fille",
  "colour": "Narcissus",
  "r": 216,
  "g": 117,
  "b": 97,
  "rgb": "rgb(216, 117, 97)",
  "hex": "#d87561"
}, {
  "value": "rgb(22.948990789859828,4.195201124064123,6.9874720517760665)",
  "brand": "Rituel de Fille",
  "colour": "Moonseed",
  "r": 22,
  "g": 4,
  "b": 6,
  "rgb": "rgb(22, 4, 6)",
  "hex": "#160406"
}, {
  "value": "rgb(51.33682015604446,38.343609069541685,36.88514959851682)",
  "brand": "Rituel de Fille",
  "colour": "Black Locust",
  "r": 51,
  "g": 38,
  "b": 36,
  "rgb": "rgb(51, 38, 36)",
  "hex": "#332624"
}, {
  "value": "rgb(219.98760841827055,98.35641746036745,95.54017759328954)",
  "brand": "Rituel de Fille",
  "colour": "Whitethorn",
  "r": 219,
  "g": 98,
  "b": 95,
  "rgb": "rgb(219, 98, 95)",
  "hex": "#db625f"
}, {
  "value": "rgb(238.87695323095943,86.86252102445877,75.98014893387031)",
  "brand": "Rituel de Fille",
  "colour": "Bittersweet",
  "r": 238,
  "g": 86,
  "b": 75,
  "rgb": "rgb(238, 86, 75)",
  "hex": "#ee564b"
}, {
  "value": "rgb(233.41427842890437,17.032873774802084,22.677299137500658)",
  "brand": "Rituel de Fille",
  "colour": "Bloodroot",
  "r": 233,
  "g": 17,
  "b": 22,
  "rgb": "rgb(233, 17, 22)",
  "hex": "#e91116"
}, {
  "value": "rgb(203.867255807744,28.622106179366813,24.26640557003492)",
  "brand": "Rituel de Fille",
  "colour": "Devil's Claw",
  "r": 203,
  "g": 28,
  "b": 24,
  "rgb": "rgb(203, 28, 24)",
  "hex": "#cb1c18"
}, {
  "value": "rgb(226.0588478660262,45.55918711828292,87.22345971178227)",
  "brand": "Rituel de Fille",
  "colour": "Rue",
  "r": 226,
  "g": 45,
  "b": 87,
  "rgb": "rgb(226, 45, 87)",
  "hex": "#e22d57"
}, {
  "value": "rgb(249.59763391035725,110.19105750500694,124.69594901445666)",
  "brand": "Rituel de Fille",
  "colour": "Datura",
  "r": 249,
  "g": 110,
  "b": 124,
  "rgb": "rgb(249, 110, 124)",
  "hex": "#f96e7c"
}, {
  "value": "rgb(215.68160097437664,26.944475313610948,42.53874192653435)",
  "brand": "Rituel de Fille",
  "colour": "Love-Ache",
  "r": 215,
  "g": 26,
  "b": 42,
  "rgb": "rgb(215, 26, 42)",
  "hex": "#d71a2a"
}, {
  "value": "rgb(48.574785535027715,8.239164577112366,10.884393559396916)",
  "brand": "Rituel de Fille",
  "colour": "Swarm",
  "r": 48,
  "g": 8,
  "b": 10,
  "rgb": "rgb(48, 8, 10)",
  "hex": "#30080a"
}, {
  "value": "rgb(236.0,145.0,144.0)",
  "brand": "Rouje Paris",
  "colour": "ALIX-Non",
  "r": 236,
  "g": 145,
  "b": 144,
  "rgb": "rgb(236, 145, 144)",
  "hex": "#ec9190"
}, {
  "value": "rgb(122.0,1.0,16.0)",
  "brand": "Rouje Paris",
  "colour": "CAMILLE-Le Rouge Profond",
  "r": 122,
  "g": 1,
  "b": 16,
  "rgb": "rgb(122, 1, 16)",
  "hex": "#7a0110"
}, {
  "value": "rgb(255.0,69.0,92.0)",
  "brand": "Rouje Paris",
  "colour": "CAROLINE-Le Corail",
  "r": 255,
  "g": 69,
  "b": 92,
  "rgb": "rgb(255, 69, 92)",
  "hex": "#ff455c"
}, {
  "value": "rgb(202.0,108.0,109.0)",
  "brand": "Rouje Paris",
  "colour": "EMILIE-Le Nude",
  "r": 202,
  "g": 108,
  "b": 109,
  "rgb": "rgb(202, 108, 109)",
  "hex": "#ca6c6d"
}, {
  "value": "rgb(197.0,81.0,90.0)",
  "brand": "Rouje Paris",
  "colour": "HELENE-Le Rouge Figue",
  "r": 197,
  "g": 81,
  "b": 90,
  "rgb": "rgb(197, 81, 90)",
  "hex": "#c5515a"
}, {
  "value": "rgb(196.0,15.0,82.0)",
  "brand": "Rouje Paris",
  "colour": "ISABELLE-Fuchsia",
  "r": 196,
  "g": 15,
  "b": 82,
  "rgb": "rgb(196, 15, 82)",
  "hex": "#c40f52"
}, {
  "value": "rgb(200.0,13.0,24.0)",
  "brand": "Rouje Paris",
  "colour": "JEANNE-Rouge Classique",
  "r": 200,
  "g": 13,
  "b": 24,
  "rgb": "rgb(200, 13, 24)",
  "hex": "#c80d18"
}, {
  "value": "rgb(144.0,77.0,86.0)",
  "brand": "Rouje Paris",
  "colour": "LAMIA-Le Prune brun",
  "r": 144,
  "g": 77,
  "b": 86,
  "rgb": "rgb(144, 77, 86)",
  "hex": "#904d56"
}, {
  "value": "rgb(78.0,1.0,33.0)",
  "brand": "Rouje Paris",
  "colour": "LAURA-Le Bordeaux",
  "r": 78,
  "g": 1,
  "b": 33,
  "rgb": "rgb(78, 1, 33)",
  "hex": "#4e0121"
}, {
  "value": "rgb(203.0,61.0,49.0)",
  "brand": "Rouje Paris",
  "colour": "NATHALIE-L'Orange vif",
  "r": 203,
  "g": 61,
  "b": 49,
  "rgb": "rgb(203, 61, 49)",
  "hex": "#cb3d31"
}, {
  "value": "rgb(200.0,41.0,69.0)",
  "brand": "Rouje Paris",
  "colour": "SOPHIE-Le Framboise",
  "r": 200,
  "g": 41,
  "b": 69,
  "rgb": "rgb(200, 41, 69)",
  "hex": "#c82945"
}, {
  "value": "rgb(176.0,124.0,131.0)",
  "brand": "Essence Cosmetics",
  "colour": "01|donuts go nut",
  "r": 176,
  "g": 124,
  "b": 131,
  "rgb": "rgb(176, 124, 131)",
  "hex": "#b07c83"
}, {
  "value": "rgb(231.0,130.0,169.0)",
  "brand": "Essence Cosmetics",
  "colour": "02|marshmalove",
  "r": 231,
  "g": 130,
  "b": 169,
  "rgb": "rgb(231, 130, 169)",
  "hex": "#e782a9"
}, {
  "value": "rgb(181.0,92.0,128.0)",
  "brand": "Essence Cosmetics",
  "colour": "03|dusty romance",
  "r": 181,
  "g": 92,
  "b": 128,
  "rgb": "rgb(181, 92, 128)",
  "hex": "#b55c80"
}, {
  "value": "rgb(180.0,107.0,122.0)",
  "brand": "Essence Cosmetics",
  "colour": "04|hungry pink",
  "r": 180,
  "g": 107,
  "b": 122,
  "rgb": "rgb(180, 107, 122)",
  "hex": "#b46b7a"
}, {
  "value": "rgb(229.0,109.0,177.0)",
  "brand": "Essence Cosmetics",
  "colour": "05|purple rave",
  "r": 229,
  "g": 109,
  "b": 177,
  "rgb": "rgb(229, 109, 177)",
  "hex": "#e56db1"
}, {
  "value": "rgb(206.0,0.0,55.0)",
  "brand": "Essence Cosmetics",
  "colour": "06|unredsistible",
  "r": 206,
  "g": 0,
  "b": 55,
  "rgb": "rgb(206, 0, 55)",
  "hex": "#ce0037"
}, {
  "value": "rgb(239.0,96.0,121.0)",
  "brand": "Essence Cosmetics",
  "colour": "07|craving you",
  "r": 239,
  "g": 96,
  "b": 121,
  "rgb": "rgb(239, 96, 121)",
  "hex": "#ef6079"
}, {
  "value": "rgb(175.0,39.0,47.0)",
  "brand": "Essence Cosmetics",
  "colour": "09|red velvet cake",
  "r": 175,
  "g": 39,
  "b": 47,
  "rgb": "rgb(175, 39, 47)",
  "hex": "#af272f"
}, {
  "value": "rgb(135.0,75.0,82.0)",
  "brand": "Essence Cosmetics",
  "colour": "11|fudgy brownies",
  "r": 135,
  "g": 75,
  "b": 82,
  "rgb": "rgb(135, 75, 82)",
  "hex": "#874b52"
}, {
  "value": "rgb(176.0,74.0,90.0)",
  "brand": "Essence Cosmetics",
  "colour": "10|greedy coffee",
  "r": 176,
  "g": 74,
  "b": 90,
  "rgb": "rgb(176, 74, 90)",
  "hex": "#b04a5a"
}, {
  "value": "rgb(244.0,193.0,225.0)",
  "brand": "Essence Cosmetics",
  "colour": "everlasting love 03",
  "r": 244,
  "g": 193,
  "b": 225,
  "rgb": "rgb(244, 193, 225)",
  "hex": "#f4c1e1"
}, {
  "value": "rgb(136.0,90.0,97.0)",
  "brand": "Essence Cosmetics",
  "colour": "mauved in 04",
  "r": 136,
  "g": 90,
  "b": 97,
  "rgb": "rgb(136, 90, 97)",
  "hex": "#885a61"
}, {
  "value": "rgb(229.0,154.0,168.0)",
  "brand": "Essence Cosmetics",
  "colour": "new-d seduction 06",
  "r": 229,
  "g": 154,
  "b": 168,
  "rgb": "rgb(229, 154, 168)",
  "hex": "#e59aa8"
}, {
  "value": "rgb(199.0,124.0,137.0)",
  "brand": "Essence Cosmetics",
  "colour": "undress my lips 07",
  "r": 199,
  "g": 124,
  "b": 137,
  "rgb": "rgb(199, 124, 137)",
  "hex": "#c77c89"
}, {
  "value": "rgb(216.0,121.0,135.0)",
  "brand": "Essence Cosmetics",
  "colour": "eternal beauty 08",
  "r": 216,
  "g": 121,
  "b": 135,
  "rgb": "rgb(216, 121, 135)",
  "hex": "#d87987"
}, {
  "value": "rgb(228.0,101.0,119.0)",
  "brand": "Essence Cosmetics",
  "colour": "natural kiss 01",
  "r": 228,
  "g": 101,
  "b": 119,
  "rgb": "rgb(228, 101, 119)",
  "hex": "#e46577"
}, {
  "value": "rgb(193.0,44.0,51.0)",
  "brand": "Essence Cosmetics",
  "colour": "kiss me if you can 06",
  "r": 193,
  "g": 44,
  "b": 51,
  "rgb": "rgb(193, 44, 51)",
  "hex": "#c12c33"
}, {
  "value": "rgb(133.0,77.0,98.0)",
  "brand": "Essence Cosmetics",
  "colour": "out of the box 13",
  "r": 133,
  "g": 77,
  "b": 98,
  "rgb": "rgb(133, 77, 98)",
  "hex": "#854d62"
}, {
  "value": "rgb(21.374882437788635,26.123894915022674,31.90237632452307)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Blacquer",
  "r": 21,
  "g": 26,
  "b": 31,
  "rgb": "rgb(21, 26, 31)",
  "hex": "#151a1f"
}, {
  "value": "rgb(121.19838287211834,54.68061724176727,74.26824962988408)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Boy Gorgeous 222",
  "r": 121,
  "g": 54,
  "b": 74,
  "rgb": "rgb(121, 54, 74)",
  "hex": "#79364a"
}, {
  "value": "rgb(156.07259926131218,33.61605493996166,40.10964912282504)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Core Cora 234",
  "r": 156,
  "g": 33,
  "b": 40,
  "rgb": "rgb(156, 33, 40)",
  "hex": "#9c2128"
}, {
  "value": "rgb(193.95857010704165,122.69010175763414,110.88046782080069)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Cream and Sugar 284",
  "r": 193,
  "g": 122,
  "b": 110,
  "rgb": "rgb(193, 122, 110)",
  "hex": "#c17a6e"
}, {
  "value": "rgb(73.40006986085369,22.926413227002726,17.53909297317354)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Editrix 250",
  "r": 73,
  "g": 22,
  "b": 17,
  "rgb": "rgb(73, 22, 17)",
  "hex": "#491611"
}, {
  "value": "rgb(203.45654294073898,135.69405082898842,144.53691698697318)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Georgie Girl 214",
  "r": 203,
  "g": 135,
  "b": 144,
  "rgb": "rgb(203, 135, 144)",
  "hex": "#cb8790"
}, {
  "value": "rgb(98.58440570893572,18.19179925127758,8.638628919050198)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Goddess 202",
  "r": 98,
  "g": 18,
  "b": 8,
  "rgb": "rgb(98, 18, 8)",
  "hex": "#621208"
}, {
  "value": "rgb(162.24069043576503,111.47492925863844,110.5217317487179)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Infamous 228",
  "r": 162,
  "g": 111,
  "b": 110,
  "rgb": "rgb(162, 111, 110)",
  "hex": "#a26f6e"
}, {
  "value": "rgb(120.63133829649425,69.38742013014183,64.1762119702243)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc J'adore 230",
  "r": 120,
  "g": 69,
  "b": 64,
  "rgb": "rgb(120, 69, 64)",
  "hex": "#784540"
}, {
  "value": "rgb(140.81679963002316,62.0911666088495,67.45617990518826)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Je t'aime 238",
  "r": 140,
  "g": 62,
  "b": 67,
  "rgb": "rgb(140, 62, 67)",
  "hex": "#8c3e43"
}, {
  "value": "rgb(115.13854193220033,45.12981136885816,56.311623757322415)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Kate 260",
  "r": 115,
  "g": 45,
  "b": 56,
  "rgb": "rgb(115, 45, 56)",
  "hex": "#732d38"
}, {
  "value": "rgb(202.4464111817593,114.72360657616505,138.6396288022049)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Kiss Kiss Bang Bang 216",
  "r": 202,
  "g": 114,
  "b": 138,
  "rgb": "rgb(202, 114, 138)",
  "hex": "#ca728a"
}, {
  "value": "rgb(103.11525699983179,36.68158798534045,39.44274986902061)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Miss Scarlet 208",
  "r": 103,
  "g": 36,
  "b": 39,
  "rgb": "rgb(103, 36, 39)",
  "hex": "#672427"
}, {
  "value": "rgb(179.48099688472874,111.2607193429518,99.88518833192296)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc No Angel 242",
  "r": 179,
  "g": 111,
  "b": 99,
  "rgb": "rgb(179, 111, 99)",
  "hex": "#b36f63"
}, {
  "value": "rgb(184.06864041391015,37.546823799939816,38.99195171025287)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Oh Miley 200",
  "r": 184,
  "g": 37,
  "b": 38,
  "rgb": "rgb(184, 37, 38)",
  "hex": "#b82526"
}, {
  "value": "rgb(220.12803347280308,128.60920502091875,124.176569037658)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Shakedown 288",
  "r": 220,
  "g": 128,
  "b": 124,
  "rgb": "rgb(220, 128, 124)",
  "hex": "#dc807c"
}, {
  "value": "rgb(180.0672091964455,107.5182107898948,108.68888003640996)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Slow Burn 246",
  "r": 180,
  "g": 107,
  "b": 108,
  "rgb": "rgb(180, 107, 108)",
  "hex": "#b46b6c"
}, {
  "value": "rgb(211.1311174785117,53.00212034383059,86.95174785098709)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc So Sofia 236",
  "r": 211,
  "g": 53,
  "b": 86,
  "rgb": "rgb(211, 53, 86)",
  "hex": "#d33556"
}, {
  "value": "rgb(212.12173015144725,137.5666016521395,126.48124139513806)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Sonic Truth 244",
  "r": 212,
  "g": 137,
  "b": 126,
  "rgb": "rgb(212, 137, 126)",
  "hex": "#d4897e"
}, {
  "value": "rgb(192.26022979237155,89.73190888933433,96.92750117584386)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Strawberry Girl 280",
  "r": 192,
  "g": 89,
  "b": 96,
  "rgb": "rgb(192, 89, 96)",
  "hex": "#c05960"
}, {
  "value": "rgb(125.02651515151513,42.05934343434372,46.186868686868905)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Sugar and Spice 286",
  "r": 125,
  "g": 42,
  "b": 46,
  "rgb": "rgb(125, 42, 46)",
  "hex": "#7d2a2e"
}, {
  "value": "rgb(231.7938230383981,172.1502504173618,170.6744574290492)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Sugar High 292",
  "r": 231,
  "g": 172,
  "b": 170,
  "rgb": "rgb(231, 172, 170)",
  "hex": "#e7acaa"
}, {
  "value": "rgb(75.79398359162167,25.410535225931035,22.473694491465793)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Trax 290",
  "r": 75,
  "g": 25,
  "b": 22,
  "rgb": "rgb(75, 25, 22)",
  "hex": "#4b1916"
}, {
  "value": "rgb(231.7938230383981,172.1502504173618,170.6744574290492)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc True 254",
  "r": 231,
  "g": 172,
  "b": 170,
  "rgb": "rgb(231, 172, 170)",
  "hex": "#e7acaa"
}, {
  "value": "rgb(148.8560980564718,87.41172885488159,100.46800297961846)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Vinyl Dream 282",
  "r": 148,
  "g": 87,
  "b": 100,
  "rgb": "rgb(148, 87, 100)",
  "hex": "#945764"
}, {
  "value": "rgb(194.52339181286862,39.393331084111,144.15806342780374)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Willful 248",
  "r": 194,
  "g": 39,
  "b": 144,
  "rgb": "rgb(194, 39, 144)",
  "hex": "#c22790"
}, {
  "value": "rgb(121.10099637681309,57.765942028984014,45.75634057970899)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Cher-ished 506",
  "r": 121,
  "g": 57,
  "b": 45,
  "rgb": "rgb(121, 57, 45)",
  "hex": "#79392d"
}, {
  "value": "rgb(239.15657795315371,176.53387624884533,180.1355889513895)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Diva 502",
  "r": 239,
  "g": 176,
  "b": 180,
  "rgb": "rgb(239, 176, 180)",
  "hex": "#efb0b4"
}, {
  "value": "rgb(198.28937221947663,86.68156203658114,78.791695501728)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Just Peachy 504",
  "r": 198,
  "g": 86,
  "b": 78,
  "rgb": "rgb(198, 86, 78)",
  "hex": "#c6564e"
}, {
  "value": "rgb(227.24883669399327,155.24761799246713,143.84965654775004)",
  "brand": "Marc Jacobs",
  "colour": "Le Marc Sugar Sugar 500",
  "r": 227,
  "g": 155,
  "b": 143,
  "rgb": "rgb(227, 155, 143)",
  "hex": "#e39b8f"
}, {
  "value": "rgb(218.0,141.0,111.0)",
  "brand": "Natasha Denona",
  "colour": "1B Charlotte",
  "r": 218,
  "g": 141,
  "b": 111,
  "rgb": "rgb(218, 141, 111)",
  "hex": "#da8d6f"
}, {
  "value": "rgb(225.0,136.0,118.0)",
  "brand": "Natasha Denona",
  "colour": "2B Liron",
  "r": 225,
  "g": 136,
  "b": 118,
  "rgb": "rgb(225, 136, 118)",
  "hex": "#e18876"
}, {
  "value": "rgb(200.0,107.0,90.0)",
  "brand": "Natasha Denona",
  "colour": "3B Sami",
  "r": 200,
  "g": 107,
  "b": 90,
  "rgb": "rgb(200, 107, 90)",
  "hex": "#c86b5a"
}, {
  "value": "rgb(165.0,77.0,67.0)",
  "brand": "Natasha Denona",
  "colour": "4B Naya",
  "r": 165,
  "g": 77,
  "b": 67,
  "rgb": "rgb(165, 77, 67)",
  "hex": "#a54d43"
}, {
  "value": "rgb(83.0,20.0,13.0)",
  "brand": "Natasha Denona",
  "colour": "5B Nati",
  "r": 83,
  "g": 20,
  "b": 13,
  "rgb": "rgb(83, 20, 13)",
  "hex": "#53140d"
}, {
  "value": "rgb(78.0,38.0,28.0)",
  "brand": "Natasha Denona",
  "colour": "6B Lala",
  "r": 78,
  "g": 38,
  "b": 28,
  "rgb": "rgb(78, 38, 28)",
  "hex": "#4e261c"
}, {
  "value": "rgb(226.0,145.0,116.0)",
  "brand": "Natasha Denona",
  "colour": "11NB Natasha",
  "r": 226,
  "g": 145,
  "b": 116,
  "rgb": "rgb(226, 145, 116)",
  "hex": "#e29174"
}, {
  "value": "rgb(223.0,128.0,100.0)",
  "brand": "Natasha Denona",
  "colour": "12NB Michelle",
  "r": 223,
  "g": 128,
  "b": 100,
  "rgb": "rgb(223, 128, 100)",
  "hex": "#df8064"
}, {
  "value": "rgb(211.0,109.0,105.0)",
  "brand": "Natasha Denona",
  "colour": "13NB Alison",
  "r": 211,
  "g": 109,
  "b": 105,
  "rgb": "rgb(211, 109, 105)",
  "hex": "#d36d69"
}, {
  "value": "rgb(216.0,128.0,114.0)",
  "brand": "Natasha Denona",
  "colour": "14NB Judith",
  "r": 216,
  "g": 128,
  "b": 114,
  "rgb": "rgb(216, 128, 114)",
  "hex": "#d88072"
}, {
  "value": "rgb(213.0,117.0,105.0)",
  "brand": "Natasha Denona",
  "colour": "15NB Claudia",
  "r": 213,
  "g": 117,
  "b": 105,
  "rgb": "rgb(213, 117, 105)",
  "hex": "#d57569"
}, {
  "value": "rgb(221.0,117.0,128.0)",
  "brand": "Natasha Denona",
  "colour": "21P Sava",
  "r": 221,
  "g": 117,
  "b": 128,
  "rgb": "rgb(221, 117, 128)",
  "hex": "#dd7580"
}, {
  "value": "rgb(210.0,95.0,98.0)",
  "brand": "Natasha Denona",
  "colour": "22P Jennifer",
  "r": 210,
  "g": 95,
  "b": 98,
  "rgb": "rgb(210, 95, 98)",
  "hex": "#d25f62"
}, {
  "value": "rgb(194.0,99.0,103.0)",
  "brand": "Natasha Denona",
  "colour": "23P Avery",
  "r": 194,
  "g": 99,
  "b": 103,
  "rgb": "rgb(194, 99, 103)",
  "hex": "#c26367"
}, {
  "value": "rgb(208.0,133.0,128.0)",
  "brand": "Natasha Denona",
  "colour": "31NP Beatrice",
  "r": 208,
  "g": 133,
  "b": 128,
  "rgb": "rgb(208, 133, 128)",
  "hex": "#d08580"
}, {
  "value": "rgb(238.0,159.0,155.0)",
  "brand": "Natasha Denona",
  "colour": "32NP Susana",
  "r": 238,
  "g": 159,
  "b": 155,
  "rgb": "rgb(238, 159, 155)",
  "hex": "#ee9f9b"
}, {
  "value": "rgb(224.0,157.0,149.0)",
  "brand": "Natasha Denona",
  "colour": "33NP Noa",
  "r": 224,
  "g": 157,
  "b": 149,
  "rgb": "rgb(224, 157, 149)",
  "hex": "#e09d95"
}, {
  "value": "rgb(174.0,110.0,100.0)",
  "brand": "Natasha Denona",
  "colour": "34NP Yana",
  "r": 174,
  "g": 110,
  "b": 100,
  "rgb": "rgb(174, 110, 100)",
  "hex": "#ae6e64"
}, {
  "value": "rgb(177.00856793145655,106.1055079559363,87.46976744186047)",
  "brand": "Natasha Denona",
  "colour": "30NP Maria",
  "r": 177,
  "g": 106,
  "b": 87,
  "rgb": "rgb(177, 106, 87)",
  "hex": "#b16a57"
}, {
  "value": "rgb(172.73898511090854,111.89972652689161,90.4667274384684)",
  "brand": "Natasha Denona",
  "colour": "10NB Andrea",
  "r": 172,
  "g": 111,
  "b": 90,
  "rgb": "rgb(172, 111, 90)",
  "hex": "#ac6f5a"
}, {
  "value": "rgb(176.9425254813137,13.80775764439447,64.04388448471133)",
  "brand": "PATRICK TA",
  "colour": "She's Hard To Get ",
  "r": 176,
  "g": 13,
  "b": 64,
  "rgb": "rgb(176, 13, 64)",
  "hex": "#b00d40"
}, {
  "value": "rgb(93.15342377260995,24.56330749354023,24.051356589147126)",
  "brand": "PATRICK TA",
  "colour": "She Must Be New ",
  "r": 93,
  "g": 24,
  "b": 24,
  "rgb": "rgb(93, 24, 24)",
  "hex": "#5d1818"
}, {
  "value": "rgb(176.0644444444445,84.82861111111107,66.90583333333329)",
  "brand": "PATRICK TA",
  "colour": "Oh She's Single ",
  "r": 176,
  "g": 84,
  "b": 66,
  "rgb": "rgb(176, 84, 66)",
  "hex": "#b05442"
}, {
  "value": "rgb(207.4218266253872,40.53018575851354,30.831656346749035)",
  "brand": "PATRICK TA",
  "colour": "She's Not From Here ",
  "r": 207,
  "g": 40,
  "b": 30,
  "rgb": "rgb(207, 40, 30)",
  "hex": "#cf281e"
}, {
  "value": "rgb(174.99158066268336,6.876969038566023,26.91553503530687)",
  "brand": "PATRICK TA",
  "colour": "That's Why She's Late ",
  "r": 174,
  "g": 6,
  "b": 26,
  "rgb": "rgb(174, 6, 26)",
  "hex": "#ae061a"
}, {
  "value": "rgb(226.0,90.0,114.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Celestial Divinity Amour (Coral Rose)NEW",
  "r": 226,
  "g": 90,
  "b": 114,
  "rgb": "rgb(226, 90, 114)",
  "hex": "#e25a72"
}, {
  "value": "rgb(243.0,93.0,141.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Celestial Divinity Divine Romance (Rose Dusk)NEW",
  "r": 243,
  "g": 93,
  "b": 141,
  "rgb": "rgb(243, 93, 141)",
  "hex": "#f35d8d"
}, {
  "value": "rgb(136.0,53.0,53.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Celestial Divinity Pav?? Omi (Mid-tone Rose)NEW",
  "r": 136,
  "g": 53,
  "b": 53,
  "rgb": "rgb(136, 53, 53)",
  "hex": "#883535"
}, {
  "value": "rgb(122.0,10.0,21.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Celestial Divinity Pav?? Elson (Blue Red)NEW",
  "r": 122,
  "g": 10,
  "b": 21,
  "rgb": "rgb(122, 10, 21)",
  "hex": "#7a0a15"
}, {
  "value": "rgb(173.0,98.0,92.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Peep Show (Soft Pink Peach Nude)",
  "r": 173,
  "g": 98,
  "b": 92,
  "rgb": "rgb(173, 98, 92)",
  "hex": "#ad625c"
}, {
  "value": "rgb(147.0,78.0,71.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Christy (Divine Beige Peach)",
  "r": 147,
  "g": 78,
  "b": 71,
  "rgb": "rgb(147, 78, 71)",
  "hex": "#934e47"
}, {
  "value": "rgb(129.0,53.0,54.0)",
  "brand": "Pat McGrath Labs",
  "colour": "1995 (Warm Light Nude)",
  "r": 129,
  "g": 53,
  "b": 54,
  "rgb": "rgb(129, 53, 54)",
  "hex": "#813536"
}, {
  "value": "rgb(146.0,101.0,124.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Modern Woman (Mid-tone Lilac)",
  "r": 146,
  "g": 101,
  "b": 124,
  "rgb": "rgb(146, 101, 124)",
  "hex": "#92657c"
}, {
  "value": "rgb(162.0,96.0,98.0)",
  "brand": "Pat McGrath Labs",
  "colour": "FemmeBot (Mid-tone Neutral Pink)",
  "r": 162,
  "g": 96,
  "b": 98,
  "rgb": "rgb(162, 96, 98)",
  "hex": "#a26062"
}, {
  "value": "rgb(169.0,91.0,105.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Soft Core (Cool Pink)",
  "r": 169,
  "g": 91,
  "b": 105,
  "rgb": "rgb(169, 91, 105)",
  "hex": "#a95b69"
}, {
  "value": "rgb(136.0,53.0,53.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Omi (Mid-tone Rose)",
  "r": 136,
  "g": 53,
  "b": 53,
  "rgb": "rgb(136, 53, 53)",
  "hex": "#883535"
}, {
  "value": "rgb(151.0,82.0,77.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Venus in Furs (Rose)",
  "r": 151,
  "g": 82,
  "b": 77,
  "rgb": "rgb(151, 82, 77)",
  "hex": "#97524d"
}, {
  "value": "rgb(179.0,83.0,84.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Beautiful Stranger (Coral Rose)",
  "r": 179,
  "g": 83,
  "b": 84,
  "rgb": "rgb(179, 83, 84)",
  "hex": "#b35354"
}, {
  "value": "rgb(148.0,59.0,63.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Flesh 5 (Mahogany Rose)",
  "r": 148,
  "g": 59,
  "b": 63,
  "rgb": "rgb(148, 59, 63)",
  "hex": "#943b3f"
}, {
  "value": "rgb(99.0,31.0,32.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Flesh 3 (Deep Rose)",
  "r": 99,
  "g": 31,
  "b": 32,
  "rgb": "rgb(99, 31, 32)",
  "hex": "#631f20"
}, {
  "value": "rgb(141.0,90.0,149.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Faux Pas (Mid-tone Lavender)",
  "r": 141,
  "g": 90,
  "b": 149,
  "rgb": "rgb(141, 90, 149)",
  "hex": "#8d5a95"
}, {
  "value": "rgb(202.0,94.0,118.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Polaroid Pink (Mid-tone Blue Pink)",
  "r": 202,
  "g": 94,
  "b": 118,
  "rgb": "rgb(202, 94, 118)",
  "hex": "#ca5e76"
}, {
  "value": "rgb(196.0,76.0,77.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Candy Flip (Mid-tone Coral)",
  "r": 196,
  "g": 76,
  "b": 77,
  "rgb": "rgb(196, 76, 77)",
  "hex": "#c44c4d"
}, {
  "value": "rgb(122.0,45.0,39.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Fever Dream (Peach Sienna)",
  "r": 122,
  "g": 45,
  "b": 39,
  "rgb": "rgb(122, 45, 39)",
  "hex": "#7a2d27"
}, {
  "value": "rgb(182.0,20.0,30.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Obsessed! (Bright Orange Red)",
  "r": 182,
  "g": 20,
  "b": 30,
  "rgb": "rgb(182, 20, 30)",
  "hex": "#b6141e"
}, {
  "value": "rgb(156.0,32.0,34.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Elson 2 (The Perfect Red)",
  "r": 156,
  "g": 32,
  "b": 34,
  "rgb": "rgb(156, 32, 34)",
  "hex": "#9c2022"
}, {
  "value": "rgb(165.0,24.0,70.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Full Panic (Bright Fuchsia)",
  "r": 165,
  "g": 24,
  "b": 70,
  "rgb": "rgb(165, 24, 70)",
  "hex": "#a51846"
}, {
  "value": "rgb(155.0,50.0,90.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Extravaganza (Rich Magenta)",
  "r": 155,
  "g": 50,
  "b": 90,
  "rgb": "rgb(155, 50, 90)",
  "hex": "#9b325a"
}, {
  "value": "rgb(126.0,23.0,27.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Forbidden Love (Ultimate Classic Red)",
  "r": 126,
  "g": 23,
  "b": 27,
  "rgb": "rgb(126, 23, 27)",
  "hex": "#7e171b"
}, {
  "value": "rgb(122.0,10.0,21.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Elson (Blue Red)",
  "r": 122,
  "g": 10,
  "b": 21,
  "rgb": "rgb(122, 10, 21)",
  "hex": "#7a0a15"
}, {
  "value": "rgb(95.0,5.0,15.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Vendetta (Dark Red)",
  "r": 95,
  "g": 5,
  "b": 15,
  "rgb": "rgb(95, 5, 15)",
  "hex": "#5f050f"
}, {
  "value": "rgb(103.0,16.0,63.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Antidote (Magenta Violet)",
  "r": 103,
  "g": 16,
  "b": 63,
  "rgb": "rgb(103, 16, 63)",
  "hex": "#67103f"
}, {
  "value": "rgb(136.0,53.0,73.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Executive Realness (Mulberry Pink)",
  "r": 136,
  "g": 53,
  "b": 73,
  "rgb": "rgb(136, 53, 73)",
  "hex": "#883549"
}, {
  "value": "rgb(136.0,44.0,45.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Guinevere (Blooded Crimson)",
  "r": 136,
  "g": 44,
  "b": 45,
  "rgb": "rgb(136, 44, 45)",
  "hex": "#882c2d"
}, {
  "value": "rgb(108.0,36.0,58.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Deep Orchid (Plum Berry)",
  "r": 108,
  "g": 36,
  "b": 58,
  "rgb": "rgb(108, 36, 58)",
  "hex": "#6c243a"
}, {
  "value": "rgb(79.0,11.0,32.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Full Blooded (Deep Wine)",
  "r": 79,
  "g": 11,
  "b": 32,
  "rgb": "rgb(79, 11, 32)",
  "hex": "#4f0b20"
}, {
  "value": "rgb(74.0,17.0,14.0)",
  "brand": "Pat McGrath Labs",
  "colour": "McMenamy (Deep Burgundy)",
  "r": 74,
  "g": 17,
  "b": 14,
  "rgb": "rgb(74, 17, 14)",
  "hex": "#4a110e"
}, {
  "value": "rgb(24.0,12.0,12.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Deep Void (Deep Blackened Purple)",
  "r": 24,
  "g": 12,
  "b": 12,
  "rgb": "rgb(24, 12, 12)",
  "hex": "#180c0c"
}, {
  "value": "rgb(108.0,57.0,45.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Divine Brown (Dark Chocolate)",
  "r": 108,
  "g": 57,
  "b": 45,
  "rgb": "rgb(108, 57, 45)",
  "hex": "#6c392d"
}, {
  "value": "rgb(185.0,101.0,101.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Divine Rose: Christy",
  "r": 185,
  "g": 101,
  "b": 101,
  "rgb": "rgb(185, 101, 101)",
  "hex": "#b96565"
}, {
  "value": "rgb(185.0,99.0,112.0)",
  "brand": "Pat McGrath Labs",
  "colour": "Divine Rose: Soft Core",
  "r": 185,
  "g": 99,
  "b": 112,
  "rgb": "rgb(185, 99, 112)",
  "hex": "#b96370"
}, {
  "value": "rgb(163.74305555555551,3.4056372549019915,37.64379084967318)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Rouge Louboutin ",
  "r": 163,
  "g": 3,
  "b": 37,
  "rgb": "rgb(163, 3, 37)",
  "hex": "#a30325"
}, {
  "value": "rgb(226.68659064097523,32.010617381045975,84.47935509241061)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Bengali ",
  "r": 226,
  "g": 32,
  "b": 84,
  "rgb": "rgb(226, 32, 84)",
  "hex": "#e22054"
}, {
  "value": "rgb(173.34584450402147,65.0088088854845,78.14362313289924)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Rococotte ",
  "r": 173,
  "g": 65,
  "b": 78,
  "rgb": "rgb(173, 65, 78)",
  "hex": "#ad414e"
}, {
  "value": "rgb(177.32043576258454,32.71825694966182,96.33508640120213)",
  "brand": "Christian Louboutin Beauty",
  "colour": "So Tango ",
  "r": 177,
  "g": 32,
  "b": 96,
  "rgb": "rgb(177, 32, 96)",
  "hex": "#b12060"
}, {
  "value": "rgb(150.1400153022189,28.759372609028347,69.71346595256308)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Very Prive ",
  "r": 150,
  "g": 28,
  "b": 69,
  "rgb": "rgb(150, 28, 69)",
  "hex": "#961c45"
}, {
  "value": "rgb(232.3877381938692,34.52071251035618,64.0969345484673)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Altressa ",
  "r": 232,
  "g": 34,
  "b": 64,
  "rgb": "rgb(232, 34, 64)",
  "hex": "#e82240"
}, {
  "value": "rgb(232.5640232108316,26.070019342359725,54.905996131527985)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Diva ",
  "r": 232,
  "g": 26,
  "b": 54,
  "rgb": "rgb(232, 26, 54)",
  "hex": "#e81a36"
}, {
  "value": "rgb(247.35497342444947,57.11047835990886,79.23272589217927)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Miss Loubi ",
  "r": 247,
  "g": 57,
  "b": 79,
  "rgb": "rgb(247, 57, 79)",
  "hex": "#f7394f"
}, {
  "value": "rgb(185.64627752534085,98.66305487591748,84.61936385879068)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Just Nothing ",
  "r": 185,
  "g": 98,
  "b": 84,
  "rgb": "rgb(185, 98, 84)",
  "hex": "#b96254"
}, {
  "value": "rgb(222.22526636225277,26.89992389649921,79.55022831050233)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Goyetta ",
  "r": 222,
  "g": 26,
  "b": 79,
  "rgb": "rgb(222, 26, 79)",
  "hex": "#de1a4f"
}, {
  "value": "rgb(204.79391756702677,32.1468587434975,70.35814325730297)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Justine ",
  "r": 204,
  "g": 32,
  "b": 70,
  "rgb": "rgb(204, 32, 70)",
  "hex": "#cc2046"
}, {
  "value": "rgb(243.59149111937225,66.96571664601399,54.3771168938456)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Triluna ",
  "r": 243,
  "g": 66,
  "b": 54,
  "rgb": "rgb(243, 66, 54)",
  "hex": "#f34236"
}, {
  "value": "rgb(189.16623150565712,20.872497824194898,65.30374238468228)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Jackie ",
  "r": 189,
  "g": 20,
  "b": 65,
  "rgb": "rgb(189, 20, 65)",
  "hex": "#bd1441"
}, {
  "value": "rgb(204.63693764798734,8.860299921073366,42.86937647987379)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Dramadouce ",
  "r": 204,
  "g": 8,
  "b": 42,
  "rgb": "rgb(204, 8, 42)",
  "hex": "#cc082a"
}, {
  "value": "rgb(194.20096352374395,105.54370268410182,95.87095664143156)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Very Gil ",
  "r": 194,
  "g": 105,
  "b": 95,
  "rgb": "rgb(194, 105, 95)",
  "hex": "#c2695f"
}, {
  "value": "rgb(177.4982194885076,20.72936225315636,39.30171576561995)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Rouge Louboutin ",
  "r": 177,
  "g": 20,
  "b": 39,
  "rgb": "rgb(177, 20, 39)",
  "hex": "#b11427"
}, {
  "value": "rgb(224.76541207008435,64.37832576249194,116.29591174561978)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Bengali ",
  "r": 224,
  "g": 64,
  "b": 116,
  "rgb": "rgb(224, 64, 116)",
  "hex": "#e04074"
}, {
  "value": "rgb(245.9770469338815,111.4813292223364,125.87255909558073)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Bikini ",
  "r": 245,
  "g": 111,
  "b": 125,
  "rgb": "rgb(245, 111, 125)",
  "hex": "#f56f7d"
}, {
  "value": "rgb(213.7460484720758,90.09308043554614,92.09448542325252)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Belly Bloom ",
  "r": 213,
  "g": 90,
  "b": 92,
  "rgb": "rgb(213, 90, 92)",
  "hex": "#d55a5c"
}, {
  "value": "rgb(176.03169398907104,68.03169398907104,84.03169398907104)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Let Me Tell You ",
  "r": 176,
  "g": 68,
  "b": 84,
  "rgb": "rgb(176, 68, 84)",
  "hex": "#b04454"
}, {
  "value": "rgb(176.03169398907104,68.03169398907104,84.03169398907104)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Impera ",
  "r": 176,
  "g": 68,
  "b": 84,
  "rgb": "rgb(176, 68, 84)",
  "hex": "#b04454"
}, {
  "value": "rgb(138.10549330418152,40.09920743372508,53.09920743372506)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Very Priv?? ",
  "r": 138,
  "g": 40,
  "b": 53,
  "rgb": "rgb(138, 40, 53)",
  "hex": "#8a2835"
}, {
  "value": "rgb(206.19766566265056,40.002635542168676,65.72138554216866)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Torerra ",
  "r": 206,
  "g": 40,
  "b": 65,
  "rgb": "rgb(206, 40, 65)",
  "hex": "#ce2841"
}, {
  "value": "rgb(241.7575239398084,69.74042407660733,57.74897400820786)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Youpiyou ",
  "r": 241,
  "g": 69,
  "b": 57,
  "rgb": "rgb(241, 69, 57)",
  "hex": "#f14539"
}, {
  "value": "rgb(232.79141970081847,73.01665255433247,85.26305390911656)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Miss Loubi ",
  "r": 232,
  "g": 73,
  "b": 85,
  "rgb": "rgb(232, 73, 85)",
  "hex": "#e84955"
}, {
  "value": "rgb(160.2531986531986,81.46060606060607,73.84444444444442)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Me Nude ",
  "r": 160,
  "g": 81,
  "b": 73,
  "rgb": "rgb(160, 81, 73)",
  "hex": "#a05149"
}, {
  "value": "rgb(210.60152380952377,24.27466666666665,25.27771428571429)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Catchy One ",
  "r": 210,
  "g": 24,
  "b": 25,
  "rgb": "rgb(210, 24, 25)",
  "hex": "#d21819"
}, {
  "value": "rgb(213.47158774373256,22.627298050139252,38.60807799442895)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Lusita ",
  "r": 213,
  "g": 22,
  "b": 38,
  "rgb": "rgb(213, 22, 38)",
  "hex": "#d51626"
}, {
  "value": "rgb(221.0393775801842,51.04287075261988,32.54334709431568)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Theophila ",
  "r": 221,
  "g": 51,
  "b": 32,
  "rgb": "rgb(221, 51, 32)",
  "hex": "#dd3320"
}, {
  "value": "rgb(206.11533196440791,106.8904859685147,91.41752224503762)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Very Gil ",
  "r": 206,
  "g": 106,
  "b": 91,
  "rgb": "rgb(206, 106, 91)",
  "hex": "#ce6a5b"
}, {
  "value": "rgb(196.65306122448968,17.376530612244547,44.188095238095364)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Rouge Louboutin ",
  "r": 196,
  "g": 17,
  "b": 44,
  "rgb": "rgb(196, 17, 44)",
  "hex": "#c4112c"
}, {
  "value": "rgb(214.1645457235869,48.56643977508156,109.25303344184663)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Loubiminette ",
  "r": 214,
  "g": 48,
  "b": 109,
  "rgb": "rgb(214, 48, 109)",
  "hex": "#d6306d"
}, {
  "value": "rgb(233.4933291964009,55.76016134036573,84.23363326093653)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Tres Bea ",
  "r": 233,
  "g": 55,
  "b": 84,
  "rgb": "rgb(233, 55, 84)",
  "hex": "#e93754"
}, {
  "value": "rgb(195.68551236749116,86.00196309383585,99.82606988614054)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Rose Du Desert ",
  "r": 195,
  "g": 86,
  "b": 99,
  "rgb": "rgb(195, 86, 99)",
  "hex": "#c35663"
}, {
  "value": "rgb(194.24472315692896,53.09299479963224,80.45549097583427)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Petal Rose ",
  "r": 194,
  "g": 53,
  "b": 80,
  "rgb": "rgb(194, 53, 80)",
  "hex": "#c23550"
}, {
  "value": "rgb(204.34188322645966,27.527843401957536,101.27134660816739)",
  "brand": "Christian Louboutin Beauty",
  "colour": "You You",
  "r": 204,
  "g": 27,
  "b": 101,
  "rgb": "rgb(204, 27, 101)",
  "hex": "#cc1b65"
}, {
  "value": "rgb(221.10288513881346,20.574305933585574,49.76592270005479)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Mexicatchy ",
  "r": 221,
  "g": 20,
  "b": 49,
  "rgb": "rgb(221, 20, 49)",
  "hex": "#dd1431"
}, {
  "value": "rgb(240.56826976229974,33.66390270867812,41.49143173023699)",
  "brand": "Christian Louboutin Beauty",
  "colour": "Escatin ",
  "r": 240,
  "g": 33,
  "b": 41,
  "rgb": "rgb(240, 33, 41)",
  "hex": "#f02129"
}, {
  "value": "rgb(177.0,86.0,83.0)",
  "brand": "Clarins",
  "colour": "705V soft berry",
  "r": 177,
  "g": 86,
  "b": 83,
  "rgb": "rgb(177, 86, 83)",
  "hex": "#b15653"
}, {
  "value": "rgb(216.0,83.0,64.0)",
  "brand": "Clarins",
  "colour": "711V papaya",
  "r": 216,
  "g": 83,
  "b": 64,
  "rgb": "rgb(216, 83, 64)",
  "hex": "#d85340"
}, {
  "value": "rgb(191.0,11.0,85.0)",
  "brand": "Clarins",
  "colour": "713V hot pink",
  "r": 191,
  "g": 11,
  "b": 85,
  "rgb": "rgb(191, 11, 85)",
  "hex": "#bf0b55"
}, {
  "value": "rgb(182.0,49.0,92.0)",
  "brand": "Clarins",
  "colour": "723V raspberry",
  "r": 182,
  "g": 49,
  "b": 92,
  "rgb": "rgb(182, 49, 92)",
  "hex": "#b6315c"
}, {
  "value": "rgb(178.0,82.0,93.0)",
  "brand": "Clarins",
  "colour": "731V rose berry",
  "r": 178,
  "g": 82,
  "b": 93,
  "rgb": "rgb(178, 82, 93)",
  "hex": "#b2525d"
}, {
  "value": "rgb(171.0,75.0,76.0)",
  "brand": "Clarins",
  "colour": "732V grenadine",
  "r": 171,
  "g": 75,
  "b": 76,
  "rgb": "rgb(171, 75, 76)",
  "hex": "#ab4b4c"
}, {
  "value": "rgb(140.0,45.0,41.0)",
  "brand": "Clarins",
  "colour": "737V spicy cinnamon",
  "r": 140,
  "g": 45,
  "b": 41,
  "rgb": "rgb(140, 45, 41)",
  "hex": "#8c2d29"
}, {
  "value": "rgb(107.0,46.0,53.0)",
  "brand": "Clarins",
  "colour": "738V royal plum",
  "r": 107,
  "g": 46,
  "b": 53,
  "rgb": "rgb(107, 46, 53)",
  "hex": "#6b2e35"
}, {
  "value": "rgb(189.0,20.0,25.0)",
  "brand": "Clarins",
  "colour": "741V red orange",
  "r": 189,
  "g": 20,
  "b": 25,
  "rgb": "rgb(189, 20, 25)",
  "hex": "#bd1419"
}, {
  "value": "rgb(188.0,16.0,42.0)",
  "brand": "Clarins",
  "colour": "742V joli rouge",
  "r": 188,
  "g": 16,
  "b": 42,
  "rgb": "rgb(188, 16, 42)",
  "hex": "#bc102a"
}, {
  "value": "rgb(111.0,64.0,72.0)",
  "brand": "Clarins",
  "colour": "744V plum",
  "r": 111,
  "g": 64,
  "b": 72,
  "rgb": "rgb(111, 64, 72)",
  "hex": "#6f4048"
}, {
  "value": "rgb(168.0,79.0,85.0)",
  "brand": "Clarins",
  "colour": "752V rosewood",
  "r": 168,
  "g": 79,
  "b": 85,
  "rgb": "rgb(168, 79, 85)",
  "hex": "#a84f55"
}, {
  "value": "rgb(179.0,65.0,90.0)",
  "brand": "Clarins",
  "colour": "755V litchi",
  "r": 179,
  "g": 65,
  "b": 90,
  "rgb": "rgb(179, 65, 90)",
  "hex": "#b3415a"
}, {
  "value": "rgb(180.0,51.0,71.0)",
  "brand": "Clarins",
  "colour": "756V guava",
  "r": 180,
  "g": 51,
  "b": 71,
  "rgb": "rgb(180, 51, 71)",
  "hex": "#b43347"
}, {
  "value": "rgb(171.0,87.0,76.0)",
  "brand": "Clarins",
  "colour": "757V nude brick",
  "r": 171,
  "g": 87,
  "b": 76,
  "rgb": "rgb(171, 87, 76)",
  "hex": "#ab574c"
}, {
  "value": "rgb(195.0,121.0,112.0)",
  "brand": "Clarins",
  "colour": "758V sandy pink",
  "r": 195,
  "g": 121,
  "b": 112,
  "rgb": "rgb(195, 121, 112)",
  "hex": "#c37970"
}, {
  "value": "rgb(178.0,96.0,102.0)",
  "brand": "Clarins",
  "colour": "759V woodberry",
  "r": 178,
  "g": 96,
  "b": 102,
  "rgb": "rgb(178, 96, 102)",
  "hex": "#b26066"
}, {
  "value": "rgb(186.0,24.0,63.0)",
  "brand": "Clarins",
  "colour": "760V pink cranberry",
  "r": 186,
  "g": 24,
  "b": 63,
  "rgb": "rgb(186, 24, 63)",
  "hex": "#ba183f"
}, {
  "value": "rgb(216.0,12.0,24.0)",
  "brand": "Clarins",
  "colour": "761V spicy chili",
  "r": 216,
  "g": 12,
  "b": 24,
  "rgb": "rgb(216, 12, 24)",
  "hex": "#d80c18"
}, {
  "value": "rgb(194.0,54.0,83.0)",
  "brand": "Clarins",
  "colour": "762V pop pink",
  "r": 194,
  "g": 54,
  "b": 83,
  "rgb": "rgb(194, 54, 83)",
  "hex": "#c23653"
}, {
  "value": "rgb(182.0,108.0,109.0)",
  "brand": "Clarins",
  "colour": "705 soft berry",
  "r": 182,
  "g": 108,
  "b": 109,
  "rgb": "rgb(182, 108, 109)",
  "hex": "#b66c6d"
}, {
  "value": "rgb(208.0,106.0,92.0)",
  "brand": "Clarins",
  "colour": "711 papaya",
  "r": 208,
  "g": 106,
  "b": 92,
  "rgb": "rgb(208, 106, 92)",
  "hex": "#d06a5c"
}, {
  "value": "rgb(203.0,65.0,124.0)",
  "brand": "Clarins",
  "colour": "713 hot pink",
  "r": 203,
  "g": 65,
  "b": 124,
  "rgb": "rgb(203, 65, 124)",
  "hex": "#cb417c"
}, {
  "value": "rgb(202.0,100.0,124.0)",
  "brand": "Clarins",
  "colour": "723 raspberry",
  "r": 202,
  "g": 100,
  "b": 124,
  "rgb": "rgb(202, 100, 124)",
  "hex": "#ca647c"
}, {
  "value": "rgb(189.0,130.0,132.0)",
  "brand": "Clarins",
  "colour": "731 rose berry",
  "r": 189,
  "g": 130,
  "b": 132,
  "rgb": "rgb(189, 130, 132)",
  "hex": "#bd8284"
}, {
  "value": "rgb(179.0,97.0,99.0)",
  "brand": "Clarins",
  "colour": "732 grenadine",
  "r": 179,
  "g": 97,
  "b": 99,
  "rgb": "rgb(179, 97, 99)",
  "hex": "#b36163"
}, {
  "value": "rgb(173.0,69.0,58.0)",
  "brand": "Clarins",
  "colour": "737 spicy cinnamon",
  "r": 173,
  "g": 69,
  "b": 58,
  "rgb": "rgb(173, 69, 58)",
  "hex": "#ad453a"
}, {
  "value": "rgb(99.0,35.0,35.0)",
  "brand": "Clarins",
  "colour": "738 royal plum",
  "r": 99,
  "g": 35,
  "b": 35,
  "rgb": "rgb(99, 35, 35)",
  "hex": "#632323"
}, {
  "value": "rgb(210.0,46.0,47.0)",
  "brand": "Clarins",
  "colour": "741 red orange",
  "r": 210,
  "g": 46,
  "b": 47,
  "rgb": "rgb(210, 46, 47)",
  "hex": "#d22e2f"
}, {
  "value": "rgb(180.0,23.0,52.0)",
  "brand": "Clarins",
  "colour": "742 joli rouge",
  "r": 180,
  "g": 23,
  "b": 52,
  "rgb": "rgb(180, 23, 52)",
  "hex": "#b41734"
}, {
  "value": "rgb(136.0,65.0,79.0)",
  "brand": "Clarins",
  "colour": "744 plum",
  "r": 136,
  "g": 65,
  "b": 79,
  "rgb": "rgb(136, 65, 79)",
  "hex": "#88414f"
}, {
  "value": "rgb(194.0,113.0,120.0)",
  "brand": "Clarins",
  "colour": "752 rosewood",
  "r": 194,
  "g": 113,
  "b": 120,
  "rgb": "rgb(194, 113, 120)",
  "hex": "#c27178"
}, {
  "value": "rgb(143.0,5.0,28.0)",
  "brand": "Clarins",
  "colour": "754 deep red",
  "r": 143,
  "g": 5,
  "b": 28,
  "rgb": "rgb(143, 5, 28)",
  "hex": "#8f051c"
}, {
  "value": "rgb(163.0,72.0,79.0)",
  "brand": "Clarins",
  "colour": "755 litchi",
  "r": 163,
  "g": 72,
  "b": 79,
  "rgb": "rgb(163, 72, 79)",
  "hex": "#a3484f"
}, {
  "value": "rgb(178.0,62.0,65.0)",
  "brand": "Clarins",
  "colour": "756 guava",
  "r": 178,
  "g": 62,
  "b": 65,
  "rgb": "rgb(178, 62, 65)",
  "hex": "#b23e41"
}, {
  "value": "rgb(163.0,79.0,79.0)",
  "brand": "Clarins",
  "colour": "757 nude brick",
  "r": 163,
  "g": 79,
  "b": 79,
  "rgb": "rgb(163, 79, 79)",
  "hex": "#a34f4f"
}, {
  "value": "rgb(173.0,85.0,71.0)",
  "brand": "Clarins",
  "colour": "758 sandy pink",
  "r": 173,
  "g": 85,
  "b": 71,
  "rgb": "rgb(173, 85, 71)",
  "hex": "#ad5547"
}, {
  "value": "rgb(181.0,82.0,87.0)",
  "brand": "Clarins",
  "colour": "759 woodberry",
  "r": 181,
  "g": 82,
  "b": 87,
  "rgb": "rgb(181, 82, 87)",
  "hex": "#b55257"
}, {
  "value": "rgb(193.0,19.0,44.0)",
  "brand": "Clarins",
  "colour": "760 pink cranberry",
  "r": 193,
  "g": 19,
  "b": 44,
  "rgb": "rgb(193, 19, 44)",
  "hex": "#c1132c"
}, {
  "value": "rgb(216.0,34.0,10.0)",
  "brand": "Clarins",
  "colour": "761 spicy chili",
  "r": 216,
  "g": 34,
  "b": 10,
  "rgb": "rgb(216, 34, 10)",
  "hex": "#d8220a"
}, {
  "value": "rgb(185.0,31.0,67.0)",
  "brand": "Clarins",
  "colour": "762 pop pink",
  "r": 185,
  "g": 31,
  "b": 67,
  "rgb": "rgb(185, 31, 67)",
  "hex": "#b91f43"
}, {
  "value": "rgb(176.0,82.0,80.0)",
  "brand": "Clarins",
  "colour": "705S soft berry",
  "r": 176,
  "g": 82,
  "b": 80,
  "rgb": "rgb(176, 82, 80)",
  "hex": "#b05250"
}, {
  "value": "rgb(222.0,82.0,65.0)",
  "brand": "Clarins",
  "colour": "711S papaya",
  "r": 222,
  "g": 82,
  "b": 65,
  "rgb": "rgb(222, 82, 65)",
  "hex": "#de5241"
}, {
  "value": "rgb(186.0,25.0,56.0)",
  "brand": "Clarins",
  "colour": "713S hot pink",
  "r": 186,
  "g": 25,
  "b": 56,
  "rgb": "rgb(186, 25, 56)",
  "hex": "#ba1938"
}, {
  "value": "rgb(190.0,65.0,95.0)",
  "brand": "Clarins",
  "colour": "723S raspberry",
  "r": 190,
  "g": 65,
  "b": 95,
  "rgb": "rgb(190, 65, 95)",
  "hex": "#be415f"
}, {
  "value": "rgb(176.0,82.0,74.0)",
  "brand": "Clarins",
  "colour": "731S rose berry",
  "r": 176,
  "g": 82,
  "b": 74,
  "rgb": "rgb(176, 82, 74)",
  "hex": "#b0524a"
}, {
  "value": "rgb(143.0,56.0,64.0)",
  "brand": "Clarins",
  "colour": "732S grenadine",
  "r": 143,
  "g": 56,
  "b": 64,
  "rgb": "rgb(143, 56, 64)",
  "hex": "#8f3840"
}, {
  "value": "rgb(165.0,65.0,65.0)",
  "brand": "Clarins",
  "colour": "737S spicy cinnamon",
  "r": 165,
  "g": 65,
  "b": 65,
  "rgb": "rgb(165, 65, 65)",
  "hex": "#a54141"
}, {
  "value": "rgb(87.0,46.0,50.0)",
  "brand": "Clarins",
  "colour": "738S royal plum",
  "r": 87,
  "g": 46,
  "b": 50,
  "rgb": "rgb(87, 46, 50)",
  "hex": "#572e32"
}, {
  "value": "rgb(207.0,7.0,20.0)",
  "brand": "Clarins",
  "colour": "741S red orange",
  "r": 207,
  "g": 7,
  "b": 20,
  "rgb": "rgb(207, 7, 20)",
  "hex": "#cf0714"
}, {
  "value": "rgb(132.28227330038084,66.16782396270145,61.05959009658092)",
  "brand": "Axiology",
  "colour": "NUDE PLUM",
  "r": 132,
  "g": 66,
  "b": 61,
  "rgb": "rgb(132, 66, 61)",
  "hex": "#84423d"
}, {
  "value": "rgb(121.54766567314346,31.665161748419777,9.3844238454097)",
  "brand": "Axiology",
  "colour": "STRAWBERRY",
  "r": 121,
  "g": 31,
  "b": 9,
  "rgb": "rgb(121, 31, 9)",
  "hex": "#791f09"
}, {
  "value": "rgb(241.70170968755298,241.0850912285384,240.44323975141404)",
  "brand": "Axiology",
  "colour": "RASPBERRY",
  "r": 241,
  "g": 241,
  "b": 240,
  "rgb": "rgb(241, 241, 240)",
  "hex": "#f1f1f0"
}, {
  "value": "rgb(151.45863969879028,70.89676242267487,61.126145183742445)",
  "brand": "Axiology",
  "colour": "ROS??",
  "r": 151,
  "g": 70,
  "b": 61,
  "rgb": "rgb(151, 70, 61)",
  "hex": "#97463d"
}, {
  "value": "rgb(167.29064325986513,47.64450557396617,52.97005673508305)",
  "brand": "Axiology",
  "colour": "WATERMELON",
  "r": 167,
  "g": 47,
  "b": 52,
  "rgb": "rgb(167, 47, 52)",
  "hex": "#a72f34"
}, {
  "value": "rgb(85.07566376989709,25.303315856094144,12.525681725164262)",
  "brand": "Axiology",
  "colour": "CHERRY",
  "r": 85,
  "g": 25,
  "b": 12,
  "rgb": "rgb(85, 25, 12)",
  "hex": "#55190c"
}, {
  "value": "rgb(170.30124351115768,62.24227451486456,55.200839533731155)",
  "brand": "Axiology",
  "colour": "PEACH",
  "r": 170,
  "g": 62,
  "b": 55,
  "rgb": "rgb(170, 62, 55)",
  "hex": "#aa3e37"
}, {
  "value": "rgb(241.78063422991127,240.9917787079878,239.35751046889845)",
  "brand": "Axiology",
  "colour": "SORBET",
  "r": 241,
  "g": 240,
  "b": 239,
  "rgb": "rgb(241, 240, 239)",
  "hex": "#f1f0ef"
}, {
  "value": "rgb(178.40417921717935,88.68624605427689,65.95901511154862)",
  "brand": "Axiology",
  "colour": "CLEMENTINE",
  "r": 178,
  "g": 88,
  "b": 65,
  "rgb": "rgb(178, 88, 65)",
  "hex": "#b25841"
}, {
  "value": "rgb(156.77578981856234,25.398953231563596,34.19407463624803)",
  "brand": "Axiology",
  "colour": "BONAFIDE",
  "r": 156,
  "g": 25,
  "b": 34,
  "rgb": "rgb(156, 25, 34)",
  "hex": "#9c1922"
}, {
  "value": "rgb(119.60712836609223,7.00750991246656,17.767235426683236)",
  "brand": "Axiology",
  "colour": "CLARITY",
  "r": 119,
  "g": 7,
  "b": 17,
  "rgb": "rgb(119, 7, 17)",
  "hex": "#770711"
}, {
  "value": "rgb(82.03700692359224,7.045769252425345,5.1883681803933115)",
  "brand": "Axiology",
  "colour": "ELUSIVE",
  "r": 82,
  "g": 7,
  "b": 5,
  "rgb": "rgb(82, 7, 5)",
  "hex": "#520705"
}, {
  "value": "rgb(105.32746761433938,13.431262180478285,45.61878940741707)",
  "brand": "Axiology",
  "colour": "ENAMOR",
  "r": 105,
  "g": 13,
  "b": 45,
  "rgb": "rgb(105, 13, 45)",
  "hex": "#690d2d"
}, {
  "value": "rgb(137.34321429816802,37.150839737179865,46.13621822746033)",
  "brand": "Axiology",
  "colour": "JOY",
  "r": 137,
  "g": 37,
  "b": 46,
  "rgb": "rgb(137, 37, 46)",
  "hex": "#89252e"
}, {
  "value": "rgb(239.86912961814983,238.25149834497796,239.31436174959293)",
  "brand": "Axiology",
  "colour": "NOBLE",
  "r": 239,
  "g": 238,
  "b": 239,
  "rgb": "rgb(239, 238, 239)",
  "hex": "#efeeef"
}, {
  "value": "rgb(189.12678093332468,109.76737459220206,106.5112559291631)",
  "brand": "Axiology",
  "colour": "PHILOSOPHY",
  "r": 189,
  "g": 109,
  "b": 106,
  "rgb": "rgb(189, 109, 106)",
  "hex": "#bd6d6a"
}, {
  "value": "rgb(99.95667186624908,6.754639108197225,7.795732995619417)",
  "brand": "Axiology",
  "colour": "TRUE",
  "r": 99,
  "g": 6,
  "b": 7,
  "rgb": "rgb(99, 6, 7)",
  "hex": "#630607"
}, {
  "value": "rgb(117.87363640005901,24.278780451894917,5.242297907487227)",
  "brand": "Axiology",
  "colour": "WORTH",
  "r": 117,
  "g": 24,
  "b": 5,
  "rgb": "rgb(117, 24, 5)",
  "hex": "#751805"
}, {
  "value": "rgb(134.8597944789272,7.5889579858583005,37.88062149260362)",
  "brand": "Axiology",
  "colour": "ATTITUDE",
  "r": 134,
  "g": 7,
  "b": 37,
  "rgb": "rgb(134, 7, 37)",
  "hex": "#860725"
}, {
  "value": "rgb(80.1493300602942,7.101005762106496,11.342061300418735)",
  "brand": "Axiology",
  "colour": "BRAVE",
  "r": 80,
  "g": 7,
  "b": 11,
  "rgb": "rgb(80, 7, 11)",
  "hex": "#50070b"
}, {
  "value": "rgb(240.850090697099,239.61350090698886,240.52855878014532)",
  "brand": "Axiology",
  "colour": "DEVOTION",
  "r": 240,
  "g": 239,
  "b": 240,
  "rgb": "rgb(240, 239, 240)",
  "hex": "#f0eff0"
}, {
  "value": "rgb(135.99660613066737,76.2782852535569,58.085641044070925)",
  "brand": "Axiology",
  "colour": "DIMENSION",
  "r": 135,
  "g": 76,
  "b": 58,
  "rgb": "rgb(135, 76, 58)",
  "hex": "#874c3a"
}, {
  "value": "rgb(95.24596711438298,12.927091654309407,18.75300586129856)",
  "brand": "Axiology",
  "colour": "FUNDAMENTAL",
  "r": 95,
  "g": 12,
  "b": 18,
  "rgb": "rgb(95, 12, 18)",
  "hex": "#5f0c12"
}, {
  "value": "rgb(181.02256216404533,85.63391609088794,96.33616836970197)",
  "brand": "Axiology",
  "colour": "IDENTITY",
  "r": 181,
  "g": 85,
  "b": 96,
  "rgb": "rgb(181, 85, 96)",
  "hex": "#b55560"
}, {
  "value": "rgb(147.35164817292187,75.4111402167523,57.46610100542111)",
  "brand": "Axiology",
  "colour": "INSTINCT",
  "r": 147,
  "g": 75,
  "b": 57,
  "rgb": "rgb(147, 75, 57)",
  "hex": "#934b39"
}, {
  "value": "rgb(147.29493878262235,59.15262114163218,58.6348249696829)",
  "brand": "Axiology",
  "colour": "LOYALTY",
  "r": 147,
  "g": 59,
  "b": 58,
  "rgb": "rgb(147, 59, 58)",
  "hex": "#933b3a"
}, {
  "value": "rgb(105.08937480003563,33.33230105969153,72.92033923836689)",
  "brand": "Axiology",
  "colour": "REFLECTION",
  "r": 105,
  "g": 33,
  "b": 72,
  "rgb": "rgb(105, 33, 72)",
  "hex": "#692148"
}, {
  "value": "rgb(129.21296347563538,73.74191166973979,70.84795969220957)",
  "brand": "Axiology",
  "colour": "SERENE",
  "r": 129,
  "g": 73,
  "b": 70,
  "rgb": "rgb(129, 73, 70)",
  "hex": "#814946"
}, {
  "value": "rgb(128.88372530131204,110.6729906255993,141.6711697953287)",
  "brand": "Axiology",
  "colour": "ENLIGHTEN",
  "r": 128,
  "g": 110,
  "b": 141,
  "rgb": "rgb(128, 110, 141)",
  "hex": "#806e8d"
}, {
  "value": "rgb(66.62634023713059,32.67897699321679,24.313569047372496)",
  "brand": "Axiology",
  "colour": "ETHOS",
  "r": 66,
  "g": 32,
  "b": 24,
  "rgb": "rgb(66, 32, 24)",
  "hex": "#422018"
}, {
  "value": "rgb(241.9009445441372,239.43844237105287,239.50173263008688)",
  "brand": "Axiology",
  "colour": "FORTUNE",
  "r": 241,
  "g": 239,
  "b": 239,
  "rgb": "rgb(241, 239, 239)",
  "hex": "#f1efef"
}, {
  "value": "rgb(98.5614469505457,13.72840071069507,20.733182609098378)",
  "brand": "Axiology",
  "colour": "INFINITE",
  "r": 98,
  "g": 13,
  "b": 20,
  "rgb": "rgb(98, 13, 20)",
  "hex": "#620d14"
}, {
  "value": "rgb(195.4019075690376,136.26747480619545,123.79214969952633)",
  "brand": "Axiology",
  "colour": "INTRINSIC",
  "r": 195,
  "g": 136,
  "b": 123,
  "rgb": "rgb(195, 136, 123)",
  "hex": "#c3887b"
}, {
  "value": "rgb(90.1787535549312,68.14951701481553,86.90791409240069)",
  "brand": "Axiology",
  "colour": "PHENOMENON",
  "r": 90,
  "g": 68,
  "b": 86,
  "rgb": "rgb(90, 68, 86)",
  "hex": "#5a4456"
}, {
  "value": "rgb(141.51374285881954,17.82776299389363,11.947792024011136)",
  "brand": "Axiology",
  "colour": "RADIANCE",
  "r": 141,
  "g": 17,
  "b": 11,
  "rgb": "rgb(141, 17, 11)",
  "hex": "#8d110b"
}, {
  "value": "rgb(137.25746365046942,73.3024669716829,53.165722562620495)",
  "brand": "Axiology",
  "colour": "SPIRIT",
  "r": 137,
  "g": 73,
  "b": 53,
  "rgb": "rgb(137, 73, 53)",
  "hex": "#894935"
}, {
  "value": "rgb(124.38973422749294,4.710726910246393,5.908397945873318)",
  "brand": "Axiology",
  "colour": "STRENGTH",
  "r": 124,
  "g": 4,
  "b": 5,
  "rgb": "rgb(124, 4, 5)",
  "hex": "#7c0405"
}, {
  "value": "rgb(152.33580895477664,71.28090750184523,71.55265859552594)",
  "brand": "Axiology",
  "colour": "THE GOODNESS",
  "r": 152,
  "g": 71,
  "b": 71,
  "rgb": "rgb(152, 71, 71)",
  "hex": "#984747"
}, {
  "value": "rgb(241.48493478382665,241.57434008796707,240.4690897364073)",
  "brand": "Axiology",
  "colour": "CARAMEL",
  "r": 241,
  "g": 241,
  "b": 240,
  "rgb": "rgb(241, 241, 240)",
  "hex": "#f1f1f0"
}, {
  "value": "rgb(173.58136566324384,122.802820036435,97.65114252191643)",
  "brand": "Axiology",
  "colour": "CHAMPAGNE",
  "r": 173,
  "g": 122,
  "b": 97,
  "rgb": "rgb(173, 122, 97)",
  "hex": "#ad7a61"
}, {
  "value": "rgb(240.59021460753848,241.22362353492346,240.61177388687804)",
  "brand": "Axiology",
  "colour": "CHESTNUT",
  "r": 240,
  "g": 241,
  "b": 240,
  "rgb": "rgb(240, 241, 240)",
  "hex": "#f0f1f0"
}, {
  "value": "rgb(244.25749857929148,244.3624095794645,242.45302221321828)",
  "brand": "Axiology",
  "colour": "FROSTING",
  "r": 244,
  "g": 244,
  "b": 242,
  "rgb": "rgb(244, 244, 242)",
  "hex": "#f4f4f2"
}, {
  "value": "rgb(190.0,98.0,101.0)",
  "brand": "Elizabeth Arden",
  "colour": "Breathless",
  "r": 190,
  "g": 98,
  "b": 101,
  "rgb": "rgb(190, 98, 101)",
  "hex": "#be6265"
}, {
  "value": "rgb(191.0,60.0,65.0)",
  "brand": "Elizabeth Arden",
  "colour": "Mango Cream",
  "r": 191,
  "g": 60,
  "b": 65,
  "rgb": "rgb(191, 60, 65)",
  "hex": "#bf3c41"
}, {
  "value": "rgb(202.0,27.0,24.0)",
  "brand": "Elizabeth Arden",
  "colour": "Marigold",
  "r": 202,
  "g": 27,
  "b": 24,
  "rgb": "rgb(202, 27, 24)",
  "hex": "#ca1b18"
}, {
  "value": "rgb(228.0,19.0,48.0)",
  "brand": "Elizabeth Arden",
  "colour": "Neoclassical Coral",
  "r": 228,
  "g": 19,
  "b": 48,
  "rgb": "rgb(228, 19, 48)",
  "hex": "#e41330"
}, {
  "value": "rgb(231.0,57.0,110.0)",
  "brand": "Elizabeth Arden",
  "colour": "Pink Vibrations",
  "r": 231,
  "g": 57,
  "b": 110,
  "rgb": "rgb(231, 57, 110)",
  "hex": "#e7396e"
}, {
  "value": "rgb(175.0,44.0,34.0)",
  "brand": "Elizabeth Arden",
  "colour": "Power Red",
  "r": 175,
  "g": 44,
  "b": 34,
  "rgb": "rgb(175, 44, 34)",
  "hex": "#af2c22"
}, {
  "value": "rgb(214.0,91.0,112.0)",
  "brand": "Elizabeth Arden",
  "colour": "Wild Berry",
  "r": 214,
  "g": 91,
  "b": 112,
  "rgb": "rgb(214, 91, 112)",
  "hex": "#d65b70"
}, {
  "value": "rgb(186.0,79.0,95.0)",
  "brand": "Elizabeth Arden",
  "colour": "Rosy Shimmer",
  "r": 186,
  "g": 79,
  "b": 95,
  "rgb": "rgb(186, 79, 95)",
  "hex": "#ba4f5f"
}, {
  "value": "rgb(136.0,74.0,61.0)",
  "brand": "Elizabeth Arden",
  "colour": "Cocoa Bronze",
  "r": 136,
  "g": 74,
  "b": 61,
  "rgb": "rgb(136, 74, 61)",
  "hex": "#884a3d"
}, {
  "value": "rgb(187.0,98.0,84.0)",
  "brand": "Elizabeth Arden",
  "colour": "Desert Rose",
  "r": 187,
  "g": 98,
  "b": 84,
  "rgb": "rgb(187, 98, 84)",
  "hex": "#bb6254"
}, {
  "value": "rgb(154.0,19.0,36.0)",
  "brand": "Elizabeth Arden",
  "colour": "Berry",
  "r": 154,
  "g": 19,
  "b": 36,
  "rgb": "rgb(154, 19, 36)",
  "hex": "#9a1324"
}, {
  "value": "rgb(208.0,26.0,67.0)",
  "brand": "Elizabeth Arden",
  "colour": "Blush",
  "r": 208,
  "g": 26,
  "b": 67,
  "rgb": "rgb(208, 26, 67)",
  "hex": "#d01a43"
}, {
  "value": "rgb(139.0,58.0,29.0)",
  "brand": "Elizabeth Arden",
  "colour": "Honey",
  "r": 139,
  "g": 58,
  "b": 29,
  "rgb": "rgb(139, 58, 29)",
  "hex": "#8b3a1d"
}, {
  "value": "rgb(98.0,21.0,11.0)",
  "brand": "Elizabeth Arden",
  "colour": "Plum",
  "r": 98,
  "g": 21,
  "b": 11,
  "rgb": "rgb(98, 21, 11)",
  "hex": "#62150b"
}, {
  "value": "rgb(156.0,73.0,101.0)",
  "brand": "Elizabeth Arden",
  "colour": "Blushing Pink",
  "r": 156,
  "g": 73,
  "b": 101,
  "rgb": "rgb(156, 73, 101)",
  "hex": "#9c4965"
}, {
  "value": "rgb(164.0,35.0,65.0)",
  "brand": "Elizabeth Arden",
  "colour": "Cherry Bomb",
  "r": 164,
  "g": 35,
  "b": 65,
  "rgb": "rgb(164, 35, 65)",
  "hex": "#a42341"
}, {
  "value": "rgb(140.0,39.0,95.0)",
  "brand": "Elizabeth Arden",
  "colour": "Violetini",
  "r": 140,
  "g": 39,
  "b": 95,
  "rgb": "rgb(140, 39, 95)",
  "hex": "#8c275f"
}, {
  "value": "rgb(167.0,88.0,91.0)",
  "brand": "Elizabeth Arden",
  "colour": "Rose Aurora",
  "r": 167,
  "g": 88,
  "b": 91,
  "rgb": "rgb(167, 88, 91)",
  "hex": "#a7585b"
}, {
  "value": "rgb(206.0,103.0,88.0)",
  "brand": "Elizabeth Arden",
  "colour": "Ginger",
  "r": 206,
  "g": 103,
  "b": 88,
  "rgb": "rgb(206, 103, 88)",
  "hex": "#ce6758"
}, {
  "value": "rgb(159.0,37.0,34.0)",
  "brand": "Elizabeth Arden",
  "colour": "Rouge",
  "r": 159,
  "g": 37,
  "b": 34,
  "rgb": "rgb(159, 37, 34)",
  "hex": "#9f2522"
}, {
  "value": "rgb(180.0,88.0,99.0)",
  "brand": "Elizabeth Arden",
  "colour": "Rose",
  "r": 180,
  "g": 88,
  "b": 99,
  "rgb": "rgb(180, 88, 99)",
  "hex": "#b45863"
}, {
  "value": "rgb(187.0,102.0,95.0)",
  "brand": "Elizabeth Arden",
  "colour": "Honeysuckle",
  "r": 187,
  "g": 102,
  "b": 95,
  "rgb": "rgb(187, 102, 95)",
  "hex": "#bb665f"
}, {
  "value": "rgb(244.0,127.0,118.0)",
  "brand": "Elizabeth Arden",
  "colour": "Coral Vibrations",
  "r": 244,
  "g": 127,
  "b": 118,
  "rgb": "rgb(244, 127, 118)",
  "hex": "#f47f76"
}, {
  "value": "rgb(209.0,100.0,121.0)",
  "brand": "Elizabeth Arden",
  "colour": "Petal",
  "r": 209,
  "g": 100,
  "b": 121,
  "rgb": "rgb(209, 100, 121)",
  "hex": "#d16479"
}, {
  "value": "rgb(222.0,73.0,77.0)",
  "brand": "Elizabeth Arden",
  "colour": "Melon",
  "r": 222,
  "g": 73,
  "b": 77,
  "rgb": "rgb(222, 73, 77)",
  "hex": "#de494d"
}, {
  "value": "rgb(203.0,103.0,105.0)",
  "brand": "Elizabeth Arden",
  "colour": "Coral",
  "r": 203,
  "g": 103,
  "b": 105,
  "rgb": "rgb(203, 103, 105)",
  "hex": "#cb6769"
}, {
  "value": "rgb(185.0,104.0,111.0)",
  "brand": "Elizabeth Arden",
  "colour": "Amethyst",
  "r": 185,
  "g": 104,
  "b": 111,
  "rgb": "rgb(185, 104, 111)",
  "hex": "#b9686f"
}, {
  "value": "rgb(199.0,130.0,114.0)",
  "brand": "Elizabeth Arden",
  "colour": "Sugar",
  "r": 199,
  "g": 130,
  "b": 114,
  "rgb": "rgb(199, 130, 114)",
  "hex": "#c78272"
}, {
  "value": "rgb(169.0,82.0,98.0)",
  "brand": "Elizabeth Arden",
  "colour": "Tulip",
  "r": 169,
  "g": 82,
  "b": 98,
  "rgb": "rgb(169, 82, 98)",
  "hex": "#a95262"
}, {
  "value": "rgb(134.0,42.0,45.0)",
  "brand": "Elizabeth Arden",
  "colour": "Bold Red",
  "r": 134,
  "g": 42,
  "b": 45,
  "rgb": "rgb(134, 42, 45)",
  "hex": "#862a2d"
}, {
  "value": "rgb(235.0,72.0,75.0)",
  "brand": "Elizabeth Arden",
  "colour": "Coral Crush",
  "r": 235,
  "g": 72,
  "b": 75,
  "rgb": "rgb(235, 72, 75)",
  "hex": "#eb484b"
}, {
  "value": "rgb(183.0,106.0,88.0)",
  "brand": "Elizabeth Arden",
  "colour": "Nude",
  "r": 183,
  "g": 106,
  "b": 88,
  "rgb": "rgb(183, 106, 88)",
  "hex": "#b76a58"
}, {
  "value": "rgb(167.0,66.0,72.0)",
  "brand": "Elizabeth Arden",
  "colour": "Rose Petal",
  "r": 167,
  "g": 66,
  "b": 72,
  "rgb": "rgb(167, 66, 72)",
  "hex": "#a74248"
}, {
  "value": "rgb(165.0,99.0,83.0)",
  "brand": "Elizabeth Arden",
  "colour": "Nude Fizz 08",
  "r": 165,
  "g": 99,
  "b": 83,
  "rgb": "rgb(165, 99, 83)",
  "hex": "#a56353"
}, {
  "value": "rgb(214.0,118.0,94.0)",
  "brand": "Elizabeth Arden",
  "colour": "Natural Blush 09",
  "r": 214,
  "g": 118,
  "b": 94,
  "rgb": "rgb(214, 118, 94)",
  "hex": "#d6765e"
}, {
  "value": "rgb(236.0,72.0,79.0)",
  "brand": "Elizabeth Arden",
  "colour": "Just Peachy 14",
  "r": 236,
  "g": 72,
  "b": 79,
  "rgb": "rgb(236, 72, 79)",
  "hex": "#ec484f"
}, {
  "value": "rgb(206.0,154.0,130.0)",
  "brand": "VIEVE",
  "colour": "Comin' in Haute",
  "r": 206,
  "g": 154,
  "b": 130,
  "rgb": "rgb(206, 154, 130)",
  "hex": "#ce9a82"
}, {
  "value": "rgb(189.0,123.0,99.0)",
  "brand": "VIEVE",
  "colour": "Ninetease",
  "r": 189,
  "g": 123,
  "b": 99,
  "rgb": "rgb(189, 123, 99)",
  "hex": "#bd7b63"
}, {
  "value": "rgb(179.0,93.0,60.0)",
  "brand": "VIEVE",
  "colour": "Power Suit",
  "r": 179,
  "g": 93,
  "b": 60,
  "rgb": "rgb(179, 93, 60)",
  "hex": "#b35d3c"
}, {
  "value": "rgb(240.0,168.0,130.0)",
  "brand": "VIEVE",
  "colour": "Treasure",
  "r": 240,
  "g": 168,
  "b": 130,
  "rgb": "rgb(240, 168, 130)",
  "hex": "#f0a882"
}, {
  "value": "rgb(226.0,151.0,122.0)",
  "brand": "VIEVE",
  "colour": "Vieve",
  "r": 226,
  "g": 151,
  "b": 122,
  "rgb": "rgb(226, 151, 122)",
  "hex": "#e2977a"
}];
exports.LIPSTICKS = LIPSTICKS;

var sortByLightness = function sortByLightness(prev, next) {
  var pCount = 255 - prev.r + (255 - prev.g) * 0.8 + (255 - prev.b) * 0.6;
  var nCount = 255 - next.r + (255 - next.g) * 0.8 + (255 - next.b) * 0.6;
  return pCount < nCount ? -1 : 1;
};

window.LIPSTICKS = LIPSTICKS;
var SORTED_LIPSTICKS = LIPSTICKS.sort(sortByLightness);
exports.SORTED_LIPSTICKS = SORTED_LIPSTICKS;
},{}],"services/brands.service.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brandsMap = exports.brands = void 0;

var _lipsticks = require("./lipsticks.service");

var brandsMap = new Map();
exports.brandsMap = brandsMap;
var brands = [];
exports.brands = brands;

_lipsticks.LIPSTICKS.forEach(function (lipstick) {
  var listOfTheBrand = brandsMap.get(lipstick.brand) || [];
  listOfTheBrand.push(lipstick);
  brandsMap.set(lipstick.brand, listOfTheBrand);
});

exports.brands = brands = Array.from(brandsMap.keys());
},{"./lipsticks.service":"services/lipsticks.service.js"}],"pages/brands.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandList = void 0;

var _preact = require("preact");

var _preactRouter = require("preact-router");

var _hooks = require("preact/hooks");

var _brandsService = require("../services/brands.service.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BrandList = function BrandList() {
  var _useState = (0, _hooks.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedBrand = _useState2[0],
      setSelectedBrand = _useState2[1];

  var toggleSelectedBrand = function toggleSelectedBrand(brandName) {
    if (selectedBrand === brandName) {
      setSelectedBrand(null);
    } else {
      setSelectedBrand(brandName);
    }
  };

  var goto = function goto(lipstick) {
    (0, _preactRouter.route)('/lipstick/' + encodeURIComponent(lipstick.brand) + '/' + encodeURIComponent(lipstick.colour));
  };

  var item = function item(brand, index) {
    var colorsOfTheBrand = _brandsService.brandsMap.get(brand) || [];
    return (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)("div", {
      className: "item",
      key: index
    }, (0, _preact.h)("div", {
      className: "item-label",
      onClick: function onClick() {
        return toggleSelectedBrand(brand);
      }
    }, brand), brand === selectedBrand && colorsOfTheBrand.length > 0 && (0, _preact.h)("div", {
      className: "matrix item-extra"
    }, colorsOfTheBrand.map(function (lipstick, lipstickIndex) {
      return (0, _preact.h)("div", {
        className: "item",
        key: lipstickIndex,
        style: {
          backgroundColor: lipstick.hex
        },
        onClick: function onClick() {
          return goto(lipstick);
        }
      });
    }), (0, _preact.h)("div", {
      className: "angle-arrow"
    }))));
  };

  return (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)("div", {
    className: "list",
    id: "list"
  }, _brandsService.brands.map(item)), (0, _preact.h)("header", {
    className: "header"
  }, (0, _preact.h)("span", null, "\u54C1\u724C"), (0, _preact.h)("small", {
    className: "red"
  }, "\u91D1\u9497\u659C\u6234\u5B9C\u6625\u80DC\uFF0C\u4E07\u5C81\u5343\u79CB\u7ED5\u9B13\u7EA2")));
};

exports.BrandList = BrandList;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact-router":"../node_modules/preact-router/dist/preact-router.es.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","../services/brands.service.js":"services/brands.service.js"}],"pages/colors.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorsMatrix = void 0;

var _preact = require("preact");

var _preactRouter = require("preact-router");

var _hooks = require("preact/hooks");

var _lipsticksService = require("../services/lipsticks.service.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ColorsMatrix = function ColorsMatrix() {
  var _useState = (0, _hooks.useState)(_lipsticksService.SORTED_LIPSTICKS),
      _useState2 = _slicedToArray(_useState, 2),
      lipsticks = _useState2[0],
      setLipsticks = _useState2[1];

  var timeout = undefined;

  var item = function item(lipstick, index) {
    return (0, _preact.h)("div", {
      className: "item",
      key: index,
      "data-hex": lipstick.hex,
      "data-brand": lipstick.brand,
      "data-color-name": lipstick.colour,
      style: {
        backgroundColor: lipstick.hex
      },
      onClick: function onClick() {
        return goto(lipstick);
      }
    });
  };

  var keywordChange = function keywordChange(event) {
    if (event.target && event.target.value) {
      var keyword = event.target.value;
      keyword = keyword.toLocaleLowerCase();
      window.clearTimeout(timeout);

      if (keyword.length === 0) {
        setLipsticks(_lipsticksService.SORTED_LIPSTICKS);
      } else {
        timeout = window.setTimeout(function () {
          var newLipsticks = _lipsticksService.SORTED_LIPSTICKS.filter(function (LIPSTICK) {
            var hex = LIPSTICK.hex.toLocaleLowerCase();
            var brand = LIPSTICK.brand.toLocaleLowerCase();
            var colour = LIPSTICK.colour.toLocaleLowerCase();

            if (hex.includes(keyword) || brand.includes(keyword) || colour.includes(keyword)) {
              return true;
            }

            return false;
          });

          setLipsticks(newLipsticks);
        }, 200);
      }
    } else {
      window.clearTimeout(timeout);
      setLipsticks(_lipsticksService.SORTED_LIPSTICKS);
    }
  };

  var goto = function goto(lipstick) {
    (0, _preactRouter.route)('/lipstick/' + encodeURIComponent(lipstick.brand) + '/' + encodeURIComponent(lipstick.colour));
  };

  return (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)("div", {
    className: "matrix",
    id: "matrix"
  }, lipsticks.map(item)), (0, _preact.h)("header", {
    className: "header"
  }, (0, _preact.h)("span", null, "\u989C\u8272"), (0, _preact.h)("small", {
    className: "red"
  }, "\u56DE\u5934\u4E00\u7B11\u767E\u5A9A\u751F\uFF0C\u516D\u5BAB\u7C89\u9EDB\u65E0\u989C\u8272")), (0, _preact.h)("div", {
    className: "color-search"
  }, (0, _preact.h)("input", {
    type: "text",
    className: "input",
    placeholder: "\u989C\u8272\u4EE3\u7801\uFF0C\u8272\u53F7\u540D\u79F0\uFF0C\u54C1\u724C...",
    onKeyUp: keywordChange
  })));
};

exports.ColorsMatrix = ColorsMatrix;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact-router":"../node_modules/preact-router/dist/preact-router.es.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","../services/lipsticks.service.js":"services/lipsticks.service.js"}],"pages/home.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = void 0;

var _preact = require("preact");

var _preactRouter = require("preact-router");

var Home = function Home() {
  var gotoBrands = function gotoBrands() {
    (0, _preactRouter.route)('/brands');
  };

  var gotoColors = function gotoColors() {
    (0, _preactRouter.route)('/colors');
  };

  return (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)("div", {
    className: "home"
  }, (0, _preact.h)("div", null, (0, _preact.h)("p", null, (0, _preact.h)("span", null, "\u563F\u670B\u53CB")), (0, _preact.h)("p", null, (0, _preact.h)("span", null, "\u4F60\u662F\u5426\u9047\u5230\u4E86\u4F20\u8BF4\u4E2D\u7684"), " ", (0, _preact.h)("br", null), (0, _preact.h)("span", {
    className: "red"
  }, "\u53E3\u7EA2"), (0, _preact.h)("span", null, "\u96BE\u9898\uFF1F")), (0, _preact.h)("p", null, (0, _preact.h)("span", null, "\u4EC0\u4E48"), (0, _preact.h)("span", {
    style: {
      color: "rgb(202, 37, 35)"
    }
  }, " Prada"), ",", (0, _preact.h)("span", {
    style: {
      color: "rgb(223, 109, 111)"
    }
  }, " Ryan Lo"), ",", (0, _preact.h)("span", {
    style: {
      color: "rgb(227, 33, 59)"
    }
  }, " Agnona"), "... ", (0, _preact.h)("br", null), (0, _preact.h)("span", null, "\u4ECB\u4E0D\u90FD\u662F"), (0, _preact.h)("span", {
    style: {
      color: "rgb(255, 0, 0)",
      fontWeight: 700
    }
  }, "\u5927\u7EA2\u8272"), (0, _preact.h)("span", null, "\u5417\uFF1F")), (0, _preact.h)("p", null, (0, _preact.h)("span", null, "\u522B\u62C5\u5FC3\u6211\u7684\u670B\u53CB"), " ", (0, _preact.h)("br", null), (0, _preact.h)("span", null, "\u8BD5\u8BD5\u8FD9\u4E2A\u5C0F\u73A9\u610F")), (0, _preact.h)("button", {
    onClick: gotoBrands
  }, (0, _preact.h)("span", {
    className: "small"
  }, "BY"), (0, _preact.h)("span", null, "\u54C1\u724C")), (0, _preact.h)("span", null, "\xA0\xA0"), (0, _preact.h)("button", {
    onClick: gotoColors
  }, (0, _preact.h)("span", {
    className: "small"
  }, "BY"), (0, _preact.h)("span", null, "\u989C\u8272")))));
};

exports.Home = Home;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact-router":"../node_modules/preact-router/dist/preact-router.es.js"}],"pages/lipstick.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lipstick = void 0;

var _preact = require("preact");

var _hooks = require("preact/hooks");

var _preactRouter = require("preact-router");

var _brands = require("../services/brands.service");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function copyToClipboard(containerid) {
  var elem = document.getElementById(containerid);
  elem.select();
  elem.setSelectionRange(0, 1000);
  document.execCommand('copy');
  document.getSelection().removeAllRanges();
  return true;
}

var Lipstick = function Lipstick(props) {
  var lipsticks = _brands.brandsMap.get(props.brand) || [];
  var lipstick = lipsticks.find(function (item) {
    return item.colour.toLowerCase() === props.colour.toLowerCase();
  });

  var _useState = (0, _hooks.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      copied = _useState2[0],
      setCopied = _useState2[1];

  var copy = function copy() {
    var result = copyToClipboard('lipstickinfo');

    if (result) {
      var ele = document.getElementById('lipstickinfo');

      if (ele) {
        ele.classList.add('copied');
        setCopied(Math.random());
      } else {
        setCopied(-1 * Math.random());
      }
    } else {
      setCopied(-1 * Math.random());
    }
  };

  return (0, _preact.h)(_preact.Fragment, null, (0, _preact.h)("div", {
    className: "lipstick"
  }, (0, _preact.h)("div", {
    className: "lipstick-effect"
  }, (0, _preact.h)("div", {
    className: "lipstick-color",
    style: {
      backgroundColor: lipstick.hex
    }
  }), (0, _preact.h)("div", {
    className: "lipstick-cover"
  })), (0, _preact.h)("div", {
    className: "lipstick-info"
  }, (0, _preact.h)("div", {
    className: "row"
  }, (0, _preact.h)("textarea", {
    className: "keyword",
    id: "lipstickinfo",
    autoCorrect: "false"
  }, props.brand, ", ", props.colour), (0, _preact.h)("small", {
    className: "extra-small"
  }, (0, _preact.h)("span", null, "\xA0\xA0"), (0, _preact.h)("span", null, "\u8BF7\u8C28\u614E\u4F7F\u7528\u526A\u8D34\u677F\uFF0C\u4EE5\u9632\u6B62\u7B2C\u4E09\u65B9\u8F6F\u4EF6\u8BFB\u53D6\u60A8\u7684\u526A\u8D34\u677F"))), (0, _preact.h)("div", {
    className: "row"
  }, (0, _preact.h)("div", {
    className: "center"
  }, (0, _preact.h)("button", {
    class: "lipstick-button",
    onClick: copy
  }, (0, _preact.h)("span", null, "\u70B9\u51FB\u590D\u5236\u54C1\u724C\u548C\u989C\u8272")))), (0, _preact.h)("div", {
    className: "row"
  }, (0, _preact.h)("div", {
    className: "center"
  }, copied !== 0 ? copied > 0 && (0, _preact.h)("span", {
    class: "grey"
  }, "\u5DF2\u590D\u5236\u81F3\u60A8\u7684\u526A\u8D34\u677F") : copied < 0 && (0, _preact.h)("span", {
    className: "red"
  }, "\u672A\u80FD\u590D\u5236\uFF0C\u8BF7\u624B\u52A8\u9009\u62E9\u8303\u56F4\u5E76\u590D\u5236"))))), (0, _preact.h)("header", {
    className: "header lipstick-header"
  }, (0, _preact.h)("span", null, props.brand), (0, _preact.h)("small", {
    style: {
      color: lipstick.hex
    }
  }, props.colour)));
};

exports.Lipstick = Lipstick;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","preact-router":"../node_modules/preact-router/dist/preact-router.es.js","../services/brands.service":"services/brands.service.js"}],"pages/redirect.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Redirect = void 0;

var _preact = require("preact");

var _preactRouter = require("preact-router");

var Redirect = function Redirect(props) {
  if (props.to) {
    (0, _preactRouter.route)(props.to);
  }

  return null;
};

exports.Redirect = Redirect;
},{"preact":"../node_modules/preact/dist/preact.module.js","preact-router":"../node_modules/preact-router/dist/preact-router.es.js"}],"pages/index.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _brands = require("./brands");

Object.keys(_brands).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _brands[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _brands[key];
    }
  });
});

var _colors = require("./colors");

Object.keys(_colors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _colors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _colors[key];
    }
  });
});

var _home = require("./home");

Object.keys(_home).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _home[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _home[key];
    }
  });
});

var _lipstick = require("./lipstick");

Object.keys(_lipstick).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _lipstick[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _lipstick[key];
    }
  });
});

var _redirect = require("./redirect");

Object.keys(_redirect).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _redirect[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _redirect[key];
    }
  });
});
},{"./brands":"pages/brands.jsx","./colors":"pages/colors.jsx","./home":"pages/home.jsx","./lipstick":"pages/lipstick.jsx","./redirect":"pages/redirect.jsx"}],"../node_modules/resolve-pathname/esm/resolve-pathname.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
} // About 1.5x faster than the two-arg version of Array#splice()


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
} // This implementation is based heavily on node's url.parse


function resolvePathname(to, from) {
  if (from === undefined) from = '';
  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';
  var hasTrailingSlash;

  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;

  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');
  if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
  var result = fromParts.join('/');
  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
  return result;
}

var _default = resolvePathname;
exports.default = _default;
},{}],"../node_modules/value-equal/esm/value-equal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true; // Otherwise, if either of them == null they are not equal.

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);
    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);
    return Object.keys(Object.assign({}, a, b)).every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

var _default = valueEqual;
exports.default = _default;
},{}],"../node_modules/tiny-warning/dist/tiny-warning.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var isProduction = "development" === 'production';

function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

var _default = warning;
exports.default = _default;
},{}],"../node_modules/tiny-invariant/dist/tiny-invariant.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';

function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  }

  throw new Error(prefix + ": " + (message || ''));
}

var _default = invariant;
exports.default = _default;
},{}],"../node_modules/history/cjs/history.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var resolvePathname = _interopDefault(require('resolve-pathname'));
var valueEqual = _interopDefault(require('value-equal'));
var warning = _interopDefault(require('tiny-warning'));
var invariant = _interopDefault(require('tiny-invariant'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
    warning(prompt == null, 'A history supports only one prompt at a time');
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? invariant(false, 'Browser history needs a DOM') : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? invariant(false, 'Hash history needs a DOM') : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
    warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
    warning(state === undefined, 'Hash history cannot push state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
        setState();
      }
    });
  }

  function replace(path, state) {
    warning(state === undefined, 'Hash history cannot replace state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
    warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}

exports.createBrowserHistory = createBrowserHistory;
exports.createHashHistory = createHashHistory;
exports.createMemoryHistory = createMemoryHistory;
exports.createLocation = createLocation;
exports.locationsAreEqual = locationsAreEqual;
exports.parsePath = parsePath;
exports.createPath = createPath;

},{"resolve-pathname":"../node_modules/resolve-pathname/esm/resolve-pathname.js","value-equal":"../node_modules/value-equal/esm/value-equal.js","tiny-warning":"../node_modules/tiny-warning/dist/tiny-warning.esm.js","tiny-invariant":"../node_modules/tiny-invariant/dist/tiny-invariant.esm.js"}],"../node_modules/history/index.js":[function(require,module,exports) {
'use strict';

if ("development" === 'production') {
  module.exports = require('./cjs/history.min.js');
} else {
  module.exports = require('./cjs/history.js');
}
},{"./cjs/history.js":"../node_modules/history/cjs/history.js"}],"index.jsx":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _preactRouter = require("preact-router");

var _pages = require("./pages");

var _history = require("history");

var Main = function Main() {
  return (0, _preact.h)("div", {
    className: "container"
  }, (0, _preact.h)(_preactRouter.Router, {
    history: (0, _history.createHashHistory)()
  }, (0, _preact.h)(_pages.BrandList, {
    path: "/brands"
  }), (0, _preact.h)(_pages.ColorsMatrix, {
    path: "/colors"
  }), (0, _preact.h)(_pages.Lipstick, {
    path: "/lipstick/:brand/:colour"
  }), (0, _preact.h)(_pages.Home, {
    path: "/home"
  }), (0, _preact.h)(_pages.Redirect, {
    path: "/",
    to: "/home"
  })));
};

(0, _preact.render)((0, _preact.h)(Main, null), document.body);
},{"preact":"../node_modules/preact/dist/preact.module.js","preact-router":"../node_modules/preact-router/dist/preact-router.es.js","./pages":"pages/index.jsx","history":"../node_modules/history/index.js"}],"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55120" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.jsx"], null)