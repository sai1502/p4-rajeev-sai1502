function getNumber() {
    return new Promise((resolve, reject) => {
        let randomNum = Math.floor((Math.random() * 100) + 1);
        console.log(randomNum);
        setTimeout(() => {
            if (randomNum % 5 == 0) {
                reject(`The promise has been rejected as the number is divisible by 5, and the number is ${randomNum}`);
            } else {
                resolve(`The promise has been resolved as the number is not divisible by 5, and the number is ${randomNum}`)
            }
        }, 2000)
    })
}
getNumber()
    .then((result) => console.log(result));