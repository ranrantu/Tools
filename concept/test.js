const log = console.log;
var name = '123'

function foo(){
	name = 123;
	log(global.name)
	// var name = '456';
	log(name)
}

foo();