#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class Clearfix extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const layout = this.props;
		
		let css = {};

		css['.' + (theme.layout.naming.clearfix || 'clearfix') + ':before'] = { "content": "\" \"", "display": "table" };
		css['.' + (theme.layout.naming.clearfix || 'clearfix') + ':after'] = { "content": "\" \"", "display": "table", "clear":"both" };

		return css;
	}
}

module.exports = Clearfix;