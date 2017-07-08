#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class BoxShadow extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const layout = this.props;
		
		let css = {};
		for (let i=0; i < layout.shadows.length; i++) {
			css['.' + theme.layout.naming.shadow + (i+1)] = { 'box-shadow':layout.shadows[i] };
		}

		return css;
	}
}

module.exports = BoxShadow;