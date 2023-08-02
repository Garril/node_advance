const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', (e) => {
      console.log('B', e);
    });
  }
});
myEmitter.on('event', (e) => {
  console.log('A', e);
});
myEmitter.once('event', (e) => {
  console.log('C', e);
});

myEmitter.emit('event', { age: 18, name: 'test' });
myEmitter.emit('event', 'just a string');
// Prints:
// B { age: 18, name: 'test' }
// A { age: 18, name: 'test' }
// C { age: 18, name: 'test' }
// B just a string
// A just a string