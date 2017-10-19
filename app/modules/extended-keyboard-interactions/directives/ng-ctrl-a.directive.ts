interface IAttributesWithCtrlASupport extends ng.IAttributes {
    ngCtrlA: string;
}

export class NGCtrlA implements ng.IDirective {
	public restrict: string = "A";
	
	constructor(private $rootElement: ng.IAugmentedJQuery, private $parse: ng.IParseService) { }

	public link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: IAttributesWithCtrlASupport) => {
		const fn = this.$parse(attrs.ngCtrlA);
		this.$rootElement.bind("keydown keypress", function (ev) {
            if(ev.which === 65 && (ev.ctrlKey || ev.metaKey)) {
				scope.$apply(function() {
					event.preventDefault();
					fn(scope, {$event:event});
				});
            }
        });
	}

	public static factory(): ng.IDirectiveFactory {
		const directive = ($rootElement: ng.IAugmentedJQuery, $parse: ng.IParseService) => new NGCtrlA($rootElement, $parse);
		directive.$inject = ["$rootElement", "$parse"];
        return directive;
    }
}
