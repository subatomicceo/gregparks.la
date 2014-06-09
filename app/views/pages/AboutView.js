var ExtensionsView = require('views/Extensions');
var template = require('templates/about');

var AboutView = ExtensionsView.extend({
	template : template,
	className: 'about',

	render: function () {
		this.$el.html(this.template);
		return ExtensionsView.prototype.render.apply(this, arguments);
	}

});

module.exports = AboutView;