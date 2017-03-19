/* 
 * Author : atiqkhaled
 */ 
define([
      "dojo/_base/declare",
      "dijit/_WidgetBase",
      "dijit/_TemplatedMixin",
      "dijit/_OnDijitClickMixin",
      "dijit/_WidgetsInTemplateMixin",
      "dojo/text!./flickrview.html",
      "dojox/mobile/Heading",
      "dojox/mobile/RoundRect",
      "dojox/mobile/FormLayout",
      "dojox/mobile/TextBox",
      "dojox/mobile/Button",
      "dojox/mobile/ScrollableView",
      "dojox/mobile/TabBar",
      "dojox/mobile/ScrollableView",
	  "dojox/mobile/ListItem",
	  "dojox/mobile/RadioButton",
	  "dojox/mobile/EdgeToEdgeList",
	  "dojox/mobile/Switch",
      "flickrview/FeedView",
	  "flickrview/SettingsView"	
  ], function(declare, _WidgetBase, _TemplatedMixin, _OnDijitClickMixin, _WidgetsInTemplateMixin, template){
       return declare([_WidgetBase,_OnDijitClickMixin, _TemplatedMixin,_WidgetsInTemplateMixin], {

         // rendering FlickerView template
         templateString: template,
         // Colors for our background animation
         baseBackgroundColor: "#fff",
         mouseBackgroundColor: "#def",
                       
         postCreate : function() {
        	console.log("postCreate");
        	this.inherited(arguments);
            var domNode = this.domNode;
         },
       });
   });