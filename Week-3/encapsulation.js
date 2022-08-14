function createStack(){
    const items = [];
    return{
        items: [],
        push(item){
            items.push(item);
        },
        pop(){
            items.pop();
        }
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();


console.log(stack.items);