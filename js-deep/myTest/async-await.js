// let a;
// async function f(){
//     // await Promise.reject('error');
//     return await 1;
// }

// f().then(v =>{
//     console.log(v);
// })

const delay = timeout => new Promise(resolve=> setTimeout(resolve, timeout));
async function f(){
    await delay(1000);
    return await 'done';
}

f().then(v => console.log(v)); // 等待6s后才输出 'done'