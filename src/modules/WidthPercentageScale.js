#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class WidthPercentageScale extends BaseStylingModule {
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

		for (let i=0; i<layout.widthPercentageScale; i++) {
			let widthPercent = (i+1) / parseInt(layout.widthPercentageScale,10) * 100;
			declarations.push({[theme.layout.naming.widthPercentageScale + (i+1)]: widthPercent + '%'});
		}
		super.extendProps(css, super.getProps('width', declarations));

		return css;
	}
}

module.exports = WidthPercentageScale;