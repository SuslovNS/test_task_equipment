"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_show_ShowAllEquipment_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/show/ShowAllEquipment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/show/ShowAllEquipment.vue?vue&type=script&lang=js& ***!
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
  name: "ShowAllEquipment",
  data: function data() {
    return {
      equipment: null,
      equiptype: null,
      pagination: {},
      paginationpage: {},
      searchsn: '',
      searchnote: ''
    };
  },
  mounted: function mounted() {
    this.getEquipment();
    this.getEquiptype();
  },
  methods: {
    getEquipment: function getEquipment(page_url) {
      var _this = this;

      page_url = page_url || '/api/equipment';
      axios.get(page_url).then(function (res) {
        _this.equipment = res.data.data;

        _this.makePagination(res.data.links);

        _this.makePaginationPage(res.data.meta);
      });
    },
    getEquiptype: function getEquiptype() {
      var _this2 = this;

      axios.get('/api/equipment-type/').then(function (res) {
        _this2.equiptype = res.data.data;
      });
    },
    deleteEquipment: function deleteEquipment(id) {
      var _this3 = this;

      axios["delete"]("/api/equipment/".concat(id)).then(function (res) {
        _this3.getEquipment();
      });
    },
    makePagination: function makePagination(res) {
      var pagination = {
        last_page: res.last,
        prev_page_url: res.prev,
        next_page_url: res.next
      };
      this.pagination = pagination;
    },
    makePaginationPage: function makePaginationPage(res) {
      var paginationpage = {
        current_page: res.current_page,
        last_page: res.last_page
      };
      this.paginationpage = paginationpage;
    },
    searchsndata: function searchsndata(val) {
      var _this4 = this;

      axios.get('api/equipment/search/' + val).then(function (res) {
        _this4.equipment = res.data.data;
      });
    },
    searchnotedata: function searchnotedata(value) {
      var _this5 = this;

      axios.get('api/equipment/note/search/' + value).then(function (res) {
        _this5.equipment = res.data.data;
      });
    }
  },
  watch: {
    searchsn: function searchsn() {
      this.searchsndata(this.searchsn);
    },
    searchnote: function searchnote() {
      this.searchnotedata(this.searchnote);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/show/ShowAllEquipment.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/show/ShowAllEquipment.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowAllEquipment_vue_vue_type_template_id_6b219241_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowAllEquipment.vue?vue&type=template&id=6b219241&scoped=true& */ "./resources/js/components/show/ShowAllEquipment.vue?vue&type=template&id=6b219241&scoped=true&");
/* harmony import */ var _ShowAllEquipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowAllEquipment.vue?vue&type=script&lang=js& */ "./resources/js/components/show/ShowAllEquipment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowAllEquipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowAllEquipment_vue_vue_type_template_id_6b219241_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowAllEquipment_vue_vue_type_template_id_6b219241_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6b219241",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/show/ShowAllEquipment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/show/ShowAllEquipment.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/show/ShowAllEquipment.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllEquipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowAllEquipment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/show/ShowAllEquipment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllEquipment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/show/ShowAllEquipment.vue?vue&type=template&id=6b219241&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/show/ShowAllEquipment.vue?vue&type=template&id=6b219241&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllEquipment_vue_vue_type_template_id_6b219241_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllEquipment_vue_vue_type_template_id_6b219241_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAllEquipment_vue_vue_type_template_id_6b219241_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowAllEquipment.vue?vue&type=template&id=6b219241&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/show/ShowAllEquipment.vue?vue&type=template&id=6b219241&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/show/ShowAllEquipment.vue?vue&type=template&id=6b219241&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/show/ShowAllEquipment.vue?vue&type=template&id=6b219241&scoped=true& ***!
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
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.searchsn,
          expression: "searchsn",
        },
      ],
      staticClass: "form-control-lg offset-3",
      attrs: { type: "text", placeholder: "Поиск по cерийному номеру..." },
      domProps: { value: _vm.searchsn },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.searchsn = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.searchnote,
          expression: "searchnote",
        },
      ],
      staticClass: "form-control-lg offset-4",
      attrs: { type: "text", placeholder: "Поиск по примечанию..." },
      domProps: { value: _vm.searchnote },
      on: {
        input: function ($event) {
          if ($event.target.composing) {
            return
          }
          _vm.searchnote = $event.target.value
        },
      },
    }),
    _vm._v(" "),
    _c("table", { staticClass: "table" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.equipment, function (equip) {
          return _c("tr", [
            _c("td", [_vm._v(_vm._s(equip.id))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(equip.equipment_types_id))]),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "show.equipment.one",
                        params: { id: equip.id },
                      },
                    },
                  },
                  [_vm._v(" " + _vm._s(equip.serial_number))]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(equip.note))]),
            _vm._v(" "),
            _c("td", [
              _c(
                "a",
                {
                  staticClass: "btn btn-outline-danger",
                  attrs: { href: "#" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.deleteEquipment(equip.id)
                    },
                  },
                },
                [_vm._v("Удалить")]
              ),
            ]),
          ])
        }),
        0
      ),
    ]),
    _vm._v(" "),
    _c("nav", { attrs: { "aria-label": "Page navigation example" } }, [
      _c("ul", { staticClass: "pagination" }, [
        _c(
          "li",
          {
            staticClass: "page-item",
            class: { disabled: !_vm.pagination.prev_page_url },
            on: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.getEquipment(_vm.pagination.prev_page_url)
              },
            },
          },
          [
            _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
              _vm._v("Предыдущая страница"),
            ]),
          ]
        ),
        _vm._v(" "),
        _c("li", { staticClass: "page-item disabled" }, [
          _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
            _vm._v(
              "\n                    Страница " +
                _vm._s(_vm.paginationpage.current_page) +
                " из " +
                _vm._s(_vm.paginationpage.last_page) +
                "\n                "
            ),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "page-item",
            class: { disabled: !_vm.pagination.next_page_url },
            on: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.getEquipment(_vm.pagination.next_page_url)
              },
            },
          },
          [
            _c("a", { staticClass: "page-link", attrs: { href: "#" } }, [
              _vm._v("Следующая страница"),
            ]),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ID типа оборудования")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Серийный номер")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Примечание")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);