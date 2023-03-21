var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree; 
        var buildings;
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'yellow');
            background.addChild(backgroundFill);

            
            // TODO: 3 - Add a moon and starfield
            
            // 
            var moon = draw.bitmap("img/moon.png");
                moon.x = 300;
                moon.y = 200;
                moon.scaleX = 10.0;
                moon.scaleY = 10.0;
                background.addChild(moon);
            for (var i = 0; i < 100; i++){
                  var circle = draw.circle(10, "white", "LightGray", 2);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);
            }
                var  moon

            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var buildingHeights = [300 , 150 , 175 , 200]; // creates a variable called buildHeight and stores 300 as the
            var buildingcolors = ["black", "blue", "grey","red","green"];
            for (var i = 0; i < 5; ++i) {
                var buildingHeight = 300; // creates a variable called buildingHeight and stores 300 as the height of the buidling 
                var building = draw.rect(75, buildingHeight, "LightGray", "Black", 1); // draws a rectangle and stores it in the variable rextangle 
                building.x = 200 * i; // Multiplies 200 times the current iteration of the loop so that the buildings are 200 pixels apart and stores it as the x value of the buildings 
                building.y = groundY - buildingHeight; // subtracts buildHeight from groundY and sets it as the y 
                background.addChild(building); // add the building as a child to the background 
                buildings.push(building); // adds the buildings to the buildings array 
               }
            //loop that will create the buildings 
            /* for (var i = 0; i < 5; ++i) {
                var buildingHeight = 300; // creates a variable called buildingHeight and stores 300 as the height of the buidling 
                var building = draw.rect(75, buildingHeight, "LightGray", "Black", 1); // draws a rectangle and stores it in the variable rextangle 
                building.x = 200 * i; // Multiplies 200 times the current iteration of the loop so that the buildings are 200 pixels apart and stores it as the x value of the buildings 
                building.y = groundY - buildingHeight; // subtracts buildHeight from groundY and sets it as the y 
                background.addChild(building); // add the building as a child to the background 
                buildings.push(building); // adds the buildings to the buildings array 
               }*/
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png"); // draws a tree using bitmap and stores it the variable tree.
            tree.x = 0; // sets the x vakue of the tree
            tree.y = groundY - 240; // sets the y value if the tree
            background.addChild(tree); // adds 
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x + 1;

            if (tree.x < -200) {
            tree.x = canvasWidth;
        }
            
            // TODO 5: Part 2 - Parallax
            for (var  i = 0; i < buildings.length; i++){
                var building =  buildings[i];
                building.x = building.x - 1;
         }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
