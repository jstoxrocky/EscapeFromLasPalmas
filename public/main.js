// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4D17I":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "0f3e064a0a1dc674";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jZgE0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _collision = require("./Collision");
var _collisionDefault = parcelHelpers.interopDefault(_collision);
var _controller = require("./Controller");
var _controllerDefault = parcelHelpers.interopDefault(_controller);
var _imageLoaders = require("./imageLoaders");
var _imageLoadersDefault = parcelHelpers.interopDefault(_imageLoaders);
var _nightImageLoaders = require("./nightImageLoaders");
var _nightImageLoadersDefault = parcelHelpers.interopDefault(_nightImageLoaders);
var _dayImageLoaders = require("./dayImageLoaders");
var _dayImageLoadersDefault = parcelHelpers.interopDefault(_dayImageLoaders);
var _montageImageLoaders = require("./montageImageLoaders");
var _montageImageLoadersDefault = parcelHelpers.interopDefault(_montageImageLoaders);
var _carImageLoaders = require("./carImageLoaders");
var _carImageLoadersDefault = parcelHelpers.interopDefault(_carImageLoaders);
var _fonts = require("./fonts");
var _fontsDefault = parcelHelpers.interopDefault(_fonts);
var _screen = require("./api/Screen");
var _screenDefault = parcelHelpers.interopDefault(_screen);
var _guiCompanion = require("./GuiCompanion");
var _guiCompanionDefault = parcelHelpers.interopDefault(_guiCompanion);
var _gameStateCompanion = require("./GameStateCompanion");
var _gameStateCompanionDefault = parcelHelpers.interopDefault(_gameStateCompanion);
const canvas = document.getElementById('game');
let state;
const setState = (s)=>{
    state = s;
};
let gui;
let screen = _screenDefault.default.ClickToStart;
const setScreen = (s)=>{
    screen = s;
};
let pausedFrameId = 0;
_imageLoadersDefault.default.then((images)=>{
    _carImageLoadersDefault.default.then((carImages)=>{
        _nightImageLoadersDefault.default.then((nightImages)=>{
            _dayImageLoadersDefault.default.then((dayImages)=>{
                _montageImageLoadersDefault.default.then((montageImages)=>{
                    _fontsDefault.default.then((fonts)=>{
                        gui = _guiCompanionDefault.default.new(canvas, images, nightImages, dayImages, carImages, fonts);
                        const asyncs = _controllerDefault.default.getMontageDrawers(gui, montageImages);
                        playMontage(asyncs);
                    });
                });
            });
        });
    });
});
const animate = ()=>{
    const frameId = requestAnimationFrame(animate);
    // Add comets
    if (_controllerDefault.default.addCometTime(frameId, pausedFrameId)) _controllerDefault.default.addComets(state, setState);
    // Update
    _gameStateCompanionDefault.default.update(state, setState);
    // Draw
    _controllerDefault.default.draw(state, gui);
    // Collision detection
    if (_collisionDefault.default.detected(state)) {
        cancelAnimationFrame(frameId);
        pausedFrameId = frameId;
        setScreen(_screenDefault.default.Locked);
        _controllerDefault.default.drawGameOver(setScreen, gui, state.hero.distanceTravelled);
    }
};
const playMontage = (ps)=>{
    const [p, ...tail] = ps;
    if (typeof p === 'undefined') return;
    p().then(()=>{
        if (screen != _screenDefault.default.Playing) playMontage(tail);
    });
};
canvas.addEventListener('click', ()=>{
    switch(screen){
        case _screenDefault.default.Locked:
            break;
        case _screenDefault.default.ClickToStart:
            _controllerDefault.default.startNewGame(setState, setScreen);
            animate();
            break;
        case _screenDefault.default.Playing:
            _controllerDefault.default.revEngine(state, setState);
            break;
        default:
            break;
    }
});

},{"./Controller":"d75m3","./imageLoaders":"kUpRe","./nightImageLoaders":"1UKIQ","./dayImageLoaders":"llf62","./montageImageLoaders":"ba40S","./fonts":"fcxUe","./api/Screen":"f9bku","./GuiCompanion":"deeBB","./GameStateCompanion":"2dxiq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./carImageLoaders":"hGNP4","./Collision":"hIGtx"}],"d75m3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cometCompanion = require("./CometCompanion");
var _cometCompanionDefault = parcelHelpers.interopDefault(_cometCompanion);
var _heroCompanion = require("./HeroCompanion");
var _heroCompanionDefault = parcelHelpers.interopDefault(_heroCompanion);
var _drawer = require("./Drawer");
var _drawerDefault = parcelHelpers.interopDefault(_drawer);
var _baseDrawer = require("./BaseDrawer");
var _baseDrawerDefault = parcelHelpers.interopDefault(_baseDrawer);
var _screen = require("./api/Screen");
var _screenDefault = parcelHelpers.interopDefault(_screen);
var _screensize = require("./screensize");
var _gameStateCompanion = require("./GameStateCompanion");
var _gameStateCompanionDefault = parcelHelpers.interopDefault(_gameStateCompanion);
const Controller = {
    getMontageDrawers: (gui, montageImages)=>{
        const draw = _drawerDefault.default.drawMontage(gui, montageImages);
        const imgHeight = montageImages[0].height;
        const showProduction = async ()=>{
            _baseDrawerDefault.default.clearScreen(gui);
            const copy = "a joeyblaze production";
            const origin = _screensize.canvasHeight * 0.33;
            const divHeight = _screensize.canvasHeight * 0.33;
            const fontSize = divHeight * 0.12;
            _baseDrawerDefault.default.drawCenteredText(gui, copy, origin, divHeight, fontSize);
            showSkip();
            await delay(2);
        };
        const showSkip = ()=>{
            const copy = "skip";
            const imageOrigin = (_screensize.canvasHeight - imgHeight) / 2;
            const skipOrigin = imageOrigin + imgHeight;
            const divHeight = _screensize.canvasHeight - skipOrigin;
            const fontSize = divHeight * 0.12;
            _baseDrawerDefault.default.drawCenteredText(gui, copy, skipOrigin, divHeight, fontSize, {
                "color": "#929082"
            });
        };
        const showTitle = async ()=>{
            _baseDrawerDefault.default.clearScreen(gui);
            await delay(1);
            const copy = "Escape from Las Palmas";
            const origin = _screensize.canvasHeight * 0.33;
            const divHeight = _screensize.canvasHeight * 0.33;
            const fontSize = divHeight * 0.12;
            _baseDrawerDefault.default.drawCenteredText(gui, copy, origin, divHeight, fontSize);
            await delay(2);
        };
        const showStart = async ()=>{
            const copy = "Press start";
            const origin = _screensize.canvasHeight * 0.66;
            const divHeight = _screensize.canvasHeight * 0.33;
            const fontSize = divHeight * 0.12;
            _baseDrawerDefault.default.drawCenteredText(gui, copy, origin, divHeight, fontSize);
        };
        const nextScene = async (i)=>{
            _baseDrawerDefault.default.clearScreen(gui);
            showSkip();
            await delay(1);
            draw(i);
            await delay(2);
        };
        return [
            showProduction,
            ()=>nextScene(0)
            ,
            ()=>nextScene(1)
            ,
            ()=>nextScene(2)
            ,
            ()=>nextScene(3)
            ,
            ()=>nextScene(4)
            ,
            ()=>nextScene(5)
            ,
            ()=>nextScene(6)
            ,
            showTitle,
            showStart, 
        ];
    },
    drawGameOver: (setScreen, gui, distanceTravelled)=>{
        const [drawRip, drawCar, drawScore, startOrigin, startHeight] = _drawerDefault.default.getGameOverDrawers(gui, Math.floor(distanceTravelled));
        const play = async ()=>{
            await delay(1);
            _baseDrawerDefault.default.clearScreen(gui);
            drawRip();
            drawCar();
            drawScore();
            await delay(1);
            setScreen(_screenDefault.default.ClickToStart);
            const copy = "Ok";
            const startFontSize = startHeight * 0.2;
            _baseDrawerDefault.default.drawCenteredText(gui, copy, startOrigin, startHeight, startFontSize);
        };
        play();
    },
    draw: (state, gui)=>{
        _baseDrawerDefault.default.clearScreen(gui);
        _drawerDefault.default.drawBackgroundImage(gui);
        _drawerDefault.default.drawForeground(gui, state.foreground);
        _drawerDefault.default.drawDistanceTravelled(gui, Math.floor(state.hero.distanceTravelled));
        _drawerDefault.default.drawHero(gui, state.hero);
        _drawerDefault.default.drawHeadlights(gui, state.hero, state.foreground);
        _drawerDefault.default.drawExhaust(gui.ctx, state.carExhaust.concat(state.cometExhaust));
        _drawerDefault.default.drawComets(gui, state.comets);
    },
    startNewGame: (setState, setScreen)=>{
        const state = _gameStateCompanionDefault.default.new();
        setState(state);
        setScreen(_screenDefault.default.Playing);
    },
    revEngine: (state, setState)=>{
        const hero = _heroCompanionDefault.default.rev(state.hero);
        setState({
            ...state,
            hero
        });
    },
    addComets: (state, setState)=>{
        const comets = state.comets.concat(_cometCompanionDefault.default.generate(_screensize.canvasWidth, _screensize.canvasHeight, state.cometRand));
        setState({
            ...state,
            comets
        });
    },
    addCometTime: (frameId, pausedFrameId)=>{
        return frameId - pausedFrameId >= 200 && frameId % 125 === 0;
    }
};
const delay = (seconds)=>new Promise((resolve)=>setTimeout(resolve, seconds * 1000)
    )
