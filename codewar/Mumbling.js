function accum(s) {
	// your code
  return s.split('').map((v,i)=>v.toUpperCase()+v.toLowerCase().repeat(i)).join('-')
}

console.log(accum('ZpglnRxqenU'));
