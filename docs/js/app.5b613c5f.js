/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6332:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(144);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=e5c96730&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('v-card',{class:_vm.radius},[_c('v-toolbar',{attrs:{"color":"dark","dark":"","flat":""},scopedSlots:_vm._u([{key:"extension",fn:function(){return [_c('v-tabs',{attrs:{"align-with-title":""},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('v-tabs-slider',{attrs:{"color":"white"}}),_c('v-tab',{attrs:{"to":"/"}},[_vm._v("Home")]),_c('v-tab',{attrs:{"to":"/about"}},[_vm._v("About")])],1)]},proxy:true}])},[_c('v-toolbar-title',[_vm._v("Singapore COVID 19 Force Graph")]),_c('v-spacer')],1)],1),_c('v-main',[_c('router-view')],1)],1)}
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
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTabs/VTabs.js + 16 modules
var VTabs = __webpack_require__(5673);
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
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Home.vue?vue&type=template&id=69767ee2&
var Homevue_type_template_id_69767ee2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ForceGraph')],1)}
var Homevue_type_template_id_69767ee2_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ForceGraph.vue?vue&type=template&id=afb0ad82&
var ForceGraphvue_type_template_id_afb0ad82_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticStyle:{"max-width":"1600px"}},[_c('v-row',[_c('v-col',{attrs:{"cols":"12","sm":"12","md":"8"}},[_c('v-card',[_c('svg',{attrs:{"id":"forcegraph"}})])],1),_c('v-col',{attrs:{"cols":"12","sm":"12","md":"4"}},[_c('v-card',[_c('v-card-title',[_vm._v(" Case Details ")]),_c('v-card-subtitle',[_vm._v(" Mouse hover a node to display details ")]),_c('v-card-text',[_vm._v(" P: Partially Vaccinated "),_c('br'),_vm._v(" N: Not vaccinated ")]),_c('v-list',{attrs:{"dense":""}},_vm._l((_vm.focusNode),function(value,key){return _c('v-list-item',{key:key},[_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.capitalise(key)))]),_c('v-list-item-subtitle',[_vm._v(_vm._s(value + " "))])],1)],1)}),1)],1)],1)],1)],1)}
var ForceGraphvue_type_template_id_afb0ad82_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/d3/src/index.js + 130 modules
var src = __webpack_require__(196);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ForceGraph.vue?vue&type=script&lang=ts&


