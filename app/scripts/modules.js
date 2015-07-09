app.Modules = function(){

  this.anim =
    function(){
      var elem = document.querySelector('.hero-unit');
      var player = document.timeline.play(new Animation(elem, [
          {opacity: "0.5", transform: "scale(0.1) translate(200px,100px)"}, 
          {opacity: "1.0", transform: "scale(1) translate(0px,0px)"}
        ], 500
        /*{
          direction: "alternate", duration: 1000, iterations: Infinity
        }*/
      ));
    };

};

app.modules = new app.Modules;
	