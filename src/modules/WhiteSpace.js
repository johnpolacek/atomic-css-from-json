#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class WhiteSpace extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const colors = this.props;

		let css = {};

		let declarations = [
			{[theme.typography.naming.whitespace.normal]:'normal'},
			{[theme.typography.naming.whitespace.nowrap]:'nowrap'},
			{[theme.typography.naming.whitespace.pre]:'pre'},
		];
		super.extendProps(css, super.getProps('white-space', declarations));

		return css;
	}
}

module.exports = WhiteSpace;