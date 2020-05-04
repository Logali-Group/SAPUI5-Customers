sap.ui.define([], function () {

	return {
		contactTitle: function (cTitle) {
			
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			
			switch (cTitle) {
				case "S":
					return resourceBundle.getText("customerTitleS");
				case "O":
					return resourceBundle.getText("customerTitleO");
				case "A":
					return resourceBundle.getText("customerTitleA");
				default:
					return cTitle;
			}
		}
	};
});