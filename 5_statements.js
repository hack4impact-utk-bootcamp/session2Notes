// For Loops

let array = [128, 'Kitchen', null, 3.1425, false]

let obj = {
    Person: 'Me',
    Age: 20,
    Class: 'Junior'
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

for (const item of array) {
    console.log(item)
}

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`)
}

let i = 0
while (i < 15) {
    console.log(i)
    i++
}

let mode = 'park'
switch (mode) {
    case 'park':
        console.log('I am parked')
        break;
    case 'drive':
        console.log('I am driving')
    default:
        console.log('idk')
        break;
}