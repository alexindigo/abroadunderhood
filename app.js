/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".app.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./js */4);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ilyabirmanLikely = __webpack_require__(/*! ilyabirman-likely */ 5);
	
	(0, _ilyabirmanLikely.initate)();
	
	jQuery(window).on('load', function () {
	  if (document.getElementById('map')) {
	    var markers = [];
	    var mapCanvas = document.getElementById('map');
	    var map = new google.maps.Map(mapCanvas, {
	      center: new google.maps.LatLng(55.7522222, 37.6155556),
	      zoom: 5,
	      minZoom: 3,
	      maxZoom: 8
	    });
	
	    authors.forEach(function (author, index) {
	      var marker = new RichMarker({
	        map: map,
	        position: new google.maps.LatLng(author.location[0], author.location[1]),
	        content: '<img class="marker ' + (false === author.current ? "archive" : "") + '" src="' + author.picture + '"/>',
	        shadow: 0
	      });
	
	      if (false === author.current) {
	        marker.addListener('click', function () {
	          window.location.href = '/' + author.username;
	        });
	      }
	
	      markers.push(marker);
	    });
	
	    map.addListener('zoom_changed', function () {
	      markers.forEach(function (marker, index) {
	        var pixelSize = 24;
	        var borderWidth = 1;
	        var borderRadius = 2;
	
	        switch (map.getZoom()) {
	          case 4:
	            pixelSize = 32;borderWidth = 1;borderRadius = 2;break;
	          case 5:
	            pixelSize = 40;borderWidth = 1;borderRadius = 4;break;
	          case 6:
	            pixelSize = 48;borderWidth = 2;borderRadius = 4;break;
	          case 7:
	            pixelSize = 56;borderWidth = 2;borderRadius = 8;break;
	          case 8:
	            pixelSize = 64;borderWidth = 2;borderRadius = 8;break;
	        }
	
	        marker.setContent(jQuery(marker.getContent()).css({
	          'width': pixelSize,
	          'height': pixelSize,
	          'borderWidth': borderWidth,
	          'borderRadius': borderRadius
	        }).wrap('<div/>').parent().html());
	      });
	    });
	  }
	});
	
	jQuery(window).on('load resize', function () {
	  jQuery('#content').css('paddingBottom', function () {
	    return jQuery('#footer').outerHeight();
	  });
	
	  jQuery('#footer').css('marginTop', function () {
	    return jQuery('#footer').outerHeight() * -1;
	  });
	
	  jQuery('.navbar-collapse.collapse').removeClass('collapsing in');
	
	  jQuery('#scroll-spy').each(function () {
	    var is_affix = jQuery(this).hasClass('affix');
	    var top = jQuery(this).offset().top;
	    var bottom = jQuery('#footer').outerHeight();
	    var width = jQuery(this).removeClass('affix').width();
	
	    if (is_affix) {
	      jQuery(this).addClass('affix');
	    }
	
	    jQuery(this).width(width).affix({
	      offset: {
	        top: top,
	        bottom: bottom
	      }
	    });
	  });
	
	  jQuery(undefined).trigger('scroll');
	});
	
	jQuery(window).on('scroll', function () {
	  jQuery('#scroll-spy').each(function () {
	    if (jQuery(this).hasClass('affix')) {
	      jQuery(this).css('position', '');
	    }
	  });
	});
	
	var d = document; // eslint-disable-line id-length
	var $ = d.querySelector.bind(d); // eslint-disable-line id-length
	
	if ($('.js-stats')) {
	  __webpack_require__.e/* require */(0, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! moment */ 2), __webpack_require__(/*! tablesort */ 3), __webpack_require__(/*! imports?Tablesort=tablesort!tablesort/src/sorts/tablesort.number */ 6)]; (function (moment, tablesort) {
	    tablesort($('.host-stats'), { descending: true });
	
	    var lastUpdated = $('.js-last-updated');
	    var timestamp = lastUpdated.getAttribute('data-timestamp');
	    lastUpdated.textContent = moment.unix(timestamp).locale('ru').fromNow();
	  }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	}

