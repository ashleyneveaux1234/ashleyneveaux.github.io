var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;
    
        // this data will allow us to define all of the
        // behavior of our game
        
        var levelData = {
            name: "Insert Coin",
            number: 1, 
            speed: -3,
            gameItems: [
                

                //level 1
                {type: 'sawblade',x:600,y:groundY - 110, level: 1},
                {type: 'sawblade',x:2000,y:groundY - 110, level: 1},
                {type: 'sawblade',x:2900,y:groundY - 110, level: 1},
                {type: 'sawblade',x:3400,y:groundY - 110, level: 1},
                
                {type: 'spikes', x:900, y:groundY-18, level: 1},
                {type: 'spikes', x:1300, y:groundY-18, level: 1},
                {type: 'spikes', x:2200, y:groundY-18, level: 1},
                {type: 'spikes', x:2700, y:groundY-18, level: 1},
                {type: 'spikes', x:3200, y:groundY-18, level: 1},
                {type: 'spikes', x:3800, y:groundY-18, level: 1},
                
                {type: 'reward', x:900,y:groundY-120, level: 1},
                {type: 'reward', x:1300, y:groundY-120, level: 1},
                {type: 'reward', x:2200, y:groundY-120, level: 1},
                {type: 'reward', x:2700, y:groundY-120, level: 1},
                {type: 'reward', x:3200,y:groundY-120, level: 1},
                {type: 'reward', x:3800, y:groundY-120, level: 1},
                {type: 'enemy', x:600, y:groundY - 50, level: 1},
                {type: 'enemy', x:2000,y:groundY - 50, level: 1},
                {type: 'enemy', x:2700, y:groundY - 50, level: 1},

                
                //level 2
                
                {type: 'tardis', x:4500, y:groundY-129, level: 2},
                
                {type: 'sawblade', x:5000, y:groundY-110, level: 2},
                {type: 'sawblade', x:5100, y:groundY-110, level: 2},
                {type: 'sawblade', x:5200, y:groundY-110, level: 2},


                {type: 'spikes', x:4800, y:groundY-18, level: 2},
                {type: 'spikes', x:5400, y:groundY-18, level: 2},
                {type: 'spikes', x:5600, y:groundY-18, level: 2},
                {type: 'spikes', x:6000, y:groundY-18, level: 2},
                {type: 'spikes', x:6400, y:groundY-18, level: 2},
                
                {type: 'enemy', x:5000, y:groundY - 50, level: 2},
                {type: 'enemy', x:5100, y:groundY - 50, level: 2},
                {type: 'enemy', x:5200, y:groundY - 50, level: 2},
                
                {type: 'reward', x:4800, y:groundY - 70, level: 2},
                {type: 'reward', x:5400, y:groundY - 70, level: 2},
                {type: 'reward', x:5600, y:groundY - 70, level: 2},
                {type: 'reward', x:6000, y:groundY - 70, level: 2},
                {type: 'reward', x:6200, y:groundY - 70, level: 2},
                {type: 'reward', x:6400, y:groundY - 70, level: 2},

                
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
      
    //sawblade

        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);  
             myObstacle.velocityX = -2; 
             myObstacle.rotationalVelocity = 25;
            
            
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
             
        }
            

     // + obstacle
                
        function createSpikes(x,y) {
            var hitZoneSize = 20;
            var damageFromObstacle = 20;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
                myObstacle.x = x;
                myObstacle.y = y;
                
                game.addGameItem(myObstacle);
                
            var obstacleImage = draw.bitmap('img/spikes.png');
                myObstacle.addChild(obstacleImage);
                obstacleImage.x = -24;
                obstacleImage.y = -32;
        }
                

            
