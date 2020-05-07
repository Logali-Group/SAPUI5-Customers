sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {

	return Controller.extend("logaligroup.Customers.controller.App", {

		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},

		onOpenDialog: function () {
			this.getOwnerComponent().openHelloDialog();
		}

	});
});