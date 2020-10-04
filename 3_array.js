let arr = [1, 2, 3, 4]

arr.push(5)

console.log(arr)

arr.shift()

arr.pop()

console.log(arr)


let additionalNumbers = [90, 120, 130, 72]

let second = [...arr, -3, -15, 1, ...additionalNumbers]

console.log(second)

console.log(second.sort())

console.log(second.sort((a,b)=>a-b))



let positiveArray = second.filter(a=>a>=0)
console.log(positiveArray)


let summation = positiveArray.reduce((sum, curr)=>sum+curr, 0)
console.log(summation)