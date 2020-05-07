sap.ui.define([
	"sap/ui/core/UIComponent",
	"logaligroup/Customers/model/models",
	"sap/ui/model/resource/ResourceModel",
	"./controller/HelloDialog",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (UIComponent, models, ResourceModel, HelloDialog, JSONModel, Device) {

	return UIComponent.extend("logaligroup.Customers.Component", {
		metadata: {
			manifest: "json"
		},
		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			this.setModel(models.createRecipient());

			// set i18n model
			var i18nModel = new ResourceModel({
				bundleName: "logaligroup.Customers.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");

			//set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());

			// create the views based on the url/hash
			this.getRouter().initialize();
		},

		exit: function () {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog: function () {
			this._helloDialog.open();
		}
	});
});