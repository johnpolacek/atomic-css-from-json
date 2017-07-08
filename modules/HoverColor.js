#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class HoverColor extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const colors = this.props;

		let css = {};

		for (let color of colors) {

			const colorName	= Object.keys(color)[0];
			const colorValue	= color[colorName];
			css['.' + theme.color.naming.textColor + theme.color.naming.hover + colorName + ':hover'] = { 'color': colorValue};
			css['.' + theme.color.naming.textColor + theme.color.naming.hover + colorName + ':hover']  = { 'color': colorValue};
			css['.' + theme.color.naming.backgroundColor + theme.color.naming.hover + colorName + ':hover'] = { 'background-color': colorValue};
			css['.' + theme.color.naming.backgroundColor + theme.color.naming.hover + colorName + ':hover'] = {'background-color': colorValue};
		}

		return css;
	}
}

module.exports = HoverColor;