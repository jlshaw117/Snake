import {NotImplementedError} from "../utilities/errors";

class BaseObject {

    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw() {
        throw new NotImplementedError(`Draw funtion not implemented for ${this.constructor.name}`);
    }

}

export default BaseObject;