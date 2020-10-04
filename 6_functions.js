// Function Declaration
// 3 differenct ways

// Normal function declaration
function sayHi(name) {
    console.log(`Hey, ${name}`)
}

// Use a variable to hold a function
let add = function(num1, num2)
{
    return num1 + num2
}

// Use a variable with an anonymous function
let print = (str) => {console.log(str)} 

// Example 1
print(add(2, 5))

// Example 2
sayHi(add('John', 'athan'))





// Example Function
function printAllElements(arr)
{
    for (let ele in arr) {
        console.log(ele)
    }
}
