//Завдання 6.

//Виведіть на екран всі числа в послідовності 2a-1(крок зміни лічильника),
//де початкове значення a = 2 та які менше 10000.

for(let a=2; a<10000; a=2*a-1){
    document.write(`<h2>Завдання 6 ${a}<h2/>`);
}