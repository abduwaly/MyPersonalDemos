

var msg = "hello es!";
console.log(msg);

let msg2 = "i am let";
console.log(msg2);

const msg3 = "i am const";
console.log(msg3);

try{
	msg3 = "i am const changed";
}catch(err){
	console.log("********",err.toString(),"*********");
}

msg2 = "i am let changed";
console.log(msg2,msg3);

var n = 12;
var nn = "12";
var b = false;
var bb = "false";
console.log(typeof n,typeof nn,typeof b,typeof bb);


function add(a, b = 1) { 
   return a+b; 
} 
console.log(add(4),add(4,6))


function rest_params(...params){
	console.log(params);
	console.log(arguments);
	console.log("--------"+ params == arguments);
}

rest_params(1,2);
rest_params(1,2,3);


var func = new Function("x", "y","z", "return x*y*z;"); 
console.log(func(2,3,4));

(function(p) { 
   var msg = "Hello anonymous function,"+p; 
   console.log(msg)
})("I'm params");


var lambda_func = (msg) => console.log("I am lambda function:"+msg);
lambda_func("OK");

// Generator function (yield)
function* rainbow() { 
   // the asterisk marks this as a generator 
   yield 'red'; 
   yield 'orange'; 
   yield 'yellow'; 
   yield 'green'; 
   yield 'blue'; 
   yield 'indigo'; 
   yield 'violet'; 
} 
for(let color of rainbow()) { 
   console.log(color); 
} 

function* ask() { 
   const name = yield "What is your name?"; 
   const sport = yield "What is your favorite sport?"; 
   return `${name}'s favorite sport is ${sport}`; 
}  
const it = ask(); 
console.log(it.next()); 
console.log(it.next('Ethan'));  
console.log(it.next('Cricket')); 

var foo = 'baray' 
var baz = { foo } 
console.log(baz.foo)


var myCar = new Object()  
var propertyName = "make"; 
myCar[propertyName] = "Ford"; 
console.log(myCar.make,myCar["make"]);

var roles = { 
   type: "Admin", // Default value of properties 
   displayType : function() {  
      // Method which will display type of role 
      console.log(this.type); 
   } 
}  
// Create new role type called super_role 
var super_role = Object.create(roles); 
super_role.displayType();  

// Create new role type called Guest 
var guest_role = Object.create(roles); 
guest_role.type = "Guest"; 
guest_role.displayType(); 

var third_role = Object.create(roles);
third_role.displayType();

console.log(1,roles);
console.log(2,super_role);
console.log(3,guest_role);

// assign(target,...source)
var det = { name:"Tom", ID:"E1001" }; 
var copy = Object.assign({}, det); 
console.log(copy);  
for (let val in copy) { 
   console.log(copy[val]) 
}

// merge objects
var o1 = { a: 10 }; 
var o2 = { b: 20 }; 
var o3 = { c: 30 }; 
var obj = Object.assign(o1,o2, o3); 
console.log("obj:",obj);  
console.log("o1:",o1);

//note
var o1 = { a: 10 }; 
var obj = Object.assign(o1); 
obj.a++ ;
console.log("Value of 'a' in the Merged object after increment  ") 
console.log(obj.a);  // 11
console.log("value of 'a' in the Original Object after increment ") 
console.log(o1.a);   //11

//object de-structuring
var emp = { name: 'John', Id: 3 } 
var {name, Id} = emp 
console.log(name) 
console.log(Id)

//find() in ES6  and  filter() in ES5 
var numbers = [1, 2, 3]; 
var oddNumber = numbers.find((x) => x % 2 == 1); 
console.log(oddNumber); // 1
var evenNum = numbers.filter((x) => x%2 == 0);
console.log(evenNum);   // [2]

//Array.from()
var name = "Abduwaly";
console.log(Array.from(name));

//multi-dimentional array
var multi = [[1,2,3],[23,24,25]]  
console.log(multi[0][0]) 
console.log(multi[0][1]) 
console.log(multi[0][2]) 
console.log(multi[1][0]) 
console.log(multi[1][1]) 
console.log(multi[1][2])  


//Array De-structuring

var arr = [12,13] 
var[x,y] = arr 
console.log(x) 
console.log(y)


