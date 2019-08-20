/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
    let num = 0
    if(X > Y){
        return X-Y
    }
    else{
        while(X != Y){
            if(Y < X){
                Y++
                num++
            }
            else if(Y % 2 !== 0){
                num++
                Y ++
            }else{
                num++
                Y /= 2
            }
        }
    }
    return num
};



console.log(brokenCalc(1,10));
console.log(10/11);

