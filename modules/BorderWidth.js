#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class BorderWidth extends BaseStylingModule {
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

		let borders = [
			{[theme.layout.naming.borderAll]:'border-width'},
			{[theme.layout.naming.borderTop]:'border-top-width'},
			{[theme.layout.naming.borderRight]:'border-right-width'},
			{[theme.layout.naming.borderBottom]:'border-bottom-width'},
			{[theme.layout.naming.borderLeft]:'border-left-width'}
		];

		for (let b of borders) {
			// console.log(b[Object.keys(b)[0]]);
			super.extendProps(css, super.getProps(b[Object.keys(b)[0]], [{[Object.keys(b)[0]]: '1px'}]));
			super.extendProps(css, super.getProps('border-style', [{[Object.keys(b)[0]]: 'solid'}]));
		}
		super.extendProps(css, super.getProps('border-width', [{[theme.layout.naming.borderNone]: '0'}]));
		super.extendProps(css, super.getProps('border-style', [{[theme.layout.naming.borderNone]: 'none'}]));


		layout.borderWidth.unshift('0');
		let borderWidths = [
			{[theme.layout.naming.borderWidth] : 'border-width'},
			{[theme.layout.naming.borderTop] : 'border-top-width'},
			{[theme.layout.naming.borderRight] : 'border-right-width'},
			{[theme.layout.naming.borderBottom] : 'border-bottom-width'},
			{[theme.layout.naming.borderLeft] : 'border-left-width'}
		];
		
		for (let i = 0; i < layout.borderWidth.length; i++) {
			for (let bw of borderWidths) {
				super.extendProps(css, super.getProps(bw[Object.keys(bw)[0]], [{[Object.keys(bw)[0] + '-' + (i)]: layout.borderWidth[i]}]));
			}
		}

		return css;
	}
}

module.exports = BorderWidth;