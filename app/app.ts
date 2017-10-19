/// <reference path="lib.d.ts" />

import './styles/styles.less';

import { AppRouting } from "./routing";

import './modules/extended-keyboard-interactions';
import './components';

angular
	.module('zelda-botw', 
		[
			'ngAnimate',
			'ngAria',
			'ngCookies',
			'ngMessages',
			'ngResource',
			'ngRoute',
			'ngSanitize',
			'ngMaterial',
			'LocalStorageModule',
			'extendedKeyboardInteractions',
			'components'
		]
	)

	.config([
		"$routeProvider", 
		"$mdThemingProvider",
		function(
			$routeProvider : ng.route.IRouteProvider,
			$mdThemingProvider : ng.material.IThemingProvider
		) {
			$mdThemingProvider
				.theme('default')
				.primaryPalette('blue', {'default': '500'})
				.accentPalette('pink')
				.warnPalette('red');

			new AppRouting().configureRoute($routeProvider);
		}
	])

	.run(function () {

	});
