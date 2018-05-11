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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

var _componentUtils = __webpack_require__(26);

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

var _snabbdom = __webpack_require__(16);

var _snabbdom2 = _interopRequireDefault(_snabbdom);

var _h = __webpack_require__(3);

var _h2 = _interopRequireDefault(_h);

var _attributes = __webpack_require__(19);

var _attributes2 = _interopRequireDefault(_attributes);

var _dataset = __webpack_require__(20);

var _dataset2 = _interopRequireDefault(_dataset);

var _snabbdomDelayedClass = __webpack_require__(21);

var _snabbdomDelayedClass2 = _interopRequireDefault(_snabbdomDelayedClass);

var _eventlisteners = __webpack_require__(22);

var _eventlisteners2 = _interopRequireDefault(_eventlisteners);

var _props = __webpack_require__(23);

var _props2 = _interopRequireDefault(_props);

var _style = __webpack_require__(24);

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

var _cuid = __webpack_require__(12);

var _cuid2 = _interopRequireDefault(_cuid);

var _lodash = __webpack_require__(13);

var _lodash2 = _interopRequireDefault(_lodash);

var _webcomponent = __webpack_require__(14);

var _webcomponent2 = _interopRequireDefault(_webcomponent);

var _domPatcher = __webpack_require__(1);

var _router = __webpack_require__(25);

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

"use strict";


