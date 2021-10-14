import Door from "../Models/Door";
import Window from "../Models/Window";

const MINI_WALL = 100;
const MAX_WALL = 1500;
const MAX_PERCENT_AREA_WINDOW_DOOR = .5;
const NEED_DIFF_HEIGHT_DOOR_WALL = 30;

class WallService {
    constructor(values) {
        this.values = values;
        this.areaTotal = [];
    }

    static checkRules(values) {

        return new WallService(values).startCheck();

    }

    startCheck() {
        let indexAux;
        try {

            this.values.map((value, index) => {
                indexAux = index;
                value = value();
                this.checkWidthWallRule(value);
                this.checkHeightWallRule(value);
                this.saveAreaWall(value, index);
                this.checkTotalAreaWindowDoor(value, index);
                this.checkWallHeightComparedDoor(value);

            });

        } catch (e) {
            console.log(indexAux, e);
        }

    }

    checkWidthWallRule(value) {
        if (value.width < MINI_WALL) {
            throw 'tamanho minimo comprimento';
        }

        if (value.width > MAX_WALL) {
            throw 'tamanho maximo comprimento';
        }
    }

    checkHeightWallRule(value) {
        if (value.height < MINI_WALL) {
            throw 'tamanho minimo altura';
        }

        if (value.height > MAX_WALL) {
            throw 'tamanho maximo altura';
        }
    }

    saveAreaWall(value, index) {
        this.areaTotal[index] = value.width * value.height;
    }

    checkTotalAreaWindowDoor(value, index) {

        const wallAreaTotal = this.areaTotal[index];

        const doorAreaTotal = value.door * Door.area;
        const windowAreaTotal = value.window * Window.area;
        const doorWindowAreaTotal = doorAreaTotal + windowAreaTotal;

        if ((wallAreaTotal * MAX_PERCENT_AREA_WINDOW_DOOR) < doorWindowAreaTotal) {
            throw 'A area das portas e janelas nao podem ser maior que ...'
        }
    }

    checkWallHeightComparedDoor(value) {
        if (value.door === undefined) {
            return;
        }

        const heightDiff = value.height - Door.measures.height;

        if (heightDiff < NEED_DIFF_HEIGHT_DOOR_WALL) {
            throw 'A parede deve ter uma diferenca de altura ....'
        }
    }

}

export default WallService;