// Array of objects
var objArr = [
	{
		name: 'john',
		age: 12,
		gender: 'male'
	},
	{
		name: 'jane',
		age: 15,
		gender: 'female'
	}
	
];

console.log("Accessing the values using the for..in loop:")
for (var key in objArr) {

	// Console logs all the values in the objArr Array:
	console.log(objArr[key]);
}
