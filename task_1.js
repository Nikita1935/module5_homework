/*
Задание 1.

Напишите программу, которая работала бы следующим образом: 
в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, 
затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».

*/

let value = +prompt('Введите значение');
if (typeof value === 'number' && !isNaN(value)) {
    if (value % 2 === 0) {
        console.log(value + " является четным числом")
    } else {
        console.log(value + " является нечетным числом")
    }
} else {
    console.log('Упс, кажется, вы ошиблись')
}