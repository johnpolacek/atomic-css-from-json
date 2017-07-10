#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class MinHeightPercentage extends BaseStylingModule {
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

		for (let minHeightPercent of layout.minHeightPercentage) {
			declarations.push({[theme.layout.naming.minHeightPercentage + minHeightPercent]: minHeightPercent + (minHeightPercent != '0' && '%')});
		}
		super.extendProps(css, super.getProps('min-height', declarations));

		return css;
	}
}

module.exports = MinHeightPercentage;