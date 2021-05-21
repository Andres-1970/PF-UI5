/*global QUnit*/

sap.ui.define([
	"pfui5/html5/controller/ProyectoFinal.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ProyectoFinal Controller");

	QUnit.test("I should test the ProyectoFinal controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