__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(){/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},m="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(){ba=function(){};m.Symbol||(m.Symbol=ca)}var ca=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function p(){ba();var a=m.Symbol.iterator;a||(a=m.Symbol.iterator=m.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return da(this)}});p=function(){}}function da(a){var b=0;return ea(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ea(a){p();a={next:a};a[m.Symbol.iterator]=function(){return this};return a}function fa(a){p();var b=a[Symbol.iterator];return b?b.call(a):da(a)}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function r(a,b){return{index:a,j:[],o:b}}
function ia(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,n=0;n<k-g&&ja(a[--h],c[--l]);)n++;h=n}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return[];if(e==b){for(b=r(e,0);f<d;)b.j.push(c[f++]);return[b]}if(f==d)return[r(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(n=1;n<h;n++)if(a[k+n-1]===c[g+l-1])b[l][n]=
b[l-1][n-1];else{var q=b[l-1][n]+1,E=b[l][n-1]+1;b[l][n]=q<E?q:E}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],n=b[k][g-1],q=l<n?l<h?l:h:n<h?n:h,q==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):q==l?(a.push(3),k--,d=l):(a.push(2),g--,d=n));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=r(e,0));b.o++;e++;b.j.push(c[f]);f++;break;case 2:b||(b=r(e,0));
b.o++;e++;break;case 3:b||(b=r(e,0)),b.j.push(c[f]),f++}b&&k.push(b);return k}function ja(a,b){return a===b};function ka(){this.K=this.root=null;this.u=!1;this.g=this.l=this.D=this.assignedSlot=this.assignedNodes=this.h=null;this.childNodes=this.nextSibling=this.previousSibling=this.lastChild=this.firstChild=this.parentNode=this.i=void 0;this.N=this.G=!1}ka.prototype.toJSON=function(){return{}};function t(a){a.B||(a.B=new ka);return a.B}function u(a){return a&&a.B};var v=window.ShadyDOM||{};v.V=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var w=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");v.f=!!(w&&w.configurable&&w.get);v.I=v.force||!v.V;var la=navigator.userAgent.match("Trident"),ma=navigator.userAgent.match("Edge");void 0===v.L&&(v.L=v.f&&(la||ma));function x(a){return(a=u(a))&&void 0!==a.firstChild}function y(a){return"ShadyRoot"===a.R}function z(a){a=a.getRootNode();if(y(a))return a}
var A=Element.prototype,na=A.matches||A.matchesSelector||A.mozMatchesSelector||A.msMatchesSelector||A.oMatchesSelector||A.webkitMatchesSelector;function B(a,b){if(a&&b)for(var c=Object.getOwnPropertyNames(b),d=0,e;d<c.length&&(e=c[d]);d++){var f=Object.getOwnPropertyDescriptor(b,e);f&&Object.defineProperty(a,e,f)}}function C(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(d=0;d<c.length;d++)B(a,c[d]);return a}function oa(a,b){for(var c in b)a[c]=b[c]}
var pa=document.createTextNode(""),qa=0,ra=[];(new MutationObserver(function(){for(;ra.length;)try{ra.shift()()}catch(a){throw pa.textContent=qa++,a;}})).observe(pa,{characterData:!0});function sa(a){ra.push(a);pa.textContent=qa++}var ta=!!document.contains;function ua(a,b){for(;b;){if(b==a)return!0;b=b.parentNode}return!1};var D=[],va;function wa(a){va||(va=!0,sa(F));D.push(a)}function F(){va=!1;for(var a=!!D.length;D.length;)D.shift()();return a}F.list=D;var xa=/[&\u00A0"]/g,ya=/[&\u00A0<>]/g;function za(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function Aa(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var Ba=Aa("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),Ca=Aa("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function Da(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g;e<f&&(g=d[e]);e++){a:{var h=g;var k=a;var l=b;switch(h.nodeType){case Node.ELEMENT_NODE:for(var n=h.localName,q="<"+n,E=h.attributes,N=0;k=E[N];N++)q+=" "+k.name+'="'+k.value.replace(xa,za)+'"';q+=">";h=Ba[n]?q:q+Da(h,l)+"</"+n+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&Ca[k.localName]?h:h.replace(ya,za);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
Error("not implemented");}}c+=h}return c};var G={},H=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),I=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1);function Ea(a){var b=[];H.currentNode=a;for(a=H.firstChild();a;)b.push(a),a=H.nextSibling();return b}G.parentNode=function(a){H.currentNode=a;return H.parentNode()};G.firstChild=function(a){H.currentNode=a;return H.firstChild()};G.lastChild=function(a){H.currentNode=a;return H.lastChild()};G.previousSibling=function(a){H.currentNode=a;return H.previousSibling()};
G.nextSibling=function(a){H.currentNode=a;return H.nextSibling()};G.childNodes=Ea;G.parentElement=function(a){I.currentNode=a;return I.parentNode()};G.firstElementChild=function(a){I.currentNode=a;return I.firstChild()};G.lastElementChild=function(a){I.currentNode=a;return I.lastChild()};G.previousElementSibling=function(a){I.currentNode=a;return I.previousSibling()};G.nextElementSibling=function(a){I.currentNode=a;return I.nextSibling()};
G.children=function(a){var b=[];I.currentNode=a;for(a=I.firstChild();a;)b.push(a),a=I.nextSibling();return b};G.innerHTML=function(a){return Da(a,function(a){return Ea(a)})};G.textContent=function(a){switch(a.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:a=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1);for(var b="",c;c=a.nextNode();)b+=c.nodeValue;return b;default:return a.nodeValue}};var J={},Fa=v.f,Ga=[Node.prototype,Element.prototype,HTMLElement.prototype];function K(a){var b;a:{for(b=0;b<Ga.length;b++){var c=Ga[b];if(c.hasOwnProperty(a)){b=c;break a}}b=void 0}if(!b)throw Error("Could not find descriptor for "+a);return Object.getOwnPropertyDescriptor(b,a)}
var L=Fa?{parentNode:K("parentNode"),firstChild:K("firstChild"),lastChild:K("lastChild"),previousSibling:K("previousSibling"),nextSibling:K("nextSibling"),childNodes:K("childNodes"),parentElement:K("parentElement"),previousElementSibling:K("previousElementSibling"),nextElementSibling:K("nextElementSibling"),innerHTML:K("innerHTML"),textContent:K("textContent"),firstElementChild:K("firstElementChild"),lastElementChild:K("lastElementChild"),children:K("children")}:{},M=Fa?{firstElementChild:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,
"firstElementChild"),lastElementChild:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,"lastElementChild"),children:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,"children")}:{},O=Fa?{firstElementChild:Object.getOwnPropertyDescriptor(Document.prototype,"firstElementChild"),lastElementChild:Object.getOwnPropertyDescriptor(Document.prototype,"lastElementChild"),children:Object.getOwnPropertyDescriptor(Document.prototype,"children")}:{};J.J=L;J.ea=M;J.$=O;J.parentNode=function(a){return L.parentNode.get.call(a)};
J.firstChild=function(a){return L.firstChild.get.call(a)};J.lastChild=function(a){return L.lastChild.get.call(a)};J.previousSibling=function(a){return L.previousSibling.get.call(a)};J.nextSibling=function(a){return L.nextSibling.get.call(a)};J.childNodes=function(a){return Array.prototype.slice.call(L.childNodes.get.call(a))};J.parentElement=function(a){return L.parentElement.get.call(a)};J.previousElementSibling=function(a){return L.previousElementSibling.get.call(a)};J.nextElementSibling=function(a){return L.nextElementSibling.get.call(a)};
J.innerHTML=function(a){return L.innerHTML.get.call(a)};J.textContent=function(a){return L.textContent.get.call(a)};J.children=function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:a=M.children.get.call(a);break;case Node.DOCUMENT_NODE:a=O.children.get.call(a);break;default:a=L.children.get.call(a)}return Array.prototype.slice.call(a)};
J.firstElementChild=function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return M.firstElementChild.get.call(a);case Node.DOCUMENT_NODE:return O.firstElementChild.get.call(a);default:return L.firstElementChild.get.call(a)}};J.lastElementChild=function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return M.lastElementChild.get.call(a);case Node.DOCUMENT_NODE:return O.lastElementChild.get.call(a);default:return L.lastElementChild.get.call(a)}};var P=v.L?J:G;var Q={},Ha=Element.prototype.insertBefore,Ia=Element.prototype.replaceChild,Ja=Element.prototype.removeChild,Ka=Element.prototype.setAttribute,La=Element.prototype.removeAttribute,Ma=Element.prototype.cloneNode,Na=Document.prototype.importNode,Oa=Element.prototype.addEventListener,Pa=Element.prototype.removeEventListener,Qa=Window.prototype.addEventListener,Ra=Window.prototype.removeEventListener,Sa=Element.prototype.dispatchEvent,Ta=Node.prototype.contains||HTMLElement.prototype.contains,Ua=Document.prototype.getElementById,
Va=Element.prototype.querySelector,Wa=DocumentFragment.prototype.querySelector,Xa=Document.prototype.querySelector,Ya=Element.prototype.querySelectorAll,Za=DocumentFragment.prototype.querySelectorAll,$a=Document.prototype.querySelectorAll;Q.appendChild=Element.prototype.appendChild;Q.insertBefore=Ha;Q.replaceChild=Ia;Q.removeChild=Ja;Q.setAttribute=Ka;Q.removeAttribute=La;Q.cloneNode=Ma;Q.importNode=Na;Q.addEventListener=Oa;Q.removeEventListener=Pa;Q.W=Qa;Q.X=Ra;Q.dispatchEvent=Sa;Q.contains=Ta;
Q.getElementById=Ua;Q.ca=Va;Q.fa=Wa;Q.aa=Xa;Q.querySelector=function(a){switch(this.nodeType){case Node.ELEMENT_NODE:return Va.call(this,a);case Node.DOCUMENT_NODE:return Xa.call(this,a);default:return Wa.call(this,a)}};Q.da=Ya;Q.ga=Za;Q.ba=$a;Q.querySelectorAll=function(a){switch(this.nodeType){case Node.ELEMENT_NODE:return Ya.call(this,a);case Node.DOCUMENT_NODE:return $a.call(this,a);default:return Za.call(this,a)}};function ab(a){for(;a.firstChild;)a.removeChild(a.firstChild)}
var bb=v.f,cb=document.implementation.createHTMLDocument("inert"),db=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),eb=db&&db.get,fb=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),gb={parentElement:{get:function(){var a=u(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:P.parentElement(this)},configurable:!0},parentNode:{get:function(){var a=u(this);a=a&&a.parentNode;return void 0!==a?a:P.parentNode(this)},configurable:!0},
nextSibling:{get:function(){var a=u(this);a=a&&a.nextSibling;return void 0!==a?a:P.nextSibling(this)},configurable:!0},previousSibling:{get:function(){var a=u(this);a=a&&a.previousSibling;return void 0!==a?a:P.previousSibling(this)},configurable:!0},nextElementSibling:{get:function(){var a=u(this);if(a&&void 0!==a.nextSibling){for(a=this.nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return P.nextElementSibling(this)},configurable:!0},previousElementSibling:{get:function(){var a=
u(this);if(a&&void 0!==a.previousSibling){for(a=this.previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return P.previousElementSibling(this)},configurable:!0}},hb={className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)},configurable:!0}},ib={childNodes:{get:function(){if(x(this)){var a=u(this);if(!a.childNodes){a.childNodes=[];for(var b=this.firstChild;b;b=b.nextSibling)a.childNodes.push(b)}var c=a.childNodes}else c=
P.childNodes(this);c.item=function(a){return c[a]};return c},configurable:!0},childElementCount:{get:function(){return this.children.length},configurable:!0},firstChild:{get:function(){var a=u(this);a=a&&a.firstChild;return void 0!==a?a:P.firstChild(this)},configurable:!0},lastChild:{get:function(){var a=u(this);a=a&&a.lastChild;return void 0!==a?a:P.lastChild(this)},configurable:!0},textContent:{get:function(){if(x(this)){for(var a=[],b=0,c=this.childNodes,d;d=c[b];b++)d.nodeType!==Node.COMMENT_NODE&&
a.push(d.textContent);return a.join("")}return P.textContent(this)},set:function(a){if("undefined"===typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!x(this)&&bb){var b=this.firstChild;(b!=this.lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&ab(this);J.J.textContent.set.call(this,a)}else ab(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.appendChild(document.createTextNode(a));break;default:this.nodeValue=a}},configurable:!0},firstElementChild:{get:function(){var a=
u(this);if(a&&void 0!==a.firstChild){for(a=this.firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return P.firstElementChild(this)},configurable:!0},lastElementChild:{get:function(){var a=u(this);if(a&&void 0!==a.lastChild){for(a=this.lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return P.lastElementChild(this)},configurable:!0},children:{get:function(){var a;x(this)?a=Array.prototype.filter.call(this.childNodes,function(a){return a.nodeType===Node.ELEMENT_NODE}):
a=P.children(this);a.item=function(b){return a[b]};return a},configurable:!0},innerHTML:{get:function(){return x(this)?Da("template"===this.localName?this.content:this):P.innerHTML(this)},set:function(a){var b="template"===this.localName?this.content:this;ab(b);var c=this.localName;c&&"template"!==c||(c="div");c=cb.createElement(c);for(bb?J.J.innerHTML.set.call(c,a):c.innerHTML=a;c.firstChild;)b.appendChild(c.firstChild)},configurable:!0}},jb={shadowRoot:{get:function(){var a=u(this);return a&&a.K||
null},configurable:!0}},kb={activeElement:{get:function(){var a=fb&&fb.get?fb.get.call(document):v.f?void 0:document.activeElement;if(a&&a.nodeType){var b=!!y(this);if(this===document||b&&this.host!==a&&Q.contains.call(this.host,a)){for(b=z(a);b&&b!==this;)a=b.host,b=z(a);a=this===document?b?null:a:b===this?a:null}else a=null}else a=null;return a},set:function(){},configurable:!0}};
function R(a,b,c){for(var d in b){var e=Object.getOwnPropertyDescriptor(a,d);e&&e.configurable||!e&&c?Object.defineProperty(a,d,b[d]):c&&console.warn("Could not define",d,"on",a)}}function S(a){R(a,gb);R(a,hb);R(a,ib);R(a,kb)}
function lb(){var a=U.prototype;a.__proto__=DocumentFragment.prototype;R(a,gb,!0);R(a,ib,!0);R(a,kb,!0);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0})});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
configurable:!0})})}var mb=v.f?function(){}:function(a){var b=t(a);b.G||(b.G=!0,R(a,gb,!0),R(a,hb,!0))},nb=v.f?function(){}:function(a){t(a).N||(R(a,ib,!0),R(a,jb,!0))};var ob=P.childNodes;function pb(a,b,c){mb(a);c=c||null;var d=t(a),e=t(b),f=c?t(c):null;d.previousSibling=c?f.previousSibling:b.lastChild;if(f=u(d.previousSibling))f.nextSibling=a;if(f=u(d.nextSibling=c))f.previousSibling=a;d.parentNode=b;c?c===e.firstChild&&(e.firstChild=a):(e.lastChild=a,e.firstChild||(e.firstChild=a));e.childNodes=null}
function qb(a,b){var c=t(a);if(void 0===c.firstChild)for(b=b||ob(a),c.firstChild=b[0]||null,c.lastChild=b[b.length-1]||null,nb(a),c=0;c<b.length;c++){var d=b[c],e=t(d);e.parentNode=a;e.nextSibling=b[c+1]||null;e.previousSibling=b[c-1]||null;mb(d)}};var rb=P.parentNode,sb=P.childNodes,tb={};function ub(a){var b=[];do b.unshift(a);while(a=a.parentNode);return b}function U(a,b,c){if(a!==tb)throw new TypeError("Illegal constructor");this.R="ShadyRoot";a=sb(b);this.host=b;this.U=c&&c.mode;qb(b,a);c=u(b);c.root=this;c.K="closed"!==this.U?this:null;c=t(this);c.firstChild=c.lastChild=c.parentNode=c.nextSibling=c.previousSibling=null;c.childNodes=[];this.m=!1;this.c=this.b=this.a=null;c=0;for(var d=a.length;c<d;c++)Q.removeChild.call(b,a[c])}
function V(a){a.m||(a.m=!0,wa(function(){return vb(a)}))}function vb(a){for(var b;a;){a.m&&(b=a);a:{var c=a;a=c.host.getRootNode();if(y(a))for(var d=c.host.childNodes,e=0;e<d.length;e++)if(c=d[e],"slot"==c.localName)break a;a=void 0}}b&&b._renderRoot()}
U.prototype._renderRoot=function(){this.m=!1;if(this.a){wb(this);for(var a=0;a<this.a.length;a++){var b=this.a[a];var c=u(b),d=c.assignedNodes;c.assignedNodes=[];c.g=[];if(c.D=d)for(c=0;c<d.length;c++){var e=u(d[c]);e.l=e.assignedSlot;e.assignedSlot===b&&(e.assignedSlot=null)}}for(b=this.host.firstChild;b;b=b.nextSibling)xb(this,b);for(a=0;a<this.a.length;a++){b=this.a[a];d=u(b);if(!d.assignedNodes.length)for(c=b.firstChild;c;c=c.nextSibling)xb(this,c,b);(c=(c=u(b.parentNode))&&c.root)&&yb(c)&&c._renderRoot();
zb(this,d.g,d.assignedNodes);if(c=d.D){for(e=0;e<c.length;e++)u(c[e]).l=null;d.D=null;c.length>d.assignedNodes.length&&(d.u=!0)}d.u&&(d.u=!1,Ab(this,b))}a=this.a;b=[];for(d=0;d<a.length;d++)c=a[d].parentNode,(e=u(c))&&e.root||!(0>b.indexOf(c))||b.push(c);for(a=0;a<b.length;a++){d=b[a];c=d===this?this.host:d;e=[];d=d.childNodes;for(var f=0;f<d.length;f++){var g=d[f];if("slot"==g.localName){g=u(g).g;for(var h=0;h<g.length;h++)e.push(g[h])}else e.push(g)}d=void 0;f=sb(c);g=ia(e,e.length,f,f.length);
for(var k=h=0;h<g.length&&(d=g[h]);h++){for(var l=0,n;l<d.j.length&&(n=d.j[l]);l++)rb(n)===c&&Q.removeChild.call(c,n),f.splice(d.index+k,1);k-=d.o}for(k=0;k<g.length&&(d=g[k]);k++)for(h=f[d.index],l=d.index;l<d.index+d.o;l++)n=e[l],Q.insertBefore.call(c,n,h),f.splice(l,0,n)}}};function xb(a,b,c){var d=t(b),e=d.l;d.l=null;c||(c=(a=a.b[b.slot||"__catchall"])&&a[0]);c?(t(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(t(d.assignedSlot).u=!0)}
function zb(a,b,c){for(var d=0,e;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=u(e).assignedNodes;f&&f.length&&zb(a,b,f)}else b.push(c[d])}function Ab(a,b){Q.dispatchEvent.call(b,new Event("slotchange"));b=u(b);b.assignedSlot&&Ab(a,b.assignedSlot)}function wb(a){if(a.c&&a.c.length){for(var b=a.c,c,d=0;d<b.length;d++){var e=b[d];qb(e);qb(e.parentNode);var f=Bb(e);a.b[f]?(c=c||{},c[f]=!0,a.b[f].push(e)):a.b[f]=[e];a.a.push(e)}if(c)for(var g in c)a.b[g]=Cb(a.b[g]);a.c=[]}}
function Bb(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.O=b}function Cb(a){return a.sort(function(a,c){a=ub(a);for(var b=ub(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=Array.from(c.parentNode.childNodes),a.indexOf(c)-a.indexOf(f)}})}function yb(a){wb(a);return!(!a.a||!a.a.length)};var Db=P.parentNode;
function Eb(a,b,c){if(b===a)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(c){var d=u(c);d=d&&d.parentNode;if(void 0!==d&&d!==a||void 0===d&&Db(c)!==a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(c===b)return b;b.parentNode&&Fb(b.parentNode,b);var e,f;if(!b.__noInsertionPoint){if(f=e=z(a)){var g;"slot"===b.localName?g=[b]:b.querySelectorAll&&
(g=b.querySelectorAll("slot"));f=g&&g.length?g:void 0}f&&(g=e,d=f,g.c=g.c||[],g.a=g.a||[],g.b=g.b||{},g.c.push.apply(g.c,[].concat(d instanceof Array?d:ha(fa(d)))))}("slot"===a.localName||f)&&(e=e||z(a))&&V(e);if(x(a)){e=c;nb(a);f=t(a);void 0!==f.firstChild&&(f.childNodes=null);if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE){f=b.childNodes;for(g=0;g<f.length;g++)pb(f[g],a,e);e=t(b);f=void 0!==e.firstChild?null:void 0;e.firstChild=e.lastChild=f;e.childNodes=f}else pb(b,a,e);e=u(a);if(Gb(a)){V(e.root);
var h=!0}else e.root&&(h=!0)}h||(h=y(a)?a.host:a,c?(c=Hb(c),Q.insertBefore.call(h,b,c)):Q.appendChild.call(h,b));Ib(a,b);return b}
function Fb(a,b){if(b.parentNode!==a)throw Error("The node to be removed is not a child of this node: "+b);var c=z(b),d=u(a);if(x(a)){var e=t(b),f=t(a);b===f.firstChild&&(f.firstChild=e.nextSibling);b===f.lastChild&&(f.lastChild=e.previousSibling);var g=e.previousSibling,h=e.nextSibling;g&&(t(g).nextSibling=h);h&&(t(h).previousSibling=g);e.parentNode=e.previousSibling=e.nextSibling=void 0;void 0!==f.childNodes&&(f.childNodes=null);if(Gb(a)){V(d.root);var k=!0}}Jb(b);if(c){(e=a&&"slot"===a.localName)&&
(k=!0);if(c.a){wb(c);f=c.b;for(T in f)for(g=f[T],h=0;h<g.length;h++){var l=g[h];if(ua(b,l)){g.splice(h,1);var n=c.a.indexOf(l);0<=n&&c.a.splice(n,1);h--;n=u(l);if(l=n.g)for(var q=0;q<l.length;q++){var E=l[q],N=rb(E);N&&Q.removeChild.call(N,E)}n.g=[];n.assignedNodes=[];n=!0}}var T=n}else T=void 0;(T||e)&&V(c)}k||(k=y(a)?a.host:a,(!d.root&&"slot"!==b.localName||k===Db(b))&&Q.removeChild.call(k,b));Ib(a,null,b);return b}
function Jb(a){var b=u(a);if(b&&void 0!==b.i){b=a.childNodes;for(var c=0,d=b.length,e;c<d&&(e=b[c]);c++)Jb(e)}if(a=u(a))a.i=void 0}function Hb(a){var b=a;a&&"slot"===a.localName&&(b=(b=(b=u(a))&&b.g)&&b.length?b[0]:Hb(a.nextSibling));return b}function Gb(a){return(a=(a=u(a))&&a.root)&&yb(a)}
function Kb(a,b){if("slot"===b)a=a.parentNode,Gb(a)&&V(u(a).root);else if("slot"===a.localName&&"name"===b&&(b=z(a))){if(b.a){var c=a.O,d=Bb(a);if(d!==c){c=b.b[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.b[d]||(b.b[d]=[]);c.push(a);1<c.length&&(b.b[d]=Cb(c))}}V(b)}}function Ib(a,b,c){if(a=(a=u(a))&&a.h)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Lb(a)}
function Mb(a){if(a&&a.nodeType){var b=t(a),c=b.i;void 0===c&&(y(a)?(c=a,b.i=c):(c=(c=a.parentNode)?Mb(c):a,Q.contains.call(document.documentElement,a)&&(b.i=c)));return c}}function W(a,b,c){var d=[];Nb(a.childNodes,b,c,d);return d}function Nb(a,b,c,d){for(var e=0,f=a.length,g;e<f&&(g=a[e]);e++){var h;if(h=g.nodeType===Node.ELEMENT_NODE){h=g;var k=b,l=c,n=d,q=k(h);q&&n.push(h);l&&l(q)?h=q:(Nb(h.childNodes,k,l,n),h=void 0)}if(h)break}}var X=null;
function Ob(a,b,c){X||(X=window.ShadyCSS&&window.ShadyCSS.ScopingShim);X&&"class"===b?X.setElementClass(a,c):(Q.setAttribute.call(a,b,c),Kb(a,b))}function Pb(a,b){if(a.ownerDocument!==document)return Q.importNode.call(document,a,b);var c=Q.importNode.call(document,a,!1);if(b){a=a.childNodes;b=0;for(var d;b<a.length;b++)d=Pb(a[b],!0),c.appendChild(d)}return c};function Qb(){this.c=!1;this.addedNodes=[];this.removedNodes=[];this.s=new Set}function Lb(a){a.c||(a.c=!0,sa(function(){Rb(a)}))}function Rb(a){if(a.c){a.c=!1;var b=a.takeRecords();b.length&&a.s.forEach(function(a){a(b)})}}Qb.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function Sb(a,b){var c=t(a);c.h||(c.h=new Qb);c.h.s.add(b);var d=c.h;return{P:b,T:d,S:a,takeRecords:function(){return d.takeRecords()}}}function Tb(a){var b=a&&a.T;b&&(b.s.delete(a.P),b.s.size||(t(a.S).h=null))}
function Ub(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})};var Y="__eventWrappers"+Date.now(),Vb={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,
dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0};function Wb(a,b){var c=[],d=a;for(a=a===window?window:a.getRootNode();d;)c.push(d),d=d.assignedSlot?d.assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.parentNode;c[c.length-1]===document&&c.push(window);return c}
function Xb(a,b){if(!y)return a;a=Wb(a,!0);for(var c=0,d,e,f,g;c<b.length;c++)if(d=b[c],f=d===window?window:d.getRootNode(),f!==e&&(g=a.indexOf(f),e=f),!y(f)||-1<g)return d}
var Yb={get composed(){!1!==this.isTrusted&&void 0===this.v&&(this.v=Vb[this.type]);return this.v||!1},composedPath:function(){this.F||(this.F=Wb(this.__target,this.composed));return this.F},get target(){return Xb(this.currentTarget,this.composedPath())},get relatedTarget(){if(!this.A)return null;this.H||(this.H=Wb(this.A,!0));return Xb(this.currentTarget,this.H)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.w=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);
this.w=this.M=!0}};function Zb(a){function b(b,d){b=new a(b,d);b.v=d&&!!d.composed;return b}oa(b,a);b.prototype=a.prototype;return b}var $b={focus:!0,blur:!0};function ac(a){return a.__target!==a.target||a.A!==a.relatedTarget}function bc(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!ac(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.M);d++);}
function cc(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];bc(a,d,"capture");if(a.w)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=u(d);f=f&&f.root;if(0===c||f&&f===e)if(bc(a,d,"bubble"),d!==window&&(e=d.getRootNode()),a.w)break}}
function dc(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],k=h.type,l=h.capture,n=h.once,q=h.passive;if(b===h.node&&c===k&&d===l&&e===n&&f===q)return g}return-1}
function ec(a,b,c){if(b){var d=typeof b;if("function"===d||"object"===d)if("object"!==d||b.handleEvent&&"function"===typeof b.handleEvent){if(c&&"object"===typeof c){var e=!!c.capture;var f=!!c.once;var g=!!c.passive}else e=!!c,g=f=!1;var h=c&&c.C||this,k=b[Y];if(k){if(-1<dc(k,h,a,e,f,g))return}else b[Y]=[];k=function(e){f&&this.removeEventListener(a,b,c);e.__target||fc(e);if(h!==this){var g=Object.getOwnPropertyDescriptor(e,"currentTarget");Object.defineProperty(e,"currentTarget",{get:function(){return h},
configurable:!0})}if(e.composed||-1<e.composedPath().indexOf(h))if(ac(e)&&e.target===e.relatedTarget)e.eventPhase===Event.BUBBLING_PHASE&&e.stopImmediatePropagation();else if(e.eventPhase===Event.CAPTURING_PHASE||e.bubbles||e.target===h||h instanceof Window){var k="function"===d?b.call(h,e):b.handleEvent&&b.handleEvent(e);h!==this&&(g?(Object.defineProperty(e,"currentTarget",g),g=null):delete e.currentTarget);return k}};b[Y].push({node:h,type:a,capture:e,once:f,passive:g,Y:k});$b[a]?(this.__handlers=
this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][e?"capture":"bubble"].push(k)):(this instanceof Window?Q.W:Q.addEventListener).call(this,a,k,c)}}}
function gc(a,b,c){if(b){if(c&&"object"===typeof c){var d=!!c.capture;var e=!!c.once;var f=!!c.passive}else d=!!c,f=e=!1;var g=c&&c.C||this,h=void 0;var k=null;try{k=b[Y]}catch(l){}k&&(e=dc(k,g,a,d,e,f),-1<e&&(h=k.splice(e,1)[0].Y,k.length||(b[Y]=void 0)));(this instanceof Window?Q.X:Q.removeEventListener).call(this,a,h||b,c);h&&$b[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][d?"capture":"bubble"],h=a.indexOf(h),-1<h&&a.splice(h,1))}}
function hc(){for(var a in $b)window.addEventListener(a,function(a){a.__target||(fc(a),cc(a))},!0)}function fc(a){a.__target=a.target;a.A=a.relatedTarget;if(v.f){var b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__patchProto")){var c=Object.create(b);c.Z=b;B(c,Yb);b.__patchProto=c}a.__proto__=b.__patchProto}else B(a,Yb)}var ic=Zb(window.Event),jc=Zb(window.CustomEvent),kc=Zb(window.MouseEvent);function lc(a){var b=a.getRootNode();y(b)&&vb(b);return(a=u(a))&&a.assignedSlot||null}
var mc={addEventListener:ec.bind(window),removeEventListener:gc.bind(window)},nc={addEventListener:ec,removeEventListener:gc,appendChild:function(a){return Eb(this,a)},insertBefore:function(a,b){return Eb(this,a,b)},removeChild:function(a){return Fb(this,a)},replaceChild:function(a,b){Eb(this,a,b);Fb(this,b);return a},cloneNode:function(a){if("template"==this.localName)var b=Q.cloneNode.call(this,a);else if(b=Q.cloneNode.call(this,!1),a){a=this.childNodes;for(var c=0,d;c<a.length;c++)d=a[c].cloneNode(!0),
b.appendChild(d)}return b},getRootNode:function(){return Mb(this)},contains:function(a){return ua(this,a)},dispatchEvent:function(a){F();return Q.dispatchEvent.call(this,a)}};
Object.defineProperties(nc,{isConnected:{get:function(){if(eb&&eb.call(this))return!0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return!1;var a=this.ownerDocument;if(ta){if(Q.contains.call(a,this))return!0}else if(a.documentElement&&Q.contains.call(a.documentElement,this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.parentNode||(y(a)?a.host:void 0);return!!(a&&a instanceof Document)},configurable:!0}});
var oc={get assignedSlot(){return lc(this)}},pc={querySelector:function(a){return W(this,function(b){return na.call(b,a)},function(a){return!!a})[0]||null},querySelectorAll:function(a,b){if(b){b=Array.prototype.slice.call(Q.querySelectorAll(this,a));var c=this.getRootNode();return b.filter(function(a){return a.getRootNode()==c})}return W(this,function(b){return na.call(b,a)})}},qc={assignedNodes:function(a){if("slot"===this.localName){var b=this.getRootNode();y(b)&&vb(b);return(b=u(this))?(a&&a.flatten?
b.g:b.assignedNodes)||[]:[]}}},rc=C({setAttribute:function(a,b){Ob(this,a,b)},removeAttribute:function(a){Q.removeAttribute.call(this,a);Kb(this,a)},attachShadow:function(a){if(!this)throw"Must provide a host.";if(!a)throw"Not enough arguments.";return new U(tb,this,a)},get slot(){return this.getAttribute("slot")},set slot(a){Ob(this,"slot",a)},get assignedSlot(){return lc(this)}},pc,qc);Object.defineProperties(rc,jb);
var sc=C({importNode:function(a,b){return Pb(a,b)},getElementById:function(a){return W(this,function(b){return b.id==a},function(a){return!!a})[0]||null}},pc);Object.defineProperties(sc,{_activeElement:kb.activeElement});
var tc=HTMLElement.prototype.blur,uc=C({blur:function(){var a=u(this);(a=(a=a&&a.root)&&a.activeElement)?a.blur():tc.call(this)}}),vc={addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.C=this;this.host.addEventListener(a,b,c)},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.C=this;this.host.removeEventListener(a,b,c)},getElementById:function(a){return W(this,function(b){return b.id==a},function(a){return!!a})[0]||null}};
function Z(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f.value?a[e]=f.value:Object.defineProperty(a,e,f)}};if(v.I){window.ShadyDOM={inUse:v.I,patch:function(a){nb(a);mb(a);return a},isShadyRoot:y,enqueue:wa,flush:F,settings:v,filterMutations:Ub,observeChildren:Sb,unobserveChildren:Tb,nativeMethods:Q,nativeTree:P};window.Event=ic;window.CustomEvent=jc;window.MouseEvent=kc;hc();var wc=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;Z(U.prototype,vc);Z(window.Node.prototype,nc);Z(window.Window.prototype,mc);Z(window.Text.prototype,oc);Z(window.DocumentFragment.prototype,pc);Z(window.Element.prototype,
rc);Z(window.Document.prototype,sc);window.HTMLSlotElement&&Z(window.HTMLSlotElement.prototype,qc);Z(wc.prototype,uc);v.f&&(S(window.Node.prototype),S(window.Text.prototype),S(window.DocumentFragment.prototype),S(window.Element.prototype),S(wc.prototype),S(window.Document.prototype),window.HTMLSlotElement&&S(window.HTMLSlotElement.prototype));lb();window.ShadowRoot=U};}).call(this);

