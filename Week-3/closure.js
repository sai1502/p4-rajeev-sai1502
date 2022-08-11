function createIncrement(){
    let count = 0;
    function increment(){
        count++;
    }
    let message = `Count is ${count}`;
    function log(){
        console.log(message);
    }
    return [increment,log];
}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log();

//o/p : 0   
// createIncrement() ==> increment() 3 times ==> log() ==> "count is 0" will be the output 