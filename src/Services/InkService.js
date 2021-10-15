import Ink from "../Models/Ink";

class InkService {
    constructor(area) {
        this.area = area;
        this.areRaw = area;
        this.inksNeed = [];
    }

    static start(area) {
        return new InkService(area);
    }

    calcInks() {
        const inksPaintTotal = Ink.paintAreaCollection();

        const closest = inksPaintTotal.reduce((prev, curr) => {
            return (Math.abs(curr - this.area) < Math.abs(prev - this.area) ? curr : prev);
        });

        this.inksNeed.push(
            Ink.areaPaintToInk(closest)
        )

        this.area -= closest;

        if (this.area <= 0) {
            return this;
        }

        return this.calcInks();
    }
}

export default InkService;