#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class Rotation extends BaseStylingModule {
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
		
		for (let i = 0; i < layout.rotations.length; i++) {
			declarations.push({[theme.layout.naming.rotate + layout.rotations[i]]: 'rotate('+layout.rotations[i]+'deg)'});
		}
		super.extendProps(css, super.getProps('transform', declarations));

		return css;
	}
}

module.exports = Rotation;