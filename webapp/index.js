sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {

	new ComponentContainer({
		name: "logaligroup.Customers",
		settings : {
			id : "customers"
		},
		async: true
	}).placeAt("content");
});