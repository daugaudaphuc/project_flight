"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_signin_Signin_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/signin/Signin.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/signin/Signin.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import { mapMutations } from 'vuex';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      email: '',
      password: '',
      loggedInUser: null,
      loginSuccess: false,
      loginError: false // Add this variable
    };
  },

  methods: {
    validEmail: function validEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    },
    validPassword: function validPassword(password) {
      return password.length >= 8;
    },
    // ...mapMutations(['setLoggedInUser']), // Import setLoggedInUser mutation
    // ...
    submit: function submit() {
      var _this = this;
      var formData = {
        email: this.email,
        password: this.password
      };
      axios.post('/api/login', formData).then(function (response) {
        // Store the authentication token in local storage
        localStorage.setItem('auth_token', response.data.user);
        _this.loginSuccess = true;
        _this.loginError = false; // Reset the error flag
        location.reload();
        // this.$router.push({ name: 'home' });
      })["catch"](function (error) {
        _this.loginError = true; // Set the error flag to true
      });
    } // ...
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/signin/Signin.vue?vue&type=template&id=9111a1d8&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/signin/Signin.vue?vue&type=template&id=9111a1d8& ***!
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
  }, [!_vm.loginSuccess ? _c("div", {
    staticClass: "form-data"
  }, [_c("div", {
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
      "is-invalid": _vm.emailBlured && !_vm.validEmail(_vm.email)
    },
    attrs: {
      autocomplete: "off",
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
      "is-invalid": _vm.passwordBlured && !_vm.validPassword(_vm.password)
    },
    attrs: {
      autocomplete: "off",
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
  }, [_vm._v("Login")])])]) : _vm._e(), _vm._v(" "), _vm.loginSuccess ? _c("div", {
    staticClass: "mt-3"
  }, [_c("p", {
    staticClass: "text-success"
  }, [_vm._v("Login Success!")])]) : _vm._e(), _vm._v(" "), _vm.loginError ? _c("div", {
    staticClass: "mt-3"
  }, [_c("p", {
    staticClass: "text-danger"
  }, [_vm._v("Email or password is incorrect. Please try again.")])]) : _vm._e()])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/signin/Signin.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/signin/Signin.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Signin_vue_vue_type_template_id_9111a1d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signin.vue?vue&type=template&id=9111a1d8& */ "./resources/js/components/signin/Signin.vue?vue&type=template&id=9111a1d8&");
/* harmony import */ var _Signin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signin.vue?vue&type=script&lang=js& */ "./resources/js/components/signin/Signin.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Signin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Signin_vue_vue_type_template_id_9111a1d8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Signin_vue_vue_type_template_id_9111a1d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/signin/Signin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/signin/Signin.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/signin/Signin.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Signin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/signin/Signin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/signin/Signin.vue?vue&type=template&id=9111a1d8&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/signin/Signin.vue?vue&type=template&id=9111a1d8& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Signin_vue_vue_type_template_id_9111a1d8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Signin_vue_vue_type_template_id_9111a1d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Signin_vue_vue_type_template_id_9111a1d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Signin.vue?vue&type=template&id=9111a1d8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/signin/Signin.vue?vue&type=template&id=9111a1d8&");


/***/ })

}]);