//# sourceMappingURL=shadydom.min.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

(function(){
'use strict';var h=new function(){};var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function m(b){var a=aa.has(b);b=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);return!a&&b}function n(b){var a=b.isConnected;if(void 0!==a)return a;for(;b&&!(b.__CE_isImportDocument||b instanceof Document);)b=b.parentNode||(window.ShadowRoot&&b instanceof ShadowRoot?b.host:void 0);return!(!b||!(b.__CE_isImportDocument||b instanceof Document))}
function p(b,a){for(;a&&a!==b&&!a.nextSibling;)a=a.parentNode;return a&&a!==b?a.nextSibling:null}
function t(b,a,c){c=c?c:new Set;for(var d=b;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;a(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)t(d,a,c);d=p(b,e);continue}else if("template"===f){d=p(b,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)t(e,a,c)}d=d.firstChild?d.firstChild:p(b,d)}}function u(b,a,c){b[a]=c};function v(){this.a=new Map;this.s=new Map;this.f=[];this.b=!1}function ba(b,a,c){b.a.set(a,c);b.s.set(c.constructor,c)}function w(b,a){b.b=!0;b.f.push(a)}function x(b,a){b.b&&t(a,function(a){return y(b,a)})}function y(b,a){if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var c=0;c<b.f.length;c++)b.f[c](a)}}function z(b,a){var c=[];t(a,function(b){return c.push(b)});for(a=0;a<c.length;a++){var d=c[a];1===d.__CE_state?b.connectedCallback(d):A(b,d)}}
function B(b,a){var c=[];t(a,function(b){return c.push(b)});for(a=0;a<c.length;a++){var d=c[a];1===d.__CE_state&&b.disconnectedCallback(d)}}
function C(b,a,c){c=c?c:{};var d=c.w||new Set,e=c.i||function(a){return A(b,a)},f=[];t(a,function(a){if("link"===a.localName&&"import"===a.getAttribute("rel")){var c=a.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:a.addEventListener("load",function(){var c=a.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);C(b,c,{w:f,i:e})}})}else f.push(a)},d);if(b.b)for(a=0;a<
f.length;a++)y(b,f[a]);for(a=0;a<f.length;a++)e(f[a])}
function A(b,a){if(void 0===a.__CE_state){var c=a.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=b.a.get(a.localName)){c.constructionStack.push(a);var d=c.constructor;try{try{if(new d!==a)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(r){throw a.__CE_state=2,r;}a.__CE_state=1;a.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=c[d],
f=a.getAttribute(e);null!==f&&b.attributeChangedCallback(a,e,null,f,null)}n(a)&&b.connectedCallback(a)}}}v.prototype.connectedCallback=function(b){var a=b.__CE_definition;a.connectedCallback&&a.connectedCallback.call(b)};v.prototype.disconnectedCallback=function(b){var a=b.__CE_definition;a.disconnectedCallback&&a.disconnectedCallback.call(b)};
v.prototype.attributeChangedCallback=function(b,a,c,d,e){var f=b.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(a)&&f.attributeChangedCallback.call(b,a,c,d,e)};function D(b,a){this.c=b;this.a=a;this.b=void 0;C(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function E(b){b.b&&b.b.disconnect()}D.prototype.f=function(b){var a=this.a.readyState;"interactive"!==a&&"complete"!==a||E(this);for(a=0;a<b.length;a++)for(var c=b[a].addedNodes,d=0;d<c.length;d++)C(this.c,c[d])};function ca(){var b=this;this.b=this.a=void 0;this.f=new Promise(function(a){b.b=a;b.a&&a(b.a)})}function F(b){if(b.a)throw Error("Already resolved.");b.a=void 0;b.b&&b.b(void 0)};function G(b){this.j=!1;this.c=b;this.o=new Map;this.l=function(b){return b()};this.g=!1;this.m=[];this.u=new D(b,document)}
G.prototype.define=function(b,a){var c=this;if(!(a instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!m(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(this.c.a.get(b))throw Error("A custom element with name '"+b+"' has already been defined.");if(this.j)throw Error("A custom element is already being defined.");this.j=!0;var d,e,f,r,k;try{var g=function(b){var a=l[b];if(void 0!==a&&!(a instanceof Function))throw Error("The '"+b+"' callback must be a function.");
return a},l=a.prototype;if(!(l instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");d=g("connectedCallback");e=g("disconnectedCallback");f=g("adoptedCallback");r=g("attributeChangedCallback");k=a.observedAttributes||[]}catch(q){return}finally{this.j=!1}a={localName:b,constructor:a,connectedCallback:d,disconnectedCallback:e,adoptedCallback:f,attributeChangedCallback:r,observedAttributes:k,constructionStack:[]};ba(this.c,b,a);this.m.push(a);this.g||
(this.g=!0,this.l(function(){return da(c)}))};G.prototype.i=function(b){C(this.c,b)};function da(b){if(!1!==b.g){b.g=!1;for(var a=b.m,c=[],d=new Map,e=0;e<a.length;e++)d.set(a[e].localName,[]);C(b.c,document,{i:function(a){if(void 0===a.__CE_state){var e=a.localName,f=d.get(e);f?f.push(a):b.c.a.get(e)&&c.push(a)}}});for(e=0;e<c.length;e++)A(b.c,c[e]);for(;0<a.length;){for(var f=a.shift(),e=f.localName,f=d.get(f.localName),r=0;r<f.length;r++)A(b.c,f[r]);(e=b.o.get(e))&&F(e)}}}
G.prototype.get=function(b){if(b=this.c.a.get(b))return b.constructor};G.prototype.whenDefined=function(b){if(!m(b))return Promise.reject(new SyntaxError("'"+b+"' is not a valid custom element name."));var a=this.o.get(b);if(a)return a.f;a=new ca;this.o.set(b,a);this.c.a.get(b)&&!this.m.some(function(a){return a.localName===b})&&F(a);return a.f};G.prototype.v=function(b){E(this.u);var a=this.l;this.l=function(c){return b(function(){return a(c)})}};window.CustomElementRegistry=G;
G.prototype.define=G.prototype.define;G.prototype.upgrade=G.prototype.i;G.prototype.get=G.prototype.get;G.prototype.whenDefined=G.prototype.whenDefined;G.prototype.polyfillWrapFlushCallback=G.prototype.v;var H=window.Document.prototype.createElement,ea=window.Document.prototype.createElementNS,fa=window.Document.prototype.importNode,ga=window.Document.prototype.prepend,ha=window.Document.prototype.append,ia=window.DocumentFragment.prototype.prepend,ja=window.DocumentFragment.prototype.append,I=window.Node.prototype.cloneNode,J=window.Node.prototype.appendChild,K=window.Node.prototype.insertBefore,L=window.Node.prototype.removeChild,M=window.Node.prototype.replaceChild,N=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),O=window.Element.prototype.attachShadow,P=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Q=window.Element.prototype.getAttribute,R=window.Element.prototype.setAttribute,S=window.Element.prototype.removeAttribute,T=window.Element.prototype.getAttributeNS,U=window.Element.prototype.setAttributeNS,ka=window.Element.prototype.removeAttributeNS,la=window.Element.prototype.insertAdjacentElement,ma=window.Element.prototype.insertAdjacentHTML,na=window.Element.prototype.prepend,
oa=window.Element.prototype.append,V=window.Element.prototype.before,pa=window.Element.prototype.after,qa=window.Element.prototype.replaceWith,ra=window.Element.prototype.remove,sa=window.HTMLElement,W=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),ta=window.HTMLElement.prototype.insertAdjacentElement,ua=window.HTMLElement.prototype.insertAdjacentHTML;function va(){var b=X;window.HTMLElement=function(){function a(){var a=this.constructor,d=b.s.get(a);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(!e.length)return e=H.call(document,d.localName),Object.setPrototypeOf(e,a.prototype),e.__CE_state=1,e.__CE_definition=d,y(b,e),e;var d=e.length-1,f=e[d];if(f===h)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=h;Object.setPrototypeOf(f,a.prototype);y(b,f);return f}a.prototype=sa.prototype;return a}()};function Y(b,a,c){function d(a){return function(c){for(var e=[],d=0;d<arguments.length;++d)e[d-0]=arguments[d];for(var d=[],f=[],l=0;l<e.length;l++){var q=e[l];q instanceof Element&&n(q)&&f.push(q);if(q instanceof DocumentFragment)for(q=q.firstChild;q;q=q.nextSibling)d.push(q);else d.push(q)}a.apply(this,e);for(e=0;e<f.length;e++)B(b,f[e]);if(n(this))for(e=0;e<d.length;e++)f=d[e],f instanceof Element&&z(b,f)}}c.h&&(a.prepend=d(c.h));c.append&&(a.append=d(c.append))};function wa(){var b=X;u(Document.prototype,"createElement",function(a){if(this.__CE_hasRegistry){var c=b.a.get(a);if(c)return new c.constructor}a=H.call(this,a);y(b,a);return a});u(Document.prototype,"importNode",function(a,c){a=fa.call(this,a,c);this.__CE_hasRegistry?C(b,a):x(b,a);return a});u(Document.prototype,"createElementNS",function(a,c){if(this.__CE_hasRegistry&&(null===a||"http://www.w3.org/1999/xhtml"===a)){var d=b.a.get(c);if(d)return new d.constructor}a=ea.call(this,a,c);y(b,a);return a});
Y(b,Document.prototype,{h:ga,append:ha})};function xa(){var b=X;function a(a,d){Object.defineProperty(a,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,a);else{var e=void 0;if(this.firstChild){var c=this.childNodes,k=c.length;if(0<k&&n(this))for(var e=Array(k),g=0;g<k;g++)e[g]=c[g]}d.set.call(this,a);if(e)for(a=0;a<e.length;a++)B(b,e[a])}}})}u(Node.prototype,"insertBefore",function(a,d){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);
a=K.call(this,a,d);if(n(this))for(d=0;d<e.length;d++)z(b,e[d]);return a}e=n(a);d=K.call(this,a,d);e&&B(b,a);n(this)&&z(b,a);return d});u(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=J.call(this,a);if(n(this))for(var e=0;e<c.length;e++)z(b,c[e]);return a}c=n(a);e=J.call(this,a);c&&B(b,a);n(this)&&z(b,a);return e});u(Node.prototype,"cloneNode",function(a){a=I.call(this,a);this.ownerDocument.__CE_hasRegistry?C(b,a):x(b,a);
return a});u(Node.prototype,"removeChild",function(a){var c=n(a),e=L.call(this,a);c&&B(b,a);return e});u(Node.prototype,"replaceChild",function(a,d){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);a=M.call(this,a,d);if(n(this))for(B(b,d),d=0;d<e.length;d++)z(b,e[d]);return a}var e=n(a),f=M.call(this,a,d),c=n(this);c&&B(b,d);e&&B(b,a);c&&z(b,a);return f});N&&N.get?a(Node.prototype,N):w(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=[],b=
0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)L.call(this,this.firstChild);J.call(this,document.createTextNode(a))}})})};function ya(b){var a=Element.prototype;function c(a){return function(e){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];for(var d=[],k=[],g=0;g<c.length;g++){var l=c[g];l instanceof Element&&n(l)&&k.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)d.push(l);else d.push(l)}a.apply(this,c);for(c=0;c<k.length;c++)B(b,k[c]);if(n(this))for(c=0;c<d.length;c++)k=d[c],k instanceof Element&&z(b,k)}}V&&(a.before=c(V));V&&(a.after=c(pa));qa&&u(a,"replaceWith",function(a){for(var e=
[],c=0;c<arguments.length;++c)e[c-0]=arguments[c];for(var c=[],d=[],k=0;k<e.length;k++){var g=e[k];g instanceof Element&&n(g)&&d.push(g);if(g instanceof DocumentFragment)for(g=g.firstChild;g;g=g.nextSibling)c.push(g);else c.push(g)}k=n(this);qa.apply(this,e);for(e=0;e<d.length;e++)B(b,d[e]);if(k)for(B(b,this),e=0;e<c.length;e++)d=c[e],d instanceof Element&&z(b,d)});ra&&u(a,"remove",function(){var a=n(this);ra.call(this);a&&B(b,this)})};function za(){var b=X;function a(a,c){Object.defineProperty(a,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){var e=this,d=void 0;n(this)&&(d=[],t(this,function(a){a!==e&&d.push(a)}));c.set.call(this,a);if(d)for(var f=0;f<d.length;f++){var r=d[f];1===r.__CE_state&&b.disconnectedCallback(r)}this.ownerDocument.__CE_hasRegistry?C(b,this):x(b,this);return a}})}function c(a,c){u(a,"insertAdjacentElement",function(a,e){var d=n(e);a=c.call(this,a,e);d&&B(b,e);n(a)&&z(b,e);
return a})}function d(a,c){function e(a,e){for(var c=[];a!==e;a=a.nextSibling)c.push(a);for(e=0;e<c.length;e++)C(b,c[e])}u(a,"insertAdjacentHTML",function(a,b){a=a.toLowerCase();if("beforebegin"===a){var d=this.previousSibling;c.call(this,a,b);e(d||this.parentNode.firstChild,this)}else if("afterbegin"===a)d=this.firstChild,c.call(this,a,b),e(this.firstChild,d);else if("beforeend"===a)d=this.lastChild,c.call(this,a,b),e(d||this.firstChild,null);else if("afterend"===a)d=this.nextSibling,c.call(this,
a,b),e(this.nextSibling,d);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}O&&u(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=O.call(this,a)});P&&P.get?a(Element.prototype,P):W&&W.get?a(HTMLElement.prototype,W):w(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return I.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,e=b?this.content:this,
c=H.call(document,this.localName);for(c.innerHTML=a;0<e.childNodes.length;)L.call(e,e.childNodes[0]);for(a=b?c.content:c;0<a.childNodes.length;)J.call(e,a.childNodes[0])}})});u(Element.prototype,"setAttribute",function(a,c){if(1!==this.__CE_state)return R.call(this,a,c);var e=Q.call(this,a);R.call(this,a,c);c=Q.call(this,a);b.attributeChangedCallback(this,a,e,c,null)});u(Element.prototype,"setAttributeNS",function(a,c,d){if(1!==this.__CE_state)return U.call(this,a,c,d);var e=T.call(this,a,c);U.call(this,
a,c,d);d=T.call(this,a,c);b.attributeChangedCallback(this,c,e,d,a)});u(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return S.call(this,a);var c=Q.call(this,a);S.call(this,a);null!==c&&b.attributeChangedCallback(this,a,c,null,null)});u(Element.prototype,"removeAttributeNS",function(a,c){if(1!==this.__CE_state)return ka.call(this,a,c);var d=T.call(this,a,c);ka.call(this,a,c);var e=T.call(this,a,c);d!==e&&b.attributeChangedCallback(this,c,d,e,a)});ta?c(HTMLElement.prototype,
ta):la?c(Element.prototype,la):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");ua?d(HTMLElement.prototype,ua):ma?d(Element.prototype,ma):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");Y(b,Element.prototype,{h:na,append:oa});ya(b)};/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Z=window.customElements;if(!Z||Z.forcePolyfill||"function"!=typeof Z.define||"function"!=typeof Z.get){var X=new v;va();wa();Y(X,DocumentFragment.prototype,{h:ia,append:ja});xa();za();document.__CE_hasRegistry=!0;var customElements=new G(X);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};
}).call(self);

