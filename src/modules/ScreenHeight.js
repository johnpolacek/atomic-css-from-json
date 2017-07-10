#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class ScreenHeight extends BaseStylingModule {
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

		for (let screenHeight of layout.screenHeight) {
			declarations.push({[theme.layout.naming.screenHeight + screenHeight]: screenHeight + (screenHeight != '0' && 'vh')});
		}
		super.extendProps(css, super.getProps('height', declarations));

		return css;
	}
}

module.exports = ScreenHeight;