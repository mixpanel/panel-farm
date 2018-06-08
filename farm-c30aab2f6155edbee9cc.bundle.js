/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.h = exports.StateStore = exports.StateController = exports.ProxyComponent = exports.ControlledComponent = exports.ComponentUtils = exports.Component = undefined;

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

var _componentUtils = __webpack_require__(22);

var _componentUtils2 = _interopRequireDefault(_componentUtils);

var _domPatcher = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlledComponent = _componentUtils2.default.ControlledComponent; /**
                                                                         * Entry point for Panel apps and components
                                                                         * @module panel
                                                                         * @example
                                                                         * import { Component } from 'panel';
                                                                         * customElements.define('my-widget', class extends Component {
                                                                         *   // app definition
                                                                         * });
                                                                         */

var ProxyComponent = _componentUtils2.default.ProxyComponent;
var StateController = _componentUtils2.default.StateController;
var StateStore = _componentUtils2.default.StateStore;
exports.Component = _component2.default;
exports.ComponentUtils = _componentUtils2.default;
exports.ControlledComponent = ControlledComponent;
exports.ProxyComponent = ProxyComponent;
exports.StateController = StateController;
exports.StateStore = StateStore;
exports.h = _domPatcher.h;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMPatcher = exports.h = exports.EMPTY_DIV = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Manages Virtual DOM -> DOM rendering cycle
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module dom-patcher
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @private
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _snabbdom = __webpack_require__(12);

var _snabbdom2 = _interopRequireDefault(_snabbdom);

var _h = __webpack_require__(3);

var _h2 = _interopRequireDefault(_h);

var _attributes = __webpack_require__(15);

var _attributes2 = _interopRequireDefault(_attributes);

var _dataset = __webpack_require__(16);

var _dataset2 = _interopRequireDefault(_dataset);

var _snabbdomDelayedClass = __webpack_require__(17);

var _snabbdomDelayedClass2 = _interopRequireDefault(_snabbdomDelayedClass);

var _eventlisteners = __webpack_require__(18);

var _eventlisteners2 = _interopRequireDefault(_eventlisteners);

var _props = __webpack_require__(19);

var _props2 = _interopRequireDefault(_props);

var _style = __webpack_require__(20);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var patch = _snabbdom2.default.init([_attributes2.default, _dataset2.default, _snabbdomDelayedClass2.default, _eventlisteners2.default, _props2.default, _style2.default]);

var EMPTY_DIV = exports.EMPTY_DIV = (0, _h2.default)('div');
exports.h = _h2.default;

