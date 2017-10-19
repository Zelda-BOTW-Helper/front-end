/// <reference path="./lib.d.ts" />

import { MainCtrl } from "./controllers/main.controller";

export class AppRouting {
	routeBuilder(controller: any, templateUrl?: string, controllerAs: string = "ctrl"): angular.route.IRoute {
		const _route: angular.route.IRoute = {
			templateUrl: null,
			controller: controller,
			controllerAs: controllerAs
		}

		if (templateUrl) {
			_route.templateUrl = templateUrl;
		} else if (controller.templateUrl) {
			_route.templateUrl = controller.templateUrl;
		} else {
			throw new TypeError("Invalid parameter templateURL");
		}

		return _route;
	}

	configureRoute(routeProvider: ng.route.IRouteProvider) {
		routeProvider
			.when('/', this.routeBuilder(MainCtrl))
			.otherwise({ redirectTo: '/' });
	}
}