// Hey You !
//     Sort these integers for me ...
//
// By name ...
//
// Do it now !
//
//     Input
// Range is 0-999
//
// There may be duplicates
//
// The array may be empty
//
// Example
// Input: 1, 2, 3, 4
// Equivalent names: "one", "two", "three", "four"
// Sorted by name: "four", "one", "three", "two"
// Output: 4, 1, 3, 2
// Notes
// Don't pack words together:
// e.g. 99 may be "ninety nine" or "ninety-nine"; but not "ninetynine"
// e.g 101 may be "one hundred one" or "one hundred and one"; but not "onehundredone"
// Don't fret about formatting rules, because if rules are consistently applied it has no effect anyway:
// e.g. "one hundred one", "one hundred two"; is same order as "one hundred and one", "one hundred and two"
// e.g. "ninety eight", "ninety nine"; is same order as "ninety-eight", "ninety-nine"

// Функция для преобразования числа в его строковое представление
function numberToWords(num) {
    const ones = [
        "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
    ];
    const teens = [
        "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];
    const tens = [
        "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];
    const hundreds = "hundred";

    if (num === 0) return "zero";

    let words = "";

    // Сотни
    if (Math.floor(num / 100) > 0) {
        words += ones[Math.floor(num / 100)] + " " + hundreds;
        num %= 100;
        if (num > 0) words += " ";
    }

    // От 10 до 19
    if (num >= 10 && num < 20) {
        words += teens[num - 10];
        return words;
    }

    // Десятки
    if (num >= 20) {
        words += tens[Math.floor(num / 10)];
        num %= 10;
        if (num > 0) words += " ";
    }

    // Единицы
    if (num > 0) {
        words += ones[num];
    }

    return words.trim();
}

// Основная функция для сортировки чисел по названиям
function sortByName(arr) {
    return arr
        .map(num => ({ num, name: numberToWords(num) })) // Преобразуем числа в объекты с названиями
        .sort((a, b) => a.name.localeCompare(b.name))    // Сортируем по строковым названиям
        .map(obj => obj.num);                            // Возвращаем только числа
}

// Пример использования
const input = [1, 2, 3, 4];
const output = sortByName(input);
console.log(output); // [4, 1, 3, 2]
