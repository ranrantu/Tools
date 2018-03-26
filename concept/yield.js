function* outer(){
	yield 'start'
	yield* inner()
	yield 'end'
}

function* inner(){
	yield 'inner'
}

var a = outer();

yield outer
