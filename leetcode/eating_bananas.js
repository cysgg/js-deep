// var minEatingSpeed = function(piles, H) {
//     let sum = piles.reduce((a,b)=>{
//         return a + b
//     })
//     let minSpeed = Math.ceil(sum / H)
//     let maxSpeed = Math.max(...piles)
//     if(H <= piles.length){
//         return maxSpeed
//     }
//     let speed = minSpeed
//     do{
//         if(isSuccess(piles,H,speed)){
//             break
//         }
            
//     }while(speed++ && speed < maxSpeed);
//     return speed;
//     function isSuccess(piles,H,speed){
//         let sum = 0
//         piles.forEach(a=>{
//             sum += Math.ceil(a/speed)
//         })
        
//         return sum <= H;
        
//     }
// };
var piles = [3,6,7,11], H = 8;
// console.log(minEatingSpeed(piles,H));

// const IMath = {} //namesapce

// /**
//  * @param:number NAN
//  * @return:number 返回最大值
//  */
// IMath.max = function(){
//     // console.log(arguments,arguments.length);
//     for(let i = 0; i < arguments.length; i++){
//         if(typeof arguments[i] !== 'number'){
//             return NaN;
//         }
//     }
// }
// console.log(IMath.max([3,6,7,11]));


var minEatingSpeed = function(piles, H) {
    let lo =1,
        hi = Math.max(...piles);
    while(lo <= hi){

        if(canEatAllBananas(piles,H,lo)){
            // hi--;
            return lo
        }
        lo++
    }
    return lo;
}
function canEatAllBananas(piles,H,low) {
    let h = 0;
    for(let pile of piles){
        h += Math.ceil(pile / low)
    }
    return h <= H
}
console.log(minEatingSpeed(piles,H));

// - koko
//     while(1->max) 每把香蕉吃完的小时数加起来
//        piles => pile => match.ceil(pile/low)
// - 减少尝试 1 -> max 二分