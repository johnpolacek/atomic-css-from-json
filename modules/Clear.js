#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class Clear extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const layout = this.props;
		
		let css = {};
		let clears = [
			{[theme.layout.naming.clearBoth]: 'both'},
			{[theme.layout.naming.clearLeft]: 'left'},
			{[theme.layout.naming.clearNone]: 'none'},
			{[theme.layout.naming.clearRight]: 'right'}
		];
		for (let clear of clears) {
			super.extendProps(css, super.getProps('clear', [clear]));
		}

		return css;
	}
}

module.exports = Clear;