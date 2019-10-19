
let obj1 = {
    "name": "cys",
    "age": 18,
    "sex": "man",
    [Symbol.iterator]: function () {
        const self = this;
        let keys = Object.keys(obj1)
        let index = 0;
        let len = keys.length
        return {
            next: function () { //实现next
                if (index < len) {
                    return { //遍历中
                        value: self[keys[index++]] + 'hello',
                        done: false //表示遍历没有结束,done设置为fasle
                    }
                } else {
                    return { //遍历结束
                        value: undefined, //结束后，返回undefined
                        done: true //done设置为true，表示遍历结束
                    }
                }
            }
        }
    }
}

let obj2 = {
    "name": "cysg",
    "age": 19
}

let arr = [1,2,3,4]
let s = new Set([1,2,3,...arr])
console.log(s);


obj1 = {
    ...obj1,
    ...s
}
console.log(obj1);



// let c = [...a,...b]
// let d = {}
// let e = {
//     '1' : 3
// }

// let f = {
//     ...d,
//     ...e
// }

// console.log(a,b);
// console.log(...a,...b);
// console.log(f);


// var a = [1, 2]
// var b = [1, 2]
// Object.defineProperty
// it = function () {
//         const self = this;
//         let index = 1;
//         return {
//             next: function () { //实现next
//                 if (index >= 0) {
//                     return { //遍历中
//                         value: self[index--],
//                         done: false //表示遍历没有结束,done设置为fasle
//                     }
//                 } else {
//                     return { //遍历结束
//                         value: undefined, //结束后，返回undefined
//                         done: true //done设置为true，表示遍历结束
//                     }
//                 }
//             }
//         }
//     }


//     console.log(...a);
// a.prototype[Symbol.iterator] = function () {
//     const self = this;
//     let index = 1;
//     return {
//         next: function () { //实现next
//             if (index >= 0) {
//                 return { //遍历中
//                     value: self[index--],
//                     done: false //表示遍历没有结束,done设置为fasle
//                 }
//             } else {
//                 return { //遍历结束
//                     value: undefined, //结束后，返回undefined
//                     done: true //done设置为true，表示遍历结束
//                 }
//             }
//         }
//     }
// }

// console.log(it);

// var obj={
//     0:"rrr",
//     1:"444",
//     //实现[Symbol.iterator]属性方法
//     [Symbol.iterator]:function(){
//         const self = this;
//         let index=1;
//         return {
//           next:function(){//实现next
//             if(index>=0){
//               return {//遍历中
//                 value:self[index--],
//                 done: false//表示遍历没有结束,done设置为fasle
//               }
//             }else{
//               return{//遍历结束
//                 value:undefined,//结束后，返回undefined
//                 done: true//done设置为true，表示遍历结束
//               }
//             }
//           }
//         }
//      } 
// };

// let c = [...a, ...obj]

// console.log(c);