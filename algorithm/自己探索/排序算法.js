function maopao (arr1) {
  let arr = arr1.slice(0),
  len = arr.length
  for(let i = 0; i < len; i++) {
    let flag = false
    for(let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        flag = true
      }
    }
    if (!flag) {
      break
    }
  }
  return arr
}

function charu (arr1) {
  let arr = arr1.slice(0),
      len = arr.length
  for(let i = 1; i < len; i++) {
    let val = arr[i]
    let j = i - 1
    for(; j >= 0; --j) {
      if (arr[j] > val) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = val
  }
  return arr
}

function kuaipai (arr1) {
  let arr2 = arr1.slice(0)
  kuaipai_c(arr2, 0, arr2.length - 1)
  return arr2
}

function kuaipai_c (a, p, r) {
  if (p >= r) {
    return
  }
  let curVal = a[r],
      i = p,
      j = i,
      q = 0;
  while (j < r) {
    if (a[j] < curVal) {
      [a[i++], a[j]] = [a[j], a[i]]
    }
    j++
  }
  [a[i], a[r]] = [a[r], a[i]]
  q = i
  kuaipai_c(a, r, q-1)
  kuaipai_c(a, q+1, r)
}

function guibing (arr1) {
  let arr2 = arr1.slice(0)
  guibing_c(arr2, 0, arr2.length-1)
  return arr2
}

function guibing_c (a, p, r) {
  if (p >= r) {
    return
  }
  let q = Math.floor((p + r) / 2)
  
  guibing_c(a, p, q)
  guibing_c(a, q+1, r)
  guibing_sort(a, p, q, r)
}

function guibing_sort (a, p, q, r) {
  let i = p,
      j = q+1,
      k = 0,
      tmp = [];
  while ( i <= q && j <= r) {
    if (a[i] <= a[j]) {
      tmp[k++] = a[i++]
    } else {
      tmp[k++] = a[j++]
    }
  }

  let start = i,
      end = q;
  if (j <= r) {
    start = j
    end = r
  }

  while (start <= end) {
    tmp[k++] = a[start++]
  }
  for(i = 0; i <= r - p; i++) {
    a[p+i] = tmp[i]
  }
}



testArr = [4,5,6,1,2,3]

console.time('maopao')
console.log(maopao(testArr))
console.timeEnd('maopao')
console.log(testArr,'------------')


console.time('charu')
console.log(charu(testArr))
console.timeEnd('charu')
console.log(testArr,'------------')


console.time('maopao1')
console.log(maopao(testArr))
console.timeEnd('maopao1')
console.log(testArr,'------------')

console.time('kuaipai')
console.log(kuaipai(testArr))
console.timeEnd('kuaipai')
console.log(testArr,'------------')


console.time('guibing')
console.log(guibing(testArr))
console.timeEnd('guibing')
console.log(testArr,'------------')