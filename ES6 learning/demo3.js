//this
class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        setTimeout(function(){
            console.log(this.type + ' says ' + say)
        }, 1000)
    }
	//第一种是将this传给self,再用self来指代this
	says1(say){
		var self = this;
		setTimeout(function(){
			console.log(self.type + " says1 " + say);
		},1000)
	}
	//第二种方法是用bind(this),即
	says2(say){
		setTimeout(function(){
			console.log(this.type + " says2 " + say);
		}.bind(this),1000);
	}
	//第三种方法是箭头函数
	says3(say){
        setTimeout( () => {
            console.log(this.type + ' says ' + say)
        }, 1000)
    }
}


 var animal = new Animal()
 animal.says('hi')  //undefined says hi
 animal.says1('hi')  //animal says hi
 animal.says2('hi')  //animal says hi
 animal.says3('hi')  //animal says hi
 
console.log("--------------------------------------------------------");
 
// generator
function* hiGenerator(){  
  
yield 'hi';  
  
yield 'ES5';  
  
return '!';  
  
}  
  
var hi = hiGenerator();  
  
console.log(hi); //hiGenerator {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}  
  
console.log(hi.next()); //Object {value: "hi", done: false}  
  
console.log(hi.next()); //Object {value: "ES5", done: false}  
  
console.log(hi.next()); //Object {value: "!", done: true}  

console.log("--------------------------------------------------------");

//yield
function* add(c, d){  
  
var a = 0;  
  
a = yield a + c;  
  
a = yield a + d;  
  
return  
  
}  
  
var sum = add(1, 2);  
  
console.log(sum); //add {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}  
  
console.log(sum.next()); //Object {value: 1, done: false}  
  
console.log(sum.next()); //Object {value: NaN, done: false}  
  
console.log(sum.next()); //Object {value: undefined, done: true}   

console.log("--------------------------------------------------------");
 
 function* add(c, d){  
  
var a = 0;  
  
a = yield a + c;  
  
a = yield a + d + 1;  
  
return  
  
}  
  
var sum = add(1, 2);  
  
console.log(sum); //add {[[GeneratorStatus]]: "suspended", [[GeneratorReceiver]]: Window}  
  
console.log(sum.next()); //Object {value: 1, done: false}  
  
console.log(sum.next(1)); //Object {value: 4, done: false}  
  
console.log(sum.next(3)); //Object {value: undefined, done: true}  

console.log("--------------------------------------------------------");
 
 
 