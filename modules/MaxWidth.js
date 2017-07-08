#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class MaxWidth extends BaseStylingModule {
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

		for (let i = 0; i < layout.maxWidth.length; i++) {
			declarations.push(
				{[theme.layout.naming.maxWidth + (i+1)]: layout.maxWidth[i]}
			);
		}

		if (theme.layout.naming.maxWidthNone) {
			declarations.push({[theme.layout.naming.maxWidthNone]: 'none'});
		}
		if (theme.layout.naming.maxWidthFit) {
			declarations.push({[theme.layout.naming.maxWidthFit]: '100%'});
		}
		super.extendProps(css, super.getProps('max-width', declarations));

		return css;
	}
}

module.exports = MaxWidth;