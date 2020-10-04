
function countUp(array) {

    sum = 0

    for(var i = 0; i < array.length; i++)
    {
        sum += array[i]
    }

    console.log(`${sum} in ${i} elements`)
}

let nums = [1, 2, 3, 4, 5]

countUp(nums)

function countUpLet(array) {

    sum = 0

    for(let i = 0; i < array.length; i++)
    {
        sum += array[i]
    }

    console.log(`${sum} in ${i} elements`)
}

countUpLet(nums)