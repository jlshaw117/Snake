import {NotImplementedError} from "./errors";

class BaseObject {

    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
    }

    draw() {
        throw new NotImplementedError(`Draw funtion not implemented for ${this.constructor.name}`);
    }

}

export default BaseObject;