#!/usr/bin/env node

'use strict';

let BaseStylingModule = require('./_BaseStylingModule');

class Display extends BaseStylingModule {
	constructor(theme, props) {
		super();
		this.theme = theme;
		this.props = props;
	}

	generate() {

		const theme = this.theme;
		let css = {};
		
		let displays = [];
		
		if (theme.layout.naming.displayNone) {
			displays.push({[theme.layout.naming.displayNone]: 'none'});
		}	
		if (theme.layout.naming.displayBlock) {
			displays.push({[theme.layout.naming.displayBlock]: 'block'});
		}	
		if (theme.layout.naming.displayInline) {
			displays.push({[theme.layout.naming.displayInline]: 'inline'});
		}	
		if (theme.layout.naming.displayInlineBlock) {
			displays.push({[theme.layout.naming.displayInlineBlock]: 'inline-block'});
		}	
		if (theme.layout.naming.displayInlineTable) {
			displays.push({[theme.layout.naming.displayInlineTable]: 'inline-table'});
		}	
		if (theme.layout.naming.displayTable) {
			displays.push({[theme.layout.naming.displayTable]: 'table'});
		}	
		if (theme.layout.naming.displayTableCell) {
			displays.push({[theme.layout.naming.displayTableCell]: 'table-cell'});
		}	
		if (theme.layout.naming.displayTableRow) {
			displays.push({[theme.layout.naming.displayTableRow]: 'table-row'});
		}	
		if (theme.layout.naming.displayTableRowGroup) {
			displays.push({[theme.layout.naming.displayTableRowGroup]: 'table-row-group'});
		}	
		if (theme.layout.naming.displayTableColumn) {
			displays.push({[theme.layout.naming.displayTableColumn]: 'table-column'});
		}	
		if (theme.layout.naming.displayTableColumnGroup) {
			displays.push({[theme.layout.naming.displayTableColumnGroup]: 'table-column-group'});
		}	
		
		for (let display of displays) {
			super.extendProps(css, super.getProps('display', [display]));
		}

		return css;
	}
}

module.exports = Display;