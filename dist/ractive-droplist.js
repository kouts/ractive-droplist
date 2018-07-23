(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RactiveDroplist"] = factory();
	else
		root["RactiveDroplist"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (Ractive.extend({
    template: {v:4,t:[{t:7,e:"div",m:[{n:"class",f:[{t:2,r:"class"}],t:13},{n:"class-hidden",t:13,f:[{t:2,r:"fp.hidden"}]}],f:[{t:4,f:[{t:7,e:"label",m:[{t:13,n:"class",f:"oh nowrap-ellipsis",g:1}],f:[{t:4,f:[{t:7,e:"span",m:[{t:13,n:"class",f:"required",g:1}],f:["*"]}],n:50,r:"fp.required"},{t:2,r:"label"}]}],n:50,r:"label"}," ",{t:7,e:"input",m:[{n:"type",f:"text",t:13},{n:"name",f:[{t:2,r:"name"}],t:13},{n:"value",f:[{t:2,r:"value"}],t:13},{n:"class",f:"hidden-out-of-view",t:13},{n:"class-required",t:13,f:[{t:2,r:"fp.required"}]}]}," ",{t:7,e:"div",m:[{t:13,n:"class",f:"droplist btn-group",g:1},{n:"class-open",t:13,f:[{t:2,r:"menu_open"}]},{n:["actionoutside"],t:70,f:{r:["@this"],s:"[_0.set(\"menu_open\",false)]"}}],f:[{t:7,e:"button",m:[{t:13,n:"class",f:"btn btn-default dropdown-toggle",g:1},{n:"type",f:"button",t:13,g:1},{n:"aria-haspopup",f:"true",t:13,g:1},{n:"aria-expanded",f:[{t:2,x:{r:["menu_open"],s:"_0?\"true\":\"false\""}}],t:13},{n:["click"],t:70,f:"toggle_menu"},{t:2,x:{r:["fp.disabled"],s:"_0?\"disabled\":\"\""}}],f:[{t:7,e:"span",m:[{t:13,n:"class",f:"selected-text",g:1}],f:[{t:3,x:{r:["selected_text"],s:"_0?_0:\"&nbsp;\""}}]}," ",{t:7,e:"span",m:[{t:13,n:"class",f:"caret",g:1}]}]}," ",{t:7,e:"ul",m:[{t:13,n:"class",f:"dropdown-menu js-input-container",g:1}],f:[{t:7,e:"li",m:[{t:13,n:"style",f:"padding:5px;;",g:1}],f:[{t:7,e:"input",m:[{n:"type",f:"text",t:13},{n:"class",f:"form-control",t:13},{n:"autocomplete",f:"off",t:13},{n:"value",f:[{t:2,r:"text_value"}],t:13},{n:["keydown"],t:70,f:"keydown"},{n:"placeholder",f:[{t:2,r:"type_to_search"}],t:13}]}]}]}," ",{t:7,e:"ul",m:[{t:13,n:"class",f:"dropdown-menu js-drop-list",g:1},{n:"style",f:["max-height: ",{t:2,r:"maxheight"},"px; ",{t:2,x:{r:["show_list_on_open","text_value"],s:"_0||_1?\"\":\"height:0px;\""}}],t:13}],f:[{t:4,f:[{t:7,e:"li",m:[{n:"class-selected",t:13,f:[{t:2,x:{r:["value","~/value"],s:"_0==_1"}}]},{n:"class-active",t:13,f:[{t:2,x:{r:["value","active_value"],s:"_0==_1"}}]},{n:["click"],t:70,f:"set_selected"},{n:["mouseenter"],t:70,f:"set_active"},{n:["mouseup"],t:70,f:{r:["@this","set_active"],s:"[_0.find(\"input\").focus(),_1]"}}],f:[{t:8,r:"content"}]}],n:52,r:"filtered"},{t:4,f:[{t:7,e:"li",f:[{t:2,x:{r:["text_value","no_results"],s:"_0?_1:\"\""}}]}],n:51,l:1}]}]}," ",{t:7,e:"label",m:[{t:13,n:"style",f:"display:none;;",g:1},{t:13,n:"class",f:"error",g:1},{n:"for",f:[{t:2,r:"name"}],t:13}]}]}],e:{"[_0.set(\"menu_open\",false)]":function (_0){return([_0.set("menu_open",false)]);},"_0?\"true\":\"false\"":function (_0){return(_0?"true":"false");},"_0?\"disabled\":\"\"":function (_0){return(_0?"disabled":"");},"_0?_0:\"&nbsp;\"":function (_0){return(_0?_0:"&nbsp;");},"_0||_1?\"\":\"height:0px;\"":function (_0,_1){return(_0||_1?"":"height:0px;");},"_0==_1":function (_0,_1){return(_0==_1);},"[_0.find(\"input\").focus(),_1]":function (_0,_1){return([_0.find("input").focus(),_1]);},"_0?_1:\"\"":function (_0,_1){return(_0?_1:"");}}},
    css: "",
    data: function() {
        return {
            no_results: 'No results',
            type_to_search: 'Type here to search',
            label: '',
            class: '',
            menu_open: false,
            list: [],
            value: '',
            active_value: '',
            text_value: '',
            show_list_on_open: true,
            as_value: 'value',
            as_text: 'text',
            maxheight: 210,
            add_search: '',
            fp: {
                required: false,
                hidden: false,
                disabled: false
            },
            fp_event: null
        }
    },
    computed: {
        filtered: function() {
            var show_list_on_open = this.get('show_list_on_open');
            var tosearch = this.get('text_value');
            var list = (show_list_on_open || !show_list_on_open && tosearch.length > 0) ? this.get('list') : [];
            // Rename keys and filter at the same time
            return list.reduce(function(arr, o) {
                var k = {value: o[this.get('as_value')], text: o[this.get('as_text')]}
                // If add_search doesnt exist then set it empty value.
                k.add_search = o[this.get('add_search')] ? o[this.get('add_search')] : '';
                // add_search is an additional field to search in list. Search results based on two criteria.
                if(k.text.toUpperCase().indexOf(tosearch.toUpperCase()) >= 0 || k.add_search.toUpperCase().indexOf(tosearch.toUpperCase()) >= 0){
                    // Find mathed text from list based on text input.  We do that for text case. Matches both capital and lower case letters 
                    var search_text = new RegExp(tosearch, 'i').exec(k.text);
                    if(search_text!= null){
                        k.text_highlighted = k.text.replace(search_text[0], '<mark>'+search_text[0]+'</mark>');
                    }else{
                        k.text_highlighted = k.text.replace(tosearch, '<mark>'+tosearch+'</mark>');
                    }
                    arr.push(k);
                }
                return arr;
            }.bind(this), []);
        },
        selected_text: function() {
            var value = this.get('value');
            var list = this.get('list');
            var toret = list.filter(function(o) {
                return o[this.get('as_value')] == value;
            }.bind(this));
            return (toret.length > 0) ? toret[0][this.get('as_text')] : '';
        },
        name: function(){
            return 'dl_'+_u.uuid();
        }
    },
    on: {
        keydown: function(ctx) {
            var k = ctx.original.keyCode;
            if (k === 38 || k === 40) {
                ctx.original.preventDefault();
                var filtered = this.get('filtered');
                var selected = this.get('value');
                var active = this.get('active_value');
                var toselect = '';
                var active_found = false;
                // Find active li and then select previous or next li. If last li is selected, then select last li when down arrow pressed.
                for (var i = 0; i < filtered.length; i++) {
                    if (filtered[i]['value'] == active) {
                        var pr = (k == 38) ? -1 : 1;
                        toselect = typeof(filtered[i + pr]) != 'undefined' ? filtered[i + pr]['value'] : filtered[i]['value'];
                        active_found = true;
                        break;
                    }
                };
                var value = active_found ? toselect : filtered.length > 0 ? filtered[0]['value'] : '';
                this.set('active_value', value);
                var selected_li = this.find('li.active');
                var selected_li_offset_top = selected_li.offsetTop;
                var selected_li_height = selected_li.clientHeight;
                var list = this.find('.js-drop-list');
                // Up arrow keypress
                if(k === 38){
                    // If next selected li is above current view, then scrollup
                    if (selected_li_offset_top < list.scrollTop){
                        list.scrollTop-=selected_li_height;
                    }
                }
                // Down arrow keypress
                if(k === 40){
                    // If next li is out of current view, then scrolldown.
                    if (selected_li_offset_top +selected_li_height > list.offsetHeight+list.scrollTop){
                        // If selected li is not the last one then scrolldown
                        if(selected_li_offset_top + selected_li_height <= list.scrollHeight){
                            list.scrollTop+=selected_li_height;
                        }
                    }
                }
            }
            // Enter button pressed
            if (k === 13) {
                ctx.original.preventDefault();
                this.set({
                    value: this.get('filtered').length == 1 ? this.get('filtered.0.value') : this.get('active_value'),
                    menu_open: false
                });
                this.fire('change', ctx, {selected_line: ctx.get()});
                this.find('button.dropdown-toggle').focus();
            }
        },
        set_selected: function(ctx) {
            this.set({
                value: ctx.get('value'),
                menu_open: false
            });
            this.fire('change', ctx, {selected_line: ctx.get()});
            this.find('button.dropdown-toggle').focus();
        },
        set_active: function(ctx) {
            this.set('active_value', ctx.get('value'));
        },
        open_menu: function(ctx){
            var droplist = this.find('.droplist.btn-group');
            var list = this.find('.js-drop-list');
            var input_container = this.find('.js-input-container');
            this.set({
                active_value: this.get('value'),
                text_value: '',
                menu_open: true
            });
            var height = list.offsetHeight + input_container.offsetHeight;
            var dist_top = droplist.getBoundingClientRect().top;
            var dist_bottom = window.innerHeight - droplist.getBoundingClientRect().top - droplist.offsetHeight;
            if(dist_bottom - height < 0 && dist_top - height > 0){
                droplist.classList.add('dropup');
            }else{
                droplist.classList.remove('dropup');
            }
            this.find('.js-input-container > li > input').focus();
            if (this.find('li.selected')) {
                list.scrollTop = this.find('li.selected').offsetTop;
            }
        },
        toggle_menu: function(ctx) {
            if (this.get('menu_open') == false) {
                this.fire('open_menu', ctx);
            } else {
                this.set('menu_open', false);
            }
        },
        change: function(){
            if(this.get('fp_event')){
                this.exportFpData(this.find('input'), this.get('fp_event'));
            }
        }
    }
}));

/***/ })
/******/ ])["default"];
});