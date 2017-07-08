#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class BorderStyle extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;

		let css = {};
		css['.' + theme.layout.naming.borderStyle + 'solid'] = { 'border-style':'solid' };
		css['.' + theme.layout.naming.borderStyle + 'dashed'] = { 'border-style':'dashed' };
		css['.' + theme.layout.naming.borderStyle + 'dotted'] = { 'border-style':'dotted' };
		css['.' + theme.layout.naming.borderStyle + 'none'] = { 'border-style':'none' };

		return css;
	}
}

module.exports = BorderStyle;