var DOMPatcher = exports.DOMPatcher = function () {
  function DOMPatcher(initialState, renderFunc) {
    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    _classCallCheck(this, DOMPatcher);

    this.updateMode = options.updateMode || 'async';

    this.state = Object.assign({}, initialState);
    this.renderFunc = renderFunc;
    this.vnode = this.renderFunc(this.state);

    // prepare root element
    var tagName = this.vnode.sel.split(/[#\.]/)[0];
    var classMatches = this.vnode.sel.match(/\.[^\.#]+/g);
    var idMatch = this.vnode.sel.match(/#[^\.#]+/);
    this.el = document.createElement(tagName);
    if (classMatches) {
      this.el.className = classMatches.map(function (c) {
        return c.slice(1);
      }).join(' ');
    }
    if (idMatch) {
      this.el.id = idMatch[0].slice(1);
    }

    patch(this.el, this.vnode);
  }

  _createClass(DOMPatcher, [{
    key: 'update',
    value: function update(newState) {
      var _this = this;

      if (this.rendering) {
        console.error('Applying new DOM update while render is already in progress!');
      }

      this.pendingState = newState;
      switch (this.updateMode) {
        case 'async':
          if (!this.pending) {
            this.pending = true;
            requestAnimationFrame(function () {
              return _this.render();
            });
          }
          break;
        case 'sync':
          this.render();
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.rendering = true;
      this.pending = false;
      this.state = this.pendingState;
      var newVnode = this.renderFunc(this.state);
      this.rendering = false;

      patch(this.vnode, newVnode);
      this.vnode = newVnode;
    }
  }]);

  return DOMPatcher;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cuid = __webpack_require__(8);

var _cuid2 = _interopRequireDefault(_cuid);

var _lodash = __webpack_require__(9);

var _lodash2 = _interopRequireDefault(_lodash);

var _webcomponent = __webpack_require__(10);

var _webcomponent2 = _interopRequireDefault(_webcomponent);

var _domPatcher = __webpack_require__(1);

var _router = __webpack_require__(21);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DOCUMENT_FRAGMENT_NODE = 11;

/**
 * Definition of a Panel component/app, implemented as an HTML custom element.
 * App logic and configuration is defined by extending this class. Instantiating
 * a component is typically not done by calling the constructor directly, but
 * either by including the tag in HTML markup, or by using the DOM API method
 * [document.createElement]{@link https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement}.
 *
 * @example <caption>Defining a Panel component</caption>
 * class MyWidget extends Component {
 *   get config() {
 *     return {
 *       // options go here
 *     };
 *   }
 *
 *   myMethod() {
 *     // etc
 *   }
 * }
 *
 * @example <caption>Registering the custom element definition for the DOM</caption>
 * customElements.define('my-widget', MyWidget);
 *
 * @example <caption>Adding an instance of the element to the DOM</caption>
 * <my-widget some-attr></my-widget>
 *
 * @extends WebComponent
 */

var Component = function (_WebComponent) {
  _inherits(Component, _WebComponent);

  _createClass(Component, [{
    key: 'child',


    /**
     * For use inside view templates, to create a child Panel component nested under this
     * component, which will share its state object and update cycle.
     * @param {string} tagName - the HTML element tag name of the custom element
     * to be created
     * @param {object} [config={}] - snabbdom node config (second argument of h())
     * @returns {object} snabbdom vnode
     * @example
     * {template: state => h('.header', this.child('my-child-widget'))}
     */
    value: function child(tagName) {
      var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      config.props = Object.assign({}, config.props, { $panelParentID: this.panelID });
      return (0, _domPatcher.h)(tagName, config);
    }

    /**
     * Searches the component's Panel ancestors for the first component of the
     * given type (HTML tag name).
     * @param {string} tagName - tag name of the parent to search for
     * @returns {object} Panel component
     * @throws Throws an error if no parent component with the given tag name is found.
     * @example
     * myWidget.findPanelParentByTagName('my-app');
     */

  }, {
    key: 'findPanelParentByTagName',
    value: function findPanelParentByTagName(tagName) {
      tagName = tagName.toLowerCase();
      for (var node = this.$panelParent; !!node; node = node.$panelParent) {
        if (node.tagName.toLowerCase() === tagName) {
          return node;
        }
      }
      throw Error(tagName + ' not found');
    }

    /**
     * Fetches a value from the component's configuration map (a combination of
     * values supplied in the config() getter and defaults applied automatically).
     * @param {string} key - key of config item to fetch
     * @returns value associated with key
     * @example
     * myWidget.getConfig('css');
     */

  }, {
    key: 'getConfig',
    value: function getConfig(key) {
      return this._config[key];
    }

    /**
     * Executes the route handler matching the given URL fragment, and updates
     * the URL, as though the user had navigated explicitly to that address.
     * @param {string} fragment - URL fragment to navigate to
     * @param {object} [stateUpdate={}] - update to apply to state object when
     * routing
     * @example
     * myApp.navigate('wombat/54', {color: 'blue'});
     */

  }, {
    key: 'navigate',
    value: function navigate() {
      var _$panelRoot$router;

      (_$panelRoot$router = this.$panelRoot.router).navigate.apply(_$panelRoot$router, arguments);
    }

    /**
     * Sets a value in the component's configuration map after element
     * initialization.
     * @param {string} key - key of config item to set
     * @param val - value to associate with key
     * @example
     * myWidget.setConfig('template', () => h('.new-template', 'Hi'));
     */

  }, {
    key: 'setConfig',
    value: function setConfig(key, val) {
      this._config[key] = val;
    }

    /**
     * To be overridden by subclasses, defining conditional logic for whether
     * a component should rerender its template given the state to be applied.
     * In most cases this method can be left untouched, but can provide improved
     * performance when dealing with very many DOM elements.
     * @param {object} state - state object to be used when rendering
     * @returns {boolean} whether or not to render/update this component
     * @example
     * shouldUpdate(state) {
     *   // don't need to rerender if result set ID hasn't changed
     *   return state.largeResultSetID !== this._cachedResultID;
     * }
     */

  }, {
    key: 'shouldUpdate',
    value: function shouldUpdate(state) {
      return true;
    }

    /**
     * Applies a state update, triggering a re-render check of the component as
     * well as any other components sharing the same state. This is the primary
     * means of updating the DOM in a Panel application.
     * @param {object} [stateUpdate={}] - keys and values of entries to update in
     * the component's state object
     * @example
     * myWidget.update({name: 'Bob'});
     */

  }, {
    key: 'update',
    value: function update() {
      var stateUpdate = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this._updateStore(stateUpdate, { store: 'state', cascade: this.isStateShared });
    }

    /**
     * Applies a state update specifically to app state shared across components.
     * In apps which don't specify `appState` in the root component config, all
     * state is shared across all parent and child components and the standard
     * update() method should be used instead.
     * @param {object} [stateUpdate={}] - keys and values of entries to update in
     * the app's appState object
     * @example
     * myWidget.updateApp({name: 'Bob'});
     */

  }, {
    key: 'updateApp',
    value: function updateApp() {
      var stateUpdate = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return this._updateStore(stateUpdate, { store: 'appState', cascade: true });
    }
  }, {
    key: 'config',


    /**
     * Defines standard component configuration.
     * @type {object}
     * @property {function} template - function transforming state object to virtual dom tree
     * @property {object} [helpers={}] - properties and functions injected automatically into template state object
     * @property {object} [routes={}] - object mapping string route expressions to handler functions
     * @property {object} [appState={}] - (app root component only) state object to share with nested descendant components;
     * if not set, root component shares entire state object with all descendants
     * @property {object} [defaultState={}] - default entries for component state
     * @property {object} [hooks={}] - extra rendering/lifecycle callbacks
     * @property {function} [hooks.preUpdate] - called before an update is applied
     * @property {function} [hooks.postUpdate] - called after an update is applied
     * @property {boolean} [updateSync=false] - whether to apply updates to DOM
     * immediately, instead of batching to one update per frame
     * @property {boolean} [useShadowDom=false] - whether to use Shadow DOM
     * @property {string} [css=''] - component-specific Shadow DOM stylesheet
     * @example
     * get config() {
     *   return {
     *     template: state => h('.name', `My name is ${name}`),
     *     routes: {
     *       'wombat/:wombatId': (stateUpdate={}, wombatId) => {
     *         // route handler implementation
     *       },
     *     },
     *   };
     * }
     */
    get: function get() {
      return {};
    }

    /**
     * Template helper functions defined in config object, and exposed to template code
     * as $helpers. This getter uses the component's internal config cache.
     * @type {object}
     * @example
     * {
     *   myHelper: () => 'some return value',
     * }
     */

  }, {
    key: 'helpers',
    get: function get() {
      return this.getConfig('helpers');
    }
  }]);

  function Component() {
    _classCallCheck(this, Component);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this));

    _this.panelID = (0, _cuid2.default)();
    _this._config = Object.assign({}, {
      css: '',
      helpers: {},
      routes: {},
      template: function template() {
        throw Error('No template provided by Component subclass');
      },
      updateSync: false,
      useShadowDom: false
    }, _this.config);

    // initialize shared state store, either in `appState` or default to `state`
    // appState and isStateShared of child components will be overwritten by parent/root
    // when the component is connected to the hierarchy
    _this.state = {};
    _this.appState = _this.getConfig('appState');
    if (!_this.appState) {
      _this.appState = {};
      _this.isStateShared = true;
    } else {
      _this.isStateShared = false;
    }

    if (_this.getConfig('useShadowDom')) {
      _this.el = _this.attachShadow({ mode: 'open' });
      _this.styleTag = document.createElement('style');
      _this.styleTag.innerHTML = _this.getConfig('css');
      _this.el.appendChild(_this.styleTag);
    } else if (_this.getConfig('css')) {
      throw Error('"useShadowDom" config option must be set in order to use "css" config.');
    } else {
      _this.el = _this;
    }
    return _this;
  }

  _createClass(Component, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (this.initialized) {
        return;
      }

      // Prevent re-entrant calls to connectedCallback.
      // This can happen in some (probably erroneous) cases with Firefox+polyfills.
      if (this.initializing) {
        return;
      }
      this.initializing = true;

      this.$panelChildren = new Set();

      if (typeof this.$panelParentID !== 'undefined') {
        this.isPanelChild = true;
        // find $panelParent
        for (var node = this.parentNode; node && !this.$panelParent; node = node.parentNode) {
          if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
            // handle shadow-root
            node = node.host;
          }
          if (node.panelID === this.$panelParentID) {
            this.$panelParent = node;
            this.$panelRoot = node.$panelRoot;
          }
        }
        if (!this.$panelParent) {
          throw Error('panelParent ' + this.$panelParentID + ' not found');
        }
        this.$panelParent.$panelChildren.add(this);

        // share either appState or all of state
        Object.assign(this.$panelRoot.appState, this.appState); // flush any queued appState changes
        this.appState = this.$panelRoot.appState;
        this.isStateShared = this.$panelRoot.isStateShared;
        this.state = this.isStateShared ? this.$panelRoot.state : {};
      } else {
        this.isPanelRoot = true;
        this.$panelRoot = this;
        this.$panelParent = null;
      }
      this.app = this.$panelRoot;

      var newState = Object.assign({}, this.getConfig('defaultState'), this.state, this.getJSONAttribute('data-state'), this._stateFromAttributes());
      Object.assign(this.state, newState);

      if (Object.keys(this.getConfig('routes')).length) {
        this.router = new _router2.default(this, { historyMethod: this.historyMethod });
        this.navigate(window.location.hash);
      }

      this.domPatcher = new _domPatcher.DOMPatcher(this.state, this._render.bind(this), {
        updateMode: this.getConfig('updateSync') ? 'sync' : 'async'
      });
      this.el.appendChild(this.domPatcher.el);
      this.initialized = true;
      this.initializing = false;
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (!this.initialized) {
        return;
      }

      if (this.$panelParent) {
        this.$panelParent.$panelChildren.delete(this);
      }
      if (this.domPatcher) {
        this.el.removeChild(this.domPatcher.el);
      }
      this.domPatcher = null;
      this.initialized = false;
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === 'style-override') {
        this._applyStyles(newVal);
      }
      if (this.isPanelRoot && this.initialized) {
        this.update();
      }
    }
  }, {
    key: '_applyStyles',
    value: function _applyStyles(styleOverride) {
      if (this.getConfig('useShadowDom')) {
        this.styleTag.innerHTML = this.getConfig('css') + (styleOverride || '');
      }
    }
  }, {
    key: 'logError',
    value: function logError() {
      var _console;

      (_console = console).error.apply(_console, arguments);
    }
  }, {
    key: 'toString',
    value: function toString() {
      try {
        return this.tagName + '#' + this.panelID;
      } catch (e) {
        return 'UNKNOWN COMPONENT';
      }
    }
  }, {
    key: '_render',
    value: function _render(state) {
      if (this.shouldUpdate(state)) {
        try {
          this._rendered = this.getConfig('template')(Object.assign({}, state, {
            $app: this.appState,
            $component: this,
            $helpers: this.helpers
          }));
        } catch (e) {
          this.logError('Error while rendering ' + this.toString(), this, e.stack);
        }
      }
      return this._rendered || _domPatcher.EMPTY_DIV;
    }

    // run a user-defined hook with the given params, if configured
    // cascade down tree hierarchy if option is set

  }, {
    key: 'runHook',
    value: function runHook(hookName, options) {
      if (!this.initialized) {
        return;
      }

      var hook = (this.getConfig('hooks') || {})[hookName];

      for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }

      if (hook) {
        hook.apply(undefined, params);
      }
      if (options.cascade) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.$panelChildren[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;

            if (options.exclude !== child) {
              child.runHook.apply(child, [hookName, options].concat(params));
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: '_stateFromAttributes',
    value: function _stateFromAttributes() {
      var state = {};

      // this.attributes is a NamedNodeMap, without normal iterators
      for (var ai = 0; ai < this.attributes.length; ai++) {
        var attr = this.attributes[ai];
        var attrMatch = attr.name.match(/^state-(.+)/);
        if (attrMatch) {
          var num = Number(attr.value);
          state[attrMatch[1]] = isNaN(num) ? attr.value : num;
        }
      }

      return state;
    }

    // update helpers

    // Update a given state store (this.state or this.appState), with option
    // to 'cascade' the update across other linked components

  }, {
    key: '_updateStore',
    value: function _updateStore(stateUpdate) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var cascade = options.cascade;
      var store = options.store;

      if (!this.initialized) {

        // just update store without patching DOM etc
        Object.assign(this[store], stateUpdate);
      } else {

        // update DOM, router, descendants etc.
        var updateHash = '$fragment' in stateUpdate && stateUpdate.$fragment !== this[store].$fragment;
        var cascadeFromRoot = cascade && !this.isPanelRoot;
        var updateOptions = { cascade: cascade, store: store };
        var rootOptions = { exclude: this, cascade: cascade, store: store };

        this.runHook('preUpdate', updateOptions, stateUpdate);
        if (cascadeFromRoot) {
          this.$panelRoot.runHook('preUpdate', rootOptions, stateUpdate);
        }

        this.updateSelfAndChildren(stateUpdate, updateOptions);
        if (cascadeFromRoot) {
          this.$panelRoot.updateSelfAndChildren(stateUpdate, rootOptions);
        }
        if (updateHash) {
          this.router.replaceHash(this[store].$fragment);
        }

        this.runHook('postUpdate', updateOptions, stateUpdate);
        if (cascadeFromRoot) {
          this.$panelRoot.runHook('postUpdate', rootOptions, stateUpdate);
        }
      }
    }

    // Apply the given update down the component hierarchy from this node,
    // optionally excluding one node's subtree. This is useful for applying
    // a full state update to one component while sending only "shared" state
    // updates to the app root.

  }, {
    key: 'updateSelfAndChildren',
    value: function updateSelfAndChildren(stateUpdate) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      if (!this.initialized) {
        return;
      }

      var store = options.store;
      var cascade = options.cascade;

      Object.assign(this[store], stateUpdate);
      if (store !== 'state' || this.shouldUpdate(this[store])) {
        this.domPatcher.update(this.state);

        if (cascade) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.$panelChildren[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var child = _step2.value;

              if (options.exclude !== child) {
                child.updateSelfAndChildren(stateUpdate, options);
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['style-override'];
    }
  }]);

  return Component;
}(_webcomponent2.default);

exports.default = Component;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vnode_1 = __webpack_require__(5);
var is = __webpack_require__(6);
function addNS(data, children, sel) {
    data.ns = 'http://www.w3.org/2000/svg';
    if (sel !== 'foreignObject' && children !== undefined) {
        for (var i = 0; i < children.length; ++i) {
            var childData = children[i].data;
            if (childData !== undefined) {
                addNS(childData, children[i].children, children[i].sel);
            }
        }
    }
}
function h(sel, b, c) {
    var data = {}, children, text, i;
    if (c !== undefined) {
        data = b;
        if (is.array(c)) {
            children = c;
        }
        else if (is.primitive(c)) {
            text = c;
        }
        else if (c && c.sel) {
            children = [c];
        }
    }
    else if (b !== undefined) {
        if (is.array(b)) {
            children = b;
        }
        else if (is.primitive(b)) {
            text = b;
        }
        else if (b && b.sel) {
            children = [b];
        }
        else {
            data = b;
        }
    }
    if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
            if (is.primitive(children[i]))
                children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i]);
        }
    }
    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
        addNS(data, children, sel);
    }
    return vnode_1.vnode(sel, data, children, text, undefined);
}
exports.h = h;
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = h;
//# sourceMappingURL=h.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function vnode(sel, data, children, text, elm) {
    var key = data === undefined ? undefined : data.key;
    return { sel: sel, data: data, children: children,
        text: text, elm: elm, key: key };
}
exports.vnode = vnode;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = vnode;
//# sourceMappingURL=vnode.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.array = Array.isArray;
function primitive(s) {
    return typeof s === 'string' || typeof s === 'number';
}
exports.primitive = primitive;
//# sourceMappingURL=is.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * StateStore stores state and allows an observer to subscribe to state updates
 */

