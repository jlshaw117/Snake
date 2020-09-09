import Base from "./base";
import SnakeBody from "./snake_body";

class Snake extends Base {

    constructor(x, y, color) {
        super(x, y, color);
        this.direction = 'N';
        this.body = new SnakeBody(x, y, color);
    }

    draw(screen) {
        this.body.draw(screen);
    }

}

export default Snake;