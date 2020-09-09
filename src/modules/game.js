import Snake from "./snake";
import {FPS} from "../utilities/constants";

class Game {

    constructor() {
        this.score = 0;
        this.canvas = document.getElementById("screen");
        this.screen = this.canvas.getContext('2d');
        this.draw = this.draw.bind(this);
        this.snake = new Snake(this.canvas.width / 2, this.canvas.height / 2, "white");
    }

    draw() {
        setTimeout(() => {
            // Clear the canvas
            this.canvas.width = this.canvas.width;
            this.snake.draw(this.screen);
            this.snake.move();
            requestAnimationFrame(this.draw);
        }, 1000 / FPS);
    }

    play() {
        document.addEventListener("keydown", event => {
            console.log(event.key);
            switch(event.key) {
                case "w":
                    this.snake.direction = "N";
                    break;
                case "d":
                    this.snake.direction = "E";
                    break;
                case "s":
                    this.snake.direction = "S";
                    break;
                case "a":
                    this.snake.direction = "W";
                    break;
            }
        });
        requestAnimationFrame(this.draw);
    }

}

export default Game;