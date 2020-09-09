import Base from "./base";
import SnakeBody from "./snake_body";
import {LENGTH} from "../utilities/constants";

class Snake extends Base {

    constructor(x, y, color) {
        super(x, y, color);
        this.direction = "N";
        this.body = new SnakeBody(x, y, color);
    }

    draw(screen) {
        this.body.draw(screen);
    }

    move() {
        switch(this.direction) {
            case "N":
                this.y += LENGTH;
                break;
            case "E":
                this.x += LENGTH;
                break;
            case "S":
                this.y -= LENGTH;
                break;
            case "W":
                this.x -= LENGTH;
                break;
        }
        this.body.addPiece(this.x, this.y);
        this.body.removePiece();
    }
}

export default Snake;