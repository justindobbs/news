app.MainView = Marionette.ItemView.extend({

  initialize: function(){ 
  
    this.model.set('info', 'info')
	
  },
  
  template: '#tmpl',
  
});