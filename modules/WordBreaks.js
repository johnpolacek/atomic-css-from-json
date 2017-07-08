#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class WordBreaks extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const colors = this.props;

		let css = {};

		if (theme.typography.naming.wordbreaks.normal) {
			css['.' + theme.typography.naming.wordbreaks.normal] = { 'word-wrap':'normal' };
		}
		if (theme.typography.naming.wordbreaks.breakWord) {
			css['.' + theme.typography.naming.wordbreaks.breakWord] = { 'word-wrap':'break-word' };
		}
		if (theme.typography.naming.wordbreaks.wrap) {
			css['.' + theme.typography.naming.wordbreaks.wrap] = { 'word-wrap':'break-all' };
		}
		if (theme.typography.naming.wordbreaks.nowrap) {
			css['.' + theme.typography.naming.wordbreaks.nowrap] = { 'word-wrap':'keep-all' };
		}

		return css;
	}
}

module.exports = WordBreaks;