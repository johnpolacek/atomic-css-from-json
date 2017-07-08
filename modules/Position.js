#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class Position extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const layout = this.props;
		
		let css = {};
		for (let pos of ['static','relative','absolute','fixed']) {
			css['.'+pos] = { 'position': pos };
		}
		if (layout.positions) {
			for (let position of layout.positions) {
				super.extendProps(css, super.getProps('top', [{[(theme.layout.naming.positionTop || 'top-') + Object.keys(position)[0]] : position[Object.keys(position)[0]]}]));
				super.extendProps(css, super.getProps('right', [{[(theme.layout.naming.positionRight || 'right-') + Object.keys(position)[0]] : position[Object.keys(position)[0]]}]));
				super.extendProps(css, super.getProps('bottom', [{[(theme.layout.naming.positionBottom || 'bottom-') + Object.keys(position)[0]] : position[Object.keys(position)[0]]}]));
				super.extendProps(css, super.getProps('left', [{[(theme.layout.naming.positionLeft || 'left-') + Object.keys(position)[0]] : position[Object.keys(position)[0]]}]));
			}
		}
		if (theme.layout.naming.positionAll) {
			super.extendProps(css, super.getProps('top', [{[theme.layout.naming.positionAll] : "0" }]));
		}

		return css;
	}
}

module.exports = Position;