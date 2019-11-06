// let n = 13
// let dpList = [[[]]]
// for (let i = 1; i <= n; i++) {
//   getSum(i, 1, 2, 5, 10)
// }

// function getSum (index, o, t, f, ten) {
//   dpList[index] = DuplicateRemoval([...getIndex(index ,o), ...getIndex(index ,t), ...getIndex(index ,f), ...getIndex(index ,ten)])
// }

// function getIndex (index, count) {
//   if (index - count < 0) {
//     return []
//   }
//   let arr = JSON.parse(JSON.stringify(dpList[index - count]))
//   return arr.map(v => {
//     v.push(count)
//     return v
//   })
// }

// function equalList (l1, l2) {
//   let a1 = l1.slice()
//   let a2 = l2.slice()
//   a1.sort()
//   a2.sort()
//   if(a1.length !== a2.length) {
//     return false
//   }
//   for (let i = 0; i < a1.length; i++) {
//     if (a1[i] !== a2[i]) {
//       return false
//     }
//   }
//   return true
// }

// function DuplicateRemoval (list) {
//   let result = list.reduce((p, n) => {
//     if (p.length !== 0) {
//       for (let i = 0; i < p.length; i++) {
//         if (equalList(p[i], n)) {
//           return p
//         }
//       }
//       p.push(n)
//     } else {
//       p.push(n)
//     }
//     return p
//   }, [])
//   return result
// }

// console.log(dpList[n].length)

let n = 13

data = 1 + Math.floor(n / 2) + Math.floor(n / 5) + Math.floor(n / 10)


console.log(data);
