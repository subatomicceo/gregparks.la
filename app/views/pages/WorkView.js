var ExtensionsView = require('views/Extensions');
var template = require('templates/work');

var WorkView = ExtensionsView.extend({
	template : template,
	className: 'work',

	render: function () {
		this.$el.html(this.template);
		return ExtensionsView.prototype.render.apply(this, arguments);
	}



});

module.exports = WorkView;