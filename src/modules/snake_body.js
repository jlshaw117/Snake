import Base from "./base";
import SnakePiece from "./snake_piece";
import Snake from "./snake";

class SnakeBody extends Base {

    constructor(x, y, color) {
        super(x, y, color);
        this.pieces = [new SnakePiece(x, y, color)];
    }

    draw(screen) {
        this.pieces.forEach(piece => {
            piece.draw(screen);
        });
    }

}

export default SnakeBody;