// Document.querySelector(".jellyfish3").classList.add("invisible");
// Document.querySelector(".jellyfish3").classList.remove("invisible");
// Document.querySelector(".jellyfish3").classList.toggle("invisible");
var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(2100, 1380);
        frameRate(30);




        var centerX = 80;
        var centerY = 60;
        var bodyLength = 85;
        var bodyHeight = 50;
        var centX = 150;
        var centY = 138;
        var bodyL = 112;
        var bodyH = 66;
        var X = 50;
        var Y = 1100;

        var centerx = 900;
        centx = 880;
        var centery = 230;
        centy = 360;

        var Particle = function (position) {
            this.acceleration = new PVector(0, -0.05);
            this.velocity = new PVector(random(-1, 1), random(-1, 0));
            this.position = position.get();
            this.timeToLive = 200;
        };

        Particle.prototype.run = function () {
            this.update();
            this.display();
        };

        Particle.prototype.update = function () {
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            this.timeToLive -= 2;
        };

        Particle.prototype.display = function () {
            stroke(255, 255, 255, 100);
            strokeWeight(2);
            fill(255, 255, 255, 50);
            var radius = (height - this.position.y) / 100;
            ellipse(this.position.x, this.position.y, radius, radius);
        };

        Particle.prototype.isDead = function () {
            if (this.timeToLive < 0) {
                return true;
            } else {
                return false;
            }
        };

        var ParticleSystem = function (position) {
            this.origin = position.get();
            this.particles = [];
        };

        ParticleSystem.prototype.addParticle = function () {
            this.particles.push(new Particle(this.origin));
        };

        ParticleSystem.prototype.run = function () {
            for (var i = this.particles.length - 1; i >= 0; i--) {
                var p = this.particles[i];
                p.run();
                if (p.isDead()) {
                    this.particles.splice(i, 1);
                }
            }
        };

        var Fish = function (position) {
            this.position = position.get();
            this.width = 100;
            this.height = 60;
        };

        Fish.prototype.swim = function () {

            this.position.x += 2.8;
            this.position.y -= 0.5;
            if (this.position.x > 1800) {
                this.position.x = -120;
            }

            if (this.position.y < 0) {
                this.position.y = 600;
            }

        };

        Fish.prototype.display = function () {
            noStroke();
            fill(255, 102, 0);
            ellipse(this.position.x, this.position.y, this.width, this.height);
            triangle(this.position.x - this.width / 2 + 10, this.position.y,
                this.position.x - this.width * 0.75, this.position.y + this.height / 3,
                this.position.x - this.width * 0.75, this.position.y - this.height / 3);
            fill(255, 191, 0);
            triangle(this.position.x + this.width / 2 + 10, this.position.y - this.height / 12,
                this.position.x + this.width / 2 - 2, this.position.y + this.height / 8,
                this.position.x + this.width / 2 - 2, this.position.y - this.height / 8);
            triangle(this.position.x + this.width / 2 + 10, this.position.y - this.height / 12 + 18,
                this.position.x + this.width / 2 - 10, this.position.y + this.height / 8 + 10,
                this.position.x + this.width / 2 - 12, this.position.y - this.height / 8 + 10);
            fill(255, 255, 255);
            ellipse(this.position.x + this.width / 2 - 10, this.position.y - 11, 15, 20);
            fill(0, 0, 0);
            ellipse(this.position.x + this.width / 2 - 7, this.position.y - 10, 6, 6);
        };

        Fish.prototype.getMouthPosition = function () {
            return new PVector(this.position.x + this.width / 2 + 10, this.position.y);
        };

        var fish = new Fish(new PVector(width / 2, height / 2));
        var bubbles = new ParticleSystem(fish.getMouthPosition());

        draw = function () {
            background(69, 176, 255, 25);

            if (frameCount % 17 === 1) {
                bubbles.addParticle();
            }

            bubbles.addParticle();
            bubbles.origin.set(fish.getMouthPosition());
            bubbles.run();
            fish.swim();
            fish.display();

            var bodyColor = color(centerX / 4 + 85, centerY / 3 + 155, centerX / 3 + 60);

            noStroke();
            fill(bodyColor);

            ellipse(centerX, centerY, bodyLength, bodyHeight); // =bodyF1
            fill(centx / 3, centerX / 3, centY / 4);
            ellipse(centX, centY, bodyL, bodyH);
            fill(centx / 3, centy / 5, centY / 4);
            ellipse(centX, centerY, bodyLength, bodyHeight);

            fill(centerx / 3, centX / 5, centY / 5);
            ellipse(centerx, centery, bodyLength, bodyHeight); // =bodyF3++
            ellipse(centx, centy, bodyL, bodyH);
            fill(centx / 3, centX / 5, centY / 5);
            ellipse(centx, centery, bodyLength, bodyHeight);

            var tailWidth = bodyLength / 4;
            var tailHeight = bodyHeight / 2;
            var tailW = bodyL / 4;
            var tailH = bodyH / 2;

            fill(centerX, 129, centerY);
            //<!--other 3 fishes!!>


            var tailWidth = bodyLength / 4;
            var tailHeight = bodyHeight / 2;
            var tailW = bodyL / 4;
            var tailH = bodyH / 2;
            triangle(centerX - bodyLength / 2, centerY,
                centerX - bodyLength / 2 - tailWidth, centerY - tailHeight,
                centerX - bodyLength / 2 - tailWidth, centerY + tailHeight); //=tail


            triangle(centX - bodyL / 2, centY,
                centX - bodyL / 2 - tailW, centY - tailH,
                centX - bodyL / 2 - tailW, centY + tailH); //=tail  
            triangle(centX - bodyLength / 2, centerY,
                centX - bodyLength / 2 - tailWidth, centerY - tailHeight,
                centX - bodyLength / 2 - tailWidth, centerY + tailHeight);

            triangle(centerx - bodyLength / 2, centery,
                centerx - bodyLength / 2 - tailWidth, centery - tailHeight,
                centerx - bodyLength / 2 - tailWidth, centery + tailHeight); //=tail

            triangle(centx - bodyL / 2, centy,
                centx - bodyL / 2 - tailW, centy - tailH,
                centx - bodyL / 2 - tailW, centy + tailH); //=tail  
            triangle(centx - bodyLength / 2, centery,
                centx - bodyLength / 2 - tailWidth, centery - tailHeight,
                centx - bodyLength / 2 - tailWidth, centery + tailHeight); //other 3 here
            // eye
            fill(33, 33, 33);
            ellipse(centerX + bodyL / 4, centerY, bodyHeight / 5, bodyHeight / 5);


            ellipse(centX + bodyL / 4, centY, bodyH / 5, bodyH / 5);



            ellipse(centX + bodyL / 4, centerY, bodyHeight / 5, bodyHeight / 5);


            ellipse(centerx + bodyL / 4, centery, bodyH / 5, bodyH / 5);

            // eye


            ellipse(centx + bodyLength / 4, centy, bodyHeight / 5, bodyHeight / 5);


            ellipse(centx + bodyLength / 4, centery, bodyHeight / 5, bodyHeight / 5);


            fill(245, 208, 208);
            ellipse(centerX + bodyLength / 4, centerY, bodyHeight / 19, bodyHeight / 15);
            rect(centX + bodyL / 4, centY, bodyH / 25, bodyH / 25);

            ellipse(centerx + bodyLength / 4, centery, bodyHeight / 19, bodyHeight / 15);
            rect(centx + bodyL / 4, centy, bodyH / 25, bodyH / 25);


            centerX += 3;
            centX += 2.2;
            centerY += 0.8;
            centY += 1.2;

            centerx += 4.5;
            centx += 5.8;
            centery += 1.5;
            centy += 1.9;
            if (centerX > 1500) {
                centerX = 0;
            }
            if (centX > 1500) {
                centX = 0;
            }
            if (centerY > 1000) {
                centerY = 30;
            }
            if (centY > 1000) {
                centY = 30;
            }

            if (centerx > 1500) {
                centerx = 50;
            } //for another3
            if (centx > 1500) {
                centx = 80;
            }
            if (centery > 1000) {
                centery = 130;
            }
            if (centy > 1000) {
                centy = 230;
            }



            stroke(212, 217, 222);
            noFill();
            ellipse(430, Y * 2, 10, 10);
            Y -= 1.3;
            X += 0.3;
            ellipse(365, Y * 3, 10, 10);
            ellipse(Y * 16, X, 11, 11);
            ellipse(X * 19, 80, 8, 7);
            ellipse(820, Y + 30, 10, 10);
            Y -= 1;
            X += 0.5;
            ellipse(65, Y - 20, 10, 10);
            ellipse(Y, X, 11, 11);
            ellipse(530, Y, 8, 7);
            ellipse(X * 20, Y, 10, 10);
            Y -= 2;
            X += 0.3;
            ellipse(65, Y, 10, 10);
            ellipse(Y + X, X, 11, 11);
            ellipse(X * 30, 80, 8, 7);
            ellipse(900, Y * 1.2, 10, 10);
            Y -= 1.5;
            X += 0.6;
            ellipse(650, Y * 4, 10, 10);
            ellipse(700, X, 11, 11);
            ellipse(X, 590, 8, 7);
            ellipse(700, Y + 80, 10, 10);
            Y -= 0.9;
            X += 1.3;
            ellipse(465, Y * 1.5, 10, 10);
            ellipse(830, X * 2, 11, 11);
            ellipse(910, Y * 1.1, 8, 7);

            if (Y < 0) {
                Y = 1100;
            } // for other 3
            if (X > 1500) {
                X = 50;
            }
        };





    }
};


// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas");
canvas.width = window.innerWidth;
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc);