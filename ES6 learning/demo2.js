//class
class Polygon { 
   constructor(height, width) { 
      this.h = height; 
      this.w = width;
   } 
   test() { 
      console.log("The height of the polygon: ", this.h) 
      console.log("The width of the polygon: ",this. w) 
   } 
   
   static sayHi(param){
		console.log("Hello,I'm polygon! (static method)"+param);
   }
} 

//creating an instance  
var polyObj = new Polygon(10,20); 
polyObj.test();      
Polygon.sayHi("OK!");

// instanceof
function F(){
}
class C{
	
}
var f1 = new F();
var c1 = new C();
console.log(f1 instanceof F);
console.log(c1 instanceof C);

// extends
class Root { 
   test() { 
      console.log("call from parent class") 
   } 
} 
class Child extends Root {} 
class Leaf extends Child  {} 
//indirectly inherits from Root by virtue of inheritance {} 
var obj = new Leaf();
obj.test();

// Class Inheritance and Method Overriding and super keyword

class PrinterClass { 
   doPrint() { 
      console.log("doPrint() from Parent called… ");
   }
}
class StringPrinter extends PrinterClass { 
   doPrint() { 
	  super.doPrint();
      console.log("doPrint() is printing a string…"); 
   } 
} 
var obj = new StringPrinter(); 
obj.doPrint();
 
// promises & callbacks
function notifyAll(fnSMS,fnMail){
	var msg = "I'am msg!!!";
	console.log("start...");
	fnSMS(msg);
	fnMail(msg);
	console.log("done");
}
function funSMS(msg){
	console.log("sms:"+msg);
}
function funMail(msg){
	console.log("mail:"+msg);
} 

console.log("#######  synchronous invoking #######");
notifyAll(funSMS,funMail);  // synchronous invoking
console.log("#######  asynchronous invoking #######");
setTimeout(function(){
	var msg = "I'am msg!!!";
	console.log("async start...");
	setTimeout(funSMS,0);
	setTimeout(funMail,0);
	console.log("--- here --- you may think ALL has been done, but...");
},0);  // asynchronous invoking


//ES6 Promise
var promise = new Promise(function(resolve, reject) {
  console.log('before resolved');
  resolve();
  console.log('after resolved');
  reject();
});
promise.then(function() {
  console.log('resolved');
}).then(function(){
	console.log('rejected');
});
console.log('outer');

