#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class BackgroundColor extends BaseStylingModule {
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

			css['.' + theme.color.naming.backgroundColor + colorName] = {'background-color':colorValue};
		}

		return css;
	}
}

module.exports = BackgroundColor;