var ForceGraphvue_type_script_lang_ts_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ForceGraph = class ForceGraph extends lib/* Vue */.w3 {
  constructor(...args) {
    super(...args);

    (0,defineProperty/* default */.Z)(this, "focusNode", {
      id: "",
      gender: "",
      age: "",
      nationality: "",
      occupation: "",
      organization: "",
      date: "",
      serology: "",
      vaccinated: ""
    });
  }

  capitalise(text) {
    return text.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    });
  }

  async mounted() {
    let width = 800,
        height = 600;
    const radius = 16;
    const arrowSize = 10;
    let svg = src/* select */.Ys("#forcegraph").attr("viewBox", "0 0 " + width + " " + height);
    const [graphDataLinks, graphDataNodes] = await Promise.all([src/* json */.AVB("data/links-sample.json"), src/* json */.AVB("data/cases-sample.json")]);
    graphDataLinks.forEach(e => {
      e.source = e.infector;
      e.target = e.infectee;
    }); // console.log("links", graphDataLinks); //links
    // console.log("cases", graphDataNodes); //cases
    // Arrow head

    svg.append("defs").append("marker").attr("id", "arrowhead").attr("viewBox", "0 -5 10 10").attr("refX", 0).attr("refY", 0).attr("markerWidth", arrowSize).attr("markerHeight", arrowSize).attr("orient", "auto").append("path").attr("d", "M0,-5L10,0L0,5"); // Path line

    let linkpath = svg.append("g").attr("id", "links").selectAll("path").data(graphDataLinks).enter().append("path").attr("fill", "none").attr("stroke", "black").attr("marker-end", "url(#arrowhead)"); // Node g

    let node = svg.append("g").attr("id", "nodes").selectAll("g").data(graphDataNodes).enter().append("g").on("mouseover", (e, data) => {
      src/* select */.Ys(e.target).classed("node-hover", true);

      for (const key in this.focusNode) {
        if (Object.prototype.hasOwnProperty.call(this.focusNode, key)) {
          this.focusNode[key] = data[key].toString();
        }
      }
    }).on("mouseout", (e, data) => {
      src/* select */.Ys(e.target).classed("node-hover", false);

      for (const key in this.focusNode) {
        if (Object.prototype.hasOwnProperty.call(this.focusNode, key)) {
          this.focusNode[key] = "";
        }
      }
    }).call(src/* drag */.ohM().on("start", dragstarted).on("drag", dragged).on("end", dragended)); // Circles

    node.append("circle").attr("r", radius).style("fill", d => d.gender === "female" ? "palevioletred" : "steelblue"); // Labels

    node.append('text').attr('text-anchor', 'middle').attr('dominant-baseline', 'central').attr('font-size', '18px').style("pointer-events", "none").text(d => d.vaccinated == "no" ? "N" : d.vaccinated.startsWith("partial") ? "P" : ""); // Force 

    let simulation = src/* forceSimulation */.A4v().nodes(graphDataNodes).force("x", src/* forceX */.RUJ().strength(0.1).x(width / 2)).force("y", src/* forceY */.Mrm().strength(0.1).y(height / 2)).force("link", src/* forceLink */.Fsl(graphDataLinks).id(d => d.id)).force("charge", src/* forceManyBody */.q5i().strength(20)).force("collide", src/* forceCollide */.Hh().strength(0.3).radius(radius * 3)).on("tick", () => {
      // node.attr("cx", d => d.x as number)
      //     .attr("cy", d => d.y as number)
      node.attr("transform", d => "translate(" + d.x + "," + d.y + ")"); // Curve path

      linkpath.attr("d", d => {
        // https://stackoverflow.com/questions/16568313/arrows-on-links-in-d3js-force-layout
        const dx = d.target.x - d.source.x,
              dy = d.target.y - d.source.y,
              dr = Math.sqrt(dx * dx + dy * dy),
              gamma = Math.atan2(dy, dx),
              // Math.atan2 returns the angle in the correct quadrant as opposed to Math.atan
        sx = Math.max(radius, Math.min(width - radius, d.source.x + Math.cos(gamma) * radius)),
              sy = Math.max(radius, Math.min(height - radius, d.source.y + Math.sin(gamma) * radius)),
              // Recall that 10 is the size of the arrow
        tx = Math.max(radius, Math.min(width - radius, d.target.x - Math.cos(gamma) * (radius + arrowSize))),
              ty = Math.max(radius, Math.min(height - radius, d.target.y - Math.sin(gamma) * (radius + arrowSize))); // If you like a tighter curve, you may recalculate dx dy dr:
        //dx = tx - sx;
        //dy = ty - sy;
        //dr = Math.sqrt(dx * dx + dy * dy);

        return "M" + sx + "," + sy + "A" + dr + "," + dr + " 0 0,1 " + tx + "," + ty;
      }); // Straight path
      // linkpath
      //     .attr("d", d => "M" + d.source.x + "," + d.source.y + " " + d.target.x + "," + d.target.y);
    });

    function dragstarted(event, d) {
      if (!event.active) {
        simulation.alphaTarget(0.05).restart();
      } else {
        console.log("dragstarted event.active", event.active, event);
      }

      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) {
        simulation.alphaTarget(0);
      } else {
        console.log("dragended event.active", event.active, event);
      }

      d.fx = null;
      d.fy = null;
    }
  }

};
ForceGraph = ForceGraphvue_type_script_lang_ts_decorate([lib/* Component */.wA], ForceGraph);
/* harmony default export */ var ForceGraphvue_type_script_lang_ts_ = (ForceGraph);
;// CONCATENATED MODULE: ./src/components/ForceGraph.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_ForceGraphvue_type_script_lang_ts_ = (ForceGraphvue_type_script_lang_ts_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ForceGraph.vue?vue&type=style&index=0&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ForceGraph.vue?vue&type=style&index=0&lang=css&

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(7118);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(2102);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(9846);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js + 1 modules
var VList = __webpack_require__(6816);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js + 1 modules
var VListItem = __webpack_require__(7620);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 11 modules
var components_VList = __webpack_require__(8246);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(2877);
;// CONCATENATED MODULE: ./src/components/ForceGraph.vue



;


/* normalize component */

var ForceGraph_component = (0,componentNormalizer/* default */.Z)(
  components_ForceGraphvue_type_script_lang_ts_,
  ForceGraphvue_type_template_id_afb0ad82_render,
  ForceGraphvue_type_template_id_afb0ad82_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_ForceGraph = (ForceGraph_component.exports);

/* vuetify-loader */
;












installComponents_default()(ForceGraph_component, {VCard: VCard/* default */.Z,VCardSubtitle: components_VCard/* VCardSubtitle */.Qq,VCardText: components_VCard/* VCardText */.ZB,VCardTitle: components_VCard/* VCardTitle */.EB,VCol: VCol/* default */.Z,VContainer: VContainer/* default */.Z,VList: VList/* default */.Z,VListItem: VListItem/* default */.Z,VListItemContent: components_VList/* VListItemContent */.km,VListItemSubtitle: components_VList/* VListItemSubtitle */.oZ,VListItemTitle: components_VList/* VListItemTitle */.V9,VRow: VRow/* default */.Z})

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
    ForceGraph: components_ForceGraph
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
  Homevue_type_template_id_69767ee2_render,
  Homevue_type_template_id_69767ee2_staticRenderFns,
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
  component: () => __webpack_require__.e(/* import() | about */ 443).then(__webpack_require__.bind(__webpack_require__, 7454))
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			return "js/" + "about" + "." + "bfbc9f1f" + ".js";
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
/******/ 		var dataWebpackPrefix = "csc3007-assignment4:";
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkcsc3007_assignment4"] = self["webpackChunkcsc3007_assignment4"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(6332); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.5b613c5f.js.map