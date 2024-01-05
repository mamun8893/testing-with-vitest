export function add(numbers) {
    let sumNumber = 0;
    for(const number of numbers) {
        sumNumber += number;
    }
    return sumNumber;
}