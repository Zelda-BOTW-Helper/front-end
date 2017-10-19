interface IAttributesWithEnterSupport extends ng.IAttributes {
    ngEnter: string;
}

export class NGEnter implements ng.IDirective {
	public restrict: string = "A";
	
	constructor(private $parse: ng.IParseService) { }

	public link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: IAttributesWithEnterSupport) => {
		const fn = this.$parse(attrs.ngEnter);
		element.bind("keydown keypress", function (ev) {
            if(ev.which === 13) {
				scope.$apply(function() {
					ev.preventDefault();
					fn(scope, { $event: ev });
				});
            }
        });
	}

	public static factory(): ng.IDirectiveFactory {
		const directive = ($parse: ng.IParseService) => new NGEnter($parse);
		directive.$inject = ["$parse"];
        return directive;
    }
}
