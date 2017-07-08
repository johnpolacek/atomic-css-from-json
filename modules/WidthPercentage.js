#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class WidthPercentage extends BaseStylingModule {
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
		for (let widthPercent of layout.widthPercentage) {
			declarations.push({[theme.layout.naming.widthPercentage + widthPercent]: widthPercent + (widthPercent != '0' && '%')});
		}
		declarations.push({[theme.layout.naming.widthPercentage + 'third']: 'calc(100% / 3)'});
		declarations.push({[theme.layout.naming.widthPercentage + 'two-thirds']: 'calc(100% / 1.5)'});
		super.extendProps(css, super.getProps('width', declarations));

		return css;
	}
}

module.exports = WidthPercentage;