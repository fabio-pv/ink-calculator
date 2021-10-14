const WIDTH = 80;
const HEIGHT = 190;

class Door {

    static get measures() {
        return {
            width: WIDTH,
            height: HEIGHT,
        };
    }

    static get area() {
        return WIDTH * HEIGHT;
    }

}

export default Door;