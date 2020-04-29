sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {

	return Controller.extend("logaligroup.Customers.controller.App", {

		onShowHello : function () {
			/* eslint-disable no-alert */
			alert("Hello World");
			/* eslint-enable no-alert */
		}
	});

});