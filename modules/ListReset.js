#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class ListReset extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const colors = this.props;

		let css = {};

		css['.' + (theme.typography.naming.listReset || 'list-reset')] = { 
			"list-style": "none",
			"padding-left": "0"
		};
		css['.' + (theme.typography.naming.listStyleNone || 'list-style-none')] = { 
			"list-style": "none"
		};

		return css;
	}
}

module.exports = ListReset;