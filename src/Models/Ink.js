const PAINT_PER_LITER = 50000;
const INK_AVAILABLE = [
    0.5,
    2.5,
    3.6,
    18,
];

class Ink {

    static get inkAvailable() {
        return INK_AVAILABLE;
    }

    static get paintPerLiter() {
        return PAINT_PER_LITER;
    }

    static paintAreaCollection() {
        const collection = [];

        INK_AVAILABLE.map((value) => {

            collection.push(
                value * PAINT_PER_LITER
            );

        });

        return collection;
    }

    static areaPaintToInk(value) {
        return value / PAINT_PER_LITER;
    }

}

export default Ink;