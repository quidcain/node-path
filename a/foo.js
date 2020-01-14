const path = require('path');

console.log(`__dirname == ${__dirname}`);
console.log(`__filename == ${ __filename}`);
console.log(`path.resolve('/bar/bae', '/foo', 'test') == ${path.resolve('/bar/bae', '/foo', 'test')}`);
console.log(`path.join('/bar/bae', '/foo', 'test') == ${path.join('/bar/bae', '/foo', 'test')}`);
console.log(`path.join('app/libs/oauth', '/../ssl') == ${path.join('app/libs/oauth', '/../ssl')}`);
console.log(`path.resolve('app') == ${path.resolve('app')}`);
console.log(`path.join(__dirname, 'app') == ${path.join(__dirname, 'app')}`);
console.log(`process.cwd() == ${process.cwd()}`);
console.log(`path.join(process.cwd(), 'app') == ${path.join(process.cwd(), 'app')}`);
console.log(`path.resolve('app') == path.join(process.cwd(), 'app')`);
console.log(`${path.resolve('app')} == ${path.join(process.cwd(), 'app')}`);
