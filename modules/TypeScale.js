#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class TypeScale extends BaseStylingModule {
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
		
		for (let i = 0; i < typography.scale.length; i++) {
			declarations.push({[theme.typography.naming.scale[i]]: typography.scale[i]});
		}
		super.extendProps(css, super.getProps('font-size', declarations));

		return css;
	}
}

module.exports = TypeScale;