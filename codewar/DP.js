// /**
//  * 
//  * @param {String} string 
//  */
// function isPangram(string) {
//     //...
//     return 'qwertyuiopasdfghjklzxcvbnm'.split('').every(item => string.toLowerCase().includes(item))
// }
/**
 * 
 * @param {String} string 
 */
function isPangram(string) {
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length;
}

console.log(isPangram('This is not a pangram.'));