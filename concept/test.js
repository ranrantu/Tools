var a = 1;
function fun(){
	var b = 2;
	return function (){
		var c = 3;
		return function (){
			console.log(a,b,c);
		}()
	}()
}

fun();