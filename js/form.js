class Form{
    constructor(){
        this.input = createInput("name");
        this.button = createButton('play');
        this.greeting = createElement('h3');
    }
    
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){

        //title
        var title = createElement('h2');
        title.html("Multi-Player Car Racing Game");
        title.position(displayWidth/2-50,0);

        //input
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        
        //button
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.button.mousePressed(()=>{
            //whenever you press button input and button will hide(not be displayed)
            this.input.hide();
            this.button.hide();

            //player.name
            player.name = this.input.value();
            //playerCount = playerCount + 1;
            playerCount += 1; 
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
            //greeting
            this.greeting.html("Hello!" + player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);

        })
    }
}