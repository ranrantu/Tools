var a = require('../common/index.js');
const log = console.log;

// const sum = (...args) => {
// 	this._args = [...args]
// 	return loop(...args2) => {
// 		if([...args2].length === 1 || ![...args2].length){
// 			let sum = 0;
// 			return plus(...this._args,...args2);
// 		}else{
// 			this._args = this._args.concat([...args2]);
// 			return loop(...args2);
// 		}
// 	}
// }

const plus = (...args) => {
	return [...args].reduce((prev,next)=>{
		return prev + next;
	},0);
}

const thunk = (a,b) => {
	return (c) => {
		return a+b+c;
	}
}

// console.log(sum(1,2)(3));
log(thunk(1,2)(3));