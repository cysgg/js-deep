/**
 * 
 * @param {Array} array1 
 * @param {Array} array2 
 */
function inArray(array1, array2) {
    //...
    return array1.filter(item => array2.some(str => str.match(item))).sort()
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2));
console.log();
