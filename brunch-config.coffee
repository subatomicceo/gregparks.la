exports.config =
	# See http://brunch.io/#documentation for docs.
	files:
		javascripts:
			joinTo:
				'js/app.js': /^app/
				'js/vendor.js': /^vendor/
			order:
				before: [
					'vendor/scripts/console-helper.js',
					'vendor/scripts/jquery-1.7.2.js',
					'vendor/scripts/underscore-1.3.3.js',
					'vendor/scripts/backbone-0.9.9.js',
					'vendor/scripts/backbone-mediator.js',
					'vendor/scripts/backbone.super.js'
				]
		stylesheets:
			defaultExtension: 'styl'
			joinTo: 'css/app.css'
		templates:
			defaultExtension: 'hbs'
			joinTo: 'js/templates.js'
