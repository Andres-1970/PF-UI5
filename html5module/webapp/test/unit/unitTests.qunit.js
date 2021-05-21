/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"pfui5/html5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
