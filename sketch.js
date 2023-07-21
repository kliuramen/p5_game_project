let chickYPos = 406;
let gravity = 2;
let speed = 0;
let score = 0;
let mapSpeed = 1;

let chickImage;
let haybale1Image;
let haybale2Image;
let haybale3Image;

let imageUsed;
let obstacleXPos = 1100;

let redLeft, redRight, redTop, redBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

let state = 1;

function preload() {
    chickImage = loadImage("images/chicken.png");
    haybale1Image = loadImage("images/haybale_1.png");
    haybale2Image = loadImage("images/haybale_2.png");
    haybale3Image = loadImage("images/haybale_3.png");
}


function setup() {
    createCanvas(1000, 500);
    background(255, 255, 255);
}

function draw() {
    if (state == 1) {
        background(255, 255, 255);


        // Road
        fill(0, 0, 0);
        rect(0, 450, 1000, 50);


        // Yellow Boxes
        fill(255, 255, 0);
        rect(30, 20, 55, 55);


        // Chicken
        image(chickImage, 100, chickYPos, 50, 50);
        //rect(100, chickYPos, 50, 50);


        //if the sprite is off the ground, the sprite will move down
        if (chickYPos <= 410) {
            chickYPos += gravity;
        }

        //score
        fill(0);
        textSize(20);
        text("Score: " + score, 20, 100);

        // Obstacles
        let rand = random(0, 3);
        // if (rand == 0)
        // {
        //     imageUsed = haybale1Image;
        // }

        // else if (rand == 1)
        // {
        //     imageUsed = haybale2Image;
        // }
        // else if (rand == 2)
        // {
        //     imageUsed = haybale3Image;
        // }

        image(haybale1Image, obstacleXPos, 410, 50, 50);
        obstacleXPos -= 5 * mapSpeed;

        if (obstacleXPos <= -50) {
            obstacleXPos = 1050;
            mapSpeed *= 1.1;
            score++;
        }

        redLeft = 100;
        redRight = 150;
        redTop = chickYPos;
        redBottom = chickYPos + 20;

        enemyLeft = obstacleXPos;
        enemyRight = obstacleXPos + 20;
        enemyTop = 410;
        enemyBottom = 410 + 20;

        if (redLeft > enemyRight || redRight < enemyLeft || redTop > enemyBottom || redBottom < enemyTop) {
            //no collision
        } else {
            // collision
            // fill(random(255), random(255), random(255));
            // textSize(22);
            // text("bro ur trash my guy, touch grass", 140, 480);
            state = 2;
        }
    }
    else if (state == 2) {
        background(0);
        fill(random(255), random(255), random(255));
        textSize(32);
        text("GAME OVER", 200, 200);
        fill(255, 0, 0);
        rect(150, 300, 200, 200);
        fill(0);
        textSize(20)
        text("Reset", 175, 350);
        text("Final Score: " + score, 175, 400);
    }
}

//jump
function keyPressed() {
    if (keyCode == 32 && chickYPos >= 410) {
        chickYPos -= 100;
        speed = 2;
    }
}

function mouseClicked() {
    if (state == 2) {
        if (mouseX > 150 && mouseX < 350 && mouseY < 500 && mouseY > 300) {
            state = 1;
            obstacleXPos = 1050;
        }
    }
}