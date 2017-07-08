#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class NegativeMargins extends BaseStylingModule {
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

		let negativeMargins = [];

			if (theme.layout.naming.negativeMarginAll) {
				negativeMargins.push({[theme.layout.naming.negativeMarginAll] : 'margin'});
			}
			if (theme.layout.naming.negativeMarginTop) {
				negativeMargins.push({[theme.layout.naming.negativeMarginTop] : 'margin-top'});
			}
			if (theme.layout.naming.negativeMarginRight) {
				negativeMargins.push({[theme.layout.naming.negativeMarginRight] : 'margin-right'});
			}
			if (theme.layout.naming.negativeMarginBottom) {
				negativeMargins.push({[theme.layout.naming.negativeMarginBottom] : 'margin-bottom'});
			}
			if (theme.layout.naming.negativeMarginLeft) {
				negativeMargins.push({[theme.layout.naming.negativeMarginLeft] : 'margin-left'});
			}
			if (theme.layout.naming.negativeMarginSides) {
				negativeMargins.push({[theme.layout.naming.negativeMarginSides] : 'margin-left'});
				negativeMargins.push({[theme.layout.naming.negativeMarginSides] : 'margin-rightt'});
			}
		
		for (let i = 0; i < layout.spacing.length; i++) {
			for (let nm of negativeMargins) {
				super.extendProps(css, super.getProps(nm[Object.keys(nm)[0]], [{[Object.keys(nm)[0] + '-' + (i)]: ('-'+layout.spacing[i])}]));
			}
		}

		return css;
	}
}

module.exports = NegativeMargins;