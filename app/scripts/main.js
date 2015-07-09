"use strict";

var app = Marionette.Application.extend({
  initialize: function(options){
    console.log(options.container);
  }
});

window.app = new app({container: 'body'});

window.app.addRegions({

  mainRegion: '.container'

});

window.app.Router = Backbone.Router.extend({

  routes: {
    'search/*path': 'path'
  },
  
  search: function(){ }

});







