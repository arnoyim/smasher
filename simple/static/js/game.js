/**
 * Created by Arno on 8/17/2014.
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
    game.load.image('sky', 'static/assets/sky.png');
    game.load.image('ground', 'static/assets/platform.png');
    game.load.spritesheet('dude', 'static/assets/dude.png', 32, 48, 9);
    game.load.image('attackLeft', 'static/assets/spriteAtkLeft.png', 46, 48, 3);
    game.load.image('sword', 'static/assets/sword.png');
}

var platforms;
var playerLives = 4;
var P1text;
var P2text;
var player2Lives = 4;
//var dashLeft = false;
//var dashRight = false;
//var sword;


function createplayer1() {

    player = game.add.sprite(200, game.world.height - 300, 'dude');
    player.tint = 0xf08080;
    player.events.onOutOfBounds.add(fallout, this);
    player.checkWorldBounds = true;
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.1;
    player.body.gravity.y = 300;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    cursors = game.input.keyboard.createCursorKeys();
    playerStomp = game.input.keyboard.addKey(Phaser.Keyboard.QUESTION_MARK);

    playerJumpkey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    jumpCheck = function () {
        if (player.jumpCount < 2) {
            player.body.velocity.y = -200;
            player.jumpCount++;
            console.log(player.jumpCount)

        }
    };
    playerJumpkey.onDown.add(jumpCheck, player);
}
player.jumpCount = 0;
function createplayer2() {

    player2 = game.add.sprite(500, game.world.height - 300, 'dude');
    player2.tint = 0xffff00;
    player2.events.onOutOfBounds.add(fallout2, this);
    player2.checkWorldBounds = true;
    game.physics.arcade.enable(player2);
    player2.body.bounce.y = 0.1;
    player2.body.gravity.y = 300;
    player2.animations.add('left', [0, 1, 2, 3], 10, true);
    player2.animations.add('right', [5, 6, 7, 8], 10, true);
//    player2.anchor.setTo(0.5, 0.5);
//    sword = game.add.sprite(0, 0, 'sword');
//    sword.anchor.setTo(0.3, 0.5);
    player2SideAtk = game.input.keyboard.addKey(Phaser.Keyboard.R);
//    restart = game.input.keyboard.addKey(Phaser.Keyboard.ZERO);
    player2Jumpkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    jumpCheck2 = function () {
        if (player2.jumpCount < 2) {
            player2.body.velocity.y = -200;
            player2.jumpCount++;
            console.log(player2.jumpCount)

        }
    };
    player2Jumpkey.onDown.add(jumpCheck2, player2);

//    reset = function(){
//        game();
//    };
//    restart.onDown.add(reset);
}


function create() {


//    player1Lose = game.add.text(game.world.centerX, 400, 'Player 1 LOSES', { font: "40px Arial", fill: "#ffffff", align: "center" });
//  physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.checkCollision = true;
    game.world.setBounds(0, 0, 800, 600);
//    game.world.scale.setTo(800, 600);


//  A simple background
    game.add.sprite(0, 0, 'sky');
//  Platforms group
    platforms = game.add.group();
//  We will enable physics for any object that is created in this group
    platforms.enableBody = true;
////  Creating ground
//        var ground = platforms.create(0, game.world.height - 64, 'ground');
////  scale to fit the width of game
//        ground.scale.setTo(2, 2);
////  creating a static ground so it doesnt fall away
//        ground.body.immovable = true;
//  building the world
    var ledge = platforms.create(150, 400, 'ground');
    ledge.body.immovable = true;
    var ledge = platforms.create(200, 400, 'ground');
    ledge.body.immovable = true;


//  player and settings
//    player = game.add.sprite(200, game.world.height - 300, 'dude');
//    player.tint = 0xf08080;
//    player.events.onOutOfBounds.add(fallout, this);
    createplayer1();
    createplayer2();
//    player2 = game.add.sprite(500, game.world.height - 300, 'dude');
//    player2.tint = 0xffff00;
//    player3 = game.add.sprite(400, game.world.height - 100, 'attackLeft');
//    player3.tint = 0xff0000;
// world bounds
//    player.checkWorldBounds = true;
//  enable physics on player
//    game.physics.arcade.enable(player);
//    game.physics.arcade.enable(player2);
//  player physics properties, slight bounce
//    player.body.bounce.y = 0.1;
//    player.body.gravity.y = 300;
//    player.body.collideWorldBounds = true;

    // kills player1 when he touches world bounds
//    player2.body.bounce.y = 0.1;
//    player2.body.gravity.y = 300;
//    player2.body.collideWorldBounds = true;


//  two animations, walking left and right
//    player.animations.add('left', [0, 1, 2, 3], 10, true);
//    player.animations.add('right', [5, 6, 7, 8], 10, true);


//    player2.animations.add('left', [0, 1, 2, 3], 10, true);
//    player2.animations.add('right', [5, 6, 7, 8], 10, true);
//    player3.animations.add('attackLeft', [0, 1, 2, 2], 10, true);


    //  Our controls.
//    cursors = game.input.keyboard.createCursorKeys();
//
//    player.jumpCount = 0;
//    player2.jumpCount = 0;

//    playerJumpkey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
//    playerW = game.input.keyboard.addKey(Phaser.Keyboard.W);

//    jumpCheck = function () {
//        if (player.jumpCount < 2) {
//            player.body.velocity.y = -200;
//            player.jumpCount++;
//
//
//        }
//    };
//    jumpCheck2 = function () {
//        if (player2.jumpCount < 2) {
//            player2.body.velocity.y = -200;
//            player2.jumpCount++;
//
//
//        }
//    };
//    playerW.onDown.add(jumpCheck2, player2);
//    playerJumpkey.onDown.add(jumpCheck, player);

    P1text = game.add.text(10, game.world.height - 600, 'lives: 4', { font: "20px Arial", fill: "#ffffff", align: "left" });
    P2text = game.add.text(720, game.world.height - 600, 'lives: 4', { font: "20px Arial", fill: "#ffffff", align: "left" });
    distance = game.physics.arcade.distanceBetween(player, player2);
}

//var distance = game.physics.arcade.distanceBetween(player, player2);


function update() {


//  Collide the player and the player 2 with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player2, platforms);
    game.physics.arcade.collide(player, player2);


//  Checks to see if the player overlaps with anything, if he does call the collectStar function

    game.physics.arcade.overlap(player, null, this);
//    camera like super smash bros
    distance = game.physics.arcade.distanceBetween(player, player2);

//    console.log(distance);

//  Reset the players velocity (movement)
    player.body.velocity.x = 0;
//    game.debug.body(player);

    if (playerStomp.isDown) {
        player.body.velocity.y = 1000;
    }
    if (cursors.left.isDown) {
//  Move to the left
        player.body.velocity.x = -150;
        player.animations.play('left');
        

    }
    else if (cursors.right.isDown) {
//  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
        playerFacing = 'rightside'
    }
    else {
//  Stand still
        player.animations.stop();

        player.frame = 4;
    }
//   Dash

//  Allow the player to double jump if they are touching the ground.
    if (player.body.touching.down) {
        player.jumpCount = 0;
    }


    if (cursors.down.isDown) {
        player.body.velocity.y = 200;
    }
// killing when touching world bounds


// player 2 Keys

    playerA = game.input.keyboard.addKey(Phaser.Keyboard.A);
    playerS = game.input.keyboard.addKey(Phaser.Keyboard.S);
    playerD = game.input.keyboard.addKey(Phaser.Keyboard.D);
    playerF = game.input.keyboard.addKey(Phaser.Keyboard.F);
//  Reset the players velocity (movement)
    player2.body.velocity.x = 0;


    if (playerA.isDown) {
//  Move to the left
        player2.body.velocity.x = -150;


        player2.animations.play('left');

    }
    else if (playerD.isDown) {
//  Move to the right
        player2.body.velocity.x = 150;

        player2.animations.play('right');
    }
    else {
//  Stand still
        player2.animations.stop();

        player2.frame = 4;
    }

//  Allow the player to double jump if they are touching the ground.
    if (player2.body.touching.down) {
        player2.jumpCount = 0;
    }

    if (playerS.isDown) {
        player2.body.velocity.y = 200;

    }
    if (playerF.isDown) {
        player2.body.velocity.y = 1000;


    }

}

function fallout() {
    playerLives--;
    P1text.text = 'lives: ' + playerLives;

    console.log(playerLives);
    console.log("dead");

    if (playerLives === 0 && player2Lives > 0) {
        game.add.text(250, game.world.height - 500, 'Player 2 WINS', { font: "40px Arial", fill: "#ffffff", align: "center" });
    }
    else {
        player.reset(200, game.world.height - 300);

    }

}
function fallout2() {
    player2Lives--;
    P2text.text = 'lives: ' + player2Lives;
    console.log(player2Lives);
    console.log("dead");

    if (player2Lives === 0 && playerLives > 0) {
        game.add.text(250, game.world.height - 500, 'Player 1 WINS', { font: "40px Arial", fill: "#ffffff", align: "center" });
    }
    else {
        player2.reset(500, game.world.height - 300);

    }

}




