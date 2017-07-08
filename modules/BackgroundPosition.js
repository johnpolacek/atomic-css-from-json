#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class BackgroundPosition extends BaseStylingModule {
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
		let declarations = [
			{[backgroundPositionPrefix + '-center']: 'center center'},
			{[backgroundPositionPrefix + '-top']: 'top center'},
			{[backgroundPositionPrefix + '-right']: 'center right'},
			{[backgroundPositionPrefix + '-bottom']: 'bottom center'},
			{[backgroundPositionPrefix + '-left']: 'center left'}
		];
		super.extendProps(css, super.getProps('background-position', declarations));
		super.extendProps(css, super.getProps('background-repeat', super.getDeclarationsOfValue(declarations.map((declaration) => { return Object.keys(declaration)[0] }), 'no-repeat')));

		return css;
	}
}

module.exports = BackgroundPosition;