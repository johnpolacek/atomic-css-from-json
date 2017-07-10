#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class ZIndex extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const layout = this.props;
		
		const backgroundPositionPrefix = theme.layout.naming.backgroundPosition;

		let css = {};
		for (let z of layout.zIndex) {
			css['.' + theme.layout.naming.zIndex + z] = { 'z-index':z };
		}
		return css;
	}
}

module.exports = ZIndex;