let arr = []; // создаем массив

function addNumber() {
    let len = Number(prompt('Введите длинну массива'));
    for(let i=0; i < len; i++) {
       arr[i] = Number(prompt('Введите число №'+i));
        document.getElementById("array").innerHTML = arr.join(',');
    }
    console.log(arr); // Выводим массив целиком
}

function myPoints() {
    arr.sort(function(a, b){return a - b});
    document.getElementById("array").innerHTML = arr.join(',');
}
function myPointsBlock() {
    const removed = arr.splice(2,3);
    document.getElementById("array").innerHTML = arr.join(',');
    document.getElementById("removed").innerHTML = removed;

    console.log(removed);

}
