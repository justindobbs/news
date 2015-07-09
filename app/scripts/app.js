'use strict';
var app = window.app;

(function(document) {

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
		app.start();
		app.addInitializer( function(options){
		
			app.router = new app.Router;
			app.mainModel = new app.MainModel;
			app.mainView = new app.MainView({model:app.mainModel});
			Backbone.history.start();
			
			app.router.on("route:path", function(path) {
					
			$('paper-input').val(path);
			
			var myElem = document.querySelector('nyt-articles');
			myElem.postsLoaded(path.toString());
				
			});
			
		});
		
		app.addInitializer( function(options){
		
			app.Anim = new app.modules.anim;
		 
			var myElem = document.querySelector('nyt-articles');
		 
			$('paper-item').on('click', function(e){
				var p = this.getAttribute('label');
				var t = document.querySelector('nyt-articles');
				var q = '{"q":"' + p + '"}';
				t.changeParam(q,p);
			});
			
			$('paper-input').on('change', function(e){   
				var p = $(this).val();
				p = _.escape(p);
				var t = document.querySelector('nyt-articles');
				var q = '{"q":"' + p + '"}';
				t.changeParam(q,p);          
			});
			
			$('#sort').on('change', function(){
				var e = this.selected;
				var t = document.querySelector('nyt-articles');
				var q = '{"sort":"' + e + '"}';
				t.changeSort(e,q);
			});
			
		});//end initializer
		
  });//end polymer ready

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers

})(wrap(document));