;
exports.default = Controller;

},{"./CometCompanion":"dism4","./HeroCompanion":"bNG2K","./Drawer":"3mZ2o","./BaseDrawer":"gvP0Y","./api/Screen":"f9bku","./screensize":"dUosh","./GameStateCompanion":"2dxiq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dism4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// comet
//// -> 20%
// rotat up/down
// reduce image size to w130 h346
const IMAGE_HEIGHT = 346;
const CometCompanion = {
    getRandomInt: (max, cometRand)=>Math.floor(cometRand() * max)
    ,
    generate: (xLimit, yLimit, cometRand)=>{
        const randNum = 1 + CometCompanion.getRandomInt(2, cometRand);
        return [
            ...Array(randNum).keys()
        ].map(()=>CometCompanion.new(xLimit, yLimit, cometRand)
        );
    },
    new: (xLimit, yLimit, cometRand)=>{
        const x = cometRand() * xLimit;
        const radius = cometRand() * 10 + 10; // between 10 and 20 (20 - 40d)
        const y = -radius;
        const loc = {
            x,
            y
        };
        const colorRand = cometRand();
        const color = colorRand <= 0.33 ? '#FFAA00' : colorRand <= 0.66 ? '#FC9303' : '#FF7B00';
        const dx = -1 * (cometRand() + 0.5);
        const dy = 10;
        const rotation = Math.atan(Math.abs(dx) / dy);
        return {
            loc,
            radius,
            color,
            dy,
            dx,
            yLimit,
            rotation
        };
    },
    update: (comet)=>{
        const y = comet.loc.y + comet.dy;
        const x = comet.loc.x + comet.dx;
        const loc = {
            ...comet.loc,
            y,
            x
        };
        return {
            ...comet,
            loc
        };
    },
    updateAll: (comets1)=>{
        const loop = (comets, acc)=>{
            const [comet, ...tail] = comets;
            if (typeof comet === 'undefined') return acc;
            if (comet.loc.y <= comet.yLimit + IMAGE_HEIGHT) return loop(tail, acc.concat([
                CometCompanion.update(comet)
            ]));
            return loop(tail, acc);
        };
        return loop(comets1, []);
    }
};
exports.default = CometCompanion;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bNG2K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _screensize = require("./screensize");
var _commandCenter = require("./commandCenter");
var _commandCenterDefault = parcelHelpers.interopDefault(_commandCenter);
var _offsets = require("./offsets");
var _offsetsDefault = parcelHelpers.interopDefault(_offsets);
const JUMP_VELOCITY = 10;
const WOBBLE_SPEED = 5;
const WOBBLE_SWING = 5;
const GRAVITY = -0.8;
const LEFT_BUFFER = 5;
const BOTTOM_BUFFER = 100;
const DRIFT = 0.1;
const HeroCompanion = {
    new: ()=>({
            loc: {
                x: LEFT_BUFFER - _offsetsDefault.default[_commandCenterDefault.default].extension.left,
                y: _screensize.canvasHeight - _offsetsDefault.default[_commandCenterDefault.default].bottom - BOTTOM_BUFFER
            },
            dx: 0,
            width: _offsetsDefault.default[_commandCenterDefault.default].width,
            color: '#959088',
            swayCounter: 0,
            isIdling: true,
            isBraking: false,
            drift: 0,
            distanceTravelled: 0
        })
    ,
    update: (hero)=>{
        const prevSway = HeroCompanion.calcSway(hero.swayCounter);
        const leftThreshold = LEFT_BUFFER;
        const isAtLeft = hero.loc.x - _offsetsDefault.default[_commandCenterDefault.default].extension.left <= leftThreshold + prevSway;
        const isAtRight = hero.loc.x + _offsetsDefault.default[_commandCenterDefault.default].extension.right > _screensize.canvasWidth;
        const isBraking = hero.dx < 0;
        const isIdling = hero.dx == 0;
        const drift = hero.drift + DRIFT;
        const distanceTravelled = drift + hero.loc.x / 20;
        if (isAtRight) {
            const dx = 0;
            const x = _screensize.canvasWidth - _offsetsDefault.default[_commandCenterDefault.default].extension.right;
            const loc = {
                ...hero.loc,
                x
            };
            const isIdling = false;
            const swayCounter = 360;
            return {
                ...hero,
                loc,
                dx,
                isIdling,
                isBraking,
                drift,
                distanceTravelled,
                swayCounter
            };
        }
        if (isAtLeft && (isIdling || isBraking)) {
            const swayCounter = (hero.swayCounter + 1) % 360;
            const nextSway = HeroCompanion.calcSway(swayCounter);
            const dx = 0;
            const nextX = leftThreshold + nextSway;
            const x = nextX >= 0 ? nextX - _offsetsDefault.default[_commandCenterDefault.default].extension.left : 0 - _offsetsDefault.default[_commandCenterDefault.default].extension.left;
            const loc = {
                ...hero.loc,
                x
            };
            const isIdling = true;
            return {
                ...hero,
                loc,
                dx,
                swayCounter,
                isIdling,
                isBraking,
                drift,
                distanceTravelled
            };
        } else {
            // Apply gravity
            const dx = hero.dx + GRAVITY;
            const nextX = hero.loc.x + dx;
            const x = nextX >= 0 ? nextX : 0;
            const loc = {
                ...hero.loc,
                x
            };
            const isIdling = false;
            const swayCounter = 360;
            return {
                ...hero,
                loc,
                dx,
                isIdling,
                isBraking,
                drift,
                distanceTravelled,
                swayCounter
            };
        }
    },
    rev: (hero)=>({
            ...hero,
            dx: JUMP_VELOCITY
        })
    ,
    calcSway: (swayCounter)=>Math.sin(WOBBLE_SPEED * (Math.PI / 180) * swayCounter) * WOBBLE_SWING
};
exports.default = HeroCompanion;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./screensize":"dUosh","./commandCenter":"knLvH","./offsets":"DCpzR"}],"dUosh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canvasWidth", ()=>canvasWidth
);
parcelHelpers.export(exports, "canvasHeight", ()=>canvasHeight
);
const MAX_WIDTH = 508;
const MAX_HEIGHT = 500;
const canvasWidth = innerWidth < MAX_WIDTH ? innerWidth : MAX_WIDTH;
const canvasHeight = innerHeight < MAX_HEIGHT ? innerHeight : MAX_HEIGHT;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"knLvH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _carIndices = require("./carIndices");
var _carIndicesDefault = parcelHelpers.interopDefault(_carIndices);
const carIndex = _carIndicesDefault.default.toyota2ndGen4Runner;
exports.default = carIndex;

},{"./carIndices":"lltoy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lltoy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let carIndices;
(function(carIndices1) {
    carIndices1[carIndices1["toyota2ndGen4Runner"] = 0] = "toyota2ndGen4Runner";
    carIndices1[carIndices1["bmwE36M3"] = 1] = "bmwE36M3";
})(carIndices || (carIndices = {
}));
exports.default = carIndices;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"DCpzR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _carIndices = require("./carIndices");
var _carIndicesDefault = parcelHelpers.interopDefault(_carIndices);
const toyota2ndGen4Runner = {
    shape: [
        {
            x: 2,
            y: 45
        },
        {
            x: 3,
            y: 34
        },
        {
            x: 10,
            y: 24
        },
        {
            x: 48,
            y: 24
        },
        {
            x: 57,
            y: 31
        },
        {
            x: 67,
            y: 32
        },
        {
            x: 77,
            y: 36
        },
        {
            x: 77,
            y: 43
        }, 
    ],
    headlights: {
        x: 76,
        y: 38
    },
    brakelights: {
        x: 4,
        y: 39
    },
    extension: {
        left: 2,
        right: 77
    },
    width: 75,
    bottom: 55
};
const bmwE36M3 = {
    shape: [
        {
            x: 4,
            y: 45
        },
        {
            x: 6,
            y: 38
        },
        {
            x: 11,
            y: 38
        },
        {
            x: 24,
            y: 32
        },
        {
            x: 41,
            y: 32
        },
        {
            x: 57,
            y: 40
        },
        {
            x: 71,
            y: 42
        },
        {
            x: 74,
            y: 47
        }, 
    ],
    headlights: {
        x: 72,
        y: 45
    },
    brakelights: {
        x: 6,
        y: 42
    },
    extension: {
        left: 4,
        right: 74
    },
    width: 70,
    bottom: 55
};
const offsets = Object.fromEntries([
    [
        _carIndicesDefault.default.toyota2ndGen4Runner,
        toyota2ndGen4Runner
    ],
    [
        _carIndicesDefault.default.bmwE36M3,
        bmwE36M3
    ], 
]);
exports.default = offsets;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./carIndices":"lltoy"}],"3mZ2o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _imageIndex = require("./api/ImageIndex");
var _imageIndexDefault = parcelHelpers.interopDefault(_imageIndex);
var _baseDrawer = require("./BaseDrawer");
var _baseDrawerDefault = parcelHelpers.interopDefault(_baseDrawer);
var _screensize = require("./screensize");
var _defaultCopy = require("./defaultCopy");
var _defaultCopyDefault = parcelHelpers.interopDefault(_defaultCopy);
var _commandCenter = require("./commandCenter");
var _commandCenterDefault = parcelHelpers.interopDefault(_commandCenter);
var _offsets = require("./offsets");
var _offsetsDefault = parcelHelpers.interopDefault(_offsets);
const Drawer = {
    drawHero: (gui, hero)=>{
        const img = gui.carImages[0];
        gui.ctx.drawImage(img, hero.loc.x, hero.loc.y);
        if (hero.isBraking) {
            const x = hero.loc.x + _offsetsDefault.default[_commandCenterDefault.default].brakelights.x;
            const y = hero.loc.y + _offsetsDefault.default[_commandCenterDefault.default].brakelights.y;
            const radiusSmall = 10;
            const radiusLarge = 20;
            const alphaSmall = 0.35;
            const alphaLarge = 0.15;
            const colorSmall = `rgb(255, 0, 0, ${alphaSmall})`;
            const colorLarge = `rgb(255, 0, 0, ${alphaLarge})`;
            _baseDrawerDefault.default.drawCircle(gui.ctx, x, y, radiusSmall, colorSmall);
            _baseDrawerDefault.default.drawCircle(gui.ctx, x, y, radiusLarge, colorLarge);
        }
    },
    drawExhaust: (gui, exhaustClouds)=>{
        exhaustClouds.forEach((exhaust)=>{
            _baseDrawerDefault.default.drawCircle(gui, exhaust.loc.x, exhaust.loc.y, exhaust.radius, exhaust.alphaColor.color());
        });
    },
    drawComets: (gui, comets)=>{
        comets.forEach((comet)=>{
            const cometInImageWidth = 100;
            const ratio = comet.radius * 2 / cometInImageWidth;
            const imageWidth = 130;
            const imageHeight = 346;
            const img = gui.assets[_imageIndexDefault.default.Comet];
            const xAdjustment = imageWidth * ratio * 0.5;
            const yAdjustment = imageHeight * ratio * 0.8;
            const imageX = comet.loc.x - xAdjustment;
            const imageY = comet.loc.y - yAdjustment;
            const targetWidth = imageWidth * ratio;
            const targetHeight = imageHeight * ratio;
            // Rotate
            gui.ctx.translate(comet.loc.x, comet.loc.y);
            gui.ctx.rotate(comet.rotation);
            gui.ctx.drawImage(img, imageX - comet.loc.x, imageY - comet.loc.y, targetWidth, targetHeight);
            gui.ctx.rotate(-comet.rotation);
            gui.ctx.translate(-comet.loc.x, -comet.loc.y);
        // Drawer.drawCircle(gui.ctx, comet.loc.x, comet.loc.y, comet.radius, 'green');
        });
    },
    drawForeground: (gui, foreground)=>{
        const planes = foreground.rear.concat(foreground.mid).concat(foreground.fore);
        planes.forEach((plane)=>{
            const img = gui.nightImages[plane.imageIndex];
            _baseDrawerDefault.default.drawImage(gui, img, plane.loc.x, plane.loc.y);
        });
    },
    drawHeadlights: (gui, hero, foreground)=>{
        const headlightX = hero.loc.x + _offsetsDefault.default[_commandCenterDefault.default].headlights.x;
        const headlightY = hero.loc.y + _offsetsDefault.default[_commandCenterDefault.default].headlights.y;
        const headlightXRange = 500;
        const headlightUpperYRange = headlightY - 250;
        const headlightLowerYRange = headlightY + 70;
        gui.ctx.save();
        gui.ctx.beginPath();
        gui.ctx.moveTo(headlightX, headlightY);
        gui.ctx.lineTo(headlightX + headlightXRange, headlightUpperYRange);
        gui.ctx.lineTo(headlightX + headlightXRange, headlightLowerYRange);
        gui.ctx.clip();
        foreground.fore.forEach((plane)=>{
            const img = gui.dayImages[plane.imageIndex];
            _baseDrawerDefault.default.drawImage(gui, img, plane.loc.x, plane.loc.y);
        });
        gui.ctx.restore();
    },
    drawBackgroundImage: (gui)=>{
        const img = gui.assets[_imageIndexDefault.default.Background];
        _baseDrawerDefault.default.drawFullWidthDeadCenteredImage(gui, img);
    },
    drawDistanceTravelled: (gui, distanceTravelled)=>{
        const align = 'right';
        const copy = `${distanceTravelled}m`;
        const fontSize = 25;
        const x = _screensize.canvasWidth - 10;
        const y = fontSize + 10;
        _baseDrawerDefault.default.drawText(gui.ctx, {
            ..._defaultCopyDefault.default,
            copy,
            x,
            y,
            fontSize,
            align
        });
    },
    drawMontage: (gui, montageImages)=>{
        const draw = (i)=>_baseDrawerDefault.default.drawFullWidthDeadCenteredImage(gui, montageImages[i])
        ;
        return draw;
    },
    drawIntro: (gui)=>{
        const heightOfAThird = _screensize.canvasHeight * 0.33;
        // Car
        const img = gui.carImages[1];
        const targetCarWidth = _screensize.canvasWidth * 0.9;
        // Copy
        const titleCopy = '1994 4Runner';
        // Origins and heights
        const topBufferOrigin = 0;
        const topBufferHeight = heightOfAThird * 0.1;
        const titleOrigin = topBufferOrigin + topBufferHeight;
        const titleHeight = heightOfAThird - topBufferHeight;
        const carOrigin = titleOrigin + titleHeight;
        // Font sizes
        const titleFontSize = titleHeight * 0.2;
        // Clear canvas
        _baseDrawerDefault.default.clearScreen(gui);
        // Draw car
        _baseDrawerDefault.default.drawCenteredImage(gui, img, carOrigin, targetCarWidth);
        _baseDrawerDefault.default.drawCenteredText(gui, titleCopy, titleOrigin, titleHeight, titleFontSize);
    },
    getGameOverDrawers: (gui, score)=>{
        const fontFace = 'PressStart';
        const heightOfAThird = _screensize.canvasHeight * 0.33;
        // Car
        const img = gui.carImages[1];
        // Origins and heights
        // Car
        const carOrigin = (_screensize.canvasHeight - img.height) / 2;
        const carHeight = img.height;
        // RIP
        const topBufferOrigin = 0;
        const topBufferHeight = heightOfAThird * 0.1;
        const ripOrigin = topBufferOrigin + topBufferHeight;
        const ripHeight = carOrigin - ripOrigin;
        // Score
        const scoreOrigin = carOrigin + carHeight;
        const scoreHeight = 0.5 * (_screensize.canvasHeight - scoreOrigin);
        // Ok
        const startOrigin = scoreOrigin + scoreHeight;
        const startHeight = _screensize.canvasHeight - startOrigin;
        // Font sizes
        const ripFontSize = ripHeight * 0.9;
        const scoreFontSize = scoreHeight * 0.2;
        // Font
        const scoreFont = `${scoreFontSize}px ${fontFace}`;
        // Copy
        const ripCopy = `RIP`;
        const scoreCopy = `You were killed by flying molten lava after travelling ${score}m`;
        const scorePhrases = Drawer.breakCopyIntoPhrases(gui.ctx, scoreCopy, scoreFont, _screensize.canvasWidth * 0.75);
        const drawRip = ()=>_baseDrawerDefault.default.drawCenteredText(gui, ripCopy, ripOrigin, ripHeight, ripFontSize)
        ;
        const drawCar = ()=>_baseDrawerDefault.default.drawCenteredImage(gui, img, carOrigin, img.width)
        ;
        const drawScore = ()=>_baseDrawerDefault.default.drawCenteredPhrases(gui, scorePhrases, scoreOrigin, scoreHeight, scoreFontSize)
        ;
        return [
            drawRip,
            drawCar,
            drawScore,
            startOrigin,
            startHeight
        ];
    },
    breakCopyIntoPhrases: (ctx, copy, font, width)=>{
        ctx.font = font;
        const space = " ";
        const phraseLimit = width;
        const loop = (words, phrase, phrases)=>{
            const [word, ...tail] = words;
            if (typeof word === 'undefined') return phrases.concat([
                phrase.join(space)
            ]);
            const newPhrase = phrase.concat([
                word
            ]);
            if (ctx.measureText(newPhrase.join(space)).width < phraseLimit) return loop(tail, newPhrase, phrases);
            return loop(tail, [], phrases.concat([
                newPhrase.join(space)
            ]));
        };
        return loop(copy.split(space), [], []);
    }
};
exports.default = Drawer;

},{"./api/ImageIndex":"kMTCN","./BaseDrawer":"gvP0Y","./screensize":"dUosh","./defaultCopy":"UmqtR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./commandCenter":"knLvH","./offsets":"DCpzR"}],"kMTCN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let ImageIndex;
(function(ImageIndex1) {
    ImageIndex1[ImageIndex1["Background"] = 0] = "Background";
    ImageIndex1[ImageIndex1["Comet"] = 1] = "Comet";
})(ImageIndex || (ImageIndex = {
}));
exports.default = ImageIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gvP0Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _screensize = require("./screensize");
var _defaultCopy = require("./defaultCopy");
var _defaultCopyDefault = parcelHelpers.interopDefault(_defaultCopy);
const BaseDrawer = {
    drawCircle: (ctx, x, y, radius, color)=>{
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fillStyle = color;
        ctx.fill();
    },
    drawText: (ctx, copy, options = {
    })=>{
        const finalCopy = {
            ...copy,
            ...options
        };
        const fontFace = 'PressStart';
        ctx.fillStyle = finalCopy.color;
        ctx.font = `${finalCopy.fontSize}px ${fontFace}`;
        ctx.textAlign = finalCopy.align;
        ctx.fillText(finalCopy.copy, finalCopy.x, finalCopy.y);
    },
    drawCenteredText: (gui, copy, origin, divHeight, fontSize, options = {
    })=>{
        const y = origin + divHeight / 2 + fontSize / 2;
        BaseDrawer.drawText(gui.ctx, {
            ..._defaultCopyDefault.default,
            copy,
            y,
            fontSize
        }, options);
    },
    drawDeadCenteredText: (gui, copy, fontSize, options = {
    })=>{
        const y = (_screensize.canvasHeight + fontSize) / 2;
        BaseDrawer.drawText(gui.ctx, {
            ..._defaultCopyDefault.default,
            copy,
            y,
            fontSize
        }, options);
    },
    drawCenteredPhrases: (gui, phrases, origin, divHeight, fontSize, options = {
    })=>{
        const baseY = origin + divHeight / 2 + fontSize / 2;
        const lineSpacingMultiplier = 1.1;
        phrases.forEach((copy, index)=>{
            const y = baseY + index * fontSize * lineSpacingMultiplier;
            BaseDrawer.drawText(gui.ctx, {
                ..._defaultCopyDefault.default,
                copy,
                y,
                fontSize
            }, options);
        });
    },
    drawStretchedImage: (gui, drawable, options = {
    })=>{
        const finalDrawable = {
            ...drawable,
            ...options
        };
        gui.ctx.drawImage(finalDrawable.img, finalDrawable.x, finalDrawable.y, finalDrawable.targetWidth, finalDrawable.targetHeight);
    },
    drawImage: (gui, img, x, y, options = {
    })=>{
        const drawable = {
            img,
            x,
            y,
            targetWidth: img.width,
            targetHeight: img.height
        };
        BaseDrawer.drawStretchedImage(gui, drawable, options);
    },
    drawCenteredImage: (gui, img, origin, targetWidth, options = {
    })=>{
        const ratio = targetWidth / img.width;
        const targetHeight = img.height * ratio; // Apply same ration to height
        const x = (_screensize.canvasWidth - targetWidth) / 2;
        const y = origin;
        const drawable = {
            img,
            x,
            y,
            targetWidth,
            targetHeight
        };
        BaseDrawer.drawStretchedImage(gui, drawable, options);
    },
    drawDeadCenteredImage: (gui, img, targetWidth, options = {
    })=>{
        const ratio = targetWidth / img.width;
        const targetHeight = img.height * ratio; // Apply same ration to height
        const origin = (_screensize.canvasHeight - targetHeight) / 2;
        BaseDrawer.drawCenteredImage(gui, img, origin, targetWidth, options);
    },
    drawFullWidthDeadCenteredImage: (gui, img, options = {
    })=>{
        BaseDrawer.drawDeadCenteredImage(gui, img, _screensize.canvasWidth, options);
    },
    clearScreen: (gui)=>{
        BaseDrawer.eraseAllScreen(gui);
        BaseDrawer.fillBackground(gui, '#12110b');
    },
    eraseScreen: (gui)=>{
        gui.ctx.clearRect(0, 0, _screensize.canvasWidth, _screensize.canvasHeight);
    },
    eraseAllScreen: (gui)=>{
        BaseDrawer.eraseScreen(gui, 0, 0, _screensize.canvasWidth, _screensize.canvasHeight);
    },
    fillDefaultBackground: (gui)=>{
        BaseDrawer.fillBackground(gui, '#12110b');
    },
    fillBackground: (gui, color)=>{
        gui.ctx.fillStyle = color;
        gui.ctx.fillRect(0, 0, _screensize.canvasWidth, _screensize.canvasHeight);
    }
};
exports.default = BaseDrawer;

},{"./screensize":"dUosh","./defaultCopy":"UmqtR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"UmqtR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _screensize = require("./screensize");
const defaultCopy = {
    x: _screensize.canvasWidth / 2,
    color: "#fffce3",
    align: "center"
};
exports.default = defaultCopy;

},{"./screensize":"dUosh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f9bku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let Screen;
(function(Screen1) {
    Screen1[Screen1["Locked"] = 0] = "Locked";
    Screen1[Screen1["ClickToStart"] = 1] = "ClickToStart";
    Screen1[Screen1["Playing"] = 2] = "Playing";
})(Screen || (Screen = {
}));
exports.default = Screen;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2dxiq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _heroCompanion = require("./HeroCompanion");
var _heroCompanionDefault = parcelHelpers.interopDefault(_heroCompanion);
var _sfc32 = require("./sfc32");
var _sfc32Default = parcelHelpers.interopDefault(_sfc32);
var _foregroundCompanion = require("./ForegroundCompanion");
var _foregroundCompanionDefault = parcelHelpers.interopDefault(_foregroundCompanion);
var _exhaustCompanion = require("./ExhaustCompanion");
var _exhaustCompanionDefault = parcelHelpers.interopDefault(_exhaustCompanion);
var _cometCompanion = require("./CometCompanion");
var _cometCompanionDefault = parcelHelpers.interopDefault(_cometCompanion);
var _offsets = require("./offsets");
var _offsetsDefault = parcelHelpers.interopDefault(_offsets);
var _commandCenter = require("./commandCenter");
var _commandCenterDefault = parcelHelpers.interopDefault(_commandCenter);
const gamestateCompanion = {
    new: ()=>({
            hero: _heroCompanionDefault.default.new(),
            carExhaust: [],
            cometExhaust: [],
            comets: [],
            foreground: _foregroundCompanionDefault.default.new(),
            cometRand: _sfc32Default.default(3735928559)
        })
    ,
    update: (state, setState)=>{
        const hero = _heroCompanionDefault.default.update(state.hero);
        const comets = _cometCompanionDefault.default.updateAll(state.comets);
        const newCometExhaust = comets.flatMap((comet)=>_exhaustCompanionDefault.default.maybeNewCometExhaust(comet.loc)
        );
        const cometExhaust = _exhaustCompanionDefault.default.updateAll(state.cometExhaust).concat(newCometExhaust);
        const newCarExhaust = _exhaustCompanionDefault.default.maybeNewCarExhaust({
            x: state.hero.loc.x + _offsetsDefault.default[_commandCenterDefault.default].brakelights.x,
            y: state.hero.loc.y + _offsetsDefault.default[_commandCenterDefault.default].brakelights.y
        }, state.hero.isIdling);
        const carExhaust = _exhaustCompanionDefault.default.updateAll(state.carExhaust).concat(newCarExhaust);
        const foreground = _foregroundCompanionDefault.default.update(state.foreground);
        setState({
            ...state,
            hero,
            carExhaust,
            cometExhaust,
            comets,
            foreground
        });
    }
};
exports.default = gamestateCompanion;

},{"./HeroCompanion":"bNG2K","./sfc32":"3Whl2","./ForegroundCompanion":"iMQdo","./ExhaustCompanion":"1vRLa","./CometCompanion":"dism4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./offsets":"DCpzR","./commandCenter":"knLvH"}],"3Whl2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const sfc32 = (seed)=>{
    // Pad seed with dummy data
    let a = 2654435769;
    let b = 608135816;
    let c = 3084996962;
    const rng = ()=>{
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        seed >>>= 0;
        let t = a + b | 0;
        a = b ^ b >>> 9;
        b = c + (c << 3) | 0;
        c = c << 21 | c >>> 11;
        seed = seed + 1 | 0;
        t = t + seed | 0;
        c = c + t | 0;
        return (t >>> 0) / 4294967296;
    };
    // Advance the RNG a few times
    for(let i = 0; i < 15; i++)rng();
    return rng;
};
exports.default = sfc32;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iMQdo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _screensize = require("./screensize");
const SPEED = -5;
const WIDTH = 762;
const HEIGHT = 375;
const MID_OFFSET = 25;
const REAR_OFFSET = 50;
const TOP_BUFFER = -50; // 20
// day
// reszie from 2036 -> 1016
// size 75%
// night
// size 75%
// brightness -100
// saturation 80
// background
// brightnes -15
const ForegroundCompanion = {
    new: ()=>{
        const defaultImageIndex = 0;
        const forePlane = {
            loc: {
                x: 0,
                y: _screensize.canvasHeight - HEIGHT + TOP_BUFFER
            },
            imageIndex: defaultImageIndex
        };
        const midPlane = {
            loc: {
                x: 0,
                y: _screensize.canvasHeight - HEIGHT + TOP_BUFFER - MID_OFFSET
            },
            imageIndex: defaultImageIndex
        };
        const rearPlane = {
            loc: {
                x: 0,
                y: _screensize.canvasHeight - HEIGHT + TOP_BUFFER - REAR_OFFSET
            },
            imageIndex: defaultImageIndex
        };
        return {
            fore: [
                forePlane,
                {
                    ...forePlane,
                    loc: {
                        ...forePlane.loc,
                        x: WIDTH
                    }
                }
            ],
            mid: [
                midPlane,
                {
                    ...midPlane,
                    loc: {
                        ...midPlane.loc,
                        x: WIDTH
                    }
                }
            ],
            rear: [
                rearPlane,
                {
                    ...rearPlane,
                    loc: {
                        ...rearPlane.loc,
                        x: WIDTH
                    }
                }
            ]
        };
    },
    update: (foreground)=>{
        const loop = (planes, acc, speed)=>{
            const [plane, ...tail] = planes;
            if (typeof plane === 'undefined') return acc;
            const nextX = plane.loc.x + speed;
            if (nextX > -WIDTH) {
                const loc = {
                    ...plane.loc,
                    x: nextX
                };
                return loop(tail, acc.concat([
                    {
                        ...plane,
                        loc
                    }
                ]), speed, getImageIndex);
            }
            const imageIndex = getImageIndex();
            const loc = {
                ...plane.loc,
                x: nextX + 2 * WIDTH
            };
            return loop(tail, acc.concat([
                {
                    ...plane,
                    imageIndex,
                    loc
                }
            ]), speed, getImageIndex);
        };
        const fireThreshold = 0.6;
        const getImageIndex = ()=>Math.random() > fireThreshold ? 1 + Math.floor(Math.random() * 7) : 0
        ;
        const getDefaultImageIndex = ()=>0
        ;
        return {
            fore: loop(foreground.fore, [], SPEED, getImageIndex),
            mid: loop(foreground.mid, [], SPEED * 0.5, getDefaultImageIndex),
            rear: loop(foreground.rear, [], SPEED * 0.25, getDefaultImageIndex)
        };
    }
};
exports.default = ForegroundCompanion;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./screensize":"dUosh"}],"1vRLa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _alphaColor = require("./AlphaColor");
var _alphaColorDefault = parcelHelpers.interopDefault(_alphaColor);
const R = 100;
const G = 150;
const B = 200;
const REV_RADIUS = 25;
const HIGH_EXHAUST_DISPLAY_THRESHOLD = 0.01;
const IDLE_RADIUS = 10;
const LOW_EXHAUST_DISPLAY_THRESHOLD = 0.75;
const MAX_AGE = 100;
const ALPHA_MULTIPLIER = 0.00133;
const COMET_SPEED = -15;
const COMET_EXHAUST_DRIFT = 1;
const EXHAUST_SPEED = -10;
const GROW_RATE = 1;
const ExhaustCompanion = {
    new: (loc, radius, dx, dy, alphaColor)=>({
            loc,
            radius,
            alphaColor,
            dx,
            dy,
            age: 0
        })
    ,
    maybeNewCarExhaust: (loc, isIdling)=>{
        const age = 0;
        const alpha = ExhaustCompanion.calcAlpha(age);
        const alphaColor = new _alphaColorDefault.default(R, G, B, alpha);
        const maybeRadius = isIdling ? ExhaustCompanion.lowLikelihoodOfSmoke() : ExhaustCompanion.highLikelihoodOfSmoke();
        const dy = Math.random() - 0.5;
        return maybeRadius.map((radius)=>ExhaustCompanion.new(loc, radius, EXHAUST_SPEED, dy, alphaColor)
        );
    },
    maybeNewCometExhaust: (loc)=>{
        const age = 0;
        const alpha = ExhaustCompanion.calcAlpha(age);
        const alphaColor = new _alphaColorDefault.default(R, G, B, alpha);
        const maybeRadius = ExhaustCompanion.highLikelihoodOfSmoke();
        return maybeRadius.map((radius)=>ExhaustCompanion.new(loc, radius, COMET_EXHAUST_DRIFT, COMET_SPEED, alphaColor)
        );
    },
    update: (exhaust)=>{
        const x = exhaust.loc.x + exhaust.dx;
        const y = exhaust.loc.y + exhaust.dy;
        const loc = {
            ...exhaust.loc,
            x,
            y
        };
        const age = exhaust.age + 1;
        const alpha = ExhaustCompanion.calcAlpha(age);
        const alphaColor = new _alphaColorDefault.default(exhaust.alphaColor.r, exhaust.alphaColor.g, exhaust.alphaColor.b, alpha);
        const radius = exhaust.radius + GROW_RATE;
        return {
            ...exhaust,
            loc,
            age,
            alphaColor,
            radius
        };
    },
    updateAll: (exhaustClouds)=>{
        return exhaustClouds.flatMap((exhaust)=>{
            const agePred = exhaust.age > MAX_AGE;
            const xPred = exhaust.loc.x + exhaust.radius < 0;
            const yPred = exhaust.loc.y + exhaust.radius < 0;
            return agePred || xPred || yPred ? [] : [
                ExhaustCompanion.update(exhaust)
            ];
        });
    },
    highLikelihoodOfSmoke: ()=>{
        return Math.random() > HIGH_EXHAUST_DISPLAY_THRESHOLD ? [
            REV_RADIUS * Math.random()
        ] : [];
    },
    lowLikelihoodOfSmoke: ()=>{
        return Math.random() > LOW_EXHAUST_DISPLAY_THRESHOLD ? [
            IDLE_RADIUS * Math.random()
        ] : [];
    },
    calcAlpha: (age)=>(MAX_AGE - age * 4) * ALPHA_MULTIPLIER
};
exports.default = ExhaustCompanion;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./AlphaColor":"k2rYS"}],"k2rYS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class AlphaColor {
    constructor(r, g, b, alpha){
        this.color = ()=>`rgb(${this.r}, ${this.g}, ${this.b}, ${this.alpha})`
        ;
        this.r = r;
        this.g = g;
        this.b = b;
        this.alpha = alpha;
    }
}
exports.default = AlphaColor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kUpRe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const imageUrls = [
    '../assets/misc/background.png',
    '../assets/misc/comet.png', 
];
const imageLoaders = imageUrls.map((url)=>new Promise((resolve)=>{
        const img = new Image();
        img.onload = ()=>resolve(img)
        ;
        img.src = url;
    })
);
const loadImages = Promise.all(imageLoaders);
exports.default = loadImages;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1UKIQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const nightImageUrls = [
    '../assets/foreground/night.png',
    '../assets/foreground/night_v1.png',
    '../assets/foreground/night_v2.png',
    '../assets/foreground/night_v3.png',
    '../assets/foreground/night_v4.png',
    '../assets/foreground/night_v5.png',
    '../assets/foreground/night_v6.png',
    '../assets/foreground/night_v7.png', 
];
const nightImageLoaders = nightImageUrls.map((url)=>new Promise((resolve)=>{
        const img = new Image();
        img.onload = ()=>resolve(img)
        ;
        img.src = url;
    })
);
const loadNightImages = Promise.all(nightImageLoaders);
exports.default = loadNightImages;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"llf62":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const dayImageUrls = [
    '../assets/foreground/day.png',
    '../assets/foreground/day_v1.png',
    '../assets/foreground/day_v2.png',
    '../assets/foreground/day_v3.png',
    '../assets/foreground/day_v4.png',
    '../assets/foreground/day_v5.png',
    '../assets/foreground/day_v6.png',
    '../assets/foreground/day_v7.png', 
];
const dayImageLoaders = dayImageUrls.map((url)=>new Promise((resolve)=>{
        const img = new Image();
        img.onload = ()=>resolve(img)
        ;
        img.src = url;
    })
);
const loadDayImages = Promise.all(dayImageLoaders);
exports.default = loadDayImages;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ba40S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const montageImageUrls = [
    '../assets/montage/01.png',
    '../assets/montage/02.png',
    '../assets/montage/03.png',
    '../assets/montage/04.png',
    '../assets/montage/05.png',
    '../assets/montage/06.png',
    '../assets/montage/07.png', 
];
const montageImageLoaders = montageImageUrls.map((url)=>new Promise((resolve)=>{
        const img = new Image();
        img.onload = ()=>resolve(img)
        ;
        img.src = url;
    })
);
const loadMontageImages = Promise.all(montageImageLoaders);
exports.default = loadMontageImages;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fcxUe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const fontResources = [
    {
        name: 'PressStart',
        url: 'url(../assets/fonts/PressStart2P-Regular.ttf)'
    }, 
];
const fontLoaders = fontResources.map((resource)=>{
    const font = new FontFace(resource.name, resource.url);
    return font.load();
});
const loadFont = Promise.all(fontLoaders);
exports.default = loadFont;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"deeBB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _screensize = require("./screensize");
const checkContext = (maybeCtx)=>{
    if (!maybeCtx) throw new Error('Failed to get 2D context');
    else return maybeCtx;
};
const guiCompanion = {
    new: (canvas, assets, nightImages, dayImages, carImages, fonts)=>{
        canvas.width = _screensize.canvasWidth;
        canvas.height = _screensize.canvasHeight;
        document.fonts.add(fonts[0]);
        const ctx = checkContext(canvas.getContext('2d'));
        return {
            canvas,
            ctx,
            assets,
            nightImages,
            dayImages,
            carImages,
            fonts
        };
    }
};
exports.default = guiCompanion;

},{"./screensize":"dUosh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hGNP4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _carImages = require("./carImages");
var _carImagesDefault = parcelHelpers.interopDefault(_carImages);
var _commandCenter = require("./commandCenter");
var _commandCenterDefault = parcelHelpers.interopDefault(_commandCenter);
const carImageUrls = _carImagesDefault.default[_commandCenterDefault.default];
const carImageLoaders = carImageUrls.map((url)=>new Promise((resolve)=>{
        const img = new Image();
        img.onload = ()=>resolve(img)
        ;
        img.src = url;
    })
);
const loadCarImages = Promise.all(carImageLoaders);
exports.default = loadCarImages;

},{"./carImages":"bCGEP","./commandCenter":"knLvH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bCGEP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _carIndices = require("./carIndices");
var _carIndicesDefault = parcelHelpers.interopDefault(_carIndices);
const toyota2ndGen4Runner = [
    '../assets/car/toyota2ndGen4Runner/small.png',
    '../assets/car/toyota2ndGen4Runner/large.png', 
];
const bmwE36M3 = [
    '../assets/car/bmwE36M3/small.png',
    '../assets/car/bmwE36M3/large.png', 
];
const carImages = Object.fromEntries([
    [
        _carIndicesDefault.default.toyota2ndGen4Runner,
        toyota2ndGen4Runner
    ],
    [
        _carIndicesDefault.default.bmwE36M3,
        bmwE36M3
    ], 
]);
exports.default = carImages;

},{"./carIndices":"lltoy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hIGtx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _commandCenter = require("./commandCenter");
var _commandCenterDefault = parcelHelpers.interopDefault(_commandCenter);
var _offsets = require("./offsets");
var _offsetsDefault = parcelHelpers.interopDefault(_offsets);
// http://www.jeffreythompson.org/collision-detection/poly-circle.php
const Collision = {
    detectCircleCircleCollision: (c1, c2)=>{
        const dist = Math.hypot(c1.loc.x - c2.loc.x, c1.loc.y - c2.loc.y);
        return dist - c1.radius - c2.radius < 1;
    },
    detectCircleHeroCollision: (c, hero)=>{
        const shape = _offsetsDefault.default[_commandCenterDefault.default].shape.map((car)=>{
            return {
                x: hero.loc.x + car.x,
                y: hero.loc.y + car.y
            };
        });
        return Collision.polyCircle(shape, c.loc.x, c.loc.y, c.radius);
    },
    detected: (state)=>{
        const loop = (comets, hero)=>{
            const [comet, ...tail] = comets;
            if (typeof comet === 'undefined') return false;
            return Collision.detectCircleHeroCollision(comet, hero) || loop(tail, hero);
        };
        return loop(state.comets, state.hero);
    },
    polyCircle: (vertices, cx, cy, r)=>{
        let next = 0;
        for(let current = 0; current < vertices.length; current++){
            next = current + 1;
            if (next == vertices.length) next = 0;
            const collision = Collision.lineCircle(vertices[current].x, vertices[current].y, vertices[next].x, vertices[next].y, cx, cy, r);
            if (collision) return true;
        }
        return false;
    },
    lineCircle: (x1, y1, x2, y2, cx, cy, r)=>{
        const inside1 = Collision.pointCircle(x1, y1, cx, cy, r);
        const inside2 = Collision.pointCircle(x2, y2, cx, cy, r);
        if (inside1 || inside2) return true;
        const distX = x1 - x2;
        const distY = y1 - y2;
        const len = Math.sqrt(distX * distX + distY * distY);
        const dot = ((cx - x1) * (x2 - x1) + (cy - y1) * (y2 - y1)) / len ** 2;
        const closestX = x1 + dot * (x2 - x1);
        const closestY = y1 + dot * (y2 - y1);
        const onSegment = Collision.linePoint(x1, y1, x2, y2, closestX, closestY);
        if (!onSegment) return false;
        const distX2 = closestX - cx;
        const distY2 = closestY - cy;
        const distance = Math.sqrt(distX2 * distX2 + distY2 * distY2);
        if (distance <= r) return true;
        return false;
    },
    linePoint: (x1, y1, x2, y2, px, py)=>{
        const d1 = Math.hypot(px - x1, py - y1);
        const d2 = Math.hypot(px - x2, py - y2);
        const lineLen = Math.hypot(x1 - x2, y1 - y2);
        const buffer = 0.1; // lower to make more accurate
        if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) return true;
        return false;
    },
    pointCircle: (px, py, cx, cy, r)=>{
        const distance = Math.hypot(px - cx, py - cy);
        if (distance <= r) return true;
        return false;
    }
};
exports.default = Collision;

},{"./commandCenter":"knLvH","./offsets":"DCpzR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["4D17I","jZgE0"], "jZgE0", "parcelRequire2ab7")

//# sourceMappingURL=main.js.map
