// console.log("Hello World");
// const fs =require('fs');
// fs.writeFileSync('hello.txt','hello from Node.js');

// var productofnumber= (a,b)=>{
//     return a*b;
// }
// console.log(productofnumber(3,4));

// const obj= {
//     name:'Aakriti',
//     age:'23',
//     enjoy(){
//     console.log( this.name);
//     }
// };
// obj.enjoy();

// class Student
// {
//   constructor(name,age,marks)
//   {
//     this.name=name;
//     this.age=age;
//     this.marks=marks;
//   }
//   setPlacement(MinMarks)
//   {

//     return (MinAge)=>{
    
//     if(this.marks>MinMarks && this.age>MinAge )
//     {
//         console.log(this.name+'ready for placement');
//     }
//     else
//     {
//       console.log(ths.name+'not ready for placement');
//     }
//   }
// }
// }
// const yash=new Student('yash',24,85)
// yash.setPlacement(40)(18);


// const fruits=['orange','apples','','mango','','lemon']
//   console.log(fruits.map(fruit=>{ if(fruit=='')
//  return 'empty string'
// else{
//   return fruit
// }}))


// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// 	const { key1, key3}  = { ...obj1}

	

// 	console.log(key1, key3)

  // const arr1 = ['value1', 'value2']

	// const [ val1, val2 ] = arr1



	// console.log(val1)

	// console.log(val2)

  // const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

	// let { key1, key3}  = obj1

	

	// key1 = 20;

	// key3 = 123

	// console.log(obj1.key1, obj1.key3)

// const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }



//  const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}



// // console.log(obj1)

// // console.log(obj2)

// coonsle.log('a');

// console.log('b');

// const fetchData=callback=>{
// 	callback('d');
// }

// 	setTimeout(()=>{
// 	console.log('c');
// 	fetchData(text=>{
// 		console.log(text)
// 	})
// },2000)


// console.log('a');
// console.log('b')
// const fetchData1=()=>{
// 	const promise =new Promise((resolve,reject)=>{
// 		resolve('d');
// 	})
// 	return promise;
// }

// const fetchData2=()=>{
// 	const promise2 =new Promise((resolve,reject)=>{
// 		resolve('e');
// 	})
// 	return promise2;
// }

// setTimeout (()=>{
// 	console.log('c');
// 	fetchData1().then(text=>{
// 		console.log(text);
// 		return fetchData2()
// 	})

// 	.then(text2=>
// 		console.log(text2));
// },2000)

