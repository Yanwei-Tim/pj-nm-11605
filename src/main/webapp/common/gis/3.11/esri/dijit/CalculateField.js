// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.11/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/templates/CalculateField.html":'\x3cdiv class\x3d"esriCalcField" style\x3d"width:100%;height:100%"\x3e\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"width:99%;margin-top:0.5em; margin-bottom: 0.5em;"\x3e\n    \x3cdiv data-dojo-attach-point\x3d"_header" class\x3d"esriCalcTitleLabel"\x3e\n       \x3cdiv class\x3d"esriAlignLeading"\x3e${i18n.expBuilderTitle}\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid;height:4%;max-height:4em;width:100%;"\x3e\x3c/div\x3e\n  \x3c/div\x3e  \n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_expressionForm" style\x3d"height:100%;width:99%;"\x3e\n    \x3cdiv class\x3d"esriFloatLeading" data-dojo-attach-point\x3d"_selCalcFieldDiv" style\x3d"width:100%;padding-bottom:0.5em;"\x3e\n      \x3cdiv\x3e\x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.selectCalField}\x3c/label\x3e\x3c/div\x3e\n      \x3cselect class\x3d"esriLeadingMargin1" style\x3d"width:50%;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_selCalcField"\x3e\x3c/select\x3e\n    \x3c/div\x3e\n    \x3cdiv style\x3d"width:100%;padding-bottom:0.5em;" class\x3d"esriFloatLeading"\x3e\n      \x3clabel class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_calcFieldLabel"\x3e\x3c/label\x3e\n    \x3c/div\x3e\n    \x3cinput class\x3d"esriFloatLeading esriLeadingMargin1" style\x3d"width:95%;" data-dojo-type\x3d"dijit/form/SimpleTextarea" data-dojo-attach-point\x3d"_exprBox" data-dojo-props\x3d"rows:4 ,cols:2,required:true,intermediateChanges:true"\x3e\x3c/input\x3e  \n    \x3cdiv class\x3d"esriFloatLeading" style\x3d"width:100%;padding-bottom:0.5em;padding-top:0.75em;"\x3e\n      \x3cdiv class\x3d"esriFloatLeading esriLeadingMargin1" style\x3d"width:80%;padding-bottom:0.5em;" data-dojo-attach-point\x3d"_operatorCtr"\x3e\x3c/div\x3e\n      \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton esriFloatTrailing esriTrailingMargin1" style\x3d"width:10%;" data-dojo-props\x3d"label:\'${i18n.remove}\',iconClass:\'esriCalcFieldClearIcon\',showLabel: false, disabled:true" data-dojo-attach-event\x3d"onClick:_handleRemoveBtnClick" data-dojo-attach-point\x3d"_removeBtn"\x3e\x3c/div\x3e     \n    \x3c/div\x3e    \n    \x3cdiv style\x3d"clear:both;padding-top:0.5em;padding-bottom:0.5em;width:100%;height:65%;"\x3e\n      \x3cdiv class\x3d"esriFloatLeading"  style\x3d"width:50%;height:100%"\x3e\n        \x3cdiv style\x3d"padding-bottom:0.5em;"\x3e\x3clabel class\x3d"esriLeadingMargin1 esriCalcTitleLabel"\x3e${i18n.fields}\x3c/label\x3e\x3c/div\x3e\n        \x3cdiv style\x3d"width:100%;padding-bottom:0.5em;"\x3e\n          \x3clabel class\x3d"esriLeadingMargin1 esriSelectLabel esriTrailingMargin05"\x3e\n            \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"_strRadioBtn" data-dojo-props\x3d"\'class\':\'esriSelectLabel\'" name\x3d"functionType" value\x3d"StrType"/\x3e\n            ${i18n.stringLabel}\n          \x3c/label\x3e\n          \x3clabel class\x3d"esriSelectLabel esriTrailingMargin05"\x3e\n            \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"_numRadioBtn" data-dojo-props\x3d"\'class\':\'esriSelectLabel\'" name\x3d"functionType" value\x3d"NumType"/\x3e \n            ${i18n.numeric}\n          \x3c/label\x3e        \n          \x3clabel class\x3d"esriSelectLabel"\x3e\n            \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"_dateRadioBtn"  data-dojo-props\x3d"\'class\':\'esriSelectLabel\'" name\x3d"functionType" value\x3d"DateType"/\x3e \n            ${i18n.dateLabel}\n          \x3c/label\x3e        \n        \x3c/div\x3e        \n        \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_attributeListCtr" style\x3d"width:70%;height:85%;overflow-y:auto;"\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e    \n      \x3cdiv class\x3d"esriFloatTrailing" style\x3d"width:50%;height:100%"\x3e\n        \x3cdiv style\x3d"padding-bottom:2em;"\x3e\n          \x3clabel class\x3d"esriCalcTitleLabel"\x3e${i18n.functions}\x3c/label\x3e\n        \x3c/div\x3e\n        \x3cdiv data-dojo-attach-point\x3d"_helpersListCtr"  style\x3d"width:90%;height:85%;overflow-y:auto;"\x3e\n        \x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"esriLeadingMargin05 esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"clear:both;display:none;height:3em;overflow-y:auto;padding:0.5em;"\x3e\n      \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing closeIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\n      \x3c/a\x3e\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode" style\x3d"width:100%;height:100%;"\x3e\x3c/span\x3e\n    \x3c/div\x3e\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\n    \x3cdiv  class\x3d"esriFloatTrailing esriTrailingMargin2" data-dojo-attach-point\x3d"_buttonCtr" style\x3d"padding:1em 0"\x3e\n      \x3cdiv data-dojo-type\x3d"dijit/form/Button"  class\x3d"${addButtonClass}" data-dojo-attach-point\x3d"_addBtn" data-dojo-attach-event\x3d"onClick:_handleAddButtonClick"\x3e\n        ${i18n.calculate}\n      \x3c/div\x3e\n       \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriLeadingMargin05 ${closeButtonClass}" data-dojo-attach-point\x3d"_closeBtn" data-dojo-attach-event\x3d"onClick:_handleCloseButtonClick"\x3e\n        ${i18n.close}\n      \x3c/div\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e\n\x3c/div\x3e  \n'}});
define("esri/dijit/CalculateField","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/_base/event dojo/Evented dojo/fx/easing dojo/store/Memory dojo/mouse dojo/on dojo/_base/window dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/MultiSelect dijit/form/TextBox dijit/form/SimpleTextarea dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/ComboBox dijit/Dialog dijit/Tooltip dgrid/OnDemandList dgrid/Selection dgrid/Keyboard dgrid/extensions/DijitRegistry dgrid/util/mouse put-selector/put ../kernel ../lang ../request ./SingleFilter dojo/i18n!../nls/jsapi dojo/text!./templates/CalculateField.html".split(" "),
function(k,r,d,f,S,s,t,D,T,h,l,p,e,U,u,v,E,w,q,x,y,z,F,G,H,I,J,V,K,W,X,Y,Z,$,aa,ba,ca,da,ea,A,L,M,N,O,m,fa,n,P,Q,ga,B,R){var C=r([L,N,M,O]);k=r([F,G,H,I,J,E],{declaredClass:"esri.dijit.CalculateField",templateString:R,basePath:k.toUrl("."),widgetsInTemplate:!0,showSelectField:!1,showHeader:!0,closeOnAdd:!0,addButtonClass:"",closeButtonClass:"",_showMsgTimerInterval:3E3,constructor:function(a){a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments);
this.i18n={};d.mixin(this.i18n,B.common);d.mixin(this.i18n,B.calculateFields)},postCreate:function(){this.inherited(arguments);this._buildUI();this._loadEvents();this.validate()},_buildUI:function(){var a=[],b;l.set(this._header,"display",this.showHeader?"block":"none");l.set(this._selCalcFieldDiv,"display",this.showSelectField?"block":"none");this.field&&(b=f.filter(this.layer.fields,function(a){return a.name===this.field},this),this._calcField=b=b[0],p.set(this._calcFieldLabel,"innerHTML",h.substitute(this.i18n.exprLabel,
{fieldName:b.name})));if(!this.helperMethods||this.helperMethods&&0===this.helperMethods.length)b=[{type:"NumType",label:"ABS(\x3ci\x3enumber\x3c/i\x3e):Returns the absolute (positive) value of \x3ci\x3enumber\x3c/i\x3e.",name:"ABS()"},{type:"NumType",label:"CAST(\x3ci\x3enumber\x3c/i\x3e AS FLOAT|INT):Converts a \x3ci\x3enumber\x3c/i\x3e to a different type. FLOAT converts \x3ci\x3enumber\x3c/i\x3e to a double and INT converts to an integer.",name:"CAST()"},{type:"NumType",label:"CEILING(\x3ci\x3enumber\x3c/i\x3e):Returns the smallest integer greater than or equal to  \x3ci\x3enumber\x3c/i\x3e.",
name:"CEILING()"},{type:"NumType",label:"COS(\x3ci\x3enumber\x3c/i\x3e):Returns the trigonometric cosine of \x3ci\x3enumber\x3c/i\x3e. \x3ci\x3enumber\x3c/i\x3e is assumed to be an angle in radians.",name:"COS()"},{type:"NumType",label:"FLOOR(\x3ci\x3enumber\x3c/i\x3e):Returns the largest integer that is less than or equal to \x3ci\x3enumber\x3c/i\x3e.",name:"FLOOR()"},{type:"NumType",label:"LOG(\x3ci\x3enumber\x3c/i\x3e):The natural logarithm of \x3ci\x3enumber\x3c/i\x3e.",name:"LOG()"},{type:"NumType",
label:"LOG10(\x3ci\x3enumber\x3c/i\x3e):The base-10 logarithm of \x3ci\x3enumber\x3c/i\x3e.",name:"LOG10()"},{type:"NumType",label:"MOD(\x3ci\x3enumber\x3c/i\x3e, \x3ci\x3en\x3c/i\x3e):Returns the remainder after the division of n is performed on \x3ci\x3enumber\x3c/i\x3e. Both \x3ci\x3en\x3c/i\x3e and \x3ci\x3enumber\x3c/i\x3e must be integer.",name:"MOD(,)"},{type:"NumType",label:"POWER(\x3ci\x3enumber\x3c/i\x3e, \x3ci\x3ey\x3c/i\x3e):Returns the value of \x3ci\x3enumber\x3c/i\x3e raised to the specified power \x3ci\x3ey\x3c/i\x3e.",
name:"POWER(,)"},{type:"NumType",label:"ROUND(\x3ci\x3enumber\x3c/i\x3e, \x3ci\x3elength\x3c/i\x3e):Rounds \x3ci\x3enumber\x3c/i\x3e to the specified \x3ci\x3elength\x3c/i\x3e.",name:"ROUND(,)"},{type:"NumType",label:"SIN(\x3ci\x3enumber\x3c/i\x3e):Returns the trigonometric sine of \x3ci\x3enumber\x3c/i\x3e. \x3ci\x3enumber\x3c/i\x3e is assumed to be an angle in radians.",name:"SIN()"},{type:"NumType",label:"TAN(\x3ci\x3enumber\x3c/i\x3e):Returns the tangent of \x3ci\x3enumber\x3c/i\x3e. \x3ci\x3enumber\x3c/i\x3e is assumed to be an angle in radians.",
name:"TAN(,)"},{type:"NumType",label:"TRUNCATE(\x3ci\x3enumber\x3c/i\x3e, \x3ci\x3edecimal_place\x3c/i\x3e):Truncates \x3ci\x3enumber\x3c/i\x3e at the specified \x3ci\x3edecimal_place\x3c/i\x3e. A positive \x3ci\x3edecimal_place\x3c/i\x3e truncates while a negative decimal_place rounds.",name:"TRUNCATE(,)"},{type:"NumType",label:"NULLIF(\x3ci\x3enumber\x3c/i\x3e,\x3ci\x3evalue\x3c/i\x3e):Returns null if \x3ci\x3enumber\x3c/i\x3e equals \x3ci\x3evalue\x3c/i\x3e. Commonly used to prevent divide-by-zero errors by setting \x3ci\x3evalue\x3c/i\x3e to 0.",
name:"NULLIF(,)"},{type:"StrType",label:"CHAR_LENGTH(\x3ci\x3estring\x3c/i\x3e):Returns the number of characters in \x3ci\x3estring\x3c/i\x3e. The result is an integer.",name:"CHAR_LENGTH()"},{type:"StrType",label:"CONCAT(\x3ci\x3estring1\x3c/i\x3e, \x3ci\x3estring2\x3c/i\x3e):Concatenates two strings.",name:"CONCAT(,)"},{type:"StrType",label:"POSITION(\x3ci\x3esubstring\x3c/i\x3e, \x3ci\x3estring\x3c/i\x3e):Returns the position of the first occurrence of substring in \x3ci\x3estring\x3c/i\x3e. If substring is not found, the result is 0.",
name:"POSITION(,)"},{type:"StrType",label:"LOWER(\x3ci\x3estring\x3c/i\x3e):Returns a string where all characters in \x3ci\x3estring\x3c/i\x3e are converted to lowercase.",name:"LOWER()"},{type:"StrType",label:"SUBSTRING(\x3ci\x3estring\x3c/i\x3e, \x3ci\x3estart\x3c/i\x3e, \x3ci\x3elength\x3c/i\x3e):Returns a part of \x3ci\x3estring\x3c/i\x3e. \x3ci\x3estart\x3c/i\x3e is an integer index specifying where the returned characters start. \x3ci\x3elength\x3c/i\x3e is the number of characters to be returned.",
name:"SUBSTRING(,,)"},{type:"StrType",label:"TRIM(BOTH|LEADING|TRAILING] \u2018 \u2018 FROM expression):Returns a string where all leading or trailing spaces are removed from \x3ci\x3estring\x3c/i\x3e.",name:"TRIM()"},{type:"StrType",label:"UPPER(\x3ci\x3estring\x3c/i\x3e):Returns a string where all characters in \x3ci\x3estring\x3c/i\x3e are converted to uppercase.",name:"UPPER()"},{type:"DateType",label:"CURRENT_DATE():Returns the current date.",name:"CURRENT_DATE()"},{type:"DateType",label:"CURRENT_TIME():Returns the current time (hours, minutes, seconds).",
name:"CURRENT_TIME()"},{type:"DateType",label:"CURRENT_TIMESTAMP():Returns the current time (hours, minutes, seconds, milliseconds).",name:"CURRENT_TIMESTAMP()"}],f.forEach(b,function(a){a.label="\x3cb\x3e"+a.label.substring(0,a.label.lastIndexOf(":")+1)+"\x3c/b\x3e\x3cbr/\x3e "+a.label.substring(a.label.lastIndexOf(":")+1)},this),this.set("helperMethods",b);(!this.operators||this.operators&&0===this.operators.length)&&this.set("operators","+-/*()".split(""));this._operatorBtns=[];f.forEach(this.operators,
function(a){this._operatorBtns.push(new K({value:a,label:a,onClick:d.hitch(this,this._updateExpression,{value:a,type:"operator"})},e.create("div",null,this._operatorCtr)))},this);this.layer&&(this.layer.fields&&0<this.layer.fields.length)&&(a=this._createIds(this.layer.fields),b=f.map(this.layer.fields,function(a){return{label:a.name,value:a.name}}),this._selCalcField.addOption(b),this._selCalcField.set("value",this.field));this.fieldsStore=new q({data:a});this.attributeList=new C({renderRow:d.hitch(this,
this._renderAttributesRow),selectionMode:"single",store:this.fieldsStore},this._attributeListCtr);a=this._createIds(this.get("helperMethods"));this.operatorStore=new q({data:a});this.helpersList=new C({renderRow:d.hitch(this,this._renderOperatorRow),selectionMode:"single",store:this.operatorStore},this._helpersListCtr)},_loadEvents:function(){this.watch("fields",d.hitch(this,this._handleFieldsChange));this.watch("field",d.hitch(this,this._handleFieldChange));if(this.showSelectField)this._selCalcField.on("change",
d.hitch(this,this._handleSelcCalFieldChange));this._expressionForm.watch("value",d.hitch(this,this._handleHelperTypeChange));this._expressionForm.on("focus",d.hitch(this,this._setfocus));this._exprBox.watch("value",d.hitch(this,this._handleExpChange));this.attributeList.on("dgrid-select",d.hitch(this,function(a){this._updateExpression({value:a.rows[0].data,type:"field"})}));this.helpersList.on("dgrid-select",d.hitch(this,function(a){this._updateExpression({value:a.rows[0].data,type:"helper"})}));
this.attributeList.on(m.enterRow,d.hitch(this,function(a){a=this.attributeList.row(a);var b,c;b=a.data.alias||a.data.name;c=this._getTypeLabel(a.data.type);this._showTooltip(a.element,"\x3cb\x3e"+b+"\x3c/b\x3e: "+c)}));this.attributeList.on(m.leaveRow,d.hitch(this,function(a){a=this.attributeList.row(a);this._hideTooltip(a.element)}));this.helpersList.on(m.enterRow,d.hitch(this,function(a){a=this.helpersList.row(a);this._showTooltip(a.element,a.data.label)}));this.helpersList.on(m.leaveRow,d.hitch(this,
function(a){a=this.helpersList.row(a);this._hideTooltip(a.element)}));this.attributeList.on("dgrid-refresh-complete",d.hitch(this,this._setfocus));this.helpersList.on("dgrid-refresh-complete",d.hitch(this,this._setfocus));this._exprBox.on("blur",d.hitch(this,function(){this._exprBox.textbox.setSelectionRange&&"number"==typeof this._exprBox.textbox.selectionStart?this._exprBox.set("cursorPosition",[this._exprBox.textbox.selectionStart,this._exprBox.textbox.selectionEnd]):this._exprBox.set("cursorPosition",
this._getCursorRange(this._exprBox.textbox))}));this._exprBox.on("focus",d.hitch(this,function(){var a=this._exprBox.get("cursorPosition");a&&(this._exprBox.textbox.setSelectionRange&&"number"==typeof this._exprBox.textbox.selectionStart?this._exprBox.textbox.setSelectionRange(a[1],a[1]):this._setCaretPosition(this._exprBox.textbox,a[1],a[1]))}));y(this._calcFieldLabel,x.enter,d.hitch(this,function(a){a="";a=this._getTypeLabel(this._calcField.type);this._showTooltip(this._calcFieldLabel,"\x3cb\x3e"+
this._calcField.alias+"\x3c/b\x3e: "+a)}));y(this._calcFieldLabel,x.leave,d.hitch(this,function(a){this._hideTooltip(this._calcFieldLabel)}))},startup:function(){this.inherited(arguments);this.attributeList.startup();this.helpersList.startup();this._setHelperType()},reset:function(){n.show(this.domNode);this._expressionForm.reset();this._handleCloseMsg();this._setHelperType()},_close:function(){this.emit("close",{});n.hide(this.domNode)},_createIds:function(a){var b=[];a&&0<a.length&&(b=f.map(a,function(a,
b){return d.mixin(a,{id:b})}));return b},_renderAttributesRow:function(a){var b=e.create("div",{"class":"esriCalExpRowOuter"}),c=e.create("div",{"class":"esriCalcExpLabelRow"},b);e.create("div",{"class":"esriCalcFieldTextTrimWithEllipses",innerHTML:a.name},c);return b},_renderOperatorRow:function(a){var b=e.create("div",{"class":"esriCalExpRowOuter"}),c=e.create("div",{"class":"esriCalcExpLabelRow"},b);e.create("div",{"class":"esriCalcFieldTextTrimWithEllipses",innerHTML:a.name},c);return b},_handleFieldsChange:function(a,
b,c){a=[];this.layer&&(this.layer.fields&&0<this.layer.fields.length)&&(0<this._selCalcField.getOptions().length&&this._selCalcField.removeOption(this._selCalcField.getOptions()),a=this._createIds(this.layer.fields),b=f.map(this.layer.fields,function(a){return{label:a.name,value:a.name}}),this._selCalcField.addOption(b),this._selCalcField.set("value",this.field));this.fieldsStore=new q({data:a});this.attributeList.set("store",this.fieldsStore)},_handleFieldChange:function(a,b,c){p.set(this._calcFieldLabel,
"innerHTML",h.substitute(this.i18n.exprLabel,{fieldName:c}));this._setHelperType();this._setfocus()},_setHelperType:function(){var a;this.field?(a=f.filter(this.layer.fields,function(a){return a.name===this.field},this),this._calcField=a=a[0],"esriFieldTypeDate"===a.type?this._dateRadioBtn.set("checked",!0):"esriFieldTypeString"===a.type?this._strRadioBtn.set("checked",!0):-1!==f.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)&&this._numRadioBtn.set("checked",
!0)):this._strRadioBtn.set("checked",!0)},_handleHelperTypeChange:function(a,b,c){this.helpersList.set("query",{type:c.functionType});"DateType"===c.functionType?this.attributeList.set("query",{type:"esriFieldTypeDate"}):"StrType"===c.functionType?this.attributeList.set("query",{type:"esriFieldTypeString"}):"NumType"===c.functionType&&this.attributeList.set("query",function(a){return-1!==f.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)});
this.helpersList.refresh();this.attributeList.refresh()},_handleSelcCalFieldChange:function(a){this.set("field",a)},_handleRemoveBtnClick:function(){this._exprBox.set("value","");this._setfocus()},_handleAddButtonClick:function(a){v.stop(a);var b={f:"json"},c;this._exprBox.get("value")?(this._handleCloseMsg(),b.calcExpression=s.toJson(this.get("expression")),b.sqlFormat="standard",this.layer.getDefinitionExpression&&this.layer.getDefinitionExpression()?b.where=this.layer.getDefinitionExpression():
P.isDefined(this.layer.definitionExpression)&&""!==this.layer.definitionExpression&&(b.where=this.layer.definitionExpression),n.id.getCredential(this.layer.url+"/calculate").then(d.hitch(this,function(a){b.token=a.token;c=Q({url:this.layer.url+"/calculate",content:b},{usePost:!0});this.emit("calculate-start",{calcPromise:c.promise});this._addBtn.set("disabled",!0);this._showLoading();c.then(d.hitch(this,function(a){this._addBtn.set("disabled",!1);this._hideLoading();var c={};d.mixin(c,{calcExpression:s.fromJson(b.calcExpression)[0].sqlExpression,
where:b.where,sqlFormat:b.sqlFormat},a);this.emit("calculate-success",c);this.layer.refresh();this._showMessages(h.substitute(this.i18n.successMsg,{count:a.updatedFeatureCount}),!0);this.closeOnAdd&&this._close()}),d.hitch(this,this._handleErrorResponse))}),d.hitch(this,this._handleErrorResponse))):this._addBtn.set("disabled",!0)},_handleErrorResponse:function(a){this._addBtn.set("disabled",!1);this._hideLoading();this.emit("calculate-error",a);this._showMessages(h.substitute(this.i18n.exprFailedMsg,
{expr:this._exprBox.get("value")})+"\x3cbr/\x3e"+a.details.toString())},_handleCloseButtonClick:function(a){v.stop(a);this._close()},_showTooltip:function(a,b){var c=e.create("label",{innerHTML:b,className:"esriSmallFont"});A.show(c.outerHTML,a,["below"])},_hideTooltip:function(a,b){A.hide(a)},_setfocus:function(){this._exprBox.focus()},_showMessages:function(a,b){p.set(this._bodyNode,"innerHTML",a);t.fadeIn({node:this._errorMessagePane,easing:w.quadIn,onEnd:d.hitch(this,function(){l.set(this._errorMessagePane,
{display:""})})}).play();b&&window.setTimeout(d.hitch(this,this._handleCloseMsg),this._showMsgTimerInterval)},_handleCloseMsg:function(a){a&&a.preventDefault();t.fadeOut({node:this._errorMessagePane,easing:w.quadOut,onEnd:d.hitch(this,function(){l.set(this._errorMessagePane,{display:"none"})})}).play()},validate:function(){var a=!0;this.layer?this.field?this.layer.supportsCalculate?!this.layer.userIsAdmin&&!this.layer.getEditCapabilities().canUpdate&&(h.substitute(this.i18n.lyrUpdateCapMsg,{layername:this.layer.name}),
a=!1):(h.substitute(this.i18n.lyrSupportCalMsg,{layername:this.layer.name}),a=!1):a=!1:a=!1;this._addBtn.set("disabled",!a);return a},_validateExpObj:function(a){var b=!0;a||(b=!1);b?this._handleCloseMsg():this._showMessages(void 0);return b},_updateExpression:function(a){var b=this._exprBox.get("cursorPosition"),c=this._exprBox.get("value"),d="",g=0,e;this._validateExpObj(a)&&(b||(b=[0,0]),"operator"===a.type?(e=" "+a.value+" ",g=e.length):"helper"===a.type?(e=a.value.name,g=-1!==a.value.name.indexOf(",")?
a.value.name.indexOf(","):a.value.name.length-1):"field"===a.type&&(e="esriFieldTypeDouble"===this._calcField.type&&-1!==f.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle"],a.value.type)?"CAST("+a.value.name+" AS FLOAT)":a.value.name,g=e.length+1),d=c.substring(0,b[0])+e+c.substring(b[1]),this._exprBox.set("value",d),this._exprBox.focus(),this._exprBox.textbox.setSelectionRange&&"number"==typeof this._exprBox.textbox.selectionStart?(this._exprBox.textbox.setSelectionRange(b[0]+
g,b[0]+g),this._exprBox.set("cursorPosition",[b[0]+g,b[0]+g])):(this._setCaretPosition(this._exprBox.textbox,b[0]+g,b[0]+g),this._exprBox.set("cursorPosition",this._getCursorRange(this._exprBox.textbox))),this._setfocus())},_setCaretPosition:function(a,b,c){a.setSelectionRange&&"number"==typeof a.selectionStart?a.setSelectionRange(b,c):"undefined"!=typeof a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",c),a.moveStart("character",b),a.select())},_getCaretPosition:function(a){var b=
0;if(z.doc.selection)a.focus(),b=z.doc.selection.createRange(),b.moveStart("character",-a.value.length),b=b.text.length;else if(a.selectionStart||"number"==typeof a.selectionStart)b=a.selectionStart;return b},_getCursorRange:function(a){var b,c;a.setSelectionRange&&"number"==typeof a.selectionStart?(b=a.selectionStart,c=a.selectionEnd):"undefined"!=typeof a.createTextRange&&(b=this._getCaretPosition(a),c=this._getCaretPosition(a));return[b,c]},_handleExpChange:function(a,b,c){this._addBtn.set("disabled",
!c);this._removeBtn.set("disabled",!c)},_showLoading:function(){u.add(this._buttonCtr,"esriLoading")},_hideLoading:function(){u.remove(this._buttonCtr,"esriLoading")},_getTypeLabel:function(a){var b;-1!==f.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle"],a)?b=this.i18n.integerLabel:"esriFieldTypeDouble"===a?b=this.i18n.doubleLabel:"esriFieldTypeDate"===a?b=this.i18n.dateLabel:"esriFieldTypeString"===a&&(b=this.i18n.stringLabel);return b},_setLayerAttr:function(a){this._set("layer",
a);this._set("fields",a.fields)},_setFieldsAttr:function(a){this._set("fields",a)},_setFieldAttr:function(a){this._set("field",a)},_setHelperMethodsAttr:function(a){this._set("helperMethods",a)},_setOperatorsAttr:function(a){this._set("operators",a)},_setShowSelectFieldAttr:function(a){this._set("showSelectField",a)},_setShowHeaderAttr:function(a){this._set("showHeader",a)},_setCloseOnAddAttr:function(a){this._set("closeOnAdd",a)},_getExpressionAttr:function(){var a=this._exprBox.get("value"),b,c;
if(a)return a.split(" "),c=[],b={field:this.field},b.sqlExpression=a,c.push(b),c;this._addBtn.set("disabled",!0)},_setAddButtonClassAttr:function(a){this._set("addButtonClass",a)},_setCloseButtonClassAttr:function(a){this._set("closeButtonClass",a)}});D("extend-esri")&&d.setObject("dijit.CalculateField",k,n);return k});