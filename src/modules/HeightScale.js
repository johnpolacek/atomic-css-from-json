#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class HeightScale extends BaseStylingModule {
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

		layout.heightScale.unshift('0');
		for (let i = 0; i < layout.heightScale.length; i++) {
			declarations.push({[theme.layout.naming.heightScale + i]: layout.heightScale[i]});
		}
		super.extendProps(css, super.getProps('height', declarations));
		super.extendProps(css, super.getProps('height', [{[theme.layout.naming.heightAuto]:'auto'}]));
		super.extendProps(css, super.getProps('height', [{[theme.layout.naming.heightInherit]:'inherit'}]));

		return css;
	}
}

module.exports = HeightScale;