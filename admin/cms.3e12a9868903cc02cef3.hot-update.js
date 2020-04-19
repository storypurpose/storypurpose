webpackHotUpdate("cms",{

/***/ "":
false,

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
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/logo.svg */ "./src/img/logo.svg");
/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_logo_svg__WEBPACK_IMPORTED_MODULE_4__);


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
      src: _img_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
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
    }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "navbar-end has-text-centered",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "navbar-item",
      href: "https://github.com/netlify-templates/gatsby-starter-netlify-cms",
      target: "_blank",
      rel: "noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: _img_github_icon_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "Github",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 19
      }
    })))))));
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

/***/ "./src/components/all.sass":
/*!*********************************!*\
  !*** ./src/components/all.sass ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1587309071633
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/templates/index-page.js":
/*!*************************************!*\
  !*** ./src/templates/index-page.js ***!
  \*************************************/
/*! exports provided: IndexPageTemplate, default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageTemplate", function() { return IndexPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Features */ "./src/components/Features.js");
/* harmony import */ var _components_BlogRoll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlogRoll */ "./src/components/BlogRoll.js");
var _this = undefined,
    _jsxFileName = "C:\\github\\storypurposeblog\\src\\templates\\index-page.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};







var IndexPageTemplate = function IndexPageTemplate(_ref) {
  var image = _ref.image,
      title = _ref.title,
      heading = _ref.heading,
      subheading = _ref.subheading,
      mainpitch = _ref.mainpitch,
      description = _ref.description,
      intro = _ref.intro;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "full-width-image margin-top-0",
    style: {
      backgroundImage: "url(" + (!!image.childImageSharp ? image.childImageSharp.fluid.src : image) + ")",
      backgroundPosition: "top left",
      backgroundAttachment: "fixed"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      height: '150px',
      lineHeight: '1',
      justifyContent: 'space-around',
      alignItems: 'left',
      flexDirection: 'column'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: " is-size-3-mobile is-size-2-tablet is-size-1-widescreen",
    style: {
      color: 'white',
      lineHeight: '1',
      padding: '0.25em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: " is-size-5-mobile is-size-5-tablet is-size-4-widescreen",
    style: {
      color: 'white',
      lineHeight: '1',
      padding: '0.25em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, subheading))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section section--gradient",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, mainpitch.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, mainpitch.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-weight-semibold is-size-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gridItems: intro.blurbs,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12 has-text-centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "btn",
    to: "/products",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, "See all products"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "has-text-weight-semibold is-size-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, "Latest stories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BlogRoll__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-12 has-text-centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "btn",
    to: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }, "Read more"))))))))));
};
IndexPageTemplate.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  subheading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mainpitch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  intro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    blurbs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  })
};

var IndexPage = function IndexPage(_ref2) {
  var data = _ref2.data;
  var frontmatter = data.markdownRemark.frontmatter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndexPageTemplate, {
    image: frontmatter.image,
    title: frontmatter.title,
    heading: frontmatter.heading,
    subheading: frontmatter.subheading,
    mainpitch: frontmatter.mainpitch,
    description: frontmatter.description,
    intro: frontmatter.intro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }));
};

IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    })
  })
};
var _default = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "4066978147";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexPageTemplate, "IndexPageTemplate", "C:\\github\\storypurposeblog\\src\\templates\\index-page.js");
  reactHotLoader.register(IndexPage, "IndexPage", "C:\\github\\storypurposeblog\\src\\templates\\index-page.js");
  reactHotLoader.register(pageQuery, "pageQuery", "C:\\github\\storypurposeblog\\src\\templates\\index-page.js");
  reactHotLoader.register(_default, "default", "C:\\github\\storypurposeblog\\src\\templates\\index-page.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.3e12a9868903cc02cef3.hot-update.js.map