//# sourceMappingURL=custom-elements.min.js.map


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _panel = __webpack_require__(0);

__webpack_require__(30);

__webpack_require__(40);

__webpack_require__(43);

var _template = __webpack_require__(46);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('panel-farm', function (_Component) {
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
          buttons: ['llama', 'doge', 'kitty', 'raccoon', 'husky'],
          animals: [{ name: 'capybara', id: 0 }],

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

  return _class;
}(_panel.Component));

/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extendableHtmlElement = __webpack_require__(15);

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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var vnode_1 = __webpack_require__(5);
var is = __webpack_require__(6);
var htmldomapi_1 = __webpack_require__(17);
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
var thunk_1 = __webpack_require__(18);
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controlledComponent = __webpack_require__(27);

var _controlledComponent2 = _interopRequireDefault(_controlledComponent);

var _proxyComponent = __webpack_require__(28);

var _proxyComponent2 = _interopRequireDefault(_proxyComponent);

var _stateController = __webpack_require__(29);

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
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _panel = __webpack_require__(0);

var _capybara = __webpack_require__(31);

var _capybara2 = _interopRequireDefault(_capybara);

var _doge = __webpack_require__(32);

var _doge2 = _interopRequireDefault(_doge);

var _husky = __webpack_require__(33);

var _husky2 = _interopRequireDefault(_husky);

