#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class FlexBox extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		const layout = this.props;

		let css = {};
		
		super.extendProps(css, super.getProps('flex', [{[theme.layout.naming.flexNone || 'flex-none']: 'none'}]));
		super.extendProps(css, super.getProps('display', [{[theme.layout.naming.flex || 'flex']: 'flex'}]));
		super.extendProps(css, super.getProps('display', [{[theme.layout.naming.flexInline]: 'inline-flex'}]));
		super.extendProps(css, super.getProps('flex-wrap', [{[theme.layout.naming.flexWrap || 'flex-wrap']: 'wrap'}]));
		super.extendProps(css, super.getProps('flex-wrap', [{[theme.layout.naming.flexWrapReverse]: 'wrap-reverse'}]));

		let flexDirections = [
			{[theme.layout.naming.flexColumn || 'flex-column']: 'column'},
			{[theme.layout.naming.flexRow]: 'row'},
			{[theme.layout.naming.flexColumnReverse]: 'column-reverse'},
			{[theme.layout.naming.flexRowReverse]: 'row-reverse'}
		];
		super.extendProps(css, super.getProps('flex-direction', flexDirections));
		
		let alignItems = [
			{[theme.layout.naming.flexAlignItemsStart || 'items-start']: 'flex-start'},
			{[theme.layout.naming.flexAlignItemsEnd || 'items-end']: 'flex-end'},
			{[theme.layout.naming.flexAlignItemsCenter || 'items-center']: 'center'},
			{[theme.layout.naming.flexAlignItemsBaseline || 'items-baseline']: 'baseline'},
			{[theme.layout.naming.flexAlignItemsStretch || 'items-stretch']: 'stretch'}
		];
		super.extendProps(css, super.getProps('flex-align', alignItems));

		let alignStart = [
			{[theme.layout.naming.flexAlignStart || 'self-start']: 'self-start'},
			{[theme.layout.naming.flexAlignEnd || 'self-end']: 'self-end'},
			{[theme.layout.naming.flexAlignCenter || 'self-center']: 'center'},
			{[theme.layout.naming.flexAlignBaseline || 'self-baseline']: 'baseline'},
			{[theme.layout.naming.flexAlignStretch || 'self-stretch']: 'stretch'}
		];
		super.extendProps(css, super.getProps('align-start', alignStart));
		
		let justifyContent = [
			{[theme.layout.naming.flexJustifyStart || 'justify-start']: 'flex-start'},
			{[theme.layout.naming.flexJustifyEnd || 'justify-end']: 'flex-end'},
			{[theme.layout.naming.flexJustifyCenter || 'justify-center']: 'center'},
			{[theme.layout.naming.flexJustifyBetween || 'justify-between']: 'space-between'},
			{[theme.layout.naming.flexJustifyAround || 'justify-around']: 'space-around'}
		];
		super.extendProps(css, super.getProps('justify-content', justifyContent));

		let alignContent = [
			{[theme.layout.naming.flexAlignContentStart || 'content-start']: 'flex-start'},
			{[theme.layout.naming.flexAlignContentEnd || 'content-end']: 'flex-end'},
			{[theme.layout.naming.flexAlignContentCenter || 'content-center']: 'center'},
			{[theme.layout.naming.flexAlignContentBetween || 'content-between']: 'space-between'},
			{[theme.layout.naming.flexAlignContentAround || 'content-around']: 'space-around'},
			{[theme.layout.naming.flexAlignContentStretch || 'content-stretch']: 'stretch'},
		];
		super.extendProps(css, super.getProps('align-content', alignContent));
		
		if (layout.flexOrder) {
			for (let i=0; i<parseInt(layout.flexOrder,10); i++) {
				super.extendProps(css, super.getProps('order', [{[(theme.layout.naming.flexOrder || 'order-') + i]: i}]));
			}
			super.extendProps(css, super.getProps('order', [{[(theme.layout.naming.flexOrder || 'order-') + 'last']: 99999}]));
		}		

		return css;
	}
}

module.exports = FlexBox;