"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_create_CreateEquipment_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/create/CreateEquipment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/create/CreateEquipment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CreateEquipment",
  data: function data() {
    return {
      equipment_types_id: null,
      equiptype: null,
      serial_number: null,
      note: null,
      file: '',
      errors: []
    };
  },
  mounted: function mounted() {
    this.getEquiptype();
  },
  methods: {
    store: function store() {
      var _this = this;

      axios.post('api/store/equipment', {
        equipment_types_id: this.equipment_types_id,
        serial_number: this.serial_number,
        note: this.note
      }).then(function (res) {
        _this.$router.push({
          name: 'show.equipment'
        });
      })["catch"](function (error) {
        _this.errors = error.response.data.errors.serial_number;
        console.log(errors);
      });
    },
    getEquiptype: function getEquiptype() {
      var _this2 = this;

      axios.get('/api/equipment-type/').then(function (res) {
        _this2.equiptype = res.data.data;
      });
    },
    onChange: function onChange(e) {
      console.log('selected file', e.target.files[0]);
      this.file = e.target.files[0];
    },
    upload: function upload() {
      var _this3 = this;

      var fd = new FormData();
      fd.append('file', this.file);
      axios.post('api/equipment/upload', fd, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (res) {
        _this3.$router.push({
          name: 'show.equipment'
        });

        console.log(res.data);
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  },
  computed: {
    isDisabled: function isDisabled() {
      return this.equipment_types_id && this.serial_number && this.note;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/create/CreateEquipment.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/create/CreateEquipment.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateEquipment_vue_vue_type_template_id_2886714a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateEquipment.vue?vue&type=template&id=2886714a&scoped=true& */ "./resources/js/components/create/CreateEquipment.vue?vue&type=template&id=2886714a&scoped=true&");
/* harmony import */ var _CreateEquipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateEquipment.vue?vue&type=script&lang=js& */ "./resources/js/components/create/CreateEquipment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateEquipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateEquipment_vue_vue_type_template_id_2886714a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateEquipment_vue_vue_type_template_id_2886714a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2886714a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/create/CreateEquipment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/create/CreateEquipment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/create/CreateEquipment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEquipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateEquipment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/create/CreateEquipment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEquipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/create/CreateEquipment.vue?vue&type=template&id=2886714a&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/create/CreateEquipment.vue?vue&type=template&id=2886714a&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEquipment_vue_vue_type_template_id_2886714a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEquipment_vue_vue_type_template_id_2886714a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateEquipment_vue_vue_type_template_id_2886714a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateEquipment.vue?vue&type=template&id=2886714a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/create/CreateEquipment.vue?vue&type=template&id=2886714a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/create/CreateEquipment.vue?vue&type=template&id=2886714a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/create/CreateEquipment.vue?vue&type=template&id=2886714a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    _c("div", [
      _c(
        "div",
        { staticClass: "w-25" },
        [
          _c("div", { staticClass: "mb-3" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.equipment_types_id,
                    expression: "equipment_types_id",
                  },
                ],
                on: {
                  change: function ($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function (o) {
                        return o.selected
                      })
                      .map(function (o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.equipment_types_id = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                },
              },
              [
                _c("option", { attrs: { disabled: "" } }, [
                  _vm._v("Выберите тип оборудования"),
                ]),
                _vm._v(" "),
                _vm._l(_vm.equiptype, function (type) {
                  return _c("option", { domProps: { value: type.id } }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(type.name) +
                        "\n                    "
                    ),
                  ])
                }),
              ],
              2
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.serial_number,
                  expression: "serial_number",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Введите серийный номер" },
              domProps: { value: _vm.serial_number },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.serial_number = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.note,
                  expression: "note",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Примечание" },
              domProps: { value: _vm.note },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.note = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _vm._l(_vm.errors, function (error) {
            return _vm.errors
              ? _c("div", [
                  _c(
                    "div",
                    {
                      staticClass:
                        "m-alert m-alert--outline alert-danger alert-dismissible",
                      attrs: { role: "alert" },
                    },
                    [
                      _c("span", [
                        _vm._v(
                          "\n                        " +
                            _vm._s(error) +
                            "\n                    "
                        ),
                      ]),
                    ]
                  ),
                ])
              : _vm._e()
          }),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3" }, [
            _c("input", {
              staticClass: "btn btn-primary",
              attrs: {
                disabled: !_vm.isDisabled,
                type: "submit",
                value: "Добавить",
              },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.store.apply(null, arguments)
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c("input", {
              attrs: { type: "file" },
              on: { change: _vm.onChange },
            }),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "submit", value: "Загрузить Json" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.upload.apply(null, arguments)
                },
              },
            }),
          ]),
        ],
        2
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);