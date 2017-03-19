/* 
 * Author : atiqkhaled
 */
define([
      "dojo/_base/declare",
      "dijit/registry",
      "dojo/dom-construct",
      "dojo/_base/window",
      "dojo/_base/lang",
      "dijit/_WidgetBase",
      "dijit/_TemplatedMixin",
      "dijit/_OnDijitClickMixin",
      "dijit/_WidgetsInTemplateMixin",
      "dojo/text!./login.html",
      "dojox/mobile/FormLayout",
      "dojox/mobile/TextBox",
      "dojox/mobile/Button",
      "flickrview/MainView"
], function(declare, registry, domConstruct, win, lang, _WidgetBase, _TemplatedMixin,
            		_OnDijitClickMixin, _WidgetsInTemplateMixin, template, FormLayout,
            		TextBox, Button, MainView) {
      return declare([_WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
            userName: "",
            passWord: "",
            dbName: "atiqkhaled",
            dbPass: "hello",
            // rendering login template
            templateString: template,
               
            startup: function () {
              this.inherited(arguments);
              this.userName = registry.byId("nameId");
              this.passWord = registry.byId("passId");
            },

            postCreate : function() {
              // overriding WidgetBase class method 
              console.log("postCreate");
              this.inherited(arguments);
              var domNode = this.domNode;
              var log = this;
              var scrlView = registry.byId("loading");
              //attaching event handler
              log.submittEvnt.on("click",lang.hitch(this, function() {
                  var name = this.userName.get('value');
                  var pass = this.passWord.get('value');
                  //Check authentication to proceed further
                  if(this.dbName.toLowerCase() === name.toLowerCase() && this.dbPass === pass) {
                     domConstruct.destroy("mainVew");
                     var mainVw = new MainView().placeAt(scrlView);
                  }  
              }));
            },
               //End of Post Create function
       });
      // End of Declare
  });