#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class Overflow extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const layout = this.props;

		let css = {};
		let overflow = [
			{"overflow-visible": "visible"},
			{"overflow-hidden": "hidden"},
			{"overflow-scroll": "scroll"},
			{"overflow-auto": "auto"}
		];
		let overflowX = [
			{"overflow-x-visible":"visible"},
			{"overflow-x-hidden":"hidden"},
			{"overflow-x-scroll":"scroll"},
			{"overflow-x-auto":"auto"}
		];
		let overflowY = [
			{"overflow-y-visible":"visible"},
			{"overflow-y-hidden":"hidden"},
			{"overflow-y-scroll":"scroll"},
			{"overflow-y-auto":"auto"}
		];
		super.extendProps(css, super.getProps('overflow', overflow));
		super.extendProps(css, super.getProps('overflow-x', overflowX));
		super.extendProps(css, super.getProps('overflow-y', overflowY));

		return css;
	}
}

module.exports = Overflow;