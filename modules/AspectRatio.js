#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class AspectRatio extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const layout = this.props;
		
		let css = {};
		css['.'+theme.layout.naming.aspectRatio] = {'height':'0','position':'relative'}
		css['.'+theme.layout.naming.aspectRatio+'--object'] = {
		    'position': 'absolute',
		    'top': '0',
		    'right': '0',
		    'bottom': '0',
		    'left': '0',
		    'width': '100%',
		    'height': '100%',
		    'z-index': '100'
		}

		if (layout.aspectRatios && layout.aspectRatios.length) {
			for (let aspect of layout.aspectRatios) {
				aspect = aspect.split('x');
				css['.'+theme.layout.naming.aspectRatio+'--'+aspect[0]+'x'+aspect[1]] = {'padding-bottom': (parseInt(aspect[1],10)/parseInt(aspect[0],10) * 100).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0] + '%'}
				css['.'+theme.layout.naming.aspectRatio+'--'+aspect[1]+'x'+aspect[0]] = {'padding-bottom': (parseInt(aspect[0],10)/parseInt(aspect[1],10) * 100).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0] + '%'}
			}
		}

		return css;
	}
}

module.exports = AspectRatio;