var StateStore = function () {
  function StateStore() {
    _classCallCheck(this, StateStore);

    this._listeners = [];
    this._state = {};
  }

  _createClass(StateStore, [{
    key: "update",
    value: function update(props) {
      // Always create a new state object.
      // if lastState === newState then state hasn't changed
      this._state = Object.assign({}, this._state, props);
      this._listeners.forEach(function (listener) {
        return listener(props);
      });
    }
  }, {
    key: "subscribeUpdates",
    value: function subscribeUpdates(listener) {
      this._listeners.push(listener);
    }
  }, {
    key: "unsubscribeUpdates",
    value: function unsubscribeUpdates(listener) {
      this._listeners = this._listeners.filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "state",
    get: function get() {
      return this._state;
    }
  }]);

  return StateStore;
}();

exports.default = StateStore;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

/*global window, navigator, document, require, process, module */
(function (app) {
  'use strict';
  var namespace = 'cuid',
    c = 0,
    blockSize = 4,
    base = 36,
    discreteValues = Math.pow(base, blockSize),

    pad = function pad(num, size) {
      var s = "000000000" + num;
      return s.substr(s.length-size);
    },

    randomBlock = function randomBlock() {
      return pad((Math.random() *
            discreteValues << 0)
            .toString(base), blockSize);
    },

    safeCounter = function () {
      c = (c < discreteValues) ? c : 0;
      c++; // this is not subliminal
      return c - 1;
    },

    api = function cuid() {
      // Starting with a lowercase letter makes
      // it HTML element ID friendly.
      var letter = 'c', // hard-coded allows for sequential access

        // timestamp
        // warning: this exposes the exact date and time
        // that the uid was created.
        timestamp = (new Date().getTime()).toString(base),

        // Prevent same-machine collisions.
        counter,

        // A few chars to generate distinct ids for different
        // clients (so different computers are far less
        // likely to generate the same id)
        fingerprint = api.fingerprint(),

        // Grab some more chars from Math.random()
        random = randomBlock() + randomBlock();

        counter = pad(safeCounter().toString(base), blockSize);

      return  (letter + timestamp + counter + fingerprint + random);
    };

  api.slug = function slug() {
    var date = new Date().getTime().toString(36),
      counter,
      print = api.fingerprint().slice(0,1) +
        api.fingerprint().slice(-1),
      random = randomBlock().slice(-2);

      counter = safeCounter().toString(36).slice(-4);

    return date.slice(-2) +
      counter + print + random;
  };

  api.globalCount = function globalCount() {
    // We want to cache the results of this
    var cache = (function calc() {
        var i,
          count = 0;

        for (i in window) {
          count++;
        }

        return count;
      }());

    api.globalCount = function () { return cache; };
    return cache;
  };

  api.fingerprint = function browserPrint() {
    return pad((navigator.mimeTypes.length +
      navigator.userAgent.length).toString(36) +
      api.globalCount().toString(36), 4);
  };

  // don't change anything from here down.
  if (app.register) {
    app.register(namespace, api);
  } else if (true) {
    module.exports = api;
  } else {
    app[namespace] = api;
  }

}(this.applitude || this));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = baseRest(function(object, props) {
  return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
});

module.exports = pick;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extendableHtmlElement = __webpack_require__(11);

var _extendableHtmlElement2 = _interopRequireDefault(_extendableHtmlElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// WebComponent = thin wrapper around HTMLElement with convenience methods
var WebComponent = function (_ExtendableHTMLElemen) {
  _inherits(WebComponent, _ExtendableHTMLElemen);

  function WebComponent() {
    _classCallCheck(this, WebComponent);

    return _possibleConstructorReturn(this, (WebComponent.__proto__ || Object.getPrototypeOf(WebComponent)).apply(this, arguments));
  }

  _createClass(WebComponent, [{
    key: 'getJSONAttribute',


    // parse an attribute which has been serialized as JSON
    // pass an optional errorHandler in case JSON.parse() fails
    value: function getJSONAttribute(attrName) {
      var errorHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return null;
      };

      try {
        return JSON.parse(this.getAttribute(attrName));
      } catch (e) {
        return errorHandler(attrName, e);
      }
    }

    // check whether a boolean attribute is 'enabled' in an element instance
    // taking into account usages such as:
    // <my-element myattr="true">    -> enabled
    // <my-element myattr>           -> enabled
    // <my-element myattr="myattr">  -> enabled
    // <my-element myattr="false">   -> disabled
    // <my-element>                  -> disabled

  }, {
    key: 'isAttributeEnabled',
    value: function isAttributeEnabled(attrName) {
      var attrVal = this.getAttribute(attrName);
      return typeof attrVal === 'string' && ['', 'true', attrName.toLowerCase()].indexOf(attrVal.toLowerCase()) !== -1;
    }
  }]);

  return WebComponent;
}(_extendableHtmlElement2.default);

exports.default = WebComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Various shims and patches for HTMLElement to work around problems
 * of inheritance in different browsers and transpilation configurations.
 * @module extendable-html-element
 */

var ExtendableHTMLElement = void 0;

// shim HTMLElement if necessary
// Safari breaks when attempting to inherit from HTMLElement
// Babel marked as wontfix because, well, it's not really
// a language issue: https://phabricator.babeljs.io/T1548
if (typeof HTMLElement !== 'function') {
  var _HTMLElement = function _HTMLElement() {};
  _HTMLElement.prototype = HTMLElement.prototype;
  HTMLElement = _HTMLElement;
}

if (typeof Reflect === 'undefined') {

  // fix for Safari 9 "HTMLElementConstructor is not a constructor"
  // adapted from https://github.com/webcomponents/webcomponentsjs/issues/755#issuecomment-332354121
  var setProto = function setProto(A, B) {
    A.prototype = Object.create(B.prototype, {
      constructor: {
        configurable: true,
        writable: true,
        value: A
      }
    });
  };

  ExtendableHTMLElement = function ExtendableHTMLElement(self) {
    self = HTMLElement.call(self || this);
    return self;
  };
  setProto(ExtendableHTMLElement, HTMLElement);
} else {

  // Babel 6's class inheritance does not play entirely well
  // with HTMLElement (and other native classes), which shows up
  // in the implementation of customElements.define()
  // see https://github.com/babel/babel/issues/4480
  // this patch is adapted from
  // https://github.com/github/babel-plugin-transform-custom-element-classes/blob/f5067aa/lib/index.js#L4-L6
  ExtendableHTMLElement = function ExtendableHTMLElement() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
  };
  Object.setPrototypeOf(ExtendableHTMLElement.prototype, HTMLElement.prototype);
  Object.setPrototypeOf(ExtendableHTMLElement, HTMLElement);
}

exports.default = ExtendableHTMLElement;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vnode_1 = __webpack_require__(5);
var is = __webpack_require__(6);
var htmldomapi_1 = __webpack_require__(13);
function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }
var emptyNode = vnode_1.default('', {}, [], undefined, undefined);
function sameVnode(vnode1, vnode2) {
    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}
