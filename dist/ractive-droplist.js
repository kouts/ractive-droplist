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

function uuid(){
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
    var lut =["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]; var d0 = Math.random()*0x100000000|0; var d1 = Math.random()*0x100000000|0; var d2 = Math.random()*0x100000000|0; var d3 = Math.random()*0x100000000|0; return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+ lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+ lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+ lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (Ractive.extend({
    template: {v:4,t:[{t:7,e:"div",m:[{t:13,n:"class",f:"dropdown show",g:1}],f:[{t:7,e:"button",m:[{t:13,n:"class",f:"btn btn-secondary dropdown-toggle",g:1},{n:"type",f:"button",t:13,g:1},{n:"id",f:"dropdownMenuButton",t:13,g:1},{n:"data-toggle",f:"dropdown",t:13,g:1},{n:"aria-haspopup",f:"true",t:13,g:1},{n:"aria-expanded",f:"true",t:13,g:1}],f:["Dropdown button"]}," ",{t:7,e:"div",m:[{t:13,n:"style",f:"position: absolute; top: 40px; left: 0px;;",g:1},{t:13,n:"class",f:"dropdown-menu show",g:1}],f:[{t:7,e:"a",m:[{t:13,n:"class",f:"dropdown-item",g:1},{n:"href",f:"#",t:13,g:1}],f:["Action"]}," ",{t:7,e:"a",m:[{t:13,n:"class",f:"dropdown-item",g:1},{n:"href",f:"#",t:13,g:1}],f:["Another action"]}," ",{t:7,e:"a",m:[{t:13,n:"class",f:"dropdown-item",g:1},{n:"href",f:"#",t:13,g:1}],f:["Something else here"]}]}]}]},
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
            return 'dl_'+uuid();
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
                this.find('button.droplist-toggle').focus();
            }
        },
        set_selected: function(ctx) {
            this.set({
                value: ctx.get('value'),
                menu_open: false
            });
            this.fire('change', ctx, {selected_line: ctx.get()});
            this.find('button.droplist-toggle').focus();
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
                droplist.classList.add('droplistup');
            }else{
                droplist.classList.remove('droplistup');
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
    },
    events: {
        actionoutside: function(node, fire){
            function escHandler(event){
                if(event.keyCode == 27){
                    fire({node: node, original: event});
                }
            }
            function clickHandler(event){
                if(!node.contains(event.target)){
                    fire({node: node, original: event});
                }
            }
            document.addEventListener('click', clickHandler);
            document.addEventListener('keydown', escHandler);
            return {
                teardown: function(){
                    document.removeEventListener('click', clickHandler);
                    document.removeEventListener('keydown', escHandler);
                }
            }
        }
    }
}));

/***/ })
/******/ ])["default"];
});