var ExtensionsView = require('views/Extensions');
var template = require('templates/home');

var HomeView = ExtensionsView.extend({
	template : template,
	className: 'home',

	render: function () {
		this.$el.html(this.template);
		return ExtensionsView.prototype.render.apply(this, arguments);
	},
	// events: {
	// 	'click .btn' : 'showAbout'
	// },
	// showAbout: function(){
	// 	window.history.pushState("test", "title", "#!/about");
	// }



});

module.exports = HomeView;