function isVnode(vnode) {
    return vnode.sel !== undefined;
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, map = {}, key;
    for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (key !== undefined)
            map[key] = i;
    }
    return map;
}
var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];
var h_1 = __webpack_require__(3);
exports.h = h_1.h;
var thunk_1 = __webpack_require__(14);
exports.thunk = thunk_1.thunk;
function init(modules, domApi) {
    var i, j, cbs = {};
    var api = domApi !== undefined ? domApi : htmldomapi_1.default;
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
            if (modules[j][hooks[i]] !== undefined)
                cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
    }
    function emptyNodeAt(elm) {
        var id = elm.id ? '#' + elm.id : '';
        var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
        return vnode_1.default(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        return function rmCb() {
            if (--listeners === 0) {
                var parent_1 = api.parentNode(childElm);
                api.removeChild(parent_1, childElm);
            }
        };
    }
    function createElm(vnode, insertedVnodeQueue) {
        var i, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.init)) {
                i(vnode);
                data = vnode.data;
            }
        }
        var children = vnode.children, sel = vnode.sel;
        if (sel !== undefined) {
            // Parse selector
            var hashIdx = sel.indexOf('#');
            var dotIdx = sel.indexOf('.', hashIdx);
            var hash = hashIdx > 0 ? hashIdx : sel.length;
            var dot = dotIdx > 0 ? dotIdx : sel.length;
            var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
            var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
                : api.createElement(tag);
            if (hash < dot)
                elm.id = sel.slice(hash + 1, dot);
            if (dotIdx > 0)
                elm.className = sel.slice(dot + 1).replace(/\./g, ' ');
            if (is.array(children)) {
                for (i = 0; i < children.length; ++i) {
                    api.appendChild(elm, createElm(children[i], insertedVnodeQueue));
                }
            }
            else if (is.primitive(vnode.text)) {
                api.appendChild(elm, api.createTextNode(vnode.text));
            }
            for (i = 0; i < cbs.create.length; ++i)
                cbs.create[i](emptyNode, vnode);
            i = vnode.data.hook; // Reuse variable
            if (isDef(i)) {
                if (i.create)
                    i.create(emptyNode, vnode);
                if (i.insert)
                    insertedVnodeQueue.push(vnode);
            }
        }
        else {
            vnode.elm = api.createTextNode(vnode.text);
        }
        return vnode.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            api.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
        }
    }
    function invokeDestroyHook(vnode) {
        var i, j, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.destroy))
                i(vnode);
            for (i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
            if (vnode.children !== undefined) {
                for (j = 0; j < vnode.children.length; ++j) {
                    i = vnode.children[j];
                    if (typeof i !== "string") {
                        invokeDestroyHook(i);
                    }
                }
            }
        }
    }
    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var i_1 = void 0, listeners = void 0, rm = void 0, ch = vnodes[startIdx];
            if (isDef(ch)) {
                if (isDef(ch.sel)) {
                    invokeDestroyHook(ch);
                    listeners = cbs.remove.length + 1;
                    rm = createRmCb(ch.elm, listeners);
                    for (i_1 = 0; i_1 < cbs.remove.length; ++i_1)
                        cbs.remove[i_1](ch, rm);
                    if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
                        i_1(ch, rm);
                    }
                    else {
                        rm();
                    }
                }
                else {
                    api.removeChild(parentElm, ch.elm);
                }
            }
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
        var oldStartIdx = 0, newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx;
        var idxInOld;
        var elmToMove;
        var before;
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (isUndef(oldStartVnode)) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
            }
            else if (isUndef(oldEndVnode)) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (oldKeyToIdx === undefined) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = oldKeyToIdx[newStartVnode.key];
                if (isUndef(idxInOld)) {
                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    newStartVnode = newCh[++newStartIdx];
                }
                else {
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) {
                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    }
                    else {
                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                        oldCh[idxInOld] = undefined;
                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                    }
                    newStartVnode = newCh[++newStartIdx];
                }
            }
        }
        if (oldStartIdx > oldEndIdx) {
            before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
            addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
        }
        else if (newStartIdx > newEndIdx) {
            removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
        var i, hook;
        if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
            i(oldVnode, vnode);
        }
        var elm = vnode.elm = oldVnode.elm, oldCh = oldVnode.children, ch = vnode.children;
        if (oldVnode === vnode)
            return;
        if (isDef(vnode.data)) {
            for (i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            i = vnode.data.hook;
            if (isDef(i) && isDef(i = i.update))
                i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            }
            else if (isDef(ch)) {
                if (isDef(oldVnode.text))
                    api.setTextContent(elm, '');
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (isDef(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            }
            else if (isDef(oldVnode.text)) {
                api.setTextContent(elm, '');
            }
        }
        else if (oldVnode.text !== vnode.text) {
            api.setTextContent(elm, vnode.text);
        }
        if (isDef(hook) && isDef(i = hook.postpatch)) {
            i(oldVnode, vnode);
        }
    }
    return function patch(oldVnode, vnode) {
        var i, elm, parent;
        var insertedVnodeQueue = [];
        for (i = 0; i < cbs.pre.length; ++i)
            cbs.pre[i]();
        if (!isVnode(oldVnode)) {
            oldVnode = emptyNodeAt(oldVnode);
        }
        if (sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue);
        }
        else {
            elm = oldVnode.elm;
            parent = api.parentNode(elm);
            createElm(vnode, insertedVnodeQueue);
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
            }
        }
        for (i = 0; i < insertedVnodeQueue.length; ++i) {
            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
        }
        for (i = 0; i < cbs.post.length; ++i)
            cbs.post[i]();
        return vnode;
    };
}
exports.init = init;
//# sourceMappingURL=snabbdom.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function createElement(tagName) {
    return document.createElement(tagName);
}
function createElementNS(namespaceURI, qualifiedName) {
    return document.createElementNS(namespaceURI, qualifiedName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(elm) {
    return elm.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
exports.htmlDomApi = {
    createElement: createElement,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.htmlDomApi;
//# sourceMappingURL=htmldomapi.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var h_1 = __webpack_require__(3);
function copyToThunk(vnode, thunk) {
    thunk.elm = vnode.elm;
    vnode.data.fn = thunk.data.fn;
    vnode.data.args = thunk.data.args;
    thunk.data = vnode.data;
    thunk.children = vnode.children;
    thunk.text = vnode.text;
    thunk.elm = vnode.elm;
}
function init(thunk) {
    var cur = thunk.data;
    var vnode = cur.fn.apply(undefined, cur.args);
    copyToThunk(vnode, thunk);
}
function prepatch(oldVnode, thunk) {
    var i, old = oldVnode.data, cur = thunk.data;
    var oldArgs = old.args, args = cur.args;
    if (old.fn !== cur.fn || oldArgs.length !== args.length) {
        copyToThunk(cur.fn.apply(undefined, args), thunk);
    }
    for (i = 0; i < args.length; ++i) {
        if (oldArgs[i] !== args[i]) {
            copyToThunk(cur.fn.apply(undefined, args), thunk);
            return;
        }
    }
    copyToThunk(oldVnode, thunk);
}
exports.thunk = function thunk(sel, key, fn, args) {
    if (args === undefined) {
        args = fn;
        fn = key;
        key = undefined;
    }
    return h_1.h(sel, {
        key: key,
        hook: { init: init, prepatch: prepatch },
        fn: fn,
        args: args
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.thunk;
//# sourceMappingURL=thunk.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NamespaceURIs = {
    "xlink": "http://www.w3.org/1999/xlink"
};
var booleanAttrs = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "compact", "controls", "declare",
    "default", "defaultchecked", "defaultmuted", "defaultselected", "defer", "disabled", "draggable",
    "enabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "itemscope", "loop", "multiple",
    "muted", "nohref", "noresize", "noshade", "novalidate", "nowrap", "open", "pauseonexit", "readonly",
    "required", "reversed", "scoped", "seamless", "selected", "sortable", "spellcheck", "translate",
    "truespeed", "typemustmatch", "visible"];
var booleanAttrsDict = Object.create(null);
for (var i = 0, len = booleanAttrs.length; i < len; i++) {
    booleanAttrsDict[booleanAttrs[i]] = true;
}
function updateAttrs(oldVnode, vnode) {
    var key, cur, old, elm = vnode.elm, oldAttrs = oldVnode.data.attrs, attrs = vnode.data.attrs, namespaceSplit;
    if (!oldAttrs && !attrs)
        return;
    oldAttrs = oldAttrs || {};
    attrs = attrs || {};
    // update modified attributes, add new attributes
    for (key in attrs) {
        cur = attrs[key];
        old = oldAttrs[key];
        if (old !== cur) {
            if (!cur && booleanAttrsDict[key])
                elm.removeAttribute(key);
            else {
                namespaceSplit = key.split(":");
                if (namespaceSplit.length > 1 && NamespaceURIs.hasOwnProperty(namespaceSplit[0]))
                    elm.setAttributeNS(NamespaceURIs[namespaceSplit[0]], key, cur);
                else
                    elm.setAttribute(key, cur);
            }
        }
    }
    //remove removed attributes
    // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
    // the other option is to remove all attributes with value == undefined
    for (key in oldAttrs) {
        if (!(key in attrs)) {
            elm.removeAttribute(key);
        }
    }
}
exports.attributesModule = { create: updateAttrs, update: updateAttrs };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.attributesModule;
//# sourceMappingURL=attributes.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function updateDataset(oldVnode, vnode) {
    var elm = vnode.elm, oldDataset = oldVnode.data.dataset, dataset = vnode.data.dataset, key;
    if (!oldDataset && !dataset)
        return;
    oldDataset = oldDataset || {};
    dataset = dataset || {};
    for (key in oldDataset) {
        if (!dataset[key]) {
            delete elm.dataset[key];
        }
    }
    for (key in dataset) {
        if (oldDataset[key] !== dataset[key]) {
            elm.dataset[key] = dataset[key];
        }
    }
}
exports.datasetModule = { create: updateDataset, update: updateDataset };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.datasetModule;
//# sourceMappingURL=dataset.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var raf = (typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame) || setTimeout;

function addOrRemoveClass(el, className, add) {
  el.classList[add ? 'add' : 'remove'](className);
}

function nextFrame(fn) {
  raf(function() {
    raf(fn);
  });
}

function changeClassNextFrame(el, className, add) {
  nextFrame(function() {
    addOrRemoveClass(el, className, add);
  });
}

function updateClass(oldVnode, newVnode) {
  var el = newVnode.elm;
  var oldClass = oldVnode.data.class;
  var newClass = newVnode.data.class;

  if (!oldClass && !newClass) {
    return;
  }
  oldClass = oldClass || {};
  newClass = newClass || {};

  // remove classes which are no longer in vnode class obj
  for (var name in oldClass) {
    if (!(name in newClass)) {
      el.classList.remove(name);
    }
  }

  // handle new classes, taking into account special delayed classes
  var oldHasDelay = 'delayed' in oldClass;
  for (var name in newClass) {
    var val = newClass[name];

    if (typeof val === 'object') {

      // special 'delayed'/'remove' class objects
      if (name === 'delayed') {
        for (var delayedName in val) {
          var delayedVal = val[delayedName];
          if (!oldHasDelay || delayedVal !== oldClass.delayed[delayedName]) {
            changeClassNextFrame(el, delayedName, delayedVal);
          }
        }
      }

    } else if (val !== oldClass[name]) {

      // normal class string, handle immediately
      addOrRemoveClass(el, name, val);

    }
  }
}

function applyDestroyClass(vnode) {
  var classObj = vnode.data.class;
  var onDestroy = classObj && classObj.destroy;
  if (typeof onDestroy !== 'object') {
    return;
  }

  var el = vnode.elm;
  for (var name in onDestroy) {
    addOrRemoveClass(el, name, onDestroy[name]);
  }
}

function applyRemoveClass(vnode, rmFunc) {
  var classObj = vnode.data.class;
  var onRemove = classObj && classObj.remove;
  if (typeof onRemove !== 'object') {
    rmFunc();
    return;
  }

  var el = vnode.elm;
  var delayRemove = 0;
  for (var name in onRemove) {
    var val = onRemove[name];
    if (name === 'delayRemove') {
      delayRemove = val;
    } else {
      addOrRemoveClass(el, name, val);
    }
  }

  setTimeout(rmFunc, delayRemove);
}

module.exports = {
  create:  updateClass,
  update:  updateClass,
  destroy: applyDestroyClass,
  remove:  applyRemoveClass,
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function invokeHandler(handler, vnode, event) {
    if (typeof handler === "function") {
        // call function handler
        handler.call(vnode, event, vnode);
    }
    else if (typeof handler === "object") {
        // call handler with arguments
        if (typeof handler[0] === "function") {
            // special case for single argument for performance
            if (handler.length === 2) {
                handler[0].call(vnode, handler[1], event, vnode);
            }
            else {
                var args = handler.slice(1);
                args.push(event);
                args.push(vnode);
                handler[0].apply(vnode, args);
            }
        }
        else {
            // call multiple handlers
            for (var i = 0; i < handler.length; i++) {
                invokeHandler(handler[i]);
            }
        }
    }
}
function handleEvent(event, vnode) {
    var name = event.type, on = vnode.data.on;
    // call event handler(s) if exists
    if (on && on[name]) {
        invokeHandler(on[name], vnode, event);
    }
}
function createListener() {
    return function handler(event) {
        handleEvent(event, handler.vnode);
    };
}
function updateEventListeners(oldVnode, vnode) {
    var oldOn = oldVnode.data.on, oldListener = oldVnode.listener, oldElm = oldVnode.elm, on = vnode && vnode.data.on, elm = (vnode && vnode.elm), name;
    // optimization for reused immutable handlers
    if (oldOn === on) {
        return;
    }
    // remove existing listeners which no longer used
    if (oldOn && oldListener) {
        // if element changed or deleted we remove all existing listeners unconditionally
        if (!on) {
            for (name in oldOn) {
                // remove listener if element was changed or existing listeners removed
                oldElm.removeEventListener(name, oldListener, false);
            }
        }
        else {
            for (name in oldOn) {
                // remove listener if existing listener removed
                if (!on[name]) {
                    oldElm.removeEventListener(name, oldListener, false);
                }
            }
        }
    }
    // add new listeners which has not already attached
    if (on) {
        // reuse existing listener or create new
        var listener = vnode.listener = oldVnode.listener || createListener();
        // update vnode for listener
        listener.vnode = vnode;
        // if element changed or added we add all needed listeners unconditionally
        if (!oldOn) {
            for (name in on) {
                // add listener if element was changed or new listeners added
                elm.addEventListener(name, listener, false);
            }
        }
        else {
            for (name in on) {
                // add listener if new listener added
                if (!oldOn[name]) {
                    elm.addEventListener(name, listener, false);
                }
            }
        }
    }
}
exports.eventListenersModule = {
    create: updateEventListeners,
    update: updateEventListeners,
    destroy: updateEventListeners
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.eventListenersModule;
//# sourceMappingURL=eventlisteners.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function updateProps(oldVnode, vnode) {
    var key, cur, old, elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;
    if (!oldProps && !props)
        return;
    oldProps = oldProps || {};
    props = props || {};
    for (key in oldProps) {
        if (!props[key]) {
            delete elm[key];
        }
    }
    for (key in props) {
        cur = props[key];
        old = oldProps[key];
        if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
            elm[key] = cur;
        }
    }
}
exports.propsModule = { create: updateProps, update: updateProps };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.propsModule;
//# sourceMappingURL=props.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function (fn) { raf(function () { raf(fn); }); };
function setNextFrame(obj, prop, val) {
    nextFrame(function () { obj[prop] = val; });
}
function updateStyle(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldStyle = oldVnode.data.style, style = vnode.data.style;
    if (!oldStyle && !style)
        return;
    oldStyle = oldStyle || {};
    style = style || {};
    var oldHasDel = 'delayed' in oldStyle;
    for (name in oldStyle) {
        if (!style[name]) {
            if (name.startsWith('--')) {
                elm.style.removeProperty(name);
            }
            else {
                elm.style[name] = '';
            }
        }
    }
    for (name in style) {
        cur = style[name];
        if (name === 'delayed') {
            for (name in style.delayed) {
                cur = style.delayed[name];
                if (!oldHasDel || cur !== oldStyle.delayed[name]) {
                    setNextFrame(elm.style, name, cur);
                }
            }
        }
        else if (name !== 'remove' && cur !== oldStyle[name]) {
            if (name.startsWith('--')) {
                elm.style.setProperty(name, cur);
            }
            else {
                elm.style[name] = cur;
            }
        }
    }
}
function applyDestroyStyle(vnode) {
    var style, name, elm = vnode.elm, s = vnode.data.style;
    if (!s || !(style = s.destroy))
        return;
    for (name in style) {
        elm.style[name] = style[name];
    }
}
function applyRemoveStyle(vnode, rm) {
    var s = vnode.data.style;
    if (!s || !s.remove) {
        rm();
        return;
    }
    var name, elm = vnode.elm, i = 0, compStyle, style = s.remove, amount = 0, applied = [];
    for (name in style) {
        applied.push(name);
        elm.style[name] = style[name];
    }
    compStyle = getComputedStyle(elm);
    var props = compStyle['transition-property'].split(', ');
    for (; i < props.length; ++i) {
        if (applied.indexOf(props[i]) !== -1)
            amount++;
    }
    elm.addEventListener('transitionend', function (ev) {
        if (ev.target === elm)
            --amount;
        if (amount === 0)
            rm();
    });
}
exports.styleModule = {
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.styleModule;
//# sourceMappingURL=style.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// just the necessary bits of Backbone router+history

var Router = function () {
  function Router(app) {
    var _this = this;

    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Router);

    // allow injecting window dep
    var routerWindow = this.window = options.window || window;

    this.app = app;
    var routeDefs = this.app.getConfig('routes');

    // https://github.com/jashkenas/backbone/blob/d682061a/backbone.js#L1476-L1479
    // Cached regular expressions for matching named param parts and splatted
    // parts of route strings.
    var optionalParam = /\((.*?)\)/g;
    var namedParam = /(\(\?)?:\w+/g;
    var splatParam = /\*\w+/g;
    var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    this.compiledRoutes = Object.keys(routeDefs).map(function (routeExpr) {
      // https://github.com/jashkenas/backbone/blob/d682061a/backbone.js#L1537-L1547
      var expr = routeExpr.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
        return optional ? match : '([^/?]+)';
      }).replace(splatParam, '([^?]*?)');
      expr = new RegExp('^' + expr + '(?:\\?([\\s\\S]*))?$');

      // hook up route handler function
      var handler = routeDefs[routeExpr];
      if (typeof handler === 'string') {
        // reference to another handler rather than its own function
        handler = routeDefs[handler];
      }

      return { expr: expr, handler: handler };
    });

    var navigateToHash = function navigateToHash() {
      return _this.navigate(routerWindow.location.hash);
    };
    routerWindow.addEventListener('popstate', function () {
      return navigateToHash();
    });

    this.historyMethod = options.historyMethod || 'pushState';
    var origChangeState = routerWindow.history[this.historyMethod];
    routerWindow.history[this.historyMethod] = function () {
      origChangeState.apply(routerWindow.history, arguments);
      navigateToHash();
    };
  }

  _createClass(Router, [{
    key: 'navigate',
    value: function navigate(fragment) {
      var _this2 = this;

      var stateUpdate = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      fragment = stripHash(fragment);
      if (fragment === this.app.state.$fragment && !Object.keys(stateUpdate).length) {
        return;
      }

      stateUpdate.$fragment = fragment;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.compiledRoutes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var route = _step.value;

          var matches = route.expr.exec(fragment);
          if (matches) {
            var _ret = function () {
              // extract params
              // https://github.com/jashkenas/backbone/blob/d682061a/backbone.js#L1553-L1558
              var params = matches.slice(1);
              params = params.map(function (param, i) {
                // Don't decode the search params.
                if (i === params.length - 1) {
                  return param || null;
                }
                return param ? decodeURIComponent(param) : null;
              });

              var routeHandler = route.handler;
              if (!routeHandler) {
                throw 'No route handler defined for #' + fragment;
              }
              var routeStateUpdate = routeHandler.call.apply(routeHandler, [_this2.app, stateUpdate].concat(_toConsumableArray(params)));
              if (routeStateUpdate) {
                // don't update if route handler returned a falsey result
                _this2.app.update(Object.assign({}, stateUpdate, routeStateUpdate));
              }
              return {
                v: void 0
              };
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
          }
        }

        // no route matched
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      console.error('No route found matching #' + fragment);
    }
  }, {
    key: 'replaceHash',
    value: function replaceHash(fragment) {
      fragment = stripHash(fragment);
      if (fragment !== stripHash(this.window.location.hash)) {
        this.window.history[this.historyMethod](null, null, '#' + fragment);
      }
    }
  }]);

  return Router;
}();

exports.default = Router;


function stripHash(fragment) {
  return fragment.replace(/^#*/, '');
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controlledComponent = __webpack_require__(23);

var _controlledComponent2 = _interopRequireDefault(_controlledComponent);

var _proxyComponent = __webpack_require__(24);

var _proxyComponent2 = _interopRequireDefault(_proxyComponent);

var _stateController = __webpack_require__(25);

var _stateController2 = _interopRequireDefault(_stateController);

var _stateStore = __webpack_require__(7);

var _stateStore2 = _interopRequireDefault(_stateStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Optional component wrappers and utilities for state management;
 * exported in the main {@link panel} module for convenience.
 * @module component-utils
 * @example
 * // direct top-level import
 * import {ProxyComponent, StateController} from 'panel';
 * // module import
 * import {ComponentUtils} from 'panel';
 * const {ProxyComponent, StateController} = ComponentUtils;
 */

exports.default = {
  /** {@link ControlledComponent} class, to be subclassed by apps */
  ControlledComponent: _controlledComponent2.default,

  /** {@link ProxyComponent} class, to be subclassed by apps */
  ProxyComponent: _proxyComponent2.default,

  /** {@link StateController} class, to be subclassed by apps */
  StateController: _stateController2.default,

  /** A simple subscribable state store */
  StateStore: _stateStore2.default
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

var _domPatcher = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlledComponent = function (_Component) {
  _inherits(ControlledComponent, _Component);

  function ControlledComponent() {
    _classCallCheck(this, ControlledComponent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ControlledComponent).apply(this, arguments));

    _this.controller = _this.getConfig('controller');
    if (!_this.controller) {
      throw Error('"controller" must be set in config of a ControlledComponent');
    }
    // Don't allow component's update directly
    _this._update = _this.update;
    _this.update = function () {
      throw new Error('update() not allowed from component. Use controller');
    };
    _this._updateListener = function () {
      return _this._update();
    };
    _this.controller.subscribeUpdates(_this._updateListener);
    return _this;
  }

  _createClass(ControlledComponent, [{
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (!this.initialized) {
        return;
      }

      _get(Object.getPrototypeOf(ControlledComponent.prototype), 'disconnectedCallback', this).call(this);
      this.controller.unsubscribeUpdates(this._updateListener);
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback() {
      // Do nothing, component should explicitly pass this to controller for an update
      // Super class calls this.update() which will throw an error
    }
  }, {
    key: '_render',
    value: function _render() {
      if (this.shouldUpdate()) {
        try {
          // Pass in $controller to jade.
          // Template should use something like $controller.getDisplayX() to get the state it needs
          this._rendered = this.getConfig('template')({
            $component: this,
            $helpers: this.helpers,
            $controller: this.controller
          });
        } catch (e) {
          this.logError('Error while rendering ' + this.toString(), this, e.stack);
        }
      }
      return this._rendered || _domPatcher.EMPTY_DIV;
    }
  }]);

  return ControlledComponent;
}(_component2.default);

exports.default = ControlledComponent;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(2);

var _component2 = _interopRequireDefault(_component);

var _domPatcher = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Definition of a generic Component which proxies attributes and events
 * between itself and a variable child component.
 *
 * @extends Component
 */

var ProxyComponent = function (_Component) {
  _inherits(ProxyComponent, _Component);

  function ProxyComponent() {
    _classCallCheck(this, ProxyComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProxyComponent).apply(this, arguments));
  }

  _createClass(ProxyComponent, [{
    key: 'getTargetElementTag',


    /**
     * Override to determine which tag to instantiate as the child.
     *
     * This is where all switching logic should go.
     *
     * @returns {string} - tag name of the component to instantiate
     *
     * @example <caption>a URL based feature flag</caption>
     * class MyWidget extends ProxyComponent {
     *   getTargetElementTag() {
     *     if (window.location.search.includes('enable_beta') {
     *       return 'my-widget-v2';
     *     }
     *
     *     return 'my-widget-v1'
     *   }
     * }
     */
    value: function getTargetElementTag() {
      throw new Error('You must override getTargetElementTag().');
    }
  }, {
    key: '_getProxiedEventHandlers',
    value: function _getProxiedEventHandlers() {
      var handler = this.proxyEventHandler.bind(this);
      return this.observedEvents.reduce(function (acc, ev) {
        acc[ev] = handler;
        return acc;
      }, {});
    }

    /**
     * Override this method to stop events from being bubbled through this element.
     * @param {Event} ev - event to check
     * @returns {boolean} whether event should bubble through
     *
     * @example <caption>filter specific events out</caption>
     * class MyWidget extends ProxyComponent {
     *   allowEvent(ev) {
     *     // don't propagate click events for the v2 component
     *     return this.getTargetElementTag() !== `my-widget-v2` && ev.type !== `click`;
     *   }
     * }
     */

  }, {
    key: 'allowEvent',
    value: function allowEvent(ev) {
      return true;
    }

    // Proxied events will be stripped of their native attributes and re-wrapped as CustomEvents. Callers
    // should assume that only `detail` remains intact.

  }, {
    key: 'proxyEventHandler',
    value: function proxyEventHandler(ev) {
      if (!this.allowEvent(ev)) {
        return false;
      }

      if (!ev.bubbles) {
        this.dispatchEvent(new CustomEvent(ev.type, ev));
      }

      return true;
    }

    // Return a map of attributes to pass to the child.

  }, {
    key: 'getAttributes',
    value: function getAttributes() {
      var attributes = {};
      for (var i = 0; i < this.attributes.length; i++) {
        var attr = this.attributes[i];
        attributes[attr.name] = attr.value;
      }

      return attributes;
    }

    /**
     * Defines the names of events which will be emitted by the wrapped component.
     * Bubbling events will bubble through, but non-composed events from ShadowDOM
     * elements will not and will be re-dispatched from the proxy.
     * @type {string[]}
     */

  }, {
    key: 'config',
    get: function get() {
      return Object.assign({
        template: function template(_ref) {
          var $component = _ref.$component;

          return (0, _domPatcher.h)($component.getTargetElementTag(), {
            attrs: $component.getAttributes(),
            on: $component._getProxiedEventHandlers()
          });
        }
      }, this.localConfig);
    }

    /**
     * Override this to extend the default configuration.
     *
     * @see Component#config
     */

  }, {
    key: 'localConfig',
    get: function get() {
      return {};
    }
  }, {
    key: 'observedEvents',
    get: function get() {
      return [];
    }
  }]);

  return ProxyComponent;
}(_component2.default);

exports.default = ProxyComponent;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateStore = __webpack_require__(7);

var _stateStore2 = _interopRequireDefault(_stateStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A StateController manages state for an application or component
 * Subclasses extend this and expose methods that call the controller's _update method
 * Controller will default create its own state store unless one is passed.
 * StateController subclasses should only accept the dependencies they need via constructor
 * This means the dependencies can easily be mocked and unit tested
 */

var StateController = function () {
  // Create's a default store if one isn't given

  function StateController() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$store = _ref.store;
    var store = _ref$store === undefined ? null : _ref$store;

    _classCallCheck(this, StateController);

    this._store = store || new _stateStore2.default();
    this._update(this.defaultState);
  }

  _createClass(StateController, [{
    key: '_update',


    // Discourage external users from using state directly
    value: function _update(props) {
      this._store.update(props);
    }
  }, {
    key: 'subscribeUpdates',
    value: function subscribeUpdates(listener) {
      return this._store.subscribeUpdates(listener);
    }
  }, {
    key: 'unsubscribeUpdates',
    value: function unsubscribeUpdates(listener) {
      return this._store.unsubscribeUpdates(listener);
    }
  }, {
    key: 'defaultState',
    get: function get() {
      return {};
    }
  }, {
    key: 'state',
    get: function get() {
      return this._store.state;
    }
  }]);

  return StateController;
}();

exports.default = StateController;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _panel = __webpack_require__(0);

var _capybara = __webpack_require__(27);

var _capybara2 = _interopRequireDefault(_capybara);

var _doge = __webpack_require__(28);

var _doge2 = _interopRequireDefault(_doge);

var _husky = __webpack_require__(29);

var _husky2 = _interopRequireDefault(_husky);

var _kitty = __webpack_require__(30);

var _kitty2 = _interopRequireDefault(_kitty);

var _llama = __webpack_require__(31);

var _llama2 = _interopRequireDefault(_llama);

var _raccoon = __webpack_require__(32);

var _raccoon2 = _interopRequireDefault(_raccoon);

var _template = __webpack_require__(33);

var _template2 = _interopRequireDefault(_template);

var _styles = __webpack_require__(34);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ANIMAL_URLS = {
  capybara: _capybara2.default,
  doge: _doge2.default,
  husky: _husky2.default,
  kitty: _kitty2.default,
  llama: _llama2.default,
  raccoon: _raccoon2.default
};

var AnimalBadge = function (_Component) {
  _inherits(AnimalBadge, _Component);

  function AnimalBadge() {
    _classCallCheck(this, AnimalBadge);

    return _possibleConstructorReturn(this, (AnimalBadge.__proto__ || Object.getPrototypeOf(AnimalBadge)).apply(this, arguments));
  }

  _createClass(AnimalBadge, [{
    key: 'config',
    get: function get() {
      var _this2 = this;

      return {
        template: _template2.default,
        css: _styles2.default,
        useShadowDom: true,

        helpers: {
          ANIMAL_URLS: ANIMAL_URLS,
          clickClose: function clickClose() {
            return _this2.dispatchEvent(new CustomEvent('close'));
          },
          isCloseable: function isCloseable() {
            return _this2.isAttributeEnabled('closeable');
          },
          isEnteringOrExiting: function isEnteringOrExiting() {
            return _this2.classList.contains('inout');
          }
        }
      };
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return [].concat(_toConsumableArray(_get(AnimalBadge.__proto__ || Object.getPrototypeOf(AnimalBadge), 'observedAttributes', this)), ['animal', 'class', 'closeable']);
    }
  }]);

  return AnimalBadge;
}(_panel.Component);

customElements.define('animal-badge', AnimalBadge);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "https://mixpanel.github.io/panel-farm/images/capybara-eb88952edd5c73ce7e08368458caa01a.png";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "https://mixpanel.github.io/panel-farm/images/doge-ecdd44281372b7491186224042beec12.png";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "https://mixpanel.github.io/panel-farm/images/husky-d639b17fd6be5007059907a97fcb83b2.png";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "https://mixpanel.github.io/panel-farm/images/kitty-831425589b8197ab2a8762d82e12bdfe.png";

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "https://mixpanel.github.io/panel-farm/images/llama-d626d9417525a096491984efe40a9fbe.png";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "https://mixpanel.github.io/panel-farm/images/raccoon-e56ccb83c2469bedb80820d62a3d45ce.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _jade_template_fn(locals) {
  locals = locals || {};;;
  var result_of_with = function ($component, $helpers, Object) {
    var h = __webpack_require__(0).h;
    return {
      value: h("div", {
        "class": Object.assign({}, {
          inout: $helpers.isEnteringOrExiting()
        }, {
          'animal-badge': true
        })
      }, function () {
        var __jade_nodes = [];
        __jade_nodes = __jade_nodes.concat(h("img", {
          "attrs": {
            src: $helpers.ANIMAL_URLS[$component.getAttribute("animal")],
            height: 90,
            width: 90
          }
        }));
        __jade_nodes = __jade_nodes.concat($helpers.isCloseable() ? function () {
          var __jade_nodes = [];
          __jade_nodes = __jade_nodes.concat(h("div", {
            "on": {
              click: $helpers.clickClose
            },
            "class": {
              'close-button': true
            }
          }));;
          return __jade_nodes;
        }.call(this) : undefined);;
        return __jade_nodes;
      }.call(this).filter(Boolean))
    };
  }.call(this, "$component" in locals ? locals.$component : typeof $component !== "undefined" ? $component : undefined, "$helpers" in locals ? locals.$helpers : typeof $helpers !== "undefined" ? $helpers : undefined, "Object" in locals ? locals.Object : typeof Object !== "undefined" ? Object : undefined);
  if (result_of_with) return result_of_with.value;
}
module.exports = _jade_template_fn;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, ".animal-badge {\n  align-items: center;\n  background-color: #e5e5ff;\n  border-radius: 50px;\n  box-shadow: 0 10px 40px rgba(0,0,0,0.15);\n  display: inline-flex;\n  height: 100px;\n  justify-content: center;\n  margin: 5px;\n  opacity: 1;\n  position: relative;\n  transition: width 250ms, opacity 250ms;\n  width: 100px;\n}\n.animal-badge.inout {\n  opacity: 0;\n  width: 0px;\n}\n.animal-badge:hover .close-button {\n  display: block;\n}\n.animal-badge .close-button {\n  cursor: pointer;\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.animal-badge .close-button::before {\n  color: #f00;\n  content: \"x\";\n  font-size: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(37);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _panel = __webpack_require__(0);

__webpack_require__(26);

__webpack_require__(38);

__webpack_require__(41);

var _template = __webpack_require__(44);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelFarm = function (_Component) {
  _inherits(PanelFarm, _Component);

  function PanelFarm() {
    _classCallCheck(this, PanelFarm);

    return _possibleConstructorReturn(this, (PanelFarm.__proto__ || Object.getPrototypeOf(PanelFarm)).apply(this, arguments));
  }

  _createClass(PanelFarm, [{
    key: 'config',
    get: function get() {
      return {
        defaultState: {
          buttons: ['llama', 'doge', 'kitty', 'raccoon', 'husky'],
          animals: [{ name: 'capybara', id: 0 }],

          backgroundAnimal: 'doge',
          backgroundAnimalStyle: {
            top: '10px',
            right: '10px'
          },

          view: 'welcome'
        },
        helpers: {
          NAV_ITEMS: [{ view: 'welcome', text: 'Welcome ' }, { view: 'farm', text: 'Visit the farm' }]
        },
        routes: {
          'welcome': function welcome() {
            return { view: 'welcome' };
          },
          'farm': function farm() {
            return { view: 'farm' };
          },
          '': 'welcome'
        },
        template: _template2.default
      };
    }
  }]);

  return PanelFarm;
}(_panel.Component);

customElements.define('panel-farm', PanelFarm);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _panel = __webpack_require__(0);

var _template = __webpack_require__(39);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('view-welcome', function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'config',
    get: function get() {
      return {
        defaultState: {
          welcomeText: 'Welcome to the farm!' // dynamic just for demo purposes
        },

        helpers: {
          pluralize: function pluralize(word, amount) {
            return word + (amount === 1 ? '' : 's');
          }
        },

        template: _template2.default
      };
    }
  }]);

  return _class;
}(_panel.Component));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _jade_template_fn(locals) {
  locals = locals || {};;;
  var result_of_with = function ($helpers, String, animals, welcomeText) {
    var h = __webpack_require__(0).h;
    var __vjadeSafeCode = function __vjadeSafeCode(code) {
      return code || String(code);
    };
    return {
      value: h("div", {
        "class": {
          'view-welcome': true
        }
      }, function () {
        var __jade_nodes = [];
        __jade_nodes = __jade_nodes.concat(h("h1", [__vjadeSafeCode(welcomeText)]));
        __jade_nodes = __jade_nodes.concat(h("p", function () {
          var __jade_nodes = [];
          __jade_nodes = __jade_nodes.concat(function () {
            var __jade_nodes = [];
            __jade_nodes = __jade_nodes.concat("This is a demo app for playing around with ");
            __jade_nodes = __jade_nodes.concat(function () {
              var __jade_nodes = [];
              __jade_nodes = __jade_nodes.concat(h("a", {
                "attrs": {
                  href: 'https://github.com/mixpanel/panel'
                }
              }, function () {
                var __jade_nodes = [];
                __jade_nodes = __jade_nodes.concat("Panel");;
                return __jade_nodes;
              }.call(this).filter(Boolean)));;
              return __jade_nodes;
            }.call(this));
            __jade_nodes = __jade_nodes.concat("");;
            return __jade_nodes;
          }.call(this));
          __jade_nodes = __jade_nodes.concat(" in your browser's dev tools.");
          __jade_nodes = __jade_nodes.concat(function () {
            var __jade_nodes = [];
            __jade_nodes = __jade_nodes.concat(" Click over to the ");
            __jade_nodes = __jade_nodes.concat(function () {
              var __jade_nodes = [];
              __jade_nodes = __jade_nodes.concat(h("a", {
                "attrs": {
                  href: '#farm'
                }
              }, function () {
                var __jade_nodes = [];
                __jade_nodes = __jade_nodes.concat("farm");;
                return __jade_nodes;
              }.call(this).filter(Boolean)));;
              return __jade_nodes;
            }.call(this));
            __jade_nodes = __jade_nodes.concat("");;
            return __jade_nodes;
          }.call(this));
          __jade_nodes = __jade_nodes.concat(" to see " + animals.length + " cute " + $helpers.pluralize("animal", animals.length) + "!");;
          return __jade_nodes;
        }.call(this).filter(Boolean)));
        __jade_nodes = __jade_nodes.concat(h("p", function () {
          var __jade_nodes = [];
          __jade_nodes = __jade_nodes.concat("In the JS console, you can get a reference to the running app with");
          __jade_nodes = __jade_nodes.concat(h("span", {
            "class": {
              'code-sample': true
            }
          }, function () {
            var __jade_nodes = [];
            __jade_nodes = __jade_nodes.concat(" app = document.querySelector(`panel-farm`)");;
            return __jade_nodes;
          }.call(this).filter(Boolean)));
          __jade_nodes = __jade_nodes.concat(function () {
            var __jade_nodes = [];
            __jade_nodes = __jade_nodes.concat(". Look at ");
            __jade_nodes = __jade_nodes.concat(function () {
              var __jade_nodes = [];
              __jade_nodes = __jade_nodes.concat(h("span", {
                "class": {
                  'code-sample': true
                }
              }, function () {
                var __jade_nodes = [];
                __jade_nodes = __jade_nodes.concat("app.state");;
                return __jade_nodes;
              }.call(this).filter(Boolean)));;
              return __jade_nodes;
            }.call(this));
            __jade_nodes = __jade_nodes.concat(" to get an idea of what's controllable dynamically.");;
            return __jade_nodes;
          }.call(this));
          __jade_nodes = __jade_nodes.concat(" For instance, to change the header text of this screen, try:");;
          return __jade_nodes;
        }.call(this).filter(Boolean)));
        __jade_nodes = __jade_nodes.concat(h("span", {
          "class": {
            'code-sample': true
          }
        }, function () {
          var __jade_nodes = [];
          __jade_nodes = __jade_nodes.concat("app.update({welcomeText: `Hello there!`});");;
          return __jade_nodes;
        }.call(this).filter(Boolean)));
        __jade_nodes = __jade_nodes.concat(h("p", function () {
          var __jade_nodes = [];
          __jade_nodes = __jade_nodes.concat(function () {
            var __jade_nodes = [];
            __jade_nodes = __jade_nodes.concat("The ");
            __jade_nodes = __jade_nodes.concat(function () {
              var __jade_nodes = [];
              __jade_nodes = __jade_nodes.concat(h("a", {
                "attrs": {
                  href: '#farm'
                }
              }, function () {
                var __jade_nodes = [];
                __jade_nodes = __jade_nodes.concat("farm screen");;
                return __jade_nodes;
              }.call(this).filter(Boolean)));;
              return __jade_nodes;
            }.call(this));
            __jade_nodes = __jade_nodes.concat(" starts out with one cute capybara and some buttons to add different animals to keep it company. Can you add another capybara?");;
            return __jade_nodes;
          }.call(this));;
          return __jade_nodes;
        }.call(this).filter(Boolean)));;
        return __jade_nodes;
      }.call(this).filter(Boolean))
    };
  }.call(this, "$helpers" in locals ? locals.$helpers : typeof $helpers !== "undefined" ? $helpers : undefined, "String" in locals ? locals.String : typeof String !== "undefined" ? String : undefined, "animals" in locals ? locals.animals : typeof animals !== "undefined" ? animals : undefined, "welcomeText" in locals ? locals.welcomeText : typeof welcomeText !== "undefined" ? welcomeText : undefined);
  if (result_of_with) return result_of_with.value;
}
module.exports = _jade_template_fn;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _panel = __webpack_require__(0);

