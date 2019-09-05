const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const obj = { foo: 1, bar: 2 };

suite.
  add('Object spread', function() {
    ({ baz: 3, ...obj });
  }).
  add('Object.assign()', function() {
    Object.assign({ baz: 3 }, obj);
  }).
  on('cycle', function(event) {
    console.log(String(event.target));
  }).
  on('complete', function() {
    console.log(`${this.filter('fastest').map('name')} is faster 🤯`);
  }).
  run({ 'async': true });