"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_show_ShowOneEquipment_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/show/ShowOneEquipment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/show/ShowOneEquipment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ShowOneEquipment",
  data: function data() {
    return {
      equipment: null
    };
  },
  mounted: function mounted() {
    this.getEquipment();
  },
  methods: {
    getEquipment: function getEquipment() {
      var _this = this;

      axios.get("/api/equipment/".concat(this.$route.params.id)).then(function (res) {
        _this.equipment = res.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/show/ShowOneEquipment.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/show/ShowOneEquipment.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowOneEquipment_vue_vue_type_template_id_47c2059c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowOneEquipment.vue?vue&type=template&id=47c2059c&scoped=true& */ "./resources/js/components/show/ShowOneEquipment.vue?vue&type=template&id=47c2059c&scoped=true&");
/* harmony import */ var _ShowOneEquipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowOneEquipment.vue?vue&type=script&lang=js& */ "./resources/js/components/show/ShowOneEquipment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowOneEquipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowOneEquipment_vue_vue_type_template_id_47c2059c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowOneEquipment_vue_vue_type_template_id_47c2059c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "47c2059c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/show/ShowOneEquipment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/show/ShowOneEquipment.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/show/ShowOneEquipment.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowOneEquipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowOneEquipment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/show/ShowOneEquipment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowOneEquipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/show/ShowOneEquipment.vue?vue&type=template&id=47c2059c&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/show/ShowOneEquipment.vue?vue&type=template&id=47c2059c&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowOneEquipment_vue_vue_type_template_id_47c2059c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowOneEquipment_vue_vue_type_template_id_47c2059c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowOneEquipment_vue_vue_type_template_id_47c2059c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowOneEquipment.vue?vue&type=template&id=47c2059c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/show/ShowOneEquipment.vue?vue&type=template&id=47c2059c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/show/ShowOneEquipment.vue?vue&type=template&id=47c2059c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/show/ShowOneEquipment.vue?vue&type=template&id=47c2059c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.equipment
      ? _c(
          "div",
          [
            _c("div", [
              _vm._v(
                "\n            Тип оборудования: " +
                  _vm._s(this.equipment.equipment_types_id) +
                  "\n        "
              ),
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "\n            Серйный номер: " +
                  _vm._s(this.equipment.serial_number) +
                  "\n        "
              ),
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "\n            Примечание: " +
                  _vm._s(this.equipment.note) +
                  "\n        "
              ),
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                attrs: {
                  to: {
                    name: "edit.equipment",
                    params: { id: this.equipment.id },
                  },
                },
              },
              [_vm._v("Edit")]
            ),
          ],
          1
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);