// Punto 1
const encrypt = (key, msg) => {return msg.map(x => x+key)};
const decrypt = (key, msg) => {return msg.map(x => x-key)};

const secret = (msg, func, key) => {return func(key, msg)};

// Punto 2
const mcd = (a, b) => a == b ? a : mcd(Math.min(a, b), Math.abs(a-b));

// Punto 3
const fib = (n) => n <= 1 ? n : fib(n-1) + fib(n-2);