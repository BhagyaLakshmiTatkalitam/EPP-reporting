sap.ui.define([
    "sap/ui/core/mvc/Controller" ,
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/format/ChartFormatter",
    "sap/viz/ui5/api/env/Format"
], (Controller, JSONModel, ChartFormatter, Format) => {
    "use strict";

    return Controller.extend("eppreporting.controller.Reporting", {
        onInit: function () {
            Format.numericFormatter(ChartFormatter.getInstance());
            
            // Set up responsive layout
            this.getView().addStyleClass("sapUiSizeCompact");
            
            // Configure charts
            this._configureLineChart();
            this._configurePieChart();
        },

        _configureLineChart: function () {
            var oVizFrame = this.getView().byId("idLineChart");
            var oLineProperties = {
                plotArea: {
                    dataLabel: {
                        visible: true
                    }
                },
                title: {
                    text: "Monthly Request Trend"
                },
                valueAxis: {
                    title: {
                        text: "Number of Requests"
                    }
                },
                timeAxis: {
                    title: {
                        text: "Month"
                    }
                }
            };
            oVizFrame.setVizProperties(oLineProperties);
        },

        _configurePieChart: function () {
            var oVizFrame = this.getView().byId("idPieChart");
            var oPieProperties = {
                plotArea: {
                    dataLabel: {
                        visible: true,
                        showTotal: true
                    }
                },
                title: {
                    text: "Category Distribution"
                },
                legend: {
                    title: {
                        text: "Categories"
                    }
                }
            };
            oVizFrame.setVizProperties(oPieProperties);
        }
    });
});