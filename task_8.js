/*

Задание 8.

Создайте произвольный массив Map. 
Получите его ключи и выведите в консоль все значения 
в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.

*/

let myMap = new Map();
myMap.set('Moscow', 'Russia');
myMap.set('Roma', 'Italy');
myMap.set('Madrid', 'Spain');

for (let places of myMap.keys()) {
    console.log('Ключ -', places)
}
for (let places of myMap.values()) {
    console.log('значение -', places)
}