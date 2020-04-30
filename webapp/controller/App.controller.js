sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function ( Controller ) {

	return Controller.extend("logaligroup.Customers.controller.App", {

		onInit: function () {
		},
		
		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}

	});
});