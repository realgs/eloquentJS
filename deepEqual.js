function deepEqual(val1, val2) {
    if (val1 === val2) return true;
    if (val1 == null || val2 == null || typeof (val1) != 'object' || typeof (val2) != 'object') return false;

    const keys1 = Object.keys(val1), keys2 = Object.keys(val2);
    if (keys1.length != keys2.length) return false;

    for (let key of keys1) {
        if ( !keys2.includes(key) || !deepEqual(val1[key], val2[key])) return false;
    }
    return true;
}
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
console.log(deepEqual(list, list));