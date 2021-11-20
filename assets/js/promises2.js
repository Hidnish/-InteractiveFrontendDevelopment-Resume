const promise1 = Promise.resolve('Promise 1 complete');
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 complete');
    }, 2000);
})

// promise1.then(result => console.log(result));
// promise2.then(result => console.log(result));

Promise.all([promise1, promise2]).then(result => console.log(result));
// only the first one to complete
Promise.race([promise1, promise2]).then(result => console.log(result));