
const grid = document.querySelector('.grid')
for(let i = 1; i < 10; i++){
	var square = document.createElement('div')
	square.setAttribute('class', 'square')
	square.setAttribute('id', i)
	grid.append(square)
}

const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time')
let score = document.querySelector('#score')
let timerId = null
let modalBtn = document.getElementById("modal-btn")


modalBtn.onclick = function(){
  	moveMole()
	let timerId = setInterval(countDown, 1000)
}

let result = 0
let currentTime = document.getElementById('time')

function randomSquare(){
	squares.forEach(className => {
		className.classList.remove('mole')
	})

	position = Math.floor(Math.random()*9)
	let randomPosition = squares[position]
	randomPosition.classList.add('mole')  

	//assign the id of the random position to hitPosition to use later
	hitPosition = randomPosition.id
}

squares.forEach(id => {
	id.addEventListener('mouseup', () => {
		if (id.id === hitPosition){
			result += 1
			score.textContent = result
			hitPosition = null
		}
	})
})

function moveMole(){
	let timer = null
	timer = setInterval(randomSquare, 500)
}

function countDown(){
	if(currentTime === 0){
		score.textContent = 0
		timeLeft.textContent = 60
		currentTime = 60
		clearInterval(timerId)
		alert('Game over! Your score is ' + result)
	}

	if(currentTime >= 1){
		currentTime--
		timeLeft.textContent = currentTime
	}

}

