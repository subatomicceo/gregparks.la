var Router = Backbone.Router.extend({

    routes: {
      '!/work': 'work',
      '!/about': 'about',
      '!/home': 'home',
      '': 'home'
    },

    home: function () {
      var view = app.HomeView;
      app.instance.goto(view);
    },
    about: function () {
      var view = app.AboutView;
      app.instance.goto(view);
    },
    work: function () {
      var view = app.WorkView;
      app.instance.goto(view);
    }

  });

module.exports = Router;