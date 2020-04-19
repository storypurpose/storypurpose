webpackHotUpdate("cms",{

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _img_github_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/github-icon.svg */ "./src/img/github-icon.svg");
/* harmony import */ var _img_github_icon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_github_icon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_4__);


var _temp,
    _jsxFileName = "C:\\github\\storypurposeblog\\src\\components\\Navbar.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var Navbar = (_temp = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.toggleHamburger = function () {
      // toggle the active boolean in the state
      _this.setState({
        active: !_this.state.active
      }, // after state has been updated,
      function () {
        // set the class in state for the navbar accordingly
        _this.state.active ? _this.setState({
          navBarActiveClass: 'is-active'
        }) : _this.setState({
          navBarActiveClass: ''
        });
      });
    };

    _this.state = {
      active: false,
      navBarActiveClass: ''
    };
    return _this;
  }

  var _proto = Navbar.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "navbar is-transparent",
      role: "navigation",
      "aria-label": "main-navigation",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "navbar-brand",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/",
      className: "navbar-item",
      title: "Logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _img_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "StoryPurpose",
      style: {
        width: '88px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "navbar-burger burger " + this.state.navBarActiveClass,
      "data-target": "navMenu",
      onClick: function onClick() {
        return _this2.toggleHamburger();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "navMenu",
      className: "navbar-menu " + this.state.navBarActiveClass,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "navbar-start has-text-centered",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/products",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, "Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/blog",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 15
      }
    }, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "navbar-item",
      to: "/contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, "Contact")))));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component), _temp);
