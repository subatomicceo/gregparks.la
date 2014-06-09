var AppView = require('views/AppView');
var HomeView = require('views/pages/HomeView');
var AboutView = require('views/pages/AboutView');
var WorkView = require('views/pages/WorkView');

(function () {

  window.app = {
    Views: {},
    Extensions: {},
    Router: null,

    init: function () {

      this.instance = new AppView();
      this.HomeView = new HomeView();
      this.AboutView = new AboutView();
      this.WorkView = new WorkView();
      Backbone.history.start();

    }
  };

  $(function() {
    window.app.init();
  });

}());