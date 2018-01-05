//1. apply调用初始化方法

function Me(name,age){
	this.name = name;
	this.age = age;
	// apply的意思就是将Me的init方法在‘this’对象上调用，并且参数为arguments数组
	this.init.apply(this,arguments); 
}
Me.prototype.init = function(name,age,gender){
	this.gender = gender;
}
var me = new Me("AAA",12,"F");
console.log(me.name,me.age,me.gender); //这三个都正常打印出来

//2. 用call  （效果与apply一样，但是call的参数需要一个一个的列出来，不能像apply一样传个参数数组）

function Me(name,age){
	this.name = name;
	this.age = age;
	//将apply换成call	
	this.init.call(this,age,name);
}
Me.prototype.init = function(name,age,gender){
	this.gender = gender;
}
var me = new Me(55,"BBB","M");  //注意顺序，与Me的构造函数不一致
console.log(me);


//3. apply机智的用法  (apply会自行解析arguments数组，恰好利用这一点)
/**
 * 	a) Math.max 可以实现得到数组中最大的一项  
 *	因为Math.max 参数里面不支持Math.max([param1,param2]) 也就是数组  
 *	但是它支持Math.max(param1,param2,param3…),所以可以根据刚才apply的那个特点来解决 
*/

var max=Math.max.apply(null,array); //这样轻易的可以得到一个数组中最大的一项    

/**
 *	b)Array.prototype.push 可以实现两个数组合并    
 *	同样push方法没有提供push一个数组,但是它提供了push(param1,param,…paramN)
 *	所以同样也可以通过apply来装换一下这个数组
*/
  
vararr1=new Array("1","2","3");   
vararr2=new Array("4","5","6");   
Array.prototype.push.apply(arr1,arr2);   


