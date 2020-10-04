const title = document.getElementById("topMain")

title.style.color = 'red'

const makeBig = document.getElementsByClassName('large')

Array.from(makeBig).forEach(ele=>ele.style['font-size']='60px')

const subTitle = document.getElementById('subMain')

subTitle.style.display = 'none'