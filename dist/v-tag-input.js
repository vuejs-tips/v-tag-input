var VTagInput =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// need to use require instead of import (changes from babel 5 to 6)
var Component = __webpack_require__(2);
module.exports = Component;

Component.install = function (Vue) {
  return Vue.component(Component.name, Component);
};
Component.version = "0.0.1";

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Component);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImluc3RhbGwiLCJWdWUiLCJjb21wb25lbnQiLCJuYW1lIiwidmVyc2lvbiIsInByb2NjZXNzIiwiZW52IiwiVkVSU0lPTiIsIndpbmRvdyIsInVzZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFNQSxZQUFZQyxRQUFRLGlCQUFSLENBQWxCO0FBQ0FDLE9BQU9DLE9BQVAsR0FBaUJILFNBQWpCOztBQUVBQSxVQUFVSSxPQUFWLEdBQW9CO0FBQUEsU0FBT0MsSUFBSUMsU0FBSixDQUFjTixVQUFVTyxJQUF4QixFQUE4QlAsU0FBOUIsQ0FBUDtBQUFBLENBQXBCO0FBQ0FBLFVBQVVRLE9BQVYsR0FBb0JDLFNBQVNDLEdBQVQsQ0FBYUMsT0FBakM7O0FBRUE7QUFDQSxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE9BQU9QLEdBQTVDLEVBQWlEO0FBQy9DTyxTQUFPUCxHQUFQLENBQVdRLEdBQVgsQ0FBZWIsU0FBZjtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uZXZlcy9Eb2N1bWVudHMvZ2l0L3Z1ZWpzLXRpcHMvdi10YWctaW5wdXQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuZWVkIHRvIHVzZSByZXF1aXJlIGluc3RlYWQgb2YgaW1wb3J0IChjaGFuZ2VzIGZyb20gYmFiZWwgNSB0byA2KVxuY29uc3QgQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9Db21wb25lbnQudnVlJylcbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50XG5cbkNvbXBvbmVudC5pbnN0YWxsID0gVnVlID0+IFZ1ZS5jb21wb25lbnQoQ29tcG9uZW50Lm5hbWUsIENvbXBvbmVudClcbkNvbXBvbmVudC52ZXJzaW9uID0gcHJvY2Nlc3MuZW52LlZFUlNJT05cblxuLy8gSW5zdGFsbCBieSBkZWZhdWx0IGlmIHVzaW5nIHRoZSBzY3JpcHQgdGFnXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICB3aW5kb3cuVnVlLnVzZShDb21wb25lbnQpXG59XG4iXX0=

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'v-tag-input',
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      } // factory function
    },
    separator: {
      type: String,
      default: ' '
    }
  },
  computed: {
    editableValue: {
      get: function get() {
        return (this.value || []).join(this.separator);
      },
      set: function set(newValue) {
        this.$emit('input', newValue.split(this.separator));
      }
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Db21wb25lbnQudnVlIl0sIm5hbWVzIjpbIm5hbWUiLCJwcm9wcyIsInZhbHVlIiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsInNlcGFyYXRvciIsIlN0cmluZyIsImNvbXB1dGVkIiwiZWRpdGFibGVWYWx1ZSIsImdldCIsImpvaW4iLCJzZXQiLCJuZXdWYWx1ZSIsIiRlbWl0Iiwic3BsaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDYkEsUUFBTSxhQURPO0FBRWJDLFNBQU87QUFDTEMsV0FBTztBQUNMQyxZQUFNQyxLQUREO0FBRUxDLGVBQVM7QUFBQSxlQUFNLEVBQU47QUFBQSxPQUZKLENBRWE7QUFGYixLQURGO0FBS0xDLGVBQVc7QUFDVEgsWUFBTUksTUFERztBQUVURixlQUFTO0FBRkE7QUFMTixHQUZNO0FBWWJHLFlBQVU7QUFDUkMsbUJBQWU7QUFDYkMsU0FEYSxpQkFDTjtBQUNMLGVBQU8sQ0FBQyxLQUFLUixLQUFMLElBQWMsRUFBZixFQUFtQlMsSUFBbkIsQ0FBd0IsS0FBS0wsU0FBN0IsQ0FBUDtBQUNELE9BSFk7QUFJYk0sU0FKYSxlQUlSQyxRQUpRLEVBSUU7QUFDYixhQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsU0FBU0UsS0FBVCxDQUFlLEtBQUtULFNBQXBCLENBQXBCO0FBQ0Q7QUFOWTtBQURQO0FBWkcsQ0FBZiIsImZpbGUiOiJDb21wb25lbnQudnVlIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9uZXZlcy9Eb2N1bWVudHMvZ2l0L3Z1ZWpzLXRpcHMvdi10YWctaW5wdXQiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICd2LXRhZy1pbnB1dCcsXG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10gLy8gZmFjdG9yeSBmdW5jdGlvblxuICAgIH0sXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnICdcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZWRpdGFibGVWYWx1ZToge1xuICAgICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlIHx8IFtdKS5qb2luKHRoaXMuc2VwYXJhdG9yKVxuICAgICAgfSxcbiAgICAgIHNldCAobmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBuZXdWYWx1ZS5zcGxpdCh0aGlzLnNlcGFyYXRvcikpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(4),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editableValue),
      expression: "editableValue"
    }],
    staticClass: "v-tag-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.editableValue)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editableValue = $event.target.value
      }
    }
  })
},staticRenderFns: []}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);