/**
 * Created by Arno on 8/17/2014.
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload() {
    game.load.image('sky', 'static/assets/sky.png');
    game.load.image('ground', 'static/assets/platform.png');
    game.load.spritesheet('dude', 'static/assets/dude.png', 32, 48);
    game.load.image('attackLeft', 'static/assets/dudeAttackLeft.png', 51, 48);
}
var platforms;

function create() {
//  physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);
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
    player = game.add.sprite(200, game.world.height - 300, 'dude');
    player.tint = 0xf08080;
    player2 = game.add.sprite(500, game.world.height - 300, 'dude');
    player2.tint = 0xffff00;


//  enable physics on player
    game.physics.arcade.enable(player);
    game.physics.arcade.enable(player2);
//  player physics properties, slight bounce
    player.body.bounce.y = 0.1;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    player2.body.bounce.y = 0.1;
    player2.body.gravity.y = 300;
    player2.body.collideWorldBounds = true;
//  two animations, walking left and right
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    player.animations.add('attackLeft', [0], 10, true);

    player2.animations.add('left', [0, 1, 2, 3], 10, true);
    player2.animations.add('right', [5, 6, 7, 8], 10, true);

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();

    player.jumpCount = 0;
    player2.jumpCount = 0;

    playerJumpkey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    playerW = game.input.keyboard.addKey(Phaser.Keyboard.W);

    jumpCheck = function () {
        if (player.jumpCount < 2) {
            player.body.velocity.y = -200;
            player.jumpCount++;


        }
    };
    jumpCheck2 = function () {
        if (player2.jumpCount < 2) {
            player2.body.velocity.y = -200;
            player2.jumpCount++;


        }
    };
    playerW.onDown.add(jumpCheck2, player2);
    playerJumpkey.onDown.add(jumpCheck, player);
}

function update() {
//  Collide the player and the stars with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(player2, platforms);
    game.physics.arcade.collide(player, player2);


//  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.arcade.overlap(player, null, this);

//  Reset the players velocity (movement)
    player.body.velocity.x = 0;


    if (cursors.left.isDown) {
//  Move to the left
        player.body.velocity.x = -150;


        player.animations.play('left');
        player2.animations.play('left');
    }
    else if (cursors.right.isDown) {
//  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else {
//  Stand still
        player.animations.stop();

        player.frame = 4;
    }

//  Allow the player to double jump if they are touching the ground.
    if (player.body.touching.down){
        player.jumpCount = 0;
    }



    if (cursors.down.isDown) {
        player.body.velocity.y = 200;
    }


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
    if (player2.body.touching.down){
        player2.jumpCount = 0;
    }

    if (playerS.isDown) {
        player2.body.velocity.y = 200;

    }
    if (playerF.isDown) {
        player2.body.velocity.x = -20;
        player2.animations.play('attackLeft');
    }
}