#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class TextAlign extends BaseStylingModule {
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
			{[theme.typography.naming.align.left]:'left'},
			{[theme.typography.naming.align.center]:'center'},
			{[theme.typography.naming.align.right]:'right'},
			{[theme.typography.naming.align.justify]:'justify'}
		];
		super.extendProps(css, super.getProps('text-align', declarations));

		return css;
	}
}

module.exports = TextAlign;