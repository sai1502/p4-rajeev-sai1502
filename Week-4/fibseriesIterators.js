let Fib = (n) => ({
    [Symbol.iterator]: () => {
        let i = 1;
        let i = 0;
        let old = 0;
        let new1 = 0;
        return {
            next: () => {
                if(i++ <= n){
                    [old, new1] = [new1, (old + new1) || 1];
                    return {value: old, done: false}
                }else{
                    return {done : true}
                }
            }
        }
    }
});

for(let num of Fib(6)){
    console.log(num);
}