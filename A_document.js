const count = document.getElementById('count')
const counterText = document.getElementById('counter')
const countUp = document.getElementById('add1')
const countDown = document.getElementById('sub1')

countUp.addEventListener('click', ()=>{
    let number = parseInt(count.innerHTML)
    number += 1

    count.innerHTML = number.toString()
})

countDown.addEventListener('click', ()=>{
    let number = parseInt(count.innerHTML)
    number -= 1

    count.innerHTML = number.toString()
})

counterText.addEventListener('mouseover', (e) => {
    e.target.style.color = 'red'
})

counterText.addEventListener('mouseleave', (e) => {
    e.target.style.color = 'black'
})
