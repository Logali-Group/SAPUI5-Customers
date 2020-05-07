sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment",
	"sap/ui/core/syncStyleClass"
], function (ManagedObject, Fragment, syncStyleClass) {

	return ManagedObject.extend("logaligroup.Customers.controller.HelloDialog", {

		constructor: function (oView) {
			this._oView = oView;
		},

		exit: function () {
			delete this._oView;
		},

		open: function () {
			var oView = this._oView;

			// create dialog lazily
			if (!oView.byId("helloDialog")) {
				var oFragmentController = {
					onCloseDialog: function () {
						oView.byId("helloDialog").close();
					}
				};
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
					name: "logaligroup.Customers.view.HelloDialog",
					controller: oFragmentController
				}).then(function (oDialog) {
					// connect dialog to the root view
					oView.addDependent(oDialog);
					// compact/cozy style
					syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
					oDialog.open();
				});
			} else {
				oView.byId("helloDialog").open();
			}
		}
	});

});