#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class TextColor extends BaseStylingModule {
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

			css['.' + theme.color.naming.textColor + colorName] = {'color':colorValue};
		}

		return css;
	}
}

module.exports = TextColor;