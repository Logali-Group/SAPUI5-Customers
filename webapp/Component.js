sap.ui.define([
	"sap/ui/core/UIComponent",
	"logaligroup/Customers/model/models",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, models, ResourceModel) {

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

		}
	});
});