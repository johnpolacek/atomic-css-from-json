#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class Font extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const typography = this.props;

		let css = {};
		let declarations = [];

		// font families
		if (theme.typography.naming.sans) {
			css['.' + theme.typography.naming.sans] = { 'font-family': typography.sans + ', sans-serif' };
		}
		if (theme.typography.naming.serif) {
			css['.' + theme.typography.naming.serif] = { 'font-family': typography.serif + ', serif' };
		}
		if (theme.typography.naming.mono) {
			css['code, .' + theme.typography.naming.mono] = { 'font-family': typography.mono + ', monospace' };
		}
		if (theme.typography.naming.inherit) {
			css['.' + theme.typography.naming.inherit] = { 'font-family': 'inherit' };
		}

		for (let font of typography.fonts) {
			css['.' + Object.keys(font)[0]] = { 'font-family': font[Object.keys(font)[0]] };
		}

		// weight and style
		css['.' + theme.typography.naming.normal] = { 'font-weight':'normal' };
		css['.' + theme.typography.naming.bold] = { 'font-weight':'bold' };
		css['.'+ theme.typography.naming.italic] = { 'font-style':'italic' };
		
		for (let i = 0; i < typography.weights.length; i++) {
			declarations.push({[theme.typography.naming.weight + i]: typography.weights[i]});
		}
		super.extendProps(css, super.getProps('font-weight', declarations));
		
		css['.'+ (theme.typography.naming.decoration.underline || 'underline')] = { 'text-decoration':'underline' };
		css['.'+ (theme.typography.naming.transform.uppercase || 'uppercase')] = { 'text-transform':'uppercase' };
		css['.'+ (theme.typography.naming.transform.lowercase || 'lowercase')] = { 'text-transform':'lowercase' };

		if (theme.typography.naming.decoration.none) {
			css['.'+ theme.typography.naming.decoration.none] = { 'text-decoration':'none' };
		}
		if (theme.typography.naming.transform.capitalize) {
			css['.'+ theme.typography.naming.transform.capitalize] = { 'text-transform':'capitalize' };
		}
		if (theme.typography.naming.decoration.linethrough) {
			css['.'+ theme.typography.naming.decoration.linethrough] = { 'text-decoration':'line-through' };
		}
		if (theme.typography.naming.transform.none) {
			css['.'+ theme.typography.naming.transform.none] = { 'text-transform':'none' };
		}

		return css;
	}
}

module.exports = Font;