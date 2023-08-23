"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_signup_Signup_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/signup/Signup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/signup/Signup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      nameBlured: false,
      emailBlured: false,
      passwordBlured: false,
      confirmPasswordBlured: false,
      submitted: false
    };
  },
  methods: {
    validEmail: function validEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
    validPassword: function validPassword(password) {
      return password.length >= 8;
    },
    passwordsMatch: function passwordsMatch(password, confirmPassword) {
      return password === confirmPassword;
    },
    submit: function submit() {
      var _this = this;
      if (this.name && this.validEmail(this.email) && this.validPassword(this.password) && this.passwordsMatch()) {
        var formData = {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword
        };
        axios.post('/api/register', formData).then(function (response) {
          _this.submitted = true;
        })["catch"](function (error) {});
      } else {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/signup/Signup.vue?vue&type=template&id=09951e54&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/signup/Signup.vue?vue&type=template&id=09951e54& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container mt-5"
  }, [_c("div", {
    staticClass: "row d-flex justify-content-center"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "card px-5 py-5",
    attrs: {
      id: "form1"
    }
  }, [!_vm.submitted ? _c("div", {
    staticClass: "form-data"
  }, [_c("div", {
    staticClass: "forms-inputs mb-4"
  }, [_c("span", [_vm._v("Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.name,
      expression: "name"
    }],
    "class": {
      "form-control": true,
      "is-invalid": _vm.nameBlured && !_vm.name
    },
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.name
    },
    on: {
      blur: function blur($event) {
        _vm.nameBlured = true;
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.name = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("Name is required!")])]), _vm._v(" "), _c("div", {
    staticClass: "forms-inputs mb-4"
  }, [_c("span", [_vm._v("Email")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.email,
      expression: "email"
    }],
    "class": {
      "form-control": true,
      "is-invalid": !_vm.validEmail(_vm.email) && _vm.emailBlured
    },
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.email
    },
    on: {
      blur: function blur($event) {
        _vm.emailBlured = true;
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.email = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("A valid email is required!")])]), _vm._v(" "), _c("div", {
    staticClass: "forms-inputs mb-4"
  }, [_c("span", [_vm._v("Password")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.password,
      expression: "password"
    }],
    "class": {
      "form-control": true,
      "is-invalid": !_vm.validPassword(_vm.password) && _vm.passwordBlured
    },
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.password
    },
    on: {
      blur: function blur($event) {
        _vm.passwordBlured = true;
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.password = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("Password must be 8 characters!")])]), _vm._v(" "), _c("div", {
    staticClass: "forms-inputs mb-4"
  }, [_c("span", [_vm._v("Confirm Password")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.confirmPassword,
      expression: "confirmPassword"
    }],
    "class": {
      "form-control": true,
      "is-invalid": !_vm.passwordsMatch(_vm.password, _vm.confirmPassword) && _vm.confirmPasswordBlured
    },
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.confirmPassword
    },
    on: {
      blur: function blur($event) {
        _vm.confirmPasswordBlured = true;
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.confirmPassword = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("Passwords do not match!")])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("button", {
    staticClass: "btn btn-dark w-100",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.submit.apply(null, arguments);
      }
    }
  }, [_vm._v("Sign Up")])])]) : _c("div", {
    staticClass: "success-data"
  }, [_c("div", {
    staticClass: "text-center d-flex flex-column"
  }, [_c("i", {
    staticClass: "bx bxs-badge-check"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-primary",
    attrs: {
      to: {
        name: "signin"
      }
    }
  }, [_vm._v("Đăng nhập")])], 1)])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "text-center fs-1"
  }, [_vm._v("Bạn đã đăng ký tài khoản "), _c("br"), _vm._v(" thành công")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/signup/Signup.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/signup/Signup.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Signup_vue_vue_type_template_id_09951e54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signup.vue?vue&type=template&id=09951e54& */ "./resources/js/components/signup/Signup.vue?vue&type=template&id=09951e54&");
/* harmony import */ var _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup.vue?vue&type=script&lang=js& */ "./resources/js/components/signup/Signup.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Signup_vue_vue_type_template_id_09951e54___WEBPACK_IMPORTED_MODULE_0__.render,
  _Signup_vue_vue_type_template_id_09951e54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/signup/Signup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/signup/Signup.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/signup/Signup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Signup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/signup/Signup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/signup/Signup.vue?vue&type=template&id=09951e54&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/signup/Signup.vue?vue&type=template&id=09951e54& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_09951e54___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_09951e54___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_09951e54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Signup.vue?vue&type=template&id=09951e54& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/signup/Signup.vue?vue&type=template&id=09951e54&");


/***/ })

}]);