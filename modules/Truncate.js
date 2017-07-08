#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class Truncate extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const colors = this.props;

		let css = {};

		css['.' + (theme.typography.naming.truncate || 'truncate')] = { 
			"max-width": "100%",
			"overflow": "hidden",
			"text-overflow": "ellipsis",
			"white-space": "nowrap"
		};

		return css;
	}
}

module.exports = Truncate;