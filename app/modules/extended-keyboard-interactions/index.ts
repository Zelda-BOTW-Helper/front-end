import { NGCtrlA } 	from "./directives/ng-ctrl-a.directive";
import { NGEsc } 	from "./directives/ng-esc.directive";
import { NGEnter } 	from "./directives/ng-enter.directive";

angular.module("extendedKeyboardInteractions", [])
	.directive("ngEsc", NGEsc.factory())
	.directive("ngEnter", NGEnter.factory())
  	.directive("ngCtrlA", NGCtrlA.factory());
