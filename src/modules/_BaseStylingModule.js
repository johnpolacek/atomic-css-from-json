#!/usr/bin/env node

'use strict';

class StylingModule {
	constructor(theme, props) {
		this.theme = theme;
		this.props = props;
	}

	generate() {
		throw Error('generate() must be defined.')
	}

	extendProps(css, props) {
		Object.keys(props).forEach((key, index) => {
			let prop = props[key];
			if (!css[key]) {
				css[key] = props[key];
			} else if (typeof prop[Object.keys(prop)[0]] == 'string') {
				Object.assign(css[key],props[key]);
			} else {
				Object.keys(prop).forEach((propKey, index) => {
					if (!css[key][propKey]) {
						css[key][propKey] = props[key][propKey];
					} else {
						Object.assign(css[key][propKey],props[key][propKey]);
					}
				})
			}
		});
	}

	getProps(prop, declarations) {
		let css = {};
		for (let declaration of declarations) {
			let className = Object.keys(declaration)[0];
			let value = declaration[className];
			if (className != 'undefined') {
				css['.' + className] = {[prop] : value};
			}
		}
		if (this.theme.media.queries && this.theme.media.queries.length) {
			if (!this.theme.media.restrictTo || this.theme.media.restrictTo.indexOf(this.constructor.name) != -1) {
				Object.assign(css, this.applyMediaQueries(this.theme.media.queries, this.theme.media.isPrefix, prop, declarations));
			}
		}
		return css;
	}

	getDeclarationsOfValue(props, value) {
		return props.map((prop) => {
			return {[prop]: value}
		});
	}

	applyMediaQueries(mediaQueries, isPrefix, prop, declarations) {
		let css = {};
		for (let mq of mediaQueries) {
			for (let declaration of declarations) {
				Object.assign(css, this.applyMediaQueryProp(prop, declaration, mq, isPrefix));
			}	
		}
		return css;
	}

	applyMediaQueryProp(prop, declaration, mq, isPrefix) {
		let css = {};
		const mqLabel = Object.keys(mq)[0];
		const className = Object.keys(declaration)[0];
		const value = declaration[className];
		if (className != 'undefined') {
			css['.' + (isPrefix ? mqLabel+'-' : '') + className + (isPrefix ? '' : '-'+mqLabel)] = {[mq[mqLabel]] : {[prop] : value}};
		}
		return css;
	}
}

module.exports = StylingModule;