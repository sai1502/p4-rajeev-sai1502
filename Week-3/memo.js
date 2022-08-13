// function for memoise 
function memoise(fn){
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        if(cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    };
}


function add(a,b){
    return a + b
}

//Test purpose to check the time it takes to excecute.
function time(fn){
    console.time();
    fn();
    console.timeEnd();
}


const addM = memoise(add);

time(() => console.log(addM(125, 147)));
time(() => console.log(addM(125, 147)));
time(() => console.log(addM(125, 147)));
time(() => console.log(addM(125, 147)));
time(() => console.log(addM(125, 147)));
time(() => console.log(addM(125, 147)));