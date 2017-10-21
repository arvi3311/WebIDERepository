sap.ui.jsview("view.myview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.myview
	*/ 
	getControllerName : function() {
		return "view.myview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.myview
	*/ 
	createContent : function(oController) {
		var aControls = [];
       var oButton = new sap.ui.commons.Button({
         id : this.createId("MyButton"),
         text : "Hello JS View"
       });
       aControls.push(oButton.attachPress(oController.doIt));
       return aControls;
	}

});
