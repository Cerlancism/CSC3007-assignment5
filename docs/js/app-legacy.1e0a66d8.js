/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6187:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__(7727);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(144);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=1c0b2d9e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('v-card',{class:_vm.radius},[_c('v-toolbar',{attrs:{"color":"dark","dark":"","flat":""},scopedSlots:_vm._u([{key:"extension",fn:function(){return [_c('v-tabs',{attrs:{"align-with-title":""},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('v-tabs-slider',{attrs:{"color":"white"}}),_c('v-tab',{attrs:{"to":"/"}},[_vm._v("Home")]),_c('v-tab',{attrs:{"to":"/about"}},[_vm._v("About")])],1)]},proxy:true}])},[_c('v-toolbar-title',[_vm._v("Singapore PSI Map")]),_c('v-spacer')],1)],1),_c('v-main',[_c('router-view')],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2751);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(6133);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(3263);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(796);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 2 modules
var createSuper = __webpack_require__(6035);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3796);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(9726);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(5003);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.to-string-tag.js
var es_reflect_to_string_tag = __webpack_require__(1299);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 7 modules
var lib = __webpack_require__(1929);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=ts&












var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0,esm_typeof/* default */.Z)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var default_1 = /*#__PURE__*/function (_Vue) {
  (0,inherits/* default */.Z)(default_1, _Vue);

  var _super = (0,createSuper/* default */.Z)(default_1);

  function default_1() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, default_1);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "tab", null);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "items", ["Home", "About"]);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "radius", "rounded-0");

    return _this;
  }

  return (0,createClass/* default */.Z)(default_1);
}(lib/* Vue */.w3);

default_1 = __decorate([lib/* Component */.wA], default_1);
/* harmony default export */ var Appvue_type_script_lang_ts_ = (default_1);
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts&
 /* harmony default export */ var src_Appvue_type_script_lang_ts_ = (Appvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(3453);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js + 1 modules
var VApp = __webpack_require__(7524);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js + 5 modules
var VCard = __webpack_require__(26);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VMain/VMain.js + 1 modules
var VMain = __webpack_require__(7877);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(9762);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTab.js
var VTab = __webpack_require__(4227);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js + 24 modules
var VTabs = __webpack_require__(81);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabsSlider.js
var VTabsSlider = __webpack_require__(1208);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js + 6 modules
var VToolbar = __webpack_require__(7688);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var components_VToolbar = __webpack_require__(7921);
;// CONCATENATED MODULE: ./src/App.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  src_Appvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);

/* vuetify-loader */
;









installComponents_default()(component, {VApp: VApp/* default */.Z,VCard: VCard/* default */.Z,VMain: VMain/* default */.Z,VSpacer: VSpacer/* default */.Z,VTab: VTab/* default */.Z,VTabs: VTabs/* default */.Z,VTabsSlider: VTabsSlider/* default */.Z,VToolbar: VToolbar/* default */.Z,VToolbarTitle: components_VToolbar/* VToolbarTitle */.qW})

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(8345);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Home.vue?vue&type=template&id=54eb7308&
var Homevue_type_template_id_54eb7308_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('MapPSI')],1)}
var Homevue_type_template_id_54eb7308_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(7906);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(6198);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapPSI.vue?vue&type=template&id=52cf8e38&
var MapPSIvue_type_template_id_52cf8e38_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticStyle:{"max-width":"1600px"}},[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('h1',{staticClass:"text-center"},[_vm._v("PSI")]),_c('p',{staticClass:"text-center"},[_vm._v("Last updated: "+_vm._s(_vm.lastUpdated))])]),_c('v-col',{attrs:{"cols":"12"}},[_c('l-map',{staticStyle:{"height":"640px"},attrs:{"max-bounds":_vm.latLngBounds([[1.1, 103.5], [1.5, 104.3]]),"zoom":12,"maxZoom":18,"minZoom":12,"center":[1.3521, 103.8198]}},[_c('l-tile-layer',{attrs:{"url":"https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png","attribution":"<img src=\"https://www.onemap.gov.sg/docs/maps/images/oneMap64-01.png\" style=\"height:20px;width:20px;\"/> OneMap | Map data &copy; contributors, <a href=\"http://SLA.gov.sg\">Singapore Land Authority</a>"}}),_vm._l((_vm.psiMarkers),function(item){return _c('l-marker',{key:item.location,attrs:{"lat-lng":item.center}},[_c('l-icon',{attrs:{"class-name":item.class + " psi-marker"}},[_c('div',{staticClass:"headline"},[_vm._v(" "+_vm._s(item.value)+" ")])])],1)})],2)],1)],1)],1)}
var MapPSIvue_type_template_id_52cf8e38_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(9826);
// EXTERNAL MODULE: ./node_modules/leaflet/dist/leaflet-src.js
var leaflet_src = __webpack_require__(5243);
// EXTERNAL MODULE: ./node_modules/vue2-leaflet/dist/components/LMap.js
var LMap = __webpack_require__(5352);
// EXTERNAL MODULE: ./node_modules/vue2-leaflet/dist/components/LTileLayer.js
var LTileLayer = __webpack_require__(2727);
// EXTERNAL MODULE: ./node_modules/vue2-leaflet/dist/components/LMarker.js
var LMarker = __webpack_require__(8380);
// EXTERNAL MODULE: ./node_modules/vue2-leaflet/dist/components/LIcon.js
var LIcon = __webpack_require__(8592);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapPSI.vue?vue&type=script&lang=ts&
















var MapPSIvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0,esm_typeof/* default */.Z)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // import * as d3 from "d3";




delete leaflet_src.Icon.Default.prototype._getIconUrl;
leaflet_src.Icon.Default.mergeOptions({
  iconRetinaUrl: __webpack_require__(6431),
  iconUrl: __webpack_require__(6266),
  shadowUrl: __webpack_require__(8858)
});

var MapPSI = /*#__PURE__*/function (_Vue) {
  (0,inherits/* default */.Z)(MapPSI, _Vue);

  var _super = (0,createSuper/* default */.Z)(MapPSI);

  function MapPSI() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, MapPSI);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "latLngBounds", leaflet_src.latLngBounds);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "psiMarkers", [{
      location: 'central',
      center: [1.35735, 103.82],
      value: "-",
      class: "psi-normal"
    }, {
      location: 'south',
      center: [1.29587, 103.82],
      value: "-",
      class: "psi-normal"
    }, {
      location: 'north',
      center: [1.41803, 103.82],
      value: "-",
      class: "psi-normal"
    }, {
      location: 'east',
      center: [1.35735, 103.94],
      value: "-",
      class: "psi-normal"
    }, {
      location: 'west',
      center: [1.35735, 103.7],
      value: "-",
      class: "psi-normal"
    }]);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "psiResponse", void 0);

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "lastUpdated", "");

    return _this;
  }

  (0,createClass/* default */.Z)(MapPSI, [{
    key: "getPSISeverityClass",
    value:
    /**
     * https://www.haze.gov.sg/
     * @param psi
     */
    function getPSISeverityClass(psi) {
      if (psi <= 50) {
        return "psi-normal";
      } else if (psi >= 51 && psi <= 100) {
        return "psi-moderate";
      } else if (psi >= 101 && psi <= 200) {
        return "psi-unhealthy";
      } else if (psi >= 201 && psi <= 300) {
        return "psi-veryunhealthy";
      } else {
        return "psi-hardardous";
      }
    }
  }, {
    key: "mounted",
    value: function () {
      var _mounted = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
        var _this2 = this;

        var response, psi_24, _loop, key, _ret, error;

        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("https://api.data.gov.sg/v1/environment/psi");

              case 3:
                response = _context.sent;

                if (response.ok) {
                  _context.next = 6;
                  break;
                }

                throw "Not ok response";

              case 6:
                _context.t0 = JSON;
                _context.next = 9;
                return response.text();

              case 9:
                _context.t1 = _context.sent;
                this.psiResponse = _context.t0.parse.call(_context.t0, _context.t1);
                psi_24 = this.psiResponse.items[0].readings["psi_twenty_four_hourly"];

                _loop = function _loop(key) {
                  if (Object.prototype.hasOwnProperty.call(psi_24, key)) {
                    var value = psi_24[key];

                    var target = _this2.psiMarkers.find(function (x) {
                      return x.location === key;
                    });

                    if (!target) {
                      return "continue";
                    }

                    console.log(key, value);
                    target.value = value;
                    target.class = _this2.getPSISeverityClass(value);
                  }
                };

                _context.t2 = (0,regeneratorRuntime/* default */.Z)().keys(psi_24);

              case 14:
                if ((_context.t3 = _context.t2()).done) {
                  _context.next = 21;
                  break;
                }

                key = _context.t3.value;
                _ret = _loop(key);

                if (!(_ret === "continue")) {
                  _context.next = 19;
                  break;
                }

                return _context.abrupt("continue", 14);

              case 19:
                _context.next = 14;
                break;

              case 21:
                this.lastUpdated = new Date(this.psiResponse.items[0].update_timestamp).toLocaleString();
                _context.next = 29;
                break;

              case 24:
                _context.prev = 24;
                _context.t4 = _context["catch"](0);
                error = _context.t4;
                console.error(error);
                alert("API Error: " + error.message);

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 24]]);
      }));

      function mounted() {
        return _mounted.apply(this, arguments);
      }

      return mounted;
    }()
  }]);

  return MapPSI;
}(lib/* Vue */.w3);

