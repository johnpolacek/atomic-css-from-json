#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class LetterSpacing extends BaseStylingModule {
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
		for (let i = 0; i < typography.spacing.length; i++) {
			declarations.push({[theme.typography.naming.spacing[i]]: typography.scale[i]});
		}
		super.extendProps(css, super.getProps('letter-spacing', declarations));

		return css;
	}
}

module.exports = LetterSpacing;