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

function getSum(n1, n2) {   
   var isAnyNegative = function() {   
      return n1 < 0 || n2 < 0;   
   }   
   var promise = new Promise(function(resolve, reject) {   
      if (isAnyNegative()) {   
         reject(Error("Negatives not supported"));   
      }   
      resolve(n1 + n2)
   });   
   return promise;   
} 
getSum(5, 6) .then(function (result) {   
   console.log(result);   
},function (error) {   
   console.log(error);   
});

getSum(5, 6).then(function(result) {   
   console.log(result);   
   return getSum(10,20); 
   // this returns another promise   
},function(error) {   
   console.log(error);   
}).then(function(result) {   
   console.log(result);   
},function(error) {   
   console.log(error);
});    

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

getSum(5, 6).then(function(result) {   
      console.log(result);   
      return getSum(10, 20); 
      //this returns another Promise   
   },function(error) {   
      console.log(error);   
   }).then(function(result) {   
      console.log(result);   
      return getSum(30, 40); 
      //this returns another Promise   
   },function(error) {   
      console.log(error);   
   }).then(function(result) {   
      console.log(result);   
   },function(error) {         
      console.log(error);   
   });   
   console.log("End of script ");   
   
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");