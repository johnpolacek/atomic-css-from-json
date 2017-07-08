#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class Float extends BaseStylingModule {
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
		let floats = [];
		
		if (theme.layout.naming.floatLeft) {
			let floatLefts = typeof theme.layout.naming.floatLeft == 'string' ? [theme.layout.naming.floatLeft] : theme.layout.naming.floatLeft;
			for (let fl of floatLefts) {
				floats.push({[fl]: 'left'});
			}
		}
		if (theme.layout.naming.floatRight) {
			let floatRights = typeof theme.layout.naming.floatRight == 'string' ? [theme.layout.naming.floatRight] : theme.layout.naming.floatRight;
			for (let fr of floatRights) {
				floats.push({[fr]: 'right'});
			}
		}
		if (theme.layout.naming.floatNone) {
			floats.push({[theme.layout.naming.floatNone]: 'none'});
		}
		
		super.extendProps(css, super.getProps('float', floats));

		return css;
	}
}

module.exports = Float;