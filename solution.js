let food = [
    {
        item: 'tomatoes',
        amount: 0.25,
        price: 0.86
    },{
        item: 'milk',
        amount: 0.00,
        price: 5.86
    },{
        item: 'eggs',
        amount: 0.51,
        price: 3.00
    },{
        item: 'bread',
        amount: 0.49,
        price: 4.25
    },{
        item: 'asparagus',
        amount: 0.80,
        price: 3.50
    },{
        item: 'broccoli',
        amount: 0.1,
        price: 2.35
    },{
        item: 'mangoes',
        amount: 0.5,
        price: 2.50
    }
]

let cash = 4

/**
 * @summary Looks in fridge and generates shopping list based on items with < 0.5 as amount
 * @param {Array<any>} foodInFridge
 * @returns {Array<any>} shoppingList
 */
function checkFridge(foodInFridge) {
    let output = []

    for (const item of foodInFridge) {
        if(item.amount < 0.5)
        {
            output.push(item)
        }
    }

    return output
}

/**
 * @summary Goes through shopping list and buys each item subtracting from cash
 * @param {Array<any>} shoppingList 
 * @param {number} cash 
 * @returns {number} amount of cash left (can be negative)
 */
function goShopping(shoppingList, cash){

    shoppingList.forEach(item => {
        cash -= item.price
    })

    return cash
}


function checkFridgeDeclarative(foodInFridge) {
    return foodInFridge.filter(item => item.amount<0.5)
}

function goShoppingDeclarative(shoppingList, cash){
    return shoppingList.reduce((money, item)=>money-item.price, cash)
}




//? Code Below Runs to Test

let shoppingList = checkFridge(food)
console.log(shoppingList)

let cashLeft = goShopping(shoppingList, cash)

console.log(cashLeft)