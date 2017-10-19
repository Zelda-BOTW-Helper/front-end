interface IAttributesWithEscSupport extends ng.IAttributes {
    ngEsc: string;
}

export class NGEsc implements ng.IDirective {
	public restrict: string = "A";
	
	constructor(private $rootElement: ng.IAugmentedJQuery, private $parse: ng.IParseService) { }

	public link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: IAttributesWithEscSupport) => {
		const fn = this.$parse(attrs.ngEsc);
		this.$rootElement.bind("keydown keypress", function (ev) {
            if(ev.which === 27) {
				scope.$apply(function() {
					ev.preventDefault();
					fn(scope, { $event: ev });
				});
            }
        });
	}

	public static factory(): ng.IDirectiveFactory {
		const directive = ($rootElement: ng.IAugmentedJQuery, $parse: ng.IParseService) => new NGEsc($rootElement, $parse);
		directive.$inject = ["$rootElement", "$parse"];
        return directive;
    }
}