MapPSI = MapPSIvue_type_script_lang_ts_decorate([(0,lib/* Component */.wA)({
  components: {
    LMap: LMap/* default */.Z,
    LTileLayer: LTileLayer/* default */.Z,
    LMarker: LMarker/* default */.Z,
    LIcon: LIcon/* default */.Z
  }
})], MapPSI);
/* harmony default export */ var MapPSIvue_type_script_lang_ts_ = (MapPSI);
;// CONCATENATED MODULE: ./src/components/MapPSI.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_MapPSIvue_type_script_lang_ts_ = (MapPSIvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapPSI.vue?vue&type=style&index=0&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/MapPSI.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapPSI.vue?vue&type=style&index=1&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/MapPSI.vue?vue&type=style&index=1&lang=css&

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(2102);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(9846);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(2877);
;// CONCATENATED MODULE: ./src/components/MapPSI.vue



;



/* normalize component */

var MapPSI_component = (0,componentNormalizer/* default */.Z)(
  components_MapPSIvue_type_script_lang_ts_,
  MapPSIvue_type_template_id_52cf8e38_render,
  MapPSIvue_type_template_id_52cf8e38_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_MapPSI = (MapPSI_component.exports);

/* vuetify-loader */
;



installComponents_default()(MapPSI_component, {VCol: VCol/* default */.Z,VContainer: VContainer/* default */.Z,VRow: VRow/* default */.Z})

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=ts&












var Homevue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : (0,esm_typeof/* default */.Z)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Home = /*#__PURE__*/function (_Vue) {
  (0,inherits/* default */.Z)(Home, _Vue);

  var _super = (0,createSuper/* default */.Z)(Home);

  function Home() {
    (0,classCallCheck/* default */.Z)(this, Home);

    return _super.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(Home, [{
    key: "mounted",
    value: function () {
      var _mounted = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee() {
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return");

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function mounted() {
        return _mounted.apply(this, arguments);
      }

      return mounted;
    }()
  }, {
    key: "unmounted",
    value: function unmounted() {
      console.log("unmounted ".concat(this.constructor.name));
    }
  }]);

  return Home;
}(lib/* Vue */.w3);

Home = Homevue_type_script_lang_ts_decorate([(0,lib/* Component */.wA)({
  components: {
    MapPSI: components_MapPSI
  }
})], Home);
/* harmony default export */ var Homevue_type_script_lang_ts_ = (Home);
;// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=script&lang=ts&
 /* harmony default export */ var views_Homevue_type_script_lang_ts_ = (Homevue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./src/views/Home.vue





/* normalize component */
;
var Home_component = (0,componentNormalizer/* default */.Z)(
  views_Homevue_type_script_lang_ts_,
  Homevue_type_template_id_54eb7308_render,
  Homevue_type_template_id_54eb7308_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var views_Home = (Home_component.exports);
;// CONCATENATED MODULE: ./src/router/index.ts






vue_runtime_esm/* default.use */.Z.use(vue_router_esm/* default */.Z);
var routes = [{
  path: '/',
  name: 'home',
  component: views_Home
}, {
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function component() {
    return __webpack_require__.e(/* import() | about */ 443).then(__webpack_require__.bind(__webpack_require__, 2464));
  }
}];
var router = new vue_router_esm/* default */.Z({
  routes: routes
});
/* harmony default export */ var src_router = (router);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/framework.js + 26 modules
var framework = __webpack_require__(5613);
;// CONCATENATED MODULE: ./src/plugins/vuetify.ts


vue_runtime_esm/* default.use */.Z.use(framework/* default */.Z);
/* harmony default export */ var vuetify = (new framework/* default */.Z({}));
;// CONCATENATED MODULE: ./src/main.ts








vue_runtime_esm/* default.config.productionTip */.Z.config.productionTip = false;
new vue_runtime_esm/* default */.Z({
  router: src_router,
  vuetify: vuetify,
  render: function render(h) {
    return h(App);
  }
}).$mount('#app');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + "about" + "-legacy." + "65262e23" + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "csc3007-assignment5:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcsc3007_assignment5"] = self["webpackChunkcsc3007_assignment5"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(6187); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app-legacy.1e0a66d8.js.map