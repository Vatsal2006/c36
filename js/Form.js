class Form {
  constructor() {
   this.input = createInput("Name");
   this.button = createButoon("play");
   this.greeting = createElement('h2');

  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    //var input = createInput("Name");
    //var button = createButton('Play');
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      //var greeting = createElement('h3');
      this.greeting.html("Hello " + name+"!" )
      this.greeting.position(130, 160)
    });

  }
}
