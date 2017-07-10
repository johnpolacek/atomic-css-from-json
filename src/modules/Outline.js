#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class Outline extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const layout = this.props;

		let css = {};
		let declarations = [
			{[theme.layout.naming.outlineSolid]:'1px solid'},
			{[theme.layout.naming.outlineTransparent]:'1px solid transparent'},
			{[theme.layout.naming.outlineNone]:'0'}
		];
		super.extendProps(css, super.getProps('outline', declarations));

		return css;
	}
}

module.exports = Outline;