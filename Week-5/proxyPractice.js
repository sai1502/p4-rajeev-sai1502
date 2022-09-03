const target = {
    name: 'sai',
};
const handler = {};
const proxy = new Proxy(target, handler);

console.log(proxy.name);