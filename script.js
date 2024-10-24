const plus = (A, B) => A + B
const minus = (A, B) => A - B
const umnojenie = (A, B) => A * B
const delenie = (A, B) => A / B

let s = ""
let oper = ''
document.querySelectorAll('button').forEach(el => {
    el.addEventListener('click', () => {
        if (el.innerHTML == '+' || el.innerHTML == '-' || el.innerHTML == '*' || el.innerHTML == '/') {
            oper = el.innerHTML
        }
        s = s + el.innerHTML
        document.getElementById('ekran').innerHTML = s
    })
})

document.getElementById('eqyal').addEventListener('click', () => {
    let numbers = s.replace('=', '').split(oper)
    if (oper == '+' && plus(+numbers[0], +numbers[1]) != NaN) {
        document.getElementById('ekran').innerHTML = plus(+numbers[0], +numbers[1])
    }
    else if (oper == '-' && minus(+numbers[0], +numbers[1]) != NaN) {
        document.getElementById('ekran').innerHTML = minus(+numbers[0], +numbers[1])
    }
    else if (oper == '*' && umnojenie(+numbers[0], +numbers[1]) != NaN) {
        document.getElementById('ekran').innerHTML = umnojenie(+numbers[0], +numbers[1])
    }
    else if (oper == '/' && delenie(+numbers[0], +numbers[1]) != NaN) {
        document.getElementById('ekran').innerHTML = delenie(+numbers[0], +numbers[1])
    }
    if (isNaN(plus(+numbers[0], +numbers[1])) ||
        isNaN(minus(+numbers[0], +numbers[1])) ||
        isNaN(umnojenie(+numbers[0], +numbers[1])) ||
        isNaN(delenie(+numbers[0], +numbers[1]))) {
        s = '';
        document.getElementById('ekran').innerHTML = s;
        document.getElementById('ekran').innerHTML = "Правильно пишите задачу!";
    }
    s = '';
})

document.getElementById('delete').addEventListener('click', () => {
    s = '';
    document.getElementById('ekran').innerHTML = s;
})