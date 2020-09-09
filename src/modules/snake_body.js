import Base from "./base";
import SnakePiece from "./snake_piece";

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

    addPiece(x, y) {
        this.pieces.push(new SnakePiece(x, y, this.color));
    }

    removePiece() {
        this.pieces.shift();
    }

}

export default SnakeBody;