// Enemy 
        function createEnemy (x, y, level) {
            var enemy =  game.createGameItem('enemy',30);

                if (level === 1){   
                    var ghost = draw.bitmap('img/ghost.png');
                        ghost.x = -39;
                        ghost.y = -40;
                    
                        
                    enemy.addChild(ghost);
                    
                }
                    enemy.x = x;
                    enemy.y = y;
                    enemy.velocityX = -1.5;
                        
                    game.addGameItem(enemy);
                    
                    enemy.onPlayerCollision = function() {
                        game.changeIntegrity(-30);
                        enemy.fadeOut();
                    };
                    
                    enemy.onProjectileCollision = function() {
                        game.increaseScore(50);
                        enemy.fadeOut();
                    };
                
                
                if (level === 2){
                    var ghost = draw.bitmap('img/ghost2.png');
                        ghost.x = -39;
                        ghost.y = -40;
                    
                        
                    enemy.addChild(ghost);
                    
                }
                enemy.x = x;
                enemy.y = y;
                enemy.velocityX = -1.5;
                    
                game.addGameItem(enemy);
                
                enemy.onPlayerCollision = function() {
                    game.changeIntegrity(-40);
                    enemy.fadeOut();
                };
                
                enemy.onProjectileCollision = function() {
                    game.increaseScore(50);
                    enemy.fadeOut();
                };
        }
        
        

//rewards :
        function createReward (x,y, level) {
            var reward = game.createGameItem('reward', 17);
            
            if (level === 1) {
                reward.x = x;
                reward.y = y;
                reward.velocityX = -2;
                
                var jewel = draw.bitmap('img/jewel.png');
                jewel.x = -20;
                jewel.y = -20;
                
                reward.addChild(jewel);
                
                game.addGameItem(reward);
                
                reward.onPlayerCollision = function() {
                    game.increaseScore(50);
                    reward.fadeOut();
                };
            }
             if (level === 2) {
                 
                 reward.x = x;
                 reward.y = y;
                 reward.velocityX = -2;
                
                var cherry = draw.bitmap('img/cherry.png');
                    cherry.x = -20;
                    cherry.y = -23;
                    
                reward.addChild(cherry);
                
                game.addGameItem(reward);
                
                reward.onPlayerCollision = function() {
                    game.increaseScore(50);
                    reward.fadeOut();
                };
             }
        }
        


//level 2 health regeneration
        function createTardis (x,y) {
            var hitZoneSize = 50;
            var reward = game.createGameItem('tardis', hitZoneSize);
                reward.x = x;
                reward.y = y + 75;
                reward.velocityX = - 2.2;
                
            var tardis = draw.bitmap('img/tardis.png');
                tardis.x = - 70;
                tardis.y = - 200;
            
            reward.addChild(tardis);
            
            game.addGameItem(reward);
            
            reward.onPlayerCollision = function() {
                 game.changeIntegrity(+50);
                reward.fadeOut();
            };
        }

        

        for (var i = 0; i < levelData.gameItems.length; i++) {
           var gameItem = levelData.gameItems[i];
            
            if (gameItem.level === 1){
                if (gameItem.type === 'sawblade') {
                  createSawBlade(gameItem.x,gameItem.y,);
                }
    
                if (gameItem.type === 'spikes') {
                  createSpikes(gameItem.x,gameItem.y);
                }
                
                if (gameItem.type === 'reward') {
                  createReward(gameItem.x,gameItem.y, 1);
                }
                
                if (gameItem.type === 'enemy') {
                  createEnemy(gameItem.x,gameItem.y, 1);
                }
            } else if (gameItem.level === 2){
                
                 if (gameItem.type === 'sawblade') {
                  createSawBlade(gameItem.x,gameItem.y,);
                }
    
                if (gameItem.type === 'spikes') {
                  createSpikes(gameItem.x,gameItem.y);
                }
                
                if (gameItem.type === 'reward') {
                  createReward(gameItem.x,gameItem.y, 2);
                }
                
                if (gameItem.type === 'enemy') {
                  createEnemy(gameItem.x,gameItem.y, 2);
                }
                if (gameItem.type === 'tardis') {
                  createTardis(gameItem.x,gameItem.y, 2);
                }
            }
            

        }
            
    };
};




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
