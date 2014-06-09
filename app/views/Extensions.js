var Router = require('routes/Router');

var ExtensionsView = Backbone.View.extend({

	initialize: function () {
		this.router = new Router();
	},

	render: function(options) {

		options = options || {};

		if (options.page === true) {
			this.$el.addClass('page');
		}

		return this;

	},

	transitionIn: function (callback) {

		var view = this,delay

		var transitionIn = function () {
			view.$el.addClass('is-visible');
			view.$el.on('transitionend', function () {
				if (_.isFunction(callback)) {
					callback();
				}
			})
		};

		_.delay(transitionIn, 20);

	},

	transitionOut: function (callback) {

		var view = this;

		view.$el.removeClass('is-visible');
		view.$el.on('transitionend', function () {
			if (_.isFunction(callback)) {
				callback();
			};
		});

	}

});

module.exports = ExtensionsView;