var ExtensionsView = require('views/Extensions');

var AppView = ExtensionsView.extend({

    el: 'div',
    className: 'content',

    goto: function (view) {
      var previous = this.currentPage || null;
      var next = view;

      if (previous) {
        previous.transitionOut(function () {
          previous.remove();
          previous.unbind();
        });
      }

      next.render({ page: true });
      this.$el.append( next.$el );
      next.transitionIn();
      this.currentPage = next;

    }

});

module.exports = AppView;