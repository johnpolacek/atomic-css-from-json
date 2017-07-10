#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class VerticalAlign extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		
		let css = {};
		let verticalAligns = [
			{[theme.layout.naming.verticalAlignBaseline]: 'baseline'},
			{[theme.layout.naming.verticalAlignTop]: 'top'},
			{[theme.layout.naming.verticalAlignMiddle]: 'middle'},
			{[theme.layout.naming.verticalAlignBottom]: 'bottom'}
		];
		super.extendProps(css, super.getProps('vertical-align', verticalAligns));

		return css;
	}
}

module.exports = VerticalAlign;