const CM2_TO_M2 = 10000;
const M_TO_CM = 100;

class ConvertUtil {
    static cm2ToM2(value) {
        return value / CM2_TO_M2;
    }

    static mToCm(value) {
        return value * M_TO_CM;
    }
}

export default ConvertUtil;