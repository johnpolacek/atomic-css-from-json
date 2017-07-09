#!/usr/bin/env node

'use strict';

module.exports = {
	"color":{
		"modules":[],
		"naming":{},
		"colors":[]
	},
	"typography":{
		"modules":[
			"Font",
			"LetterSpacing",
			"LineHeight",
			"TypeScale",
			"TextAlign",
			"Truncate",
			"WhiteSpace",
			"WordBreaks"
		],
		"naming":{
			"bold":"bold",
			"normal":"regular",
			"italic":"italic",
			"inherit":"font-family-inherit",
			"scale":["h1","h2","h3","h4","h5","h6","font-size-inherit"],
			"height":"line-height-",
			"spacing":["caps-letter-spacing"],
			"align":{"left":"left-align","center":"center","right":"right-align","justify":"justify"},
			"decoration":{"underline":"underline","none":"text-decoration-none"},
			"transform":{"uppercase":"caps"},
			"wordbreaks":{
				"breakWord":"break-word"
			},
			"whitespace":{"nowrap":"nowrap"}
		},
		"styles":{
			"fonts":[],
			"scale":["6rem","5rem","3rem","2.25rem","1.5rem","1.25rem","1rem",".875rem",".75rem","inherit"],
			"weights":[],
			"heights":["1","1.125","1.25","1.5"],
			"headline":"6rem",
			"subheadline":"5rem",
			"spacing":[".2em"]
		}
	},
	"layout":{
		"modules":[
			"BorderRadius",
			"Clearfix",
			"Display",
			"FlexBox",
			"Float",
			"HiddenContent",
			"ListReset",
			"MaxWidth",
			"NegativeMargins",
			"Overflow",
			"Position",
			"Spacing",
			"VerticalAlign",
			"WhiteSpace",
			"WidthPercentageScale",
			"ZIndex"
		],
		"naming":{
			"backgroundPosition":"bg",
			"borderRadius":"rounded",
			"borderRadiusNone":"not-rounded",
			"borderAll":"border",
			"borderBottom":"border-bottom",
			"borderLeft":"border-left",
			"borderNone":"border-none",
			"borderRight":"border-right",
			"borderTop":"border-top",
			"displayNone":"display-none",
			"displayBlock":"block",
			"displayInline":"inline",
			"displayInlineBlock":"inline-block",
			"displayInlineTable":"dit",
			"displayTable":"table",
			"displayTableCell":"table-cell",
			"floatLeft":["left","col"],
			"floatRight":["right","col-right"],
			"hiddenContent":"hide",
			"maxWidth":"max-width-",
			"maxWidthFit":"fit",
			"marginAll":"m",
			"marginTop":"mt",
			"marginRight":"mr",
			"marginBottom":"mb",
			"marginLeft":"ml",
			"marginVertical":"my",
			"marginSides":"mx",
			"marginCenter":"mx-auto",
			"negativeMarginSides":"mxn",
			"paddingAll":"p",
			"paddingTop":"pt",
			"paddingRight":"pr",
			"paddingBottom":"pb",
			"paddingLeft":"pl",
			"paddingVertical":"py",
			"paddingSides":"px",
			"screenHeight":"vh-",
			"verticalAlignBaseline":"v-base",
			"verticalAlignTop":"v-top",
			"verticalAlignMiddle":"v-mid",
			"verticalAlignBottom":"v-btm",
			"widthPercentageScale":"col-",
			"zIndex":"z"
		},
		"styles":{
			"widthPercentageScale":"12",
			"maxWidth":[
				"24rem",
				"32rem",
				"48rem",
				"64rem"
			],
			"borderRadius":[
				"3px"
			],
			"spacing":[
				".5rem",
				"1rem",
				"2rem",
				"4rem"
			],
			"positions":[
				{"0":"0"}
			],
			"zIndex":[1,2,3,4],
			"flexOrder":"4"
		}
	},
	"media":{
		"queries":[
			{"sm":"@media screen and (min-width: 40em)"},
			{"md":"@media screen and (min-width: 52em)"},
			{"lg":"@media screen and (min-width: 64em)"}
		],
		"isPrefix":false,
		"restrictTo":[
			"FlexBox",
			"WidthPercentageScale"
		]
	},
	"libs":[
		"border-box.css"
	]
};