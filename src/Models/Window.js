const WIDTH = 200;
const HEIGHT = 120;

class Window {

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

export default Window;