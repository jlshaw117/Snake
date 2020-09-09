import {LENGTH} from "../utilities/constants";
import Base from "./base";

class SnakePiece extends Base {

    constructor(x, y, color) {
        super(x, y, color);
    }

    draw(screen) {
        screen.beginPath();
        screen.fillStyle = this.color;
        screen.fillRect(this.x, this.y, LENGTH, LENGTH);
        screen.closePath();
    }

}

export default SnakePiece;