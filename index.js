#!/usr/bin/env node

'use strict';

const Absurd = require('absurd');
const fs = require('fs');
const api = Absurd();
const theme = require('./src/theme');

const generateStyles = (modules, styles) => {
	let styleModules = {};
	let css = {};
	for (let module of modules) {
		styleModules[module] = require('./modules/'+module);
		Object.assign(css, new styleModules[module](theme, styles).generate());
	}
	return css;
}

// Generate Styles
let css = {};
Object.assign(css, generateStyles(theme.color.modules, theme.color.colors));
Object.assign(css, generateStyles(theme.typography.modules, theme.typography.styles));
Object.assign(css, generateStyles(theme.layout.modules, theme.layout.styles));

css['.undefined'] = null; // remove when name is undefined in theme

if (theme.libs) {
	for (let lib of theme.libs) {
		api.rawImport('./src/lib/'+lib);
	}
}

api.add(css);

api.compileFile('./styles.css', function(err, result) {
    // console.log(result);
}, {});