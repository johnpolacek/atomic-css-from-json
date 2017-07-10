#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class HeightPercentage extends BaseStylingModule {
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

		for (let heightPercent of layout.heightPercentage) {
			declarations.push({[theme.layout.naming.heightPercentage + heightPercent]: heightPercent + (heightPercent != '0' && '%')});
		}
		super.extendProps(css, super.getProps('height', declarations));
		super.extendProps(css, super.getProps('height', [{[theme.layout.naming.heightAuto]:'auto'}]));
		super.extendProps(css, super.getProps('height', [{[theme.layout.naming.heightInherit]:'inherit'}]));

		return css;
	}
}

module.exports = HeightPercentage;