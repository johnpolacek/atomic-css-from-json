#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class WidthScale extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const layout = this.props;

		let css = {};
		let declarations = [];

		layout.widthScale.unshift('0');
		for (let i = 0; i < layout.widthScale.length; i++) {
			declarations.push({[theme.layout.naming.widthScale + '' + i]: layout.widthScale[i]});
		}
		super.extendProps(css, super.getProps('width', declarations));

		return css;
	}
}

module.exports = WidthScale;