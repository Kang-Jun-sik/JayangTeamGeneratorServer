(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0e5d62"],{

/***/ "95d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7cd021a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/teamviewer.vue?vue&type=template&id=23cf4925&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"teamviewer"},[_c('table',{staticClass:"table table-striped table-hover"},[_vm._m(0),_c('tbody',[_c('h1',[_vm._v("HOME")]),_vm._l((_vm.HomeTeam),function(i){return _c('tr',{key:i.name},[_c('td',[_vm._v(_vm._s(i.name))]),_c('td',[_vm._v(_vm._s(i.position))])])}),_c('h1',[_vm._v("AWAY")]),_vm._l((_vm.AwayTeam),function(i){return _c('tr',{key:i.name},[_c('td',[_vm._v(_vm._s(i.name))]),_c('td',[_vm._v(_vm._s(i.position))])])})],2)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("멤버")]),_c('th',[_vm._v("포지션")])])])}]


// CONCATENATED MODULE: ./src/views/teamviewer.vue?vue&type=template&id=23cf4925&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/teamviewer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var teamviewervue_type_script_lang_js_ = ({
  name: "teamviewer",
  data: function data() {
    return {
      HomeTeam: [],
      AwayTeam: []
    };
  },
  mounted: function mounted() {
    this.makeTeam(JSON.parse(this.$route.query.player));
  },
  methods: {
    makeTeam: function makeTeam(playerInfo) {
      switch (playerInfo.length) {
        case 6:
          this.makeRandomTeam3on3(playerInfo);
          break;

        case 8:
          this.makeRandomTeam4on4(playerInfo);
          break;
      }
    },
    makeRandomTeam3on3: function makeRandomTeam3on3(playerinfo) {
      console.log(playerinfo);

      for (;;) {
        if (this.HomeTeam.length == 3 && this.AwayTeam.length == 3) {
          break;
        } else {
          var randomPlayer = playerinfo[Math.floor(Math.random() * playerinfo.length)];

          if (randomPlayer.assignTeam === undefined) {
            randomPlayer.assignTeam = true;

            if (this.HomeTeam.length <= 2) {
              this.HomeTeam.push(randomPlayer);
            } else if (this.AwayTeam.length <= 2) {
              this.AwayTeam.push(randomPlayer);
            }
          }
        }
      }

      console.log(this.HomeTeam);
      console.log(this.AwayTeam);
    },
    makeRandomTeam4on4: function makeRandomTeam4on4(playerinfo) {
      console.log(playerinfo);

      for (;;) {
        if (this.HomeTeam.length == 4 && this.AwayTeam.length == 4) {
          break;
        } else {
          var randomPlayer = playerinfo[Math.floor(Math.random() * playerinfo.length)];

          if (randomPlayer.assignTeam === undefined) {
            randomPlayer.assignTeam = true;

            if (this.HomeTeam.length <= 3) {
              this.HomeTeam.push(randomPlayer);
            } else if (this.AwayTeam.length <= 3) {
              this.AwayTeam.push(randomPlayer);
            }
          }
        }
      }

      console.log(this.HomeTeam);
      console.log(this.AwayTeam);
    }
  }
});
// CONCATENATED MODULE: ./src/views/teamviewer.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_teamviewervue_type_script_lang_js_ = (teamviewervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/teamviewer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_teamviewervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "23cf4925",
  null
  
)

/* harmony default export */ var teamviewer = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);