var _kitty = __webpack_require__(34);

var _kitty2 = _interopRequireDefault(_kitty);

var _llama = __webpack_require__(35);

var _llama2 = _interopRequireDefault(_llama);

var _raccoon = __webpack_require__(36);

var _raccoon2 = _interopRequireDefault(_raccoon);

var _template = __webpack_require__(37);

var _template2 = _interopRequireDefault(_template);

var _styles = __webpack_require__(38);

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

customElements.define('animal-badge', function (_Component) {
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
          isVisible: function isVisible() {
            return _this2.classList.contains('visible');
          }
        }
      };
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return [].concat(_toConsumableArray(_get(_class.__proto__ || Object.getPrototypeOf(_class), 'observedAttributes', this)), ['animal', 'class', 'closeable']);
    }
  }]);

  return _class;
}(_panel.Component));

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/capybara-793c345e9e7a4190a60112ca097ec950.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/doge-793b8d7e2f308a0d46a1662b9f4a5799.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/husky-223cc57d00cbd4f2e97bc7c4284aac3a.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/kitty-87c14f07825dafb2f7a4b6226b4f1f37.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/llama-ede62aa08104695c68a015b214a5efc3.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/raccoon-54450e6522520b8dcb63a606c5e96888.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _jade_template_fn(locals) {
  locals = locals || {};;;
  var result_of_with = function ($component, $helpers, Object) {
    var h = __webpack_require__(0).h;
    return {
      value: h("div", {
        "class": Object.assign({}, {
          visible: $helpers.isVisible()
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, ".animal-badge {\n  align-items: center;\n  background-color: #e5e5ff;\n  border-radius: 50px;\n  box-shadow: 0 10px 40px rgba(0,0,0,0.15);\n  display: inline-flex;\n  height: 100px;\n  justify-content: center;\n  margin: 5px;\n  opacity: 0;\n  position: relative;\n  width: 0px;\n  transition: width 250ms, opacity 250ms;\n}\n.animal-badge.visible {\n  opacity: 1;\n  width: 100px;\n}\n.animal-badge:hover .close-button {\n  display: block;\n}\n.animal-badge .close-button {\n  cursor: pointer;\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.animal-badge .close-button::before {\n  color: #f00;\n  content: \"x\";\n  font-size: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _panel = __webpack_require__(0);

var _template = __webpack_require__(41);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(42);

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
          welcomeAnimals: [{ name: 'doge', style: { bottom: '-200%', left: '5%' } }, { name: 'husky', style: { top: '20%', right: '25%' } }, { name: 'raccoon', style: { bottom: '10%', left: '45%' } }]
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _jade_template_fn(locals) {
  locals = locals || {};;;
  var result_of_with = function ($helpers, Array, animals, welcomeAnimals) {
    var h = __webpack_require__(0).h;
    return {
      value: h("div", {
        "class": {
          'view-welcome': true
        }
      }, function () {
        var __jade_nodes = [];
        __jade_nodes = __jade_nodes.concat(h("h1", function () {
          var __jade_nodes = [];
          __jade_nodes = __jade_nodes.concat("Welcome to the farm!");;
          return __jade_nodes;
        }.call(this).filter(Boolean)));
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
        }.call(this).filter(Boolean))); /*  These animals use a bit of inline styling, for positioning which can be controlled by state updates */
        __jade_nodes = __jade_nodes.concat(function () {
          var $$obj = welcomeAnimals;
          var $$eachNodes;
          var $$iterated = false;
          if (Array.isArray($$obj)) {
            $$eachNodes = $$obj.reduce(function ($$eachNodes, animal, $index) {
              $$iterated = true;
              return $$eachNodes.concat(function () {
                var __jade_nodes = [];
                __jade_nodes = __jade_nodes.concat(h("animal-badge", {
                  "attrs": {
                    animal: animal.name
                  },
                  "style": animal.style,
                  "class": {
                    'visible': true
                  }
                }));;
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
                  var animal = $$obj[$index];
                  $$eachNodes = $$eachNodes.concat(function () {
                    var __jade_nodes = [];
                    __jade_nodes = __jade_nodes.concat(h("animal-badge", {
                      "attrs": {
                        animal: animal.name
                      },
                      "style": animal.style,
                      "class": {
                        'visible': true
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
      }.call(this).filter(Boolean))
    };
  }.call(this, "$helpers" in locals ? locals.$helpers : typeof $helpers !== "undefined" ? $helpers : undefined, "Array" in locals ? locals.Array : typeof Array !== "undefined" ? Array : undefined, "animals" in locals ? locals.animals : typeof animals !== "undefined" ? animals : undefined, "welcomeAnimals" in locals ? locals.welcomeAnimals : typeof welcomeAnimals !== "undefined" ? welcomeAnimals : undefined);
  if (result_of_with) return result_of_with.value;
}
module.exports = _jade_template_fn;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _panel = __webpack_require__(0);

var _template = __webpack_require__(44);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(45);

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
/* 44 */
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
        }());
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
                      visible: false,
                      delayed: {
                        visible: true
                      },
                      remove: {
                        visible: false,
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
                          visible: false,
                          delayed: {
                            visible: true
                          },
                          remove: {
                            visible: false,
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
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _jade_template_fn(locals) {
  locals = locals || {};;;
  var result_of_with = function ($component, $helpers, Array, String, view) {
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
        }.call(this).filter(Boolean)));
        __jade_nodes = __jade_nodes.concat(h("div", {
          "class": {
            'farm': true
          }
        }, [__vjadeSafeCode($component.child("view-" + view))]));;
        return __jade_nodes;
      }.call(this).filter(Boolean))
    };
  }.call(this, "$component" in locals ? locals.$component : typeof $component !== "undefined" ? $component : undefined, "$helpers" in locals ? locals.$helpers : typeof $helpers !== "undefined" ? $helpers : undefined, "Array" in locals ? locals.Array : typeof Array !== "undefined" ? Array : undefined, "String" in locals ? locals.String : typeof String !== "undefined" ? String : undefined, "view" in locals ? locals.view : typeof view !== "undefined" ? view : undefined);
  if (result_of_with) return result_of_with.value;
}
module.exports = _jade_template_fn;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);