var _default = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Navbar, "Navbar", "C:\\github\\storypurposeblog\\src\\components\\Navbar.js");
  reactHotLoader.register(_default, "default", "C:\\github\\storypurposeblog\\src\\components\\Navbar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/img/apple-touch-icon.png":
false,

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURex4Kex4Kux5K+x6K+x5LOx6LOx6Lex6Lu17L+18L+18MO19Me19Mu1+Me1+Mu1+M+1+NO2BNu6BN+2BOO2BOe2COO2COe2COu6DO+6EPO6EPe6GP+6HQe+HQu+IQu+IQ++JRO6KRu6KR++QUO+RUe+RUu+RU++SUu+SU/CQUPCRUfCSUvCSU/CSVPCTVfCUVPCUVfCUVvCVV/CVWPCWWPCWWfCXWvCXW/GaX/GaYPGbYfGcYvKcY/KdZPKdZfGeZfGeZvGfZ/GfaPKgZ/GgaPKgafKhavKha/Kia/KibPKibfKjbvKkbvKkb/KkcPOodvOpd/OqePOqefOrevOre/Ose/OsfPStffSvgPWxhfW1iffDofbEoffEovfEo/fGpPfGpffGpvfHp/fIp/fIqPfIqffJqvfMrvfMr/jJqvjKq/jLrPjLrfjMr/jNsPjNsfjOsPjOsfjOsvjPs/jPtPjQtPjQtfjQtvjRt/nSt/nSuPnTufnUu/nVvfnVvvnWvfnWvvnWv/nXwPnXwfnYwPnYwfnYwvnZw/raxPraxfrbxvrcx/rcyPrcyfrdyvreyvrey/rezPvfzfvgzfvgzvvhz/vh0Pvh0fvi0Pvi0fvi0vvj0/vj1Pvk1Pvl1vvm1/zj1Pzk1Pzk1fzl1vzl1/zm1/vm2Pvn2fzm2Pzm2fzo2vzo2/zp3Pzp3fzq3fzq3vzr3/zr4Pzs4Pzs4fzs4v3t4/zx6fzy7P738/749P759f759v769v769/76+P77+f/7+v78+v78+//9/P/9/f/+/P/+/f/+/v/+/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM0ZISMAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAsUSURBVHhe7Zv7exTVGcezm8wuyU5304sUeyGGBGnSq/YqigQKqYnY1tLam9ibqLVVCKkE1FaxlaCCBKm0hLZUrEgqSC2htUXU7MY582f1fWfOzM7Mzpw5Z86Z8zx9nvn+lCchcz7Pm/e857Nnly77/zAFtK4U0LpSQOtKAa0rBbSuFNC6UkDrSgGtKwW0rmiGbv7r3xahX2ePXujmwU+ML8hTa4Vuzq4rVSbPvidLrRMamRvvM24/LUutEXp59vpSvWbWjNvPSnaINmhiza4t12s1FdS6oAl5em25AcwO9eRpKWpN0MR+argH6+xSVybOEYv+KEP0QBP7wHDFpMxIXR0/K0GtBZrYTw5VvDpjzFrv1tMkc4fogEbmKsWlMWt9mxbsrLXWAE3sXw+toLB+gHosc4fkD03Ik53Mbq3PZuwQcWjBYUWWD0R7ww1Qb16wMtVaGJpYQtSk9dRwhWJGArtxS7ZTRhCaWG/+/rzAQqT59HBobgQD1OOZqMWgifXfnR/YdJ6/FZuzwz3t+RwNzOuJcxmohaAJuXLfysqKCW7qJvWNpMDZmMVURaCJdeUX11T6QXhe4ytPa/Z66htJQXsS9xABaKjzzg9WGrV6rbzt7zy1bh1aBy7KDlBvE6bmhybk7Z+srGLh6rXuO15LpfZdlB2z1i1ca25oZP6ww0ypU0ZswEXZQVMVnCG80MB8zyrKjNTlSXZfE/u3bRdlB01V7ETnhCZk6e5rfWakNiZeZywUcVF2XFMVqDUfNCHv3v2R0CFRr1XGX0/skA4XZcc5GwWouaAJeeeHYWakrm65mEAd46LsoIe8ym+qPNDAvCPKDAuZvZveiKUm9m/ivI4V11R5a80BjXvw2mrnH9us926MqzW6qFCdMUKmmg5NyNUfrYptUKAe66ROdFF2REw1FRqYf+bN52iAuqND0EWrvHMjGAFTTYMG3/i5ew7GBag3h2cIuqiRhdmh5jTVFGhw0fs+lMgMC5nV8QvBVgSvY7goO9ymyoaGOj94DYMZF6pMXvAXIlcPruM6u+PDa6pMaGRGr2MFzkb/RCfW8bWl7MxIzWWqLGhC3rqX1RtugHqb53zk5A2GmbU7MEB9R3qtGdAwn3+avAfbAXv6Oq01sY59sQwrZw+XqSZDw6zzXZQdoAZTpdRzX5alNibTdmMiNNR5R9tF2cG+vuA6H7HnviRLDabKPmWSoMFFdwRdlB2kpvOakKPS1GmmmgANjhRxUXYCpkrIMaCWCZ6NC6xXBfHQosxIXd1CT3Sg/oIh8rsdAQ/5Kuu1TCw09MY9YsywEJjqPyi19cIN0tQs54uDdlxUkBkWajsfWT7xOeHfDwWpkzskBjrZRdkx631jtEOs5T9+Wp46cYZ0QhPr6k6++RwNmirtEKv1h09KUyeaagc0+MZOnnMwLo6puq1oNU99Spa692sJp0wUGu8Y030jKWiqPvVJ6Q6pwikTRx2Bhjr/ku2i7KBc0vtrq3XiM7IzpBL/LmkYGp0/zUXZcUyV1rp14kYDVs6eJFMNQcPc4HBRdoDau520rOOfl3a+bTGfWQhCI3PWPdhOvdbdNtU5aVONe/c/AA3MP84268LB+2uP2vEQSerOO9U2NCHvBu5FZYKvZc5TUwXnK0lSo6mGqX1ovPvid1F2gHrivOchOZiqBx13x5g9qk1166shD6HQeP+sjhmpA6Y6d6O0820OmaoLHX8vKhM0Vc/5rOMqTBVeyXlxoGFuZHBRdoDaN1VLhakGOgShcdatirnLlUvQVFsvKjFVr9YADS56r4r5HE3gVYHVOilvqlt9aoS+ouAcjAtQb8nFVLts6z8P5sOMC1Vvu+hRn/hsryS1b6pdpPm7lUY+zM6J/v23XeqWdfD9ffTb2dI21S7SenF9L3wjl5iV0SdaDjOxLn9PtjSOPaHzQU9bL22o5ENtGkMHkRgH1OJ2o092QHmmihuRnNpY7cuBuo7Mbp3txe1VU5aZ1toizpy2T92aA3WjZ+SQx3zpzhXQ4PJBU11woKHWJzdWVFM3ykPP+Mzf7FPCjNSV8b840EA9P1ZV29eN0tCzbWYcJGrSKK854kLDg+dvzfCOZXL6SyNHPOY3vmFK70EvjfLg3jcpNO7GWxRS93cNH3Hns3LmfUs4PdwQcuaWTO+0xqW/a/R59/DC3lDJvGbvO8TdiE6I9fJ6RarX3zVyjDIT6GdlzHVjEJnblYZDxnr5phUqng97cI6eg+TSnX3KmYPQIJDnVFA3SiOHvbN7cbua+YypVwZ/teRslCC0GupGeeQ53ze2V5Uxm5XBqaa7uUPQQP23myR3Y71n6Fnaz9blb1cUnN1uzOrg7pbLHIEG6lfWS00+0xiddR8NzHepY65VBx+wKHMUGnfjzRJnIzLTMwXqbKis8/0+cwc0UP91Q2ZqcFGPmSyq7Y0HiM/cCQ3L/Smr89WNUc9FySUlLuoG5kaQOQYaFpzP5nyNnlHlLooB5t3t3oDEQCP1WAZqcNE2szIXxb/f4J73gsyx0LBoBlOFM8V30X+qdFFjzbQ362hioZFa1FTzdFH3HGwnHho6RNBUgy6q2OtmosxJ0EAtZKrgokfdR1v2JaV1XjPjOFIoSdBIzW+qObpoDHMytG0tv8JrT43S8NFlyrz4LZVzI67OLGjwkAU+apgbR6jXLSt20emOfsYwoG3S4qo1zGfqz7ZqF91DXTQSFrTj16m7EVz0Gd9FFXod+MZUZD57YUJDX59LM1XTGDnkPposX75LndeFXDQSNjSAnGGbatDrFLtoyJFCSYEGU32JZaqmMex73eJ3lPbG/fBIB6EzadDwm39ONtW6MULrbFsXFfozumhSb0BSoYE60VQbPV5vwCb8QZey9xOAeYrBzAGN1PGm2nZRhH5otap3QeAcZDLzQAPX/MaYvoYz5TmPGf5Ra+/q7n76I6k0jMHp+PnshQcaa72h43/39peGDreZkfrR1WUF1OCinV4XDhc07kaYIaGAIx0OPZqQ1v4BeWq8Y0xh5oQGooipAvNc5NGELMnXGp0/zpFC4YSGjRYyVXD+OffsDgSoH/+4HHWCi0bCCx021UZplHpdKEC9f6BbYoaAi6bXWQA6eDsJc+P5GGaHekZi8iW6aCT80HjP9xWHOuCi0RDSnBnISg1nd4KLRiIATU3VrPeMUBeNCcyQ6YFsnzcA5ocTXDQSEWisNZiq76KxATXbfV0maoaLRiIEDbvxzM1l35HiA+vuylBrpotGIgZtW2T+uweYzA71Q8LUIsyi0HBYv0W/Sg6svXtA7LPBKS4aiSg0V2D1XUIzBF2Uu845QeNu3CMwr/FelL/OeUEDtcVvquCij3DNZy85QQP18j6wJ55PLaHXCTHnBg3Urf1czsfjopHkBg3US49xUKPzczhSKPlBU+oGu0NgD+4TZc4TGrCX9q9mmyq46CPCzDlDp5kqr4tGkis0UDf3DhiJJzq3i0aSLzTOkD2JHsLvopHkDA3UZCqJmt9FI8kbGqjRnmKo0evwpxmSOzRyxZkqMAc+VyCW/KGRetd1UVMVc9FINEAj9VTEVIH5YQEXjUQHNFCT6RA1umimueFGCzRQWzMBDxF20Uj0QDvU/u0keJ0Usy5ooG56t5NxnysQiy5ooF563KEGZnGvC0cbtFNr6JCk97tFog8asJceXW1UBzO4aCRaoYH6ox+T7GeMTmjskAOPyTPrhQbsVsIdsVA0Q0Ox6Rcy0Q2tJAW0rhTQulJA60oBrSsFtK4U0LpSQOtKAa0rBbSuFNC6UkDriW3/D8BrIU2iEZTCAAAAAElFTkSuQmCC"

/***/ })

})
//# sourceMappingURL=cms.f3ccdafb6544ce8ef0d3.hot-update.js.map