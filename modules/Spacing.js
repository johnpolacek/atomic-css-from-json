#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class Spacing extends BaseStylingModule {
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

		let spacing = layout.spacing;
		
		spacing.unshift(0);
		let paddings = [
			{[theme.layout.naming.paddingAll] : 'padding'},
			{[theme.layout.naming.paddingTop] : 'padding-top'},
			{[theme.layout.naming.paddingVertical] : 'padding-top'},
			{[theme.layout.naming.paddingRight] : 'padding-right'},
			{[theme.layout.naming.paddingSides] : 'padding-right'},
			{[theme.layout.naming.paddingBottom] : 'padding-bottom'},
			{[theme.layout.naming.paddingVertical] : 'padding-bottom'},
			{[theme.layout.naming.paddingLeft] : 'padding-left'},
			{[theme.layout.naming.paddingSides] : 'padding-left'}
		];
		for (let i = 0; i < spacing.length; i++) {
			for (let p of paddings) {
				super.extendProps(css, super.getProps(p[Object.keys(p)[0]], [{[Object.keys(p)[0] + '-' + (i)]: spacing[i]}]));
			}
		}
		let margins = [
			{[theme.layout.naming.marginAll] : 'margin'},
			{[theme.layout.naming.marginTop] : 'margin-top'},
			{[theme.layout.naming.marginVertical] : 'margin-top'},
			{[theme.layout.naming.marginRight] : 'margin-right'},
			{[theme.layout.naming.marginSides] : 'margin-right'},
			{[theme.layout.naming.marginBottom] : 'margin-bottom'},
			{[theme.layout.naming.marginVertical] : 'margin-bottom'},
			{[theme.layout.naming.marginLeft] : 'margin-left'},
			{[theme.layout.naming.marginSides] : 'margin-left'}
		];
		for (let i = 0; i < spacing.length; i++) {
			for (let m of margins) {
				super.extendProps(css, super.getProps(m[Object.keys(m)[0]], [{[Object.keys(m)[0] + '-' + (i)]: spacing[i]}]));
			}
		}
		super.extendProps(css, super.getProps('margin-right', [{[theme.layout.naming.marginCenter]: 'auto'}]));
		super.extendProps(css, super.getProps('margin-left', [{[theme.layout.naming.marginCenter]: 'auto'}]));

		return css;
	}
}

module.exports = Spacing;