/***/ },
/* 5 */
/*!********************************************************!*\
  !*** ./~/ilyabirman-likely/release/likely-commonjs.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Likely 2.1.3 by Ilya Birman (ilyabirman.net)
	 * Rewritten sans jQuery by Evgeny Steblinsky (volter9.github.io)
	 * Supported by Ivan Akulov (iamakulov.com), Viktor Karpov (vitkarpov.com), and contributors
	 * Inspired by Social Likes by Artem Sapegin (sapegin.me)
	 */
	!function(n,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.likely=e():n.likely=e()}(this,function(){return function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var t={};return e.m=n,e.c=t,e.p="",e(0)}([function(module,exports,__webpack_require__){eval("module.exports = __webpack_require__(5);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi likely-commonjs\n ** module id = 0\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///multi_likely-commonjs?")},function(module,exports){eval("'use strict';\n\nvar bool = { yes: true, no: false };\n\n/**\n * @internal\n */\nvar utils = {\n    /**\n     * Simple $.each, only for objects\n     *\n     * @param {Object} object\n     * @param {Function} callback\n     */\n    each: function (object, callback) {\n        for (var key in object) {\n            if (object.hasOwnProperty(key)) {\n                callback(object[key], key);\n            }\n        }\n    },\n\n    /**\n     * Convert array-like object to array\n     *\n     * @param {Object} arrayLike\n     * @returns {Array}\n     */\n    toArray: function (arrayLike) {\n        return Array.prototype.slice.call(arrayLike);\n    },\n\n    /**\n     * Merge given dictionaries (objects) into one object\n     *\n     * @param {...Object} object\n     * @returns {Object}\n     */\n    merge: function () {      // eslint-disable-line no-unused-vars\n        var result = {};\n\n        for (var i = 0; i < arguments.length; i++) {\n            var arg = arguments[i];\n\n            if (arg) {\n                for (var key in arg) {\n                    if (arg.hasOwnProperty(key)) {\n                        result[key] = arg[key];\n                    }\n                }\n            }\n        }\n\n        return result;\n    },\n\n    /**\n     * Extend one (target) object by other (subject)\n     *\n     * @param {Object} target\n     * @param {Object} subject\n     */\n    extend: function (target, subject) {\n        for (var key in subject) {\n            if (subject.hasOwnProperty(key)) {\n                target[key] = subject[key];\n            }\n        }\n    },\n\n    /**\n     * Return node.dataset or plain object for IE 10without setters\n     * based on https://gist.github.com/brettz9/4093766#file_html5_dataset.js\n     *\n     * @param {Node} node\n     * @returns {Object}\n     */\n    getDataset: function (node) {\n        if (typeof node.dataset === 'object') {\n            return node.dataset;\n        }\n\n        var i;\n        var dataset = {};\n        var attributes = node.attributes;\n        var attribute;\n        var attributeName;\n\n        var toUpperCase = function (n0) {\n            return n0.charAt(1).toUpperCase();\n        };\n\n        for (i = attributes.length - 1; i >= 0; i--) {\n            attribute = attributes[i];\n            if (attribute && attribute.name &&\n                (/^data-\\w[\\w\\-]*$/).test(attribute.name)) {\n                attributeName = attribute.name.substr(5).replace(/-./g, toUpperCase);\n                dataset[attributeName] = attribute.value;\n            }\n        }\n\n        return dataset;\n    },\n\n    /**\n     * Convert \"yes\" and \"no\" to true and false.\n     *\n     * @param {Node} node\n     * @returns {Object}\n     */\n    bools: function (node) {\n        var result = {};\n        var data = utils.getDataset(node);\n\n        for (var key in data) {\n            if (data.hasOwnProperty(key)) {\n                var value = data[key];\n\n                result[key] = bool[value] || value;\n            }\n        }\n\n        return result;\n    },\n\n    /**\n     * Map object keys in string to its values\n     *\n     * @param {String} text\n     * @param {Object} data\n     * @returns {String}\n     */\n    template: function (text, data) {\n        return text ? text.replace(/\\{([^\\}]+)\\}/g, function (value, key) {\n            return key in data ? data[key] : value;\n        }) : '';\n    },\n\n    /**\n     * Map object keys in URL to its values\n     *\n     * @param {String} text\n     * @param {Object} data\n     * @returns {String}\n     */\n    makeUrl: function (text, data) {\n        for (var key in data) {\n            if (data.hasOwnProperty(key)) {\n                data[key] = encodeURIComponent(data[key]);\n            }\n        }\n\n        return utils.template(text, data);\n    },\n\n    /**\n     * Create query string out of data\n     *\n     * @param {Object} data\n     * @returns {String}\n     */\n    query: function (data) {\n        var filter = encodeURIComponent;\n        var query = [];\n\n        for (var key in data) {\n            if (typeof data[key] === 'object') {\n                continue;\n            }\n\n            query.push(filter(key) + '=' + filter(data[key]));\n        }\n\n        return query.join('&');\n    },\n\n    /**\n     * Set value in object using dot-notation\n     *\n     * @param {Object} object\n     * @param {String} key\n     * @param {Object} value\n     */\n    set: function (object, key, value) {\n        var frags = key.split('.');\n        var last = null;\n\n        frags.forEach(function (key, index) {\n            if (typeof object[key] === 'undefined') {\n                object[key] = {};\n            }\n\n            if (index !== frags.length - 1) {\n                object = object[key];   // eslint-disable-line no-param-reassign\n            }\n\n            last = key;\n        });\n\n        object[last] = value;\n    },\n\n    /**\n     * Returns default url for likely.\n     * It could be href from <link rel='canonical'>\n     * if presents in the document, or the current url of the page otherwise\n     *\n     * @returns {String}\n     */\n    getDefaultUrl: function () {\n        var link = document.querySelector('link[rel=\"canonical\"]');\n\n        if (link) {\n            return link.href;\n        }\n        return window.location.href.replace(window.location.hash, '');\n    },\n};\n\nmodule.exports = utils;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/utils.js\n ** module id = 1\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/utils.js?")},function(module,exports){eval("'use strict';\n\nvar div = document.createElement('div');\nvar gid = 0;\n\nvar dom = module.exports = {\n    /**\n     * Wrap SVG coords from data object into SVG tag\n     *\n     * @param {String} coords\n     * @returns {String}\n     */\n    wrapSVG: function (coords) {\n        return '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" ' +\n            'viewBox=\"0 0 16 16\"><path d=\"M' +\n            coords +\n            'z\"/></svg>';\n    },\n\n    /**\n     * Create node from HTML\n     *\n     * @param {String} html\n     * @returns {Node}\n     */\n    createNode: function (html) {\n        div.innerHTML = html;\n\n        return div.children[0];\n    },\n\n    /**\n     * Load script\n     *\n     * @param {String} url\n     */\n    getScript: function (url) {\n        var script = document.createElement('script');\n        var head = document.head;\n\n        script.type = 'text/javascript';\n        script.src = url;\n\n        head.appendChild(script);\n        head.removeChild(script);\n    },\n\n    /**\n     * Get JSON\n     *\n     * @param {String} url\n     * @param {Function} callback\n     */\n    getJSON: function (url, callback) {\n        var name = encodeURIComponent('random_fun_' + (++gid));\n\n        var concreteUrl = url.replace(\n            /callback=(\\?)/,\n            'callback=' + name\n        );\n\n        window[name] = callback;\n\n        dom.getScript(concreteUrl);\n    },\n\n    /**\n     * Find first node by selector\n     *\n     * @param {String} selector\n     * @param {Node} node\n     * @returns {Node}\n     */\n    find: function (selector, node) {\n        return (node || document).querySelector(selector);\n    },\n\n    /**\n     * Find all nodes by selector\n     *\n     * @param {String} selector\n     * @param {Node} node\n     * @returns {NodeList}\n     */\n    findAll: function (selector, node) {\n        return (node || document).querySelectorAll(selector);\n    },\n\n    /**\n     * Open the popup\n     *\n     * @param {String} url\n     * @param {String} winId\n     * @param {Number} width,\n     * @param {Number} height\n     * @returns {Object|null}\n     */\n    openPopup: function (url, winId, width, height) {\n        var left = Math.round(screen.width / 2 - width / 2);\n        var top = 0;\n\n        if (screen.height > height) {\n            top = Math.round(screen.height / 3 - height / 2);\n        }\n\n        var options = 'left=' + left +\n            ',top=' + top +\n            ',width=' + width +\n            ',height=' + height +\n            ',personalbar=0,toolbar=0,scrollbars=1,resizable=1';\n\n        var win = window.open(url, winId, options);\n\n        if (!win) {\n            location.href = url;\n            return null;\n        }\n\n        win.focus();\n\n        return win;\n    },\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/dom.js\n ** module id = 2\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/dom.js?")},function(module,exports){eval("'use strict';\r\n\r\n/**\r\n * Configuration\r\n */\r\n\r\nmodule.exports = {\r\n    name: 'likely',\r\n    prefix: 'likely__',\r\n};\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/config.js\n ** module id = 3\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/config.js?")},function(module,exports,__webpack_require__){eval("'use strict';\n\n/**\n * Social network services\n */\n\nvar Service = __webpack_require__(9);\nvar utils = __webpack_require__(1);\nvar svg = __webpack_require__(17);\n\n/* eslint-disable global-require */\nvar services = {\n    odnoklassniki: __webpack_require__(12),\n    vkontakte: __webpack_require__(16),\n    pinterest: __webpack_require__(13),\n    facebook: __webpack_require__(10),\n    twitter: __webpack_require__(15),\n    gplus: __webpack_require__(11),\n    telegram: __webpack_require__(14),\n};\n/* eslint-enable global-require */\n\nutils.each(services, function (service, key) {\n    Service(service);\n\n    service.svgi = svg[key];\n    service.name = key;\n});\n\nmodule.exports = services;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/services/index.js\n ** module id = 4\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/services/index.js?")},function(module,exports,__webpack_require__){eval("'use strict';\r\n\r\nvar Likely = __webpack_require__(18);\r\nvar config = __webpack_require__(3);\r\nvar utils = __webpack_require__(1);\r\nvar dom = __webpack_require__(2);\r\n\r\n/**\r\n * @param {Node} node\r\n * @param {Object} options\r\n * @returns {Likely}\r\n */\r\nvar likely = function (node, options) {\r\n    var fullOptions = options || {};\r\n    var defaults = {\r\n        counters: true,\r\n        timeout: 1e3,\r\n        zeroes: false,\r\n        title: document.title,\r\n        wait: 0.5e3,\r\n        url: utils.getDefaultUrl(),\r\n    };\r\n    var widget = node[config.name];\r\n\r\n    if (widget) {\r\n        widget.update(fullOptions);\r\n    }\r\n    else {\r\n        node[config.name] = new Likely(node, utils.merge(\r\n            {}, defaults,\r\n            fullOptions, utils.bools(node)\r\n        ));\r\n    }\r\n\r\n    return widget;\r\n};\r\n\r\n/**\r\n * Initiate Likely buttons on load\r\n * @param {Object} [options] additional options for each widget\r\n */\r\nlikely.initiate = likely.initate = function (options) {\r\n    var widgets = dom.findAll('.' + config.name);\r\n\r\n    utils.toArray(widgets)\r\n        .forEach(function (widget) {\r\n            likely(widget, options);\r\n        });\r\n};\r\n\r\nmodule.exports = likely;\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/index.js\n ** module id = 5\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/index.js?")},function(module,exports,__webpack_require__){eval("'use strict';\n\nvar services = __webpack_require__(4);\nvar config = __webpack_require__(3);\nvar fetch = __webpack_require__(8);\nvar utils = __webpack_require__(1);\nvar dom = __webpack_require__(2);\n\nvar htmlSpan = '<span class=\"{className}\">{content}</span>';\n\n/**\n * Separate social link widget\n *\n * @param {Node} widget\n * @param {Likely} likely\n * @param {Object} options\n */\nfunction LikelyButton(widget, likely, options) {\n    this.widget = widget;\n    this.likely = likely;\n    this.options = utils.merge(options);\n\n    this.init();\n}\n\nLikelyButton.prototype = {\n    /**\n     * Initiate the button\n     */\n    init: function () {\n        this.detectService();\n        this.detectParams();\n\n        if (this.service) {\n            this.initHtml();\n\n            setTimeout(this.initCounter.bind(this), 0);\n        }\n    },\n\n    /**\n     * Update the counter\n     *\n     * @param {Object} options\n     */\n    update: function (options) {\n        var className = '.' + config.prefix + 'counter';\n        var counters = dom.findAll(className, this.widget);\n\n        utils.extend(this.options, utils.merge({ forceUpdate: false }, options));\n        utils.toArray(counters).forEach(function (node) {\n            node.parentNode.removeChild(node);\n        });\n\n        this.initCounter();\n    },\n\n    /**\n     * Get the config.name of service and its options\n     */\n    detectService: function () {\n        var widget = this.widget;\n        var service = utils.getDataset(widget).service;\n\n        if (!service) {\n            service = Object.keys(services).filter(function (service) {\n                return widget.classList.contains(service);\n            })[0];\n        }\n\n        if (service) {\n            this.service = service;\n\n            utils.extend(this.options, services[service]);\n        }\n    },\n\n    /**\n     * Merge params from data-* attributes into options hash map\n     */\n    detectParams: function () {\n        var options = this.options;\n        var data = utils.getDataset(this.widget);\n\n        if (data.counter) {\n            var counter = parseInt(data.counter, 10);\n\n            if (isNaN(counter)) {\n                options.counterUrl = data.counter;\n            }\n            else {\n                options.counterNumber = counter;\n            }\n        }\n\n        options.title = data.title || options.title;\n        options.url = data.url || options.url;\n    },\n\n    /**\n     * Inititate button's HTML\n     */\n    initHtml: function () {\n        var options = this.options;\n        var widget = this.widget;\n        var text = widget.innerHTML;\n\n        widget.addEventListener('click', this.click.bind(this));\n        widget.classList.remove(this.service);\n        widget.className += (' ' + this.className('widget'));\n\n        var button = utils.template(htmlSpan, {\n            className: this.className('button'),\n            content: text,\n        });\n\n        var icon = utils.template(htmlSpan, {\n            className: this.className('icon'),\n            content: dom.wrapSVG(options.svgi),\n        });\n\n        widget.innerHTML = icon + button;\n    },\n\n    /**\n     * Fetch or get cached counter value and update the counter\n     */\n    initCounter: function () {\n        var options = this.options;\n\n        if (options.counters && options.counterNumber) {\n            this.updateCounter(options.counterNumber);\n        }\n        else if (options.counterUrl) {\n            fetch(\n                this.service,\n                options.url,\n                options\n            )(this.updateCounter.bind(this));\n        }\n    },\n\n    /**\n     * @param {String} className\n     * @returns {String}\n     */\n    className: function (className) {\n        var fullClass = config.prefix + className;\n\n        return fullClass + ' ' + fullClass + '_' + this.service;\n    },\n\n    /**\n     * Update counter\n     *\n     * @param {String} counterString\n     */\n    updateCounter: function (counterString) {\n        var counter = parseInt(counterString, 10) || 0;\n\n        var counterElement = dom.find('.' + config.name + '__counter', this.widget);\n\n        if (counterElement) {\n            counterElement.parentNode.removeChild(counterElement);\n        }\n\n        var options = {\n            className: this.className('counter'),\n            content: counter,\n        };\n\n        if (!counter && !this.options.zeroes) {\n            options.className += ' ' + config.prefix + 'counter_empty';\n            options.content = '';\n        }\n\n        this.widget.appendChild(\n            dom.createNode(utils.template(htmlSpan, options))\n        );\n\n        this.likely.updateCounter(this.service, counter);\n    },\n\n    /**\n     * Click event listener\n     * @returns {Boolean}\n     */\n    click: function () {\n        var options = this.options;\n\n        if (options.click.call(this)) {\n            var url = utils.makeUrl(options.popupUrl, {\n                url: options.url,\n                title: options.title,\n            });\n\n            dom.openPopup(\n                this.addAdditionalParamsToUrl(url),\n                config.prefix + this.service,\n                options.popupWidth,\n                options.popupHeight\n            );\n        }\n\n        return false;\n    },\n\n    /**\n     * Append service data to URL\n     *\n     * @param {String} url\n     * @returns {String}\n     */\n    addAdditionalParamsToUrl: function (url) {\n        var parameters = utils.query(utils.merge(this.widget.dataset, this.options.data));\n        var delimeter = url.indexOf('?') === -1 ? '?' : '&';\n\n        return parameters === ''\n            ? url\n            : url + delimeter + parameters;\n    },\n};\n\nmodule.exports = LikelyButton;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/button.js\n ** module id = 6\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/button.js?")},function(module,exports){eval("'use strict';\n\n/* eslint-disable consistent-return, no-param-reassign */\n\n/**\n * Factory function\n *\n * This function returns function with following API:\n *\n * - if passed argument is callback, then this callback would be called\n *   if the value was changed\n * - if passed argument is anything but undefined or function, then this\n *   function behaves like setter\n * - if argument isn't provided, then return value stored in closure\n *\n * @param {Object} value\n * @returns {Function}\n */\nmodule.exports = function (value) {\n    var listeners = [];\n\n    return function (argument) {\n        var type = typeof argument;\n\n        if (type === 'undefined') {\n            return value;\n        }\n        else if (type === 'function') {\n            listeners.push(argument);\n        }\n        else {\n            value = argument;\n\n            listeners.forEach(function (listener) {\n                listener(argument);\n            });\n        }\n    };\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/factory.js\n ** module id = 7\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/factory.js?")},function(module,exports,__webpack_require__){eval("'use strict';\n\nvar services = __webpack_require__(4);\nvar Factory = __webpack_require__(7);\nvar utils = __webpack_require__(1);\n\nvar factories = {};\n\n/**\n * Fetch data\n *\n * @param {String} service\n * @param {String} url\n * @param {Object} options\n * @returns {Promise}\n */\nmodule.exports = function (service, url, options) {\n    if (!factories[service]) {\n        factories[service] = {};\n    }\n\n    var counters = factories[service];\n    var counter = counters[url];\n\n    if (!options.forceUpdate && counter) {\n        return counter;\n    }\n\n    counter = Factory();\n\n    var href = utils.makeUrl(options.counterUrl, {\n        url: url,\n    });\n\n    services[service].counter(href, counter, url);\n\n    counters[url] = counter;\n    return counter;\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/fetch.js\n ** module id = 8\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/fetch.js?")},function(module,exports,__webpack_require__){eval("'use strict';\n\nvar dom = __webpack_require__(2);\n\n/**\n * @param {String} url\n * @param {Function} factory\n */\nvar counter = function (url, factory) {\n    var self = this;\n\n    dom.getJSON(url, function (count) {\n        try {\n            var convertedNumber = typeof self.convertNumber === 'function' ? self.convertNumber(count) : count;\n            factory(convertedNumber);\n        }\n        catch (e) {}\n    });\n};\n\n/**\n * @param {Object} options\n */\nmodule.exports = function (options) {\n    options.counter = options.counter || counter;\n    options.click = options.click || function () {\n        return true;\n    };\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/service.js\n ** module id = 9\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/service.js?")},function(module,exports){eval("'use strict';\r\n\r\n/**\r\n * Facebook service provider\r\n */\r\n\r\nmodule.exports = {\r\n    counterUrl: 'https://graph.facebook.com/?id={url}&callback=?',\r\n    convertNumber: function (data) {\r\n        return data.share.share_count;\r\n    },\r\n    popupUrl: 'https://www.facebook.com/sharer/sharer.php?u={url}',\r\n    popupWidth: 600,\r\n    popupHeight: 500,\r\n};\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/services/facebook.js\n ** module id = 10\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/services/facebook.js?")},function(module,exports){eval("'use strict';\n\n/**\n * Google+ service provider\n */\n\nvar gplus = {\n    counterUrl: 'https://share.yandex.net/counter/gpp/?url={url}&callback=?',\n    gid: 0,\n    promises: {},\n    popupUrl: 'https://plus.google.com/share?url={url}',\n    popupWidth: 700,\n    popupHeight: 500,\n};\n\nmodule.exports = gplus;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/services/gplus.js\n ** module id = 11\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/services/gplus.js?")},function(module,exports,__webpack_require__){eval("'use strict';\r\n\r\n/**\r\n * Odnoklassniki service provider\r\n */\r\n\r\nvar utils = __webpack_require__(1);\r\nvar dom = __webpack_require__(2);\r\n\r\nvar odnoklassniki = {\r\n    counterUrl: 'https://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}',\r\n    counter: function (url, promise) {\r\n        this.promises.push(promise);\r\n\r\n        dom.getScript(utils.makeUrl(url, {\r\n            index: this.promises.length - 1,\r\n        }));\r\n    },\r\n    promises: [],\r\n    popupUrl: 'https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}',\r\n    popupWidth: 640,\r\n    popupHeight: 400,\r\n};\r\n\r\nutils.set(window, 'ODKL.updateCount', function (index, counter) {\r\n    odnoklassniki.promises[index](counter);\r\n});\r\n\r\nmodule.exports = odnoklassniki;\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/services/odnoklassniki.js\n ** module id = 12\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/services/odnoklassniki.js?")},function(module,exports){eval("'use strict';\r\n\r\n/**\r\n * Pinterest service provider\r\n */\r\n\r\nmodule.exports = {\r\n    counterUrl: 'https://api.pinterest.com/v1/urls/count.json?url={url}&callback=?',\r\n    convertNumber: function (counter) {\r\n        return counter.count;\r\n    },\r\n    popupUrl: 'https://pinterest.com/pin/create/button/?url={url}&description={title}',\r\n    popupWidth: 630,\r\n    popupHeight: 270,\r\n};\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/services/pinterest.js\n ** module id = 13\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/services/pinterest.js?")},function(module,exports){eval("'use strict';\n\n/**\n * Telegram service provider\n */\n\nmodule.exports = {\n    popupUrl: 'https://telegram.me/share/url?url={url}',\n    popupWidth: 600,\n    popupHeight: 500,\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/services/telegram.js\n ** module id = 14\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/services/telegram.js?")},function(module,exports){eval("'use strict';\n\n/**\n * Twitter service provider\n */\n\nmodule.exports = {\n    popupUrl: 'https://twitter.com/intent/tweet?url={url}&text={title}',\n    popupWidth: 600,\n    popupHeight: 450,\n    click: function () {\n        if (!/[\\.\\?:\\-–—]\\s*$/.test(this.options.title)) {\n            this.options.title += ':';\n        }\n\n        return true;\n    },\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/services/twitter.js\n ** module id = 15\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/services/twitter.js?")},function(module,exports,__webpack_require__){eval("'use strict';\r\n\r\n/**\r\n * Vkontakte service provider\r\n */\r\n\r\nvar utils = __webpack_require__(1);\r\nvar dom = __webpack_require__(2);\r\n\r\nvar vkontakte = {\r\n    counterUrl: 'https://vk.com/share.php?act=count&url={url}&index={index}',\r\n    counter: function (url, promise) {\r\n        this.promises.push(promise);\r\n\r\n        dom.getScript(utils.makeUrl(url, {\r\n            index: this.promises.length - 1,\r\n        }));\r\n    },\r\n    promises: [],\r\n    popupUrl: 'https://vk.com/share.php?url={url}&title={title}',\r\n    popupWidth: 550,\r\n    popupHeight: 330,\r\n};\r\n\r\nutils.set(window, 'VK.Share.count', function (index, count) {\r\n    vkontakte.promises[index](count);\r\n});\r\n\r\nmodule.exports = vkontakte;\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/services/vk.js\n ** module id = 16\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/services/vk.js?")},function(module,exports){eval("'use strict';\n\n/**\n * SVG icons for buttons\n * @type {Object}\n */\nmodule.exports = {\n    facebook: '13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h5V9H6V7h2V5c0-2 2-2 2-2h3v2h-3v2h3l-.5 2H10v7h3c2 0 3-1 3-3V3c0-2-1-3-3-3',\n    twitter: '15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353',\n    vkontakte: '13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zm.452 11.394l-1.603.022s-.345.068-.8-.243c-.598-.41-1.164-1.48-1.604-1.342-.446.144-.432 1.106-.432 1.106s.003.206-.1.315c-.11.12-.326.144-.326.144H7.87s-1.582.095-2.975-1.356c-1.52-1.583-2.862-4.723-2.862-4.723s-.078-.206.006-.305c.094-.112.35-.12.35-.12l1.716-.01s.162.026.277.11c.095.07.15.202.15.202s.276.7.643 1.335c.716 1.238 1.05 1.508 1.293 1.376.353-.193.247-1.75.247-1.75s.006-.565-.178-.817c-.145-.194-.415-.25-.534-.267-.096-.014.062-.238.267-.338.31-.15.853-.16 1.497-.153.502.004.646.035.842.083.59.143.39.694.39 2.016 0 .422-.075 1.018.23 1.215.13.085.453.013 1.256-1.352.38-.647.666-1.407.666-1.407s.062-.136.16-.194c.098-.06.232-.04.232-.04l1.804-.012s.542-.065.63.18c.092.257-.203.857-.94 1.84-1.21 1.612-1.345 1.46-.34 2.394.96.89 1.16 1.325 1.192 1.38.4.66-.44.71-.44.71',\n    gplus: '8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8',\n    pinterest: '7.99 0c-4.417 0-8 3.582-8 8 0 3.39 2.11 6.284 5.086 7.45-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.663 2.664-.19.796.398 1.446 1.184 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.343-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.835-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.74 4.976-4.152 4.976-.81 0-1.573-.42-1.834-.92l-.498 1.903c-.18.695-.668 1.566-.994 2.097.75.232 1.544.357 2.37.357 4.417 0 8-3.582 8-8s-3.583-8-8-8',\n    odnoklassniki: '8 6.107c.888 0 1.607-.72 1.607-1.607 0-.888-.72-1.607-1.607-1.607s-1.607.72-1.607 1.607c0 .888.72 1.607 1.607 1.607zM13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zM8 .75c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75S4.25 6.57 4.25 4.5C4.25 2.43 5.93.75 8 .75zm3.826 12.634c.42.42.42 1.097 0 1.515-.21.208-.483.313-.758.313-.274 0-.548-.105-.758-.314L8 12.59 5.69 14.9c-.42.418-1.098.418-1.516 0s-.42-1.098 0-1.516L6.357 11.2c-1.303-.386-2.288-1.073-2.337-1.11-.473-.354-.57-1.025-.214-1.5.354-.47 1.022-.567 1.496-.216.03.022 1.4.946 2.698.946 1.31 0 2.682-.934 2.693-.943.474-.355 1.146-.258 1.5.213.355.474.26 1.146-.214 1.5-.05.036-1.035.723-2.338 1.11l2.184 2.184',\n    telegram: '6,11.960784l-1,-3l11,-8l-15.378,5.914c0,0 -0.672,0.23 -0.619,0.655c0.053,0.425 0.602,0.619 0.602,0.619l3.575,1.203l1.62,5.154l2.742,-2.411l-0.007,-0.005l3.607,2.766c0.973,0.425 1.327,-0.46 1.327,-0.46l2.531,-13.435l-10,11z',\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/svg.js\n ** module id = 17\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/svg.js?");
	},function(module,exports,__webpack_require__){eval("'use strict';\r\n\r\nvar Button = __webpack_require__(6);\r\n\r\nvar config = __webpack_require__(3);\r\nvar utils = __webpack_require__(1);\r\n\r\n/**\r\n * Main widget view\r\n *\r\n * @param {Node} container\r\n * @param {Object} options\r\n */\r\nfunction Likely(container, options) {\r\n    this.container = container;\r\n    this.options = options;\r\n\r\n    this.countersLeft = 0;\r\n    this.buttons = [];\r\n    this.number = 0;\r\n\r\n    this.init();\r\n}\r\n\r\nLikely.prototype = {\r\n    /**\r\n     * Initiate the social buttons widget\r\n     */\r\n    init: function () {\r\n        utils.toArray(this.container.children)\r\n             .forEach(this.addButton.bind(this));\r\n\r\n        if (this.options.counters) {\r\n            this.timer = setTimeout(this.appear.bind(this), this.options.wait);\r\n            this.timeout = setTimeout(this.ready.bind(this), this.options.timeout);\r\n        }\r\n        else {\r\n            this.appear();\r\n        }\r\n    },\r\n\r\n    /**\r\n     * Add a button\r\n     *\r\n     * @param {Node} node\r\n     */\r\n    addButton: function (node) {\r\n        var button = new Button(node, this, this.options);\r\n\r\n        this.buttons.push(button);\r\n\r\n        if (button.options.counterUrl) {\r\n            this.countersLeft++;\r\n        }\r\n    },\r\n\r\n    /**\r\n     * Update the timer with URL\r\n     *\r\n     * @param {Object} options\r\n     */\r\n    update: function (options) {\r\n        if (\r\n            options.forceUpdate ||\r\n            options.url && options.url !== this.options.url\r\n        ) {\r\n            this.countersLeft = this.buttons.length;\r\n            this.number = 0;\r\n\r\n            this.buttons.forEach(function (button) {\r\n                button.update(options);\r\n            });\r\n        }\r\n    },\r\n\r\n    /**\r\n     * Update counter\r\n     *\r\n     * @param {String} service\r\n     * @param {Number} counter\r\n     */\r\n    updateCounter: function (service, counter) {\r\n        if (counter) {\r\n            this.number += counter;\r\n        }\r\n\r\n        this.countersLeft--;\r\n\r\n        if (this.countersLeft === 0) {\r\n            this.appear();\r\n            this.ready();\r\n        }\r\n    },\r\n\r\n    /**\r\n     * Show the buttons with smooth animation\r\n     */\r\n    appear: function () {\r\n        this.container.classList.add(config.name + '_visible');\r\n    },\r\n\r\n    /**\r\n     * Get. Set. Ready.\r\n     */\r\n    ready: function () {\r\n        if (this.timeout) {\r\n            clearTimeout(this.timeout);\r\n\r\n            this.container.classList.add(config.name + '_ready');\r\n        }\r\n    },\r\n};\r\n\r\nmodule.exports = Likely;\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./source/widget.js\n ** module id = 18\n ** module chunks = 0 1\n **/\n//# sourceURL=webpack:///./source/widget.js?")}])});

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map