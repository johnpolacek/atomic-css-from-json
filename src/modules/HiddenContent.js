#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class HiddenContent extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const layout = this.props;

		let css = {};
		super.extendProps(css, super.getProps('position', [{[theme.layout.naming.hiddenContent]:'fixed !important'}]));
		super.extendProps(css, super.getProps('clip', [{[theme.layout.naming.hiddenContent]:'clip: rect(1px, 1px, 1px, 1px)'}]));
		super.extendProps(css, super.getProps('height', [{[theme.layout.naming.hiddenContent]:'1px'}]));
		super.extendProps(css, super.getProps('width', [{[theme.layout.naming.hiddenContent]:'1px'}]));
		super.extendProps(css, super.getProps('overflow', [{[theme.layout.naming.hiddenContent]:'hidden'}]));

		return css;
	}
}

module.exports = HiddenContent;