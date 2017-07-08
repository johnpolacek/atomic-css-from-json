#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class BackgroundSize extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;

		let css = {};
		css['.cover'] = { 'background-size': 'cover' };
		css['.contain'] = { 'background-size': 'contain' };

		return css;
	}
}

module.exports = BackgroundSize;