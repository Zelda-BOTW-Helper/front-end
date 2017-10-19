angular
	.module('ngGlobalConfig', [])
	.constant('ENV', {
		name: 'development',
		version: '0.1.0',
		
		api: {
			port: '80',
			path: '/api'
		}
	})
;
