sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"logaligroup/Customers/model/models",
	"sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, models, ResourceModel) {

	return Controller.extend("logaligroup.Customers.controller.App", {

		onInit: function () {

			// set data model on view
			this.getView().setModel(models.createRecipient());

			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "logaligroup.Customers.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},

		onShowHello: function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// show message
			MessageToast.show(sMsg);
		}
	});

});