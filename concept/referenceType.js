var { log } = require('../common/index.js');

// var test = null;

// Object.defineProperty(this,'test',{
// 	get:function (){
// 		console.log('get!');
// 		return test;
// 	}
// });

var foo = {};
var a = 0 
Object.defineProperty(foo,'bar',{
	get:function (){
		console.log(a++)
		return function (){
		}
	}
})

foo.bar();
(foo.bar)();

(foo.bar = foo.bar)();