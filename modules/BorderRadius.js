#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class BorderRadius extends BaseStylingModule {
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

		if (layout.borderRadius.length) {
			css['.' + (theme.layout.naming.borderRadiusNone || theme.layout.naming.borderRadius + '0')] = { 'border-radius': 0 };
			for (let i = 0; i < layout.borderRadius.length; i++) {
				let borderClass = '.' + theme.layout.naming.borderRadius + (layout.borderRadius.length == 1 ? '' : (i+1));
				css[borderClass] = { 'border-radius': layout.borderRadius[i] };
				css[borderClass + '-top'] = { 'border-radius': layout.borderRadius[i]+' '+layout.borderRadius[i]+' 0 0' };
				css[borderClass + '-right'] = { 'border-radius': '0 '+layout.borderRadius[i]+' '+layout.borderRadius[i]+' 0' };
				css[borderClass + '-bottom'] = { 'border-radius': '0 0 '+layout.borderRadius[i]+' '+layout.borderRadius[i] };
				css[borderClass + '-left'] = { 'border-radius': layout.borderRadius[i]+' '+'0 0 '+layout.borderRadius[i] };
			}
		}
		css['.' + theme.layout.naming.circle || 'circle'] = { 'border-radius': '100%' };
		if (theme.layout.naming.pill) {
			css['.' + theme.layout.naming.pill || 'pill'] = { 'border-radius': '9999px' };
		}

		return css;
	}
}

module.exports = BorderRadius;