sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	"sap/m/Button"
], function (Control, RatingIndicator, Label, Button) {

	return Control.extend("logaligroup.Customer.control.CustomerRating", {

		metadata: {
			properties: {
				value: {
					type: "float",
					defaultValue: 0
				}
			},
			aggregations: {
				_rating: {
					type: "sap.m.RatingIndicator",
					multiple: false,
					visibility: "hidden"
				},
				_label: {
					type: "sap.m.Label",
					multiple: false,
					visibility: "hidden"
				},
				_button: {
					type: "sap.m.Button",
					multiple: false,
					visibility: "hidden"
				}
			},
			events: {
				change: {
					parameters: {
						value: {
							type: "int"
						}
					}
				}
			}
		},

		init: function () {

			this.setAggregation("_rating", new RatingIndicator({
				value: this.getValue(),
				iconSize: "2rem",
				visualMode: "Half",
				liveChange: this._onRate.bind(this)
			}));

			this.setAggregation("_label", new Label({
				text: "{i18n>customerRatingLabelInitial}"
			}).addStyleClass("sapUiSmallMargin"));

			this.setAggregation("_button", new Button({
				text: "{i18n>customerRatingButton}",
				press: this._onSubmit.bind(this)
			}).addStyleClass("sapUiTinyMarginTopBottom"));
		},

		_onRate: function (oEvent) {
			var oRessourceBundle = this.getModel("i18n").getResourceBundle();
			var fValue = oEvent.getParameter("value");

			this.setProperty("value", fValue, true);
			this.getAggregation("_label").setText(oRessourceBundle.getText("customerRatingLabelIndicator", [fValue, oEvent.getSource().getMaxValue()]));
			this.getAggregation("_label").setDesign("Bold");
		},

		_onSubmit: function (oEvent) {
			var oResourceBundle = this.getModel("i18n").getResourceBundle();

			this.getAggregation("_rating").setEnabled(false);
			this.getAggregation("_label").setText(oResourceBundle.getText("customerRatingLabelFinal"));
			this.getAggregation("_button").setEnabled(false);
			this.fireEvent("change", {
				value: this.getValue()
			});
		},
		
		reset: function () {
			var oRessourceBundle = this.getModel("i18n").getResourceBundle();

			this.setValue(0);
			this.getAggregation("_rating").setEnabled(true);
			this.getAggregation("_button").setEnabled(true);
			this.getAggregation("_label").setText(oRessourceBundle.getText("customerRatingLabelInitial"));
			this.getAggregation("_label").setDesign("Standard");
		},

		setValue: function (fvalue) {
			this.setProperty("value", fvalue, true);
			this.getAggregation("_rating").setValue(fvalue);
		},

		renderer: function (oRm, oControl) {
			oRm.openStart("div", oControl);
			oRm.class("customerRating");
			oRm.openEnd();
			oRm.renderControl(oControl.getAggregation("_rating"));
			oRm.renderControl(oControl.getAggregation("_label"));
			oRm.renderControl(oControl.getAggregation("_button"));
			oRm.close("div");
		}

	});
});