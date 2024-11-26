/*global QUnit*/

sap.ui.define([
	"epp-reporting/controller/Reporting.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Reporting Controller");

	QUnit.test("I should test the Reporting controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
