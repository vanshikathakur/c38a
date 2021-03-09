class Game{
    constructor(){}
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    
    update(state){
        // rootpath = /
        database.ref('/').update({gameState:state})
    }

    async start(){
        if(gameState === 0){
            //Player is class and player is variable
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            //game starts here
            form = new Form();
            form.display();
        }
        c1 = createSprite(100,200);
        c2 = createSprite(300,200);
        c3 = createSprite(500,200);
        c4 = createSprite(700,200);
        cars = [c1,c2,c3,c4];
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start", 300,100);
        Player.getPlayerInfo();



        if(allPlayers !== undefined){
            //var displayPosition = 130;
            var index = 0;
            var x = 0;
            var y;

            for(var plr in allPlayers){
                index = index+1;
                x = x+200;
                y = displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                
                //if(plr === "player" + player.index){
                    //fill("red");
                //}
                //else{fill("black")}
        
                if(index === player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }

            //displayPosition += 20;
            //textSize(15);
            //text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120,displayPosition);
          }

        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();

        }
drawSprites();
    }
}