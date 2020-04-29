sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {

	XMLView.create({
		viewName: "logaligroup.Customers.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
});