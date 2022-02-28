let result = document.getElementById('result')
let val = Number(result.value)
let mem = 0
let flg = false
let sym

function num(btn) {
	if (result.value == 0) {
		result.value = btn.value
		console.log('1')
	} else if (flg == true) {
		result.value = btn.value
		flg = false
		console.log('2')
	} else {
		result.value += btn.value
		console.log('3')
	}
}

function ac() {
	flg = false
	if (result.value == 0) {
		mem = 0
	}
	result.value = 0
}

function plus() {
	mem += Number(result.value)
	console.log(mem)
	flg = true
	sym = 'plus'
}

function equal() {
	if (sym == 'plus') {
		mem += Number(result.value)
		result.value = mem
		console.log('plus')
	} else {
		result.value = mem
	}
	console.log(mem)
}

// イコールの処理が最後に入力した数字がどっか行ってる