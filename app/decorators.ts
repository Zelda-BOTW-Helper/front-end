export const Component = function(options: ng.IComponentOptions): Function {
	return (controller: Function) => angular.extend(options, { controller });
};
