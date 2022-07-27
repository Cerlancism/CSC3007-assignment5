/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6187:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(144);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=1c0b2d9e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('v-card',{class:_vm.radius},[_c('v-toolbar',{attrs:{"color":"dark","dark":"","flat":""},scopedSlots:_vm._u([{key:"extension",fn:function(){return [_c('v-tabs',{attrs:{"align-with-title":""},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('v-tabs-slider',{attrs:{"color":"white"}}),_c('v-tab',{attrs:{"to":"/"}},[_vm._v("Home")]),_c('v-tab',{attrs:{"to":"/about"}},[_vm._v("About")])],1)]},proxy:true}])},[_c('v-toolbar-title',[_vm._v("Singapore PSI Map")]),_c('v-spacer')],1)],1),_c('v-main',[_c('router-view')],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3796);
// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/index.js + 7 modules
var lib = __webpack_require__(1929);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=ts&


var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let default_1 = class default_1 extends lib/* Vue */.w3 {
  constructor(...args) {
    super(...args);

    (0,defineProperty/* default */.Z)(this, "tab", null);

    (0,defineProperty/* default */.Z)(this, "items", ["Home", "About"]);

    (0,defineProperty/* default */.Z)(this, "radius", "rounded-0");
  }

};
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
var VToolbar = __webpack_require__(5218);
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

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(8345);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Home.vue?vue&type=template&id=54eb7308&
var Homevue_type_template_id_54eb7308_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('MapPSI')],1)}
var Homevue_type_template_id_54eb7308_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapPSI.vue?vue&type=template&id=52cf8e38&
var MapPSIvue_type_template_id_52cf8e38_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticStyle:{"max-width":"1600px"}},[_c('v-row',[_c('v-col',{attrs:{"cols":"12"}},[_c('h1',{staticClass:"text-center"},[_vm._v("PSI")]),_c('p',{staticClass:"text-center"},[_vm._v("Last updated: "+_vm._s(_vm.lastUpdated))])]),_c('v-col',{attrs:{"cols":"12"}},[_c('l-map',{staticStyle:{"height":"640px"},attrs:{"max-bounds":_vm.latLngBounds([[1.1, 103.5], [1.5, 104.3]]),"zoom":12,"maxZoom":18,"minZoom":12,"center":[1.3521, 103.8198]}},[_c('l-tile-layer',{attrs:{"url":"https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png","attribution":"<img src=\"https://www.onemap.gov.sg/docs/maps/images/oneMap64-01.png\" style=\"height:20px;width:20px;\"/> OneMap | Map data &copy; contributors, <a href=\"http://SLA.gov.sg\">Singapore Land Authority</a>"}}),_vm._l((_vm.psiMarkers),function(item){return _c('l-marker',{key:item.location,attrs:{"lat-lng":item.center}},[_c('l-icon',{attrs:{"class-name":item.class + " psi-marker"}},[_c('div',{staticClass:"headline"},[_vm._v(" "+_vm._s(item.value)+" ")])])],1)})],2)],1)],1)],1)}
var MapPSIvue_type_template_id_52cf8e38_staticRenderFns = []


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
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // import * as d3 from "d3";




delete leaflet_src.Icon.Default.prototype._getIconUrl;
leaflet_src.Icon.Default.mergeOptions({
  iconRetinaUrl: __webpack_require__(6431),
  iconUrl: __webpack_require__(6266),
  shadowUrl: __webpack_require__(8858)
});
let MapPSI = class MapPSI extends lib/* Vue */.w3 {
  constructor(...args) {
    super(...args);

    (0,defineProperty/* default */.Z)(this, "latLngBounds", leaflet_src.latLngBounds);

    (0,defineProperty/* default */.Z)(this, "psiMarkers", [{
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

    (0,defineProperty/* default */.Z)(this, "psiResponse", void 0);

    (0,defineProperty/* default */.Z)(this, "lastUpdated", "");
  }

  /**
   * https://www.haze.gov.sg/
   * @param psi
   */
  getPSISeverityClass(psi) {
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

  async mounted() {
    try {
      const response = await fetch("https://api.data.gov.sg/v1/environment/psi");

      if (!response.ok) {
        throw "Not ok response";
      } // await sleepAsync(1000)


      this.psiResponse = JSON.parse(await response.text());
      const psi_24 = this.psiResponse.items[0].readings["psi_twenty_four_hourly"];

      for (const key in psi_24) {
        if (Object.prototype.hasOwnProperty.call(psi_24, key)) {
          const value = psi_24[key];
          const target = this.psiMarkers.find(x => x.location === key);

          if (!target) {
            continue;
          }

          console.log(key, value);
          target.value = value;
          target.class = this.getPSISeverityClass(value);
        }
      }

      this.lastUpdated = new Date(this.psiResponse.items[0].update_timestamp).toLocaleString();
    } catch (e) {
      const error = e;
      console.error(error);
      alert("API Error: " + error.message);
    }
  }

};
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
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let Home = class Home extends lib/* Vue */.w3 {
  async mounted() {
    return;
  }

  unmounted() {
    console.log(`unmounted ${this.constructor.name}`);
  }

};
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
const routes = [{
  path: '/',
  name: 'home',
  component: views_Home
}, {
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => __webpack_require__.e(/* import() | about */ 443).then(__webpack_require__.bind(__webpack_require__, 2464))
}];
const router = new vue_router_esm/* default */.Z({
  routes
});
/* harmony default export */ var src_router = (router);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/framework.js + 24 modules
var framework = __webpack_require__(1910);
;// CONCATENATED MODULE: ./src/plugins/vuetify.ts


vue_runtime_esm/* default.use */.Z.use(framework/* default */.Z);
/* harmony default export */ var vuetify = (new framework/* default */.Z({}));
;// CONCATENATED MODULE: ./src/main.ts




vue_runtime_esm/* default.config.productionTip */.Z.config.productionTip = false;
new vue_runtime_esm/* default */.Z({
  router: src_router,
  vuetify: vuetify,
  render: h => h(App)
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
/******/ 			return "js/" + "about" + "." + "6717e1b7" + ".js";
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
//# sourceMappingURL=app.7ac3a2c8.js.map