var _template = __webpack_require__(42);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// animals all get unique IDs so the DOM differ knows they're different
// and doesn't recycle the elements; this makes list animations work
var animalID = 1;

customElements.define('view-farm', function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'config',
    get: function get() {
      var _this2 = this;

      return {
        template: _template2.default,
        helpers: {
          addAnimal: function addAnimal(name) {
            return _this2.update({ animals: [].concat(_toConsumableArray(_this2.state.animals), [{ name: name, id: animalID++ }]) });
          },
          removeAnimal: function removeAnimal(idx) {
            return _this2.update({ animals: [].concat(_toConsumableArray(_this2.state.animals.slice(0, idx)), _toConsumableArray(_this2.state.animals.slice(idx + 1, _this2.state.animals.length))) });
          }
        }
      };
    }
  }]);

  return _class;
}(_panel.Component));

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _jade_template_fn(locals) {
  locals = locals || {};;;
  var result_of_with = function ($helpers, Array, animals, buttons) {
    var h = __webpack_require__(0).h;
    return {
      value: h("div", {
        "class": {
          'view-farm': true
        }
      }, function () {
        var __jade_nodes = [];
        __jade_nodes = __jade_nodes.concat(h("div", {
          "class": {
            'farm-buttons': true
          }
        }, function () {
          var __jade_nodes = [];
          __jade_nodes = __jade_nodes.concat(function () {
            var $$obj = buttons;
            var $$eachNodes;
            var $$iterated = false;
            if (Array.isArray($$obj)) {
              $$eachNodes = $$obj.reduce(function ($$eachNodes, buttonType, $index) {
                $$iterated = true;
                return $$eachNodes.concat(function () {
                  var __jade_nodes = [];
                  __jade_nodes = __jade_nodes.concat(h("button", {
                    "on": {
                      click: function click() {
                        return $helpers.addAnimal(buttonType);
                      }
                    }
                  }, function () {
                    var __jade_nodes = [];
                    __jade_nodes = __jade_nodes.concat("Add " + buttonType + "");;
                    return __jade_nodes;
                  }.call(this).filter(Boolean)));;
                  return __jade_nodes;
                }.call(this));
              }, []);
            } else {
              $$eachNodes = [];
              for (var $$objKey in $$obj) {
                (function () {
                  var $index = $$objKey;
                  if ($$obj.hasOwnProperty($index)) {
                    $$iterated = true;
                    var buttonType = $$obj[$index];
                    $$eachNodes = $$eachNodes.concat(function () {
                      var __jade_nodes = [];
                      __jade_nodes = __jade_nodes.concat(h("button", {
                        "on": {
                          click: function click() {
                            return $helpers.addAnimal(buttonType);
                          }
                        }
                      }, function () {
                        var __jade_nodes = [];
                        __jade_nodes = __jade_nodes.concat("Add " + buttonType + "");;
                        return __jade_nodes;
                      }.call(this).filter(Boolean)));;
                      return __jade_nodes;
                    }.call(this));
                  }
                })();
              }
            }

            return $$eachNodes;
          }());;
          return __jade_nodes;
        }.call(this).filter(Boolean)));
        __jade_nodes = __jade_nodes.concat(h("div", {
          "class": {
            'farm-animals': true
          }
        }, function () {
          var __jade_nodes = [];
          __jade_nodes = __jade_nodes.concat(function () {
            var $$obj = animals;
            var $$eachNodes;
            var $$iterated = false;
            if (Array.isArray($$obj)) {
              $$eachNodes = $$obj.reduce(function ($$eachNodes, animal, idx) {
                $$iterated = true;
                return $$eachNodes.concat(function () {
                  var __jade_nodes = [];
                  __jade_nodes = __jade_nodes.concat(h("animal-badge", {
                    "attrs": {
                      animal: animal.name,
                      closeable: true
                    },
                    "on": {
                      close: function close() {
                        return $helpers.removeAnimal(idx);
                      }

                      /* entry/exit animation config */

                    }, "key": animal.id,
                    "class": {
                      inout: true,
                      delayed: {
                        inout: false
                      },
                      remove: {
                        inout: true,
                        delayRemove: 250
                      }
                    }
                  }));;
                  return __jade_nodes;
                }.call(this));
              }, []);
            } else {
              $$eachNodes = [];
              for (var $$objKey in $$obj) {
                (function () {
                  var idx = $$objKey;
                  if ($$obj.hasOwnProperty(idx)) {
                    $$iterated = true;
                    var animal = $$obj[idx];
                    $$eachNodes = $$eachNodes.concat(function () {
                      var __jade_nodes = [];
                      __jade_nodes = __jade_nodes.concat(h("animal-badge", {
                        "attrs": {
                          animal: animal.name,
                          closeable: true
                        },
                        "on": {
                          close: function close() {
                            return $helpers.removeAnimal(idx);
                          }

                          /* entry/exit animation config */

                        }, "key": animal.id,
                        "class": {
                          inout: true,
                          delayed: {
                            inout: false
                          },
                          remove: {
                            inout: true,
                            delayRemove: 250
                          }
                        }
                      }));;
                      return __jade_nodes;
                    }.call(this));
                  }
                })();
              }
            }

            return $$eachNodes;
          }());;
          return __jade_nodes;
        }.call(this).filter(Boolean)));;
        return __jade_nodes;
      }.call(this).filter(Boolean))
    };
  }.call(this, "$helpers" in locals ? locals.$helpers : typeof $helpers !== "undefined" ? $helpers : undefined, "Array" in locals ? locals.Array : typeof Array !== "undefined" ? Array : undefined, "animals" in locals ? locals.animals : typeof animals !== "undefined" ? animals : undefined, "buttons" in locals ? locals.buttons : typeof buttons !== "undefined" ? buttons : undefined);
  if (result_of_with) return result_of_with.value;
}
module.exports = _jade_template_fn;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _jade_template_fn(locals) {
  locals = locals || {};;;
  var result_of_with = function ($component, $helpers, Array, String, backgroundAnimal, backgroundAnimalStyle, view) {
    var h = __webpack_require__(0).h;
    var __vjadeSafeCode = function __vjadeSafeCode(code) {
      return code || String(code);
    };
    return {
      value: h("div", {
        "class": {
          'farm-wrapper': true
        }
      }, function () {
        var __jade_nodes = [];
        __jade_nodes = __jade_nodes.concat(h("div", {
          "class": {
            'farm-nav': true
          }
        }, function () {
          var __jade_nodes = [];
          __jade_nodes = __jade_nodes.concat(function () {
            var $$obj = $helpers.NAV_ITEMS;
            var $$eachNodes;
            var $$iterated = false;
            if (Array.isArray($$obj)) {
              $$eachNodes = $$obj.reduce(function ($$eachNodes, navItem, $index) {
                $$iterated = true;
                return $$eachNodes.concat(function () {
                  var __jade_nodes = [];
                  __jade_nodes = __jade_nodes.concat(h("a", {
                    "attrs": {
                      href: "#" + navItem.view
                    },
                    "class": {
                      'nav-selected': view === navItem.view
                    }
                  }, [__vjadeSafeCode(navItem.text)]));;
                  return __jade_nodes;
                }.call(this));
              }, []);
            } else {
              $$eachNodes = [];
              for (var $$objKey in $$obj) {
                (function () {
                  var $index = $$objKey;
                  if ($$obj.hasOwnProperty($index)) {
                    $$iterated = true;
                    var navItem = $$obj[$index];
                    $$eachNodes = $$eachNodes.concat(function () {
                      var __jade_nodes = [];
                      __jade_nodes = __jade_nodes.concat(h("a", {
                        "attrs": {
                          href: "#" + navItem.view
                        },
                        "class": {
                          'nav-selected': view === navItem.view
                        }
                      }, [__vjadeSafeCode(navItem.text)]));;
                      return __jade_nodes;
                    }.call(this));
                  }
                })();
              }
            }

            return $$eachNodes;
          }());;
          return __jade_nodes;
        }.call(this).filter(Boolean))); /*  linked child component, tag chosen dynamically */
        __jade_nodes = __jade_nodes.concat(h("div", {
          "class": {
            'farm': true
          }
        }, [__vjadeSafeCode($component.child("view-" + view))])); /*  independent component */
        /*  this animal uses a bit of inline styling, for positioning */
        /*  which can be controlled by state updates */
        __jade_nodes = __jade_nodes.concat(h("animal-badge", {
          "attrs": {
            animal: backgroundAnimal
          },
          "style": backgroundAnimalStyle,
          "class": {
            'background-animal': true
          }
        }));;
        return __jade_nodes;
      }.call(this).filter(Boolean))
    };
  }.call(this, "$component" in locals ? locals.$component : typeof $component !== "undefined" ? $component : undefined, "$helpers" in locals ? locals.$helpers : typeof $helpers !== "undefined" ? $helpers : undefined, "Array" in locals ? locals.Array : typeof Array !== "undefined" ? Array : undefined, "String" in locals ? locals.String : typeof String !== "undefined" ? String : undefined, "backgroundAnimal" in locals ? locals.backgroundAnimal : typeof backgroundAnimal !== "undefined" ? backgroundAnimal : undefined, "backgroundAnimalStyle" in locals ? locals.backgroundAnimalStyle : typeof backgroundAnimalStyle !== "undefined" ? backgroundAnimalStyle : undefined, "view" in locals ? locals.view : typeof view !== "undefined" ? view : undefined);
  if (result_of_with) return result_of_with.value;
}
module.exports = _jade_template_fn;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);