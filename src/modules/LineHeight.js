#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class LineHeight extends BaseStylingModule {
	constructor(theme, props) {
		super(theme, props);
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const typography = this.props;

		let css = {};
		let declarations = [];
		
		for (let i = 0; i < typography.heights.length; i++) {
			declarations.push({[typeof theme.typography.naming.height == 'string' ? theme.typography.naming.height + (i+1) : theme.typography.naming.height[i] ]: typography.heights[i]});
		}
		super.extendProps(css, super.getProps('line-height', declarations));

		return css;
	}
}

module.exports = LineHeight;